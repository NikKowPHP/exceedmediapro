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
  // width > lg Split items into two groups - first 6 in 3 columns, rest in 2 columns
  const firstSixItems = howItWorksItems.slice(0, 6);
  const remainingItems = howItWorksItems.slice(6);


  // Render the tablet view (repeating pattern of 2 cards then 1 card)
  const renderTabletView = () => {
    const result = [];
    
    for (let i = 0; i < howItWorksItems.length; i += 3) {
      // Add a row with up to 2 cards
      const twoCardRow = howItWorksItems.slice(i, i + 2);
      if (twoCardRow.length > 0) {
        result.push(
          <div 
            key={`row-${i}`} 
            className="grid grid-cols-1  md:grid-cols-2 lg:hidden gap-4 w-full"
          >
            {twoCardRow.map((item, idx) => (
              <div key={i + idx}>
                <HowItWorksItem index={i + idx} item={item} />
              </div>
            ))}
          </div>
        );
      }
      
      // Add a row with 1 card (if available)
      const oneCard = howItWorksItems[i + 2];
      if (oneCard) {
        result.push(
          <div 
            key={`single-${i + 2}`} 
            className="grid grid-cols-1 lg:hidden gap-4 w-full  md:mx-auto"
          >
            <div>
              <HowItWorksItem index={i + 2} item={oneCard} />
            </div>
          </div>
        );
      }
    }
    
    return result;
  };


  return (
    <div className="space-y-4">
      {/* Tablet view with repeating pattern */}
      <div className="md:block lg:hidden space-y-4">
        {renderTabletView()}
      </div>
      
      {/* Desktop view (lg+): First 6 items in 3 columns */}
      <div
        className="hidden lg:grid grid-cols-3 gap-4 w-full"
        role="list"
        aria-label="Development process steps"
      >
        {firstSixItems.map((item: HowItWorksItemType, index: number) => (
          <div key={index}>
            <HowItWorksItem index={index} item={item} />
          </div>
        ))}
      </div>

      {/* Desktop view (lg+): Remaining items in 2 columns */}
      {remainingItems.length > 0 && (
        <div
          className="hidden lg:grid grid-cols-2 gap-4 w-full" 
          role="list"
          aria-label="Additional development process steps"
        >
          {remainingItems.map((item: HowItWorksItemType, index: number) => (
            <div key={index + 6}>
              <HowItWorksItem index={index + 6} item={item} />
            </div>
          ))}
        </div>
      )}

      {/* Mobile view (xs-sm): All items in 1 column */}
      <div className="grid grid-cols-1 gap-4 w-full md:hidden">
        {howItWorksItems.map((item: HowItWorksItemType, index: number) => (
          <div key={`mobile-${index}`}>
            <HowItWorksItem index={index} item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};
