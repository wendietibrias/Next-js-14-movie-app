"use client";

import { useInfiniteQuery } from "react-query";
import { fetchMovieByGenre } from "@/api/movie.genre";
import { colors } from "@/constants/colors";
import { genreFinder } from "@/utils/genre.finder";
import { LoadingSpinner, MovieCard } from "../global";
import { IMovieResponse } from "@/interfaces/movies.response.interface";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import useMode, { useModeType } from "@/hooks/useMode";

type GenreMovieProps = {
  genreId: string | number;
};

const GenreMovie = ({ genreId }: GenreMovieProps) => {
  const [page, setPage] = useState<number>(1);
  const { isDark } = useMode() as useModeType;
  const { ref, inView } = useInView();
  const { data, isLoading, isFetching, isFetchingNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: "get-movie-by-genre",
    queryFn: () => {
      setPage(page + 1);
      return fetchMovieByGenre({ genreId, page });
    },
    getNextPageParam: () => page,
  });

  useEffect(() => {
    if (inView && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  if (isLoading) {
    return <LoadingSpinner width={24} height={24} color="#818cf8" />;
  }

  return (
    <div className="w-full py-5">
      <h4 className={`text-[16px] dark:text-white ${colors.title} font-medium`}>
        Genre Finder : <span className="font-bold">{genreFinder(Number(genreId))}</span>
      </h4>
      <div className="w-full mt-5 grid grid-cols-5 gap-2">
        {data?.pages
          ?.flatMap((item: any) => item.results)
          .map((movie: IMovieResponse, idx: number) => (
            <MovieCard movie={movie} key={idx} />
          ))}
      </div>
      {isFetchingNextPage && <LoadingSpinner width={24} height={24} color="#818cf8" />}

      <div ref={ref}></div>
    </div>
  );
};

export default GenreMovie;
