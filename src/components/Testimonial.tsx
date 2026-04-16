import Section from "./Section";
import Image from "next/image";

interface TestimonialProps {
  quote: string;
  name: string;
  titleLines: [string, string];
  photo: string;
  surface?: boolean;
}

export default function Testimonial({
  quote,
  name,
  titleLines,
  photo,
  surface,
}: TestimonialProps) {
  return (
    <Section surface={surface}>
      <div className="grid md:grid-cols-[200px_1fr] gap-[var(--space-6)] md:gap-[var(--space-8)] items-start">
        <div className="flex flex-col gap-[var(--space-4)]">
          <Image
            src={photo}
            alt={name}
            width={180}
            height={180}
            className="rounded-full object-cover w-32 h-32 md:w-[180px] md:h-[180px]"
          />
          <div>
            <p className="font-medium text-dark text-[1.0625rem]">{name}</p>
            <p className="text-[0.875rem] text-muted leading-snug mt-[var(--space-1)]">
              {titleLines[0]}
              <br />
              {titleLines[1]}
            </p>
          </div>
        </div>
        <blockquote>
          <p className="text-[clamp(1rem,1.2vw+0.35rem,1.2rem)] leading-[1.7] font-heading italic text-text/90">
            &ldquo;{quote}&rdquo;
          </p>
        </blockquote>
      </div>
    </Section>
  );
}
