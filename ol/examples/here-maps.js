(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{277:function(e,a,p){"use strict";p.r(a);var t,i,s,c,r=p(3),d=p(2),l=p(6),n=p(53),o="kDm0Jq1K4Ak7Bwtn8uvk",m="xnmvc4dKZrDfGlvQHXSvwQ",h=[{base:"base",type:"maptile",scheme:"normal.day",app_id:o,app_code:m},{base:"base",type:"maptile",scheme:"normal.day.transit",app_id:o,app_code:m},{base:"base",type:"maptile",scheme:"pedestrian.day",app_id:o,app_code:m},{base:"aerial",type:"maptile",scheme:"terrain.day",app_id:o,app_code:m},{base:"aerial",type:"maptile",scheme:"satellite.day",app_id:o,app_code:m},{base:"aerial",type:"maptile",scheme:"hybrid.day",app_id:o,app_code:m}],y=[];for(t=0,i=h.length;t<i;++t){var _=h[t];y.push(new l.a({visible:!1,preload:1/0,source:new n.a({url:(s="https://{1-4}.{base}.maps.cit.api.here.com/{type}/2.1/maptile/newest/{scheme}/{z}/{x}/{y}/256/png?app_id={app_id}&app_code={app_code}",c=_,s.replace("{base}",c.base).replace("{type}",c.type).replace("{scheme}",c.scheme).replace("{app_id}",c.app_id).replace("{app_code}",c.app_code)),attributions:"Map Tiles &copy; "+(new Date).getFullYear()+' <a href="http://developer.here.com">HERE</a>'})}))}new r.a({layers:y,loadTilesWhileInteracting:!0,target:"map",view:new d.a({center:[921371.9389,6358337.7609],zoom:10})});var b=document.getElementById("layer-select");function w(){for(var e=b.value,a=0,p=y.length;a<p;++a)y[a].setVisible(h[a].scheme===e)}b.addEventListener("change",w),w()}},[[277,0]]]);
//# sourceMappingURL=here-maps.js.map