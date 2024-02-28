"use client";

import { useGSAP } from "@gsap/react";
import "./style.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { heroType } from "@/sanity/types/heroType";
import { getHero } from "@/sanity/sanity-utils";
import Image from "next/image";
import ImageSize from "@/utils/image-utils";

const Hero = () => {
  const heroRef = useRef<HTMLElement | null>(null);

  const [data, setData] = useState<heroType>();

  const fetchHeroData = async () => {
    const data = await getHero();
    setData(data);
  };

  useEffect(() => {
    fetchHeroData();
  }, []);

  //console.log("heroData->", data);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.to(heroRef.current, {
        borderRadius: "0 0 10px 10px",
        scrollTrigger: {
          trigger: heroRef.current,
          //markers: true,
          start: "top top",
          end: "bottom 80px",
          scrub: 0.2,
        },
      });
    },
    { scope: heroRef }
  );

  return (
    <section id="hero" ref={heroRef}>
      {data?.backgroundImage && (
        <Image
          src={data?.backgroundImage}
          alt="Background Image"
          fill
          sizes={ImageSize.bannerSizes}
          style={{
            objectPosition: `${data.backgroundImageHotspot?.x * 100}% ${
              data.backgroundImageHotspot?.y * 100
            }%`,
          }}
        />
      )}
      <h1>{data?.title}</h1>
      <h3>{data?.subtitle}</h3>
    </section>
  );
};

export default Hero;
