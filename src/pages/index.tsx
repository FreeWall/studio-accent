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
            src="/images/studio/control_room.jpg"
            alt="Profesionální pozadí šablony"
            fill
            className="object-cover brightness-35 saturate-[70%]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(10,10,15,0.65)] via-[rgba(10,10,15,0.3)] to-[rgba(10,10,15,0.8)]" />
        </div>
        <div className="relative z-10 mx-auto w-[90vw] max-w-[1200px] pt-[72px]">
          <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-[#d4a017] uppercase">
            Plzeň · od roku 1991
          </p>
          <h1 className="h1-hero mb-5 text-white">
            Zvuk, který
            <br />
            <span className="text-[#f0c040]">přesahuje čas</span>
          </h1>
          <p className="mb-8 max-w-[55ch] text-lg text-[rgba(232,232,240,0.8)]">
            Profesionální nahrávací studio s více než 28 lety zkušeností. Nahrávání, mastering,
            audio/video produkce, dabing a karaoke — vše pod jednou střechou.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className={btnPrimary}
            >
              <span>📞</span> Zarezervovat termín
            </Link>
            <Link
              href="/studio"
              className={btnOutline}
            >
              <span>🎙</span> Prohlédnout studio
            </Link>
          </div>
          <div className="mt-16 flex flex-wrap gap-10">
            {[
              { num: '28+', label: 'Let zkušeností' },
              { num: '500+', label: 'Projektů' },
              { num: '100%', label: 'Spokojenost' },
            ].map(({ num, label }) => (
              <div
                key={label}
                className="flex flex-col"
              >
                <span className="font-head text-4xl leading-none font-bold text-[#f0c040]">
                  {num}
                </span>
                <span className="mt-1 text-xs tracking-widest text-[rgba(232,232,240,0.8)] uppercase">
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
              '🎵 Nahrávání',
              '🎚 Mastering',
              '✂️ Editace',
              '🎬 Dabing',
              '🎤 Karaoke',
              '🎼 Aranžmá',
              '📀 Publikace',
              '🎸 Agentura',
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
              {badge('O nás')}
              <h2 className="h2-section mb-2 text-white">Víc než jen nahrávací studio</h2>
              {accentLine}
              <p className="mt-5 leading-relaxed text-[#8888a0]">
                Studio Accent vzniklo v roce 1991 v Plzni a od té doby se stalo domovem stovek
                umělců, kapel a projektů. Naši zkušení zvukáři jsou vašimi partnery — od prvního
                akkordu po finální master.
              </p>
              <p className="mt-3 leading-relaxed text-[#8888a0]">
                Disponujeme profesionálním vybavením, akusticky ošetřenými prostory a letitými
                know-how v oblasti záznamu, mixáže, dabingu i specializované karaoke produkce.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/studio"
                  className={btnPrimary}
                >
                  Prohlédnout studio
                </Link>
                <Link
                  href="/sluzby"
                  className={btnOutline}
                >
                  Naše služby
                </Link>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/images/studio/main_studio.jpg"
                  alt="Hlavní nahrávací prostor studia Accent"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* SLUŽBY */}
      <section className="w-full border-t border-white/10 bg-[#111118] py-24">
        <div className="mx-auto w-[90vw] max-w-[1200px]">
          <FadeUp className="mb-10 text-center">
            {badge('Služby')}
            <h2 className="h2-section mb-2 text-white">Co pro vás uděláme</h2>
            <span className="mx-auto mt-3 block h-[3px] w-16 rounded bg-gradient-to-r from-[#d4a017] to-[#f0c040]" />
            <p className="mx-auto mt-4 max-w-[56ch] text-[#8888a0]">
              Komplexní portfolio audio a video služeb pro umělce, firmy i komerční projekty.
            </p>
          </FadeUp>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: '🎙',
                title: 'Nahrávání & Produkce',
                desc: 'Profesionální nahrávání zpěvu, nástrojů, mluveného slova. Kompletní audio produkce od základů po hotový produkt.',
              },
              {
                icon: '🎚',
                title: 'Mix & Mastering',
                desc: 'Pečlivý mix se zachováním charakteru nahrávky. Mastering připravený pro streamovací platformy, CD i vinyl.',
              },
              {
                icon: '🎬',
                title: 'Dabing & Hlas',
                desc: 'Profesionální dabing filmů, reklam a firemních videí. Spolupracujeme s ostřílenými hlasovými herci.',
              },
              {
                icon: '🎤',
                title: 'Karaoke Produkce',
                desc: 'Specializovaná výroba karaoke stop v profesionální kvalitě. Provozujeme také online shop karaokesong.eu.',
              },
              {
                icon: '🎸',
                title: 'Umělecká Agentura',
                desc: 'Zastupujeme kapely ABBA Star, Sifon Original, Queenways a Electric Therapy. Zajišťujeme ozvučení akcí.',
              },
              {
                icon: '🎼',
                title: 'Kompozice & Aranžmá',
                desc: 'Komponujeme hudbu na míru, aranžujeme pro různé obsazení, píšeme partitury a MIDI produkce.',
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
              Zobrazit ceník
            </Link>
          </div>
        </div>
      </section>

      {/* PRO PARTNERY */}
      <section className="w-full py-24">
        <div className="mx-auto w-[90vw] max-w-[1200px]">
          <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
            <FadeUp>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/images/studio/equipment_rack.jpg"
                  alt="Studiová technika a vybavení"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              {badge('Pro umělce')}
              <h2 className="h2-section mb-2 text-white">Váš zvuk, vaše vize</h2>
              {accentLine}
              <p className="mt-5 leading-relaxed text-[#8888a0]">
                Ať jste začínající zpěvák nebo etablovaná kapela, přistupujeme ke každému projektu
                individuálně. Naším cílem je zachytit váš originální zvuk a přivést ho k
                dokonalosti.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                {[
                  {
                    title: 'Zvukotěsná nahrávací kabina',
                    sub: 'Ideální pro zpěv, akustické nástroje a mluvené slovo',
                  },
                  {
                    title: 'Akusticky ošetřená řídicí místnost',
                    sub: 'Přesné referenční poslechy pro spolehlivý mix',
                  },
                  {
                    title: 'Profesionální konzole & hardware',
                    sub: 'Analogový teplo i digitální přesnost v jednom',
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
          {badge('Začněte dnes')}
          <FadeUp>
            <h2 className="h2-section mb-3 text-white">Připraveni nahrávat?</h2>
            <p className="mb-8 text-base text-[#8888a0]">
              Kontaktujte nás a domluvíme termín, který vám vyhovuje. Konzultace zdarma.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className={btnPrimary}
              >
                <span>📞</span> Kontaktovat studio
              </Link>
              <Link
                href="/reference"
                className={btnOutline}
              >
                <span>🎵</span> Ukázky nahrávek
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
