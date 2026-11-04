"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Download, ArrowRight, Mail, MapPin } from "lucide-react";
import { profile, bookingUrl, photos, stats, stack, services, career, projects, workflows, tiers, skills, education, testimonials } from "../data/content";

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

const H = ({ children, label }: { children: React.ReactNode; label: string }) => (
  <motion.div {...reveal} className="mb-8">
    <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">{label}</p>
    <h2 className="mt-2 text-3xl font-bold sm:text-4xl">{children}</h2>
    <motion.i initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
      className="mt-3 block h-0.5 w-16 origin-left bg-accent" />
  </motion.div>
);

const Chip = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded border border-line bg-panel px-2.5 py-1 font-mono text-xs">{children}</span>
);

function HeroPhoto() {
  const ref = useRef<HTMLDivElement>(null);
  const [scroller, setScroller] = useState<HTMLElement | null>(null);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    setScroller(ref.current?.closest<HTMLElement>("[data-scroll]") ?? null);
  }, []);
  useEffect(() => {
    if (photos.length < 2) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % photos.length), 4000);
    return () => clearInterval(t);
  }, []);

  const { scrollY } = useScroll({ container: { current: scroller } });
  const smooth = useSpring(scrollY, { stiffness: 80, damping: 20 });
  const rotateY = useTransform(smooth, [0, 500], [0, -28]);
  const rotateZ = useTransform(smooth, [0, 500], [0, 5]);
  const y = useTransform(smooth, [0, 500], [0, 120]);
  const scale = useTransform(smooth, [0, 500], [1, 0.9]);

  return (
    <div ref={ref} className="mx-auto shrink-0 [perspective:1000px]">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        style={{ rotateY, rotateZ, y, scale }}
        className="relative h-80 w-72 overflow-hidden rounded-2xl border border-line bg-panel shadow-2xl shadow-accent/10 lg:h-[460px] lg:w-96"
      >
        {photos.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={src} src={src} alt={profile.name}
            className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-700 ${i === idx ? "opacity-100" : "opacity-0"}`} />
        ))}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-bg/80 to-transparent" />
        {photos.length > 1 && (
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
            {photos.map((_, i) => (
              <button key={i} aria-label={`Photo ${i + 1}`} onClick={() => setIdx(i)}
                className={`h-1.5 rounded-full transition-all ${i === idx ? "w-6 bg-accent" : "w-1.5 bg-white/50"}`} />
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}

// automation-flow motion: nodes linked by lines with data pulses travelling along them
const flowNodes: [string, number, number][] = [
  ["Trigger", 8, 18], ["n8n", 30, 8], ["Make", 30, 38], ["API", 56, 22], ["SQL", 80, 10], ["GHL", 82, 42], ["Done ✓", 94, 26],
];
const flowLinks: [number, number][] = [[0, 1], [0, 2], [1, 3], [2, 3], [3, 4], [3, 5], [4, 6], [5, 6]];

function FlowBackdrop() {
  const ref = useRef<HTMLDivElement>(null);
  const [scroller, setScroller] = useState<HTMLElement | null>(null);
  useEffect(() => { setScroller(ref.current?.closest<HTMLElement>("[data-scroll]") ?? null); }, []);
  const { scrollY } = useScroll({ container: { current: scroller } });
  const y = useTransform(scrollY, [0, 600], [0, 140]);
  return (
    <motion.div ref={ref} aria-hidden style={{ y }} className="pointer-events-none absolute inset-x-0 top-0 h-72 overflow-hidden opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent)]">
      <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="h-full w-full">
        {flowLinks.map(([a, b], i) => {
          const [, x1, y1] = flowNodes[a], [, x2, y2] = flowNodes[b];
          return (
            <g key={i}>
              <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgb(var(--line))" strokeWidth="0.25" vectorEffect="non-scaling-stroke" />
              <motion.circle r="0.7" className="fill-accent" initial={{ cx: x1, cy: y1 }}
                animate={{ cx: [x1, x2], cy: [y1, y2], opacity: [0, 1, 1, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.35, ease: "linear" }} />
            </g>
          );
        })}
      </svg>
      {flowNodes.map(([label, x, y], i) => (
        <motion.span key={label} style={{ left: `${x}%`, top: `${y * 2}%` }}
          animate={{ y: [0, -4, 0] }} transition={{ duration: 3 + (i % 3), repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded border border-accent/40 bg-panel px-2 py-0.5 font-mono text-[10px] text-accent">
          {label}
        </motion.span>
      ))}
    </motion.div>
  );
}

export function Home({ goto }: { goto: (id: string) => void }) {
  const words = profile.roles;
  return (
    <section className="relative mx-auto flex min-h-full max-w-6xl flex-col justify-center gap-10 px-6 py-16 lg:flex-row lg:items-center">
      <FlowBackdrop />
      <div className="relative flex-1">
        <div className="border-l-2 border-accent pl-3 font-mono text-sm">
          <p className="text-[10px] uppercase tracking-[0.25em] text-mute">{profile.name}</p>
          <p>
            <span className="text-accent">const</span> role = <span className="text-orange-400">&quot;{words[0]}&quot;</span>;
            <span className="caret ml-0.5 inline-block h-4 w-1.5 translate-y-0.5 bg-accent" />
          </p>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
        >
          Stop acting like a <span className="text-accent">robot.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 max-w-xl text-lg text-mute">{profile.intro}</motion.p>
        <div className="mt-4 flex flex-wrap gap-2">
          {words.map((w) => <Chip key={w}>{w}</Chip>)}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <button onClick={() => goto("work")} className="flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white hover:opacity-90">
            View My Work <ArrowRight size={16} />
          </button>
          <button onClick={() => goto("pricing")} className="flex items-center gap-2 rounded-md border border-line px-5 py-3 text-sm font-medium hover:bg-panel">
            See Pricing
          </button>
          <a href={profile.resume} download className="flex items-center gap-2 rounded-md border border-line px-5 py-3 text-sm font-medium hover:bg-panel">
            <Download size={16} /> Download Resume
          </a>
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {stack.map((s) => <Chip key={s}>{s}</Chip>)}
        </div>
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2 border-t border-line pt-5 font-mono text-[11px] uppercase tracking-wider text-mute">
          {stats.map((s) => (
            <span key={s.label}><b className="text-accent">{s.value}</b> {s.label}</span>
          ))}
        </div>
      </div>
      <HeroPhoto />
    </section>
  );
}

export function WhatIDo() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <H label="What I do">Brand-minded engineering, end to end</H>
      <div className="grid gap-5 sm:grid-cols-2">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            {...reveal}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="rounded-xl border border-line bg-panel p-6"
          >
            <span className="font-mono text-xs text-accent">0{i + 1}</span>
            <h3 className="mt-2 text-xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-mute">{s.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function Career() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <H label="Career">Where I&apos;ve worked</H>
      <ol className="relative space-y-8 border-l border-line pl-8">
        {career.map((c, i) => (
          <motion.li key={c.role} {...reveal} transition={{ duration: 0.5, delay: i * 0.1 }} className="relative">
            <span className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full bg-accent ring-4 ring-bg" />
            <p className="font-mono text-xs text-mute">{c.period}</p>
            <h3 className="text-xl font-semibold">{c.role} <span className="text-mute">· {c.org}</span></h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-mute">
              {c.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}

export function Work() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <H label="Selected work">Things I&apos;ve shipped</H>
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.name}
            {...reveal}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="group rounded-xl border border-line bg-panel p-6"
          >
            {p.images?.length ? (
              <div className="mb-4 flex snap-x gap-2 overflow-x-auto rounded-lg">
                {p.images.map((src) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={src} src={src} alt={p.name} className="h-40 w-full shrink-0 snap-center rounded-lg border border-line object-cover object-top" />
                ))}
              </div>
            ) : (
              <div className="mb-4 h-32 rounded-lg bg-gradient-to-br from-accent/30 to-transparent" />
            )}
            <h3 className="text-lg font-semibold group-hover:text-accent">{p.name}</h3>
            <p className="mt-1 text-sm text-mute">{p.desc}</p>
            {p.impact && <p className="mt-2 border-l-2 border-accent pl-3 text-sm"><b className="text-accent">Impact:</b> {p.impact}</p>}
            {p.link && <a href={p.link} target="_blank" rel="noreferrer" className="mt-2 inline-block font-mono text-xs text-accent hover:underline">{p.link.replace("https://", "")} ↗</a>}
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => <Chip key={t}>{t}</Chip>)}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export function Workflows() {
  const color = { GHL: "text-orange-400", Zapier: "text-amber-400", n8n: "text-rose-400" };
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <H label="workflows.json">Sample automations</H>
      <div className="grid gap-5 md:grid-cols-3">
        {workflows.map((w, i) => (
          <motion.article key={w.name} {...reveal} transition={{ duration: 0.5, delay: i * 0.1 }} whileHover={{ y: -4 }}
            className="rounded-xl border border-line bg-panel p-6">
            {w.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={w.image} alt={w.name} className="mb-4 h-32 w-full rounded-lg border border-line object-cover" />
            ) : (
              <div className="mb-4 grid h-32 place-items-center rounded-lg border border-dashed border-line font-mono text-xs text-mute">screenshot soon</div>
            )}
            <p className={`font-mono text-xs font-bold ${color[w.platform]}`}>{w.platform}</p>
            <h3 className="mt-1 text-lg font-semibold">{w.name}</h3>
            <p className="mt-1 text-sm text-mute">{w.desc}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export function Pricing({ onSelect }: { onSelect: (name: string) => void }) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <H label="pricing.md">Pick a tier</H>
      <div className="grid gap-5 md:grid-cols-3">
        {tiers.map((t, i) => (
          <motion.div key={t.id} {...reveal} transition={{ duration: 0.5, delay: i * 0.1 }} whileHover={{ y: -4 }}
            className={`flex flex-col rounded-xl border bg-panel p-6 ${t.id === "intermediate" ? "border-accent" : "border-line"}`}>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-mute">{t.name}</p>
            <p className="mt-3 font-mono text-xs text-mute">{t.note}</p>
            <p className="text-4xl font-bold">{t.price}</p>
            <ul className="mt-4 flex-1 space-y-2 text-sm text-mute">
              {t.features.map((f) => <li key={f} className="flex gap-2"><span className="text-accent">▹</span>{f}</li>)}
            </ul>
            <button onClick={() => onSelect(t.name)}
              className={`mt-6 rounded-md px-5 py-3 text-sm font-semibold ${t.id === "intermediate" ? "bg-accent text-white hover:opacity-90" : "border border-line hover:bg-side"}`}>
              {t.id === "enterprise" ? "Request a quote" : "Select this tier"}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function Skills() {
  const entries = Object.entries(skills);
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <H label="skills.json">Toolbox</H>
      <motion.pre {...reveal} className="overflow-x-auto rounded-xl border border-line bg-panel p-6 font-mono text-sm leading-7">
        <div>{"{"}</div>
        {entries.map(([key, vals], i) => (
          <div key={key} className="pl-4">
            <span className="text-sky-400">&quot;{key}&quot;</span>: [
            {vals.map((v, k) => (
              <span key={v}>
                <span className="text-orange-400">&quot;{v}&quot;</span>
                {k < vals.length - 1 ? ", " : ""}
              </span>
            ))}
            ]{i < entries.length - 1 ? "," : ""}
          </div>
        ))}
        <div>{"}"}</div>
      </motion.pre>
    </section>
  );
}

export function Education() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <H label="education.yaml">Education</H>
      <motion.div {...reveal} className="rounded-xl border border-line bg-panel p-6 font-mono text-sm leading-7">
        {education.map((e) => (
          <div key={e.school}>
            <div><span className="text-sky-400">- school</span>: <span className="text-orange-400">{e.school}</span></div>
            <div className="pl-4"><span className="text-sky-400">degree</span>: <span className="text-orange-400">{e.degree}</span></div>
            <div className="pl-4"><span className="text-sky-400">period</span>: <span className="text-orange-400">{e.period}</span></div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <H label="testimonials.md">Kind words</H>
      <div className="grid gap-5 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <motion.blockquote key={i} {...reveal} transition={{ duration: 0.5, delay: i * 0.1 }} className="rounded-xl border border-line bg-panel p-6">
            <p className="text-sm italic text-mute">&gt; &ldquo;{t.quote}&rdquo;</p>
            <footer className="mt-4 text-sm font-semibold">
              {t.who}
              <span className="block font-normal text-mute">{t.title}</span>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}

export function Contact({ plan }: { plan: string }) {
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = `${String(f.get("name"))}${plan ? ` — ${plan}` : ""}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(String(f.get("msg")))}`;
  };
  const field = "w-full rounded-md border border-line bg-panel px-4 py-3 text-sm outline-none focus:border-accent";
  return (
    <section className="mx-auto max-w-2xl px-6 py-16">
      <H label="contact.css">Let&apos;s work together</H>
      {plan && <p className="mb-4 font-mono text-sm">Selected tier: <b className="text-accent">{plan}</b></p>}
      <form onSubmit={submit} className="space-y-4">
        <input name="name" required placeholder="Your name" className={field} />
        <textarea name="msg" required rows={5} placeholder="Tell me about your project" className={field} />
        <button className="rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white hover:opacity-90">Send message</button>
      </form>
      <div className="mt-8 flex flex-wrap gap-6 text-sm text-mute">
        <span className="flex items-center gap-2"><Mail size={16} />{profile.email}</span>
        <span className="flex items-center gap-2"><MapPin size={16} />{profile.location}</span>
      </div>
    </section>
  );
}

export function Booking() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <H label="booking.cal">Book a call</H>
      <p className="mb-6 max-w-xl text-mute">Pick an open slot and it goes straight onto my calendar. Times shown are in your local timezone.</p>
      {bookingUrl ? (
        <iframe src={bookingUrl} title="Book a call" loading="lazy" className="h-[640px] w-full rounded-xl border border-line bg-white" />
      ) : (
        <div className="grid h-64 place-items-center rounded-xl border border-dashed border-line bg-panel px-6 text-center font-mono text-sm text-mute">
          Booking calendar not connected yet. Add your Google appointment page URL to bookingUrl in content.ts.
        </div>
      )}
      {bookingUrl && <a href={bookingUrl} target="_blank" rel="noreferrer" className="mt-3 inline-block font-mono text-xs text-accent hover:underline">Open in a new tab ↗</a>}
    </section>
  );
}
