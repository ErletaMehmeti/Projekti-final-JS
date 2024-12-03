var emojis = ["😀","😀", "😂","😂", "😍", "😍","🤔", "🤔", "😎","😎", "🌈","🌈", "🐶","🐶", "❤️","❤️"];
var shuf_emojis = emojis.sort(() => (Math.random() >.5 ? 2 : -1)); /* merr elementet nga lista emojis dhe i rendit ne menyre qe nuk ndjek rendin origjinal. */
for (var i = 0; i < shuf_emojis.length; i++) {
let box=document.createElementNS('div');
box.className="item";
box.innerHTML=shuf_emojis[i]/*Ky cikel for kalon te secila emoji dhe krijon nje element div per secilen emoji.
qdo div ka nje klase item dhe brenda tij vendoset emoji perkatese.*/ 
}

box.onclick = function() {
    this.classList.add('boxOpen');
    setTimeout(function() {
      
        if (document.querySelectorAll('.boxOpen').length === 2) {
            if (document.querySelectorAll('.boxOpen')[0].innerHTML === document.querySelectorAll('.boxOpen')[1].innerHTML) {
                document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch');
                document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch');
                
                document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');
                document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');/*kontrollon nese i kena hap dy kuti.
                Nese po kontrollohet nese ato jane te njejta, nese po ato kan me marr klasen boxMatch ndryshe ato mshelen*/

              
            if (document.querySelectorAll('.boxMatch').length === emojis.length) {
                    alert('win');/* Nese nr i kutive me klasen boxMatch eshte i njejt me nr total te emojis shfaqet nje mszh qe tregon se perdoruesi ka fitu*/ 
                }
            }  
            else {
            
                document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');/*Nese te if ku kontrollohet nese ato dy kuti kane te njejtin emoji eshte 
                i pasakte, ky kod do te ekzekutohet. dmth kur nuk jon te njejta */ 
                document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');/*Ky kerkon te paren nga kutit me klasen boxOpen dhe heq qat klase.
                Dmth qe kutia e pare do te mshelet dhe perdoruesi nuk ka me kan ne gjendje me pa ata si nje kuti te hapur*/ 
            }
        }
    }, 500)} /*ky nr jane sekonsat e lejon perdorusin qe me i shiku kutit e hapuna */

  document.querySelector('.game').appendChild(box);




  var emojis = ["😀", "😀", "😂", "😂", "😍", "😍", "🤔", "🤔", "😎", "😎", "🌈", "🌈", "🐶", "🐶", "❤️", "❤️"];
var shuf_emojis = emojis.sort(() => (Math.random() > .5 ? 2 : -1)); // merr elementet nga lista emojis dhe i rendit ne menyre qe nuk ndjek rendin origjinal.

for (var i = 0; i < shuf_emojis.length; i++) {
    let box = document.createElement('div'); // Korrigjimi është këtu
    box.className = "item";
    box.innerHTML = shuf_emojis[i]; // Ky cikel for kalon te secila emoji dhe krijon nje element div per secilen emoji.
    document.querySelector('.game').appendChild(box);

    box.onclick = function () {
        this.classList.add('boxOpen');
        setTimeout(function () {

            if (document.querySelectorAll('.boxOpen').length === 2) {
                if (document.querySelectorAll('.boxOpen')[0].innerHTML === document.querySelectorAll('.boxOpen')[1].innerHTML) {
                    document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch');
                    document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch');

                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');
                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');

                    if (document.querySelectorAll('.boxMatch').length === emojis.length) {
                        alert('win');
                    }
                }
                else {
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');
                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
                }
            }
        }, 500)
    }
}

var emojis = ["😀","😀", "😂","😂", "😍", "😍","🤔", "🤔", "😎","😎", "🌈","🌈", "🐶","🐶", "❤️","❤️"];
var shuf_emojis = emojis.sort(() => (Math.random() > 0.5 ? 1 : -1));// merr elementet nga lista emojis dhe i rendit ne menyre jo te rregullt,
//edhe sa here qe loja ja nis ato i ndrrojne pozicionet
var openedCards = [];//e kom ru listen e kartave te hapura, qe kan me u krahasu masanej
var startTime; //e run kohen kur loja fillon
var timerInterval;//e run intervalin timer edhe e perditson kohe ne ekran per me tregu se sa kohe ka kaluar prej fillimit te lojes
var box = document.createElement("div");


