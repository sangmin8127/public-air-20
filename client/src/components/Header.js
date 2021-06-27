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
            <div style={{background: "#80cbc4", margin:"1.2rem, 0"}}>
             
                <div style={{alignItems:"center", display:"flex", justifyContent:"space-between", padding:"0.6rem"}}>

                    <Link to={this.props.auth ?  '/display' : '/'}>
                        <p>Display</p>
                    </Link>
                    <Link to={ this.props.auth ? '/add' : '/' }>
                        <p>Add</p>
                    </Link>
                    <p style={{color:"white", margin:'0'}}>AQI Information Site</p>
                    <p>{this.renderContent()}</p> 
                </div>
            </div>
        )
    }
}

const mapStateToProps = ( {auth} ) => {
    return { auth }
}

export default connect( mapStateToProps )(Header)