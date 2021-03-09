(this.webpackJsonpTurboVax=this.webpackJsonpTurboVax||[]).push([[0],{113:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a(1),r=a.n(i),s=a(33),c=a.n(s),o=(a(87),a(13)),l=a(30),h=a(9),b=a(158),j=a(143),d=a(157);function u(){return Object(n.jsx)(d.a,{my:5,children:Object(n.jsxs)(b.a,{severity:"info",children:[Object(n.jsx)("b",{children:"Update (3/1 12PM):"})," TurboVax is back online. Please take a moment to educate yourself on"," ",Object(n.jsx)(j.a,{target:"_blank",href:"https://twitter.com/turbovax/status/1365713333287079953",rel:"noreferrer",children:"anti-Asian hate"})," ","and what you can do to help end it."]})})}var m=a(73),x=a(34),O=a(144);function p(){var e=Object(x.a)(),t=Object(O.a)(e.breakpoints.up("sm"));return Object(n.jsxs)(d.a,{px:t?3:0,children:[Object(n.jsx)(m.a,{children:"TurboVax finds appointments from 53 city and state-run vaccine sites in the NYC area."}),Object(n.jsxs)("ol",{children:[Object(n.jsx)("li",{children:Object(n.jsxs)(m.a,{children:["Follow our Twitter (",Object(n.jsx)(j.a,{target:"_blank",href:"https://twitter.com/turbovax",rel:"noreferrer",children:"@turbovax"}),") to be instantly notified when appointments open up."]})}),Object(n.jsx)("li",{children:Object(n.jsx)(m.a,{children:"Refresh this page often. Appointments are published to this page in real-time."})})]}),Object(n.jsxs)(m.a,{children:["Availability for local clinics/pharmacies can be found at CDC's"," ",Object(n.jsx)(j.a,{target:"_blank",href:"https://vaccinefinder.org/",rel:"noreferrer",children:"VaccineFinder"})," ","or"," ",Object(n.jsx)(j.a,{target:"_blank",href:"https://nycvaccinelist.com/",rel:"noreferrer",children:"NYC Vaccine List"}),". If you found TurboVax to be helpful, consider making a donation to"," ",Object(n.jsx)(j.a,{target:"_blank",href:"https://www.welcometochinatown.com/",rel:"noreferrer",children:"Welcome to Chinatown"}),"."]})]})}var f=a(23),v=a(146),g=a(145),y=a(49),w=a.n(y),k=a(40),A=a.n(k);function C(e){var t=e.lastUpdatedAt,a=e.foundAvailability,i=Object(x.a)(),r=Object(O.a)(i.breakpoints.up("sm"))?{}:{borderTop:1,borderColor:"rgba(0, 0, 0, 0.12)"};return Object(n.jsx)(d.a,{my:5,children:Object(n.jsx)(g.a,{variant:"outlined",children:Object(n.jsxs)(v.a,{container:!0,align:"center",children:[Object(n.jsx)(v.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(d.a,{p:2,children:Object(n.jsxs)(m.a,{children:[Object(n.jsx)("b",{children:"Updated at: "}),t?Object(n.jsx)(A.a,{format:"MMM D, h:mmA",children:t}):""]})})}),Object(n.jsx)(v.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(d.a,Object(f.a)(Object(f.a)({p:2},r),{},{children:Object(n.jsxs)(m.a,{children:[Object(n.jsx)("b",{children:"Appointments: "}),null===a?"":!0===a?"Available \u2705":"Not Available \u274c"]})}))})]})})})}var S=a(66),T=a(67),N=a(70),U=a(69),_=a(147),V=(Object(_.a)((function(e){return{root:{flexGrow:1}}})),function(e){Object(N.a)(a,e);var t=Object(U.a)(a);function a(){var e;Object(S.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={availableSites:[],unavailableSites:[],showUnavailable:!1,lastUpdatedAt:null},e.handleChange=function(t){var a=!e.state.showUnavailable;localStorage.setItem("showUnavailable",a),e.setState(Object(f.a)(Object(f.a)({},e.state),{},{showUnavailable:a}))},e}return Object(T.a)(a,[{key:"mapPersonToVars",value:function(e){return{appointments:e.appointment_times.split(";"),area:e.area,count:e.appointment_count,isActive:e.is_active,isAvailable:e.is_available,lastAvailableAt:e.last_available_at,portalName:e.portal_name,siteName:e.site_name,updatedAt:e.updated_at,url:e.url}}},{key:"componentDidMount",value:function(){var e=this,t="true"==localStorage.getItem("showUnavailable");this.setState({showUnavailable:t}),w.a.get("https://spreadsheets.google.com/feeds/cells/1NNZJWI7BYlajdBcqkEpOXXq6EZZyMd-zSIGKHNgS99w/4/public/full?alt=json").then((function(a){var n=a.data.feed.entry.filter((function(e){return""!==e.content.$t})).map((function(t){return e.mapPersonToVars(JSON.parse(t.content.$t))})).filter((function(e){return e.isActive})).sort((function(e,t){return e.lastAvailableAt>t.lastAvailableAt?-1:e.lastAvailableAt<t.lastAvailableAt?1:0})),i=n.filter((function(e){return e.isAvailable})),r=n.filter((function(e){return!e.isAvailable})),s=n.map((function(e){return e.updatedAt})).sort().reverse()[0];e.setState({availableSites:i,unavailableSites:r,showUnavailable:t,lastUpdatedAt:s})}))}},{key:"render",value:function(){var e=this.state.availableSites.length>0;return Object(n.jsxs)("div",{children:[Object(n.jsx)(C,{lastUpdatedAt:this.state.lastUpdatedAt,foundAvailability:e}),Object(n.jsxs)(d.a,{children:[Object(n.jsx)(te,{sites:this.state.availableSites}),Object(n.jsx)(re,{foundAvailability:e,handleChange:this.handleChange,showUnavailable:this.state.showUnavailable}),this.state.showUnavailable&&Object(n.jsx)(te,{sites:this.state.unavailableSites})]})]})}}]),a}(r.a.Component)),B=a.p+"static/media/logo.7772ea20.png",I=Object(_.a)((function(e){var t;return{nav:{textAlign:"center",padding:0},li:{display:"inline-block",margin:"1rem"},a:{all:"unset"},logo:(t={},Object(o.a)(t,e.breakpoints.down("sm"),{maxWidth:"150px"}),Object(o.a)(t,"maxWidth","250px"),Object(o.a)(t,"width","100%"),t)}}));function W(){var e=I(),t=Object(x.a)(),a=Object(O.a)(t.breakpoints.up("sm"))?{margin:"2rem 0"}:{margin:"1rem 0"};return Object(n.jsxs)("header",{children:[Object(n.jsx)(d.a,{align:"center",children:Object(n.jsx)(l.b,{to:"",children:Object(n.jsx)("img",{className:e.logo,src:B,alt:"TurboVax logo"})})}),Object(n.jsx)("nav",{style:a,children:Object(n.jsxs)("ul",{className:e.nav,children:[Object(n.jsx)("li",{className:e.li,children:Object(n.jsx)(l.b,{to:"",className:e.a,children:Object(n.jsx)(j.a,{children:"Home"})})}),Object(n.jsx)("li",{className:e.li,children:Object(n.jsx)(l.b,{to:"/about",className:e.a,children:Object(n.jsx)(j.a,{children:"About"})})})]})})]})}var Y=a(148);Object(_.a)({reserveButton:{width:"100%"}});var D=a(149),F=a(159),H=a(162),q=a(68),z=a.n(q),P=Object(_.a)((function(e){var t;return{title:(t={},Object(o.a)(t,e.breakpoints.down("sm"),{fontSize:"1.1rem"}),Object(o.a)(t,"fontSize","1.2rem"),t),appointmentText:Object(o.a)({},e.breakpoints.down("sm"),{fontSize:"0.9rem"}),card:{marginBottom:"1rem"},reserveButton:{width:"100%"},chip:{marginRight:e.spacing(1),marginBottom:e.spacing(1)},cardContent:{paddingBottom:"16px!important"},lastAvailableAtLabel:{lineHeight:"initial",fontSize:".75rem"},lastAvailableAt:{marginTop:".75rem",fontSize:".8rem",textAlign:"center"}}}));function L(e){var t=e.count,a=e.siteName,i=e.portalName,r=e.lastAvailableAt,s=e.url,c=e.appointments,o=e.isAvailable,l=e.area,h=P(),b=(h.bullet,Object(x.a)()),j=Object(O.a)(b.breakpoints.up("sm"))?"appointment":"appt",d=Object(n.jsxs)("span",{children:[t.toLocaleString()," ",Object(n.jsx)(z.a,{singular:j,count:t,showCount:!1})]}),u=(Object(O.a)(b.breakpoints.up("sm")),o?"Checked":"Available");return Object(n.jsx)(g.a,{className:h.card,variant:"outlined",children:Object(n.jsx)(Y.a,{className:h.cardContent,children:Object(n.jsxs)(v.a,{container:!0,spacing:1,display:"flex",children:[Object(n.jsxs)(v.a,{container:!0,item:!0,spacing:2,xs:12,sm:9,className:h.column,children:[Object(n.jsx)(v.a,{xs:12,item:!0,children:Object(n.jsx)(m.a,{variant:"h6",component:"h3",className:h.title,children:a})}),Object(n.jsxs)(v.a,{xs:12,item:!0,children:[Object(n.jsx)(H.a,{size:"small",color:"primary",variant:"outlined",className:h.chip,label:i}),Object(n.jsx)(H.a,{size:"small",color:"primary",variant:"outlined",className:h.chip,label:l}),o&&Object(n.jsx)(H.a,{size:"small",color:"primary",variant:"outlined",className:h.chip,label:d})]}),o&&Object(n.jsx)(v.a,{item:!0,xs:12,children:c.map((function(e){return Object(n.jsx)(m.a,{className:h.appointmentText,children:e})}))})]}),Object(n.jsx)(F.a,{xsDown:!0,children:Object(n.jsxs)(v.a,{spacing:0,container:!0,item:!0,xs:12,sm:3,direction:"column",justify:"flex-start",children:[Object(n.jsx)(v.a,{item:!0,children:Object(n.jsx)(D.a,{size:"medium",variant:"contained",color:"primary",className:h.reserveButton,disabled:!o,href:s,target:"_blank",children:o?"Reserve":"No Availability"})}),Object(n.jsx)(v.a,{item:!0,children:Object(n.jsxs)(m.a,{className:h.lastAvailableAt,children:[u," ",Object(n.jsx)(A.a,{fromNow:!0,children:r})]})})]})}),Object(n.jsx)(F.a,{smUp:!0,children:Object(n.jsxs)(v.a,{spacing:0,container:!0,item:!0,xs:12,sm:3,direction:"column",justify:"flex-start",children:[Object(n.jsx)(v.a,{item:!0,children:Object(n.jsx)(D.a,{size:"medium",variant:"contained",color:"primary",className:h.reserveButton,disabled:!o,href:s,target:"_blank",children:o?"Reserve":"No Availability"})}),Object(n.jsx)(v.a,{item:!0,children:Object(n.jsxs)(m.a,{className:h.lastAvailableAt,children:[u," ",Object(n.jsx)(A.a,{fromNow:!0,children:r})]})})]})})]})})})}var E=a(151),M=a(155),R=a(154),G=a(150),J=a(152),Z=a(153),K=a(116),Q=Object(_.a)({table:{}});function X(e,t,a,n,i){return{name:e,url:t,numSites:a,status:n,statusUpdatedAt:i}}var $=[X("NYC Vaccine Hub/Vax4NYC","https://vax4nyc.nyc.gov/patient/s/",24,"Active","Feb 26"),X("NYC Health and Hospitals","https://covid19.nychealthandhospitals.org/UnaffiliatedHealthCareWorkers",21,"Active","Feb 8"),X("NYS Vaccination Centers","https://am-i-eligible.covid19vaccine.health.ny.gov/",8,"Active","Feb 20")];function ee(){var e=Q();return Object(n.jsx)(G.a,{component:K.a,children:Object(n.jsxs)(E.a,{className:e.table,"aria-label":"simple table",children:[Object(n.jsx)(J.a,{children:Object(n.jsxs)(Z.a,{children:[Object(n.jsx)(R.a,{children:"Portal"}),Object(n.jsx)(R.a,{children:"Sites"}),Object(n.jsx)(R.a,{children:"Status"}),Object(n.jsx)(R.a,{children:"Updated at"})]})}),Object(n.jsx)(M.a,{children:$.map((function(e){return Object(n.jsxs)(Z.a,{children:[Object(n.jsx)(R.a,{component:"th",scope:"row",children:Object(n.jsx)(j.a,{target:"_blank",href:e.url,children:e.name})}),Object(n.jsx)(R.a,{children:e.numSites}),Object(n.jsx)(R.a,{children:e.status}),Object(n.jsx)(R.a,{children:e.statusUpdatedAt})]},e.name)}))})]})})}function te(e){var t=e.sites;return Object(n.jsx)(d.a,{children:t.map((function(e,t){return Object(i.createElement)(L,Object(f.a)(Object(f.a)({},e),{},{key:t}))}))})}var ae=a(156),ne=a(160),ie=Object(_.a)((function(e){return{card:{marginBottom:"1rem"},reserveButton:{width:"100%"},cardContent:{paddingBottom:"16px!important"},lastAvailableAtLabel:{lineHeight:"initial"},lastAvailableAtValue:{fontSize:".8rem"}}}));function re(e){var t=e.foundAvailability,a=e.showUnavailable,i=e.handleChange,r=ie();r.bullet;return Object(n.jsx)(g.a,{className:r.card,variant:"outlined",children:Object(n.jsx)(Y.a,{className:r.cardContent,children:Object(n.jsxs)(d.a,{align:"center",py:2,children:[Object(n.jsx)(m.a,{children:!t&&"TurboVax has not detected availability"}),!t&&Object(n.jsx)("br",{}),Object(n.jsx)(ae.a,{labelPlacement:"start",control:Object(n.jsx)(ne.a,{checked:a,onChange:i,name:"showUnavailbleSites",color:"primary"}),label:"Show unavailable sites"})]})})})}function se(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(p,{}),Object(n.jsx)(u,{}),Object(n.jsx)(V,{})]})}function ce(){return Object(n.jsxs)("div",{children:[Object(n.jsxs)(m.a,{children:["TurboVax is a"," ",Object(n.jsx)(j.a,{target:"_blank",href:"https://twitter.com/turbovax",rel:"noreferrer",children:"Twitter bot (@turbovax)"})," ","that tweets the latest NYC vaccine appointments. Appointments are also published to this page in real-time."]}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)(m.a,{children:Object(n.jsx)(j.a,{href:"#supported-websites",children:"Supported Websites"})})}),Object(n.jsx)("li",{children:Object(n.jsx)(m.a,{children:Object(n.jsx)(j.a,{href:"#faq",children:"Frequently Asked Questions"})})}),Object(n.jsx)("li",{children:Object(n.jsx)(m.a,{children:Object(n.jsx)(j.a,{href:"#contact-us",children:"Contact Us"})})}),Object(n.jsx)("li",{children:Object(n.jsx)(m.a,{children:Object(n.jsx)(j.a,{href:"#special-thanks",children:"Special Thanks"})})})]}),Object(n.jsxs)("section",{class:"about-section",id:"supported-websites",children:[Object(n.jsx)("h2",{class:"header-text",children:"Supported Websites"}),Object(n.jsxs)(m.a,{children:["We currently support 3 major government vaccine websites. Details for other administration sites can be found at"," ",Object(n.jsx)(j.a,{href:"https://vaccinefinder.nyc.gov/",target:"_blank",rel:"noreferrer",children:"vaccinefinder.nyc.gov"}),"."]}),Object(n.jsx)("br",{}),Object(n.jsx)(ee,{})]}),Object(n.jsxs)("section",{class:"about-section",id:"faq",children:[Object(n.jsx)("h2",{class:"header-text",children:"Frequently Asked Questions"}),Object(n.jsxs)(d.a,{marginBottom:4,children:[Object(n.jsx)(m.a,{children:Object(n.jsx)("strong",{children:"How do I sign up for a vaccine in NYC?"})}),Object(n.jsxs)(m.a,{children:["Please refer to the"," ",Object(n.jsx)(j.a,{href:"https://www.nytimes.com/article/nyc-vaccine-shot.html",target:"_blank",rel:"noreferrer",children:Object(n.jsx)("em",{children:"New York Times"})})," ","and"," ",Object(n.jsx)(j.a,{href:"https://gothamist.com/news/new-york-city-vaccine-explainer",target:"_blank",rel:"noreferrer",children:"Gothamist"})," ","guides for general questions about the process."]})]}),Object(n.jsxs)(d.a,{marginBottom:4,children:[Object(n.jsx)(m.a,{children:Object(n.jsx)("strong",{children:"What can TurboVax do? What can't it do?"})}),Object(n.jsxs)(m.a,{children:["Simply put: TurboVax queries vaccine scheduling websites to find available appointment slots. It ",Object(n.jsx)("u",{children:"cannot"})," book appointments on your behalf."]})]}),Object(n.jsxs)(d.a,{marginBottom:4,children:[Object(n.jsx)(m.a,{children:Object(n.jsx)("strong",{children:"Why did you build TurboVax?"})}),Object(n.jsx)(m.a,{children:"The existing vaccine scheduling system is complicated. Existing websites don't 1) make it easy to search for appointments or 2) notify people eligible groups when appointments do open up. By publishing open appointment slots on Twitter, we hope to give New Yorkers better odds at snagging an appointment."})]}),Object(n.jsxs)(d.a,{marginBottom:4,children:[Object(n.jsx)(m.a,{children:Object(n.jsx)("strong",{children:"Why couldn't I find the appointment that you tweeted?"})}),Object(n.jsx)(m.a,{children:"To be clear: it will be hard to find any appointment\u2014with or without the tool. Availability is limited and demand is high. At this very moment, there are probably hundreds (if not thousands) of others looking for appointments on the very same websites as you are. Open appointments are often snapped up in less than a minute."})]}),Object(n.jsxs)(d.a,{marginBottom:4,children:[Object(n.jsx)(m.a,{children:Object(n.jsx)("strong",{children:"How can I set myself up for success?"})}),Object(n.jsxs)(m.a,{children:[Object(n.jsx)(m.a,{children:'Every second matters. Login and pre-fill all required forms, so that you are ready to hit the "find availability" step at a moment\'s notice.'}),Object(n.jsx)("br",{}),Object(n.jsxs)(m.a,{children:[Object(n.jsx)("u",{children:Object(n.jsx)(j.a,{href:"https://covid19.nychealthandhospitals.org/UnaffiliatedHealthCareWorkers",target:"_blank",rel:"noreferrer",children:"For the NYC H+H website"})}),": Fill out your data. To check availability, select",Object(n.jsx)("code",{children:"I, [First Name] [Last Name]"})," checkbox. If no availability, unselect and reselect the checkbox to quickly recheck availability."]}),Object(n.jsxs)(m.a,{children:[Object(n.jsx)("u",{children:Object(n.jsx)(j.a,{href:"https://vax4nyc.nyc.gov/patient/s/",target:"_blank",rel:"noreferrer",children:"For the NYC Vaccine Hub (Vax4NYC) website"})}),": Fill out your data until you are at Step 3 (Schedule An Appointments). If no availability, select a new date or enter a zip code to quickly to recheck availability without resubmitting form."]})]})]}),Object(n.jsxs)(d.a,{marginBottom:4,children:[Object(n.jsx)(m.a,{children:Object(n.jsx)("strong",{children:"How reliable is TurboVax?"})}),Object(n.jsx)(m.a,{children:"We try our best to deliver good data but cannot offer any warranty on the accuracy of the data. This is a volunteer effort\u2014please adjust your expectations accordingly."})]}),Object(n.jsxs)(d.a,{marginBottom:4,children:[Object(n.jsx)(m.a,{children:Object(n.jsx)("strong",{children:"Can I contribute to a Venmo, GoFundMe or etc?"})}),Object(n.jsxs)(m.a,{children:["We appreciate your offers of generosity but do not need the funding. Instead, we'd kindly ask you to consider donating to"," ",Object(n.jsx)(j.a,{target:"_blank",href:"https://www.welcometochinatown.com/",rel:"noreferrer",children:"Welcome to Chinatown"}),", a grassroots initiative to support Chinatown businesses and amplify community voices in order to preserve one of New York City's most vibrant neighborhoods."]})]}),Object(n.jsxs)(d.a,{marginBottom:4,children:[Object(n.jsx)(m.a,{children:Object(n.jsx)("strong",{children:"Will you open source this?"})}),Object(n.jsxs)(m.a,{children:["The answer is no, because the code is not reusable. One person cannot put something like this into the world without taking tons of"," ",Object(n.jsx)(j.a,{target:"_blank",href:"https://twitter.com/turbovax/status/1359508343908368385",rel:"noreferrer",children:"shortcuts"})," ","that would be unintelligible to other engineers."]})]})]}),Object(n.jsxs)("section",{class:"about-section",id:"contact-us",children:[Object(n.jsx)("h2",{class:"header-text",children:"Contact Us"}),Object(n.jsxs)(m.a,{children:["This project is maintained by"," ",Object(n.jsx)(j.a,{href:"https://www.hugema.com",rel:"noreferrer",children:"Huge Ma"}),", who can be reached at huge@turbovax.info."]})]}),Object(n.jsxs)("section",{class:"about-section",id:"special-thanks",children:[Object(n.jsx)("h2",{class:"header-text",children:"Special Thanks"}),Object(n.jsx)(m.a,{children:"Thanks to Kelley for coming up with the name. Thanks to Yu who fed me (and the cat) while I was heads-down on this for an entire weekend!"})]})]})}function oe(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(m.a,{children:"Last updated: February 14, 2021"}),Object(n.jsx)("br",{}),Object(n.jsx)(m.a,{variant:"h5",children:"Interpretation and Definitions"}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(m.a,{variant:"h6",children:"Interpretation"}),Object(n.jsxs)(m.a,{children:["The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural."," "]}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(m.a,{variant:"h6",children:"Definitions"}),Object(n.jsx)(m.a,{children:"For the purposes of this Disclaimer:"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsxs)(m.a,{children:[Object(n.jsx)("strong",{children:"Company"}),' (referred to as either "the Company", "We", "Us" or "Our" in this Disclaimer) refers to TurboVax.']})}),Object(n.jsx)("li",{children:Object(n.jsxs)(m.a,{children:[Object(n.jsx)("strong",{children:"Service"})," refers to the Website."]})}),Object(n.jsx)("li",{children:Object(n.jsxs)(m.a,{children:[Object(n.jsx)("strong",{children:"You"})," means the individual accessing the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable."]})}),Object(n.jsx)("li",{children:Object(n.jsxs)(m.a,{children:[Object(n.jsx)("strong",{children:"Website"})," refers to TurboVax, accessible from"," ",Object(n.jsx)("a",{href:"https://www.turbovax.info/",rel:"external nofollow noopener",target:"_blank",children:"https://www.turbovax.info/"})]})})]}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(m.a,{variant:"h5",children:"Disclaimer"}),Object(n.jsx)(m.a,{children:"The information contained on the Service is for general information purposes only."}),Object(n.jsx)(m.a,{children:"The Company assumes no responsibility for errors or omissions in the contents of the Service."}),Object(n.jsx)("br",{}),Object(n.jsxs)(m.a,{children:["In no event shall the Company be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service. The Company reserves the right to make additions, deletions, or modifications to the contents on the Service at any time without prior notice. This Disclaimer has been created with the help of the"," ",Object(n.jsx)("a",{href:"https://www.termsfeed.com/disclaimer-generator/",target:"_blank",children:"Disclaimer Generator"}),"."]}),Object(n.jsx)("br",{}),Object(n.jsx)(m.a,{children:"The content of the Service does not constitute any form of recommendation or medical advice."}),Object(n.jsx)("br",{}),Object(n.jsx)(m.a,{children:"The Company does not warrant that the Service is free of viruses or other harmful components."}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(m.a,{variant:"h5",children:"External Links Disclaimer"}),Object(n.jsx)("br",{}),Object(n.jsx)(m.a,{children:"The Service may contain links to external websites that are not provided or maintained by or in any way affiliated with the Company."}),Object(n.jsx)("br",{}),Object(n.jsx)(m.a,{children:"Please note that the Company does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites."}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(m.a,{variant:"h5",children:"Errors and Omissions Disclaimer"}),Object(n.jsx)("br",{}),Object(n.jsx)(m.a,{children:"The information given by the Service is for general guidance on matters of interest only. Even if the Company takes every precaution to insure that the content of the Service is both current and accurate, errors can occur. Plus, given the changing nature of laws, rules and regulations, there may be delays, omissions or inaccuracies in the information contained on the Service."}),Object(n.jsx)("br",{}),Object(n.jsx)(m.a,{children:"The Company is not responsible for any errors or omissions, or for the results obtained from the use of this information."}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(m.a,{variant:"h5",children:"Fair Use Disclaimer"}),Object(n.jsx)(m.a,{children:"The Company may use copyrighted material which has not always been specifically authorized by the copyright owner. The Company is making such material available for criticism, comment, news reporting, teaching, scholarship, or research."}),Object(n.jsx)("br",{}),Object(n.jsx)(m.a,{children:'The Company believes this constitutes a "fair use" of any such copyrighted material as provided for in section 107 of the United States Copyright law.'}),Object(n.jsx)("br",{}),Object(n.jsx)(m.a,{children:"If You wish to use copyrighted material from the Service for your own purposes that go beyond fair use, You must obtain permission from the copyright owner."}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(m.a,{children:"Comments published by users are their sole responsibility and the users will take full responsibility, liability and blame for any libel or litigation that results from something written in or as a direct result of something written in a comment. The Company is not liable for any comment published by users and reserve the right to delete any comment for any reason whatsoever."}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(m.a,{variant:"h5",children:"No Responsibility Disclaimer"}),Object(n.jsx)("br",{}),Object(n.jsx)(m.a,{children:"The information on the Service is provided with the understanding that the Company is not herein engaged in rendering legal, accounting, tax, or other professional advice and services. As such, it should not be used as a substitute for consultation with professional accounting, tax, legal or other competent advisers."}),Object(n.jsx)("br",{}),Object(n.jsx)(m.a,{children:"In no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever arising out of or in connection with your access or use or inability to access or use the Service."}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(m.a,{variant:"h5",children:'"Use at Your Own Risk" Disclaimer'}),Object(n.jsx)("br",{}),Object(n.jsx)(m.a,{children:'All information in the Service is provided "as is", with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, express or implied, including, but not limited to warranties of performance, merchantability and fitness for a particular purpose.'}),Object(n.jsx)("br",{}),Object(n.jsx)(m.a,{children:"The Company will not be liable to You or anyone else for any decision made or action taken in reliance on the information given by the Service or for any consequential, special or similar damages, even if advised of the possibility of such damages."}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(m.a,{variant:"h5",children:"Contact Us"}),Object(n.jsx)(m.a,{children:"If you have any questions about this Disclaimer, You can contact Us by email: huge@turbovax.info"})]})}var le=Object(_.a)((function(e){var t;return{container:{maxWidth:"800px",padding:"1rem",margin:"0 auto"},nav:{textAlign:"center",padding:0},li:{display:"inline-block",margin:"1rem"},a:{all:"unset"},footer:{marginTop:"5rem",marginBottom:"2rem"},logo:(t={},Object(o.a)(t,e.breakpoints.down("sm"),{maxWidth:"150px"}),Object(o.a)(t,"maxWidth","250px"),Object(o.a)(t,"width","100%"),t)}}));function he(){var e=le();return Object(n.jsx)("div",{className:e.container,children:Object(n.jsxs)(l.a,{children:[Object(n.jsx)(W,{}),Object(n.jsxs)(h.c,{children:[Object(n.jsx)(h.a,{exact:!0,path:"/",children:Object(n.jsx)(se,{})}),Object(n.jsx)(h.a,{path:"/about",children:Object(n.jsx)(ce,{})}),Object(n.jsx)(h.a,{path:"/disclaimer",children:Object(n.jsx)(oe,{})})]}),Object(n.jsx)(be,{})]})})}function be(){var e=le();return Object(n.jsxs)("footer",{align:"center",className:e.footer,children:[Object(n.jsx)(m.a,{className:e.footerText,children:"2021 \xa9 TurboVax"}),Object(n.jsx)("br",{}),Object(n.jsx)(m.a,{children:Object(n.jsx)(l.b,{to:"/disclaimer",className:e.a,children:Object(n.jsx)(j.a,{children:"Disclaimer"})})})]})}var je=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,163)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),i(e),r(e),s(e)}))};c.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(he,{})}),document.getElementById("root")),je()},87:function(e,t,a){}},[[113,1,2]]]);
//# sourceMappingURL=main.0e8ee13e.chunk.js.map