(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{15:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(3),s=n.n(r),i=n(4),o=n(5),l=n(6),d=n(8),j=n(7),b=n(0),u=function(e){var t=e.onLeaveFeedback;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("button",{onClick:function(){return t(["good"])},children:"Good"}),Object(b.jsx)("button",{onClick:function(){return t(["neutral"])},children:"Neutral"}),Object(b.jsx)("button",{onClick:function(){return t(["bad"])},children:"Bad"})]})},h=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,r=e.positivePercentage;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("ul",{className:"Statistics",children:[a()?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("li",{children:["good: ",Object(b.jsx)("span",{children:t})]}),Object(b.jsxs)("li",{children:["Neutral: ",Object(b.jsx)("span",{children:n})]}),Object(b.jsxs)("li",{children:["Bad: ",Object(b.jsx)("span",{children:c})]}),Object(b.jsxs)("li",{children:["total: ",Object(b.jsx)("span",{children:a()})]})]}):Object(b.jsx)("li",{children:"No feedback given"}),r()>=1&&Object(b.jsxs)("li",{children:["Positive Feedback: ",Object(b.jsx)("span",{children:r()+"%"})]})]})})},O=function(e){var t=e.title,n=e.children;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("section",{children:[Object(b.jsx)("h2",{className:"title",children:t}),n]})})},x=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){e.setState((function(e){return Object(i.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){return e.state.good+e.state.neutral+e.state.bad},e.countPositiveFeedbackPercentage=function(){var t=e.state.good+e.state.neutral+e.state.bad;return Math.floor(100*e.state.good/t)},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(O,{title:"Please leave feedback",children:Object(b.jsx)(u,{onLeaveFeedback:this.onLeaveFeedback})}),Object(b.jsx)(O,{title:"Statistics",children:Object(b.jsx)(h,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback,positivePercentage:this.countPositiveFeedbackPercentage})})]})}}]),n}(c.Component);n(14);s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.3d0970b7.chunk.js.map