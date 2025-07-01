import React, { useRef, useState } from "react";

const CardTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const cardRef = useRef();

  const handleMouseMove = (e) => {
    // console.log(cardRef.current);
    if (!cardRef.current) return;

    const { left, top, width, height } =
      cardRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 15;
    const tiltY = (relativeX - 0.5) * -15;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.95,0.95,0.95)`;

    console.log(relativeX);

    setTransformStyle(newTransform);
  };
  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export default CardTilt;
