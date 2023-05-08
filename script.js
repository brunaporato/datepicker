const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dec']

let thisMonth = months[new Date().getMonth()]

const main = app.querySelector('main')
const plusYears = app.querySelector('#plus')
const lessYears = app.querySelector('#less')
const year = app.querySelector('header span')

let output = ''
let thisYear = new Date().getFullYear()
let newYear



function render() {

  for(let month of months) {
    const active = thisMonth == month ? 'active' : ''

    output += `<div class="${active}">${month}</div>`
  }

  return output
}

function deselectAllMonths() {
  const monthDivs = document.querySelectorAll('main div')

  monthDivs.forEach((el) => {
    el.classList.remove('active')
  })
}


function selectMonth(e) {
  deselectAllMonths()
  e.target.classList.add('active')
}

function nextYear() {
  newYear = thisYear + 1
  thisYear = newYear

  year.innerHTML = newYear
}

plusYears.onclick = nextYear

main.onclick = selectMonth

main.innerHTML = render()
year.innerHTML = thisYear