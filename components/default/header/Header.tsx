"use client";

import Logo from "@/components/icons/Logo";
import "./style.scss";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { headertype } from "@/sanity/types/headerType";
import { getHeader } from "@/sanity/sanity-utils";
import Image from "next/image";
import ImageSize from "@/utils/image-utils";
import Nav from "./Nav";

const Header = () => {
  const [data, setData] = useState<headertype>();
  const pathname = usePathname();
  //console.log("pathname->", pathname);

  const heroHeaderRef = useRef<HTMLElement | null>(null);
  const logoRef = useRef<SVGSVGElement | null>(null);
  //console.log("logoRef->", logoRef);

  const fetchHeaderData = async () => {
    const data = await getHeader();
    setData(data);
  };

  useEffect(() => {
    fetchHeaderData();
  }, []);

  //console.log("headerData->", data);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.to(heroHeaderRef.current, {
        height: "80px",
        backgroundColor: "rgba(29, 3, 120, 1)",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: heroHeaderRef.current,
          //markers: true,
          start: "top top",
          end: "bottom top",
          scrub: 0.2,
        },
      });

      gsap.to(logoRef.current, {
        width: "160px",
        height: "55%",
        scrollTrigger: {
          trigger: heroHeaderRef.current,
          //markers: true,
          start: "top top",
          end: "bottom top",
          scrub: 0.4,
        },
      });
    },

    { scope: heroHeaderRef }
  );

  return (
    <>
      {pathname == "/" ? (
        <header id="homeHeader" ref={heroHeaderRef}>
          <Logo
            fill={data?.logoColor ? data.logoColor : "black"}
            ref={logoRef}
          />
        </header>
      ) : (
        <header id="Header">Other</header>
      )}
      <Nav color={data?.logoColor} />
    </>
  );
};

export default Header;
