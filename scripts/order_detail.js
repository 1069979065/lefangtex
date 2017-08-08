$(function () {

      var template_check = $('#lefang_check').text();
      var templateFn_check=_.template(template_check);
      $('#lefangtex-check').append(templateFn_check);

      var x=store.get('orderDetail_obj');
      // alert(x.order_id);
      //  alert(x.receiving_address_id);
     /*订单详情*/
                                                                                                                                                                                                                

//             var stance = new MilkT(orderDetail, 3);
//                 stance.send({id:x.order_id}).done(function (data) {
//                             console.log(data);
//                           // data.order_time=todate(data.order_time,'-',true);
//                             var template_check = $('#lefang_check').text();
//                             var templateFn_check=_.template(template_check);
//                             var dom = templateFn_check(data);
//                                $('#lefangtex-check').append(dom);
//                                   if($('.oPay').text()==2){
//                                       $('.oPay').text('已支付');
//                                       $('.oPay').css('color','#e61');
//                                   }else if($('.oPay').text()==1){
//                                       $('.oPay').text('未支付');
//                                       $('.oPay').css('color','#169BD5');
//                                 }
//                            var compiled = _.template('<% _.forEach(productData, function(productData) { \
//                         %><ul class="clearfix goods_buy">\
//                         <li>\
//                              <a href="javascript:;">\
//                     <img src="<%= productData.main_pic%>" alt="">\
//                     </a>\
//                     </li>\
//                     <li>\
//                     <a href="javascript:;">\
//                        <%= productData.product_name%>\
//                     </a>\
//                     </li>\
//                     \
//                     \ <li>\
//                     <a href="javascript:;">\
//                        <%= data.seller%>\
//                     </a>\
//                     </li>\
//                     <li>\
//                     <em  id="pcount">￥<%= productData.count%></em><em>码</em>\
//                   </li>\
//                    <li>\
//                     <span id="pprice"><%= productData.refer_price%></span>\
//                     </li>\
//                     <li>\
//                     <span>499</span>\
//                     </li>\
//                     <li>\
//                     <span>￥0.00</span>\
//                   </li>\
//                   <li >\
//                   <a href="javascript:;">\
//                     联系商家\
//                     </a>\
//                     </li></ul>\
//                           <% \
//                     }); %>');
                    
//                      console.log(pp,cc);
//                   var tempProduct= compiled({'productData':data.OrderProducts,'data':data});
//                   $('.goods_info').append(tempProduct);

//                   function mul(a, b) {
//                     var mul=a*b;
//                     return mul;
//                   }
//                   mul(2,3);
//                 })

//      /*收货地址*/

//             var uBuyer=store.get('usercode');
//             var address=new MilkT(addressList,3);
//             address.send({usercode:uBuyer})
//                   .done(function (data) {
//                           // console.log(data);
//                           var resultData=data.addressEntity;
//                           for(var i=0;i<resultData.length;i++){
//                             // console.log(resultData[i].id);
//                             if(resultData[i].id==x.receiving_address_id){
//                                   var resultData=data.addressEntity;
//                                   var compiled = _.template('\
//                                         <div class="choice_addrr">\
//                                     <a href="javascript:;">\
//                                 <span> <%= resultData.username%> </span> <br/>\
//                                 <span> <%= resultData.address%></span><br/>\
//                                 <span>  <%= resultData.pbone_number%></span><br/>\
//                                 </a>\
//                                 <img src="images/icon/address_check_on.png" alt="">\
//                                 </div> ');
//                                     var templateOrder=compiled({ 'resultData': resultData[i]});
//                                   $('.receive_addrr').append(templateOrder);
//                             }
//                          }
//               });
})




/**转换日期格式*/
// function todate(inputstr, showsplit, showweek) {
//   //Wed Mar 22 13:38:37 CST 2017
//   inputstr = inputstr + ''; //末尾加一个空格
//   var date = '';
//   var month = new Array();
//   var week = new Array();
//   month['Jan'] = 1;
//   month['Feb'] = 2;
//   month['Mar'] = 3;
//   month['Apr'] = 4;
//   month['May'] = 5;
//   month['Jan'] = 6;
//   month['Jul'] = 7;
//   month['Aug'] = 8;
//   month['Sep'] = 9;
//   month['Oct'] = 10;
//   month['Nov'] = 11;
//   month['Dec'] = 12;
//   week['Mon'] = '一';
//   week['Tue'] = '二';
//   week['Wed'] = '三';
//   week['Thu'] = '四';
//   week['Fri'] = '五';
//   week['Sat'] = '六';
//   week['Sun'] = '日';
//   var str = inputstr.split(' ');
//   date = str[5];
//   date += showsplit + month[str[1]] + showsplit + str[2];
//   if(showweek){
//     date += '    ' + ' 星期' + week[str[0]];
//   }
//   return date;
// }
