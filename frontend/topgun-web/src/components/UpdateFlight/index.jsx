import React, { useState } from "react";
import axios from "axios";
import TextInputField from "../textInputField";
import Dropdown from '../dropdown'

function UpdateFlight() {
    const [flightId, setFlightId] = useState('');
    const [flightDate, setFlightDate] = useState('');
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [availabeSeats, setAvailableSeats] = useState('');

    const destinations = [
        'GRU',
        'CGH',
        'BSB',
        'GIG',
        'SDU'
    ]

    const handleFlightIdChange = (event) => {
        setFlightId(event.target.value);
    }

    const onSave = (event) => {
        event.preventDefault();
        const data = {};
        if (flightDate) {
            data.flightDate = flightDate;
        }
        if (origin) {
            data.origin = origin;
        }
        if (destination) {
            data.destination = destination;
        }
        if (availabeSeats) {
            data.availabeSeats = availabeSeats;
        }
        axios
            .put(`http://localhost:8080/flight/{id}?id=${flightId}`, data)
            .then(response => {
                console.log(response.data);
                alert("Flight Updated")
                setFlightDate("");
                setOrigin("");
                setDestination("");
                setAvailableSeats("");
            })
            .catch(err => {
                console.log(err);
                console.log(data);
            })
    }

    return (
        <section>
            <h2>FLIGHT UPDATE</h2>
            <input type="text" value={flightId} onChange={handleFlightIdChange} placeholder="Enter flight id" />
            <form onSubmit={onSave}>

                
                <TextInputField
                    value={flightDate}
                    necessary={false}
                    label="Flight Date"
                    onChange={event => setFlightDate(event.target.value)}
                    placeholder="YYYY-MM-DD"
                />
                <Dropdown
                    value={origin}
                    necessary={true}
                    label="Origin"
                    onChange={event => setOrigin(event.target.value)}
                    items={destinations}
                />
                <Dropdown
                    value={destination}
                    necessary={true}
                    label="Destination"
                    onChange={event => setDestination(event.target.value)}
                    items={destinations}
                />
                <TextInputField
                    value={availabeSeats}
                    necessary={false}
                    label="Available Seats"
                    onChange={event => setAvailableSeats(event.target.value)}
                    placeholder=""
                />
                <button type="submit">Update</button>
            </form>
        </section>
    )
}
export default UpdateFlight