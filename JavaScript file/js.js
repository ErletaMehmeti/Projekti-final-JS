var emojis = ["😀","😀", "😂","😂", "😍", "😍","🤔", "🤔", "😎","😎", "🌈","🌈", "🐶","🐶", "❤️","❤️"];
var shuf_emojis = emojis.sort(() => (Math.random() > 0.5 ? 1 : -1));
var openedCards = [];
var startTime;
var timerInterval;

function updateTimer() {
    let elapsed = Math.floor((Date.now() - startTime) / 1000);
    document.querySelector('.timer').textContent = `Time: ${elapsed} s`;
}

function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
}

// Vendos kartat
for (var i = 0; i < shuf_emojis.length; i++) {
    var box = document.createElement("div"); // Krijon një element të ri div për secilën emoji
    box.className = "item";
    box.innerHTML = shuf_emojis[i];
    box.dataset.emoji = shuf_emojis[i];

    box.onclick = function() {
        if (!timerInterval) startTimer(); // Fillon timer-in vetëm në klikimin e parë
        if (openedCards.length < 2 && !this.classList.contains('boxOpen') && !this.classList.contains('boxMatch')) {
            this.classList.add('boxOpen');
            openedCards.push(this);
            
            if (openedCards.length === 2) {
                setTimeout(checkMatch, 500);
            }
        }
    };

    document.querySelector('.game').appendChild(box); // Sigurohet që secila kartë të shtohet në `.game`
}

function checkMatch() {
    if (openedCards[0].dataset.emoji === openedCards[1].dataset.emoji) {
        openedCards[0].classList.add('boxMatch');
        openedCards[1].classList.add('boxMatch');
    } else {
        openedCards[0].classList.remove('boxOpen');
        openedCards[1].classList.remove('boxOpen');
    }
    
    openedCards = [];

    if (document.querySelectorAll('.boxMatch').length === emojis.length) {
        clearInterval(timerInterval);
        alert(`Ke fituar! Koha juaj: ${document.querySelector('.timer').textContent}`);
    }
}




var emojis = ["😀","😀", "😂","😂", "😍", "😍","🤔", "🤔", "😎","😎", "🌈","🌈", "🐶","🐶", "❤️","❤️"];
var shuf_emojis = emojis.sort(() => (Math.random() > 0.5 ? 1 : -1));// merr elementet nga lista emojis dhe i rendit ne menyre jo te rregullt
//edhe sa here qe loja ja nis ato i ndrrojne pozicionet
var openedCards = [];//e kom ru listen e kartave te hapura, qe kan me u krahasu masanej
var startTime;//e run kohen kur loja fillon
var timerInterval;//e run intervalin timer edhe e perditson kohe ne ekran per me tregu se sa kohe ka kaluar prej fillimit te lojes

function updateTimer() {
    let elapsed = Math.floor((Date.now() - startTime) / 1000);//Ky funksion merr kohen aktuale ne sekonda
    document.querySelector('.timer').textContent = `Time: ${elapsed} s`;//Ky variabl trg nr e s qe kan kalu prej fillimit te lojes
}

function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);//E kthen nr ne s duke e nda me 1000 dhe e rrumbullakos ne nr te plot
}

// Vendos kartat
for (var i = 0; i < shuf_emojis.length; i++) {// Krijon ni div per secilen emoji ne listen perzier shuf_emojis nalt
    var box = document.createElement("div"); // Krijon nje element div per secilen emoji
    box.className = "item";//I jep seciles kart kl item per me stilizu
    box.innerHTML = shuf_emojis[i];//Vendos emojin brenda seciles kart
    box.dataset.emoji = shuf_emojis[i];//E ruan qat emoji qe na me mujt ma vone me i krahasu, kur e kontrollojme me pas funksionin boxMatch

    box.onclick = function() {
        if (!timerInterval) startTimer(); // Fillon timer-in veq ne klikimin e 1
        if (openedCards.length < 2 && !this.classList.contains('boxOpen') && !this.classList.contains('boxMatch')) {
            // Kontrollon nese jon hap me pak se 2 karta dhe
            // nese karta qe u qel ose aktuale nuk eshte hap ose nuk ka perputhje
            this.classList.add('boxOpen');//qat kart qe e kena hap i shtohet kl boxOpen
            openedCards.push(this);//Run qat karten qe e kena hap ne listen openedCards per me perdor me vone
            
            // Kontrollon dy karta a jane hapur
            if (openedCards.length === 2) {
                setTimeout(checkMatch, 500);////Nese dy karta jan hap
                //pas nje vonese prej 500 ms thirret funksioni checkMatch per me kontrollu nese jon te njejta
            }
        }
    };

    document.querySelector('.game').appendChild(box); // Sigurohet qe krejt kartat te shtohen ne klasen .game
}

function checkMatch() {
    if (openedCards[0].dataset.emoji === openedCards[1].dataset.emoji) {
        openedCards[0].classList.add('boxMatch');
        openedCards[1].classList.add('boxMatch');
    } else {
        openedCards[0].classList.remove('boxOpen');
        openedCards[1].classList.remove('boxOpen');
    }//kontrollon nese i kena hap dy kuti edhe a e kan te njejtin emokji
    //Nese po kontrollohet nese ato jane te njejta edhe i shtohet kl boxMatch, nese jo ato mshelen edhe boeht remove kl boxmach
    
    openedCards = [];
    

    if (document.querySelectorAll('.boxMatch').length === emojis.length) {
        clearInterval(timerInterval);
        alert(`Ke fituar! Koha juaj: ${document.querySelector('.timer').textContent}`);

      
    }
}
//Pas kontrollit shikohet nese krejt kartat jon hap nese te gjitha qiftet jon gjetur
//Timeri ndalon dhe shfaqet ni mszh ...
