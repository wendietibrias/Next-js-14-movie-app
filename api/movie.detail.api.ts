import apiClient from "@/utils/api.client";

export const fetchMovieById = async (movieId: string | number) => {
  try {
    const { data } = await apiClient.get(`/movie/${movieId}`);
    return data;
  } catch (err: any) {
    throw new Error("error");
  }
};

export const fetchMovieCredit = async (movieId: string | number) => {
  try {
    const { data } = await apiClient.get(`/movie/${movieId}/credits?page=1`);
    return data.cast;
  } catch (err: any) {
    throw new Error("error");
  }
};

export const fetchSimilarMovie = async (movieId: string | number) => {
  try {
    const { data } = await apiClient.get(`/movie/${movieId}/similar?page=1`);
    return data.results;
  } catch (err) {
    throw new Error("error");
  }
};
