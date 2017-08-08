$(function () {


    function login_after(){

        $('.top_nav_login').html('退出');
        $('.top_nav_login').next('a').html(' ');
        $('.top_nav_login').next('a').css('border-left', 'none');

    }

    //键盘操作
    $(document).keydown(function (event) {
        if (event.keyCode == 13) {
            if($('.login_list ul').eq(0).css('display')=='block'){
                account_login();
            }else{
                 msg_login();
            }
        }
    });
    
    
    // if($.cookie("rmbUser")==false){
    //     $.cookie("username", "", { expires: -1 });
    //     $.cookie("password", "", { expires: -1 });
    //     store.remove('usercode');
    //     store.remove('csrfToken');
    //     store.remove('username');
    //     store.remove('enterprise_id');
    //     store.remove('roleid');
    //     window.location.href = 'login.html';

    // }
    // $(window).unload( function () { 
    //     store.remove('usercode');
    //     store.remove('csrfToken');
    //     store.remove('username');
    //     store.remove('enterprise_id');
    //     store.remove('roleid');
    //  } );

    //账号登录
    function account_login(){ 
        var ulog = new MilkT(eh, 3)
        ulog.send({ usercode: $('#username').val(), password: md5($('#pwd').val()) })
            .done(function (data) {
                console.log(data);
                $('.hyuser').html(data.username + ',欢迎来到乐纺!');
                login_after();
                store.set('csrfToken', data.csrftoke);
                store.set('usercode', data.usercode);
                store.set('username', data.username);
                store.set('roleid', data.roleid);
                store.set('enterprise_id', data.enterprise_id);
                store.set('userinfo', JSON.stringify(data.usercode));
                // console.log($cookies);
                // if($(".serven_logino").find("img").attr("src")=="images/pic/check_on.png") {
                //     var str_username = $("#username").val();
                //     var str_password = $("#pwd").val();
                //     $.cookie("rmbUser", "true", { expires: 7 }); //存储一个带7天期限的cookie
                //     $.cookie("username", str_username, { expires: 7 });
                //     $.cookie("password", str_password, { expires: 7 });
                // }else{
                //     $.cookie("rmbUser", "false", { expire: -1 });
                //     $.cookie("username", "", { expires: -1 });
                //     $.cookie("password", "", { expires: -1 });
                //     $.cookie("__da", "", { expires: -1 });
                //     // store.remove('usercode');
                //     // store.remove('csrfToken');
                //     // store.remove('username');
                //     // store.remove('enterprise_id');
                //     // store.remove('roleid');
                // }
                window.location.href = 'index.html';

                })
            .fail(function () {
                alert('用户名或密码错误');
            })

        
    }
    $('.login_current').click(function () {
        account_login();
    })

   

    //验证手机号
    function checkregist() {
        var testLinkTel = $('.getMobile').val();
        var regLinkTel = /^(0|86|17951)?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/;
        var resultLinkTel = regLinkTel.test(testLinkTel);
        if (!resultLinkTel || resultLinkTel == '') {
            $('.getMobile').css('border', '1px solid red');
        } else {
            $('.getMobile').css('border', '');
            return true;
        }
    }

    var timer='';
    var mesgInfo='';
    $('.getCode').one('click', function () {
        if(checkregist()){
            var dxyz = new MilkT(dxyzm, 1);
            dxyz.send({ telephone: $('.getMobile').val(), username: '用户', type: 3 })
                .done(function (data) {
                    console.log(data);
                    mesgInfo=data.smscode;
                    timer = setInterval(distime, 1000);
                    $('.getCode').css('background', 'grey');
                })
        }
    })

    //短信验证倒计时
    var xx = 60;
    function distime() {
        xx -= 1;
        // $('.seconds').html(xx);
        if (xx <= 0) {
            $('.getCode').css('background', '#eb6100');
            $('.getCode').html('获取短信验证码');
            clearInterval(timer);
            // $('.seconds').html(20);
            xx=60;
            $('.getCode').one('click', function () {
                timer = setInterval(distime, 1000);
                checkregist();
                var dxyz = new MilkT(dxyzm, 1);
                dxyz.send({ telephone: $('.getMobile').val(), username: '用户', type: 3 })
                    .done(function (data) {
                        console.log(data);
                        mesgInfo=data.smscode;
                        $('.getCode').css('background', 'grey');
                    })
            })
        } else {
            $('.getCode').css('background', 'grey');
            $('.getCode').html(xx);
        }
    }

    function msgInfoCheck(){
        if($('.getMCode').val()!=mesgInfo){
          $('.getMCode').attr('placeholder','请输入正确的验证码');
          $('.getMCode').css('border','1px solid red');
          return false;
        }else{
          $('.getMCode').attr('placeholder','验证码');
          $('.getMCode').css('border','');
          return true;
        }
      }

    //短信密码登录
    function msg_login(){
        if(checkregist()&&msgInfoCheck()){
             var uLmobile = new MilkT(userLMobile, 3);
            uLmobile.send({ mobile: $('.getMobile').val(), code: $('.getMCode').val() })
            .done(function (data) {

                console.log(data);
                    $('.hyuser').html(data.username + ',欢迎来到乐纺!');
                    login_after();
                    store.set('csrfToken', data.csrftoke);
                    store.set('usercode', data.usercode);
                    store.set('username', data.username);
                    store.set('roleid', data.roleid);
                    store.set('enterprise_id', data.enterprise_id);
                    store.set('userinfo', JSON.stringify(data.usercode));
                    window.location.href = 'index.html';

            })
        }
    }
    $('.mobileL').click(function () {
        msg_login();
    })


    if (store.get('usercode')) {
        $('.top_nav_login').html('退出');
        $('.top_nav_login').next('a').html(' ');
        $('.top_nav_login').next('a').css('border-left', 'none');
        $('.hyuser').html(store.get('username') + ',欢迎来到乐纺！');
        $('.hyuser').mouseover(function () {
            $(this).css('border-bottom', '1px solid #fff');
        }).mouseleave(function () {
            $(this).css('border-bottom', '');
        })
        $('.hyuser').attr('href', 'qygl.html');
        $('.top_nav_login').click(function () {
            $('.top_nav_login').html('请登录');

            store.remove('usercode');
            store.remove('csrfToken');
            store.remove('username');
            store.remove('enterprise_id');
            store.remove('roleid');
            // store.remove('shoping_cart');
            console.log('usercode');
            history.go(0);
            $('.hyuser').html(store.get('username') + ',欢迎来到乐纺!');
        })
    } else {
        $('.top_nav_login').html('登录');
        $('.top_nav_right a.top_nav_regist').text('注册');
        $('.hyuser').html('HI,欢迎来到乐纺！');
    }


    if (store.get('usercode')) {
        $('.top_nav_regist').click(function () {
            $('.top_nav_login').html('请登录');
            store.remove('usercode');
            store.remove('csrfToken');
            console.log('usercode');
            history.go(0);
            $('.hyuser').html(store.get('usercode') + ',欢迎来到乐纺!');
        })
    }
        var usercode=store.get('usercode');
        var shopcart_nums = new MilkT(shopcat_nums, 3)

        shopcart_nums.send({usercode:usercode})
            .done(function(data){
                console.log(data);
                $('.main_nav_shopcart').children('a').find('span').text(data.value);
            })
            .fail(function() {
                    console.log('您尚未登录！');
            })
        
        
        

});




