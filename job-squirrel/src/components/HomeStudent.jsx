import React from "react";

function HomeStudent() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/08/squirrel-279089.jpg?h=cc5c141a&itok=DTrrTPsM"
              alt=""
            />
            <button type="button">Click Me!</button>
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Home for Students</h1>
            <p>
              This is the students landing page
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeStudent;