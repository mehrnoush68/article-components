// ***** REFERENCES

let $win = window
let $doc = document.documentElement  // html
let $bar = document.querySelector('.bar')
let $prg = document.querySelector('.progress')
let $h1 = document.querySelector('.heading')
let $ttl = document.querySelector('.title')
let $story = document.querySelector('.story')
let $Countwords = document.querySelector('.Countwords')

// ***** STEPS
//Get the textContent from the h1
// $h1.textContent

//Set the textcontent of the .title
$ttl.textContent = $h1.textContent

//Set .title opacity to 1
// $ttl.style.opacity = '1'

//Set .title opacity to 0
// $ttl.style.opacity = '0'

//Get the position of the h1 relative to the window (trigger)
// let h1position = $h1.getBoundingClientRect().top


//how much the window has scrolled
// let hasBeenScrolled = window.scrollY

//Check if the vanishing point of the h1 is less than the total scrolled
// $win.addEventListener('scroll', event => { if ($h1.getBoundingClientRect().top < percentScrolled ) {
//     $ttl.style.opacity = '1';

// }else{
//     $ttl.style.opacity = '0';
// } })


//capture the scroll of the window
// $win.addEventListener('scroll', event => { console.log('scroll') })




$win.addEventListener('scroll', event => { 
    let winH = $doc.clientHeight 
    let docH = $doc.scrollHeight 
    if ( docH <= winH ) { $bar.style.display = 'none'}
    else { $bar.style.display = 'block'}
    let canBeScrolled = docH - winH
    let hasBeenScrolled = window.scrollY
    let percentScrolled = hasBeenScrolled / canBeScrolled 
    $prg.style.width = `${percentScrolled * 100}%` 
    let h1position = $h1.getBoundingClientRect().top
    if (h1position < percentScrolled ) {
        $ttl.style.opacity = '1';
        $h1.style.opacity = '0';
    }else{
        $ttl.style.opacity = '0';
        $h1.style.opacity = '1';
    } })


//117words in total we have
//average reading words per min is 150
const wordspermin = 150;

// all texts
let allwords = $story.textContent

// we need to split all words by the spaces (it didn't worked because it was counting extra)
//allwords = allwords.split(" ");

//we can use a loop to count all the words (didn't work)
// count = 0;
// for (i = 0; i < allwords.length; i++) {
//     if (allwords[i] != "") {
//       count += 1;
//     }
//   }

//https://regex101.com/
// used regular expressions to remove extras
let numberOfWords = allwords.split(/\b\S+\b/).length - 1;

 $Countwords.textContent = Math.round(numberOfWords / wordspermin) + `min reading time `;