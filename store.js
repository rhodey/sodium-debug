function store(state, emitter) {
  emitter.on('DOMContentLoaded', function () {
    console.log('choo choo')
  })
}

module.exports = store
