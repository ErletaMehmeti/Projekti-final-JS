var emojis = ["😀", "😀", "😂", "😂", "😍", "😍", "🤔", "🤔", "😎", "😎", "🌈", "🌈", "🐶", "🐶", "❤️", "❤️"];
var shuf_emojis = emojis.sort(() => (Math.random() > 0.5 ? 1 : -1)); // merr elementet nga lista emojis dhe i rendit ne menyre jo te rregullt
//edhe sa here qe loja ja nis ato i ndrrojne pozicionet
var openedCards = []; //e kom ru listen e kartave te hapura, qe kan me u krahasu masanej
var startTime; //e run kohen kur loja fillon
var timerInterval; //e run intervalin timer edhe e perditson kohe ne ekran per me tregu se sa kohe ka kaluar prej fillimit te lojes
var matchedCards = [];

function updateTimer() {
    let elapsed = Math.floor((Date.now() - startTime) / 1000);//Ky funksion merr kohen aktuale ne sekonda
    document.querySelector('.timer').textContent = `Time: ${elapsed} s`;//Ky variabl trg nr e s qe kan kalu prej fillimit te lojes
}

function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);//E kthen nr ne s duke e nda me 1000 dhe e rrumbullakos ne nr te plot
}

function checkWin() {
    if (matchedCards.length === shuf_emojis.length) {
        clearInterval(timerInterval); // ndalet timeri
        alert(`Congratulations! You matched all cards in ${Math.floor((Date.now() - startTime) / 1000)} seconds.`);
    }
}

function handleCardClick(card, emoji) {
    if (openedCards.length < 2 && !openedCards.includes(card) && !matchedCards.includes(card)) {
        card.classList.add('boxOpen');
        card.textContent = emoji;
        openedCards.push(card);

        if (openedCards.length === 2) {
            if (openedCards[0].textContent === openedCards[1].textContent) {
                // kur e gjen karten e sakte
                matchedCards.push(...openedCards);
                openedCards = [];
                checkWin();
    }else {
        // Shto animacionin shake dhe fshi pas animacionit
        openedCards.forEach(c => c.classList.add('shake'));
        setTimeout(() => {
            openedCards.forEach(c => {
                c.classList.remove('boxOpen', 'shake');
                c.textContent = '';
            });
            openedCards = [];
        }, 1000);
    }
}
}
}
 //else {
//                 // me u bo restart nese ndodh ndonje vonese
//                 setTimeout(() => {
//                     openedCards.forEach(c => {
//                         c.classList.remove('boxOpen');
//                         c.textContent = '';
//                     });
//                     openedCards = [];
//                 }, 1000);
//             }
//         }
//     }
// }



// Krijimi i kartave dhe fillimi i lojes 
function initGame() {
    const gameContainer = document.querySelector('.game');
    gameContainer.innerHTML = '';
    matchedCards = [];
    shuf_emojis.forEach(emoji => {
        const card = document.createElement('div');
        card.classList.add('item');
        card.addEventListener('click', () => handleCardClick(card, emoji));
        gameContainer.appendChild(card);
    });
    startTimer();
}

// per me fillu lojen si te hapet dritarja
window.onload = initGame;







    