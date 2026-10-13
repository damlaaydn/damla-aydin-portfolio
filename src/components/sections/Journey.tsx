import { education, experience } from "@/data/timeline";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import type { TimelineItem } from "@/types";

function TimelineCard({ item }: { item: TimelineItem }) {
  return (
    <article className="relative rounded-2xl border border-line bg-panel p-6 pl-8 transition-colors duration-300 hover:border-accent/30">
      <span className="absolute top-7 left-3 size-2 rounded-full bg-accent" />
      <p className="text-xs tracking-[0.18em] text-accent uppercase">
        {item.period}
      </p>
      <h3 className="mt-3 font-display text-2xl text-foreground">
        {item.title}
      </h3>
      <p className="mt-1 text-sm text-muted">
        {item.organization}
        {item.location ? ` · ${item.location}` : ""}
      </p>
      <p className="mt-4 text-sm leading-7 text-muted">{item.description}</p>
      <ul className="mt-4 space-y-2">
        {item.highlights.map((highlight) => (
          <li key={highlight} className="text-sm leading-6 text-foreground/80">
            {highlight}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function Experience() {
  return (
    <Section id="deneyim" className="bg-panel/40">
      <SectionHeading
        eyebrow="Deneyim"
        title="Toyo Matbaa Mürekkepleri"
        description="Power BI, veri modelleme ve analitik raporlama üzerine staj deneyimi."
      />
      <div className="max-w-3xl">
        {experience.map((item, index) => (
          <Reveal key={item.id} delay={index * 0.08}>
            <TimelineCard item={item} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="egitim">
      <SectionHeading
        eyebrow="Eğitim"
        title="Akademik temel"
        description="Büyük veri, analiz ve iş zekâsı üzerine devam eden lisans öncesi uzmanlık eğitimi."
      />
      <div className="max-w-3xl">
        {education.map((item, index) => (
          <Reveal key={item.id} delay={index * 0.08}>
            <TimelineCard item={item} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
