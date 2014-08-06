package com.kun.flow.web.control;

import com.kun.flow.exception.ServiceException;
import com.kun.flow.model.NewsCategory;
import com.kun.flow.service.INewsCategoryService;
import com.kun.flow.web.response.MessageOut;
import com.kun.flow.web.response.Out;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

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
     * list
     *
     * @author songkun
     * @return Out
     */
    @RequestMapping("/list.do")
    @ResponseBody
    public Out<Object> list() {
        try {
            // TODO method list category
            return MessageOut.ADD_OK_MESSAGE;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return MessageOut.ADD_FAIL_MESSAGE;
    }

}
