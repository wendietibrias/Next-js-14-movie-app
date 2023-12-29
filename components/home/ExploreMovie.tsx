"use client";

import { fetchExploreMovie } from "@/api/movies.list.api";
import { colors } from "@/constants/colors";
import { IMovieResponse } from "@/interfaces/movies.response.interface";
import { useInfiniteQuery } from "react-query";
import { LoadingSpinner, MovieCard } from "../global";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const ExploreMovie = () => {
  const { inView, ref } = useInView();
  const [nextPage, setNextPage] = useState<number>(1);

  const { data, isLoading, isFetchingNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: "get-by-explore",
    queryFn: ({ pageParam = 1 }) => {
      setNextPage(pageParam + 1);
      return fetchExploreMovie(pageParam);
    },
    staleTime: 1000 * 24,
    getNextPageParam: () => nextPage,
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
    <div className="w-full">
      <h4 className={`text-[15px] dark:text-white ${colors.title} font-medium`}>Explore More</h4>
      <div className="w-full mt-4 grid grid-cols-5 lg:grid-cols-4 sm:grid-cols-2 lg:gap-1 gap-3">
        {data?.pages
          .flatMap((item: any) => item)
          .map((movie: IMovieResponse, idx: number) => (
            <MovieCard movie={movie} key={idx} />
          ))}
      </div>
      {isFetchingNextPage && <LoadingSpinner width={24} height={24} color="#818cf8" />}
      {/* {hasNextPage && (
        <div className="text-center mt-5">
          <button disabled={isFetchingNextPage} onClick={() => fetchNextPage()} className={`bg-indigo-400 text-[12px] font-semibold rounded-full py-3 px-5 text-white ${isFetchingNextPage && "cursor-not-allowed"}`}>
            Load More
          </button>
        </div>
      )} */}
      <div ref={ref}></div>
    </div>
  );
};

export default ExploreMovie;
