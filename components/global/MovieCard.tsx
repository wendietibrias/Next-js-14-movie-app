"use client";
import { colors } from "@/constants/colors";
import { IMovieResponse } from "@/interfaces/movies.response.interface";
import Link from "next/link";
import Image from "next/image";

type MovieCardProps = {
  movie: IMovieResponse;
};

const MovieCard = ({ movie }: MovieCardProps) => {
  if (!movie) {
    return null;
  }

  return (
    <Link href={`/${movie.id}`}>
      <div className="w-full pr-2 relative">
        <div className="w-full lg:h-[280px] xs:h-[240px] h-[350px] rounded-md relative">
          <Image fill sizes="100%" priority style={{ objectFit: "cover" }} alt={movie.title} className="rounded-md" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
          <p className="text-[11px] absolute top-2 right-3 w-[30px] h-[30px] flex justify-center items-center rounded-full bg-indigo-400 text-white font-semibold uppercase">{movie.original_language}</p>
        </div>
        <div className="py-4">
          <h4 className={`text-[12px] w-[80%] whitespace-nowrap text-ellipsis overflow-hidden font-semibold ${colors.title} dark:text-white`}>{movie.title}</h4>
          <p className={`text-[11px] flex items-center gap-x-2 ${colors.text} font-normal mt-1`}>
            <i className="ri-calendar-line"></i>
            {movie.release_date}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
