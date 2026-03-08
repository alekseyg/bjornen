const isKeyRawEnter = (e) =>
  !e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && e.key === 'Enter'

const message = document.getElementById('message_body')
const messagesEl = document.querySelector('.messages')

const sendMessage = () => {
  const text = message.value
  if (!text) return
  const div = document.createElement('div')
  div.className = 'message'
  div.innerHTML = text.replace(/\n/g, '<br>')
  messagesEl.appendChild(div)
  message.value = ''
}

let start = 0
let keyTimes = []

message.addEventListener('keydown', (e) => {
  start = Date.now()

  if (isKeyRawEnter(e)) {
    if (!keyTimes.length) {
      e.preventDefault()
      return
    }

    const avgKeyTime = keyTimes.reduce((x, y) => x + y) / keyTimes.length

    // > 25ms indicates a physical keyboard
    if (avgKeyTime > 25) {
      e.preventDefault()
      keyTimes = []
      sendMessage()
    }
  }
})

message.addEventListener('keyup', () => {
  keyTimes.push(Date.now() - start)
})

document.getElementById('message-form').addEventListener('submit', (e) => {
  e.preventDefault()
  sendMessage()
})
