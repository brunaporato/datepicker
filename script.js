const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dec']

let thisMonth = months[new Date().getMonth()]

const main = app.querySelector('main')

let output = ''

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

main.onclick = selectMonth

main.innerHTML = render()
app.querySelector('header span').innerHTML = new Date().getFullYear()