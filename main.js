const html = require('choo/html')

const TITLE = 'Example'
module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) {
    emit(state.events.DOMTITLECHANGE, TITLE)
  }

  function click() {
    emit('click')
  }

  return html`<body>
    <h2>Example</h2>
    <button onclick=${click}>CLICK!</button>
  </body>`
}
