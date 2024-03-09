import AnimeList from '@/components/shared/AnimeList'
import Hero from '@/components/shared/Hero'
import Products from '@/components/shared/Products'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/Home')({
  component: Home,
})

function Home() {
  return (
    <div className="container mx-auto">
    <Hero/>
    <AnimeList/>
    <Products/>
  </div>
  )
}