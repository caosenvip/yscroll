/**
* aurthor：n@aceyo.com
*	date：2014.2.20
*/
(function($){
  $.fn.Yscroll = function(options){
    var settings ={
      over : 1, //悬停移动高度px
      tap : 3, //按下移动高度px
      space : 30, //延迟间隔ms 越大帧数越低
      up : '.up', //向上按钮对象
      down : '.down', //向下按钮对象
      shell: '.scroll' //滚动层对象
    };
    settings = $.extend({}, settings, options);
    var upmove,dnmove,height,speed;
    var $t = $(this),_os = settings.over,_ts=settings.tap,
      _sp = settings.space;
    var $scrolls = $t.find(settings.shell),$scroll,
      $up = $t.find(settings.up), $down = $t.find(settings.down);

    $up.mouseenter(function() {
      $scroll = $scrolls.not(':hidden');
      upmove = true;speed =_os;up();
    }).mouseleave(function() {
      upmove = false;
    }).mousedown(function() {
      speed = _ts;
    }).mouseup(function() {
      speed = _os;
    });
    $down.mouseenter(function() {
      $scroll = $scrolls.not(':hidden');
      height = $scroll[0].scrollHeight-$scroll.height();
      dnmove = true;speed =_os;down();
    }).mouseleave(function() {
      dnmove = false;
    }).mousedown(function() {
      speed = _ts;
    }).mouseup(function() {
      speed = _os;
    });
    function up(){
      var st = $scroll.scrollTop();
      var limit = st>0;
      limit && $scroll.scrollTop(st-speed);
      limit && upmove && setTimeout(up,_sp);
    }
    function down(){
      var st = $scroll.scrollTop();
      var limit = st<height;
      limit && $scroll.scrollTop(st+speed);
      limit && dnmove && setTimeout(down,_sp);
    }
  }
})(jQuery);