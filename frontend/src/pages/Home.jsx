import { useState } from 'react';
import backgroundimage from '../images/backgoundimage.jpg';
import datas from '../assets/jobsTemplateData.json';

export const Home = () => {
    const [searchItems, setSearchItems] = useState('');
    // const[firterItems, setFirterItems] = useState(datas)
    const[currentPage, setCurrentPages] = useState(1)
    const[itemsPage] = useState(3)

    const firterItems = datas.filter((data) => 
        data.role.toLowerCase().includes(searchItems.toLowerCase())
    );

    const indexOfLastItem = currentPage * itemsPage;
    const indexOfFirstItem = indexOfLastItem -itemsPage;
    const currentItems = firterItems.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPages(pageNumber)

    const handleInputChange = (e) => {
        const searchItems = e.target.value;
        setSearchItems(searchItems)
        setCurrentPages(1)
    } 


    return (
        <>
            <div className='w-full h-screen'>
                <div
                    className='bg'
                    style={{
                        backgroundImage: `url(${backgroundimage})`,
                        width: '100%',
                        height: '60%',
                        backgroundSize: 'cover',
                    }}
                >
                    <div className='absolute top-1/2 left-1/4 transform -translate-x-1/2-translate-y-1/2'></div>
                </div>

                <div className='bg-gray-700 h-50vh'>
                    <div>
                        <form action='' className=' flex justify-center'>
                            <input
                                type='text'
                                placeholder='Enter Your Dream Job'
                                value={searchItems}
                                onChange={handleInputChange}
                                className='h-13 font-bold text-2xl p-2 mt-10 border-4  border-gray-500 outline-0 rounded-lg w-80'
                            />
                        </form>
                    </div>

                    <div className='m-10 flex gap-20'>
                        <div className='bg-white w-80 h-80 border-1 border-gray-500 rounded-lg py-5'>
                            <form action='' className='flex mb-10'>
                                <div className='w-45 text-lg border-2 border-gray-500 rounded-lg m-4 font-bold py-2 pl-1'>
                                    Filter jobs by category
                                    <select className='border-none ml-8 outline-none text-right'>
                                        <option></option>
                                        <option>Frontend</option>
                                        <option>Backend</option>
                                        <option>Devops</option>
                                        <option>Product Manager</option>
                                    </select>
                                </div>
                            </form>

                            <form action='' className='flex mb-10'>
                                <div className='w-45 text-lg border-2 border-gray-500 rounded-lg m-3 font-bold py-2 pl-2'>
                                    Filter jobs by location
                                    <select className='border-none ml-24 outline-none'>
                                        <option></option>
                                        <option>Remote</option>
                                        <option>Onsite</option>
                                        <option>Hybrid</option>
                                    </select>
                                </div>
                            </form>
                        </div>

                        <div className='w-full max-w-full md:max-w-[100%] gap-4 md:gap-5'>
                            {currentItems.map(data => (
                                <div key={data.id} className='border-4 bg-white w-160 h-60 border-gray-500 rounded-md my-6'>
                                    <div className=''>
                                        <h4 className='font-bold text-3xl text-red-500 cursor-pointer'>{data.role}</h4>
                                        <ul className='flex gap-2 font-bold '>
                                            <li className='cursor-pointer'>{data.type}</li>
                                            <li className='cursor-pointer'>{data.location}</li>
                                            <li className='cursor-pointer'>{data.date}</li>
                                        </ul>
                                    </div>
                                    <h2 className='flex justify-center text-2xl font-bold underline underline-offset-4 decoration-double'>JOB DESCRIPTION</h2>
                                    <p className='m-3 text-lg'>{data.jobdescrption}</p>
                                </div>
                            ))}
                        </div>
                     
                    </div>
                    <div className='flex justify-center ml-4'>
                    {[...Array(Math.ceil(firterItems.length / itemsPage)).keys()].map(number => (
                        <button key={number + 1} onClick={() => paginate(number + 1)} className={`mx-2 ${currentPage === number + 1 ? 'bg-gray-700 text-white' : 'bg-white text-gray-700'} py-2 px-4 rounded-full`}>{number + 1}</button>
                    ))}
                </div>
                </div>
            </div>
        </>
    );
};

export default Home;














