
import { useState } from 'react';
import './App.css'

function App() {
  const [city, setCity] = useState('');
    const [location, setLocation] = useState('-');
    const [temperature, setTemperature] = useState('-');
    const [country, setCountry] = useState('-');
    const [lat, setLat] = useState('-');
    const [lon, setLon] = useState('-');

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (city === "") {
            alert("Please enter the city name");
        } else {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8c4a379b3c29fb1e6db1e0e40ab1702a`);
                const data = await response.json();
                setLocation(data.name);
                setTemperature(data.main.temp);
                setCountry(data.sys.country);
                setLat(data.coord.lat);
                setLon(data.coord.lon);
            } catch (error) {
                console.error(error);
            }
        }
    };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{backgroundImage: `url("https://images.pexels.com/photos/753619/pexels-photo-753619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`}}>
    <div className="bg-white bg-opacity-80 rounded-lg p-8 max-w-xl w-full">
        <h1 className="text-3xl font-bold mb-4 text-center">Weather Forecast</h1>
        <form onSubmit={handleSubmit} className="mb-4">
            <input
                type="text"
                id="cityInput"
                placeholder="Enter city name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <button type="submit" className="mt-2 px-4 py-2 rounded-lg bg-blue-500 text-white font-bold hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Search</button>
        </form>
        <div className="location mb-2">
            <h2 className="text-lg font-bold">Location: <span id="location">{location}</span></h2>
        </div>
        <div className="temperature mb-2">
            <h2 className="text-lg font-bold">Temperature: <span id="temperature">{temperature}</span></h2>
        </div>
        <div className="description mb-2">
            <h2 className="text-lg font-bold">Country : <span id="country">{country}</span></h2>
        </div>
        <div className="lat mb-2">
            <h2 className="text-lg font-bold">Latitude : <span id="lat">{lat}</span></h2>
        </div>
        <div className="lon">
            <h2 className="text-lg font-bold">Longitude : <span id="lon">{lon}</span></h2>
        </div>
    </div>
</div>
);
  
}

export default App
