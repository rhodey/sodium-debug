const html = require('choo/html')
const sodium = require('sodium-universal')
 
const TITLE = 'Example'
module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) {
    emit(state.events.DOMTITLECHANGE, TITLE)
  }

  let rnd = Buffer.allocUnsafe(12)
  sodium.randombytes_buf(rnd)

  return html`<body>
    <h2>Example</h2>
    <p>${rnd.toString('hex')}</p>
  </body>`
}
