//httpモジュールの読み込み
const http = require('http')
//webサーバーの実行
const svr = http.createServer(handler)//サーバーの生成
svr.listen(8080) //ポート番号[8081]で待受

function handler(req, res) {
    console.log('url:', req.url)
    console.log('method:', req.method)
    //HTTPヘッダーを出力
    res.writeHeader(200, { 'Content-Type': 'text/html' })
    //レスポンスの本体を出力
    res.end('<h1>Hello0001, World!</h1>\n')
}
