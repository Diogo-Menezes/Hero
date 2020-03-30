<p align="center"><img src="/frontend/src/assets/logo.svg" width="150px" alt="Be the Hero"/></p>
<h4 align="center">Be the Hero</h4>
<p align="center">
  <img alt="Github JavaScript" src="https://img.shields.io/badge/-JavaScript-green"/>
  <img alt="Github Stack Node.Js" src="https://img.shields.io/badge/-Node.Js-blue"/>
  <img alt="Github Stack React" src="https://img.shields.io/badge/-React-blue"/>
  <img alt="Github Stack React Native" src="https://img.shields.io/badge/-React%20Native-blue"/>
  <img alt="Github Version Count" src="https://img.shields.io/badge/Version-1-brightgreen"/>
</p>

<p align="center">
  <a href="#-tech">Tech</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#file_folder-backend">Backend</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-frontend">Frontend</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#iphone-mobile">Mobile</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-testing">Testing</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>

<p><br></p>
<img src="/screenshots/mock-be-the-hero.jpg"/>
<p><br></p>

## 🚜 Tech

This project was developed with the following techs:

- [Node.js](https://nodejs.org/en/) [Backend]
- [React](https://reactjs.org) [Frontend]
- [React Native](https://facebook.github.io/react-native/) [Mobile]
- [Expo](https://expo.io/)

## 📃 Project

Be The Hero is a project that aims to request help from the people for NGO (Non Governmental Organizations) cases.
The NGO creates an account where then she can open cases and the people that use the app then have access to the cases listed be each NGO.

## 🔖 Layout

The layout design, logo and images are credit to <a href="https://github.com/Rocketseat" target="_blank">Rocketseat.</a>

## :file_folder: Backend

The backend serves as an <strong>RESTful API</strong> that delivers the content (in JSON format) to all platforms <strong>(Web & Mobile and can be consumed by other webservices).</strong>
Also the backend contacts with the SQLite database to store all the incidents and NGO information. 
The access to the database info is done through calls to the API.
 

## :computer: Frontend
<p>Built with React.Js and connesct with the backend consuming the RESTful API.</p>

In the frontend we have the webpage that allows the following actions:
<ul>
  <li>Register</li>
  <li>Login</li>
  <li>Register new incident</li>
  <li>Delete Incident</li>
  <li>List NGO Incidents</li>
</ul>

<strong>All this actions interact/communicate with our server that then makes the verification and validation of the information sent. And allows the information to be added to the SQLite database.</strong>


#### Frontend Screenshots
<p>
  <img src="/screenshots/mock-web-be-the-hero1.jpg" width="400px" alt="Be the hero Web Login"/>
  <img src="/screenshots/mock-web-be-the-hero2.jpg" width="400px" alt="Be the hero Web new case"/>  
</p>

## :iphone: Mobile
The mobile version allows the mobile users to watch all cases (delivered by connecting with the server).
In each case the user can access a detail screen to have more information on the case and contact the NGO through Whatsapp or Email.

#### Mobile Screenshots
<p>
  <img src="/screenshots/be-the-hero-mobile-splash.png" width="250px" alt="Be the hero mobile SplashScreen"/>
  <img src="/screenshots/be-the-hero-mobile-1.png" width="250px" alt="Be the hero mobile1"/>
</p>


## ✅ Testing
Also in this project we included some unit and integration tests (<a href="/backend/tests">test folder</a>) for the backend using <a href="https://jestjs.io/">Jest</a>. We also made use of the library <a href="https://github.com/visionmedia/supertest">Supertest</a> to help test our API endpoints.
