import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Link } from "@tanstack/react-router";

const AnimeCard = ({ anime }) => {

  console.log(anime._id)
  return (
    <Card>
      <CardHeader className="bg-slate-100 p-2 ">
        <Link to={`/anime/${anime._id}`}>
          <img
            src={anime.image}
            className="w-full h-96 object-cover rounded-md"
          />
        </Link>
      </CardHeader>
      <CardContent>
        <p className="font-bold ">{anime.title}</p>
      </CardContent>
      <CardFooter className="space-x-2 flex flex-wrap space-y-2 items-center">
        {anime.genres?.map((genre) => (
          <p
            key={genre}
            className=" font-bold text-xs bg-slate-100 rounded-md px-3 py-1"
          >
            {genre}
          </p>
        ))}
      </CardFooter>
    </Card>
  );
};

export default AnimeCard;
