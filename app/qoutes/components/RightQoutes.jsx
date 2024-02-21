import React from 'react';

const RightQuotes = ({ quotesGenerate,setQuotesGenerate }) => {
    return (
        <div className='w-[75%] h-full bg-black p-3'>
            <div className="w-[500px] h-[500px] rounded-lg flex items-center justify-center "
                style={{
                    backgroundColor: quotesGenerate.color ? quotesGenerate.color : "#27272a",
                     backgroundImage: `url(${quotesGenerate.backgroundImage && URL.createObjectURL(quotesGenerate?.backgroundImage)})`,
                    backgroundPosition: 'center',
                    backgroundSize: "100%",
                    
                   
                }}>

                <div className='flex items-end flex-col justify-center text-center text-white p-[20px]'>
                    {quotesGenerate.quote ? (
                        <h1 className='text-2xl'>" {quotesGenerate.quote} "</h1>
                    ) : (
                        <h1 className='text-3xl'>"First, solve the problem. Then, write the code." </h1>
                    )}
                    {quotesGenerate.author ? (
                        <p className='font-bold'>~{quotesGenerate.author}</p>
                    ) : (
                        <p className='font-bold'>~John Johnson</p>
                    )}

                </div>

            </div>

        </div>
    )
}

export default RightQuotes;
