import React from "react";
import Buttons from "../Components/Buttons";
import Stats from "../Components/Stats";
import Statistics_Mob from "../Components/Statistics_Mob";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Data from "../../data.json";
import StatsMob from "../Components/StatsMob";
import { AnimatePresence, motion } from "framer-motion";
import Section from "../Components/Section";

const Planet = () => {
  const [planets, setPlanets] = useState(Data[3]);
  const [content, setContent] = useState("overview");
  const params = useParams();

  useEffect(() => {
    setPlanets(Data[3]);
  }, []);

  useEffect(() => {
    Data.forEach((planet) => {
      if (params.planets.toLowerCase() === planet.name.toLowerCase()) {
        setPlanets(planet);
      }
    });
  }, [params]);

  function handleClick(e) {
    if (e.target.innerHTML === "Overview") {
      setContent("overview");
    } else if (e.target.innerHTML === "Internal Structure") {
      setContent("structure");
    } else if (e.target.innerHTML === "Surface Geology") {
      setContent("geology");
    }
  }

  function handleClickMob(e) {
    if (e.target.innerHTML === "Overview") {
      setContent("overview");
    } else if (e.target.innerHTML === "Structure") {
      setContent("structure");
    } else if (e.target.innerHTML === "Surface") {
      setContent("geology");
    }
  }

  function toggleContent() {
    if (content === "overview") {
      return (
        <Section>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id={planets.name}
            className="text-white mt-10  flex flex-wrap items-center justify-center text-center md:text-left"
          >
            <div
              className="planet-image grid place-content-center w-[260px] md:w-[462px] md:h-[462px] lg:h-[540px] lg:w-[669px]"
              id={planets.name}
            >
              <img
                src={"../../public/Planets/planet-" + planets.name.toLowerCase() + ".svg"}
              />
            </div>
            <div className="planet-info md:flex md:max-w-[600px] justify-around items-center md:space-x-8 lg:space-x-0 lg:block max-w-[327px] lg:max-w-[350px]">
              <div>
                <span className="planet-title ">{planets.name}</span>
                <div className="overview ">
                  <p>{planets.overview.content}</p>
                </div>
                <span className="wikipedia opacity-50">
                  Source:{" "}
                  <a
                    target="_blank"
                    className="font-bold"
                    href={planets.overview.source}
                  >
                    Wikipedia{" "}
                  </a>
                </span>
              </div>
              <Buttons onClick={handleClick} class={content} id={planets} />
              <StatsMob facts={planets} />
            </div>
          </motion.div>
        </Section>
      );
    } else if (content === "structure") {
      return (
        <Section>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white mt-10 flex flex-wrap items-center justify-center text-center md:text-left"
          >
            <div
              className="planet-image grid place-content-center  md:h-[462px] lg:h-[540px] w-[260px] md:w-[462px] lg:w-[669px]"
              id={planets.name}
            >
              <img
                src={
                  "../../public/Planets/planet-" +
                  planets.name.toLowerCase() +
                  "-internal.svg"
                }
              />
            </div>
            <div className="planet-info max-w-[327px]  md:flex md:max-w-[600px] justify-around items-center md:space-x-8 lg:space-x-0 lg:block lg:h-[540px] lg:max-w-[350px]">
              <span className="planet-title">{planets.name}</span>
              <div className="overview">
                <p>{planets.structure.content}</p>
              </div>
              <span className="wikipedia opacity-50">
                Source:{" "}
                <a
                  target="_blank"
                  className="font-bold"
                  href={planets.structure.source}
                >
                  Wikipedia{" "}
                </a>
              </span>
              <Buttons onClick={handleClick} class={content} id={planets} />
              <StatsMob facts={planets} />
            </div>
          </motion.div>
        </Section>
      );
    } else if (content === "geology") {
      return (
        <Section>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white mt-10 flex flex-wrap items-center justify-center text-center md:text-left"
          >
            <div
              className="planet-image md:h-[462px] lg:h-[540px] relative flex flex-col justify-center items-center w-[260px] md:w-[462px] lg:w-[669px]"
              id={planets.name}
            >
              <img
                src={"../../public/Planets/planet-" + planets.name.toLowerCase() + ".svg"}
              />
              <img
                className="hidden absolute md:block top-96 w-[100px] md:w-[262px] lg:h-[200px] lg:w-[163px]"
                src={
                  "../../public/Planets/geology-" + planets.name.toLowerCase() + ".png"
                }
              />
            </div>

            <div className="planet-info  md:flex md:max-w-[600px] justify-around items-center md:space-x-8 lg:space-x-0 lg:block  max-w-[327px] lg:max-w-[350px]">
              <span className="planet-title">{planets.name}</span>
              <div className="overview">
                <p>{planets.geology.content}</p>
              </div>
              <span className="wikipedia opacity-50">
                Source:{" "}
                <a
                  target="_blank"
                  className="font-bold"
                  href={planets.geology.source}
                >
                  Wikipedia{" "}
                </a>
              </span>
              <Buttons onClick={handleClick} class={content} id={planets} />
              <StatsMob facts={planets} />
            </div>
          </motion.div>
        </Section>
      );
    }
  }
  return (
    <div>
      <Statistics_Mob onClick={handleClickMob} class={content} id={planets} />
      {toggleContent()}
      <Stats facts={planets} />
    </div>
  );
};

export default Planet;
