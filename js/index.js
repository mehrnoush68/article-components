// ***** REFERENCES

let $win = window
let $doc = document.documentElement  // html
let $bar = document.querySelector('.bar')
let $prg = document.querySelector('.progress')
let $h1 = document.querySelector('.heading')
let $ttl = document.querySelector('.title')

// ***** STEPS
//Get the textContent from the h1
// $h1.textContent

//Set the textcontent of the .title
$ttl.textContent = 'Scrolling with JS'

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
    $bar.style.width = `${percentScrolled * 100}%` 
    let h1position = $h1.getBoundingClientRect().top
    if (h1position < percentScrolled ) {
        $ttl.style.opacity = '1';
        
    }else{
        $ttl.style.opacity = '0';
    } })







$win.addEventListener('scroll', event => { if ($h1.getBoundingClientRect().top < percentScrolled ) {
    $ttl.style.opacity = '1';

}else{
    $ttl.style.opacity = '0';
} })


