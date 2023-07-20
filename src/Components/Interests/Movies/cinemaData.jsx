import lotr1 from "../../../Assets/fellowposter-min.jpg";
import lotr2 from "../../../Assets/towerposter-min.jpg";
import lotr3 from "../../../Assets/returnposter-min.jpg";
import matrix1 from "../../../Assets/matrix1-min.jpg";
import matrix2 from "../../../Assets/matrix2-min.jpg";
import matrix3 from "../../../Assets/matrix3-min.jpg";
import quentin from "../../../Assets/quentin.jpg";
import nolan from "../../../Assets/nolan.jpg";
import gibson from "../../../Assets/gibson.jpg";
import vikings from "../../../Assets/vikings.jpg";
import prison from "../../../Assets/prisonbreak.jpg";
import spartacus from "../../../Assets/spartacus.jpg";
import denzel from "../../../Assets/denzel.jpg";
import bale from "../../../Assets/bale.jpg";
import leo from "../../../Assets/leo.jpg";
import davis from "../../../Assets/davis.jpg";
import brad from "../../../Assets/brad.jpg";
import cruz from "../../../Assets/cruz.jpg";

const cinema = [
  {
    name: "movies",
    movie: [
      {
        film: "greatests of all time",
        chapters: [
          {
            chapter: "fellowship of the ring",
            image: lotr1,
            year: 2001,
            producer: "peter jackson",
            desc: "A young hobbit, Frodo, who has found the One Ring that belongs to the Dark Lord Sauron, begins his journey with eight companions to Mount Doom, the only place where it can be destroyed.",
          },
          {
            chapter: "the two tower",
            image: lotr2,
            year: 2002,
            producer: "peter jackson",
            desc: "Frodo and Sam arrive in Mordor with the help of Gollum. A number of new allies join their former companions to defend Isengard as Saruman launches an assault from his domain.",
          },
          {
            chapter: "the return of the king",
            image: lotr3,
            year: 2003,
            producer: "peter jackson",
            desc: "The former Fellowship members prepare for the final battle. While Frodo and Sam approach Mount Doom to destroy the One Ring, they follow Gollum, unaware of the path he is leading them to.",
          },
          {
            chapter: "matrix",
            image: matrix1,
            year: 1999,
            producer: "wachowski brothers",
            desc: "Thomas Anderson, a computer programmer, is led to fight an underground war against powerful computers who have constructed his entire reality with a system called the Matrix.",
          },
          {
            chapter: "Reloaded",
            image: matrix2,
            year: 2003,
            producer: "wachowski brothers",
            desc: "At the Oracle's behest, Neo attempts to rescue the Keymaker and realises that to save Zion within 72 hours, he must confront the Architect. Meanwhile, Zion prepares for war against the machines.",
          },
          {
            chapter: "revolutions",
            image: matrix3,
            year: 2003,
            producer: "wachowski brothers",
            desc: "Neo, humanity's only hope of stopping the war and saving Zion, attempts to broker peace between the machines and humans. However, he must first confront his arch-nemesis, the rogue Agent Smith.",
          },
        ],
      },
    ],
  },
  {
    name: "producers",
    persons: [
      {
        name: "Quentin Tarantino",
        image: quentin,
      },
      {
        name: "christopher nolan",
        image: nolan,
      },
      {
        name: "mel gibson",
        image: gibson,
      },
    ],
  },
  {
    name: "series",
    tvSeries: [
      {
        name: "vikings",
        image: vikings,
        year: 2013,
        producer: "michael hirst",
        desc: "Ragnar Lothbrok, a legendary Norse hero, is a mere farmer who rises up to become a fearless warrior and commander of the Viking tribes with the support of his equally ferocious family.",
      },
      {
        name: "spartacus",
        image: spartacus,
        year: 2010,
        producer: "Steven S. DeKnight",
        desc: "A Thracian warrior is captured and enslaved by the Romans, then placed in gladiator school, where he battles to save his life, gains his freedom and reunites with his wife.",
      },
      {
        name: "prison break",
        image: prison,
        year: 2005,
        producer: "Paul Scheuring",
        desc: "An engineer installs himself in a prison he helped design, in order to save his falsely accused brother from a death sentence.",
      },
    ],
  },
  {
    name: "actors",
    actors: [
      {
        name: "christian bale",
        image: bale,
      },
      {
        name: "leonardo dicaprio",
        image: leo,
      },
      {
        name: "denzel washington",
        image: denzel,
      },
      {
        name: "penelope cruz",
        image: cruz,
      },
      {
        name: "brad pitt",
        image: brad,
      },
      {
        name: "viola davis",
        image: davis,
      },
    ],
  },
];

export default cinema;
