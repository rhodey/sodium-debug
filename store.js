const hypercore = require('hypercore')
const ram = require('random-access-memory')

function store(state, emitter) {
  state.core = null

  emitter.on('DOMContentLoaded', function () {
    const opts = { valueEncoding: 'utf-8', sparse: true }
    const core = hypercore(() => ram(), opts)

    core.once('error', console.error)
    audio.once('ready', () => emitter.emit('dat:ready', core))
  })

  emitter.on('dat:ready', function (core) {
    state.core = core
  })
}

module.exports = store
