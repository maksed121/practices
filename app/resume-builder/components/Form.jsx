"use client"
import React, { useState } from 'react'
import Input from './Input'
import Textarea from './Textarea'
import ResumePDF from '../resume/page'

const Form = () => {

    const [isSubmit, setIsSubmit] = useState(false)
    const [allData, setAllData] = useState()

    // personal information //
    const [name, setName] = useState('');
    const [co, setCo] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [dob, setDob] = useState('');
    const [profilePic, setProfilePic] = useState(null);
    const [address, setAddress] = useState('');
    const [about, setAbout] = useState('');
    //education
    const [hslcInstitute, setHslcInstitute] = useState('');
    const [hslcPercentage, setHslcPercentage] = useState('');
    const [hslcYear, setHslcYear] = useState('');
    const [hslcBoard, setHslcBoard] = useState('');
    const [hsInstitute, setHsInstitute] = useState('');
    const [hsPercentage, setHsPercentage] = useState('');
    const [hsYear, setHsYear] = useState('');
    const [hsBoard, setHsBoard] = useState('');
    const [gradInstitute, setGradInstitute] = useState('');
    const [gradCGPA, setGradCGPA] = useState('');
    const [gradYear, setGradYear] = useState('');
    const [gradUniversity, setGradUniversity] = useState('');
    //works
    const [company1Name, setCompany1Name] = useState('');
    const [company1Designation, setCompany1Designation] = useState('');
    const [company1StartDate, setCompany1StartDate] = useState('');
    const [company1EndDate, setCompany1EndDate] = useState('');
    const [company2Name, setCompany2Name] = useState('');
    const [company2Designation, setCompany2Designation] = useState('');
    const [company2StartDate, setCompany2StartDate] = useState('');
    const [company2EndDate, setCompany2EndDate] = useState('');
    const [company3Name, setCompany3Name] = useState('');
    const [company3Designation, setCompany3Designation] = useState('');
    const [company3StartDate, setCompany3StartDate] = useState('');
    const [company3EndDate, setCompany3EndDate] = useState('');
    // skills and languages
    const [skills, setSkills] = useState('');
    const [languages, setLanguages] = useState('');




    const handleSubmit = () => {
        const allFormData = {
            // Personal Information
            "name": name,
            "co": co,
            "email": email,
            "phone": phone,
            "dob": dob,
            "profilePic": profilePic,
            "address": address,
            "about": about,
            // Educational Information
            "hslcInstitute": hslcInstitute,
            "hslcPercentage": hslcPercentage,
            "hslcYear": hslcYear,
            "hslcBoard": hslcBoard,
            "hsInstitute": hsInstitute,
            "hsPercentage": hsPercentage,
            "hsYear": hsYear,
            "hsBoard": hsBoard,
            "gradInstitute": gradInstitute,
            "gradCGPA": gradCGPA,
            "gradYear": gradYear,
            "gradUniversity": gradUniversity,
            // Work Experience
            "company1Name": company1Name,
            "company1Designation": company1Designation,
            "company1StartDate": company1StartDate,
            "company1EndDate": company1EndDate,
            "company2Name": company2Name,
            "company2Designation": company2Designation,
            "company2StartDate": company2StartDate,
            "company2EndDate": company2EndDate,
            "company3Name": company3Name,
            "company3Designation": company3Designation,
            "company3StartDate": company3StartDate,
            "company3EndDate": company3EndDate,
            // Skills and Languages
            "skills": skills,
            "languages": languages,
        };
        setAllData(allFormData);
        setIsSubmit(true);
        console.log(allData);

    };



    return (
        <div>
            {!isSubmit ? (
                <>
                    <div className="bg-[#372e31] w-full rounded-xl p-3 grid  text-white">
                        <h1 className='text-3xl'>Personal Information</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-2 gap-2">
                            <Input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder={'Enter your name'}
                                type={'text'}
                                label={'Your Name'}
                            />
                            <Input
                                value={co}
                                onChange={(e) => setCo(e.target.value)}
                                placeholder={'Enter your C/O'}
                                type={'text'}
                                label={'Your C/O'}
                            />
                            <Input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder={'Enter your email'}
                                type={'email'}
                                label={'Your Email'}
                            />
                            <Input
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder={'Enter your phone'}
                                type={'number'}
                                label={'Your Phone'}
                            />
                            <Input
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                                type={'date'}
                                label={'Your DOB'}
                            />
                            <Input
                                onChange={(e) => setProfilePic(e.target.files[0])}
                                type={'file'}
                                label={'Your Profile Pic'}
                            />
                            <Textarea
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                placeholder={'Enter your address'}
                                type={'text'}
                                label={'About Address'}
                            />
                            <Textarea
                                value={about}
                                onChange={(e) => setAbout(e.target.value)}
                                placeholder={'About Yourself'}
                                type={'text'}
                                label={'About Yourself'}
                            />
                        </div>
                    </div>

                    <div className="bg-[#372e31] w-full rounded-xl p-3 grid  mt-3 text-white">
                        <h1 className='text-3xl'>Educational Information</h1>
                        <h1 className='text-xl'>HSLC (10<sup>th</sup>)</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-2 gap-2">
                            <Input placeholder={'Enter your institute name'}
                                type={'text'}
                                label={'Your Institute Name'}
                                onChange={(e) => setHslcInstitute(e.target.value)}
                            />
                            <Input placeholder={'Enter your percentage'} type={'text'} label={'Percentage'} onChange={(e) => setHslcPercentage(e.target.value)} />
                            <Input placeholder={'Enter your passout year'} type={'text'} label={'Year'} onChange={(e) => setHslcYear(e.target.value)} />
                            <Input placeholder={'Enter your board name'} type={'text'} label={'Your Board Name'} onChange={(e) => setHslcBoard(e.target.value)} />
                        </div>
                        <h1 className='text-xl mt-3'>HS (12<sup>th</sup>)</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-2 gap-2">
                            <Input placeholder={'Enter your institute name'} type={'text'} label={'Your Institute Name'} onChange={(e) => setHsInstitute(e.target.value)} />
                            <Input placeholder={'Enter your percentage'} type={'text'} label={'Percentage'} onChange={(e) => setHsPercentage(e.target.value)} />
                            <Input placeholder={'Enter your passout year'} type={'text'} label={'Year'} onChange={(e) => setHsYear(e.target.value)} />
                            <Input placeholder={'Enter your board name'} type={'text'} label={'Your Board Name'} onChange={(e) => setHsBoard(e.target.value)} />
                        </div>
                        <h1 className='text-xl mt-3 gap-3'>Graduation</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-2 gap-2">
                            <Input placeholder={'Enter your institute name'} type={'text'} label={'Your Institute Name'} onChange={(e) => setGradInstitute(e.target.value)} />
                            <Input placeholder={'Enter your CGPA'} type={'text'} label={'CGPA'} onChange={(e) => setGradCGPA(e.target.value)} />
                            <Input placeholder={'Enter your passout year'} type={'text'} label={'Year'} onChange={(e) => setGradYear(e.target.value)} />
                            <Input placeholder={'Enter your University name'} type={'text'} label={' University Name'} onChange={(e) => setGradUniversity(e.target.value)} />
                        </div>
                    </div>
                    <div className="bg-[#372e31] w-full rounded-xl p-3 grid  mt-3 text-white">
                        <h1 className='text-3xl'>Work Experience</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-2 gap-2">
                            <Input placeholder={'Enter your company name'} type={'text'} label={'Company Name'} onChange={(e) => setCompany1Name(e.target.value)} />
                            <Input placeholder={'Enter your designation'} type={'text'} label={'Designation'} onChange={(e) => setCompany1Designation(e.target.value)} />
                            <Input type={'date'} label={'Start Date'} onChange={(e) => setCompany1StartDate(e.target.value)} />
                            <Input type={'date'} label={'End Date'} onChange={(e) => setCompany1EndDate(e.target.value)} />
                            <Input placeholder={'Enter your company name'} type={'text'} label={'Company Name'} onChange={(e) => setCompany2Name(e.target.value)} />
                            <Input placeholder={'Enter your designation'} type={'text'} label={'Designation'} onChange={(e) => setCompany2Designation(e.target.value)} />
                            <Input type={'date'} label={'Start Date'} onChange={(e) => setCompany2StartDate(e.target.value)} />
                            <Input type={'date'} label={'End Date'} onChange={(e) => setCompany2EndDate(e.target.value)} />
                            <Input placeholder={'Enter your company name'} type={'text'} label={'Company Name'} onChange={(e) => setCompany3Name(e.target.value)} />
                            <Input placeholder={'Enter your designation'} type={'text'} label={'Designation'} onChange={(e) => setCompany3Designation(e.target.value)} />
                            <Input type={'date'} label={'Start Date'} onChange={(e) => setCompany3StartDate(e.target.value)} />
                            <Input type={'date'} label={'End Date'} onChange={(e) => setCompany3EndDate(e.target.value)} />
                        </div>
                    </div>
                    <div className="bg-[#372e31] w-full rounded-xl p-3 grid  mt-3 text-white">
                        <h1 className='text-3xl'>Skills</h1>
                        <div className="grid grid-cols-1 mt-2 gap-2">
                            <Textarea placeholder={'Enter your Skills'} type={'text'} label={'Skills'} onChange={(e) => setSkills(e.target.value)} />
                        </div>
                    </div>
                    <div className="bg-[#372e31] w-full rounded-xl p-3 grid  mt-3 text-white">
                        <h1 className='text-3xl'>Known Languages</h1>
                        <div className="grid grid-cols-1 mt-2 gap-2">
                            <Textarea placeholder={'Enter your Languages'} type={'text'} label={'Languages'} onChange={(e) => setLanguages(e.target.value)} />
                        </div>
                    </div>
                    <div className=" w-full rounded-xl p-3 grid  mt-3 text-white">
                        <div className="flex items-center justify-between">
                            <p>Credit: Pen Programmer</p>
                            <button className='bg-zinc-700 rounded-lg px-2 py-2 text-white' onClick={handleSubmit}>Build Resume</button>
                        </div>
                    </div>
                </>
            ) : (
                <ResumePDF formData={allData}/>
            )}

        </div>
    )

}
export default Form;