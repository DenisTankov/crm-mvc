import * as model from "../model.js";
import * as view from "./edit.view.js";

const requestsData = model.getData();
//получаем id из URLSearchParams
const requestId = model.getId();
//находим заявку по id
const request = model.findRequest(requestsData, requestId);
view.renderRequestEdit(request);

const indexInLS = model.findIndexLS(requestsData, requestId);

view.elements.form.addEventListener("submit", function (e) {
   e.preventDefault();
   view.saveEditedRequest(requestsData, indexInLS);
   model.saveToLocalStorage(requestsData);
   window.location = "table.html";
});
