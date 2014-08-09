package com.kun.flow.web.control;

import com.kun.flow.bean.Pagination;
import com.kun.flow.exception.ServiceException;
import com.kun.flow.model.CategoryTree;
import com.kun.flow.model.NewsCategory;
import com.kun.flow.service.INewsCategoryService;
import com.kun.flow.web.response.DataOut;
import com.kun.flow.web.response.MessageOut;
import com.kun.flow.web.response.Out;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * User: xianing
 * Date: 7/17/14
 * Time: 3:25 PM
 * To change this template use File | Settings | File Templates.
 */
@Controller
@RequestMapping("/newscategory")
public class NewsCategoryControl  extends BaseControl<NewsCategory> {

    public INewsCategoryService getNewsCategoryService() {
        return (INewsCategoryService) this.getService();
    }


    /**
     * 新增
     *
     * @author songkun
     * @param newsCategory
     * @return Out
     */
    @RequestMapping("/add.do")
    @ResponseBody
    public Out<Object> add(NewsCategory newsCategory) {
        try {
            this.getService().save(newsCategory);
            return MessageOut.ADD_OK_MESSAGE;
        } catch (ServiceException e) {
            e.printStackTrace();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return MessageOut.ADD_FAIL_MESSAGE;
    }

    /**
     * modify
     *
     * @author songkun
     * @param newsCategory
     * @return Out
     */
    @RequestMapping("/modify.do")
    @ResponseBody
    public Out<Object> modify(NewsCategory newsCategory) {
        try {
            // TODO method modify category
            return MessageOut.ADD_OK_MESSAGE;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return MessageOut.ADD_FAIL_MESSAGE;
    }

    /**
     * delete
     *
     * @author songkun
     * @param newsCategory
     * @return Out
     */
    @RequestMapping("/delete.do")
    @ResponseBody
    public Out<Object> delete(NewsCategory newsCategory) {
        try {
            // TODO method remove category
            return MessageOut.ADD_OK_MESSAGE;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return MessageOut.ADD_FAIL_MESSAGE;
    }

    /**
     * listRoot
     *
     * @author songkun
     * @return Out
     */
    @RequestMapping("/listRoot.do")
    @ResponseBody
    public Out<NewsCategory> list(Pagination pagination) {
        try {
            return new DataOut<NewsCategory>(this.getNewsCategoryService().listRoot(), pagination);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
    /**
     * listByPid
     *
     * @author songkun
     * @return Out
     */
    @RequestMapping("/listByPid.do")
    @ResponseBody
    public Out<NewsCategory> list(Pagination pagination, long pid) {
        try {
            return new DataOut<NewsCategory>(this.getNewsCategoryService().listByPid(pid), pagination);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    /**
     * listRoot
     *
     * @author songkun
     * @return Out
     */
    @RequestMapping("/listAll.do")
    @ResponseBody
    public List<CategoryTree> listAll(Pagination pagination) {
        try {
            CategoryTree tree = new CategoryTree();
            tree.setId("0");
            tree.setText("栏目列表");
            tree.setState("closed");
            tree.setChildren(new ArrayList<CategoryTree>());
            List<CategoryTree> clist = tree.getChildren();
            for(NewsCategory c : this.getNewsCategoryService().listRoot()){
                CategoryTree child = new CategoryTree();
                child.setId(""+c.getId());
                child.setText(c.getName());
                child.setChildren(new ArrayList<CategoryTree>());
                List<CategoryTree> cclist = child.getChildren();
                for(NewsCategory cc : this.getNewsCategoryService().listByPid(c.getId())){
                    CategoryTree schild = new CategoryTree();
                    schild.setId(""+cc.getId());
                    schild.setText(cc.getName());
                    cclist.add(schild);
                    child.setState("closed");
                }
                clist.add(child);
            }
            List<CategoryTree> res = new ArrayList<CategoryTree>();
            res.add(tree);
            return res;

        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    /**
     * listTree
     *
     * @author songkun
     * @return Out
     */
    @RequestMapping("/listTree.do")
    @ResponseBody
    public List<CategoryTree> listAll(Pagination pagination, long cid) {
        try {
            List<CategoryTree> clist = new ArrayList<CategoryTree>();
            for(NewsCategory cc : this.getNewsCategoryService().listByPid(cid)){
                CategoryTree schild = new CategoryTree();
                schild.setId(""+cc.getId());
                schild.setText(cc.getName());
                List<CategoryTree> list = new ArrayList<CategoryTree>();
                for(NewsCategory c : this.getNewsCategoryService().listByPid(cc.getId())){
                    CategoryTree child = new CategoryTree();
                    schild.setId(""+c.getId());
                    schild.setText(c.getName());
                    list.add(schild);
                    schild.setState("closed");
                }
                if (list.size()>0){
                    schild.setChildren(list);
                }
                clist.add(schild);
            }
            return clist;

        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
}
