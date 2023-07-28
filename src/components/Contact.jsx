import React from "react";
// import {motion} from 'framer-motion'
const Contact = () => {
  return (
    <div id="contact" className="w-full md:min-h-screen md:px-24 lg:px-56 px-6  pt-12 h-[50vh] md:pb-0 flex justify-center items-center flex-col relative">
      <h4 className="font-fontMono lg:text-lg md:text-sm text-xs text-textGreeen md:mb-6 mb-2 ml-1">
        04. What’s Next?
      </h4>
      <h2 className="lg:text-5xl text-2xl md:text-4xl font-semibold font-fontSans text-lightestSlate md:mb-6 mb-2">Get In Touch</h2>
      <p className="text-center text-slate md:w-3/5 lg:text-lg md:text-sm text-xs mb-6  w-full">
      Although I’m currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
      </p>
      <div className="md:w-44 md:h-20 w-20 h-8 flex justify-center items-center">
      <a href="mailto:sairamsenapati0022@gmail.com" className="border-textGreeen outline-none md:py-4 md:px-6 p-2 border-2 rounded-[5px] font-fontSans hover:border-r-4 hover:border-b-4 bg-bgColor md:text-sm text-xs text-textGreeen"> Say Hello</a>
      </div>
      <div className="absolute bottom-0 text-slate text-xs font-fontMono">
        <p>- By <span className="text-textGreeen">Sai Ram Senapati</span></p>
      </div>
    </div>
  );
};

export default Contact;
