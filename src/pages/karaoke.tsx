import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import FadeUp from '@/components/FadeUp';
import PageHero from '@/components/PageHero';

const btnPrimary =
  'inline-flex items-center gap-2 px-7 py-3 rounded text-sm font-semibold text-black bg-gradient-to-br from-[#a07810] to-[#d4a017] hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300';
const btnOutline =
  'inline-flex items-center gap-2 px-7 py-3 rounded text-sm font-semibold text-[#e8e8f0] border border-white/10 hover:border-[#d4a017] hover:text-[#f0c040] hover:-translate-y-0.5 transition-all duration-300';

const badge = (text: string) => (
  <span className="mb-4 inline-block rounded-full border border-[rgba(212,160,23,0.35)] bg-[rgba(212,160,23,0.15)] px-3 py-1 text-[0.78rem] font-semibold tracking-[0.08em] text-[#f0c040] uppercase">
    {text}
  </span>
);

const accentLine = (
  <span className="mt-3 block h-[3px] w-16 rounded bg-gradient-to-r from-[#d4a017] to-[#f0c040]" />
);

const formats = [
  { icon: '💿', name: 'CDG', desc: 'Klasický formát pro karaoke přehrávače' },
  { icon: '🎬', name: 'MP4 Video', desc: 'HD video pro TV a projektory' },
  { icon: '🎵', name: 'MP3+G', desc: 'Komprimovaný CDG formát' },
  { icon: '📱', name: 'Mobilní', desc: 'Kompatibilní s karaoke aplikacemi' },
];

const features = [
  {
    icon: '🎤',
    title: 'Přesná re-produkce',
    desc: 'Věrná kopie originální nahrávky bez vokálů — zachovává charakter písně.',
  },
  {
    icon: '📝',
    title: 'Synchronizovaný text',
    desc: 'Precizní timing textu slova po slovu pro plynulý zážitek ze zpívání.',
  },
  {
    icon: '🎵',
    title: 'Profesionální master',
    desc: 'Výstup optimalizovaný pro karaoke zařízení, TV systémy i profesionální sety.',
  },
];

export default function KaraokePage() {
  return (
    <>
      <Head>
        <title>Karaoke Produkce – Accent Recording Studio</title>
        <meta
          name="description"
          content="Profesionální karaoke produkce ve studiu Accent Plzeň. CDG, MP4 formáty, česky a slovensky. Online shop karaokesong.eu."
        />
      </Head>

      <PageHero
        title={
          <>
            Karaoke <span className="text-[#f0c040]">Produkce</span>
          </>
        }
        description="Výroba profesionálních karaoke stop v češtině a slovenštině. CDG, MP4 a další formáty pro domácí i profesionální použití."
      />

      {/* Info + foto */}
      <section className="w-full py-24">
        <div className="mx-auto w-[90vw] max-w-[1200px]">
          <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
            <FadeUp>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/images/karaoke_stage.png"
                  alt="Karaoke scéna studia Accent"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              {badge('Co nabízíme')}
              <h2 className="h2-section mb-2 text-white">Profesionální karaoke na míru</h2>
              {accentLine}
              <p className="mt-5 leading-relaxed text-[#8888a0]">
                Studio Accent je jedním z průkopníků profesionální karaoke produkce v České
                republice. Za léta provozu jsme vybudovali rozsáhlý katalog stovek titulů — výhradně
                v češtině a slovenštině.
              </p>
              <p className="mt-3 leading-relaxed text-[#8888a0]">
                Každá karaoke stopa je pečlivě zpracována — od přesné re-produkce hudebního
                doprovodu přes synchronizaci textu až po finální mastering pro příslušný distribuční
                formát.
              </p>
              <div className="mt-6 border-t border-white/10">
                {features.map(({ icon, title, desc }) => (
                  <div
                    key={title}
                    className="flex items-start gap-4 border-b border-white/10 py-5"
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-[rgba(212,160,23,0.2)] bg-[rgba(212,160,23,0.1)] text-2xl">
                      {icon}
                    </div>
                    <div>
                      <h4 className="mb-1 text-[1rem] font-bold text-white">{title}</h4>
                      <p className="text-sm leading-relaxed text-[#8888a0]">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Formáty */}
      <section className="w-full border-t border-white/10 bg-[#111118] py-24">
        <div className="mx-auto w-[90vw] max-w-[1200px]">
          <FadeUp className="mb-10 text-center">
            {badge('Formáty')}
            <h2 className="h2-section mb-2 text-white">Dostupné formáty</h2>
            <span className="mx-auto mt-3 block h-[3px] w-16 rounded bg-gradient-to-r from-[#d4a017] to-[#f0c040]" />
            <p className="mx-auto mt-4 max-w-[56ch] text-[#8888a0]">
              Karaoke stopy dodáváme ve formátech kompatibilních s většinou dostupných přehrávačů a
              systémů.
            </p>
          </FadeUp>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {formats.map(({ icon, name, desc }, i) => (
              <FadeUp
                key={name}
                delay={i * 0.07}
              >
                <div className="flex min-w-[160px] flex-col items-center rounded-2xl border border-white/10 bg-white/[0.04] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(212,160,23,0.35)]">
                  <span className="mb-3 text-4xl">{icon}</span>
                  <span className="mb-1 font-bold text-white">{name}</span>
                  <span className="text-center text-xs text-[#8888a0]">{desc}</span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Online shop */}
      <section className="w-full py-24">
        <div className="mx-auto w-[90vw] max-w-[1200px]">
          <FadeUp>
            <div className="rounded-[2rem] border border-[rgba(212,160,23,0.3)] bg-gradient-to-br from-[rgba(212,160,23,0.15)] to-[rgba(212,160,23,0.05)] p-8 text-center md:p-14">
              {badge('Online shop')}
              <h2 className="h2-section mb-4 text-white">Nakupujte karaoke online</h2>
              <a
                href="https://karaokesong.eu"
                target="_blank"
                rel="noopener noreferrer"
                className="my-4 block text-2xl font-bold text-[#f0c040] transition-opacity hover:opacity-80"
              >
                🛒 karaokesong.eu
              </a>
              <p className="mx-auto mb-8 max-w-[55ch] leading-relaxed text-[#8888a0]">
                Na naší specializované platformě najdete stovky českých a slovenských karaoke titulů
                ke stažení. Okamžitý download, žádné předplatné, platba kartou.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://karaokesong.eu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={btnPrimary}
                >
                  🎤 Přejít do shopu
                </a>
                <Link
                  href="/contact"
                  className={btnOutline}
                >
                  📧 Zakázková výroba
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Karaoke show */}
      <section className="w-full border-t border-white/10 bg-[#111118] py-24">
        <div className="mx-auto w-[90vw] max-w-[1200px]">
          <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
            <FadeUp>
              {badge('Živá show')}
              <h2 className="h2-section mb-2 text-white">Karaoke show na akce</h2>
              {accentLine}
              <p className="mt-5 leading-relaxed text-[#8888a0]">
                Hledáte program pro firemní večírek, oslavu nebo kulturní akci? Naše agentura
                zajistí profesionální karaoke show kompletně na klíč — od ozvučení přes katalog
                písní až po moderování.
              </p>
              <p className="mt-3 leading-relaxed text-[#8888a0]">
                Disponujeme velkým katalogem česky a slovensky zpívaných titulů pro nejrůznější
                generace a vkus.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className={btnPrimary}
                >
                  📞 Nezávazná poptávka
                </Link>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/images/karaoke_stage.png"
                  alt="Karaoke live show"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
