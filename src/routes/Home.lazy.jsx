import AnimeList from '@/components/shared/AnimeList'
import Hero from '@/components/shared/Hero'
import Products from '@/components/shared/Products'
import { createLazyFileRoute } from '@tanstack/react-router'

import { useQuery } from "@tanstack/react-query";
import { getAllData } from '@/lib/FetchData';
export const Route = createLazyFileRoute('/Home')({
  component: Home,
})



function Home() {
  
const { data ,isLoading} = useQuery({
  queryKey: ["Animes",1],
  queryFn:()=> getAllData(1),
});
  return (
    <div className="container mx-auto">
    <Hero/>
    <AnimeList data={data} isloading={isLoading}/>
    <Products/>
  </div>
  )
}