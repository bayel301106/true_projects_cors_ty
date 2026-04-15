const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send(`
    <h2>TY — просмотр</h2>
    <h1 id="text" style="font-size:32px"></h1>

    <script>
      const ws = new WebSocket('wss://true-projects-cors-one.onrender.com')

      ws.onmessage = (e) => {
        const data = JSON.parse(e.data)
        document.getElementById('text').textContent = data.text
      }
    </script>
  `)
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log('TY started')
})