"use client";

import Logo from "@/components/icons/Logo";
import "./style.scss";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Nav from "./Nav";

const Header = () => {
  const pathname = usePathname();
  //console.log("pathname->", pathname);

  const heroHeaderRef = useRef<HTMLElement | null>(null);
  const logoRef = useRef<SVGSVGElement | null>(null);
  //console.log("logoRef->", logoRef);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.to(heroHeaderRef.current, {
        height: "50px",
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
        width: "120px",
        scrollTrigger: {
          trigger: heroHeaderRef.current,
          //markers: true,
          start: "top top",
          end: "bottom top",
          scrub: 0.4,
        },
      });

      gsap.to("nav", {
        right: "6vw",
        bottom: "50%",
        transform: "translateX(0) translateY(50%)",
        scrollTrigger: {
          trigger: heroHeaderRef.current,
          //markers: true,
          start: "top top",
          end: "bottom top",
          scrub: 0.2,
        },
      });
    },

    { scope: heroHeaderRef }
  );

  return (
    <>
      {pathname == "/" ? (
        <header id="homeHeader" ref={heroHeaderRef}>
          <Logo fill="black" ref={logoRef} />
          <Nav />
        </header>
      ) : (
        <header id="Header">Other</header>
      )}
    </>
  );
};

export default Header;
