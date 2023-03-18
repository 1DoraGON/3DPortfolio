import { motion } from 'framer-motion'
import React from 'react'
import Tilt from 'react-tilt'
import { styles } from '../style'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { sectionWrapper } from '../hoc'
const ServiceCard = ({ index, title , icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full' >
      <motion.div
        variants={fadeIn("right","spring",0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
          <div className="bg-tertiary rounded-[20px] py-5 px-12
            min-h-[280px] flex justify-evenly items-center flex-col"
            options={{
              max:45,
              scale :1,
              speed: 450
            }}
          >
            <img className='w-16 h-16 object-contain' src={icon} alt={title} />
            <h3 className='text-white text-[20px] font-bold text-center'>
              {title}
            </h3>
          </div>
      </motion.div>
    </Tilt>
  )
}
const About = () => {
  console.log(services);
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        className='mt-4 text-secondary text-[17px] 
        max-w-3xl leading-[30px]'
        variants={fadeIn("","",0.1,1)}
      >
        I’m a 4th year Ai and Data science student at ESI SBA (Algeria), I’m also interested on web development, I’m currently working on a Django Ecommerce multi use web app with Epay and admin dashboard for analyzing data. I’m a passionate learner and love working with new technologies all the time.
        Skills: Python , Django , Laravel , JavaScript , React JS , Data analysis tools (matplotlib pandas numpy …) , Machine learning tools (skitlearn) 
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service,index)=>{
          return <ServiceCard key={service.title} index={index}
             {...service} />
        })}

      </div>
      
    </>
  )
}

export default sectionWrapper(About,'about')