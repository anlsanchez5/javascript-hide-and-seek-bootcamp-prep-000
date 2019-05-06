function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild(){
  return document.querySelector('#grand-node div div div div')
}

function increaseRankBy(n) {
  var rankedLists = document.querySelectorAll('.ranked-list')
  /*const firstList = rankedLists[0]
  const secondList = rankedLists[1]

  let children = firstList.children
  */

  for (let i=0; i < rankedLists.length; i++) {
    var children = rankedLists[i].children
      for (let a = 0; a < children.length; a++) {
        children[a].innerHTML = parseInt(children[a].innerHTML) + n
      }
  }

  /* children = secondList.children

  for (let i=0; i < children.length; i++) {
    let start = parseInt((children[i].innerHTML),10)
    start = (start + n)
  } */

}
