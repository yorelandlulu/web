package com.kun.flow.data;

import com.kun.flow.model.News;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface NewsMapper extends IMapper<News>{
    /**
     * 根据名称或账号获取操作者
     *
     * @author songkun
     * @create 2014年4月25日 下午6:49:59
     * @since
     * @param cid
     * @throws Exception
     */
    public List<News>  listByCid(@Param("cid") long cid) throws Exception;
}