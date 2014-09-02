var editnewsid = $.cookie('edituserid');
//var editnewsid = 1;
var operater_module = 'operater';
$(function() {
    $('#operater_role_leftDataGrid').datagrid('enableDnd');
    $('#operater_role_leftDataGrid').datagrid({//
        onLoadSuccess : function() {
            $(this).datagrid('enableDnd');
        }
    });
    $('#operater_role_rightDataGrid').datagrid({//
        onLoadSuccess : function() {
            $(this).datagrid('enableDnd');
        }
    });
    $('#operater_role_allLeftToRight').unbind('click').click(function(event) {
        operaterRoleAllLetfToRight();
    });
    $('#operater_role_allRightToLeft').unbind('click').click(function(event) {
        operaterRoleAllRightToLeft();
    });
    $('#operater_role_rightToLeft').unbind('click').click(function(event) {
        operaterRoleRightToLeft();
    });
    $('#operater_role_leftToRight').unbind('click').click(function(event) {
        operaterRoleLetfToRight();
    });
    $('#operater_role_dragDropWindow_submit').unbind('click').click(
        function(event) {
            bandRoles();
        });
});
function resetform(){
    $("#fm input").val("");
}
/**
 * 将所有左边数据移到右边
 */
function operaterRoleAllLetfToRight() {
    var left = $("#operater_role_leftDataGrid");
    var right = $("#operater_role_rightDataGrid");
    var leftRows = left.datagrid('getRows');
    if (leftRows && leftRows.length > 0) {
        for (var i = leftRows.length - 1; i >= 0; i--) {
            right.datagrid('_appendRow', leftRows[i]);
            left.datagrid('deleteRow', i);
        }
    }
}

/**
 * 将所有右边数据移到左边
 */
function operaterRoleAllRightToLeft() {
    var left = $("#operater_role_leftDataGrid");
    var right = $("#operater_role_rightDataGrid");
    var rightRows = right.datagrid('getRows');
    if (rightRows && rightRows.length > 0) {
        for (var i = rightRows.length - 1; i >= 0; i--) {
            left.datagrid('_appendRow', rightRows[i]);
            right.datagrid('deleteRow', i);
        }
    }
}

/**
 * 将选中的左边记录移到右边
 */
function operaterRoleLetfToRight() {
    var left = $("#operater_role_leftDataGrid");
    var right = $("#operater_role_rightDataGrid");
    var selectedRows = left.datagrid('getSelections');
    if (selectedRows.length > 0) {
        for (var i = 0; i < selectedRows.length; i++) {
            right.datagrid('_appendRow', selectedRows[i]);
            left.datagrid('deleteRow', left.datagrid('getRowIndex',
                selectedRows[i]));
        }
    }
}

/**
 * 将选中的右边记录移到左边
 */
function operaterRoleRightToLeft() {
    var left = $("#operater_role_leftDataGrid");
    var right = $("#operater_role_rightDataGrid");
    var selectedRows = right.datagrid('getSelections');
    if (selectedRows.length > 0) {
        for (var i = 0; i < selectedRows.length; i++) {
            left.datagrid('_appendRow', selectedRows[i]);
            right.datagrid('deleteRow', right.datagrid('getRowIndex',
                selectedRows[i]));
        }
    }
}

/**
 * 绑定权限
 */
function bandRoles() {
    var rows = $("#operater_role_rightDataGrid").datagrid("getRows");
    if (!rows || rows == null || rows.length <= 0) {
        $.messager.alert('提 示', '请选择权限');
        return;
    }
    var ids = rows[0]['id'];
    for (var i = 1; i < rows.length; i++) {
        ids = ids + ',' + rows[i]['id'];
    }
    $.messager.confirm('提 示', '确定绑定?', function(r) {
        if (r) {
            $.post('../operaterBindRole/update.do', {
                'userId' : editnewsid,
                ids : ids
            }, function(data) {
                var jsonData = eval('(' + data + ')');
                $.messager.alert('提 示', jsonData.message);
                $(getDataGridIdWithPound(operater_module + '_role')).datagrid(
                    'reload');
            });
        }
    });
}

function loadRolesTablebyid(id){
    $('#operater_role_rightDataGrid').datagrid({
        url:"../operaterBindRole/listBindedRole.do?userId=" + id
    });
    $('#operater_role_leftDataGrid').datagrid({
        url:"../operaterBindRole/listUnbindRole.do?userId=" + id
    });
}