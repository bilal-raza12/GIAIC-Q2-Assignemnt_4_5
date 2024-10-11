import Link from 'next/link'


const Footer = () => {
  return (
    <footer className='bg-[#282728] text-white py-2 '>
            <div className='max-w-3xl mx-auto text-center'>
                <p className='mb-2'>&copy; BlogInsights. All Rights Reserved.</p>
                <div className='flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4'>
                    <Link href={"/"} className=' hover:text-[#cbd66d]'>Home</Link> 
                    <Link href={"/"} className=' hover:text-[#cbd66d]'>About</Link>
                    <Link href={"/"} className=' hover:text-[#cbd66d]'>Contact</Link>

                </div>
            </div>
    </footer>
  )
}

export default Footer
