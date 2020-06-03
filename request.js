const getPuzzle = async (wordCount) => {
  const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
  if (response.status === 200) {
    const data = await response.json();
    return data.puzzle;
  } else {
    throw new Error("Unable to get puzzle");
  }
};

const getCurrentCountry = async () => {
  const location = await getLocation()
  return getCountry(location.country)
}

const getCountry = async (countryCode) => {
  const response = await fetch(`https://restcountries.eu/rest/v2/all`);
  if (response.status === 200) {
    let data = await response.json();
    data = data.find((country) => country.alpha2Code === countryCode);
    return data
  } else {
    throw new Error(`Unable to fetch the country`);
  }
};

const getLocation = async () => {
  const response = await fetch(`http://ipinfo.io/?token=c60605ae44269e`);
  if (response.status === 200) {
    const data = await response.json();
    return data;
  } else {
    throw new Error(`Unable to fetch from IpInfo...`);
  }
};

// const getCountryNameOld = (countryCode) => {
//   return fetch(`https://restcountries.eu/rest/v2/alpha/${countryCode}`)
//     .then((response) => {
//       if (response.status === 200) {
//         return response.json();
//       } else {
//         throw new Error(`Unable to fetch ${countryCode}`);
//       }
//     })
//     .then((data) => {
//       return data.name;
//     });
// };

// const getPuzzleOld = (wordCount) => {
//   return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
//     if (response.status === 200) {
//       return response.json()
//     } else {
//       throw new Error('Unable to fetch puzzle')
//     }
//   }).then((data) => {
//     return data.puzzle
//   })
// }

// const getIPInfo = () => {
//   const IpInfoIoToken = "c60605ae44269e";
//   let url = `http://ipinfo.io/?token=${IpInfoIoToken}`;
//   return fetch(url)
//     .then((response) => {
//       if (response.status === 200) {
//         return response.json();
//       } else {
//         throw new Error(`Unable to fetch from IpInfo...`);
//       }
//     })
//     .then((data) => {
//       return data;
//     });
// };

// const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
//   const request = new XMLHttpRequest();

//   request.addEventListener("readystatechange", (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//       const data = JSON.parse(e.target.responseText);
//       resolve(data.puzzle);
//     } else if (e.target.readyState === 4) {
//       reject("An error has taken place");
//     }
//   });
//   request.open("GET", `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
//   request.send();
// })

// const getCountryDetails = (countryCode) => new Promise((resolve, reject) => {
//   const request = new XMLHttpRequest();
//   request.addEventListener("readystatechange", (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//       let countryDetails = JSON.parse(e.target.responseText);
//       resolve(countryDetails);
//     } else if (e.target.readyState === 4) {
//       reject("Unable to fetch data...");
//     }
//   });
//   request.open("GET", `https://restcountries.eu/rest/v2/alpha/${countryCode}`);
//   request.send();
// })

// HTTP request
// const countryCode = "AR";
// const request = new XMLHttpRequest();

// request.addEventListener("readystatechange", (e) => {
//   if (e.target.readyState === 4 && e.target.status === 200) {
//     let country = JSON.parse(e.target.responseText);
//     country = country.find((country) => country.alpha2Code === countryCode);
//     console.log(country.name);
//   } else if (e.target.readyState === 4) {
//     console.log("Unable to fetch data...");
//   }
// });

// request.open("GET", "https://restcountries.eu/rest/v2/all");
// request.send();

// HTTP request

// console.log(data)
