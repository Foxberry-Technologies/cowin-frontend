import React, { useState } from 'react';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';

function GoogleMapApi() {

    const [address, setAddress] = useState("")
    const [coordinates, setCoordinates] = useState({
        lat: null,
        lng:null
    })

    const handleSelect = async value =>{
        const results = await geocodeByAddress(value);

        const ll = await getLatLng(results[0])
        console.log(ll)
        setAddress(value)
        setCoordinates(ll)
    }

    return (
        <div className="card" style={{ marginLeft: 500, marginRight: 500, marginTop: 30 }}>
            <label style={{ color: 'lightgray', margin: 20 }}> *Get Lat and Lang from Address.</label>


            <p style={{marginLeft: 40}}> lat: {coordinates.lat}</p>
            <p style={{marginLeft: 40}}> long: {coordinates.lng}</p>
            <p style={{marginLeft: 40}}>
                Address: {address}
            </p>

            <PlacesAutocomplete
                value={address}
                onChange={setAddress}
                onSelect={handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div
                    key={suggestions.description}
                    >
                        <input
                            {...getInputProps({
                                placeholder: 'Search Places ...',
                                className: 'location-search-input',
                            })}
                            style={{marginLeft: 40}}
                        />
                        <div className="autocomplete-dropdown-container" style={{marginLeft: 40}}>
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
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>


        </div>
    )
}


export default GoogleMapApi;
