import react, { Component } from "react";

export const Information = [
  {
    name: "A군",
    age: 21,
    location: "Seoul",
  },
  {
    name: "B군",
    age: 21,
    location: "Incheon",
  },
  {
    name: "C군",
    age: 21,
    location: "Incheon",
  },
  {
    name: "D군",
    age: 21,
    location: "Seoul",
  },
  {
    name: "E군",
    age: 21,
    location: "Seoul",
  },
  {
    name: "F군",
    age: 21,
    location: "Seoul",
  },
  {
    name: "G군",
    age: 21,
    location: "Seoul",
  },
  {
    name: "H군",
    age: 21,
    location: "Seoul",
  },
  {
    name: "I군",
    age: 21,
    location: "Seoul",
  },
  {
    name: "J군",
    age: 21,
    location: "Busan",
  },
  {
    name: "K군",
    age: 21,
    location: "Gwangyang",
  },
];

axios({
  method: "get",
  url: "url",
  responseType: "type",
}).then(function (response) {
  // response Action
});
