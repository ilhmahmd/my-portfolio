import { useState, useEffect } from "react";

export default function Loader({ onLoadComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress < 100) {
      const timer = setTimeout(() => {
        setProgress((prev) => {
          const increment = Math.random() * 30;
          const newProgress = Math.min(prev + increment, 100);
          
          if (newProgress === 100) {
            setTimeout(() => onLoadComplete(), 500);
          }
          
          return newProgress;
        });
      }, 300 + Math.random() * 400);

      return () => clearTimeout(timer);
    }
  }, [progress, onLoadComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/5">
      <div className="w-full max-w-xs px-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-text mb-2">Loading</h1>
          <p className="text-text-dim text-sm">{Math.round(progress)}%</p>
        </div>

        {/* Progress bar background */}
        <div className="w-full h-1 bg-panel rounded-full overflow-hidden">
          {/* Progress bar fill */}
          <div
            className="h-full bg-gradient-to-r from-accent to-accent-soft rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Loading dots */}
        <div className="flex justify-center gap-2 mt-8">
          <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: "0s" }} />
          <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
          <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: "0.4s" }} />
        </div>
      </div>
    </div>
  );
}
