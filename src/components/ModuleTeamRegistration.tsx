import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, ArrowRight, CheckCircle2, UserPlus, Plus, Trash2, Building2 } from "lucide-react";
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
  doctor: RoleData;
  admin: RoleData;
  finance: RoleData;
  marketing: RoleData;
}

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

const ModuleTeamRegistration = ({ onComplete }: ModuleProps) => {
  const [formData, setFormData] = useState<FormData>({
    doctor: { members: [createNewMember()] },
    admin: { members: [createNewMember()] },
    finance: { members: [createNewMember()] },
    marketing: { members: [createNewMember()] },
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRoles, setSubmittedRoles] = useState<string[]>([]);

  const handleChange = (role: keyof FormData, memberId: string, field: keyof Omit<TeamMember, 'id'>, value: string) => {
    setFormData(prev => ({
      ...prev,
      [role]: {
        members: prev[role].members.map(m => 
          m.id === memberId ? { ...m, [field]: value } : m
        ),
      },
    }));
  };

  const addMember = (role: keyof FormData) => {
    setFormData(prev => ({
      ...prev,
      [role]: {
        members: [...prev[role].members, createNewMember()],
      },
    }));
  };

  const removeMember = (role: keyof FormData, memberId: string) => {
    setFormData(prev => ({
      ...prev,
      [role]: {
        members: prev[role].members.filter(m => m.id !== memberId),
      },
    }));
  };

  const handleRoleSubmit = async (roleKey: string) => {
    setIsSubmitting(true);
    
    // Simulate API call - In production, this would send to HubSpot
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmittedRoles(prev => [...prev, roleKey]);
    toast.success(`¡Datos de ${roles.find(r => r.key === roleKey)?.title} registrados!`);
  };

  const isRoleValid = (role: keyof FormData) => {
    return formData[role].members.some(m => m.name && m.email);
  };

  return (
    <div className="module-container">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-welli-yellow/20 text-foreground mb-6">
            <Building2 className="w-4 h-4 text-welli-yellow" />
            <span className="text-sm font-medium">Registro de Clínica</span>
          </div>
          <h2 className="section-title">Ingresa los datos de tu clínica</h2>
          <p className="section-subtitle max-w-2xl mx-auto mt-4">
            Registra a tu equipo para recibir información personalizada y soporte prioritario.
            <span className="font-medium text-foreground"> Puedes agregar múltiples personas por área.</span>
          </p>
        </motion.div>

        {/* Form by Role */}
        <div className="space-y-6 mb-10">
          {roles.map((role, index) => {
            const isSubmitted = submittedRoles.includes(role.key);
            
            return (
              <motion.div
                key={role.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className={`card-elevated p-6 ${isSubmitted ? 'border-2 border-success/40' : ''}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{role.icon}</span>
                    <h3 className="font-bold text-lg">{role.title}</h3>
                    {isSubmitted && (
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-success/10 text-success text-xs font-medium">
                        <CheckCircle2 className="w-3 h-3" />
                        Enviado
                      </span>
                    )}
                  </div>
                  {!isSubmitted && (
                    <button
                      type="button"
                      onClick={() => addMember(role.key)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                      Agregar persona
                    </button>
                  )}
                </div>

                <AnimatePresence>
                  {formData[role.key].members.map((member, memberIndex) => (
                    <motion.div
                      key={member.id}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mb-4 last:mb-0"
                    >
                      {memberIndex > 0 && <div className="border-t border-border my-4" />}
                      
                      <div className="grid md:grid-cols-4 gap-4 items-end">
                        <div className="md:col-span-1">
                          <Label className="text-sm font-medium">Nombre</Label>
                          <Input
                            type="text"
                            placeholder="Juan Pérez"
                            value={member.name}
                            onChange={(e) => handleChange(role.key, member.id, "name", e.target.value)}
                            className="mt-1"
                            disabled={isSubmitted}
                          />
                        </div>
                        <div className="md:col-span-1">
                          <Label className="text-sm font-medium">Correo</Label>
                          <Input
                            type="email"
                            placeholder="correo@clinica.com"
                            value={member.email}
                            onChange={(e) => handleChange(role.key, member.id, "email", e.target.value)}
                            className="mt-1"
                            disabled={isSubmitted}
                          />
                        </div>
                        <div className="md:col-span-1">
                          <Label className="text-sm font-medium">Teléfono</Label>
                          <Input
                            type="tel"
                            placeholder="+57 300 123 4567"
                            value={member.phone}
                            onChange={(e) => handleChange(role.key, member.id, "phone", e.target.value)}
                            className="mt-1"
                            disabled={isSubmitted}
                          />
                        </div>
                        <div className="md:col-span-1 flex gap-2">
                          {formData[role.key].members.length > 1 && !isSubmitted && (
                            <button
                              type="button"
                              onClick={() => removeMember(role.key, member.id)}
                              className="p-2 rounded-lg text-danger hover:bg-danger/10 transition-colors"
                              title="Eliminar"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {!isSubmitted && (
                  <div className="mt-6 flex justify-end">
                    <button
                      type="button"
                      onClick={() => handleRoleSubmit(role.key)}
                      disabled={!isRoleValid(role.key) || isSubmitting}
                      className="px-4 py-2 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin">⏳</span>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <CheckCircle2 className="w-4 h-4" />
                          Enviar {role.title}
                        </>
                      )}
                    </button>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Progress */}
        {submittedRoles.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-6"
          >
            <p className="text-muted-foreground">
              Roles enviados: <span className="font-bold text-success">{submittedRoles.length}</span> / {roles.length}
            </p>
          </motion.div>
        )}

        {/* CTA - Always enabled */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center"
        >
          <button
            onClick={onComplete}
            className="btn-welli group inline-flex items-center gap-3 text-lg"
          >
            <span>Continuar</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
          {submittedRoles.length === 0 && (
            <p className="text-xs text-muted-foreground mt-3">
              Puedes continuar ahora y completar el registro después
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ModuleTeamRegistration;
