javascript:void((function(f){
  var script = document.createElement('script');
  script.src = '//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js';
  script.onload = function(){
    var $ = jQuery.noConflict(true);
    f($);
  };
  document.body.appendChild(script);
})(function($, undefined){
  ;;; console.log('jQuery: ', $().jquery);

  var arrayToTsv = function(titleArray, contentsArray) {
    var title = titleArray.join("\t");
    var contents = $.map(contentsArray, function (content) {
      return content.join("\t");
    }).join("\n");
    return title + "\n" + contents;
  };

  var download = function(fileName, contents) {
    var blob = new Blob([ contents ], { "type" : "text/tab-separated-values" });
    var a = document.createElement('a');
    a.download = fileName;
    a.href = window.URL.createObjectURL(blob);
    a.click();
  };

  // 以下に処理の本体を記述
  var titleArray = [];
  var contentsArray = [[]];
  var tsv = arrayToTsv(titleArray, contentsArray);
  download('hoge.tsv', tsv);
}));
