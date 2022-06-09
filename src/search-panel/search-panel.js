import React, { Component } from "react";

const SerachPanel = (props) => {

    const {filter, onChangeTerm} = props

    return(
        <div className="d-flex">
            <input 
                onChange = {onChangeTerm}
                className="form-control search-input"
                type="text"
                placeholder ="type to search..">

            </input>
            <button
                onClick={() => filter('ALL') }
                type="button" 
                className="btn btn-outline-primary">
                    All
            </button>
            <button 
                onClick={() => filter('ACTIVE') }
                type="button" 
                className="btn btn-outline-primary">
                    Active
            </button>
            <button 
                onClick={() => filter('DONE') }
                type="button" 
                className="btn btn-outline-primary">
                    Done
            </button>
        </div>
    )

}

export default SerachPanel