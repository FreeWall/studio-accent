import Image from 'next/image';
import Link from 'next/link';

import FadeUp from '@/components/FadeUp';

const badge = (text: string) => (
  <span className="mb-4 inline-block rounded-full border border-[rgba(212,160,23,0.35)] bg-[rgba(212,160,23,0.15)] px-3 py-1 text-[0.78rem] font-semibold tracking-[0.08em] text-[#f0c040] uppercase">
    {text}
  </span>
);

const accentLine = (
  <span className="mt-3 block h-[3px] w-16 rounded bg-gradient-to-r from-[#d4a017] to-[#f0c040]" />
);

const btnPrimary =
  'inline-flex items-center gap-2 px-7 py-3 rounded text-sm font-semibold text-black bg-gradient-to-br from-[#a07810] to-[#d4a017] hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300 shadow-[0_0_0_0] hover:shadow-[0_0_40px_rgba(212,160,23,0.25)]';
const btnOutline =
  'inline-flex items-center gap-2 px-7 py-3 rounded text-sm font-semibold text-[#e8e8f0] border border-white/10 hover:border-[#d4a017] hover:text-[#f0c040] hover:-translate-y-0.5 transition-all duration-300';

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[90vh] w-full items-center overflow-hidden md:min-h-screen">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/placeholder_hero.webp"
            alt="Profesionální pozadí šablony"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0f]/30 to-[#0a0a0f]" />
        </div>
        <div className="relative z-10 mx-auto w-[90vw] max-w-[1200px] pt-[72px]">
          <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-[#d4a017] uppercase">
            Lokalita · Od roku 20XX
          </p>
          <h1 className="h1-hero mb-5 text-white">
            Nadpis, který
            <br />
            <span className="text-[#f0c040]">zaujme vaše klienty</span>
          </h1>
          <p className="mb-8 max-w-[55ch] text-lg text-[rgba(232,232,240,0.8)]">
            Stručný a výstižný popis vaší hlavní činnosti. Zde můžete v pár větách představit své
            největší přednosti a přidanou hodnotu, kterou přinášíte svým zákazníkům.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className={btnPrimary}
            >
              <span>🚀</span> Hlavní Akce
            </Link>
            <Link
              href="/about"
              className={btnOutline}
            >
              <span>ℹ️</span> Více informací
            </Link>
          </div>
          <div className="mt-16 flex flex-wrap gap-10">
            {[
              { num: '10+', label: 'Let zkušeností' },
              { num: '500+', label: 'Spokojených klientů' },
              { num: '100%', label: 'Spolehlivost' },
            ].map(({ num, label }) => (
              <div
                key={label}
                className="flex flex-col"
              >
                <span className="h3-card text-4xl leading-none text-[#f0c040]">{num}</span>
                <span className="mt-1 text-xs tracking-widest text-[#8888a0] uppercase">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TAG BAND */}
      <section className="w-full border-y border-white/10 bg-gradient-to-br from-[#18181f] to-[#111118] py-12">
        <div className="mx-auto w-[90vw] max-w-[1200px]">
          <div className="flex flex-wrap justify-center gap-2">
            {[
              '✨ Kvalita',
              '🚀 Rychlost',
              '🤝 Spolehlivost',
              '💡 Inovace',
              '📱 Responzivita',
              '🎨 Design',
              '📈 Růst',
              '🛡️ Bezpečnost',
            ].map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-[#8888a0]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* O NÁS */}
      <section className="w-full py-24">
        <div className="mx-auto w-[90vw] max-w-[1200px]">
          <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
            <FadeUp>
              {badge('Představení')}
              <h2 className="h2-section mb-2 text-white">Váš partner pro růst a úspěch</h2>
              {accentLine}
              <p className="mt-5 leading-relaxed text-[#8888a0]">
                Zde popište historii a poslání vaší firmy. Jak jste začínali, co vás motivuje a proč
                děláte to, co děláte. Tento prostor slouží k vybudování důvěry u potenciálního
                zákazníka.
              </p>
              <p className="mt-3 leading-relaxed text-[#8888a0]">
                Můžete zmínit technologie, které používáte, svůj unikátní přístup k práci nebo
                špičkový tým expertů, který stojí za vaším úspěchem.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className={btnPrimary}
                >
                  Dozvědět se více
                </Link>
                <Link
                  href="/sluzby"
                  className={btnOutline}
                >
                  Naše nabídka
                </Link>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="flex aspect-[4/3] w-full items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#444450]">
                <span className="text-xl">Obrázek týmu / prostor</span>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* SLUŽBY */}
      <section className="w-full border-t border-white/10 bg-[#111118] py-24">
        <div className="mx-auto w-[90vw] max-w-[1200px]">
          <FadeUp className="mb-10 text-center">
            {badge('Portfolio')}
            <h2 className="h2-section mb-2 text-white">Co vám nabízíme</h2>
            <span className="mx-auto mt-3 block h-[3px] w-16 rounded bg-gradient-to-r from-[#d4a017] to-[#f0c040]" />
            <p className="mx-auto mt-4 max-w-[56ch] text-[#8888a0]">
              Přehled hlavních služeb a řešení, které poskytujeme našim klientům na míru.
            </p>
          </FadeUp>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: '🛠️',
                title: 'Služba na míru A',
                desc: 'Podrobný popis první klíčové služby. Vysvětlete, v čem spočívá její hlavní přínos pro zákazníka.',
              },
              {
                icon: '⚡',
                title: 'Rychlá implementace',
                desc: 'Vysvětlete, jak efektivně a rychle dokážete doručit výsledky bez ztráty kvality.',
              },
              {
                icon: '📊',
                title: 'Analýza a Strategie',
                desc: 'Popište svůj proces plánování a analytický přístup, který zajišťuje nejlepší možné výsledky.',
              },
              {
                icon: '🛡️',
                title: 'Podpora a Servis',
                desc: 'Garance kvality a následná péče o klienta, kterou poskytujete po dokončení zakázky.',
              },
              {
                icon: '🌐',
                title: 'Moderní Technologie',
                desc: 'Využití nejnovějších postupů a nástrojů v oboru, které vám dávají náskok před konkurencí.',
              },
              {
                icon: '💎',
                title: 'Prémiová Kvalita',
                desc: 'Důraz na detail a vysokou úroveň zpracování u každého projektu bez výjimek.',
              },
            ].map(({ icon, title, desc }, i) => (
              <FadeUp
                key={title}
                delay={i * 0.05}
              >
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(212,160,23,0.3)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[rgba(212,160,23,0.2)] bg-[rgba(212,160,23,0.12)] text-2xl">
                    {icon}
                  </div>
                  <h3 className="h3-card mb-2 text-white">{title}</h3>
                  <p className="text-sm leading-relaxed text-[#8888a0]">{desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/sluzby"
              className={btnPrimary}
            >
              Kompletní ceník
            </Link>
          </div>
        </div>
      </section>

      {/* PRO PARTNERY */}
      <section className="w-full py-24">
        <div className="mx-auto w-[90vw] max-w-[1200px]">
          <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
            <FadeUp>
              <div className="flex aspect-[4/3] w-full items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#444450]">
                <span className="text-xl">Obrázek produktu / výsledku</span>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              {badge('Proč my')}
              <h2 className="h2-section mb-2 text-white">Vize dotažená k dokonalosti</h2>
              {accentLine}
              <p className="mt-5 leading-relaxed text-[#8888a0]">
                Proč byste měli spolupracovat právě s námi? Zakládáme si na individuálním přístupu
                ke každému projektu a na transparentnosti celého procesu.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                {[
                  {
                    title: 'Individuální přístup',
                    sub: 'Všechna řešení navrhujeme přesně podle vašich potřeb a cílů',
                  },
                  {
                    title: 'Transparentní komunikace',
                    sub: 'O průběhu projektu budete mít vždy aktuální a přehledné informace',
                  },
                  {
                    title: 'Odbornost a certifikace',
                    sub: 'Náš tým pravidelně sleduje nejnovější trendy v oboru',
                  },
                ].map(({ title, sub }) => (
                  <div
                    key={title}
                    className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:translate-x-1 hover:border-[rgba(212,160,23,0.3)]"
                  >
                    <span className="h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#d4a017]" />
                    <div>
                      <strong className="text-sm text-white">{title}</strong>
                      <span className="mt-0.5 block text-xs text-[#8888a0]">{sub}</span>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="w-full border-t border-white/10 bg-[#111118] py-24">
        <div className="mx-auto w-[90vw] max-w-[700px] text-center">
          {badge('Kontaktujte nás')}
          <FadeUp>
            <h2 className="h2-section mb-3 text-white">Připraveni na další krok?</h2>
            <p className="mb-8 text-base text-[#8888a0]">
              Rádi s vámi probereme váš projekt a navrhneme nejlepší možné řešení. Nezávazná
              konzultace je samozřejmostí.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className={btnPrimary}
              >
                ✉️ Odeslat poptávku
              </Link>
              <Link
                href="/reference"
                className={btnOutline}
              >
                🎨 Naše reference
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
