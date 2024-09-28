import React from 'react'
import '../components/Skill.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'

const Skill = () => {
  return (
    <div class="info">
{/*      
      <p className='sentea'>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
      <p className='senteb'> Clean design patterns, and thoughtful interactions.</p>
      <p className='sentec'>And enjoy helping them work on their craft.</p>
<div class="row row-cols-1 row-cols-md-3 g-4" >
  <div class="col a">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">TECHNICAL SKILLS</h5>
        <br />
        <pre class="card-text">
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JAVASCRIPT</li>
  <li>BOOTSTRAP</li>
  <li>REACT.JS</li>
  <li>SQL</li>
  <li>WINDOWS</li>
  <li>MICROSOFT OFFICE</li>
  <li>CANVA</li>
  <li>ADOBE CREATIVE CLOUD</li>
</ul>

</pre>
      </div>
    </div>
  </div>
  <div class="col ">
    <div class="card">
      
      <div class="card-body">
      <h5 class="card-title">SOFT SKILLS </h5>
      <pre class="card-text"><ul>
        <li>	Time Management</li>
        <li>	Communication Skill</li>
        <li>Ability to Accept Challenges</li>
        <li>Problem solving</li>
        <li>Decision Making</li>
      </ul>


</pre>
        
      </div>
    </div>
  </div>
  
    
  <div class="col">
    <div class="card">
      
      <div class="card-body">
      <h5 class="card-title">INTRESTS </h5>
      <pre class="card-text">
<ul>
  <li>ART & CRAFT</li>
  <li>POSTER MAKING </li>
</ul>
</pre>
      </div>
    </div>
  </div>
</div> */}

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