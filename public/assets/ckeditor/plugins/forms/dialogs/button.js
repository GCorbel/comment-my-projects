/*
 Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.html or http://ckeditor.com/license
*/
CKEDITOR.dialog.add("button",function(e){function t(e){var t=this.getValue();t?(e.attributes[this.id]=t,"name"==this.id&&(e.attributes["data-cke-saved-name"]=t)):(delete e.attributes[this.id],"name"==this.id&&delete e.attributes["data-cke-saved-name"])}return{title:e.lang.forms.button.title,minWidth:350,minHeight:150,onShow:function(){delete this.button;var e=this.getParentEditor().getSelection().getSelectedElement();e&&e.is("input")&&e.getAttribute("type")in{button:1,reset:1,submit:1}&&(this.button=e,this.setupContent(e))},onOk:function(){var e=this.getParentEditor(),t=this.button,n=!t,r=t?CKEDITOR.htmlParser.fragment.fromHtml(t.getOuterHtml()).children[0]:new CKEDITOR.htmlParser.element("input");this.commitContent(r);var i=new CKEDITOR.htmlParser.basicWriter;r.writeHtml(i),r=CKEDITOR.dom.element.createFromHtml(i.getHtml(),e.document),n?e.insertElement(r):(r.replace(t),e.getSelection().selectElement(r))},contents:[{id:"info",label:e.lang.forms.button.title,title:e.lang.forms.button.title,elements:[{id:"name",type:"text",label:e.lang.common.name,"default":"",setup:function(e){this.setValue(e.data("cke-saved-name")||e.getAttribute("name")||"")},commit:t},{id:"value",type:"text",label:e.lang.forms.button.text,accessKey:"V","default":"",setup:function(e){this.setValue(e.getAttribute("value")||"")},commit:t},{id:"type",type:"select",label:e.lang.forms.button.type,"default":"button",accessKey:"T",items:[[e.lang.forms.button.typeBtn,"button"],[e.lang.forms.button.typeSbm,"submit"],[e.lang.forms.button.typeRst,"reset"]],setup:function(e){this.setValue(e.getAttribute("type")||"")},commit:t}]}]}});