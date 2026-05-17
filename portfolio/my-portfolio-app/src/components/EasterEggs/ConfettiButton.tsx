"use client";

import { useMemo, useState } from "react";

const createParticles = () =>
  Array.from({ length: 18 }, (_, index) => ({
    id: `${Date.now()}-${index}`,
    left: `${20 + Math.random() * 60}%`,
    size: 6 + Math.floor(Math.random() * 8),
    rotation: Math.floor(Math.random() * 360),
    delay: `${Math.random() * 0.15}s`,
    color: ["#f97316", "#22d3ee", "#a855f7", "#facc15", "#f43f5e"][
      Math.floor(Math.random() * 5)
    ],
  }));

export function ConfettiButton() {
  const [particles, setParticles] = useState<ReturnType<typeof createParticles>>(
    [],
  );

  const activeParticles = useMemo(() => particles, [particles]);

  const trigger = () => {
    setParticles(createParticles());
    setTimeout(() => setParticles([]), 1200);
  };

  return (
    <div className="relative inline-flex items-center">
      <button
        type="button"
        onClick={trigger}
        className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-orange-500/20 transition hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-orange-300"
      >
        Pop Confetti
      </button>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {activeParticles.map((particle) => (
          <span
            key={particle.id}
            className="confetti-piece absolute opacity-90"
            style={{
              left: particle.left,
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              transform: `rotate(${particle.rotation}deg)`,
              animationDelay: particle.delay,
            }}
          />
        ))}
      </div>
    </div>
  );
}
