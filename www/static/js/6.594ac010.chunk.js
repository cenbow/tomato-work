(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{794:function(e,t,a){"use strict";var n=a(0),r=a(2),c=a.n(r),l=a(7);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var s=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){return n.createElement(l.a,null,function(t){var a,r=t.getPrefixCls,l=e.prefixCls,u=e.type,m=void 0===u?"horizontal":u,f=e.orientation,p=void 0===f?"center":f,b=e.className,d=e.children,y=e.dashed,v=s(e,["prefixCls","type","orientation","className","children","dashed"]),h=r("divider",l),O=p.length>0?"-"+p:p,E=c()(b,h,"".concat(h,"-").concat(m),(i(a={},"".concat(h,"-with-text").concat(O),d),i(a,"".concat(h,"-dashed"),!!y),a));return n.createElement("div",o({className:E},v),d&&n.createElement("span",{className:"".concat(h,"-inner-text")},d))})}},802:function(e,t,a){"use strict";a.r(t);var n=a(17),r=a(0),c=a.n(r),l=a(792),o=a(794),i=a(786),s=a(788),u=a(48),m=a(40),f=a(75),p=a(131),b=a(16),d=a(204),y=a.n(d);t.default=Object(m.b)(function(e){return{userInfo:e.user.userInfo}})(Object(f.g)(function(e){var t=e.userInfo,a=Object(p.a)(""),m=Object(r.useState)(""),f=Object(n.a)(m,2),d=f[0],v=f[1],h=a.value.trim();var O=Object(r.useCallback)(function(){d?Object(b.J)({sckey:d}):l.a.warn("\u8bf7\u6b63\u786e\u586b\u5199SCKEY")},[d]);return Object(r.useEffect)(function(){Object(b.x)().then(function(e){e.data.success&&v(e.data.data.serverChanSckey)})},[]),c.a.createElement("div",{className:"account-setting"},c.a.createElement(o.a,{orientation:"left"},"\u4fee\u6539\u5bc6\u7801"),c.a.createElement(i.a,{layout:"vertical",style:{width:"300px"}},c.a.createElement(i.a.Item,{label:"\u767b\u5f55\u540d"},c.a.createElement(s.a,{defaultValue:t.loginName,readOnly:!0,disabled:!0})),c.a.createElement(i.a.Item,{label:"\u5bc6\u7801"},c.a.createElement(s.a,Object.assign({type:"password",maxLength:32},a))),c.a.createElement(i.a.Item,null,c.a.createElement(u.a,{type:"primary",onClick:function(){h.length<6?l.a.warn("\u5bc6\u7801\u81f3\u5c116\u4f4d"):Object(b.I)({password:y()(h)})}},"\u63d0\u4ea4"))),c.a.createElement(o.a,{orientation:"left"},"Server\u9171\u914d\u7f6e"),c.a.createElement(i.a,{layout:"vertical",style:{width:"300px"}},c.a.createElement(i.a.Item,{label:"SCKEY"},c.a.createElement(s.a.Password,{maxLength:100,value:d,onChange:function(e){return v(e.target.value)}}),c.a.createElement("div",{style:{textAlign:"right",marginTop:"5px"}},c.a.createElement("a",{href:"http://sc.ftqq.com",target:"_blank"},"\u5982\u4f55\u83b7\u53d6\uff1f"))),c.a.createElement(i.a.Item,null,c.a.createElement(u.a,{type:"primary",onClick:O},"\u63d0\u4ea4"))))}))}}]);