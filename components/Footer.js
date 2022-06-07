import { AiTwotoneHeart, AiFillGithub, AiOutlineMail } from "react-icons/ai";

function Footer() {
  return (
    <div className="w-full h-16 bg-gray-50 flex flex-col justify-center items-center my-10">
      <div className="flex items-center">
        <h1 className="text-xl text-blue-900 mr-2">Made by</h1>{" "}
        <AiTwotoneHeart className="text-black" />
      </div>
      <div className="flex items-center mx-2">
        <AiFillGithub className="text-black" />
        <h1 className="text-xl text-blue-900 mx-2">
          <a
            href="https://github.com/thebeen11"
            className="cursor-pointer font-semibold text-indigo-900 hover:text-black"
          >
            thebeen11
          </a>
          
        </h1>
        
        <AiOutlineMail className="text-black" />
        <h1 className="text-xl text-blue-900 ml-2">
          <a
            href="mailto:bagus11nugroho@gmail.com"
            className="cursor-pointer font-semibold text-indigo-900 hover:text-black"
          >
            bagus11nugroho@gmail.com
          </a>
          
        </h1>
      </div>
    </div>
  );
}

export default Footer;
