'use strict'

import { message } from './message.js';

const main = () => {

    const btnAlert = document.querySelector("#btn-alert");
    btnAlert.addEventListener("click", message);

}

window.addEventListener("load", main);