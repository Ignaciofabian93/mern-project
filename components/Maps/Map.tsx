"use client";
import { CircularProgress } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { Map, ViewStateChangeEvent } from "react-map-gl";
import { useAppSelector } from "@/store/store";

const token = process.env.MAPBOX_TOKEN;

interface MapProps {
  coordinates: { latitude: number; longitude: number };
  city: string;
}

const CustomMap: React.FC<MapProps> = () => {
  const { current } = useAppSelector((store) => store.current);
  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 10,
  });
  const [marker, setMarker] = useState({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    setViewport({
      latitude: current.location.lat,
      longitude: current.location.lon,
      zoom: 10,
    });
    setMarker({
      latitude: current.location.lat,
      longitude: current.location.lon,
    });
  }, [current]);

  const handleDrag = (e: ViewStateChangeEvent) => {
    setViewport({
      ...viewport,
      longitude: e.viewState.longitude,
      latitude: e.viewState.latitude,
      zoom: e.viewState.zoom,
    });
    setMarker({
      ...marker,
      latitude: e.viewState.latitude,
      longitude: e.viewState.longitude,
    });
  };

  return (
    <div className="overflow-hidden w-[520px] h-[265px] bg-white/70 rounded-lg shadow-lg relative">
      {viewport.latitude !== 0 && viewport.longitude !== 0 ? (
        <>
          <div className="w-full h-[30px] bg-black/70 absolute top-0 z-10 flex items-center justify-between px-4">
            <span className="text-whiteFont text-sm font-semibold">
              Latitude: {viewport.latitude}
            </span>
            <span className="text-whiteFont text-sm font-semibold">
              Longitude: {viewport.longitude}
            </span>
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
