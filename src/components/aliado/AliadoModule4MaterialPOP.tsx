import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Download, Image, FileText } from "lucide-react";

// Import POP images
import bolsaImg from "@/assets/pop/bolsa.png";
import habladorImg from "@/assets/pop/hablador.png";
import rompetraficoImg from "@/assets/pop/rompetrafico.png";
import saltarinImg from "@/assets/pop/saltarin.png";
import stickerMesaImg from "@/assets/pop/sticker-mesa.png";

interface ModuleProps {
  onComplete: () => void;
}

const popMaterials = [
  { name: 'Bolsa', image: bolsaImg, type: 'Empaque' },
  { name: 'Hablador de Mesa', image: habladorImg, type: 'Display' },
  { name: 'Rompe-tráfico', image: rompetraficoImg, type: 'Señalización' },
  { name: 'Saltarín', image: saltarinImg, type: 'Display' },
  { name: 'Sticker de Mesa', image: stickerMesaImg, type: 'Adhesivo' },
];

const AliadoModule4MaterialPOP = ({ onComplete }: ModuleProps) => {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <span className="inline-block px-4 py-1 rounded-full bg-welli-yellow/20 text-welli-yellow font-medium text-sm">
          Módulo 4 · Materiales
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">
          Descarga de Material POP
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Materiales visuales para tu consultorio
        </p>
      </motion.div>

      {/* POP Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
      >
        {popMaterials.map((material, index) => (
          <motion.div
            key={material.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 p-2">
                <img 
                  src={material.image} 
                  alt={material.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                />
              </div>
              <CardContent className="p-3 text-center">
                <p className="font-medium text-sm">{material.name}</p>
                <p className="text-xs text-muted-foreground">{material.type}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Download Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-gradient-to-r from-secondary/10 to-welli-yellow/10 rounded-xl p-6"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-welli-yellow/20 flex items-center justify-center">
              <FileText className="w-6 h-6 text-welli-yellow" />
            </div>
            <div>
              <h3 className="font-bold">Kit Completo de Material POP</h3>
              <p className="text-sm text-muted-foreground">Todos los materiales en alta resolución</p>
            </div>
          </div>
          <a href="https://drive.google.com/drive/folders/1RwSaeot5zEyLKUy1mAivNexj6He4zqF1" target="_blank" rel="noopener noreferrer">
            <Button className="gap-2 bg-secondary hover:bg-secondary/90">
              <Download className="w-4 h-4" />
              Descargar Kit
            </Button>
          </a>
        </div>
      </motion.div>

      {/* Usage Tips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-welli-yellow/10 rounded-xl p-6 border-l-4 border-welli-yellow"
      >
        <h3 className="font-bold text-lg mb-3">💡 Dónde Colocar el Material</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• <strong>Sala de espera:</strong> Habladores y rompe-tráficos</li>
          <li>• <strong>Recepción:</strong> Stickers y saltarines</li>
          <li>• <strong>Consultorio:</strong> Material informativo para el doctor</li>
          <li>• <strong>Salida:</strong> Bolsas con la marca Welli</li>
        </ul>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center pt-6"
      >
        <Button
          onClick={onComplete}
          size="lg"
          className="bg-welli-yellow hover:bg-welli-yellow/90 text-welli-yellow-foreground gap-2"
        >
          Siguiente: Resumen Final
          <ArrowRight className="w-5 h-5" />
        </Button>
      </motion.div>
    </div>
  );
};

export default AliadoModule4MaterialPOP;
