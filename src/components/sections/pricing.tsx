"use client";
import { getPricingPlans, type PricingPlan } from "@/lib/data/data";
import { MotionButton } from "../ui/motion-button";
import { IconBadge } from "../ui/icon-badge";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

interface PricingCardProps {
  plan: PricingPlan;
}

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <div
      className="flex flex-col items-center p-6 sm:p-8 md:p-10 bg-white rounded-[24px] 
    sm:rounded-[32px] space-y-2 sm:space-y-6"
      itemScope
      itemType="https://schema.org/Offer"
    >
      <meta itemProp="priceCurrency" content="PLN" />
      <meta itemProp="price" content={plan.price.toString()} />
      <h3
        className="text-[28px] sm:text-[32px] md:text-[36px] font-medium text-center text-black"
        itemProp="name"
      >
        {plan.title}
      </h3>

      <p className="text-lg sm:text-[20px] text-gray-600 text-center">
        {plan.description}
      </p>

      <div className="flex items-baseline gap-1">
        {plan.pricePrefix && (
          <span className="text-lg sm:text-xl text-gray-600">
            {plan.pricePrefix}
          </span>
        )}
        <span className="text-[36px] sm:text-[42px] md:text-[48px] font-medium text-black">
          {plan.price}
        </span>
      </div>

      <MotionButton href="/contact" text="Go With This Plan" variant="cta" />

      <ul className="space-y-3 sm:space-y-4 pt-2 sm:pt-4 w-full">
        {plan.features.map((feature) => (
          <li
            key={feature.id}
            className="text-sm sm:text-base text-gray-600 text-center"
          >
            {feature.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Pricing() {
  const [isYearly, setIsYearly] = useState(true);
  const plans = getPricingPlans();
  
  const handleTabChange = (value: string) => {
    setIsYearly(value === "yearly");
  };

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-primary py-[10px] sm:py-32 sm:pb-[60px] md:py-24 md:pb-[60px] rounded-primary sm:rounded-primary-lg"
    >
      <div className="relative mx-auto px-2 sm:px-6">
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

        <div className="flex justify-center mb-8">
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
