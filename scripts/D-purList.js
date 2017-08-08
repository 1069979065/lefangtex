$(function(){
	/*------------渲染页面-----------*/

	var template_address = $('#purList_Box').text();
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

    //已付款
    var y_pay=_.template(
            '\
                <div class=ListCell>\
                            <div class="orderInfo">\
                                <span class="dayTime fl"><%=data.order_time%></span>\
                                <span class="orderNum">订单号：<%=data.order_code%></span>\
                                <span class="qy">企业：<%=data.seller%></span>\
                                <span class="purchase_type fr">订单类型：<%=data.purchase_type%></span>\
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
                                                <p>订单总额：￥<span><%=data.total_price%></span></p>\
                                            </div>\
                                        </li>\
                                        <li class="status">\
                                            <div>\
                                                <p class="state">待发货</p>\
                                                <p><a class="order_id" href="#">订单详情</a></p>\
                                            </div>\
                                        </li>\
                                        <li class="operation">\
                                            <div>\
                                                <button class="btn">催卖家发货</button>\
                                                <p><a class="order_id" href="#">订单详情</a></p>\
                                            </div>\
                                        </li>\
                                    </ul>\
                                </div>\
                            </div>\
                            <div class="clear"></div>\
                        </div>\
            ');

    //未付款
    var n_pay=_.template(
            '\
                <div class=ListCell>\
                            <div class="orderInfo">\
                                <span class="dayTime fl"><%=data.order_time%></span>\
                                <span class="orderNum">订单号：<%=data.order_code%></span>\
                                <span class="qy">企业：<%=data.seller%></span>\
                                <span class="purchase_type fr">订单类型：<%=data.purchase_type%></span>\
                            </div>\
                            <div class="proCell">\
                                <div class="pro fl">\
                                    <img class="pro-img fl" src="<%=obj.main_pic%>" width="72" height="72">\
                                    <div class="pro-text fl">\
                                        <p><%=obj.product_name%></p>\
                                        <p><%=obj.category_name%></p>\
                                    </div>\
                                    <ul class="proTD">\
                                        <li style="color: darkgray;">￥<%=obj.unit_price%></li>\
                                        <li>x<%=data.nums%></li>\
                                        <li class="buyers" style="color: darkgray;"></li>\
                                        <li class="ze">\
                                            <div>\
                                                <p>订单总额：￥<span><%=data.total_price%></span></p>\
                                            </div>\
                                        </li>\
                                        <li class="status">\
                                            <div>\
                                                <p class="state">待付款</p>\
                                                <p><a class="order_id" href="#">订单详情</a></p>\
                                            </div>\
                                        </li>\
                                        <li class="operation">\
                                            <div>\
                                                <button class="btn">立即付款</button>\
                                                <p><a class="order_id" href="#">取消订单</a></p>\
                                            </div>\
                                        </li>\
                                    </ul>\
                                </div>\
                            </div>\
                            <div class="clear"></div>\
                        </div>\
            ');
    
    //已取消
    var order_cancel=_.template(
            '\
                <div class=ListCell>\
                            <div class="orderInfo">\
                                <span class="dayTime fl"><%=data.order_time%></span>\
                                <span class="orderNum">订单号：<%=data.order_code%></span>\
                                <span class="qy">企业：<%=data.seller%></span>\
                                <span class="purchase_type fr">订单类型：<%=data.purchase_type%></span>\
                            </div>\
                            <div class="proCell">\
                                <div class="pro fl">\
                                    <img class="pro-img fl" src="<%=obj.main_pic%>" width="72" height="72">\
                                    <div class="pro-text fl">\
                                        <p><%=obj.product_name%></p>\
                                        <p><%=obj.category_name%></p>\
                                    </div>\
                                    <ul class="proTD">\
                                        <li style="color: darkgray;">￥<%=obj.unit_price%></li>\
                                        <li>x<%=data.nums%></li>\
                                        <li class="buyers" style="color: darkgray;"></li>\
                                        <li class="ze">\
                                            <div>\
                                                <p>订单总额：￥<span><%=data.total_price%></span></p>\
                                            </div>\
                                        </li>\
                                        <li class="status">\
                                            <div>\
                                                <p class="state">已取消</p>\
                                                <p><a class="order_id" href="#">订单详情</a></p>\
                                            </div>\
                                        </li>\
                                        <li class="operation">\
                                            <div>\
                                                <button class="btn">重新购买</button>\
                                                <p><a class="order_id" href="#"></a></p>\
                                            </div>\
                                        </li>\
                                    </ul>\
                                </div>\
                            </div>\
                            <div class="clear"></div>\
                        </div>\
            ');

    //待发货
    var order_dfh=_.template(
            '\
                <div class=ListCell>\
                            <div class="orderInfo">\
                                <span class="dayTime fl"><%=data.order_time%></span>\
                                <span class="orderNum">订单号：<%=data.order_code%></span>\
                                <span class="qy">企业：<%=data.seller%></span>\
                                <span class="purchase_type fr">订单类型：<%=data.purchase_type%></span>\
                            </div>\
                            <div class="proCell">\
                                <div class="pro fl">\
                                    <img class="pro-img fl" src="<%=obj.main_pic%>" width="72" height="72">\
                                    <div class="pro-text fl">\
                                        <p><%=obj.product_name%></p>\
                                        <p><%=obj.category_name%></p>\
                                    </div>\
                                    <ul class="proTD">\
                                        <li style="color: darkgray;">￥<%=obj.unit_price%></li>\
                                        <li>x<%=data.nums%></li>\
                                        <li class="buyers" style="color: darkgray;"></li>\
                                        <li class="ze">\
                                            <div>\
                                                <p>订单总额：￥<span><%=data.total_price%></span></p>\
                                            </div>\
                                        </li>\
                                        <li class="status">\
                                            <div>\
                                                <p class="state">待卖家发货</p>\
                                                <p><a class="order_id" href="#">订单详情</a></p>\
                                            </div>\
                                        </li>\
                                        <li class="operation">\
                                            <div>\
                                                <button class="btn">催卖家发货</button>\
                                                <p><a class="order_id" href="#"></a></p>\
                                            </div>\
                                        </li>\
                                    </ul>\
                                </div>\
                            </div>\
                            <div class="clear"></div>\
                        </div>\
            ');

    //待确认收货
    var order_qrsh=_.template(
            '\
                <div class=ListCell>\
                            <div class="orderInfo">\
                                <span class="dayTime fl"><%=data.order_time%></span>\
                                <span class="orderNum">订单号：<%=data.order_code%></span>\
                                <span class="qy">企业：<%=data.seller%></span>\
                                <span class="purchase_type fr">订单类型：<%=data.purchase_type%></span>\
                            </div>\
                            <div class="proCell">\
                                <div class="pro fl">\
                                    <img class="pro-img fl" src="<%=obj.main_pic%>" width="72" height="72">\
                                    <div class="pro-text fl">\
                                        <p><%=obj.product_name%></p>\
                                        <p><%=obj.category_name%></p>\
                                    </div>\
                                    <ul class="proTD">\
                                        <li style="color: darkgray;">￥<%=obj.unit_price%></li>\
                                        <li>x<%=data.nums%></li>\
                                        <li class="buyers" style="color: darkgray;"></li>\
                                        <li class="ze">\
                                            <div>\
                                                <p>订单总额：￥<span><%=data.total_price%></span></p>\
                                            </div>\
                                        </li>\
                                        <li class="status">\
                                            <div>\
                                                <p class="state">待收货</p>\
                                                <p><a class="order_id" href="#">订单详情</a></p>\
                                            </div>\
                                        </li>\
                                        <li class="operation">\
                                            <div>\
                                                <button class="btn">确认收货</button>\
                                                <p><a class="order_id" href="#"></a></p>\
                                            </div>\
                                        </li>\
                                    </ul>\
                                </div>\
                            </div>\
                            <div class="clear"></div>\
                        </div>\
            ');

    //已经收货
    var order_finish=_.template(
            '\
                <div class=ListCell>\
                            <div class="orderInfo">\
                                <span class="dayTime fl"><%=data.order_time%></span>\
                                <span class="orderNum">订单号：<%=data.order_code%></span>\
                                <span class="qy">企业：<%=data.seller%></span>\
                                <span class="purchase_type fr">订单类型：<%=data.purchase_type%></span>\
                            </div>\
                            <div class="proCell">\
                                <div class="pro fl">\
                                    <img class="pro-img fl" src="<%=obj.main_pic%>" width="72" height="72">\
                                    <div class="pro-text fl">\
                                        <p><%=obj.product_name%></p>\
                                        <p><%=obj.category_name%></p>\
                                    </div>\
                                    <ul class="proTD">\
                                        <li style="color: darkgray;">￥<%=obj.unit_price%></li>\
                                        <li>x<%=data.nums%></li>\
                                        <li class="buyers" style="color: darkgray;"></li>\
                                        <li class="ze">\
                                            <div>\
                                                <p>订单总额：￥<span><%=data.total_price%></span></p>\
                                            </div>\
                                        </li>\
                                        <li class="status">\
                                            <div>\
                                                <p class="state">已收货</p>\
                                                <p><a class="order_id" href="#">订单详情</a></p>\
                                            </div>\
                                        </li>\
                                        <li class="operation">\
                                            <div>\
                                                <button class="btn">申请开票</button>\
                                                <p><a class="order_id" href="#"></a></p>\
                                            </div>\
                                        </li>\
                                    </ul>\
                                </div>\
                            </div>\
                            <div class="clear"></div>\
                        </div>\
            ');

    var orderCell;

    /*请求数据*/
    // var stance = new MilkT(purchaseOrderList, 3);
    // stance.send({
    // 	buyers:store.get('usercode'),
    //     enterprise_id:store.get('enterprise_id')
    // })
    // .done(function(data){

    // 	result_DataArray=data.value;//保存请求结果;
    // 	console.log(result_DataArray);
    // 	for(var obj in data.value){
    // 		createHTML(data.value[obj]);
    // 	}
    // })
    // .fail(function(){
    // 	console.log('采购订单列表请求失败');
    // })
    
    //my_data=data.value;模拟用假数据

    var my_data=[{
            OrderProducts:[{
                product_name:'破布',
                category_name:'纱线',
                unit_price:'88'
            }],
            order_time:'2017-7-15 15:36:02',
            order_code:'1f8g1g92r81g85dfefjgpxn9g1fs',
            seller:'上海最大纺织公司',
            purchase_type:'1',
            main_pic:'images/purList/pro.jpg',
            ispay:'1',
            nums:'12',
            total_price:'125800'
        }]
        
        for(var obj in my_data){
            createHTML(my_data[obj]);
        }

    //生成订单列表
    function createHTML(data){
    	var obj;
        
    	for(var i in data.OrderProducts){
    		obj=data.OrderProducts[i];
    	}

        status.juage_ispay(data);
    	var htmlText=orderCell({'data':data,'obj':obj});
    	$('.orderList').append(htmlText);

    	//填写采购员
    	$('.buyers').text(store.get('username'));

        //替换订单类型
        var purchase_type=$('.purchase_type');
        for(var i=0;i<purchase_type.length;i++){
            purchase_type[i].innerHTML=status.juage_purchase_type(data);
        }

    }

    //根据状态判断应该使用的模板
    function juageStatus(data){
        if(status.juage_cancle_status(data)=='未取消'){
            if(status.juage_ispay(data)=='已付款'){
                status.juage_logistics_status(data);
            }
        }
    }

    //判断订单状态
    var status=new Object;

    status.juage_ispay=function(data){
        switch (data.ispay){
            case '1':orderCell=n_pay; return '待付款';
            break;
            case '2':return '已付款';
            break;
            case '3':return '部分付款';//先不做
            break;
            case '4':orderCell=order_cancel; return '撤单';
            break;
        }
    }

    status.juage_logistics_status=function(data){
        switch (data.logistics_status){
            case '1':orderCell=order_dfh; return '待发货';
            break;
            case '2':orderCell=order_qrsh; return '待收货';
            break;
            case '3':orderCell=order_finish; return '已收货';
            break;
        }
    }

    status.juage_cancle_status=function(data){
        switch(data.cancel_status){
            case '1':orderCell=order_cancel; return '已取消';
            break;
            case '2':return '未取消';
            break;
        }
    }

    status.juage_purchase_type=function(data){
        switch(data.purchase_type){
            case '1':return '订单类型：大货';
            break;
            case '2':return '订单类型：样品';
            break;
        }
    }

    status.juage_delete_status=function(data){
        switch(data.delete_status){
            case '1':return '已删除';
            break;
            case '2':return '未删除 ';
            break;
        }
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

    /*传递order_id*/

    $('.orderList').on('click','.order_id',function(){
        var i=$(this).parents('.ListCell').index();
        var orderDetail_obj={
            order_id:'',
            receiving_address_id:''
        }
        orderDetail_obj.order_id=result_DataArray[i-1].order_id;
        orderDetail_obj.receiving_address_id=result_DataArray[i-1].receiving_address_id;
        store.set('orderDetail_obj',orderDetail_obj);
        $(this).attr('href','order_detail.html');
    })

})