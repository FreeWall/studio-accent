import Head from 'next/head';
import Link from 'next/link';

import FadeUp from '@/components/FadeUp';
import PageHero from '@/components/PageHero';

const btnPrimary =
  'inline-flex items-center gap-2 px-7 py-3 rounded text-sm font-semibold text-black bg-gradient-to-br from-[#a07810] to-[#d4a017] hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300';
const btnOutline =
  'inline-flex items-center gap-2 px-7 py-3 rounded text-sm font-semibold text-[#e8e8f0] border border-white/10 hover:border-[#d4a017] hover:text-[#f0c040] hover:-translate-y-0.5 transition-all duration-300';

const projects = [
  {
    year: '2024 · Realizace',
    title: 'Referenční Projekt A',
    desc: 'Popis úspěšného projektu, který jsme realizovali pro významného klienta. Zaměření na inovace a efektivitu v oblasti X.',
    tags: ['Strategie', 'Design', 'Implementace'],
  },
  {
    year: '2023 · Analýza',
    title: 'Strategický Rozvoj Pro Klienta B',
    desc: 'Hloubková analýza procesů a návrh nového směru pro expanzi na trhu. Výsledkem bylo navýšení efektivity o XX %.',
    tags: ['Analýza', 'Konzultace'],
  },
  {
    year: '2022 · Komplexní Řešení',
    title: 'Projekt Gama – Digitální Transformace',
    desc: 'Kompletní přepracování stávajících systémů a jejich modernizace pomocí špičkových technologií současnosti.',
    tags: ['Transformace', 'Technologie'],
  },
  {
    year: '2021 · Design',
    title: 'Vizuální Identita Společnosti X',
    desc: 'Vytvoření nového vizuálního stylu a značky, která přesně odráží hodnoty a vizi moderního podnikání.',
    tags: ['Design', 'Branding'],
  },
  {
    year: '2020 · Produkce',
    title: 'Kampaň Pro Globální Trh',
    desc: 'Zajištění kompletní produkce a správy kampaně pro oslovení zákazníků napříč různými kanály.',
    tags: ['Marketing', 'Produkce'],
  },
  {
    year: 'Průběžně · Podpora',
    title: 'Dlouhodobá spolupráce s Partnery',
    desc: 'Zajištění neustálé technické podpory a rozvoje pro stabilní růst našich klíčových obchodních partnerů.',
    tags: ['Service', 'SLA'],
  },
];

const clients = [
  { name: 'Klient 1', sub: 'Lídr v oblasti průmyslu' },
  { name: 'Společnost Alfa', sub: 'Inovativní technologický startup' },
  { name: 'Organizace Beta', sub: 'Mezinárodní síť partnerů' },
  { name: 'Služba Gama', sub: 'Regionální poskytovatel řešení' },
  { name: 'Firma Delta', sub: 'Specialista na logistiku' },
  { name: 'Podnik Epsilon', sub: 'E-commerce platforma' },
  { name: 'Kolektiv Zeta', sub: 'Kreativní studio a agentura' },
  { name: 'Desítky dalších partnerů', sub: 'Od roku 20XX' },
];

