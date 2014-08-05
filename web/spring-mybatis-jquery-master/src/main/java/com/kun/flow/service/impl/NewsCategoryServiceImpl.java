package com.kun.flow.service.impl;

import com.kun.flow.exception.ServiceException;
import com.kun.flow.model.NewsCategory;
import com.kun.flow.service.INewsCategoryService;

/**
 * Created with IntelliJ IDEA.
 * User: xianing
 * Date: 7/17/14
 * Time: 3:54 PM
 * To change this template use File | Settings | File Templates.
 */
public class NewsCategoryServiceImpl extends AbstractServiceImpl<NewsCategory> implements INewsCategoryService {
    public boolean addNewsCategory(NewsCategory newsCategory) throws ServiceException {
        try {
            this.getMapper().save(newsCategory);
            return true;
        } catch (Exception e) {
            throw new ServiceException(e);
        }
    }
}
