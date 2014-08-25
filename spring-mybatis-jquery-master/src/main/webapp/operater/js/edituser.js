var edituserid = $.cookie('edituserid');
//CKEDITOR.replace("TextArea2");
//var edituserid =1;
loadFormData();
function loadFormData(){
    $.ajax({
        url:'getByKey.do',
        data: {key: edituserid},
        dataType : 'json',
        type : 'POST',
        success: function (d){
            $("#hid").val(d.id);
            $("input[name='name']").val(d.name);
            $("input[name='type']").val(d.type);
        }
    });
}

function update(){
    $('#fm').form('submit',{
        url: 'update.do',
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
                alert("更新成功！");
                window.close();
            }
        }
    });
}
function del(){
    if(!confirm("确认删除？")) return;
    $('#fm').form('submit',{
        url: 'delete.do',
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
                alert("删除成功！");
                window.close();
            }
        }
    });
}