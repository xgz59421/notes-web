// DOM 操作
// jest 内置了 jsdom

function renderHtml() {
  let div = document.createElement('div')
  div.innerHTML = `
  <h1>hello</h1>`
  document.body.appendChild(div)
}

test('dom test', () => { 
  renderHtml()
  expect(document.querySelector('h1').innerHTML).toBe("hello")
 })