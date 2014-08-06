/**
 * Program  : IOperaterBindRoleService.java
 * Author   : songkun
 * Create   : 2014年4月25日 下午9:22:23
 *
 */

package com.kun.flow.service;

import com.kun.flow.exception.ServiceException;
import com.kun.flow.model.News;
import com.kun.flow.model.NewsCategory;

/**
 *
 * @author songkun
 * @version 1.0.0
 * @2014年4月25日 下午9:22:23
 */
public interface INewsService extends IService<News> {

    public void save(News news) throws ServiceException;
    public void listbycid(int cid) throws ServiceException;

}
