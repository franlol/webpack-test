'use strict'

import { message } from './message.js';

import '../styles/style.css';

const main = () => {

    const btnAlert = document.querySelector("#btn-alert");
    btnAlert.addEventListener("click", message);

}

window.addEventListener("load", main);