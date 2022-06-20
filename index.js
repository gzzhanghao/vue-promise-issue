const { createServer } = require('vite')

async function run() {
  const vite = await createServer({
    server: { middlewareMode: 'ssr' }
  })
  const mod = await vite.ssrLoadModule('/src/main.js')
  console.log({ mod })
}

run()
