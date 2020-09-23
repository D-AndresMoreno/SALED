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
                    <a href="https://www.shopify.com.mx/prueba-gratis?&term=shopify&Network=Search&SiteTarget=&mt=e&adid=269076016233&adpos=&CampaignId=1402161536&branded_enterprise=1&BOID=brand&gclid=CjwKCAjwwab7BRBAEiwAapqpTAfFP0PuKGrdmC0q3E0gw7EmxbR5Mp4QZYz1lYxsbCvCSaAqMmwT-BoCyTwQAvD_BwE" className="link">Tienda</a>
                </li>
            </ul>
        </div>
        )
    }

}
export default Navlinks;