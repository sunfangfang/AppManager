/**
 * Created by sff on 2016/10/17.
 */
$(function(){
    $(window).resize(function () {
        conH();
    });
    function conH() {
        var H = $(window).height();
        var h1 = H - 20;
        var h2 = H - 87;
        var h3 = H - 141;
        $(".contain").css("height", h1);
        $(".con").css("height", h2);
        $(".m_table").css("max-height", h3);
    }
    conH();
//    select下拉事件
    $(".sel_box").on("click",function(e){
        e.stopPropagation();
        $(this).find("ul").slideToggle();
    });
    $(document).click(function(){
        $(".sel_box ul").slideUp();
    });

});
