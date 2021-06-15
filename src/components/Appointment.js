import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Axios from 'axios';
import { Route } from "react-router-dom";
import history from './History';
import { Link } from 'react-router-dom';


class Appointment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: '',
            dose:'',
            district_id: '',
            Beneficiaries: [],
            slot: '',
        }
    }


    componentDidMount() {

        // if(this.props.location){
        //     this.setState({
        //         district_id: this.props.location.stateData.districtId
        //     })}

        // console.log("inside info componendidmount:",this.state.district_id );
      

    }


    submitHandler = async (e) => {
        e.preventDefault();

        const {dose, slot, beneficiaries } = this.state;

        console.log("this. state in appointment:",  this.state);
        console.log("this. state in appointment: dose",  dose);
        console.log("this. state in appointment: slot",  slot);
        console.log("this. state in appointment: beneficiaries",  beneficiaries);
        // console.log("this. state in appointment: sessionId",  sessionId);

        const sessionId = this.props.location.state.sessionId;

        console.log("props id in appointment page: ", sessionId);

        var token = localStorage.getItem("frontendToken");

        await Axios
            .post(`/appointment/schedule/${token}/${dose}/${sessionId}/${slot}/${beneficiaries}`)

            .then(response => 
                // this.setState({data : response.data}),
                console.log("response for appointment", response),
                alert("Appointment Sheduled Successfully...!!")
            )
            .catch(error => {
                console.log(error)
                alert(error);
            })

    }



    // handle(e, index) { 
    //     this.state.beneficiaries[index] = e.target.value

    //     this.setState({beneficiaries: this.state.beneficiaries})
    // }
    //     this.setState({ date: e.target.value });

    //     console.log("date selected in  info: ", this.state.date);
    // }

    confirm = () => {
        // this.props.history.push({pathname:'/card', data : this.state.district_id});
    }

    render() {


        const comingSessionId = this.props.location.state.sessionId;

        console.log("props data in info page: ", comingSessionId);


        return (
            <div className="card" style={{ marginLeft: 550, marginRight: 550, marginTop: 30 }}>
                <form style={{ margin: 20 }} onSubmit={this.submitHandler}>
                    <label style={{ color: 'lightgray', margin: 20 }}> *fill the form to get vaccinated.</label>

                    <div className="col-12" style={{ marginTop: 20 }}>
                        <label htmlFor="inputAddress" className="form-label"> *Dose Number : </label>
                        <select className="form-select"
                            onChange={(e) => {this.setState({dose : e.target.value})}}
                        >
                            <option disabled selected="true">----select----</option>
                            <option value="1"> 1 </option>
                            <option value="2"> 2 </option>
                        </select>
                    </div>


                    <div className="col-12" style={{ marginTop: 20 }}>
                        <label htmlFor="inputAddress" className="form-label"> *Session ID : </label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputAddress"
                            name="sessionId"
                            value={comingSessionId}
                            // onChange={(e) => {this.setState({sessionId : comingSessionId})}}
                        />
                    </div>

                    <div className="col-12" style={{ marginTop: 20 }}>
                        <label htmlFor="inputAddress" className="form-label"> *Slot : </label>
                        <select className="form-select"
                             onChange={(e) => {this.setState({slot : e.target.value})}}
                        >
                            <option disabled selected="true">----select----</option>
                            <option value="FORENOON"> FORENOON </option>
                            <option value="AFTERNOON"> AFTERNOON </option>
                        </select>
                    </div>

                    <div className="col-12" style={{ marginTop: 20 }}>
                        <label htmlFor="inputAddress2" className="form-label"> *Beneficiaries : </label>
                       

                       {/* {this.state.beneficiaries.map((ben,index) => {
                           return(
                            <input
                            type="number"
                            className="form-control"
                            id="inputAddress2"
                            placeholder="number"
                            name="benefaciaries"
                            onChange={(e) => this.handle(e,index)}
                            value={ben}
                        />
                           )
                       })} */}
                        <input
                            type="text"
                            className="form-control"
                            id="inputAddress2"
                            placeholder="111111 , 2222222 , 3333333 , 4444444"
                            name="benefaciaries"
                            onChange={(e) => {this.setState({beneficiaries : [e.target.value]})}}
                        />
                        
                    </div>

                    {/* <div className="col-12" style={{ marginTop: 20 }}>
                        <label htmlFor="inputAddress2" className="form-label"> Beneficiaries 2 : </label>
                        <input
                            type="number"
                            className="form-control"
                            id="inputAddress2"
                            placeholder="number"
                            name="benefaciariesTwo"
                            onChange={(e) => this.eventHandler(e)}
                        />
                    </div> */}

                    <div className="col-12" style={{ marginTop: 30 }}>
                        <button type="submit" className="btn btn-primary">Get The Appointment</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Appointment;