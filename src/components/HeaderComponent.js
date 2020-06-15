import React, {Component} from 'react';
import {Navbar, NavbarBrand, Jumbotron} from 'reactstrap'


class Header extends Component {
    render() {
        return(
            <React.Fragment>
                <Navbar dark>
                    <div className="container">
                        <NavbarBrand href="/">Ristorente Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1> Ristorante Con fusion</h1>
                                <p> we take inspiration from the world's best cuisines, and create a unique fusion experience, our lipsmacking creations will tickle your culnary senses</p>

                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        );
    }
}

export default Header;