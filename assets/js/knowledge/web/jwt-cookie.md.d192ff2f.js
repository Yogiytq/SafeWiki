(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[17],{147:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return s}));t(130),t(0);var n=t(93);function c(){return(c=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function r(e,a){if(null==e)return{};var t,n,c=function(e,a){if(null==e)return{};var t,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(c[t]=e[t]);return c}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var b={},l="wrapper";function s(e){var a=e.components,t=r(e,["components"]);return Object(n.b)(l,c({},b,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("h1",{className:"__internal",id:"jwt-cookie伪造"},"JWT-Cookie伪造",Object(n.b)("a",c({parentName:"h1"},{href:"#jwt-cookie%E4%BC%AA%E9%80%A0","aria-hidden":!0,className:"anchor"}),"#")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Cookie是用来存储用户信息的"),Object(n.b)("p",{parentName:"blockquote"},"我们通过伪造cookie，可把自己假扮成其它用户(例如admin)，获得他的权限。")),Object(n.b)("h2",{className:"__internal",id:"伪造原理"},"伪造原理",Object(n.b)("a",c({parentName:"h2"},{href:"#%E4%BC%AA%E9%80%A0%E5%8E%9F%E7%90%86","aria-hidden":!0,className:"anchor"}),"#")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"JSON WEB Token"),"（",Object(n.b)("strong",{parentName:"p"},"JWT"),"），是一种基于JSON的、用于在网络上声明某种主张的令牌（token）。"),Object(n.b)("p",null,"JWT通常由三部分组成: 头信息（header）, 消息体（payload）和签名（signature）"),Object(n.b)("p",null,"头信息指定了该JWT使用的签名算法:"),Object(n.b)("div",{className:"rcpress-highlight","data-language":"text"},Object(n.b)("pre",c({parentName:"div"},{className:"language-text"}),Object(n.b)("code",c({parentName:"pre"},{className:"language-text"}),'header = \'{"alg":"HS256","typ":"JWT"}\''))),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"HS256")," 表示使用了 HMAC-SHA256 来生成签名。"),Object(n.b)("p",null,"消息体包含了JWT的意图："),Object(n.b)("div",{className:"rcpress-highlight","data-language":"text"},Object(n.b)("pre",c({parentName:"div"},{className:"language-text"}),Object(n.b)("code",c({parentName:"pre"},{className:"language-text"}),'payload = \'{"login":"admin","iat":1422779638}\'//iat表示令牌生成的时间'))),Object(n.b)("p",null,"未签名的令牌由",Object(n.b)("inlineCode",{parentName:"p"},"base64url"),"编码的头信息和消息体拼接而成（使用”.”分隔），签名则通过私有的key计算而成："),Object(n.b)("div",{className:"rcpress-highlight","data-language":"text"},Object(n.b)("pre",c({parentName:"div"},{className:"language-text"}),Object(n.b)("code",c({parentName:"pre"},{className:"language-text"}),"key = 'secretkey'  unsignedToken = encodeBase64(header) + '.' + encodeBase64(payload)  signature = HMAC-SHA256(key, unsignedToken)"))),Object(n.b)("p",null,"最后在未签名的令牌尾部拼接上",Object(n.b)("inlineCode",{parentName:"p"},"base64url"),"编码的签名（同样使用”.”分隔）就是JWT了："),Object(n.b)("div",{className:"rcpress-highlight","data-language":"text"},Object(n.b)("pre",c({parentName:"div"},{className:"language-text"}),Object(n.b)("code",c({parentName:"pre"},{className:"language-text"}),"token = encodeBase64(header) + '.' + encodeBase64(payload) + '.' + encodeBase64(signature) # token看起来像这样: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dnZWRJbkFzIjoiYWRtaW4iLCJpYXQiOjE0MjI3Nzk2Mzh9.gzSraSYS8EXBxLN_oWnFSRgCzcmJmMjLiuyu5CSpyHI"))),Object(n.b)("h2",{className:"__internal",id:"伪造方法"},"伪造方法",Object(n.b)("a",c({parentName:"h2"},{href:"#%E4%BC%AA%E9%80%A0%E6%96%B9%E6%B3%95","aria-hidden":!0,className:"anchor"}),"#")),Object(n.b)("p",null,"一、爆破私有密钥"),Object(n.b)("p",null,"工具：",Object(n.b)("a",c({parentName:"p"},{href:"https://github.com/brendan-rius/c-jwt-cracker",target:"_blank"}),"c-jwt-cracker")),Object(n.b)("div",{className:"rcpress-highlight","data-language":"text"},Object(n.b)("pre",c({parentName:"div"},{className:"language-text"}),Object(n.b)("code",c({parentName:"pre"},{className:"language-text"}),"./jwtcrack eyJhbGci.eyJsb.gzSraSY #后边跟整个token"))),Object(n.b)("p",null,"二、伪造admin权限"),Object(n.b)("p",null,Object(n.b)("a",c({parentName:"p"},{href:"https://jwt.io/",target:"_blank"}),"https://jwt.io/")),Object(n.b)("p",null,"用上边的网站把权限伪造成",Object(n.b)("inlineCode",{parentName:"p"},"admin"),"管理员权限"),Object(n.b)("h2",{className:"__internal",id:"防御措施"},"防御措施",Object(n.b)("a",c({parentName:"h2"},{href:"#%E9%98%B2%E5%BE%A1%E6%8E%AA%E6%96%BD","aria-hidden":!0,className:"anchor"}),"#")),Object(n.b)("p",null,"使用复杂的secretkey"),Object(n.b)("p",null,"更新正在使用的JWT库，确保没有CVE（2018-0114）"))}s.isMDXComponent=!0,s=s}}]);