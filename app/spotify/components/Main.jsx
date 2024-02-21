import React from 'react'
import { FaRegBell  } from "react-icons/fa";


const Main = () => {

    const bestSongs = [
        {
            title: "Maksed",
            items: [
                {
                    image: "https://i.scdn.co/image/ab67706f00000002f221aeb38890acf8753207dd",
                    desc: "Lorem ipsum dolor sit amet.",
                    song: "Tum Hi Ho",
                },
                {
                    image: "https://seed-mix-image.spotifycdn.com/v6/img/artist/22wbnEMDvgVIAGdFeek6ET/en/default",
                    desc: "Lorem ipsum dolor sit amet.",
                    song: "Agar Tum Saath Ho",
                },
                {
                    image: "https://i.scdn.co/image/ab67706f00000002319bd79eba1610f1f5fe6a4b",
                    desc: "Lorem ipsum dolor sit amet.",
                    song: "Tera Ban Jaunga",
                },
                {
                    image: "https://i.scdn.co/image/ab67706f000000022e8146e19aaf63cba9ecfc21",
                    desc: "Lorem ipsum dolor sit amet.",
                    song: "Dilbar",
                },
                {
                    image: "https://i.scdn.co/image/ab67706f0000000278b4745cb9ce8ffe32daaf7e",
                    desc: "Lorem ipsum dolor sit amet.",
                    song: "Raabta",
                },
                {
                    image: "https://i.scdn.co/image/ab67706f00000002c0879c3813c2d58773deb5ba",
                    desc: "Lorem ipsum dolor sit amet.",
                    song: "Sheila Ki Jawani",
                }
            ]
        },
        {
            title: "HI",
            items: [
                {
                    image: "https://i.scdn.co/image/ab67706f00000002f221aeb38890acf8753207dd",
                    desc: "Lorem ipsum dolor sit amet.",
                    song: "Tum Hi Ho",
                },
                {
                    image: "https://seed-mix-image.spotifycdn.com/v6/img/artist/22wbnEMDvgVIAGdFeek6ET/en/default",
                    desc: "Lorem ipsum dolor sit amet.",
                    song: "Agar Tum Saath Ho",
                },
                {
                    image: "https://i.scdn.co/image/ab67706f00000002319bd79eba1610f1f5fe6a4b",
                    desc: "Lorem ipsum dolor sit amet.",
                    song: "Tera Ban Jaunga",
                },
                {
                    image: "https://i.scdn.co/image/ab67706f000000022e8146e19aaf63cba9ecfc21",
                    desc: "Lorem ipsum dolor sit amet.",
                    song: "Dilbar",
                },
                {
                    image: "https://i.scdn.co/image/ab67706f0000000278b4745cb9ce8ffe32daaf7e",
                    desc: "Lorem ipsum dolor sit amet.",
                    song: "Raabta",
                },
                {
                    image: "https://i.scdn.co/image/ab67706f00000002c0879c3813c2d58773deb5ba",
                    desc: "Lorem ipsum dolor sit amet.",
                    song: "Sheila Ki Jawani",
                }
            ]
        }
    ];

    return (
        <div className='flex-1 p-3'>
            <div className='bg-[#121212] h-full p-3  rounded-lg'>
                <div className='w-[100%] h-[12vh] bg-[#121212] shadow-md text-white '>
                    <div className='flex items-center justify-between'>
                        <h1 className='flex-[0.6] text-white cursor-pointer text-[25px] font-bold'>
                            MK -<span className='text-yellow-300'>Tech</span>
                        </h1>
                        <div className='flex gap-2'>
                            <button className='px-3  bg-white rounded-full text-black font-bold'>Explore Premium</button>
                            <button className='px-3 py-1 bg-white rounded-full text-black font-bold'> Install App</button>
                            <button className='px-4 py-2 bg-zinc-700 rounded-full'><FaRegBell /></button>
                            <button className='px-4 py-2 bg-zinc-700 rounded-xl'>Logout</button>
                        </div>
                    </div>
                </div>
                <div className='overflow-y-auto rounded-lg bg-[#121212]'
                 style={{ maxHeight: "calc(100vh - 100px)" }}
                >
                    {bestSongs.map((item, index) => (
                        <div key={index} className=''>
                            <div className='flex justify-between text-white'>
                                <h1 className='font-bold mt-3'>{item.title}</h1>
                                <p className='font-bold mt-3 mr-8'>Show All</p>
                            </div>
                            <div className="grid grid-cols-5 ">
                                {item.items.map((itemSong, indexSong) => (
                                    <div key={indexSong} className='w-[170px] text-white bg-zinc-800 mt-3 p-3 rounded-lg'>
                                        <img src={itemSong.image} alt="immg" className='rounded-lg' />
                                        <div className='mt-2'>
                                            <h1 className='font-bold'>{itemSong.song}</h1>
                                            <p className='text-sm'>{itemSong.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Main