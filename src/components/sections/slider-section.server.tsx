import { SliderSectionClient } from "@/components/sections/slider-section.client";
import { getSlider } from "@/lib/data/slider-data";

export default async function SliderSection() {
  const sliderItems = await getSlider();
  return <SliderSectionClient items={sliderItems || []} />;
}