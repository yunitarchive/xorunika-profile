'use client';
import React, { useEffect, useRef, useState } from 'react';
import OLMap from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import DeckGL from '@deck.gl/react';
import { ScatterplotLayer } from '@deck.gl/layers';
import { fromLonLat } from 'ol/proj';

// Define types for your GeoJSON Feature and FeatureCollection
interface GeoJSONFeature {
  type: string; // "Feature"
  properties: {
    ghi: number; // GHI value
  };
  geometry: {
    type: string; // "Point"
    coordinates: [number, number]; // [longitude, latitude]
  };
}

interface GeoJSONFeatureCollection {
  type: string; // "FeatureCollection"
  features: GeoJSONFeature[];
}

// Define a type for the processed data
interface ProcessedFeature {
  coordinates: [number, number]; // [longitude, latitude]
  ghi: number; // GHI value
}

const MapComponent: React.FC = () => {
  const [data, setData] = useState<ProcessedFeature[]>([]); 
  const mapRef = useRef<HTMLDivElement | null>(null);

  // Fetch GeoJSON data from a local file
  useEffect(() => {
    fetch('data.geojson') // Adjust the path according to your setup
      .then((response) => response.json() as Promise<GeoJSONFeatureCollection>)
      .then((geojson) => {
        console.log("Fetched GeoJSON:", geojson); // Log fetched GeoJSON data
        // Convert GeoJSON features to an array of processed features
        const features = geojson.features.map((feature) => ({
          coordinates: feature.geometry.coordinates,
          ghi: feature.properties.ghi,
        }));
        console.log("Processed Features:", features); // Log processed features
        setData(features);
      });
  }, []);

  // Initialize OpenLayers map
  useEffect(() => {
    if (mapRef.current) {
      const map = new OLMap({
        target: mapRef.current,
        layers: [
          new TileLayer({ source: new OSM() }), // Using OpenStreetMap
        ],
        view: new View({
          center: fromLonLat([-100, 40]), // Initial center of the map
          zoom: 4,
        }),
      });

      // Cleanup function to unmount the map
      return () => {
        map.setTarget(undefined); // Cleanup on unmount
      };
    }
  }, [mapRef]);

  // Define Deck.gl layers
  const layers = [
    new ScatterplotLayer({
      id: 'scatterplot-layer',
      data,
      getPosition: (d) => d.coordinates,
      getFillColor: (d) => {
        const normalizedGHI = Math.min(Math.max(d.ghi, 0), 200);
        const red = (normalizedGHI / 200) * 255; 
        const green = (200 - normalizedGHI) * (255 / 200);
        return [red, green, 0]; 
      },
      getRadius: () => 100,
      radiusScale: 6,
      pickable: true,
    }),
  ];

  // Render the component
  return (
    <div>
      <div
        ref={mapRef}
        style={{ width: '100%', height: '100vh' }} // Set desired size
      />
      {/* Add DeckGL overlay on top of OpenLayers */}
      {data.length > 0 && ( // Render only if data is present
        <DeckGL
          layers={layers}
          initialViewState={{
            longitude: -100,
            latitude: 40,
            zoom: 4,
            pitch: 0,
            bearing: 0,
          }}
          controller={true}
          style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }} // Layer styling
        />
      )}
    </div>
  );
};

export default MapComponent;
