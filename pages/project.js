import { Element } from "react-scroll";
import Image from "next/image";
import one from "../public/img/1.png";
import filman from "../public/img/filman.png";
import gpt from "../public/img/gpt.png";
import mologiz from "../public/img/mologiz.png";
import netflix from "../public/img/netflix.png";


function project() {
  return (
    <Element id="project" name="project">
      <div className="flex w-full my-20 h-auto flex-col justify-center items-center">
        <p className="text-sm uppercase text-gray-400">Portofolio</p>
        <h2 className="text-primary md:text-6xl text-4xl text-center font-black">
          All Creative Projects
        </h2>
        <div className="md:flex sm:flex-col md:flex-row gap-10 justify-center items-center mt-10">
          <div className="rounded relative w-80 h-60 shadow-xl" >
          <a href='https://filman.imbeen.my.id/' target="_blank" rel="noreferrer">
            <Image
              src={filman}
              alt="one"
              layout="fill"
              objectFit="cover"
              className="p-2 rounded cursor-pointer"
            />
            
            </a>
            {/* <div className='absolute bottom-0 text-white'>sddsfsdfg</div> */}
          </div>
          <div className="rounded relative w-80 h-60 shadow-xl">
          <a href='https://www.mologiz.com/' target="_blank" rel="noreferrer">
            <Image
              src={mologiz}
              alt="two"
              layout="fill"
              objectFit="cover"
              className="p-2 rounded cursor-pointer"
            />
            </a>
          </div>
          <div className="rounded relative w-80 h-60 shadow-xl">
          <a href='https://reactgpt.imbeen.my.id/' target="_blank" rel="noreferrer">
            <Image
              src={gpt}
              alt="one"
              layout="fill"
              objectFit="cover"
              className="p-2 rounded cursor-pointer"
            />
            </a>
          </div>
        </div>
        <div className="md:flex sm:flex-col md:flex-row gap-10 justify-center items-center mt-10">
          <div className="rounded relative w-80 h-60 shadow-xl">
          <a href='https://netflixclone.imbeen.my.id/' target="_blank" rel="noreferrer">
            <Image
              src={netflix}
              alt="one"
              layout="fill"
              objectFit="cover"
              className="p-2 rounded cursor-pointer"
            />
            </a>
          </div>
          <div className="rounded relative w-80 h-60 shadow-xl">
            <Image
              src={one}
              alt="one"
              layout="fill"
              objectFit="cover"
              className="p-2 rounded cursor-pointer"
            />
          </div>
          <div className="rounded relative w-80 h-60 shadow-xl">
            <Image
              src={one}
              alt="one"
              layout="fill"
              objectFit="cover"
              className="p-2 rounded cursor-pointer"
            />
          </div>
        </div>
 
      </div>
    </Element>
  );
}

export default project;
