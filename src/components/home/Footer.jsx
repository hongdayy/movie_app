import React from "react";
import { footer1, footer2, footer3, footer4 } from "../../FooterData";

const Footer = () => {
  return (
    <div className="w-full bg-black py-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-white">
        <div className="text-center md:text-left">
          <p className="text-neutral-600 text-md font-normal pb-4">Câu hỏi</p>
          {footer1.map((item) => (
            <div key={item.id} className="h-12">
              <p className="text-neutral-600 text-sm pb-4">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="text-center md:text-left">
          {footer2.map((item) => (
            <div key={item.id} className="h-12">
              <p className="text-neutral-600 text-sm pb-4">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="text-center md:text-left">
          {footer3.map((item) => (
            <div key={item.id} className="h-12">
              <p className="text-neutral-600 text-sm pb-4">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="text-center md:text-left">
          {footer4.map((item) => (
            <div key={item.id} className="h-12">
              <p className="text-neutral-600 text-sm pb-4">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
