"use client";

import { fetchMoviesByTopRated } from "@/api/movies.list.api";
import { colors } from "@/constants/colors";
import { useQuery } from "react-query";
import { movieSliderOptions } from "@/utils/slider.options";
import Slider from "react-slick";
import { MovieCard, LoadingSpinner } from "../global";
import { IMovieResponse } from "@/interfaces/movies.response.interface";

const TrendingMovie = () => {
  const { data, isLoading, isFetching } = useQuery({
    queryKey: "get-movie-by-trending",
    queryFn: fetchMoviesByTopRated,
    staleTime: 1000 * 24,
  });

  if (isLoading) {
    return <LoadingSpinner width={24} height={24} color="#818cf8" />;
  }

  return (
    <div className="w-full">
      <h4 className={`text-[15px] ${colors.title} dark:text-white font-medium`}>Top Rated</h4>
      <div className="mt-4">
        <Slider {...movieSliderOptions}>{data && data.length > 0 && data.map((movie: IMovieResponse, idx: number) => <MovieCard movie={movie} key={idx} />)}</Slider>
      </div>
    </div>
  );
};

export default TrendingMovie;
