import { AiFillDislike, AiFillLike } from 'react-icons/ai'
import millify from 'millify'
const Comments = ({ i }) => {
    return (
       <div className='flex flex-col'>
       <div className="mt-4 flex justify-between">
            <div className="">
                <img className="w-14 h-14 rounded-full" src={i.authorThumbnail[0].url} alt="" />
            </div>
            <div className="ml-3 flex-1">
                <h3 className="font-bold">{i.authorText}</h3>
                <p>{i.textDisplay}</p>
                <div className='flex flex-1 items-center'>
        <div className=' flex justify-center gap-2 items-center cursor-pointer px-2 py-1 hover:bg-gray-500 hover:rounded-full'>
            <AiFillLike />
            <span>{i.likesCount}</span>
        </div>
        <div className='cursor-pointer px-2 py-1 hover:bg-gray-500 hover:rounded-full'>
            <AiFillDislike />
        </div>
        <span className='pl-2 cursor-pointer hover:bg-gray-500 hover:rounded-full hover:w-[60px] hover:h-6'>Yanıtla</span>
    </div>
            </div>
            
        </div>
        
    </div>
    )
}

export default Comments