import React, { useState, useEffect } from "react";
import "./Chart.css";

import BarChart from "./BarChart";

function Chart() {
  // sprawdzanie czy jest telefonem Z NETA

  var datetotest = 1687017643170;
  let date = new Date(datetotest);
  // console.log(date.toLocaleString());

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
  var minvalueratio = 0;
  // var minvalueratio = price[0]?.toFixed(2);
  if (price) {
    minvalueratio = price[0];
  }
  price?.forEach((e) => {
    if (minvalueratio > e) {
      minvalueratio = e;
    }
  });
  var maxvalueratio = 2;
  price?.forEach((ee) => {
    if (maxvalueratio < ee) {
      maxvalueratio = ee;
    }
  });
  // console.log(maxvalueratio);

  if (price?.length > 0) {
    var lastvalue = price[price?.length - 1];
  }
  if (lastvalue?.length > 0) {
    var valuetoscale = lastvalue.tofixed(2);
  } else {
    var valuetoscale = 1800;
  }

  // console.log(typek);

  var datas = {
    labels: times,
    datasets: [
      {
        label: " cena etherium usd ",
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
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
        },
        ticks: {
          callback: (value, index, values) => {
            if (
              (index === 0 || index === times.length - 1) &&
              window.innerWidth >= 768
            ) {
              return times[index];
            }
          },
        },
      },
      y: {
        title: {
          display: true,
        },
        min: minvalueratio?.toFixed(2) * 0.99,
        max: maxvalueratio?.toFixed(2) * 1.01,
      },
    },
    legend: {
      labels: {
        fontSize: 5,
      },
    },
  };

  return (
    <div className="App">
      {/* <div
        className="lastvalue"
        style={{ position: "absolute", top: 100, right: 270, fontSize: 50 }}>
        last price : {lastvalue}
      </div> */}
      <div className="box-bar-chart">
        <BarChart chartData={datas} options={options} />
      </div>
    </div>
  );
}
export default Chart;
