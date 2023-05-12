let json = require('./get.json');

function callJson() {
    console.log(json.ip)
}

async function ipServer() {
    console.log('Calling...');
    const result = await callJson();
    console.log(result)

}

ipServer();