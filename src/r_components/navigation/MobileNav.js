import React from 'react';
import styled from 'styled-components'
import Navlinks from './Navlinks'

const MyMobileNavbar = styled.nav`
  
    width: 30vw;
    background:rgb(120,15,15);
    height:100%;
    z-index: 1;
    transition: transform 1s;
    position:fixed;
    margin: 0 ;
    @media screen and (min-width: 768px){
      transform: translateX(-100%);
    }
    transform: translateX( ${ props => props.displayMobileNav ? ("0%") : ("-100%") });

  .nav-links{
    z-index: 2;
    align-items:center;
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    position:relative;
    margin-top: 65%;
  }
  .link{
    margin: auto auto;
    font-size: 13px;
    width: 100% ;
    font-weight: bolder;
  }
  .link:hover{
    background-color: rgba(0,0,0,0.2);
    color: white;
  }
  @media screen and (min-width: 550px){
    .nav-links{
      margin-top: 38%;
    }
    .link{
      font-size: 15px;
    }
  }
`

const MobileNav = props => {
  return(
      <MyMobileNavbar displayMobileNav = {props.displayMobileNav}>
        <Navlinks/>
      </MyMobileNavbar>
  )
}
export default MobileNav;