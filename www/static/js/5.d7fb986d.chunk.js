(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{797:function(e,t,a){},803:function(e,t,a){"use strict";a.r(t);var n,c=a(17),r=a(0),l=a.n(r),u=(a(797),a(48)),i=a(94),d=a(16),s=a(10),o=a.n(s);!function(e){e[e["\u7cfb\u7edf\u6d88\u606f"]=0]="\u7cfb\u7edf\u6d88\u606f"}(n||(n={}));var b=n;t.default=function(){var e=Object(r.useRef)(null),t=Object(r.useState)([]),a=Object(c.a)(t,2),n=a[0],s=a[1],f=Object(r.useState)([{title:"",dataIndex:"hasRead",width:12,className:"unread-row",render:function(e){return!e&&l.a.createElement("i",{className:"unread-dot"},"\u25cf")}},{title:"\u6807\u9898\u5185\u5bb9",dataIndex:"content"},{title:"\u63d0\u4ea4\u65f6\u95f4",dataIndex:"createdAt",width:150},{title:"\u7c7b\u578b",dataIndex:"typeName",width:130}]),m=Object(c.a)(f,1)[0],w=Object(r.useCallback)(function(e){return Object(d.p)(e).then(function(e){return e.data.success&&e.data.data.rows.forEach(function(e){e.createdAt=o()(e.createdAt).format("YYYY-MM-DD HH:mm"),e.typeName=b[e.type]}),e})},[]),j=Object(r.useCallback)(function(t){var a=n.join();2===t&&(a="all"),Object(d.D)(a).then(function(t){t.data.success&&(s([]),e.current.getTableData())})},[n,e,s]);return Object(r.useEffect)(function(){e.current.getTableData()},[e]),l.a.createElement("div",{className:"inner-message"},l.a.createElement(i.a,{ref:e,getTableData:w,columns:m,rowSelection:{selectedRowKeys:n,onChange:function(e){return s(e)}}}),l.a.createElement("div",{className:"action-group"},l.a.createElement(u.a,{onClick:j.bind(null,1),disabled:n.length<=0},"\u6807\u8bb0\u5df2\u8bfb"),l.a.createElement(u.a,{onClick:j.bind(null,2)},"\u5168\u90e8\u5df2\u8bfb")))}}}]);