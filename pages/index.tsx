import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Icon } from '@iconify/react'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Naufal Azim</title>
        <meta name="description" content="My personal Website" />
        <link rel="icon" href="/logo.ico" />
      </Head>

      {/* Header Start  */}

      <header className='bg-transparent absolute top-5 left-0 w-full flex items-center z-10'>
        <div className='container'>

          <div className='flex items-center justify-between relative'>
            <div className='px-4'>
              <h1 className='tracking-wide font-semibold text-xl text-primary block'><a href='#home'>NA</a></h1>
            </div>

           <div>
            <ul className='flex flex-wrap space-x-4 text-2xl'>
              <li> <a href='https://www.linkedin.com/in/mnaufalazim/' target="_blank"><Icon icon="akar-icons:linkedin-box-fill" /></a></li>
              <li><a href='https://github.com/naufalazim' target="_blank"><Icon icon="akar-icons:github-fill" /></a></li>
              <li><a href='mailto:naufal.azim@outlook.com' target="_blank" ><Icon icon="clarity:email-solid" /></a></li>
            </ul>
           </div>


          </div>
        </div>
      </header>
      {/* Header End  */}



      {/* Hero Section Start  */}
      <section id='home'>

        <div className='container pt-36'>
          <div className='flex flex-wrap'>

            <div className='w-full self-center px-4 lg:w-1/2'>
              <h1 className='text-based font-bold md:text-xl lg:text-2xl'>Hello there 👋🏻, I'm <span className='block text-transparent bg-clip-text bg-gradient-to-r to-emerald-500 from-sky-600 text-4xl mt-1 lg:text-5xl'>Naufal Azim</span></h1>
                <h2 className='font-medium text-slate-500 text-lg mb-0 lg:text-2xl'> <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>Computer Science</span> Student at</h2>
                <h2 className='font-medium text-slate-500 text-lg mb-5 mt-0 lg:text-2xl'> 
                <span className='block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 font-bold'>Universiti Pertahanan Nasional Malaysia</span>
                </h2>
                
                <p className='font-medium text-slate-500 mb-10 leading-relaxed text\'>
                  I love to build stuff and explore the new technology for fun and to learn new things.
                  <span className=' text-slate-500'> I've been participating in some hackathons and competitions related to web development
                  and programming.</span>
                  <span className='block'> <span className=' text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 font-bold'>Indie hacker to be!</span><span className='text-2xl'> 🚀</span></span>
                </p>
                <button className="rounded-full border-2 border-slate-900 py-2 px-4 hover:shadow-lg hover:bg-black hover:text-white hover:opacity-80 transition duration-300 ease-in-out"><a href='/resume.pdf'>My Resume</a></button>
            </div>

            <div className='w-full self-end px-4 lg:w-1/2'>
              <div className=' relative mt-10 lg:mt-5 lg:right-0'>
                <img src='/naufal.png' alt='Naufal Azim' width="400" height="400" className='max-w-full mx-auto rounded-full'></img>
                <span className='absolute -top-10 -z-10 left-1/2 -translate-x-1/2  md:scale-125'>
                    <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#FF0066" d="M34.7,-38.7C47.9,-30.2,63.7,-22.1,67.7,-10.3C71.8,1.6,64.2,17.1,54.8,29.8C45.3,42.5,33.9,52.2,19.8,59.6C5.7,67,-11.2,72.1,-25.3,67.7C-39.4,63.4,-50.7,49.6,-55.8,35C-60.9,20.4,-59.7,5.1,-59.8,-13.3C-59.8,-31.6,-61,-52.9,-51.2,-62C-41.5,-71,-20.7,-67.9,-5,-61.9C10.7,-56,21.5,-47.2,34.7,-38.7Z" 
                    transform="translate(100 100) scale(1.1)"/>
                  </svg>
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Hero Section End  */}
  



      {/* About Section Start */}
        <section id='about'>
          <div className='mt-10 relative '>
            <h2 className='text-center text-slate-500 font-regular'></h2>
            <p className='text-center text-slate-900 font-semibold text-2xl'> 
            <span className='text-transparent bg-clip-text bg-gradient-to-r to-emerald-500 from-sky-600'>Skills</span> at 💪🏼</p>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 px-10 mb-20 lg:mx-10">

              <div className="flex items-start rounded-xl bg-white p-4 shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center ">
                <Icon icon="icon-park:web-page" className='text-3xl' />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                
              </div>

              <div className="ml-4">
                <h2 className="font-semibold lg:text-xl sm:text-2xl md:text-2xl">Web Development 🏗</h2>
                <p className="mt-2 text-sm text-gray-500 leading-loose">
                  <span className='font-bold text-slate-900'>Build the best <span className='text-pink-500'>web experiences. </span></span>
                By using modern web toolkit, I build websites and apps which bring delight whether it is a static landing page or a Software-as-a-Service.</p>
                <div className='flex space-x-3 lg:text-4xl text-2xl justify-center lg:space-x-7 md:space-x-2 pt-5'>
                <ul><Icon icon="logos:spring-icon" /></ul>
                <ul><Icon icon="logos:nextjs-icon" /></ul>
                <ul><Icon icon="logos:tailwindcss-icon" /></ul>
                <ul><Icon icon="logos:react" /></ul>
                
              </div>
            </div>
             
            </div>
           

          {/* Each Card Start  */}
          
            <div className="flex items-start rounded-xl bg-white p-4 shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center ">
                <Icon icon="vscode-icons:file-type-binary" className='text-3xl' />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                 </div>

              <div className="ml-4">
                <h2 className="font-semibold lg:text-xl sm:text-2xl md:text-2xl">Programming 👾</h2>
                <p className="mt-2 text-sm text-gray-500 leading-loose">
                  <span className='font-bold text-slate-900'>Code to <span className='text-pink-500'>expressing my idea. </span></span>
               I can sharpen my mind, rewire my brain and provide solution for my daily problems. I love to work on exciting projects and want to be part of passionate community.</p>

                <div className='flex space-x-3 lg:text-4xl text-2xl justify-center lg:space-x-7 pt-2'>
                    <ul><Icon icon="logos:java" /></ul>
                    <ul><Icon icon="logos:javascript" /></ul>
                    <ul><Icon icon="file-icons:c" /></ul>
                    <ul><Icon icon="logos:python" /></ul>
                </div>
            </div>
          </div>

        {/* Each Card End  */}


        {/* Each Card Start  */}
          
                 <div className="flex items-start rounded-xl bg-white p-4 shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center ">
                <Icon icon="openmoji:hacker-cat" className='text-5xl' />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                 </div>

              <div className="ml-4">
                <h2 className="font-semibold lg:text-xl sm:text-2xl md:text-2xl">Ethical Hacking 🥷🏻</h2>
                <p className="mt-2 text-sm text-gray-500 leading-loose">
                  <span className='font-bold text-slate-900'>Hacking is similar<span className='text-pink-500'> to being detective. </span></span>
                  There is actually no absolute way of hacking because every situation differs from each other. Expressing my creativity to achieve the goal.
                </p>

                <div className='flex space-x-3 lg:text-4xl text-2xl justify-center lg:space-x-7 pt-2'>
                    <ul><Icon icon="simple-icons:kalilinux" /></ul>
                    <ul><Icon icon="file-icons:nmap" /></ul>
                    <ul><Icon icon="simple-icons:wireshark" /></ul>
                    <ul><Icon icon="akar-icons:python-fill" /></ul>
                </div>
            </div>
          </div>

        {/* Each Card End  */}

           {/* Each Card Start  */}
          
           <div className="flex items-start rounded-xl bg-white p-4 shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center ">
                <Icon icon="emojione:hotel" className='text-4xl' />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                 </div>

              <div className="ml-4">
                <h2 className="font-semibold lg:text-xl sm:text-2xl md:text-2xl">Traveler ☕️</h2>
                <p className="mt-2 text-sm text-gray-500 leading-loose">
                  <span className='font-bold text-slate-900'>Love to <span className='text-pink-500'> travel and food hunting! </span></span>
                    I can travel solo or with people to explore the world. I love to know more people and make networking. 
                </p>

                <div className='flex flex-wrap space-x-3 lg:text-4xl text-2xl justify-center lg:space-x-7 pt-2'>
                   
                </div>
            </div>
          </div>

        {/* Each Card End  */}

          {/* Column card  */}
         </div> 
        </section>
      {/* About Section End  */}



      {/* Last part START  */}
      <section>
            <div className='mt-10 relative '>
            <h2 className='text-center text-blue-900 font-semibold text-2xl'>Naufal in <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 font-bold'>Action</span></h2>
          </div>

          <div className='mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 px-20 mb-20 lg:mx-20'>
              <div>
              <img src='/1.jpg' alt='Naufal Azim' width="500" height="400" className='max-w-full mx-auto border-4 border-pink-500'></img>
              </div>

              <div>
              <img src='/4.jpg' alt='Naufal Azim' width="700" height="600" className='max-w-full mx-auto border-4 border-pink-500'></img>
              </div>

              <div>
              <img src='/3.jpg' alt='Naufal Azim' width="600" height="400" className='max-w-full mx-auto border-4 border-pink-500'></img>
              </div>

              <div>
              <img src='/5.jpg' alt='Naufal Azim' width="500" height="400" className='max-w-full mx-auto border-4 border-pink-500'></img>
              </div>
          </div>
      </section>
      {/* Last part END  */}


      {/* Footer Section  */}
        <footer>
          <div className='text-center text-slate-800 text-sm  py-10 font-regular'>
            <p>Build with ❤️ by <a className='text-blue-700' href=''><span className='block'>Naufal Azim.</span></a></p>
          </div>
        </footer>
      {/* Footer Section  */}



    </div>
  )
}
