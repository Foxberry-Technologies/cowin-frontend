import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function States () {

    const [data, setData] = useState([]);
    // const [districtSelect, setdistrictSelect] = useState([]);
    const history = useHistory();


    useEffect(() => {
        // const url = '/location/states';

        // fetch(url
        //     // {   
        //     //     method: 'GET',
        //     //     headers: {
        //     //         "Accept": "*",
        //     //     }
        //     // },{mode: 'no-cors'}
        //     )
        //     // .then(resp => resp.json())
        //     .then(resp => 
        //          {setData(resp.states)


        axios
        .get('/location/states')
        .then(response => {
            setData(response.data.states)
            console.log("send in states :", response.data.states)
        })
        .catch(error => {
            console.log(error);
            alert(error);
        })

    }, [])


    const selectStateId = (e) =>{
        const selectId = e.target.value;
        console.log("selected state id:", selectId);

        history.push({
            pathname: '/',
            stateData : { selectedState : selectId }
        });
    }


        return (

            <div style={{ marginLeft: 20 }}>
            <select className="form-select"
                style={{ width: 300, marginTop: 5 }}
                onChange={(e) => selectStateId(e)}
            >
                <option> select state </option>
                {data.map((da) => (
                    <option key={da.state_id} value={da.state_id}>{da.state_name}</option>
                ))}
            </select>


                {/* <FormControl style={{ width: 500, marginLeft: 100 }}>
                    <InputLabel id="demo-simple-select-helper-label"> State </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={data}
                        onChange={this.handleChange}
                    > 
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem> 
                        {
                        data ?
                            <div>
                                {data.map(post => (
                                    <MenuItem key={post.state_id} value={post.state_id}>
                                        <Link to={{ pathname: "/dist", state: { stateId: post.state_id, stateName: post.state_name } }}
                                        > 
                                        {post.state_name}
                                         </Link> 
                                    </MenuItem>
                                ))}
                            </div>
                            :
                            <p> Please wait...</p>
                    }
                        
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem> 
                    </Select>
                    <FormHelperText>please select the state from your nearby</FormHelperText>
                </FormControl> */}


                {/* <FormControl style={{ width: 500 }}>
                    <InputLabel id="demo-simple-select-helper-label">States</InputLabel>
                    <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={data.states}
                    onChange={this.handleChange}
                    // lable="States"
                >
                    {
                        data ?
                            <div>
                                {data.states.map(post => (
                                    <MenuItem key={post.state_id} value={post.state_id}>
                                        <Link to={{ pathname: "/dist", state: { stateId: post.state_id, stateName: post.state_name } }}
                                        >
                                        {post.state_name}
                                        </Link>
                                    </MenuItem>
                                ))}
                            </div>
                            :
                            <p> Please wait...</p>
                    }
                    </Select>
                    <FormHelperText>please select the state from your nearby</FormHelperText>
                </FormControl>  */}
            </div>
        );
}

export default States;