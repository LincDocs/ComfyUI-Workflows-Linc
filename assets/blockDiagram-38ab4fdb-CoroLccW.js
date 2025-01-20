import{c as he,aJ as se,h as ye,l as S,z as Ee,ab as we,i as De,o as Ne}from"./mermaid.core-1VT-Jzi6.js";import{c as ke}from"./clone-flEF16YA.js";import{i as Ie,c as Oe,b as Te,d as ze,a as ge,p as Ce}from"./edges-e0da2a9e-CVbM6sfm.js";import{G as Ae}from"./graph-BdA97dKN.js";import{s as H}from"./app-BtAI08y8.js";import{o as Re}from"./ordinal-Cboi1Yqb.js";import{c as ve}from"./channel-DnNxo0gN.js";import{s as Be}from"./Tableau10-DSFIgEIU.js";import"./bump-ClWOOmqL.js";import"./createText-2e5e7dd3-CQZUyv1F.js";import"./line-uPabD25K.js";import"./array-DEnAxiAM.js";import"./path-CbwjOpE9.js";import"./point-DWREGWZc.js";import"./init-Gi6I4Gst.js";import"./colors-Cc3OSVma.js";var le,oe,ee=function(){var e=function(D,o,s,n){for(s=s||{},n=D.length;n--;s[D[n]]=o);return s},a=[1,7],d=[1,13],c=[1,14],r=[1,15],g=[1,19],l=[1,16],f=[1,17],b=[1,18],p=[8,30],x=[8,21,28,29,30,31,32,40,44,47],y=[1,23],z=[1,24],N=[8,15,16,21,28,29,30,31,32,40,44,47],k=[8,15,16,21,27,28,29,30,31,32,40,44,47],E=[1,49],L={trace:function(){},yy:{},symbols_:{error:2,spaceLines:3,SPACELINE:4,NL:5,separator:6,SPACE:7,EOF:8,start:9,BLOCK_DIAGRAM_KEY:10,document:11,stop:12,statement:13,link:14,LINK:15,START_LINK:16,LINK_LABEL:17,STR:18,nodeStatement:19,columnsStatement:20,SPACE_BLOCK:21,blockStatement:22,classDefStatement:23,cssClassStatement:24,styleStatement:25,node:26,SIZE:27,COLUMNS:28,"id-block":29,end:30,block:31,NODE_ID:32,nodeShapeNLabel:33,dirList:34,DIR:35,NODE_DSTART:36,NODE_DEND:37,BLOCK_ARROW_START:38,BLOCK_ARROW_END:39,classDef:40,CLASSDEF_ID:41,CLASSDEF_STYLEOPTS:42,DEFAULT:43,class:44,CLASSENTITY_IDS:45,STYLECLASS:46,style:47,STYLE_ENTITY_IDS:48,STYLE_DEFINITION_DATA:49,$accept:0,$end:1},terminals_:{2:"error",4:"SPACELINE",5:"NL",7:"SPACE",8:"EOF",10:"BLOCK_DIAGRAM_KEY",15:"LINK",16:"START_LINK",17:"LINK_LABEL",18:"STR",21:"SPACE_BLOCK",27:"SIZE",28:"COLUMNS",29:"id-block",30:"end",31:"block",32:"NODE_ID",35:"DIR",36:"NODE_DSTART",37:"NODE_DEND",38:"BLOCK_ARROW_START",39:"BLOCK_ARROW_END",40:"classDef",41:"CLASSDEF_ID",42:"CLASSDEF_STYLEOPTS",43:"DEFAULT",44:"class",45:"CLASSENTITY_IDS",46:"STYLECLASS",47:"style",48:"STYLE_ENTITY_IDS",49:"STYLE_DEFINITION_DATA"},productions_:[0,[3,1],[3,2],[3,2],[6,1],[6,1],[6,1],[9,3],[12,1],[12,1],[12,2],[12,2],[11,1],[11,2],[14,1],[14,4],[13,1],[13,1],[13,1],[13,1],[13,1],[13,1],[13,1],[19,3],[19,2],[19,1],[20,1],[22,4],[22,3],[26,1],[26,2],[34,1],[34,2],[33,3],[33,4],[23,3],[23,3],[24,3],[25,3]],performAction:function(o,s,n,u,h,t,m){var i=t.length-1;switch(h){case 4:u.getLogger().debug("Rule: separator (NL) ");break;case 5:u.getLogger().debug("Rule: separator (Space) ");break;case 6:u.getLogger().debug("Rule: separator (EOF) ");break;case 7:u.getLogger().debug("Rule: hierarchy: ",t[i-1]),u.setHierarchy(t[i-1]);break;case 8:u.getLogger().debug("Stop NL ");break;case 9:u.getLogger().debug("Stop EOF ");break;case 10:u.getLogger().debug("Stop NL2 ");break;case 11:u.getLogger().debug("Stop EOF2 ");break;case 12:u.getLogger().debug("Rule: statement: ",t[i]),typeof t[i].length=="number"?this.$=t[i]:this.$=[t[i]];break;case 13:u.getLogger().debug("Rule: statement #2: ",t[i-1]),this.$=[t[i-1]].concat(t[i]);break;case 14:u.getLogger().debug("Rule: link: ",t[i],o),this.$={edgeTypeStr:t[i],label:""};break;case 15:u.getLogger().debug("Rule: LABEL link: ",t[i-3],t[i-1],t[i]),this.$={edgeTypeStr:t[i],label:t[i-1]};break;case 18:const v=parseInt(t[i]),Y=u.generateId();this.$={id:Y,type:"space",label:"",width:v,children:[]};break;case 23:u.getLogger().debug("Rule: (nodeStatement link node) ",t[i-2],t[i-1],t[i]," typestr: ",t[i-1].edgeTypeStr);const F=u.edgeStrToEdgeData(t[i-1].edgeTypeStr);this.$=[{id:t[i-2].id,label:t[i-2].label,type:t[i-2].type,directions:t[i-2].directions},{id:t[i-2].id+"-"+t[i].id,start:t[i-2].id,end:t[i].id,label:t[i-1].label,type:"edge",directions:t[i].directions,arrowTypeEnd:F,arrowTypeStart:"arrow_open"},{id:t[i].id,label:t[i].label,type:u.typeStr2Type(t[i].typeStr),directions:t[i].directions}];break;case 24:u.getLogger().debug("Rule: nodeStatement (abc88 node size) ",t[i-1],t[i]),this.$={id:t[i-1].id,label:t[i-1].label,type:u.typeStr2Type(t[i-1].typeStr),directions:t[i-1].directions,widthInColumns:parseInt(t[i],10)};break;case 25:u.getLogger().debug("Rule: nodeStatement (node) ",t[i]),this.$={id:t[i].id,label:t[i].label,type:u.typeStr2Type(t[i].typeStr),directions:t[i].directions,widthInColumns:1};break;case 26:u.getLogger().debug("APA123",this?this:"na"),u.getLogger().debug("COLUMNS: ",t[i]),this.$={type:"column-setting",columns:t[i]==="auto"?-1:parseInt(t[i])};break;case 27:u.getLogger().debug("Rule: id-block statement : ",t[i-2],t[i-1]),u.generateId(),this.$={...t[i-2],type:"composite",children:t[i-1]};break;case 28:u.getLogger().debug("Rule: blockStatement : ",t[i-2],t[i-1],t[i]);const A=u.generateId();this.$={id:A,type:"composite",label:"",children:t[i-1]};break;case 29:u.getLogger().debug("Rule: node (NODE_ID separator): ",t[i]),this.$={id:t[i]};break;case 30:u.getLogger().debug("Rule: node (NODE_ID nodeShapeNLabel separator): ",t[i-1],t[i]),this.$={id:t[i-1],label:t[i].label,typeStr:t[i].typeStr,directions:t[i].directions};break;case 31:u.getLogger().debug("Rule: dirList: ",t[i]),this.$=[t[i]];break;case 32:u.getLogger().debug("Rule: dirList: ",t[i-1],t[i]),this.$=[t[i-1]].concat(t[i]);break;case 33:u.getLogger().debug("Rule: nodeShapeNLabel: ",t[i-2],t[i-1],t[i]),this.$={typeStr:t[i-2]+t[i],label:t[i-1]};break;case 34:u.getLogger().debug("Rule: BLOCK_ARROW nodeShapeNLabel: ",t[i-3],t[i-2]," #3:",t[i-1],t[i]),this.$={typeStr:t[i-3]+t[i],label:t[i-2],directions:t[i-1]};break;case 35:case 36:this.$={type:"classDef",id:t[i-1].trim(),css:t[i].trim()};break;case 37:this.$={type:"applyClass",id:t[i-1].trim(),styleClass:t[i].trim()};break;case 38:this.$={type:"applyStyles",id:t[i-1].trim(),stylesStr:t[i].trim()};break}},table:[{9:1,10:[1,2]},{1:[3]},{11:3,13:4,19:5,20:6,21:a,22:8,23:9,24:10,25:11,26:12,28:d,29:c,31:r,32:g,40:l,44:f,47:b},{8:[1,20]},e(p,[2,12],{13:4,19:5,20:6,22:8,23:9,24:10,25:11,26:12,11:21,21:a,28:d,29:c,31:r,32:g,40:l,44:f,47:b}),e(x,[2,16],{14:22,15:y,16:z}),e(x,[2,17]),e(x,[2,18]),e(x,[2,19]),e(x,[2,20]),e(x,[2,21]),e(x,[2,22]),e(N,[2,25],{27:[1,25]}),e(x,[2,26]),{19:26,26:12,32:g},{11:27,13:4,19:5,20:6,21:a,22:8,23:9,24:10,25:11,26:12,28:d,29:c,31:r,32:g,40:l,44:f,47:b},{41:[1,28],43:[1,29]},{45:[1,30]},{48:[1,31]},e(k,[2,29],{33:32,36:[1,33],38:[1,34]}),{1:[2,7]},e(p,[2,13]),{26:35,32:g},{32:[2,14]},{17:[1,36]},e(N,[2,24]),{11:37,13:4,14:22,15:y,16:z,19:5,20:6,21:a,22:8,23:9,24:10,25:11,26:12,28:d,29:c,31:r,32:g,40:l,44:f,47:b},{30:[1,38]},{42:[1,39]},{42:[1,40]},{46:[1,41]},{49:[1,42]},e(k,[2,30]),{18:[1,43]},{18:[1,44]},e(N,[2,23]),{18:[1,45]},{30:[1,46]},e(x,[2,28]),e(x,[2,35]),e(x,[2,36]),e(x,[2,37]),e(x,[2,38]),{37:[1,47]},{34:48,35:E},{15:[1,50]},e(x,[2,27]),e(k,[2,33]),{39:[1,51]},{34:52,35:E,39:[2,31]},{32:[2,15]},e(k,[2,34]),{39:[2,32]}],defaultActions:{20:[2,7],23:[2,14],50:[2,15],52:[2,32]},parseError:function(o,s){if(s.recoverable)this.trace(o);else{var n=new Error(o);throw n.hash=s,n}},parse:function(o){var s=this,n=[0],u=[],h=[null],t=[],m=this.table,i="",v=0,Y=0,F=2,A=1,Le=t.slice.call(arguments,1),w=Object.create(this.lexer),K={yy:{}};for(var J in this.yy)Object.prototype.hasOwnProperty.call(this.yy,J)&&(K.yy[J]=this.yy[J]);w.setInput(o,K.yy),K.yy.lexer=w,K.yy.parser=this,typeof w.yylloc>"u"&&(w.yylloc={});var Z=w.yylloc;t.push(Z);var me=w.options&&w.options.ranges;typeof K.yy.parseError=="function"?this.parseError=K.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function _e(){var P;return P=u.pop()||w.lex()||A,typeof P!="number"&&(P instanceof Array&&(u=P,P=u.pop()),P=s.symbols_[P]||P),P}for(var O,M,C,Q,W={},X,B,ae,G;;){if(M=n[n.length-1],this.defaultActions[M]?C=this.defaultActions[M]:((O===null||typeof O>"u")&&(O=_e()),C=m[M]&&m[M][O]),typeof C>"u"||!C.length||!C[0]){var $="";G=[];for(X in m[M])this.terminals_[X]&&X>F&&G.push("'"+this.terminals_[X]+"'");w.showPosition?$="Parse error on line "+(v+1)+`:
`+w.showPosition()+`
Expecting `+G.join(", ")+", got '"+(this.terminals_[O]||O)+"'":$="Parse error on line "+(v+1)+": Unexpected "+(O==A?"end of input":"'"+(this.terminals_[O]||O)+"'"),this.parseError($,{text:w.match,token:this.terminals_[O]||O,line:w.yylineno,loc:Z,expected:G})}if(C[0]instanceof Array&&C.length>1)throw new Error("Parse Error: multiple actions possible at state: "+M+", token: "+O);switch(C[0]){case 1:n.push(O),h.push(w.yytext),t.push(w.yylloc),n.push(C[1]),O=null,Y=w.yyleng,i=w.yytext,v=w.yylineno,Z=w.yylloc;break;case 2:if(B=this.productions_[C[1]][1],W.$=h[h.length-B],W._$={first_line:t[t.length-(B||1)].first_line,last_line:t[t.length-1].last_line,first_column:t[t.length-(B||1)].first_column,last_column:t[t.length-1].last_column},me&&(W._$.range=[t[t.length-(B||1)].range[0],t[t.length-1].range[1]]),Q=this.performAction.apply(W,[i,Y,v,K.yy,C[1],h,t].concat(Le)),typeof Q<"u")return Q;B&&(n=n.slice(0,-1*B*2),h=h.slice(0,-1*B),t=t.slice(0,-1*B)),n.push(this.productions_[C[1]][0]),h.push(W.$),t.push(W._$),ae=m[n[n.length-2]][n[n.length-1]],n.push(ae);break;case 3:return!0}}return!0}},R=function(){var D={EOF:1,parseError:function(s,n){if(this.yy.parser)this.yy.parser.parseError(s,n);else throw new Error(s)},setInput:function(o,s){return this.yy=s||this.yy||{},this._input=o,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var o=this._input[0];this.yytext+=o,this.yyleng++,this.offset++,this.match+=o,this.matched+=o;var s=o.match(/(?:\r\n?|\n).*/g);return s?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),o},unput:function(o){var s=o.length,n=o.split(/(?:\r\n?|\n)/g);this._input=o+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-s),this.offset-=s;var u=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var h=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===u.length?this.yylloc.first_column:0)+u[u.length-n.length].length-n[0].length:this.yylloc.first_column-s},this.options.ranges&&(this.yylloc.range=[h[0],h[0]+this.yyleng-s]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(o){this.unput(this.match.slice(o))},pastInput:function(){var o=this.matched.substr(0,this.matched.length-this.match.length);return(o.length>20?"...":"")+o.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var o=this.match;return o.length<20&&(o+=this._input.substr(0,20-o.length)),(o.substr(0,20)+(o.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var o=this.pastInput(),s=new Array(o.length+1).join("-");return o+this.upcomingInput()+`
`+s+"^"},test_match:function(o,s){var n,u,h;if(this.options.backtrack_lexer&&(h={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(h.yylloc.range=this.yylloc.range.slice(0))),u=o[0].match(/(?:\r\n?|\n).*/g),u&&(this.yylineno+=u.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:u?u[u.length-1].length-u[u.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+o[0].length},this.yytext+=o[0],this.match+=o[0],this.matches=o,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(o[0].length),this.matched+=o[0],n=this.performAction.call(this,this.yy,this,s,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var t in h)this[t]=h[t];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var o,s,n,u;this._more||(this.yytext="",this.match="");for(var h=this._currentRules(),t=0;t<h.length;t++)if(n=this._input.match(this.rules[h[t]]),n&&(!s||n[0].length>s[0].length)){if(s=n,u=t,this.options.backtrack_lexer){if(o=this.test_match(n,h[t]),o!==!1)return o;if(this._backtrack){s=!1;continue}else return!1}else if(!this.options.flex)break}return s?(o=this.test_match(s,h[u]),o!==!1?o:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var s=this.next();return s||this.lex()},begin:function(s){this.conditionStack.push(s)},popState:function(){var s=this.conditionStack.length-1;return s>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(s){return s=this.conditionStack.length-1-Math.abs(s||0),s>=0?this.conditionStack[s]:"INITIAL"},pushState:function(s){this.begin(s)},stateStackSize:function(){return this.conditionStack.length},options:{},performAction:function(s,n,u,h){switch(u){case 0:return 10;case 1:return s.getLogger().debug("Found space-block"),31;case 2:return s.getLogger().debug("Found nl-block"),31;case 3:return s.getLogger().debug("Found space-block"),29;case 4:s.getLogger().debug(".",n.yytext);break;case 5:s.getLogger().debug("_",n.yytext);break;case 6:return 5;case 7:return n.yytext=-1,28;case 8:return n.yytext=n.yytext.replace(/columns\s+/,""),s.getLogger().debug("COLUMNS (LEX)",n.yytext),28;case 9:this.pushState("md_string");break;case 10:return"MD_STR";case 11:this.popState();break;case 12:this.pushState("string");break;case 13:s.getLogger().debug("LEX: POPPING STR:",n.yytext),this.popState();break;case 14:return s.getLogger().debug("LEX: STR end:",n.yytext),"STR";case 15:return n.yytext=n.yytext.replace(/space\:/,""),s.getLogger().debug("SPACE NUM (LEX)",n.yytext),21;case 16:return n.yytext="1",s.getLogger().debug("COLUMNS (LEX)",n.yytext),21;case 17:return 43;case 18:return"LINKSTYLE";case 19:return"INTERPOLATE";case 20:return this.pushState("CLASSDEF"),40;case 21:return this.popState(),this.pushState("CLASSDEFID"),"DEFAULT_CLASSDEF_ID";case 22:return this.popState(),this.pushState("CLASSDEFID"),41;case 23:return this.popState(),42;case 24:return this.pushState("CLASS"),44;case 25:return this.popState(),this.pushState("CLASS_STYLE"),45;case 26:return this.popState(),46;case 27:return this.pushState("STYLE_STMNT"),47;case 28:return this.popState(),this.pushState("STYLE_DEFINITION"),48;case 29:return this.popState(),49;case 30:return this.pushState("acc_title"),"acc_title";case 31:return this.popState(),"acc_title_value";case 32:return this.pushState("acc_descr"),"acc_descr";case 33:return this.popState(),"acc_descr_value";case 34:this.pushState("acc_descr_multiline");break;case 35:this.popState();break;case 36:return"acc_descr_multiline_value";case 37:return 30;case 38:return this.popState(),s.getLogger().debug("Lex: (("),"NODE_DEND";case 39:return this.popState(),s.getLogger().debug("Lex: (("),"NODE_DEND";case 40:return this.popState(),s.getLogger().debug("Lex: ))"),"NODE_DEND";case 41:return this.popState(),s.getLogger().debug("Lex: (("),"NODE_DEND";case 42:return this.popState(),s.getLogger().debug("Lex: (("),"NODE_DEND";case 43:return this.popState(),s.getLogger().debug("Lex: (-"),"NODE_DEND";case 44:return this.popState(),s.getLogger().debug("Lex: -)"),"NODE_DEND";case 45:return this.popState(),s.getLogger().debug("Lex: (("),"NODE_DEND";case 46:return this.popState(),s.getLogger().debug("Lex: ]]"),"NODE_DEND";case 47:return this.popState(),s.getLogger().debug("Lex: ("),"NODE_DEND";case 48:return this.popState(),s.getLogger().debug("Lex: ])"),"NODE_DEND";case 49:return this.popState(),s.getLogger().debug("Lex: /]"),"NODE_DEND";case 50:return this.popState(),s.getLogger().debug("Lex: /]"),"NODE_DEND";case 51:return this.popState(),s.getLogger().debug("Lex: )]"),"NODE_DEND";case 52:return this.popState(),s.getLogger().debug("Lex: )"),"NODE_DEND";case 53:return this.popState(),s.getLogger().debug("Lex: ]>"),"NODE_DEND";case 54:return this.popState(),s.getLogger().debug("Lex: ]"),"NODE_DEND";case 55:return s.getLogger().debug("Lexa: -)"),this.pushState("NODE"),36;case 56:return s.getLogger().debug("Lexa: (-"),this.pushState("NODE"),36;case 57:return s.getLogger().debug("Lexa: ))"),this.pushState("NODE"),36;case 58:return s.getLogger().debug("Lexa: )"),this.pushState("NODE"),36;case 59:return s.getLogger().debug("Lex: ((("),this.pushState("NODE"),36;case 60:return s.getLogger().debug("Lexa: )"),this.pushState("NODE"),36;case 61:return s.getLogger().debug("Lexa: )"),this.pushState("NODE"),36;case 62:return s.getLogger().debug("Lexa: )"),this.pushState("NODE"),36;case 63:return s.getLogger().debug("Lexc: >"),this.pushState("NODE"),36;case 64:return s.getLogger().debug("Lexa: (["),this.pushState("NODE"),36;case 65:return s.getLogger().debug("Lexa: )"),this.pushState("NODE"),36;case 66:return this.pushState("NODE"),36;case 67:return this.pushState("NODE"),36;case 68:return this.pushState("NODE"),36;case 69:return this.pushState("NODE"),36;case 70:return this.pushState("NODE"),36;case 71:return this.pushState("NODE"),36;case 72:return this.pushState("NODE"),36;case 73:return s.getLogger().debug("Lexa: ["),this.pushState("NODE"),36;case 74:return this.pushState("BLOCK_ARROW"),s.getLogger().debug("LEX ARR START"),38;case 75:return s.getLogger().debug("Lex: NODE_ID",n.yytext),32;case 76:return s.getLogger().debug("Lex: EOF",n.yytext),8;case 77:this.pushState("md_string");break;case 78:this.pushState("md_string");break;case 79:return"NODE_DESCR";case 80:this.popState();break;case 81:s.getLogger().debug("Lex: Starting string"),this.pushState("string");break;case 82:s.getLogger().debug("LEX ARR: Starting string"),this.pushState("string");break;case 83:return s.getLogger().debug("LEX: NODE_DESCR:",n.yytext),"NODE_DESCR";case 84:s.getLogger().debug("LEX POPPING"),this.popState();break;case 85:s.getLogger().debug("Lex: =>BAE"),this.pushState("ARROW_DIR");break;case 86:return n.yytext=n.yytext.replace(/^,\s*/,""),s.getLogger().debug("Lex (right): dir:",n.yytext),"DIR";case 87:return n.yytext=n.yytext.replace(/^,\s*/,""),s.getLogger().debug("Lex (left):",n.yytext),"DIR";case 88:return n.yytext=n.yytext.replace(/^,\s*/,""),s.getLogger().debug("Lex (x):",n.yytext),"DIR";case 89:return n.yytext=n.yytext.replace(/^,\s*/,""),s.getLogger().debug("Lex (y):",n.yytext),"DIR";case 90:return n.yytext=n.yytext.replace(/^,\s*/,""),s.getLogger().debug("Lex (up):",n.yytext),"DIR";case 91:return n.yytext=n.yytext.replace(/^,\s*/,""),s.getLogger().debug("Lex (down):",n.yytext),"DIR";case 92:return n.yytext="]>",s.getLogger().debug("Lex (ARROW_DIR end):",n.yytext),this.popState(),this.popState(),"BLOCK_ARROW_END";case 93:return s.getLogger().debug("Lex: LINK","#"+n.yytext+"#"),15;case 94:return s.getLogger().debug("Lex: LINK",n.yytext),15;case 95:return s.getLogger().debug("Lex: LINK",n.yytext),15;case 96:return s.getLogger().debug("Lex: LINK",n.yytext),15;case 97:return s.getLogger().debug("Lex: START_LINK",n.yytext),this.pushState("LLABEL"),16;case 98:return s.getLogger().debug("Lex: START_LINK",n.yytext),this.pushState("LLABEL"),16;case 99:return s.getLogger().debug("Lex: START_LINK",n.yytext),this.pushState("LLABEL"),16;case 100:this.pushState("md_string");break;case 101:return s.getLogger().debug("Lex: Starting string"),this.pushState("string"),"LINK_LABEL";case 102:return this.popState(),s.getLogger().debug("Lex: LINK","#"+n.yytext+"#"),15;case 103:return this.popState(),s.getLogger().debug("Lex: LINK",n.yytext),15;case 104:return this.popState(),s.getLogger().debug("Lex: LINK",n.yytext),15;case 105:return s.getLogger().debug("Lex: COLON",n.yytext),n.yytext=n.yytext.slice(1),27}},rules:[/^(?:block-beta\b)/,/^(?:block\s+)/,/^(?:block\n+)/,/^(?:block:)/,/^(?:[\s]+)/,/^(?:[\n]+)/,/^(?:((\u000D\u000A)|(\u000A)))/,/^(?:columns\s+auto\b)/,/^(?:columns\s+[\d]+)/,/^(?:["][`])/,/^(?:[^`"]+)/,/^(?:[`]["])/,/^(?:["])/,/^(?:["])/,/^(?:[^"]*)/,/^(?:space[:]\d+)/,/^(?:space\b)/,/^(?:default\b)/,/^(?:linkStyle\b)/,/^(?:interpolate\b)/,/^(?:classDef\s+)/,/^(?:DEFAULT\s+)/,/^(?:\w+\s+)/,/^(?:[^\n]*)/,/^(?:class\s+)/,/^(?:(\w+)+((,\s*\w+)*))/,/^(?:[^\n]*)/,/^(?:style\s+)/,/^(?:(\w+)+((,\s*\w+)*))/,/^(?:[^\n]*)/,/^(?:accTitle\s*:\s*)/,/^(?:(?!\n||)*[^\n]*)/,/^(?:accDescr\s*:\s*)/,/^(?:(?!\n||)*[^\n]*)/,/^(?:accDescr\s*\{\s*)/,/^(?:[\}])/,/^(?:[^\}]*)/,/^(?:end\b\s*)/,/^(?:\(\(\()/,/^(?:\)\)\))/,/^(?:[\)]\))/,/^(?:\}\})/,/^(?:\})/,/^(?:\(-)/,/^(?:-\))/,/^(?:\(\()/,/^(?:\]\])/,/^(?:\()/,/^(?:\]\))/,/^(?:\\\])/,/^(?:\/\])/,/^(?:\)\])/,/^(?:[\)])/,/^(?:\]>)/,/^(?:[\]])/,/^(?:-\))/,/^(?:\(-)/,/^(?:\)\))/,/^(?:\))/,/^(?:\(\(\()/,/^(?:\(\()/,/^(?:\{\{)/,/^(?:\{)/,/^(?:>)/,/^(?:\(\[)/,/^(?:\()/,/^(?:\[\[)/,/^(?:\[\|)/,/^(?:\[\()/,/^(?:\)\)\))/,/^(?:\[\\)/,/^(?:\[\/)/,/^(?:\[\\)/,/^(?:\[)/,/^(?:<\[)/,/^(?:[^\(\[\n\-\)\{\}\s\<\>:]+)/,/^(?:$)/,/^(?:["][`])/,/^(?:["][`])/,/^(?:[^`"]+)/,/^(?:[`]["])/,/^(?:["])/,/^(?:["])/,/^(?:[^"]+)/,/^(?:["])/,/^(?:\]>\s*\()/,/^(?:,?\s*right\s*)/,/^(?:,?\s*left\s*)/,/^(?:,?\s*x\s*)/,/^(?:,?\s*y\s*)/,/^(?:,?\s*up\s*)/,/^(?:,?\s*down\s*)/,/^(?:\)\s*)/,/^(?:\s*[xo<]?--+[-xo>]\s*)/,/^(?:\s*[xo<]?==+[=xo>]\s*)/,/^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/,/^(?:\s*~~[\~]+\s*)/,/^(?:\s*[xo<]?--\s*)/,/^(?:\s*[xo<]?==\s*)/,/^(?:\s*[xo<]?-\.\s*)/,/^(?:["][`])/,/^(?:["])/,/^(?:\s*[xo<]?--+[-xo>]\s*)/,/^(?:\s*[xo<]?==+[=xo>]\s*)/,/^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/,/^(?::\d+)/],conditions:{STYLE_DEFINITION:{rules:[29],inclusive:!1},STYLE_STMNT:{rules:[28],inclusive:!1},CLASSDEFID:{rules:[23],inclusive:!1},CLASSDEF:{rules:[21,22],inclusive:!1},CLASS_STYLE:{rules:[26],inclusive:!1},CLASS:{rules:[25],inclusive:!1},LLABEL:{rules:[100,101,102,103,104],inclusive:!1},ARROW_DIR:{rules:[86,87,88,89,90,91,92],inclusive:!1},BLOCK_ARROW:{rules:[77,82,85],inclusive:!1},NODE:{rules:[38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,78,81],inclusive:!1},md_string:{rules:[10,11,79,80],inclusive:!1},space:{rules:[],inclusive:!1},string:{rules:[13,14,83,84],inclusive:!1},acc_descr_multiline:{rules:[35,36],inclusive:!1},acc_descr:{rules:[33],inclusive:!1},acc_title:{rules:[31],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,8,9,12,15,16,17,18,19,20,24,27,30,32,34,37,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,93,94,95,96,97,98,99,105],inclusive:!0}}};return D}();L.lexer=R;function I(){this.yy={}}return I.prototype=L,L.Parser=I,new I}();ee.parser=ee;const Pe=ee;let T={},ne=[],V={};const ce="color",ue="fill",Fe="bgFill",pe=",",Ke=he();let j={};const Me=e=>De.sanitizeText(e,Ke),Ye=function(e,a=""){j[e]===void 0&&(j[e]={id:e,styles:[],textStyles:[]});const d=j[e];a!=null&&a.split(pe).forEach(c=>{const r=c.replace(/([^;]*);/,"$1").trim();if(c.match(ce)){const l=r.replace(ue,Fe).replace(ce,ue);d.textStyles.push(l)}d.styles.push(r)})},We=function(e,a=""){const d=T[e];a!=null&&(d.styles=a.split(pe))},Ve=function(e,a){e.split(",").forEach(function(d){let c=T[d];if(c===void 0){const r=d.trim();T[r]={id:r,type:"na",children:[]},c=T[r]}c.classes||(c.classes=[]),c.classes.push(a)})},fe=(e,a)=>{const d=e.flat(),c=[];for(const r of d){if(r.label&&(r.label=Me(r.label)),r.type==="classDef"){Ye(r.id,r.css);continue}if(r.type==="applyClass"){Ve(r.id,(r==null?void 0:r.styleClass)||"");continue}if(r.type==="applyStyles"){r!=null&&r.stylesStr&&We(r.id,r==null?void 0:r.stylesStr);continue}if(r.type==="column-setting")a.columns=r.columns||-1;else if(r.type==="edge")V[r.id]?V[r.id]++:V[r.id]=1,r.id=V[r.id]+"-"+r.id,ne.push(r);else{r.label||(r.type==="composite"?r.label="":r.label=r.id);const g=!T[r.id];if(g?T[r.id]=r:(r.type!=="na"&&(T[r.id].type=r.type),r.label!==r.id&&(T[r.id].label=r.label)),r.children&&fe(r.children,r),r.type==="space"){const l=r.width||1;for(let f=0;f<l;f++){const b=ke(r);b.id=b.id+"-"+f,T[b.id]=b,c.push(b)}}else g&&c.push(r)}}a.children=c};let ie=[],U={id:"root",type:"composite",children:[],columns:-1};const je=()=>{S.debug("Clear called"),Ee(),U={id:"root",type:"composite",children:[],columns:-1},T={root:U},ie=[],j={},ne=[],V={}};function Ue(e){switch(S.debug("typeStr2Type",e),e){case"[]":return"square";case"()":return S.debug("we have a round"),"round";case"(())":return"circle";case">]":return"rect_left_inv_arrow";case"{}":return"diamond";case"{{}}":return"hexagon";case"([])":return"stadium";case"[[]]":return"subroutine";case"[()]":return"cylinder";case"((()))":return"doublecircle";case"[//]":return"lean_right";case"[\\\\]":return"lean_left";case"[/\\]":return"trapezoid";case"[\\/]":return"inv_trapezoid";case"<[]>":return"block_arrow";default:return"na"}}function Xe(e){switch(S.debug("typeStr2Type",e),e){case"==":return"thick";default:return"normal"}}function Ge(e){switch(e.trim()){case"--x":return"arrow_cross";case"--o":return"arrow_circle";default:return"arrow_point"}}let de=0;const He=()=>(de++,"id-"+Math.random().toString(36).substr(2,12)+"-"+de),qe=e=>{U.children=e,fe(e,U),ie=U.children},Je=e=>{const a=T[e];return a?a.columns?a.columns:a.children?a.children.length:-1:-1},Ze=()=>[...Object.values(T)],Qe=()=>ie||[],$e=()=>ne,et=e=>T[e],tt=e=>{T[e.id]=e},st=()=>console,nt=function(){return j},it={getConfig:()=>se().block,typeStr2Type:Ue,edgeTypeStr2Type:Xe,edgeStrToEdgeData:Ge,getLogger:st,getBlocksFlat:Ze,getBlocks:Qe,getEdges:$e,setHierarchy:qe,getBlock:et,setBlock:tt,getColumns:Je,getClasses:nt,clear:je,generateId:He},rt=it,q=(e,a)=>{const d=ve,c=d(e,"r"),r=d(e,"g"),g=d(e,"b");return we(c,r,g,a)},at=e=>`.label {
    font-family: ${e.fontFamily};
    color: ${e.nodeTextColor||e.textColor};
  }
  .cluster-label text {
    fill: ${e.titleColor};
  }
  .cluster-label span,p {
    color: ${e.titleColor};
  }



  .label text,span,p {
    fill: ${e.nodeTextColor||e.textColor};
    color: ${e.nodeTextColor||e.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${e.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${e.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${e.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${e.edgeLabelBackground};
      fill: ${e.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${q(e.edgeLabelBackground,.5)};
    // background-color:
  }

  .node .cluster {
    // fill: ${q(e.mainBkg,.5)};
    fill: ${q(e.clusterBkg,.5)};
    stroke: ${q(e.clusterBorder,.2)};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${e.titleColor};
  }

  .cluster span,p {
    color: ${e.titleColor};
  }
  /* .cluster div {
    color: ${e.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${e.fontFamily};
    font-size: 12px;
    background: ${e.tertiaryColor};
    border: 1px solid ${e.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.textColor};
  }
`,lt=at;function be(e,a,d=!1){var c,r,g;const l=e;let f="default";(((c=l==null?void 0:l.classes)==null?void 0:c.length)||0)>0&&(f=((l==null?void 0:l.classes)||[]).join(" ")),f=f+" flowchart-label";let b=0,p="",x;switch(l.type){case"round":b=5,p="rect";break;case"composite":b=0,p="composite",x=0;break;case"square":p="rect";break;case"diamond":p="question";break;case"hexagon":p="hexagon";break;case"block_arrow":p="block_arrow";break;case"odd":p="rect_left_inv_arrow";break;case"lean_right":p="lean_right";break;case"lean_left":p="lean_left";break;case"trapezoid":p="trapezoid";break;case"inv_trapezoid":p="inv_trapezoid";break;case"rect_left_inv_arrow":p="rect_left_inv_arrow";break;case"circle":p="circle";break;case"ellipse":p="ellipse";break;case"stadium":p="stadium";break;case"subroutine":p="subroutine";break;case"cylinder":p="cylinder";break;case"group":p="rect";break;case"doublecircle":p="doublecircle";break;default:p="rect"}const y=Ne((l==null?void 0:l.styles)||[]),z=l.label,N=l.size||{width:0,height:0,x:0,y:0};return{labelStyle:y.labelStyle,shape:p,labelText:z,rx:b,ry:b,class:f,style:y.style,id:l.id,directions:l.directions,width:N.width,height:N.height,x:N.x,y:N.y,positioned:d,intersect:void 0,type:l.type,padding:x??(((g=(r=se())==null?void 0:r.block)==null?void 0:g.padding)||0)}}async function ot(e,a,d){const c=be(a,d,!1);if(c.type==="group")return;const r=await ge(e,c),g=r.node().getBBox(),l=d.getBlock(c.id);l.size={width:g.width,height:g.height,x:0,y:0,node:r},d.setBlock(l),r.remove()}async function ct(e,a,d){const c=be(a,d,!0);d.getBlock(c.id).type!=="space"&&(await ge(e,c),a.intersect=c==null?void 0:c.intersect,Ce(c))}async function re(e,a,d,c){for(const r of a)await c(e,r,d),r.children&&await re(e,r.children,d,c)}async function ut(e,a,d){await re(e,a,d,ot)}async function dt(e,a,d){await re(e,a,d,ct)}async function ht(e,a,d,c,r){const g=new Ae({multigraph:!0,compound:!0});g.setGraph({rankdir:"TB",nodesep:10,ranksep:10,marginx:8,marginy:8});for(const l of d)l.size&&g.setNode(l.id,{width:l.size.width,height:l.size.height,intersect:l.intersect});for(const l of a)if(l.start&&l.end){const f=c.getBlock(l.start),b=c.getBlock(l.end);if(f!=null&&f.size&&(b!=null&&b.size)){const p=f.size,x=b.size,y=[{x:p.x,y:p.y},{x:p.x+(x.x-p.x)/2,y:p.y+(x.y-p.y)/2},{x:x.x,y:x.y}];await Oe(e,{v:l.start,w:l.end,name:l.id},{...l,arrowTypeEnd:l.arrowTypeEnd,arrowTypeStart:l.arrowTypeStart,points:y,classes:"edge-thickness-normal edge-pattern-solid flowchart-link LS-a1 LE-b1"},void 0,"block",g,r),l.label&&(await Te(e,{...l,label:l.label,labelStyle:"stroke: #333; stroke-width: 1.5px;fill:none;",arrowTypeEnd:l.arrowTypeEnd,arrowTypeStart:l.arrowTypeStart,points:y,classes:"edge-thickness-normal edge-pattern-solid flowchart-link LS-a1 LE-b1"}),await ze({...l,x:y[1].x,y:y[1].y},{originalPath:y}))}}}const _=((oe=(le=he())==null?void 0:le.block)==null?void 0:oe.padding)||8;function gt(e,a){if(e===0||!Number.isInteger(e))throw new Error("Columns must be an integer !== 0.");if(a<0||!Number.isInteger(a))throw new Error("Position must be a non-negative integer."+a);if(e<0)return{px:a,py:0};if(e===1)return{px:0,py:a};const d=a%e,c=Math.floor(a/e);return{px:d,py:c}}const pt=e=>{let a=0,d=0;for(const c of e.children){const{width:r,height:g,x:l,y:f}=c.size||{width:0,height:0,x:0,y:0};S.debug("getMaxChildSize abc95 child:",c.id,"width:",r,"height:",g,"x:",l,"y:",f,c.type),c.type!=="space"&&(r>a&&(a=r/(e.widthInColumns||1)),g>d&&(d=g))}return{width:a,height:d}};function te(e,a,d=0,c=0){var r,g,l,f,b,p,x,y,z,N,k;S.debug("setBlockSizes abc95 (start)",e.id,(r=e==null?void 0:e.size)==null?void 0:r.x,"block width =",e==null?void 0:e.size,"sieblingWidth",d),(g=e==null?void 0:e.size)!=null&&g.width||(e.size={width:d,height:c,x:0,y:0});let E=0,L=0;if(((l=e.children)==null?void 0:l.length)>0){for(const h of e.children)te(h,a);const R=pt(e);E=R.width,L=R.height,S.debug("setBlockSizes abc95 maxWidth of",e.id,":s children is ",E,L);for(const h of e.children)h.size&&(S.debug(`abc95 Setting size of children of ${e.id} id=${h.id} ${E} ${L} ${h.size}`),h.size.width=E*(h.widthInColumns||1)+_*((h.widthInColumns||1)-1),h.size.height=L,h.size.x=0,h.size.y=0,S.debug(`abc95 updating size of ${e.id} children child:${h.id} maxWidth:${E} maxHeight:${L}`));for(const h of e.children)te(h,a,E,L);const I=e.columns||-1;let D=0;for(const h of e.children)D+=h.widthInColumns||1;let o=e.children.length;I>0&&I<D&&(o=I),e.widthInColumns;const s=Math.ceil(D/o);let n=o*(E+_)+_,u=s*(L+_)+_;if(n<d){S.debug(`Detected to small siebling: abc95 ${e.id} sieblingWidth ${d} sieblingHeight ${c} width ${n}`),n=d,u=c;const h=(d-o*_-_)/o,t=(c-s*_-_)/s;S.debug("Size indata abc88",e.id,"childWidth",h,"maxWidth",E),S.debug("Size indata abc88",e.id,"childHeight",t,"maxHeight",L),S.debug("Size indata abc88 xSize",o,"padding",_);for(const m of e.children)m.size&&(m.size.width=h,m.size.height=t,m.size.x=0,m.size.y=0)}if(S.debug(`abc95 (finale calc) ${e.id} xSize ${o} ySize ${s} columns ${I}${e.children.length} width=${Math.max(n,((f=e.size)==null?void 0:f.width)||0)}`),n<(((b=e==null?void 0:e.size)==null?void 0:b.width)||0)){n=((p=e==null?void 0:e.size)==null?void 0:p.width)||0;const h=I>0?Math.min(e.children.length,I):e.children.length;if(h>0){const t=(n-h*_-_)/h;S.debug("abc95 (growing to fit) width",e.id,n,(x=e.size)==null?void 0:x.width,t);for(const m of e.children)m.size&&(m.size.width=t)}}e.size={width:n,height:u,x:0,y:0}}S.debug("setBlockSizes abc94 (done)",e.id,(y=e==null?void 0:e.size)==null?void 0:y.x,(z=e==null?void 0:e.size)==null?void 0:z.width,(N=e==null?void 0:e.size)==null?void 0:N.y,(k=e==null?void 0:e.size)==null?void 0:k.height)}function xe(e,a){var d,c,r,g,l,f,b,p,x,y,z,N,k,E,L,R,I;S.debug(`abc85 layout blocks (=>layoutBlocks) ${e.id} x: ${(d=e==null?void 0:e.size)==null?void 0:d.x} y: ${(c=e==null?void 0:e.size)==null?void 0:c.y} width: ${(r=e==null?void 0:e.size)==null?void 0:r.width}`);const D=e.columns||-1;if(S.debug("layoutBlocks columns abc95",e.id,"=>",D,e),e.children&&e.children.length>0){const o=((l=(g=e==null?void 0:e.children[0])==null?void 0:g.size)==null?void 0:l.width)||0,s=e.children.length*o+(e.children.length-1)*_;S.debug("widthOfChildren 88",s,"posX");let n=0;S.debug("abc91 block?.size?.x",e.id,(f=e==null?void 0:e.size)==null?void 0:f.x);let u=(b=e==null?void 0:e.size)!=null&&b.x?((p=e==null?void 0:e.size)==null?void 0:p.x)+(-((x=e==null?void 0:e.size)==null?void 0:x.width)/2||0):-_,h=0;for(const t of e.children){const m=e;if(!t.size)continue;const{width:i,height:v}=t.size,{px:Y,py:F}=gt(D,n);if(F!=h&&(h=F,u=(y=e==null?void 0:e.size)!=null&&y.x?((z=e==null?void 0:e.size)==null?void 0:z.x)+(-((N=e==null?void 0:e.size)==null?void 0:N.width)/2||0):-_,S.debug("New row in layout for block",e.id," and child ",t.id,h)),S.debug(`abc89 layout blocks (child) id: ${t.id} Pos: ${n} (px, py) ${Y},${F} (${(k=m==null?void 0:m.size)==null?void 0:k.x},${(E=m==null?void 0:m.size)==null?void 0:E.y}) parent: ${m.id} width: ${i}${_}`),m.size){const A=i/2;t.size.x=u+_+A,S.debug(`abc91 layout blocks (calc) px, pyid:${t.id} startingPos=X${u} new startingPosX${t.size.x} ${A} padding=${_} width=${i} halfWidth=${A} => x:${t.size.x} y:${t.size.y} ${t.widthInColumns} (width * (child?.w || 1)) / 2 ${i*((t==null?void 0:t.widthInColumns)||1)/2}`),u=t.size.x+A,t.size.y=m.size.y-m.size.height/2+F*(v+_)+v/2+_,S.debug(`abc88 layout blocks (calc) px, pyid:${t.id}startingPosX${u}${_}${A}=>x:${t.size.x}y:${t.size.y}${t.widthInColumns}(width * (child?.w || 1)) / 2${i*((t==null?void 0:t.widthInColumns)||1)/2}`)}t.children&&xe(t),n+=(t==null?void 0:t.widthInColumns)||1,S.debug("abc88 columnsPos",t,n)}}S.debug(`layout blocks (<==layoutBlocks) ${e.id} x: ${(L=e==null?void 0:e.size)==null?void 0:L.x} y: ${(R=e==null?void 0:e.size)==null?void 0:R.y} width: ${(I=e==null?void 0:e.size)==null?void 0:I.width}`)}function Se(e,{minX:a,minY:d,maxX:c,maxY:r}={minX:0,minY:0,maxX:0,maxY:0}){if(e.size&&e.id!=="root"){const{x:g,y:l,width:f,height:b}=e.size;g-f/2<a&&(a=g-f/2),l-b/2<d&&(d=l-b/2),g+f/2>c&&(c=g+f/2),l+b/2>r&&(r=l+b/2)}if(e.children)for(const g of e.children)({minX:a,minY:d,maxX:c,maxY:r}=Se(g,{minX:a,minY:d,maxX:c,maxY:r}));return{minX:a,minY:d,maxX:c,maxY:r}}function ft(e){const a=e.getBlock("root");if(!a)return;te(a,e,0,0),xe(a),S.debug("getBlocks",JSON.stringify(a,null,2));const{minX:d,minY:c,maxX:r,maxY:g}=Se(a),l=g-c,f=r-d;return{x:d,y:c,width:f,height:l}}const bt=function(e,a){return a.db.getClasses()},xt=async function(e,a,d,c){const{securityLevel:r,block:g}=se(),l=c.db;let f;r==="sandbox"&&(f=H("#i"+a));const b=r==="sandbox"?H(f.nodes()[0].contentDocument.body):H("body"),p=r==="sandbox"?b.select(`[id="${a}"]`):H(`[id="${a}"]`);Ie(p,["point","circle","cross"],c.type,a);const y=l.getBlocks(),z=l.getBlocksFlat(),N=l.getEdges(),k=p.insert("g").attr("class","block");await ut(k,y,l);const E=ft(l);if(await dt(k,y,l),await ht(k,N,z,l,a),E){const L=E,R=Math.max(1,Math.round(.125*(L.width/L.height))),I=L.height+R+10,D=L.width+10,{useMaxWidth:o}=g;ye(p,I,D,!!o),S.debug("Here Bounds",E,L),p.attr("viewBox",`${L.x-5} ${L.y-5} ${L.width+10} ${L.height+10}`)}Re(Be)},St={draw:xt,getClasses:bt},vt={parser:Pe,db:rt,renderer:St,styles:lt};export{vt as diagram};
