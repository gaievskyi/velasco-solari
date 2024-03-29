import ReactPlayer from "react-player"
import { Link } from "react-router-dom"

import projectImageOne from "../../assets/project-images/01.jpg"
import projectImageTwo from "../../assets/project-images/02.jpg"
import projectImageThree from "../../assets/project-images/03.jpg"
import projectImageFour from "../../assets/project-images/04.jpg"
import projectImageFive from "../../assets/project-images/05.jpg"
import projectImageSix from "../../assets/project-images/06.jpg"
import projectImageSeven from "../../assets/project-images/07.jpg"
import projectImageEight from "../../assets/project-images/08.jpg"

import "./sample-project.css"

export const SampleProject = () => {
  return (
    <div className="sameple-project-page">
      <div className="project-info">
        <div className="project-index">
          <p>02</p>
        </div>
        <div className="project-name">
          <p>Neon Galactic Chronicles</p>
        </div>
        <div className="project-duration">
          <p>00&apos; 43&apos;&apos; / 03&apos; 17&apos;&apos;</p>
        </div>
        <div className="project-description">
          <p>
            Music video for Eva Sola&apos;s new single called Puñal. Tells the
            story of a broken relationship that falls into the abyss through an
            intimate and violent choreography.
          </p>
        </div>
        <div className="project-year">
          <p>2023</p>
        </div>
      </div>

      <div className="whitespace-35vh"></div>

      <div className="project-preview">
        <div className="project-preview-col d-only"></div>
        <div className="project-preview-col">
          <div className="work-video">
            <div className="work-video-wrapper">
              <ReactPlayer
                url={`https://vimeo.com/509236733`}
                controls={false}
                autoPlay={true}
                loop={true}
                playing
                muted
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="sample-images">
        <div className="s-row">
          <div className="img">
            <img src={projectImageSeven} alt="" />
          </div>
          <div className="img">
            <img src={projectImageEight} alt="" />
          </div>
        </div>
        <div className="s-row">
          <div className="img">
            <img src={projectImageOne} alt="" />
          </div>
        </div>
        <div className="s-row">
          <div className="img">
            <img src={projectImageTwo} alt="" />
          </div>
          <div className="img">
            <img src={projectImageThree} alt="" />
          </div>
        </div>
        <div className="s-row">
          <div className="img">
            <img src={projectImageFour} alt="" />
          </div>
        </div>
        <div className="s-row">
          <div className="img">
            <img src={projectImageFive} alt="" />
          </div>
          <div className="img">
            <img src={projectImageSix} alt="" />
          </div>
        </div>
      </div>

      <div className="project-nav">
        <div className="link">
          <Link to="/">prev</Link>
        </div>
        <div className="link">
          <Link to="/">next</Link>
        </div>
      </div>
    </div>
  )
}
