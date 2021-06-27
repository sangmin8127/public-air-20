import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Container, Row } from 'reactstrap';
import DisplayCards from './DisplayCards';

class Display extends Component {

    render () {
        return (
            <div>
                <h3 style={{textAlign:"center", marginTop: "0.5rem"}}>지역 공기 정보</h3>
                <h5 className="title text-center">공기청정도 정보는 매시간마다 갱신됩니다. </h5>
                <p className="source-align text-center">출처: 공공데이터포털</p>
                <Container>
                    <Row>
                        {
                            this.props.airdata.sort((a, b)=> a.time <= b.time ? 1:-1).map(
                                (air) =><DisplayCards { ...air } />
                            )
                        }
                    </Row>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = ( { airdata }) => {
    return {airdata}
}

export default connect( mapStateToProps )( Display ); 
