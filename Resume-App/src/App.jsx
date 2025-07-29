import { useState } from 'react'
import '../public/App.css'
import image from "../assets/image/Gautam.jpg"

function App() {

  return (
    <div>
      <h1>Gautam Gohil</h1>
      <img src="{image}"></img>
      <p>Email: <a href="#">gohilgautam2405@gmail.com</a></p>
      <p>Phone: <a href="#">9104826115</a></p>
      <p>Location: Varachha, Surat</p>
      <p>GitHub: <a href="https://github.com/gohilgautam">gohilgautam</a></p>
      <p>Linkedin: <a href="https://www.linkedin.com/in/gautam-gohil-397671366/">gautam-gohil</a></p>

      <h2>Profile</h2>
      <p>
        I'm a Full Stack Developer passionate about building scalable web applications and intuitive user experiences.
        With hands-on experience in both frontend and backend development, I bring complete solutions to life — from concept to deployment.
        I enjoy writing clean, efficient code, collaborating with teams, and staying up-to-date with the latest in tech.
      </p>

      <h2>Education</h2>
      <ul>
        <li><strong>Higher Secondary School Certificate</strong> (2019 – 2020)<br/>Jagadguru Shri Vallabhacharya Vidhyadham, Surat, India</li>
        <li><strong>Secondary School Certificate</strong> (2017 – 2018)<br/>Ramkrishna Vidhya Bhavan, Surat, India</li>
      </ul>

      <h2>Languages</h2>
      <p>English, Gujarati, Hindi</p>

      <h2>Skills</h2>
      <ul>
        <li><strong>Programming Languages:</strong> C, JavaScript</li>
        <li><strong>Databases:</strong> MongoDB</li>
        <li><strong>Version Control:</strong> Git, GitHub</li>
        <li><strong>Frameworks & Libraries:</strong> Node.js, Express.js</li>
        <li><strong>API & Integration:</strong> REST API (GET, POST, PUT, DELETE), JWT Auth</li>
        <li><strong>Other Technologies:</strong> HTML, CSS, Bootstrap, JQuery, MediaQuery, JavaScript</li>
      </ul>

    </div>
  )
}

export default App
