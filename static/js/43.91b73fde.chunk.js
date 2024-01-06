"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[43],{7719:function(n,e,r){r.d(e,{Dx:function(){return s},NZ:function(){return f},Xw:function(){return x},aV:function(){return m},gK:function(){return h}});var t,o,i,a,c,u=r(168),l=r(225),d=r(1087),s=l.Z.h1(t||(t=(0,u.Z)(["\n  color: #dca75d;\n  width: 100%;\n  margin: auto;\n  text-align: center;\n"]))),f=l.Z.h2(o||(o=(0,u.Z)(["\n  margin-bottom: 20px;\n  font-size: 30px;\n  color: #dca75d;\n"]))),x=l.Z.h3(i||(i=(0,u.Z)(["\n  color: #b36a06;\n"]))),m=l.Z.p(a||(a=(0,u.Z)(["\n  color: #f6d9b1;\n  width: 100%;\n  margin: auto;\n  margin-top: 20px;\n  font-size: 24px;\n  text-align: center;\n"]))),h=(0,l.Z)(d.rU)(c||(c=(0,u.Z)(["\n  color: #dca75d;\n  text-decoration: underline;\n"])))},3043:function(n,e,r){r.r(e),r.d(e,{default:function(){return U}});var t,o,i,a=r(9439),c=r(2791),u=r(4420),l=r(5984),d=r(1686),s=r(4294),f=r(9504),x=r.n(f),m=r(9620),h=function(n){return n.contacts.list},p=function(n){return n.contacts.isLoading},b=function(n){return n.contacts.error},Z=r(168),v=r(225),g=r(7757),j=r(9276),y=(0,v.Z)(j.Z)(t||(t=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n"]))),w=(0,v.Z)(g.Z)({"& label":{color:"#f6d9b1"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"#f6d9b1"}}}),C=r(184),k=function(){var n=(0,c.useState)(""),e=(0,a.Z)(n,2),r=e[0],t=e[1],o=(0,c.useState)(""),i=(0,a.Z)(o,2),f=i[0],p=i[1],b=(0,u.I0)(),Z=(0,u.v9)(h),v={name:t,number:p},g=(0,l.x0)(),j=(0,l.x0)(),k=function(n){var e=n.currentTarget,r=e.name,t=e.value;v[r](t)},_=function(){t(""),p("")};return(0,C.jsxs)(y,{component:"form",sx:{"& > :not(style)":{m:1,width:"32ch",input:{color:"#f6d9b1"}}},action:"submit",onSubmit:function(n){n.preventDefault();var e={name:r,number:f};Z.find((function(n){return n.name.toLowerCase().trim()===e.name.toLowerCase().trim()}))?d.Notify.failure("Contact with this name already exist"):(b((0,m.uK)(e)),_())},children:[(0,C.jsx)(w,{label:"Name",variant:"outlined",type:"text",name:"name",id:g,value:r,required:!0,onChange:k}),(0,C.jsx)(x(),{mask:"999-999-9999",maskChar:"",value:f,onChange:k,children:function(){return(0,C.jsx)(w,{label:"number",variant:"outlined",type:"tel",name:"number",id:j,required:!0})}}),(0,C.jsx)(s.Z,{variant:"outlined",type:"submit",children:"Add contact"})]})},_=r(8870),I=r(493),L=r(1889),P=r(4852),T=r(653),z=r(3126),N=r(3044),S=r(3400),X=r(501),q=r(7247),F=function(n){var e=n.id,r=n.name,t=n.number,o=(0,u.I0)();return(0,C.jsxs)(P.ZP,{secondaryAction:(0,C.jsx)(S.Z,{edge:"end","aria-label":"delete",onClick:function(){return function(n){o((0,m.GK)(n))}(e)},children:(0,C.jsx)(q.Z,{color:"primary"})}),children:[(0,C.jsx)(T.Z,{children:(0,C.jsx)(N.Z,{sx:{backgroundColor:"#f6d9b1",color:"#252525"},children:(0,C.jsx)(X.Z,{fontSize:"large"})})}),(0,C.jsx)(z.Z,{primary:r,secondary:t,primaryTypographyProps:{color:"#f6d9b1"},secondaryTypographyProps:{color:"#dca75d"},sx:{textTransform:"capitalize"}})]})},K=function(n){return n.filter.value},A=(0,r(7630).ZP)("div")((function(){return{backgroundColor:"#252525"}})),D=r(7719),E=function(){var n=(0,u.v9)(h),e=(0,u.v9)(p),r=(0,u.v9)(b),t=(0,u.v9)(K),o=(0,u.I0)();(0,c.useEffect)((function(){o((0,m.yF)())}),[o]);var i=function(){var e=t.toLowerCase().trim();return n.filter((function(n){return n.name.toLowerCase().includes(e)}))}(),a=!i.length&&!e&&!r;return(0,C.jsxs)(C.Fragment,{children:[e&&(0,C.jsx)(D.Xw,{children:"Loading ..."}),a&&(0,C.jsx)(D.Xw,{children:"The contact list is empty"}),i&&(0,C.jsx)(_.Z,{sx:{flexGrow:1,maxWidth:752},children:(0,C.jsx)(L.ZP,{item:!0,xs:12,md:6,children:(0,C.jsx)(A,{children:(0,C.jsx)(I.Z,{children:i.map((function(n){var e=n.id,r=n.name,t=n.number;return(0,C.jsx)(F,{id:e,name:r,number:t},e)})).toReversed()})})})}),r&&!n.length&&(0,C.jsxs)(D.Xw,{children:["Requets Error - ",r]})]})},G=r(1634),M=(0,v.Z)(g.Z)({"& label":{color:"#f6d9b1"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"#f6d9b1"}}}),O=function(){var n=(0,u.v9)(K),e=(0,u.I0)(),r=(0,l.x0)();return(0,C.jsx)(M,{label:"Find contacts by name",type:"text",name:"filter",id:r,value:n,onChange:function(n){var r=n.currentTarget.value;e((0,G.a8)(r))},variant:"outlined",sx:{"& > :not(style)":{m:1,width:"32ch",input:{color:"#f6d9b1"},marginBottom:"20px"}}})},R=v.Z.section(o||(o=(0,Z.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: calc(10% + 20px);\n  padding: 20px 100px;\n"]))),B=v.Z.h2(i||(i=(0,Z.Z)(["\n  margin-bottom: 20px;\n  color: #dca75d;\n"]))),U=function(){return(0,C.jsxs)(R,{children:[(0,C.jsxs)("div",{children:[(0,C.jsx)(D.NZ,{children:"Phonebook"}),(0,C.jsx)(k,{})]}),(0,C.jsxs)("div",{children:[(0,C.jsx)(B,{children:"Contacts"}),(0,C.jsx)(O,{}),(0,C.jsx)(E,{})]})]})}}}]);
//# sourceMappingURL=43.91b73fde.chunk.js.map