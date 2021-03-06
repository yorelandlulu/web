var categoryid = $.cookie('categoryid');
var publicpageno = $.cookie('pageno');
var cobj;
var expid = 0;
var numberperpage = 10;
loadMe(categoryid);
function expendMenu(){
    var str = $("#tc ul a:first-child").attr("href");
    if(str!=null){
        toggleLeft(expid);
        return false;
    }
    else
        return true;
}
function loadTop(cid, text){
     $.ajax({
        url:'../newscategory/view.do',
        data: {cid: cid},
        dataType: 'json',
	async: false,
        type: 'POST',
        success: function (d) {
            cobj = d;
        }
    }); 
    loadFromTop(cid, text);
}
function loadFromTop(cid, text){
    loadLeftMenu(cid, text);
    recordCookie('pageno',1);
    if(cobj.parentid==0){
        recordCookie('categoryid',cid);
        $.ajax({
            url:'../newscategory/listByPid.do',
            dataType : 'json',
            async: false,
            data : {pid :cid },
            type : 'POST',
            success: function (data){
                if (data.rows.length>0){
                    if(data.rows[0].viewarticle == 1) {
                        gotoview(data.rows[0].articleid);
                    }
                    else{
                        $.ajax({
                            url:'../newscategory/listByPid.do',
                            dataType : 'json',
                            async: false,
                            data : {pid :data.rows[0].id },
                            type : 'POST',
                            success: function (subdata){
                                if(subdata.rows.length>0 && subdata.rows[0].viewarticle == 1) {
                                    gotoview(subdata.rows[0].articleid);
                                }
                            }
                        });
                    }
                    if(expendMenu())
                        LoadRightContent(data.rows[0].id, data.rows[0].name, 1);
                }
                else{
                    if(cobj.viewarticle == 1) {
                        gotoview(cobj.articleid);
                    }
                    LoadRightContent(cid, text, 1);
                }
            }
        });
    }

}
function loadMe(){
    $.ajax({
        url:'../newscategory/view.do',
        data: {cid: categoryid},
        dataType: 'json',
        type: 'POST',
        success: function (d) {
            cobj = d;
            if (d.parentid != 0){
                loadsubMenus(d.parentid);
                LoadRightContent(categoryid, d.name, publicpageno);
                expendMenu();
            }
            else {
                if(categoryid == '232'){
                    loadLeftMenu(232, "校园动态");
                    LoadRightContent(categoryid, "校园动态", publicpageno);
                    expendMenu();
                }
                else
                    loadFromTop(categoryid, d.name);
            }
        }
    });
}
function loadsubMenus(cid){
    $.ajax({
        url:'../newscategory/view.do',
        async: false,
        data: {cid: cid},
        dataType: 'json',
        type: 'POST',
        success: function (d) {
            if(d.parentid!=0)
                loadsubMenus(d.parentid);
            else
                loadFromTop(d.id, d.name);
        }
    });
}
function loadTitle(cid){
    $.ajax({
        url:'../newscategory/view.do',
        data: {cid: cid},
        dataType : 'json',
        async: false,
        type : 'POST',
        success: function (d){
            $("#subTitle").html(getContentTitle(d));
        }
    });
}
function loadLeftMenu(cid, text){
    $("#ctitle").html(text);
    $(".menu a").removeClass("select");
    $("#li"+cid).addClass("select");
    $.ajax({
        url:'../newscategory/listTree.do',
        data: {cid: cid},
        async:false,
        dataType : 'json',
        type : 'POST',
        success: function (d) {
            $("#tc").empty();
            for (var obj in d) {
                if(d[obj].id == categoryid){
                    expid = obj;
                }
                if (d[obj].viewarticle != 1) {
                    $("#tc").append(" <li id='menuli" + obj + "'><a href=javascript:LoadRightContent(" + d[obj].id + ",'" + d[obj].text + "',1)>" + d[obj].text + "</a></li>");
                }
                else {
                    $("#tc").append(" <li id='menuli" + obj + "'><a href=javascript:gotoview(" + d[obj].articleid + ")>" + d[obj].text + "</a></li>");
                }
                if (d[obj].children) {
                    $("#menuli" + obj).append("<ul id='ul" + obj + "'></ul>");
                    $("#menuli" + obj+" a").attr("href","javascript:redirect(" + d[obj].id + ")");
                }
                for (var sub in d[obj].children) {
                    if(d[obj].children[sub].id == categoryid){
                        expid = obj;
                    }
                    if (d[obj].children[sub].viewarticle != 1) {
                        $("#ul" + obj).append("<li class='hidden'><a href=javascript:LoadRightContent(" + d[obj].children[sub].id + ",'" + d[obj].children[sub].text + "',1)>" + d[obj].children[sub].text + "</a></li>");
                    }
                    else {
                        $("#ul" + obj).append("<li class='hidden'><a href=javascript:gotoview(" + d[obj].children[sub].articleid + ")>" + d[obj].children[sub].text + "</a></li>");
                    }
                }
            }
        }
    });
}

function LoadRightContent(cid, text, pageno){
    loadTitle(cid);
    recordCookie('categoryid',cid);
    recordCookie('pageno',pageno);
    $.ajax({
        url:'../news/listbycategory.do',
        dataType : 'json',
        async: false,
        data : {cid: cid, page: pageno, rows: numberperpage},
        type : 'POST',
        success: function (data){
            $(".news_list ul").empty();
            for(var i in data.rows){
                $(".news_list ul").append("<li><a href='javascript:gotoview("+data.rows[i].id+")'>"+data.rows[i].title.replace("<br/>","")+"</a><span>"+data.rows[i].posttime+"</span></li>");
            }
            $(".pages span").empty();
			if(pageno>1) {
                var pre_page_no = parseInt(pageno) - 1;
				$(".btn_prev").attr("href","javascript:LoadRightContent("+cid+",'"+text+"',"+pre_page_no+")");
			}
			if(pageno<(parseInt(data.total/numberperpage)+1)) {
                var next_page_no =parseInt(pageno) + 1;
				$(".btn_next").attr("href","javascript:LoadRightContent("+cid+",'"+text+"',"+next_page_no+")");
			} else {
				$(".btn_next").attr("href","#");
			}
            var max_pageno = (data.total/numberperpage);
			var offset = 0;
			if(pageno > 7){
				offset = pageno - 7;
			}
            for(var i = offset; i < max_pageno && i < 8+offset; i++ ){
                if(i==pageno - 1){
                    $(".pages span").append("<a class='on' href=javascript:LoadRightContent("+cid+",'"+text+"',"+(i+1)+")>"+(i+1)+"</a>");
                }
                else{
                    $(".pages span").append("<a href=javascript:LoadRightContent("+cid+",'"+text+"',"+(i+1)+")>"+(i+1)+"</a>");
                }
            }
        }
    });
}

function gotoview(id){
    recordCookie('newsid',id);
    window.location.href = "viewArticle.html";
}

function toggleLeft(id){
    $("#container .center_contect .left_news .left_menu .center ul li ul li").addClass("hidden");
    $("#menuli"+id).children("ul").children("li").removeClass("hidden");
    if(cobj.parentid==0){
        var str = $("#menuli"+id+" ul a:first-child").attr("href");
        if(str==null||str==""){
            var str = $("#menuli"+id+" a").attr("href");
        }
        var left = str.split(",")[0];
        var right = str.split(",")[1];
        var gotoid = left.substring(28,left.length);
        var goname = right.substring(1,right.length-1);
        LoadRightContent(gotoid, goname, 1);
    }
}

function gotosearch(id){
    recordCookie('search',id);
    window.location.href = "searchList.html";
}
