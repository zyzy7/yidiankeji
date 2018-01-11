/**
 * Created by Administrator on 2017/12/16.
 */

//为了解决浏览器缩小后点击三道杠按钮后，放大窗口菜单消失,反复缩放窗口菜单显示失效等问题，得不停计算窗口大小判断
    var $wind = $(window);//获取窗口对象

    $wind.resize(function(){
        var $windW = $(window).width();//获取窗口当前宽度
        $windW > 767?$navMenu.show():$navMenu.hide();
    });
//菜单折叠
    $navMenu = $(".nav__menu");//菜单列表
    $navMenus = $(".nav__menu-s");//菜单三道杠按钮

    var menuSwitch = false;//表示菜单未展开
    $navMenus.click(function() {
        //如果为false，则赋值为true，此时由收缩改为展开
                   //当菜单展开的时候关闭
        if(menuSwitch=!menuSwitch) {
            $navMenu.slideUp(400);
        }
        else {
            $navMenu.slideDown(400);
        }
    });


//当页面滚动，导航条字体颜色更改

$wind.scroll(function () {
    if($(".business")[0]) {//首页的业务介绍
        var busH = $(".business").offset().top;
        if($(this).scrollTop() > busH -200 && $(this).scrollTop() < busH + 400) {
            $(".business__txt>p").addClass("zoomTxt");
        }
    }
    //业务介绍
    //如果在这个范围内，则业务介绍部分的文字放大

//导航的菜单字体
    if ($(this).scrollTop() !== 0) {
        $(".nav__menu>li>a.active").css("color","#c91425");
        $(".nav__menu>li>a").hover(function() {
            $(this).css("color","#c91425");
        },function() {
            if(!$(this).hasClass("active")) {
                $(this).css("color","#bfbfbf");
            }
        });

    } else {
        $(".nav__menu>li>a.active").css("color","#fff");
    }

    //服务页的help
    if($(".help__leftImg")[0]) {
        var helpTop = $(".help").offset().top;
        if($(this).scrollTop() > helpTop - 200 && $(this).scrollTop() < helpTop + 400) {
            $(".help__leftImg").addClass("leftImg-act");
        }
    }
    //服务页的营销
    if($(".market__imgLeft")[0]) {
        var marketTop = $(".market").offset().top;
        if($(this).scrollTop() > marketTop - 200 && $(this).scrollTop() < marketTop + 400) {
            $(".market__imgLeft").addClass("leftImg-act");
        }
    }
    //服务页的省钱块
    if($(".save")[0]) {
        var saveTop = $(".save").offset().top;
        if($(this).scrollTop() > saveTop - 200 && $(this).scrollTop() < saveTop + 400) {
            $(".save__bottomCont-imgl").addClass("save__bottomCont-imgl-act");
        }
    }
    //关于页,special的效果
    if($(".special")[0]) {
        var specialTop = $(".special").offset().top;
        if($(this).scrollTop() > specialTop - 200 && $(this).scrollTop() < specialTop + 400) {
            $(".special__cont-txtP").addClass("special__cont-txtP-act");
            $(".special__cont-cpterImg").addClass("special__cont-cpterImg-act");
        }
    }
    //关于页,ideal的效果
    if($(".ideal")[0]) {
        var idealTop = $(".ideal").offset().top;
        if($(this).scrollTop() > idealTop - 200 && $(this).scrollTop() < idealTop + 400) {
            $(".ideal__rightImg").addClass("ideal__rightImg-act");
        }
    }
    //关于页,优点介绍的效果
    if($(".good")[0]) {
        var goodTop = $(".good").offset().top;
        if($(this).scrollTop() > goodTop - 200 && $(this).scrollTop() < goodTop + 400) {
            $(".good__txt>p").addClass("zoomTxt");
        }
    }
    //关于页,比例图的效果
    if($(".client")[0]) {
        var clientTop = $(".client").offset().top;
        if($(this).scrollTop() > clientTop - 200 && $(this).scrollTop() < clientTop + 400) {
            $(".client__grib-img>li>img").addClass("client__grib-img-act");
        }
    }

});

//case 案例的模糊效果
if($(".case__imgWrap")[0]) {
    $imgArea = $(".case__imgWrap");
    $imgGlass = $(".glass__wrap");
    $imgArea.mouseover(function(e) {
        var targetGlass = $(e.target).parent().parent(".glass__wrap");
        $imgGlass.addClass("addMask");
        //alert($(e.target).parent().parent(".glass__wrap"));
        targetGlass.addClass("addMask-act");
    });
    $imgArea.mouseout(function(e) {
        var targetGlass = $(e.target).parent().parent(".glass__wrap");
        $imgGlass.removeClass("addMask");
        targetGlass.removeClass("addMask-act");
    });
}

$('.submit_btn').click(function(){
    if($("input[name='uname']").val()==""||$("input[name='uname']").val()=="您的称呼"){
        alert("请输入您的称呼。");
        return;
    }
    if($("input[name='company']").val()=="您所代表的公司"||$("input[name='company']").val()==""){
        alert("请输入您所代表的公司。");
        return;
    }
    if($("input[name='phone']").val()=="您的联系电话"||$("input[name='phone']").val()==""){
        alert("请输入您的电话。");
        return;
    }
    if($("textarea[name='message']").val()=="请输入您的详细需求描述，我们将在24小时内给出答复"||$("textarea[name='message']").val()=="") {
        alert("请输入您的详细需求。");
        return;
    }
    $.ajax({
        url:"data/contact.php",
        data:$('#form1').serialize(),
        type: "post",
        error: function() {
            alert("提交发生错误，请重新提交。");
            return false;
        },
        success: function(data) {
            if(data=="1")
            {
                alert("已成功提交，我们将在24小时内给出答复。");
            }
            else
            {
                alert("保存失败，请稍后再提交。");
            }
        }
    });
});

//提交按钮
if($(".form__submit")[0]) {
    $('.form__submit').click(function(){
        if($("input[name='uname']").val()==""||$("input[name='uname']").val()=="您的称呼"){
            alert("请输入您的称呼。");
            return;
        }
        if($("input[name='company']").val()=="您所代表的公司"||$("input[name='company']").val()==""){
            alert("请输入您所代表的公司。");
            return;
        }
        if($("input[name='phone']").val()=="您的联系电话"||$("input[name='phone']").val()==""){
            alert("请输入您的电话。");
            return;
        }
        if($("textarea[name='message']").val()=="请输入您的详细需求描述，我们将在24小时内给出答复"||$("textarea[name='message']").val()=="") {
            alert("请输入您的详细需求。");
            return;
        }
        //如果没有填写，提示需要填写
        $.ajax({
            url:"data/contact.php",
            data:$('#form').serialize(),
            type: "post",
            error: function() {
                alert("提交发生错误，请重新提交。");
                return false;
            },
            success: function(data) {
                if(data=="1")
                {
                    alert("已成功提交，我们将在24小时内给出答复。");
                }
                else
                {
                    alert("保存失败，请稍后再提交。");
                }
            }
        });
    });
}

