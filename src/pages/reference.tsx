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
    year: '2023 · Rock',
    title: 'Sifon – 100 Hříchů',
    desc: 'Reedice legendárního alba skupiny Sifon, původně vydaného v roce 1991/1992 na gramofonových deskách a kazetách. Vydáno ve spolupráci s AC MUSIC.',
    tags: ['Nahrávání', 'Mastering', 'CD'],
  },
  {
    year: '2022 · Sborová hudba',
    title: 'Vozilo se na jaře – Domažlický sbor',
    desc: 'Nahrávka tradiční lidové hudby Domažlického pěveckého sboru. Zachycení autentičnosti a čistoty sborového zpěvu v akusticky přirozeném prostoru.',
    tags: ['Nahrávání', 'Mix'],
  },
  {
    year: '2021 · Rock / Metal',
    title: 'AKTA X – Rock Band Sifon',
    desc: 'Energická rocková nahrávka s plným živým zvukem. Kompletní produkce od nahrávání přes mix až po mastering a přípravu pro distribuci.',
    tags: ['Kompletní produkce', 'Streaming'],
  },
  {
    year: '2020 · Pop / Rock',
    title: 'Kolem mě – Rock Band',
    desc: 'Melodická pop-rocková nahrávka s bohatou instrumentací. Vícevrstvé vokální harmonie a dynamická produkce pro rozhlasový i streamovací formát.',
    tags: ['Nahrávání', 'Mix', 'Radio master'],
  },
  {
    year: '2019 · Dabing',
    title: 'Komerční spoty – různí klienti',
    desc: 'Natočení a post-produkce reklamních spotů pro televizní i online distribuci. Voice-over, zvukový design a finální mix pro broadcast.',
    tags: ['Dabing', 'Post-produkce', 'TV'],
  },
  {
    year: 'Průběžně · Karaoke',
    title: 'Karaoke katalog – 500+ titulů',
    desc: 'Rozsáhlý katalog českých a slovenských karaoke stop dostupný na karaokesong.eu. Profesionální re-backing a synchronizace textu.',
    tags: ['Karaoke', 'CDG / MP4'],
  },
];

const clients = [
  { name: 'Sifon', sub: 'Legendární rock, Plzeň' },
  { name: 'ABBA Star', sub: 'Pop tribute show' },
  { name: 'Queenways', sub: 'Queen tribute band' },
  { name: 'Electric Therapy', sub: 'Rock / metal' },
  { name: 'Domažlický pěvecký sbor', sub: 'Tradiční sborová hudba' },
  { name: 'Palice', sub: 'Rock band' },
  { name: 'Artur', sub: 'Rock / pop' },
  { name: 'Stovky dalších umělců', sub: 'od roku 1991' },
];

export default function ReferencePage() {
  return (
    <>
      <Head>
        <title>Reference – Accent Recording Studio</title>
        <meta
          name="description"
          content="Ukázky práce nahrávacího studia Accent – kapely, umělci a projekty, které jsme natočili."
        />
      </Head>

      <PageHero
        title={
          <>
            Reference & <span className="text-[#f0c040]">Ukázky</span>
          </>
        }
        description="Přehled umělců, kapel a projektů, které studio Accent za dobu své existence natočilo."
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
              Umělci & kapely
            </span>
            <h2 className="h2-section mb-2 text-white">Kdo u nás nahrával</h2>
            <span className="mt-3 block h-[3px] w-16 rounded bg-gradient-to-r from-[#d4a017] to-[#f0c040]" />
            <p className="mt-4 max-w-[56ch] text-[#8888a0]">
              Výběr z více než 28 let spolupráce s českými a slovenskými interprety.
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
              Audio
            </span>
            <h2 className="h2-section mb-2 text-white">Poslechněte si naší práci</h2>
            <span className="mx-auto mt-3 block h-[3px] w-16 rounded bg-gradient-to-r from-[#d4a017] to-[#f0c040]" />
          </FadeUp>
          <FadeUp>
            <div className="mx-auto max-w-[700px] rounded-2xl border border-white/10 bg-white/[0.04] p-8 text-center">
              <p className="mb-6 leading-relaxed text-[#8888a0]">
                Kompletní sbírku nahrávek, demo spotů a ukázek z produkce studia Accent najdete na
                našem SoundCloud profilu.
              </p>
              <a
                href="https://soundcloud.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-lg font-semibold text-[#f0c040] transition-opacity hover:opacity-80"
              >
                <span>☁</span>
                Přejít na SoundCloud →
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full border-t border-white/10 bg-[#111118] py-24">
        <div className="mx-auto w-[90vw] max-w-[650px] text-center">
          <FadeUp>
            <h2 className="h2-section mb-3 text-white">Chcete být součástí naší výzvy?</h2>
            <p className="mb-8 text-[#8888a0]">
              Přidejte se ke stovkám umělců, kteří nám svěřili svůj zvuk.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className={btnPrimary}
              >
                📞 Domluvit termín
              </Link>
              <Link
                href="/sluzby"
                className={btnOutline}
              >
                💰 Zobrazit ceny
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
