//httpモジュールの読み込み
const http = require('http')
const ctype = { 'Content-Type': 'text/html;charset=utf-8' }

//webサーバーの実行
const svr = http.createServer(handler)//サーバ生成
svr.listen(8081)//8081で待ち受け


//サーバにアクセスがあった時の処理
function handler(req, res) {
    //URLの判断
    const url = req.url
    //ページの判定
    if (url === '/' || url === 'index.html') {
        showIndexPage(req, res)
        return
    }
    //サイコロページか判定
    if (url.substr(0, 6) === '/dice/') {
        showDicePage(req, res)
        return
    }
    //その他のページはエラーページに
    res.writeHead(404, ctype)
    res.end('404 not found')
}

//インデックスページにアクセスがあった場合
function showIndexPage(req, res) {
    //HTTPヘッダーを出力
    res.writeHead(200, ctype)
    //レスポンス本体を出力
    const html = '<h1>サイコロページの案内</h1>\n' +
        '<p><a href="/dice/6">6面体サイコロ</a></p>\n' +
        '<p><a href="/dice/12">12面体サイコロ</a></p>\n'
    res.end(html)
}

//サイコロページにアクセスがあった場合
function showDicePage(req, res) {
    //HTTPヘッダーの出力
    res.writeHead(200, ctype)
    //何面体のサイコロが必要か
    const a = req.url.split('/')
    const num = parseInt(a[2])
    //乱数を生成
    const rnd = Math.floor(Math.random() * num) + 1
    //レスポンス本体の出力
    res.end('<p style="font-size:72px">' + rnd + '</p>')
}
