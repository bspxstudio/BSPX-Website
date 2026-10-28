
import React, { useEffect, useRef, useState } from "react";

export default function ClothScroll3D() {
  const [scrollRotation, setScrollRotation] = useState(0);
  const previousScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const difference = currentScroll - previousScroll.current;

      setScrollRotation((rotation) => rotation + difference * 0.08);
      previousScroll.current = currentScroll;
    };

    previousScroll.current = window.scrollY;

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="hoodie-scene">
      <img
        src="/images/olive-lion-hoodie.png"
        alt="Olive green lion hoodie"
        className="hoodie-image"
        draggable="false"
        style={{
          "--scroll-rotation": `${scrollRotation}deg`,
        }}
      />

      <style>{`
        .hoodie-scene {
          position: fixed;
          top: 0;
          right: 0;
          width: 34vw;
          height: 100vh;
          z-index: 40;
          pointer-events: none;
          overflow: hidden;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hoodie-image {
          display: block;
          width: min(100%, 330px);
          height: auto;
          max-height: 72vh;
          object-fit: contain;
          position: absolute;
          right: 5%;
          top: 50%;
          opacity: 0.5;
          transform:
            translateY(-50%)
            rotate(var(--scroll-rotation, 0deg));
          transform-origin: center;
          animation: hoodie-float 4s ease-in-out infinite;
          filter: drop-shadow(0 12px 22px rgba(0, 0, 0, 0.12));
          user-select: none;
        }

        @keyframes hoodie-float {
          0%, 100% {
            margin-top: -8px;
          }
          50% {
            margin-top: 8px;
          }
        }

        @media (max-width: 768px) {
          .hoodie-scene {
            width: 42vw;
          }

          .hoodie-image {
            width: min(100%, 220px);
            max-height: 52vh;
            right: 2%;
          }
        }

        @media (max-width: 480px) {
          .hoodie-scene {
            width: 45vw;
          }

          .hoodie-image {
            width: 100%;
            max-height: 42vh;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hoodie-image {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
