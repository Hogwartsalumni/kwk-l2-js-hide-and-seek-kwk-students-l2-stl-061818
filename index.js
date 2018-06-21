//Code your solution here

function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(target) {
  return document.querySelector('.target');
}

function increaseRankBy(n, base) {
  return document.querySelectorAll('.ranked-list')
  const firstList = rankedLists[0];
  const secondList = rankedLists[1];
  let parsed = parseInt(n, base);
  if (isNaN(parsed)) { return 0 }
  return parsed * 1;
}

function deepestChild(child) {
  return document.querySelector('#grand-node div div div div');
}
