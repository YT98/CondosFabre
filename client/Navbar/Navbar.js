import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import '../scss/Navbar/base.scss';
import ReactTooltip from 'react-tooltip';

export default class Navbar extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }

    render() {

        let NavbarClass = this.props.ypos > 75 ? "Navbar active" : "Navbar";


        return (
            // <div className={NavbarClass}>
            //     <div class="logo-container">
            //         <img src="/images/logo.png"/>
            //     </div>

            //     <div class="links-container">
            //         <ul>
            //             <li className={this.props.route == '/' ? "active" : ""}><Link to="/">ACCUEIL</Link></li>
            //             <li className={this.props.route == '/unites' ? "active" : ""}>
            //                 <Link to="/unites">UNITES</Link>
            //                 <div class="unites-dropdown"></div>
            //             </li>
                        

            //             <li data-tip data-for="coming-soon" className="coming-soon"><Link to="/projet"> PROJET</Link></li>
            //             <li data-tip data-for="coming-soon" className="coming-soon"><Link to="/quartier">QUARTIER</Link></li>
            //             <ReactTooltip id="coming-soon" type="info" place="top">
            //                 <p>Coming Soon !</p>
            //             </ReactTooltip>

            //             <li class="contact-button" onClick={this.props.openContactOverlay}> <a href="#"> CONTACTEZ-NOUS </a> </li>
            //         </ul>
            //     </div>
            // </div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">

                <a class="navbar-brand" href="#">
                    <img src="/images/logo.png"/>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
            
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li className={this.props.route == '/' ? "nav-item active" : "nav-item"}>
                            <a class="nav-link" href="#">HOME</a>
                        </li>
                        <li className={this.props.route == '/unites' ? "nav-item dropdown active" : "nav-item dropdown"}>
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                UNITES
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#">PROJET</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#">QUARTIER</a>
                        </li>
                    </ul>
                    <span class="contact-button" onClick={this.props.openContactOverlay}>
                        <a href="#"> CONTACTEZ-NOUS </a>
                    </span>
                </div>

            </nav>
        )
    }
}