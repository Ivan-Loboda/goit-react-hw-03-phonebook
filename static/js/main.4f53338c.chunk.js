(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={listItem:"ContactList_listItem__2FJ8s"}},15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(9),o=n.n(r),s=n(8),i=n(2),u=n(3),l=n(4),b=n(6),h=n(5),j=(n(15),n(19)),d=n(0),m=function(t){Object(b.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.reset=function(){t.setState({name:"",number:""})},t.formSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.handleInputChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(i.a)({},a,c))},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("form",{onSubmit:this.formSubmit,children:[Object(d.jsxs)("label",{children:[" Name",Object(d.jsx)("input",{value:this.state.name,onChange:this.handleInputChange,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(d.jsxs)("label",{children:[" Phone",Object(d.jsx)("input",{value:this.state.number,onChange:this.handleInputChange,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(d.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(a.Component),f=m,p=function(t){var e=t.inputChange,n=t.filter;return Object(d.jsxs)("label",{children:["Find contacts by name",Object(d.jsx)("input",{value:n,onChange:e,type:"text",name:"filter"})]})},O=n(10),v=n.n(O),C=function(t){var e=t.contactsData,n=t.onRemoveContact;return Object(d.jsx)("ul",{children:e.map((function(t){return Object(d.jsxs)("li",{className:v.a.listItem,children:[Object(d.jsxs)("p",{children:[t.name," :"]}),Object(d.jsx)("p",{children:t.number}),Object(d.jsx)("button",{type:"button",onClick:function(){return n(t.id)},children:"Delete"})]},t.id)}))})},x=function(t){Object(b.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.handleInputChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(i.a)({},a,c))},t.addContact=function(e){var n=e.name,a=e.number,c={id:Object(j.a)(),name:n,number:a},r=t.state.contacts.find((function(t){return n.toLowerCase()===t.name.toLowerCase()}));r?alert("".concat(n," is already in contacts!")):t.setState((function(t){return{contacts:[].concat(Object(s.a)(t.contacts),[c])}}))},t.removeContact=function(e){t.setState((function(t){return{contacts:Object(s.a)(t.contacts).filter((function(t){return t.id!==e}))}}))},t.filterContact=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contacts"));t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(t){this.state.contacts!==t.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.filter;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"Phonebook"}),Object(d.jsx)(f,{onSubmit:this.addContact}),Object(d.jsx)("h2",{children:"Contacts"}),Object(d.jsx)(p,{inputChange:this.handleInputChange,filter:t}),Object(d.jsx)(C,{contactsData:this.filterContact(),onRemoveContact:this.removeContact})]})}}]),n}(a.Component),g=x;o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.4f53338c.chunk.js.map