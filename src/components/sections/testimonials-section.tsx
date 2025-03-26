import { Suspense } from "react";
import { getTestimonialsItems, TestimonialsItem as TestimonialsItemType } from "@/lib/data/data";
import { IconBadge } from "../ui/icon-badge";

export const TestimonialsSection = () => {
  const testimonialsItems = getTestimonialsItems();

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
          id="testimonials"
          className="pb-[80px] md:pb-[160px] "
          itemScope
          itemType="https://schema.org/HowTo"
          aria-labelledby="process-title"
        >
          <div className="max-w-7xl mx-auto  px-[20px] sm:px-0">
            <TestimonialsTitleSubtitle />
            <TestimonialsItemList testimonialsItems={testimonialsItems} />
          </div>
        </section>
      </Suspense>
    </>
  );
};

const TestimonialsTitleSubtitle = () => {
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

const TestimonialsItem = ({ index, item }: { index: number; item: TestimonialsItemType }) => {

  const lightShadeStyles = {
    backgroundColor: '#014441',
    color: 'white',
    background: 'rgb(83, 113, 255)',
    borderBottomLeftRadius: '231px',
    borderBottomRightRadius: '231px',
    borderTopLeftRadius: '231px',
    borderTopRightRadius: '231px',
    display: 'block',
    filter: 'blur(50px)',
    flexBasis: 'auto',
    flexGrow: 0,
    flexShrink: 0,
    fontFamily: 'sans-serif',
    fontSize: '12px',
    height: '100px'
  }
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
        <div style={lightShadeStyles} className="w-[100px] h-[100px] -top-5 -right-5 absolute"></div>
      </div>
    </div>
  );
};

const TestimonialsItemList = ({ testimonialsItems }: { testimonialsItems: TestimonialsItemType[] }) => {
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
