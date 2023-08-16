import * as model from "../model.js";
import * as view from "./form.view.js";
import { getTestData } from "./form.test-data.js";

function getAndRenderTestData() {
   let randomData = getTestData();
   view.renderTestData(randomData);
}
getAndRenderTestData();

view.elements.form.addEventListener("submit", function (e) {
   e.preventDefault();

   const formData = view.formData();
   model.addRequest(formData);
   getAndRenderTestData();
});
