
import AnimeCard from "./AnimeCard";

const AnimeList = ({data}) => {


  console.log(data)
  return <div>
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 ">
{data?.data?.map(anime=>(<AnimeCard anime={anime} key={anime._id}/>))}
    </div>
  </div>;
};

export default AnimeList;
