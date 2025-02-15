import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import MovieInfo from "./MovieInfo";

const NetflixHeader = () => {
  const baseURL = "https://api.themoviedb.org/3"; // API base URL
  const apiKey = "ba388bfb47b381abfbfc4b649c21b893"; // API Key
  const [movieData, setMovieData] = useState(null);
  const [searchMovie, setSearchMovie] = useState(""); // Movie title input
  const [openMovieInfo, setOpenMovieInfo] = useState(false); // Thêm state để mở modal
  const url = "https://image.tmdb.org/t/p/original/";

  // Hàm fetch ảnh ngẫu nhiên
  const fetchImage = useCallback(async () => {
    try {
      const response = await axios.get(
        `${baseURL}/trending/all/day?api_key=${apiKey}`
      );
      const data = response.data.results;

      if (data.length > 0) {
        const randomMovie = data[Math.floor(Math.random() * data.length)];
        setMovieData(randomMovie);
      }
    } catch (error) {
      console.error("Lỗi khi fetch dữ liệu:", error);
    }
  }, []);

  useEffect(() => {
    fetchImage();
  }, [fetchImage]);

  // Hàm tìm kiếm phim theo tên (chỉ gọi API sau 1s khi ngừng nhập)
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchMovie.trim()) {
        searchMovies();
      }
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [searchMovie]);

  // Hàm tìm kiếm phim
  const searchMovies = async () => {
    if (!searchMovie.trim()) return;

    const searchUrl = `${baseURL}/search/movie?api_key=${apiKey}&query=${searchMovie}`;

    try {
      const response = await axios.get(searchUrl);
      const data = response.data.results[0];

      if (data) {
        setMovieData(data);
      } else {
        console.log("Không tìm thấy phim!");
        setMovieData(null); // Đặt lại state khi không có phim nào phù hợp
      }
    } catch (error) {
      console.error("Lỗi khi tìm kiếm phim:", error);
    }
  };

  // Hàm tạo ngôi sao dựa trên rating
  const addStars = (rating) => {
    const totalStars = 5;
    const fullStars = Math.round(rating / 2);
    return "⭐".repeat(fullStars) + "☆".repeat(totalStars - fullStars);
  };

  return (
    <div>
      {/* Tìm kiếm phim */}
      <div className="absolute top-16 right-0">
        <input
          className="outline-none border h-8 w-56 border-white rounded-none mr-4 bg-black font-sans text-white pl-2"
          name="searchMovie"
          value={searchMovie}
          placeholder="Tiêu đề phim"
          onChange={(e) => setSearchMovie(e.target.value)}
        />
      </div>

      {/* Hiển thị kết quả tìm kiếm hoặc phim ngẫu nhiên */}
      {movieData ? (
        <div>
          <img
            className="bg-center bg-no-repeat bg-cover w-full h-[900px]"
            src={movieData?.backdrop_path ? `${url}${movieData.backdrop_path}` : "/placeholder.jpg"}
            alt={movieData?.title || "Không có ảnh"}
          />
          <div className="flex flex-col absolute text-white top-1/4 pl-8 max-w-xl">
            <h3 className="text-neutral-white font-sans text-4xl font-bold pb-4">
              {movieData?.title || movieData?.original_title}
            </h3>
            <p className="text-white font-sans text-3xl font-normal pb-4">
              {movieData?.overview?.length > 120
                ? movieData?.overview?.slice(0, 100) + "..."
                : movieData?.overview}
            </p>
            <p className="text-white font-sans text-3xl font-normal pb-4">
              Đánh giá: {addStars(movieData?.vote_average || 0)}
            </p>
            <div className="flex items-center">
              <button className="bg-white text-black px-6 py-2 rounded-lg mr-4">
                Xem ngay
              </button>
              <button
                className="bg-gray-400 text-white px-6 py-2 rounded-lg"
                onClick={() => setOpenMovieInfo(true)}
              >
                Thông tin phim
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-white text-center mt-8">Không tìm thấy phim</p>
      )}

      {/* Modal MovieInfo */}
      {openMovieInfo && (
        <MovieInfo
          open={openMovieInfo}
          movieInfo={movieData}
          setOpenMovieInfo={setOpenMovieInfo}
        />
      )}
    </div>
  );
};

export default NetflixHeader;
