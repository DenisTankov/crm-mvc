const elements = {
   tbody: document.querySelector("#tbody"),
   productSelect: document.querySelector("#productSelect"),
   topStatusBar: document.querySelector("#topStatusBar"),
   badgeNew: document.querySelector("#badge-new"),
   leftPanel: document.querySelector("#left-panel"),
   leftStatuses: document.querySelectorAll("#left-status"),
   topStatuses: document.querySelectorAll("#top-status"),
};

const productObj = {
   "course-html": "Курс по верстке",
   "course-js": "Курс по JavaScript",
   "course-vue": "Курс по VUE JS",
   "course-php": "Курс по PHP",
   "course-wordpress": "Курс по WordPress",
};

const statusObj = {
   new: "Новая",
   inwork: "В работе",
   complete: "Завершена",
};

const statusClassObj = {
   new: "badge-danger",
   inwork: "badge-warning",
   complete: "badge-success",
};

function renderDataLS(requests) {
   requests.forEach(function (request) {
      const requestHTML = `<tr id="request-el">
      <th scope="row">${request.id}</th>
      <td>${request.date}</td>
      <td>${productObj[request.product]}</td>
      <td>${request.name}</td>
      <td>${request.email}</td>
      <td>${request.phone}</td>
      <td>
         <div class="badge badge-pill ${statusClassObj[request.status]}">${
         statusObj[request.status]
      }</div>
      </td>
      <td>
         <a href="edit.html?id=${request.id}">Редактировать</a>
      </td>
   </tr>`;

      elements.tbody.insertAdjacentHTML("beforeend", requestHTML);
   });
}

function renderTotalNews(totalNews) {
   totalNews === 0
      ? (elements.badgeNew.style.display = "none")
      : (elements.badgeNew.textContent = totalNews);
}

function renderFilterValue(filter) {
   elements.productSelect.value = filter.product;
}

function renderActivStatuses(e) {
   const dataValues = ["all", "new", "inwork", "complete"];

   if (dataValues.includes(e.target.dataset.value)) {
      const value = e.target.dataset.value;
      elements.leftStatuses.forEach((el) => el.classList.remove("active"));
      elements.leftPanel
         .querySelector(`a[data-value="${value}"]`)
         .classList.add("active");
      elements.topStatuses.forEach((el) => el.classList.remove("active"));
      elements.topStatusBar
         .querySelector(`a[data-value="${value}"]`)
         .classList.add("active");
   }
}

export {
   elements,
   renderDataLS,
   renderTotalNews,
   renderFilterValue,
   renderActivStatuses,
};
