import React from "react";
import Header from "./Header";
import Body from "./Body";
import tv from "../../images/tv.png";
import phone from "../../images/phone.jpg";
import devices from "../../images/devices.png";
import kids from "../../images/kids.png";
import { accordionData } from "../../AccordionData";
import Accordion from "./Accordion";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="bg-black">
      <Header />

      {/* Sections */}
      <Body
        img={tv}
        title="Thưởng thức trên TV của bạn."
        text="Xem trên Smart TV, Playstation, Xbox, Chromecast, Apple TV, đầu phát Blue-ray, và nhiều hơn nữa."
      />
      <Body
        reverse
        img={phone}
        title="Tải xuống chương trình và xem offline."
        text="Lưu lại những chương trình yêu thích và luôn có cái để xem."
      />
      <Body
        img={devices}
        title="Xem mọi nơi"
        text="Phát trực tuyến hàng triệu bộ phim và chương trình TV trên điện thoại, máy tính bảng, laptop và TV mà không phải trả thêm phí."
      />
      <Body
        reverse
        img={kids}
        title="Tạo hồ sơ cho trẻ em"
        text="Cho trẻ em tham gia những cuộc phiêu lưu với các nhân vật yêu thích trong không gian dành riêng cho chúng - miễn phí với tư cách thành viên của bạn."
      />

      {/* FAQ Section */}
      <div className="bg-black flex flex-col justify-center items-center pt-12 border-b-8 border-neutral-800 px-4">
        <h1 className="text-3xl md:text-5xl text-white font-bold text-center pb-4">
          Câu Hỏi Thường Gặp
        </h1>
        <div className="w-full max-w-3xl">
          {accordionData.map((item) => (
            <Accordion key={item.id} title={item.title} text={item.text} />
          ))}
        </div>

        {/* Email Form */}
        <div className="pt-12 pb-6 text-center">
          <p className="text-white text-lg md:text-xl pb-4">
            Sẵn sàng để xem? Nhập email của bạn để tạo hoặc khởi động lại
            tư cách thành viên của bạn.
          </p>
          <div className="flex flex-col md:flex-row gap-4 w-full max-w-3xl">
            <input
              className="w-full md:w-[450px] h-14 md:h-16 pl-4 outline-none border-0 text-black"
              placeholder="Địa chỉ email"
            />
            <button className="bg-red-600 h-14 md:h-16 w-full md:w-36 text-white text-lg md:text-xl font-bold">
              Bắt Đầu
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
