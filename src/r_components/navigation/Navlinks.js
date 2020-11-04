import React from 'react';

class Navlinks extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
            <ul className = "nav-links">
                <li>
                    <a href="/" className="link">Home</a>
                </li>
                <li>
                    <a href="/Eventos" className="link">Eventos</a>
                </li>
                <li>
                    <a href="/Nosotros" className="link">Nosotros</a>
                </li>
                <li>
                    <a href="/Mentoría" className="link">Mentoría</a>
                </li>
                <li>
                    <a href="https://saledmty.myshopify.com/" className="link">Tienda</a>
                </li>
            </ul>
        </div>
        )
    }

}
export default Navlinks;