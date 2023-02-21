import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'Charl Doen';
  greetUser(name);
  document.body.style.backgroundColor = 'red';
});
