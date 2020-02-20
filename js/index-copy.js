// // ***** REFERENCES

// let $win = window
// let $doc = document.documentElement  // html
// let $bar = document.querySelector('.bar')


// // ***** STEPS

// // Capture the scroll of the window
// $win.addEventListener('scroll', event => { 
  
//   // Store the window height
//   let winH = $doc.clientHeight    // the document's parent's height

//   // Store the document height
//   let docH = $doc.scrollHeight

//   // if documentElement height < window height
//   if ( docH <= winH ) { 
//     // Set the display of the .bar to none
//     $bar.style.display = 'none'
//   }
//   else { 
//     // Set the display of the .progress-bar to block
//     $bar.style.display = 'block'
//   }

//   // How much CAN be scrolled?
//   let canBeScrolled = docH - winH

//   // How much HAS been scrolled?
//   let hasBeenScrolled = window.scrollY

//   // Determine the amount scrolled as a percentage of the total possible
//   let percentScrolled = hasBeenScrolled / canBeScrolled

//   // Apply a width to the .progress-bar
//   $bar.style.width = `${percentScrolled * 100}%`

// })



//let $doc = document.documentElement
let $lnk = document.querySelector('.slide-from')
//let $bar = document.querySelector('.bar')

// how tall os the document?
$doc.scrollHeight

// how tall is the window?
$doc.clientHeight

//capture when the window is scrolled
window.addEventListener('scroll', event => {console.log('scrolled')})
window.addEventListener('resize', event => {console.log('resized')})
window.addEventListener('hashchange', event => {console.log('has change')})

// how much have i scrolled?
window.scrollY

//capture when a link is clicked
$lnk.addEventListener('click', event => {console.log('clicked')})


// what does thid link do? (href is the where it is going) setAttribute
$lnk.getAttribute('href ')

//which item am i trying to slide to?
let $goto = document.querySelector('#document')

//does that element/section exist?
if ($goto) {
    // the element exists
} else {
    //the element does not exist
}

// how far is this element from the top pf the document?
$goto.offsetTop

// how far is this element from the top pf the viewport?
$goto.getBoundingClientRect().top

// scroll to an element
$goto.scrollIntoView()

//are there any obstr
$bar.getBoundingClientRect().height





// $lnk.addEventListener('click', event => {
    
//     $goto.getBoundingClientRect().top= 0;

// })

let navAnchors = document.querySelectorAll('nav a')

navAnchors.forEach($a => {
    $a.addEventListener('click', event => { console.log()})
})