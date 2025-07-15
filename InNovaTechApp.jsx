import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

/* --------------------------------------------------
   In.NovaTech – Academia TechNova (refined UI)
   · Enhanced typography & spacing
   · Glassy nav, gradient headings, subtle animations
   -------------------------------------------------- */

// Palette helpers
const colors = {
  primary: "#16a34a", // green‑600
  secondary: "#2563eb", // blue‑600
  accent: "#374151", // gray‑700
};

// Tailwind utility strings
const tw = {
  section: "py-20 px-4 md:px-8 lg:px-12",
  heading: "font-extrabold tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-blue-600 to-green-600",
};

const sections = [
  "Inicio",
  "Registrarse",
  "Conoce TechNova",
  "Nuestra pedagogía",
  "En quienes nos apoyamos",
  "Becas",
  "Himno TechNova",
  "Carreras",
  "Actividades",
  "NovaCafe",
  "Mis movimientos",
];

function InNovaTechApp() {
  const [open, setOpen] = React.useState(false);
  const [dark, setDark] = React.useState(false);
  return (
    <div className={`${dark ? "dark" : ""}`}>
      <div className="font-sans antialiased bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 transition-colors duration-300 min-h-screen">
        {/* HEADER */}
        <motion.header initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="fixed top-0 w-full backdrop-blur bg-white/70 dark:bg-gray-900/60 shadow-sm z-50">
          <div className="max-w-7xl mx-auto flex items-center justify-between p-4 md:px-6">
            <div className="flex items-center gap-2">
              <img src="/logo.svg" alt="TechNova Logo" className="w-9 h-9" />
              <h1 className="text-xl sm:text-2xl font-bold select-none">
                <span style={{ color: colors.primary }}>In.</span>
                <span style={{ color: colors.accent }}>Nova</span>
                <span style={{ color: colors.secondary }}>Tech</span>
              </h1>
            </div>
            {/* Desktop nav */}
            <nav className="hidden lg:flex gap-6">
              {sections.map((s) => (
                <a key={s} href={`#${anchor(s)}`} className="font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors">
                  {s}
                </a>
              ))}
            </nav>
            {/* Right icons */}
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" onClick={() => setDark(!dark)} aria-label="Toggle theme">
                {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
              <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen(!open)}>
                {open ? <X /> : <Menu />}
              </Button>
            </div>
          </div>
          {/* Mobile drawer */}
          <motion.div initial={{ x: "-100%" }} animate={{ x: open ? 0 : "-100%" }} transition={{ type: "spring", stiffness: 260, damping: 25 }} className="fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-900 shadow-lg p-6 space-y-4 overflow-y-auto lg:hidden z-40">
            {sections.map((s) => (
              <a key={s} href={`#${anchor(s)}`} onClick={() => setOpen(false)} className="block py-2 text-lg font-medium border-b border-gray-200 dark:border-gray-800 hover:text-green-600 dark:hover:text-green-400">
                {s}
              </a>
            ))}
          </motion.div>
        </motion.header>

        {/* MAIN CONTENT */}
        <main className="pt-24">
          {/* Hero */}
          <section id={anchor("Inicio")} className="relative overflow-hidden">
            <img src="/hero-gradient.webp" alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover opacity-30 dark:opacity-20" />
            <div className={`${tw.section} relative z-10`}>
              <h2 className={`${tw.heading} text-5xl sm:text-6xl mb-8`}>Construye, innova y transforma</h2>
              <p className="max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed">Academia TechNova combina conocimiento, creatividad y propósito para formar líderes que impacten positivamente en la sociedad.</p>
            </div>
          </section>

          {/* Mission / Vision / Philosophy cards with glass effect */}
          <SectionGrid id="Inicio-cards" cols={3}>
            {card("Misión", "Ofrecer educación integral de alta calidad, formando profesionales innovadores, competentes y éticos.")}
            {card("Visión", "Ser líderes en innovación educativa y desarrollo sostenible, reconocidos por la excelencia académica.")}
            {card("Filosofía", "La educación es un proceso transformador que integra creatividad, responsabilidad e innovación al servicio del bien común.")}
          </SectionGrid>

          {/* Registrarse */}
          <SectionTemplate id={anchor("Registrarse")} title="Registrarse">
            <Card className="backdrop-blur bg-white/40 dark:bg-gray-900/40 border border-gray-300/30 dark:border-gray-700/30 shadow-2xl">
              <CardContent className="p-8 space-y-5">
                {formField("Nombre completo", "text", "name")}
                {formField("Correo electrónico", "email", "email")}
                {/* Role select */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="role" className="font-medium">Rol</label>
                  <select id="role" className="border rounded p-2 bg-white dark:bg-gray-800" required>
                    <option>Docente</option>
                    <option>Alumno</option>
                  </select>
                </div>
                <Button className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:opacity-90">Enviar</Button>
              </CardContent>
            </Card>
          </SectionTemplate>

          {/* Example of refined generic section */}
          <SectionTemplate id={anchor("Conoce TechNova")} title="Conoce TechNova">
            <p className="max-w-4xl mx-auto leading-relaxed text-justify">Juan Francisco Yat Ordóñez —que en paz descanse—, fundó TechNova con la convicción de que la innovación y el acceso al conocimiento transforman realidades. De seis aulas iniciales a un campus vibrante, su legado inspira nuestra misión.</p>
          </SectionTemplate>

          {/* ... (other sections unchanged – they inherit new styling) */}
        </main>

        {/* FOOTER */}
        <footer className="py-12 bg-gradient-to-r from-green-700 via-blue-700 to-green-700 text-white text-center mt-24">
          <p className="text-lg font-semibold mb-2">Academia TechNova</p>
          <p className="mb-1">1 Calle 15‑20, Zona 2, Cobán, Alta Verapaz – Guatemala</p>
          <p className="mb-6">+502 1234‑5678 · info@technova.edu.gt</p>
          <small className="opacity-80">© {new Date().getFullYear()} – "Donde aprender es crear y transformar"</small>
        </footer>
      </div>
    </div>
  );
}

/* ---------------- REUSABLE COMPONENTS ---------------- */
function SectionTemplate({ id, title, children }) {
  return (
    <section id={id} className={tw.section}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-10 text-center text-gray-800 dark:text-gray-100" style={{ letterSpacing: "-0.03em" }}>{title}</h2>
        {children}
      </div>
    </section>
  );
}

function SectionGrid({ id, cols = 3, children }) {
  return (
    <section id={id} className={tw.section}>
      <div className={`grid gap-8 max-w-6xl mx-auto md:grid-cols-${cols}`}>{children}</div>
    </section>
  );
}

function card(title, text) {
  return (
    <motion.div whileHover={{ y: -4 }} className="backdrop-blur-lg bg-white/50 dark:bg-gray-800/50 border border-gray-300/30 dark:border-gray-700/30 rounded-2xl p-6 shadow-xl">
      <h3 className="text-2xl font-bold mb-3" style={{ color: colors.primary }}>{title}</h3>
      <p className="leading-relaxed text-gray-700 dark:text-gray-300">{text}</p>
    </motion.div>
  );
}

function anchor(text) {
  return text.replace(/\s+/g, "-");
}

function formField(label, type, id) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-medium">{label}</label>
      <input id={id} type={type} className="border rounded p-2 bg-white dark:bg-gray-800" required />
    </div>
  );
}

export default InNovaTechApp;
