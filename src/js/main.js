// Les imports en premier (import)
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Puis les déclarations de plugins (registerPlugin)
gsap.registerPlugin(ScrollTrigger);

// Puis le test de chargement du document
document.addEventListener("DOMContentLoaded", function () {
  // Enfin, tout le code JS ici
});
