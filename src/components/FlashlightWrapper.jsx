import { useRef, useState } from "react";

const FlashlightWrapper = ({ children, pattern = "grain", className = "", style={}, opacity = 0.4 }) => {
  const patternRef = useRef(null);
  const [maskStyle, setMaskStyle] = useState({
    WebkitMaskImage: "none",
    maskImage: "none",
    opacity: 0,
  });

  const handleMouseMove = (e) => {
    const rect = patternRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setMaskStyle({
      WebkitMaskImage: `radial-gradient(
        circle 200px at ${x}% ${y}%,
        rgba(0,0,0,0.7) 0%,
        rgba(0,0,0,0.5) 40%,
        rgba(0,0,0,0.2) 70%,
        transparent 100%
      )`,
      maskImage: `radial-gradient(
        circle 200px at ${x}% ${y}%,
        rgba(0,0,0,0.7) 0%,
        rgba(0,0,0,0.5) 40%,
        rgba(0,0,0,0.2) 70%,
        transparent 100%
      )`,
      opacity: opacity,
      transition: "mask-image 0.1s, -webkit-mask-image 0.1s, opacity 0.2s",
    });
  };

  const handleMouseLeave = () => {
    setMaskStyle({
      WebkitMaskImage: "none",
      maskImage: "none",
      opacity: 0,
    });
  };

  return (
    <div
      className={`relative group ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
    >
      {/* Flashlight overlay, only on hover area */}
      <div
        ref={patternRef}
        className={`${pattern} pointer-events-none absolute inset-0`}
        style={{ ...maskStyle, zIndex: 1 }}
      />
      {/* Content goes above the pattern */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default FlashlightWrapper;
