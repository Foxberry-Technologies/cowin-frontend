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


class HospitalData extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataArray: {}
        }
    }


    // componentDidMount() {

    //     Axios.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=512&date=31-03-2021`)
    //         .then(response => {
    //             this.setState({ data: response.data })
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // }


    render() {


        // const centerIdSort = this.props.location.state.centerId;
        const propsData = this.props.location.state;

        const { dataArray } = this.state;

        // console.log("props data inside hospital centerIdSort:", centerIdSort)
        console.log("props data inside hospital dataArray:", propsData)


        return (
            <div className="card" style={{ marginLeft: 500, marginRight: 500, marginTop: 30 }}>
                <label style={{ color: 'lightgray', margin: 20 }}> *Information about Hospital.</label>

                <div className="col-12" style={{ color: "blue" }}>
                    <label htmlFor="inputAddress" className="form-label" style={{ marginLeft: 90, marginRight: 40 }}> <h4>{propsData.name}</h4> </label>

                    {/* <h4 style={{marginLeft: 10, marginRight: 10}}></h4> */}

                </div>
                <div className="col-12" style={{ marginTop: 20 }}>
                    <label htmlFor="inputAddress" className="form-label" style={{ marginLeft: 90, marginRight: 40 }}> <h6>State  :  {propsData.stateName} </h6></label>

                </div>
                <div className="col-12" style={{ marginTop: 20 }}>
                    <label htmlFor="inputAddress" className="form-label" style={{ marginLeft: 90, marginRight: 40 }}> <h6>Block Name  : {propsData.blockName}</h6></label>

                </div>
                <div className="col-12" style={{ marginTop: 20 }}>
                    <label htmlFor="inputAddress" className="form-label" style={{ marginLeft: 90, marginRight: 40 }}> <h6>Center ID  : {propsData.centerId} </h6></label>


                </div>
                <div className="col-12" style={{ marginTop: 20 }}>
                    <label htmlFor="inputAddress" className="form-label" style={{ marginLeft: 90, marginRight: 40 }}> <h6>Available Vaccine  : {propsData.vaccine} </h6></label>


                </div>

                <div className="col-12" style={{ marginTop: 20 }}>
                    <label htmlFor="inputAddress" className="form-label" style={{ marginLeft: 90, marginRight: 40 }}> <h6>Pincode  : {propsData.pincode} </h6></label>


                </div>

                <div className="col-12" style={{ marginTop: 20 }}>
                    <label htmlFor="inputAddress" className="form-label" style={{ marginLeft: 90, marginRight: 40 }}> <h6>Age Limit  : {propsData.ageLimit} </h6></label>


                </div>

                {/* <div className="col-12" style={{ marginTop: 20 }}>
                    <label htmlFor="inputAddress" className="form-label" style={{ marginLeft: 90, marginRight: 40 }}> <h6>Session Id  : {propsData.sessionId} </h6></label>


                </div> */}

                <div className="col-12" style={{ marginTop: 20 }}>
                    <label htmlFor="inputAddress" className="form-label" style={{ marginLeft: 90, marginRight: 40 }}> <h6>date  : {propsData.date} </h6></label>


                </div>

                <div className="col-12" style={{ marginTop: 20 }}>
                    <label htmlFor="inputAddress" className="form-label" style={{ marginLeft: 90, marginRight: 40 }}> <h6>available capacity  : {propsData.available_capacity} </h6></label>


                </div>

                <div className="col-12" style={{ marginTop: 20 }}>
                    <label htmlFor="inputAddress" className="form-label" style={{ marginLeft: 90, marginRight: 40 }}> <h6>available capacity dose 1  : {propsData.available_capacity_dose1} </h6></label>


                </div>

                <div className="col-12" style={{ marginTop: 20 }}>
                    <label htmlFor="inputAddress" className="form-label" style={{ marginLeft: 90, marginRight: 40 }}> <h6>available capacity dose 2  : {propsData.available_capacity_dose2} </h6></label>


                </div>

                <div className="col-12" style={{ marginTop: 20 }}>
                    <label htmlFor="inputAddress" className="form-label" style={{ marginLeft: 90, marginRight: 40 }}> <h6>Fee  : {propsData.fee} </h6></label>


                </div>

                <div className="col-12" style={{ marginTop: 20 }}>
                    <label htmlFor="inputAddress" className="form-label" style={{ marginLeft: 90, marginRight: 40 }}> <h6>Fee Type  : {propsData.fee_type} </h6></label>


                </div>

                {/* <div className="col-12" style={{ marginTop: 20 }}>
                    <label htmlFor="inputAddress" className="form-label" style={{ marginLeft: 90, marginRight: 40 }}> <h6>min age limit  : {propsData.min_age_limit} </h6></label>


                </div> */}

                <div className="col-12" style={{ marginTop: 20, marginLeft: 90, marginBottom: 30 , color:"gray"}}>
                     for booking the slot
                     <Link to={{
                        pathname: "/appointment", state: {
                            pincode: propsData.pincode,
                            vaccine: propsData.vaccine,
                            sessionId: propsData.sessionId,
                        }
                    }}>
                        <a style={{marginLeft: 10}}>
                            click here.
                        </a>
                    </Link>
                </div>


                {/* <div style={{marginLeft: 30}}>
                    name: {propsData.name}<br></br>
                    name: {propsData.blockName}<br></br>
                    name: {propsData.pincode}<br></br>
                    name: {propsData.stateName}<br></br>
                    </div> */}
            </div>
        );
    }
}

export default HospitalData;