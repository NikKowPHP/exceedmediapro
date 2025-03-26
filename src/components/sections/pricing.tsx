"use client";
import {
  getPricingPlans,
  LucideIcons,
  type PricingPlan,
} from "@/lib/data/data";
import { MotionButton } from "../ui/motion-button";
import { IconBadge } from "../ui/icon-badge";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check } from "lucide-react";

interface PricingCardProps {
  plan: PricingPlan;
}

export function PricingCard({ plan }: PricingCardProps) {
  const Icon = LucideIcons[plan.icon];
  return (
    <div
      className="flex flex-col  p-[30px]  bg-[#000] text-white rounded-[30px] 
      border border-white/10"
      style={{
        backgroundImage:
          "linear-gradient(149deg, rgba(81, 47, 235, 0.15) 0%, rgba(255, 255, 255, 0.06) 29%, rgba(255, 255, 255, 0.06) 74%, rgba(81, 47, 235, 0.15) 100%);",
        backgroundRepeat: "repeat",
      }}
      itemScope
      itemType="https://schema.org/Offer"
    >
      <meta itemProp="priceCurrency" content="PLN" />
      <meta itemProp="price" content={plan.price.toString()} />
      <div className="flex flex-col gap-[15px]">
        <div className="flex justify-start items-center gap-4">
          <div>
            <IconContainer icon={Icon} wrapperSize={30} iconSize={15} />
          </div>
          <h3
            className="text-[16px] sm:text-[32px] md:text-[36px] font-medium text-center "
            itemProp="name"
          >
            {plan.title}
          </h3>
        </div>

        <div className="flex justify-start items-end">
          <span className="text-[35px] font-semibold">{plan.price}</span>
          <span>/</span>
          <span>month</span>
        </div>

        <p className="text-base sm:text-[20px] text-white/70 ">
          {plan.description}
        </p>
      </div>

      <div className=" py-[30px]">
        <MotionButton href="/contact" text="Go With This Plan" variant="cta" className="flex justify-center" />
      </div>
      <ul className="space-y-3 sm:space-y-[10px] pt-2 sm:pt-4 w-full">
        {plan.features.map((feature) => (
          <li
            key={feature.id}
            className="text-base  flex items-center justify-between gap-2"
          >
            <div className="flex items-center gap-2">

              <IconContainer icon={Check} wrapperSize={30} iconSize={15} />
            </div>
            <span>{feature.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface IconContainerProps {
  icon: React.ElementType;
  containerClassName?: string;
  iconClassName?: string;
  wrapperSize?: number;
  iconSize?: number;
}

const IconContainer = ({
  icon: Icon,
  containerClassName = "",
  iconClassName = "",
  wrapperSize = 35,
  iconSize = 10,
}: IconContainerProps) => (
  <div
    className={`rounded-xl flex items-center bg-white/20 border-0 justify-center w-[${wrapperSize}px] h-[${wrapperSize}px] ${containerClassName}`}
  >
    <Icon
      className={` text-gray-300 ${iconClassName}`}
      width={iconSize}
      height={iconSize}
    />
  </div>
);

export function Pricing() {
  const [isYearly, setIsYearly] = useState(true);
  const plans = getPricingPlans();

  const handleTabChange = (value: string) => {
    setIsYearly(value === "yearly");
  };

  return (
    <section
      id="pricing"
      className=" px-[25px] sm:px-0 relative overflow-hidden bg-primary py-[10px] sm:py-32 sm:pb-[60px] md:py-24 md:pb-[60px] rounded-primary sm:rounded-primary-lg"
    >
      <div className="relative mx-auto  ">
        <div className="flex justify-center pb-[25px]">
          <IconBadge text="Plans" />
        </div>
        <div className="flex flex-col items-center gap-[10px] pb-[60px]">
          <h2 className="text-center text-[28px] sm:text-[32px] md:text-[36px] font-medium text-white mb-8 sm:mb-12 md:mb-16">
            Flexible Plans Tailored to Fuel Your Growth
          </h2>
          <p className="text-center text-lg sm:text-xl md:text-2xl text-white mb-8 sm:mb-12 md:mb-16">
            Scalable Solutions Designed for Every Stage of Your Business Journey
          </p>
        </div>

        <div className="flex justify-center mb-[30px]">
          <Tabs
            defaultValue="yearly"
            value={isYearly ? "yearly" : "monthly"}
            onValueChange={handleTabChange}
            className="w-auto"
          >
            <TabsList className="bg-[#1e1e1e] p-1 rounded-primary-sm">
              <TabsTrigger
                value="monthly"
                className="data-[state=active]:bg-action data-[state=active]:text-white text-gray-400 px-4 py-2"
              >
                <div className="flex items-center">
                  <span>Monthly</span>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="yearly"
                className="data-[state=active]:bg-action data-[state=active]:text-white text-gray-400 px-4 py-2"
              >
                <div className="flex items-center">
                  <span>Yearly</span>
                </div>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 max-w-full mx-auto sm:px-10">
          {plans[isYearly ? "anually" : "monthly"].map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
