
// on mouse hover effects function
function getRndColor(x) {
    x.style.background = randomColors();
  }
  
  // on mouseout effects function
  function normalColor(x) {
    x.style.background = 'white';
  }

  // random color generation 
  function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

