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


class Info extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            district_id: '',
            date: '',
            vaccine: "COVISHIELD",
        }
    }


    componentDidMount() {

        if(this.props.location){
            this.setState({
                district_id: localStorage.getItem("districtId")
            })}

            // localStorage.setItem('district_id',this.state.district_id)

        console.log("inside info componendidmount:",this.state.district_id );
        
    }



    eventHandler = (e) => {
        this.setState({ date : e.target.value });
        localStorage.setItem('date',e.target.value)
        console.log("date selected in  info: ", this.state.date);
    }

    confirm = () => {
        this.props.history.push({pathname:'/card'});
    }

    render() {

        const { date, district_id } = this.state;
        // const cityInfo = data;
        console.warn("district by data///////////", district_id, date);

        localStorage.setItem('district_id',district_id);

        // const datta = this.props.location;

        // console.log("props data in info page: ", datta);


        return (
            <div className="card" style={{ marginLeft: 550, marginRight: 550, marginTop: 30 }}>
                <form style={{ margin: 20 }} onSubmit={this.confirm}>
                    <label style={{ color: 'lightgray', margin: 20 }}> *fill the form to get vaccinated from your District zone.</label>


                    <div className="col-12" style={{ marginTop: 20 }}>
                        <label htmlFor="inputAddress" className="form-label"> *Selected District ID : </label>
                        <input
                            type="number"
                            className="form-control"
                            id="inputAddress"
                            name="district_id"
                            value={this.state.district_id}
                            // onChange={(e) => this.eventHandler(e)}
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
                            onChange={(e) => this.eventHandler(e)}
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

export default Info;