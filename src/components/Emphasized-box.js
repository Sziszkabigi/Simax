import { React } from "react";

function EmphasizedBox() {
  return (
    <div className="emphasized-container">
      <div className="emphasized-box">
        <img className="emphasized-image" src="./assets/hero.jpg" alt="" />
        <div>
          <h1> Advertisement card </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electroni
          </p>
          <button
            classNAme="emp-b"
            type="button"
            class="btn btn-outline-secondary"
          >
            Secondary
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmphasizedBox;
