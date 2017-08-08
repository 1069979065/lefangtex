$(function(){
     var template_qyrz = $('#lefang-qyrz').text();
    var templateFn_qyrz = _.template(template_qyrz);
    $('#lefangtex-qyrz').append(templateFn_qyrz);
    var template_qyrz_right = $('#lefang-qyrz-right').text();
    var templateFn_qyrz_right = _.template(template_qyrz_right);
    $('.qygl-right').append(templateFn_qyrz_right);
    $('.uploadFile-all').hide();
    $('.qyrz-yzfilebtn').click(function(){
        // $('.uploadFile-all').show();
        layerWin('r_uploadFile.html','上传营业执照');
    })
    $('.motaikO').click(function(){
        $('.uploadFile-all').hide();
        $('.yYimg').val(localStorage.getItem('img_url'));

        $('.yYimg').val($('.yYimg').val().substr(1,$('.yYimg').val().length-2));
    })

    $('.uploadFile-allT').hide();
    $('.qyrz-yzfilebtnT').click(function(){
        //$('.uploadFile-allT').show();
        layerWin('r_uploadFile.html','上传认证授权书');
    })
    $('.motaikT').click(function(){
        $('.uploadFile-allT').hide();
        $('.hTimg').val(localStorage.getItem('img_url'));
        $('.hTimg').val($('.hTimg').val().substr(1,$('.hTimg').val().length-2));
    })

    $('.qyrz-zch').hide();
	$('.qyrz-dzhy').click(function(){
		$('.qyrz-xydm').show();
		$('.qyrz-zch').hide();
	})
	$('.qyrz-yzcm').click(function(){
		$('.qyrz-xydm').hide();
		$('.qyrz-zch').show();
	})

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

    $('.qygl-left ul li.active img').attr('src','images/icon/企业信息管理_press.png');
    $('.qygl-left-con>ul>li').eq(1).mouseenter(function(){
        $(this).find('img').attr('src','images/icon/会员中心_press.png');
    }).mouseleave(function(){
        $(this).find('img').attr('src','images/icon/会员中心.png');
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
        //统一社会信用代码、注册号
        function credit_code(){
           if($('.eighteen_code').val().length!=18){
                $('.eighteen_code').css('border','1px solid red');
               $('.qyrz-xydm').parent().find('b').css('background','url("../scripts/skin/default/icon.png") -60px 0');
                $('.qyrz-xydm').parent().find('strong').html('请填写正确的18位信用代码');
                return false;
            }else{
                $('.eighteen_code').css('border','');
               $('.qyrz-xydm').parent().find('b').css('background','url("../scripts/skin/default/icon.png") -30px 0');
               // $('.qyrz-xydm').parent().find('strong').css('color','#11CD6D');
                $('.qyrz-xydm').parent().find('strong').html('');
            }
        }
        $('.eighteen_code').blur(function(){
            $('.fifteen_code').val('');
            credit_code();
        })

        function regist_number(){
           if($('.fifteen_code').val().length!=15){
                $('.fifteen_code').css('border','1px solid red');
               $('.qyrz-xydm').parent().find('b').css('background','url("../scripts/skin/default/icon.png") -60px 0');
                $('.qyrz-xydm').parent().find('strong').html('请填写15位的注册号');
                return false;
            }else{
                $('.fifteen_code').css('border','');
               $('.qyrz-xydm').parent().find('b').css('background','url("../scripts/skin/default/icon.png") -30px 0');
                $('.qyrz-xydm').parent().find('strong').html('');
            }
        }
        // $(".fifteen_code").blur(function(){
        //    regist_number();
        // })

        //企业名称
        function qyrz_CName(){
           if($('.qyrz_company_name').val()==''){
                $('.qyrz_company_name').css('border','1px solid red');
               $('.qyrz_company_name').parent().next('b').css('background','url("../scripts/skin/default/icon.png") -60px 0');
                $('.qyrz_company_name').parent().nextAll('strong').html('请输入企业名称');
                return false;
            }else{
                $('.qyrz_company_name').css('border','');
               $('.qyrz_company_name').parent().next('b').css('background','url("../scripts/skin/default/icon.png") -30px 0');
                $('.qyrz_company_name').parent().nextAll('strong').html('');
                return true;
            }
        }
    //    当企业名称失去焦点时调用
    $('.qyrz_company_name').blur(function () {
        qyrz_CName();
    })
        //法人代表
        function legal_repre(){
           if($('.legal_repre').val()==''){
                $('.legal_repre').css('border','1px solid red');
               $('.legal_repre').parent().next('b').css('background','url("../scripts/skin/default/icon.png") -60px 0');
                $('.legal_repre').parent().nextAll('strong').html('请输入法人代表');
                return false;
            }else{
                $('.legal_repre').css('border','');
               $('.legal_repre').parent().next('b').css('background','url("../scripts/skin/default/icon.png") -30px 0');
                $('.legal_repre').parent().nextAll('strong').html('');
                return true;
            }
        }
        //当法人代表失去焦点时
    $('.legal_repre').blur(function () {
        legal_repre();
    })

        //身份证检验
        var vcity={ 11:'北京',12:'天津',13:'河北',14:'山西',15:'内蒙古',
            21:'辽宁',22:'吉林',23:'黑龙江',31:'上海',32:'江苏',
            33:'浙江',34:'安徽',35:'福建',36:'江西',37:'山东',41:'河南',
            42:'湖北',43:'湖南',44:'广东',45:'广西',46:'海南',50:'重庆',
            51:'四川',52:'贵州',53:'云南',54:'西藏',61:'陕西',62:'甘肃',
            63:'青海',64:'宁夏',65:'新疆',71:'台湾',81:'香港',82:'澳门',91:'国外'
        };

        function checkCard(card){
            //是否为空
            if(!card||!isCardNo(card)||!checkProvince(card)||!checkBirthday(card)||!checkParity(card)){
                $('.legal_repre_idCard').parent().next('b').css('background','url("../scripts/skin/default/icon.png") -60px 0');
               $('.legal_repre_idCard').parent().nextAll('strong').html('请输入正确的身份证号码');
                // jQuery(".sf_list").focus();
                return false;
            }
            $('.legal_repre_idCard').parent().next('b').css('background','url("../scripts/skin/default/icon.png") -30px 0');
            $('.legal_repre_idCard').parent().nextAll('strong').html('');
            return true;
        };


        //检查号码是否符合规范，包括长度，类型
        function isCardNo(card){
            //身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
            var reg = /(^\d{15}$)|(^\d{17}(\d|X)$)/;
            if(reg.test(card) === false){
                return false;
            }
            $('.legal_repre_idCard').parent().next('b').css('background','url("../scripts/skin/default/icon.png") -30px 0');
            $('.legal_repre_idCard').parent().nextAll('strong').html('');
            return true;
        };

        //取身份证前两位,校验省份
        function checkProvince(card){
            var province = card.substr(0,2);
            if(vcity[province] == undefined) {
                return false;
            }
            $('.legal_repre_idCard').parent().next('b').css('background','url("../scripts/skin/default/icon.png") -30px 0');
            $('.legal_repre_idCard').parent().nextAll('strong').html('');
            return true;
        };

        //检查生日是否正确
        function checkBirthday(card){
            var len = card.length;
            //身份证15位时，次序为省（3位）市（3位）年（2位）月（2位）日（2位）校验位（3位），皆为数字
            if(len == '15'){
                var re_fifteen = /^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/;
                var arr_data = card.match(re_fifteen);
                var year = arr_data[2];
                var month = arr_data[3];
                var day = arr_data[4];
                var birthday = new Date('19'+year+'/'+month+'/'+day);
                return verifyBirthday('19'+year,month,day,birthday);
            }
            //身份证18位时，次序为省（3位）市（3位）年（4位）月（2位）日（2位）校验位（4位），校验位末尾可能为X
            if(len == '18'){
                var re_eighteen = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/;
                var arr_data = card.match(re_eighteen);
                var year = arr_data[2];
                var month = arr_data[3];
                var day = arr_data[4];
                var birthday = new Date(year+'/'+month+'/'+day);
                return verifyBirthday(year,month,day,birthday);
            }
            return false;
        };

        //校验日期
        function verifyBirthday(year,month,day,birthday){
            var now = new Date();
            var now_year = now.getFullYear();
            //年月日是否合理
            if(birthday.getFullYear() == year && (birthday.getMonth() + 1) == month && birthday.getDate() == day){
                //判断年份的范围（3岁到100岁之间)
                var time = now_year - year;
                if(time >= 3 && time <= 100)
                {
                    $('.legal_repre_idCard').parent().next('b').css('background','url("../scripts/skin/default/icon.png") -30px 0');
                    $('.legal_repre_idCard').parent().nextAll('strong').html('');
                    return true;
                }
                return false;
            }
            return false;
        };

        //校验位的检测
        function checkParity(card){
            //15位转18位
            card = changeFivteenToEighteen(card);
            var len = card.length;
            if(len == '18'){
                var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
                var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
                var cardTemp = 0, i, valnum;
                for(i = 0; i < 17; i ++){
                    cardTemp += card.substr(i, 1) * arrInt[i];
                }
                valnum = arrCh[cardTemp % 11];
                if(valnum == card.substr(17, 1)){
                    $('.legal_repre_idCard').parent().next('b').css('background','url("../scripts/skin/default/icon.png") -30px 0');
                    $('.legal_repre_idCard').parent().nextAll('strong').html('');
                    return true;
                }
                return false;
            }
            return false;
        };

        //15位转18位身份证号
        function changeFivteenToEighteen(card){
            if(card.length == '15'){
                var arrInt = new array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
                var arrCh = new array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
                var cardTemp = 0, i;
                card = card.substr(0, 6) + '19' + card.substr(6, card.length - 6);
                for(i = 0; i < 17; i ++){
                    cardTemp += card.substr(i, 1) * arrInt[i];
                }
                card += arrCh[cardTemp % 11];
                $('.legal_repre_idCard').parent().next('b').css('background','url("../scripts/skin/default/icon.png") -30px 0');
                $('.legal_repre_idCard').parent().next('strong').html('');
                return card;
            }
            $('.legal_repre_idCard').parent().next('b').css('background','url("../scripts/skin/default/icon.png") -30px 0');
            $('.legal_repre_idCard').parent().next('strong').html('');
            return card;
        };
        $('.legal_repre_idCard').blur(function(){
            if (!checkCard($(this).val())) {
                $(this).parent().next('b').css('background','url("../scripts/skin/default/icon.png") -60px 0');
                $(this).parent().next('strong').html('请输入正确的身份证号码');
                return false;
            }
        })



        //判断省市
        function CHpc(){
            // $('.qyrz_select option:checked').val()=='请选择'
          if($('#qyrz_province option:checked').val()=='请选择省份'){
            $('.qyrz-city strong').html('请选择省份');
            $('#qyrz_province').css('border','1px solid red');
              $('.qyrz-city b').css('background','url("../scripts/skin/default/icon.png") -60px 0');
            return false;
          }else{
              $('#qyrz_province').css('border','');
              if($('#qyrz_city option:selected').val()=='请选择城市'){
                  $('.qyrz-city strong').html('请选择城市');
                  $('#qyrz_city').css('border','1px solid red');
                  $('.qyrz-city b').css('background','url("../scripts/skin/default/icon.png") -60px 0');
                  return false;
              }else{
                  $('.qyrz-city strong').html('');
                  $('#qyrz_city').css('border','');
                  $('.qyrz-city b').css('background','url("../scripts/skin/default/icon.png") -30px 0');
                  return true;
              }
          }

        }
        $('.qyrz-city select').blur(function(){
            CHpc();
        })

        //详细地址
        function qyrz_add(){
           if($('.qyrz-add').val()==''){
                $('.qyrz-add').css('border','1px solid red');
               $('.qyrz-add').parent().next('b').css('background','url("../scripts/skin/default/icon.png") -60px 0');
                $('.qyrz-add').parent().nextAll('strong').html('请输入详细地址');
                return false;
            }else{
                $('.qyrz-add').css('border','');
               $('.qyrz-add').parent().next('b').css('background','url("../scripts/skin/default/icon.png") -30px 0');
                $('.qyrz-add').parent().nextAll('strong').html('');
                return true;
            }
        }
        $('.qyrz-add').blur(function () {
            qyrz_add();
        })
        //注册电话

        // function checkregist(){
        //     var testLinkTel =$('.regist_number').val();
        //     var regLinkTel = /^(0|86|17951)?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/;
        //     var resultLinkTel = regLinkTel.test(testLinkTel);
        //     if (!resultLinkTel || resultLinkTel == '') {
        //     $('.regist_number').css('border','1px solid red');
        //         // $('.qyrz_smile').css('background','url("../scripts/skin/default/icon.png") -60px 0')
        //     $('.regist_number').next('strong').html('请输入正确的手机号');
        //     } else {
        //     $('.regist_number').css('border','');
        //         // $('.qyrz_smile').css('background','url("../scripts/skin/default/icon.png") -30px 0')
        //     $('.regist_number').next('strong').html('');
        //     return true;
        //     }
        // }

        //开户银行
        function oBankT(){
           if($('.oBank').val()==''){
                $('.oBank').css('border','1px solid red');
               $('.oBank').parent().next('b').css('background','url("../scripts/skin/default/icon.png") -60px 0');
                $('.oBank').parent().nextAll('strong').html('请输入开户银行');
                return false;
            }else{
                $('.oBank').css('border','');
               $('.oBank').parent().next('b').css('background','url("../scripts/skin/default/icon.png") -30px 0');
                $('.oBank').parent().nextAll('strong').html('');
                return true;
            }
        }

        $('.oBank').blur(function () {
            oBankT();
        })
        //银行账户
        function CheckBankNo() {
            var bankCard = $('.bankAccount');
            var bankno = bankCard.val();
            if (bankno == '') {
                $('.bankAccount').css('border','1px solid red');
                $('.bankAccount').parent().next('b').css('background','url("../scripts/skin/default/icon.png") -60px 0')
                $('.bankAccount').parent().nextAll('strong').html('请填写银行卡号');
                // bankCard.focus();
                return false;
            }

            if (16 > bankno.length || 19 < bankno.length) {
                $('.bankAccount').css('border','1px solid red');
                $('.bankAccount').parent().next('b').css('background','url("../scripts/skin/default/icon.png") -60px 0');
                $('.bankAccount').parent().nextAll('strong').html('银行卡号长度应该在16位到19位之间');
                // bankCard.focus();
                return false;
            }
            var num = /^\d*$/; //全数字
            if(!num.exec(bankno)) {
                $('.bankAccount').css('border','1px solid red');
                $('.bankAccount').parent().next('b').css('background','url("../scripts/skin/default/icon.png") -60px 0');
                $('.bankAccount').parent().nextAll('strong').html('银行卡号必须全为数字');
                // bankCard.focus();
                return false;
            }

            //开头6位
            var strBin = '10,18,30,35,37,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,58,60,62,65,68,69,84,87,88,94,95,98,99';

            if(strBin.indexOf(bankno.substring(0, 2)) == -1) {
                $('.bankAccount').css('border','1px solid red');
                $('.bankAccount').parent().next('b').css('background','url("../scripts/skin/default/icon.png") -60px 0');
                $('.bankAccount').parent().nextAll('strong').html('银行卡号开头6位不符合规范');
                // bankCard.focus();
                return false;
            }
            $('.bankAccount').css('border','');
            $('.bankAccount').parent().next('b').css('background','url("../scripts/skin/default/icon.png") -30px 0');
            $('.bankAccount').parent().nextAll('strong').html('');
            return true;
        }
        $('.bankAccount').blur(function(){
            CheckBankNo();
        })

    //注册资本
    function registerC(){
        var reg = /^[0-9]+$/;
        var str = $('.registeredCapital').val();
        if($('.registeredCapital').val()==''){
            $('.registeredCapital').css('border','1px solid red');
            $('.registeredCapital').parent().next('b').css('background','url("../scripts/skin/default/icon.png") -60px 0');
            $('.registeredCapital').parent().nextAll('strong').html('注册资本不能为空');
            return false;
        }else if(!reg.test(str)){
            $('.registeredCapital').css('border','1px solid red');
            $('.registeredCapital').parent().next('b').css('background','url("../scripts/skin/default/icon.png") -60px 0');
            $('.registeredCapital').parent().nextAll('strong').html('注册资本只能输入数字');
            return false;
        }
        else{
            $('.registeredCapital').css('border','');
            $('.registeredCapital').parent().next('b').css('background','url("../scripts/skin/default/icon.png") -30px 0');
            $('.registeredCapital').parent().nextAll('strong').html('');
            return true;
        }
    }
    $('.registeredCapital').blur(function () {
        registerC();
    })
   //成立日期
    function get_Date(){
        if($('.date').val()==''){
            $('.date').css('border','1px solid red');
            $('.date').parent().next('b').css('background','url("../scripts/skin/default/icon.png") -60px 0');
            $('.date').parent().nextAll('strong').html('成立日期不能为空');
            return false;
        }else{
            $('.date').css('border','');
            $('.date').parent().next('b').css('background','url("../scripts/skin/default/icon.png") -30px 0');
            $('.date').parent().nextAll('strong').html('');
            return true;
        }
    }
    $('.date').blur(function () {
        get_Date();
    })

        //企业类型
    function enterprise() {
        if($('.qyrz_select option:checked').val()=='请选择'){
            $('.qyrz_select').css('border','1px solid red');
            $('.qyrz_select').parent().next('b').css('background','url("../scripts/skin/default/icon.png") -60px 0');
            $('.qyrz_select').parent().nextAll('strong').html('请选择企业类型');
            return false;
        }else{
            $('.qyrz_select').css('border','');
            $('.qyrz_select').parent().next('b').css('background','url("../scripts/skin/default/icon.png") -30px 0');
            $('.qyrz_select').parent().nextAll('strong').html('');
            return true;
        }
    }
    $('.qyrz_select').blur(function () {
        enterprise();
    })
    //产品范围
    function product() {
        if($("input:checkbox[name='range']:checked").length > 0){
            $('.product_range').next('b').css('background','url("../scripts/skin/default/icon.png") -30px 0');
            $('.product_range').nextAll('strong').html('');
            return true;
        }else{
            $('.product_range').next('b').css('background','url("../scripts/skin/default/icon.png") -60px 0');
            $('.product_range').nextAll('strong').html('至少选择一种');
            return false;
        }
    }
    $('.product_range input').blur(function () {
        product();
    })
    //商业模式
    function commercial() {
        if($("input:checkbox[name='model']:checked").length > 0){
            $('.commercial_model').next('b').css('background','url("../scripts/skin/default/icon.png") -30px 0');
            $('.commercial_model').nextAll('strong').html('');
            return true;
        }else{
            $('.commercial_model').next('b').css('background','url("../scripts/skin/default/icon.png") -60px 0');
            $('.commercial_model').nextAll('strong').html('至少选择一种');
            return false;
        }
    }
    $('.commercial_model input').blur(function () {
        commercial();
    })





    //获取选中的产品范围的值
    function jqproduct(){ //jquery获取复选框值
        var chk_product =[];
        $('input[name="range"]:checked').each(function(){
            chk_product.push($(this).val());
        });
        // console.log(chk_value);
        return chk_product.toString();
        // console.log(chk_product.toString());
    }


    function jqmodel() {
        var chk_model =[];
        $('input[name="model"]:checked').each(function(){
            chk_model.push($(this).val());
        });
        // console.log(chk_value);
        return chk_model.toString();
        // console.log(chk_model.toString());
    }






        var certifi_type='';

        var certi='';
        var certit='';
        certi=$('.qyrz-dzhy').eq(0).next('span.certifi_type').text();
        $('.qyrz-dzhy').click(function(){
            certi=$(this).next('span.certifi_type').text();

           if($(this).index==0){
                $('.fifteen_code').val('');
                $('.qyrz-xydm').parent().find('strong').html('');
                $('.eighteen_code').blur(function(){
                    certi = $(this).val();
                    console.log(certi);
                    credit_code();
                    // console.log($(this).val().length);
                    // if($(this).val().length!=18){
                    //     $('.qyrz-xydm').parent().find('strong').html('请填写18位的信用代码');
                    // }
                })
           }else{
               $('.eighteen_code').val('');
               $('.qyrz-xydm').parent().find('strong').html('');
                $('.fifteen_code').blur(function(){//当元素失去焦点时
                    certit = $(this).val();
                    console.log(certit);
                    regist_number();
                })
           }
        });
        // console.log(certifi_type);
        console.log(certi);



        var cName='';
        $('.qyrz_company_name').blur(function(){
            cName=$(this).val();
        });
        var legal_pre = '';
        $('.legal_repre').blur(function(){
            legal_pre=$(this).val();
        });
        var legal_pre_idCard = '';
        $('.legal_repre_idCard').blur(function(){
            legal_pre_idCard=$(this).val();
        });


        //省份

        var pCity='';
        var cCity='';
        var cCit='';
        var cPro = new MilkT(city_province,1);
            cPro.send({})
                .done(function(data){
                    // console.log(data);
                    var compiled = _.template('<% _.forEach(pCity, function(pdata) { \
                                    %>\
                                    <option value=<%= pdata.number %> title=<%= pdata.name%>><%=pdata.name%></option>\
                                    <% \
                                    }); %>');
                    var qyrz_pro = compiled({'pCity':data.city});
                    $('#qyrz_province').append(qyrz_pro);
                    $('#qyrz_province').change(function(){
                        pCity=$(this).val();
                        cCit=$(this).find('option:selected').attr('title');
                        // console.log($(this).val());

                       // console.log($(this).find('option:selected').attr('title')) ;

                        // console.log($(this).attr('title'));
                    //城市

                    var cCro = new MilkT(city_city,1)
                        $('#qyrz_city option:not(:first-of-type)').remove();
                        cCro.send({pid:pCity})
                            .done(function(data){
                                // console.log(data);
                                var compiled = _.template('<% _.forEach(cCity, function(pdata) { \
                                                %>\
                                                <option value=<%=pdata.number%> title=<%=pdata.name%>><%=pdata.name%></option>\
                                                <% \
                                                }); %>');
                                var qyrz_pro = compiled({'cCity':data.city});
                                $('#qyrz_city').append(qyrz_pro);
                                $('#qyrz_city').change(function(){
                                    cCity=$(this).val();

                                })
                        })
                    })


            });

        var regist_N = '';
        $('.regist_number').blur(function(){
            regist_N=$(this).val();
        })

        var oBank = '';
        $('.oBank').blur(function(){
            oBank = $(this).val();
        })

        var bank_account='';
        $('.bankAccount').blur(function(){
            bank_account=$(this).val();
        })



        $('.sub_audit').click(function(){
           if(certi=='多证合一营业执照'){
                credit_code();
           }else{
               regist_number();
           }
        //    alert(qyrz_CName()); //undefined
        //    alert(legal_repre()); //undefined
        //    alert(checkCard($('.legal_repre_idCard').val()));
        //    alert(CHpc()); //undefined
        //    alert(qyrz_add()); //undefined
        //    alert(oBankT()); //undefined
        //    alert(checkregist());
        //    alert(CheckBankNo());
            if(qyrz_CName()&&legal_repre()&&checkCard($('.legal_repre_idCard').val())&&CHpc()&&qyrz_add()&&oBankT()&&CheckBankNo()&&registerC()&&get_Date()&&enterprise()&&product()&&commercial()){
                var uCode = store.get('usercode');
                // console.log(uCode);
                // console.log(certifi_type);
                // console.log($('.yYimg').val());
                // console.log($('.eighteen_code').val());
                // console.log(certit);
                // console.log(cName);
                // console.log(legal_pre);
                // console.log(legal_pre_idCard);
                // console.log(cCit);
                // console.log(cCity);
                // console.log($('.qyrz-add').val());
                // console.log(regist_N);
                // console.log(oBank);
                // console.log(bank_account);
                // console.log($('.hTimg').val());
                // console.log($('.registeredCapital').val());
                // console.log($('.date').val());
                // console.log($('.qyrz_select').val());
                // console.log(jqproduct());
                // console.log(jqmodel());
                var enQu = new MilkT(enterpriseQu,3);
                    enQu.send({
                            usercode:uCode,
                            document_type:certifi_type,
                            licence_url:$('.yYimg').val(),
                            unified_code: $('.eighteen_code').val(),
                            register_code:$('.fifteen_code').val(),
                            company_name:cName,
                            legalperson:legal_pre,
                            legalperson_code:legal_pre_idCard,
                            province:cCit,
                            city:cCity,
                            address:$('.qyrz-add').val(),
                            phone_number:regist_N,
                            open_bank:oBank,
                            bank_account:bank_account,
                            coabook:$('.hTimg').val(),
                            enterprise_nature:$('.qyrz_select').val(),
                            registered_capital:$('.registeredCapital').val(),
                            founding_time:$('.date').val(),
                            mgmt_model:jqmodel(),
                            main_business:jqproduct()
                        })
                        .done(function(data){
                            console.log(data);
                            console.log(data.value);
                            if(data.value==1){
                                // alert('提交成功');
                                window.location.href='qygl.html?id=1';
                            }
                        })
            }
            // credit_code();
            // regist_number();
            // qyrz_CName();
            // legal_repre();
            // legal_repre_idCard();
            // CHpc();
            // qyrz_add();
            // checkregist();
            // oBankT();
            // CheckBankNo();

        })


    //下载认证授权书模板(在新窗口中打开)
    $('#down').on('click',function () {
        window.open(
            'qyrz_authorization.html',
            'newwindow',
            'height=100,width=600,height=450,top=250,left=600,toolbar=no,menubar=no,scrollbars=no,resizable=yes,location=no, status=no'
        )
    });


    //取消按钮的点击事件
    $('.cal_audit').on('click',function () {
        window.location.href='qygl.html';
        // parent.window.location.reload();
        // var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
        // parent.layer.close(index);
    })
});
//弹出上传照片的弹框
function layerWin(url,title){

    // layer.open({
    //     type: 2,
    //     title: false,
    //     closeBtn: false,
    //     shade: [0],
    //     area: ['340px', '215px'],
    //     offset:'rb', //右下角弹出
    //     time: 2000, //2秒后自动关闭
    //     shift: 2,
    //     content: [url, 'no'], //iframe的url，no代表不显示滚动条
    //     end: function(){ //此处用于演示
    //         layer.open({
    //             type: 2,
    //             title: title,
    //             shadeClose: true,
    //             shade: false,
    //             maxmin: true, //开启最大化最小化按钮
    //             area: ['1150px', '650px'],
    //             content: url
    //         });
    //     }
    // });
    layer.open({
        type: 2,
        title: title,
        shadeClose: true,
        shade: false,
        maxmin: true, //开启最大化最小化按钮
        area: ['600px', '500px'],
        content: url
    });

}





