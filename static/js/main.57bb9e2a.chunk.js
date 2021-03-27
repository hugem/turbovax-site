(this.webpackJsonpTurboVax=this.webpackJsonpTurboVax||[]).push([[0],{142:function(e,t,a){},181:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a(0),r=a.n(i),s=a(13),c=a.n(s),o=(a(142),a(19)),l=a(33),h=a(15),j=a(257),b=a(258),d=a(227);function u(){return Object(n.jsx)(j.a,{my:2,children:Object(n.jsxs)(b.a,{severity:"info",children:[Object(n.jsx)("b",{children:"Update (3/26):"})," We are now testing pharmacy availability through"," ",Object(n.jsx)(d.a,{target:"_blank",underline:"always",href:"https://www.vaccinespotter.org/",rel:"noreferrer",children:"Vaccine Spotter"}),". Please note that data may be out of date while we work out the kinks."," ","Educators, 50+, and those underlying conditions are pharmacy-eligible."]})})}var m=a(48),p=a(22),x=a(228);function O(e){return Object(n.jsx)("li",{style:{marginBottom:".25rem"},children:Object(n.jsx)(m.a,{children:e.children})})}function f(){var e=Object(p.a)(),t=Object(x.a)(e.breakpoints.up("sm"))?7:5;return Object(n.jsxs)(j.a,{style:{maxWidth:"700px"},mb:t,mx:"auto",children:[Object(n.jsx)(m.a,{children:"TurboVax finds appointments from government-run vaccine sites in the NYC area."}),Object(n.jsxs)("ol",{children:[Object(n.jsxs)(O,{children:["Follow our Twitter (",Object(n.jsx)(d.a,{target:"_blank",href:"https://twitter.com/turbovax",rel:"noreferrer",children:"@turbovax"}),") to be instantly notified when appointments open up."]}),Object(n.jsx)(O,{children:"Refresh this page often. Appointments are published to this page in real-time."}),Object(n.jsxs)(O,{children:["Educate yourself on"," ",Object(n.jsx)(d.a,{target:"_blank",href:"https://www.nytimes.com/2021/02/26/nyregion/asian-hate-crimes-attacks-ny.html",rel:"noreferrer",children:"rising Asian Hate"})," ","and how you can"," ",Object(n.jsx)(d.a,{target:"_blank",href:"https://stopaapihate.org/actnow/",rel:"noreferrer",children:"help end it"}),"."]})]}),Object(n.jsxs)(m.a,{children:["Availability for local clinics/pharmacies can be found at CDC's"," ",Object(n.jsx)(d.a,{target:"_blank",href:"https://vaccinefinder.org/",rel:"noreferrer",children:"VaccineFinder"})," ","or"," ",Object(n.jsx)(d.a,{target:"_blank",href:"https://nycvaccinelist.com/",rel:"noreferrer",children:"NYC Vaccine List"}),". If you found TurboVax to be helpful, consider making a donation to"," ",Object(n.jsx)(d.a,{target:"_blank",href:"https://www.welcometochinatown.com/",rel:"noreferrer",children:"Welcome to Chinatown"}),"."]})]})}var g=a(66),v=a.n(g),y=a(63),w=a.n(y),C=a(231),k=a(12),S=a(230),N=a(229);function A(e){var t=e.leftComponent,a=e.rightComponent,i=Object(p.a)(),r=Object(x.a)(i.breakpoints.up("sm"))?{}:{borderTop:1,borderColor:"rgba(0, 0, 0, 0.12)"};return Object(n.jsx)(j.a,{mb:2,children:Object(n.jsx)(N.a,{variant:"outlined",children:Object(n.jsxs)(S.a,{container:!0,align:"center",children:[Object(n.jsx)(S.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(j.a,{p:2,children:t})}),Object(n.jsx)(S.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(j.a,Object(k.a)(Object(k.a)({p:2},r),{},{children:a}))})]})})})}var T=Object(C.a)((function(e){return{strong:{fontWeight:"500"}}}));function P(e){var t=e.lastUpdatedAt,a=e.foundAvailability,i=e.appointmentCount,r=e.siteCount,s=T(),c=Object(p.a)(),o=Object(x.a)(c.breakpoints.up("sm"))?"Appointments":"Appts",l=i>0?Object(n.jsxs)("span",{children:[i.toLocaleString()," available (",r.toLocaleString()," ",Object(n.jsx)(v.a,{singular:"site",count:r,showCount:!1}),") \u2705"]}):Object(n.jsxs)("span",{children:[r.toLocaleString()," ",Object(n.jsx)(v.a,{singular:"site",count:r,showCount:!1})," \u2705"]}),h=Object(n.jsxs)(m.a,{children:[Object(n.jsx)("strong",{className:s.strong,children:"Updated"}),":"," ",t?Object(n.jsx)(w.a,{local:!0,calendar:!0,parse:"YYYY-MM-DD HH:mm",children:t}):""]}),j=Object(n.jsxs)(m.a,{children:[Object(n.jsx)("strong",{className:s.strong,children:o}),":"," ",null===a?"":!0===a?l:"Not Available \u274c"]});return Object(n.jsx)(A,{leftComponent:h,rightComponent:j})}var U=a(56),_=a(57),F=a(59),D=a(58),L=a(73),W=a.n(L),Y=a(77),I=a(236),V=a(113),B=a.n(V),q=a(263),z=a(240),H=a(238),R=a(239),E=a(237),M=a(259),G=a(256),Q=[{name:"Bronx",value:"bronx",region:"New York City"},{name:"Brooklyn",value:"brooklyn",region:"New York City"},{name:"Manhattan",value:"manhattan",region:"New York City"},{name:"Queens",value:"queens",region:"New York City"},{name:"Staten Island",value:"staten_island",region:"New York City"},{name:"Long Island",value:"long_island",region:"Other"},{name:"Mid-Hudson",value:"mid_hudson",region:"Other"}],K={};Q.forEach((function(e){K[e.value]=e}));var J=K,X=Object(C.a)((function(e){return{root:{"& > * + *":{marginTop:e.spacing(3)}}}}));function Z(e){var t=e.filters,a=e.handleFilterChange,i=X();return Object(n.jsx)(j.a,{p:2,className:i.root,children:Object(n.jsx)(M.a,{multiple:!0,options:Q,onChange:function(e,t){a(t)},getOptionLabel:function(e){return e.name},groupBy:function(e){return e.region},value:t,renderInput:function(e){return Object(n.jsx)(G.a,Object(k.a)(Object(k.a)({},e),{},{variant:"outlined",label:"Filter by borough",placeholder:"Queens..."}))}})})}var $=a(234),ee=a(235),te=a(262);function ae(e){return Object(n.jsx)(j.a,{p:2,children:Object(n.jsx)($.a,{row:!0,children:Object(n.jsx)(ee.a,{control:Object(n.jsx)(te.a,{checked:e.hidePharmacies,onChange:e.handleHidePharmaciesChange,name:"hidePharmacies",color:"primary"}),label:"Hide pharmacies (Educators, 50+, and those underlying conditions)"})})})}var ne=Object(C.a)((function(e){return{typography:{padding:e.spacing(2)},box:Object(o.a)({},e.breakpoints.up("sm"),{width:"500px"})}}));function ie(e){var t=ne(),a=r.a.useState(null),i=Object(Y.a)(a,2),s=i[0],c=i[1],o=function(){c(null)},l=Boolean(s),h=Object(p.a)(),b=Object(x.a)(h.breakpoints.down("xs")),d=e.filters.length;!0===e.hidePharmacies&&(d+=1);var u=d>0?"Filters (".concat(d,")"):"Filters";return Object(n.jsxs)("div",{children:[Object(n.jsxs)(I.a,{size:"small",variant:"contained",color:"secondary",onClick:function(e){c(e.currentTarget)},disableElevation:!0,children:[Object(n.jsx)(B.a,{})," ",u]}),Object(n.jsxs)(q.a,{fullScreen:b,open:l,onClose:o,"aria-labelledby":"responsive-dialog-title",children:[Object(n.jsx)(E.a,{id:"responsive-dialog-title",children:"Filters"}),Object(n.jsx)(H.a,{children:Object(n.jsx)(R.a,{children:Object(n.jsxs)(j.a,{className:t.box,children:[Object(n.jsx)(Z,Object(k.a)({},e)),Object(n.jsx)(ae,Object(k.a)({},e))]})})}),Object(n.jsxs)(z.a,{children:[Object(n.jsx)(I.a,{autoFocus:!0,onClick:function(){c(null),e.handleFilterClear()},color:"primary",children:"Reset All"}),Object(n.jsx)(I.a,{onClick:o,color:"primary",autoFocus:!0,children:"Done"})]})]})]})}var re=a(87),se=function(e){Object(F.a)(a,e);var t=Object(D.a)(a);function a(){var e;Object(U.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={availableSites:[],unavailableSites:[],showUnavailable:!1,hidePharmacies:!1,lastUpdatedAt:null,filters:[]},e.handleShowAvailabilityChange=function(t){var a=!e.state.showUnavailable;localStorage.setItem("showUnavailable",a),e.setState(Object(k.a)(Object(k.a)({},e.state),{},{showUnavailable:a}))},e.handleHidePharmaciesChange=function(t,a){var n=e.state.filters.map((function(e){return e.value}));e.props.history.push({state:e.state,search:"?"+new URLSearchParams({region:n,hidePharmacies:a}).toString()},e.state),e.setState(Object(k.a)(Object(k.a)({},e.state),{},{hidePharmacies:a}))},e.handleFilterClear=function(){new URL(window.location.href);e.props.history.push({state:e.state},e.state),e.setState(Object(k.a)(Object(k.a)({},e.state),{},{filters:[],hidePharmacies:!1}))},e.handleFilterChange=function(t){var a=t.map((function(e){return e.value}));e.props.history.push({state:e.state,search:"?"+new URLSearchParams({region:a,hidePharmacies:e.state.hidePharmacies}).toString()},e.state),e.setState(Object(k.a)(Object(k.a)({},e.state),{},{filters:t}))},e}return Object(_.a)(a,[{key:"mapPortalByKey",value:function(e){var t={};return e.forEach((function(e){return t[e.key]=e})),t}},{key:"mapLocationToVars",value:function(e,t){var a=t[e.portal];return{id:e.id,appointments:(e.appointments.summary||"").split(";"),area:e.area,count:e.appointments.count,isActive:e.active,isAvailable:e.available,lastAvailableAt:e.last_available_at,portalName:a.name,portalShortName:a.short_name,siteName:e.name,updatedAt:e.updated_at,url:a.url,showPortalName:a.show_name_in_card,type:a.type,formattedAddress:e.formatted_address,metadata:a.metadata}}},{key:"componentDidMount",value:function(){var e=this,t="true"==localStorage.getItem("showUnavailable"),a=re.parse(window.location.search),n=a.region||"",i="true"===a.hidePharmacies,r=n.split(",").filter((function(e){return""!==e})).map((function(e){return J[e.toLowerCase()]}));this.setState(Object(k.a)(Object(k.a)({},this.state),{},{filters:r,hidePharmacies:i})),W.a.get("https://turbovax.global.ssl.fastly.net/dashboard").then((function(a){var n=a.data,i=e.mapPortalByKey(n.portals),r=n.locations.map((function(t){return e.mapLocationToVars(t,i)})).filter((function(e){return e.isActive})).sort((function(e,t){return e.lastAvailableAt>t.lastAvailableAt?-1:e.lastAvailableAt<t.lastAvailableAt?1:0})),s=r.filter((function(e){return e.isAvailable})),c=r.filter((function(e){return!e.isAvailable})),o=n.last_updated_at;e.setState({availableSites:s,unavailableSites:c,showUnavailable:t,lastUpdatedAt:o})}))}},{key:"shouldComponentUpdate",value:function(e,t,a){var n=re.parse(window.location.search),i=n.region||"",r="true"===n.hidePharmacies,s=i.split(",").filter((function(e){return""!==e})).map((function(e){return J[e.toLowerCase()]}));return(s&&t.filters).length!==s.length&&this.setState(Object(k.a)(Object(k.a)({},this.state),{},{filters:s})),r!==t.hidePharmacies&&this.setState(Object(k.a)(Object(k.a)({},this.state),{},{hidePharmacies:r})),!0}},{key:"render",value:function(){var e=this.state.filters.length>0,t=this.state.filters.map((function(e){return e.name})),a=e?this.state.availableSites.filter((function(e){return t.indexOf(e.area)>=0})):this.state.availableSites,i=e?this.state.unavailableSites.filter((function(e){return t.indexOf(e.area)>=0})):this.state.unavailableSites;!0===this.state.hidePharmacies&&(a=a.filter((function(e){return"pharmacy"!==e.type})),i=i.filter((function(e){return"pharmacy"!==e.type})));var r=a.map((function(e){return e.count})).reduce((function(e,t){return e+t}),0),s=a.length>0;return r>0&&(document.title="(".concat(r.toLocaleString(),") TurboVax")),Object(n.jsxs)("div",{children:[Object(n.jsx)(j.a,{children:Object(n.jsx)(P,{lastUpdatedAt:this.state.lastUpdatedAt,foundAvailability:s,appointmentCount:r,siteCount:a.length})}),Object(n.jsx)(j.a,{align:"right",mt:6,mb:2,children:Object(n.jsx)(ie,{handleFilterClear:this.handleFilterClear,handleFilterChange:this.handleFilterChange,handleHidePharmaciesChange:this.handleHidePharmaciesChange,filters:this.state.filters,hidePharmacies:this.state.hidePharmacies})}),Object(n.jsxs)(j.a,{children:[Object(n.jsx)(Ge,{sites:a,hidePharmacies:this.state.hidePharmacies}),Object(n.jsx)(Pe,{filters:this.state.filters,foundAvailability:s,unavailableCount:i.length,handleShowAvailabilityChange:this.handleShowAvailabilityChange,showUnavailable:this.state.showUnavailable}),this.state.showUnavailable&&Object(n.jsx)(Ge,{sites:i})]})]})}}]),a}(r.a.Component),ce=Object(h.f)(se),oe=a.p+"static/media/logo.7772ea20.png",le=a(245),he=a(246),je=a(184),be=a(261),de=a(243),ue=a(244),me=a(114),pe=a.n(me),xe=a(233),Oe=a(241),fe=a(242),ge=Object(C.a)({listItemText:{"& span, & svg":{fontSize:".9rem"}}});function ve(e){var t=ge(),a=e.primary,i=e.to;return Object(n.jsx)("li",{children:Object(n.jsx)(Oe.a,{button:!0,component:function(e){return Object(n.jsx)(l.b,Object(k.a)({to:i},e))},children:Object(n.jsx)(fe.a,{className:t.listItemText,primary:a,onClick:e.onClick})})})}function ye(e){return Object(n.jsx)("div",{children:Object(n.jsxs)(xe.a,{component:"nav","aria-label":"dropdown nav menu",disablePadding:!0,children:[Object(n.jsx)(ve,{onClick:e.onClick,to:"/about",primary:"About"}),Object(n.jsx)(de.a,{}),Object(n.jsx)(ve,{onClick:e.onClick,to:"/faq",primary:"FAQ"}),Object(n.jsx)(de.a,{})]})})}function we(e){return Object(n.jsx)(I.a,{style:{textTransform:"initial"},color:"primary",component:l.b,to:e.to,children:e.text})}function Ce(e){return Object(n.jsxs)("nav",{"aria-label":"dropdown nav menu",children:[Object(n.jsx)(we,{text:"About",to:"/about"}),Object(n.jsx)(we,{text:"FAQ",to:"/faq"})]})}var ke=Object(C.a)((function(e){var t;return{title:{flexGrow:1},a:{all:"unset"},logo:(t={},Object(o.a)(t,e.breakpoints.down("xs"),{maxWidth:"125px"}),Object(o.a)(t,"maxWidth","175px"),Object(o.a)(t,"width","100%"),t)}}));function Se(){var e=Object(p.a)(),t=ke(),a=Object(x.a)(e.breakpoints.up("sm"))?2:0,i=r.a.useState(null),s=Object(Y.a)(i,2),c=s[0],o=s[1],h=function(e){o(!1)};return Object(n.jsxs)("header",{children:[Object(n.jsx)(ue.a,{maxWidth:"md",children:Object(n.jsx)(le.a,{position:"static",color:"inherit",elevation:0,children:Object(n.jsxs)(he.a,{display:"flex",disableGutters:!0,children:[Object(n.jsx)(j.a,{className:t.title,children:Object(n.jsx)(j.a,{py:a,children:Object(n.jsx)(l.b,{to:"",children:Object(n.jsx)("img",{className:t.logo,src:oe,alt:"TurboVax logo",onClick:h})})})}),Object(n.jsx)(be.a,{only:"xs",children:Object(n.jsx)(Ce,{})}),Object(n.jsx)(be.a,{smUp:!0,children:Object(n.jsx)(je.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu",onClick:function(e){o(!Boolean(c))},children:Object(n.jsx)(pe.a,{})})})]})})}),Object(n.jsxs)(be.a,{smUp:!0,children:[Object(n.jsx)(de.a,{}),c&&Object(n.jsx)(ye,{onClick:h})]})]})}var Ne=a(247);var Ae=a(248),Te=Object(C.a)((function(e){return{card:{marginBottom:"1rem"},reserveButton:{width:"100%"},cardContent:{paddingBottom:"16px!important"},lastAvailableAtLabel:{lineHeight:"initial"},lastAvailableAtValue:{fontSize:".8rem"}}}));function Pe(e){var t=e.foundAvailability,a=e.showUnavailable,i=e.handleShowAvailabilityChange,r=(e.handleFilterChange,e.unavailableCount),s=e.filters,c=Te(),o="TurboVax has not detected availability",l="Show ".concat(r," unavailable sites"),h=s.map((function(e){return e.name})),b=" in [".concat(h.join(", "),"]");return s.length>0&&t?l+=b:s.length>0&&!t&&(o+=b),Object(n.jsx)(N.a,{className:c.card,variant:"outlined",children:Object(n.jsx)(Ae.a,{className:c.cardContent,children:Object(n.jsxs)(j.a,{align:"center",py:2,children:[Object(n.jsx)(m.a,{children:!t&&o}),!t&&Object(n.jsx)("br",{}),Object(n.jsx)(ee.a,{labelPlacement:"start",control:Object(n.jsx)(Ne.a,{checked:a,onChange:i,name:"showUnavailbleSites",color:"primary"}),label:l})]})})})}var Ue=a(250),_e=a(254),Fe=a(253),De=a(249),Le=a(251),We=a(252),Ye=a(118),Ie=Object(C.a)({table:{}});function Ve(e){var t=e.portalData,a=Ie();return Object(n.jsx)(De.a,{component:Ye.a,children:Object(n.jsxs)(Ue.a,{className:a.table,"aria-label":"simple table",children:[Object(n.jsx)(Le.a,{children:Object(n.jsxs)(We.a,{children:[Object(n.jsx)(Fe.a,{children:"Portal"}),Object(n.jsx)(Fe.a,{children:"Type"}),Object(n.jsx)(Fe.a,{children:"Sites"}),Object(n.jsx)(Fe.a,{children:"Notes"})]})}),Object(n.jsx)(_e.a,{children:t.map((function(e){return Object(n.jsxs)(We.a,{children:[Object(n.jsx)(Fe.a,{component:"th",scope:"row",children:Object(n.jsx)(d.a,{target:"_blank",href:e.url,children:e.name})}),Object(n.jsx)(Fe.a,{children:e.type}),Object(n.jsx)(Fe.a,{children:e.site_count}),Object(n.jsx)(Fe.a,{children:e.metadata&&e.metadata.notes})]},e.key)}))})]})})}var Be=a(266),qe=a(115),ze=a.n(qe),He=Object(C.a)((function(e){return{details:{fontSize:".85em"},appointmentText:Object(o.a)({},e.breakpoints.down("sm"),{fontSize:"0.9rem"}),card:{marginBottom:"1rem"},reserveButton:{width:"100%"},cardContent:{paddingBottom:"16px!important"},location:{marginLeft:"8px"},topComponent:Object(o.a)({},e.breakpoints.down("xs"),{paddingLeft:"0!important",paddingRight:"0!important"}),titleRow:Object(o.a)({display:"flex",alignItems:"center"},e.breakpoints.down("xs"),{justifyContent:"space-between"})}}));function Re(e){var t=e.siteName,a=e.area,i=e.classes;return Object(n.jsxs)(j.a,{className:i.titleRow,children:[Object(n.jsx)(m.a,{inline:!0,variant:"h6",component:"h3",display:"inline",children:t}),Object(n.jsx)(Be.a,{size:"small",color:"primary",variant:"outlined",label:a,className:i.location})]})}function Ee(e){var t=e.portalName,a=e.portalShortName,i=e.isAvailable,r=e.count,s=e.showPortalName,c=e.classes,o=e.lastAvailableAt,l=Object(p.a)(),h=[],j=Object(x.a)(l.breakpoints.up("sm"))?t:a||t,b=Object(x.a)(l.breakpoints.up("sm"))?"appointment":"appt";if(s&&h.push(j),(s||r>0)&&h.push(Object(n.jsxs)("span",{children:[r.toLocaleString()," ",Object(n.jsx)(v.a,{singular:b,count:r,showCount:!1})]})),null!==o){var d=i?"checked":"available";h.push(Object(n.jsxs)("span",{children:[d," ",Object(n.jsx)(w.a,{fromNow:!0,children:o})]}))}return 0===h.length?null:Object(n.jsx)(S.a,{xs:12,className:c.topComponent,item:!0,children:Object(n.jsx)(m.a,{className:c.details,display:"",children:h.map((function(e,t){var a=t===h.length-1;return Object(n.jsxs)("span",{children:[e,!a&&" \xb7 "]},t)}))})})}function Me(e){var t=e.count,a=e.siteName,i=e.portalName,r=e.portalShortName,s=e.lastAvailableAt,c=e.url,o=e.showPortalName,l=e.appointments,h=e.isAvailable,b=e.area,u=e.formattedAddress,p=e.metadata,x=He(),O=h&&l.length>0&&""!==l[0];return Object(n.jsx)(N.a,{className:x.card,variant:"outlined",children:Object(n.jsx)(Ae.a,{className:x.cardContent,children:Object(n.jsxs)(S.a,{justify:"space-around",container:!0,spacing:2,display:"flex",children:[Object(n.jsxs)(S.a,{container:!0,item:!0,spacing:2,xs:12,sm:9,className:x.column,children:[Object(n.jsx)(S.a,{xs:12,className:x.topComponent,item:!0,children:Object(n.jsx)(Re,Object(k.a)({},{siteName:a,area:b,classes:x}))}),Object(n.jsx)(Ee,Object(k.a)({},{portalName:i,portalShortName:r,isAvailable:h,count:t,showPortalName:o,classes:x,lastAvailableAt:s})),u&&Object(n.jsx)(S.a,{xs:12,className:x.topComponent,item:!0,children:Object(n.jsxs)(m.a,{className:x.details,children:[Object(n.jsx)(ze.a,{fontSize:"inherit"})," ",Object(n.jsx)(d.a,{underline:"always",target:"_blank",href:"https://www.google.com/maps/place/".concat(u),rel:"noreferrer",children:u})]})}),O&&Object(n.jsx)(S.a,{xs:12,className:x.topComponent,item:!0,children:l.map((function(e){return Object(n.jsx)(m.a,{className:x.appointmentText,children:e})}))})]}),Object(n.jsx)(be.a,{xsDown:!0,children:Object(n.jsxs)(S.a,{spacing:0,container:!0,item:!0,xs:12,sm:3,direction:"column",justify:"flex-start",children:[Object(n.jsx)(S.a,{item:!0,children:Object(n.jsx)(I.a,{size:"medium",variant:"contained",color:"primary",className:x.reserveButton,disabled:!h,href:c,target:"_blank",children:h?"Reserve":"Unavailable"})}),p&&Object(n.jsx)(S.a,{item:!0,align:"center",children:Object(n.jsx)(j.a,{mt:1,children:Object(n.jsx)(m.a,{className:x.details,children:Object(n.jsx)(d.a,{target:"_blank",href:p.url,rel:"noreferrer",children:p.notes})})})})]})}),Object(n.jsx)(be.a,{smUp:!0,children:Object(n.jsxs)(S.a,{spacing:0,container:!0,item:!0,xs:12,sm:3,direction:"column",justify:"flex-start",children:[Object(n.jsx)(S.a,{item:!0,children:Object(n.jsx)(I.a,{size:"medium",variant:"contained",color:"primary",className:x.reserveButton,disabled:!h,href:c,target:"_blank",children:h?"Reserve":"Unavailable"})}),p&&Object(n.jsx)(S.a,{item:!0,align:"center",children:Object(n.jsx)(j.a,{mt:1,children:Object(n.jsx)(m.a,{className:x.details,children:Object(n.jsx)(d.a,{target:"_blank",href:p.url,rel:"noreferrer",children:p.notes})})})})]})})]})})})}function Ge(e){var t=e.sites,a=e.hidePharmacies;return Object(n.jsx)(j.a,{children:t.map((function(e){return a&&"pharmacy"===e.type?null:Object(i.createElement)(Me,Object(k.a)(Object(k.a)({},e),{},{key:e.id}))}))})}function Qe(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(j.a,{mb:5,children:Object(n.jsx)(f,{})}),Object(n.jsx)(u,{}),Object(n.jsx)(ce,{})]})}function Ke(e){return function(t){Object(F.a)(i,t);var a=Object(D.a)(i);function i(){return Object(U.a)(this,i),a.apply(this,arguments)}return Object(_.a)(i,[{key:"componentDidMount",value:function(){document.title="".concat(this.props.pageName," \u2013 TurboVax")}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(j.a,{mb:8,children:Object(n.jsx)(m.a,{align:"center",component:"h2",variant:"h3",children:this.props.pageName})}),Object(n.jsx)(e,{})]})}}]),i}(r.a.Component)}function Je(e){return Object(n.jsxs)(j.a,{my:6,children:[Object(n.jsx)(j.a,{mb:2,children:Object(n.jsx)(m.a,{variant:"h4",children:e.title})}),Object(n.jsx)("section",{children:e.children})]})}var Xe=Ke(function(e){Object(F.a)(a,e);var t=Object(D.a)(a);function a(){var e;Object(U.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={portalData:[]},e}return Object(_.a)(a,[{key:"componentDidMount",value:function(){var e=this;W.a.get("https://turbovax.global.ssl.fastly.net/summary").then((function(t){e.setState({portalData:t.data})}))}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsxs)(m.a,{children:["TurboVax is a"," ",Object(n.jsx)(d.a,{target:"_blank",href:"https://twitter.com/turbovax",rel:"noreferrer",children:"Twitter bot (@turbovax)"})," ","that tweets the latest NYC vaccine appointments. Appointments are also published to this page in real-time."]}),Object(n.jsxs)(Je,{title:"Supported Websites",children:[Object(n.jsxs)(m.a,{children:["We currently support ",this.state.portalData.length," NYC-area websites. Details for other administration sites can be found at"," ",Object(n.jsx)(d.a,{href:"https://vaccinefinder.nyc.gov/",target:"_blank",rel:"noreferrer",children:"vaccinefinder.nyc.gov"}),"."]}),Object(n.jsx)("br",{}),Object(n.jsx)(Ve,{portalData:this.state.portalData})]}),Object(n.jsx)(Je,{title:"Contact Us",children:Object(n.jsxs)(m.a,{children:["This project is maintained by"," ",Object(n.jsx)(d.a,{href:"https://www.hugema.com",rel:"noreferrer",children:"Huge Ma"}),", who can be reached at"," ",Object(n.jsx)(d.a,{href:"mailto:huge@turbovax.info",rel:"noreferrer",children:"huge@turbovax.info"}),"."]})}),Object(n.jsx)(Je,{title:"Special Thanks",children:Object(n.jsx)(m.a,{children:"Thanks to Kelley for coming up with the name. Thanks to Yu who fed me (and the cat) while I was heads-down on this for an entire weekend!"})})]})}}]),a}(r.a.Component)),Ze=[{question:"How do I sign up for a vaccine in NYC?",answer:Object(n.jsxs)(m.a,{children:["Please refer to the"," ",Object(n.jsx)(d.a,{href:"https://www.nytimes.com/article/nyc-vaccine-shot.html",target:"_blank",rel:"noreferrer",children:Object(n.jsx)("em",{children:"New York Times"})})," ","and"," ",Object(n.jsx)(d.a,{href:"https://gothamist.com/news/new-york-city-vaccine-explainer",target:"_blank",rel:"noreferrer",children:"Gothamist"})," ","guides for general questions about the process."]})},{question:"What can TurboVax do? What can't it do?",answer:Object(n.jsxs)(m.a,{children:["Simply put: TurboVax queries vaccine scheduling websites to find available appointment slots. It ",Object(n.jsx)("u",{children:"cannot"})," book appointments on your behalf."]})},{question:"Why did you build TurboVax?",answer:Object(n.jsx)(m.a,{children:"The existing vaccine scheduling system is complicated. Existing websites don't 1) make it easy to search for appointments or 2) notify people eligible groups when appointments do open up. By publishing open appointment slots on Twitter, we hope to give New Yorkers better odds at snagging an appointment."})},{question:"Why couldn't I find the appointment that you tweeted?",answer:Object(n.jsx)(m.a,{children:"To be clear: it will be hard to find any appointment\u2014with or without the tool. Availability is limited and demand is high. At this very moment, there are probably hundreds (if not thousands) of others looking for appointments on the very same websites as you are. Open appointments are often snapped up in less than a minute."})},{question:"How reliable is TurboVax?",answer:Object(n.jsx)(m.a,{children:"We try our best to deliver good data but cannot offer any warranty on the accuracy of the data. This is a volunteer effort\u2014please adjust your expectations accordingly."})},{question:"Can I contribute to a Venmo, GoFundMe or etc?",answer:Object(n.jsxs)(m.a,{children:["We appreciate your offers of generosity but do not need the funding. Instead, we'd kindly ask you to consider donating to"," ",Object(n.jsx)(d.a,{target:"_blank",href:"https://www.welcometochinatown.com/",rel:"noreferrer",children:"Welcome to Chinatown"}),", a grassroots initiative to support Chinatown businesses and help preserve one of New York City's most vibrant neighborhoods."]})}],$e=Object(C.a)((function(e){return{li:{margin:".5rem 0"},ol:{paddingLeft:"2rem"}}}));function et(e){return e.replace(/[,\s]+/g,"-").replace(/\?+/g,"").toLowerCase()}function tt(){var e=Ze.map((function(e){var t=et(e.question);return Object(n.jsxs)(j.a,{id:t,my:6,children:[Object(n.jsx)(j.a,{marginBottom:1,children:Object(n.jsxs)(m.a,{variant:"h5",children:[" ",e.question," "]})}),e.answer]})}));return Object(n.jsx)(j.a,{children:e})}var at=Ke((function(){var e=$e(),t=Ze.map((function(t){var a=et(t.question);return Object(n.jsx)("li",{className:e.li,children:Object(n.jsx)(m.a,{children:Object(n.jsx)(d.a,{href:"#".concat(a),children:t.question})})})}));return Object(n.jsxs)("div",{children:[Object(n.jsx)(j.a,{my:5,children:Object(n.jsx)("ol",{className:e.ol,children:t})}),Object(n.jsx)(tt,{})]})}));function nt(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(m.a,{children:"Last updated: February 14, 2021"}),Object(n.jsx)("br",{}),Object(n.jsx)(m.a,{variant:"h5",children:"Interpretation and Definitions"}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(m.a,{variant:"h6",children:"Interpretation"}),Object(n.jsxs)(m.a,{children:["The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural."," "]}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(m.a,{variant:"h6",children:"Definitions"}),Object(n.jsx)(m.a,{children:"For the purposes of this Disclaimer:"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsxs)(m.a,{children:[Object(n.jsx)("strong",{children:"Company"}),' (referred to as either "the Company", "We", "Us" or "Our" in this Disclaimer) refers to TurboVax.']})}),Object(n.jsx)("li",{children:Object(n.jsxs)(m.a,{children:[Object(n.jsx)("strong",{children:"Service"})," refers to the Website."]})}),Object(n.jsx)("li",{children:Object(n.jsxs)(m.a,{children:[Object(n.jsx)("strong",{children:"You"})," means the individual accessing the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable."]})}),Object(n.jsx)("li",{children:Object(n.jsxs)(m.a,{children:[Object(n.jsx)("strong",{children:"Website"})," refers to TurboVax, accessible from"," ",Object(n.jsx)("a",{href:"https://www.turbovax.info/",rel:"external nofollow noopener",target:"_blank",children:"https://www.turbovax.info/"})]})})]}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(m.a,{variant:"h5",children:"Disclaimer"}),Object(n.jsx)(m.a,{children:"The information contained on the Service is for general information purposes only."}),Object(n.jsx)(m.a,{children:"The Company assumes no responsibility for errors or omissions in the contents of the Service."}),Object(n.jsx)("br",{}),Object(n.jsxs)(m.a,{children:["In no event shall the Company be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service. The Company reserves the right to make additions, deletions, or modifications to the contents on the Service at any time without prior notice. This Disclaimer has been created with the help of the"," ",Object(n.jsx)("a",{href:"https://www.termsfeed.com/disclaimer-generator/",target:"_blank",children:"Disclaimer Generator"}),"."]}),Object(n.jsx)("br",{}),Object(n.jsx)(m.a,{children:"The content of the Service does not constitute any form of recommendation or medical advice."}),Object(n.jsx)("br",{}),Object(n.jsx)(m.a,{children:"The Company does not warrant that the Service is free of viruses or other harmful components."}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(m.a,{variant:"h5",children:"External Links Disclaimer"}),Object(n.jsx)("br",{}),Object(n.jsx)(m.a,{children:"The Service may contain links to external websites that are not provided or maintained by or in any way affiliated with the Company."}),Object(n.jsx)("br",{}),Object(n.jsx)(m.a,{children:"Please note that the Company does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites."}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(m.a,{variant:"h5",children:"Errors and Omissions Disclaimer"}),Object(n.jsx)("br",{}),Object(n.jsx)(m.a,{children:"The information given by the Service is for general guidance on matters of interest only. Even if the Company takes every precaution to insure that the content of the Service is both current and accurate, errors can occur. Plus, given the changing nature of laws, rules and regulations, there may be delays, omissions or inaccuracies in the information contained on the Service."}),Object(n.jsx)("br",{}),Object(n.jsx)(m.a,{children:"The Company is not responsible for any errors or omissions, or for the results obtained from the use of this information."}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(m.a,{variant:"h5",children:"Fair Use Disclaimer"}),Object(n.jsx)(m.a,{children:"The Company may use copyrighted material which has not always been specifically authorized by the copyright owner. The Company is making such material available for criticism, comment, news reporting, teaching, scholarship, or research."}),Object(n.jsx)("br",{}),Object(n.jsx)(m.a,{children:'The Company believes this constitutes a "fair use" of any such copyrighted material as provided for in section 107 of the United States Copyright law.'}),Object(n.jsx)("br",{}),Object(n.jsx)(m.a,{children:"If You wish to use copyrighted material from the Service for your own purposes that go beyond fair use, You must obtain permission from the copyright owner."}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(m.a,{children:"Comments published by users are their sole responsibility and the users will take full responsibility, liability and blame for any libel or litigation that results from something written in or as a direct result of something written in a comment. The Company is not liable for any comment published by users and reserve the right to delete any comment for any reason whatsoever."}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(m.a,{variant:"h5",children:"No Responsibility Disclaimer"}),Object(n.jsx)("br",{}),Object(n.jsx)(m.a,{children:"The information on the Service is provided with the understanding that the Company is not herein engaged in rendering legal, accounting, tax, or other professional advice and services. As such, it should not be used as a substitute for consultation with professional accounting, tax, legal or other competent advisers."}),Object(n.jsx)("br",{}),Object(n.jsx)(m.a,{children:"In no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever arising out of or in connection with your access or use or inability to access or use the Service."}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(m.a,{variant:"h5",children:'"Use at Your Own Risk" Disclaimer'}),Object(n.jsx)("br",{}),Object(n.jsx)(m.a,{children:'All information in the Service is provided "as is", with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, express or implied, including, but not limited to warranties of performance, merchantability and fitness for a particular purpose.'}),Object(n.jsx)("br",{}),Object(n.jsx)(m.a,{children:"The Company will not be liable to You or anyone else for any decision made or action taken in reliance on the information given by the Service or for any consequential, special or similar damages, even if advised of the possibility of such damages."}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(m.a,{variant:"h5",children:"Contact Us"}),Object(n.jsx)(m.a,{children:"If you have any questions about this Disclaimer, You can contact Us by email: huge@turbovax.info"})]})}var it=a(116),rt=a(264),st=Object(it.a)({breakpoints:{values:{xs:0,sm:600,md:880,lg:1280,xl:1920}},typography:{body1:{fontWeight:300,lineHeight:1.6},h3:{fontSize:"2rem"},h4:{fontSize:"1.5rem",fontWeight:700,fontFamily:"'Merriweather', serif",letterSpacing:".025rem",textRendering:"optimizeLegibility"},h5:{fontSize:"1rem",fontWeight:700,fontFamily:"'Merriweather', serif",letterSpacing:".02rem",textRendering:"optimizeLegibility"}},palette:{secondary:{main:"#CFCFEA"},err:{main:"#466365"}}}),ct=Object(rt.a)(st),ot=a(255),lt=Object(C.a)((function(e){var t;return{nav:{textAlign:"center",padding:0},li:{display:"inline-block",margin:"1rem"},a:{all:"unset"},footer:{marginTop:"5rem",marginBottom:"2rem"},logo:(t={},Object(o.a)(t,e.breakpoints.down("sm"),{maxWidth:"150px"}),Object(o.a)(t,"maxWidth","250px"),Object(o.a)(t,"width","100%"),t)}}));function ht(){var e=Object(p.a)(),t=Object(x.a)(e.breakpoints.up("sm"))?6:5;return Object(n.jsx)("div",{children:Object(n.jsx)(ot.a,{theme:ct,children:Object(n.jsxs)(l.a,{children:[Object(n.jsx)(j.a,{mb:t,children:Object(n.jsx)(Se,{})}),Object(n.jsx)(ue.a,{maxWidth:"md",children:Object(n.jsxs)(h.c,{children:[Object(n.jsx)(h.a,{exact:!0,path:"/",children:Object(n.jsx)(Qe,{})}),Object(n.jsx)(h.a,{path:"/about",children:Object(n.jsx)(Xe,{pageName:"About"})}),Object(n.jsx)(h.a,{path:"/disclaimer",children:Object(n.jsx)(nt,{})}),Object(n.jsx)(h.a,{path:"/faq",children:Object(n.jsx)(at,{pageName:"Frequently Asked Questions"})})]})}),Object(n.jsx)(jt,{})]})})})}function jt(){var e=lt();return Object(n.jsxs)("footer",{align:"center",className:e.footer,children:[Object(n.jsx)(m.a,{className:e.footerText,children:"2021 \xa9 TurboVax"}),Object(n.jsx)("br",{}),Object(n.jsx)(m.a,{children:Object(n.jsx)(l.b,{to:"/disclaimer",className:e.a,children:Object(n.jsx)(d.a,{children:"Disclaimer"})})})]})}var bt=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,268)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),i(e),r(e),s(e)}))};c.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(ht,{})}),document.getElementById("root")),bt()}},[[181,1,2]]]);
//# sourceMappingURL=main.57bb9e2a.chunk.js.map