import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

class Instagram extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className="row">
                <iframe src="https://snapwidget.com/embed/816780" class="snapwidget-widget" allowtransparency="true" frameborder="0" scrolling="no" className="instagram"></iframe>
            </div>
        )
    }
    
}

export default Instagram