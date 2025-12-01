import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const parent = canvas.parentElement;

    canvas.width = parent.clientWidth;
    canvas.height = parent.clientHeight;

    const gridSize = 32; // spacing between dots
    let points = [];

    // Generate dotted grid
    for (let x = 0; x <= canvas.width; x += gridSize) {
      for (let y = 0; y <= canvas.height; y += gridSize) {
        points.push({
          x,
          y,
          ox: x,
          oy: y,
        });
      }
    }

    // Mouse handlers
    const move = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    };

    const leave = () => {
      mouse.current.x = null;
      mouse.current.y = null;
    };

    parent.addEventListener("mousemove", move);
    parent.addEventListener("mouseleave", leave);

    let time = 0;

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.03;

      points.forEach((p) => {
        let dx = mouse.current.x - p.x;
        let dy = mouse.current.y - p.y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        // Ripple wave effect
        let ripple =
          Math.sin(dist * 0.045 - time * 4) *
          4 *
          (1 / (1 + dist * 0.01));

        if (mouse.current.x !== null) {
          let angle = Math.atan2(dy, dx);
          p.x += Math.cos(angle) * ripple * 0.25;
          p.y += Math.sin(angle) * ripple * 0.25;
        }

        // Soft return to origin for smoothing
        p.x += (p.ox - p.x) * 0.05;
        p.y += (p.oy - p.y) * 0.05;

        // Glow intensity near cursor
        const opacity =
          mouse.current.x !== null
            ? 0.32 + Math.max(0, 1 - dist / 240) * 0.35
            : 0.22;

        ctx.beginPath();
        ctx.fillStyle = `rgba(185,200,255, ${opacity})`;
        ctx.arc(p.x, p.y, 2.2, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      parent.removeEventListener("mousemove", move);
      parent.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <div className="relative w-full min-h-[95vh] overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
    </div>
  );
}
