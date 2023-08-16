let requestsLIst = loadFromLocalStorage();

//состояние фильтра, filterState используется в функции changeFilter
const filterState = filterDataLS();

function filterDataLS() {
   const data = localStorage.getItem("filter");
   if (data) return JSON.parse(data);
   else
      return {
         product: "all",
         status: "all",
      };
}

function addRequest(formData) {
   let id = 1;
   if (requestsLIst.length > 0) {
      id = requestsLIst.at(-1)["id"] + 1;
   }

   const newRequest = {
      id,
      date: new Date().toLocaleDateString(),
      status: "new",
      ...formData,
   };

   requestsLIst.push(newRequest);
   saveToLocalStorage(requestsLIst);
}

function saveToLocalStorage(arr) {
   localStorage.setItem("request", JSON.stringify(arr));
}

function loadFromLocalStorage() {
   const data = localStorage.getItem("request");
   if (data) return JSON.parse(data);
   else return [];
}

function getData() {
   return requestsLIst;
}

//поиск заявки с id === id из URLSearchParams
function findIndexLS(requestsData, requestId) {
   return requestsData.findIndex((item) => item.id == requestId);
}

//URLSearchParams
function getId() {
   const params = new URLSearchParams(window.location.search);
   return +params.get("id");
}

//для поиска заявки из LS по id
function findRequest(requestsData, requestId) {
   return requestsData.find((item) => item.id === requestId);
}

//для счетчика в левой панели
function totalNews(requestsData) {
   return requestsData.reduce(function (total, request) {
      if (request.status === "new") {
         total += 1;
      }
      return total;
   }, 0);
}

//изменяем состояние фильтра
function changeFilter(props, value) {
   filterState[props] = value;
   localStorage.setItem("filter", JSON.stringify(filterState));
   return filterState;
}

function filteredRequests(filter) {
   let filterData;
   if (filter.product !== "all") {
      filterData = requestsLIst.filter((el) => el.product === filter.product);
   } else filterData = [...requestsLIst];

   if (filter.status !== "all") {
      filterData = filterData.filter((el) => el.status === filter.status);
   }
   return filterData;
}

export {
   requestsLIst,
   addRequest,
   saveToLocalStorage,
   loadFromLocalStorage,
   getData,
   findIndexLS,
   getId,
   findRequest,
   totalNews,
   changeFilter,
   filteredRequests,
   filterDataLS,
};
