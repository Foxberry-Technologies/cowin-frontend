import React, { useState } from 'react';
import moment from 'moment';

function SelectDate() {

    const [date, setDate] = useState('');

    const eventHandler = (e) => {
        setDate(e.target.value);
    }

    var newDate = moment(date).format('DD-MM-YYYY');

    localStorage.setItem('dateSelected',newDate);

    console.log("newDate in card", newDate);

    return (
        <div style={{ marginLeft: 20 }}>
            <div >
                <input
                    style={{ width: 300, marginTop: 5 }}
                    type="date"
                    className="form-control"
                    id="inputAddress2"
                    placeholder="Enter Date:dd/mm/yyyy"
                    name="date"
                    onChange={(e) => eventHandler(e)}
                />
            </div>
        </div>
    )
}

export default SelectDate
