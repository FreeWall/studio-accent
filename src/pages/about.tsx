import Head from 'next/head';
import Link from 'next/link';

import FadeUp from '@/components/FadeUp';
import PageHero from '@/components/PageHero';

const btnPrimary =
  'inline-flex items-center gap-2 px-7 py-3 rounded text-sm font-semibold text-black bg-gradient-to-br from-[#a07810] to-[#d4a017] hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300';
const btnOutline =
  'inline-flex items-center gap-2 px-7 py-3 rounded text-sm font-semibold text-[#e8e8f0] border border-white/10 hover:border-[#d4a017] hover:text-[#f0c040] hover:-translate-y-0.5 transition-all duration-300';

function SpecTable({ rows }: { rows: [string, string][] }) {
  return (
    <table className="mt-6 w-full border-collapse">
      <tbody>
        {rows.map(([label, value]) => (
          <tr
            key={label}
            className="border-b border-white/10"
          >
            <td className="w-2/5 py-3 pr-4 text-sm text-[#8888a0]">{label}</td>
            <td className="py-3 text-sm font-medium text-white">{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const badge = (text: string) => (
  <span className="mb-4 inline-block rounded-full border border-[rgba(212,160,23,0.35)] bg-[rgba(212,160,23,0.15)] px-3 py-1 text-[0.78rem] font-semibold tracking-[0.08em] text-[#f0c040] uppercase">
    {text}
  </span>
);

const accentLine = (
  <span className="mt-3 block h-[3px] w-16 rounded bg-gradient-to-r from-[#d4a017] to-[#f0c040]" />
);

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>O nás – Název Firmy</title>
        <meta
          name="description"
          content="Seznamte se s naší společností, našimi prostory a týmem odborníků."
        />
      </Head>

      <PageHero
        title={
          <>
            Kdo <span className="text-[#f0c040]">Jsme</span>
          </>
        }
        description="Představení našich hodnot, vize a prostor, ve kterých pro vás vytváříme ty nejlepší výsledky."
      />

      {/* Sekce A */}
      <section className="w-full py-24">
        <div className="mx-auto w-[90vw] max-w-[1200px]">
          <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
            <FadeUp>
              <div className="flex aspect-[4/3] w-full items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#444450]">
                <span className="text-xl">Obrázek pracoviště A</span>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              {badge('Naše zázemí')}
              <h2 className="h2-section mb-2 text-white">Moderní pracoviště A</h2>
              {accentLine}
              <p className="mt-5 leading-relaxed text-[#8888a0]">
                Zde popište hlavní pracovní prostory vaší firmy. Jak jsou vybaveny, jakou mají
                atmosféru a proč jsou ideální pro dosahování špičkových výsledků. Tento prostor by
                měl odrážet profesionalitu a kvalitu vaší práce.
              </p>
              <p className="mt-3 leading-relaxed text-[#8888a0]">
                Můžete uvést konkrétní technologie nebo metodiky, které v těchto prostorách
                využíváte k naplnění potřeb vašich klientů.
              </p>
              <SpecTable
                rows={[
                  ['Hlavní vybavení', 'Specifikace vybavení A'],
                  ['Technologie', 'Moderní technologický stack'],
                  ['Kapacita', 'Možnosti odbavení projektů'],
                  ['Standardy', 'Vysoká úroveň kvality / ISO'],
                  ['Dostupnost', 'Podle dohody / Non-stop'],
                ]}
              />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Sekce B */}
      <section className="w-full border-t border-white/10 bg-[#111118] py-24">
        <div className="mx-auto w-[90vw] max-w-[1200px]">
          <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
            <FadeUp>
              {badge('Specializované prostory')}
              <h2 className="h2-section mb-2 text-white">Zázemí pro detaily B</h2>
              {accentLine}
              <p className="mt-5 leading-relaxed text-[#8888a0]">
                Popis vedlejšího nebo specializovaného pracoviště. Vysvětlete, k čemu konkrétně
                slouží a jak doplňuje vaši celkovou nabídku. Zaměřte se na detaily, které vás
                odlišují od konkurence.
              </p>
              <p className="mt-3 leading-relaxed text-[#8888a0]">
                Zdůrazněte klid pro práci, špičkovou ergonomii nebo unikátní vlastnosti tohoto
                konkrétního místa.
              </p>
              <SpecTable
                rows={[
                  ['Parametr 1', 'Popis hodnoty 1'],
                  ['Parametr 2', 'Popis hodnoty 2'],
                  ['Monitorování', 'Kontrolní mechanismy'],
                  ['Prostředí', 'Optimalizované pro výkon'],
                  ['Tým', 'Specialisté v dané oblasti'],
                ]}
              />
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="flex aspect-[4/3] w-full items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#444450]">
                <span className="text-xl">Obrázek zázemí B</span>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section className="w-full py-24">
        <div className="mx-auto w-[90vw] max-w-[1200px]">
          <FadeUp className="mb-10 text-center">
            <span className="mb-4 inline-block rounded-full border border-[rgba(212,160,23,0.35)] bg-[rgba(212,160,23,0.15)] px-3 py-1 text-[0.78rem] font-semibold tracking-[0.08em] text-[#f0c040] uppercase">
              Galerie
            </span>
            <h2 className="h2-section mb-2 text-white">Naše firma v obrazech</h2>
            <span className="mx-auto mt-3 block h-[3px] w-16 rounded bg-gradient-to-r from-[#d4a017] to-[#f0c040]" />
            <p className="mt-4 text-[#8888a0]">
              Nahlédněte do našeho prostředí a podívejte se, jak pracujeme.
            </p>
          </FadeUp>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <FadeUp
                key={i}
                delay={i * 0.05}
              >
                <div className="group relative flex aspect-[4/3] cursor-pointer items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/5 text-[#444450]">
                  <span className="text-sm">Placeholder {i}</span>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="text-2xl text-white">🔍</span>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full border-t border-white/10 bg-[#111118] py-24">
        <div className="mx-auto w-[90vw] max-w-[650px] text-center">
          <FadeUp>
            <h2 className="h2-section mb-3 text-white">Chcete se k nám přidat?</h2>
            <p className="mb-8 text-[#8888a0]">
              Máte zájem o naše služby nebo s námi chcete spolupracovat? Ozvěte se nám.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className={btnPrimary}
              >
                ✉️ Kontaktovat nás
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
