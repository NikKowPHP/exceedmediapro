import { MotionButton } from "../ui/motion-button";

import { IconBadge } from "../ui/icon-badge";
import { SectionBackground } from "../ui/section-background";
export const CtaSection = () => {
  return (
    <section
      id="cta-section"
      className="pt-[40px] md:pt-[80px] pb-[120px] px-[20px] md:px-0  flex flex-col justify-center items-center"
      itemScope
      itemType="https://schema.org/WebPageElement"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center md:items-start md:flex-row gap-[20px]">
          <div className="flex flex-col items-center gap-[16px] md:w-full">
            <CtaSectionTitleSubtitle />

            <MotionButton href="/contact" text="Schedule a quick call" />
            <p className="text-subtitle text-center">
              Its <span className="text-white">Free</span>
            </p>

            <div className="w-full relative">
              <SectionBackground imageUrl="/bg-form.svg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CtaSectionTitleSubtitle = () => {
  return (
    <header className="mb-[35px] gap-[25px]  flex flex-col flex-center items-center">
      <div className="flex flex-center items-center">
        <IconBadge
          text="Radison"
          textColor="text-subtitle"
          className="text-[14px]"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-[10px]">
        <h2
          id="process-title"
          className="text-[28px] md:text-[44px] font-[500] text-center"
          itemProp="name"
        >
          Let&apos;s talk about your next big move
        </h2>
        <p className=" text-subtitle text-center">
          Hop on a call with us to see how our services can accelerate your
          growth.
        </p>
      </div>
    </header>
  );
};
