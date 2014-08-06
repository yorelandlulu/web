package com.kun.flow.service.impl;

import com.kun.flow.data.NewsMapper;
import com.kun.flow.exception.ServiceException;
import com.kun.flow.model.News;
import com.kun.flow.service.INewsService;

/**
 * Created with IntelliJ IDEA.
 * User: xianing
 * Date: 7/17/14
 * Time: 3:54 PM
 * To change this template use File | Settings | File Templates.
 */
public class NewsServiceImpl extends AbstractServiceImpl<News> implements INewsService {
    public NewsMapper getNewMapper() {
        return mapper;
    }

    public void setNewMapper(NewsMapper newsMapper) {
        this.mapper = mapper;
    }

    private NewsMapper mapper;
    public void save(News news) throws ServiceException {
        try {
            this.getNewMapper().save(news);
        } catch (Exception e) {
            throw new ServiceException(e);
        }
    }
    public void listbycid(int cid) throws ServiceException{
        try {
            this.getNewMapper().listByCid(cid);
        } catch (Exception e) {
            throw new ServiceException(e);
        }
    }
}
