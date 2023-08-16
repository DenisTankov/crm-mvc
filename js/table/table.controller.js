import * as model from "../model.js";
import * as view from "./table.view.js";

const requestsData = model.getData();
// view.renderDataLS(requestsData);

const filter = model.filterDataLS();

//выделяем активные статусы при перезагрузке страницы
const btnsActive = document.querySelectorAll(`[data-value="${filter.status}"]`);
btnsActive.forEach((btn) => btn.classList.add("active"));

//рендерим значение фильтра по продукту
view.renderFilterValue(filter);

//передали в модели requestsLIst и отфильтровали
const filteredRequests = model.filteredRequests(filter);
view.elements.tbody.innerHTML = "";
view.renderDataLS(filteredRequests);

//колво заявок со статусом new
const totalNews = model.totalNews(requestsData);
view.renderTotalNews(totalNews);

view.elements.productSelect.addEventListener("change", function () {
   //получаем обновленное состояние фильтра
   const filteredProducts = model.changeFilter("product", this.value);
   //фильтруем заявки согласно фильтру
   const filteredRequests = model.filteredRequests(filteredProducts);
   view.elements.tbody.innerHTML = "";
   view.renderDataLS(filteredRequests);
});

view.elements.topStatusBar.addEventListener("click", statusClick);

view.elements.leftPanel.addEventListener("click", statusClick);

//функция для клика по верхнему и левому статус бару
function statusClick(e) {
   const filteredStatuses = model.changeFilter(
      "status",
      e.target.dataset.value
   );
   const filteredRequests = model.filteredRequests(filteredStatuses);
   view.elements.tbody.innerHTML = "";
   view.renderDataLS(filteredRequests);
   view.renderActivStatuses(e);
}
