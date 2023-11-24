import { FC, useRef, useEffect, Dispatch, SetStateAction } from "react";
import gsap from "gsap";
import FullWidthBg from "../../components/FullWidthBg/FullWidthBg";
import "./Hero.scss";

import heroFront from "@/images/hero/characters.png";
import heroBack from "@/images/hero/hero_background.png";
import { Logo } from "@/components/Logo/Logo";

type Props = {
  showPage: (value: boolean) => void
};

const heroAnim = (tl: gsap.core.Timeline, onComplete: () => void) => {
  tl = gsap.timeline({
    onComplete: onComplete
  });

  tl
    .to('.hero', {
      opacity: 1,
      delay: 5.6,
      duration: 1
    })
    .to(".hero-front", {
      x: '20vw',
      scale: 0.8,
      delay: 1,
      duration: 0.7,
      ease: "power2.inOut",
    })
    .to('.hero__content', {
      opacity: 1,
      duration: 0.4,
      ease: 'power2.inOut',
    })

  return tl;
};

const Hero: FC<Props> = ({showPage}) => {

  useEffect(() => {
    const tl = gsap.timeline();

    tl.add(heroAnim(tl, () => showPage(true)));
  });

  return (
    <section
      className="hero"
      data-hidden
    >
      <FullWidthBg url={heroBack}>
        <img src={heroFront} alt="" className="hero-front" />
        <div
          className="hero__content"
          data-hidden
        >
          <Logo classImage="hero__logo" />
          <h2 className="bold hero__top-text">
            The ultimate game that takes you to the fiery depths of the planet
            of Hell!
          </h2>
          <h1 className="big-text">
            <span>crazy</span>
            <span> hell</span>
          </h1>
          <p className="small-text bold hero__under-title">
            Are you prepared to construct your infernal empire and rise to the
            esteemed position of Hell's ruler in the ultimate game that plunges
            you into the fiery depths of the underworld?
          </p>
        </div>
      </FullWidthBg>
    </section>
  );
};

export default Hero;
