const fs = require('fs')

//promiseを返す関数を定義
function readFile_pr(fname) {
    return new Promise((resoleve) => {
        fs.readFile(fname, 'utf-8', (err, s) => {
            resoleve(s)
        })
    })
}

//順にテキストを読み込む
readFile_pr('a.txt')
    .then((text) => {
        console.log('a.txtを読み込みました', text)
        return readFile_pr('b.txt')
    })
    .then((text) => {
        console.log('b.txtを読み込みました', text)
        return readFile_pr('c.txt')
    })
    .then((text) => {
        console.log('c.txtを読み込みました', text)
    })
