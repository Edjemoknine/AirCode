import { createLazyFileRoute } from '@tanstack/react-router'
import ComingSoon from '@/components/shared/ComingSoon';


export const Route = createLazyFileRoute('/Product')({
  component: Product,
})

function Product() {

  return <div className="p-2">
       <ComingSoon/>
  </div>
}