function updateTimer() {
    let elapsed = Math.floor((Date.now() - startTime) / 1000);//Ky funksion merr kohen aktuale ne milisekonda
    document.querySelector('.timer').textContent = `Time: ${elapsed} s`;//Ky variabl trg nr e s qe kan kalu prej fillimit te lojes
}

// Fillon koha  
function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);//E kthen nr ne s duke e nda me 1000 dhe e rrumbullakos ne nr te plot
}

// Vendos kartat
for (var i = 0; i < shuf_emojis.length; i++) { // Krijon ni div per secilen emoji ne listen perzier shuf_emojis nalt
    box.className = "item";//I jep seciles kart kl item per me stilizu 
    box.innerHTML = shuf_emojis[i]; //Vendos emojin brenda seciles kart.
    box.dataset.emoji = shuf_emojis[i]; //Ruan info e emojit per me perdor me vone 
    
    
    // Kliko per me hap karten
    /*box.onclick = function() {//Prgj ndaj klikimeve ne kart function
        if (openedCards.length < 2 && !this.classList.contains('boxOpen') && !this.classList.contains('boxMatch')) {
            //Kontrollon nese jon hap me pak se 2 karta dhe
            // nese karta qe u qel ose aktuale nuk eshte hap ose nuk ka perputhje
            this.classList.add('boxOpen');//Hap karten edhe ja shton kl boxOpen
            openedCards.push(this);//Ruan karten e hapur ne listen openedCards per me perdor me vone
            
            // Kontrollon dy karta a jane hapur
            if (openedCards.length === 2) {
                setTimeout(checkMatch, 500);//Nese dy karta jan hap
                //pas nje vonese prej 500 ms thirret funksioni checkMatch per me kontrollu nese jon te njejta
            }
        }
    };*/

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

    document.querySelector('.game').appendChild(box);
}

// Kontrollon
function checkMatch() {
    if (openedCards[0].dataset.emoji === openedCards[1].dataset.emoji) {
        openedCards[0].classList.add('boxMatch');
        openedCards[1].classList.add('boxMatch');
    } else {
        openedCards[0].classList.remove('boxOpen');
        openedCards[1].classList.remove('boxOpen');
    }//kontrollon nese i kena hap dy kuti edhe a e kan te njejtin emokji
    //Nese po kontrollohet nese ato jane te njejta edhe i shtohet kl boxMatch, nese jo ato mshelen edhe boeht remove kl boxmach

    
    openedCards = []; //var qe e kom perdor per me ruajt array te kartave qe jon hap nga lojtari

    // Kontrollo fitoren
    if (document.querySelectorAll('.boxMatch').length === emojis.length) {
        clearInterval(timerInterval);
        alert(`Ke fituar ! Koha juaj: ${document.querySelector('.timer').textContent}`);
    }
}//Pas kontrollit shikohet nese krejt kartat jon hap nese te gjitha qiftet jon gjetur
//Timeri ndalon dhe shfaqet ni mszh ...





function checkMatch() {
    if (openedCards[0].dataset.emoji === openedCards[1].dataset.emoji) {
        openedCards[0].classList.add('boxMatch');
        openedCards[1].classList.add('boxMatch');// nese dy katata i kem te njejta i shtohet kls boxMatch 
        openedCards = [];// kur hapen dy karta ato shtohen ne listen openCards qather qe mu mshelshin kartat tash nuk mshelen 
    } 
    else{
        openedCards[0].classList.add('shake');//nese si kem te njejta i shtohet kls shake 
        openedCards[1].classList.add('shake');

        setTimeout(() => {
            openedCards[0].classList.remove('boxOpen', 'shake');// pas 500 s ka me ju hjek dy klasat edhe kan me u mshel kartat 
            openedCards[1].classList.remove('boxOpen', 'shake');
        }, 500); 
    }
    setTimeout(() => {
        openedCards[0].classList.remove('boxOpen', 'shake');
        openedCards[1].classList.remove('boxOpen', 'shake');// kto i kena shkru per siguri 

        openedCards = [];//e zbraz listen 
    }, 500);
}    

