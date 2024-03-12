import React from "react";
import {
  Card,
  CardBody,

} from "@material-tailwind/react";
import Chart from "react-apexcharts";



const donation_statics = () => {
  const donateAreas = [
    {
      color: "#020617",
      area: "Child care",
      percentage: 20,
    },
    {
      color: "#ff8f00",
      area: "Cleanliness",
      percentage: 30,
    },
    {
      color: "#00897b",
      area: "Health",
      percentage: 15,
    },
    {
      color: "#1e88e5",
      area: "Helping people",
      percentage: 25,
    },
    {
      color: "#d81b60",
      area: "Excursions",
      percentage: 10,
    },
  ];

  const chartConfig = {
    type: "pie",
    width: 300,
    height: 300,
    series: donateAreas.map((item) => item.percentage),
    options: {
      chart: {
        toolbar: {
          show: true,
        },
      },
      title: {
        show: "",
      },
      dataLabels: {
        enabled: true,
      },
      labels: donateAreas.map((item) => item.area),
      colors: donateAreas.map((item) => item.color),
      legend: {
        show: false,
      },
    },
  };

  return (
    <div className="bg-primary py-2 px-6 mb-5">
      <div className="md:flex md:gird-col-2 md:gap-5 items-center">
        <div className="">
          <h1 className="text-2xl md:text-4xl text-white font-semibold mb-4 py-5 md:w-3/4 ">
            How we spend your donations and where it goes
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3  gap-2 md:gap-4 px-2 md:px-10 text-sm md:text-base">
            {donateAreas.map((item, index) => (
              <div
                key={index}
                className="flex gap-2 items-center justify-start px-1 md:px-5"
              >
                <div
                  className="w-4 h-4"
                  style={{ backgroundColor: item.color }}
                ></div>
                <p className="text-white">{item.area}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="items-center">
          <Card className="bg-transparent shadow-none">
            <CardBody className="mt-4 grid place-items-center px-2">
              <Chart {...chartConfig} />
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default donation_statics;
