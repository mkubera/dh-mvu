const INIT_MODEL = {
  count: 0,
  user: null,
};

const set = (key, item) => {
  try {
    const jsonItem = JSON.stringify(item);
    localStorage.setItem(key, jsonItem);
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
  set("model", INIT_MODEL);
};

export default { set, get, init };
