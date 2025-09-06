import SectionContainer from "@/components/shared/SectionContainer";
import SectionHeader from "@/components/shared/SectionHeader";
import { Plane } from "@/components/shared/icons";
import clsx from "clsx";
import { HTMLAttributes } from "react";
import TestimonialGrid from "./TestimonialGrid";

interface TestimonialsProps extends HTMLAttributes<HTMLElement> {}

export default function Testimonials({
  className,
  ...props
}: TestimonialsProps) {
  return (
    <section
      className={clsx("flex flex-col items-center bg-inherit", className)}
      {...props}
    >
      <SectionContainer>
        <SectionHeader
          badgeIcon={<Plane />}
          title="Bringing students together,"
          highlight="One step at a time."
          description="Building the future of learning by making it accessible to students worldwide."
        />

        {/* User reviews/testimonials */}
        <TestimonialGrid />
      </SectionContainer>
    </section>
  );
}
