
function setIframe(src1, src2){
    $("#flist").attr("src",src1);
    $("#fadd").attr("src",src2);
}
function listuser(pid){
    $.ajax({
        url:'list.do',
        dataType : 'json',
        data : {pid :pid },
        type : 'POST',
        success: function (data){
            $(".news_list ul").empty();
            for(var i in data.rows){
                $(".news_list ul").append("<li><a href='#'>"+data.rows[i].name+"</a><span>&nbsp;</span><span><a href='javascript:gotorole("+data.rows[i].id+")' class='edit'>配置角色</a><a href='javascript:gotoedit("+data.rows[i].id+")' class='edit'>编 辑</a></span></li>");
            }
        }
    });
}
function showType(i){
    if(i==0){
        return "管理员";
    }
    else{
        return "用户";
    }
}

function saveUser(){
    $('#fm').form('submit',{
        url: 'add.do',
        onSubmit: function(){
            return $(this).form('validate');
        },
        success: function(result){
            var result = eval('('+result+')');
            if (!result.success){
                $.messager.show({
                    title: 'Error',
                    msg: result.message
                });
            }
            else{
                alert("添加成功！");
                resetform();
            }
        }
    });
}
function resetform(){
    $("#fm input").val("");
}

function gotoedit(id){
    $.cookie('edituserid',id, {expires:7, path:'/',domain:'web.shanghai3fx.com',secure:false});
    window.open ('edituser.html','newwindow','height=700,width=900,top=0,left=0,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no');
}

function gotorole(id){
    $.cookie('edituserid',id, {expires:7, path:'/',domain:'web.shanghai3fx.com',secure:false});
    window.open ('userrole.html','newwindow','height=500,width=720,top=0,left=0,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no');
}

function gotoNode(id){
    $.cookie('nodeid',id, {expires:7, path:'/',domain:'web.shanghai3fx.com',secure:false});
    window.location.href = "../main.html";
}


    $.ajax({
        url:'newscategory/listRootPremission.do',
        dataType : 'json',
        type : 'POST',
        success: function (d) {
            var rootids= [231,1,2,3,4,5,6,7,8];
            var jqData = d.rows;
            var reslist = new Array();
            for(var i in jqData){
                reslist[i] = jqData[i].id
            }
            for(var j in rootids){
                if($.inArray(rootids[j], reslist)==-1){
                    $("#li"+rootids[j]).parent().remove();
                }
            }
        }
    });