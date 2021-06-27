import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios'

import { addData } from '../actions/index'


// store에 mongodb에서 불러온 데이터를 dispatch해야 함. 
class AddForm extends Component {
    state = {
        dataFetched:false,
        dataUpdated: false,
        location: '',
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
            <div style={{marginTop: "1rem"}}>
                <Form onSubmit={this.onUpdateSubmit}>
                    <FormGroup>
                    <Label >Enter the location:{this.state.location}</Label>
                    
                    <Input onChange={ this.onLocationChange } Input/>
                    <br></br>
                    <p>UpdateDB Status:
                        <span > { this.state.dataUpdated ? "Data updated! Click Add Button." : "No data to update!" }</span>
                    </p>
                   
                    {
                        this.state.dataFetched === false ? 
                        <Link to={'/display'}>
                            <Button color="primary" onClick={this.onAddClick} >Add Data</Button>{' '}
                        </Link>
                        : ""
                    }
                    </FormGroup>
                </Form>

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

