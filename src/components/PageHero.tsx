interface PageHeroProps {
  title: React.ReactNode;
  description?: string;
}

export default function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="border-b border-white/10 bg-gradient-to-b from-[#111118] to-[#0a0a0f] pt-[calc(72px+4rem)] pb-16 text-center">
      <div className="mx-auto w-[90vw] max-w-[1200px]">
        <h1 className="h1-hero mb-3 text-white">{title}</h1>
        {description && (
          <p className="text-description mx-auto max-w-[55ch] text-[#8888a0]">{description}</p>
        )}
      </div>
    </section>
  );
}
