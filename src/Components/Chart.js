import React, { useState, useEffect } from "react";
import "./Chart.css";
import { Bar } from "react-chartjs-2";
import BarChart from "./BarChart";

function Chart() {
  const dserData = [
    {
      id: 1,
      year: 2016,
      userGain: 80000,
      userLost: 823,
    },
    {
      id: 2,
      year: 2017,
      userGain: 45677,
      userLost: 345,
    },
    {
      id: 3,
      year: 2018,
      userGain: 78888,
      userLost: 555,
    },
    {
      id: 4,
      year: 2019,
      userGain: 90000,
      userLost: 4555,
    },
    {
      id: 5,
      year: 2020,
      userGain: 4300,
      userLost: 234,
    },
    {
      id: 6,
      year: 2023,
      userGain: 4300,
      userLost: 234,
    },
  ];
  // async function Pobranie() {
  //   try {
  //     const response = await fetch(
  //       "https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=USD&days=2&interval=hourly"
  //     );
  //     // console.log(response);
  //     const jsonData = await response.json();

  //     // console.log("Tablica danych", jsonData.prices);
  //   } catch (error) {
  //     // console.log("Wystąpił błąd podczas pobierania danych:", error);
  //   }
  // }
  // Pobranie();
  // const [chart, setChart] = useState({});
  // useEffect(() => {
  //   const adamm = async () => {
  //     await fetch(
  //       "https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=USD&days=2&interval=hourly"
  //     ).then((response) => {
  //       if (response.ok) {
  //         response.json().then((result) => {
  //           setChart(result);
  //         });
  //       }
  //     });
  //   };
  //   adamm();
  // });
  var datetotest = 1687017643170;
  let date = new Date(datetotest);
  console.log(date.toLocaleString());

  const [chart, setChart] = useState({});
  useEffect(() => {
    const fetchCoins = async () => {
      await fetch(
        "https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=USD&days=1&interval=5-minutely"
      )
        .then((response) => {
          if (response.ok) {
            response.json().then((json) => {
              // console.log(json);
              setChart(json);
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchCoins();
  });

  // console.log(chart.prices);
  // var adadd = chart?.prices?.map((x) => x[0]);
  // console.log(adadd);

  var times = chart?.prices?.map((x) => new Date(x[0]).toLocaleString());
  // console.log(times);
  var price = chart?.prices?.map((x) => x[1]);
  if (price?.length > 0) {
    var lastvalue = price[price?.length - 1];
  }
  // console.log(price);

  var typek = dserData.map((data) => data.year);
  // console.log(typek);

  var datas = {
    labels: times,
    datasets: [
      {
        label: "cena ",
        data: price,
        backgroundColor: ["rgba(49, 164, 235)"],
        borderColor: ["rgba(49, 164, 235)"],
        borderWidth: 2,
        borderDashOffset: -0.2,
        pointBorderWidth: 0,
        pointRadius: 0,
        pointHitRadius: 9,
        pointHoverBorderWidth: 2,
      },
    ],
  };

  var options = {
    maintainAspectRatio: true,
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
        },
        ticks: {
          callback: (value, index, values) => {
            if (index === 0 || index === times.length - 1) return times[index];
          },
        },
      },
      y: {
        title: {
          display: true,
        },
        min: 1840,
        max: 1915,
      },
    },
    legend: {
      labels: {
        fontSize: 5,
      },
    },
  };

  // function getRectArea() {
  //   var xhttp = new XMLHttpRequest();

  //   xhttp.open(
  //     "get",
  //     "https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=USD&days=2&interval=5-minutely",
  //     true
  //   );
  //   if (xhttp.readyState === 4 && xhttp.status === 200) {
  //     console.log("ok, response :", xhttp.response);
  //   }
  //   var zm = 1;
  //   setTimeout(() => {
  //     console.log(xhttp.responseURL);
  //     zm = 2;
  //   }, 200);
  //   xhttp.send();
  //   return xhttp.responseURL;
  // }

  // setTimeout(() => {
  //   console.log(getRectArea());
  // }, 300);
  console.log(lastvalue);
  return (
    <div className="App">
      <div
        className="lastvalue"
        style={{ position: "absolute", top: 100, right: 270, fontSize: 50 }}>
        last price : {lastvalue}
      </div>
      <div style={{ width: "86%" }}>
        <BarChart chartData={datas} options={options} />
        {/* {states.map((d) => (
          <div>{d}</div>
        ))} */}
      </div>
    </div>
  );
}
export default Chart;
