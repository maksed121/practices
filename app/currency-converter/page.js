"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const Converter = () => {
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [amount, setAmount] = useState(0);
    const [value, setValue] = useState(null);

    const handleSubmit = async () => {

        const request = await fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_YAAopZkvWhKonX8NuGQeW28iAU2FtNVm9PxOZFzP&base_currency=${from}&currencies=${to}`);
        const response = await request.json();
        console.log(response.data);
        const totalAmount = amount * response.data[to]
        const currentRate = response.data[to]
        setValue({
            currentRate,
            totalAmount

        })
        
    };

    return (
        <div className="flex items-center justify-center bg-zinc-600 w-screen h-screen ">
            <div className="bg-zinc-500 rounded-xl w-[80%] p-5">
                <h1 className='text-center font-bold text-2xl text-white'>Currency Converter</h1>
                <div className="grid grid-cols-4 gap-5 mt-3">
                    <div className="box">
                        <label htmlFor="from" className='block font-bold'>From:</label>
                        <select onChange={(e) => setFrom(e.target.value)} id="from" name="from" className='bg-zinc-400 px-4 py-3 rounded-xl'>
                            <option value="EUR">Euro</option>
                            <option value="USD">US Dollar</option>
                            <option value="JPY">Japanese Yen</option>
                            <option value="BGN">Bulgarian Lev</option>
                            <option value="CZK">Czech Republic Koruna</option>
                            <option value="DKK">Danish Krone</option>
                            <option value="GBP">British Pound Sterling</option>
                            <option value="HUF">Hungarian Forint</option>
                            <option value="PLN">Polish Zloty</option>
                            <option value="RON">Romanian Leu</option>
                            <option value="SEK">Swedish Krona</option>
                            <option value="CHF">Swiss Franc</option>
                            <option value="ISK">Icelandic Króna</option>
                            <option value="NOK">Norwegian Krone</option>
                            <option value="HRK">Croatian Kuna</option>
                            <option value="RUB">Russian Ruble</option>
                            <option value="TRY">Turkish Lira</option>
                            <option value="AUD">Australian Dollar</option>
                            <option value="BRL">Brazilian Real</option>
                            <option value="CAD">Canadian Dollar</option>
                            <option value="CNY">Chinese Yuan</option>
                            <option value="HKD">Hong Kong Dollar</option>
                            <option value="IDR">Indonesian Rupiah</option>
                            <option value="ILS">Israeli New Sheqel</option>
                            <option value="INR">Indian Rupee</option>
                            <option value="KRW">South Korean Won</option>
                            <option value="MXN">Mexican Peso</option>
                            <option value="MYR">Malaysian Ringgit</option>
                            <option value="NZD">New Zealand Dollar</option>
                            <option value="PHP">Philippine Peso</option>
                            <option value="SGD">Singapore Dollar</option>
                            <option value="THB">Thai Baht</option>
                            <option value="ZAR">South African Rand</option>
                        </select>
                    </div>
                    <Image width={300} height={300} src={"/back.jpg"} className='w-[60px] h-[60px] mt-4 ml-[70px]' alt='image' />
                    <div className="box">
                        <label htmlFor="to" className='block font-bold'>To:</label>
                        <select onChange={(e) => setTo(e.target.value)} id="to" name="to" className='bg-zinc-400 px-4 py-3 rounded-xl'>
                            <option value="EUR">Euro</option>
                            <option value="USD">US Dollar</option>
                            <option value="JPY">Japanese Yen</option>
                            <option value="BGN">Bulgarian Lev</option>
                            <option value="CZK">Czech Republic Koruna</option>
                            <option value="DKK">Danish Krone</option>
                            <option value="GBP">British Pound Sterling</option>
                            <option value="HUF">Hungarian Forint</option>
                            <option value="PLN">Polish Zloty</option>
                            <option value="RON">Romanian Leu</option>
                            <option value="SEK">Swedish Krona</option>
                            <option value="CHF">Swiss Franc</option>
                            <option value="ISK">Icelandic Króna</option>
                            <option value="NOK">Norwegian Krone</option>
                            <option value="HRK">Croatian Kuna</option>
                            <option value="RUB">Russian Ruble</option>
                            <option value="TRY">Turkish Lira</option>
                            <option value="AUD">Australian Dollar</option>
                            <option value="BRL">Brazilian Real</option>
                            <option value="CAD">Canadian Dollar</option>
                            <option value="CNY">Chinese Yuan</option>
                            <option value="HKD">Hong Kong Dollar</option>
                            <option value="IDR">Indonesian Rupiah</option>
                            <option value="ILS">Israeli New Sheqel</option>
                            <option value="INR">Indian Rupee</option>
                            <option value="KRW">South Korean Won</option>
                            <option value="MXN">Mexican Peso</option>
                            <option value="MYR">Malaysian Ringgit</option>
                            <option value="NZD">New Zealand Dollar</option>
                            <option value="PHP">Philippine Peso</option>
                            <option value="SGD">Singapore Dollar</option>
                            <option value="THB">Thai Baht</option>
                            <option value="ZAR">South African Rand</option>
                        </select>
                    </div>
                    <div className="box">
                        <label htmlFor="amount" className='block'>Amount</label>
                        <input onChange={(e) => setAmount(e.target.value)} type="number" className='bg-zinc-400 px-4 py-3 rounded-xl' />
                    </div>
                </div>
                {value && (
                    <h1 className='text-center mt-4 text-white font-bold'>
                        Current Rate: {value.currentRate} and Total Amount: {value.totalAmount}
                    </h1>
                )}
                <button onClick={handleSubmit} className='bg-blue-400 px-4 py-2 rounded-xl float-end mr-10 mt-4 font-bold text-white'>Convert</button>
            </div>
        </div>
    );
};

export default Converter;
