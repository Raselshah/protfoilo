import React from "react";
import Service from "../Service/Service";
import "./style.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import photo from "../../images/myphoto.jpg";
import MyService from "../MyService/MyService";
import { Contact } from "../Contact/Contact";
const HomePage = () => {
  return (
    <section id="home" className="max-w-screen-2xl mx-auto">
      <div className="w-11/12 header-bg mx-auto px-12 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:sticky relative top-0 bg-neutral h-[75vh] rounded-lg">
            <div className="flex flex-col justify-center items-center mt-4">
              <div class="avatar">
                <div class="w-24 rounded-full">
                  <img src={photo} alt="" />
                </div>
              </div>
              <div className="text-center mt-4">
                <h2 className="text-base-100 text-xl">Rasel Shah</h2>
                <p className="text-base-200 text-md">i am a developer</p>

                <div class="das my-6"></div>
                <div className="flex justify-around">
                  <p className="text-base-100">
                    {" "}
                    <FaLinkedin />{" "}
                  </p>
                  <p className="text-base-100">
                    {" "}
                    <FaGithub />{" "}
                  </p>
                  <p className="text-base-100">
                    {" "}
                    <FaTwitterSquare />{" "}
                  </p>
                </div>
                <div class="das my-6"></div>
                <div className="flex justify-around space-x-8">
                  <p className="text-base-100">Country :</p>
                  <p className="text-base-200">Bangladesh</p>
                </div>
                <div className="flex justify-around space-x-8">
                  <p className="text-base-100">City :</p>
                  <p className="text-base-200">Rajshahi</p>
                </div>
                <div className="flex justify-around space-x-8">
                  <p className="text-base-100">Age :</p>
                  <p className="text-base-200">21</p>
                </div>

                <div class="das my-6"></div>
                <a
                  href="#contact"
                  className="btn btn-primary rounded-full mt-4"
                >
                  <p className="text-base-100">Contact me</p>
                  <span className="text-lg text-base-100 ml-2">
                    <MdMessage />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="flex justify-center h-full items-start flex-col ml-4 mt-16 mx-auto">
              <p className="text-base-100">HI MY NEW FRIEND!</p>
              <p className="text-base-100 text-3xl md:text-5xl lg:text-7xl font-bold">
                Discover my <br /> Developing skill!
              </p>

              <a
                target="_blank"
                rel="noreferrer"
                href={
                  "https://drive.google.com/file/d/1fDvMGw2XzWxJaVWv6025Op57v49HNBL4/view?usp=sharing"
                }
                className="btn btn-outline text-base-100 uppercase rounded-full hover:bg-primary hover:border-0 mt-6"
              >
                Download Resume
              </a>

              <Service />
              <MyService></MyService>
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
