import React from 'react'
import '../components/Skill.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'

const Skill = () => {
  return (
    <div class="info">
<div className="skills-container">
      <div className="cards-container">
        <div className="card">
        
          <h2>Hard Skills</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
            <li>REACT.JS</li>
            <li>SQL</li>
            <li>WINDOWS</li>
            <li>MICROSOFT OFFICE</li>
            <li>CANVA</li>
            <li>ADOBE CREATIVE CLOUD</li>
          </ul>
        </div>
        <div className="card">
          <h2>Soft Skills</h2>
          <ul>
            <li>COMMUNICATION SKILL </li>
            <li>TEAMWORK</li>
            <li>PROBLEM-SOLVING</li>
            <li>ADAPTABILITY</li>
            <li>TIME MANAGEMENT</li>
          </ul>
        </div>
        <div className="card">
          <h2>Interests</h2>

          <ul>
            <li>CODING</li>
            <li>ART & CRAFT</li>
            <li>TRAVELING</li>
            <li>POSTER-MAKING</li>
          </ul>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Skill