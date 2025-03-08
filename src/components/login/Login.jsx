import React, { useState, useContext } from "react";
import logo from "../../images/logo.png";
import header from "../../images/netflix-header.jpg";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../store-v1/CreateUserContext";
import { actionStates } from "../../UserReducer";

const Login = () => {
  const navigate = useNavigate();
  const { DISPATCH_USER } = actionStates;
  const [username, setUsername] = useState("");
  const [state, dispatch] = useContext(UserContext);
  const [password, setPassword] = useState("");
  const [image, setImagee] = useState("");
  const [error, setError] = useState({
    username: "",
    password: "",
  });

  const handleLogin = () => {
    const userValidate = /^[A-Za-z]{4,10}$/i.test(username);
    const passwordValidation =
      /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,10}$/i.test(
        password
      );

    if (username === "" || password === "") {
      console.log(1)
      setError({
        ...error,
        username: "Tên người dùng là bắt buộc!",
        password: "Mật khẩu là bắt buộc!",
      });
    } else if (!userValidate || !passwordValidation) {
      console.log(2)
      setError({
        ...error,
        username: "Tên người dùng phải có từ 4-10 ký tự (VD:thuhong), link ảnh ví dụ:https://photo.znews.vn/w660/Uploaded/mdf_eioxrd/2021_07_06/2.jpg",
        password:
          "Mật khẩu phải có từ 4-10 ký tự và chứa ít nhất 1 chữ cái, 1 ký tự đặc biệt và 1 số (VD:Thuhong1!)",
      });
    } else {
      dispatch({
        type: DISPATCH_USER,
        username: username,
        password: password,
        image: image,
      });
      navigate("/netflix");
    }
    return error;
  };

  return (
    <div className="relative text-center bg-gradient-to-r from-slate-900 via-slate-700 to-slate-600 border-b-8 border-neutral-800">
      <div className="flex w-full justify-between items-center absolute px-16">
        <div className="cursor-pointer z-20 " onClick={() => navigate("/")}>
          <img className="h-28" src={logo} alt="logo"></img>
        </div>
      </div>
      <div className="absolute flex flex-col justify-center items-center inset-0 text-black text-center z-10">
        <div className="flex flex-col bg-black-rgba py-20 px-12 rounded-lg">
          <h2 className="text-left mb-8 font-sans text-3xl text-white font-bold tracking-normal no-underline pb-4">
          Đăng nhập
          </h2>
          <input
            name="username"
            className="mb-4 bg-stone-600 w-80 py-3.5 rounded-lg text-white pl-4"
            placeholder="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <span className="text-amber-600 w-80">{error.username}</span>
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="mb-4 bg-stone-600 w-80 py-3.5 rounded-lg text-black pl-4"
          ></input>
          <span className="text-amber-600 w-80">{error.password}</span>
          <input
            name="image"
            value={image}
            onChange={(e) => setImagee(e.target.value)}
            type="text"
            placeholder="Nhập URL hình ảnh  (link ảnh bất kì)"
            className="mb-4 bg-stone-600 w-80 py-3.5 rounded-lg text-white pl-4"
          ></input>
          <div>
            <button
              onClick={handleLogin}
              className="bg-red-600 mt-4 text-white w-80 font-sans font-bold rounded-lg py-4"
            >
             Đăng nhập
            </button>
          </div>
          <div className="pt-20">
            <p className="text-stone-500 font-sans text-sm font-normal tracking-normal no-underline pb-4 text-left">
            Bạn mới sử dụng Netflix?
              <span className="text-white ml-2 cursor-pointer font-sans text-sm font-normal tracking-normal no-underline pb-4 text-left">
              Đăng ký ngay.
              </span>
            </p>
            <div>
              <p className="text-stone-500 font-sans text-sm font-normal tracking-normal no-underline pb-4 text-left">
              URL hình ảnh (link ảnh bất kì)
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
        className="bg-cover bg-no-repeat bg-center mix-blend-overlay h-[850px] z-30"
        src={header}
        alt="header"
      ></img>
    </div>
  );
};

export default Login;
