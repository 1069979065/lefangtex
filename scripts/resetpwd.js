$(function(){
	var template_resetmphone = $('#lefang-resetmphone').text();
    var templateFn_resetmphone = _.template(template_resetmphone);
    $('#lefangtex-resetmphone').append(templateFn_resetmphone);


    var template_resetpwd = $('#lefang-resetpwd').text();
    var templateFn_resetpwd = _.template(template_resetpwd);
    $('#lefangtex-resetpwd').append(templateFn_resetpwd);



    var template_resetsuccess = $('#lefang-resetsuccess').text();
    var templateFn_resetsuccess = _.template(template_resetsuccess);
    $('#lefangtex-resetsuccess').append(templateFn_resetsuccess);

    var template_nav_main_foot = $('#lefang-nav-main-foot').text();
    var templateFn_nav_main_foot = _.template(template_nav_main_foot);
    $('#lefangtex-nav-main-foot').append(templateFn_nav_main_foot);

   


      //产生验证码
          var cod='';
          function createCo(){  
             cod = '';   
             var codeLeng = 4;//验证码的长度  
             // var checkCode = document.getElementById('code');   
             var rando = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',  
             'S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'); 
             for(var i = 0; i < codeLeng; i++) {
                var index = Math.floor(Math.random()*36);  
                cod += rando[index]; 
            }  
            $('#resetcode').html(cod);
         } 
         createCo();

         $('#resetcode').click(function(){
          createCo();
         })

         // var cheCode = document.getElementById('code');
         // cheCode.onclick=function(){
          
         // }
        //校验验证码
         function validat(){  
          var inputCo = document.getElementById('resetval').value.toUpperCase();      
          if(inputCo.length <= 0) { 
              $('#resetval').css('border','1px solid red');  
          }         
          else if(inputCo != cod ) { 
             $('#resetval').css('border','1px solid red');  
              createCo(); 
              document.getElementById('resetval').value = '';
             
          }else{
            $('#resetval').css('border','');
            return true;
          }                   
       }  

        $('#resetval').blur(function(){
          validat();
        })

        //发送短信验证码
          var timer='';
          $('.reset-get-code').one('click',function(){
            if(validat()){
           
              var dxyz=new MilkT(dxyzm,3);
              dxyz.send({telephone:$('#rephone').val(),username:'用户',type:2})
                    .done(function(data){
                      console.log(data);
                     
                    })
              
            }
          })

          $('.reset-get-code').one('click',function(){
            console.log(1)
            timer=setInterval(distime,1000);
          });
           function distime(){
            var xx=$('.reseconds').text();
            xx-=1;
            // console.log($(".seconds").text());
            $('.reseconds').html(xx);
            if(xx<=0){
              $('.reset-get-code').css('background','');
              clearInterval(timer);
              $('.reseconds').html(20);
              $('.reset-get-code').one('click',function(){
                  timer=setInterval(distime,1000);
                  var dxyz=new MilkT(dxyzm,3);
                  dxyz.send({telephone:$('#rephone').val(),username:'用户',type:2})
                      .done(function(data){
                          console.log(data);
                    })

              })
            }else{
              $('.reset-get-code').css('background','grey');
            }
           }


        
          //3秒自动跳转 
          var time='';
          function ds(){
            var tim=$('.djstz em').html();
            tim-=1;
            $('.djstz em').html(tim);
            if(tim==0){
              window.location.href ='login.html';
              clearInterval(time);
            }
          }     
          //找回密码
          $('.reg-btn').click(function(){
            if($('#renewse').val()==$('#renewsere').val()){
              var urepwd=new MilkT(repwd,1)
              urepwd.send({messagevalidate:$('#redxyzm').val(),phonenumber:$('#rephone').val(),freshpassword:md5($('#renewse').val())})
                .done(function(data){
                    console.log(data);
                    $('.reset-thir').show();
                    $('.reset-sec').hide();
                    time=setInterval(ds,1000);
                })
            }
    	
    })
    
	      
    //点击返回跳转页面
    $('.tzindex').click(function(){
      window.location.href ='login.html';
    })


      $('.next-type').click(function(){
        if(validat()&&$('#redxyzm').val()!=''){
          $('.reset-fir').hide();
          $('.reset-sec').show();
        }else{
          $('.reset-fir').show();
          $('.reset-sec').hide();
        }
      })   

    
      $('.reset-sec').hide();
      $('.reset-thir').hide();
      // $('.reset-fir .reset-next-type').click(function(){
      //   $('.reset-sec').show();
      //   $('.reset-fir').hide();
      // })
      // $('.reset-sec .reset-next-type').click(function(){
      //   $('.reset-thir').show();
      //   $('.reset-sec').hide();
        
                    
      // })
             
                    
})