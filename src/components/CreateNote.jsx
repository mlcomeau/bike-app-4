import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions/noteActions'


class CreateNote extends Component {
    state = {
        notes: "",
        weather: "",
        weight: "",
        restingBP: "",
        heartrate: "",
        sleep: "",
        dietYesterday: "",
        enthusiasm: "",
        rideType: "", 
        descriptiveName: ""
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleClick = (event) => {
        event.preventDefault()

        const rideNote = {
            rideName: this.props.summary.ride.rideName,
            notes: this.state.notes,
            weather: this.state.weather,
            weight: this.state.weight,
            restingBP: this.state.restingBP,
            heartrate: this.state.heartrate,
            sleep: this.state.sleep,
            dietYesterday: this.state.dietYesterday,
            enthusiasm: this.state.enthusiasm,
            rideType: this.state.rideType, 
            descriptiveName: this.state.descriptiveName
        }

        this.props.addNote(rideNote)
        
        this.setState({
            notes: "",
            weather: "",
            weight: "",
            restingBP: "",
            heartrate: "",
            sleep: "",
            dietYesterday: "",
            enthusiasm: "",
            rideType: "", 
            descriptiveName: ""
        })
        document.getElementById("create-form").reset()

    }

    render () {
    return <div className="container">
        <center><h1>Create Note</h1></center>
        <form id="create-form">
            <div className="form-group">
                <label htmlFor="notes">Add your notes</label>
                <textarea name="notes" id="notes" onChange={this.handleChange} className="form-control" placeholder="Notes" rows="3"/>
            </div>
            <div className="form-group">
                <label htmlFor="weather">Weather</label>
                <input name="weather" id="weather" onChange={this.handleChange} type="text" className="form-control" placeholder="Weather"/>   
            </div>
            <div className="form-group">
                <label htmlFor="weight">Weight</label>
                <input name="weight" id="weight" onChange={this.handleChange} type="text" className="form-control" placeholder="Weight"/>
            </div>
            <div className="form-group">
                <label htmlFor="restingBP">Blood Pressure</label>
                <input name="restingBP" id="restingBP" onChange={this.handleChange} type="text" className="form-control" placeholder="Resting BP"/>
            </div>
            <div className="form-group">
                <label htmlFor="heartrate">Resting Heart Rate</label>
                <input name="heartrate" id="heartrate" onChange={this.handleChange} type="text" className="form-control" placeholder="Heart Rate"/>
            </div>
            <div className="form-group">
                <label htmlFor="sleep">Sleep</label>
                <input name="sleep" id="sleep" onChange={this.handleChange} type="text" className="form-control" placeholder="Sleep"/>
            </div>
            <div className="form-group">
                <label htmlFor="dietYesterday">Diet Yesterday</label>
                <input name="dietYesterday" id="dietYesterday" onChange={this.handleChange} type="text" className="form-control" placeholder="Diet Yesterday"/>
            </div>
            <div className="form-group">
                <label htmlFor="enthusiasm">Level of enthusiasm</label>
                <select name="enthusiasm" defaultValue="" id="enthusiasm" onChange={this.handleChange} type="text" className="form-control">
                    <option value="" disabled hidden>Choose level of enthusiasm:</option>
                    <option value="1">1 - low</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5 - very excited</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="rideType">Choose ride type</label>
                <select name="rideType" defaultValue="" id="rideType" onChange={this.handleChange} type="text" className="form-control">
                    <option value="" disabled hidden>Choose a ride type:</option>
                    <option value="Flat">Flat</option>
                    <option value="Hilly">Hilly</option>
                    <option value="Big climb">Big Climb</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="descriptiveName">Add a descriptive name for ride</label>
                <input name="descriptiveName" id="descriptiveName" onChange={this.handleChange} type="text" className="form-control" placeholder="Descriptive Name"/>
            </div>
            <button onClick={this.handleClick} type="submit" className="btn btn-success">Submit</button>
        </form>
    </div>
    }
}

const mapStateToProps = (state) => ({
    summary: state.summary
})

export default connect(mapStateToProps, { addNote })(CreateNote)