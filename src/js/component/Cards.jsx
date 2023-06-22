import React from "react";

const Cards = () => {
  return (
    <div className="container border-top mx-auto px-5 mb-5">
      <h2 className="fs-1" style={{ marginTop: "35px" }}>
        <strong>Portfolio</strong>
      </h2>
      <p className="fs-3">
        Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula
        porta felis euismod semper. Praesent commodo cursus magna, vel
        scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
      </p>
      <div className="row">
        <div className="col-sm-3">
          <div className="card">
            <img
              src="https://picsum.photos/200/300"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h4 className="card-title text-primary">Project Name</h4>
              <p className="card-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dignissimos neque eos, deleniti pariatur harum quia.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card">
            <img
              src="https://picsum.photos/200/300"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h4 className="card-title text-primary">Project Name</h4>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos neque eos, deleniti pariatur harum quia.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card">
            <img
              src="https://picsum.photos/200/300"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h4 className="card-title text-primary">Project Name</h4>
              <p className="card-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dignissimos neque eos, deleniti pariatur harum quia.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card">
            <img
              src="https://picsum.photos/200/300"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h4 className="card-title text-primary">Project Name</h4>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos neque eos, deleniti pariatur harum quia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cards;
