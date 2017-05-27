# tsv-export-bookmarklet
TSVを生成してダウンロードするためのブックマークレットです。

# 使い方
本体処理記述部分に、TSV生成したい内容をDOMから要素を取ってくるなりして、配列で記述してください。
記述したものはminifyし、1行にまとめた上でご利用ください。

``` javascript
javascript:void ((function(b){var a=document.createElement("script");a.src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js";a.onload=function(){var c=jQuery.noConflict(true);b(c)};document.body.appendChild(a)})(function(e,f){console.log("jQuery: ",e().jquery);var d=function(i,h){var k=i.join("\t");var j=e.map(h,function(l){return l.join("\t")}).join("\n");return k+"\n"+j};var b=function(k,j){var i=new Blob([j],{type:"text/tab-separated-values"});var h=document.createElement("a");h.download=k;h.href=window.URL.createObjectURL(i);h.click()};var c=[];var a=[[]];var g=d(c,a);b("hoge.tsv",g)}));```
