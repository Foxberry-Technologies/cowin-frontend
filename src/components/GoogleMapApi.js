import React, { useState } from 'react';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';
import { useHistory } from 'react-router';

function GoogleMapApi(props) {

    const [address, setAddress] = useState("")
    const [coordinates, setCoordinates] = useState({
        lat: null,
        lng: null
    })

    const Data = props.location.dataSend;

    console.log("comingData in gio from :", Data);

    const history = useHistory();

    const handleSelect = async value => {
        const results = await geocodeByAddress(value);

        const ll = await getLatLng(results[0])
        console.log(ll)
        setAddress(value)
        setCoordinates(ll)
    }

    const selectedData = () => {
        console.log("address: ", address);
        console.log("coordinates.lat: ", coordinates.lat);
        console.log("coordinates.lng: ", coordinates.lng);

        history.push({
            pathname: '/pinData',
            stateData : { address : address, lat :Math.floor(coordinates.lat), lng: Math.floor(coordinates.lng), pincode: Data.pincode , date: Data.date }
        });
    }

    return (
        <div className="card" style={{ marginLeft: 500, marginRight: 500, marginTop: 30 }}>
            <label style={{ color: 'lightgray', margin: 20 }}> *Get Lat and Lang from Address.</label>


            {/* <p style={{marginLeft: 40}}> lat: {coordinates.lat}</p>
            <p style={{marginLeft: 40}}> long: {coordinates.lng}</p>
            <p style={{marginLeft: 40}}>
                Address: {address}
            </p> */}

            <PlacesAutocomplete
                value={address}
                onChange={setAddress}
                onSelect={handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div
                        key={suggestions.description}
                        style={{ marginLeft: 10, marginBottom: 20 }}
                    >
                        Type Address:
                        <input
                            {...getInputProps({
                                placeholder: 'Search Places ...',
                                className: 'location-search-input',
                            })}
                            style={{ marginLeft: 20 }}
                        />
                        <div className="autocomplete-dropdown-container" style={{ marginLeft: 40 }}>
                            {loading && <div>Loading...</div>}
                            {suggestions.map(suggestion => {
                                const className = suggestion.active
                                    ? 'suggestion-item--active'
                                    : 'suggestion-item';
                                // inline style for demonstration purpose
                                const style = suggestion.active
                                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                    : { backgroundColor: '#ffffff', cursor: 'pointer' };

                                return (
                                    <div
                                        {...getSuggestionItemProps(suggestion, {
                                            className,
                                            style,
                                        })}
                                    >

                                        <span>{suggestion.description}</span>
                                    </div>
                                );
                            })}
                            <div className="col-12" style={{ marginTop: 30 }}>
                                <button onClick={selectedData} className="btn btn-primary">select Address</button>
                            </div>
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>


        </div>
    )
}


export default GoogleMapApi;
