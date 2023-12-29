import { GenreMovie } from "@/components/genre";
import { Footer, Navbar } from "@/components/global";
import { Metadata } from "next";

type MovieByGenreProps = {
  params: {
    id: string | number;
  };
};

export const metadata: Metadata = {
  title: "MOVARY | GENRE",
};

const MovieByGenre = ({ params }: MovieByGenreProps) => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <div className={`max-w-[80%] mx-auto`}>
          <GenreMovie genreId={params.id} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MovieByGenre;
