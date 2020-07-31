import React from "react";
import { connect } from "react-redux";

const JokeRender = props => {
    console.log(props)
    return(
        <>
      {props.error ? (<div className="error"> {props.error}</div>) : (
    <div>
        <h3>{props.data.joke}</h3>
    </div>
    )} 
        </>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return{
        data: state.data,
        error: state.error
    }
}

export default connect (mapStateToProps, {})(JokeRender)