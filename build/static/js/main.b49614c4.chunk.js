(this.webpackJsonpTurboVax=this.webpackJsonpTurboVax||[]).push([[0],{103:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(0),i=a.n(s),c=a(26),r=a.n(c),o=(a(77),a(37)),l=a(9),j=a(142);function d(){return Object(n.jsxs)(j.a,{severity:"warning",children:[Object(n.jsx)("b",{children:"Update (1/20):"})," Due to a vaccine shortage, city/state reservations are now paused. We will continue to query for availability, so be sure to check in for updates."]})}var h=a(106),b=a(141);function x(){return Object(n.jsxs)(b.a,{p:2,children:[Object(n.jsx)(h.a,{children:"TurboVax finds the latest vaccine appointments from 37 city/state administration sites in NYC. There are two ways that you can use our tool:"}),Object(n.jsxs)("ol",{children:[Object(n.jsx)("li",{children:Object(n.jsxs)(h.a,{children:["Follow our Twitter account (",Object(n.jsx)("a",{target:"_blank",href:"https://twitter.com/turbovax",rel:"noreferrer",children:"@turbovax"}),") to be instantly notified when new appointments open up."]})}),Object(n.jsx)("li",{children:Object(n.jsx)(h.a,{children:"Stay on this page and refresh often. Appointments are will be published to this page in real-time."})})]})]})}var u=a(58),p=a(53),m=a(54),O=a(59),f=a(57),v=a(129),g=a(55),y=a.n(g),w=a(143),k=(Object(v.a)((function(e){return{root:{flexGrow:1},paper:{textAlign:"center",color:e.palette.text.secondary}}})),function(e){Object(O.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={sites:[]},e}return Object(m.a)(a,[{key:"mapPersonToVars",value:function(e){return{siteName:e.site_name,portalName:e.portal_name,updatedAt:e.updated_at,url:e.url,appointments:e.appointment_times,isAvailable:e.is_available}}},{key:"componentDidMount",value:function(){var e=this;y.a.get("https://spreadsheets.google.com/feeds/cells/10l-N3bDVpJPH5IWc3Jak2jzWr0BRNax65jjxzAo_tLs/5/public/full?alt=json").then((function(t){var a=t.data.feed.entry.map((function(t){return e.mapPersonToVars(JSON.parse(t.content.$t))}));a.sort((function(e,t){return e.updatedAt>t.updatedAt?-1:e.updatedAt<t.updatedAt?1:0}));e.setState({sites:a})}))}},{key:"render",value:function(){return Object(n.jsxs)(b.a,{children:[Object(n.jsx)(w.a,{mdDown:!0,children:Object(n.jsx)(F,{})}),Object(n.jsxs)(w.a,{lgUp:!0,children:[Object(n.jsx)("br",{}),Object(n.jsx)("br",{})]}),this.state.sites.map((function(e){return Object(n.jsx)(_,Object(u.a)({},e))}))]})}}]),a}(i.a.Component)),N=a(130),T=a(131),A=a(133),S=a(132),V=a(56),C=a.n(V),B=Object(v.a)({card:{marginBottom:"1rem"},reserveButton:{width:"100%"}});function _(e){var t=e.siteName,a=e.portalName,s=e.updatedAt,i=e.url,c=e.appointments,r=e.isAvailable,o=B();o.bullet;return Object(n.jsx)(N.a,{className:o.card,children:Object(n.jsx)(T.a,{children:Object(n.jsxs)(S.a,{container:!0,spacing:2,display:"flex",children:[Object(n.jsxs)(S.a,{item:!0,xs:12,sm:6,className:o.column,children:[Object(n.jsx)(h.a,{variant:"h5",component:"h3",children:t}),Object(n.jsx)(h.a,{className:o.pos,color:"textSecondary",children:a})]}),Object(n.jsxs)(S.a,{item:!0,xs:12,sm:3,children:[Object(n.jsx)(w.a,{smUp:!0,children:Object(n.jsx)(h.a,{variant:"overline",display:"inline",children:"Updated At:"})}),Object(n.jsx)(h.a,{variant:"overline",display:"inline",children:Object(n.jsx)(C.a,{fromNow:!0,children:s})})]}),Object(n.jsx)(w.a,{xsDown:!0,children:Object(n.jsx)(S.a,{item:!0,xs:12,sm:3,children:Object(n.jsx)(A.a,{size:"medium",variant:"contained",color:"primary",className:o.reserveButton,disabled:!r,href:i,target:"_blank",children:r?"Reserve":"No Appts"})})}),Object(n.jsx)(S.a,{item:!0,children:r?Object(n.jsx)(h.a,{children:c}):Object(n.jsx)(h.a,{children:"No availability at this time"})}),Object(n.jsx)(w.a,{smUp:!0,children:Object(n.jsx)(S.a,{item:!0,xs:12,sm:3,children:Object(n.jsx)(A.a,{size:"medium",variant:"contained",color:"primary",className:o.reserveButton,disabled:!r,href:i,target:"_blank",children:r?"Reserve":"No Appts"})})})]})})})}var H=Object(v.a)((function(e){return{root:{flexGrow:1},paper:{textAlign:"center",color:e.palette.text.secondary},title:{textAlign:"center"}}}));function U(){var e=H();return Object(n.jsx)(h.a,{variant:"h3",component:"h1",className:"".concat(e.title," header-text"),children:"TurboVax"})}var W=Object(v.a)({reserveButton:{width:"100%"}});function F(){var e=W();return Object(n.jsx)(b.a,{children:Object(n.jsx)(T.a,{className:"hide-small other",children:Object(n.jsxs)(S.a,{container:!0,spacing:2,display:"flex",children:[Object(n.jsx)(S.a,{item:!0,xs:12,sm:6,className:e.column,children:Object(n.jsx)(h.a,{variant:"overline",children:"Center/Portal"})}),Object(n.jsx)(S.a,{item:!0,xs:12,sm:3,children:Object(n.jsx)(h.a,{variant:"overline",children:"Updated at"})}),Object(n.jsx)(S.a,{item:!0,xs:12,sm:3,children:Object(n.jsx)(h.a,{variant:"overline",children:"Link"})})]})})})}var I=a(140),Y=a(135),q=a(139),P=a(138),J=a(134),D=a(136),L=a(137),z=a(105),E=Object(v.a)({table:{}});function G(e,t,a,n,s){return{name:e,url:t,numSites:a,status:n,statusUpdatedAt:s}}var M=[G("NYC Vaccine Hub","https://vaccinepod.nyc.gov",20,"Not accepting appointments","Jan 21"),G("Health and Hospitals","https://covid19.nychealthandhospitals.org/UnaffiliatedHealthCareWorkers",14,"Not accepting appointments","Jan 21"),G("NYS Vaccination Centers","https://am-i-eligible.covid19vaccine.health.ny.gov/",3,"Not accepting appointments","Jan 20")];function R(){var e=E();return Object(n.jsx)(J.a,{component:z.a,children:Object(n.jsxs)(Y.a,{className:e.table,"aria-label":"simple table",children:[Object(n.jsx)(D.a,{children:Object(n.jsxs)(L.a,{children:[Object(n.jsx)(P.a,{children:"Portal"}),Object(n.jsx)(P.a,{children:"Sites"}),Object(n.jsx)(P.a,{children:"Status"}),Object(n.jsx)(P.a,{children:"Updated at"})]})}),Object(n.jsx)(q.a,{children:M.map((function(e){return Object(n.jsxs)(L.a,{children:[Object(n.jsx)(P.a,{component:"th",scope:"row",children:Object(n.jsx)(I.a,{target:"_blank",href:e.url,children:e.name})}),Object(n.jsx)(P.a,{children:e.numSites}),Object(n.jsx)(P.a,{children:e.status}),Object(n.jsx)(P.a,{children:e.statusUpdatedAt})]},e.name)}))})]})})}function Q(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(x,{}),Object(n.jsx)(d,{}),Object(n.jsx)(k,{})]})}function K(){return Object(n.jsxs)("div",{children:[Object(n.jsxs)(h.a,{children:["TurboVax is a"," ",Object(n.jsx)(I.a,{target:"_blank",href:"https://twitter.com/turbovax",children:"Twitter bot (@turbovax)"})," ","that tweets the latest NYC vaccine appointments. Appointments are also published to this page in real-time."]}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)(h.a,{children:Object(n.jsx)(I.a,{href:"#supported-websites",children:"Supported Websites"})})}),Object(n.jsx)("li",{children:Object(n.jsx)(h.a,{children:Object(n.jsx)(I.a,{href:"#faq",children:"Frequently Asked Questions"})})}),Object(n.jsx)("li",{children:Object(n.jsx)(h.a,{children:Object(n.jsx)(I.a,{href:"#contact-us",children:"Contact Us"})})}),Object(n.jsx)("li",{children:Object(n.jsx)(h.a,{children:Object(n.jsx)(I.a,{href:"#special-thanks",children:"Special Thanks"})})})]}),Object(n.jsxs)("section",{class:"about-section",id:"supported-websites",children:[Object(n.jsx)("h2",{class:"header-text",children:"Supported Websites"}),Object(n.jsx)(h.a,{children:"We currently support 3 major government vaccine websites that handle reservations for 37 vaccine administration sites."}),Object(n.jsx)("br",{}),Object(n.jsx)(R,{})]}),Object(n.jsxs)("section",{class:"about-section",id:"faq",children:[Object(n.jsx)("h2",{class:"header-text",children:"Frequently Asked Questions"}),Object(n.jsxs)(b.a,{marginBottom:4,children:[Object(n.jsx)(h.a,{children:Object(n.jsx)("strong",{children:"How do I sign up for a vaccine in NYC?"})}),Object(n.jsxs)(h.a,{children:["Please refer to the"," ",Object(n.jsx)(I.a,{href:"https://www.nytimes.com/article/nyc-vaccine-shot.html",target:"_blank",children:Object(n.jsx)("em",{children:"New York Times"})})," ","and"," ",Object(n.jsx)(I.a,{href:"https://gothamist.com/news/new-york-city-vaccine-explainer",target:"_blank",children:"Gothamist"})," ","guides for general questions about the process."]})]}),Object(n.jsxs)(b.a,{marginBottom:4,children:[Object(n.jsx)(h.a,{children:Object(n.jsx)("strong",{children:"What can TurboVax do? What can't it do?"})}),Object(n.jsxs)(h.a,{children:["Simply put: TurboVax queries vaccine scheduling websites to find available appointment slots. It ",Object(n.jsx)("u",{children:"cannot"}),"book appointments on your behalf."]})]}),Object(n.jsxs)(b.a,{marginBottom:4,children:[Object(n.jsx)(h.a,{children:Object(n.jsx)("strong",{children:"Why did you build TurboVax?"})}),Object(n.jsx)(h.a,{children:"The existing vaccine scheduling system is complicated. Existing websites don't 1) make it easy to search for appointments or 2) notify people eligible groups when appointments do open up. By publishing open appointment slots on Twitter, we hope to give New Yorkers better odds at snagging an appointment."})]}),Object(n.jsxs)(b.a,{marginBottom:4,children:[Object(n.jsx)(h.a,{children:Object(n.jsx)("strong",{children:"Why couldn't I find the appointment that you tweeted?"})}),Object(n.jsx)(h.a,{children:"To be clear: it will be hard to find any appointment\u2014with or without the tool. Availability is limited and demand is high. At this very moment, there are probably hundreds (if not thousands) of others looking for appointments on the very same websites as you are. Open appointments are often snapped up in less than a minute."})]}),Object(n.jsxs)(b.a,{marginBottom:4,children:[Object(n.jsx)(h.a,{children:Object(n.jsx)("strong",{children:"How can I set myself up for success?"})}),Object(n.jsxs)(h.a,{children:[Object(n.jsx)(h.a,{children:'Every second matters. Login and pre-fill all required forms, so that you are ready to hit the "find availability" step at a moment\'s notice.'}),Object(n.jsx)("br",{}),Object(n.jsxs)(h.a,{children:[Object(n.jsx)("u",{children:Object(n.jsx)("a",{href:"https://covid19.nychealthandhospitals.org/UnaffiliatedHealthCareWorkers",target:"_blank",children:"For the NYC H+H website"})}),": Fill out your data. To check availability, select",Object(n.jsx)("code",{children:"I, [First Name] [Last Name]"})," checkbox. If no availability, unselect and reselect the checkbox to quickly recheck availability."]}),Object(n.jsxs)(h.a,{children:[Object(n.jsx)("u",{children:Object(n.jsx)("a",{href:"https://vaccinepod.nyc.gov",target:"_blank",children:"For the NYC Vaccine Hub website"})}),": Fill out your data until you are at Step 6. To check availability, select the relevant administration site and date. If no availability, click ",Object(n.jsx)("code",{children:"Previous"})," to recheck availability at another site."]})]})]}),Object(n.jsxs)(b.a,{marginBottom:4,children:[Object(n.jsx)(h.a,{children:Object(n.jsx)("strong",{children:"How reliable is TurboVax?"})}),Object(n.jsx)(h.a,{children:"Unclear! This is currently just some code running on some guy's laptop\u2014anything as much as a wifi outage could knock it out. We also do not have any special access to proprietary data; our work could be undone anytime if authorities want to shut this down."})]})]}),Object(n.jsxs)("section",{class:"about-section",id:"contact-us",children:[Object(n.jsx)("h2",{class:"header-text",children:"Contact Us"}),Object(n.jsxs)(h.a,{children:["This project is maintained by"," ",Object(n.jsx)(I.a,{href:"https://www.hugema.com",children:"Huge Ma"}),", who can be reached at ",Object(n.jsx)(I.a,{href:"mailto:huge@turbovax.info",children:"huge@turbovax.info"})]})]}),Object(n.jsxs)("section",{class:"about-section",id:"special-thanks",children:[Object(n.jsx)("h2",{class:"header-text",children:"Special Thanks"}),Object(n.jsx)(h.a,{children:"Thanks to Kelley coming up with the name. Thanks to Yu who fed me (and the cat) while I was heads-down on this for an entire weekend!"})]})]})}var $=Object(v.a)({container:{maxWidth:"800px",padding:"1rem",margin:"0 auto"},nav:{textAlign:"center",padding:0},li:{display:"inline-block",margin:"1rem"},a:{textDecoration:"none"},footer:{},footerText:{fontSize:".75rem",textAlign:"center",margin:"3rem"}});function X(){var e=$();return Object(n.jsxs)("div",{className:e.container,children:[Object(n.jsx)(U,{}),Object(n.jsx)(Z,{}),Object(n.jsx)(ee,{})]})}function Z(){var e=$();return Object(n.jsx)(o.a,{children:Object(n.jsxs)("nav",{children:[Object(n.jsxs)("ul",{className:e.nav,children:[Object(n.jsx)("li",{className:e.li,children:Object(n.jsx)(o.b,{to:"/",className:e.a,children:Object(n.jsx)(h.a,{children:"Home"})})}),Object(n.jsx)("li",{className:e.li,children:Object(n.jsx)(o.b,{to:"/about",className:e.a,children:Object(n.jsx)(h.a,{children:"About"})})})]}),Object(n.jsxs)(l.c,{children:[Object(n.jsx)(l.a,{exact:!0,path:"/",children:Object(n.jsx)(Q,{})}),Object(n.jsx)(l.a,{path:"/about",children:Object(n.jsx)(K,{})})]})]})})}function ee(){var e=$();return Object(n.jsxs)("footer",{className:e.footer,children:[Object(n.jsx)(h.a,{className:e.footerText,color:"textSecondary",children:"2021 \xa9 TurboVax"}),Object(n.jsx)(h.a,{className:e.footerText,color:"textSecondary",children:"This website is provided \u201cas is\u201d and TurboVax expressly disclaims all implied warranty of any kind, and is not responsible for liability for, damages of any kind arising out of use, reference to, or reliance on any information contained within site. The content published on our site does not constitute any form of recommendation or medical advice."})]})}var te=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,146)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),i(e),c(e)}))};r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(X,{})}),document.getElementById("root")),te()},77:function(e,t,a){}},[[103,1,2]]]);
//# sourceMappingURL=main.b49614c4.chunk.js.map