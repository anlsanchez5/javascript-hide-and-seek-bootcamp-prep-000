function getFirstSelector(selector) {
  const element = document.querySelector(selector);
  return element
}

function nestedTarget() {
 const element = document.getElementById('nested').querySelector('.target');
 return element
}


function deepestChild(array, criterianFn) {
  let current = array;
  let next = [];
  while (current) {
    if (criteriaFn(current)) {
      return current
    }
  if (Array.isArray(current)) {
    for (let i = 0; i<current.length; i++) {
      next.push(current[i])
    }
  }
current = next.shift()
}
return null
}

function increaseRankBy(n) {
  const ranks = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0; i <ranks.length; i++) {
    ranks[i].innerHTML = (parseInt(ranks[i].innerHTML) + n).toString()
  }
}
