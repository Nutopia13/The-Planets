import React from "react";
import Section from "./Section";

const Stats = (props) => {
  const temp = props.facts.temperature.match(/\d+/g).map(Number) + " °C";

  return (
    <Section>
      <div className="cards hidden md:flex md:max-w-[689px] lg:max-w-[1100px] mb-14 md:space-x-4 lg:space-x-8 mx-auto  mt-[87px] text-white">
        <div className="card border-2 px-3  lg:pl-6 min-w-[167px] lg:min-w-[255px] border-light_grey py-4 lg:py-7">
          <div className="card-title font-sparta ">ROTATION TIME</div>
          <div className="card-value font-antonio uppercase">
            {props.facts.rotation}
          </div>
        </div>
        <div className="card  lg:pl-6  px-3 border-2 min-w-[167px] lg:min-w-[255px] border-light_grey py-4 lg:py-7 ">
          <div className="card-title font-sparta">Revolution Time</div>
          <div className="card-value font-antonio uppercase">
            {props.facts.revolution}
          </div>
        </div>
        <div className="card lg:pl-6  px-3 border-2 min-w-[167px] lg:min-w-[255px] border-light_grey py-4 lg:py-7">
          <div className="card-title font-sparta">RADIUS</div>
          <div className="card-value  font-antonio uppercase ">
            {props.facts.radius}
          </div>
        </div>
        <div className="card lg:pl-6  px-3 border-2 min-w-[167px] lg:min-w-[255px] border-light_grey py-4 lg:py-7">
          <div className="card-title  font-sparta">AVERAGE TEMP.</div>
          <div className="card-value font-antonio uppercase">{temp}</div>
        </div>
      </div>
    </Section>
  );
};

export default Stats;
