import React from "react";
import cyber from "../../images/cyber.png";
import fitlife from "../../images/fitlife.png";
import orbitx from "../../images/orbitx.png";
const MyService = () => {
  return (
    <section className="grid lg:grid-cols-2 grid-cols-1 mx-auto gap-6 mt-12 ">
      <div class="card card-compact max-w-sm shadow-xl bg-neutral">
        <figure>
          <img
            className=" rounded-lg  hover:scale-x-125 duration-500"
            src={orbitx}
            alt="OrbitX"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title text-base-100">OrbitX</h2>
          <p className="text-base-100">
            This project is for a manufacturer company website.
          </p>
          <div class="card-actions justify-start">
            <a
              target="_blank"
              rel="noreferrer"
              href={"https://obitx-bcc35.web.app/"}
              class="btn btn-primary"
            >
              Live Preview
            </a>
          </div>
        </div>
      </div>

      <div class="card card-compact max-w-sm shadow-xl bg-neutral">
        <figure>
          <img
            className=" rounded-lg  hover:scale-x-125 duration-500"
            src={cyber}
            alt="Cyber"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title text-base-100">Cyber Clinic</h2>
          <p className="text-base-100">
            This project manages warehouse product shipping.
          </p>
          <div class="card-actions justify-start">
            <a
              target="_blank"
              rel="noreferrer"
              href={"https://cyber-shop-11f15.web.app/"}
              class="btn btn-primary"
            >
              Live Preview
            </a>
          </div>
        </div>
      </div>
      <div class="card card-compact max-w-sm shadow-xl bg-neutral">
        <figure>
          <img
            className=" rounded-lg  hover:scale-x-125 duration-500"
            src={fitlife}
            alt="Gym"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title text-base-100">FitLife Gym</h2>
          <p className="text-base-100">This is a gym center website.</p>
          <div class="card-actions justify-start">
            <a
              target="_blank"
              rel="noreferrer"
              href={"https://fitlife-gym.web.app/"}
              class="btn btn-primary"
            >
              Live Preview
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyService;
