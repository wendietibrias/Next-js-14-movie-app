import { MovieCredit, MovieDetailHero } from "@/components/detailMovie";
import SimilarMovie from "@/components/detailMovie/SimilarMovie";
import { Footer, Navbar } from "@/components/global";
import { Metadata } from "next";

type ParamsProps = {
  params: {
    id: string | number;
  };
};

export const metadata: Metadata = {
  title: "MOVARY | Detail",
};

const MovieDetail = ({ params }: ParamsProps) => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="p-0">
        <MovieDetailHero movieId={params.id} />
        <div className="max-w-[80%] lg:max-w-[90%] sm:max-w-full mx-auto sm:px-3">
          <MovieCredit movieId={params.id} />
          <SimilarMovie movieId={params.id} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MovieDetail;
