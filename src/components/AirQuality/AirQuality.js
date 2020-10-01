import React, {useEffect, useRef, useState} from 'react';
import mapboxgl from 'mapbox-gl';
import './AirQuality.scss';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiZWxpemFiZXRod29sa2VyIiwiYSI6ImNrZnB2YTBpdDE0czcycnM1azNxdmg0czMifQ.Tq6MX-jrCIBD4Zr8CnvBaA';


const AirQuality = ({title, subtitle}) =>{
    const mapContainer = useRef(null);
    const [locationInfo] = useState({
		lng: 31,
		lat: 48.3,
		zoom: 5
    });

    useEffect(() => {
		const map = new mapboxgl.Map({
			container: mapContainer.current,
			style: 'mapbox://styles/mapbox/outdoors-v11',
			center: [locationInfo.lng, locationInfo.lat],
			zoom: locationInfo.zoom
        });
        
	}, [])
    
    return (
        <section className="quality">
            <div className="container">
                <h2 className="quality-title">{title}</h2>
                <div className="quality-map" ref={mapContainer}/>
                <p className="quality-subtitle">{subtitle}</p>

            </div>
        </section>
    );
}

export default AirQuality;