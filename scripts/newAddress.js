$(function(){
	var template_newaddress = $('#address_nr').text();
    var templateFn_newaddress = _.template(template_newaddress);
    $('#newadd_conent').append(templateFn_newaddress);

    var uBuyer=store.get('usercode');
    // console.log(uBuyer);
    var address=new MilkT(addressList,3);
    address.send({usercode:uBuyer})
      .done(function (data) {
      console.log(data);
      var resultData=data.addressEntity;
      console.log(resultData);
      //alert(JSON.stringify(resultData));
      var compiled = _.template('<% _.forEach(resultData, function(data) { %>\
                                    <tr>\
                                        <td style="display:none" class="id"><%=data.id%></td>\
                                        <td><%=data.username%></td>\
                                        <td><%=data.province+data.city%></td>\
                                        <td><%=data.address%></td>\
                                        <td><%=data.postcodes%></td>\
                                        <td><%=data.phone_number%></td>\
                                        <td><a href="#"  class="Delete" style="color:#0000ff">删除</a><a> | </a><a style="color:#0000ff" href="#" class="upDate">编辑</a></td>\
                                        <td>\
                                       <a href="#" class="setDefault" id="set" onclick="setDefault(this,<%=data.id%>);"><%=data.status%></a>\
                                        </td>\
                                    </tr>\
                                    <% }); %>');

      var templateTest=compiled({ 'resultData': resultData});
      $('tr').last().parent().append(templateTest);



    //删除收货地址
      $('.Delete').on('click',function(){
        var stance = new MilkT(addressDel, 3);
        var id=$(this).parent().prevAll().last().text();
        var tr=$(this).parent().parent();
        console.log(tr);
        stance.send({
          id:id
        })
          .done(function(data){
            console.log(data);
            if (data.value==1){
              // alert('确定删除吗')
              tr.remove();

            }

          })
          .fail(function(){
            alert('删除失败');
          })
      })


        //默认地址的内容设置
        $('.setDefault').each(function(){
          if(eval($(this).text())==2){
            $(this).text('设为默认地址');
          }else  if(eval($(this).text())==1){
            $(this).text('默认地址');
            $(this).css('color','red');
            $(this).removeAttr('onclick');//禁止其点击事件
          }
        });


  //更新数据
    $('.upDate').on('click',function(){
      var x=$(this).parent().parent().index()-2;
      store.set('data',resultData[x]);
      layer.open({
        title:'',
        area:['600px','500px'],
        type:2,
        content:'http://localhost:9000/address_update.html'
      })
    });

})



});
/**
 * 设置默认地址
 * @param obj
 * @param id
 */
function setDefault(obj,id){
  var stance = new MilkT(addressSet, 3);
  stance.send({
    usercode:store.get('usercode'),
    status:'1',
    id:id
  })
    .done(function(data){
      console.log(data);
      if(data.value==1){
        console.log(data.value)
        alert('设置默认地址成功');
        window.location.reload();
      }
    }).fail(function () {
    alert('设置失败')
  })
}
