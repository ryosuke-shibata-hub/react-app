"use strict";

var _calctest = require("./calctest.js");

var _kakezan = require("./kakezan.js");

var _kakezan2 = _interopRequireDefault(_kakezan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//取り込んだ関数を利用する
console.log((0, _calctest.add)(2, 3)); //自作の計算モジュール「calctest.js」を取り込む

console.log((0, _calctest.mul)(6, 8));

//kakezanモジュールの読み込み

//kakezan関数を使用
var v = (0, _kakezan2.default)(2, 3);
console.log(v);