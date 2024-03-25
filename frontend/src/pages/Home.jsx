import Header from '../components/Header';
import  backgroundimage from '../images/backgoundimage.jpg';
import Search from '../components/Search';



export const Home = () => {
    return(
        <div> 
            <div className= 'w-full h-screen'>
                <div className='bg' 
                style={{ backgroundImage: 
                `url(${backgroundimage})`,
                 width: '100%', height: '60%', 
                 backgroundSize: 'cover',  }}>
                    <div className='absolute top-1/2 left-1/4 transform -translate-x-1/2-translate-y-1/2'>
                    <Search />
                 </div>
                 </div>
               
                 <div className='bg-blue-500 h-50vh'>
                            <h1 className='text-3xl text-white flex justify-center font-bold py-4'>Find your dream job</h1>
                       
                        <div className='m-10 flex gap-20'>
                            <div className="bg-white">
                            <form action="" className='bg-red-500 w-1/2 m-4'>
                            <div className=''>Filter by category
                            <select className='w-35 h-8'>
                             <option></option>
                             <option>Frontend</option>
                             <option>Backend</option>
                             <option>Devops</option>
                            <option>Product Manager</option></select></div></form>

                            <form action="" className='bg-green-500 w-1/2'>
                            <div className=''>Filter by location
                            <select className='w-15 h-8'>
                             <option></option>
                             <option>Remote</option>
                             <option>Onsite</option>
                             <option>Hybrid</option>
                            </select>
                            </div></form>
                            </div>

                    <div className='w-full max-w-full md:max-w-[100%] flex flex-wrap gap-4 md:gap-5'>       
                    <div className='bg-white border-2 h-23 flex-shrink-0 flex-grow-0'>
                    <div className='py-2 px-3'>
                    <h6 className='text-2lg font-bold'>Frontend Developer</h6>
                    <span className='text-2lg'>March 21, 2024</span>
                    <p className='text-2lg'>Full-time, Permanent</p>
                    <p className=''>Engineering(Software Development)</p>
                    </div>
                    <span className='bg-blue-500 border-none border-black rounded-md p-1 text-white font-bold '>Details</span>
                   </div>
                   <div className='bg-white border-2 h-23 flex-shrink-0 flex-grow-0'>
                    <div className='py-2 px-3'>
                    <h6 className='text-2lg font-bold'>Frontend Developer</h6>
                    <span className='text-2lg'>March 21, 2024</span>
                    <p className='text-2lg'>Full-time, Permanent</p>
                    <p className=''>Engineering(Software Development)</p>
                    </div>
                    <span className='bg-blue-500 border-none border-black rounded-md p-1 text-white font-bold '>Details</span>
                   </div>
                   <div className='bg-white border-2 h-23 flex-shrink-0 flex-grow-0'>
                    <div className='py-2 px-3'>
                    <h6 className='text-2lg font-bold'>Frontend Developer</h6>
                    <span className='text-2lg'>March 21, 2024</span>
                    <p className='text-2lg'>Full-time, Permanent</p>
                    <p className=''>Engineering(Software Development)</p>
                    </div>
                    <span className='bg-blue-500 border-none border-black rounded-md p-1 text-white font-bold '>Details</span>
                   </div>
                   <div className='bg-white border-2 h-23 flex-shrink-0 flex-grow-0'>
                    <div className='py-2 px-3'>
                    <h6 className='text-2lg font-bold'>Frontend Developer</h6>
                    <span className='text-2lg'>March 21, 2024</span>
                    <p className='text-2lg'>Full-time, Permanent</p>
                    <p className=''>Engineering(Software Development)</p>
                    </div>
                    <span className='bg-blue-500 border-none border-black rounded-md p-1 text-white font-bold '>Details</span>
                   </div>
                   <div className='bg-white border-2 h-23 flex-shrink-0 flex-grow-0'>
                    <div className='py-2 px-3'>
                    <h6 className='text-2lg font-bold'>Frontend Developer</h6>
                    <span className='text-2lg'>March 21, 2024</span>
                    <p className='text-2lg'>Full-time, Permanent</p>
                    <p className=''>Engineering(Software Development)</p>
                    </div>
                    <span className='bg-blue-500 border-none border-black rounded-md p-1 text-white font-bold '>Details</span>
                   </div>
                   <div className='bg-white border-2 h-23 flex-shrink-0 flex-grow-0'>
                    <div className='py-2 px-3'>
                    <h6 className='text-2lg font-bold'>Frontend Developer</h6>
                    <span className='text-2lg'>March 21, 2024</span>
                    <p className='text-2lg'>Full-time, Permanent</p>
                    <p className=''>Engineering(Software Development)</p>
                    </div>
                    <span className='bg-blue-500 border-none border-black rounded-md p-1 text-white font-bold '>Details</span>
                   </div>
                   <div className='bg-white border-2 h-23 flex-shrink-0 flex-grow-0'>
                    <div className='py-2 px-3'>
                    <h6 className='text-2lg font-bold'>Frontend Developer</h6>
                    <span className='text-2lg'>March 21, 2024</span>
                    <p className='text-2lg'>Full-time, Permanent</p>
                    <p className=''>Engineering(Software Development)</p>
                    </div>
                    <span className='bg-blue-500 border-none border-black rounded-md p-1 text-white font-bold '>Details</span>
                   </div>
                   <div className='bg-white border-2 h-23 flex-shrink-0 flex-grow-0'>
                    <div className='py-2 px-3'>
                    <h6 className='text-2lg font-bold'>Frontend Developer</h6>
                    <span className='text-2lg'>March 21, 2024</span>
                    <p className='text-2lg'>Full-time, Permanent</p>
                    <p className=''>Engineering(Software Development)</p>
                    </div>
                    <span className='bg-blue-500 border-none border-black rounded-md p-1 text-white font-bold '>Details</span>
                   </div>
                   <div className='bg-white border-2 h-23 flex-shrink-0 flex-grow-0'>
                    <div className='py-2 px-3'>
                    <h6 className='text-2lg font-bold'>Frontend Developer</h6>
                    <span className='text-2lg'>March 21, 2024</span>
                    <p className='text-2lg'>Full-time, Permanent</p>
                    <p className=''>Engineering(Software Development)</p>
                    </div>
                    <span className='bg-blue-500 border-none border-black rounded-md p-1 text-white font-bold '>Details</span>
                   </div>
                    <div className='bg-white border-2 h-23 flex-shrink-0 flex-grow-0'>
                    <div className='py-2 px-3'>
                    <h6 className='text-2lg font-bold'>Frontend Developer</h6>
                    <span className='text-2lg'>March 21, 2024</span>
                    <p className='text-2lg'>Full-time, Permanent</p>
                    <p className=''>Engineering(Software Development)</p>
                    </div>
                    <span className='bg-blue-500 border-none border-black rounded-md p-1 text-white font-bold '>Details</span>
                   </div>
                    <div className='bg-white border-2 h-23 flex-shrink-0 flex-grow-0'>
                    <div className='py-2 px-3'>
                    <h6 className='text-2lg font-bold'>Frontend Developer</h6>
                    <span className='text-2lg'>March 21, 2024</span>
                    <p className='text-2lg'>Full-time, Permanent</p>
                    <p className=''>Engineering(Software Development)</p>
                    </div>
                    <span className='bg-blue-500 border-none border-black rounded-md p-1 text-white font-bold '>Details</span>
                   </div>
                    <div className='bg-white border-2 h-23 flex-shrink-0 flex-grow-0'>
                    <div className='py-2 px-3'>
                    <h6 className='text-2lg font-bold'>Frontend Developer</h6>
                    <span className='text-2lg'>March 21, 2024</span>
                    <p className='text-2lg'>Full-time, Permanent</p>
                    <p className=''>Engineering(Software Development)</p>
                    </div>
                    <span className='bg-blue-500 border-none border-black rounded-md p-1 text-white font-bold '>Details</span>
                   </div>
        
                   </div>
                
    </div>  
   hello2
                        </div>
                        hello4
                 </div>
                 
            </div>
        
   
   
  )
}

export default Home;
