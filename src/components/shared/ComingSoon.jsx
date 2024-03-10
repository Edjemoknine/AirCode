import { Link } from '@tanstack/react-router'
import { Button } from '../ui/button'

const ComingSoon = () => {
  return (
    <div className='max-w-4xl mx-auto mt-32 min-h-72 text-center p-10 rounded-lg flex justify-center items-center flex-col gap-4 bg-gradient-to-r from-blue-600 to-purple-500'>
        <h1 className='md:text-6xl font-bold '>Coming Soon</h1>
        <Button>
            <Link to={"/Home"}>
            Go Back Home
            </Link>
        </Button>
    </div>
  )
}

export default ComingSoon