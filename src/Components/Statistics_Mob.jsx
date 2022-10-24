import React from "react";

const Statistics_Mob = (props) => {
  return (
    <div className="stats md:hidden flex py-5 max-w-[327px] mx-auto justify-between border-b-2 border-[#979797] text-white  items-center">
      <button
        className="opacity-70 active:opacity-100"
        onClick={props.onClick}
        id={props.id.name}
      >
        Overview
      </button>

      <button
        className="opacity-70 active:opacity-100"
        onClick={props.onClick}
        id={props.id.name}
      >
        Structure
      </button>

      <button
        className="opacity-70 active:opacity-100 btn"
        onClick={props.onClick}
        id={props.id.name}
      >
        Surface
      </button>
    </div>
  );
};

export default Statistics_Mob;
