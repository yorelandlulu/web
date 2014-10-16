var editnewsid = $.cookie('editnewsid');
//var editnewsid =14;
window.onload = function()
{
    loadFormData();
    CKEDITOR.replace("content");
};
function loadFormData(){
    $.ajax({
        url:'news/view.do',
        async:false,
        data: {nid: editnewsid},
        dataType : 'json',
        type : 'POST',
        success: function (d){
            $("#editdiv").hide();
            $("#idh").val(d.id);
            $("input[name='title']").val(d.title);
            $("input[name='subtitle']").val(d.subtitle);
            $('#dd').datetimebox({
                value: d.posttime1,
                required: true,
                showSeconds: false
            });
            $("input[name='author']").val(d.author);
            $("input[name='editname']").val(d.editname);
            $("input[name='auditname']").val(d.auditname);
            $("#TextArea2").val(d.content);
            init();
            loadMe(d.categoryid);
            if(d.categoryid=="232"){
                $("#editdiv").show();
            }
        }
    });
}
function init(){
    $.ajax({
        url:'newscategory/listRoot.do',
        dataType : 'json',
        type : 'POST',
        success: function (data){
            var jqData = data.rows;
            $('#cc1').combobox('loadData' , jqData);
        }
    });
}
function loadMe(cid){
    $.ajax({
        url: 'newscategory/view.do',
        data: {cid: cid},
        dataType: 'json',
        type: 'POST',
        success: function (d) {
            if(d.parentid==0)
                load1(cid);
            else
                load2pre(d.parentid, cid);
        }
    });
}
function load2pre(cid1,cid2){
    $.ajax({
        url: 'newscategory/view.do',
        data: {cid: cid1},
        dataType: 'json',
        type: 'POST',
        success: function (d) {
            if(d.parentid==0)
                load2(cid1, cid2);
            else
                load3(d.parentid,cid1,cid2);
        }
    });
}
function load1(cid1){
    $('#cc1').combobox('setValue', cid1);
    load2by1(cid1);
}
function load2by1(cid1){
    $.ajax({
        url:'newscategory/listByPid.do',
        dataType : 'json',
        data : {pid :cid1 },
        type : 'POST',
        success: function (data){
            var jqData = data.rows;
            $('#cc2').combobox('loadData' , jqData);
        }
    });
}

function load3by2(cid1){
    $.ajax({
        url:'newscategory/listByPid.do',
        dataType : 'json',
        data : {pid :cid1 },
        type : 'POST',
        success: function (data){
            var jqData = data.rows;
            $('#cc3').combobox( 'loadData' , jqData);
        }
    });
}
function load2(cid1,cid2){
    load1(cid1);
    $('#cc2').combobox('setValue', cid2);
    load3by2(cid2);
}
function load3(cid1,cid2,cid3){
    load2(cid1,cid2);
    $('#cc3').combobox('setValue', cid3);
}

function update(){
    $('#fm').form('submit',{
        url: 'news/modify.do',
        onSubmit: function(){
            validatecategory();
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
        url: 'news/delete.do',
        onSubmit: function(){
            validatecategory();
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

function validatecategory(){
    if($("input[name='categoryid3']").val()!=null&&$("input[name='categoryid3']").val()!=""){
        $("input[name='categoryid']").val($("input[name='categoryid3']").val());
    }
    else if($("input[name='categoryid']").val()==null||$("input[name='categoryid']").val()==""){
        $("input[name='categoryid']").val($("input[name='categoryid1']").val());
    }
}