import React from 'react'
import avatar from '../assets/avt.svg'
import introbg from '../assets/introground.svg'

export default function IntroPage() {
  return (
    <>
      <div className='intro'>
        <h1 className='title'>Fullstack Developer</h1>
        <h2 className='sub-title'>I design and code beautifully simple things, and I love what I do.
        </h2>
        <img src={avatar} className='avatar' />
        <div>
          <img src={introbg} className='intro-bg' />
        </div>
      </div>
      <div className='description'>
        <h1>Hi, I’m Lam. Nice to meet you.</h1>
        <h2>Since beginning my journey as a freelance designer 12 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops.</h2>
      </div>
    </>

  )
}
