const fs = require('fs')
//(1) a.txtの読み込み
fs.readFile('a.txt', 'utf-8', function (err, data) {
    console.log('a.txtを読み込みました', data)
    //(2)の読み込み
    fs.readFile('b.txt', 'utf-8', function (err, data) {
        console.log('b.txtを読み込みました', data)
        //(3)の読み込み
        fs.readFile('c.txt', 'utf-8', function (err, data) {
            console.log('c.txtを読み込みました', data)
        })
    })
})
