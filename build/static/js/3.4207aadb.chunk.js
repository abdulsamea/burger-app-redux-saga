(this["webpackJsonpburger-project"]=this["webpackJsonpburger-project"]||[]).push([[3],{102:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a(6),l=a(8),i=a(7),o=a(0),c=a.n(o),u=a(53),d=a(33),s=a(97),p=a.n(s),h=function(e){return c.a.createElement("div",{className:p.a.CheckoutSummary},c.a.createElement("h1",null,"We hope it tastes well!"),c.a.createElement("div",{style:{width:"100%",margin:"auto"}},c.a.createElement(u.a,{ingredients:e.ingredients})),c.a.createElement(d.a,{btnType:"Danger",clicked:e.checkoutCancelled},"CANCEL"),c.a.createElement(d.a,{btnType:"Success",clicked:e.checkoutContinue},"CONTINUE"))},m=a(3),v=a(4),g=a(98),f=a.n(g),C=a(20),b=a(34),y=a(95),E=a(15),k=a(42),j=a(16),I=a(17),O=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:"",validation:{required:!0,minLength:3},valid:!1,shouldValidate:!0,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Street"},value:"",validation:{required:!0},valid:!1,shouldValidate:!0,touched:!1},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"Zip Code"},value:"",validation:{required:!0,minLength:5},valid:!1,shouldValidate:!0,touched:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Your country"},value:"",validation:{required:!0},valid:!1,shouldValidate:!0,touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your E-mail"},value:"",validation:{required:!0},valid:!1,shouldValidate:!0,touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},validation:{required:!0},valid:!0,value:"cheapest",shouldValidate:!1}},loading:!1,formIsValid:!1},e.orderHandler=function(t){t.preventDefault();var a={};for(var n in e.state.orderForm)a[n]=e.state.orderForm[n].value;var r={ingredients:e.props.ings,price:e.props.price,orderData:a,userId:e.props.userId};e.props.onOrderBurger(r,e.props.token)},e.inputChangedHandler=function(t,a){var n=Object(v.a)({},e.state.orderForm),r=Object(v.a)({},n[a]);r.value=t.target.value,r.touched=!0,r.valid=Object(I.a)(r.value,r.validation),n[a]=r;var l=!0;for(var i in n)l=n[i].valid&&l;e.setState({orderForm:n,formIsValid:l})},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this,t=[];for(var a in this.state.orderForm)t.push({id:a,config:this.state.orderForm[a]});var n=c.a.createElement("form",{onSubmit:this.orderHandler},t.map((function(t){return c.a.createElement(y.a,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,Invalid:!t.config.valid,shouldValidate:t.config.shouldValidate,touched:t.config.touched,changed:function(a){return e.inputChangedHandler(a,t.id)}})})),c.a.createElement(d.a,{btnType:"Success",disabled:!this.state.formIsValid},"ORDER"));return this.props.loading&&(n=c.a.createElement(b.a,null)),c.a.createElement("div",{className:f.a.ContactData},c.a.createElement("h4",null,"Enter your contact data"),n)}}]),a}(o.Component),_=Object(E.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onOrderBurger:function(t,a){return e(j.g(t,a))}}}))(Object(k.a)(O,C.a)),V=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).checkoutCancelledHandler=function(){e.props.history.goBack()},e.checkoutContinueHandler=function(){e.props.history.replace("/checkout/contact-data")},e}return Object(r.a)(a,[{key:"render",value:function(){var e=c.a.createElement(m.a,{to:"/"});if(this.props.ings){var t=this.props.purchased?c.a.createElement(m.a,{to:"/"}):null;e=c.a.createElement("div",null,t,c.a.createElement(h,{ingredients:this.props.ings,checkoutCancelled:this.checkoutCancelledHandler,checkoutContinue:this.checkoutContinueHandler}),c.a.createElement(m.b,{path:this.props.match.path+"/contact-data",component:_}))}return e}}]),a}(o.Component);t.default=Object(E.b)((function(e){return{ings:e.burgerBuilder.ingredients,purchased:e.order.purchased}}))(V)},95:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(96),i=a.n(l);t.a=function(e){var t=null,a=[i.a.InputElement];switch(e.Invalid&&e.shouldValidate&&e.touched&&a.push(i.a.Invalid),e.elementType){case"input":t=r.a.createElement("input",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=r.a.createElement("textarea",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=r.a.createElement("select",{className:a.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.displayValue)})));break;default:t=r.a.createElement("input",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return r.a.createElement("div",{className:i.a.Input},r.a.createElement("label",{className:i.a.Label},e.label),t)}},96:function(e,t,a){e.exports={Input:"Input_Input__2ka1K",Label:"Input_Label__Sqe3P",InputElement:"Input_InputElement__39Qvc",Invalid:"Input_Invalid__206g3"}},97:function(e,t,a){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__Xtp0W"}},98:function(e,t,a){e.exports={ContactData:"ContactData_ContactData__2Vb16"}}}]);
//# sourceMappingURL=3.4207aadb.chunk.js.map