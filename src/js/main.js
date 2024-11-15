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
        trigger: ".l-parallax-container", // Élément déclencheur : quand cet élément atteint le point de début défini, l'animation commence
        start: "top top", // L'animation démarre quand le haut de .parallax-container atteint le haut de la fenêtre
        scrub: 2, // Rend l'animation fluide et synchronisée avec le défilement
        pin: true, // "Pin" fixe l'élément dans la fenêtre pendant que l'animation se déroule
      },
    })
    .to("#element-3", {
      y: 150, // Déplace l'élément vers le bas
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
  gsap.to(".l-slider-container", {
    x: "-80%", // Déplace .slider-container vers la gauche de 80% de sa largeur
    // Ce déplacement permet d'afficher le dernier élément
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
        trigger: ".l-container-bubbles",
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
