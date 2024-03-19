import React from "react";

String.prototype.currencyFormat = function () {
  return this.replace(/,/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

// for reactjs
String.prototype.nl2br = function () {
  return this.split('\n').map((line, i) => (
    <p key={i} className='mb-0'>{line}</p>));
};

// for jQuery
String.prototype.$nl2br = function () {
  return this.replace(/\n/g, '<br/>');
};

Number.prototype.currencyFormat = function () {
  return this.toString().currencyFormat();
};
