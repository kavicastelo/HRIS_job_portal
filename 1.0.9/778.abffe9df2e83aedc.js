"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[778],{7778:(y,l,o)=>{o.r(l),o.d(l,{InterviewPrepModule:()=>Z});var p=o(6895),g=o(1779),_=o(1374),n=o(4650),c=o(9022),u=o(7392),d=o(3267),v=o(6153);function C(e,i){if(1&e){const t=n.EpF();n.TgZ(0,"li",11),n.NdJ("click",function(){const s=n.CHM(t).$implicit,w=n.oxw(2);return n.KtG(w.selectQuestion(s))}),n._uU(1),n.qZA()}if(2&e){const t=i.$implicit;n.xp6(1),n.hij(" ",t.question," ")}}function P(e,i){if(1&e&&(n.TgZ(0,"mat-accordion")(1,"mat-expansion-panel")(2,"mat-expansion-panel-header")(3,"mat-panel-title"),n._uU(4),n.qZA()(),n.TgZ(5,"ul"),n.YNc(6,C,2,1,"li",10),n.qZA()()()),2&e){const t=i.$implicit;n.xp6(4),n.hij(" ",t.category," "),n.xp6(2),n.Q6J("ngForOf",t.questions)}}const m=function(e,i){return["/interview-prep-answer",e,i]};function O(e,i){if(1&e&&(n.TgZ(0,"div",16)(1,"div",17)(2,"div",18),n._uU(3),n.qZA(),n.TgZ(4,"button",19),n._uU(5,"View"),n.qZA()(),n.TgZ(6,"p"),n._uU(7),n.qZA(),n.TgZ(8,"div",20),n._uU(9),n.qZA(),n.TgZ(10,"p",21),n._uU(11),n.ALo(12,"truncate"),n.qZA()()),2&e){const t=i.$implicit,r=i.index,a=n.oxw(2);n.xp6(3),n.hij("Sample Answer ",r+1,""),n.xp6(1),n.Q6J("routerLink",n.WLB(11,m,a.selectedQuestion.id,t.id)),n.xp6(3),n.AsE("By ",t.by+", "," ",t.position,""),n.xp6(2),n.lnq(" ",t.viewCount," ",1===t.viewCount?"view":"views"," ",t.video?" \u2022 video included":""," "),n.xp6(2),n.Oqu(n.xi3(12,8,t.answer,200))}}function x(e,i){if(1&e&&(n.ynx(0),n.TgZ(1,"div",12)(2,"div",13)(3,"h3"),n._uU(4),n.qZA(),n.TgZ(5,"p"),n._uU(6),n.qZA()(),n.TgZ(7,"div",14)(8,"p"),n._uU(9),n.qZA()()(),n.YNc(10,O,13,14,"div",15),n.BQk()),2&e){const t=n.oxw();n.xp6(4),n.Oqu(t.selectedQuestion.question),n.xp6(2),n.hij("",t.selectedQuestion.viewCount," people viewed this question"),n.xp6(3),n.Oqu(t.selectedQuestion.overview),n.xp6(1),n.Q6J("ngForOf",t.selectedQuestion.answers)}}const M=[{path:"",component:(()=>{class e{constructor(){this.interviewPrepData=_.l.data,this.selectedQuestion=this.interviewPrepData[0].questions[0]}ngOnInit(){this.incrementViewCount(this.selectedQuestion)}selectQuestion(t){this.selectedQuestion=t,this.incrementViewCount(t)}incrementViewCount(t){sessionStorage.getItem(`token_${t.id}`)||(sessionStorage.setItem(`token_${t.id}`,"true"),t.viewCount++)}static#n=this.\u0275fac=function(r){return new(r||e)};static#t=this.\u0275cmp=n.Xpm({type:e,selectors:[["app-interview-prep"]],decls:14,vars:3,consts:[[1,"btn-2",3,"click"],[1,"w-100"],[1,"drawer-container"],["mode","over",1,"drawer"],["drawer",""],[1,"accordion"],[4,"ngFor","ngForOf"],[1,"footer-tag"],[1,"container"],[4,"ngIf"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],[1,"card-1","p-0","overflow-hidden"],[1,"top"],[1,"bottom"],["class","card-1",4,"ngFor","ngForOf"],[1,"card-1"],[1,"d-flex","align-items-center","justify-content-between"],[1,"title-1"],[1,"view-btn",3,"routerLink"],[1,"views-tag"],[1,"m-2"]],template:function(r,a){if(1&r){const s=n.EpF();n.TgZ(0,"button",0),n.NdJ("click",function(){n.CHM(s);const T=n.MAs(6);return n.KtG(T.toggle())}),n.TgZ(1,"mat-icon"),n._uU(2),n.qZA()(),n.TgZ(3,"div",1)(4,"mat-drawer-container",2)(5,"mat-drawer",3,4)(7,"div",5),n.YNc(8,P,7,2,"mat-accordion",6),n.qZA(),n.TgZ(9,"div",7),n._uU(10," Powered By: TALENT BOOZT "),n.qZA()(),n.TgZ(11,"mat-drawer-content")(12,"div",8),n.YNc(13,x,11,4,"ng-container",9),n.qZA()()()()}if(2&r){const s=n.MAs(6);n.xp6(2),n.Oqu(s.opened?"arrow_back_ios":"arrow_forward_ios"),n.xp6(6),n.Q6J("ngForOf",a.interviewPrepData),n.xp6(5),n.Q6J("ngIf",a.selectedQuestion)}},dependencies:[p.sg,p.O5,g.rH,c.pp,c.ib,c.yz,c.yK,u.Hw,d.jA,d.kh,d.LW,v.W],styles:[".btn-2[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content;height:-moz-fit-content;height:fit-content;padding:8px 10px;border-radius:0 10px 10px 0;position:absolute;top:100px;left:0;z-index:9}.btn-2[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content;height:-moz-fit-content;height:fit-content;font-size:18px;padding:0;margin:0}.view-btn[_ngcontent-%COMP%]{background-color:transparent;color:var(--color-text-200);padding:5px 10px;border-radius:20px;border:2px solid var(--color-secondary-600);cursor:pointer;transition:all .3s ease-in-out}.view-btn[_ngcontent-%COMP%]:hover{background-color:var(--color-secondary-600);color:#fff}.drawer-container[_ngcontent-%COMP%]{width:100%;max-height:100vh}.drawer-container[_ngcontent-%COMP%]   .drawer[_ngcontent-%COMP%]{width:250px;height:100%}.drawer-container[_ngcontent-%COMP%]   .drawer[_ngcontent-%COMP%]   .accordian[_ngcontent-%COMP%]{margin-bottom:26px;overflow-y:auto}.drawer-container[_ngcontent-%COMP%]   .drawer[_ngcontent-%COMP%]   .accordian[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0 0 0 24px}.drawer-container[_ngcontent-%COMP%]   .drawer[_ngcontent-%COMP%]   .accordian[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:10px 5px;cursor:pointer;color:var(--color-text-300)}.drawer-container[_ngcontent-%COMP%]   .drawer[_ngcontent-%COMP%]   .accordian[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:var(--color-surface-mixed-400);color:var(--color-text-100);cursor:pointer}.drawer-container[_ngcontent-%COMP%]   .drawer[_ngcontent-%COMP%]   .footer-tag[_ngcontent-%COMP%]{width:100%;height:24px;text-align:center;display:flex;align-items:center;justify-content:center;color:var(--color-text-400);position:absolute;bottom:0;left:0;font-size:12px;background-color:var(--color-surface-200)}.drawer-container[_ngcontent-%COMP%]   .drawer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0}.drawer-container[_ngcontent-%COMP%]   .drawer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:10px 5px;cursor:pointer;color:var(--color-text-300)}.drawer-container[_ngcontent-%COMP%]   .drawer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:var(--color-surface-mixed-400);color:var(--color-text-100);cursor:pointer}.drawer-container[_ngcontent-%COMP%]   .drawer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .list-2[_ngcontent-%COMP%]{padding-left:24px}.drawer-container[_ngcontent-%COMP%]   .drawer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px;margin-left:20px}.drawer-container[_ngcontent-%COMP%]   mat-drawer-content[_ngcontent-%COMP%]{width:100%;max-height:calc(100vh - 70px);overflow-y:auto;min-height:calc(100vh - 70px)}.card-1[_ngcontent-%COMP%]{background-color:var(--color-surface-100);position:relative;margin:max(20px,1.2vw) 0}.card-1[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]{background-color:var(--color-primary-600-opacity-3);padding:30px}.card-1[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px}.card-1[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]{padding:30px}.card-1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.card-1[_ngcontent-%COMP%]   .views-tag[_ngcontent-%COMP%]{font-size:14px;color:var(--color-text-400)}"]})}return e})()}];let f=(()=>{class e{static#n=this.\u0275fac=function(r){return new(r||e)};static#t=this.\u0275mod=n.oAB({type:e});static#e=this.\u0275inj=n.cJS({imports:[g.Bz.forChild(M),g.Bz]})}return e})();var h=o(5829);let Z=(()=>{class e{static#n=this.\u0275fac=function(r){return new(r||e)};static#t=this.\u0275mod=n.oAB({type:e});static#e=this.\u0275inj=n.cJS({imports:[p.ez,f,c.To,u.Ps,d.SJ,h.D]})}return e})()}}]);