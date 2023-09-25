import React, { useState, useEffect } from "react";
import "./Chart.css";

import BarChart from "./BarChart";

function Chart({
  FirstSettingsParametrs,
  SecondSettingsParametrs,
  ThirdSettingsParametrs,
  FourthSettingsParametrs,
  FifthSettingsParametrs,
}) {
  // value ratio
  const [currency, setcurrency] = useState({});
  useEffect(() => {
    const Checkcurrency = async () => {
      await fetch(
        "https://api.nbp.pl/api/exchangerates/rates/a/chf/?format=json"
      )
        .then((response) => {
          if (response.ok) {
            response.json().then((json) => {
              setcurrency(json);
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    Checkcurrency();
  });
  if (currency?.rates) {
    console.log(currency?.rates[0].mid);
    var PolishCurrency = currency?.rates[0].mid;
  }
  const [pirceMultiState, setpirceMultiState] = useState(1);

  const [nameCurrencyState, setnameCurrencyState] = useState("USD");
  const [currencyState, setcurrencyState] = useState([0, "USD"]);
  if (FifthSettingsParametrs && FifthSettingsParametrs != currencyState) {
    if (FifthSettingsParametrs[1] == "EUR") {
      setnameCurrencyState("EUR");
      setcurrencyState(FifthSettingsParametrs);
      setpirceMultiState(1);
    } else if (FifthSettingsParametrs[0] == 3) {
      setnameCurrencyState("PLN");
      setcurrencyState(FifthSettingsParametrs);
      console.log(PolishCurrency);
      setpirceMultiState(PolishCurrency);
    } else {
      setcurrencyState(FifthSettingsParametrs);

      setnameCurrencyState("USD");
      setpirceMultiState(1);
    }
  }
  console.log(pirceMultiState);

  const [crypt, setCrypto] = useState("bitcoin");

  // console.log(crypt);
  if (crypt != FirstSettingsParametrs && FirstSettingsParametrs) {
    setCrypto(FirstSettingsParametrs);
  }
  const [days, setdays] = useState(1);

  // console.log(days);
  if (days != SecondSettingsParametrs && SecondSettingsParametrs) {
    setdays(SecondSettingsParametrs);
  }

  const [interval, setinterval] = useState("5-minutely");

  // console.log(interval);
  if (interval != ThirdSettingsParametrs && ThirdSettingsParametrs) {
    setinterval(ThirdSettingsParametrs);
  }
  const [scale, setscale] = useState([1.01, 365]);

  if (scale != FourthSettingsParametrs && FourthSettingsParametrs) {
    setscale(FourthSettingsParametrs);
  }

  const [chart, setChart] = useState({});

  useEffect(() => {
    const fetchCoins = async () => {
      await fetch(
        "https://api.coingecko.com/api/v3/coins/" +
          crypt +
          "/market_chart?vs_currency=" +
          currencyState[1] +
          "&days=" +
          days +
          "&"
        // interval=" +
        // interval
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
  }, [datas, FirstSettingsParametrs]);
  // console.log(chart);
  // chart 2

  const [chart2, setChart2] = useState({});
  var daystochart2 = days;
  if (FourthSettingsParametrs) {
    if (parseFloat(FourthSettingsParametrs[1]) > 10) {
      daystochart2 = parseFloat(FourthSettingsParametrs[1]);
    } else {
      daystochart2 = days;
    }
  }

  useEffect(() => {
    const fetchCoins2 = async () => {
      await fetch(
        "https://api.coingecko.com/api/v3/coins/" +
          crypt +
          "/market_chart?vs_currency=" +
          currencyState[1] +
          "&days=" +
          daystochart2 +
          "&interval=" +
          interval
      )
        .then((response) => {
          if (response.ok) {
            response.json().then((json) => {
              // console.log(json);
              setChart2(json);
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchCoins2();
  }, [datas]);
  // console.log(chart2);
  var price2 = chart2?.prices?.map(
    (x) => parseFloat(x[1]).toFixed(2) * pirceMultiState
  );
  if (price2) {
    var minimum2 = price2[0];
  }

  price2?.forEach((e) => {
    if (minimum2 > e) {
      minimum2 = e;
    }
  });
  var maximum2 = 0;
  var a;
  const arr = [1, 2, 3];
  const [maxstate, setmaxstate] = useState({});

  useEffect(() => {
    const checkamaxvalue = async () => {
      if (price2) {
        setmaxstate(Math?.max(...price2));
      }
    };
    checkamaxvalue();
  });

  // console.log(minimum2, maxstate);

  // console.log(maximum2);

  var adadd = chart?.prices?.map((x) => x[0]);
  // console.log(adadd);

  var times = chart?.prices?.map((x) => new Date(x[0]).toLocaleString());
  // console.log(times);
  var price = chart?.prices?.map((x) => x[1] * pirceMultiState);
  console.log(currencyState);
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

  /// minimum2   maxstate              minvalueratio        maxvalueratio
  var maxscaleparametrs = 0;
  var minimumscaleparametrs = 0;
  if (maxstate) {
    maxscaleparametrs = parseFloat(maxstate)?.toFixed(2) * scale[0];
  } else {
    maxscaleparametrs = maxvalueratio?.toFixed(2) * scale[0];
  }
  if (minimum2) {
    minimumscaleparametrs = parseFloat(minimum2)?.toFixed(2) * (2 - scale[0]);
  } else {
    minimumscaleparametrs = minvalueratio?.toFixed(2) * (2 - scale[0]);
  }

  var minvalueratioData = minvalueratio?.toFixed(2) * (2 - scale[0]);
  if (scale && scale[1] > 29) {
    minvalueratioData = minvalueratio?.toFixed(2) * (2 - scale[0]);
  }
  var datas = {
    labels: times,
    datasets: [
      {
        label: "cena " + crypt + " w " + nameCurrencyState,
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
        min: minimumscaleparametrs,
        max: maxscaleparametrs,
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
