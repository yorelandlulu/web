package com.kun.flow.model;

import org.codehaus.jackson.map.annotate.JsonSerialize;

import java.util.List;

/**
 * Created by Administrator on 2014/8/9.
 */
@JsonSerialize(include= JsonSerialize.Inclusion.NON_NULL)
public class CategoryTree {
    private String id;
    private String text;
    private String state;

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    private List<CategoryTree> children;

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public List<CategoryTree> getChildren() {
        return children;
    }

    public void setChildren(List<CategoryTree> children) {
        this.children = children;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}
