const {readFileSync} = require("fs");

try {const envfile = readFileSync(".env").toString();
} catch(e) {
    // console.warn(".env not found! better be in vercel!")
}
const lines = envfile.replace(/\r/g,"").split(/\n/i);

lines.forEach(line => {
    const [k, v] = line.split("=");
    process.env[k] = v;
});