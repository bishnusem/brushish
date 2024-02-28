"use client";

import { useLayoutEffect } from "react";
import Lenis from "@studio-freight/lenis";

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
      <section id="hero">
        <h1>Hero</h1>
      </section>
    </>
  );
}
