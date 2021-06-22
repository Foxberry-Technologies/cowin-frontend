import React, { useState } from 'react'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

function EnterPin() {

    const [EnterPin, setEnterPin] = useState('');
    const history = useHistory();

    const eventHandler = (e) => {
        setEnterPin(e.target.value);
        localStorage.setItem('pincode', e.target.value);
    }

    const clickedEvent = () => {
        history.push({
            pathname: '/getdata'
        });
    }

    var distid = localStorage.getItem("districtId");
    var dateSelected  = localStorage.getItem("dateSelected");

    console.log("EnterPin ", EnterPin);

    console.log("distid ", distid);
    console.log("datec ", dateSelected);


    return (
        <div style={{ marginLeft: 20 }}>
            {/* <div >
                <input
                    style={{ width: 300, marginTop: 5 }}
                    type="number"
                    className="form-control"
                    id="inputAddress"
                    name="pincode"
                    placeholder="Enter Pincode"
                    // value={this.state.district_id}
                    onChange={(e) => eventHandler(e)}
                />

            </div> */}

            <div class="input-group mb-3" style={{ width: 300, marginTop: 5 }}>
                <input

                    type="number"
                    class="form-control"
                    name="pincode"
                    placeholder="Enter Pincode"
                    onChange={(e) => eventHandler(e)}
                />

                <button
                style={{marginLeft: 10, borderRadius: 10}}
                    class="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                    onClick={() => clickedEvent()}
                >
                    Search
                </button>

            </div>


        </div>
    )
}

export default EnterPin;
