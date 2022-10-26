import store from "./store.js";
import helpers from "./helpers.js";

const modalDOM = helpers.qs("#modal");
const openModalDOM = helpers.qs("#openModal");

// MODEL
let model = store.get("model");

// VIEW
const renderModal = () => {
  console.log(model);
  if (model.isModalOpen) {
    modalDOM.innerHTML = `
    <button id="closeModal">X</button>
    <p>kfdjkfjdkfdkfdjfdk</p>
    `;

    const closeModalDOM = helpers.qs("#closeModal");
    closeModalDOM.addEventListener("click", (e) => {
      const newModel = { ...model, isModalOpen: false };
      model = store.set("model", newModel);
      renderModal();
    });
  } else {
    modalDOM.innerHTML = "";
  }
};

// EVENTS
openModalDOM.addEventListener("click", (e) => {
  const newModel = { ...model, isModalOpen: true };
  model = store.set("model", newModel);
  renderModal();
});

store.init();

console.log(store.get("model"));
