$(function(){
    var template_top = $('#lefang_top').text();
    var templateFn_top = _.template(template_top);
    $('#lefangtex_top').append(templateFn_top);

    var template_nav = $('#lefang_nav').text();
    var templateFn_nav = _.template(template_nav);
    $('#lefangtex_nav').append(templateFn_nav);

    var template_nav_suspend = $('#lefang_nav_suspend').text();
    var templateFn_nav_suspend = _.template(template_nav_suspend);
    $('#lefangtex_nav_suspend').append(templateFn_nav_suspend);

    var template_banner = $('#lefang_banner').text();
    var templateFn_banner = _.template(template_banner);
    $('#lefangtex_banner').append(templateFn_banner);

    var template_yarn = $('#lefang_yarn').text();
    var templateFn_yarn = _.template(template_yarn);
    $('#lefangtex_yarn').append(templateFn_yarn);


    var template_grey = $('#lefang_grey').text();
    var templateFn_grey = _.template(template_grey);
    $('#lefangtex_grey').append(templateFn_grey);


    var template_the_fabric = $('#lefang_the_fabric').text();
    var templateFn_the_fabric = _.template(template_the_fabric);
    $('#lefangtex_the_fabric').append(templateFn_the_fabric);


    var template_lefang_news = $('#lefang_lefang_news').text();
    var templateFn_lefang_news = _.template(template_lefang_news);
    $('#lefangtex_lefang_news').append(templateFn_lefang_news);

    var template_foot_add = $('#lefang_foot_add').text();
    var templateFn_foot_add = _.template(template_foot_add);
    $('#lefangtex_foot_add').append(templateFn_foot_add);
    // var template_foot = $('#lefang_foot').text();
    // var templateFn_foot = _.template(template_foot);
    // $('#lefangtex_foot').append(templateFn_foot);


    var template_little_function = $('#lefang_little_function').text();
    var templateFn_little_function = _.template(template_little_function);
    $('#lefangtex_little_function').append(templateFn_little_function);

            var homePInfo = new MilkT(homePI,3)
            homePInfo.send({})
              .done(function(data){
                console.log(data);
                var template_preferred_goods = $('#lefang_preferred_goods').text();
                var templateFn_preferred_goods = _.template(template_preferred_goods);
                $('#lefangtex_preferred_goods').append(templateFn_preferred_goods);
                // var template = $('#lefang-ysyp').text();
                // var templateFn = _.template(template);
                // $('#lefangtex-ysyp').append(templateFn);
                 //alert(JSON.stringify(dom));
                var alldata=data.homePageProductList;
                  //循环模式
                var compiled = _.template('<% _.forEach(alldata, function(pdata) { \
                  %><li>\
                        <a href="yarn_detail.html?id=<%=pdata.productId%>" target="_blank">\
                            <img src="<%=pdata.productImage%>" alt="" />\
                            <span><%= pdata.productName%></span>\
                            <strong>￥<%=pdata.productPrice%><em>/<%= pdata.productUnit%></em></strong>\
                        </a>\
                    </li>\
                   <% \
                }); %>');

                var templateTest=compiled({ 'alldata': alldata});
                $('.ul1').append(templateTest);
                console.log($('.preferred_goods_copy li').length);
                // if($(".ul1 li").length>=4){
                //     for(var i=0;i<$(".ul li").length-4;i++){
                //         $(".ul2").append($(".ul1 li").eq(i+5));
                //     }
                // }
                //滚动图
                // var k=0;
                // var clo=$('.preferred_goods_copy').children('.preferred_goods_list').first().clone();
                // $('.preferred_goods_copy').append(clo).width($('.preferred_goods_container').children('.preferred_goods_list').length*($('.preferred_goods_container').children('.preferred_goods_list').width));
                // $('.preferred_goods_prev').click(function(){
                //     k++;
                //     if(k==$('.preferred_goods_copy').children('.preferred_goods_list').length){
                //         k=1;
                //         $('.preferred_goods_copy').css({'left':0})
                //     }
                //     $('.preferred_goods_copy').stop().animate({'left':-k*1200},500);
                // })

                // $('.preferred_goods_next').click(function(){
                //     k--;
                //     if(k==-1){
                //         k=$('.preferred_goods_copy').children('.preferred_goods_list').length-2;
                //         $('.preferred_goods_copy').css({'left':-($('.preferred_goods_copy').children('.preferred_goods_list').length-1)*1200})
                //     }
                //     $('.preferred_goods_copy').stop().animate({'left':-k*1200},500);
                // })
            })



    //闭包轮播
    for(var j=0;j<=$('.banner').length-1;j++){
        (function(m){
            var i=1;
            var timer=setInterval(playing,3000);
            $('.banner').eq(m).find('.banner_img li').eq(0).show();
            $('.banner').eq(0).find('.banner_prev').hide();
            $('.banner').eq(0).find('.banner_next').hide();
            function playing(){
                if(i>$('.banner').eq(m).find('.banner_img li').length-1){
                    i=0;
                }
                // console.log(i);
                imgRun(i);
                spanRun(i);
                i++;
            }
            function imgRun(i){
                $('.banner').eq(m).find('.banner_img>li').hide().eq(i).show();

            }
            function spanRun(i){
                $('.banner').eq(m).find('.banner_circle li').removeClass('selected').eq(i).addClass('selected')
            }
            $('.banner').eq(m).mouseenter(function(){
                clearInterval(timer);
                $('.banner').eq(m).find('.banner_circle li').mouseenter(function(){
                    imgRun($(this).index());
                    spanRun($(this).index());
                }).mouseleave(function(){
                    i=$(this).index()+1;
                })
                $('.banner').eq(0).find('.banner_prev').show();
                $('.banner').eq(0).find('.banner_next').show();
            }).mouseleave(function(){
                timer=setInterval(playing,3000);
                $('.banner').eq(0).find('.banner_prev').hide();
                $('.banner').eq(0).find('.banner_next').hide();
            })
            $('.banner').eq(m).find('.banner_prev').click(function(){
                i=i-($('.banner').eq(m).find('.banner_img li').length-1);
                if(i==0-($('.banner').eq(m).find('.banner_img li').length-1)){
                    // i=$('.banner_img li:not(:last-of-type)').length-2;
                    i=1;
                }
                playing();
            })
            $('.banner').eq(m).find('.banner_next').click(function(){
                playing();
            })
        })(j)
    }

    //首页导航
    $('.main_nav_list ul li a').click(function(){
        $('.main_nav_list ul li').eq($(this).parent().index()).addClass('active').siblings().removeClass('active');
    })



    //纺织资讯选项卡
    $('.lefang_news_zhishi').hide();
    $('.lefang_news_xk a').mouseover(function(){
        $('.lefang_news_xk a').eq($(this).index()).addClass('active').siblings().removeClass('active');
        $('.lefang_news_list').hide();
        $('.lefang_news_list').eq($(this).index()).show();
    })


    //返回顶部
    $('.return_top').click(function(){
		$('html,body').animate({scrollTop:0},1000);
		return false;
	})
    $('.little_function').hide();
    $(window).scroll(function(){
        // console.log($(document).scrollTop());
        if($(document).scrollTop()<=420){
            $('.little_function').hide();
        }else{
            $('.little_function').show();
        }
    })

    //图标
    $('.little_function_container li>div').hide();
    $('.little_function_container li').mouseenter(function(){
        $('.little_function_container li').eq($(this).index()).css('background','#252C3C')
        .siblings().css('background','');
        $('.little_function_container li>div').hide();
        $('.little_function_container li').eq($(this).index()).children('div').show();
    })
    $('.little_function').mouseleave(function(){
        $('.little_function_container li>div').hide();
        $('.little_function_container li').css('background','');
    })


    //头部悬浮
    $(window).scroll(function(){
        if($(document).scrollTop()>=116){
            if(!$('.main_nav_suspend').is(':animated')){
                $('.main_nav_suspend').slideDown();
            }
        }else{
            if(!$('.main_nav_suspend').is(':animated')){
                $('.main_nav_suspend').slideUp();
            }
            $('.main_nav_suspend').slideUp();
        }
    })

        // 单击加入购物车  导航购物车 数量 同步
    if(store.get('shoping_cart')){
       $('.main_nav_shopcart').children('a').find('span').text(store.get('shoping_cart'));
       console.log( $('.main_nav_shopcart').children('a').find('span').text());
       console.log(store.get('shoping_cart'));
    }









})





