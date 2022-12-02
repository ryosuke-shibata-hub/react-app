//自作の計算モジュール「calctest.js」を取り込む
import { add, mul } from './calctest.js'
//取り込んだ関数を利用する
console.log(add(2, 3))
console.log(mul(6, 8))

//kakezanモジュールの読み込み
import kakezan from "./kakezan.js";
//kakezan関数を使用
const v = kakezan(2, 3);
console.log(v);
