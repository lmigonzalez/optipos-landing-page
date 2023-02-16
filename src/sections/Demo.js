import React, {useState} from 'react'
import { AiFillCloseCircle } from "react-icons/ai";
import { motion } from 'framer-motion';
const Demo = () => {
	const [showDemo, setShowDemo] = useState(false)


	function handleShowDemo(){
		setShowDemo(true)
	}

	function handleCloseDemo(){
		setShowDemo(false)
	}

  return (
	<section id='demo' className=''>
		{!showDemo && <button onClick={handleShowDemo} className="bg-purple rounded py-2 w-48 text-xl animate-bounce ">Demo</button>}
		
		{showDemo && <div className='bg-white text-dark rounded w-full px-4 py-6 relative'>
			<button onClick={handleCloseDemo} className='absolute top-0 right-0 text-4xl text-dark cursor-pointer hover:text-red-900'> <AiFillCloseCircle/> </button>
			<h3 className='text-start mb-2'>Please note that:</h3>
			<ul className='text-start list-disc list-inside'>
				<li className='mb-2'>The demo website contains fake data.</li>
				<li className='mb-2'>Large screens are recommended for a better navigation experience due to the presence of graphs and tables.</li>
				<li className='mb-2'>Login credentials are provided for security reasons.</li>
				<li className='mb-2'>The login user is not an admin, and some features are unavailable (cannot delete/edit products, customers, orders, users, or grant/remove permissions).</li>
				<li className='mb-2'>To enter as admin, contact us for the necessary credentials.</li>
			</ul>
			<button className='bg-purple rounded my-4 py-2 w-52 text-xl text-white hover:scale-95 transform transition duration-y'>Take Me To Demo</button>
		</div>}
		
	</section>
  )
}

export default Demo