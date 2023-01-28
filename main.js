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
    easeOut(header);
    giveHidden(header);
    removeHidden(section);
    exitFunction(section);
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

function exitFunction(element) {
  const exitBtn = element.children[0];
  exitBtn.addEventListener('click', () => {
    exitBtn.parentElement.classList.add('hidden');
    header.classList.remove('hidden');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('img').style.opacity = 1;
});

function easeOut(element) {
  element.classList.add('easeOut');
}
