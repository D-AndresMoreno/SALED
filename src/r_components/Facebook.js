import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'


class Facebook extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className="row">
                <div class="fb-page" data-href="https://www.facebook.com/SALEDMty/" data-tabs="timeline" data-width="" data-height="315" data-small-header="true" data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="true"><blockquote cite="https://www.facebook.com/SALEDMty/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/facebook">Facebook</a></blockquote></div>
            </div>
        )
    }
    
}

export default Facebook