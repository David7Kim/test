// 2019.07.24
// written by tykim

$(document).ready(function(){
    var calculator =$(".calculator").draggable();
    var btn_cal=$(".btn_cal").on("click",function(){
        
      
        
        if (calculator.css("display")== "none"){

            calculator.css("display","block");
        }
        else{
            calculator.css("display","none");
        }
    
    });
    
     var btn_close = $(".btn_close").on("click",function(){
        
       
        
        if (calculator.css("display")== "none"){

            calculator.css("display","block");
        }
        else{
            calculator.css("display","none");
        }

        // window.onkeypress=function(event){

        //     if(event.keyCode==27){
        //         calculator.css("display","none");
        //     }
            
        //}
    
    });


 
    var clear = $("#AC").on("click", function(){

        var monitor = $(".monitor").val("");
    });



});

//계산기 부분
$(function(){
    var $buttons = $("button");
    var arr = [];

    $buttons.click(function(){

        var newVal = $(this).val();
        if (newVal==="="){
            return false;
        }
        if (arr.length === 0 && (newVal==="*"|| newVal==="/")){
            return false;
        }
        arr.push(newVal);
        var lastNumber = arr[arr.length-1];

        var $inVal = $(".monitor");
        $inVal.val(lastNumber);

        // var oldVal = $inVal.val();
        // var result = oldVal+newVal;
        // $inVal.val(result);
    });
    var $resultBtn = $("#result");
    $resultBtn.click(function(){
        var str ="";

        for (var i =0; i< arr.length; i+=1){
            str =str + arr[i];
        }
        var result = eval(str);
        var $inval = $("#inval");
        $inval.val(result);
        arr =[];
    });

    var menu =$(".menu_a").on("click",function(){
        var menu_tab = $(".menu");
        if (menu_tab.css("display")=="none"){

            menu_tab.css("display","block");
        }
        else{
            // if ($("body").click()){
            //     menu_tab.css("display","none");
            // }
            menu_tab.css("display","none");
        }
    });
   
    var menu_1 = $(".menu_1");
    var container_cont =$(".container_cont");
    menu_1.on("click",function(){

        if (container_cont.css("display")=="block"){

            container_cont.css("display","none");
        }
        else {
            container_cont.css("display","block");
        }

    });
    
    var menu_2 = $(".menu_2").on("click",function(){
       var i= 0;
        if (i <1){
            i++;
        $("body").append('<div class="container_crazy"><div class="val_1"><label>URL<input class="url_1"type="text"></label></div>'+
        '<div class="val_2"><label>TIME<input class="time_1"type="text"></label></div>'+
        '<button class="btn_star"type="button">GO</button><button class="rmove">삭제</button></div> ');
    
        }
    });

    var btn_star=$(".btn_star").on("click", function(){

        var url = $(".url_1").val();
        var time = $(".time_1").val();

        for (var i = 0; i<=time; i++){
        window.open(url);
    }

    });

    var btn_remove =$(".rmove").on("click",function(){
        $(this).remove();

    });
    
});
