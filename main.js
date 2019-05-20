//Matrix animation

const characters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '/', '?', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '|'];

const createList = () => {
    const list = document.createElement('ul')
    list.className = "animate-list";
    document.querySelector('header').appendChild(list)
}
window.onload = createList();


let characterPositionX = 0;
let characterPositionY = -7;
const startPositionX = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};
const ul = document.querySelector('ul');
const addLi = () => {
    const li = document.createElement('li');
    li.className = "li-character";
    li.textContent = characters[Math.floor(Math.random() * characters.length)];
    ul.appendChild(li);
    li.style.left = `${startPositionX(0,100)}%`;
    li.style.transform = `scale(${(Math.random()*(1.5 - 1) +1).toFixed(1)}`
    setTimeout(() => {
        ul.removeChild(li)
    }, 5000);
}

const charAmount = () => {
    if (window.innerWidth < 1200) return 100;
    else return 20;
}
const timer = setInterval(addLi, charAmount());

//header typing effect

const h1 = document.querySelector('.header h1');
const h2 = document.querySelector('.header h2');
const sentences = [`"Is this a test sentence?"`, `"I'm not sure...`, ` Yes it is!"`];
let wordIndex = 0;
let sentenceIndex = 0;
const typing = () => {
    const timer = setInterval(() => {
        h1.innerHTML += sentences[sentenceIndex][wordIndex];
        wordIndex++;
        if (wordIndex === sentences[sentenceIndex].length) {
            sentenceIndex++;
            wordIndex = 0;
            clearInterval(timer);
        }
    }, 120);
}
window.onload = typing();
typingH2 = () => {
    const timer2 = setInterval(() => {
        h2.innerHTML += sentences[sentenceIndex][wordIndex];
        wordIndex++;
        if (wordIndex === sentences[sentenceIndex].length) {
            sentenceIndex++;
            wordIndex = 0;
            clearInterval(timer2);
        }
    }, 110);
}
setTimeout(typingH2, 5000);
typingH22 = () => {
    const timer3 = setInterval(() => {
        h2.innerHTML += sentences[sentenceIndex][wordIndex];
        wordIndex++;
        if (wordIndex === sentences[sentenceIndex].length) {
            sentenceIndex++;
            wordIndex = 0;
            clearInterval(timer3);
        }
    }, 110);
}
setTimeout(typingH22, 8000);
