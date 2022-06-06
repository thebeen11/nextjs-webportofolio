import { Element } from "react-scroll";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import { FaReact, FaVuejs } from "react-icons/fa";

function services() {
  return (
    <Element id="services" name="services">
      <div className="w-fill my-40 h-auto flex flex-col justify-center items-center">
        <p className="text-sm uppercase text-gray-400">My Skill</p>
        <h1 className="text-primary md:text-6xl text-4xl font-bold text-center">
          My Expertise
        </h1>

        <div className="flex justify-items-start items-center mx-40 gap-10 mt-20">
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center cursor-pointer">
              <IoLogoJavascript className="w-10 h-10 bg-jscolor text-gray-100 m-3 p-1 shadow-xl rounded-md" />
              <h1 className="text-xl text-secondary font-semibold">
                Javascript
              </h1>
            </div>
            <p className="md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm">
              4 years experience using javascript, familiar with using
              javascript ES6
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center cursor-pointer">
              <FaReact className="w-10 h-10 bg-reactcolor text-gray-100 m-3 p-1 shadow-xl rounded-md" />
              <h1 className="text-xl text-secondary font-semibold">React.Js</h1>
            </div>
            <p className="md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm">
            1 year experience using react.js with react hook, redux and axios.
            </p>
          </div>
        </div>

        <div className="flex justify-items-start items-center mx-40 gap-10 mt-20">
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center cursor-pointer">
              <FaVuejs className="w-10 h-10 bg-vuecolor text-gray-100 m-3 p-1 shadow-xl rounded-md" />
              <h1 className="text-xl text-secondary font-semibold">Vue.Js</h1>
            </div>
            <p className="md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm">
              Adipisicing cillum magna aliquip voluptate nisi eu enim incididunt
              elit pariatur ex deserunt reprehenderit.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center cursor-pointer">
              <IoLogoNodejs className="w-10 h-10 bg-jscolor text-gray-100 m-3 p-1 shadow-xl rounded-md" />
              <h1 className="text-xl text-secondary font-semibold">
                Node.Js & Express
              </h1>
            </div>
            <p className="md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm">
              Adipisicing cillum magna aliquip voluptate nisi eu enim incididunt
              elit pariatur ex deserunt reprehenderit.
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default services;
