function replaceIssues() {
  var re = /([Ll]{1}[eE]?|[Cc])[wW]{1}[gG]{1}[ ]*([0-9]{4})/g;
  var regs;

  var walker = document.createTreeWalker(
  document.body, NodeFilter.SHOW_TEXT, function(node) {
    if((regs = re.exec(node.textContent))) {
      var parentNodeNotParsed = !node.parentNode.classList.contains('wg21_link');
      var nodeIsAlreadyLink = node.parentNode.tagName == 'A' || node.parentNode.tagName == 'a' || node.tagName == 'A' || node.tagName == 'a';
      if(parentNodeNotParsed && !nodeIsAlreadyLink) {
        var match = document.createElement('A');
        match.appendChild(document.createTextNode(regs[0]));
        match.href = 'http://wg21.link/' + regs[1] + 'wg' + regs[2];

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
  var re = /([PpDd]{1}[0-9]{4}[rR]{1}[0-9]+|[Nn]{1}[0-9]{4})/g;
  var regs;

  var walker = document.createTreeWalker(
  document.body, NodeFilter.SHOW_TEXT, function(node) {
    if((regs = re.exec(node.textContent))) {
      var parentNodeNotParsed = !node.parentNode.classList.contains('wg21_link');
      var nodeIsAlreadyLink = node.parentNode.tagName == 'A' || node.parentNode.tagName == 'a' || node.tagName == 'A' || node.tagName == 'a';
      if(parentNodeNotParsed && !nodeIsAlreadyLink) {
        var match = document.createElement('A');
        match.appendChild(document.createTextNode(regs[0]));
        match.href = 'http://wg21.link/' + regs[0];

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
