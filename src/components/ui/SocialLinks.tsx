import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import type { SocialLink, SocialPlatform } from "@/types";
import { cn } from "@/lib/utils";

const icons: Record<SocialPlatform, typeof Github> = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  email: Mail,
};

interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
}

export function SocialLinks({ links, className }: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {links.map((link) => {
        const Icon = icons[link.platform];
        return (
          <a
            key={link.platform}
            href={link.href}
            aria-label={link.label}
            target={link.platform === "email" ? undefined : "_blank"}
            rel={link.platform === "email" ? undefined : "noopener noreferrer"}
            className="flex size-10 items-center justify-center rounded-full border border-line text-muted transition-all duration-300 hover:border-accent/40 hover:text-accent hover:bg-accent/8"
          >
            <Icon size={16} strokeWidth={1.7} />
          </a>
        );
      })}
    </div>
  );
}
