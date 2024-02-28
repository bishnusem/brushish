"use client";

import { useLayoutEffect } from "react";
import Lenis from "@studio-freight/lenis";
import ProductsGrid from "@/components/shop/productsGrid/ProductsGrid";
import Hero from "@/components/hero/Hero";

export default function Home() {
  useLayoutEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Hero />
      <ProductsGrid />
    </>
  );
}
