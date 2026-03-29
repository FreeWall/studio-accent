import Head from 'next/head';
import Link from 'next/link';

import FadeUp from '@/components/FadeUp';
import PageHero from '@/components/PageHero';

const btnPrimary =
  'inline-flex items-center gap-2 px-7 py-3 rounded text-sm font-semibold text-black bg-gradient-to-br from-[#a07810] to-[#d4a017] hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300 w-full justify-center';
const btnOutline =
  'inline-flex items-center gap-2 px-7 py-3 rounded text-sm font-semibold text-[#e8e8f0] border border-white/10 hover:border-[#d4a017] hover:text-[#f0c040] hover:-translate-y-0.5 transition-all duration-300 w-full justify-center';

const serviceCards = [
  {
    icon: '🎙',
    title: 'Nahrávání',
    desc: 'Profesionální záznamy zpěvu, nástrojů i mluveného slova v akusticky ošetřeném prostoru.',
    items: [
      'Zpěv & vokály',
      'Akustické nástroje',
      'Elektrické nástroje (DI / amp)',
      'Mluvené slovo, dabing',
      'Live nahrávání skupin',
    ],
  },
  {
    icon: '🎚',
    title: 'Mix & Mastering',
    desc: 'Vybalancování stop do koherentního mixu a finální mastering pro distribuci.',
    items: [
      'Stereo & stem mastering',
      'Příprava pro streaming (Spotify, Apple Music)',
      'Příprava pro CD / vinyl',
      'Mix pro TV a reklamu',
      'Loudness normalizace',
    ],
  },
  {
    icon: '🎬',
    title: 'Dabing & Post-produkce',
    desc: 'Profesionální dabing filmů, seriálů, dokumentů a komerčních spotů.',
    items: [
      'Dabované překlady',
      'Voice-over pro reklamy',
      'Audio post-produkce videa',
      'Sound design',
      'Foley efekty',
    ],
  },
  {
    icon: '🎼',
    title: 'Kompozice & Aranžmá',
    desc: 'Tvorba originální hudby a aranžování pro nejrůznější obsazení.',
    items: [
      'Hudba na zakázku pro reklamy',
      'Aranžmá pro kapelu / orchestr',
      'MIDI produkce & beat making',
      'Průvodní texty a melodie',
      'Partitury a noty',
    ],
  },
  {
    icon: '🎤',
    title: 'Karaoke Produkce',
    desc: 'Specializovaná výroba karaoke stop v profesionální kvalitě.',
    items: [
      'CDG karaoke formát',
      'MP4 karaoke video',
      'Přesný přepis textu & timing',
      'Česky & slovensky',
      'Online prodej na karaokesong.eu',
    ],
  },
  {
    icon: '🎸',
    title: 'Umělecká Agentura',
    desc: 'Zastupujeme kapely a zajišťujeme komplexní servis pro akce.',
    items: [
      'ABBA Star (pop tribute show)',
      'Sifon Original (legendární rocková kapela)',
      'Queenways (Queen tribute)',
      'Electric Therapy',
      'Ozvučení & osvětlení akcí',
    ],
  },
];

const pricingCards = [
  {
    badge: 'Základní',
    title: 'Nahrávání / hodina',
    price: 'na dotaz',
    unit: 'Cena dle rozsahu projektu',
    features: [
      'Přístup do nahrávací kabiny',
      'Obsluha zvukaře',
      'Základní editace stop',
      'Soubory ve WAV / MP3',
    ],
    featured: false,
    cta: { label: 'Nezávazná poptávka', className: btnOutline, href: '/contact' },
  },
  {
    badge: 'Populární',
    title: 'Demo Balíček',
    price: 'na dotaz',
    unit: 'Pro začínající umělce',
    features: [
      '2–4 hodiny nahrávání',
      'Základní mix',
      '2 revize mixu',
      'Mastering 1 skladby',
      'Soubory WAV + MP3 320kbps',
    ],
    featured: true,
    cta: { label: 'Rezervovat', className: btnPrimary, href: '/contact' },
  },
  {
    badge: 'Premium',
    title: 'Album / EP',
    price: 'na dotaz',
    unit: 'Kompletní produkce',
    features: [
      'Neomezené nahrávání',
      'Profesionální mix všech skladeb',
      'Mastering celého alba',
      'Příprava pro CD & streaming',
      'Konzultace produkce',
      'Archivace surových stop',
    ],
    featured: false,
    cta: { label: 'Nezávazná poptávka', className: btnOutline, href: '/contact' },
  },
];

