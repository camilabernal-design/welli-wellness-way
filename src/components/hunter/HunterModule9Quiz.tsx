import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, XCircle, Trophy, RotateCcw, PartyPopper } from "lucide-react";

interface ModuleProps {
  onComplete: () => void;
}

const questions = [
  {
    id: 1,
    question: '¿Cuál es el tiempo de aprobación de un crédito Welli?',
    options: ['3 minutos', '5 días', '1 hora', '24 horas'],
    correct: 0,
    explanation: 'Welli aprueba en 3 minutos, sin papeleo ni esperas.',
  },
  {
    id: 2,
    question: '¿Qué porcentaje de los pacientes pierde una clínica por falta de opciones de pago?',
    options: ['10%', '50%', '25-35%', '5%'],
    correct: 2,
    explanation: 'Las clínicas pierden entre el 25% y el 35% de pacientes por falta de financiamiento.',
  },
  {
    id: 3,
    question: '¿Qué días se realizan los desembolsos a los aliados?',
    options: ['Lunes y Viernes', 'Todos los días', 'Solo los viernes', 'Martes y Jueves'],
    correct: 3,
    explanation: 'Los desembolsos se procesan los Martes y Jueves, con un máximo de 72 horas.',
  },
  {
    id: 4,
    question: '¿Cuál es la tasa de interés aproximada de Welli vs otras fintechs?',
    options: ['Son iguales', 'Welli: 20-25% vs Otras: 40-45%', 'Welli: 40% vs Otras: 20%', 'Welli no cobra interés'],
    correct: 1,
    explanation: 'Welli tiene tasas éticas del 20-25% E.A., casi la mitad que otras fintechs (40-45%).',
  },
  {
    id: 5,
    question: '¿Qué porcentaje del crédito recibe el aliado médico?',
    options: ['80%', '100%', '90%', '95%'],
    correct: 3,
    explanation: 'El aliado recibe el 95%. Welli cobra solo el 5% de comisión.',
  },
];

