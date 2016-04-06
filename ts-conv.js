
var timestamp = document.createElement('div');
timestamp.setAttribute('class', 'timestamp_bg');

document.addEventListener('mouseup', function (e) {

  document.body.appendChild(timestamp);

  var selection = window.getSelection().toString();
  var myDate;
  if (selection.length === 10) {
    myDate = new Date(JSON.parse(window.getSelection().toString() * 1000));
  } else {
    myDate = new Date(JSON.parse(window.getSelection().toString()));
  }

  if (selection.length > 0) {
    showTimestamp(e.clientX, e.clientY, myDate);
  }
}, false);


document.addEventListener('mousedown', function (e) {
  timestamp.style.visibility = 'hidden';
}, false);

function showTimestamp(xPos, yPos, selection) {
  timestamp.innerHTML = selection;
  timestamp.style.top = yPos + 'px';
  timestamp.style.left = xPos + 'px';
  timestamp.style.visibility = 'visible';
}
