var url;
function listnewsbycid(cid){
    $.ajax({
        url:'news/listbycategory.do',
        dataType : 'json',
        data : {cid: cid},
        type : 'POST',
        success: function (data){
            $("#fragment-1 ul").empty();
            for(var i in data.rows){
                $("#fragment-1 ul").append("<li><a href='#'>"+data.rows[i].title+"</a><span>"+data.rows[i].posttime+"<a href='#' class='edit'>查 看</a><a href='#' class='edit'>编 辑</a></span></li>");
            }
        }
    });
}
function newUser(){
    url = 'add.do';
    $.ajax({
        url:'newscategory/listRoot.do',
        dataType : 'json',
        type : 'POST',
        success: function (data){
            var jqData = data.rows;
            $('#cc1').combobox( 'loadData' , jqData);
        }
    });
}
function editUser(){
    var row = $('#dg').datagrid('getSelected');
    if (row){
        $('#dlg').dialog('open').dialog('setTitle','修改新闻');
        $('#fm').form('load',row);
        url = 'update_user.php?id='+row.id;
    }
}
function saveUser(){
    $('#fm').form('submit',{
        url: 'news/add.do',
        onSubmit: function(){
            return $(this).form('validate');
        },
        success: function(result){
            var result = eval('('+result+')');
            if (result.errorMsg){
                $.messager.show({
                    title: 'Error',
                    msg: result.errorMsg
                });
            }
            else{
                alert("添加成功！");
                location.href="main.html#fragment-1";
            }
        }
    });
}
function destroyUser(){
    var row = $('#dg').datagrid('getSelected');
    if (row){
        $.messager.confirm('确认','确定删除么？',function(r){
            if (r){
                $.post('destroy_user.php',{id:row.id},function(result){
                    if (result.success){
                        $('#dg').datagrid('reload');    // reload the user data
                    } else {
                        $.messager.show({    // show error message
                            title: 'Error',
                            msg: result.errorMsg
                        });
                    }
                },'json');
            }
        });
    }
}

function save(){
    var oEditor = FCKeditorAPI.GetInstance("content") ;
    document.getElementById("fckCont").value=oEditor.GetXHTML();
    document.form1.submit();
    //alert(oEditor.GetXHTML()) //获取fck编辑器的内容 包括html标签
    // alert( oEditor.EditorDocument.body.innerHTML ) ;//获取html内 包括html标签
}
