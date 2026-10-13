import { ArrowRight } from "lucide-react";
import { articles } from "@/data/articles";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function Articles() {
  return (
    <Section id="yazilar" className="bg-panel/40">
      <SectionHeading
        eyebrow="Yazılarım"
        title="Notlar ve çerçeveler"
        description="Veri analizi, görselleştirme ve makine öğrenmesine dair kısa yazılar."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {articles.map((article, index) => (
          <Reveal key={article.slug} delay={index * 0.08}>
            <article className="flex h-full flex-col rounded-2xl border border-line bg-ink/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30">
              <div className="flex items-center justify-between gap-3 text-xs text-muted">
                <span className="tracking-[0.16em] text-accent uppercase">
                  {article.category}
                </span>
                <time>{article.date}</time>
              </div>
              <h3 className="mt-4 font-display text-2xl tracking-tight text-foreground">
                {article.title}
              </h3>
              <p className="mt-4 flex-1 text-sm leading-7 text-muted">
                {article.excerpt}
              </p>
              <div className="mt-6">
                <Button href={`/yazilar/${article.slug}`} variant="ghost">
                  Oku
                  <ArrowRight size={15} />
                </Button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
