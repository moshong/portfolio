"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FileText, Github, Linkedin, Facebook, MessageCircle, Gamepad2, Mail, Sun, Moon, GitBranch, Search } from "lucide-react";
import Splash from "./Splash";
import { Home, WhatIDo, Career, Work, Skills, Education, Testimonials, Contact } from "./views";
import { profile } from "../data/content";

type FileDef = { id: string; name: string; badge: string; color: string };

const files: FileDef[] = [
  { id: "home", name: "home.tsx", badge: "TS", color: "text-sky-400" },
  { id: "what", name: "what-i-do.tsx", badge: "TS", color: "text-sky-400" },
  { id: "career", name: "career.tsx", badge: "TS", color: "text-sky-400" },
  { id: "work", name: "work.tsx", badge: "TS", color: "text-orange-400" },
  { id: "skills", name: "skills.json", badge: "{}", color: "text-yellow-400" },
  { id: "education", name: "education.yaml", badge: "Y", color: "text-green-400" },
  { id: "testimonials", name: "testimonials.md", badge: "M", color: "text-blue-400" },
  { id: "contact", name: "contact.css", badge: "#", color: "text-indigo-400" },
];

const Badge = ({ f }: { f: FileDef }) => (
  <span className={`grid h-4 w-4 shrink-0 place-items-center rounded-sm bg-white/5 font-mono text-[8px] font-bold ${f.color}`}>{f.badge}</span>
);

