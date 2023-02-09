import React from 'react'
import './about.css'
import pretre2 from '../../asserts/pretre2.jpg'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <div className="about">
            <div className="about-left">
                <div className="about-card red"></div>
                <div className="about-card">
                    <img src={pretre2} alt="" className="about-img" />
                </div>
            </div>
            <div className="about-right">
                <h1 className="about-right-h1">About</h1>
                <span className="about-span">Hi, Im Here To Help Your Next Project</span>
                <p className="about-desc">Lorem ipsum dolor, sit amet consectetur
                 adipisicing elit. Vitae nulla et eius? Animi ipsum soluta nihil
                 eaque quis dolores iste in totam. Nostrum laudantium architecto id nisi esse cupiditate eos!
                </p>

                <p className="about-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
                quis dolores iste in totam. Nostrum laudantium architecto id nisi esse cupiditate eos!
                </p>
                <div className="about-list">
                  <ul className="aboutUl">
                    <li className="aboutLi">1. Probleme Solving</li>
                    <li className="aboutLi">2. Creative idea</li>
                    <li className="aboutLi">3. Search A lot </li>
                    <li className="aboutLi">4. Hight Quality</li>
                  </ul>
                </div>
                <button className='about-btn'>Contact me</button>
            </div>
        </div>
    </div>
  )
}

export default About