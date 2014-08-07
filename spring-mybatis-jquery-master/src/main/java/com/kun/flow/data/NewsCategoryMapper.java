package com.kun.flow.data;

import com.kun.flow.model.NewsCategory;
import com.kun.flow.model.NewsCategoryExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface NewsCategoryMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table news_category
     *
     * @mbggenerated Wed Jul 16 16:45:51 CST 2014
     */
    int countByExample(NewsCategoryExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table news_category
     *
     * @mbggenerated Wed Jul 16 16:45:51 CST 2014
     */
    int deleteByExample(NewsCategoryExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table news_category
     *
     * @mbggenerated Wed Jul 16 16:45:51 CST 2014
     */
    int insert(NewsCategory record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table news_category
     *
     * @mbggenerated Wed Jul 16 16:45:51 CST 2014
     */
    int insertSelective(NewsCategory record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table news_category
     *
     * @mbggenerated Wed Jul 16 16:45:51 CST 2014
     */
    List<NewsCategory> selectByExample(NewsCategoryExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table news_category
     *
     * @mbggenerated Wed Jul 16 16:45:51 CST 2014
     */
    int updateByExampleSelective(@Param("record") NewsCategory record, @Param("example") NewsCategoryExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table news_category
     *
     * @mbggenerated Wed Jul 16 16:45:51 CST 2014
     */
    int updateByExample(@Param("record") NewsCategory record, @Param("example") NewsCategoryExample example);
}