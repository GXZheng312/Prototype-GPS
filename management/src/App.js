import React, { useState } from 'react';

function Form() {
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [range, setRange] = useState('');

  const handleSubmit = useSubmitForm(longitude, latitude, range);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="longitude">Longitude</label>
      <input type="text" id="longitude" value={longitude} onChange={(e) => setLongitude(e.target.value)} />

      <label htmlFor="latitude">Latitude</label>
      <input type="text" id="latitude" value={latitude} onChange={(e) => setLatitude(e.target.value)} />

      <label htmlFor="range">Range</label>
      <input type="text" id="range" value={range} onChange={(e) => setRange(e.target.value)} />

      <button type="submit">Submit</button>
    </form>
  );
}

function useSubmitForm(longitude, latitude, range) {
  const handleSubmit = async (e) => {
    e.preventDefault();

      const response = await fetch('http://localhost:3000/locations', {  
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

    const data = await response.json();
    console.log(data);
  };

  return handleSubmit;
}

export default Form;