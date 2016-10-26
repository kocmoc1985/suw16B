// Log changes in the variables todo and doneList to DOM
// TF 2016 - no need to understand - just a visual helper

(function(){

  $('body').hide();

  var tMem,
      dMem,
      fMem,
      fNative = Object.keys(window),
      funcLine = 'Functions you wrote to try out in the console',
      $t = $('<div><h3>Todo list</h3><div/></div>').appendTo('body'),
      $d = $('<div><h3>Done list</h3><div/></div>').appendTo('body'),
      $f = $('<div><h3>' + funcLine + '</h3><div/></div>').appendTo('body'),
      style = {
        fontFamily: 'Verdana',
        fontSize:16,
        margin:'50px auto',
        width: 500,
        border: '1px dotted #666',
        padding:"10px 20px"
      };

  $t.css(style);
  $d.css(style);
  $f.css(style);

  setInterval(function(){

    var t = JSON.stringify(window.todoList,'','  '),
        d = JSON.stringify(window.doneList,'','  '),
        f = JSON.stringify(Object.keys(window).filter(function(x){
          return fNative.indexOf(x) < 0 && typeof window[x] == "function";
        }).map(function(x){
          return (window[x]+'').split('{')[0];
        }),'','  ');

    t!=tMem && $t.find('div').html('<pre>' + t + '</pre>');
    d!=dMem && $d.find('div').html('<pre>' + d + '</pre>');
    f!=fMem && $f.find('div').html('<pre>' + f + '</pre>');

    $t[window.todoList  ? "show" : "hide"]();
    $d[window.doneList  ? "show" : "hide"]();
    $f[f=='[]' ? 'hide' : 'show']();
    $('body').show();

    tMem = t;
    dMem = d;
    fMem = f;

  },100);

})();
