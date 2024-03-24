"use strict";

const countries = document.querySelector(".countries");

const getCountry = function (country) {
  console.log(country);
  const req = new XMLHttpRequest();
  req.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  req.send();

  req.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);

    // AJ STYLE
    // const lang = Object.entries(data.languages);
    // const cur = Object.entries(data.currencies);
    //<p class ="country_row"><span>🗣️<span>${lang[0][1]}</p>

    console.log(this.currency);
    const html = ` <article class="country">
  <img class="country_img" src="${data.flags.png}" alt="TH" />
  <div class="country_data">
    <h3 class="country_name">${data.name.common}</h3>
    <h4 class="country_region">${data.region}</h4>
    <p class ="country_row"><span>🗣️<span>${Object.values(data.languages).map(
      (x) => `<span>${x}</span>`
    )}</p>
    <p class ="country_row"><span>💰<span>${
      Object.values(data.currencies)[0].name
    }</p>
    <p class ="country_row"><span>🧑‍🤝‍🧑<span>${data.population}</p>
    <p class ="country_row"><span>🏙️<span>${data.capital}</p>

    <p class ="country_row"><span>🫂<span>${Object.values(data.borders).map(
      (x) => `<span>${x}</span>`
    )}</p>
    
  </div>
  </article>`;
    countries.insertAdjacentHTML("beforeend", html);
    countries.style.opacity = 1;
  });
};
getCountry("thailand");
getCountry("japan");
getCountry("usa");
getCountry("hk");
