var counter = document.getElementById('count'),
    incButton = document.getElementById('inc'),
    decButton = document.getElementById('dec');

/**
 * Using <div id="count"></div>
 */
var count = 0;

incButton.addEventListener('click', incCounter);
decButton.addEventListener('click', decCounter);

function incCounter () {
  count = count + 10;
  setCounter();
}

function decCounter () {
  count = count - 10;
  setCounter();
}

function setCounter () {
  counter.innerHTML = count;
}

setCounter();

/**
 * Using <input type="text" id="count" />
 */
// incButton.addEventListener('click', incCounter);
// decButton.addEventListener('click', decCounter);

// function incCounter () {
//   counter.value = parseInt(counter.value) + 10;
// }

// function decCounter () {
//   counter.value = parseInt(counter.value) - 10;
// }