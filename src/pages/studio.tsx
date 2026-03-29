import Head from 'next/head';
import Image from 'next/image';
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
        <title>Studio – Accent Recording Studio</title>
        <meta
          name="description"
          content="Prohlédněte si prostory a vybavení nahrávacího studia Accent v Plzni."
        />
      </Head>

      <PageHero
        title={
          <>
            Naše <span className="text-[#f0c040]">Studio</span>
          </>
        }
        description="Profesionálně vybavené prostory v srdci Plzně — pro nahrávání, mixáž i masterování."
      />

      {/* Sekce A */}
      <section className="w-full py-24">
        <div className="mx-auto w-[90vw] max-w-[1200px]">
          <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
            <FadeUp>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/images/studio/control_room.jpg"
                  alt="Řídicí místnost studia Accent"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              {badge('Řídicí místnost')}
              <h2 className="h2-section mb-2 text-white">Řídicí místnost</h2>
              {accentLine}
              <p className="mt-5 leading-relaxed text-[#8888a0]">
                Srdce studia — akusticky vyladěná řídicí místnost s referenčními monitory KRK Rokit,
                analogovým mixpultem a rozsáhlou rackovou technikou. Poskytuje přesné referenční
                prostředí pro spolehlivý mix a mastering.
              </p>
              <p className="mt-3 leading-relaxed text-[#8888a0]">
                Propojení analogového a digitálního světa zaručuje teplý, přirozený zvuk s moderní
                přesností zpracování.
              </p>
              <SpecTable
                rows={[
                  ['Referenční monitory', 'KRK Rokit (žluté kužely)'],
                  ['Konverze', 'High-end AD/DA konvertory'],
                  ['Hardware rack', 'Kompresory, EQ, preamps'],
                  ['DAW', 'Pro Tools / Logic Pro'],
                  ['Kapacita', '2–4 osoby + zvukař'],
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
              {badge('Nahrávací kabina')}
              <h2 className="h2-section mb-2 text-white">Nahrávací kabina</h2>
              {accentLine}
              <p className="mt-5 leading-relaxed text-[#8888a0]">
                Zvukotěsná kabina s proměnnou akustikou — ideální pro zpěv, mluvené slovo, akustické
                nástroje i elektrické kytary. Přes skleněné okno zachovává vizuální kontakt s řídicí
                místností.
              </p>
              <p className="mt-3 leading-relaxed text-[#8888a0]">
                Vybavena kondenzátorovými i dynamickými mikrofony přední kvality, rampou na
                nástrojové stojany a pohodlným prostorem pro klid při nahrávání.
              </p>
              <SpecTable
                rows={[
                  ['Mikrofony', 'Neumann, AKG, Shure'],
                  ['Preamp', 'API, neve-style preamp'],
                  ['Monitorování', 'Uzavřená sluchátka AKG K271'],
                  ['Akustika', 'Proměnlivé akustické panely'],
                  ['Kapacita', '1–3 interpreti'],
                ]}
              />
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/images/studio/vocal_booth.jpg"
                  alt="Nahrávací kabina studia Accent"
                  fill
                  className="object-cover"
                />
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
              Fotogalerie
            </span>
            <h2 className="h2-section mb-2 text-white">Studio v obrazech</h2>
            <span className="mx-auto mt-3 block h-[3px] w-16 rounded bg-gradient-to-r from-[#d4a017] to-[#f0c040]" />
            <p className="mt-4 text-[#8888a0]">
              Nahlédněte do prostor, kde vznikají profesionální nahrávky.
            </p>
          </FadeUp>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { src: '/images/studio/main_studio.jpg', alt: 'Hlavní nahrávací prostor' },
              { src: '/images/studio/equipment_rack.jpg', alt: 'Vybavení studia' },
              { src: '/images/studio/microphones.jpg', alt: 'Mikrofonní park' },
              { src: '/images/studio/drums.jpg', alt: 'Natažené bicí' },
              { src: '/images/studio/control_room.jpg', alt: 'Pohled na mixpult' },
              { src: '/images/studio/vocal_booth.jpg', alt: 'Kabina pro zpěv' },
            ].map((img, i) => (
              <FadeUp
                key={img.src}
                delay={i * 0.05}
              >
                <div className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-white/5">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
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
            <h2 className="h2-section mb-3 text-white">Chcete nahrávat u nás?</h2>
            <p className="mb-8 text-[#8888a0]">
              Kontaktujte nás a domluvte si prohlídku nebo rovnou zarezervujte nahrávací čas.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className={btnPrimary}
              >
                <span>📞</span> Kontaktovat studio
              </Link>
              <Link
                href="/sluzby"
                className={btnOutline}
              >
                <span>💰</span> Zobrazit ceník
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
