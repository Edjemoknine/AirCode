import { getAllData } from '@/lib/FetchData';
import { createLazyFileRoute } from '@tanstack/react-router'
import { useQuery } from "@tanstack/react-query";
import {PaginationDemo} from"../components/shared/PaginationBtn"
import AnimeList from '@/components/shared/AnimeList';
export const Route = createLazyFileRoute('/About')({
  component: About,
})

function About() {
  const {page=1}=Route.useSearch()


    const { data } = useQuery({
      queryKey: ["Animes",page],
      queryFn:()=> getAllData(page),
    });
  return <div className="p-2">
       <AnimeList data={data}/>
       <PaginationDemo page={page}/>
  </div>
}