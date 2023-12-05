"use client";
import { CircularProgress } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { Map, ViewStateChangeEvent } from "react-map-gl";

const token = process.env.SECRET_MAPBOX_TOKEN;

interface MapProps {
  coordinates: { latitude: number; longitude: number };
  city: string;
}

const CustomMap: React.FC<MapProps> = ({ coordinates }) => {
  const [coords, setCoords] = useState({
    lat: 0,
    lon: 0,
  });
  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 10,
  });

  useEffect(() => {
    setViewport({
      latitude: coordinates.latitude,
      longitude: coordinates.longitude,
      zoom: 10,
    });
    setCoords({
      lat: coordinates.latitude,
      lon: coordinates.longitude,
    });
  }, [coordinates]);

  const handleDrag = (e: ViewStateChangeEvent) => {
    setCoords({
      ...coords,
      lat: e.viewState.latitude,
      lon: e.viewState.longitude,
    });
  };

  return (
    <div className="overflow-hidden w-[520px] h-[265px] bg-white/70 rounded-lg shadow-lg relative">
      {viewport.latitude !== 0 && viewport.longitude !== 0 ? (
        <>
          <div className="w-full h-[30px] bg-black/70 absolute top-0 z-10 flex items-center justify-between px-4">
            <span className="text-whiteFont text-sm font-semibold">Latitude: {coords.lat}</span>
            <span className="text-whiteFont text-sm font-semibold">Longitude: {coords.lon}</span>
          </div>
          <Map
            key={`${viewport.latitude}-${viewport.longitude}`}
            mapboxAccessToken={token}
            initialViewState={viewport}
            onDrag={handleDrag}
            style={{ width: "100%", height: 265, borderRadius: "10px" }}
            mapStyle="mapbox://styles/mapbox/satellite-v9"
          />
        </>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <CircularProgress size="sm" aria-label="loading..." />
        </div>
      )}
    </div>
  );
};

export default CustomMap;
