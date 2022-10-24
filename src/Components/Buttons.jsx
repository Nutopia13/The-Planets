import React from "react";

const Buttons = (props) => {
  return (
    <div>
      <div className="maw-w-[350px] hidden space-y-4 mt-9 text-white flex-wrap md:flex">
        <button
          className="btn1 btn border-2 border-slate-700 hover:bg-opacity-25 pl-[28px] items-center space-x-7 flex pr-[175px] py-3 font-bold font-sparta  uppercase text-[12px]"
          onClick={props.onClick}
          id={props.id.name}
        >
          <span>01</span>
          <span>Overview</span>
        </button>
        <button
          className="btn2 btn border-2 border-slate-700 pl-[28px] items-center space-x-7 flex pr-[84px] py-3  font-bold font-sparta  uppercase text-[12px]"
          onClick={props.onClick}
          id={props.id.name}
        >
          <span>02</span>
          <span>Internal Structure</span>
        </button>
        <button
          className="btn3 btn border-2 border-slate-700 pl-[28px] items-center space-x-7 flex pr-[106px] py-3  font-bold font-sparta uppercase text-[12px]"
          onClick={props.onClick}
          id={props.id.name}
        >
          <span>03</span> <span>Surface Geology</span>
        </button>
      </div>
    </div>
  );
};

export default Buttons;
