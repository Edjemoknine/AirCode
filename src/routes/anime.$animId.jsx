import { getDetail } from '@/lib/FetchData';
import { createFileRoute } from '@tanstack/react-router';
import { useQuery } from "@tanstack/react-query";
export const Route = createFileRoute('/anime/$animId')({
  component: AnimeDetail,
})



function AnimeDetail() {
    const {animId}=Route.useParams()
    const { data,isLoading } = useQuery({
        queryKey: ["AnimeDetail",animId],
        queryFn:()=> getDetail(animId),
      });

      console.log(data)
if(isLoading) return <div className='h-screen w-full grid place-content-center'>Loading...</div>
  return (
    <div className='mx-auto container mt-20 flex flex-col md:flex-row items-start gap-10 '>
        <div className='flex-1 h-[550px]'>
            <img src={data.image} alt="image" className='w-full object-contain h-full ' />
        </div>
        <div className='flex-1'>
            <h1 className='text-4xl font-bold mb-3'>{data.title}</h1>
            <p className='text-sm leading-6'>{data.synopsis}</p>
            <div className='flex gap-4 items-center text-slate-600 mt-4'>
                {data.genres.map(gen=>(<span className='px-3 py-1 text-xs bg-slate-200 rounded-md' key={gen}>{gen}</span>))}
            </div>
        </div>
    </div>
  )
}

export default AnimeDetail