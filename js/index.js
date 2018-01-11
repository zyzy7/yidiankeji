/**
 * Created by Administrator on 2017/12/21.
 */

//dataShow在可视区域中数字倒计时等
$wind = $(window);

$wind.scroll(function () {

    var dataSH = $(".dataShow").offset().top;
    //alert($(this).scrollTop());
    //alert(dataSH - 200);
    //alert(dataSH +

    ////如果在这个范围内，则业务介绍部分的文字放大
    //if($(this).scrollTop() > busH -200 && $(this).scrollTop() < busH + 400) {
    //    $(".business__txt>p").addClass("zoomTxt");
    //}
    //如果鼠标滚动在这个范围内，则开始倒数
    if($(this).scrollTop() > dataSH - 300 && $(this).scrollTop()< dataSH + 500) {
        //5个倒数数字
        count(1,561);
        count(2,69);
        count(3,2013);
        count(4,9);
        count(5,97);
    }
    else {
        count(1,0);
        count(2,0);
        count(3,0);
        count(4,0);
        count(5,0);
    }
    ////如果在
    //if($(this).scrollTop() !== bannerH) {
    //    $(".navbar-header").css("backgroundColor","#262626");
    //
    //}else {
    //    $(".navbar-header").css("backgroundColor","transparent");
    //}
});

//倒数的动画
    function count(num,sum) {
        $(".num"+num+"").stop()
            .animate({counter: sum},{
                    duration: 1000,
                    step: function() {
                        $(".num"+num+"").text(parseInt(this.counter));
                }
            }
        )
    }

////case 案例的模糊效果
//$imgArea = $(".case__imgWrap");
//$imgGlass = $(".glass>i");
//$imgArea.mouseover(function() {
//    $imgGlass.addClass("addMask");
//});
//$imgArea.mouseout(function() {
//    $imgGlass.removeClass("addMask");
//});

//�����ֲ��������л�
//���Ұ�ť
//$leftBtn = $(".carousel__txt-left");
//$rightBtn = $(".carousel__txt-right");
//$act = $(".together .active");
//
//$leftBtn.click(function() {
//    //��ǰ������
//    var index = $act.index();
//    var $par = $act.parent();
//    //item�ĸ�Ԫ��
//
//    //����item����
//    var sibs = $par.find(".item");
//    var len = sibs.length;
//    $act.removeClass("active");
//    alert(index);
//    if(index === 0) {//�����ǰ�ǵ�1��
//        //alert("hi");
//        sibs[1].addClass("active");
//    }
//    else if(index === len-1) {//��������һ��
//        sibs[0].addClass("active");
//    }
//    else {//������м����
//        var prev = $act.prev();
//        prev.addClass("active");
//    }
//
//});