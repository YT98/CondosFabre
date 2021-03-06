import React from 'react';
import ReactDOM from 'react-dom';
import '../../scss/Quartier/main.scss';

import QuartierMap from './QuartierMap';
import Footer from '../../components/Footer';
import Plateau from './Features/Plateau';
import ParcLaFontaine from './Features/ParcLaFontaine';
import RestaurantsCommerces from './Features/RestaurantsCommerces';
import Transport from './Features/Transport';
import ParcMontRoyal from './Features/ParcMontRoyal';
import { Spring } from 'react-spring';

export default class QuartierContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            featureCounter: 0,
            mapSlideIn: false,
            en: false
        }
        this.counter = this.counter.bind(this);
        this.handleArrowKeys = this.handleArrowKeys.bind(this);
    }
    
    componentWillMount() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    componentDidMount() {
        this.props.pushCurrentRoute(this.props.location.pathname);

        if (this.props.location.pathname.includes('/en')) {
            this.setState({en: true})
        } else {
            this.setState({en: false})
        }

        if (this.props.feature != 'plateau') {
            if (this.props.feature == 'parclafontaine') {
                this.setState({featureCounter: -1});
            } else if (this.props.feature == 'avenuemontroyal') {
                this.setState({featureCounter: -2});
            } else if (this.props.feature == 'parcmontroyal') {
                this.setState({featureCounter: -3});
            } else if (this.props.feature == 'transport') {
                this.setState({featureCounter: -4});
            }
        }
        this.setState({mapSlideIn: true});
        window.addEventListener('keydown', (event) => { this.handleArrowKeys(event) });
    }

    handleArrowKeys(e) {
        let key = e.key;
        if(key == 'ArrowLeft') {
            this.counter(1);
        } 
        if (key == 'ArrowRight') {
            this.counter(-1);
        }
    }

    counter(x) {
        if (this.state.featureCounter == -4) {
            if (x==1) {
                this.setState((state) => {
                    return { featureCounter: state.featureCounter + x}
                });
            }
        } else if (this.state.featureCounter == 0) {
            if (x==-1) {
                this.setState((state) => {
                    return { featureCounter: state.featureCounter + x}
                });
            }
        } else {
            this.setState((state) => {
                return { featureCounter: state.featureCounter + x}
            })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState != this.state) {
            if(this.state.featureCounter == 0) {
                this.props.togglePlateau();
            } else if (this.state.featureCounter == -1) {
                this.props.toggleParclafontaine();
            } else if (this.state.featureCounter == -2) {
                this.props.toggleMontRoyal();
            } else if (this.state.featureCounter == -3) {
                this.props.toggleParcMontRoyal();
            } else if (this.state.featureCounter == -4) {
                this.props.toggleTransport();
            }
        }
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', (event) => {this.handleArrowKeys(event)});
    }

    render() {

        return (
            <div class="Quartier">
                <div class="map-animation-container">

                    <div class="feature-container">
                        
                        <Plateau featureCounter={this.state.featureCounter} en={this.state.en} />
                        <ParcLaFontaine featureCounter={this.state.featureCounter} en={this.state.en} />
                        <RestaurantsCommerces featureCounter={this.state.featureCounter} en={this.state.en} />
                        <ParcMontRoyal featureCounter={this.state.featureCounter} en={this.state.en} />
                        <Transport featureCounter={this.state.featureCounter} en={this.state.en} />

                        <div class="controls">
                            <div class="button-container">
                                <button onClick={() => this.counter(1)}
                                    style={{
                                        opacity: this.state.featureCounter == 0 ? '0.2' : '1'
                                    }}
                                > <i class="fas fa-chevron-left fa-3x"></i> </button>
                                    
                                <button onClick={() => this.counter(-1)}
                                    style={{
                                        opacity: this.state.featureCounter == -4 ? '0.2' : '1'
                                    }}
                                > <i class="fas fa-chevron-right fa-3x"></i> </button>
                            </div>
                        </div>
                    </div>


                    <Spring
                        delay={500}
                        config={{
                            tension: 280,
                            friction: 60
                        }}
                        from={{
                            shift: 120
                        }} 
                        to={{
                            shift: this.state.mapSlideIn ? 0 : 120
                        }}
                    >
                        {springProps => (
                            <div 
                                class="map-container"
                                style={{
                                    transform: `translateX(${springProps.shift}%)`
                                }}
                            >
                                <QuartierMap
                                    center={this.props.center}
                                    zoom={this.props.zoom}
                                />
                            </div>
                        )}
                    </Spring>

                </div>

                <div class="footer-container">
                    {/* <Footer /> */}
                </div>
            </div>
        )
    }
}