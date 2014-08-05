package com.kun.flow.web.control;

import com.kun.flow.exception.ServiceException;
import com.kun.flow.model.News;
import com.kun.flow.model.NewsCategory;
import com.kun.flow.service.INewsCategoryService;
import com.kun.flow.service.INewsService;
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
@RequestMapping("/news")
public class NewsControl extends BaseControl<News> {

    public INewsService getService() {
        return (INewsService) this.getService();
    }


    /**
     * 新增
     *
     * @author songkun
     * @param news
     * @return Out
     */
    @RequestMapping("/add.do")
    @ResponseBody
    public Out<Object> add(News news) {
        try {
            //TODO add service
            //this.getService().save(newsCategory);
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
     * @param cid
     * @return Out
     */
    @RequestMapping("/listbycategory.do")
    @ResponseBody
    public Out<Object> listByCategory(int cid) {
        try {
            //TODO add service
            //this.getService().save(newsCategory);
            return MessageOut.ADD_OK_MESSAGE;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return MessageOut.ADD_FAIL_MESSAGE;
    }


    /**
     * modify
     *
     * @author songkun
     * @param news
     * @return Out
     */
    @RequestMapping("/modify.do")
    @ResponseBody
    public Out<Object> modify(News news) {
        try {
            //TODO add service
            //this.getService().save(newsCategory);
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
     * @param news
     * @return Out
     */
    @RequestMapping("/delete.do")
    @ResponseBody
    public Out<Object> delete(News news) {
        try {
            //TODO add service
            //this.getService().save(newsCategory);
            return MessageOut.ADD_OK_MESSAGE;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return MessageOut.ADD_FAIL_MESSAGE;
    }

}
