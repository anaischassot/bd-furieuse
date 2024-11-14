// Les imports en premier (import)
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Puis les déclarations de plugins (registerPlugin)
gsap.registerPlugin(ScrollTrigger);

// Puis le test de chargement du document
document.addEventListener("DOMContentLoaded", function () {
  // effet de parralax
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".parallax-container",
        start: "top top",
        scrub: 2,
        pin: true,
      },
    })
    .to("#element-3", {
      y: 150,
      opacity: 0,
    })
    .to(
      "#element-1",
      {
        y: -160,
      },
      0
    )
    .to(
      "#element-2",
      {
        y: 100,
      },
      0
    )
    .to(
      "#element-4",
      {
        y: -100,
      },
      0
    );
  // scroll horizontal
  gsap.to(".slider-container", {
    x: "-80%", // chaque élément .slider-item vaut 20% de .slider-container, on veut donc bouger la position x de -80% pour faire apparaitre le dernier élément: chaque élément a besoin de 20% pour apparaitre pleinement sur l'écran.
    scrollTrigger: {
      trigger: ".slider-mask",
      start: "top top",
      end: "+=600%",
      markers: false,
      scrub: true,
      pin: true,
    },
  });
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".container",
        start: "top top",
        scrub: true,
        pin: true,
      },
    })
    .to("#bubble-1", {
      //La position que la bulle va prendre, c'est mieux de mettre en pourcentage afin de garantir une meilleure responsivité
      left: "23%",
      top: "10%",
      opacity: 1, // rendre visible
    })
    .to("#bubble-2", {
      left: "60%",
      top: "20%",
      opacity: 1,
    })
    .to("#bubble-3", {
      left: "7%",
      top: "30%",
      opacity: 1,
    })
    .to("#bubble-4", {
      left: "70%",
      top: "60%",
      opacity: 1,
    })
    .to("#bubble-5", {
      left: "20%",
      top: "70%",
      opacity: 1,
    });
});
