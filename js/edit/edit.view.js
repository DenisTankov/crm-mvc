const elements = {
   form: document.querySelector("#form"),
   number: document.querySelector("#number"),
   date: document.querySelector("#date"),
   product: document.querySelector("#product"),
   name: document.querySelector("#name"),
   email: document.querySelector("#email"),
   phone: document.querySelector("#phone"),
   status: document.querySelector("#status"),
};

function renderRequestEdit(request) {
   elements.number.textContent = request.id;
   elements.date.textContent = request.date;
   elements.product.value = request.product;
   elements.name.value = request.name;
   elements.email.value = request.email;
   elements.phone.value = request.phone;
   elements.status.value = request.status;
}

function saveEditedRequest(requestsData, indexInLS) {
   const editedRequest = {
      id: +elements.number.textContent,
      date: elements.date.textContent,
      product: elements.product.value,
      name: elements.name.value,
      email: elements.email.value,
      phone: elements.phone.value,
      status: elements.status.value,
   };

   requestsData[indexInLS] = editedRequest;
}

export { elements, renderRequestEdit, saveEditedRequest };
