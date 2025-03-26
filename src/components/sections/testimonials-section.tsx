import { Suspense } from "react";
import {
  getTestimonialsItems,
  TestimonialsItem as TestimonialsItemType,
} from "@/lib/data/data";
import { IconBadge } from "../ui/icon-badge";
import Image from "next/image";

export const TestimonialsSection = () => {
  const testimonialsItems = getTestimonialsItems();

  return (
    <>
      <section
        id="testimonials"
        className="py-[100px] "
        itemScope
        itemType="https://schema.org/HowTo"
        aria-labelledby="process-title"
      >
        <div className="max-w-7xl mx-auto  px-[20px] sm:px-0">
          <TestimonialsTitleSubtitle />
          <TestimonialsItemList testimonialsItems={testimonialsItems} />
        </div>
      </section>
    </>
  );
};

const TestimonialsTitleSubtitle = () => {
  return (
    <header className="mb-[60px] gap-[25px]  flex flex-col flex-center items-center">
      <div className="flex flex-center items-center">
        <IconBadge text="Testimonials" textColor="#ffffffb3"  className="text-[14px]" />
      </div>
      <div className="flex flex-col items-center justify-center gap-[10px]">
        <h2
          id="process-title"
          className="text-[28px] md:text-[44px] font-[500] text-center"
          itemProp="name"
        >
          Trusted by satisfied clients
        </h2>
        <p className="text-sm text-[#ffffffb3] text-center">
          Discover how we&apos;ve driven growth and innovation.
        </p>
      </div>
    </header>
  );
};

const TestimonialsItem = ({
  index,
  item,
}: {
  index: number;
  item: TestimonialsItemType;
}) => {
  const lightShadeStyles = {
    backgroundColor: "#014441",
    color: "white",
    background: "rgb(83, 113, 255)",
    borderBottomLeftRadius: "231px",
    borderBottomRightRadius: "231px",
    borderTopLeftRadius: "231px",
    borderTopRightRadius: "231px",
    display: "block",
    filter: "blur(50px)",
    flexBasis: "auto",
    flexGrow: 0,
    flexShrink: 0,
    fontFamily: "sans-serif",
    fontSize: "12px",
    height: "100px",
  };
  return (
    <div
      className="p-[25px]  flex flex-col md:flex-row gap-[60px] md:gap-[32px] leading-[1.6]  bg-card border border-gray-800 rounded-3xl relative overflow-hidden"
      itemProp="step"
      itemScope
      itemType="https://schema.org/HowToStep"
    >
      <meta itemProp="position" content={`${index + 1}`} />
      <div className="flex flex-col gap-[20px] ">
        <div className="flex flex-col gap-[16px]">
          <p
            className="text-[16px] md:text-[20px] leading-[1.6] text-[#ffffffb3]"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ItemList"
          >
            {item.content}
          </p>

          <div className="flex flex-row gap-[10px] items-center">
            <div>
              <div className="p-[3px] rounded-xl bg-gray-800">
                <Image
                  src={item.image_url}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="rounded-xl"
                />
              </div>
            </div>
            <div className="flex flex-col ">
              <h4
                className="text-base md:text-[28px] text-white"
                itemProp="name"
              >
                {item.name},
              </h4>
              <p className="text-sm text-[#ffffffb3]">{item.role}</p>
            </div>
          </div>
        </div>
        <div
          style={lightShadeStyles}
          className="w-[100px] h-[100px] -top-5 -right-5 absolute"
        ></div>
      </div>
    </div>
  );
};

const TestimonialsItemList = ({
  testimonialsItems,
}: {
  testimonialsItems: TestimonialsItemType[];
}) => {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-[32px] sm:gap-y-0 sm:gap-x-[32px] w-full justify-center mx-auto"
      role="list"
      aria-label="Development process steps"
    >
      {testimonialsItems.map((item: TestimonialsItemType, index: number) => (
        <TestimonialsItem index={index} item={item} key={index} />
      ))}
    </div>
  );
};
