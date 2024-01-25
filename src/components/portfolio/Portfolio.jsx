import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Transloga",
    img: "/transloga.jpg",
    desc: `Fully responsive web app for logistics company where user with authentification can instantly add, update or delete current prices.`,
    desc2: `Developed functions: Authentification, Responsivness, Integration with backend`,
    desc3: `Used technologies: Angular, Bootstrap, Firebase, SCSS, HTML5`,
    link: "https://transloga.lt",
  },
  {
    id: 2,
    title: `KK "Velžys"`,
    img: "/kkVelzys.jpg",
    desc: `Fully responsive web app for a basketball club where editor can add or delete players, game dates, news. Timer shows time left till the next game. Games automatically move to "played" list if already ended`,
    desc2: `Developed functions: Responsivness, Integration with backend, Intuitive Content Management System for editors`,
    desc3: `Used technologies: Vite + React, Tailwind CSS, Sanity.io, HTML5`,
    link: "https://kkvelzys.lt",
  },
  {
    id: 3,
    title: "Augalų galia",
    img: "/augalugalia.jpg",
    desc: `Fully responsive Eshop with a functional shopping cart and payments via Stripe Payment System. Editor can easily add, remove or update products via Sanity.io CMS`,
    desc2: `Developed functions: Responsivness, Integration with backend, Intuitive Content Management System for editors, Payments`,
    desc3: `Used technologies: Next.js, Sanity.io, SCSS, HTML5`,
    link: "https://augalugalia.lt",
  },
  // {
  //   id: 4,
  //   title: "Lorem",
  //   img: "",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  // },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <p>{item.desc2}</p>
            <p>{item.desc3}</p>
            <a href={item.link} target="_blank">
              <button>Visit Website</button>
            </a>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
