"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([["7293"],{812:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var i=r(6773);r(1699);var a=r(459),n=r(7038),s=r(5959),l=r(5465),c=r(1032),d=r(4263);function h(e){let{year:t,posts:r}=e,n=(0,l.P)({day:"numeric",month:"long",timeZone:"UTC"}),s=e=>n.format(new Date(e));return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.Z,{as:"h3",id:t,children:t}),(0,i.jsx)("ul",{children:r.map(e=>(0,i.jsx)("li",{children:(0,i.jsxs)(a.Z,{to:e.metadata.permalink,children:[s(e.metadata.date)," - ",e.metadata.title]})},e.metadata.date))})]})}function o(e){let{years:t}=e;return(0,i.jsx)("section",{className:"margin-vert--lg",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"row",children:t.map((e,t)=>(0,i.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,i.jsx)(h,{...e})},t))})})})}function m(e){let{archive:t}=e,r=(0,n.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),a=(0,n.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),l=Array.from(t.blogPosts.reduce((e,t)=>{let r=t.metadata.date.split("-")[0],i=e.get(r)??[];return e.set(r,[t,...i])},new Map),e=>{let[t,r]=e;return{year:t,posts:r}});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.d,{title:r,description:a}),(0,i.jsxs)(c.Z,{children:[(0,i.jsx)("header",{className:"hero hero--primary",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)(d.Z,{as:"h1",className:"hero__title",children:r}),(0,i.jsx)("p",{className:"hero__subtitle",children:a})]})}),(0,i.jsx)("main",{children:l.length>0&&(0,i.jsx)(o,{years:l})})]})]})}},5465:function(e,t,r){r.d(t,{P:function(){return a}});var i=r(339);function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{i18n:{currentLocale:t}}=(0,i.Z)(),r=function(){let{i18n:{currentLocale:e,localeConfigs:t}}=(0,i.Z)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:r,...e})}}}]);