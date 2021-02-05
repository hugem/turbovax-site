(this.webpackJsonpTurboVax=this.webpackJsonpTurboVax||[]).push([[0],{104:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(0),i=a.n(s),c=a(27),r=a.n(c),l=(a(78),a(44)),o=a(9);a(145);var j=a(107),h=a(144),d=a(132);function b(){return Object(n.jsxs)(h.a,{px:2,children:[Object(n.jsx)(j.a,{children:"TurboVax finds the latest vaccine appointments from 42 city and state-run administration sites in the NYC-region. There are two ways that you can use our tool:"}),Object(n.jsxs)("ol",{children:[Object(n.jsx)("li",{children:Object(n.jsxs)(j.a,{children:["Follow our Twitter account (",Object(n.jsx)(d.a,{target:"_blank",href:"https://twitter.com/turbovax",rel:"noreferrer",children:"@turbovax"}),") to be instantly notified when appointments open up."]})}),Object(n.jsx)("li",{children:Object(n.jsx)(j.a,{children:"Stay on this page and refresh often. Appointments are published to this page in real-time."})})]})]})}var x=a(63),u=a(37),m=a(38),p=a(43),O=a(42),v=a(133),f=a(39),y=a.n(f),g=(Object(v.a)((function(e){return{root:{flexGrow:1},paper:{textAlign:"center",color:e.palette.text.secondary}}})),function(e){Object(p.a)(a,e);var t=Object(O.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={sites:[]},e}return Object(m.a)(a,[{key:"mapPersonToVars",value:function(e){return{siteName:e.site_name,portalName:e.portal_name,lastAvailableAt:e.last_available_at,url:e.url,appointments:e.appointment_times,isAvailable:e.is_available,area:e.area}}},{key:"componentDidMount",value:function(){var e=this;y.a.get("https://spreadsheets.google.com/feeds/cells/10l-N3bDVpJPH5IWc3Jak2jzWr0BRNax65jjxzAo_tLs/5/public/full?alt=json").then((function(t){var a=t.data.feed.entry.map((function(t){return e.mapPersonToVars(JSON.parse(t.content.$t))}));a.sort((function(e,t){return e.isAvailable?-1:t.isAvailable?1:e.lastAvailableAt>t.lastAvailableAt?-1:e.lastAvailableAt<t.lastAvailableAt?1:0}));e.setState({sites:a})}))}},{key:"render",value:function(){return Object(n.jsx)(h.a,{children:this.state.sites.map((function(e){return Object(n.jsx)(H,Object(x.a)({},e))}))})}}]),a}(i.a.Component)),w=a(146),A=Object(v.a)((function(e){return{root:{flexGrow:1},paper:{textAlign:"center",color:e.palette.text.secondary},title:{textAlign:"center"}}}));function k(){var e=A();return Object(n.jsxs)("header",{children:[Object(n.jsx)(w.a,{xsDown:!0,children:Object(n.jsx)(h.a,{m:2,children:Object(n.jsx)(j.a,{variant:"h3",component:"h1",className:"".concat(e.title," header-text"),children:"TurboVax"})})}),Object(n.jsx)(w.a,{smUp:!0,children:Object(n.jsx)(j.a,{variant:"h4",component:"h1",className:"".concat(e.title," header-text"),children:"TurboVax"})})]})}var N=a(134),T=a(135);Object(v.a)({reserveButton:{width:"100%"}});var S=a(136),C=a(137),V=a(149),B=a(40),_=a.n(B),U=Object(v.a)((function(e){return{card:{marginBottom:"1rem"},reserveButton:{width:"100%"},chip:{margin:e.spacing(1)},cardContent:{paddingBottom:"16px!important"}}}));function H(e){var t=e.siteName,a=e.portalName,s=e.lastAvailableAt,i=e.url,c=e.appointments,r=e.isAvailable,l=e.area,o=U();o.bullet;return Object(n.jsx)(S.a,{className:o.card,variant:"outlined",children:Object(n.jsx)(N.a,{className:o.cardContent,children:Object(n.jsxs)(T.a,{container:!0,spacing:2,display:"flex",children:[Object(n.jsxs)(T.a,{item:!0,xs:12,sm:6,className:o.column,children:[Object(n.jsx)(j.a,{variant:"h6",component:"h3",children:t}),Object(n.jsx)(V.a,{size:"small",color:"primary",variant:"outlined",lassName:o.chip,label:a}),Object(n.jsx)(V.a,{size:"small",color:"primary",variant:"outlined",className:o.chip,label:l})]}),Object(n.jsxs)(T.a,{item:!0,xs:12,sm:3,children:[Object(n.jsx)(j.a,{variant:"overline",children:"Last available"}),Object(n.jsx)(j.a,{style:{fontSize:".9rem"},children:Object(n.jsx)(_.a,{fromNow:!0,children:s})})]}),Object(n.jsx)(w.a,{xsDown:!0,children:Object(n.jsx)(T.a,{item:!0,xs:12,sm:3,children:Object(n.jsx)(C.a,{size:"medium",variant:"contained",color:"primary",className:o.reserveButton,disabled:!r,href:i,target:"_blank",children:r?"Reserve":"No Availability"})})}),Object(n.jsx)(T.a,{item:!0,children:r&&Object(n.jsx)(j.a,{children:c})}),Object(n.jsx)(w.a,{smUp:!0,children:Object(n.jsx)(T.a,{item:!0,xs:12,sm:3,children:Object(n.jsx)(C.a,{size:"medium",variant:"contained",color:"primary",className:o.reserveButton,disabled:!r,href:i,target:"_blank",children:r?"Reserve":"No Availability"})})})]})})})}var W=a(139),F=a(143),Y=a(142),I=a(138),z=a(140),q=a(141),J=a(106),D=Object(v.a)({table:{}});function P(e,t,a,n,s){return{name:e,url:t,numSites:a,status:n,statusUpdatedAt:s}}var L=[P("NYC Vaccine Hub/Vax4NYC","https://vax4nyc.nyc.gov/patient/s/",16,"Active","Feb 3"),P("NYC Health and Hospitals","https://covid19.nychealthandhospitals.org/UnaffiliatedHealthCareWorkers",20,"Active","Jan 29"),P("NYS Vaccination Centers","https://am-i-eligible.covid19vaccine.health.ny.gov/",6,"Active","Jan 29")];function M(){var e=D();return Object(n.jsx)(I.a,{component:J.a,children:Object(n.jsxs)(W.a,{className:e.table,"aria-label":"simple table",children:[Object(n.jsx)(z.a,{children:Object(n.jsxs)(q.a,{children:[Object(n.jsx)(Y.a,{children:"Portal"}),Object(n.jsx)(Y.a,{children:"Sites"}),Object(n.jsx)(Y.a,{children:"Status"}),Object(n.jsx)(Y.a,{children:"Updated at"})]})}),Object(n.jsx)(F.a,{children:L.map((function(e){return Object(n.jsxs)(q.a,{children:[Object(n.jsx)(Y.a,{component:"th",scope:"row",children:Object(n.jsx)(d.a,{target:"_blank",href:e.url,children:e.name})}),Object(n.jsx)(Y.a,{children:e.numSites}),Object(n.jsx)(Y.a,{children:e.status}),Object(n.jsx)(Y.a,{children:e.statusUpdatedAt})]},e.name)}))})]})})}var R=function(e){Object(p.a)(a,e);var t=Object(O.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={lastUpdatedAt:null,hasAvailability:null},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;y.a.get("https://spreadsheets.google.com/feeds/cells/10l-N3bDVpJPH5IWc3Jak2jzWr0BRNax65jjxzAo_tLs/1/public/full?alt=json").then((function(t){var a=t.data.feed.entry;console.log(a[1].content.$t),e.setState({lastUpdatedAt:a[0].content.$t,hasAvailability:"TRUE"===a[1].content.$t})}))}},{key:"render",value:function(){return Object(n.jsx)(h.a,{my:5,children:Object(n.jsx)(S.a,{variant:"outlined",children:Object(n.jsxs)(T.a,{container:!0,align:"center",children:[Object(n.jsx)(T.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(h.a,{p:2,children:Object(n.jsxs)(j.a,{children:[Object(n.jsx)("b",{children:"Updated At: "}),this.state.lastUpdatedAt?Object(n.jsx)(_.a,{format:"MMM d, h:mmA",children:this.state.lastUpdatedAt}):""]})})}),Object(n.jsx)(T.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(h.a,{p:2,children:Object(n.jsxs)(j.a,{children:[Object(n.jsx)("b",{children:"Appointments: "}),null===this.state.hasAvailability?"":!0===this.state.hasAvailability?"Available \u2705":"Not Available \u274c"]})})})]})})})}}]),a}(i.a.Component);function E(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(b,{}),Object(n.jsx)(R,{}),Object(n.jsx)(g,{})]})}function $(){return Object(n.jsxs)("div",{children:[Object(n.jsxs)(j.a,{children:["TurboVax is a"," ",Object(n.jsx)(d.a,{target:"_blank",href:"https://twitter.com/turbovax",children:"Twitter bot (@turbovax)"})," ","that tweets the latest NYC vaccine appointments. Appointments are also published to this page in real-time."]}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)(j.a,{children:Object(n.jsx)(d.a,{href:"#supported-websites",children:"Supported Websites"})})}),Object(n.jsx)("li",{children:Object(n.jsx)(j.a,{children:Object(n.jsx)(d.a,{href:"#faq",children:"Frequently Asked Questions"})})}),Object(n.jsx)("li",{children:Object(n.jsx)(j.a,{children:Object(n.jsx)(d.a,{href:"#contact-us",children:"Contact Us"})})}),Object(n.jsx)("li",{children:Object(n.jsx)(j.a,{children:Object(n.jsx)(d.a,{href:"#special-thanks",children:"Special Thanks"})})})]}),Object(n.jsxs)("section",{class:"about-section",id:"supported-websites",children:[Object(n.jsx)("h2",{class:"header-text",children:"Supported Websites"}),Object(n.jsx)(j.a,{children:"We currently support 3 major government vaccine websites that handle reservations for 42 vaccine administration sites."}),Object(n.jsx)("br",{}),Object(n.jsx)(M,{})]}),Object(n.jsxs)("section",{class:"about-section",id:"faq",children:[Object(n.jsx)("h2",{class:"header-text",children:"Frequently Asked Questions"}),Object(n.jsxs)(h.a,{marginBottom:4,children:[Object(n.jsx)(j.a,{children:Object(n.jsx)("strong",{children:"How do I sign up for a vaccine in NYC?"})}),Object(n.jsxs)(j.a,{children:["Please refer to the"," ",Object(n.jsx)(d.a,{href:"https://www.nytimes.com/article/nyc-vaccine-shot.html",target:"_blank",children:Object(n.jsx)("em",{children:"New York Times"})})," ","and"," ",Object(n.jsx)(d.a,{href:"https://gothamist.com/news/new-york-city-vaccine-explainer",target:"_blank",children:"Gothamist"})," ","guides for general questions about the process."]})]}),Object(n.jsxs)(h.a,{marginBottom:4,children:[Object(n.jsx)(j.a,{children:Object(n.jsx)("strong",{children:"What can TurboVax do? What can't it do?"})}),Object(n.jsxs)(j.a,{children:["Simply put: TurboVax queries vaccine scheduling websites to find available appointment slots. It ",Object(n.jsx)("u",{children:"cannot"}),"book appointments on your behalf."]})]}),Object(n.jsxs)(h.a,{marginBottom:4,children:[Object(n.jsx)(j.a,{children:Object(n.jsx)("strong",{children:"Why did you build TurboVax?"})}),Object(n.jsx)(j.a,{children:"The existing vaccine scheduling system is complicated. Existing websites don't 1) make it easy to search for appointments or 2) notify people eligible groups when appointments do open up. By publishing open appointment slots on Twitter, we hope to give New Yorkers better odds at snagging an appointment."})]}),Object(n.jsxs)(h.a,{marginBottom:4,children:[Object(n.jsx)(j.a,{children:Object(n.jsx)("strong",{children:"Why couldn't I find the appointment that you tweeted?"})}),Object(n.jsx)(j.a,{children:"To be clear: it will be hard to find any appointment\u2014with or without the tool. Availability is limited and demand is high. At this very moment, there are probably hundreds (if not thousands) of others looking for appointments on the very same websites as you are. Open appointments are often snapped up in less than a minute."})]}),Object(n.jsxs)(h.a,{marginBottom:4,children:[Object(n.jsx)(j.a,{children:Object(n.jsx)("strong",{children:"How can I set myself up for success?"})}),Object(n.jsxs)(j.a,{children:[Object(n.jsx)(j.a,{children:'Every second matters. Login and pre-fill all required forms, so that you are ready to hit the "find availability" step at a moment\'s notice.'}),Object(n.jsx)("br",{}),Object(n.jsxs)(j.a,{children:[Object(n.jsx)("u",{children:Object(n.jsx)("a",{href:"https://covid19.nychealthandhospitals.org/UnaffiliatedHealthCareWorkers",target:"_blank",children:"For the NYC H+H website"})}),": Fill out your data. To check availability, select",Object(n.jsx)("code",{children:"I, [First Name] [Last Name]"})," checkbox. If no availability, unselect and reselect the checkbox to quickly recheck availability."]}),Object(n.jsxs)(j.a,{children:[Object(n.jsx)("u",{children:Object(n.jsx)("a",{href:"https://vax4nyc.nyc.gov/patient/s/",target:"_blank",children:"For the NYC Vaccine Hub (Vax4NYC) website"})}),": Fill out your data until you are at Step 3 (Schedule An Appointments). If no availability, select a new date to quickly to recheck availability without resubmitting form."]})]})]}),Object(n.jsxs)(h.a,{marginBottom:4,children:[Object(n.jsx)(j.a,{children:Object(n.jsx)("strong",{children:"How reliable is TurboVax?"})}),Object(n.jsx)(j.a,{children:"Unclear! This is currently just some code running on some guy's laptop\u2014anything as much as a wifi outage could knock it out. We also do not have any special access to proprietary data; our work could be undone anytime if authorities want to shut this down."})]})]}),Object(n.jsxs)("section",{class:"about-section",id:"contact-us",children:[Object(n.jsx)("h2",{class:"header-text",children:"Contact Us"}),Object(n.jsxs)(j.a,{children:["This project is maintained by"," ",Object(n.jsx)(d.a,{href:"https://www.hugema.com",children:"Huge Ma"}),", who can be reached at ",Object(n.jsx)(d.a,{href:"mailto:huge@turbovax.info",children:"huge@turbovax.info"})]})]}),Object(n.jsxs)("section",{class:"about-section",id:"special-thanks",children:[Object(n.jsx)("h2",{class:"header-text",children:"Special Thanks"}),Object(n.jsx)(j.a,{children:"Thanks to Kelley coming up with the name. Thanks to Yu who fed me (and the cat) while I was heads-down on this for an entire weekend!"})]})]})}var G=Object(v.a)({container:{maxWidth:"800px",padding:"1rem",margin:"0 auto"},nav:{textAlign:"center",padding:0},li:{display:"inline-block",margin:"1rem"},a:{textDecoration:"none"},footer:{},footerText:{fontSize:".75rem",textAlign:"center",margin:"3rem 0"}});function Q(){var e=G();return Object(n.jsxs)("div",{className:e.container,children:[Object(n.jsx)(k,{}),Object(n.jsx)(K,{}),Object(n.jsx)(X,{})]})}function K(){var e=G();return Object(n.jsx)(l.a,{children:Object(n.jsxs)("nav",{children:[Object(n.jsxs)("ul",{className:e.nav,children:[Object(n.jsx)("li",{className:e.li,children:Object(n.jsx)(l.b,{to:"/",className:e.a,children:Object(n.jsx)(j.a,{children:"Home"})})}),Object(n.jsx)("li",{className:e.li,children:Object(n.jsx)(l.b,{to:"/about",className:e.a,children:Object(n.jsx)(j.a,{children:"About"})})})]}),Object(n.jsxs)(o.c,{children:[Object(n.jsx)(o.a,{exact:!0,path:"/",children:Object(n.jsx)(E,{})}),Object(n.jsx)(o.a,{path:"/about",children:Object(n.jsx)($,{})})]})]})})}function X(){var e=G();return Object(n.jsxs)("footer",{className:e.footer,children:[Object(n.jsx)(j.a,{className:e.footerText,color:"textSecondary",children:"2021 \xa9 TurboVax"}),Object(n.jsx)(j.a,{className:e.footerText,color:"textSecondary",children:"This website is provided \u201cas is\u201d and TurboVax expressly disclaims all implied warranty of any kind, and is not responsible for liability for, damages of any kind arising out of use, reference to, or reliance on any information contained within site. The content published on our site does not constitute any form of recommendation or medical advice."})]})}var Z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,150)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),i(e),c(e)}))};r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(Q,{})}),document.getElementById("root")),Z()},78:function(e,t,a){}},[[104,1,2]]]);
//# sourceMappingURL=main.9ddafc92.chunk.js.map