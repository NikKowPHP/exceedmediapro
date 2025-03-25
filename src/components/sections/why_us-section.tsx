import { Suspense } from "react";
import { getWhyUsItems, WhyUsItem as WhyUsItemType } from "@/lib/data/data";
import { LucideIcons } from "@/lib/data/data";
import { IconBadge } from "../ui/icon-badge";

export const WhyUsSection = () => {
  const whyUsItems = getWhyUsItems();

  return (
    <>
      <Suspense
        fallback={
          <div
            className="flex items-center justify-center min-h-[200px]"
            aria-label="Loading process section"
          >
            Loading...
          </div>
        }
      >
        <section
          id="better-outcomes"
          className="pb-[80px] md:pb-[160px] "
          itemScope
          itemType="https://schema.org/HowTo"
          aria-labelledby="process-title"
        >
          <div className="max-w-7xl mx-auto  px-[20px] sm:px-0">
            <WhyUsTitleSubtitle />
            <WhyUsItemList whyUsItems={whyUsItems} />
          </div>
        </section>
      </Suspense>
    </>
  );
};

const WhyUsTitleSubtitle = () => {
  return (
    <header className="mb-[42px] gap-[32px] md:gap-[12px] flex flex-col flex-center items-center">
      <div className="flex flex-center items-center">
        <IconBadge text="Benefits" textColor="white" />
      </div>
      <h2 id="process-title" className="text-[28px] md:text-[44px]" itemProp="name">
        Why Choose Us?
      </h2>
   
    </header>
  );
};

const WhyUsItem = ({ index, item }: { index: number; item: WhyUsItemType }) => {
  const Icon = LucideIcons[item.icon];
  return (
    <div
      className="p-[25px]  flex flex-col md:flex-row gap-[60px] md:gap-[32px] leading-[1.6]  bg-card rounded-3xl"
      itemProp="step"
      itemScope
      itemType="https://schema.org/HowToStep"
    >
      <meta itemProp="position" content={`${index + 1}`} />
      <div className="flex flex-col gap-[80px]">
        <div className="rounded-full border border-black text-black flex items-center justify-center w-[48px] h-[48px]">
          <Icon className="w-[24px] h-[24px]" />
        </div>

        <div className="flex flex-col gap-[16px]">
          <h3 className="text-[20px] md:text-[28px] font-bold " itemProp="name">
            {item.title}
          </h3>
          <p
            className="text-[18px] md:text-[20px] leading-[1.6]"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ItemList"
          >
            {item.content}
          </p>
        </div>
      </div>
    </div>
  );
};

const WhyUsItemList = ({ whyUsItems }: { whyUsItems: WhyUsItemType[] }) => {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-[32px] sm:gap-y-0 sm:gap-x-[32px] w-full justify-center mx-auto"
      role="list"
      aria-label="Development process steps"
    >
      {whyUsItems.map((item: WhyUsItemType, index: number) => (
        <WhyUsItem index={index} item={item} key={index} />
      ))}
    </div>
  );
};
