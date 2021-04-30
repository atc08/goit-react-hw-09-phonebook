(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[0],{90:function(t,e,n){t.exports={container:"ViewsStyles_container__2DA_S",title:"ViewsStyles_title__2PTun",form:"ViewsStyles_form__2DQzQ",label:"ViewsStyles_label__3pK1Z",wrapper:"ViewsStyles_wrapper__LKLFw"}},91:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var a=n(48);function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],a=!0,c=!1,r=void 0;try{for(var o,s=t[Symbol.iterator]();!(a=(o=s.next()).done)&&(n.push(o.value),!e||n.length!==e);a=!0);}catch(i){c=!0,r=i}finally{try{a||null==s.return||s.return()}finally{if(c)throw r}}return n}}(t,e)||Object(a.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},92:function(t,e,n){t.exports={ContactList:"ContactList_ContactList__2BBw_",ContactListItem:"ContactList_ContactListItem__UECXt",ContactListItemText:"ContactList_ContactListItemText__3TTlV",ContactListItemButton:"ContactList_ContactListItemButton__UopRs"}},93:function(t,e,n){t.exports={FormContainer:"ContactForm_FormContainer__1hN32",InputTitle:"ContactForm_InputTitle__2PYFP",InputField:"ContactForm_InputField__3O0kt",InputButton:"ContactForm_InputButton__1VNWg"}},94:function(t,e,n){t.exports={FilterText:"Filter_FilterText__3kS-I",FilterInput:"Filter_FilterInput__1IMhw"}},95:function(t,e,n){"use strict";n.r(e);var a=n(1),c=(n(0),n(90)),r=n.n(c);e.default=function(){return Object(a.jsx)("div",{className:r.a.container,children:Object(a.jsx)("h1",{className:r.a.title,children:"Welcome to Phonebook "})})}},96:function(t,e,n){"use strict";n.r(e);var a=n(91),c=n(1),r=n(0),o=n(8),s=n(12),i=n(90),l=n.n(i);e.default=function(){var t=Object(o.b)(),e=Object(r.useState)(""),n=Object(a.a)(e,2),i=n[0],u=n[1],b=Object(r.useState)(""),j=Object(a.a)(b,2),m=j[0],O=j[1],f=Object(r.useState)(""),p=Object(a.a)(f,2),h=p[0],d=p[1],x=Object(r.useCallback)((function(t){u(t.target.value),O(t.target.value),d(t.target.value)}),[]),v=Object(r.useCallback)((function(e){e.preventDefault(),i&&m&&h?(t(Object(s.f)(i,m,h)),C()):alert("Please fill this form")}),[t,i,m,h]),C=function(){u(""),O(""),d("")};return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"SignUp Page"}),Object(c.jsxs)("form",{onSubmit:v,className:l.a.form,autoComplete:"off",children:[Object(c.jsxs)("label",{className:l.a.label,children:["Name",Object(c.jsx)("input",{type:"text",name:"name",value:i,onChange:x})]}),Object(c.jsxs)("label",{className:l.a.label,children:["Email",Object(c.jsx)("input",{type:"email",name:"email",value:m,onChange:x})]}),Object(c.jsxs)("label",{className:l.a.label,children:["Password",Object(c.jsx)("input",{type:"password",name:"password",value:h,onChange:x})]}),Object(c.jsx)("button",{type:"submit",children:"SignUp"})]})]})}},97:function(t,e,n){"use strict";n.r(e);var a=n(91),c=n(1),r=n(0),o=n(8),s=n(12),i=n(90),l=n.n(i);e.default=function(){var t=Object(o.b)(),e=Object(r.useState)(""),n=Object(a.a)(e,2),i=n[0],u=n[1],b=Object(r.useState)(""),j=Object(a.a)(b,2),m=j[0],O=j[1],f=Object(r.useCallback)((function(t){u(t.target.value),O(t.target.value)}),[]),p=Object(r.useCallback)((function(e){e.preventDefault(),i&&m||alert("Please fill this form"),t(Object(s.d)(i,m)),h()}),[t,i,m]),h=function(){u(""),O("")};return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"LogIn Page"}),Object(c.jsxs)("form",{onSubmit:p,className:l.a.form,autoComplete:"off",children:[Object(c.jsxs)("label",{className:l.a.label,children:["Email",Object(c.jsx)("input",{type:"email",name:"email",value:i,onChange:f})]}),Object(c.jsxs)("label",{className:l.a.label,children:["Password",Object(c.jsx)("input",{type:"password",name:"password",value:m,onChange:f})]}),Object(c.jsx)("button",{type:"submit",children:"SignIn"})]})]})}},98:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(0),r=n(8),o=n(10),s=n(19),i=n.n(s);i.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var l=n(29),u=function(t){return t.phonebook.loading},b=function(t){return t.phonebook.contacts},j=function(t){return t.phonebook.filter},m=Object(l.a)([b,j],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),O=n(49),f=n(91),p=n(93),h=n.n(p);var d=function(){var t=Object(r.b)(),e=Object(c.useState)(""),n=Object(f.a)(e,2),s=n[0],l=n[1],u=Object(c.useState)(""),j=Object(f.a)(u,2),m=j[0],O=j[1],p=Object(r.c)(b),d=Object(c.useCallback)((function(t){l(t.target.value),O(t.target.value)}),[]),x=Object(c.useCallback)((function(e){return e.preventDefault(),p.some((function(t){return t.name.toLowerCase()===s.toLowerCase()}))?alert("".concat(s," is already in contacts")):p.some((function(t){return t.number.toLowerCase()===m.toLowerCase()}))?alert("".concat(m," is already in contacts")):void(s&&m&&(t((n=s,function(t){t(Object(o.b)()),i.a.post("/contacts",n).then((function(e){var n=e.data;return t(Object(o.c)(n))})).catch((function(e){return t(Object(o.a)(e.message))}))})),v()));var n}),[t,p,s,m]),v=function(){l(""),O("")};return Object(a.jsx)("div",{className:h.a.FormContainer,children:Object(a.jsxs)("form",{onSubmit:x,children:[Object(a.jsxs)("label",{children:[Object(a.jsx)("p",{className:h.a.InputTitle,children:"Name"}),Object(a.jsx)("input",{type:"text",name:"name",value:s,placeholder:"Enter name",onChange:d,className:h.a.InputField})]}),Object(a.jsxs)("label",{children:[Object(a.jsx)("p",{className:h.a.InputTitle,children:"Phone number"}),Object(a.jsx)("input",{type:"tel",name:"number",value:m,placeholder:"Enter phone number",onChange:d,className:h.a.InputField})]}),Object(a.jsx)("button",{type:"submit",className:h.a.InputButton,children:"Add contact"})]})})},x=n(92),v=n.n(x),C=function(t){var e=t.id,n=t.name,c=t.number,r=t.onDeleteContact;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("p",{className:v.a.ContactListItemText,children:[n,": ",c]}),Object(a.jsx)("button",{type:"button",onClick:function(){return r(e)},className:v.a.ContactListItemButton,children:"Delete"})]})};var _=function(){var t=Object(r.c)(m),e=Object(r.b)(),n=function(t){return e(function(t){return function(e){e(Object(o.f)()),i.a.delete("/contacts/".concat(t)).then((function(){return e(Object(o.g)(t))})).catch((function(t){return e(Object(o.e)(t.message))}))}}(t))};return 0===t.length?null:Object(a.jsx)("ul",{className:v.a.ContactList,children:t.map((function(t){var e=t.id,c=t.name,r=t.number;return Object(a.jsx)("li",{className:v.a.ContactListItem,children:Object(a.jsx)(C,{id:e,name:c,number:r,onDeleteContact:n})},e)}))})},g=n(94),y=n.n(g);var I=function(){var t=Object(r.b)(),e=Object(r.c)(j);return Object(a.jsxs)("label",{children:[Object(a.jsx)("p",{className:y.a.FilterText,children:"Find contacts by name :"}),Object(a.jsx)("input",{type:"text",value:e,onChange:function(e){return t(Object(o.d)(e.target.value))},placeholder:"Enter name for search",className:y.a.FilterInput})]})},w=n(90),L=n.n(w);e.default=function(){var t=Object(r.b)(),e=Object(r.c)(u);return Object(c.useEffect)((function(){t((function(t){t(Object(o.i)()),i.a.get("/contacts").then((function(e){var n=e.data;return t(Object(o.j)(n))})).catch((function(e){return t(Object(o.h)(e.message))}))}))}),[t]),Object(a.jsx)(O.a,{children:Object(a.jsxs)("div",{className:L.a.wrapper,children:[e&&Object(a.jsx)("h1",{children:"LOADING..."}),Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(d,{}),Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)(I,{}),Object(a.jsx)(_,{})]})})}}}]);
//# sourceMappingURL=home-page.d9ebd32c.chunk.js.map