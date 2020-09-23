import React from 'react';
import styled from 'styled-components'
import Navlinks from './Navlinks'
import FotoSaled from  '../../images/SALEDlogo.png'


const MyDesktopNavbar = styled.nav`


  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  background: rgb(120, 15, 15);
  color: white;
  height:10vh;
  z-index: 3000;
  top: 0;
  @media screen and (max-width: 768px){
    position: fixed;
  }

  .table{
    display: table;
	  margin: 0 auto;
  }
  .nav-button{
    border: none;      
    color: white; 
    font-weight: bold;   
    padding: 8px 15px;      
    text-align: center;     
    font-size: 16px;      
    margin: 4px 2px;          
    text-transform: uppercase;     
    background: transparent;       
  }
  .nav-button:hover {
      background: rgba(0,0,0,0.1);
  }
  .nav-links{
    display:inline;
    width 100%;
    @media screen and (max-width: 768px){
      display:none;
    }
  }

  .link{
    margin: 0px 12px;
    font-size: 2.5vh;
    text-decoration:none;
    font-weight: bolder;
    @media screen and (min-width: 740px) and (max-width: 850px){
      font-size: 2.2vh;
    }
  }


`

const MyMobileNavButton = styled.button`
  background: transparent;
  height: 6vh;
  border: none;
  display:none;
  margin: 0px 11.5%;

  @media screen and (max-width: 768px){
    display:block;
  }
  @media screen and (max-width: 500px){
    margin: 0px 11%;
  }
`

const DesktopNav = props => {
    return(
      <MyDesktopNavbar>
        <MyMobileNavButton onClick = {props.toggleMobileNavbar}>
          <button className="nav-button">
            Menú
          </button>
        </MyMobileNavButton> 
        <img className = "logoNav"src = {FotoSaled}  alt = "" height = "30" style = {{marginLeft: 15, position: "absolute"}}></img>
        <div className="table">
          
          <Navlinks/>
        </div> 

      </MyDesktopNavbar>
    )
}
export default DesktopNav;