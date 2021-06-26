import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { addData } from '../actions/index'
import { Button } from 'react-bootstrap';

// store에 mongodb에서 불러온 데이터를 dispatch해야 함. 
class AddForm extends Component {
    state = {
        saveStatus:"Click the button to save.",
        updateStatus: 'No record to update',
        location: '서초구'
    }

    onLocationChange = ( e ) => {
        this.setState( { location: e.target.value, updateStatus:'No record to update'  } )
    }

    onUpdateSubmit = async (e) => {
        e.preventDefault();
        this.setState( { updateStatus: "loading....." } )
        try {
            const response = await axios.post( '/airdata/update', { location: this.state.location } )
            // this.setState({saveStatus: "Click the button to save.", location:""})
            this.setState({saveStatus: "Click the button to save.", location:""})
            return this.setState({updateStatus:response.data})
        } catch ( err ) {
            return this.setState({updateStatus:"No new updated data are available yet.", saveStatus:"No record to save", location: ""})
        }
    }
    
    onAddClick = async () => {
        const res = await axios.get('/airdata/display')
        const airdata = res.data
        this.setState( { saveStatus: "New record saved for display", location:" " } );
        return this.props.addData(airdata);
    }
 
    render () {
        return (
            <div >

                <p>UpdateDB Status:
                    <span > { this.state.updateStatus }</span>
                </p>

                <form className="form" onSubmit={this.onUpdateSubmit}>
                    <label >Enter the location:</label>
                    <input onChange={ this.onLocationChange } className=" text-input " />
                    <br></br>
                    {
                        this.state.updateStatus === "new data saved" ?
                        <Link to={'/display'}>
                            <Button variant="primary" onClick={this.onAddClick} className="button">Add Data</Button>
                        </Link>
                        : ""
                    }
                       
                </form>

                { this.state.saveStatus === "Click the button to save." && this.state.updateStatus === "new data saved" ?
                        <p>Save Status: {this.state.saveStatus} </p>
                    : ""}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
  addData: (airdata) => dispatch(addData(airdata))
});

export default connect( undefined , mapDispatchToProps )( AddForm );

