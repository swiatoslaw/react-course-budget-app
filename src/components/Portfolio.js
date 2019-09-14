import React from "react";
import {NavLink} from "react-router-dom";

const Links = () => {
    return (
        <span>
            <NavLink to="/portfolio/1" activeClassName="is-active">Item One</NavLink>
            <NavLink to="/portfolio/2" activeClassName="is-active">Item Two</NavLink>
        </span>
    );
};

const PortfolioDefault = () => {
    return (
        <div>
            <h1>My Work</h1>
            <p>Checkout the following things I've done:</p>
            <Links/>
        </div>
    );
};

const PortfolioItem = props => {
    return (
        <div>
            <h1>A Thing I've Done</h1>
            <p>This page of for the item with id of {props.item}</p>
            <Links/>
        </div>
    );
};

const Portfolio = props => {
    const id = props.match.params.id;

    if (id) {
        return <PortfolioItem item={id}/>;
    }

    return <PortfolioDefault/>;
};

export default Portfolio;