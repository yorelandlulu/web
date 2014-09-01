var editnewsid = $.cookie('editnewsid');
//CKEDITOR.replace("TextArea2");
//var editnewsid =14;
loadFormData();
function loadFormData(){
    $.ajax({
        url:'news/view.do',
        data: {nid: editnewsid},
        dataType : 'json',
        type : 'POST',
        success: function (d){
            $("#idh").val(d.id);
            $("input[name='title']").val(d.title);
            $('#dd').datebox({
                required:true
            });
            $('#dd').datebox('setValue', d.posttime1);
            $("input[name='author']").val(d.author);
            $("#TextArea2").val(d.content);
            init();
            loadMe(d.categoryid);
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