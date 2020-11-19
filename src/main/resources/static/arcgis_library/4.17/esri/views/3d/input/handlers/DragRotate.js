// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../core/screenUtils ../../state/controllers/RotateController ../../../input/InputHandler ../../../input/handlers/support".split(" "),function(e,a,f,g,h,k,l){Object.defineProperty(a,"__esModule",{value:!0});a.DragRotate=void 0;e=function(a){function b(m,c,n,b){var d=a.call(this,!0)||this;d.view=m;d.pointerAction=c;d.pivotPoint=n;d.registerIncoming("drag",b,function(a){return d.handleDrag(a)});return d}f.__extends(b,a);b.prototype.handleDrag=function(a){var c=
a.data;if(!(1<c.pointers.size)&&l.eventMatchesMousePointerAction(a.data,this.pointerAction)){var b=g.createScreenPointArray(c.center.x,c.center.y);switch(c.action){case "start":this.cameraController&&(this.cameraController.end(),this.cameraController=null);this.cameraController=new h.RotateController({view:this.view,pivot:this.pivotPoint});this.view.state.switchCameraController(this.cameraController);this.cameraController.begin(b);break;case "update":this.cameraController&&this.cameraController.update(b);
break;case "end":this.cameraController&&(this.cameraController.end(),this.cameraController=null)}a.stopPropagation()}};return b}(k.InputHandler);a.DragRotate=e});