package com.kun.flow.service.impl;

import com.kun.flow.exception.ServiceException;
import com.kun.flow.model.News;
import com.kun.flow.model.NewsCategory;
import com.kun.flow.service.INewsCategoryService;
import com.kun.flow.service.INewsService;

/**
 * Created with IntelliJ IDEA.
 * User: xianing
 * Date: 7/17/14
 * Time: 3:54 PM
 * To change this template use File | Settings | File Templates.
 */
public class NewsServiceImpl extends AbstractServiceImpl<News> implements INewsService {
    public boolean addNews(News news) throws ServiceException {
        try {
            // TODO add logic here
            //this.getMapper().save(newsCategory);
            return true;
        } catch (Exception e) {
            throw new ServiceException(e);
        }
    }
}
