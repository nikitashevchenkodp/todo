import React from "react";

import './header.css'

const Header = ({todo, done}) => {
    return(
        <div className="header d-flex">
            <h1>New Todo App</h1>
            <span>{todo} more to do, {done} done</span>
        </div>
    )
}

export default Header