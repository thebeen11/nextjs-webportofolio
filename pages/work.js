import { Element } from "react-scroll";
import Image from "next/image";
import modena from "../public/img/modena-logo.png";
import cronos from "../public/img/cronos.jpeg";
import WorkCard from "../components/WorkCard";

const workData = [
  {
    imgUrl: "modena-logo.png",
    company: "PT. Modena Indonesia, Jakarta",
    job: "FrontEnd Developer",
    time: "April 2021 - current",
    jobDesc:
      "Build and develop an end-to-end modena logistics Indonesia web application frontend using Vue.js",
  },
  {
    imgUrl: "cronos.jpeg",
    company: "PT. Cronos Solusi Bisnis, Jakarta",
    job: "FrontEnd Developer",
    time: "November 2019 - December 2019",
    jobDesc:
      "Help build a web frontend using the vue.js project at PT Cronos Solusi Bisnis as a software house",
  },
];

function work() {
  return (
    <Element id="work" name="work">
      <div>
        <div className="flex w-full flex-col my-20 h-auto justify-center items-center">
          <p className="text-sm uppercase text-gray-400">work</p>
          <h2 className="text-primary text-6xl text-center">Work Experience</h2>
         
           <WorkCard workData={workData}/>
        </div>
      </div>
    </Element>
  );
}

export default work;