export default function SluzbyPage() {
  return (
    <>
      <Head>
        <title>Služby & Ceník – Accent Recording Studio</title>
        <meta
          name="description"
          content="Přehled služeb a ceník nahrávacího studia Accent Plzeň. Nahrávání, mastering, dabing, karaoke."
        />
      </Head>

      <PageHero
        title={
          <>
            Služby & <span className="text-[#f0c040]">Ceník</span>
          </>
        }
        description="Kompletní přehled našeho portfolia — od nahrávání přes mastering až po karaoke produkci."
      />

      {/* Detailní přehled služeb */}
      <section className="w-full py-24">
        <div className="mx-auto w-[90vw] max-w-[1200px]">
          <FadeUp className="mb-10">
            <span className="mb-4 inline-block rounded-full border border-[rgba(212,160,23,0.35)] bg-[rgba(212,160,23,0.15)] px-3 py-1 text-[0.78rem] font-semibold tracking-[0.08em] text-[#f0c040] uppercase">
              Nabídka
            </span>
            <h2 className="h2-section mb-2 text-white">Co pro vás uděláme</h2>
            <span className="mt-3 block h-[3px] w-16 rounded bg-gradient-to-r from-[#d4a017] to-[#f0c040]" />
          </FadeUp>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCards.map(({ icon, title, desc, items }, i) => (
              <FadeUp
                key={title}
                delay={i * 0.06}
              >
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(212,160,23,0.3)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-[rgba(212,160,23,0.2)] bg-[rgba(212,160,23,0.12)] text-2xl">
                    {icon}
                  </div>
                  <h3 className="h3-card mb-2 text-white">{title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-[#8888a0]">{desc}</p>
                  <ul className="flex flex-col gap-1.5">
                    {items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-[#8888a0]"
                      >
                        <span className="mt-0.5 flex-shrink-0 text-[#d4a017]">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Ceník */}
      <section className="w-full border-t border-white/10 bg-[#111118] py-24">
        <div className="mx-auto w-[90vw] max-w-[1200px]">
          <FadeUp className="mb-10 text-center">
            <span className="mb-4 inline-block rounded-full border border-[rgba(212,160,23,0.35)] bg-[rgba(212,160,23,0.15)] px-3 py-1 text-[0.78rem] font-semibold tracking-[0.08em] text-[#f0c040] uppercase">
              Ceník
            </span>
            <h2 className="h2-section mb-2 text-white">Transparentní ceny</h2>
            <span className="mx-auto mt-3 block h-[3px] w-16 rounded bg-gradient-to-r from-[#d4a017] to-[#f0c040]" />
            <p className="mx-auto mt-4 max-w-[56ch] text-[#8888a0]">
              Vyberte si variantu, která nejlépe odpovídá vašemu projektu. Všechny ceny jsou bez
              DPH.
            </p>
          </FadeUp>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {pricingCards.map(({ badge, title, price, unit, features, featured, cta }, i) => (
              <FadeUp
                key={title}
                delay={i * 0.08}
              >
                <div
                  className={`relative flex h-full flex-col rounded-2xl p-10 transition-all duration-300 ${
                    featured
                      ? 'border border-[#d4a017] shadow-[0_0_40px_rgba(212,160,23,0.15),0_8px_32px_rgba(0,0,0,0.5)]'
                      : 'border border-white/10 bg-white/[0.04]'
                  }`}
                >
                  {featured && (
                    <div className="absolute -top-px left-1/2 -translate-x-1/2 rounded-b-lg bg-gradient-to-r from-[#a07810] to-[#d4a017] px-4 py-1 text-[0.7rem] font-bold tracking-widest text-black uppercase">
                      Nejoblíbenější
                    </div>
                  )}
                  <span className="mb-4 inline-block rounded-full border border-[rgba(212,160,23,0.35)] bg-[rgba(212,160,23,0.15)] px-3 py-1 text-[0.78rem] font-semibold tracking-[0.08em] text-[#f0c040] uppercase">
                    {badge}
                  </span>
                  <h3 className="h3-card mb-1 text-white">{title}</h3>
                  <div className="h3-card my-4 text-4xl leading-none text-[#f0c040]">{price}</div>
                  <div className="mb-6 text-sm text-[#8888a0]">{unit}</div>
                  <ul className="mb-8 flex flex-1 flex-col">
                    {features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 border-b border-white/10 py-2 text-sm text-[#8888a0] last:border-b-0"
                      >
                        <span className="flex-shrink-0 font-bold text-[#d4a017]">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={cta.href}
                    className={cta.className}
                  >
                    {cta.label}
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp>
            <div className="mt-10 rounded-xl border border-[rgba(212,160,23,0.2)] bg-[rgba(212,160,23,0.07)] p-6 text-sm leading-relaxed text-[#8888a0]">
              <strong className="text-[#f0c040]">⚠ Poznámka:</strong> Přesné ceny závisí na
              rozsahu, složitosti a době trvání projektu. Kontaktujte nás pro nezávaznou cenovou
              nabídku přesně na míru vašim potřebám. Při dlouhodobé spolupráci nebo větším objemu
              prací nabízíme množstevní slevy.
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-24">
        <div className="mx-auto w-[90vw] max-w-[650px] text-center">
          <FadeUp>
            <h2 className="h2-section mb-3 text-white">Máte zájem? Ozvěte se!</h2>
            <p className="mb-8 text-[#8888a0]">
              Rádi vám připravíme cenovou nabídku přesně dle vašich potřeb a rozpočtu.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded bg-gradient-to-br from-[#a07810] to-[#d4a017] px-7 py-3 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
              >
                📧 Napsat nám
              </Link>
              <a
                href="tel:+420603332100"
                className="inline-flex items-center gap-2 rounded border border-white/10 px-7 py-3 text-sm font-semibold text-[#e8e8f0] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#d4a017] hover:text-[#f0c040]"
              >
                📞 +420 603 332 100
              </a>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
