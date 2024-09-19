import React from 'react'
import './Contact.css'
import { useParams } from 'react-router-dom'

const Contact = () => {
  const { title } = useParams()

  return (
    <div className='contact'>
      <h1>{title}</h1>
    </div>
  )
}

export default Contact
