$(function () {
  var template_top = $('#lefang_top').text();
  var templateFn_top = _.template(template_top);
  $('#lefangtex-top').append(templateFn_top);

  var template_nav = $('#lefang_nav').text();
  var templateFn_nav = _.template(template_nav);
  $('#lefangtex-nav').append(templateFn_nav);

  var template_pay = $('#lefang_pay').text();
  var templateFn_pay = _.template(template_pay);
  $('#lefangtex-pay').append(templateFn_pay);

  var template_foot = $('#lefang_foot').text();
  var templateFn_foot = _.template(template_foot);
  $('#lefangtex-foot').append(templateFn_foot);






  //接口调用
  console.log(store.get('usercode'));
  var userBuyer=store.get('usercode');
  var WaitPay=new MilkT(wait_pay,3);
  WaitPay.send({buyers:userBuyer })
  .done(function (data) {
    console.log(data);
    // var template_pay = $('#lefang_pay').text();
    // var templateFn_pay = _.template(template_pay);
    // var pay=templateFn(data);
    // $('#lefangtex-pay').append(pay);
    var waitData=data.pay;
    var compiled=_.template('<% _.forEach(waitData,function(wdata){ %>\
    <ul class="pay_detail">\
          <li><%= wdata.order.time %></li>\
          <li>订单号 :<%= wdata.order.code %></li>\
          <li>数量</li>\
          <li>采购</li>\
          <li>应付总额</li>\
          <li>应付余额</li>\
          <li>操作</li>\
  </ul>\
  <ul class="goods_pay">\
        <li>\
              <a href="javascript:;">\
                <img src="images/pic/GREY (2).png" alt="">\
               </a>\
        </li>\
        <li>\
              <a href="javascript:;">\
                  斜格子色织染色西装面料\
              </a>\
        </li>\
        <li>￥46.0/码</li>\
        <li><%= wdata.nums%></li>\
        <li>￥<%= wdata.total_price%></li>\
        <li>￥0</li>\
        <li class="pay_choice">\
            <a href="javascript:;">\
                  支付\
            </a>\
            <a href="javascript:;">\
               查看合同\
            </a>\
            <a href="order_detail.html">\
               查看详情\
            </a>\
            <span>5</span>\
        </li>\
  </ul>\
  <% }); %>');
    var templateData=compiled({'waitData':waitData});
    $('#lefangtex-pay').append(templateData);
  })

})

