'use strict'

import { message } from './message.js';
import { v4 as uuid } from 'uuid';
import $ from 'jquery';

import '../styles/style.css';

const main = () => {

    const btnAlert = document.querySelector("#btn-alert");
    // const btnJq = document.querySelector("#btn-jquery");

    btnAlert.addEventListener("click", message);
    // btnJq.addEventListener("click", () => alert(uuid()));
    $("#btn-jquery").click(() => alert(uuid()));

}

window.addEventListener("load", main);