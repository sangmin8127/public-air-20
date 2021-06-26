import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/style.css';

class Header extends Component {
    renderContent () {
        switch ( this.props.auth ) {
            case null:
                return 
            case false:
                return <a href="/auth/google">Login With Google</a>
            default:
                return [
                    <a href="/api/logout">Logout</a>
                ]
        }
    }
    render () {
        return (
            <div className="margin">
                <Container>
                    <Navbar bg="dark" variant="light">
                        <Nav fill variant="pills">
                            <Nav.Item>
                                <Link
                                    to={this.props.auth ?  '/display' : '/'}
                                    className="left brand-logo"
                                >
                                    <div className="text-margin-right">Display</div>
                                </Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link
                                    to={ this.props.auth ? '/updatedb' : '/' }
                                    className="center brand-logo"
                                >
                                    <div className="text-margin-right">Update</div>
                                    
                                </Link>
                                </Nav.Item>
                            <div className="heading-menu">
                                AQI Information Site
                            </div>
                            <ul className="text-margin-left">
                                {this.renderContent()}
                            </ul> 
                        </Nav>
                    </Navbar>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = ( {auth} ) => {
    return { auth }
}

export default connect( mapStateToProps )(Header)