/**
 * Program  : RoleBindPermitAction.java
 * Author   : songkun
 * Create   : 2014年4月26日 上午10:39:47
 *
 */

package com.kun.flow.web.control;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import com.kun.flow.model.NewsCategory;
import com.kun.flow.service.INewsCategoryService;
import com.kun.flow.service.IRoleService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.kun.flow.bean.Pagination;
import com.kun.flow.bean.TreeGridNode;
import com.kun.flow.exception.ServiceException;
import com.kun.flow.model.Permit;
import com.kun.flow.model.RoleBindPermit;
import com.kun.flow.service.IRoleBindPermitService;
import com.kun.flow.web.response.DataOut;
import com.kun.flow.web.response.MessageOut;
import com.kun.flow.web.response.Out;

/**
 * 角色-权限 处理类
 * 
 * @author songkun
 * @version 1.0.0
 * @2014年4月26日 上午10:39:47
 */
@Controller
@RequestMapping("/roleBindPermit")
public class RoleBindPermitControl extends BaseControl<RoleBindPermit> {

    private IRoleService roleService;
    private INewsCategoryService newsCategoryService;

    public INewsCategoryService getNewsCategoryService() {
        return newsCategoryService;
    }

    public void setNewsCategoryService(INewsCategoryService newsCategoryService) {
        this.newsCategoryService = newsCategoryService;
    }

    public IRoleService getRoleService() {
        return roleService;
    }

    public void setRoleService(IRoleService roleService) {
        this.roleService = roleService;
    }

    public IRoleBindPermitService getRoleBindPermitService() {
		return (IRoleBindPermitService) this.getService();
	}

	/**
	 * 获取已绑定的权限列表
	 * 
	 * @author songkun
	 * @create 2014年4月26日 上午10:41:34
	 */
	@RequestMapping("/list.do")
	@ResponseBody
	public Out<TreeGridNode> list(RoleBindPermit rbp, Pagination pagination) {
		try {
			return toTreeGrid(this.getRoleBindPermitService().listByRole(rbp.getRole().getId(), pagination));
		} catch (ServiceException ex) {
			getLogger().error(ex.getMessage(), ex);
		} catch (Exception ex) {
			getLogger().error(ex.getMessage(), ex);
		}
		return null;
	}

	/**
	 * 更新角色绑定的权限
	 * 
	 * @author songkun
	 * @create 2014年4月26日 上午10:42:27
	 */
	@RequestMapping("/update.do")
	@ResponseBody
	public Out<Object> update(Long rbp, String ids) {
		try {
			this.getRoleBindPermitService().updateBindsByRole(rbp, ids, this.getCurrentOperater());
			return MessageOut.UPDATE_OK_MESSAGE;
		} catch (ServiceException ex) {
			getLogger().error(ex.getMessage(), ex);
		} catch (Exception ex) {
			getLogger().error(ex.getMessage(), ex);
		}
		return MessageOut.UPDATE_FAIL_MESSAGE;
	}

	/**
	 * 返回树形权限列表(左边列表，绑定界面中的列表)
	 * 
	 * @author songkun
	 * @create 2014年4月26日 上午10:42:37
	 */
	private Out<TreeGridNode> toTreeGrid(List<RoleBindPermit> list) {
		if (list == null || list.size() == 0) {
			return null;
		}
		TreeGridNode treeNode, childNode;
		List<TreeGridNode> treeNodes = new ArrayList<TreeGridNode>();
		for (Iterator<RoleBindPermit> iterator = list.iterator(); iterator.hasNext();) {
			RoleBindPermit rbp = (RoleBindPermit) iterator.next();
            NewsCategory tn = (NewsCategory) rbp.getPermit();
		}
		Pagination pagination = new Pagination();
		pagination.setTotalRows(treeNodes.size());
		return new DataOut<TreeGridNode>(treeNodes, pagination);
	}

    /**
     * 获取未绑定的角色列表
     *
     * @author songkun
     * @return
     * @return String
     * @date 2011-6-20 下午08:02:37
     * @since 2.0.0
     */
    @RequestMapping("/listUnbindRole.do")
    @ResponseBody
    public Out<RoleBindPermit> listUnbindRole(Long roleId, String keyword, Pagination pagination) {
        try {
            List<RoleBindPermit> list = this.getRoleBindPermitService().listByRoleUnbind(roleId, keyword, pagination);
            for(RoleBindPermit p : list){
                p.setRole(this.getRoleService().getByKey(p.getRoleId()));
            }
            return new DataOut<RoleBindPermit>(list, pagination);
        } catch (ServiceException e) {
            e.printStackTrace();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    /**
     * 获取已绑定的权限列表
     *
     * @author songkun
     * @return
     * @return String
     * @date 2011-6-20 下午08:03:45
     * @since 2.0.0
     */
    @RequestMapping("/listBindedPermit.do")
    @ResponseBody
    public Out<RoleBindPermit> listBindedRole(Long roleId, Pagination pagination) {
        try {
            pagination.setPageSize(500);
            return new DataOut<RoleBindPermit>(this.getRoleBindPermitService().listByRole(roleId, pagination), pagination);
        } catch (ServiceException e) {
            e.printStackTrace();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
}
