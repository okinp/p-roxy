// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");

const observe = function(state) {
  return new Proxy(state, {
    set(target, key, value, receiver) {
      console.log(`Setting ${key} to ${value}`);
      return Reflect.set(...arguments);
    },
    get(target, key, receiver) {
      console.log(`Geting ${key}`);
      return Reflect.get(...arguments);
    }
  });
};

const initialState = {
  name: "Nikolas",
  surname: "Psaroudakis"
};

const user = observe(initialState);

user.name = "Nikolaos";
user.surname = user.surname + " Jr.";
console.log(user);

appDiv.innerHTML = `<h1>JS Starter</h1>`;
