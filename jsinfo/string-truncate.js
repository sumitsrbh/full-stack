const { log } = require('console')

function truncate(str, maxlength) {
  if (str.length > maxlength) return str.slice(0, maxlength) + '...'
  return str.slice(0, maxlength)
}

log(truncate("What I'd like to tell on this topic is:", 20))
log(truncate('Hi everyone!', 20))
