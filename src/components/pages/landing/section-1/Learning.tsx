import MasonryGrid from "@/components/shared/MasonryGrid";
import SectionContainer from "@/components/shared/SectionContainer";
import SectionHeader from "@/components/shared/SectionHeader";
import { Map } from "@/components/shared/icons";
import Branding from "./Branding";
import Feature1 from "./Feature1";
import Feature2 from "./Feature2";
import Feature3 from "./Feature3";
import Feature4 from "./Feature4";
import Feature5 from "./Feature5";

export default function Learning() {
  return (
    <SectionContainer>
      <SectionHeader
        badgeIcon={<Map />}
        title="Learn new skills"
        highlight="faster, together."
        description="A new way to gather, expand, and put to practice your skills"
      />

      <div className="space-y-[1.375rem]">
        <div className="columns-1 gap-x-[1.375rem] space-y-[1.625rem] lg:columns-2">
          <Feature1 />
          <Feature2 />
        </div>

        <MasonryGrid className="gap-x-[1.375rem] space-y-[1.625rem]">
          <Feature3 />
          <Branding />
          <Feature4 />
          <Feature5 />
        </MasonryGrid>
      </div>
    </SectionContainer>
  );
}
