import store from "./store.js";

// [[ MVU ]]

// HELPERS FUNCTIONS / UTILS (UTILITIES)
const qs = (s) => document.querySelector(s);

// DOM
const userDOM = qs("#user");
const loginFormDOM = qs("#loginForm");
const incrementBtnDOM = qs("#increment");
const decrementBtnDOM = qs("#decrement");
const resetBtnDOM = qs("#reset");
const countDOM = qs("#count");

// MODEL
// LOCAL STORAGE

// UPDATE
const logIn = (oldModel, user) => ({ ...oldModel, user });
const logOut = (oldModel) => ({ ...oldModel, user: null });
const increment = (oldModel) => ({ ...oldModel, count: oldModel.count + 1 });
const decrement = (oldModel) => ({ ...oldModel, count: oldModel.count - 1 });
const reset = (oldModel) => ({ ...oldModel, count: 0 });

// VIEW
const renderUser = () => {
  const user = store.get("model")?.user;
  const year = new Date(user?.createdAt).getFullYear();

  userDOM.innerHTML = `
  <p>You are logged in as ${user?.username}.</p>
  <p>You were created in ${year} year.</p>
  <button id="logout">Log out</button>
  `;

  const logoutDOM = qs("#logout");
  logoutDOM.addEventListener("click", (e) => {
    const newModel = logOut(store.get("model"));
    store.set("model", newModel);
    renderLoginForm();
  });
};
const renderLoginForm = () => {
  userDOM.innerHTML = `
  <h3>Login</h3>
  <form id="loginForm">
    <input type="text" name="username" placeholder="username" value="Username01">
    <button>Log in</button>
  </form>
  `;
};
const renderCount = () => {
  countDOM.innerHTML = store.get("model").count;
};

// EVENTS
loginFormDOM.addEventListener("submit", (e) => {
  e.preventDefault();

  const { username } = e.currentTarget.elements;
  const user = {
    username: username.value,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };

  const newModel = logIn(store.get("model"), user);
  console.log(newModel);
  store.set("model", newModel);
  renderUser();
});
incrementBtnDOM.addEventListener("click", (e) => {
  const newModel = increment(store.get("model"));
  store.set("model", newModel);
  renderCount();
});
decrementBtnDOM.addEventListener("click", (e) => {
  const newModel = decrement(store.get("model"));
  store.set("model", newModel);
  renderCount();
});
resetBtnDOM.addEventListener("click", (e) => {
  const newModel = reset(store.get("model"));
  store.set("model", newModel);
  renderCount();
});

// START APP
const startApp = () => {
  store.init();
  renderCount();
  // renderUser();
};

startApp();
