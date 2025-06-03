import React, { useState, useEffect } from 'react';

const BoxBreathing = () => {
  const [phase, setPhase] = useState(0);
  const [timer, setTimer] = useState(4);
  const [isStarted, setIsStarted] = useState(false);

  const phases = ['Inhale', 'Hold', 'Exhale', 'Hold'];
  const phaseInstructions = [
    'Breathe in slowly...',
    'Hold your breath',
    'Breathe out slowly...',
    'Hold empty'
  ];

  useEffect(() => {
    if (!isStarted) return;
    
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 1) {
          setPhase((prevPhase) => (prevPhase + 1) % 4);
          return 4;
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isStarted]);

  const getBreathingStyles = () => {
    if (!isStarted) {
      return {
        transform: 'scale(1)',
        backgroundColor: 'rgba(156, 163, 175, 0.08)',
        borderColor: 'rgba(156, 163, 175, 0.4)',
        boxShadow: '0 0 40px rgba(156, 163, 175, 0.1)',
        transition: 'all 0.3s ease-out'
      };
    }
    
    const isAnimating = phase === 0 || phase === 2; // Only animate during inhale/exhale
    const transitionDuration = isAnimating ? '4s' : '0.3s';
    
    switch (phase) {
      case 0: // Inhale - expand
        return {
          transform: 'scale(1.5)',
          backgroundColor: 'rgba(59, 130, 246, 0.08)',
          borderColor: 'rgba(59, 130, 246, 0.4)',
          boxShadow: '0 0 60px rgba(59, 130, 246, 0.2), inset 0 0 40px rgba(59, 130, 246, 0.1)',
          transition: `all ${transitionDuration} cubic-bezier(0.4, 0.0, 0.2, 1)`
        };
      case 1: // Hold (expanded)
        return {
          transform: 'scale(1.5)',
          backgroundColor: 'rgba(34, 197, 94, 0.08)',
          borderColor: 'rgba(34, 197, 94, 0.4)',
          boxShadow: '0 0 60px rgba(34, 197, 94, 0.2), inset 0 0 40px rgba(34, 197, 94, 0.1)',
          transition: `all ${transitionDuration} ease-out`
        };
      case 2: // Exhale - contract
        return {
          transform: 'scale(0.7)',
          backgroundColor: 'rgba(239, 68, 68, 0.08)',
          borderColor: 'rgba(239, 68, 68, 0.4)',
          boxShadow: '0 0 30px rgba(239, 68, 68, 0.15), inset 0 0 20px rgba(239, 68, 68, 0.1)',
          transition: `all ${transitionDuration} cubic-bezier(0.4, 0.0, 0.2, 1)`
        };
      case 3: // Hold (contracted)
        return {
          transform: 'scale(0.7)',
          backgroundColor: 'rgba(234, 179, 8, 0.08)',
          borderColor: 'rgba(234, 179, 8, 0.4)',
          boxShadow: '0 0 30px rgba(234, 179, 8, 0.15), inset 0 0 20px rgba(234, 179, 8, 0.1)',
          transition: `all ${transitionDuration} ease-out`
        };
      default:
        return {
          transform: 'scale(1)',
          backgroundColor: 'rgba(156, 163, 175, 0.08)',
          borderColor: 'rgba(156, 163, 175, 0.4)',
          boxShadow: '0 0 40px rgba(156, 163, 175, 0.1)',
          transition: `all ${transitionDuration} ease-out`
        };
    }
  };

  const getTimerColor = () => {
    switch (phase) {
      case 0: return 'text-blue-600';
      case 1: return 'text-green-600';
      case 2: return 'text-red-600';
      case 3: return 'text-yellow-600';
      default: return 'text-gray-600';
    }
  };

  const getAuraStyles = () => {
    if (!isStarted) {
      return {
        transform: 'scale(1.2)',
        opacity: 0.2,
        transition: 'all 0.3s ease-out'
      };
    }
    
    const isAnimating = phase === 0 || phase === 2;
    const transitionDuration = isAnimating ? '4s' : '0.3s';
    
    return {
      transform: phase === 0 ? 'scale(1.8)' : phase === 2 ? 'scale(1.2)' : 'scale(1.5)',
      opacity: phase === 0 ? 0.6 : phase === 2 ? 0.3 : 0.4,
      transition: `all ${transitionDuration} cubic-bezier(0.4, 0.0, 0.2, 1)`
    };
  };

  const handleStart = () => {
    setIsStarted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 flex flex-col items-center justify-center p-8 text-white">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-thin text-white mb-3 tracking-wide">Box Breathing</h1>
        <p className="text-slate-300 text-xl font-light">4-4-4-4 rhythm for mindful breathing</p>
      </div>

      {/* Main breathing visualization */}
      <div className="relative mb-16">
        {/* Outer aura */}
        <div 
          className="absolute inset-0 w-96 h-96 rounded-full"
          style={{
            background: `radial-gradient(circle, ${getBreathingStyles().borderColor}40 0%, transparent 60%)`,
            ...getAuraStyles()
          }}
        />

        {/* Main breathing circle */}
        <div className="relative w-96 h-96 flex items-center justify-center">
          <div 
            className="w-80 h-80 rounded-full border backdrop-blur-sm relative overflow-hidden"
            style={getBreathingStyles()}
          >
            {/* Subtle inner rings for depth */}
            <div className="absolute inset-6 rounded-full border border-white border-opacity-10" />
            <div className="absolute inset-12 rounded-full border border-white border-opacity-5" />
            
            {/* Floating particles effect */}
            <div className="absolute inset-0 rounded-full opacity-20">
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse" />
              <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '1s'}} />
              <div className="absolute bottom-1/4 left-3/4 w-1.5 h-1.5 bg-white rounded-full animate-pulse" style={{animationDelay: '2s'}} />
            </div>
            
            {/* Timer display */}
            <div className="absolute inset-0 flex items-center justify-center">
              {!isStarted ? (
                <button
                  onClick={handleStart}
                  className="px-8 py-4 bg-white bg-opacity-10 hover:bg-opacity-20 border border-white border-opacity-30 rounded-full text-2xl font-light text-white transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                >
                  Start Breathing
                </button>
              ) : (
                <span className={`text-7xl font-extralight ${getTimerColor()} transition-colors duration-500 tracking-wider`}>
                  {timer}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="text-center space-y-4">
        {isStarted ? (
          <>
            <div className={`text-3xl font-light transition-colors duration-500 ${getTimerColor()} tracking-wide`}>
              {phases[phase]}
            </div>
            <div className="text-slate-400 text-xl font-light">
              {phaseInstructions[phase]}
            </div>
          </>
        ) : (
          <>
            <div className="text-3xl font-light text-slate-300 tracking-wide">
              Ready to Begin
            </div>
            <div className="text-slate-400 text-xl font-light">
              Click the button above to start your breathing session
            </div>
          </>
        )}
      </div>

      {/* Phase progress indicator */}
      {isStarted && (
        <div className="mt-12 flex space-x-3">
          {phases.map((phaseName, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <div
                className={`w-4 h-4 rounded-full transition-all duration-500 ${
                  index === phase 
                    ? 'scale-125 opacity-100' 
                    : 'scale-100 opacity-40'
                }`}
                style={{ 
                  backgroundColor: index === phase ? getBreathingStyles().borderColor : 'rgba(255, 255, 255, 0.3)'
                }}
              />
              <span className={`text-xs font-light transition-opacity duration-500 ${
                index === phase ? 'opacity-100' : 'opacity-50'
              }`}>
                {phaseName}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BoxBreathing;
