import { motion } from 'framer-motion'
import React from 'react'
import Tilt from 'react-tilt'
import { github } from '../assets'
import { projects } from '../constants'
import { sectionWrapper } from '../hoc'
import { styles } from '../style'
import { fadeIn, textVariant } from '../utils/motion'
import { Link } from 'react-router-dom'

const ProjectCard = ({index, name, description, tags,image , source_code_link , }) =>{
  return (
    <motion.div
      variants={fadeIn("up","spring",index*0.5,0.75)}
    >
      <Tilt
        options = {{
          max:45,
          scale:1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div onClick={()=>window.open(source_code_link,"_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <img src={github} alt="github" className='w-1/2 h-1/2 object-contain' />

            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag)=>(
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>

          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Some Projects</h2>

      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("","",0.1,1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Below you can find some of my projects, please note that there are so many projects that I didnt mention here, but I will add them soon, you can find them inside my <a className='underline' href='https://drive.google.com/file/d/1MFr4BwqAK1BKUw00atdnzwr_xquFmM_I/view?usp=sharing'>resume</a> 

        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project,index)=>(
          <ProjectCard key={index} index={index} {...project} />

        ))}
      </div>
    </>
  )
}

export default sectionWrapper(Works,"")