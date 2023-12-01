import React from "react";
import styled from "styled-components";
import avatar from '../../img/avatar.png';

function Navigation(){
    return (
        <NavStyled> 
            <div classname="user-con"> 
                <img src={avatar} alt=""/>
                <div className="text">
                    <h2> Eddy </h2>
                    <p> Your Money </p>
                </div>
            </div>
            <ul className="menu-items"> 

            </ul>
        </NavStyled>
    )
}

const NavStyled = Styled.Nav`
    
`;

export default Navigation

