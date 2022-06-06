import { Element } from "react-scroll";
import Image from "next/image";
import modena from "../public/img/modena-logo.png";
import cronos from "../public/img/cronos.jpeg";

function work() {
  return (
    <Element id="work" name="work">
      <div>
        <div className="flex w-full flex-col my-20 h-auto justify-center items-center">
          <p className="text-sm uppercase text-gray-400">work</p>
          <h2 className="text-primary text-6xl text-center">Work Experience</h2>
          <div className="flex justify-between flex-col md:flex-row text-center mx-20 my-20 gap-2 md:gap-10">
            <div className="relative flex flex-col items-center w-80 h-96 p-4 border-2 shadow-lg border-secondary out rounded ">
              <div className="absolute top-8 items-center w-60 h-10">
                <Image
                  src={modena}
                  alt="one"
                  layout="fill"
                  objectFit="cover"
                  className="p-2 rounded"
                />
              </div>
              <div className=' top-28 absolute px-2'>
              <h1 className="text-xl text-primary font-semibold mb-2">
                PT. Modena Indonesia, Jakarta
              </h1>
              <p className="text-sm uppercase text-gray-400">
                FrontEnd Developer
              </p>
              <p className="text-sm text-gray-400">April 2021 - current</p>

              <p className="mt-4">
                Build and develop an end-to-end modena logistics Indonesia web
                application frontend using Vue.js
              </p>
              </div>
            </div>
            <div className="relative flex flex-col items-center w-80 h-96 p-4 border-2 shadow-lg border-secondary out rounded ">
              <div className="absolute top-8 items-center w-60 h-10">
                <Image
                  src={cronos}
                  alt="one"
                  layout="fill"
                  objectFit="cover"
                  className="p-2 rounded"
                />
              </div>
              <div className=' top-28 absolute px-2'>
              <h1 className="text-xl text-primary font-semibold mb-2">
                PT. Cronos Solusi Bisnis, Jakarta
              </h1>
              <p className="text-sm uppercase text-gray-400">
                FrontEnd Developer, Intern
              </p>
              <p className="text-sm text-gray-400">November 2019 - December 2019</p>

              <p className="mt-6">
              Help build a web frontend using the vue.js project at PT Cronos Solusi Bisnis as a software house
              </p>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
    </Element>
  );
}

export default work;
