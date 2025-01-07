"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[6917],{6917:(H,m,a)=>{a.r(m),a.d(m,{MonitoringDashboardModule:()=>z});var l=a(177),g=a(3331),t=a(4438),p=a(1626),v=a(5312);let h=(()=>{class s{constructor(e){this.http=e,this.baseUrl=v.c.apiUrlSimple,this.cBaseUrl=v.c.apiUrl}getHealthMetrics(){const e=new p.Lr({Authorization:"Basic "+btoa("admin:password")});return this.http.get(`${this.baseUrl}/actuator/health`,{headers:e})}getPerformanceMetrics(){const e=new p.Lr({Authorization:"Basic "+btoa("admin:password")});return this.http.get(`${this.baseUrl}/actuator/metrics`,{headers:e})}getMetricData(e){const i=new p.Lr({Authorization:"Basic "+btoa("admin:password")});return this.http.get(`${this.baseUrl}/actuator/metrics/${e}`,{headers:i})}getTaskExecutionMetrics(){const e=new p.Lr({Authorization:"Basic "+btoa("admin:password")});return this.http.get(`${this.cBaseUrl}/metrics/task-executor`,{headers:e})}getUserActivityMetrics(){const e=new p.Lr({Authorization:"Basic "+btoa("admin:password")});return this.http.get(`${this.cBaseUrl}/metrics/user-activity`,{headers:e})}fetchUserActivities(){const e=new p.Lr({Authorization:"Basic "+btoa("admin:password")});return this.http.get(`${this.cBaseUrl}/metrics/user-activities`,{headers:e})}clearUserActivities(){const e=new p.Lr({Authorization:"Basic "+btoa("admin:password")});return this.http.delete(`${this.cBaseUrl}/metrics/delete/user-activities`,{headers:e})}getActiveUsers(){const e=new p.Lr({Authorization:"Basic "+btoa("admin:password")});return this.http.get(`${this.cBaseUrl}/metrics/active-users`,{headers:e})}getActivityTrends(e){const i=new p.Lr({Authorization:"Basic "+btoa("admin:password")});return this.http.get(`${this.cBaseUrl}/metrics/activity-trends?interval=${e}`,{headers:i})}static{this.\u0275fac=function(i){return new(i||s)(t.KVO(p.Qq))}}static{this.\u0275prov=t.jDH({token:s,factory:s.\u0275fac,providedIn:"root"})}}return s})();function F(s,c){if(1&s&&(t.j41(0,"li"),t.EFF(1),t.k0s()),2&s){const e=c.$implicit;t.R7$(),t.Lme(" ",e.key,": ",e.value," ")}}function k(s,c){if(1&s&&(t.j41(0,"tr")(1,"td"),t.EFF(2),t.k0s(),t.j41(3,"td"),t.EFF(4),t.nrm(5,"i",3),t.k0s(),t.j41(6,"td")(7,"ul"),t.DNE(8,F,2,2,"li",6),t.nI1(9,"keyvalue"),t.k0s()()()),2&s){const e=c.$implicit;t.R7$(2),t.JRh(e.name),t.R7$(),t.AVh("up","UP"===e.status)("down","UP"!==e.status),t.R7$(),t.SpI(" ",e.status," "),t.R7$(),t.Y8G("ngClass","UP"===e.status?"fa fa-caret-up":"fa fa-caret-down"),t.R7$(3),t.Y8G("ngForOf",t.bMT(9,8,e.details))}}let C=(()=>{class s{constructor(e){this.monitoringService=e,this.healthMetrics=[],this.overallStatus="",this.serverUpTime="",this.freeDiskSpace=0,this.totalDiskSpace=0,this.freeSpacePercentage=0,this.usedSpacePercentage=0,this.progressBarClass=""}ngOnInit(){this.monitoringService.getHealthMetrics().subscribe(e=>{this.overallStatus=e.status,this.serverUpTime=e.components.uptime.details.uptime,this.healthMetrics=Object.entries(e.components).map(([r,n])=>({name:r,status:n.status,details:n.details}));const i=e.components.diskSpace.details;this.freeDiskSpace=i.free/1024/1024/1024,this.totalDiskSpace=i.total/1024/1024/1024,this.freeSpacePercentage=this.freeDiskSpace/this.totalDiskSpace*100,this.usedSpacePercentage=(this.totalDiskSpace-this.freeDiskSpace)/this.totalDiskSpace*100,this.freeSpacePercentage<20||this.usedSpacePercentage>80?this.progressBarClass="low":this.freeSpacePercentage<50||this.usedSpacePercentage>50?this.progressBarClass="medium":(this.freeSpacePercentage<80||this.usedSpacePercentage>20)&&(this.progressBarClass="high")})}static{this.\u0275fac=function(i){return new(i||s)(t.rXU(h))}}static{this.\u0275cmp=t.VBU({type:s,selectors:[["app-health-metrics"]],decls:67,vars:30,consts:[[1,"container"],[1,"health-dashboard"],[1,"overall-status"],["aria-hidden","true",3,"ngClass"],["aria-hidden","true",1,"fa","fa-clock-o"],[1,"health-table"],[4,"ngFor","ngForOf"],[1,"row"],[1,"col-12","col-md-6"],[1,"disk-space-dashboard"],[1,"progress-bar-container"],[1,"progress-bar-background"],[1,"progress-bar-fill",3,"ngClass"],[1,"progress-text"]],template:function(i,r){1&i&&(t.j41(0,"div",0)(1,"div",1)(2,"h2"),t.EFF(3,"Health Metrics"),t.k0s(),t.j41(4,"div",2)(5,"p")(6,"strong"),t.EFF(7,"Overall Status:"),t.k0s(),t.EFF(8),t.nrm(9,"i",3),t.k0s(),t.j41(10,"p")(11,"strong"),t.EFF(12,"Server Uptime:"),t.k0s(),t.EFF(13),t.nrm(14,"i",4),t.k0s()(),t.j41(15,"table",5)(16,"thead")(17,"tr")(18,"th"),t.EFF(19,"Component"),t.k0s(),t.j41(20,"th"),t.EFF(21,"Status"),t.k0s(),t.j41(22,"th"),t.EFF(23,"Details"),t.k0s()()(),t.j41(24,"tbody"),t.DNE(25,k,10,10,"tr",6),t.k0s()()(),t.j41(26,"div",7)(27,"div",8)(28,"div",9)(29,"h3"),t.EFF(30,"Free Disk Space"),t.k0s(),t.j41(31,"div",10)(32,"div",11),t.nrm(33,"div",12),t.k0s(),t.j41(34,"span",13),t.EFF(35),t.nI1(36,"number"),t.k0s()(),t.j41(37,"p")(38,"strong"),t.EFF(39,"Free Space:"),t.k0s(),t.EFF(40),t.nI1(41,"number"),t.k0s(),t.j41(42,"p")(43,"strong"),t.EFF(44,"Total Space:"),t.k0s(),t.EFF(45),t.nI1(46,"number"),t.k0s()()(),t.j41(47,"div",8)(48,"div",9)(49,"h3"),t.EFF(50,"Used Disk Space"),t.k0s(),t.j41(51,"div",10)(52,"div",11),t.nrm(53,"div",12),t.k0s(),t.j41(54,"span",13),t.EFF(55),t.nI1(56,"number"),t.k0s()(),t.j41(57,"p")(58,"strong"),t.EFF(59,"Free Space:"),t.k0s(),t.EFF(60),t.nI1(61,"number"),t.k0s(),t.j41(62,"p")(63,"strong"),t.EFF(64,"Total Space:"),t.k0s(),t.EFF(65),t.nI1(66,"number"),t.k0s()()()()()),2&i&&(t.R7$(8),t.SpI(" ",r.overallStatus," "),t.R7$(),t.Y8G("ngClass","UP"===r.overallStatus?"fa fa-caret-up":"fa fa-caret-down"),t.R7$(4),t.SpI(" ",r.serverUpTime," "),t.R7$(12),t.Y8G("ngForOf",r.healthMetrics),t.R7$(8),t.xc7("width",r.freeSpacePercentage+"%"),t.Y8G("ngClass",r.progressBarClass),t.R7$(2),t.SpI("",t.i5U(36,16,r.freeSpacePercentage,"1.0-0"),"% Free"),t.R7$(5),t.SpI(" ",t.bMT(41,19,r.freeDiskSpace)," GB"),t.R7$(5),t.SpI(" ",t.bMT(46,21,r.totalDiskSpace)," GB"),t.R7$(8),t.xc7("width",r.usedSpacePercentage+"%"),t.Y8G("ngClass",r.progressBarClass),t.R7$(2),t.SpI("",t.i5U(56,23,r.usedSpacePercentage,"1.0-0"),"% Used"),t.R7$(5),t.SpI(" ",t.bMT(61,26,r.freeDiskSpace)," GB"),t.R7$(5),t.SpI(" ",t.bMT(66,28,r.totalDiskSpace)," GB"))},dependencies:[l.YU,l.Sq,l.QX,l.lG],styles:[".health-dashboard[_ngcontent-%COMP%]{font-family:Arial,sans-serif;padding:20px}.health-table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;margin-top:10px}.health-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .health-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:1px solid #ddd;padding:8px;text-align:left;color:var(--color-text-200)}.health-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{color:Var(--color-text-100);background-color:var(--color-surface-mixed-100)}.up[_ngcontent-%COMP%]{color:green!important}.down[_ngcontent-%COMP%]{color:red!important}ul[_ngcontent-%COMP%]{margin:0;padding-left:20px}.disk-space-dashboard[_ngcontent-%COMP%]{font-family:Arial,sans-serif;padding:20px;max-width:400px;margin:auto}.progress-bar-container[_ngcontent-%COMP%]{position:relative;width:100%;height:30px;background-color:#e0e0e0;border-radius:15px;overflow:hidden}.progress-bar-background[_ngcontent-%COMP%]{width:100%;height:100%}.progress-bar-fill[_ngcontent-%COMP%]{height:100%;transition:width .5s ease-in-out;border-radius:15px;background-color:#4caf50}.progress-bar-fill.low[_ngcontent-%COMP%]{background-color:#f44336!important}.progress-bar-fill.medium[_ngcontent-%COMP%]{background-color:#ffeb3b!important}.progress-bar-fill.high[_ngcontent-%COMP%]{background-color:#4caf50!important}.progress-text[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-weight:700;color:#fff}p[_ngcontent-%COMP%]{margin:5px 0;font-size:14px}"]})}}return s})();var M=a(487),u=a(1574),d=a(9417);function S(s,c){if(1&s&&(t.j41(0,"option",5),t.EFF(1),t.k0s()),2&s){const e=c.$implicit;t.Y8G("value",e),t.R7$(),t.JRh(e)}}function y(s,c){if(1&s&&(t.j41(0,"div"),t.nrm(1,"canvas",6),t.k0s()),2&s){const e=t.XpG();t.R7$(),t.Y8G("datasets",e.chartData)("labels",e.labels)("options",e.lineChartOptions)("legend",!0)}}let U=(()=>{class s{constructor(e,i){this.monitoringService=e,this.themeService=i,this.metrics=[],this.selectedMetric="",this.chartData=[],this.labels=[],this.lineChartOptions={responsive:!0,plugins:{legend:{position:"bottom"}}}}ngOnInit(){this.monitoringService.getPerformanceMetrics().subscribe(e=>{this.metrics=e.names}),this.applyTheme()}onMetricSelect(){this.selectedMetric&&(this.monitoringService.getMetricData(this.selectedMetric).subscribe(e=>{this.labels=e.measurements.map((i,r)=>`${i.statistic?i.statistic:"Label "+r+1}`),this.chartData=[{data:e.measurements.map(i=>i.value),label:e.description?e.description:e.name?e.name:"Metric"}]}),this.applyTheme())}applyTheme(){const e=this.themeService.isDarkMode()?"#fff":"#222",i=this.themeService.isDarkMode()?"#444444":"#e0e0e0",r=this.themeService.isDarkMode()?"#333333":"#ffffff",n=this.themeService.isDarkMode()?"#fff":"#222";this.lineChartOptions={responsive:!0,plugins:{legend:{position:"top",labels:{color:e}},tooltip:{backgroundColor:r,titleColor:n,bodyColor:n}},scales:{x:{ticks:{color:e},grid:{color:i}},y:{ticks:{color:e},grid:{color:i}}}}}static{this.\u0275fac=function(i){return new(i||s)(t.rXU(h),t.rXU(M.F))}}static{this.\u0275cmp=t.VBU({type:s,selectors:[["app-performance-metrics"]],decls:8,vars:3,consts:[[1,"metrics-container"],["for","metrics-dropdown",2,"color","var(--color-text-200)"],["id","metrics-dropdown",3,"ngModelChange","change","ngModel"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],[3,"value"],["baseChart","","chartType","bar",3,"datasets","labels","options","legend"]],template:function(i,r){1&i&&(t.j41(0,"div",0)(1,"h2"),t.EFF(2,"Performance Metrics"),t.k0s(),t.j41(3,"label",1),t.EFF(4,"Select a Metric: \xa0"),t.k0s(),t.j41(5,"select",2),t.mxI("ngModelChange",function(o){return t.DH7(r.selectedMetric,o)||(r.selectedMetric=o),o}),t.bIt("change",function(){return r.onMetricSelect()}),t.DNE(6,S,2,2,"option",3),t.k0s(),t.DNE(7,y,2,4,"div",4),t.k0s()),2&i&&(t.R7$(5),t.R50("ngModel",r.selectedMetric),t.R7$(),t.Y8G("ngForOf",r.metrics),t.R7$(),t.Y8G("ngIf",r.chartData.length))},dependencies:[l.Sq,l.bT,u.j9,d.xH,d.y7,d.wz,d.BC,d.vS],styles:[".metrics-container[_ngcontent-%COMP%]{margin:20px}select[_ngcontent-%COMP%]{margin:10px 0;padding:5px;font-size:16px;background-color:var(--color-surface-mixed-100);border:1px solid var(--color-surface-mixed-300);border-radius:5px;color:var(--color-text-200)}select[_ngcontent-%COMP%]:focus{outline:none}select[_ngcontent-%COMP%]:active{outline:none}canvas[_ngcontent-%COMP%]{margin-top:20px;max-width:100%}"]})}}return s})();var j=a(2617),A=a(2643);function P(s,c){if(1&s&&(t.j41(0,"tr")(1,"td"),t.EFF(2),t.k0s(),t.j41(3,"td"),t.EFF(4),t.k0s(),t.j41(5,"td"),t.EFF(6),t.nI1(7,"date"),t.k0s(),t.j41(8,"td"),t.EFF(9),t.nI1(10,"timeAgo"),t.k0s(),t.j41(11,"td"),t.EFF(12),t.k0s()()),2&s){const e=c.$implicit;t.R7$(2),t.JRh(e.userId),t.R7$(2),t.JRh(e.ipAddress),t.R7$(2),t.JRh(t.i5U(7,5,e.timestamp,"yyyy-MM-dd HH:mm:ss")),t.R7$(3),t.JRh(t.bMT(10,8,e.lastActive)),t.R7$(3),t.JRh(e.endpointAccessed)}}function E(s,c){if(1&s&&(t.j41(0,"li"),t.EFF(1),t.k0s()),2&s){const e=c.$implicit;t.R7$(),t.JRh(e)}}let O=(()=>{class s{constructor(e,i){this.monitoringService=e,this.alertService=i,this.userActivities=[],this.usersSet=new Set,this.userIPs=[]}ngOnInit(){this.monitoringService.fetchUserActivities().subscribe(e=>{this.userActivities=e,this.userActivities.sort((i,r)=>new Date(r.timestamp).getTime()-new Date(i.timestamp).getTime()),this.usersSet=new Set(this.userActivities.map(i=>i.ipAddress)),this.userIPs=[...this.usersSet]},e=>{console.error("Error fetching user activity data:",e)})}clearUserActivities(){confirm("Make sure you backup your data before clearing user activity data. Are you sure you want to clear user activity data?")&&this.monitoringService.clearUserActivities().subscribe(()=>{this.userActivities=[],this.alertService.successMessage("User activity data cleared successfully","Success"),location.reload()},e=>{location.reload()})}exportToCsv(e,i="data"){if(!e||!e.length)return void this.alertService.warningMessage("No data to export","Warning");const r=this.datasetToCsv(e),n=(new Date).toISOString().split("T")[0];this.downloadCsv(r,`${n}-${i}-data.csv`)}datasetToCsv(e){return[Object.keys(e[0]).join(","),...e.map(n=>Object.values(n).map(o=>`"${o}"`).join(","))].join("\n")}downloadCsv(e,i){const r=new Blob([e],{type:"text/csv"}),n=window.URL.createObjectURL(r),o=document.createElement("a");o.setAttribute("href",n),o.setAttribute("download",i),o.click(),window.URL.revokeObjectURL(n)}static{this.\u0275fac=function(i){return new(i||s)(t.rXU(h),t.rXU(j.n))}}static{this.\u0275cmp=t.VBU({type:s,selectors:[["app-user-activity"]],decls:40,vars:4,consts:[[1,"dashboard"],[1,"d-flex","align-items-center","justify-content-between","w-100"],[1,"d-flex","align-items-center","gap-2"],[1,"btn-1",3,"click"],[1,"btn-2",3,"click"],[1,"table-wrapper"],[4,"ngFor","ngForOf"],[1,"d-flex","align-items-center","justify-content-between","w-100","my-3"],[2,"max-height","200px","overflow-y","auto"]],template:function(i,r){1&i&&(t.j41(0,"div",0)(1,"div",1)(2,"h2"),t.EFF(3,"User Activity Metrics"),t.k0s(),t.j41(4,"div",2)(5,"button",3),t.bIt("click",function(){return r.exportToCsv(r.userActivities,"user-activities")}),t.EFF(6,"Backup & Export"),t.k0s(),t.j41(7,"button",4),t.bIt("click",function(){return r.clearUserActivities()}),t.EFF(8,"Delete All"),t.k0s()()(),t.j41(9,"p"),t.EFF(10),t.k0s(),t.j41(11,"div",5)(12,"table")(13,"thead")(14,"tr")(15,"th"),t.EFF(16,"User ID"),t.k0s(),t.j41(17,"th"),t.EFF(18,"IP Address"),t.k0s(),t.j41(19,"th"),t.EFF(20,"Timestamp"),t.k0s(),t.j41(21,"th"),t.EFF(22,"Last Active"),t.k0s(),t.j41(23,"th"),t.EFF(24,"Endpoint Accessed"),t.k0s()()(),t.j41(25,"tbody"),t.DNE(26,P,13,10,"tr",6),t.k0s()()(),t.j41(27,"div",7)(28,"h2"),t.EFF(29,"Unique Users"),t.k0s(),t.j41(30,"div",2)(31,"button",3),t.bIt("click",function(){return r.exportToCsv(r.userIPs,"user-ips")}),t.EFF(32,"Backup & Export"),t.k0s(),t.j41(33,"button",4),t.bIt("click",function(){return r.clearUserActivities()}),t.EFF(34,"Delete All"),t.k0s()()(),t.j41(35,"p"),t.EFF(36),t.k0s(),t.j41(37,"div",8)(38,"ol"),t.DNE(39,E,2,1,"li",6),t.k0s()()()),2&i&&(t.R7$(10),t.SpI("Found Activities(",r.userActivities.length?r.userActivities.length:0,")"),t.R7$(16),t.Y8G("ngForOf",r.userActivities),t.R7$(10),t.SpI("Found Users(",r.userIPs.length?r.userIPs.length:0,")"),t.R7$(3),t.Y8G("ngForOf",r.userIPs))},dependencies:[l.Sq,l.vh,A.n],styles:[".dashboard[_ngcontent-%COMP%]{padding:20px;font-family:Arial,sans-serif}.table-wrapper[_ngcontent-%COMP%]{margin-top:10px;height:auto;max-height:calc(100vh - 300px);overflow-y:auto}table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{border:1px solid #ddd;padding:8px;text-align:left;color:var(--color-text-200)}th[_ngcontent-%COMP%]{color:Var(--color-text-100);background-color:var(--color-surface-mixed-100)}"]})}}return s})();var w=a(3236),$=a(1807),f=a(9763);let D=(()=>{class s{constructor(e){this.monitoringService=e,this.activeUserCount=0}ngOnInit(){(function T(s=0,c=w.E){return s<0&&(s=0),(0,$.O)(s,s,c)})(1e4).subscribe(()=>{this.monitoringService.getActiveUsers().subscribe(e=>{this.activeUserCount=e})}),this.monitoringService.fetchUserActivities().subscribe(e=>{const i=e.reduce((o,b)=>(o[b.endpointAccessed]=(o[b.endpointAccessed]||0)+1,o),{}),r=Object.keys(i),n=Object.values(i);new f.t1("activityChart",{type:"bar",data:{labels:r,datasets:[{label:"Access Count",data:n,backgroundColor:"rgba(75, 192, 192, 0.2)",borderColor:"rgba(75, 192, 192, 1)",borderWidth:1}]}})})}static{this.\u0275fac=function(i){return new(i||s)(t.rXU(h))}}static{this.\u0275cmp=t.VBU({type:s,selectors:[["app-active-users"]],decls:10,vars:1,consts:[[1,"container"],["id","activityChart"]],template:function(i,r){1&i&&(t.j41(0,"div",0)(1,"div")(2,"h2"),t.EFF(3,"Active Users"),t.k0s(),t.j41(4,"p"),t.EFF(5),t.k0s()(),t.j41(6,"div")(7,"h2"),t.EFF(8,"Endpoint Access Distribution"),t.k0s(),t.nrm(9,"canvas",1),t.k0s()()),2&i&&(t.R7$(5),t.SpI("Currently active users: ",r.activeUserCount,""))}})}}return s})(),R=(()=>{class s{constructor(e){this.activityService=e,this.chartData={labels:[],datasets:[]},this.chartOptions={responsive:!0}}ngOnInit(){this.activityService.getActivityTrends("hourly").subscribe(e=>{const i=Object.keys(e);new f.t1("lineChart",{type:"line",data:{labels:i,datasets:[{label:"User Activity",data:Object.values(e),fill:!1,borderColor:"blue",tension:.1}]}})})}static{this.\u0275fac=function(i){return new(i||s)(t.rXU(h))}}static{this.\u0275cmp=t.VBU({type:s,selectors:[["app-activity-trends"]],decls:4,vars:0,consts:[[1,"container"],["baseChart","","id","lineChart","chartType","line"]],template:function(i,r){1&i&&(t.j41(0,"div",0)(1,"h3"),t.EFF(2,"User Activity Trends"),t.k0s(),t.nrm(3,"canvas",1),t.k0s())},dependencies:[u.j9]})}}return s})();const x=[{path:"",component:(()=>{class s{static{this.\u0275fac=function(i){return new(i||s)}}static{this.\u0275cmp=t.VBU({type:s,selectors:[["app-monitoring-dashboard"]],decls:6,vars:0,consts:[[1,"container"]],template:function(i,r){1&i&&(t.j41(0,"div",0),t.nrm(1,"app-performance-metrics")(2,"app-health-metrics")(3,"app-active-users")(4,"app-user-activity")(5,"app-activity-trends"),t.k0s())},dependencies:[C,U,O,D,R]})}}return s})(),canActivate:[a(859).O]}];let G=(()=>{class s{static{this.\u0275fac=function(i){return new(i||s)}}static{this.\u0275mod=t.$C({type:s})}static{this.\u0275inj=t.G2t({imports:[g.iI.forChild(x),g.iI]})}}return s})();var L=a(7865);let Y=(()=>{class s{static{this.\u0275fac=function(i){return new(i||s)}}static{this.\u0275mod=t.$C({type:s})}static{this.\u0275inj=t.G2t({imports:[l.MD,u.FR,d.YN,L.T]})}}return s})(),z=(()=>{class s{static{this.\u0275fac=function(i){return new(i||s)}}static{this.\u0275mod=t.$C({type:s})}static{this.\u0275inj=t.G2t({imports:[l.MD,G,u.FR,Y]})}}return s})()}}]);