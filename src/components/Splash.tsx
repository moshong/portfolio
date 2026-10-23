"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const steps = ["resolving dependencies", "compiling components", "loading assets", "opening editor layout"];
const floaters: [string, string, string][] = [
  ["PHP", "8%", "15%"], ["SELECT *", "12%", "36%"], ["n8n", "77%", "21%"], ["Make", "89%", "24%"],
  ["GHL", "91%", "41%"], ["POS", "85%", "49%"], ["automate()", "86%", "68%"], ["Billing", "26%", "70%"],
  ["// analyze", "16%", "75%"], ["React", "10%", "53%"], ["Next.js", "70%", "78%"], ["Inventory", "6%", "30%"],
  ["workflow", "80%", "12%"], ["Data", "30%", "20%"],
];

export default function Splash({ onDone }: { onDone: () => void }) {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setPct((p) => Math.min(100, p + Math.ceil(Math.random() * 4))), 60);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (pct >= 100) {
      const t = setTimeout(onDone, 350);
      return () => clearTimeout(t);
    }
  }, [pct, onDone]);

  const step = steps[Math.min(steps.length - 1, Math.floor(pct / 26))];

  return (
    <motion.div className="dots fixed inset-0 z-50 flex flex-col bg-bg" exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <div className="flex h-9 items-center border-b border-line px-3">
        <div className="flex gap-2">
          <i className="h-3 w-3 rounded-full bg-red-500" />
          <i className="h-3 w-3 rounded-full bg-yellow-400" />
          <i className="h-3 w-3 rounded-full bg-green-500" />
        </div>
        <span className="mx-auto font-mono text-xs text-green-500/80">{"// booting workspace…"}</span>
      </div>

      <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden">
        {floaters.map(([t, x, y], i) => (
          <motion.span
            key={t}
            className="absolute font-mono text-xs text-mute"
            style={{ left: x, top: y }}
            animate={{ y: [0, -10, 0], opacity: [0.3, 0.9, 0.3] }}
            transition={{ duration: 4 + (i % 3), repeat: Infinity, delay: i * 0.3 }}
          >
            {t}
          </motion.span>
        ))}
        {[300, 520, 740].map((s) => (
          <motion.div
            key={s}
            className="absolute rounded-full border border-accent/10"
            style={{ width: s, height: s }}
            animate={{ rotate: 360 }}
            transition={{ duration: s / 10, repeat: Infinity, ease: "linear" }}
          >
            <span className="absolute left-1/2 top-0 h-1.5 w-1.5 rounded-full bg-accent" />
          </motion.div>
        ))}

        <motion.img src="/logo.png" alt="Logo" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="z-10 mb-3 h-16 w-16 object-contain" />
        <motion.h1
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="z-10 px-4 text-center text-5xl font-extrabold uppercase tracking-tight sm:text-6xl lg:text-8xl lg:leading-[1.05]"
        >
          MOSHONG<br />SOFTWARE SOLUTIONS
        </motion.h1>

        <div className="absolute bottom-12 z-10 w-[min(560px,90vw)] rounded-lg border border-line bg-panel/80 p-4 backdrop-blur">
          <div className="flex items-start justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-mute">Loading workspace</p>
              <p className="text-sm font-semibold">Systems · Automation · Software</p>
            </div>
            <span className="font-mono text-sm text-accent">{pct}%</span>
          </div>
          <div className="mt-3 h-1 rounded bg-line">
            <div className="h-full rounded bg-accent transition-all" style={{ width: `${pct}%` }} />
          </div>
          <p className="mt-3 font-mono text-xs text-mute">
            {step} <span className="caret inline-block h-3 w-1.5 translate-y-0.5 bg-accent" />
          </p>
        </div>
      </div>

      <div className="flex h-6 items-center justify-between bg-accent/90 px-3 font-mono text-[11px] text-white">
        <span>● Initializing portfolio IDE… {pct}%</span>
        <span>{pct}% master</span>
      </div>
    </motion.div>
  );
}
