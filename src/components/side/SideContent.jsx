import React from 'react'
import sideImg from '../../../src/images/baki.jpg'
import { side, socialIcon } from '../../data/data.js'
import { FiDownloadCloud } from 'react-icons/fi'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'

const Progress = ({ done, title, back }) => {
  return (
    <div className="progress">
      <div
        className={`progress_done  ${back}`}
        style={{ opacity: 1, width: `${done}%` }}
      ></div>
      <div className="progress_num">
        <h4>{done}.</h4>
      </div>
      <div className="progress_title">
        <h3>{title}.</h3>
      </div>
    </div>
  )
}

export const SideContent = () => {
  return (
    <>
      <section className="sideContent">
        <div className="sideContent_top">
          <div className="sideContent_top_img">
            <img src={sideImg} alt="baki_resim" width="100%" />
            <div className="sideContent_top_img_name">
              <h3>Baki AKTÜRK</h3>
              <span>React Front-End Developer</span>
            </div>
          </div>
          <div className="sideContent_top_social">
            {socialIcon.map((icons) => (
              <div className={icons.class}>
                <span>{icons.icon}</span>
              </div>
            ))}
          </div>
          <div className="sideContent_bottom">
            <div className="sideContent_bottom_skill">
              {side.map((item) => (
                <div className="sideContent_skill_box">
                  <Progress
                    title={item.text}
                    done={item.num}
                    back={item.class}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="sideContent_bottom_buttonGroup">
            <button className="sm_button">
              <span>
                <FiDownloadCloud className="button_bicon" />
              </span>
            </button>
            <button className="button">
              <RiMoneyDollarCircleLine className="button_bicon" />
              <span>Hire me</span>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
