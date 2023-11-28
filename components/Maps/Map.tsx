"use client";
import { CircularProgress } from "@nextui-org/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Map, Marker, ViewStateChangeEvent } from "react-map-gl";
import { mapPinIcon } from "@/constants/icons";

const token = process.env.MAPBOX_TOKEN;

interface MapProps {
  coordinates: { latitude: number; longitude: number };
  city: string;
}

const CustomMap: React.FC<MapProps> = ({ coordinates, city }) => {
  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 10,
  });
  const [marker, setMarker] = useState({
    latitude: coordinates.latitude,
    longitude: coordinates.longitude,
  });

  useEffect(() => {
    setViewport({
      latitude: coordinates.latitude,
      longitude: coordinates.longitude,
      zoom: 10,
    });
  }, [coordinates, city]);

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
            mapboxAccessToken={token}
            initialViewState={viewport}
            onDrag={handleDrag}
            style={{ width: "100%", height: 265, borderRadius: "10px" }}
            mapStyle="mapbox://styles/mapbox/satellite-v9"
          >
            {/* <Marker
              latitude={marker.latitude}
              longitude={marker.longitude}
              anchor="center"
            >
              <Image src={mapPinIcon} alt="marker" width={40} height={40} />
            </Marker> */}
          </Map>
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
