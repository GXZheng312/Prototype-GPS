import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Form() {
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [range, setRange] = useState('');

  const handleSubmit = useSubmitForm(longitude, latitude, range);

  return (
    <div class="container">
      <h3>Locatie toevoegen aan MongoDB</h3>
      <form onSubmit={handleSubmit}>
        <div class="form-group col-4">
          <label htmlFor="longitude">Longitude</label>
          <input class="form-control" type="text" id="longitude" value={longitude} onChange={(e) => setLongitude(e.target.value)} />
        </div>
        <div class="form-group col-4">
          <label htmlFor="latitude">Latitude</label>
          <input class="form-control" type="text" id="latitude" value={latitude} onChange={(e) => setLatitude(e.target.value)} />
        </div>
        <div class="form-group col-3">
          <label htmlFor="range">Range</label>
          <input class="form-control" type="text" id="range" value={range} onChange={(e) => setRange(e.target.value)} />

        </div>
        <br></br>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

function useSubmitForm(longitude, latitude, range) {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:3000/api/location', {  
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        longitude,
        latitude,
        range
      })
    });
  };
  return handleSubmit;
}

export default Form;