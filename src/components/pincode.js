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
import moment from 'moment';


class Pincode extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pincode: '',
            date: '',
            vaccine: "COVISHIELD",
        }
    }


    // componentDidMount() {

    //     if(this.props.location){
    //         this.setState({
    //             district_id: this.props.location.stateData.districtId
    //         })}

    //     console.log("inside info componendidmount:",this.state.district_id );
        
    // }
        
    // submitHandler = async (e) => {
    //     e.preventDefault()

    //     console.log("pincode: ", this.state.pincode);
    //     console.log("date: ", this.state.date);

    //     var newDate = moment(this.state.date).format('DD-MM-YYYY');

    //     console.log("new....", newDate);

    //     var token = localStorage.getItem("frontendToken");
    //      console.log("coming token...........", token);

    //      await Axios
    //         // .get(`/session/findByDistrict/${this.state.district_id}/${this.state.date}/${token} `
    //         .get(`/session/findByPin/${this.state.pincode}/${newDate}/${token}`)
        
    //         .then(response => 
    //             this.setState({data : response.data}),
    //             // console.log("data in pincode.........:", response.data),
    //             this.confirm()
    //         )
    //         .catch(error => {
    //             console.log(error)
    //             alert(error);
    //         })

    // }


    confirm = () => {
        this.props.history.push({pathname:'/pinData', dataSend : {pincode : this.state.pincode, date : this.state.date}});
    }

    render() {


        const { pincode, date } =  this.state;

        return (
            <div className="card" style={{ marginLeft: 550, marginRight: 550, marginTop: 30 }}>
                <form style={{ margin: 20 }} onSubmit={this.confirm}>
                    <label style={{ color: 'lightgray', margin: 20 }}> *fill the form to get vaccinated from your District zone using pincode.</label>


                    <div className="col-12" style={{ marginTop: 20 }}>
                        <label htmlFor="inputAddress" className="form-label"> *Enter Pincode : </label>
                        <input
                            type="number"
                            className="form-control"
                            id="inputAddress"
                            name="pincode"
                            // value={this.state.district_id}
                            onChange={(e) => this.setState({pincode : e.target.value})}
                        />
                    </div>
                    <div className="col-12" style={{ marginTop: 20 }}>
                        <label htmlFor="inputAddress2" className="form-label"> *Enter Date : </label>
                        <input
                            type="date"
                            className="form-control"
                            id="inputAddress2"
                            placeholder="dd/mm/yyyy"
                            name="date"
                            onChange={(e) => this.setState({date : e.target.value})}
                        />
                    </div>

                    <div className="col-12" style={{ marginTop: 30 }}>
                        <button type="submit" className="btn btn-primary">Get The Slots</button>
                    </div>
                </form>


            </div>
        );
    }
}

export default Pincode;
