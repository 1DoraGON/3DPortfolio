import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { ComputersCanvas } from './canvas'
const Hero = () => {
  return (
    <section className='relative w-full
      h-[1000px]'>
        <div className={`${styles.paddingX} absolute
          inset-0 top-[120px] max-auto flex
          flex-row items-start gap-5`}>
            <div className="flex flex-col justify-center items-center mt-5">
              <div className='w-5 h-5 rounded-full bg-[#915eff]' />
              <div className='w-1 sm:h-80 h-40 violet-gradient'/>
            </div>
            <div>
              <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Amir Khalid</span></h1>
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I’m a 4th year Ai and Data science student at
              ESI SBA (Algeria), I’m also interested on web
              development,<br/> I’m currently working on a Django
              Ecommerce multi use web app with Epay and admin dashboard for analyzing data.<br/> I’m a passionate learner and love working with new technologies all the time.
              </p>
            </div>
          </div>
            <ComputersCanvas />
      </section>
  )
}

export default Hero