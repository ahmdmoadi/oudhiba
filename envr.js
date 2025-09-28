const {readFileSync} = require("fs");

let envfile = "";

try {envfile = readFileSync(".env").toString();
} catch(e) {
    // console.warn(".env not found! better be in vercel!")
}
const lines = envfile.replace(/\r/g,"").split(/\n/i);

if(!!lines) {
    lines.forEach(line => {
        const [k, v] = line.split("=");
        process.env[k] = v;
    });
}
