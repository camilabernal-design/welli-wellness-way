import { useState } from "react";
import { motion } from "framer-motion";
import { Users, ArrowRight, CheckCircle2, UserPlus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface ModuleProps {
  onComplete: () => void;
}

interface TeamMember {
  name: string;
  email: string;
  phone: string;
}

interface FormData {
  doctor: TeamMember;
  admin: TeamMember;
  finance: TeamMember;
  marketing: TeamMember;
}

const initialTeamMember: TeamMember = { name: "", email: "", phone: "" };

const roles = [
  { key: "doctor", title: "Doctor/Especialista", icon: "👨‍⚕️" },
  { key: "admin", title: "Personal Administrativo", icon: "📋" },
  { key: "finance", title: "Personal de Finanzas", icon: "💰" },
  { key: "marketing", title: "Área de Marketing", icon: "📱" },
] as const;

const ModuleTeamRegistration = ({ onComplete }: ModuleProps) => {
  const [formData, setFormData] = useState<FormData>({
    doctor: { ...initialTeamMember },
    admin: { ...initialTeamMember },
    finance: { ...initialTeamMember },
    marketing: { ...initialTeamMember },
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (role: keyof FormData, field: keyof TeamMember, value: string) => {
    setFormData(prev => ({
      ...prev,
      [role]: {
        ...prev[role],
        [field]: value,
      },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call - In production, this would send to HubSpot
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);
    toast.success("¡Datos registrados exitosamente!", {
      description: "Nos pondremos en contacto contigo pronto.",
    });
  };

  const isFormValid = () => {
    return roles.some(role => {
      const member = formData[role.key];
      return member.name && member.email;
    });
  };

  if (submitted) {
    return (
      <div className="module-container">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="card-elevated p-12 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-20 h-20 mx-auto rounded-full bg-success/10 flex items-center justify-center mb-6"
            >
              <CheckCircle2 className="w-10 h-10 text-success" />
            </motion.div>
            <h2 className="text-2xl font-bold mb-4">¡Registro Completado!</h2>
            <p className="text-muted-foreground mb-8">
              Hemos recibido los datos de tu equipo. Un representante de Welli se pondrá en contacto contigo pronto.
            </p>
            <button
              onClick={onComplete}
              className="btn-welli group inline-flex items-center gap-3"
            >
              <span>Continuar a la Certificación</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <UserPlus className="w-4 h-4" />
            <span className="text-sm font-medium">Registro de Equipo</span>
          </div>
          <h2 className="section-title">Actualiza los datos de tu clínica</h2>
          <p className="section-subtitle max-w-2xl mx-auto mt-4">
            Registra a tu equipo para recibir información personalizada y soporte prioritario
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {roles.map((role, index) => (
            <motion.div
              key={role.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="card-elevated p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{role.icon}</span>
                <h3 className="font-bold text-lg">{role.title}</h3>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor={`${role.key}-name`} className="text-sm font-medium">
                    Nombre completo
                  </Label>
                  <Input
                    id={`${role.key}-name`}
                    type="text"
                    placeholder="Juan Pérez"
                    value={formData[role.key].name}
                    onChange={(e) => handleChange(role.key, "name", e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor={`${role.key}-email`} className="text-sm font-medium">
                    Correo electrónico
                  </Label>
                  <Input
                    id={`${role.key}-email`}
                    type="email"
                    placeholder="correo@clinica.com"
                    value={formData[role.key].email}
                    onChange={(e) => handleChange(role.key, "email", e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor={`${role.key}-phone`} className="text-sm font-medium">
                    Teléfono
                  </Label>
                  <Input
                    id={`${role.key}-phone`}
                    type="tel"
                    placeholder="+57 300 123 4567"
                    value={formData[role.key].phone}
                    onChange={(e) => handleChange(role.key, "phone", e.target.value)}
                    className="mt-1"
                  />
                </div>
              </div>
            </motion.div>
          ))}

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-center pt-4"
          >
            <button
              type="submit"
              disabled={!isFormValid() || isSubmitting}
              className="btn-welli group inline-flex items-center gap-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin">⏳</span>
                  <span>Enviando...</span>
                </>
              ) : (
                <>
                  <Users className="w-5 h-5" />
                  <span>Registrar Equipo</span>
                </>
              )}
            </button>
            <p className="text-sm text-muted-foreground mt-4">
              Solo necesitas llenar al menos un rol para continuar
            </p>
          </motion.div>
        </motion.form>
      </div>
    </div>
  );
};

export default ModuleTeamRegistration;