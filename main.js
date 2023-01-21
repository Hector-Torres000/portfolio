const mainSections = document.querySelector('#main').children;
const header = document.querySelector('header');

for (const section of mainSections) {
  section.classList.add('hidden');
}

const buttons = document.querySelectorAll('li');
const listSection = {
  about: 'aboutPage',
  service: 'servicePage',
  project: 'projectPage',
  contact: 'contactPage',
};

for (const button of buttons) {
  button.addEventListener('click', () => {
    const id = getId(button);
    const section = document.querySelector(`#${listSection[id]}`);
    console.log(section);
    giveHidden(header);
    removeHidden(section);
    createExit(section);
  });
}
function getId(element) {
  return element.getAttribute('id');
}

function giveHidden(element) {
  element.classList.add('hidden');
}

function removeHidden(element) {
  element.classList.remove('hidden');
}
function createExit(element) {
  const exitButton = document.createElement('button');
  exitButton.textContent = 'X';
  exitButton.classList.add('exitBtn');
  exitFunction(exitButton);
  element.append(exitButton);
}
function exitFunction(element) {
  element.addEventListener('click', () => {
    element.parentElement.classList.add('hidden');
    header.classList.remove('hidden');
  });
}
