
 const http = require("http")

  const server = http.createServer((req,res) => {
    if (req.url === "/") {
        res.write("Welcome to the server")
        return res.end()
    }

    if (req.url === "/about") {
        for (let i = 0; i < 100000; i++) {
            console.log(Math.random() * i)
        }
        return res.end()
    }
    res.end('not found')
 })

 server.listen(3000)

 console.log("Server on port 3000")