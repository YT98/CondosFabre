import React from 'react';
import ReactDOM from 'react-dom';
import '../../scss/Quartier/main.scss';

import Video from './Video';
import QuartierMap from './QuartierMap';
import * as mapData from './mapData';
import Footer from '../../components/Footer';

export default class QuartierContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            featureCounter: 0
        }
        this.counter = this.counter.bind(this);
    }

    componentDidMount() {
        this.props.pushCurrentRoute(this.props.location.pathname);
    }

    counter(x) {
        if (this.state.featureCounter == -2) {
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
                this.props.togglePlateau()
            } else if (this.state.featureCounter == -1) {
                this.props.toggleRachel()
            } else if (this.state.featureCounter == -2) {
                this.props.toggleParclafontaine()
            }
        }
    }

    render() {

        return (
            <div class="Quartier">
                <div class="map-animation-container">

                    <div class="feature-container">

                        <div class="feature lafontaine" style={{
                            left: `${this.state.featureCounter * 100}%`,
                            opacity: this.state.featureCounter == 0 ? 1 : 0
                        }}>
                            <div class="title">
                                <h1 class="background-title"> Le Plateau </h1>
                                <h1 class="foreground-title"> Le Plateau </h1>
                            </div>
                            <p> L’architecture du Plateau Mont-Royal est unique en son genre. Sans doute l’un des quartiers les plus charmants de Montréal avec ses rues bordées d’arbres et ses façades colorées. S’y promener est un réel plaisir en passant d’une ruelle verte à une rue plus typique dégageant toute l’originalité du quartier et inspirant le bonheur de vivre. </p>
                        </div>

                        <div class="feature lafontaine" style={{
                            left: `${(this.state.featureCounter+1) * 100}%`,
                            opacity: this.state.featureCounter == -1 ? 1 : 0
                        }}>
                            <div class="title">
                                <h1 class="background-title"> Rue Rachel </h1>
                                <h1 class="foreground-title"> Rue Rachel </h1>
                            </div>
                        </div>

                        <div class="feature lafontaine" style={{
                            left: `${(this.state.featureCounter+2) * 100}%`,
                            opacity: this.state.featureCounter == -2 ? 1 : 0
                        }}>
                            <div class="title">
                                <h1 class="background-title"> Parc Lafontaine </h1>
                                <h1 class="foreground-title"> Parc Lafontaine </h1>
                            </div>
                        </div>

                        <div class="controls">
                            <div class="button-container">
                                <button onClick={() => this.counter(1)}
                                    style={{
                                        opacity: this.state.featureCounter == 0 ? '0.2' : '1'
                                    }}
                                > <i class="fas fa-chevron-left fa-3x"></i> </button>
                                <button onClick={() => this.counter(-1)}
                                    style={{
                                        opacity: this.state.featureCounter == -2 ? '0.2' : '1'
                                    }}
                                > <i class="fas fa-chevron-right fa-3x"></i> </button>
                            </div>
                        </div>

                    </div>

                    <div class="map-container">
                        <QuartierMap
                            center={this.props.center}
                            zoom={this.props.zoom}
                        />
                    </div>

                </div>

                <div class="footer-container">
                    <Footer />
                </div>
            </div>
        )
    }
}