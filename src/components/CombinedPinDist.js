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


class CombinedPinDist extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: false,
            sortType: '',
            come: [],
        }
    }


    componentDidMount() {

        // let pincode = this.props.location.dataSend.pincode;
        // let date = this.props.location.dataSend.date;

        // console.log("pincode id coming from info =========>", pincode, date);
        this.handleFindByDistrictApi();

    }

    handleFindByDistrictApi = async () => {
        var token = localStorage.getItem("frontendToken");
         console.log("coming token...........", token);

        let pincode = localStorage.getItem("pincodeEntered")
        let date = localStorage.getItem("dateInPin")

        var newDate = moment(date).format('DD-MM-YYYY');

        await Axios
        .get(`/session/findByDistrict/510/${newDate}`)
        .then(response => 
            this.setState({data: response.data.sessions}),
            // console.log("response from dist.....", response.data.sessions)
        )
        .catch(error => {
            console.log(error);
            alert(error);
        })
    }

    render() {

        const {data, come} = this.state;

        console.log("data comes.........", data);

        return (

            <div style={{ margin: 40, marginLeft: 500, }}>

                <Card style={{ width: 400, marginLeft: 20, marginTop: 50 }}>
                    <CardContent>

                        <Typography color="primary" gutterBottom>
                            Hospital Name : 
                        </Typography>
                        <Typography variant="h5" component="h2">
                            State Name : 
                        </Typography>
                        <Typography variant="h5" component="h2">
                            Block Name : 
                        </Typography>
                        <Typography variant="h5" component="h2">
                            Pincode : 
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default CombinedPinDist;