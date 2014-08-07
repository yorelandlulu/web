package com.kun.flow.data;

import com.kun.flow.model.News;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface NewsMapper extends IMapper<News>{
    /**
     * @author 
     * @create 
     * @since
     * @param cid
     * @throws Exception
     */
    public List<News>  listByCid(@Param("cid") long cid) throws Exception;
}