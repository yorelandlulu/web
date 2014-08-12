/*
Copyright (c) 2003-2011, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.editorConfig = function(config) {
    config.filebrowserBrowseUrl = '/SMJquery/ckfinder/ckfinder.html';
    config.filebrowserImageBrowseUrl = '/SMJquery/ckfinder/ckfinder.html?type=Images';
    config.filebrowserFlashBrowseUrl = '/SMJquery/ckfinder/ckfinder.html?type=Flash';
    config.filebrowserUploadUrl = '/SMJquery/ckfinder/core/connector/java/connector.java?command=QuickUpload&type=Files';
    config.filebrowserImageUploadUrl = '/SMJquery/ckfinder/core/connector/java/connector.java?command=QuickUpload&type=Images';
    config.filebrowserFlashUploadUrl = '/SMJquery/ckfinder/core/connector/java/connector.java?command=QuickUpload&type=Flash';
    config.language = "zh-cn";
};
