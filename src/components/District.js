import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function District(props) {

    const [data, setData] = useState([]);
    const history = useHistory();

    const comingData = props.stateInfo;

    console.log("comingData in district from stateid:", comingData);

    useEffect(() => {
        
        // const url = 'https://cdndemo-api.co-vin.in/api/v2/admin/location/districts/' + comingData;
        // fetch(url,
        //     {
        //         method: 'GET',
        //         headers: {
        //             "Accept": "*",
        //         }
        //     },{mode: 'no-cors'})
        //     .then(resp => resp.json())
        //     .then(resp => setData(resp.districts))


    axios
        .get('/location/districts/'+ comingData)
        .then(response => {
            setData(response.data.districts)
            console.log("send in districts ..................:", data)
        })
        .catch(error => {
            console.log(error);
            alert(error);
        })


    }, [props.stateInfo])

    const selectDistrictId = (e) =>{

        // const url = 'https://cdn-api.co-vin.in/api/v2/admin/location/districts/' + comingData;
        // fetch(url).then(resp => resp.json())
        //     .then(resp => setData(resp.districts))

        const selectId = e.target.value;
        localStorage.setItem('districtId',e.target.value);

        console.log("selected district id: ", selectId)

        // history.push({
        //     pathname: '/',
        //     stateData: { districtId: selectId }
        // });
    }

    return (
        <div style={{ marginLeft: 20 }}>
            {console.log("data inside district from state..............",data)}
                <select className="form-select" 
                style={{ width: 300, marginTop: 5 }}
                onChange={(e)=> selectDistrictId(e)}
                >
                    <option> select district </option>
                    {data.map((da) => (
                        <option key={da.district_id} value={da.district_id}>{da.district_name}</option>
                     ))} 
                </select>
        </div>
    )
}

export default District;
