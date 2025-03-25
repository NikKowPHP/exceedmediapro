"use client";

import {
  getHowItWorksItems,
  HowItWorksItem as HowItWorksItemType,
} from "@/lib/data/page-data";
import { IconBadge } from "../ui/icon-badge";

export const HowItWorksSection = () => {
  const howItWorksItems = getHowItWorksItems();

  return (
    <section
      id="services"
      className="pb-[80px] md:pb-[160px]"
      itemScope
      itemType="https://schema.org/HowTo"
      aria-labelledby="process-title"
    >
      <div className="max-w-7xl mx-auto px-[20px] sm:px-6">
        <HowItWorksTitleSubtitle />
        <HowItWorksItemList howItWorksItems={howItWorksItems} />
      </div>
    </section>
  );
};

const HowItWorksTitleSubtitle = () => {
  return (
    <header className="mb-[42px] gap-[32px] md:gap-[12px] flex flex-col flex-start border border-red-500">
      <IconBadge text="Services" />
      <h2 className="text-xl font-normal border border-red-500" itemProp="name">
        How it works
      </h2>
      <h3 className="text-[24px] md:text-[44px] border border-red-500">
        Tailored solutions to streamline, innovate, and grow.
      </h3>
    </header>
  );
};

const HowItWorksItem = ({
  index,
  item,
}: {
  index: number;
  item: HowItWorksItemType;
}) => {
  return (
    <div
      className="py-[20px] px-[30px] flex flex-col h-full bg-card rounded-primary border border-borderColor-primary border-red-500  "
      itemProp="step"
      itemScope
      itemType="https://schema.org/HowToStep"
    >
      <meta itemProp="position" content={`${index + 1}`} />
      <div className="flex flex-col">
        <h3 
          className="text-lg md:text-2xl font-bold text-text-primary mb-2" 
          itemProp="name"
        >
          {item.title}
        </h3>
        <p
          className="text-sm md:text-base text-text-subtitle"
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ItemList"
        >
          {item.content}
        </p>
      </div>
    </div>
  );
};

const HowItWorksItemList = ({
  howItWorksItems,
}: {
  howItWorksItems: HowItWorksItemType[];
}) => {
  // Determine which items should be in 3 columns or 2 columns
  const getColumnSpan = (index: number, totalItems: number) => {
    // First half of items in 3 columns, second half in 2 columns
    const halfPoint = Math.ceil(totalItems / 2);
    return index < halfPoint ? "lg:col-span-1" : "lg:col-span-1 xl:col-span-1.5";
  };

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full justify-center mx-auto"
      role="list"
      aria-label="Development process steps"
    >
      {howItWorksItems.map((item: HowItWorksItemType, index: number) => (
        <div 
          key={index} 
          className={`${getColumnSpan(index, howItWorksItems.length)}`}
        >
          <HowItWorksItem index={index} item={item} />
        </div>
      ))}
    </div>
  );
};
