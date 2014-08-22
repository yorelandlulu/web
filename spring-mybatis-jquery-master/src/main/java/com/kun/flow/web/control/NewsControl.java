package com.kun.flow.web.control;

import com.kun.flow.bean.Pagination;
import com.kun.flow.model.News;
import com.kun.flow.service.INewsService;
import com.kun.flow.web.response.DataOut;
import com.kun.flow.web.response.MessageOut;
import com.kun.flow.web.response.Out;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Date;
import java.util.List;

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

    public INewsService getNewsService() {
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
            news.setPosttime(new Date(news.getPosttime1()));
            this.getService().save(news);
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
    public Out<News> listByCategory(Pagination pagination, Long cid) {
        try {
            List<News> list = this.getNewsService().listbycid(cid, pagination);
            if (list == null || list.size() < pagination.getPageSize()) {
                pagination.setTotalRows((pagination.getPageNumber()==0?0:pagination.getPageNumber() - 1) * pagination.getPageSize() + (list == null ? 0 : list.size()));
            } else {
                pagination.setTotalRows(this.getService().loadAll().size());
            }
            return new DataOut<News>(this.getNewsService().listbycid(cid,pagination), pagination);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    /**
     * getone
     *
     * @author songkun
     * @param nid
     * @return Out
     */
    @RequestMapping("/view.do")
    @ResponseBody
    public News view(Pagination pagination, Long nid) {
        try {
            return this.getService().getByKey(nid);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
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
            Long nid = news.getId();
            News cur = this.getService().getByKey(nid);
            cur.setTitle(news.getTitle());
            cur.setAuthor(news.getAuthor());
            cur.setPosttime(new Date(news.getPosttime1()));
            cur.setCategoryid(news.getCategoryid());
            cur.setContent(news.getContent());
            cur.setEditname(""); //TODO hard code for now
            cur.setAuditname(""); //TODO hard code for now
            this.getService().update(cur);
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
            Long nid = news.getId();
            this.getService().deleteByKey(nid);
            return MessageOut.ADD_OK_MESSAGE;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return MessageOut.ADD_FAIL_MESSAGE;
    }

}
