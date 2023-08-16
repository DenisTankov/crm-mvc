const elements = {
   name: document.querySelector("#name"),
   phone: document.querySelector("#phone"),
   email: document.querySelector("#email"),
   product: document.querySelector("#product"),
   requestBtn: document.querySelector("#request-btn"),
   form: document.querySelector("#form"),
};

function renderTestData(randomData) {
   elements.name.value = randomData.name;
   elements.phone.value = randomData.phone;
   elements.email.value = randomData.email;
   elements.product.value = randomData.product;
}

function formData() {
   return {
      name: elements.name.value,
      phone: elements.phone.value,
      email: elements.email.value,
      product: elements.product.value,
   };
}

export { elements, renderTestData, formData };
