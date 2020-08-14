import React from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";

const JokeForm = props => {
    
    const handleGetData = e => {
        e.preventDefault();
            props.getData();
    };
    console.log(props)
    return(
        
        <>
        {props.isFetchingData ? (<div>Joke Loading!</div>) : (<button onClick={handleGetData}> New Chuck Fact! </button>)}
        </>
        )
    }

    const mapStateToProps = state => {
        console.log(state)
        return {
            data: state.data,
            isFetchingData: state.isFetchingData
        }
    }
    export default connect (mapStateToProps, { getData })(JokeForm)