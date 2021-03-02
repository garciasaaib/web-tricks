const fs = require('fs');

fs.writeFileSync('./webpack-project/.env', `API=${process.env.API}\n`);