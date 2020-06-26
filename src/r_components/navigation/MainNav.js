import React from 'react';
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'
import styled from 'styled-components'

const MyNavbar = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
`

class MainNav extends React.Component{
    constructor(){
        super()
    }

    state = {
        displayMobileNav: false
    }
    
    toggleMobileNavbar = () => {
        this.setState(prevState => {
            return {displayMobileNav : !prevState.displayMobileNav}
        })
    }

    render(){
        return(
          <div class="">
            <DesktopNav toggleMobileNavbar = { this.toggleMobileNavbar }/>
            <MobileNav displayMobileNav = {this.state.displayMobileNav} />
          </div>
        )
    }

}
export default MainNav;