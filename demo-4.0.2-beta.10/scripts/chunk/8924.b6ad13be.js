/*! For license information please see 8924.b6ad13be.js.LICENSE.txt */
"use strict";(self.webpackChunkamis_editor_demo=self.webpackChunkamis_editor_demo||[]).push([[8924],{38924:function(e,t,n){n.r(t),n.d(t,{setupMode:function(){return Yt}});var r=n(88087),i=Object.defineProperty,o=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,s=Object.prototype.hasOwnProperty,c={};i(c,"__esModule",{value:!0}),((e,t,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let r of a(t))s.call(e,r)||"default"===r||i(e,r,{get:()=>t[r],enumerable:!(n=o(t,r))||n.enumerable})})(c,r);var u,d,l,g,h,f,p,m,v,k,b,C,_,w,y,E,A,x,I,S,T,L,j,O,R,M,P,F,D,N,U,W,V,B,K,z,q,H,X,$,Q,G,J,Y,Z,ee,te,ne,re,ie=class{constructor(e){this._defaults=e,this._worker=null,this._client=null,this._idleCheckInterval=window.setInterval((()=>this._checkIfIdle()),3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange((()=>this._stopWorker()))}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}dispose(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()}_checkIfIdle(){this._worker&&Date.now()-this._lastUsedTime>12e4&&this._stopWorker()}_getClient(){return this._lastUsedTime=Date.now(),this._client||(this._worker=c.editor.createWebWorker({moduleId:"vs/language/json/jsonWorker",label:this._defaults.languageId,createData:{languageSettings:this._defaults.diagnosticsOptions,languageId:this._defaults.languageId,enableSchemaRequest:this._defaults.diagnosticsOptions.enableSchemaRequest}}),this._client=this._worker.getProxy()),this._client}getLanguageServiceWorker(...e){let t;return this._getClient().then((e=>{t=e})).then((t=>{if(this._worker)return this._worker.withSyncedResources(e)})).then((e=>t))}};(d=u||(u={})).MIN_VALUE=-2147483648,d.MAX_VALUE=2147483647,(g=l||(l={})).MIN_VALUE=0,g.MAX_VALUE=2147483647,(f=h||(h={})).create=function(e,t){return e===Number.MAX_VALUE&&(e=l.MAX_VALUE),t===Number.MAX_VALUE&&(t=l.MAX_VALUE),{line:e,character:t}},f.is=function(e){var t=e;return it.objectLiteral(t)&&it.uinteger(t.line)&&it.uinteger(t.character)},(m=p||(p={})).create=function(e,t,n,r){if(it.uinteger(e)&&it.uinteger(t)&&it.uinteger(n)&&it.uinteger(r))return{start:h.create(e,t),end:h.create(n,r)};if(h.is(e)&&h.is(t))return{start:e,end:t};throw new Error("Range#create called with invalid arguments["+e+", "+t+", "+n+", "+r+"]")},m.is=function(e){var t=e;return it.objectLiteral(t)&&h.is(t.start)&&h.is(t.end)},(k=v||(v={})).create=function(e,t){return{uri:e,range:t}},k.is=function(e){var t=e;return it.defined(t)&&p.is(t.range)&&(it.string(t.uri)||it.undefined(t.uri))},(C=b||(b={})).create=function(e,t,n,r){return{targetUri:e,targetRange:t,targetSelectionRange:n,originSelectionRange:r}},C.is=function(e){var t=e;return it.defined(t)&&p.is(t.targetRange)&&it.string(t.targetUri)&&(p.is(t.targetSelectionRange)||it.undefined(t.targetSelectionRange))&&(p.is(t.originSelectionRange)||it.undefined(t.originSelectionRange))},(w=_||(_={})).create=function(e,t,n,r){return{red:e,green:t,blue:n,alpha:r}},w.is=function(e){var t=e;return it.numberRange(t.red,0,1)&&it.numberRange(t.green,0,1)&&it.numberRange(t.blue,0,1)&&it.numberRange(t.alpha,0,1)},(E=y||(y={})).create=function(e,t){return{range:e,color:t}},E.is=function(e){var t=e;return p.is(t.range)&&_.is(t.color)},(x=A||(A={})).create=function(e,t,n){return{label:e,textEdit:t,additionalTextEdits:n}},x.is=function(e){var t=e;return it.string(t.label)&&(it.undefined(t.textEdit)||B.is(t))&&(it.undefined(t.additionalTextEdits)||it.typedArray(t.additionalTextEdits,B.is))},(S=I||(I={})).Comment="comment",S.Imports="imports",S.Region="region",(L=T||(T={})).create=function(e,t,n,r,i){var o={startLine:e,endLine:t};return it.defined(n)&&(o.startCharacter=n),it.defined(r)&&(o.endCharacter=r),it.defined(i)&&(o.kind=i),o},L.is=function(e){var t=e;return it.uinteger(t.startLine)&&it.uinteger(t.startLine)&&(it.undefined(t.startCharacter)||it.uinteger(t.startCharacter))&&(it.undefined(t.endCharacter)||it.uinteger(t.endCharacter))&&(it.undefined(t.kind)||it.string(t.kind))},(O=j||(j={})).create=function(e,t){return{location:e,message:t}},O.is=function(e){var t=e;return it.defined(t)&&v.is(t.location)&&it.string(t.message)},(M=R||(R={})).Error=1,M.Warning=2,M.Information=3,M.Hint=4,(F=P||(P={})).Unnecessary=1,F.Deprecated=2,(D||(D={})).is=function(e){var t=e;return null!=t&&it.string(t.href)},(U=N||(N={})).create=function(e,t,n,r,i,o){var a={range:e,message:t};return it.defined(n)&&(a.severity=n),it.defined(r)&&(a.code=r),it.defined(i)&&(a.source=i),it.defined(o)&&(a.relatedInformation=o),a},U.is=function(e){var t,n=e;return it.defined(n)&&p.is(n.range)&&it.string(n.message)&&(it.number(n.severity)||it.undefined(n.severity))&&(it.integer(n.code)||it.string(n.code)||it.undefined(n.code))&&(it.undefined(n.codeDescription)||it.string(null===(t=n.codeDescription)||void 0===t?void 0:t.href))&&(it.string(n.source)||it.undefined(n.source))&&(it.undefined(n.relatedInformation)||it.typedArray(n.relatedInformation,j.is))},(V=W||(W={})).create=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={title:e,command:t};return it.defined(n)&&n.length>0&&(i.arguments=n),i},V.is=function(e){var t=e;return it.defined(t)&&it.string(t.title)&&it.string(t.command)},(K=B||(B={})).replace=function(e,t){return{range:e,newText:t}},K.insert=function(e,t){return{range:{start:e,end:e},newText:t}},K.del=function(e){return{range:e,newText:""}},K.is=function(e){var t=e;return it.objectLiteral(t)&&it.string(t.newText)&&p.is(t.range)},(q=z||(z={})).create=function(e,t,n){var r={label:e};return void 0!==t&&(r.needsConfirmation=t),void 0!==n&&(r.description=n),r},q.is=function(e){var t=e;return void 0!==t&&it.objectLiteral(t)&&it.string(t.label)&&(it.boolean(t.needsConfirmation)||void 0===t.needsConfirmation)&&(it.string(t.description)||void 0===t.description)},(H||(H={})).is=function(e){return"string"==typeof e},($=X||(X={})).replace=function(e,t,n){return{range:e,newText:t,annotationId:n}},$.insert=function(e,t,n){return{range:{start:e,end:e},newText:t,annotationId:n}},$.del=function(e,t){return{range:e,newText:"",annotationId:t}},$.is=function(e){var t=e;return B.is(t)&&(z.is(t.annotationId)||H.is(t.annotationId))},(G=Q||(Q={})).create=function(e,t){return{textDocument:e,edits:t}},G.is=function(e){var t=e;return it.defined(t)&&ue.is(t.textDocument)&&Array.isArray(t.edits)},(Y=J||(J={})).create=function(e,t,n){var r={kind:"create",uri:e};return void 0===t||void 0===t.overwrite&&void 0===t.ignoreIfExists||(r.options=t),void 0!==n&&(r.annotationId=n),r},Y.is=function(e){var t=e;return t&&"create"===t.kind&&it.string(t.uri)&&(void 0===t.options||(void 0===t.options.overwrite||it.boolean(t.options.overwrite))&&(void 0===t.options.ignoreIfExists||it.boolean(t.options.ignoreIfExists)))&&(void 0===t.annotationId||H.is(t.annotationId))},(ee=Z||(Z={})).create=function(e,t,n,r){var i={kind:"rename",oldUri:e,newUri:t};return void 0===n||void 0===n.overwrite&&void 0===n.ignoreIfExists||(i.options=n),void 0!==r&&(i.annotationId=r),i},ee.is=function(e){var t=e;return t&&"rename"===t.kind&&it.string(t.oldUri)&&it.string(t.newUri)&&(void 0===t.options||(void 0===t.options.overwrite||it.boolean(t.options.overwrite))&&(void 0===t.options.ignoreIfExists||it.boolean(t.options.ignoreIfExists)))&&(void 0===t.annotationId||H.is(t.annotationId))},(ne=te||(te={})).create=function(e,t,n){var r={kind:"delete",uri:e};return void 0===t||void 0===t.recursive&&void 0===t.ignoreIfNotExists||(r.options=t),void 0!==n&&(r.annotationId=n),r},ne.is=function(e){var t=e;return t&&"delete"===t.kind&&it.string(t.uri)&&(void 0===t.options||(void 0===t.options.recursive||it.boolean(t.options.recursive))&&(void 0===t.options.ignoreIfNotExists||it.boolean(t.options.ignoreIfNotExists)))&&(void 0===t.annotationId||H.is(t.annotationId))},(re||(re={})).is=function(e){var t=e;return t&&(void 0!==t.changes||void 0!==t.documentChanges)&&(void 0===t.documentChanges||t.documentChanges.every((function(e){return it.string(e.kind)?J.is(e)||Z.is(e)||te.is(e):Q.is(e)})))};var oe,ae,se,ce,ue,de,le,ge,he,fe,pe,me,ve,ke,be,Ce,_e,we,ye,Ee,Ae,xe,Ie,Se,Te,Le,je,Oe,Re,Me,Pe,Fe,De,Ne,Ue,We,Ve,Be,Ke,ze,qe,He,Xe,$e,Qe,Ge,Je,Ye,Ze,et,tt,nt=function(){function e(e,t){this.edits=e,this.changeAnnotations=t}return e.prototype.insert=function(e,t,n){var r,i;if(void 0===n?r=B.insert(e,t):H.is(n)?(i=n,r=X.insert(e,t,n)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(n),r=X.insert(e,t,i)),this.edits.push(r),void 0!==i)return i},e.prototype.replace=function(e,t,n){var r,i;if(void 0===n?r=B.replace(e,t):H.is(n)?(i=n,r=X.replace(e,t,n)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(n),r=X.replace(e,t,i)),this.edits.push(r),void 0!==i)return i},e.prototype.delete=function(e,t){var n,r;if(void 0===t?n=B.del(e):H.is(t)?(r=t,n=X.del(e,t)):(this.assertChangeAnnotations(this.changeAnnotations),r=this.changeAnnotations.manage(t),n=X.del(e,r)),this.edits.push(n),void 0!==r)return r},e.prototype.add=function(e){this.edits.push(e)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e.prototype.assertChangeAnnotations=function(e){if(void 0===e)throw new Error("Text edit change is not configured to manage change annotations.")},e}(),rt=function(){function e(e){this._annotations=void 0===e?Object.create(null):e,this._counter=0,this._size=0}return e.prototype.all=function(){return this._annotations},Object.defineProperty(e.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),e.prototype.manage=function(e,t){var n;if(H.is(e)?n=e:(n=this.nextId(),t=e),void 0!==this._annotations[n])throw new Error("Id "+n+" is already in use.");if(void 0===t)throw new Error("No annotation provided for id "+n);return this._annotations[n]=t,this._size++,n},e.prototype.nextId=function(){return this._counter++,this._counter.toString()},e}();!function(){function e(e){var t=this;this._textEditChanges=Object.create(null),void 0!==e?(this._workspaceEdit=e,e.documentChanges?(this._changeAnnotations=new rt(e.changeAnnotations),e.changeAnnotations=this._changeAnnotations.all(),e.documentChanges.forEach((function(e){if(Q.is(e)){var n=new nt(e.edits,t._changeAnnotations);t._textEditChanges[e.textDocument.uri]=n}}))):e.changes&&Object.keys(e.changes).forEach((function(n){var r=new nt(e.changes[n]);t._textEditChanges[n]=r}))):this._workspaceEdit={}}Object.defineProperty(e.prototype,"edit",{get:function(){return this.initDocumentChanges(),void 0!==this._changeAnnotations&&(0===this._changeAnnotations.size?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),e.prototype.getTextEditChange=function(e){if(ue.is(e)){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var t={uri:e.uri,version:e.version};if(!(r=this._textEditChanges[t.uri])){var n={textDocument:t,edits:i=[]};this._workspaceEdit.documentChanges.push(n),r=new nt(i,this._changeAnnotations),this._textEditChanges[t.uri]=r}return r}if(this.initChanges(),void 0===this._workspaceEdit.changes)throw new Error("Workspace edit is not configured for normal text edit changes.");var r;if(!(r=this._textEditChanges[e])){var i=[];this._workspaceEdit.changes[e]=i,r=new nt(i),this._textEditChanges[e]=r}return r},e.prototype.initDocumentChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._changeAnnotations=new rt,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},e.prototype.initChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._workspaceEdit.changes=Object.create(null))},e.prototype.createFile=function(e,t,n){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var r,i,o;if(z.is(t)||H.is(t)?r=t:n=t,void 0===r?i=J.create(e,n):(o=H.is(r)?r:this._changeAnnotations.manage(r),i=J.create(e,n,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o},e.prototype.renameFile=function(e,t,n,r){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var i,o,a;if(z.is(n)||H.is(n)?i=n:r=n,void 0===i?o=Z.create(e,t,r):(a=H.is(i)?i:this._changeAnnotations.manage(i),o=Z.create(e,t,r,a)),this._workspaceEdit.documentChanges.push(o),void 0!==a)return a},e.prototype.deleteFile=function(e,t,n){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var r,i,o;if(z.is(t)||H.is(t)?r=t:n=t,void 0===r?i=te.create(e,n):(o=H.is(r)?r:this._changeAnnotations.manage(r),i=te.create(e,n,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o}}(),(ae=oe||(oe={})).create=function(e){return{uri:e}},ae.is=function(e){var t=e;return it.defined(t)&&it.string(t.uri)},(ce=se||(se={})).create=function(e,t){return{uri:e,version:t}},ce.is=function(e){var t=e;return it.defined(t)&&it.string(t.uri)&&it.integer(t.version)},(de=ue||(ue={})).create=function(e,t){return{uri:e,version:t}},de.is=function(e){var t=e;return it.defined(t)&&it.string(t.uri)&&(null===t.version||it.integer(t.version))},(ge=le||(le={})).create=function(e,t,n,r){return{uri:e,languageId:t,version:n,text:r}},ge.is=function(e){var t=e;return it.defined(t)&&it.string(t.uri)&&it.string(t.languageId)&&it.integer(t.version)&&it.string(t.text)},(fe=he||(he={})).PlainText="plaintext",fe.Markdown="markdown",function(e){e.is=function(t){var n=t;return n===e.PlainText||n===e.Markdown}}(he||(he={})),(pe||(pe={})).is=function(e){var t=e;return it.objectLiteral(e)&&he.is(t.kind)&&it.string(t.value)},(ve=me||(me={})).Text=1,ve.Method=2,ve.Function=3,ve.Constructor=4,ve.Field=5,ve.Variable=6,ve.Class=7,ve.Interface=8,ve.Module=9,ve.Property=10,ve.Unit=11,ve.Value=12,ve.Enum=13,ve.Keyword=14,ve.Snippet=15,ve.Color=16,ve.File=17,ve.Reference=18,ve.Folder=19,ve.EnumMember=20,ve.Constant=21,ve.Struct=22,ve.Event=23,ve.Operator=24,ve.TypeParameter=25,(be=ke||(ke={})).PlainText=1,be.Snippet=2,(Ce||(Ce={})).Deprecated=1,(we=_e||(_e={})).create=function(e,t,n){return{newText:e,insert:t,replace:n}},we.is=function(e){var t=e;return t&&it.string(t.newText)&&p.is(t.insert)&&p.is(t.replace)},(Ee=ye||(ye={})).asIs=1,Ee.adjustIndentation=2,(Ae||(Ae={})).create=function(e){return{label:e}},(xe||(xe={})).create=function(e,t){return{items:e||[],isIncomplete:!!t}},(Se=Ie||(Ie={})).fromPlainText=function(e){return e.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")},Se.is=function(e){var t=e;return it.string(t)||it.objectLiteral(t)&&it.string(t.language)&&it.string(t.value)},(Te||(Te={})).is=function(e){var t=e;return!!t&&it.objectLiteral(t)&&(pe.is(t.contents)||Ie.is(t.contents)||it.typedArray(t.contents,Ie.is))&&(void 0===e.range||p.is(e.range))},(Le||(Le={})).create=function(e,t){return t?{label:e,documentation:t}:{label:e}},(je||(je={})).create=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={label:e};return it.defined(t)&&(i.documentation=t),it.defined(n)?i.parameters=n:i.parameters=[],i},(Re=Oe||(Oe={})).Text=1,Re.Read=2,Re.Write=3,(Me||(Me={})).create=function(e,t){var n={range:e};return it.number(t)&&(n.kind=t),n},(Fe=Pe||(Pe={})).File=1,Fe.Module=2,Fe.Namespace=3,Fe.Package=4,Fe.Class=5,Fe.Method=6,Fe.Property=7,Fe.Field=8,Fe.Constructor=9,Fe.Enum=10,Fe.Interface=11,Fe.Function=12,Fe.Variable=13,Fe.Constant=14,Fe.String=15,Fe.Number=16,Fe.Boolean=17,Fe.Array=18,Fe.Object=19,Fe.Key=20,Fe.Null=21,Fe.EnumMember=22,Fe.Struct=23,Fe.Event=24,Fe.Operator=25,Fe.TypeParameter=26,(De||(De={})).Deprecated=1,(Ne||(Ne={})).create=function(e,t,n,r,i){var o={name:e,kind:t,location:{uri:r,range:n}};return i&&(o.containerName=i),o},(We=Ue||(Ue={})).create=function(e,t,n,r,i,o){var a={name:e,detail:t,kind:n,range:r,selectionRange:i};return void 0!==o&&(a.children=o),a},We.is=function(e){var t=e;return t&&it.string(t.name)&&it.number(t.kind)&&p.is(t.range)&&p.is(t.selectionRange)&&(void 0===t.detail||it.string(t.detail))&&(void 0===t.deprecated||it.boolean(t.deprecated))&&(void 0===t.children||Array.isArray(t.children))&&(void 0===t.tags||Array.isArray(t.tags))},(Be=Ve||(Ve={})).Empty="",Be.QuickFix="quickfix",Be.Refactor="refactor",Be.RefactorExtract="refactor.extract",Be.RefactorInline="refactor.inline",Be.RefactorRewrite="refactor.rewrite",Be.Source="source",Be.SourceOrganizeImports="source.organizeImports",Be.SourceFixAll="source.fixAll",(ze=Ke||(Ke={})).create=function(e,t){var n={diagnostics:e};return null!=t&&(n.only=t),n},ze.is=function(e){var t=e;return it.defined(t)&&it.typedArray(t.diagnostics,N.is)&&(void 0===t.only||it.typedArray(t.only,it.string))},(He=qe||(qe={})).create=function(e,t,n){var r={title:e},i=!0;return"string"==typeof t?(i=!1,r.kind=t):W.is(t)?r.command=t:r.edit=t,i&&void 0!==n&&(r.kind=n),r},He.is=function(e){var t=e;return t&&it.string(t.title)&&(void 0===t.diagnostics||it.typedArray(t.diagnostics,N.is))&&(void 0===t.kind||it.string(t.kind))&&(void 0!==t.edit||void 0!==t.command)&&(void 0===t.command||W.is(t.command))&&(void 0===t.isPreferred||it.boolean(t.isPreferred))&&(void 0===t.edit||re.is(t.edit))},($e=Xe||(Xe={})).create=function(e,t){var n={range:e};return it.defined(t)&&(n.data=t),n},$e.is=function(e){var t=e;return it.defined(t)&&p.is(t.range)&&(it.undefined(t.command)||W.is(t.command))},(Ge=Qe||(Qe={})).create=function(e,t){return{tabSize:e,insertSpaces:t}},Ge.is=function(e){var t=e;return it.defined(t)&&it.uinteger(t.tabSize)&&it.boolean(t.insertSpaces)},(Ye=Je||(Je={})).create=function(e,t,n){return{range:e,target:t,data:n}},Ye.is=function(e){var t=e;return it.defined(t)&&p.is(t.range)&&(it.undefined(t.target)||it.string(t.target))},(et=Ze||(Ze={})).create=function(e,t){return{range:e,parent:t}},et.is=function(e){var t=e;return void 0!==t&&p.is(t.range)&&(void 0===t.parent||et.is(t.parent))},function(e){function t(e,n){if(e.length<=1)return e;var r=e.length/2|0,i=e.slice(0,r),o=e.slice(r);t(i,n),t(o,n);for(var a=0,s=0,c=0;a<i.length&&s<o.length;){var u=n(i[a],o[s]);e[c++]=u<=0?i[a++]:o[s++]}for(;a<i.length;)e[c++]=i[a++];for(;s<o.length;)e[c++]=o[s++];return e}e.create=function(e,t,n,r){return new st(e,t,n,r)},e.is=function(e){var t=e;return!!(it.defined(t)&&it.string(t.uri)&&(it.undefined(t.languageId)||it.string(t.languageId))&&it.uinteger(t.lineCount)&&it.func(t.getText)&&it.func(t.positionAt)&&it.func(t.offsetAt))},e.applyEdits=function(e,n){for(var r=e.getText(),i=t(n,(function(e,t){var n=e.range.start.line-t.range.start.line;return 0===n?e.range.start.character-t.range.start.character:n})),o=r.length,a=i.length-1;a>=0;a--){var s=i[a],c=e.offsetAt(s.range.start),u=e.offsetAt(s.range.end);if(!(u<=o))throw new Error("Overlapping edit");r=r.substring(0,c)+s.newText+r.substring(u,r.length),o=c}return r}}(tt||(tt={}));var it,ot,at,st=function(){function e(e,t,n,r){this._uri=e,this._languageId=t,this._version=n,this._content=r,this._lineOffsets=void 0}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),e.prototype.getText=function(e){if(e){var t=this.offsetAt(e.start),n=this.offsetAt(e.end);return this._content.substring(t,n)}return this._content},e.prototype.update=function(e,t){this._content=e.text,this._version=t,this._lineOffsets=void 0},e.prototype.getLineOffsets=function(){if(void 0===this._lineOffsets){for(var e=[],t=this._content,n=!0,r=0;r<t.length;r++){n&&(e.push(r),n=!1);var i=t.charAt(r);n="\r"===i||"\n"===i,"\r"===i&&r+1<t.length&&"\n"===t.charAt(r+1)&&r++}n&&t.length>0&&e.push(t.length),this._lineOffsets=e}return this._lineOffsets},e.prototype.positionAt=function(e){e=Math.max(Math.min(e,this._content.length),0);var t=this.getLineOffsets(),n=0,r=t.length;if(0===r)return h.create(0,e);for(;n<r;){var i=Math.floor((n+r)/2);t[i]>e?r=i:n=i+1}var o=n-1;return h.create(o,e-t[o])},e.prototype.offsetAt=function(e){var t=this.getLineOffsets();if(e.line>=t.length)return this._content.length;if(e.line<0)return 0;var n=t[e.line],r=e.line+1<t.length?t[e.line+1]:this._content.length;return Math.max(Math.min(n+e.character,r),n)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),e}();ot=it||(it={}),at=Object.prototype.toString,ot.defined=function(e){return void 0!==e},ot.undefined=function(e){return void 0===e},ot.boolean=function(e){return!0===e||!1===e},ot.string=function(e){return"[object String]"===at.call(e)},ot.number=function(e){return"[object Number]"===at.call(e)},ot.numberRange=function(e,t,n){return"[object Number]"===at.call(e)&&t<=e&&e<=n},ot.integer=function(e){return"[object Number]"===at.call(e)&&-2147483648<=e&&e<=2147483647},ot.uinteger=function(e){return"[object Number]"===at.call(e)&&0<=e&&e<=2147483647},ot.func=function(e){return"[object Function]"===at.call(e)},ot.objectLiteral=function(e){return null!==e&&"object"==typeof e},ot.typedArray=function(e,t){return Array.isArray(e)&&e.every(t)};var ct=class{constructor(e,t,n){this._languageId=e,this._worker=t,this._disposables=[],this._listener=Object.create(null);const r=e=>{let t,n=e.getLanguageId();n===this._languageId&&(this._listener[e.uri.toString()]=e.onDidChangeContent((()=>{window.clearTimeout(t),t=window.setTimeout((()=>this._doValidate(e.uri,n)),500)})),this._doValidate(e.uri,n))},i=e=>{c.editor.setModelMarkers(e,this._languageId,[]);let t=e.uri.toString(),n=this._listener[t];n&&(n.dispose(),delete this._listener[t])};this._disposables.push(c.editor.onDidCreateModel(r)),this._disposables.push(c.editor.onWillDisposeModel(i)),this._disposables.push(c.editor.onDidChangeModelLanguage((e=>{i(e.model),r(e.model)}))),this._disposables.push(n((e=>{c.editor.getModels().forEach((e=>{e.getLanguageId()===this._languageId&&(i(e),r(e))}))}))),this._disposables.push({dispose:()=>{c.editor.getModels().forEach(i);for(let e in this._listener)this._listener[e].dispose()}}),c.editor.getModels().forEach(r)}dispose(){this._disposables.forEach((e=>e&&e.dispose())),this._disposables.length=0}_doValidate(e,t){this._worker(e).then((t=>t.doValidation(e.toString()))).then((n=>{const r=n.map((e=>function(e,t){let n="number"==typeof t.code?String(t.code):t.code;return{severity:ut(t.severity),startLineNumber:t.range.start.line+1,startColumn:t.range.start.character+1,endLineNumber:t.range.end.line+1,endColumn:t.range.end.character+1,message:t.message,code:n,source:t.source}}(0,e)));let i=c.editor.getModel(e);i&&i.getLanguageId()===t&&c.editor.setModelMarkers(i,t,r)})).then(void 0,(e=>{console.error(e)}))}};function ut(e){switch(e){case R.Error:return c.MarkerSeverity.Error;case R.Warning:return c.MarkerSeverity.Warning;case R.Information:return c.MarkerSeverity.Info;case R.Hint:return c.MarkerSeverity.Hint;default:return c.MarkerSeverity.Info}}var dt=class{constructor(e,t){this._worker=e,this._triggerCharacters=t}get triggerCharacters(){return this._triggerCharacters}provideCompletionItems(e,t,n,r){const i=e.uri;return this._worker(i).then((e=>e.doComplete(i.toString(),lt(t)))).then((n=>{if(!n)return;const r=e.getWordUntilPosition(t),i=new c.Range(t.lineNumber,r.startColumn,t.lineNumber,r.endColumn),o=n.items.map((e=>{const t={label:e.label,insertText:e.insertText||e.label,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,command:(n=e.command,n&&"editor.action.triggerSuggest"===n.command?{id:n.command,title:n.title,arguments:n.arguments}:void 0),range:i,kind:ft(e.kind)};var n,r;return e.textEdit&&(void 0!==(r=e.textEdit).insert&&void 0!==r.replace?t.range={insert:ht(e.textEdit.insert),replace:ht(e.textEdit.replace)}:t.range=ht(e.textEdit.range),t.insertText=e.textEdit.newText),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(pt)),e.insertTextFormat===ke.Snippet&&(t.insertTextRules=c.languages.CompletionItemInsertTextRule.InsertAsSnippet),t}));return{isIncomplete:n.isIncomplete,suggestions:o}}))}};function lt(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function gt(e){if(e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}function ht(e){if(e)return new c.Range(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function ft(e){const t=c.languages.CompletionItemKind;switch(e){case me.Text:return t.Text;case me.Method:return t.Method;case me.Function:return t.Function;case me.Constructor:return t.Constructor;case me.Field:return t.Field;case me.Variable:return t.Variable;case me.Class:return t.Class;case me.Interface:return t.Interface;case me.Module:return t.Module;case me.Property:return t.Property;case me.Unit:return t.Unit;case me.Value:return t.Value;case me.Enum:return t.Enum;case me.Keyword:return t.Keyword;case me.Snippet:return t.Snippet;case me.Color:return t.Color;case me.File:return t.File;case me.Reference:return t.Reference}return t.Property}function pt(e){if(e)return{range:ht(e.range),text:e.newText}}var mt=class{constructor(e){this._worker=e}provideHover(e,t,n){let r=e.uri;return this._worker(r).then((e=>e.doHover(r.toString(),lt(t)))).then((e=>{if(e)return{range:ht(e.range),contents:kt(e.contents)}}))}};function vt(e){return"string"==typeof e?{value:e}:(t=e)&&"object"==typeof t&&"string"==typeof t.kind?"plaintext"===e.kind?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+"\n"+e.value+"\n```\n"};var t}function kt(e){if(e)return Array.isArray(e)?e.map(vt):[vt(e)]}var bt=class{constructor(e){this._worker=e}provideDocumentSymbols(e,t){const n=e.uri;return this._worker(n).then((e=>e.findDocumentSymbols(n.toString()))).then((e=>{if(e)return e.map((e=>({name:e.name,detail:"",containerName:e.containerName,kind:Ct(e.kind),range:ht(e.location.range),selectionRange:ht(e.location.range),tags:[]})))}))}};function Ct(e){let t=c.languages.SymbolKind;switch(e){case Pe.File:return t.Array;case Pe.Module:return t.Module;case Pe.Namespace:return t.Namespace;case Pe.Package:return t.Package;case Pe.Class:return t.Class;case Pe.Method:return t.Method;case Pe.Property:return t.Property;case Pe.Field:return t.Field;case Pe.Constructor:return t.Constructor;case Pe.Enum:return t.Enum;case Pe.Interface:return t.Interface;case Pe.Function:return t.Function;case Pe.Variable:return t.Variable;case Pe.Constant:return t.Constant;case Pe.String:return t.String;case Pe.Number:return t.Number;case Pe.Boolean:return t.Boolean;case Pe.Array:return t.Array}return t.Function}var _t=class{constructor(e){this._worker=e}provideDocumentFormattingEdits(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.format(r.toString(),null,yt(t)).then((e=>{if(e&&0!==e.length)return e.map(pt)}))))}},wt=class{constructor(e){this._worker=e}provideDocumentRangeFormattingEdits(e,t,n,r){const i=e.uri;return this._worker(i).then((e=>e.format(i.toString(),gt(t),yt(n)).then((e=>{if(e&&0!==e.length)return e.map(pt)}))))}};function yt(e){return{tabSize:e.tabSize,insertSpaces:e.insertSpaces}}var Et,At=class{constructor(e){this._worker=e}provideDocumentColors(e,t){const n=e.uri;return this._worker(n).then((e=>e.findDocumentColors(n.toString()))).then((e=>{if(e)return e.map((e=>({color:e.color,range:ht(e.range)})))}))}provideColorPresentations(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.getColorPresentations(r.toString(),t.color,gt(t.range)))).then((e=>{if(e)return e.map((e=>{let t={label:e.label};return e.textEdit&&(t.textEdit=pt(e.textEdit)),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(pt)),t}))}))}},xt=class{constructor(e){this._worker=e}provideFoldingRanges(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.getFoldingRanges(r.toString(),t))).then((e=>{if(e)return e.map((e=>{const t={start:e.startLine+1,end:e.endLine+1};return void 0!==e.kind&&(t.kind=function(e){switch(e){case I.Comment:return c.languages.FoldingRangeKind.Comment;case I.Imports:return c.languages.FoldingRangeKind.Imports;case I.Region:return c.languages.FoldingRangeKind.Region}}(e.kind)),t}))}))}},It=class{constructor(e){this._worker=e}provideSelectionRanges(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.getSelectionRanges(r.toString(),t.map(lt)))).then((e=>{if(e)return e.map((e=>{const t=[];for(;e;)t.push({range:ht(e.range)}),e=e.parent;return t}))}))}};function St(e){return 32===e||9===e||11===e||12===e||160===e||5760===e||e>=8192&&e<=8203||8239===e||8287===e||12288===e||65279===e}function Tt(e){return 10===e||13===e||8232===e||8233===e}function Lt(e){return e>=48&&e<=57}(Et||(Et={})).DEFAULT={allowTrailingComma:!1};var jt=function(e,t){void 0===t&&(t=!1);var n=e.length,r=0,i="",o=0,a=16,s=0,c=0,u=0,d=0,l=0;function g(t,n){for(var i=0,o=0;i<t||!n;){var a=e.charCodeAt(r);if(a>=48&&a<=57)o=16*o+a-48;else if(a>=65&&a<=70)o=16*o+a-65+10;else{if(!(a>=97&&a<=102))break;o=16*o+a-97+10}r++,i++}return i<t&&(o=-1),o}function h(){if(i="",l=0,o=r,c=s,d=u,r>=n)return o=n,a=17;var t=e.charCodeAt(r);if(St(t)){do{r++,i+=String.fromCharCode(t),t=e.charCodeAt(r)}while(St(t));return a=15}if(Tt(t))return r++,i+=String.fromCharCode(t),13===t&&10===e.charCodeAt(r)&&(r++,i+="\n"),s++,u=r,a=14;switch(t){case 123:return r++,a=1;case 125:return r++,a=2;case 91:return r++,a=3;case 93:return r++,a=4;case 58:return r++,a=6;case 44:return r++,a=5;case 34:return r++,i=function(){for(var t="",i=r;;){if(r>=n){t+=e.substring(i,r),l=2;break}var o=e.charCodeAt(r);if(34===o){t+=e.substring(i,r),r++;break}if(92!==o){if(o>=0&&o<=31){if(Tt(o)){t+=e.substring(i,r),l=2;break}l=6}r++}else{if(t+=e.substring(i,r),++r>=n){l=2;break}switch(e.charCodeAt(r++)){case 34:t+='"';break;case 92:t+="\\";break;case 47:t+="/";break;case 98:t+="\b";break;case 102:t+="\f";break;case 110:t+="\n";break;case 114:t+="\r";break;case 116:t+="\t";break;case 117:var a=g(4,!0);a>=0?t+=String.fromCharCode(a):l=4;break;default:l=5}i=r}}return t}(),a=10;case 47:var h=r-1;if(47===e.charCodeAt(r+1)){for(r+=2;r<n&&!Tt(e.charCodeAt(r));)r++;return i=e.substring(h,r),a=12}if(42===e.charCodeAt(r+1)){r+=2;for(var p=n-1,m=!1;r<p;){var v=e.charCodeAt(r);if(42===v&&47===e.charCodeAt(r+1)){r+=2,m=!0;break}r++,Tt(v)&&(13===v&&10===e.charCodeAt(r)&&r++,s++,u=r)}return m||(r++,l=1),i=e.substring(h,r),a=13}return i+=String.fromCharCode(t),r++,a=16;case 45:if(i+=String.fromCharCode(t),++r===n||!Lt(e.charCodeAt(r)))return a=16;case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return i+=function(){var t=r;if(48===e.charCodeAt(r))r++;else for(r++;r<e.length&&Lt(e.charCodeAt(r));)r++;if(r<e.length&&46===e.charCodeAt(r)){if(!(++r<e.length&&Lt(e.charCodeAt(r))))return l=3,e.substring(t,r);for(r++;r<e.length&&Lt(e.charCodeAt(r));)r++}var n=r;if(r<e.length&&(69===e.charCodeAt(r)||101===e.charCodeAt(r)))if((++r<e.length&&43===e.charCodeAt(r)||45===e.charCodeAt(r))&&r++,r<e.length&&Lt(e.charCodeAt(r))){for(r++;r<e.length&&Lt(e.charCodeAt(r));)r++;n=r}else l=3;return e.substring(t,n)}(),a=11;default:for(;r<n&&f(t);)r++,t=e.charCodeAt(r);if(o!==r){switch(i=e.substring(o,r)){case"true":return a=8;case"false":return a=9;case"null":return a=7}return a=16}return i+=String.fromCharCode(t),r++,a=16}}function f(e){if(St(e)||Tt(e))return!1;switch(e){case 125:case 93:case 123:case 91:case 34:case 58:case 44:case 47:return!1}return!0}return{setPosition:function(e){r=e,i="",o=0,a=16,l=0},getPosition:function(){return r},scan:t?function(){var e;do{e=h()}while(e>=12&&e<=15);return e}:h,getToken:function(){return a},getTokenValue:function(){return i},getTokenOffset:function(){return o},getTokenLength:function(){return r-o},getTokenStartLine:function(){return c},getTokenStartCharacter:function(){return o-d},getTokenError:function(){return l}}};var Ot,Rt,Mt="delimiter.bracket.json",Pt="delimiter.array.json",Ft="delimiter.colon.json",Dt="delimiter.comma.json",Nt="keyword.json",Ut="keyword.json",Wt="string.value.json",Vt="number.json",Bt="string.key.json",Kt="comment.block.json",zt="comment.line.json";(Rt=Ot||(Ot={}))[Rt.Object=0]="Object",Rt[Rt.Array=1]="Array";var qt,Ht,Xt,$t,Qt=class{constructor(e,t){this.parent=e,this.type=t}static pop(e){return e?e.parent:null}static push(e,t){return new Qt(e,t)}static equals(e,t){if(!e&&!t)return!0;if(!e||!t)return!1;for(;e&&t;){if(e===t)return!0;if(e.type!==t.type)return!1;e=e.parent,t=t.parent}return!0}},Gt=class{constructor(e,t,n,r){this._state=e,this.scanError=t,this.lastWasColon=n,this.parents=r}clone(){return new Gt(this._state,this.scanError,this.lastWasColon,this.parents)}equals(e){return e===this||!!(e&&e instanceof Gt)&&this.scanError===e.scanError&&this.lastWasColon===e.lastWasColon&&Qt.equals(this.parents,e.parents)}getStateData(){return this._state}setStateData(e){this._state=e}};(Ht=qt||(qt={}))[Ht.None=0]="None",Ht[Ht.UnexpectedEndOfComment=1]="UnexpectedEndOfComment",Ht[Ht.UnexpectedEndOfString=2]="UnexpectedEndOfString",Ht[Ht.UnexpectedEndOfNumber=3]="UnexpectedEndOfNumber",Ht[Ht.InvalidUnicode=4]="InvalidUnicode",Ht[Ht.InvalidEscapeCharacter=5]="InvalidEscapeCharacter",Ht[Ht.InvalidCharacter=6]="InvalidCharacter",($t=Xt||(Xt={}))[$t.OpenBraceToken=1]="OpenBraceToken",$t[$t.CloseBraceToken=2]="CloseBraceToken",$t[$t.OpenBracketToken=3]="OpenBracketToken",$t[$t.CloseBracketToken=4]="CloseBracketToken",$t[$t.CommaToken=5]="CommaToken",$t[$t.ColonToken=6]="ColonToken",$t[$t.NullKeyword=7]="NullKeyword",$t[$t.TrueKeyword=8]="TrueKeyword",$t[$t.FalseKeyword=9]="FalseKeyword",$t[$t.StringLiteral=10]="StringLiteral",$t[$t.NumericLiteral=11]="NumericLiteral",$t[$t.LineCommentTrivia=12]="LineCommentTrivia",$t[$t.BlockCommentTrivia=13]="BlockCommentTrivia",$t[$t.LineBreakTrivia=14]="LineBreakTrivia",$t[$t.Trivia=15]="Trivia",$t[$t.Unknown=16]="Unknown",$t[$t.EOF=17]="EOF";var Jt=class extends ct{constructor(e,t,n){super(e,t,n.onDidChange),this._disposables.push(c.editor.onWillDisposeModel((e=>{this._resetSchema(e.uri)}))),this._disposables.push(c.editor.onDidChangeModelLanguage((e=>{this._resetSchema(e.model.uri)})))}_resetSchema(e){this._worker().then((t=>{t.resetSchema(e.toString())}))}};function Yt(e){const t=[],n=[],r=new ie(e);t.push(r);const i=(...e)=>r.getLanguageServiceWorker(...e);function o(){const{languageId:t,modeConfiguration:r}=e;var o;en(n),r.documentFormattingEdits&&n.push(c.languages.registerDocumentFormattingEditProvider(t,new _t(i))),r.documentRangeFormattingEdits&&n.push(c.languages.registerDocumentRangeFormattingEditProvider(t,new wt(i))),r.completionItems&&n.push(c.languages.registerCompletionItemProvider(t,new dt(i,[" ",":",'"']))),r.hovers&&n.push(c.languages.registerHoverProvider(t,new mt(i))),r.documentSymbols&&n.push(c.languages.registerDocumentSymbolProvider(t,new bt(i))),r.tokens&&n.push(c.languages.setTokensProvider(t,(o=!0,{getInitialState:()=>new Gt(null,null,!1,null),tokenize:(e,t)=>function(e,t,n,r=0){let i=0,o=!1;switch(n.scanError){case 2:t='"'+t,i=1;break;case 1:t="/*"+t,i=2}const a=jt(t);let s=n.lastWasColon,c=n.parents;const u={tokens:[],endState:n.clone()};for(;;){let d=r+a.getPosition(),l="";const g=a.scan();if(17===g)break;if(d===r+a.getPosition())throw new Error("Scanner did not advance, next 3 characters are: "+t.substr(a.getPosition(),3));switch(o&&(d-=i),o=i>0,g){case 1:c=Qt.push(c,0),l=Mt,s=!1;break;case 2:c=Qt.pop(c),l=Mt,s=!1;break;case 3:c=Qt.push(c,1),l=Pt,s=!1;break;case 4:c=Qt.pop(c),l=Pt,s=!1;break;case 6:l=Ft,s=!0;break;case 5:l=Dt,s=!1;break;case 8:case 9:l=Nt,s=!1;break;case 7:l=Ut,s=!1;break;case 10:const e=c?c.type:0;l=s||1===e?Wt:Bt,s=!1;break;case 11:l=Vt,s=!1}if(e)switch(g){case 12:l=zt;break;case 13:l=Kt}u.endState=new Gt(n.getStateData(),a.getTokenError(),s,c),u.tokens.push({startIndex:d,scopes:l})}return u}(o,e,t)}))),r.colors&&n.push(c.languages.registerColorProvider(t,new At(i))),r.foldingRanges&&n.push(c.languages.registerFoldingRangeProvider(t,new xt(i))),r.diagnostics&&n.push(new Jt(t,i,e)),r.selectionRanges&&n.push(c.languages.registerSelectionRangeProvider(t,new It(i)))}o(),t.push(c.languages.setLanguageConfiguration(e.languageId,tn));let a=e.modeConfiguration;return e.onDidChange((e=>{e.modeConfiguration!==a&&(a=e.modeConfiguration,o())})),t.push(Zt(n)),Zt(t)}function Zt(e){return{dispose:()=>en(e)}}function en(e){for(;e.length;)e.pop().dispose()}var tn={wordPattern:/(-?\d*\.\d\w*)|([^\[\{\]\}\:\"\,\s]+)/g,comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"]],autoClosingPairs:[{open:"{",close:"}",notIn:["string"]},{open:"[",close:"]",notIn:["string"]},{open:'"',close:'"',notIn:["string"]}]}}}]);