export default function ReferencePage() {
  return (
    <>
      <Head>
        <title>Reference – Název Firmy</title>
        <meta
          name="description"
          content="Prohlédněte si naše úspěšné projekty a spokojené klienty, se kterými jsme spolupracovali."
        />
      </Head>

      <PageHero
        title={
          <>
            Reference & <span className="text-[#f0c040]">Projekty</span>
          </>
        }
        description="Přehled našich úspěšných realizací a dlouhodobých spoluprací s partnery napříč obory."
      />

      {/* Projekty */}
      <section className="w-full py-24">
        <div className="mx-auto w-[90vw] max-w-[1200px]">
          <FadeUp className="mb-10">
            <span className="mb-4 inline-block rounded-full border border-[rgba(212,160,23,0.35)] bg-[rgba(212,160,23,0.15)] px-3 py-1 text-[0.78rem] font-semibold tracking-[0.08em] text-[#f0c040] uppercase">
              Highlights
            </span>
            <h2 className="h2-section mb-2 text-white">Vybrané projekty</h2>
            <span className="mt-3 block h-[3px] w-16 rounded bg-gradient-to-r from-[#d4a017] to-[#f0c040]" />
          </FadeUp>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map(({ year, title, desc, tags }, i) => (
              <FadeUp
                key={title}
                delay={i * 0.06}
              >
                <div className="h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(212,160,23,0.35)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
                  <div className="p-6">
                    <div className="mb-1 text-xs font-bold tracking-wider text-[#d4a017]">
                      {year}
                    </div>
                    <h3 className="h3-card mb-2 text-white">{title}</h3>
                    <p className="mb-4 text-sm leading-relaxed text-[#8888a0]">{desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#8888a0]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Klienti */}
      <section className="w-full border-t border-white/10 bg-[#111118] py-24">
        <div className="mx-auto w-[90vw] max-w-[1200px]">
          <FadeUp className="mb-10">
            <span className="mb-4 inline-block rounded-full border border-[rgba(212,160,23,0.35)] bg-[rgba(212,160,23,0.15)] px-3 py-1 text-[0.78rem] font-semibold tracking-[0.08em] text-[#f0c040] uppercase">
              Partneři & Klienti
            </span>
            <h2 className="h2-section mb-2 text-white">Kdo nám důvěřuje</h2>
            <span className="mt-3 block h-[3px] w-16 rounded bg-gradient-to-r from-[#d4a017] to-[#f0c040]" />
            <p className="mt-4 max-w-[56ch] text-[#8888a0]">
              Měli jsme tu čest spolupracovat s významnými značkami i nadějnými projekty od roku
              20XX.
            </p>
          </FadeUp>
          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {clients.map(({ name, sub }, i) => (
              <FadeUp
                key={name}
                delay={i * 0.05}
              >
                <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:translate-x-1 hover:border-[rgba(212,160,23,0.3)]">
                  <span className="h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#d4a017]" />
                  <div>
                    <strong className="text-sm text-white">{name}</strong>
                    <span className="mt-0.5 block text-xs text-[#8888a0]">{sub}</span>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* portfolio link */}
      <section className="w-full py-24">
        <div className="mx-auto w-[90vw] max-w-[1200px]">
          <FadeUp className="mb-10 text-center">
            <span className="mb-4 inline-block rounded-full border border-[rgba(212,160,23,0.35)] bg-[rgba(212,160,23,0.15)] px-3 py-1 text-[0.78rem] font-semibold tracking-[0.08em] text-[#f0c040] uppercase">
              Portfolio
            </span>
            <h2 className="h2-section mb-2 text-white">Prohlédněte si detaily</h2>
            <span className="mx-auto mt-3 block h-[3px] w-16 rounded bg-gradient-to-r from-[#d4a017] to-[#f0c040]" />
          </FadeUp>
          <FadeUp>
            <div className="mx-auto max-w-[700px] rounded-2xl border border-white/10 bg-white/[0.04] p-8 text-center">
              <p className="mb-6 leading-relaxed text-[#8888a0]">
                Podrobné případové studie a další ukázky našich projektů najdete v našem online
                portfoliu nebo v externí prezentaci.
              </p>
              <a
                href="https://portfolio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-lg font-semibold text-[#f0c040] transition-opacity hover:opacity-80"
              >
                <span>🌐</span>
                Otevřít portfolio →
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full border-t border-white/10 bg-[#111118] py-24">
        <div className="mx-auto w-[90vw] max-w-[650px] text-center">
          <FadeUp>
            <h2 className="h2-section mb-3 text-white">Máte v plánu nový projekt?</h2>
            <p className="mb-8 text-[#8888a0]">
              Staňte se naší další úspěšnou referencí. Pomůžeme vám zrealizovat vaše vize.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className={btnPrimary}
              >
                ✉️ Poptat spolupráci
              </Link>
              <Link
                href="/sluzby"
                className={btnOutline}
              >
                📋 Naše služby
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
