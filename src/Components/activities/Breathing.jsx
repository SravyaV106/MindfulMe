import React, { useState, useEffect } from 'react';

const Breathing = () => {
  const [inhale, setInhale] = useState(4);
  const [hold, setHold] = useState(7);
  const [exhale, setExhale] = useState(8);
  const [hold2, setHold2] = useState(0);

  const [seconds, setSeconds] = useState(4); 
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState("Inhale");
  const [cycle, setCycle] = useState(0);
  const [activeTechnique, setActiveTechnique] = useState(null);

  const breathingTechniques = [
    {
      name: "4-7-8 Relaxation",
      description: "Calming technique for stress relief and better sleep",
      benefits: "Reduces anxiety, promotes sleep",
      pattern: { in: 4, hold: 7, out: 8, hold2: 0 }
    },
    {
      name: "Box Breathing",
      description: "Focus and stress management",
      benefits: "Improves focus, reduces stress",
      pattern: { in: 4, hold: 4, out: 4, hold2: 4 }
    },
    {
      name: "Equal Breathing",
      description: "Daily practice",
      benefits: "Balances nervous system, easy for beginners",
      pattern: { in: 4, hold: 0, out: 4, hold2: 0 }
    }
  ];

  useEffect(() => {
    if (!started) return;

    let timer = setInterval(() => {
      setSeconds(prev => {
        if (prev > 1) return prev - 1;
        if (step === "Inhale") {
          if (hold > 0) {
            setStep("Hold");
            return hold;
          } else {
            setStep("Exhale");
            return exhale;
          }
        } else if (step === "Hold") {
          setStep("Exhale");
          return exhale;
        } else if (step === "Exhale") {
          if (hold2 > 0) {
            setStep("Hold2");
            return hold2;
          } else {
            setStep("Inhale");
            setCycle(c => c + 1);
            return inhale;
          }
        } else if (step === "Hold2") {
          setStep("Inhale");
          setCycle(c => c + 1);
          return inhale;
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [started, step, inhale, hold, exhale, hold2]);

  const startBreathing = () => {
    setCycle(0);
    setStep("Inhale");
    setSeconds(inhale);
    setStarted(true);
  };

  return (
    <div className="flex flex-row items-center justify-center mt-10 gap-10">
      
      <div className="flex flex-col items-center justify-center w-[70%]">
        <div className="flex flex-col items-center justify-center m-8">
          <div
            className={`h-[250px] w-[250px] m-4 rounded-full border-8 flex items-center justify-center text-4xl font-bold 
              transition-all duration-500 
              ${step === "Inhale" ? "border-green-500 bg-green-50 scale-110" : ""} 
              ${step === "Exhale" ? "border-blue-500 bg-blue-50 scale-90" : ""} 
              ${step.includes("Hold") ? "border-yellow-500 bg-yellow-50" : ""} 
              ${!started ? "border-gray-400 bg-gray-100" : ""}`}
          >
            {started ? seconds : "Ready"}
          </div>
          <div className="text-center mt-4">
            <p className="text-2xl font-semibold text-indigo-700">{step}</p>
            <p className="text-gray-600 text-sm">Follow the breathing pattern</p>
          </div>
        </div>
        <p className="mt-4 text-gray-700 text-lg">
          <span className="font-semibold">Cycles completed:</span> {cycle}
        </p>
        <button 
          onClick={startBreathing} 
          className="mt-6 px-8 py-3 bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-700 transition"
        >
          {started ? "Restart" : "Start"}
        </button>
      </div>
      <div className="w-[30%]">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Breathing Exercises</h1>
        {breathingTechniques.map((technique, index) => (
          <div 
            key={index} 
            className={`mb-6 p-5 border rounded-xl shadow-sm transition cursor-pointer 
              ${activeTechnique === index ? "bg-indigo-50 border-indigo-400 shadow-md" : "bg-white hover:shadow-md"}`}
            onClick={() => {
              setInhale(technique.pattern.in);
              setHold(technique.pattern.hold);
              setExhale(technique.pattern.out);
              setHold2(technique.pattern.hold2);
              setStarted(false);
              setStep("Inhale");
              setSeconds(technique.pattern.in);
              setCycle(0);
              setActiveTechnique(index);
            }}
          >
            <h2 className="text-lg font-semibold text-indigo-700">{technique.name}</h2>
            <p className="text-gray-800 text-sm">{technique.description}</p>
            <p className="text-gray-600 text-sm"><span className="font-semibold">Benefits:</span> {technique.benefits}</p>
            <p className="text-gray-600 text-sm">
              <span className="font-semibold"></span> Inhale {technique.pattern.in}s, 
              {technique.pattern.hold > 0 && ` Hold ${technique.pattern.hold}s, `}
               Exhale {technique.pattern.out}s
              {technique.pattern.hold2 > 0 && `, Hold ${technique.pattern.hold2}s`}
            </p>
            {activeTechnique === index && (
              <span className="mt-2 inline-block text-xs text-green-600 font-semibold">Active</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Breathing;

