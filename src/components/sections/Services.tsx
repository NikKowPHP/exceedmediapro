"use client";

import {
  getProcessItems,
  ProcessItem as ProcessItemType,
} from "@/lib/data/better_outcome-data";
import { IconBadge } from "../ui/icon-badge";

export const ServicesSection = () => {
  const processItems = getProcessItems();

  return (
    <section
      id="services"
      className="pb-[80px] md:pb-[160px] border border-red-500 "
      itemScope
      itemType="https://schema.org/HowTo"
      aria-labelledby="process-title"
    >
      <div className="max-w-7xl mx-auto  px-[20px] sm:px-0">
        <ProcessTitleSubtitle />
        <ProcessItemList processItems={processItems} />
      </div>
    </section>
  );
};

const ProcessTitleSubtitle = () => {
  return (
    <header className="mb-[42px] gap-[32px] md:gap-[12px] flex flex-col flex-start">
      <div className="flex items-center justify-center">
        <IconBadge text="Services" />
      </div>
      <h2 className="text-xl font-bold" itemProp="name">
        Innovative services for growth
      </h2>
      <h3 className="text-[24px] md:text-[44px] ">
        Achieve Better Outcomes in Endoscopy
      </h3>
    </header>
  );
};

const ProcessItem = ({
  index,
  item,
}: {
  index: number;
  item: ProcessItemType;
}) => {
  return (
    <div
      className="p-[25px]  flex flex-col md:flex-row gap-[60px] md:gap-[32px] leading-[1.6]  bg-card rounded-3xl border border-red-500"
      itemProp="step"
      itemScope
      itemType="https://schema.org/HowToStep"
    >
      <meta itemProp="position" content={`${index + 1}`} />
      <div className="flex flex-col gap-[80px]">
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

const ProcessItemList = ({
  processItems,
}: {
  processItems: ProcessItemType[];
}) => {
  const items = processItems;
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-[15px] sm:gap-y-0 sm:gap-x-[15px] w-full justify-center mx-auto"
      role="list"
      aria-label="Development process steps"
    >
      {items.map((item: ProcessItemType, index: number) => (
        <ProcessItem index={index} item={item} key={index} />
      ))}
    </div>
  );
};
