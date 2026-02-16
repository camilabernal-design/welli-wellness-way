import { useState } from "react";
import { ArrowRight, Plus, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface ModuleProps {
  onComplete: () => void;
}

interface TeamMember {
  id: string;
  name: string;
  email: string;
  phone: string;
}

interface RoleData {
  members: TeamMember[];
}

interface FormData {
  clinicName: string;      // nombre_sede
  accountManager: string;  // farmer
  doctor: RoleData;
  admin: RoleData;
  finance: RoleData;
  marketing: RoleData;
}

const HUBSPOT_PORTAL_ID = "50421361";
const HUBSPOT_FORM_ID = "97fe3f2f-3c37-4ffb-903f-93e03d86e396";

const createNewMember = (): TeamMember => ({
  id: crypto.randomUUID(),
  name: "",
  email: "",
  phone: "",
});

const roles = [
  { key: "doctor", title: "Doctor/Especialista", icon: "👨‍⚕️" },
  { key: "admin", title: "Personal Administrativo", icon: "📋" },
  { key: "finance", title: "Personal de Finanzas", icon: "💰" },
  { key: "marketing", title: "Área de Marketing", icon: "📱" },
] as const;

type RoleKey = "doctor" | "admin" | "finance" | "marketing";

const ModuleTeamRegistration = ({ onComplete }: ModuleProps) => {
  const [formData, setFormData] = useState<FormData>({
    clinicName: "",
    accountManager: "",
    doctor: { members: [createNewMember()] },
    admin: { members: [createNewMember()] },
    finance: { members: [createNewMember()] },
    marketing: { members: [createNewMember()] },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRoles, setSubmittedRoles] = useState<string[]>([]);

  const handleChange = (
    role: RoleKey,
    memberId: string,
    field: keyof Omit<TeamMember, "id">,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [role]: {
        members: prev[role].members.map((m) =>
          m.id === memberId ? { ...m, [field]: value } : m
        ),
      },
    }));
  };

  const addMember = (role: RoleKey) => {
    setFormData((prev) => ({
      ...prev,
      [role]: {
        members: [...prev[role].members, createNewMember()],
      },
    }));
  };

  const removeMember = (role: RoleKey, memberId: string) => {
    setFormData((prev) => ({
      ...prev,
      [role]: {
        members: prev[role].members.filter((m) => m.id !== memberId),
      },
    }));
  };

  const handleRoleSubmit = async (roleKey: RoleKey) => {
    if (!formData.clinicName) {
      toast.error("Ingresa el nombre de la sede primero");
      return;
    }

    const validMembers = formData[roleKey].members.filter(
      (m) => m.name.trim() && m.email.trim()
    );

    if (validMembers.length === 0) {
      toast.error("Agrega al menos un miembro válido");
      return;
    }

    setIsSubmitting(true);

    try {
      for (const member of validMembers) {
        const nameParts = member.name.trim().split(" ");
        const firstname = nameParts[0];
        const lastname = nameParts.slice(1).join(" ") || "-";

        const fields = [
          { name: "nombre_sede", value: formData.clinicName },
          { name: "farmer", value: formData.accountManager || "" },
          { name: "firstname", value: firstname },
          { name: "lastname", value: lastname },
          { name: "email", value: member.email },
          { name: "hs_whatsapp_phone_number", value: member.phone || "" },
          { name: "jobtitle", value: roleKey },
        ].filter((field) => field.value !== "");

        const response = await fetch(
          `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              fields,
              context: {
                pageUri: window.location.href,
                pageName: "Registro Equipo Clínica",
              },
            }),
          }
        );

        if (!response.ok) {
          const errorText = await response.text();
          console.error("HubSpot RAW ERROR:", errorText);
          throw new Error(errorText);
        }
      }

      setSubmittedRoles((prev) => [...prev, roleKey]);
      toast.success("Información enviada correctamente 🚀");
    } catch (error) {
      toast.error("Error enviando datos a HubSpot");
    }

    setIsSubmitting(false);
  };

  const isRoleValid = (role: RoleKey) =>
    formData[role].members.some((m) => m.name && m.email);

  return (
    <div className="module-container">
      <div className="max-w-4xl mx-auto">

        {/* Datos Clínica */}
        <div className="card-elevated p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label>Nombre de la sede *</Label>
              <Input
                value={formData.clinicName}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    clinicName: e.target.value,
                  }))
                }
              />
            </div>

            <div>
              <Label>Gerente de cuenta Welli</Label>
              <Input
                value={formData.accountManager}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    accountManager: e.target.value,
                  }))
                }
              />
            </div>
          </div>
        </div>

        {/* Roles */}
        <div className="space-y-6">
          {roles.map((role) => {
            const isSubmitted = submittedRoles.includes(role.key);

            return (
              <div key={role.key} className="card-elevated p-6">
                <h3 className="font-bold mb-4">
                  {role.icon} {role.title}
                </h3>

                {formData[role.key].members.map((member) => (
                  <div key={member.id} className="grid md:grid-cols-4 gap-4 mb-4">
                    <Input
                      placeholder="Nombre"
                      value={member.name}
                      onChange={(e) =>
                        handleChange(role.key, member.id, "name", e.target.value)
                      }
                    />
                    <Input
                      placeholder="Correo"
                      value={member.email}
                      onChange={(e) =>
                        handleChange(role.key, member.id, "email", e.target.value)
                      }
                    />
                    <Input
                      placeholder="WhatsApp"
                      value={member.phone}
                      onChange={(e) =>
                        handleChange(role.key, member.id, "phone", e.target.value)
                      }
                    />

                    {!isSubmitted && (
                      <button
                        onClick={() =>
                          removeMember(role.key, member.id)
                        }
                      >
                        <Trash2 size={18} />
                      </button>
                    )}
                  </div>
                ))}

                {!isSubmitted && (
                  <>
                    <button onClick={() => addMember(role.key)}>
                      <Plus size={16} /> Agregar
                    </button>

                    <div className="mt-4">
                      <button
                        onClick={() => handleRoleSubmit(role.key)}
                        disabled={!isRoleValid(role.key) || isSubmitting}
                        className="btn-welli"
                      >
                        {isSubmitting ? "Enviando..." : "Enviar"}
                      </button>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <button onClick={onComplete} className="btn-welli">
            Continuar <ArrowRight className="inline ml-2" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModuleTeamRegistration;
