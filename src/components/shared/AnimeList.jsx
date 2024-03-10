
import AnimeCard from "./AnimeCard";
import { SkeletonCard } from "./SkeletonCard";

const AnimeList = ({data,isloading}) => {


  if(isloading)return     <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 ">
  {[1,2,3,4,5,6,7,8].map((_,i)=>(<SkeletonCard  key={i}/>))}
      </div>
  return <div>
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 ">
{data?.data?.map(anime=>(<AnimeCard anime={anime} key={anime._id}/>))}
    </div>
  </div>;
};

export default AnimeList;
