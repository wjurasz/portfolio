import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects-section">
      <h1>My Projects</h1>

      {/* DODAJ TUTAJ */}
      <div className="project-grid">

        {/* === HOTEL APP === */}
        <a
          href="https://github.com/wjurasz/HotelApp"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          <div className="project-card">
            <img
              src="/Icons/front hotelapi.png"
              alt="Hotel App"
              className="project-image"
            />
            <div className="project-description">
              <h3>HotelApp</h3>
              <p>
                Hotel booking app with search, filters, and smooth UX. <br />
                Backend in C# (REST API), frontend in React.js.
              </p>
            </div>
          </div>
        </a>

        {/* === TICTACTOE === */}
        <a
          href="https://github.com/wjurasz/TicTacToe"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          <div className="project-card">
            <img
              src="/Icons/ttt.png"
              alt="TicTacToe"
              className="project-image"
            />
            <div className="project-description">
              <h3>TicTacToe</h3>
              <p>
                A simple Tic Tac Toe game built in Python using the Pygame library. <br />
                Includes a graphical interface, player vs player mode, and visual win detection.
              </p>
            </div>
          </div>
        </a>

         {/* === BLAZORAPP === */}
        <a
          href="https://github.com/wjurasz/ChatAI"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          <div className="project-card">
            <img
              src="/Icons/chatAI.png"
              alt="TicTacToe"
              className="project-image"
            />
            <div className="project-description">
              <h3>ChatAI</h3>
              <p>
                Blazor app with user login, real-time weather search via API, and an AI chat powered by the LLaMA language model.
              </p>
            </div>
          </div>
        </a>


          {/* === DiningPhilosophers === */}
        <a
          href="https://github.com/wjurasz/Dining_philosophers_problem"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          <div className="project-card">
            <img
              src="/Icons/ppf1.png"
              alt="PPF"
              className="project-image"
            />
            <div className="project-description">
              <h3>5 Dining philosophers problem</h3>
              <p>
                A GUI-based simulation of the Dining Philosophers problem, featuring three different algorithms for managing concurrency and resource sharing.
              </p>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Projects;