export default function IDE() {
  const [booted, setBooted] = useState(false);
  const [active, setActive] = useState("home");
  const scroller = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const done = useCallback(() => setBooted(true), []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const goto = (id: string) => {
    setActive(id);
    document.getElementById(`sec-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // highlight whichever section crosses the middle of the scroll pane
  useEffect(() => {
    if (!booted || !scroller.current) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id.replace("sec-", ""))),
      { root: scroller.current, rootMargin: "-45% 0px -50% 0px" },
    );
    files.forEach((f) => { const el = document.getElementById(`sec-${f.id}`); if (el) io.observe(el); });
    return () => io.disconnect();
  }, [booted]);

  const current = files.find((f) => f.id === active)!;
  const views: Record<string, React.ReactNode> = {
    home: <Home goto={goto} />,
    what: <WhatIDo />,
    career: <Career />,
    work: <Work />,
    skills: <Skills />,
    education: <Education />,
    testimonials: <Testimonials />,
    contact: <Contact />,
  };

  const social = [
    [Github, profile.links.github], [Linkedin, profile.links.linkedin], [Facebook, profile.links.facebook],
    [MessageCircle, profile.links.discord], [Gamepad2, profile.links.steam], [Mail, `mailto:${profile.email}`],
  ] as const;
  const socialNames = ["GitHub", "LinkedIn", "Facebook", "Discord", "Steam", "Email"];

  return (
    <>
      <AnimatePresence>{!booted && <Splash onDone={done} />}</AnimatePresence>

      <div className="flex h-screen flex-col">
        {/* title bar */}
        <header className="flex h-10 shrink-0 items-center gap-4 border-b border-line bg-side px-3 text-xs">
          <div className="flex gap-2">
            <i className="h-3 w-3 rounded-full bg-red-500" /><i className="h-3 w-3 rounded-full bg-yellow-400" /><i className="h-3 w-3 rounded-full bg-green-500" />
          </div>
          <nav className="hidden gap-4 font-mono text-mute md:flex">
            {["File", "Control", "View", "Terminal", "Help"].map((m) => <span key={m}>{m}</span>)}
          </nav>
          <img src="/logo.png" alt="Logo" className="h-6 w-6 shrink-0 object-contain" />
          <div className="mx-auto flex w-full max-w-md items-center gap-2 rounded-md border border-line bg-panel px-3 py-1 text-mute">
            <Search size={12} /><span className="truncate font-mono">{profile.name} — Portfolio</span>
          </div>
          <span className="hidden items-center gap-1.5 rounded-full border border-line px-2.5 py-1 font-mono text-[11px] lg:flex">
            <i className="h-1.5 w-1.5 rounded-full bg-green-500" />Open to opportunities
          </span>
          <a href={`mailto:${profile.email}`} className="hidden rounded border border-line px-2.5 py-1 font-mono text-[11px] hover:bg-panel sm:block">Email</a>
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Toggle theme" className="text-mute hover:text-fg">
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        </header>

        <div className="flex min-h-0 flex-1">
          {/* activity bar */}
          <aside className="hidden w-12 shrink-0 flex-col items-center gap-5 border-r border-line bg-side py-4 text-mute sm:flex">
            {social.map(([Icon, href], i) => (
              <a key={i} href={href} title={socialNames[i]} aria-label={socialNames[i]} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="hover:text-fg"><Icon size={18} /></a>
            ))}
          </aside>

          {/* explorer */}
          <aside className="hidden w-60 shrink-0 flex-col border-r border-line bg-side md:flex">
            <p className="px-4 py-3 font-mono text-[10px] uppercase tracking-[0.25em] text-mute">Portfolio</p>
            <ul className="px-2">
              {files.map((f) => (
                <li key={f.id}>
                  <button onClick={() => goto(f.id)}
                    className={`flex w-full items-center gap-2.5 rounded px-2 py-1.5 font-mono text-xs ${active === f.id ? "bg-accent/20 text-fg" : "text-mute hover:bg-panel"}`}>
                    <Badge f={f} />{f.name}
                  </button>
                </li>
              ))}
              <li>
                <a href={profile.resume} className="flex items-center gap-2.5 rounded px-2 py-1.5 font-mono text-xs text-mute hover:bg-panel">
                  <FileText size={14} className="text-red-400" />resume.pdf
                </a>
              </li>
            </ul>
            <div className="mt-auto border-t border-line">
              <p className="px-4 py-2 font-mono text-[10px] uppercase tracking-[0.25em] text-mute">Outline</p>
              <ul className="max-h-48 overflow-auto px-2 pb-2">
                {files.map((f) => (
                  <li key={f.id}>
                    <button onClick={() => goto(f.id)} className={`flex w-full items-center gap-2 rounded px-2 py-1 font-mono text-[11px] ${active === f.id ? "bg-accent/20 text-fg" : "text-mute hover:bg-panel"}`}><Badge f={f} />{f.name}</button>
                  </li>
                ))}
              </ul>
            </div>
            <p className="border-t border-line px-4 py-2 font-mono text-[10px] text-mute">{profile.handle}-portfolio</p>
          </aside>

          {/* editor */}
          <main className="flex min-w-0 flex-1 flex-col">
            <div className="flex shrink-0 overflow-x-auto border-b border-line bg-side">
              {files.map((f) => (
                <div key={f.id} onClick={() => goto(f.id)}
                  className={`flex cursor-pointer items-center gap-2 whitespace-nowrap border-r border-line px-4 py-2 font-mono text-xs ${active === f.id ? "bg-bg text-fg" : "text-mute hover:bg-panel"}`}>
                  <Badge f={f} />{f.name}
                </div>
              ))}
            </div>
            <div className="shrink-0 border-b border-line px-4 py-1.5 font-mono text-[11px] text-mute">
              <span className="text-green-500">{profile.handle}</span> / src / <span className="text-fg">{current.name}</span>
            </div>
            <div ref={scroller} data-scroll className="min-h-0 flex-1 overflow-y-auto">
              {files.map((f) => (
                <motion.section key={f.id} id={`sec-${f.id}`} className="min-h-full border-b border-line/50"
                  initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ root: scroller, amount: 0.15 }} transition={{ duration: 0.5 }}>
                  {views[f.id]}
                </motion.section>
              ))}
            </div>
          </main>
        </div>

        {/* status bar */}
        <footer className="flex h-6 shrink-0 items-center justify-between bg-accent px-3 font-mono text-[11px] text-white">
          <span className="flex items-center gap-1.5"><GitBranch size={12} />master</span>
          <span className="hidden sm:block">{profile.headline}</span>
          <span>{current.name}</span>
        </footer>
      </div>
    </>
  );
}
