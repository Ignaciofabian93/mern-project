import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CircularProgress,
} from "@nextui-org/react";
import moment from "moment";
import Image from "next/image";

interface InfoCardProps {
  weather: string;
  temperatureC: number;
  windKph: number;
  humidity: number;
  dataFrom: string;
  city: string;
  country: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  weather,
  temperatureC,
  windKph,
  humidity,
  dataFrom,
  city,
  country,
}) => {
  return (
    <Card className="w-[262px] h-[265px] bg-white/70 shadow-xl border-2 border-primary-50 px-2 py-4">
      {weather ? (
        <>
          <CardHeader className="text-xl font-semibold">{weather}</CardHeader>
          <CardBody>
            <span className="text-sm font-semibold">Country: {country}</span>
            <span className="text-sm font-semibold">City: {city}</span>
            <span className="text-sm font-semibold">
              Temperature: {temperatureC}°C
            </span>
            <span className="text-sm font-semibold">Wind: {windKph} kph</span>
            <span className="text-sm font-semibold">Humidity: {humidity}%</span>
          </CardBody>
          <CardFooter>
            <span className="text-sm font-semibold">
              Data from: {moment(dataFrom).format("DD-MM-YYYY HH:MM")} hrs
            </span>
          </CardFooter>
        </>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <CircularProgress size="sm" />
        </div>
      )}
    </Card>
  );
};

export default InfoCard;
