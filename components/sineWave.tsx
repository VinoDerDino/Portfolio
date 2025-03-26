"use client";

import React from "react";

function generateSineWavePath(
  width: number,
  height: number,
  amplitude: number,
  phase: number,
  step = 5
): string {
  const midY = height / 2;
  let path = "";
  for (let x = 0; x <= width; x += step) {
    const y = midY + amplitude * Math.sin((x / width) * 2 * Math.PI + phase);
    path += x === 0 ? `M ${x} ${y}` : ` L ${x} ${y}`;
  }
  return path;
}

const SineWaves: React.FC = () => {
  const width = 800;
  const height = 200;

  const waves = [
    { amplitude: 40, cycles: 1, phase: 0, stroke: "#B45309", strokeWidth: 4, speed: 10 },
    { amplitude: 60, cycles: 2, phase: Math.PI / 4, stroke: "#B45309", strokeWidth: 3, speed: 12 },
    { amplitude: 50, cycles: 6, phase: Math.PI / 2, stroke: "#B45309", strokeWidth: 4, speed: 15 },
    { amplitude: 35, cycles: 4, phase: Math.PI / 3, stroke: "#B45309", strokeWidth: 3, speed: 9 },
    { amplitude: 45, cycles: 8, phase: Math.PI / 6, stroke: "#B45309", strokeWidth: 4, speed: 14 },
  ];

  const keyframesCSS = waves
    .map(
      (_, index) => `
      @keyframes slideWave${index} {
        from { transform: translateX(0); }
        to { transform: translateX(-${width}px); }
      }
    `
    )
    .join("\n");

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: `${height}px`,
        overflow: "hidden",
      }}
    >
      {waves.map((wave, index) => {
        const path = generateSineWavePath(width, height, wave.amplitude, wave.phase);
        return (
          <svg
            key={index}
            viewBox={`0 0 ${width} ${height}`}
            preserveAspectRatio="none"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <g style={{ animation: `slideWave${index} ${wave.speed}s linear infinite` }}>
              <path
                d={path}
                fill="none"
                stroke={wave.stroke}
                strokeWidth={wave.strokeWidth}
                strokeDasharray="5,10"
              />
              <path
                d={path}
                fill="none"
                stroke={wave.stroke}
                strokeWidth={wave.strokeWidth}
                strokeDasharray="5,10"
                transform={`translate(${width}, 0)`}
              />
            </g>
          </svg>
        );
      })}
      <style jsx>{keyframesCSS}</style>
    </div>
  );
};

export default SineWaves;
