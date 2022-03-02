
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる


  $(function () {
    // スクロールの方向　-1の時は左、1の時は右
    var dir = -1;

    // スクロールのインターバル(何秒ごとにスクロールさせるか。3000ミリ秒に設定)
    var interval = 3000;

    // スクロールのスピード(700ミリ秒に設定）
    var duration = 700;

    // タイマー用の変数
    var timer;

    // リストの順番を変更(3番目を1番最初にする)
    $("#slide ul").prepend($("#slide li:last-child"));

    // リストの位置を変更(画像1枚分ずらす)
    $("#slide ul").css("left", -375);

    // 3000ミリ秒(変数intervalの値)ごとにslideTime()関数を実行
    timer = setInterval(slideTimer, interval);

    // slideTimer()関数
    function slideTimer() {
      // 画像1枚分左へスクロール
      $("#slide ul").animate({ "left" : "-=375px" }, duration,
      function() {
        // リストの順番を変更
        $(this).append($("#slide li:first-child"));

        // リストの位置を変更
        $(this).css("left", -375);
      });

    }

  });


});
