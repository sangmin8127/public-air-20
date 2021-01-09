import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'
import { addData } from '../actions/index'
import { Button} from 'react-bootstrap';

// store에 mongodb에서 불러온 데이터를 dispatch해야 함. 
class Add extends Component {
    handleClick = async () => {
        const res = await axios.get( '/airdata/display' )
        const airdata = res.data
        return this.props.addData(airdata);
    }
    render () {
        return (
            <div>
                {/* <button onClick={ this.handleClick }>Add Data</button> */}
                <Button variant="success" onClick={ this.handleClick }>Add Data</Button>{' '}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
  addData: (airdata) => dispatch(addData(airdata))
});

export default connect( undefined , mapDispatchToProps )( Add );

