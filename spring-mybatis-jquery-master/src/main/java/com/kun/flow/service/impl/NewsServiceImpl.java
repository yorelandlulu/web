package com.kun.flow.service.impl;

import com.kun.flow.bean.Pagination;
import com.kun.flow.data.NewsMapper;
import com.kun.flow.exception.ServiceException;
import com.kun.flow.model.News;
import com.kun.flow.service.INewsService;

import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * User: xianing
 * Date: 7/17/14
 * Time: 3:54 PM
 * To change this template use File | Settings | File Templates.
 */
public class NewsServiceImpl extends AbstractServiceImpl<News> implements INewsService {
    public NewsMapper getNewsMapper() {
        return (NewsMapper) this.getMapper();
    }

    public List<News> listbycid(Long cid, Pagination page) throws ServiceException{
        try {

            List<News> list = this.getNewsMapper().listByCid(cid, page);
            if (list == null || list.size() < page.getPageSize()) {
                page.setTotalRows((page.getPageNumber() - 1) * page.getPageSize() + (list == null ? 0 : list.size()));
            } else {
                page.setTotalRows(this.getNewsMapper().getCountbyCid(cid));
            }
            return list;
        } catch (Exception e) {
            throw new ServiceException(e);
        }
    }
}
