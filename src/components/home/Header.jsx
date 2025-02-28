import React from "react";
import header from "../../images/netflix-header.jpg";
import logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const language = [
    {
      id: "1",
      name: "Tiếng Việt",
    },
    {
      id: "2",
      name: "English",
    },
  ];
  const navigate = useNavigate();

  return (
    <div className="flex flex-col relative text-center bg-gradient-to-r from-slate-900 via-slate-700 to-slate-600 border-b-8 border-neutral-800">
      <div className="flex w-full justify-between items-center absolute px-16 z-30">
        <div>
          <img className="h-28" src={logo} alt="logo"></img>
        </div>
        <div>
          <select className="h-8 bg-transparent text-white w-32 border border-white">
            {language.map((lang) => {
              return (
                <option className="bg-gray-600" key={lang.id}>
                  {lang.name}
                </option>
              );
            })}
          </select>
          <button
            className="bg-red-600 ml-4 w-24 h-8 text-white rounded-md"
            onClick={() => navigate("/login")}
          >
            Đăng nhập
          </button>
        </div>
      </div>
      <div className="absolute flex flex-col w-full justify-center inset-0 text-center z-10">
        <h1 className="font-sans text-6xl text-white font-bold tracking-normal no-underline pb-4">
          Xem phim, chương trình TV<br></br>không giới hạn.
        </h1>
        <p className="text-white font-sans text-3xl font-normal tracking-normal no-underline pb-4">
          Xem ở mọi nơi. Hủy bất cứ lúc nào.
        </p>
        <p className="text-white font-sans text-2xl font-normal tracking-normal no-underline pb-4">
          Sẵn sàng xem? Nhập email của bạn để tạo hoặc khôi phục gói thành viên.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center w-full px-4 sm:px-0 gap-4">
          <input
            className="w-full sm:w-[600px] h-16 text-black outline-none border-0 pl-4"
            placeholder="Nhập email của bạn"
          />
          <button className="bg-red-600 h-16 w-full sm:w-36 font-sans text-white cursor-pointer font-bold">
            Bắt đầu
          </button>
        </div>
      </div>
      <img
        className="bg-cover bg-no-repeat bg-center mix-blend-overlay h-[850px]"
        src={header}
        alt="Trang chủ"
      ></img>
    </div>
  );
};

export default Header;
