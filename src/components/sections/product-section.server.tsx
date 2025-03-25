"use server"

import { ProductSectionClient } from "./products-section.client";
import { getProductItems } from "@/lib/data/product-data";
import logger from "@/lib/logger";

export default async function ProductSectionServer() {
  const products = await getProductItems();
  logger.log('products', products)
  return <ProductSectionClient products={products || []} />;
}
