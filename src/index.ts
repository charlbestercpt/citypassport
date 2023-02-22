import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'Charl Bester';
  greetUser(name);
  document.body.style.backgroundColor = 'red';
});
