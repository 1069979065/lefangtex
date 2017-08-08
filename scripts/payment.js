$(function () {
  var template_top = $('#lefang_top').text();
  var templateFn_top = _.template(template_top);
  $('#lefangtex-top').append(templateFn_top);

  var template_nav = $('#lefang_nav').text();
  var templateFn_nav = _.template(template_nav);
  $('#lefangtex-nav').append(templateFn_nav);

  var template_payment = $('#lefang_payment').text();
  var templateFn_payment = _.template(template_payment);
  $('#lefangtex-payment').append(templateFn_payment);

  var template_foot = $('#lefang_foot').text();
  var templateFn_foot = _.template(template_foot);
  $('#lefangtex-foot').append(templateFn_foot);


  //接口调用
  var uBuyer=store.get('usercode');
  console.log(uBuyer);
  var Payment=new MilkT(payment,3);
  Payment.send({buyers:uBuyer})
    .done(function (data) {
      console.log(data);
      var PayData=data.pay;
      console.log(PayData);
      var compiled = _.template('<% _.forEach(PayData, function(pData) { %>\
      <ul class="supplier">\
      <li>\
        <a href="javascript:;">\
              供应商\
        </a>\
      </li>\
      <li>\
        <a href="javascript:;">\
              江苏中添纺织科技有限公司\
        </a>\
      </li>\
      <li>\
              共计：￥<em>￥<%= pData.pay_money%>元</em>\
      </li>\
      </ul>\
      <ul class="supplier_detail">\
      <li>\
        <%= pData.order_id%>\
      </li>\
      <li>\
             <%= pData.name%>\
      </li>\
      <li>\
             <%= pData.usercode%>\
      </li>\
      <li>\
             <%= pData.buyers%>\
      </li>\
      <li>\
             <%= pData.pay_money%>\
      </li>\
      <li>\
             <a href="javascript:;">\
              查看合同\
              </a>\
              <a href="javascript:;">\
                    查看详情\
              </a>\
      </li>\
      </ul>\
  <% }); %>');

      var templatePay=compiled({'PayData':PayData});
      $('#lefangtex-payment').append(templatePay);

    })

    // var order=store.get('order_code');
    // console.log(order);
      //订单号的查询----------------修改中
     $('#SerachBtn').click(function () {
        // var order=store.get('order_code');
        // console.log(order);
        var cont=$('#serach').val();
        console.log(cont);
        var Payment=new MilkT(payment,3);
        Payment.send({
            buyers:uBuyer,
            // order_id:'139'
        })
        .done(function (data) {
            console.log(data);
            var PayData=data.pay;
            for(var i=0;i<PayData.length;i++){
              if(PayData[i].order_id==cont){
                var PayData=data.pay;
                var compiled = _.template('\
      <ul class="supplier">\
      <li>\
        <a href="javascript:;">\
              供应商\
        </a>\
      </li>\
      <li>\
        <a href="javascript:;">\
              江苏中添纺织科技有限公司\
        </a>\
      </li>\
      <li>\
              共计：￥<em>￥<%= pData.pay_money%>元</em>\
      </li>\
      </ul>\
      <ul class="supplier_detail">\
      <li>\
        <%= pData.order_id%>\
      </li>\
      <li>\
             <%= pData.name%>\
      </li>\
      <li>\
             <%= pData.usercode%>\
      </li>\
      <li>\
             <%= pData.buyers%>\
      </li>\
      <li>\
             <%= pData.pay_money%>\
      </li>\
      <li>\
             <a href="javascript:;">\
              查看合同\
              </a>\
              <a href="javascript:;">\
                    查看详情\
              </a>\
      </li>\
      </ul>');

                var templatePay=compiled({'PayData':PayData[i]});
                $('#lefangtex-payment').append(templatePay);
              }
            }


        })
    })

      //查询按钮
      $(function () {
        var uBuyer=store.get('usercode');
        console.log(uBuyer);
        $('#Cbtn').click(function () {
          var dateStart=Number($('#SDate').val());
          var dateEnd=Number($('#EDate').val());
          var Date=new MilkT(payment,3);
          Date.send({buyers:uBuyer})
            .done(function (data) {
              console.log(data);
              var AllDate=data.PayEntity;
              for(var i=0;i<AllDate.length;i++){
                if(dateStart<=AllDate[i].pay_time&&dateEnd>=AllDate[i].pay_time){
                  var PayData=data.PayWaterEntity;
                  var compiled = _.template('\
          <ul class="supplier">\
          <li>\
            <a href="javascript:;">\
                  供应商\
            </a>\
          </li>\
          <li>\
            <a href="javascript:;">\
                  江苏中添纺织科技有限公司\
            </a>\
          </li>\
          <li>\
                  共计：￥<em>￥<%= pData.pay_money%>元</em>\
          </li>\
          </ul>\
          <ul class="supplier_detail">\
          <li>\
            <%= pData.order_id%>\
          </li>\
          <li>\
                 <%= pData.name%>\
          </li>\
          <li>\
                 <%= pData.usercode%>\
          </li>\
          <li>\
                 <%= pData.buyers%>\
          </li>\
          <li>\
                 <%= pData.pay_money%>\
          </li>\
          <li>\
                 <a href="javascript:;">\
                  查看合同\
                  </a>\
                  <a href="javascript:;">\
                        查看详情\
                  </a>\
          </li>\
          </ul>');


                  var templatePay=compiled({'PayData':PayData});
                  $('#lefangtex-payment').append(templatePay);
                }else {
                  alert('抱歉，您没有所对应的订单')
                }
              }

            })
        })
      })

      //查询一个月时间
      $(function () {
        var uBuyer=store.get('usercode');
        $('#OMonth').click(function () {
          // var OTime=Number($('#OMonth').val());
          var odate=new MilkT(payment,3);
           odate.send({buyers:uBuyer})
            .done(function (data) {
              console.log(data);
              var AllDate=data.PayEntity;
              var OTime=Number(AllDate.pay_time);
              if((OTime-30)!==null){
                // var PayData=data.PayWaterEntity;
                var compiled = _.template('<% _.forEach(PayData, function(pData) { %>\
          <ul class="supplier">\
          <li>\
            <a href="javascript:;">\
                  供应商\
            </a>\
          </li>\
          <li>\
            <a href="javascript:;">\
                  江苏中添纺织科技有限公司\
            </a>\
          </li>\
          <li>\
                  共计：￥<em>￥<%= pData.pay_money%>元</em>\
          </li>\
          </ul>\
          <ul class="supplier_detail">\
          <li>\
            <%= pData.order_id%>\
          </li>\
          <li>\
                 <%= pData.name%>\
          </li>\
          <li>\
                 <%= pData.usercode%>\
          </li>\
          <li>\
                 <%= pData.buyers%>\
          </li>\
          <li>\
                 <%= pData.pay_money%>\
          </li>\
          <li>\
                 <a href="javascript:;">\
                  查看合同\
                  </a>\
                  <a href="javascript:;">\
                        查看详情\
                  </a>\
          </li>\
          </ul>\
      <% }); %>');

                var templatePay=compiled({'PayData':PayData});
                $('#lefangtex-payment').append(templatePay);
              }else {
                alert('您最近一个月没有订单！')
              }
            })
        })
      })

      //查询三个月的订单
      $(function () {
        var uBuyer=store.get('usercode');
        $('#TMonth').click(function () {
          // var OTime=Number($('#OMonth').val());
          var odate=new MilkT(payment,3);
          odate.send({buyers:uBuyer})
            .done(function (data) {
              console.log(data);
              var AllDate=data.PayEntity;
              var TTime=Number(AllDate.pay_time);
              if((TTime-90)!==null){
                // var PayData=data.PayWaterEntity;
                var compiled = _.template('<% _.forEach(PayData, function(pData) { %>\
          <ul class="supplier">\
          <li>\
            <a href="javascript:;">\
                  供应商\
            </a>\
          </li>\
          <li>\
            <a href="javascript:;">\
                  江苏中添纺织科技有限公司\
            </a>\
          </li>\
          <li>\
                  共计：￥<em>￥<%= pData.pay_money%>元</em>\
          </li>\
          </ul>\
          <ul class="supplier_detail">\
          <li>\
            <%= pData.order_id%>\
          </li>\
          <li>\
                 <%= pData.name%>\
          </li>\
          <li>\
                 <%= pData.usercode%>\
          </li>\
          <li>\
                 <%= pData.buyers%>\
          </li>\
          <li>\
                 <%= pData.pay_money%>\
          </li>\
          <li>\
                 <a href="javascript:;">\
                  查看合同\
                  </a>\
                  <a href="javascript:;">\
                        查看详情\
                  </a>\
          </li>\
          </ul>\
      <% }); %>');

                var templatePay=compiled({'PayData':PayData});
                $('#lefangtex-payment').append(templatePay);
              }else {
                alert('您最近三个月没有订单！')
              }
            })
        })
      })

      //查询全部
      $(function () {
        var uBuyer=store.get('usercode');
          $('#AllMonth').click(function () {
            var uBuyer=store.get('usercode');
            var Payment=new MilkT(payment,3);
            Payment.send({buyers:uBuyer})
              .done(function (data) {
                console.log(data);
                var PayData=data.PayWaterEntity;
                var compiled = _.template('<% _.forEach(PayData, function(pData) { %>\
          <ul class="supplier">\
          <li>\
            <a href="javascript:;">\
                  供应商\
            </a>\
          </li>\
          <li>\
            <a href="javascript:;">\
                  江苏中添纺织科技有限公司\
            </a>\
          </li>\
          <li>\
                  共计：￥<em>￥<%= pData.pay_money%>元</em>\
          </li>\
          </ul>\
          <ul class="supplier_detail">\
          <li>\
            <%= pData.order_id%>\
          </li>\
          <li>\
                 <%= pData.name%>\
          </li>\
          <li>\
                 <%= pData.usercode%>\
          </li>\
          <li>\
                 <%= pData.buyers%>\
          </li>\
          <li>\
                 <%= pData.pay_money%>\
          </li>\
          <li>\
                 <a href="javascript:;">\
                  查看合同\
                  </a>\
                  <a href="javascript:;">\
                        查看详情\
                  </a>\
          </li>\
          </ul>\
      <% }); %>');

                var templatePay=compiled({'PayData':PayData});
                $('#lefangtex-payment').append(templatePay);

              })

          })


      })

})
