import { getFaqItems } from "@/lib/data/data";
import { Faq } from "@/components/sections/faq-section.client";

export default  function FaqSection() {
  // Await the slider data on the server. If getSlider returns a promise, this works properly.
  const faqItems =  getFaqItems();

  // Ensure sliderItems is defined (default to an empty array if necessary)
  return <Faq items={faqItems || []} />;
}
