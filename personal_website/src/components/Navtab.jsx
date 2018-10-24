import React from 'react'
import { NavLink } from 'react-router-dom'

const Navtab = props => {
    var activeStyle = {
        color:'green',
        fontWeight:'bold'
    };

    var navStyle = {
        margin: "10px"
    };

    return (
        <NavLink style={navStyle} activeStyle={activeStyle} to={props.to}>{props.label}</NavLink>
    )
}

export default Navtab;