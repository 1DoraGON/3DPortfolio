import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import React from 'react'
import {useState,useRef} from 'react'
import { styles } from '../style'
import { EarthCanvas } from './canvas'
import { sectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
// template_1qwar4l
// service_kshm8qj
// C3bHw_5nrbU4NVe6L
const Contact = () => {
  const formRef = useRef()
  const [form,setForm] = useState({
    name:'',
    email:'',
    message: ''
  })
  const [loading,setLoading] = useState(false)
  const handleChange = (e) =>{
    const { name,value } = e.target
    setForm({...form, [name]:value})
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    setLoading(true)
    emailjs.send('service_kshm8qj','template_1qwar4l',{
      from_name: form.name,
      to_name: 'KADI Amir Khalid',
      from_email: form.email,
      to_email: 'amirkhalidkadi@gmail.com',
      message:form.message
    },'C3bHw_5nrbU4NVe6L')
    .then(()=>{
      setLoading(false)
      alert('Thanks!')

      setForm({
        name:'',
        email:'',
        message:''
      })
    },(error)=>{
      setLoading(false)

      console.log(error);

      alert('something went wrong.')
    })
// template_1qwar4l
// service_kshm8qj
// C3bHw_5nrbU4NVe6L
  }
  return (
    <div className='xl:mt-12 xl:flex-row 
    flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left','tween',0.2,1)}
      className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <p className="text-slate-400 text-xs font-medium mb-4">(amirkhalidkadi@gmail.com)</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form action="" ref={formRef} onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col' htmlFor="">
            <span className='text-white font-medium mb-4'>Your Name</span>
          </label>
          <input type="text" name="name" value={form.name} onChange={handleChange}
          placeholder="What's your name" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white 
          rounded-lg outlined-none border-none font-medium'/>
          <label className='flex flex-col' htmlFor="">
            <span className='text-white font-medium mb-4'>Your Email</span>
          </label>
          <input type="email" name="email" value={form.email} onChange={handleChange}
          placeholder="What's your email" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white 
          rounded-lg outlined-none border-none font-medium'/>
          <label className='flex flex-col' htmlFor="">
            <span className='text-white font-medium mb-4'>Your Message</span>
          </label>
          <textarea rows="7" name="message" value={form.message} onChange={handleChange}
          placeholder="What do you want to say" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white 
          rounded-lg outlined-none border-none font-medium'/>
          <button type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>
            {loading? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
      <motion.div variants={slideIn('right','tween',0.2,1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default sectionWrapper(Contact,'contact')