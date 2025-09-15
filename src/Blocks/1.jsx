import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="background">
        <input id="switch" type="checkbox" />
        <div className="app">
          <div className="n1">
            <div className="Circle-eclipse">
              <nav className="n" />
              <div className="circleE" />
              <label className="label" htmlFor="switch">
                <span className="light">light</span>
                <span>dark</span>
              </label>
            </div>
            <div className="title">Eclipse</div>
            <div className="Explainer">Your Somewhat of a weather app</div>
            <Link to="/weather">
            <button type="button" className="btn">
              <strong className="strong">Enter</strong>
              <div id="container-stars">
                <div id="stars" />
              </div>
              <div id="glow">
                <div className="circle" />
                <div className="circle" />
              </div>
            </button>
            </Link>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .background {
    content: "";
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(
      circle,
      rgb(133, 133, 133) 10%,
      transparent 10%
    );
    background-size: 30px 30px;
  }
  .n {
    display: flex;
    justify-content: space-around;
    padding: 60px 0 0 0;
    padding-left: 20px;
    padding-right: 20px;
        display: flex;
    align-items: center;
    align-content: center;
    width: 50vh;
  }

  .circleE {
    position: relative;
    border-radius: 100%;
    width: 8rem;
    height: 8rem;
    background: linear-gradient(40deg, #ff0080, #ff8c00 70%);
    margin: auto;
  }
  .circleE::before {
    content: "";
    position: absolute;
    border-radius: 50%;
    top: 0;
    right: 0;
    width: 6rem;
    height: 6rem;
    z-index: 1;
    background: var(--bg);
    transform: scale(0);
    transform-origin: top right;
    transition: 450ms;
  }

  .label {
    width: 40%;
    margin: 20px 30px;
    padding: 15px 35px;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 50px;
    position: relative;
    cursor: pointer;

    font-size: 1.1rem;
    font-weight: bolder;
    color: var(--dark-col);
    display: flex;
    gap: 2rem;
    justify-content: space-between;
    display: flex;
    margin: auto;
    margin-top: 40px;
  }

  .label::before {
    content: "";
    position: absolute;
    width: 50%;
    inset: 0;
    border-radius: inherit;
    display: block;
    z-index: -1;
    background-color: #fff;
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.15);
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.15);
    -webkit-transition: -webkit-transform 0.3s
      cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transition: -webkit-transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transition:
      transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94),
      -webkit-transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  [type="checkbox"] {
    appearance: none;
  }

  [type="checkbox"]:checked + .app label span.light {
    color: var(--light-col);
  }

  [type="checkbox"]:checked + .app label::before {
    transform: translateX(100%);
  }

  [type="checkbox"]:checked + .app::before {
    box-shadow: 0px 0px 0 150px var(--dark-col);
    transition: 600ms ease-out;

    transform: scale(2);
  }
  /* Circle */
  [type="checkbox"]:checked + .app .circleE::before {
    transform: scale(1); 
    background: var(--dark-col);
  }

  [type="checkbox"]:checked + .app .circleE {
    background: linear-gradient(40deg, #8983f7, #a3dafb 70%);
  }

  .app {
    --light-col: #e8e8e8;
    --dark-col: #26242e;
    top: 0;
    position: relative;
    left: 0;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family:
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      "Open Sans",
      "Helvetica Neue",
      sans-serif;
    font-size: large;
    user-select: none;
    color: #ffffff;
    transition: 1.3s ease-out;

    font-weight: 700;
  }
  .app::before {
    content: "";
    width: 100vh;
    height: 100vh;
    border-radius: 1000vh;
    background: #26242e;
    position: absolute;
    top: calc(50% - (var(--dimension) / 2));
    left: calc(50% - (var(--dimension)) / 2);
    display: block;
    box-shadow: 0px 0px 0 0px var(--dark-col);
    z-index: -1;
    transform: scale(0.002);
    transition: 600ms ease-out;
  }

  .n1 {
    text-align: center;
    background-color: #6a6a702c;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px;
    border-radius: 60px;
  }

  .title {
    font-size: 3rem;
  }

  .Explainer {
    margin: 25px;
    margin-bottom: 30px;
  }

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 13rem;
    overflow: hidden;
    height: 3rem;
    background-size: 300% 300%;
    cursor: pointer;
    backdrop-filter: blur(1rem);
    border-radius: 5rem;
    transition: 0.5s;
    margin-top: 2px;
    animation: gradient_301 5s ease infinite;
    border: double 4px transparent;
    background-image: linear-gradient(#212121, #212121),
      linear-gradient(
        137.48deg,
        #ffdb3b 10%,
        #fe53bb 45%,
        #8f51ea 67%,
        #0044ff 87%
      );
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  #container-stars {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    overflow: hidden;
    transition: 0.5s;
    backdrop-filter: blur(1rem);
    border-radius: 5rem;
  }

  .strong {
    z-index: 2;
    font-family: "Avalors Personal Use";
    font-size: 12px;
    letter-spacing: 5px;
    color: #ffffff;
    text-shadow: 0 0 4px white;
  }

  #glow {
    position: absolute;
    display: flex;
    width: 12rem;
  }

  .circle {
    width: 100%;
    height: 30px;
    filter: blur(2rem);
    animation: pulse_3011 4s infinite;
    z-index: -1;
  }

  .circle:nth-of-type(1) {
    background: rgba(254, 83, 186, 0.636);
  }

  .circle:nth-of-type(2) {
    background: rgba(142, 81, 234, 0.704);
  }

  .btn:hover #container-stars {
    z-index: 1;
    background-color: #212121;
  }

  .btn:hover {
    transform: scale(1.1);
  }

  .btn:active {
    border: double 4px #fe53bb;
    background-origin: border-box;
    background-clip: content-box, border-box;
    animation: none;
  }

  .btn:active .circle {
    background: #fe53bb;
  }

  #stars {
    position: relative;
    background: transparent;
    width: 200rem;
    height: 200rem;
  }

  #stars::after {
    content: "";
    position: absolute;
    top: -10rem;
    left: -100rem;
    width: 100%;
    height: 100%;
    animation: animStarRotate 90s linear infinite;
  }

  #stars::after {
    background-image: radial-gradient(#ffffff 1px, transparent 1%);
    background-size: 50px 50px;
  }

  #stars::before {
    content: "";
    position: absolute;
    top: 0;
    left: -50%;
    width: 170%;
    height: 500%;
    animation: animStar 60s linear infinite;
  }

  #stars::before {
    background-image: radial-gradient(#ffffff 1px, transparent 1%);
    background-size: 50px 50%;
    opacity: 0.5;
  }

  @keyframes animStar {
    from {
      transform: translateY(0);
    }

    to {
      transform: translateY(-135rem);
    }
  }

  @keyframes animStarRotate {
    from {
      transform: rotate(360deg);
    }

    to {
      transform: rotate(0);
    }
  }

  @keyframes gradient_301 {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes pulse_3011 {
    0% {
      transform: scale(0.75);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
    }

    100% {
      transform: scale(0.75);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
  }

  .app,
  .app .title,
  .app .Explainer,
  .app .label,
  .app  {
    color: black;

    transition: color 1s ease-out;
  }
  .app .title
  {

    font-size: 4rem;
    background: linear-gradient(90deg, #f0298c, #ff8c00);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text; 
      transition: color 1s ease-out;

  }


  [type="checkbox"]:checked + .app,
  [type="checkbox"]:checked + .app .title,
  [type="checkbox"]:checked + .app .Explainer,
  [type="checkbox"]:checked + .app .label,
  [type="checkbox"]:checked + .app {
    color: var(--light-col);
  }
  [type="checkbox"]:checked + .app .title
  {
    background: linear-gradient(90deg, #f35eda, #210fc5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text; 
  }`;

export default Card;
