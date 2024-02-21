import React from 'react'
import { IoMdHome } from "react-icons/io";
import { CiSearch, CiHeart, CiMenuBurger } from "react-icons/ci";
import { RiPlayListFill } from "react-icons/ri";
import { FaPlus, FaArrowRight } from "react-icons/fa6";




const Leftside = () => {
    const Sidebaricons = [
        {
            icon: <IoMdHome size={30} />,
            name: "Home",
        },
        {
            icon: <CiSearch size={30} />,
            name: "Search",
        },
        {
            icon: <CiHeart size={30} />,
            name: "Favorite",
        },
    ];

    const Trending = [
        "recent",
        "Playlist",
        "favorite",
        "top20",
        "hindi",
        "assamese"

    ];
    const songs = [
        {
            image: "https://i.scdn.co/image/ab67706f00000002f221aeb38890acf8753207dd",
            artist: "Arijit Singh",
            song: "Tum Hi Ho",
        },
        {
            image:
                "https://seed-mix-image.spotifycdn.com/v6/img/artist/22wbnEMDvgVIAGdFeek6ET/en/default",
            artist: "Shreya Ghoshal",
            song: "Agar Tum Saath Ho",
        },
        {
            image: "https://i.scdn.co/image/ab67706f00000002319bd79eba1610f1f5fe6a4b",
            artist: "Atif Aslam",
            song: "Tera Ban Jaunga",
        },
        {
            image: "https://i.scdn.co/image/ab67706f000000022e8146e19aaf63cba9ecfc21",
            artist: "Neha Kakkar",
            song: "Dilbar",
        },
        {
            image: "https://i.scdn.co/image/ab67706f0000000278b4745cb9ce8ffe32daaf7e",
            artist: "Arijit Singh",
            song: "Raabta",
        },
        {
            image: "https://i.scdn.co/image/ab67706f00000002c0879c3813c2d58773deb5ba",
            artist: "Sunidhi Chauhan",
            song: "Sheila Ki Jawani",
        },

    ];
    return (
        <div className="w-[28%] h-full p-3 space-y-2">
            <div className=" rounded-lg bg-[#121212]">
                {Sidebaricons.map((item, index) => (
                    <div key={index} className="text-white ">
                        <div className="flex items-center gap-3 p-2   ">
                            {item.icon}
                            <h1 className="font-bold">{item.name}</h1>
                        </div>
                    </div>
                ))}
            </div>
            <div className="rounded-lg bg-[#121212] ">
                <div className="flex justify-between p-2 rounded-lg">
                    <div className="flex items-center gap-2">
                        <RiPlayListFill className="text-white" size={30} />
                        <h1 className="font-bold text-white">Your Library</h1>
                    </div>
                    <div className="flex gap-3 items-center text-white ">
                        <FaPlus size={20} />
                        <FaArrowRight size={20} />
                    </div>
                </div>
                <div className="p-2 gap-2 flex overflow-x-auto mt-2 custom-scrollbar">
                    {Trending.map((item, index) => (
                        <button key={index} class="bg-zinc-500  text-white font-bold py-2 px-4 rounded text-sm select-none">
                            {item}
                        </button>
                    ))}
                </div>
                <div className="flex justify-between p-2 rounded-lg">
                    <div className="">
                        <CiSearch  className="text-white" size={30} />
                    </div>
                    <div className="flex gap-3 items-center text-white ">
                        <p className='text-sm'>Recent</p>
                        <CiMenuBurger size={20} />
                    </div>
                </div>
                <div className='p-2 overflow-y-auto rounded-lg bg-[#121212] '
                    style={{ maxHeight: "calc(100vh - 300px)" }}>
                    {songs.map((item, index) => (
                        <div key={index} className='w-full h-[90px] bg-zinc-900 mt-2 p-2 flex gap-2 rounded-lg text-white'>
                            <div>
                                <img src={item.image} alt="image" className='w-20 h-[75px] rounded-lg object-cover' />
                            </div>
                            <div>
                                <h1 className='font-bold'>{item.song}</h1>
                                <p className='text-sm'>{item.artist}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

        </div>
    )
}

export default Leftside