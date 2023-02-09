import React from 'react'
import './intro.css'
import image from '../../asserts/image-remove.png'

const Intro = () => {
  return (
    <>
        <div className="intro">
            <div className="intro-container">
                <div className="intro-left">
                    <div className="intro-rows">
                        <h2 className="intro-h2">Salut</h2>
                        <h1 className="intro-h1">Acha Umba</h1>
                        <div className="intro-title">
                            <div className="intro-rows-items">
                                <div className="intro-items">Developpeur Front-end</div>
                                <div className="intro-items">UI&UX</div>
                                <div className="intro-items">Broding</div>
                            </div>
                        </div>
                        <p className="intro-desc">Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Dicta, necessitatibus. Saepe accusantium, repellat obcaecati totam facilis
                          quo accusamus distinctio explicabo excepturi cum eaque aliquam quae.
                        </p>
                        <div class="intro-container-btn">
                            <button class="intro-btn">Download cv</button>
                            <button class="intro-btn">Hire me</button>
                        </div>
                    </div> 
                </div>

                <div className="intro-right">
                    <div className="polygone"></div>   
                    <img src={image} alt="" className="intro-img" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Intro