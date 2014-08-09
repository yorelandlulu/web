package com.kun.flow.service.impl;

import com.kun.flow.data.NewsCategoryMapper;
import com.kun.flow.exception.ServiceException;
import com.kun.flow.model.NewsCategory;
import com.kun.flow.service.INewsCategoryService;

import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * User: xianing
 * Date: 7/17/14
 * Time: 3:54 PM
 * To change this template use File | Settings | File Templates.
 */
public class NewsCategoryServiceImpl extends AbstractServiceImpl<NewsCategory> implements INewsCategoryService {
    public NewsCategoryMapper getNewsCategoryMapper() {
        return (NewsCategoryMapper) this.getMapper();
    }
    public List<NewsCategory> listRoot() throws ServiceException {
        try {
            return this.getNewsCategoryMapper().listRoot();
        } catch (Exception e) {
            throw new ServiceException(e);
        }
    }
    public List<NewsCategory> listByPid(long pid) throws ServiceException {
        try {
            return this.getNewsCategoryMapper().listByPid(pid);
        } catch (Exception e) {
            throw new ServiceException(e);
        }
    }
}
