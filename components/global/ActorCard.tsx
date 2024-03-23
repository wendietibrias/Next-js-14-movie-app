import { IActorResponse } from "@/interfaces/actor.response.interface";
import { colors } from "@/constants/colors";
import Image from "next/image";

type ActorCardProps = {
  actor: IActorResponse;
};

const ActorCard = ({ actor }: ActorCardProps) => {
  return (
    <div className="w-full pr-4 sm:pr-3">
      <div className="w-full h-[300px] lg:h-[250px] xs:h-[240px] relative">
        <Image priority style={{ objectFit: "cover" }} className="rounded-md" fill src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`} alt={actor.name} />
      </div>
      <div className="py-4">
        <h4 className={`text-[12px] w-[80%] whitespace-nowrap text-ellipsis overflow-hidden font-semibold dark:text-white ${colors.title}`}>{actor.name}</h4>
        <p className="text-[11px] text-gray-400 mt-1 font-normal">as {actor.character}</p>
      </div>
    </div>
  );
};

export default ActorCard;
