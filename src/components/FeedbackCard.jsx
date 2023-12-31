import React from 'react'
import { avatar, quotationMark } from '../assets'

const FeedbackCard = () => {
  return (
    <div className='bg-white p-8 rounded-3xl shadow-xl my-8 mx-2'>
      <div className='flex justify-between'>
        <div className='flex gap-4'>
          <img src={avatar} className='w-12 rounded-full' />
          <div>
            <h1>Tushar Pagote</h1>
            <p>UI-UX Designer</p>
          </div>

        </div>
        <img className='h-8' src={quotationMark} />
      </div>

      <div className='py-8'>
        <h3 className='text-lg'>
          "Discovering this learning platform has been an absolute game-changer for me! The interface is user-friendly and intuitive, making it incredibly easy to explore and acquire new skills. The diverse range of courses available caters to various interests and proficiency levels, ensuring there's something for everyone. The interactive lessons and hands-on projects have accelerated my learning process, allowing me to apply newfound knowledge immediately. The supportive community and expert instructors foster an environment of growth and collaboration. I can confidently say that this platform has empowered me to continuously expand my skill set in ways I never imagined possible. Thank you for creating such an invaluable resource for lifelong learners like me!"</h3>
      </div>
    </div>
  )
}

export default FeedbackCard