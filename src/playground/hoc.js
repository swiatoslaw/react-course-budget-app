import React from "react";
import ReactDOM from "react-dom";

const Info = props => (
    <>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </>
);

const withAdminWarning = WrappedComponent => {
    return props => (
        <>
            {props.isAdmin && <p>This is private info. Please don't share!</p>}
            <WrappedComponent {...props}/>
        </>
    );
};

const requireAuthentication = WrappedComponent => {
    return props => (
        <>
            {!props.isAuthenticated && <p>Not authenticated!</p>}
            <WrappedComponent {...props}/>
        </>
    );
};

// const AdminInfo = withAdminWarning(Info);
const AdminInfo = requireAuthentication(Info);

// ReactDOM.render(<Info info="There are the details"/>, document.getElementById("app"));
// ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details"/>, document.getElementById("app"));
ReactDOM.render(<AdminInfo isAuthenticated={false} info="There are the details"/>, document.getElementById("app"));