import React, { Suspense } from "react";
import MovieRow from "./MovieRow";
import { movieAddress } from "../../MovieGenres";

const MoviesRows = () => {
  return (
    <div className="relative bg-black px-4 ">
      <Suspense fallback={<div>Đang tải ...</div>}>
        <MovieRow
          cardSize
          title="Phim Phổ Biến"
          movieAPI={movieAddress.PopularMovies}
        />
        <MovieRow
          title="Phim Được Đánh Giá Cao"
          movieAPI={movieAddress.TopRatedMovies}
        />
        <MovieRow
          title="Phim Hình Sự"
          movieAPI={movieAddress.CrimeMovies}
        />
        <MovieRow
          title="Phim Phiêu Lưu"
          movieAPI={movieAddress.AdventureMovies}
        />
        <MovieRow
          title="Phim Hài"
          movieAPI={movieAddress.ComedyMovies}
        />
        <MovieRow
          title="Phim Kinh Dị"
          movieAPI={movieAddress.ThrillerMovies}
        />
        <MovieRow
          title="Phim Gia Đình"
          movieAPI={movieAddress.FamilyMovies}
        />
        <MovieRow
          title="Phim Hoạt Hình"
          movieAPI={movieAddress.AnimationMovies}
        />
        <MovieRow
          title="Phim Lịch Sử"
          movieAPI={movieAddress.HistoryMovies}
        />
      </Suspense>
    </div>
  );
};

export default MoviesRows;