const HunterModule9Quiz = ({ onComplete }: ModuleProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const handleSelectAnswer = (optionIndex: number) => {
    if (showResult) return;
    setSelectedAnswer(optionIndex);
  };

  const handleConfirm = () => {
    if (selectedAnswer === null) return;
    
    setShowResult(true);
    if (selectedAnswer === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setIsComplete(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setIsComplete(false);
  };

  const isPassing = score >= 4;

  if (isComplete) {
    return (
      <div className="max-w-3xl mx-auto p-6 space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-6"
        >
          <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center ${
            isPassing ? 'bg-welli-yellow/30' : 'bg-welli-orange/20'
          }`}>
            {isPassing ? (
              <PartyPopper className="w-12 h-12 text-welli-yellow" />
            ) : (
              <Trophy className="w-12 h-12 text-welli-orange" />
            )}
          </div>

          <h1 className="text-3xl font-bold text-indigo-950">
            {isPassing ? '¡Excelente! Está Listo para Empezar' : 'Casi lo logra'}
          </h1>

          <div className="text-5xl font-bold text-welli-yellow">
            {score}/{questions.length}
          </div>

          <p className="text-indigo-800">
            {isPassing 
              ? 'Ya conoce todo lo necesario para empezar con Welli.'
              : 'Repase los módulos y vuelva a intentarlo. Necesita 4/5 para aprobar.'}
          </p>

          {isPassing ? (
            <div className="space-y-4">
              <Card className="bg-welli-yellow/20 border-welli-yellow">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg text-indigo-950 mb-2">🎉 ¡Bienvenido a Welli!</h3>
                  <p className="text-indigo-800">
                    El siguiente paso es agendar su capacitación operativa de 45 minutos con el equipo.
                    Desembolsamos <strong>martes y jueves</strong>. Si aplica hoy, el jueves ya tiene su dinero.
                  </p>
                </CardContent>
              </Card>

              <Button
                onClick={onComplete}
                size="lg"
                className="bg-welli-yellow hover:bg-welli-yellow/90 text-indigo-950 font-bold gap-2 text-lg px-8 py-6"
              >
                Volver al Hub
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          ) : (
            <Button
              onClick={handleRestart}
              size="lg"
              variant="outline"
              className="gap-2 border-indigo-950 text-indigo-950"
            >
              <RotateCcw className="w-5 h-5" />
              Reintentar Quiz
            </Button>
          )}
        </motion.div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const isCorrect = selectedAnswer === question.correct;

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <span className="inline-block px-6 py-2 rounded-full bg-welli-yellow text-indigo-950 font-bold text-sm">
          ✅ Validación Final
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-950">
          ¿Tiene Claro Todo?
        </h1>
        
        {/* Progress */}
        <div className="flex items-center justify-center gap-2">
          {questions.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-colors ${
                i < currentQuestion ? 'bg-green-500' : 
                i === currentQuestion ? 'bg-welli-yellow' : 'bg-slate-200'
              }`}
            />
          ))}
        </div>
        <p className="text-sm text-indigo-800">
          Pregunta {currentQuestion + 1} de {questions.length}
        </p>
      </motion.div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          <Card className="border-2 border-welli-yellow/50">
            <CardContent className="p-8">
              <h2 className="text-xl font-bold mb-6 text-indigo-950">{question.question}</h2>

              <div className="space-y-3">
                {question.options.map((option, index) => {
                  const isSelected = selectedAnswer === index;
                  const isThisCorrect = showResult && index === question.correct;
                  const isThisWrong = showResult && isSelected && !isCorrect;

                  return (
                    <button
                      key={index}
                      onClick={() => handleSelectAnswer(index)}
                      disabled={showResult}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all flex items-center gap-3 ${
                        isThisCorrect
                          ? 'border-green-500 bg-green-50'
                          : isThisWrong
                          ? 'border-red-500 bg-red-50'
                          : isSelected
                          ? 'border-welli-yellow bg-welli-yellow/10'
                          : 'border-slate-200 hover:border-welli-yellow/50'
                      }`}
                    >
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                        isThisCorrect
                          ? 'bg-green-500 text-white'
                          : isThisWrong
                          ? 'bg-red-500 text-white'
                          : isSelected
                          ? 'bg-welli-yellow text-indigo-950'
                          : 'bg-slate-200 text-indigo-950'
                      }`}>
                        {isThisCorrect && <CheckCircle2 className="w-4 h-4" />}
                        {isThisWrong && <XCircle className="w-4 h-4" />}
                        {!showResult && String.fromCharCode(65 + index)}
                      </div>
                      <span className="font-medium text-indigo-950">{option}</span>
                    </button>
                  );
                })}
              </div>

              {showResult && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-6 p-4 rounded-lg ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-welli-orange/10 border border-welli-orange/30'}`}
                >
                  <p className={`font-medium ${isCorrect ? 'text-green-700' : 'text-welli-orange'}`}>
                    {isCorrect ? '¡Correcto!' : 'Incorrecto'}
                  </p>
                  <p className="text-sm text-indigo-800 mt-1">{question.explanation}</p>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>

      {/* Actions */}
      <div className="flex justify-center gap-4">
        {!showResult ? (
          <Button
            onClick={handleConfirm}
            disabled={selectedAnswer === null}
            size="lg"
            className="bg-welli-yellow hover:bg-welli-yellow/90 text-indigo-950 font-bold"
          >
            Confirmar Respuesta
          </Button>
        ) : (
          <Button
            onClick={handleNext}
            size="lg"
            className="bg-welli-yellow hover:bg-welli-yellow/90 text-indigo-950 font-bold gap-2"
          >
            {currentQuestion < questions.length - 1 ? 'Siguiente Pregunta' : 'Ver Resultados'}
            <ArrowRight className="w-5 h-5" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HunterModule9Quiz;
