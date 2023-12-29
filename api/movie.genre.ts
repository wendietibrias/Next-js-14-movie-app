import apiClient from "@/utils/api.client";

export const fetchMovieByGenre = async ({ genreId, page }: { genreId: string | number; page: number }) => {
  try {
    const { data } = await apiClient.get(`/discover/movie?with_genres=${genreId}&page=${page}`);
    return data;
  } catch (err) {
    throw new Error("error");
  }
};
