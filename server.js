const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send(`
    <h2>TY — просмотр</h2>
    <h1 id="text" style="font-size:32px"></h1>

    <script>
    const ws = new WebSocket('ws://localhost:5000')

    ws.onmessage = (e) => {
      const data = JSON.parse(e.data)
      document.getElementById('text').textContent = data.text
    }
    </script>
  `)
})

app.listen(5001, () => {
  console.log('TY: http://localhost:5001')
})