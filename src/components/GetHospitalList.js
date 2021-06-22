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
import { Search } from '@material-ui/icons';
import similar_text from 'locutus/php/strings/similar_text';

class GetHospitalList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            searchData: '',
        }
    }

    componentDidMount() {

        let pincode = localStorage.getItem("pincode");

        console.log("pincode inside ddddd", pincode)
        this.handleApi();

    }



    handleApi = async () => {

        var token = localStorage.getItem("frontendToken");
        console.log("coming token...........", token);

        let district_id = localStorage.getItem("districtId");
        let newDate = localStorage.getItem("dateSelected");
        let pincode = localStorage.getItem("pincode");

        await Axios
            .get(`/session/findByDistrict/${district_id}/${newDate} `)
            .then(response =>
                this.setState({ data: response.data.sessions }),
                // console.log("response in pincode dist .......... :", this.state)
            )
            .catch(error => {
                console.log(error);
                alert(error);
            })

    }

    sortFunction = (arr, pin) => {

        let size = arr.length;
        let i, j, k = 1;
        let varFoundPin;
        let next = [];
        let prev = [];
        let emptyArray = [];

        console.log("length", size);


        for (i = 0; i < size; i++) {
            if (arr[i].pincode == pin) {
                console.log("arr[i].pincode ", arr[i]);
                varFoundPin = i;
                console.log("data found ", varFoundPin);
                emptyArray.push(arr[i])
                console.log("matched data", varFoundPin);
                break;
            }
        }
        console.log("Line 106 " + emptyArray);

        for (j = size; j > 0; j--) {
            if (arr[varFoundPin + k]) {
                next = arr[varFoundPin + k]
                emptyArray.push(next)
            }
            if (arr[varFoundPin - k]) {
                prev = arr[varFoundPin - k]
                emptyArray.push(prev)

            }
            k = k + 1
        }
        console.log("emptyarray", emptyArray)

        return emptyArray;


    }

    render() {

        let getData = []
        let sortedArray = []
        let pincode = localStorage.getItem("pincode");

        getData = this.state.data.sort((a, b) => a.pincode - b.pincode)

        console.log(" getdata Array.......", getData, pincode)

        sortedArray = this.sortFunction(getData, pincode);

        console.log("new sortedArray for solution.......", sortedArray)

        return (

            <div style={{ margin: 10 }}>

                {
                    sortedArray ?
                        <div style={{ display: "flex", flexWrap: 'wrap', rowGap: 20, columnGap: 20 }}>
                            {sortedArray.map(post => (
                                <Card style={{ minWidth: 330, marginTop: 50, backgroundColor: '#F8F8FF' }}>
                                    <CardContent key={post.center_id}>
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
                                        <Typography variant="h5" component="h2">
                                            available : {post.available_capacity}
                                        </Typography>
                                        <Typography variant="h5" component="h2">
                                            dose1 : {post.available_capacity_dose1}
                                        </Typography>
                                        <Typography variant="h5" component="h2">
                                            dose2 : {post.available_capacity_dose2}
                                        </Typography>
                                        <CardActions>
                                            <Link to={{
                                                pathname: "/hospital", state: {
                                                    name: post.name,
                                                    stateName: post.state_name,
                                                    blockName: post.block_name,
                                                    pincode: post.pincode,
                                                    centerId: post.center_id,
                                                    ageLimit: post.min_age_limit,
                                                    slots: post.slots,
                                                    vaccine: post.vaccine,
                                                    sessionId: post.session_id,
                                                    date: post.date,
                                                    available_capacity: post.available_capacity,
                                                    available_capacity_dose1: post.available_capacity_dose1,
                                                    available_capacity_dose2: post.available_capacity_dose2,
                                                    min_age_limit: post.min_age_limit,
                                                    fee: post.fee,
                                                    fee_type: post.fee_type,
                                                }
                                            }}>
                                                <a >
                                                    get more data
                                                </a>
                                            </Link>
                                        </CardActions>
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
export default GetHospitalList;
