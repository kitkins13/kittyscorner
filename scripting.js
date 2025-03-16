//pretty title colours!
let prettyColours = document.getElementById("title");

function colorValue() {
  return Math.floor(Math.random() * 256);
}

function colorChange(event){
  let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';
  event.target.style.color = randomColor;
}

prettyColours.onclick = colorChange;

//randomise a book cover
let randomise = document.getElementById("randomise");
let randomBook = document.getElementById("random-book");
let randomBlurb = document.getElementById("random-blurb");

const srcArray = ['./images/tccover.jpg', './images/btshcover.jpg', './images/dmcover.jpg', './images/wmcover.jpg', './images/tscover.jpg', './images/mnrcover.jpg', './images/dtcover.jpg', './images/fmcover.jpg', './images/hrcover.jpg'];
// cover image filepath array

randomise.addEventListener('click', () => {
    randomImage();
    bookBlurb();
    randomBook.style.display = "inline";
    randomBlurb.style.display = "inline";
    // show random book cover and blurb when button is clicked
});

let index;
// Current image index

randomImage();
function randomImage() {

    const randomIndex = Math.floor(Math.random()*srcArray.length);
    // Generates random number between 0 and array length-1 (because Math.floor rounds)

    if (randomIndex !== index) {
    // If number NOT same as current image index...

        randomBook.src = srcArray[randomIndex];
        //...set as image src

        index = randomIndex;
        //...and as new current index value

    } else {
    // If number same as current index value (repeat)...

        randomImage();
        //...start function from beginning again
    }
}

bookBlurb();
function bookBlurb() {

    let setBlurb = index;

    if (setBlurb === 0){
      randomBlurb.innerHTML = "When Kandrina’s beloved older brother Perlak was taken by the fearsome Lightning Demons, she swore an oath to the gods that she would avenge him. But the Demons may not be as evil as the People’s temples say they are. They may not even be responsible for her brother’s death. Her tutor Remlik has another theory, but when Kandrina tries to explain it to her father, she is declared a heretic. The priests punish her, but she is rescued by a curious Demon, who takes her to their crystal city on the plains and begins teaching her that the two races are not so different.";
    } else if (setBlurb === 1){
    randomBlurb.innerHTML = "The old priests have fallen, the Demons are no more, but Kandrina has yet to find out what really killed her brother. Her need for revenge takes her and her former teacher on a perilous journey into uncharted territory. They must travel north, into the lands of the fearsome lizard men known as the Li Buqu. Meanwhile, the tribal lands are under attack from predators, and rising internal conflicts between the Vice-Chiefs threaten to disrupt the People's way of life.";
    } else if (setBlurb === 2){
    randomBlurb.innerHTML = "The Lizard War is over and the tribal lands are slowly returning to normal. Now the People are asking what else lies outside of their own lands, what other threats or allies could be out there? In hopes of answering some of these questions, Kandrina and Remlik have begun a new study of the old Explorer's Guild journals. They discover a mystery in the writings of 'C', an explorer from over 200 years ago, whose last journal was lost. Legend has it 'C' was exploring the Forest of the West while writing it, so naturally the two scholars decide to head westwards in their never-ending quest for knowledge. But will they stumble across something best left undisturbed?";
    } else if (setBlurb === 3){
    randomBlurb.innerHTML = "With her sister still lost in the Forest, apprentice mage Enkarini is practicing harder than ever in the hopes of finding some way of getting her back safely. A combination of natural talent and stubborn determination help her to quickly become one of the most skilled mages on Drenius, despite her tender age. When the green dragons of the Lost Lands become agitated and fly south, burning all in their path, Enkarini discovers she possesses abilities far beyond anyone's expectations.";
    } else if (setBlurb === 4){
    randomBlurb.innerHTML = "Prince Michael has returned from Slokos, bringing the fire-haired girl from the south he fell in love with. His father takes issue with the situation, but has no time to quarrel with his youngest son. The Dukes of the East and South are each plotting against the Crown, driving the kingdom towards civil war. Michael and his brother, Crown Prince Oliver, try to bring the separate factions to an agreement, but the summit is devastated when a rogue shadow dragon attacks, bringing dark creatures to destroy Oakshire. As people flee the devastation in the east, Michael is tasked with hunting down Henry Tarworth, an advisor with a dark secret that could turn the kingdom upside down.";
    } else if (setBlurb === 5){
    randomBlurb.innerHTML = "After the evacuation of the East, King Oliver sealed off what little was left of the land in a desperate attempt to keep the Shades confined. The ship of mages from the southern continent arrives to help in any way they can, and discover an ancient ritual to release trapped souls from the magic controlling them. Prince Michael is still tracking the man behind the chaos, and his search leads him to a hidden village of mages deep in the Northern Mountains who are rather reluctant to help. Meanwhile, the political situation in the elven republic to the west takes a turn for the worst when the charismatic but dangerous Councillor Nightbreeze becomes Archon. His promises of elven glory and power come at a terrible price, one that perhaps nobody should have to pay.";
    } else if (setBlurb === 6){
    randomBlurb.innerHTML = "After the devastating attack on the People's towns, young mage Enkarini and her friends, Soris and Caiara, travel to the mysterious village known as Dragon's Teeth. They plan to spend some time among the experienced and powerful mages there, learning more about their abilities. Enkarini especially wants to find a way to control her own shadow magic, something she has grown more uneasy with since her father's death. Their plans go awry, however, when they discover the Mayor of the town has placed blood bonds on them all, keeping them from leaving. Learning takes a back seat as the three find themselves caught up in the village's internal struggles.";
    } else if (setBlurb === 7) {
    randomBlurb.innerHTML = "When the plans to study advanced magic in Dragon's Teeth fell through, Enkarini and her friends fled the hidden village and its controlling Mayor. Their newfound freedom leads them to what they first sought in the village; advanced and powerful magic. While Enkarini works to further develop her shadow magic, Soris and Ember start to learn the lost art of energy weaving from the Isati. Elsewhere on the continent, Prince Michael is searching for answers to a mystery that brings him back to the village, and into a mess he will need magical help to escape from.";
    } else if (setBlurb === 8){
    randomBlurb.innerHTML = "Now that the two sides of the world are irreversibly connected, travel between Trizes and Slokos has become easier and quicker. Enkarini's bond with the shadowy energy called isithi has grown, allowing her access to terrible power. With help from Soris and Ember, the first true weavers in centuries, and Caiara the Seer, she must return to the Forest of the West to fulfil an old promise. While the young mages work to free the ancient spirits, the People's towns and the Kingdom of Oakshire must face enemies both new and old. Allies appear from unexpected quarters, and an age-old hidden conflict finally moves into the open.";
    } else {
    randomBlurb.innerHTML = "test text";
    }
}


