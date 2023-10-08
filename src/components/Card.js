import { ArrowUturnLeftIcon, ArrowUturnRightIcon, PauseCircleIcon,PlayCircleIcon} from '@heroicons/react/24/solid'
import { Progress } from '@material-tailwind/react'
import React, { useState } from 'react'

const Card = () => {
    const [play, setPlay] = useState(false);

    const togglePlay =()=>{
        setPlay(!play);

    }
  return (
    <>
        <div className="mt-4 rounded-3xl h-60 md:h-52 lg:w-1/2 bottom-0 p-4 mx-auto bg-blue-gray-500">
            <div className="flex h-full justify-between gap-3">
                <div className='w-1/2 rounded-md'>
                    <img src="image/1200x1200bf-60.jpg" alt="Album" className="object-contain h-full"/>
                </div>
                <div className="flex flex-col items-center justify-evenly p-3 w-full h-full">
                    <div className='w-full mb-6'>
                        <h1 className="text-4xl">Title 1</h1>
                        <h2 className="text-xl text-cyan-50">Caption</h2>
                    </div>
                    <div className='w-full'>
                        <Progress value={70}/>
                        <div className='flex text-xs w-full justify-between mt-1'>
                            <p>01.20</p>
                            <p>01.45</p>
                        </div>
                        
                    </div>
                    <div className="flex text-white justify-evenly w-full">
                        <button>
                            <ArrowUturnLeftIcon className='h-8'/>
                        </button>
                        <button onClick={()=>togglePlay()}>
                        {
                            play === false ? <PlayCircleIcon className="h-16"/> : <PauseCircleIcon className="h-16"/>
                        }
                        </button>
                        <button>
                            <ArrowUturnRightIcon className='h-8'/>
                        </button>
                        
                    </div>  
                </div>  
            </div>
               
        </div>
    </>
  )
}

export default Card