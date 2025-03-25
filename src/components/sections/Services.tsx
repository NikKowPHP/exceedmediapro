"use client";

import {
  getProcessItems,
  ProcessItem as ProcessItemType,
} from "@/lib/data/data";
import { IconBadge } from "../ui/icon-badge";
import Image from "next/image";

export const ServicesSection = () => {
  const processItems = getProcessItems();

  return (
    <section
      id="services"
      className="pb-[80px] md:pb-[160px]   "
      itemScope
      itemType="https://schema.org/HowTo"
      aria-labelledby="process-title"
    >
      <div className="max-w-7xl mx-auto  px-[25px] sm:px-0">
        <ProcessTitleSubtitle />
        <ProcessItemList processItems={processItems} />
      </div>
    </section>
  );
};

const ProcessTitleSubtitle = () => {
  return (
    <header className="mb-[42px] gap-[15px] md:gap-[12px] flex flex-col flex-center items-center">
      <div className="flex items-center justify-center">
        <IconBadge text="Services" />
      </div>
      <h2 className="text-[28px] sm:text-xl font-bold" itemProp="name">
        Innovative services for growth
      </h2>
      <h3 className="text-base md:text-[44px] ">
      Tailored solutions to streamline, innovate, and grow.
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
      className="p-[20px]  flex flex-col md:flex-row gap-[60px] md:gap-[32px] bg-card rounded-primary "
      itemProp="step"
      itemScope
      itemType="https://schema.org/HowToStep"
    >
      <meta itemProp="position" content={`${index + 1}`} />
      <div className="flex flex-col gap-[80px]">
        <div className="flex flex-col gap-[10px]">
          <div
            className="flex items-center justify-center h-[284px] w-full rounded-primary pb-[10px]"
            style={{
              background:
                "linear-gradient(rgba(0, 0, 0, 0.1) 5.92448%, rgb(33, 33, 33) 100%)",
            }}
          >
            <Image
              src={item.image_url}
              alt={item.title}
              width={100}
              height={100}
            />
          </div>
          <h3 className="text-[22px] md:text-[28px]  " itemProp="name">
            {item.title}
          </h3>
          <p
            className="text-base md:text-[20px] leading-[1.6]"
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
