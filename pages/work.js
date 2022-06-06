import { Element } from "react-scroll";
import { FaAirbnb } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa";
import { FaDropbox } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa";

function work() {
  return (
    <Element id="work" name="work">
      <div>
        <div className="flex w-full flex-col my-20 h-auto justify-center items-center">
          <p className="text-sm uppercase text-gray-400">work</p>
          <h2 className="text-primary text-6xl text-center font-black">
            Work Experience
          </h2>
          <div className='flex justify-between text-center mx-20 my-20 gap-2 md:gap-10'>
              <div className='flex justify-center items-center cursor-pointer'>
                  <FaAirbnb className='md:w-20 md:h-20 w-16 h-16 text-gray-400 md:m-3 p-1 hover:text-black'/>
              </div>
              <div className='flex justify-center items-center cursor-pointer'>
                  <FaAmazon className='md:w-20 md:h-20 w-16 h-16 text-gray-400 md:m-3 p-1 hover:text-black'/>
              </div>
              <div className='flex justify-center items-center cursor-pointer'>
                  <FaDropbox className='md:w-20 md:h-20 w-16 h-16 text-gray-400 md:m-3 p-1 hover:text-black'/>
              </div>
              <div className='flex justify-center items-center cursor-pointer'>
                  <FaMicrosoft className='md:w-20 md:h-20 w-16 h-16 text-gray-400 md:m-3 p-1 hover:text-black'/>
              </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default work;
