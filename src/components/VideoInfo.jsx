import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetData } from '../helpers/GetData'
import Loading from './Loading'
import { AiFillDislike, AiFillLike } from 'react-icons/ai'
import millify from 'millify'
import StringArea from './StringArea'
import moment from 'moment/moment'
import "moment/locale/tr"

const VideoInfo = () => {

    const { id } = useParams()
    const [detail, setDetail] = useState(null)
    const [channel, setChannel] = useState(null)


    const GetInfos = async () => {

        const detailRes = await GetData(`/video/info?id=${id}`);

        const channelRes = await GetData(`/channel/about?id=${detailRes.data.channelId}`)

        setDetail(detailRes.data)
        setChannel(channelRes.data)
    }

    useEffect(() => { 
    setDetail(null)
    setChannel(null)    
    GetInfos() }, [id]);

    if (!detail && !channel) {
        return <Loading type={"detail"} />
    }
    console.log(detail, channel)

    return (

        <>
            <h1 className='mt-3 text-xl font-bold'>{detail.title}</h1>
            <div className='flex justify-between mt-3'>
                <div className='flex items-center gap-4'>
                    <img className='rounded-full w-12 h-12' src={channel.avatar[0].url} alt="" />
                    <div>
                        <h4 className='font-bold'>{channel.title}</h4>
                        <p className='text-gray-400'>{channel.subscriberCountText} abone</p>
                    </div>

                    <button className="bg-white rounded-full text-center font-semibold text-black px-3 h-9 transition hover:bg-gray-400">Abone Ol</button>
                </div>
                <div className='flex items-center rounded-full bg-gray-600   '>
                    <div className=' flex justify-center gap-2 items-center cursor-pointer px-2 py-1 border-r hover:bg-gray-500 hover:rounded-full'>
                        <AiFillLike />
                        <span>{millify(Math.random() * 100)} B</span>
                    </div>
                    <div className='cursor-pointer px-2 py-1 rounded-full hover:bg-gray-500 '>
                        <AiFillDislike />
                    </div>
                </div>
            </div>
            <div className='bg-gray-600 rounded p-2 mt-4 cursor-pointer hover:bg-gray-700'>
                <div className='flex gap-3'>
                    <p>{millify(detail.viewCount)} izlenme</p>
                    <p>{moment(detail.pubslishedAt).fromNow()}</p>
                </div>
                <StringArea text={detail.description} max={300} />

            </div>
            

        </>
    )

}
export default VideoInfo