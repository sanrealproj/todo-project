import React from "react";

const HowToUse = () => {
  return (
    <>
      <h1> How to use </h1>
      <div class="docs_text">
        <div>
          <h3> Add a task </h3>
        </div>
        <p> Click inside the yellow box and add text. </p>
        <p>
          {" "}
          Once done, press Enter or click on the{" "}
          <i class="fas fa-plus fa-lg"></i> button.{" "}
        </p>
      </div>

      <div class="docs_text">
        <div>
          <h3> Complete a task </h3>
        </div>
        <p class="inline">
          {" "}
          Hover over the task and click
          <i class="far fa-square fa-lg"></i>{" "}
        </p>
      </div>
      <div class="docs_text">
        <div>
          <h3> Edit a task </h3>
        </div>
        <p class="inline">
          {" "}
          Hover over the task and click
          <i class="fas fa-pencil-alt fa-lg"> </i>{" "}
        </p>
        <p> You can now edit the task. </p>
        <p> Once done, press Enter or click the pencil icon again. </p>
        <p> A completed task cannot be edited! </p>
        <p> In order to do so, un-click the square box first. </p>
      </div>
      <div class="docs_text">
        <div>
          <h3> Remove a task </h3>
        </div>
        <p class="inline">
          {" "}
          Hover over the task and click
          <i class="fas fa-trash fa-lg"></i>{" "}
        </p>
      </div>
      <hr />
    </>
  );
};

export default HowToUse;
