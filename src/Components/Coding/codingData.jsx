import { AiFillHtml5 } from "react-icons/Ai";
import { BiLogoCss3, BiLogoReact } from "react-icons/Bi";
import { DiJavascript } from "react-icons/Di";
import w3s from "../../Assets/w3s.png";
import codingaddict from "../../Assets/caddict.jpg";
import bitcamp from "../../Assets/bitcamp.jpg";

const languages = [
  {
    name: "HTML",
    image: <AiFillHtml5 />,
    course: [
      {
        name: "W3schools basics of HTML",
        link: "https://www.w3schools.com/html/default.asp",
        logo: w3s,
      },
      {
        name: "Coding Addict HTML complete Course",
        link: "https://www.youtube.com/playlist?list=PLnHJACx3NwAfFkpKE-VUl5zdAxqqa3O5Y",
        logo: codingaddict,
      },
      {
        name: "BitCamp Georgia Basics",
        link: "https://www.youtube.com/playlist?list=PLinr8mxnrkqukIl1x7ew1W-iRCFvAo6Jd",
        logo: bitcamp,
      },
    ],
  },
  {
    name: "CSS",
    image: <BiLogoCss3 />,
    course: [
      {
        name: "W3schools CSS Basics",
        link: "https://www.w3schools.com/css/default.asp",
        logo: w3s,
      },
      {
        name: "Coding Addict CSS complete Course",
        link: "https://www.youtube.com/playlist?list=PLnHJACx3NwAcgdSFN77vdSd22unfGWQZv",
        logo: codingaddict,
      },
      {
        name: "BitCamp Georgia CSS Basics ",
        link: "https://www.youtube.com/playlist?list=PLinr8mxnrkqukIl1x7ew1W-iRCFvAo6Jd",
        logo: bitcamp,
      },
    ],
  },
  {
    name: "Javascript",
    image: <DiJavascript />,
    course: [
      {
        name: "W3schools Javascript Fundamentals",
        link: "https://www.w3schools.com/js/default.asp",
        logo: w3s,
      },
      {
        name: "Coding Addict JS complete course",
        link: "https://www.youtube.com/watch?v=2Ji-clqUYnA&list=PLnHJACx3NwAdT_8forzXYvx0o4A2VnoHX&index=2&t=34766s&ab_channel=CodingAddict",
        logo: codingaddict,
      },
      {
        name: "BitCamp Georgia / Elocuent Javascript",
        link: "https://www.youtube.com/playlist?list=PLinr8mxnrkqukIl1x7ew1W-iRCFvAo6Jd",
        logo: bitcamp,
      },
    ],
  },
  {
    name: "React",
    image: <BiLogoReact />,
    course: [
      {
        name: "W3schools REACT basics",
        link: "https://www.w3schools.com/react/default.asp",
        logo: w3s,
      },
      {
        name: "Coding Addict REACT complete course",
        link: "https://www.youtube.com/watch?v=iZhV0bILFb0&list=PLnHJACx3NwAdT_8forzXYvx0o4A2VnoHX&index=4&ab_channel=CodingAddict",
        logo: codingaddict,
      },
      {
        name: "BitCamp Georgia REACTOR course",
        link: "https://www.youtube.com/playlist?list=PLinr8mxnrkqsNN_9YFIyJQGY75hy5t1yK",
        logo: bitcamp,
      },
    ],
  },
];

export default languages;
