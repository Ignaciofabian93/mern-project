"use client";
import { CircularProgress } from "@nextui-org/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Map, Marker } from "react-map-gl";
import { mapPinIcon } from "@/constants/icons";

const token = process.env.MAPBOX_TOKEN;

interface MapProps {
  coordinates: { latitude: number; longitude: number };
}

const CustomMap: React.FC<MapProps> = ({ coordinates }) => {
  const [viewport, setViewport] = useState({
    latitude: coordinates.latitude,
    longitude: coordinates.longitude,
    zoom: 12,
  });

  useEffect(() => {
    setViewport({
      latitude: coordinates.latitude,
      longitude: coordinates.longitude,
      zoom: 10,
    });
  }, [coordinates.latitude, coordinates.longitude]);

  return (
    <div className="overflow-hidden w-[520px] h-[265px] bg-white/70 rounded-lg shadow-lg">
      {viewport.latitude !== 0 && viewport.longitude !== 0 ? (
        <Map
          mapboxAccessToken={token}
          initialViewState={viewport}
          style={{ width: "100%", height: 265, borderRadius: "10px" }}
          mapStyle="mapbox://styles/mapbox/satellite-v9"
        >
          <Marker
            latitude={coordinates.latitude}
            longitude={coordinates.longitude}
            anchor="bottom"
          >
            <Image src={mapPinIcon} alt="marker" width={50} height={50} />
          </Marker>
        </Map>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <CircularProgress size="sm" />
        </div>
      )}
    </div>
  );
};

export default CustomMap;
