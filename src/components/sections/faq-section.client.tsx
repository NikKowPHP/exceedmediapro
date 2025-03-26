"use client";

import { useState } from "react";
import { FaqItem } from "@/lib/data/data";
import { cn } from "@/lib/utils/cn";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { IconBadge } from "../ui/icon-badge";
import { SectionBackground } from "../ui/section-background";

interface FaqAccordionProps {
  faqItem: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
  faqItems: FaqItem[];
}

function FaqAccordion({ faqItem, isOpen, onToggle }: FaqAccordionProps) {
  return (
    <div
      className="border border-borderColor-primary rounded-3xl bg-card  "
      key={faqItem.id}
      itemScope
      itemType="https://schema.org/Question"
    >
      <button
        className="flex w-full items-center justify-between px-[18px] py-[20px] text-left "
        onClick={onToggle}
      >
        <span className=" md:text-[28px] ">
          {faqItem.question}
        </span>
        <span className="ml-6 flex-shrink-0">
          {isOpen ? (
            <motion.div
              animate={{ rotate: 180 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div animate={{ rotate: 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown className="h-6 w-6" />
            </motion.div>
          )}
        </span>
      </button>
      <div
        className={cn(
          "grid overflow-hidden  duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr] " : "grid-rows-[0fr] "
        )}
      >
        <div
          className="overflow-hidden"
          itemScope
          itemProp="acceptedAnswer"
          itemType="https://schema.org/Answer"
        >
          <p itemProp="text" className="text-subtitle pb-6 px-[18px] md:pb-6 md:px-10 ">
            {faqItem.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Faq({ items }: { items: FaqItem[] }) {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section
      id="faqs"
      className="pb-[80px] md:pb-[160px] "
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="max-w-7xl mx-auto px-[25px] sm:px-0 flex flex-col justify-center items-center md:flex-row gap-[32px] md:gap-[62px] relative">
        <FaqSectionTitleSubtitle />
        <div
          className="mx-auto flex flex-col gap-[12px]  "
          itemProp="mainEntity"
        >
          {items.map((item) => (
            <FaqAccordion
              key={item.id}
              faqItem={item}
              isOpen={openId === item.id}
              onToggle={() => setOpenId(openId === item.id ? null : item.id)}
              faqItems={items}
            />
          ))}
        </div>
        <SectionBackground topPosition={100} imageUrl="/bg-form.svg"/>
      </div>
    </section>
  );
}


const FaqSectionTitleSubtitle = () => {
  return (
    <header className="mb-[35px] gap-[25px]  flex flex-col flex-center items-center">
      <div className="flex flex-center items-center">
        <IconBadge
          text="FAQ"
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
          We&apos;re here to help
        </h2>
        <p className=" text-subtitle text-center">
          FAQs designed to provide the information you need.
        </p>
      </div>
    </header>
  );
};