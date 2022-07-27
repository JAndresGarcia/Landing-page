import React from "react";

const Card = () => {
  return (
    <div class="card">
      <img
        class="card-img-top d-block"
        src="https://picsum.photos/500"
        alt="Card image cap"
      ></img>
      <div class="card-body">
        <h5 class="card-title d-flex justify-content-center">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary d-flex justify-content-center">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Card;
