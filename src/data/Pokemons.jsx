import CharizardImage from "../assets/Charizard.png";
import BulbasaurImage from "../assets/bulbasaur.png";
import BlastoiseImage from "../assets/blastoise.png";

export let Pokemons = [
  {
    name: "Charizard",
    type: "🔥 Fire",
    image: CharizardImage,
    description:
      "Charizard is known for its dragon-like appearance, with a large wingspan and a long, pointed tail.  He is capable of using powerful Fire-type attacks as well as Flying-type moves.",
    fondo: {
      fondoImage: "cartaDragon",
      fondoColor: "#FFB444",
      cartaColor: "#e6a23d",
    },
    Evolution: "Evolution-3",
    fondoContainer: "#ffe4dd",

    color: "orange",
  },
  {
    name: "Bulbasaur",
    type: "🍃 Plant",
    image: BulbasaurImage,
    description:
      "Bulbasaur is a small, quadrupedal amphibian Pokémon that has blue-green skin with darker patches. It has red eyes with white pupils, pointed, ear-like structures on top of its head, and a short, blunt snout with a wide mouth.",
    fondo: {
      fondoImage: "cartaPlanta",
      fondoColor: "#B2FFE2",
      cartaColor: "#9ee2c9",
    },
    Evolution: "Evolution-1",
    fondoContainer: "#94eabe",

    color: "green",
  },
  {
    name: "Blastoise",
    type: "💦  Water",
    image: BlastoiseImage,
    description:
      "Blastoise is a large, bipedal turtle Pokémon. Its body is blue and is mostly hidden by its tough, brown shell. This shell has a cream-colored underside and a white ridge encircling its arms and separating the upper and lower halves.",
    fondo: {
      fondoImage: "cartaAgua",
      fondoColor: "#A2DDF4",
      cartaColor: "#91c4d7",
    },
    Evolution: "Evolution-3",
    fondoContainer: "#3aefe4",

    color: "blue",
  },
];
