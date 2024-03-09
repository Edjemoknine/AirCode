import { getAllData } from "@/lib/FetchData";
import { useQuery } from "@tanstack/react-query";
import AnimeCard from "./AnimeCard";

const AnimeList = () => {
  const { data } = useQuery({
    queryKey: ["Animes"],
    queryFn: getAllData,
  });

  console.log(data)
  return <div>
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 ">
     {data?.data?.map(anime=>(<AnimeCard anime={anime} key={anime._id}/>))}
    </div>
  </div>;
};

export default AnimeList;
