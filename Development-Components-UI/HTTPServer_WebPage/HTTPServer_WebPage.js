require("console"),global.atob||(global.atob=function(o){return Lib.Ttw.ab(o,1)}),global.btoa||(global.btoa=function(o){return Lib.Ttw.ba(o,1)}),global.gc=global.gc||function(){},global._$TATIC_VALUE_SERVER_HTTP_EVTS_REQUEST=global._$TATIC_VALUE_SERVER_HTTP_EVTS_REQUEST||{},STtwUtilBuffer.iconv=require("iconv-lite"),global.Lib.Ttw.autoLoad_JS||(global.Lib.Ttw.autoLoad_JS=new global.Lib.Ttw.CLASS.AutoLoad_JS({instanceKey:"global.Lib.Ttw.autoLoad_JS"}));var p0="../TtwPlatform-00000--NodeJS/";!function(){for(var o,t=global.process.cwd()+"/",a=p0+"native_modules/",e=global.Lib.Ttw.importTll,l=["MongoDBQuerySync","MongoDBTool__ExportImportCreator--Windows","NodeHTML","OS-NetworkInformation","SyncRequest","UUID","Macro","MacroAPI"],r=0,_=l.length;_>r;++r){o=a+l[r]+".tll";try{e(o)}catch(b){}try{e(t+"../"+o)}catch(b){}try{e(t+"../../"+o)}catch(b){}try{e(t+"../../../"+o)}catch(b){}try{e(t+"../../../../"+o)}catch(b){}};require(t+"../"+p0+"js-WebServer__Merge/___merge_min_all_1_0.js")}();var f=global.Lib.Ttw.autoLoad_JS.addRouter__JSFiles_Services;f("../"+p0+"js-WebServer/router/"),global._$TATIC_VALUE_SERVER_HTTP_EVTS_REQUEST["/"]=function(o,t){SUtilHttpServerResponse.responseWrite_404(t)};global._$TATIC_CONST_DEBUG=false;global._$TATIC_CONST_SESSION_TIME=100000000000;global.REQUIRES=global.REQUIRES||{},function(){var e=require("child_process"),r=require("fs"),t=require("path"),n=require("os");global.REQUIRES.__defineGetter__("cp",function(){return e}),global.REQUIRES.__defineGetter__("fs",function(){return r}),global.REQUIRES.__defineGetter__("path",function(){return t}),global.REQUIRES.__defineGetter__("os",function(){return n})}();
global.server = global.apis.server_http.newServer__WebServer();
TtwLog.clear();