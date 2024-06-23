const fs = require("fs");
const https = require("https");

https.get("https://api-football-standings.azharimm.dev/leagues", res => {
    let data = ''
    res.on('data', chunk => {
        data += chunk
    })
    res.on('end', () => {
        fs.writeFile('leagues.json', data, () => {
            console.log("Save to file: Completed")
        })
    })

});
