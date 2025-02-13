import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.gif';
import mock07 from '../assets/images/mock07.gif';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/Elirose202/Celular_Automata_Simulation_Adapter" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Elirose202/Celular_Automata_Simulation_Adapter" target="_blank" rel="noreferrer"><h2>Celular Automata Visualization - C, pthread, Java</h2></a>
                <p>The aim of this project was to show the advantages of parallel computing over serial computing. The project is meant to illustrate the spread of a virus, using the cellular automaton method. The method of the CA is used to describe the state of entities in the space over time visualization of the virus. The C programming language was used for this, with the Pthread library. The visualization shown here is written in java.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Elirose202/Data-Driven-Unity-Demo" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Elirose202/Data-Driven-Unity-Demo" target="_blank" rel="noreferrer"><h2>Data Driven Game Controller - C#, Unity 2D</h2></a>
                <p>This Game is a tech demo character controller technique. This technique involves coupling the UI to a data driven backend. This allows for in depth unit testing. The gif demonstrates this data - ui coupling. Notice how the console is representing the sprites in the game by using letters and characters. The underscores are represented by background sprites int he front-end, 'P' is represented by the player sprite, 'M' is represented by the monster sprite. This allows for very efficient scalable level buiding. The only manual level building that you need to do is type the appropriate characters in the code, and the sprites with be selected dynamically.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Elirose202/PizzaPunk" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Elirose202/PizzaPunk" target="_blank" rel="noreferrer"><h2>Pizza Punk - C#, Unity 2D</h2></a>
                <p>This is a top-down 2D game. It involves the player getting and delivering pizzas to customers, while fighting off pesky enemies. The style very much 80's noir, along with appropriate music!. Most of the sprites were edited and designed by me, excluding some background tiles. All animations were also done manually by creating different poses for each sprite, and looping them in a state machine. This was my first experience using a 3rd party untiy map builder called "Tiled"..</p>
            </div>
            <div className="project">
                <a href="https://github.com/Elirose202/OCTAD-Text-Adventure" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Elirose202/OCTAD-Text-Adventure" target="_blank" rel="noreferrer"><h2>Text Adventure - Unity 2D, Text interpreter</h2></a>
                <p>This game is was inspired by the older text based adventure games. Building this game allowed me to explore OOP concepts such as inheritance and polymorphism. The objective of the game is to find the appropriate ship parts to repair your crashed vessel on an alien planet. You will need to fight off monsters and preform some tasks for NPC's to accomplish this.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Elirose202/Gaze-Tracking-Research-Thesis-Software" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Elirose202/Gaze-Tracking-Research-Thesis-Software" target="_blank" rel="noreferrer"><h2>Head Tracking Research Thesis - C#, Unity 3D, Computer Vision</h2></a>
                <p>This was my 4th year thesis research project where I explored webcam head/gaze tracking and how it could be utilized as an accessible tool for video game input. The implementation was demonstrated by developing a Unity WebGL game named ”Drive-On” that relies on the movement of your head/eyes with no input from your hands. This game involved the user navigating a race-track by controlling a car with their head tilts. The foundation of this project involved developing a Javascript API to serve head tracking data to a server deployed by Node.js. This data was then queried by the Unity game aforementioned and formatted to usable controller code for the unity C# controller script.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Elirose202/Woofr" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Elirose202/Woofr" target="_blank" rel="noreferrer"><h2>Dog Walker App - Android, Firebase</h2></a>
                <p>This is an android application that allows dog owners to find local dog walkers and vice versa. An owner can request the service of a walker in their area, in situations where they cannot walk their dog themselves. A walker can make themselves available to be requested by a local owner. This app won us "Best 3rd year project" at the Recursion tech seminar.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Elirose202/Text-Minining-Monkey-Articles" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Elirose202/Text-Minining-Monkey-Articles" target="_blank" rel="noreferrer"><h2>Web Article Scraper - Python, Data Mining</h2></a>
                <p>This was a web scraping project that finds articles of a particular category, scrapes the content, and then builds a model of their most used phraseology.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Elirose202/Message_Broker_System" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Elirose202/Message_Broker_System" target="_blank" rel="noreferrer"><h2>Message Broker System - Python, RabbitMQ, Flask</h2></a>
                <p>This is a python project to simulate a client - server messaging system.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;