//defining global variables
const mainSections = document.querySelector('#main').children;
const header = document.querySelector('header');
const buttons = document.querySelectorAll('li');
const exitBtns = document.querySelectorAll('.exitBtn');

const listSection = {
  about: 'aboutPage',
  service: 'servicePage',
  project: 'projectPage',
  contact: 'contactPage',
};

//DOM Manipulation Execution
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('img').style.opacity = 1;
});

for (const section of mainSections) {
  section.classList.add('hidden');
}

for (const button of buttons) {
  button.addEventListener('click', () => {
    const id = getId(button);
    const section = document.querySelector(`#${listSection[id]}`);
    easeOut(header);
    removeHidden(section);
  });
}

for (let btn of exitBtns) {
  btn.addEventListener('click', () => {
    btn.parentElement.classList.add('hidden');
    easeIn(header);
  });
}

//function components
function getId(element) {
  return element.getAttribute('id');
}

function giveHidden(element) {
  element.classList.add('hidden');
}

function removeHidden(element) {
  element.classList.remove('hidden');
}

function easeOut(element) {
  element.classList.remove('easeIn');
  element.classList.add('easeOut');
}
function easeIn(element) {
  element.classList.remove('easeOut');
  element.classList.add('easeIn');
}
