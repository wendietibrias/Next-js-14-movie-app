"use client";
import { useQuery } from "react-query";
import { movieSliderOptions } from "@/utils/slider.options";
import { fetchMovieCredit } from "@/api/movie.detail.api";
import { ActorCard, LoadingSpinner } from "../global";
import { colors } from "@/constants/colors";
import { IActorResponse } from "@/interfaces/actor.response.interface";
import useMode from "@/hooks/useMode";
import Slider from "react-slick";

type MovieCreditProps = {
  movieId: string | number;
};

const MovieCredit = ({ movieId }: MovieCreditProps) => {
  const { data, isLoading } = useQuery({
    queryKey: ["get-movie-credit", movieId],
    queryFn: () => fetchMovieCredit(movieId),
  });

  if (isLoading) {
    return <LoadingSpinner width={24} height={24} color="#818cf8" />;
  }

  return (
    <div className="w-full">
      <h4 className={`text-[16px] ${colors.title} dark:text-white font-medium`}>Actors</h4>
      <div className="mt-5">
        <Slider {...movieSliderOptions}>
          {data?.map((item: IActorResponse, idx: number) => (
            <ActorCard actor={item} key={idx} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MovieCredit;
