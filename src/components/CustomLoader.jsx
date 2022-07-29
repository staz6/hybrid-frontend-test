import React from "react";
import { Hearts } from "react-loader-spinner";

function CustomLoader() {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
      }}
    >
      <Hearts
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={10000} //3 secs
      />
    </div>
  );
}

export default CustomLoader;
