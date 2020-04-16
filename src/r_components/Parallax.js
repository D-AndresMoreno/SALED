import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

class Parallax extends React.Component{

    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.parallax');
            var instances = M.Parallax.init(elems, {});
        });
    }
    
    render(){
        return(
            <div class="parallax-container">
                <div className="parallax"><img src="https://www.elsetge.cat/myimg/f/0-5243_pubg-wallpaper-hd.png" alt="" /></div>
            </div>
        )
    }
    
}

export default Parallax
