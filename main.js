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
const startPositionY = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};
const ul = document.querySelector('ul');
const addLi = () => {
    // let elementsNumber;
    // window.innerWidth < 700 ? elementsNumber = 300 : elementsNumber = 600;
    // for (let i = 0; i <= elementsNumber; i++) {
    const li = document.createElement('li');
    li.className = "li-character";
    li.textContent = characters[Math.floor(Math.random() * characters.length)];
    ul.appendChild(li);
    li.style.left = `${startPositionY(0,100)}%`;
    setTimeout(() => {
        ul.removeChild(li)
    }, 5000);
    // li.style.bottom = `${startPositionY(-7,-30)}%`;
    // characterPositionX += 2;
    //     if (characterPositionX >= 100) {
    //         characterPositionX = 0;
    //         characterPositionY -= 7;
    //     }
    //     if (characterPositionY <= -105)
    //         li.style.animationDelay = '7s';
    //     else if (characterPositionY <= -98)
    //         li.style.animationDelay = '6.5s';
    //     else if (characterPositionY <= -91)
    //         li.style.animationDelay = '6s';
    //     else if (characterPositionY <= -84)
    //         li.style.animationDelay = '5.5s';
    //     else if (characterPositionY <= -77)
    //         li.style.animationDelay = '5s';
    //     else if (characterPositionY <= -70)
    //         li.style.animationDelay = '4.5s';
    //     else if (characterPositionY <= -63)
    //         li.style.animationDelay = '4s';
    //     else if (characterPositionY <= -56)
    //         li.style.animationDelay = '3.5s';
    //     else if (characterPositionY <= -49)
    //         li.style.animationDelay = '3s';
    //     else if (characterPositionY <= -42)
    //         li.style.animationDelay = '2.5s';
    //     else if (characterPositionY <= -35)
    //         li.style.animationDelay = '2s';
    //     else if (characterPositionY <= -28)
    //         li.style.animationDelay = '1.5s';
    //     else if (characterPositionY <= -21)
    //         li.style.animationDelay = '1s';
    //     else if (characterPositionY <= -14)
    //         li.style.animationDelay = '.5s';

    //     if (characterPositionY <= (-ul.offsetHeight))
    //         return;
    // }

}
// window.onload = addLi();
setInterval(addLi, 50);
const animatedElements = document.querySelectorAll('.li-character');
const changeCharacter = () => {
    [...animatedElements].forEach(element => {
        element.textContent = characters[Math.floor(Math.random() * characters.length)];
    })
}
// setInterval(changeCharacter, 200);

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
