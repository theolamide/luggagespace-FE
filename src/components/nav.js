import React from 'react';
import { Link, withRouter } from "react-router-dom";

const Nav = (props) => {

    const Logout = () => {
        localStorage.clear()
        props.history.push("/login")
    }

    return (
        <NavBox>
            {/* <H1Style>How-To</H1Style> */}
            <img style={imgStyle} src={Logo} alt="Logo" />

            <NavDiv>
                <Link to="/dashboard">howFeed</Link>
                <Link to="/searchform">Search</Link>
                {/* Conditional Rendering of Login and Logout buttons */}
                {localStorage.getItem('token') ?
                    (<button onClick={Logout} > Logout </button>) :
                    null
                }
            </NavDiv>
        </NavBox>
    )
}

export default withRouter(Nav);