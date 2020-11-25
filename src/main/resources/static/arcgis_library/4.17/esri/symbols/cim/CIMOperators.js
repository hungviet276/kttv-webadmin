// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports ./effects/EffectAddControlPoints ./effects/EffectArrow ./effects/EffectBuffer ./effects/EffectCut ./effects/EffectDashes ./effects/EffectDonut ./effects/EffectJog ./effects/EffectMove ./effects/EffectOffset ./effects/EffectReverse ./effects/EffectRotate ./effects/EffectScale ./effects/EffectWave ./placements/PlacementAlongLineSameSize ./placements/PlacementAtExtremities ./placements/PlacementAtRatioPositions ./placements/PlacementInsidePolygon ./placements/PlacementOnLine ./placements/PlacementOnVertices ./placements/PlacementPolygonCenter".split(" "),
function(z,a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,t,u,v,w,x,y){Object.defineProperty(a,"__esModule",{value:!0});a.getPlacementOperator=a.getEffectOperator=void 0;a.getEffectOperator=function(a){if(!a)return null;switch(a.type){case "CIMGeometricEffectAddControlPoints":return b.EffectAddControlPoints.local();case "CIMGeometricEffectArrow":return c.EffectArrow.local();case "CIMGeometricEffectBuffer":return d.EffectBuffer.local();case "CIMGeometricEffectCut":return e.EffectCut.local();case "CIMGeometricEffectDashes":return f.EffectDashes.local();
case "CIMGeometricEffectDonut":return g.EffectDonut.local();case "CIMGeometricEffectJog":return h.EffectJog.local();case "CIMGeometricEffectMove":return k.EffectMove.local();case "CIMGeometricEffectOffset":return l.EffectOffset.local();case "CIMGeometricEffectReverse":return m.EffectReverse.local();case "CIMGeometricEffectRotate":return n.EffectRotate.local();case "CIMGeometricEffectScale":return p.EffectScale.local();case "CIMGeometricEffectWave":return q.EffectWave.local()}return null};a.getPlacementOperator=
function(a){if(!a)return null;switch(a.type){case "CIMMarkerPlacementAlongLineSameSize":return r.PlacementAlongLineSameSize.local();case "CIMMarkerPlacementAtExtremities":return t.PlacementAtExtremities.local();case "CIMMarkerPlacementAtRatioPositions":return u.PlacementAtRatioPositions.local();case "CIMMarkerPlacementInsidePolygon":return v.PlacementInsidePolygon.local();case "CIMMarkerPlacementOnLine":return w.PlacementOnLine.local();case "CIMMarkerPlacementOnVertices":return x.PlacementOnVertices.local();
case "CIMMarkerPlacementPolygonCenter":return y.PlacementPolygonCenter.local()}return null}});