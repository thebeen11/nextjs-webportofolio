import { Element } from "react-scroll";
import { Link } from "react-scroll";
import Image from "next/image";
import heroImage from "../public/IMG.jpg";

function homePage() {
  return (
    <Element id="home" name="home">
      <div className="flex justify-between text-center md:mx-20 md:pt-32 pt-28">
        <div className="flex flex-col md:ml-20 mx-10 mt-10">
          <h1 className="font-bold md:text-7xl text-4xl text-left mb-5">
            Hello, I am <span className="text-primary">Tomi</span>
          </h1>
          <p className="text-left flex-wrap font-normal mb-5">
            <span className="text-primary">Front End Developer</span> - an
            experienced frontend web developer using javascript frameworks such
            as react.js and vue.js. I can also use Node.js with Express and
            mongodb to create my own backend service.
          </p>
          <Link
            to="project"
            smooth={true}
            offset={50}
            duration={500}
            className="font-semibold cursor-pointer text-white md:mt-10 mt-5 pt-5 bg-primary rounded-md w-60 h-16 text-lg hover:bg-black"
          >
            See My Portofolio !
          </Link>
        </div>
        <div className="w-3/4 h-96 shadow-xl rounded-full relative px-10 hidden md:block">
          <Image
            src={heroImage}
            alt="heroImg"
            layout="fill"
            objectFit="cover"
            className="rounded-full cursor-pointer hidden md:block"
          />
        </div>
      </div>
    </Element>
  );
}

export default homePage;
