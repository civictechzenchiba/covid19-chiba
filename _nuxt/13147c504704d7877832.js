(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{442:function(t,e,n){var content=n(474);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("4db123c3",content,!0,{sourceMap:!1})},443:function(t,e,n){var content=n(476);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("5c97ef93",content,!0,{sourceMap:!1})},473:function(t,e,n){"use strict";var o=n(442);n.n(o).a},474:function(t,e,n){(e=n(14)(!1)).push([t.i,"h2[data-v-7bcd3fde]{margin-bottom:1em}a[data-v-7bcd3fde]{color:#006ca8 !important;text-decoration:none}a[data-v-7bcd3fde]:hover{text-decoration:underline}",""]),t.exports=e},475:function(t,e,n){"use strict";var o=n(443);n.n(o).a},476:function(t,e,n){(e=n(14)(!1)).push([t.i,".v-data-table-header-mobile{display:none}.v-application .pagination .primary{background-color:#008830 !important;border-color:#008830 !important}",""]),t.exports=e},573:function(t,e,n){"use strict";n.r(e);var o=n(2),r=n(460),c=n(438);var l=o.a.extend({components:{},data:function(){return{page:1,pageCount:0,itemsPerPage:10,headers:[{text:"日付",value:"date",sortable:!1,sort:function(t,e){var a=new Date(Object(c.b)(t)),b=new Date(Object(c.b)(e));return a>b?1:a<b?-1:0}},{text:"タイトル",value:"title",sortable:!1}],newsItems:r.newsItems}},methods:{formatDate:function(t){return function(t,e){return new Date(Object(c.b)(t)).toLocaleDateString(e)}(t,this.$i18n.locale)}}}),d=(n(473),n(475),n(20)),f=n(46),v=n.n(f),m=n(425),h=n(432),_=n(570),w=n(424),x=n(568),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Parent"},[n("h2",[n("v-icon",{staticClass:"WhatsNew-heading-icon",attrs:{size:"24"}},[t._v("\n      mdi-information\n    ")]),t._v("\n    お知らせ一覧\n  ")],1),t._v(" "),n("v-card",[n("v-data-table",{staticClass:"cardTable",attrs:{headers:t.headers,items:t.newsItems,"hide-default-footer":!0,"fixed-header":!0,"items-per-page":t.itemsPerPage,page:t.page},on:{"update:page":function(e){t.page=e},"page-count":function(e){t.pageCount=e}},scopedSlots:t._u([{key:"item.title",fn:function(e){var o=e.item;return[o.link?n("a",{attrs:{href:o.link,target:"_blank",rel:"noopener"}},[t._v("\n          "+t._s(o.title)+"\n          "),n("v-icon",{staticClass:"ExternalLinkIcon",attrs:{size:"12","aria-label":"別タブで開く",role:"img","aria-hidden":!1}},[t._v("\n            mdi-open-in-new\n          ")])],1):n("span",[t._v(t._s(o.title))])]}},{key:"item.date",fn:function(e){var n=e.item;return[t._v("\n        "+t._s(t.formatDate(n.date))+"\n      ")]}}])}),t._v(" "),n("v-container",{staticClass:"py-4"},[n("v-pagination",{staticClass:"pagination",attrs:{length:t.pageCount},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1)],1)}),[],!1,null,"7bcd3fde",null);e.default=component.exports;v()(component,{VCard:m.a,VContainer:h.a,VDataTable:_.a,VIcon:w.a,VPagination:x.a})}}]);