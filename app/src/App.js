import React from 'react';
import './App.css';
import JokeForm from "./components/JokeForm";
import JokeRender from "./components/JokeRender";
import { JokeReducer as reducer } from "./reducers/jokeReducer";
import  {createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import styled from "styled-components";
import texas from "./images/texas.jpg";


const Header = styled.div`
display: flex;
margin: 0 auto;
font-size: 2rem;
color: white;
text-shadow: 4px 4px 10px black;
`;


const Joke= styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 0 auto;
padding: 4rem 2rem; 
font-size: 1.5rem;
width: 50%;
background: white;
border: 1px solid black;
border-radius: 50px;
`;
const Body= styled.div`
display: flex;
flex-direction: column;
height: 100vh;
width: 100vw;
background-image: url(${texas});
background-repeat: no-repeat;
background-position: center;'
background-size: cover;
`;

const store = createStore(reducer, applyMiddleware(thunk))
function App() {
  console.log(store)
  return (
    
    <Provider store={store}>
     
    <Body>
      <Header>
        <h1> Chuck Norris fun facts, <br/> because we don't joke about Chuck!</h1>
      </Header>
      <Joke>
        <JokeForm/>
        <JokeRender/>
      </Joke>
      
    </Body>
    </Provider>
  );
}

export default App;