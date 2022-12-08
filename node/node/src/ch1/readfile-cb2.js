const fs = require('fs')

//ファイルの読み込み
fs.readFile('kakugen.txt', 'utf-8', (err, data) => {
    console.log(data)
})
