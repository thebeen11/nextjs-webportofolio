import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import modena from "../public/img/modena-logo.png";

const WorkCard = (workData) => {
  return (
    <div className="flex justify-between flex-col md:flex-row text-center mx-20 my-20 gap-2 md:gap-10">
         {workData && workData.workData.map((item, i) => (
        <div key={i} className="relative flex flex-col items-center w-80 h-96 p-4 border-2 shadow-lg border-secondary out rounded ">
          <div className="absolute top-8 items-center w-60 h-10">
            <Image
              src={modena}
              alt="one"
              layout="fill"
              objectFit="cover"
              className="p-2 rounded"
            />
          </div>
          <div className=" top-28 absolute px-2">
            <h1 className="text-xl text-primary font-semibold mb-2">
              {item.company}
            </h1>
            <p className="text-sm uppercase text-gray-400">{item.job}</p>
            <p className="text-sm text-gray-400">{item.time}</p>
            <p className="mt-4">{item.jobDesc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default WorkCard