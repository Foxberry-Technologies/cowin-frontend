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


class PincodeCardData extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: false,
            sortType: '',
        }
    }


    componentDidMount() {

        let pincode = this.props.location.dataSend.pincode;
        let date = this.props.location.dataSend.date;
        // let lat = this.props.location.stateData.lat;
        // let long = this.props.location.stateData.lng;

        console.log("pincode id coming from info =========>", pincode, date);
         this.handleApi();
       
    }

    handleApi = async () => {
        // e.preventDefault()

        var token = localStorage.getItem("frontendToken");
         console.log("coming token...........", token);


        let pincode = this.props.location.dataSend.pincode;
        let date = this.props.location.dataSend.date;

        var newDate = moment(date).format('DD-MM-YYYY');

        console.log("newDate in card", newDate);

         await Axios
         .get(`/session/findByPin/${pincode}/${newDate}/${token}`)
        .then(response => 
            this.setState({data: response.data}),
            // this.handleSort()
            // console.log("send in pincode /////:", response.data)
        )
        .catch(error => {
            console.log(error);
            alert(error);
        })
    }

    handleSort = (e) => {
        console.log("data",e);
    }

    render() {

        const cityInfo = this.state.data;
        console.warn("pincode by data================>", cityInfo.sessions);

        // let districtId = this.props;
        // console.log("districtId id", districtId);

        // let lat = this.props.location.stateData.lat;
        // let long = this.props.location.stateData.lng;

        // const da = this.props;
        // console.log("data in pincode card data:", da);

        


        return (

            <div style={{ margin: 40, marginLeft: 500, }}>
                {
                    cityInfo ?
                        <div>
                            {cityInfo.sessions.sort((a, b) => (a.available_capacity > b.available_capacity) ? -1 : 1).map(post => (
                                <Card style={{ width: 400, marginLeft: 20, marginTop: 50 }}>
                                    <CardContent key={post.center_id}>

                                        {/* {post.lat === lat && post.long === long 
                                        ?
                                        <div> */}
                                        <Typography color="primary" gutterBottom>
                                            Hospital Name : {post.name}
                                        </Typography>
                                        <Typography variant="h5" component="h2">
                                            State Name : {post.state_name}
                                        </Typography>
                                        <Typography variant="h5" component="h2">
                                            Block Name : {post.block_name}
                                        </Typography>
                                        <Typography variant="h5" component="h2">
                                            Pincode : {post.pincode}
                                        </Typography>
                                        
                                        <CardActions>
                                            <Link to={{ pathname: "/hospital" , state: { 
                                                name: post.name,
                                                stateName: post.state_name,
                                                blockName : post.block_name,
                                                pincode : post.pincode,
                                                centerId : post.center_id,
                                                ageLimit: post.min_age_limit,
                                                slots: post.slots,
                                                vaccine: post.vaccine,
                                                sessionId: post.session_id,
                                                date: post.date,
                                                available_capacity: post.available_capacity,
                                                available_capacity_dose1: post.available_capacity_dose1,
                                                available_capacity_dose2: post.available_capacity_dose2,
                                                min_age_limit: post.min_age_limit,
                                                fee:post.fee,
                                                fee_type:post.fee_type,
                                             }}}>
                                                <a >
                                                     get more data
                                                </a>
                                            </Link>
                                        </CardActions>
                                        {/* </div> 
                                        : 
                                        <div> Hospitals for this location are not found  </div> 
                                        } */}
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                        :
                        <p> Please wait...</p>
                } 

            </div>
        );
    }
}

export default PincodeCardData;