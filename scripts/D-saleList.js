$(function(){
    /*------------渲染页面-----------*/

    var template_address = $('#saleList_Box').text();
    var templateFn_address = _.template(template_address);
    $('.qygl-right').append(templateFn_address);


    /*------------切换select----------*/

    $('.status>select').css('display','none');
    $('#all_select').css('display','block');

    var selectArray=[
                        $('#all_select'),$('#dqht_select'),$('#dsh_select'),
                        $('#fq_select'),$('#dfk_select'),$('#ywc_select')
                    ];

    $('.tit>li').on('click',function(){
        var i=$(this).index();
        $('.status>select').css('display','none');
        $('.tit>li').removeClass('tit-active');
        selectArray[i].css('display','block');
        $(this).addClass('tit-active');
    })


    var result_DataArray=[];//定义用于保存请求结果的数组;

    /*请求数据*/
    var stance = new MilkT(saleOrderList, 3);
    stance.send({
        seller:store.get('usercode')
    })
    .done(function(data){

        result_DataArray=data.value;//保存请求结果;
        console.log(result_DataArray);
        for(var obj in data.value){
            createHTML(data.value[obj]);
        }
    })
    .fail(function(){
        console.log('销售订单列表请求失败');
    })

    //生成订单列表
    function createHTML(data){
        var obj;
        for(var i in data.OrderProducts){
            obj=data.OrderProducts[i];
        }

        var orderCell=_.template(
            '\
                <div class=ListCell>\
                            <div class="orderInfo">\
                                <span class="dayTime fl"><%=data.order_time%></span>\
                                <span class="orderNum">订单号：<%=data.order_code%></span>\
                                <span class="qy">企业：<%=data.seller%></span>\
                            </div>\
                            <div class="proCell">\
                                <div class="pro fl">\
                                    <img class="pro-img fl" src="<%=obj.main_pic%>" width="72" height="72">\
                                    <div class="pro-text fl">\
                                        <p><%=obj.product_name%></p>\
                                        <p><%=obj.category_name%></p>\
                                    </div>\
                                    <ul class="proTD">\
                                        <li style="color: darkgray;"></li>\
                                        <li>x<%=data.nums%></li>\
                                        <li class="buyers" style="color: darkgray;"></li>\
                                        <li class="ze">\
                                            <div>\
                                                <p>应付总额：￥<span></span></p>\
                                                <p>订单总额：￥<span><%=data.total_price%></span></p>\
                                            </div>\
                                        </li>\
                                        <li class="status">\
                                            <div>\
                                                <p class="state"><%=data.ispay%></p>\
                                                <p><a class="order_id">订单详情</a></p>\
                                            </div>\
                                        </li>\
                                        <li class="operation">\
                                            <div>\
                                                <button class="btn">立即付款</button>\
                                                <p><a class="order_id">订单详情</a></p>\
                                            </div>\
                                        </li>\
                                    </ul>\
                                </div>\
                            </div>\
                            <div class="clear"></div>\
                        </div>\
            ');
        var htmlText=orderCell({'data':data,'obj':obj});
        $('.orderList').append(htmlText);

        //填写采购员
        $('.buyers').text(store.get('username'));
    }


    /*---------------搜索---------------*/

    $('#btn_search').on('click',function(){
        var rtext=$.trim($(this).prev().val());
        if(findOrder(rtext)!='finded'){
            alert('抱歉，未搜索到此订单');
        }
    })

    /*遍历所有订单*/
    function findOrder(rtext){
        console.log(result_DataArray);
        for(var i=0;i<result_DataArray.length;i++){
            if(result_DataArray[i].order_code==rtext){
                operateDOM(result_DataArray[i]);
                return 'finded';
            }
        }
    }

    //查找到之后的DOM操作
    function operateDOM(obj){
        $('.ListCell').remove();
        createHTML(obj);
    }

})