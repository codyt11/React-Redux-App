import React from 'react';
import './App.css';
import JokeForm from "./components/JokeForm";
import JokeRender from "./components/JokeRender";
import { JokeReducer as reducer } from "./reducers/jokeReducer";
import  {createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";


const store = createStore(reducer, applyMiddleware(thunk))
function App() {
  console.log(store)
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <h1> Chuck Norris fun facts, <br/> because we don't joke about Chuck!</h1>
        <JokeForm/>
        <JokeRender/>
      </header>
    </div>
    </Provider>
  );
}

export default App;