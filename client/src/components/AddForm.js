import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { addData } from '../actions/index'
import { Button } from 'reactstrap';

// store에 mongodb에서 불러온 데이터를 dispatch해야 함. 
class AddForm extends Component {
    state = {
        dataFetched:false,
        dataUpdated: false,
        location: '서초구',
        error: ""
    }

    onLocationChange = ( e ) => {
        this.setState( { location: e.target.value } )
    }

    onUpdateSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post( '/airdata/update', { location: this.state.location } )
            return this.setState({ dataUpdated: true, location:""})
        } catch ( err ) {
            return this.setState({datapdated: false, error: "data not updated"})
        }
    }
    
    onAddClick = async () => {
        const res = await axios.get('/airdata/display')
        const airdata = res.data
        if(airdata){
            this.setState( { dataFetched:true, location:" " } );
            return this.props.addData(airdata);
        }
        return this.setState({dataFetched: false})
    }
 
    render () {
        return (
            <div >

                <p>UpdateDB Status:
                    <span > { this.state.dataUpdated ? "Data updated" : "" }</span>
                </p>

                <form className="form" onSubmit={this.onUpdateSubmit}>
                    <label >Enter the location:{this.state.location}</label>
                    <input onChange={ this.onLocationChange } className=" text-input " />
                    <br></br>
                    {
                        this.state.dataFetched === false ?
                        <Link to={'/display'}>
                            <Button variant="primary" onClick={this.onAddClick} className="button">Add Data</Button>
                        </Link>
                        : ""
                    }
                       
                </form>

                { this.state.dataUpdated === true && this.state.dataFetched === true ?
                        <p>Save Status: New Data Saved </p>
                    : ""}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
  addData: (airdata) => dispatch(addData(airdata))
});

export default connect( undefined , mapDispatchToProps )( AddForm );

