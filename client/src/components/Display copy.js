import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Container, CardDeck } from 'react-bootstrap';
import DisplayCards from './DisplayCards';

class Display extends Component {

    render () {
        return (
            <div>
                <div className="source-align text-center">출처: 공공데이터포털</div>
                <h1 className="title text-center">지역 공기 정보</h1>
                <Container>
                    <CardDeck>
                        {
                            this.props.airdata.sort((a, b)=> a.time <= b.time ? 1:-1).map(
                                (air) =><DisplayCards { ...air } />
                            )
                        }
                    </CardDeck>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = ( { airdata }) => {
    return {airdata}
}

export default connect( mapStateToProps )( Display ); 
