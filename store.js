const INIT_MODEL = {
  count: 0,
  user: null,
  isModalOpen: false,
};

const set = (key, item) => {
  try {
    const jsonItem = JSON.stringify(item);
    localStorage.setItem(key, jsonItem);
    return get("model");
  } catch (e) {
    console.log(e.message);
  }
};

const get = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (e) {
    console.log(e.message);
  }
};

const init = () => {
  const model = get("model");

  if (model) {
    return model;
  } else {
    set("model", INIT_MODEL);
    return INIT_MODEL;
  }
};

export default { set, get, init };
