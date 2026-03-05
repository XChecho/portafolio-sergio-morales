export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5 text-center text-zinc-500 text-sm">
      <p>© {new Date().getFullYear()} Sergio Alejandro Morales Cuesta. Hecho con Next.js y Tailwind.</p>
    </footer>
  );
}
