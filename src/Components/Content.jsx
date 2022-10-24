import React from "react";

const Content = (props) => {
  if (
    props.ref.current.className === "btn_active" &&
    props.ref.current.innerHTML === "Overview"
  ) {
    return (
      <div>
        <div className="planet-image">
          <img src={"src/assets/planet-" + props.planets.name + ".svg"}></img>
        </div>
        <div className="planet-info">
          <span className="planet-title">{props.planets.name}</span>
          <div className="overview">
            <p>{props.planets.overview.content}</p>
          </div>
        </div>
      </div>
    );
  } else if (
    props.ref.current.className === "btn_active" &&
    props.ref.current.innerHTML === "Internal Structure"
  ) {
    return (
      <div>
        <div className="planet-image">
          <img
            src={"src/assets/planet-" + props.planets.name + "-internal.svg"}
          ></img>
          <img src={"src/assets/geology-" + props.planets.name + ".svg"}></img>
        </div>
        <div className="planet-info">
          <span className="planet-title">{props.planets.name}</span>
          <div className="overview">
            <p>{props.planets.structure.content}</p>
          </div>
        </div>
      </div>
    );
  } else if (
    props.ref.current.className === "btn_active" &&
    props.ref.current.innerHTML === "Surface Geology"
  ) {
    return (
      <div>
        <div className="planet-image">
          <img src={"src/assets/planet-" + props.planets.name + ".svg"}></img>
        </div>
        <div className="planet-info">
          <span className="planet-title">{props.planets.name}</span>
          <div className="overview">
            <p>{props.planets.geology.content}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default Content;
