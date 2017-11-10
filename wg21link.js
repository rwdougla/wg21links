function replaceIssues() {
  var re = /\b([Ll]{1}[eE]?|[Cc]|[eE])[wW]{1}[gG]{1}[ ]*([0-9]+)\b/g;
  var regs;

  var walker = document.createTreeWalker(
  document.body, NodeFilter.SHOW_TEXT, function(node) {
    if((regs = re.exec(node.textContent))) {
      var parentNodeNotParsed = !node.parentNode.classList.contains('wg21_link');
      var nodeIsAlreadyLink = node.parentNode.tagName == 'A' || node.parentNode.tagName == 'a' || node.tagName == 'A' || node.tagName == 'a';
      var nodeIsTextArea = false;
      if (node.tagName) { nodeIsTextArea = node.tagName.toLowerCase() == 'textarea'; }
      if (node.parentNode.tagName) { nodeIsTextArea = nodeIsTextArea || node.parentNode.tagName.toLowerCase() == 'textarea'; }
      if(parentNodeNotParsed && !nodeIsAlreadyLink && !nodeIsTextArea) {
        var match = document.createElement('A');
        match.appendChild(document.createTextNode(regs[0]));
        match.href = 'https://wg21.link/' + regs[1] + 'wg' + regs[2];

        match.classList.add('wg21_link');

        var after = node.splitText(regs.index);
        after.nodeValue = after.nodeValue.substring(regs[0].length);
        node.parentNode.insertBefore(match, after);
      }
    }
    return NodeFilter.FILTER_SKIP;
  }, false);

  walker.nextNode();
}

function replacePapers() {
  var re = /\b([PpDd]{1}[0-9]{4}([rR]{1}[0-9]+)?\b|\b[Nn]{1}[0-9]{4})\b/g;
  var regs;

  var walker = document.createTreeWalker(
  document.body, NodeFilter.SHOW_TEXT, function(node) {
    if((regs = re.exec(node.textContent))) {
      var parentNodeNotParsed = !node.parentNode.classList.contains('wg21_link');
      var nodeIsAlreadyLink = node.parentNode.tagName == 'A' || node.parentNode.tagName == 'a' || node.tagName == 'A' || node.tagName == 'a';
      var nodeIsTextArea = false;
      if (node.tagName) { nodeIsTextArea = node.tagName.toLowerCase() == 'textarea'; }
      if (node.parentNode.tagName) { nodeIsTextArea = nodeIsTextArea || node.parentNode.tagName.toLowerCase() == 'textarea'; }
      if(parentNodeNotParsed && !nodeIsAlreadyLink && !nodeIsTextArea) {
        var match = document.createElement('A');
        match.appendChild(document.createTextNode(regs[0]));
        match.href = 'https://wg21.link/' + regs[0];

        match.classList.add('wg21_link');

        var after = node.splitText(regs.index);
        after.nodeValue = after.nodeValue.substring(regs[0].length);
        node.parentNode.insertBefore(match, after);
      }
    }
    return NodeFilter.FILTER_SKIP;
  }, false);

  walker.nextNode();
}

function replaceStableNames() {
  var re = /\[([a-zA-Z\.0-9]+)\]/g;
  var regs;

  var walker = document.createTreeWalker(
  document.body, NodeFilter.SHOW_TEXT, function(node) {
    if((regs = re.exec(node.textContent))) {
      var parentNodeNotParsed = !node.parentNode.classList.contains('wg21_link');
      var nodeIsAlreadyLink = node.parentNode.tagName == 'A' || node.parentNode.tagName == 'a' || node.tagName == 'A' || node.tagName == 'a';
      var nodeIsTextArea = false;
      if (node.tagName) { nodeIsTextArea = node.tagName.toLowerCase() == 'textarea'; }
      if (node.parentNode.tagName) { nodeIsTextArea = nodeIsTextArea || node.parentNode.tagName.toLowerCase() == 'textarea'; }
      if(parentNodeNotParsed && !nodeIsAlreadyLink && !nodeIsTextArea) {
        var match = document.createElement('A');
        match.appendChild(document.createTextNode(regs[0]));
        match.href = 'http://eel.is/c++draft/' + regs[1];

        match.classList.add('wg21_link');

        var after = node.splitText(regs.index);
        after.nodeValue = after.nodeValue.substring(regs[0].length);
        node.parentNode.insertBefore(match, after);
      }
    }
    return NodeFilter.FILTER_SKIP;
  }, false);

  walker.nextNode();
}
replacePapers();
replaceIssues();
replaceStableNames();

