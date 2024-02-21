import React, { useState } from 'react'

const FormLeft = ({quotesGenerate,setQuotesGenerate}) => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const [color, setColor] = useState(''); 
    const [backgroundImage, setBackgroundImage] = useState();
    const [watermarkImage, setWatermarkImage] = useState();


    const handleSubmit = () => {
        setQuotesGenerate({ 
            quote, 
            author,
            color,
            backgroundImage,
            watermarkImage
         });
         setAuthor("");
         setQuote("");
    }

    return (
        <div className='w-[25%] bg-[#18181b] h-screen p-3 text-white'>
            <h1 className='text-center font-bold text-2xl mt-3 text-white'>MK- <span className='text-red-600'>Tech</span></h1>
            <hr />
            <div className='mt-4'>
                <label className='block text-sm font-bold mb-2'>Quotes</label>
                <textarea rows="5" className='w-full bg-[#27272a] rounded-lg px-3'
                    placeholder='Write Quotes'
                    value={quote}
                    onChange={(e) => setQuote(e.target.value)}

                >

                </textarea>
            </div>
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2">
                    Author
                </label>
                <input
                    type="text"
                    name="background"
                    className="block p-2 bg-[#27272a]  rounded w-full"
                    placeholder="Author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2" >
                    Color
                </label>
                <input
                    type="color"
                    name="background"
                    className="block p-2 bg-[#27272a]  rounded w-full h-14"
                    placeholder="Background"
                    value={color}
                    onChange={(e)=>setColor(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="blocktext-sm font-bold mb-2" >
                    Background
                </label>
                <input
                    type="file"
                    name="watermark"
                    className="block p-2 bg-[#27272a] rounded w-full"
                    onChange={(e)=>setBackgroundImage(e.target.files[0])}

                />
            </div>
            <div className="mb-4">
                <label className="blocktext-sm font-bold mb-2" >
                    Watermark
                </label>
                <input
                    type="file"
                    name="watermark"
                    className="block p-2 bg-[#27272a] rounded w-full"
                    placeholder="Watermark"
                    onChange={(e)=>setWatermarkImage(e.target.files[0])}
                />
            </div>
            <button
                type="submit"
                className="bg-zinc-600 text-white px-4 py-2 rounded hover:bg-zinc-500 w-full"
                onClick={handleSubmit}
            > 
            Submit
            </button>

        </div>
    )
}

export default FormLeft