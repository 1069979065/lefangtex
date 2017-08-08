$(function(){
        // var template_qygl = $('#lefang_qygl').text();
        // var templateFn_qygl = _.template(template_qygl);
        // $('#lefangtex_qygl').append(templateFn_qygl);
        /*会员中心和实名认证的切换*/



        var uCode=store.get('usercode');

        var enterQS = new MilkT(enterpriseQS,3)
            enterQS.send({usercode:uCode})
                    .done(function(data){
                        // console.log(data);
                          //会员账号
                          if(data.userid=='null'){
                            data.userid='';
                        }
                        //会员编号
                        if(data.lfcode=='null'){
                            data.lfcode='';
                        }
                        //注册名称
                        if(data.company_name=='null'){
                            data.company_name='';
                        }
                        //注册时间
                        if(data.create_time=='null'){
                            data.create_time=' ';
                        }
                        //统一社会信用代码
                        if(data.unified_code=='null'){
                            data.unified_code='';
                        }
                        //法人代表
                        if(data.legalperson=='null'){
                            data.legalperson='';
                        }
                        //法人代表身份证
                        if(data.legalperson_code=='null'){
                            data.legalperson_code='';
                        }
                        //详细地址
                        if(data.province=='null'){
                            data.province='';
                        }
                        if(data.city='null'){
                            data.city='';
                        }
                        if(data.address='null'){
                            data.address='';
                        }
                        //注册电话
                        if(data.phone_number=='null'){
                            data.phone_number='';
                        }
                        //注册资本
                        if(data.registered_capital=='null'){
                            data.registered_capital='';
                        }
                        //成立时间
                        if(data.founding_time=='null'){
                            data.founding_time='';
                        }
                        //企业类型
                        if(data.enterprise_nature=='null'){
                            data.enterprise_nature='';
                        }
                        //产品范围
                        if(data.main_business=='null'){
                            data.main_business='';
                        }
                        //商业模式
                        if(data.mgmt_model=='null'){
                            data.mgmt_model='';
                        }
                        var template_qygl = $('#lefang_qygl').text();
                        var templateFn_qygl = _.template(template_qygl);
                        var dom = templateFn_qygl(data);

                        $('#lefangtex_qygl').append(dom);


                        $('.qygl-left-con>ul>li').mouseenter(function(){
                            $('.qygl-left-con>ul>li>div').hide();
                            $(this).find('div').show();
                        })
                        $('.qygl-left').mouseleave(function(){
                            $('.qygl-left-con>ul li div').hide();
                        })
                        $('.qygl-left-con>ul>li:first-of-type').hover(function(){
                            $(this).css('background','#fff');
                        })

                        $('.qygl-left ul li.active img').attr('src','images/icon/会员中心_press.png');
                        $('.qygl-left-con>ul>li').eq(2).mouseenter(function(){
                            $(this).find('img').attr('src','images/icon/企业信息管理_press.png');
                        }).mouseleave(function(){
                            $(this).find('img').attr('src','images/icon/企业信息管理.png');
                        })
                        $('.qygl-left-con>ul>li').eq(3).mouseenter(function(){
                            $(this).find('img').attr('src','images/icon/商品管理_press.png');
                        }).mouseleave(function(){
                            $(this).find('img').attr('src','images/icon/商品管理.png');
                        })
                        $('.qygl-left-con>ul>li').eq(4).mouseenter(function(){
                            $(this).find('img').attr('src','images/icon/订单管理_press.png');
                        }).mouseleave(function(){
                            $(this).find('img').attr('src','images/icon/订单管理.png');
                        })
                        $('.qygl-left-con>ul>li').eq(5).mouseenter(function(){
                            $(this).find('img').attr('src','images/icon/合同管理_press.png');
                        }).mouseleave(function(){
                            $(this).find('img').attr('src','images/icon/合同管理.png');
                        })
                        $('.qygl-left-con>ul>li').eq(6).mouseenter(function(){
                            $(this).find('img').attr('src','images/icon/发票管理_press.png');
                        }).mouseleave(function(){
                            $(this).find('img').attr('src','images/icon/发票管理.png');
                        })
                        $('.qygl-left-con>ul>li').eq(7).mouseenter(function(){
                            $(this).find('img').attr('src','images/icon/支付管理_press.png');
                        }).mouseleave(function(){
                            $(this).find('img').attr('src','images/icon/支付管理.png');
                        })
                        if(data.apply_status==1){
                            $('.envip_status').text('审核中');
                        }else if(data.apply_status==2){
                            $('.envip_status').text('已认证');
                        }else if(data.apply_status==3){
                            $('.envip_status').text('认证不成功');
                        }else if(data.apply_status==4){
                            $('.envip_status').text('未认证');
                        }





/*-------------------------------发票地址维护-------------------------------------*/


        /*发票管理栏目的页面切换*/

        var conentInvoices=[];
        conentInvoices['waiteInvoice']=$('.waiteInvoice');
        conentInvoices['applyInvoice']=$('.applyInvoice');
        conentInvoices['invoiceManage']=$('.invoiceManage');
        $('.fpgl li').click(function(){
            var id=$(this).attr('id');
            $('.conentInvoices').css('display','none');
            conentInvoices[id].show();
        })



                         //实名认证隐藏
                        $('.qyrz_realName').hide();
                        $('.vipcenter_tab ul li').click(function () {
                            // console.log($(this).index());
                            $(this).addClass('active').siblings().removeClass('active');
                            $('.qygl-right-con').children('div').eq(1).css('display','none');
                            $('.qygl-right-con').children('div').eq(2).css('display','none');
                            $('.qygl-right-con').children('div').eq($(this).index()+1).css('display','block');

                        })

    })




    function QueryString(item)
    {
        var sValue=location.search.match(new RegExp("[\?\&]"+item+"=([^\&]*)(\&?)","i"))
        return sValue?sValue[1]:sValue
    }
    //使用方法
    //url=http://www.xxx.com?ID=100&name=dom
    var ID=QueryString("ID");
    if(ID!==null){
        // debugger;
        $('.envip_identifi').css('display','none');
    }
    else{
        $('.envip_identifi').css('display','block');
    }


})

