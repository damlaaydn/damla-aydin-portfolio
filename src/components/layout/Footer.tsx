import { personalInfo } from "@/data/personalInfo";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Footer() {
  const socials = personalInfo.socials.filter(
    (link) => link.platform !== "email",
  );

  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-10 sm:flex-row sm:items-center sm:px-8">
        <div>
          <p className="font-display text-lg text-foreground">
            {personalInfo.name}
          </p>
          <p className="mt-1 text-sm text-muted">
            © 2026 {personalInfo.name}
          </p>
        </div>
        <SocialLinks links={socials} />
      </div>
    </footer>
  );
}
