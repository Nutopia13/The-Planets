import React from "react";

const StatsMob = (props) => {
  const temp = props.facts.temperature.match(/\d+/g).map(Number) + " °C";

  return (
    <div className="cards md:hidden flex flex-col space-y-2 mt-7 text-white">
      <div className="card_mob border-2 border-light_grey ">
        <div className="justify-between mx-auto py-3.5 items-center flex  max-w-[279px]">
          <div className="card-title--mob opacity-50 font-sparta font-bold">
            ROTATION TIME
          </div>
          <div className="card-value--mob font-antonio uppercase">
            {props.facts.rotation}
          </div>
        </div>
      </div>
      <div className="card_mob border-2 border-light_grey ">
        <div className="justify-between mx-auto py-3.5 items-center flex  max-w-[279px]">
          <div className="card-title--mob opacity-50 font-sparta font-bold">
            Revolution Time
          </div>
          <div className="card-value--mob font-antonio uppercase">
            {props.facts.revolution}
          </div>
        </div>
      </div>
      <div className="card_mob border-2 border-light_grey ">
        <div className="justify-between mx-auto py-3.5 items-center flex  max-w-[279px]">
          <div className="card-title--mob opacity-50 font-sparta font-bold">
            RADIUS
          </div>
          <div className="card-value--mob font-antonio uppercase">
            {props.facts.radius}
          </div>
        </div>
      </div>
      <div className="card_mob border-2 border-light_grey ">
        <div className="justify-between mx-auto py-3.5 items-center flex  max-w-[279px]">
          <div className="card-title--mob opacity-50 font-sparta font-bold">
            AVERAGE TEMP.
          </div>
          <div className="card-value--mob font-antonio uppercase">{temp}</div>
        </div>
      </div>
    </div>
  );
};

export default StatsMob;
