(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],{10:function(e,a,t){},12:function(e,a,t){e.exports=t(21)},17:function(e,a,t){},20:function(e,a,t){},21:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(11),c=t.n(s),r=(t(17),t(1)),i=t(2),m=t(4),o=t(3),u=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Skills")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},l.a.createElement("p",{style:{fontSize:"0.3em",margin:0}},"Hello, I'm ")," ",e.name),l.a.createElement("h2",{style:{color:"#fff",fontFamily:"sans-serif "}},"I am a ",e.role,".",e.roleDescription),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"blank"},l.a.createElement("i",{className:e.className})))}))))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),t}(n.Component),p=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:"images/profilepic.jpg",alt:""})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,e.aboutme),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e.name),l.a.createElement("br",null),l.a.createElement("span",null,e.address),l.a.createElement("br",null),l.a.createElement("span",null,e.website)))))))}}]),t}(n.Component),d=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map((function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.UniversityName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),l.a.createElement("p",null,e.Achievements)))})))),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("p",null,e.skillsDescription),l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"skills"},e.skills&&e.skills.map((function(e){return l.a.createElement("li",null,l.a.createElement("span",{className:"bar-expand ".concat(e.skillname.toLowerCase())}),l.a.createElement("em",null,e.skillname))})))))))}}]),t}(n.Component),h=t(5),E=t.n(h),g=t(6),f=t.n(g),v=(t(7),t(10),function(){var e=f()(E.a);return l.a.createElement(e,{play:!0,cancelOnInteraction:!1,interval:6e3},l.a.createElement("div",{"data-src":"https://clackurbucket.s3.us-east-2.amazonaws.com/ClackurSC1.png"}),l.a.createElement("div",{"data-src":"https://clackurbucket.s3.us-east-2.amazonaws.com/ClackurSC5.png"}),l.a.createElement("div",{"data-src":"https://clackurbucket.s3.us-east-2.amazonaws.com/ClackurSC4.png"}),l.a.createElement("div",{"data-src":"https://clackurbucket.s3.us-east-2.amazonaws.com/ClackurSC3.png"}))}),b=function(){var e=f()(E.a);return l.a.createElement(e,{play:!0,cancelOnInteraction:!1,interval:4e3},l.a.createElement("div",{"data-src":"https://clackurbucket.s3.us-east-2.amazonaws.com/codelet-ss2.png"}),l.a.createElement("div",{"data-src":"https://clackurbucket.s3.us-east-2.amazonaws.com/codelet-ss1.png"}),l.a.createElement("div",{"data-src":"https://github.com/b-tsui/Codelet-Frontend/raw/master/documentation/images/card-flip.gif?raw=true"}),l.a.createElement("div",{"data-src":"https://github.com/b-tsui/Codelet-Frontend/raw/master/documentation/images/matching-game.gif?raw=true"}),l.a.createElement("div",{"data-src":"https://github.com/b-tsui/Codelet-Frontend/raw/master/documentation/images/quiz-game.gif?raw=true"}))},k=function(){var e=f()(E.a);return l.a.createElement(e,{play:!0,cancelOnInteraction:!1,interval:5e3},l.a.createElement("div",{"data-src":"https://clackurbucket.s3.us-east-2.amazonaws.com/clackss1.png"}),l.a.createElement("div",{"data-src":"https://lkang97.github.io/images/clack.png"}))},N=(t(20),function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){this.props.resumeData;return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Stuff I've made"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("div",{className:"row item portfolio-gallery"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,l.a.createElement("a",{href:"https://www.codelet.info/",target:"blank"},"Codelet"," "),l.a.createElement("a",{href:"https://github.com/b-tsui/Codelet-Frontend",target:"blank"},l.a.createElement("i",{className:"fa fa-github"}))),l.a.createElement("p",{className:"info"},"A coding themed study app that uses flashcards and fun games to ingrain learning objectives"),l.a.createElement("p",null,l.a.createElement(b,null)))),l.a.createElement("div",{className:"row item portfolio-gallery"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,l.a.createElement("a",{href:"https://clackur.herokuapp.com/",target:"blank"},"Clackur"," "),l.a.createElement("a",{href:"https://github.com/b-tsui/Clackur-App",target:"blank"},l.a.createElement("i",{className:"fa fa-github"}))),l.a.createElement("p",{className:"info"},"A social image sharing site made for the mechanical keyboard community"),l.a.createElement("p",null,l.a.createElement(v,null)))),l.a.createElement("div",{className:"row item portfolio-gallery"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,l.a.createElement("a",{href:"https://www.codelet.info/",target:"blank"},"Clack"," "),l.a.createElement("a",{href:"https://github.com/b-tsui/Codelet-Frontend",target:"blank"},l.a.createElement("i",{className:"fa fa-github"}))),l.a.createElement("p",{className:"info"},"Clack is a messaging application inspired by Slack that brings the team together"),l.a.createElement("p",null,l.a.createElement(k,null)))))))}}]),t}(n.Component)),w=(n.Component,function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"ten columns"},l.a.createElement("p",{className:"lead"},"Feel free to contact me for any work or suggestions below"))),l.a.createElement("div",{className:"row"},l.a.createElement("aside",{className:"eigth columns footer-widgets"},l.a.createElement("div",{className:"widget"},l.a.createElement("h4",null,"Linked in :",e.linkedinId)))))}}]),t}(n.Component)),y=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map((function(e){return l.a.createElement("li",null,l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),t}(n.Component),j={imagebaseurl:"https://media-exp1.licdn.com/dms/image/C5603AQEsPm9CPGqejA/profile-displayphoto-shrink_100_100/0?e=1595462400&v=beta&t=Towza838YVmph9tdIdYHHgECv_WFMo53qH9umseTIFU",name:"Brandon Tsui",role:"Software Engineer and Data Scientist",linkedinId:"Your LinkedIn Id",skypeid:"Your skypeid",roleDescription:" I have a passion for web development and am always yearning to learn new technologies and perfect existing ones",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/brandon-tsui-72474684/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/b-tsui",className:"fa fa-github"},{name:"email",url:"mailto:itstsui@gmail.com",className:"fa fa-envelope"}],aboutme:"I'm a software engineer with a passion for problem solving and the outdoors. I take pride in bringing new features and ideas to life, along with the challenges they bring. When I'm not tackling coding challenges at my desk, I enjoy working on problems at climbing gym and boulders around the world! ",address:"SF Bay Area",website:"btsui.dev@gmail.com",email:"btsui.dev@gmail.com",education:[{UniversityName:"App Academy",specialization:"Full Stack Web Development",MonthOfPassing:"July",YearOfPassing:"2020"},{UniversityName:"University of California, San Diego",specialization:"Economics, with minor in Data Science",MonthOfPassing:"June",YearOfPassing:"2018"}],work:[{CompanyName:"Some Company",specialization:"Some specialization",MonthOfLeaving:"Jan",YearOfLeaving:"2018",Achievements:"Some Achievements"},{CompanyName:"Some Company",specialization:"Some specialization",MonthOfLeaving:"Jan",YearOfLeaving:"2018",Achievements:"Some Achievements"}],skillsDescription:"JavaScript, Python React, Redux, Express, Node, Flask, SQLAlchemy, SQL(PostgreSQL), MongoDB, GraphQL, HTML5, CSS, AWS, Elasticsearch",skills:[{skillname:"Javascript"},{skillname:"Python"},{skillname:"Nodejs"},{skillname:"PostgreSQL"},{skillname:"AWS"},{skillname:"Reactjs"},{skillname:"HTML5"},{skillname:"CSS3"}],portfolio:[{name:"Clackur",description:"Image sharing app made by mechanical keyboard enthusiasts, by mechanical keyboard enthusiasts.",imgurl:"images/portfolio/phone.jpg"},{name:"Clack",description:"Instant messaging app inspired by slack",imgurl:"images/portfolio/project.jpg"},{name:"project3",description:"mobileapp",imgurl:"images/portfolio/project2.png"},{name:"project4",description:"mobileapp",imgurl:"images/portfolio/phone.jpg"}],testimonials:[{description:"This is a sample testimonial",name:"Some technical guy"},{description:"This is a sample testimonial",name:"Some technical guy"}]},C=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(u,{resumeData:j}),l.a.createElement(p,{resumeData:j}),l.a.createElement(d,{resumeData:j}),l.a.createElement(N,{resumeData:j}),l.a.createElement(w,{resumeData:j}),l.a.createElement(y,{resumeData:j}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[12,1,2]]]);
//# sourceMappingURL=main.a5b1f56f.chunk.js.map