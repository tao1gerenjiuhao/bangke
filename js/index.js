/**
 * Created by SAMSUNG on 2015/8/17.
 */
$(document).ready(function() {
    $.fn.fullpage({
        slidesColor: ['#1bbc9b', '', '#7BAABE', '#f90', '#4BBFC3'],
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        navigation: true,
        scrollBar:true,
        'afterLoad': function(anchorLink, index){
            if(index == '1'){
                $('#yi-xia').addClass('animated infinite fadeIn');

                /*remove*/
                $('#huangse').removeClass('animated fadeIn');
                $('#lvse').removeClass('animated fadeIn');
                $('#lanse').removeClass('animated fadeIn');
                $('#qianlanse').removeClass('animated fadeIn');
                $('#zhuangshi').removeClass('animated fadeIn');
                $('#er-xia').removeClass('animated infinite fadeIn');

                $('#xu').removeClass('animated fadeInDown');
                $('#fu').removeClass('animated fadeInDown');
                $('#san-xia').removeClass('animated infinite fadeIn');

                $('#yonghu').removeClass('animated fadeInDown');
                $('#yonghu1').removeClass('animated bounce');
                $('#yonghu2').removeClass('animated bounce');
                $('#yonghu3').removeClass('animated bounce');
                $('#yonghu4').removeClass('animated bounce');
                $('#yonghu5').removeClass('animated bounce');
                $('#si-xia').removeClass('animated infinite fadeIn');

                $('#dunpai').removeClass('animated fadeIn');
                $('#jinrong').removeClass('animated fadeIn');
                $('#huanrao').removeClass('animated fadeIn');
            };
            if(index == '2'){
                $('#huangse').addClass('animated fadeIn');
                $('#lvse').addClass('animated fadeIn');
                $('#lanse').addClass('animated fadeIn');
                $('#qianlanse').addClass('animated fadeIn');
                $('#zhuangshi').addClass('animated fadeIn');
                $('#er-xia').addClass('animated infinite fadeIn');

                /*remove*/
                $('#yi-kouhao').removeClass('animated fadeIn');
                $('#yi-xia').removeClass('animated infinite fadeIn');

                $('#xu').removeClass('animated fadeInDown');
                $('#fu').removeClass('animated fadeInDown');
                $('#san-xia').removeClass('animated infinite fadeIn');

                $('#yonghu').removeClass('animated fadeInDown');
                $('#yonghu1').removeClass('animated bounce');
                $('#yonghu2').removeClass('animated bounce');
                $('#yonghu3').removeClass('animated bounce');
                $('#yonghu4').removeClass('animated bounce');
                $('#yonghu5').removeClass('animated bounce');
                $('#si-xia').removeClass('animated infinite fadeIn');

                $('#dunpai').removeClass('animated fadeIn');
                $('#jinrong').removeClass('animated fadeIn');
                $('#huanrao').removeClass('animated fadeIn');
            };
            if(index == '3'){
                $('#xu').addClass('animated fadeIn');
                $('#fu').addClass('animated fadeIn');
                $('#xu-1').addClass('animated fadeOut');
                $('#fu-1').addClass('animated fadeOut');
                setTimeout(function(){
                    $('#xu-1').addClass('xiaoshi');
                    $('#fu-1').addClass('xiaoshi');
                    $('#xu-2').removeClass('xiaoshi');
                    $('#fu-2').removeClass('xiaoshi');
                },4000);

                $('#san-xia').addClass('animated infinite fadeIn');


                /*remove*/
                $('#yi-kouhao').removeClass('animated fadeIn');
                $('#yi-xia').removeClass('animated infinite fadeIn');

                $('#huangse').removeClass('animated fadeIn');
                $('#lvse').removeClass('animated fadeIn');
                $('#lanse').removeClass('animated fadeIn');
                $('#qianlanse').removeClass('animated fadeIn');
                $('#zhuangshi').removeClass('animated fadeIn');
                $('#er-xia').removeClass('animated infinite fadeIn');

                $('#yonghu').removeClass('animated fadeInDown');
                $('#yonghu1').removeClass('animated bounce');
                $('#yonghu2').removeClass('animated bounce');
                $('#yonghu3').removeClass('animated bounce');
                $('#yonghu4').removeClass('animated bounce');
                $('#yonghu5').removeClass('animated bounce');
                $('#si-xia').removeClass('animated infinite fadeIn');

                $('#dunpai').removeClass('animated fadeIn');
                $('#jinrong').removeClass('animated fadeIn');
                $('#huanrao').removeClass('animated fadeIn');
            };
            if(index == '4'){
                $('#yonghu').addClass('animated fadeInDown');
                $('#yonghu1').addClass('animated bounce');
                $('#yonghu2').addClass('animated bounce');
                $('#yonghu3').addClass('animated bounce');
                $('#yonghu4').addClass('animated bounce');
                $('#yonghu5').addClass('animated bounce');
                $('#si-xia').addClass('animated infinite fadeIn');

                /*remove*/
                $('#yi-kouhao').removeClass('animated fadeIn');
                $('#yi-xia').removeClass('animated infinite fadeIn');

                $('#huangse').removeClass('animated fadeIn');
                $('#lvse').removeClass('animated fadeIn');
                $('#lanse').removeClass('animated fadeIn');
                $('#qianlanse').removeClass('animated fadeIn');
                $('#zhuangshi').removeClass('animated fadeIn');
                $('#er-xia').removeClass('animated infinite fadeIn');

                $('#xu').removeClass('animated fadeInDown');
                $('#fu').removeClass('animated fadeInDown');
                $('#san-xia').removeClass('animated infinite fadeIn');

                $('#dunpai').removeClass('animated fadeIn');
                $('#jinrong').removeClass('animated fadeIn');
                $('#huanrao').removeClass('animated fadeIn');

            };
            if(index == '5'){
                $('#dunpai').addClass('animated fadeIn');
                $('#jinrong').addClass('animated fadeIn');
                $('#huanrao').addClass('animated fadeIn');

                /*remove*/
                $('#yi-kouhao').removeClass('animated fadeIn');
                $('#yi-xia').removeClass('animated infinite fadeIn');

                $('#huangse').removeClass('animated fadeIn');
                $('#lvse').removeClass('animated fadeIn');
                $('#lanse').removeClass('animated fadeIn');
                $('#qianlanse').removeClass('animated fadeIn');
                $('#zhuangshi').removeClass('animated fadeIn');
                $('#er-xia').removeClass('animated infinite fadeIn');

                $('#xu').removeClass('animated fadeInDown');
                $('#fu').removeClass('animated fadeInDown');
                $('#san-xia').removeClass('animated infinite fadeIn');

                $('#yonghu').removeClass('animated fadeInDown');
                $('#yonghu1').removeClass('animated bounce');
                $('#yonghu2').removeClass('animated bounce');
                $('#yonghu3').removeClass('animated bounce');
                $('#yonghu4').removeClass('animated bounce');
                $('#yonghu5').removeClass('animated bounce');
                $('#si-xia').removeClass('animated infinite fadeIn');
            };
        },
    });

    $('#yi-kouhao').addClass('animated fadeIn');
    $('#yi-xia').addClass('animated infinite fadeIn');

    /* 安卓&IOS按键变换 */
    $("#yi-ios").hover(function(){
        $("#yi-but").css("background-image", "url('img/Tbt-IOSduan.png')");
        $("#yi-an").css("color","#ffffff");
        $("#yi-ios").css("color","#919aa4");
    });
    $("#yi-an").hover(function(){
        $("#yi-but").css("background-image", "url('img/Tbt-anzuoduan.png')");
        $("#yi-an").css("color","#919aa4");
        $("#yi-ios").css("color","#ffffff");
    });

    $("#wu-ios").hover(function(){
        $("#wu-but").css("background-image", "url('img/Tbt-IOSduan.png')");
        $("#wu-an").css("color","#ffffff");
        $("#wu-ios").css("color","#919aa4");
    });
    $("#wu-an").hover(function(){
        $("#wu-but").css("background-image", "url('img/Tbt-anzuoduan.png')");
        $("#wu-an").css("color","#919aa4");
        $("#wu-ios").css("color","#ffffff");

    });
});
