import { useEffect, useRef } from "react";

const Hero = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const mouse = useRef({ x: null, y: null, radius: 80 }); // smaller cursor radius

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const parent = canvas.parentElement;

    // Set canvas size
    canvas.width = parent.clientWidth;
    canvas.height = parent.clientHeight;

    const particleCount = 250;

    // Initialize particles with orbiting parameters
    particles.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
      angle: Math.random() * Math.PI * 2,
      orbitRadius: Math.random() * 20 + 10, // orbit radius
    }));

    // Mouse move handlers attached to parent
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    };
    const handleMouseLeave = () => {
      mouse.current.x = null;
      mouse.current.y = null;
    };

    parent.addEventListener("mousemove", handleMouseMove);
    parent.addEventListener("mouseleave", handleMouseLeave);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((p) => {
        // Subtle orbit motion
        p.angle += 0.01;
        p.x += Math.cos(p.angle) * 0.3;
        p.y += Math.sin(p.angle) * 0.3;

        // Cursor interaction (push away)
        if (mouse.current.x && mouse.current.y) {
          const dx = p.x - mouse.current.x;
          const dy = p.y - mouse.current.y;
          const dist = Math.hypot(dx, dy);

          if (dist < mouse.current.radius) {
            const force = (mouse.current.radius - dist) / mouse.current.radius;
            const angle = Math.atan2(dy, dx);
            p.dx += Math.cos(angle) * force * 0.5;
            p.dy += Math.sin(angle) * force * 0.5;
          }
        }

        // Apply damping for smooth motion
        p.dx *= 0.92;
        p.dy *= 0.92;

        p.x += p.dx;
        p.y += p.dy;

        // Keep particles inside canvas
        if (p.x < 0) p.x = 0;
        if (p.x > canvas.width) p.x = canvas.width;
        if (p.y < 0) p.y = 0;
        if (p.y > canvas.height) p.y = canvas.height;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(160,180,255,0.8)";
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Resize handling
    const handleResize = () => {
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      parent.removeEventListener("mousemove", handleMouseMove);
      parent.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative w-full min-h-[80vh] flex justify-center items-center overflow-hidden">
      
      {/* Canvas for particles */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      ></canvas>
    </div>
  );
};

export default Hero;
