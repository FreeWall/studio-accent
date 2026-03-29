import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const navLinks = [
  { href: '/', label: 'Úvod' },
  { href: '/about', label: 'O nás' },
  { href: '/sluzby', label: 'Služby' },
  { href: '/reference', label: 'Reference' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = router.pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 h-[72px] transition-all duration-300 ${
        scrolled
          ? 'bg-[rgba(10,10,15,0.85)] shadow-[0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl'
          : ''
      }`}
    >
      <div className="mx-auto flex h-full w-[90vw] max-w-[1200px] items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex flex-col gap-0 leading-none"
        >
          <span className="font-outfit text-xl font-extrabold tracking-wide text-white">
            Název Firmy
          </span>
          <span className="text-[0.7rem] tracking-[0.18em] text-[#d4a017] uppercase">
            Podtitul nebo Obor
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`rounded px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  pathname === href
                    ? 'bg-white/5 text-[#f0c040]'
                    : 'text-[#8888a0] hover:bg-white/5 hover:text-white'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className={`ml-1 rounded bg-gradient-to-br from-[#a07810] to-[#d4a017] px-4 py-2 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-px hover:opacity-90 ${
                pathname === '/contact' ? 'opacity-90' : ''
              }`}
            >
              Kontakt
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="flex cursor-pointer flex-col gap-[5px] border-none bg-transparent p-1.5 md:hidden"
          aria-label="Menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span
            className={`block h-0.5 w-6 rounded bg-[#e8e8f0] transition-transform duration-300 ${
              menuOpen ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 rounded bg-[#e8e8f0] transition-opacity duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 rounded bg-[#e8e8f0] transition-transform duration-300 ${
              menuOpen ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed top-[72px] right-0 left-0 flex flex-col gap-2 border-b border-white/10 bg-[rgba(10,10,15,0.97)] px-8 pt-4 pb-8 backdrop-blur-xl transition-all duration-300 md:hidden ${
          menuOpen
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-full opacity-0'
        }`}
      >
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            onClick={() => setMenuOpen(false)}
            className={`rounded px-4 py-3 text-base font-medium transition-all duration-300 ${
              pathname === href
                ? 'bg-white/5 text-[#f0c040]'
                : 'text-[#8888a0] hover:bg-white/5 hover:text-white'
            }`}
          >
            {label}
          </Link>
        ))}
        <Link
          href="/contact"
          onClick={() => setMenuOpen(false)}
          className="mt-2 rounded bg-gradient-to-br from-[#a07810] to-[#d4a017] px-4 py-3 text-center text-base font-bold text-black"
        >
          Kontakt
        </Link>
      </div>
    </nav>
  );
}
