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


    const { data ,isLoading} = useQuery({
      queryKey: ["Animes",page],
      queryFn:()=> getAllData(page),
    });
  return <div className="p-2 container mx-auto mt-6">
       <AnimeList data={data}isloading={isLoading}/>
       <PaginationDemo page={page}/>
  </div>
}