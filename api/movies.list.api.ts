import apiClient from "@/utils/api.client";

export const fetchMoviesByTopRated = async () => {
  try {
    const { data } = await apiClient.get(`/movie/top_rated?page=1&per_page=10`);
    if (data) {
      const { results } = data;
      return results;
    }
  } catch (err: any) {
    const {
      response: { data },
    } = err;
    throw new Error(data.message);
  }
};
export const fetchMoviesByPopuler = async () => {
  try {
    const { data } = await apiClient.get(`/movie/popular?page=1&per_page=10`);
    if (data) {
      const { results } = data;
      return results;
    }
  } catch (err: any) {
    const {
      response: { data },
    } = err;
    throw new Error(data.message);
  }
};

export const fetchExploreMovie = async (pageParam: number) => {
  try {
    const { data } = await apiClient.get(`/movie/popular?page=${pageParam}&per_page=10`);
    if (data) {
      const { results } = data;
      return results;
    }
  } catch (err: any) {
    const {
      response: { data },
    } = err;
    throw new Error(data.message);
  }
};
