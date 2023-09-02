import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import LeftSide from '../components/LeftSide'
import RightSide from '../components/RightSide'
import Banner from '../components/Banner'


export default function Home() {
  return (
   <>
         <Head>
        <title>Naufal Azim</title>
        <meta name="Portfolio Website" content="My personal Website" />
        <link rel="icon" href="/logo.ico" />
        </Head>

    <main className='w-full h-screen font-bodyFont bg-bodyColor 
    text-textLight overflow-x-hidden overflow-y-scroll'>

      <Navbar />
      
      <div className='hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0'>
        <LeftSide />
      </div>

      <div className='h-[88vh] w-full mx-auto p-4'>
        <Banner />
        {/* About  */}
        {/* Experience  */}
        {/* Projects  */}
        {/* Contact  */}
        {/* Album  */}
      </div>

      <div className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0">
        <RightSide />
        </div>


   </main>
   </>
  )
}
