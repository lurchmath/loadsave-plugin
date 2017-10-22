var LoadSave,bind=function(t,e){return function(){return t.apply(e,arguments)}},slice=[].slice;LoadSave=function(){function t(e){var n;this.editor=e,this.manageFiles=bind(this.manageFiles,this),this.handleOpen=bind(this.handleOpen,this),this.tryToOpen=bind(this.tryToOpen,this),this.load=bind(this.load,this),this.tryToSave=bind(this.tryToSave,this),this.save=bind(this.save,this),this.tryToClear=bind(this.tryToClear,this),this.clear=bind(this.clear,this),this.setFileSystem=bind(this.setFileSystem,this),this.setAppName=bind(this.setAppName,this),this.setFilepath=bind(this.setFilepath,this),this.setFilename=bind(this.setFilename,this),this.setDocumentDirty=bind(this.setDocumentDirty,this),this.recomputePageTitle=bind(this.recomputePageTitle,this),this.setAppName(t.prototype.appName),this.setFileSystem(this.appName),this.setFilepath(FileSystem.prototype.pathSeparator),setTimeout(function(t){return function(){return t.clear()}}(this),0),this.saveMetaData=this.loadMetaData=null,this.editor.on("change",function(t){return function(e){return t.setDocumentDirty(!0)}}(this)),(n=function(t){return function(e,n){var i,o;return i={icon:n.icon,shortcut:n.shortcut,onclick:n.onclick,tooltip:n.tooltip},o=null!=n.icon?"icon":"text",i[o]=n[o],t.editor.addButton(e,i),t.editor.addMenuItem(e,n)}}(this))("newfile",{text:"New",icon:"newdocument",context:"file",shortcut:"meta+alt+N",tooltip:"New file",onclick:function(t){return function(){return t.tryToClear()}}(this)}),n("savefile",{text:"Save",icon:"save",context:"file",shortcut:"meta+S",tooltip:"Save file",onclick:function(t){return function(){return t.tryToSave()}}(this)}),this.editor.addMenuItem("saveas",{text:"Save as...",context:"file",shortcut:"meta+shift+S",onclick:function(t){return function(){return t.tryToSave(null,"")}}(this)}),n("openfile",{text:"Open...",icon:"browse",context:"file",shortcut:"meta+O",tooltip:"Open file...",onclick:function(t){return function(){return t.handleOpen()}}(this)}),this.editor.addMenuItem("managefiles",{text:"Manage files...",context:"file",onclick:function(t){return function(){return t.manageFiles()}}(this)}),t.prototype.instances.push(this)}return t.prototype.appName=null,t.setAppName=function(e){var n,i,o,r,a;for(null==e&&(e=null),t.prototype.appName=e,a=[],n=0,o=(r=t.prototype.instances).length;n<o;n++)i=r[n],a.push(i.setAppName(e));return a},t.prototype.instances=[],t.prototype.recomputePageTitle=function(){return document.title=(this.appName?this.appName+": ":"")+" "+(this.filename||"(untitled)")+" "+(this.documentDirty?"*":"")},t.prototype.setDocumentDirty=function(t){return null==t&&(t=!0),this.documentDirty=t,this.recomputePageTitle()},t.prototype.setFilename=function(t){return null==t&&(t=null),this.filename=t,this.recomputePageTitle()},t.prototype.setFilepath=function(t){return null==t&&(t=null),this.filepath=t},t.prototype.setAppName=function(t){var e;return null==t&&(t=null),e=this.appName===this.fileSystem,this.appName=t,e&&(this.fileSystem=this.appName),this.recomputePageTitle()},t.prototype.setFileSystem=function(t){return null==t&&(t=this.appName),this.fileSystem=t},t.prototype.clear=function(){return this.editor.setContent(""),this.editor.undoManager.clear(),this.setDocumentDirty(!1),this.setFilename(null),"function"==typeof this.loadMetaData?this.loadMetaData({}):void 0},t.prototype.tryToClear=function(){return this.documentDirty?this.editor.windowManager.open({title:"Save first?",buttons:[{text:"Save",onclick:function(t){return function(){return t.tryToSave(function(e){if(e)return t.clear()}),t.editor.windowManager.close()}}(this)},{text:"Discard",onclick:function(t){return function(){return t.clear(),t.editor.windowManager.close()}}(this)},{text:"Cancel",onclick:function(t){return function(){return t.editor.windowManager.close()}}(this)}]}):(this.clear(),void this.editor.focus())},t.prototype.save=function(){var t,e;if(null!==this.filename)return(e=new FileSystem(this.fileSystem)).cd(this.filepath),t=[this.editor.getContent(),"function"==typeof this.saveMetaData?this.saveMetaData():void 0],e.write(this.filename,t,!0)?this.setDocumentDirty(!1):void 0},t.prototype.tryToSave=function(t,e){var n,i,o,r;return null==e&&(e=this.filename),e?(this.setFilename(e),o=this.save(),this.editor.focus(),"function"==typeof t?t(o):void 0):(i=function(){var t,n,i,o,r,a;if(n=document.getElementsByClassName("mce-window")[0]){for(a=[],i=0,o=(r=n.getElementsByTagName("button")).length;i<o;i++){if("Save"===(t=r[i]).textContent){e?(t.removeAttribute("disabled"),t.parentNode.style.backgroundImage=null,t.parentNode.style.backgroundColor=null):(t.setAttribute("disabled",!0),t.parentNode.style.backgroundImage="none",t.parentNode.style.backgroundColor="#ccc");break}a.push(void 0)}return a}},e=null,this.saveFileNameChangedHandler=function(t){return e=t,i()},n=null,this.changedFolderHandler=function(t){return n=t},r=function(t){return function(e,n){var i;return(i=new FileSystem(t.fileSystem)).cd(e),null!==i.type(n)}}(this),this.buttonClickedHandler=function(i){return function(){var a;return a=arguments[0],2<=arguments.length?slice.call(arguments,1):[],"Save"===a?r(n,e)&&!confirm("Are you sure you want to overwrite the file "+e+"?")?void i.tellDialog("setFileBrowserMode","save file"):(i.setFilepath(n),i.setFilename(e),i.editor.windowManager.close(),o=i.save(),"function"==typeof t?t(o):void 0):"Cancel"===a?(i.editor.windowManager.close(),"function"==typeof t?t(!1):void 0):void 0}}(this),this.editor.windowManager.open({title:"Save file...",url:"filedialog.html",width:600,height:400,buttons:[{text:"Save",subtype:"primary",onclick:function(t){return function(){return t.buttonClickedHandler("Save")}}(this)},{text:"Cancel",onclick:function(t){return function(){return t.buttonClickedHandler("Cancel")}}(this)}]},{fsName:this.fileSystem,mode:"save file"}))},t.prototype.load=function(t,e){var n,i,o,r;if(null!==e)return null===t&&(t="."),(r=new FileSystem(this.fileSystem)).cd(t),o=r.read(e),n=o[0],i=o[1],this.editor.setContent(n),this.editor.undoManager.clear(),this.editor.focus(),this.setFilepath(t),this.setFilename(e),this.setDocumentDirty(!1),"function"==typeof this.loadMetaData?this.loadMetaData(null!=i?i:{}):void 0},t.prototype.tryToOpen=function(t){var e,n,i;return null==t&&(t=function(t){return function(e,n){return t.load(e,n)}}(this)),i=function(){var t,n,i,o,r,a;if(n=document.getElementsByClassName("mce-window")[0]){for(a=[],i=0,o=(r=n.getElementsByTagName("button")).length;i<o;i++){if("Open"===(t=r[i]).textContent){e?(t.removeAttribute("disabled"),t.parentNode.style.backgroundImage=null,t.parentNode.style.backgroundColor=null):(t.setAttribute("disabled",!0),t.parentNode.style.backgroundImage="none",t.parentNode.style.backgroundColor="#ccc");break}a.push(void 0)}return a}},e=null,this.selectedFileHandler=function(t){return e=t,i()},n=null,this.changedFolderHandler=function(t){return n=t},this.buttonClickedHandler=function(i){return function(){var o;return o=arguments[0],2<=arguments.length?slice.call(arguments,1):[],"Open"===o?(i.editor.windowManager.close(),"function"==typeof t?t(n,e):void 0):"Cancel"===o?(i.editor.windowManager.close(),"function"==typeof t?t(null,null):void 0):void 0}}(this),this.editor.windowManager.open({title:"Open file...",url:"filedialog.html",width:600,height:400,buttons:[{text:"Open",subtype:"primary",onclick:function(t){return function(){return t.buttonClickedHandler("Open")}}(this)},{text:"Cancel",onclick:function(t){return function(){return t.buttonClickedHandler("Cancel")}}(this)}]},{fsName:this.fileSystem,mode:"open file"}),i()},t.prototype.handleOpen=function(t){return null==t&&(t=function(t){return function(){return t.tryToOpen()}}(this)),this.documentDirty?this.editor.windowManager.open({title:"Save first?",buttons:[{text:"Save",onclick:function(e){return function(){return e.editor.windowManager.close(),e.tryToSave(function(e){if(e)return t()})}}(this)},{text:"Discard",onclick:function(e){return function(){return e.editor.windowManager.close(),t()}}(this)},{text:"Cancel",onclick:function(t){return function(){return t.editor.windowManager.close()}}(this)}]}):t()},t.prototype.tellDialog=function(){var t,e,n,i,o;for(t=1<=arguments.length?slice.call(arguments,0):[],i=0,o=(n=document.getElementsByTagName("iframe")).length;i<o;i++)if("filedialog.html"===(e=n[i]).getAttribute("src"))return e.contentWindow.postMessage(t,"*")},t.prototype.manageFiles=function(){return this.editor.windowManager.open({title:"Manage files",url:"filedialog.html",width:700,height:500,buttons:[{text:"New folder",onclick:function(t){return function(){return t.tellDialog("buttonClicked","New folder")}}(this)},{text:"Done",onclick:function(t){return function(){return t.editor.windowManager.close()}}(this)}]},{fsName:this.fileSystem,mode:"manage files"})},t.prototype.installOpenHandler=function(t){return this.replaceInternalHandler("tryToOpen",t)},t.prototype.installSaveHandler=function(t){return this.replaceInternalHandler("tryToSave",t)},t.prototype.installManageFilesHandler=function(t){return this.replaceInternalHandler("manageFiles",t)},t.prototype.replaceInternalHandler=function(t,e){var n,i;return null!=e?(null==(n=null!=this.handlerBackups?this.handlerBackups:this.handlerBackups={})[t]&&(n[t]=this[t]),this[t]=e):null!=(null!=(i=this.handlerBackups)?i[t]:void 0)?this[t]=this.handlerBackups[t]:void 0},t}(),tinymce.PluginManager.add("loadsave",function(t,e){return t.LoadSave=new LoadSave(t)}),window.onmessage=function(t){var e,n,i,o,r;for(e=t.data[0]+"Handler",n=0,o=(r=LoadSave.prototype.instances).length;n<o;n++)if((i=r[n]).hasOwnProperty(e))return i[e].apply(null,t.data.slice(1))},window.setAppName=function(t){return null==t&&(t=null),LoadSave.prototype.appName=t};
//# sourceMappingURL=loadsaveplugin.js.map