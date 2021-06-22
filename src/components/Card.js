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


class CardData extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: false,
            searchData: '',
        }
    }


    componentDidMount() {

        // let district_id = localStorage.getItem("district_id");
        // let date = localStorage.getItem("date");

        // console.log("districtId id coming from info =========>", district_id, date);
        this.handleApi();


    }

    handleApi = async () => {
        // e.preventDefault()

        var token = localStorage.getItem("frontendToken");
        console.log("coming token...........", token);

        //  let {district_id, date} = this.state;

        // let district_id = this.props.location.data.districtId;
        // let date = this.props.location.data.date;


        let district_id = localStorage.getItem("district_id");
        let date = localStorage.getItem("date");

        var newDate = moment(date).format('DD-MM-YYYY');

        console.log("newDate in card", newDate);

        /** api for auhtneticated access */

        // await Axios
        //     // .get(`/session/findByDistrict/${district_id}/${date}/${token} `)
        //     .get(`/session/findByDistrict/${district_id}/${date}`)
        //     .then(response => {
        //         this.setState({data: response.data});
        //         console.log("data come from district and date selection.........:", response.data.sessions)
        //         // this.confirm()
        //     })
        //     .catch(error => {
        //         console.log(error)
        //         alert(error);
        //     })


        /** api for demo public */

        await Axios
            .get(`/session/findByDistrict/${district_id}/${newDate} `)
            // .get(`/session/findByDistrict/${district_id}/${date} `)
            .then(response =>
                this.setState({ data: response.data }),
                // console.log("data coming inside card section: ", response),
            )
            .catch(error => {
                console.log(error)
                alert(error);
            })
    }

    handleSearchChange = (e) => {
        // console.log("dddddd", e.target.value);
        this.setState({searchData : e.target.value})
        // this.filterData(e.target.value)
    }

    // filterData = (value) => {
    //     const infoData = this.state.data

    //     console.log("infodata", infoData)
    //     if(!value){
    //         this.setState({data: infoData})
    //     }else {
    //         const filteredData = infoData.sessions.filter(item => {
    //             console.log("item",item)
    //             if(value == ""){
    //                 return item
    //             }else if(item.pincode.includes(value)){
    //                 return item
    //             }
    //         });

            // // return Object.keys(item).some(key => {
                //     return item[key]
                // })
                

            // })
    //         this.setState({data: filteredData});

    //     }
    // }

    render() {

        const cityInfo = this.state.data;
        console.warn("district by data================>", cityInfo.sessions);

        // let districtId = this.props;
        // console.log("districtId id", districtId);

        const { searchData } = this.state;

        const da = this.props;
        console.log("data in card data:", da);


        return (
            <>

                <div style={{ paddingTop: 40, paddingLeft: 40, paddingRight: 40 }}>
                    <label for="inputPassword" class="col-sm-12 col-form-label">Search By Pincode</label>
                    <input
                        class="form-control"
                        type="number"
                        placeholder="Readonly search here..."
                        value={searchData}
                        onChange={(e) => this.handleSearchChange(e)}
                    />
                </div>

                <div style={{ margin: 40, marginLeft: 500, }}>
                    {
                        cityInfo ?
                            <div>
                                {/* {cityInfo.sessions.sort((a, b) => (a.available_capacity > b.available_capacity) ? 1 : -1).map(post => ( */}
                                {cityInfo.sessions.sort((a, b) => (a.available_capacity > b.available_capacity) ? -1 : 1).map(post => (
                                    // {cityInfo.sessions.map(post => ( 
                                    <Card style={{ width: 400, marginLeft: 20, marginTop: 50 }}>
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

            </>
        );
    }
}

export default CardData;