var url;
var firstLevelCategory;
var editor = CKEDITOR.replace("TextArea1");

function togglefragment(isFirst){
    if(isFirst){
        $("#fragment-1").show();
        $("#fragment-1").removeClass("ui-tabs-hide");
        $("#fragment-2").hide();
        $("#fragment-2").addClass("ui-tabs-hide");
        $("#fli1").addClass("ui-tabs-selected");
        $("#fli2").removeClass("ui-tabs-selected");
        $("#fli2").addClass("ui-tabs-nav");
        $("#fli1").removeClass("ui-tabs-nav");
    }
    else{
        $("#fragment-2").show();
        $("#fragment-2").removeClass("ui-tabs-hide");
        $("#fragment-1").hide();
        $("#fragment-1").addClass("ui-tabs-hide");
        $("#fli2").addClass("ui-tabs-selected");
        $("#fli1").removeClass("ui-tabs-selected");
        $("#fli1").addClass("ui-tabs-nav");
        $("#fli2").removeClass("ui-tabs-nav");
    }
}
function gotoNode(i, text){
    togglefragment(true);
    firstLevelCategory = i;
    $(".menu a").removeClass("select");
    $("#li"+i).addClass("select");
    $("#ctitle").html(text);
    $.ajax({
        url:'newscategory/listTree.do',
        data: {cid: i},
        dataType : 'json',
        type : 'POST',
        success: function (d){
            //$('#tc').tree({data:d});
            $("#tc").empty();
            for(var obj in d){
                $("#tc").append(" <li id='menuli"+obj+"'><a href=javascript:listnewsbycid("+d[obj].id+",'"+d[obj].text+"',1)>"+ d[obj].text+"</a></li>");
                if(d[obj].children){
                    $("#menuli"+obj).append("<ul id='ul"+obj+"'></ul>");
                    for(var sub in d[obj].children){
                        $("#ul"+obj).append("<li><a href=javascript:listnewsbycid("+d[obj].children[sub].id+",'"+d[obj].children[sub].text+"',1)>"+ d[obj].children[sub].text+"</a></li>");
                    }
                }
            }
            listnewsbycid(i, text,1);
            $('#cc1').combobox('setValue', firstLevelCategory);
			load2by1(firstLevelCategory);
        }
    });
}
function listnewsbycid(cid, text, pageno){
    $("#subTitle").html(text);
    togglefragment(true);
    $.ajax({
        url:'news/listbycategory.do',
        dataType : 'json',
        data : {cid: cid, page: pageno, rows: 10},
        type : 'POST',
        success: function (data){
            $("#fragment-1 ul").empty();
            for(var i in data.rows){
                $("#fragment-1 ul").append("<li><a href='#'>"+data.rows[i].title+"</a><span>"+data.rows[i].posttime+"<a href='javascript:gotoview("+data.rows[i].id+")' class='edit'>查 看</a><a href='javascript:gotoedit("+data.rows[i].id+")' class='edit'>编 辑</a></span></li>");
            }
            $("#fragment-1 .pages span").empty();
			if(pageno>1)
				$(".btn_prev").attr("href","javascript:listnewsbycid("+cid+",'"+text+"',"+(pageno-1)+")");
			if(pageno<(data.total/10-1))
				$(".btn_next").attr("href","javascript:listnewsbycid("+cid+",'"+text+"',"+(pageno+1)+")");
            for(var i=0; i <data.total/10; i++ ){
                if(i==pageno-1){
                    $("#fragment-1 .pages span").append("<a class='on' href=javascript:listnewsbycid("+cid+",'"+text+"',"+(i+1)+")>"+(i+1)+"</a>");
                }
                else{
                    $("#fragment-1 .pages span").append("<a href=javascript:listnewsbycid("+cid+",'"+text+"',"+(i+1)+")>"+(i+1)+"</a>");
                }
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
function editUser(){
    var row = $('#dg').datagrid('getSelected');
    if (row){
        $('#dlg').dialog('open').dialog('setTitle','修改新闻');
        $('#fm').form('load',row);
        url = 'update_user.php?id='+row.id;
    }
}
function validatecategory(){
    if($("input[name='categoryid3']").val()!=null&&$("input[name='categoryid3']").val()!=""){
        $("input[name='categoryid']").val($("input[name='categoryid3']").val());
    }
    else if($("input[name='categoryid']").val()==null||$("input[name='categoryid']").val()==""){
        $("input[name='categoryid']").val($("input[name='categoryid1']").val());
    }
}
function saveUser(){
    $('#fm').form('submit',{
        url: 'news/add.do',
        onSubmit: function(){
            validatecategory();
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
                resetform();
            }
        }
    });
}
function resetform(){
    $("#fm input, #fm textarea").val("");
    CKEDITOR.instances.TextArea1.setData('');
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

function gotoview(id){
    $.cookie('newsid',id, {expires:7, path:'/',domain:'web.shanghai3fx.com',secure:false});
    window.location.href = "viewArticle.html";
}
function gotoedit(id){
    $.cookie('editnewsid',id, {expires:7, path:'/',domain:'web.shanghai3fx.com',secure:false});
	window.open ('edit.html','newwindow','height=700,width=900,top=0,left=0,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no');
}
