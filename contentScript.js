document.addEventListener("mouseup", function() {
  var selectedText = "";
  if (window.getSelection) {
    selectedText = window.getSelection().toString();
  } else if (document.selection && document.selection.type != "Control") {
    selectedText = document.selection.createRange().text;
  }

  if (selectedText) {
    var span = document.createElement("span");
    span.style.backgroundColor = "yellow";
    span.style.padding = "0.3em";
      console.log(selectedText)
    span.appendChild(document.createTextNode(selectedText));

    var range = window.getSelection().getRangeAt(0);
    range.deleteContents();
    range.insertNode(span);
  }
});