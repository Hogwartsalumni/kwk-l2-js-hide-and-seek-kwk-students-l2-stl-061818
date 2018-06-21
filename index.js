//Code your solution here

function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(target) {
  return document.querySelector('.target');
}

function increaseRankBy(n) {
  const increase = document.getElementById('#app')
  let increase2 = document.querySelectorAll('ul.ranked-list li');
}
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (i + 1).toString()
  }
//   return document.querySelectorAll('.ranked-list');
//   const firstList = rankedLists[0];
//   const secondList = rankedLists[1];
//   for (let i = 0, l = rankedLists.length; i < l; i + 3) {
//   parseInt(rankedLists[i].innerHTML);
// }

function deepestChild(child) {
  return document.querySelector('#grand-node div div div div');
}
