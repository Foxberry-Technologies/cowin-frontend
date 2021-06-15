import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink } from 'react-router-dom';
import logo from '../home1.png';
import States from './States';
import District from './District';
// import Sidebar from './Sidebar';
import CardData from './Card';
import Info from './Info';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            come: 21,
        };

    }

    handleClick = (event) => {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }

    componentDidUpdate(prevProps) {
    //  componentDidMount(prevProps){

        console.log("this.state.come come prevProps", this.props.location.stateData.selectedState);


        // if(this.props.location.stateData){
            if (prevProps.location != this.props.location) {
                this.setState({
                    come:this.props.location.stateData.selectedState,
                });
                console.log("data set in state-----------",this.state.come);
            }
        // }

    }

    render() {

        let coming = this.props.location;

        console.log("data in disrrrrrrr.........", coming);

        return (
            <>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb bg-gray" style={{ height: 62, justifyContent: 'space-between' }}>
                        <img src={logo} alt="logo" style={{ height: 35, width: 35 }} />
                        <li className="breadcrumb-item active" aria-current="page" style={{ marginTop: 5, marginLeft: 15 }}>India</li>
                        {/* <div style={{marginLeft: 15, marginTop:10, marginRight: 20, color:'gray'}}>Select State :</div> */}
                        <div className="navbar-nav mr-auto " >
                            <States />
                        </div>
                        {/* <div style={{marginLeft: 15, marginTop:10, marginRight: 20, color:'gray'}}>Select District :</div> */}
                        <div className="navbar-nav mr-auto" >
                            <District stateInfo={this.state.come}/>
                            {/* stateInfo={this.state.come} */}
                        </div>
                        {/* <Sidebar/> */}
                    </ol>
                </nav>
                <div >
                    <h4 style={{marginLeft: 530}}>Find the Vaccination using selected District :</h4> 
                </div>
                <Info />
                <div >
                    <h5 style={{marginLeft: 530, marginTop: 30}}>Find the Vaccination using Pincode please :
                    <Link to={{ pathname: "/pincode" }}>
                                                <a >
                                                     click here
                                                </a>
                                            </Link>
                    </h5> 
                </div>
                {/* <CardData/> */}
            </>
        );
    }
}
export default Home;
