/**
 * Created by sff on 2016/9/21.
 */
$(function(){
    $(window).resize(function() {
        NavH();
    });
    function NavH() {
        var H=$(window).height();
        var W=$(window).width();
        var NH = parseInt(H) -60;
        var CW=parseInt(W) -215;
        $("#nav").css("height", NH);
        $(".con").css({"height":NH,"width":CW});
        $("#if_con").css("height", NH);
    }
    NavH();
//    退出选中效果
    $(".top_right").hover(function(){
        $(this).find(".out").toggleClass("out_hover");
    });
//    顶部导航选中效果
    var src_link=["XTSD/BTSD.html","GGTG/QDGG.html","KHYYB/KJYYB.html","YXTG/YXTG.html"];
    var li_num=["nav_ck01","ggtg_check1","khyy_check","yxtg_check"];
    $(".top_link li").each(function(i){
        $(this).data("index",i);
    });
    $(".top_link li").click(function(){
        $(".top_link li").removeClass("top_check");
        $(this).addClass("top_check");
        var a=$(this).data("index");
        $(".nav_ul").hide();
        $($(".nav_ul")[a]).show();
        $('#if_con').attr("src",src_link[a]);
        $(".nav_ul .li_contain").removeClass("li_check");
        $(".nav_ul .li_contain strong").removeClass("nav_ck01 nav_ck02 nav_ck03 nav_ck04 nav_ck05 nav_ck06 ggtg_check1 ggtg_check2 ggtg_check3 ggtg_check4 ggtg_check5 khyy_check yxtg_check");
        $($(".nav_ul")[a]).find(".li_contain:first").addClass("li_check");
        $($(".nav_ul")[a]).find(".li_contain:first strong").addClass(li_num[a]);
    });

//    左侧导航鼠标划过和选中效果
    //系统设定
    var num1=["nav_str01","nav_str02","nav_str03","nav_str04","nav_str05","nav_str06"];
    var num2=["nav_ck01","nav_ck02","nav_ck03","nav_ck04","nav_ck05","nav_ck06"];
    $(".sd_ul li").hover(function(){
        var i1=$(this).index();
        $(this).find("strong").toggleClass(num1[i1]);
    });
    $(".sd_ul .li_contain").each(function(i){
        $(this).data("index",i);
    });
    $(".sd_ul .li_contain").click(function(){
        var n1=$(this).data("index");
        $(".sd_ul li strong").removeClass("nav_ck01 nav_ck02 nav_ck03 nav_ck04 nav_ck05 nav_ck06");
        $(".ggtg_ul li strong").removeClass("ggtg_check1 ggtg_check2 ggtg_check3 ggtg_check4 ggtg_check5");
        $(".khyy li strong").removeClass("khyy_check");
        $(".yxtg li strong").removeClass("yxtg_check");
        $(".li_contain").removeClass("li_check");
        $(this).find("strong").addClass(num2[n1]);
        $(this).addClass("li_check");

    });
    //广告推广
    var num3=["ggtg_hover1","ggtg_hover2","ggtg_hover3","ggtg_hover4","ggtg_hover5"];
    var num4=["ggtg_check1","ggtg_check2","ggtg_check3","ggtg_check4","ggtg_check5"];
    $(".ggtg_ul li").hover(function(){
        var i2=$(this).index();
        $(this).find("strong").toggleClass(num3[i2]);
    });
    $(".ggtg_ul .li_contain").each(function(i){
        $(this).data("index",i);
    });
    $(".ggtg_ul .li_contain").click(function(){
        var n2=$(this).data("index");
        $(".sd_ul li strong").removeClass("nav_ck01 nav_ck02 nav_ck03 nav_ck04 nav_ck05 nav_ck06");
        $(".ggtg_ul li strong").removeClass("ggtg_check1 ggtg_check2 ggtg_check3 ggtg_check4 ggtg_check5");
        $(".khyy li strong").removeClass("khyy_check");
        $(".yxtg li strong").removeClass("yxtg_check");
        $(".li_contain").removeClass("li_check");
        $(this).find("strong").addClass(num4[n2]);
        $(this).addClass("li_check");
    });
    //客户预约表
    $(".khyy .li_contain").hover(function(){
        $(this).find("strong").toggleClass("khyy_hover");
    });
    $(".khyy .li_contain").click(function(){
        $(".sd_ul li strong").removeClass("nav_ck01 nav_ck02 nav_ck03 nav_ck04 nav_ck05 nav_ck06");
        $(".ggtg_ul li strong").removeClass("ggtg_check1 ggtg_check2 ggtg_check3 ggtg_check4 ggtg_check5");
        $(".khyy li strong").removeClass("khyy_check");
        $(".yxtg li strong").removeClass("yxtg_check");
        $(".li_contain").removeClass("li_check");
        $(this).find("strong").addClass("khyy_check");
        $(this).addClass("li_check");
    });
    //影讯推广
    $(".yxtg .li_contain").hover(function(){
        $(this).find("strong").toggleClass("yxtg_hover");
    });
    $(".yxtg .li_contain").click(function(){
        $(".sd_ul li strong").removeClass("nav_ck01 nav_ck02 nav_ck03 nav_ck04 nav_ck05 nav_ck06");
        $(".ggtg_ul li strong").removeClass("ggtg_check1 ggtg_check2 ggtg_check3 ggtg_check4 ggtg_check5");
        $(".khyy li strong").removeClass("khyy_check");
        $(".yxtg li strong").removeClass("yxtg_check");
        $(".li_contain").removeClass("li_check");
        $(this).find("strong").addClass("yxtg_check");
        $(this).addClass("li_check");
    });

//    获取时间
    var getTime=function(){
        var mydate = new Date();
        var num=["周日","周一","周二","周三","周四","周五","周六"];
        var mon=(mydate.getMonth()>11)?1:mydate.getMonth()+1;
        var day=mydate.getDate();
        var week=mydate.getDay();
        var hours=mydate.getHours();
        var minute=(mydate.getMinutes()<10)?"0"+mydate.getMinutes():mydate.getMinutes();
        $(".hour").html(hours);
        $(".minute").html(minute);
        $("#mon").html(mon);
        $("#day").html(day);
        $("#week").html(num[week]);
        var time="上午";
        if(hours>12){
            time="下午";
        }else{
            time="上午";
        }
        $("#time").html(time);
    };
    setInterval(getTime,1000);
});