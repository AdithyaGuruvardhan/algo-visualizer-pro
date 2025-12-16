// src/components/Footer.jsx
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-darkblue1 text-white/90">
      
      {/* Top border glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Brand */}
        <div>
          <h3 className="font-tektur text-2xl font-bold text-white">
            AlgoVisualizer <span className="text-lightblue3">Pro</span>
          </h3>
          <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-sm">
            An interactive platform to visualize and understand core Data Structures
            & Algorithms through real-time execution and animations.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col md:items-center">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80">
            Explore
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#sorting" className="hover:text-white">Sorting</a></li>
            <li><a href="#searching" className="hover:text-white">Searching</a></li>
            <li><a href="#graph" className="hover:text-white">Graphs</a></li>
            <li><a href="#dp" className="hover:text-white">Dynamic Programming</a></li>
          </ul>
        </div>

        {/* Social / CTA */}
        <div className="md:text-right">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80">
            Connect
          </h4>

          <div className="flex md:justify-end gap-4 mt-4">
            <a
              href="https://github.com/AdithyaGuruvardhan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/kadithyag/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:kadithyaguruvardhan@gmail.com"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition"
            >
              <Mail size={18} />
            </a>
          </div>

          <a
            href="#"
            className="inline-block mt-6 text-sm font-medium px-5 py-2 rounded-lg
                       bg-gradient-to-r from-lightblue3 to-purple-500
                       text-black hover:opacity-90 transition"
          >
            Explore Algorithms
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 text-xs text-white/60 flex flex-col sm:flex-row justify-between">
          <span>© {new Date().getFullYear()} AlgoVisualizer Pro</span>
          <span>Built by Adithya Guruvardhan</span>
        </div>
      </div>
    </footer>
  );
}
