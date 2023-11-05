import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { ComputersCanvas } from './canvas'
const Hero = () => {
  return (
    <section className='relative w-full
      h-[1200px]'>
      <div className={`${styles.paddingX} absolute
          inset-0 top-[120px] max-auto flex
          flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Amir Khalid</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            (Looking for an internship) I am a final-year AI and Data Science student at ESI SBA (Algeria). In addition to my academic pursuits, I have a keen interest in web development. Currently, I am working on a multi-user Ecommerce web application using Laravel and ReactJS. This project involves integrating Epay for payment processing and developing an admin dashboard for data analysis. I am a dedicated learner and thrive on exploring new technologies.
            Skills: Python, Django, Laravel, ReactJS Data analysis tools (matplotlib, pandas, numpy, etc.), Machine learning (scikit-learn), Deep Learning (TensorFlow, PyTorch).<br /> I’m a passionate learner and love working with new technologies all the time.
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 
              border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full
                    bg-secondary mb-1'
            />

          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero