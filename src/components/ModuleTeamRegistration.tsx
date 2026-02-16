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
  nit: string;
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
    nit: "",
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
    if (!formData.nit.trim()) {
      toast.error("Ingresa el NIT primero");
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
          { name: "nit", value: Number(formData.nit) },
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

        {/* BLOQUE NIT */}
        <div className="card-elevated p-8 mb-10 border border-gray-100">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold mb-2">
              🏥 Registro de Clínica
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Ingresa el NIT de la clínica para asociar correctamente el equipo.
            </p>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">
                NIT *
              </Label>

              <Input
                type="number"
                inputMode="numeric"
                placeholder="Ej: 900123456"
                className="h-12 text-lg rounded-xl border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                value={formData.nit}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    nit: e.target.value,
                  }))
                }
              />
            </div>
          </div>
        </div>

        {/* ROLES */}
        <div className="space-y-6">
          {roles.map((role) => {
            const isSubmitted = submittedRoles.includes(role.key);

            return (
              <div key={role.key} className="card-elevated p-6">
                <h3 className="font-bold mb-4">
                  {role.icon} {role.title}
                </h3>

                {formData[role.key].members.map((member) => (
                  <div key={member.id} className="grid md:grid-cols-4 gap-4 mb-4 items-center">
                    <Input
                      placeholder="Nombre completo"
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
                        className="text-gray-400 hover:text-red-500 transition"
                      >
                        <Trash2 size={18} />
                      </button>
                    )}
                  </div>
                ))}

                {!isSubmitted && (
                  <>
                    <button
                      onClick={() => addMember(role.key)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 hover:border-primary hover:bg-primary/5 text-sm font-medium transition-all duration-200"
                    >
                      <Plus size={16} />
                      Agregar miembro
                    </button>

                    <div className="mt-4">
                      <button
                        onClick={() => handleRoleSubmit(role.key)}
                        disabled={!isRoleValid(role.key) || isSubmitting}
                        className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-primary text-white font-medium hover:opacity-90 transition-all disabled:opacity-50"
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
          <button
            onClick={onComplete}
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-white font-medium hover:opacity-90 transition-all"
          >
            Continuar
            <ArrowRight className="inline ml-2" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModuleTeamRegistration;
