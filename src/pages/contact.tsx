import Head from 'next/head';

import FadeUp from '@/components/FadeUp';
import PageHero from '@/components/PageHero';

const contactItems = [
  {
    icon: '📍',
    label: 'Adresa',
    value: (
      <>
        Božkovská 38
        <br />
        326 00 Plzeň
      </>
    ),
  },
  {
    icon: '📞',
    label: 'Telefon',
    value: (
      <a
        href="tel:+420603332100"
        className="text-[#f0c040] transition-opacity hover:opacity-80"
      >
        +420 603 332 100
      </a>
    ),
  },
  {
    icon: '✉️',
    label: 'E-mail',
    value: (
      <a
        href="mailto:accent@razdva.cz"
        className="text-[#f0c040] transition-opacity hover:opacity-80"
      >
        accent@razdva.cz
      </a>
    ),
  },
  {
    icon: '🕐',
    label: 'Otevírací doba',
    value: 'Dle domluvy',
  },
];

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Kontakt – Accent Recording Studio</title>
        <meta
          name="description"
          content="Kontaktujte nahrávací studio Accent v Plzni. Adresa, telefon, e-mail, mapa."
        />
      </Head>

      <PageHero
        title={
          <>
            <span className="text-[#f0c040]">Kontaktujte</span> nás
          </>
        }
        description="Rádi si s vámi popovídáme o vašem projektu. Ozvěte se telefonicky nebo e-mailem."
      />

      {/* Kontaktní info */}
      <section className="w-full py-24">
        <div className="mx-auto w-[90vw] max-w-[1200px]">
          <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
            {/* Info sloupec */}
            <FadeUp>
              <span className="mb-4 inline-block rounded-full border border-[rgba(212,160,23,0.35)] bg-[rgba(212,160,23,0.15)] px-3 py-1 text-[0.78rem] font-semibold tracking-[0.08em] text-[#f0c040] uppercase">
                Kde nás najdete
              </span>
              <h2 className="h2-section mb-2 text-white">Kontaktní informace</h2>
              <span className="mt-3 mb-8 block h-[3px] w-16 rounded bg-gradient-to-r from-[#d4a017] to-[#f0c040]" />

              <div>
                {contactItems.map(({ icon, label, value }) => (
                  <div
                    key={label}
                    className="flex items-start gap-4 border-b border-white/10 py-5 last:border-b-0"
                  >
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-[rgba(212,160,23,0.2)] bg-[rgba(212,160,23,0.1)] text-lg">
                      {icon}
                    </div>
                    <div>
                      <div className="mb-1 text-xs tracking-widest text-[#8888a0] uppercase">
                        {label}
                      </div>
                      <div className="font-medium text-white">{value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Sociální sítě */}
              <div className="mt-8">
                <div className="mb-4 text-xs tracking-widest text-[#8888a0] uppercase">
                  Sledujte nás
                </div>
                <div className="flex flex-wrap gap-3">
                  {[
                    { href: 'https://www.facebook.com', label: 'f Facebook' },
                    { href: 'https://soundcloud.com', label: '☁ SoundCloud' },
                    { href: 'https://youtube.com', label: '▶ YouTube' },
                  ].map(({ href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded border border-white/10 px-5 py-2 text-sm font-semibold text-[#e8e8f0] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#d4a017] hover:text-[#f0c040]"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Kontaktní CTA karta */}
            <FadeUp delay={0.1}>
              <div className="rounded-2xl border border-[rgba(212,160,23,0.25)] bg-gradient-to-br from-[rgba(212,160,23,0.12)] to-[rgba(212,160,23,0.04)] p-10 text-center">
                <span className="mb-4 block text-4xl">🎙</span>
                <h3 className="h3-card mb-3 text-[1.4rem] text-white">
                  Rezervujte nahrávací termín
                </h3>
                <p className="mb-8 leading-relaxed text-[#8888a0]">
                  Zavolejte nebo napište e-mail — rádi vám poradíme s výběrem služby a domluvíme
                  termín. Konzultace je zdarma.
                </p>
                <a
                  href="tel:+420603332100"
                  className="mb-3 inline-flex w-full items-center justify-center gap-2 rounded bg-gradient-to-br from-[#a07810] to-[#d4a017] px-7 py-3 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
                >
                  📞 +420 603 332 100
                </a>
                <a
                  href="mailto:accent@razdva.cz"
                  className="inline-flex w-full items-center justify-center gap-2 rounded border border-white/10 px-7 py-3 text-sm font-semibold text-[#e8e8f0] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#d4a017] hover:text-[#f0c040]"
                >
                  ✉️ accent@razdva.cz
                </a>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="w-full border-t border-white/10 bg-[#111118] py-12">
        <div className="mx-auto w-[90vw] max-w-[1200px]">
          <FadeUp className="mb-8 text-center">
            <h2 className="h2-section mb-2 text-white">Kde nás najdete</h2>
            <span className="mx-auto mt-3 block h-[3px] w-16 rounded bg-gradient-to-r from-[#d4a017] to-[#f0c040]" />
          </FadeUp>
          <FadeUp>
            <div className="aspect-[16/7] w-full overflow-hidden rounded-2xl border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2567.6437!2d13.3800!3d49.7267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470af153e4b74847%3A0x0!2sBo%C5%BEkovsk%C3%A1+38%2C+326+00+Plze%C5%88!5e0!3m2!1scs!2scz!4v1700000000000"
                className="h-full w-full border-none"
                style={{ filter: 'grayscale(0.6) invert(0.9)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa – Accent Recording Studio, Božkovská 38, Plzeň"
              />
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
