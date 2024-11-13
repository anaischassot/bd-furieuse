// Les imports en premier (import)
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Puis les déclarations de plugins (registerPlugin)
gsap.registerPlugin(ScrollTrigger);

// Puis le test de chargement du document
document.addEventListener("DOMContentLoaded", function () {
  // scroll horizontal
  // Crée un effet de scroll horizontal
  gsap.to(".slider-container", {
    x: "-80%", // chaque élément .slider-item vaut 20% de .slider-container, on veut donc bouger la position x de -80% pour faire apparaitre le dernier élément: chaque élément a besoin de 20% pour apparaitre pleinement sur l'écran.
    scrollTrigger: {
      trigger: ".slider-mask",
      start: "top top",
      end: "+=500%",
      markers: true,
      scrub: true,
      pin: true,
    },
  });
});
