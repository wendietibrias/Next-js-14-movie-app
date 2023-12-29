"use client";

import { useQuery } from "react-query";
import { movieSliderOptions } from "@/utils/slider.options";
import { fetchSimilarMovie } from "@/api/movie.detail.api";
import { LoadingSpinner, MovieCard } from "../global";
import { colors } from "@/constants/colors";
import Slider from "react-slick";
import { IMovieResponse } from "@/interfaces/movies.response.interface";

type SimilarMovieProps = {
  movieId: string | number;
};

const SimilarMovie = ({ movieId }: SimilarMovieProps) => {
  const { data, isLoading } = useQuery({
    queryKey: ["get-similar-movie", movieId],
    queryFn: () => fetchSimilarMovie(movieId),
  });

  if (isLoading) {
    return <LoadingSpinner width={24} height={24} color="#818cf8" />;
  }

  return (
    <div className="w-full">
      <h4 className={`text-[16px] ${colors.title} dark:text-white font-medium`}>Similar Movie</h4>
      <div className="w-full mt-5">
        <Slider {...movieSliderOptions}>
          {data?.map((item: IMovieResponse, idx: number) => (
            <MovieCard movie={item} key={idx} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SimilarMovie;
