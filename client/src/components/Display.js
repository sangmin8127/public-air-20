import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, CardDeck } from 'react-bootstrap';
import DisplayCards from './DisplayCards';
import '../style/style.css';

class Display extends Component {

    render () {
        console.log( "Running from Display render" )

        return (
            <div >
                <div className="text-right source-margin-right">출처: 공공데이터포털</div>
                <div className="text-center margin"><h5>지역 공기 정보</h5></div>
                <Container>
                    <CardDeck>
                        {
                            this.props.airdata.sort((a, b)=> a.time < b.time ? 1:-1).map(
                                (air, key ) =><DisplayCards key={ key } { ...air } />
                            )
                        }
                    </CardDeck>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = ( { airdata }) => {
    console.log("Running from Display mapStateToProps")
    return {airdata}
}

export default connect( mapStateToProps )( Display ); 
