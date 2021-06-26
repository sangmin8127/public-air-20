import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/style.css';
import Add from './Add'
import axios from 'axios'

class UpdateDB extends Component {
    state = {
        updateStatus: 'No record to update'
    }

    componentDidMount () {
       this.updateApi()
    }

    updateApi = async () => {
        const response = await axios.post( '/airdata/update', { location: '종로구' } )
        return this.setState({updateStatus:response.data})
    }

    render () {
        return (
        <div className="text-margin-left">
            
            <p>UpdateDB Status: { this.state.updateStatus }</p>
            <Add />
        </div>
        )
    }
}

export default UpdateDB;