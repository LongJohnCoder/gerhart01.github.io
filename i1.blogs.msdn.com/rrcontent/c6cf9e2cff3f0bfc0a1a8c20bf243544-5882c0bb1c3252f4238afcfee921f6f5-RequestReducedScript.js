(function(n){function f(i,r,f,e){var o={data:e||e===0||e===!1?e:r?r.data:{},_wrap:r?r._wrap:null,tmpl:null,parent:r||null,nodes:[],calls:tt,nest:it,wrap:k,html:d,update:g};return i&&n.extend(o,i,{nodes:[],parent:r}),f&&(o.tmpl=f,o._ctnt=o._ctnt||o.tmpl(n,o),o.key=++u,(l.length?h:t)[u]=o),o}function o(t,i,u){var f,e=u?n.map(u,function(n){return typeof n=="string"?t.key?n.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g,"$1 "+r+'="'+t.key+'" $2'):n:o(n,t,n._ctnt)}):t;return i?e:(e=e.join(""),e.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/,function(t,i,r,u){f=n(r).get(),v(f),i&&(f=c(i).concat(f)),u&&(f=f.concat(c(u)))}),f?f:c(e))}function c(t){var i=document.createElement("div");return i.innerHTML=t,n.makeArray(i.childNodes)}function b(t){return new Function("jQuery","$item","var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('"+n.trim(t).replace(/([\\'])/g,"\\$1").replace(/[\r\t\n]/g," ").replace(/\$\{([^\}]*)\}/g,"{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,function(t,i,r,u,f,o,s){var l=n.tmpl.tag[r],a,h,c;if(!l)throw"Unknown template tag: "+r;return a=l._default||[],o&&!/\w$/.test(f)&&(f+=o,o=""),f?(f=e(f),s=s?","+e(s)+")":o?")":"",h=o?f.indexOf(".")>-1?f+e(o):"("+f+").call($item"+s:f,c=o?h:"(typeof("+f+")==='function'?("+f+").call($item):("+f+"))"):c=h=a.$1||"null",u=e(u),"');"+l[i?"close":"open"].split("$notnull_1").join(f?"typeof("+f+")!=='undefined' && ("+f+")!=null":"true").split("$1a").join(c).split("$1").join(h).split("$2").join(u||a.$2||"")+"__.push('"})+"');}return __;")}function a(t,i){t._wrap=o(t,!0,n.isArray(i)?i:[w.test(i)?i:n(i).html()]).join("")}function e(n){return n?n.replace(/\\'/g,"'").replace(/\\\\/g,"\\"):null}function nt(n){var t=document.createElement("div");return t.appendChild(n.cloneNode(!0)),t.innerHTML}function v(e){function a(e){function a(n){n=n+y,o=p[n]=p[n]||f(o,t[o.parent.key+y]||o.parent)}var v,s=e,c,o,l;if(l=e.getAttribute(r)){while(s.parentNode&&(s=s.parentNode).nodeType===1&&!(v=s.getAttribute(r)));v!==l&&(s=s.parentNode?s.nodeType===11?0:s.getAttribute(r)||0:0,(o=t[l])||(o=h[l],o=f(o,t[s]||h[s]),o.key=++u,t[u]=o),i&&a(l)),e.removeAttribute(r)}else i&&(o=n.data(e,"tmplItem"))&&(a(o.key),t[o.key]=o,s=n.data(e.parentNode,"tmplItem"),s=s?s.key:0);if(o){for(c=o;c&&c.key!=s;)c.nodes.push(e),c=c.parent;delete o._ctnt,delete o._wrap,n.data(e,"tmplItem",o)}}for(var y="_"+i,c,l,p={},o,s=0,v=e.length;s<v;s++)if((c=e[s]).nodeType===1){for(l=c.getElementsByTagName("*"),o=l.length-1;o>=0;o--)a(l[o]);a(c)}}function tt(n,t,i,r){if(!n)return l.pop();l.push({_:n,tmpl:t,item:this,data:i,options:r})}function it(t,i,r){return n.tmpl(n.template(t),i,r,this)}function k(t,i){var r=t.options||{};return r.wrapped=i,n.tmpl(n.template(t.tmpl),t.data,r,t.item)}function d(t,i){var r=this._wrap;return n.map(n(n.isArray(r)?r.join(""):r).filter(t||"*"),function(n){return i?n.innerText||n.textContent:n.outerHTML||nt(n)})}function g(){var t=this.nodes;n.tmpl(null,null,null,this).insertBefore(t[0]),n(t).remove()}var y=n.fn.domManip,r="_tmplitem",w=/^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,t={},h={},s,p={key:0,data:{}},u=0,i=0,l=[];n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(r,u){n.fn[r]=function(f){var o=[],h=n(f),l,e,a,v,c=this.length===1&&this[0].parentNode;if(s=t||{},c&&c.nodeType===11&&c.childNodes.length===1&&h.length===1)h[u](this[0]),o=this;else{for(e=0,a=h.length;e<a;e++)i=e,l=(e>0?this.clone(!0):this).get(),n(h[e])[u](l),o=o.concat(l);i=0,o=this.pushStack(o,r,h.selector)}return v=s,s=null,n.tmpl.complete(v),o}}),n.fn.extend({tmpl:function(t,i,r){return n.tmpl(this[0],t,i,r)},tmplItem:function(){return n.tmplItem(this[0])},template:function(t){return n.template(t,this[0])},domManip:function(r,u,f){if(r[0]&&n.isArray(r[0])){for(var h=n.makeArray(arguments),c=r[0],l=c.length,e=0,o;e<l&&!(o=n.data(c[e++],"tmplItem")););o&&i&&(h[2]=function(t){n.tmpl.afterManip(this,t,f)}),y.apply(this,h)}else y.apply(this,arguments);return i=0,!s&&n.tmpl.complete(t),this}}),n.extend({tmpl:function(i,r,u,e){var s,c=!e;if(c)e=p,i=n.template[i]||n.template(null,i),h={};else if(!i)return i=e.tmpl,t[e.key]=e,e.nodes=[],e.wrapped&&a(e,e.wrapped),n(o(e,null,e.tmpl(n,e)));return i?(typeof r=="function"&&(r=r.call(e||{})),u&&u.wrapped&&a(u,u.wrapped),s=n.isArray(r)?n.map(r,function(n){return n?f(u,e,i,n):null}):[f(u,e,i,r)],c?n(o(e,null,s)):s):[]},tmplItem:function(t){var i;for(t instanceof n&&(t=t[0]);t&&t.nodeType===1&&!(i=n.data(t,"tmplItem"))&&(t=t.parentNode););return i||p},template:function(t,i){return i?(typeof i=="string"?i=b(i):i instanceof n&&(i=i[0]||{}),i.nodeType&&(i=n.data(i,"tmpl")||n.data(i,"tmpl",b(i.innerHTML))),typeof t=="string"?n.template[t]=i:i):t?typeof t!="string"?n.template(null,t):n.template[t]||n.template(null,w.test(t)?t:n(t)):null},encode:function(n){return(""+n).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")}}),n.extend(n.tmpl,{tag:{tmpl:{_default:{$2:"null"},open:"if($notnull_1){__=__.concat($item.nest($1,$2));}"},wrap:{_default:{$2:"null"},open:"$item.calls(__,$1,$2);__=[];",close:"call=$item.calls();__=call._.concat($item.wrap(call,__));"},each:{_default:{$2:"$index, $value"},open:"if($notnull_1){$.each($1a,function($2){with(this){",close:"}});}"},"if":{open:"if(($notnull_1) && $1a){",close:"}"},"else":{_default:{$1:"true"},open:"}else if(($notnull_1) && $1a){"},html:{open:"if($notnull_1){__.push($1a);}"},"=":{_default:{$1:"$data"},open:"if($notnull_1){__.push($.encode($1a));}"},"!":{open:""}},complete:function(){t={}},afterManip:function(t,r,u){var f=r.nodeType===11?n.makeArray(r.childNodes):r.nodeType===1?[r]:[];u.call(t,r),v(f),i++}})})(jQuery)