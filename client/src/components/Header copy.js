import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import '../styles/styles.scss';

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
            <div>
                <header className="header">
                    <div className="content-container">
                        <div className="header__content">
                            <Link to={this.props.auth ?  '/display' : '/'}>
                                <p>Display</p>
                            </Link>
                            <Link to={ this.props.auth ? '/add' : '/' }>
                                <p>Add</p>
                            </Link>
                            <p className="header__title">AQI Information Site</p>
                            <p>{this.renderContent()}</p> 
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

const mapStateToProps = ( {auth} ) => {
    return { auth }
}

export default connect( mapStateToProps )(Header)