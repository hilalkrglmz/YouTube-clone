import React, { useContext } from 'react'
import { categories } from '../constant/index'
import { YoutubeContext } from '../context/youtubeContext'


const Sidebar = () => {

const {selectedCategory, setSelectedCategory}= useContext(YoutubeContext);
    return (

    <div className='flex flex-col px-2 md:p-4'>
        {categories.map((item) => (
            <div onClick={() => setSelectedCategory(item)} key={item.name}>
            <div 
            //!Eğer seçili kategori ekrana basılan itemle aynıysa arka plan rengi ver.
            style={{background: selectedCategory.name === item.name && "#2d2d2d"}} className='cursor-pointer rounded-md hover:bg-[#2d2d2d] flex items-center gap-2 py-4 px-2 md:px-3 md:text-lg'>
                <span className='max-sm:text-2xl'>{item.icon}</span>
                <span className='max-sm:hidden'>{item.name}</span>
            </div>
        {item.divider && <hr/>}
            </div>
        ))}
    </div>
  )
}

export default Sidebar