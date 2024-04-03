import React from "react";

String.prototype.currencyFormat = function () {
  const digits = this.split('.');
  return digits[0].replace(/,/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (digits.length > 1 ? `.${digits[1]}` : '');
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
