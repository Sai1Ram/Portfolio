import React from 'react'

const Heading = ({headingData}) => {
  return (
    <div className="heading flex gap-3 justify-center items-center md:w-[50%] w-full">
        <span className="text-textGreeen font-fontMono text-2xl">{headingData.number}.</span>
        <h2 className="text-xl md:text-2xl font-fontSans text-lightestSlate font-bold">
          {headingData.title}
        </h2>
        <span className="flex-1 bg-lightestNavy h-[0.5px]"></span>
      </div>
  )
}

export default Heading