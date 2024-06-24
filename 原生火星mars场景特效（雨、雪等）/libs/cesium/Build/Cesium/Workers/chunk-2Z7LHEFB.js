/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.117
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */

import{b as Z,h as I}from"./chunk-URXUHQWZ.js";import{a as n,b as N,d as A,e as _}from"./chunk-H26ARMDM.js";import{a as cn}from"./chunk-KROATL7C.js";import{a as T}from"./chunk-WF3Q7FOG.js";import{a as on,b as S}from"./chunk-NERDVOKQ.js";import{e as x}from"./chunk-4ACNSQDC.js";function V(e){this._ellipsoid=T(e,A.WGS84),this._semimajorAxis=this._ellipsoid.maximumRadius,this._oneOverSemimajorAxis=1/this._semimajorAxis}Object.defineProperties(V.prototype,{ellipsoid:{get:function(){return this._ellipsoid}}});V.prototype.project=function(e,t){let o=this._semimajorAxis,c=e.longitude*o,r=e.latitude*o,d=e.height;return x(t)?(t.x=c,t.y=r,t.z=d,t):new n(c,r,d)};V.prototype.unproject=function(e,t){if(!x(e))throw new on("cartesian is required");let o=this._oneOverSemimajorAxis,c=e.x*o,r=e.y*o,d=e.z;return x(t)?(t.longitude=c,t.latitude=r,t.height=d,t):new N(c,r,d)};var U=V;var fn={OUTSIDE:-1,INTERSECTING:0,INSIDE:1},W=Object.freeze(fn);function sn(e,t){this.start=T(e,0),this.stop=T(t,0)}var rn=sn;function a(e,t){this.center=n.clone(T(e,n.ZERO)),this.radius=T(t,0)}var F=new n,Y=new n,J=new n,K=new n,Q=new n,$=new n,L=new n,b=new n,H=new n,nn=new n,tn=new n,en=new n,mn=4/3*cn.PI;a.fromPoints=function(e,t){if(x(t)||(t=new a),!x(e)||e.length===0)return t.center=n.clone(n.ZERO,t.center),t.radius=0,t;let o=n.clone(e[0],L),c=n.clone(o,F),r=n.clone(o,Y),d=n.clone(o,J),f=n.clone(o,K),s=n.clone(o,Q),m=n.clone(o,$),h=e.length,y;for(y=1;y<h;y++){n.clone(e[y],o);let R=o.x,M=o.y,w=o.z;R<c.x&&n.clone(o,c),R>f.x&&n.clone(o,f),M<r.y&&n.clone(o,r),M>s.y&&n.clone(o,s),w<d.z&&n.clone(o,d),w>m.z&&n.clone(o,m)}let u=n.magnitudeSquared(n.subtract(f,c,b)),i=n.magnitudeSquared(n.subtract(s,r,b)),v=n.magnitudeSquared(n.subtract(m,d,b)),C=c,q=f,O=u;i>O&&(O=i,C=r,q=s),v>O&&(O=v,C=d,q=m);let p=H;p.x=(C.x+q.x)*.5,p.y=(C.y+q.y)*.5,p.z=(C.z+q.z)*.5;let z=n.magnitudeSquared(n.subtract(q,p,b)),l=Math.sqrt(z),j=nn;j.x=c.x,j.y=r.y,j.z=d.z;let P=tn;P.x=f.x,P.y=s.y,P.z=m.z;let D=n.midpoint(j,P,en),B=0;for(y=0;y<h;y++){n.clone(e[y],o);let R=n.magnitude(n.subtract(o,D,b));R>B&&(B=R);let M=n.magnitudeSquared(n.subtract(o,p,b));if(M>z){let w=Math.sqrt(M);l=(l+w)*.5,z=l*l;let g=w-l;p.x=(l*p.x+g*o.x)/w,p.y=(l*p.y+g*o.y)/w,p.z=(l*p.z+g*o.z)/w}}return l<B?(n.clone(p,t.center),t.radius=l):(n.clone(D,t.center),t.radius=B),t};var un=new U,xn=new n,yn=new n,k=new N,X=new N;a.fromRectangle2D=function(e,t,o){return a.fromRectangleWithHeights2D(e,t,0,0,o)};a.fromRectangleWithHeights2D=function(e,t,o,c,r){if(x(r)||(r=new a),!x(e))return r.center=n.clone(n.ZERO,r.center),r.radius=0,r;t=T(t,un),I.southwest(e,k),k.height=o,I.northeast(e,X),X.height=c;let d=t.project(k,xn),f=t.project(X,yn),s=f.x-d.x,m=f.y-d.y,h=f.z-d.z;r.radius=Math.sqrt(s*s+m*m+h*h)*.5;let y=r.center;return y.x=d.x+s*.5,y.y=d.y+m*.5,y.z=d.z+h*.5,r};var ln=[];a.fromRectangle3D=function(e,t,o,c){if(t=T(t,A.WGS84),o=T(o,0),x(c)||(c=new a),!x(e))return c.center=n.clone(n.ZERO,c.center),c.radius=0,c;let r=I.subsample(e,t,o,ln);return a.fromPoints(r,c)};a.fromVertices=function(e,t,o,c){if(x(c)||(c=new a),!x(e)||e.length===0)return c.center=n.clone(n.ZERO,c.center),c.radius=0,c;t=T(t,n.ZERO),o=T(o,3),S.typeOf.number.greaterThanOrEquals("stride",o,3);let r=L;r.x=e[0]+t.x,r.y=e[1]+t.y,r.z=e[2]+t.z;let d=n.clone(r,F),f=n.clone(r,Y),s=n.clone(r,J),m=n.clone(r,K),h=n.clone(r,Q),y=n.clone(r,$),u=e.length,i;for(i=0;i<u;i+=o){let w=e[i]+t.x,g=e[i+1]+t.y,E=e[i+2]+t.z;r.x=w,r.y=g,r.z=E,w<d.x&&n.clone(r,d),w>m.x&&n.clone(r,m),g<f.y&&n.clone(r,f),g>h.y&&n.clone(r,h),E<s.z&&n.clone(r,s),E>y.z&&n.clone(r,y)}let v=n.magnitudeSquared(n.subtract(m,d,b)),C=n.magnitudeSquared(n.subtract(h,f,b)),q=n.magnitudeSquared(n.subtract(y,s,b)),O=d,p=m,z=v;C>z&&(z=C,O=f,p=h),q>z&&(z=q,O=s,p=y);let l=H;l.x=(O.x+p.x)*.5,l.y=(O.y+p.y)*.5,l.z=(O.z+p.z)*.5;let j=n.magnitudeSquared(n.subtract(p,l,b)),P=Math.sqrt(j),D=nn;D.x=d.x,D.y=f.y,D.z=s.z;let B=tn;B.x=m.x,B.y=h.y,B.z=y.z;let R=n.midpoint(D,B,en),M=0;for(i=0;i<u;i+=o){r.x=e[i]+t.x,r.y=e[i+1]+t.y,r.z=e[i+2]+t.z;let w=n.magnitude(n.subtract(r,R,b));w>M&&(M=w);let g=n.magnitudeSquared(n.subtract(r,l,b));if(g>j){let E=Math.sqrt(g);P=(P+E)*.5,j=P*P;let G=E-P;l.x=(P*l.x+G*r.x)/E,l.y=(P*l.y+G*r.y)/E,l.z=(P*l.z+G*r.z)/E}}return P<M?(n.clone(l,c.center),c.radius=P):(n.clone(R,c.center),c.radius=M),c};a.fromEncodedCartesianVertices=function(e,t,o){if(x(o)||(o=new a),!x(e)||!x(t)||e.length!==t.length||e.length===0)return o.center=n.clone(n.ZERO,o.center),o.radius=0,o;let c=L;c.x=e[0]+t[0],c.y=e[1]+t[1],c.z=e[2]+t[2];let r=n.clone(c,F),d=n.clone(c,Y),f=n.clone(c,J),s=n.clone(c,K),m=n.clone(c,Q),h=n.clone(c,$),y=e.length,u;for(u=0;u<y;u+=3){let M=e[u]+t[u],w=e[u+1]+t[u+1],g=e[u+2]+t[u+2];c.x=M,c.y=w,c.z=g,M<r.x&&n.clone(c,r),M>s.x&&n.clone(c,s),w<d.y&&n.clone(c,d),w>m.y&&n.clone(c,m),g<f.z&&n.clone(c,f),g>h.z&&n.clone(c,h)}let i=n.magnitudeSquared(n.subtract(s,r,b)),v=n.magnitudeSquared(n.subtract(m,d,b)),C=n.magnitudeSquared(n.subtract(h,f,b)),q=r,O=s,p=i;v>p&&(p=v,q=d,O=m),C>p&&(p=C,q=f,O=h);let z=H;z.x=(q.x+O.x)*.5,z.y=(q.y+O.y)*.5,z.z=(q.z+O.z)*.5;let l=n.magnitudeSquared(n.subtract(O,z,b)),j=Math.sqrt(l),P=nn;P.x=r.x,P.y=d.y,P.z=f.z;let D=tn;D.x=s.x,D.y=m.y,D.z=h.z;let B=n.midpoint(P,D,en),R=0;for(u=0;u<y;u+=3){c.x=e[u]+t[u],c.y=e[u+1]+t[u+1],c.z=e[u+2]+t[u+2];let M=n.magnitude(n.subtract(c,B,b));M>R&&(R=M);let w=n.magnitudeSquared(n.subtract(c,z,b));if(w>l){let g=Math.sqrt(w);j=(j+g)*.5,l=j*j;let E=g-j;z.x=(j*z.x+E*c.x)/g,z.y=(j*z.y+E*c.y)/g,z.z=(j*z.z+E*c.z)/g}}return j<R?(n.clone(z,o.center),o.radius=j):(n.clone(B,o.center),o.radius=R),o};a.fromCornerPoints=function(e,t,o){S.typeOf.object("corner",e),S.typeOf.object("oppositeCorner",t),x(o)||(o=new a);let c=n.midpoint(e,t,o.center);return o.radius=n.distance(c,t),o};a.fromEllipsoid=function(e,t){return S.typeOf.object("ellipsoid",e),x(t)||(t=new a),n.clone(n.ZERO,t.center),t.radius=e.maximumRadius,t};var pn=new n;a.fromBoundingSpheres=function(e,t){if(x(t)||(t=new a),!x(e)||e.length===0)return t.center=n.clone(n.ZERO,t.center),t.radius=0,t;let o=e.length;if(o===1)return a.clone(e[0],t);if(o===2)return a.union(e[0],e[1],t);let c=[],r;for(r=0;r<o;r++)c.push(e[r].center);t=a.fromPoints(c,t);let d=t.center,f=t.radius;for(r=0;r<o;r++){let s=e[r];f=Math.max(f,n.distance(d,s.center,pn)+s.radius)}return t.radius=f,t};var Sn=new n,hn=new n,zn=new n;a.fromOrientedBoundingBox=function(e,t){S.defined("orientedBoundingBox",e),x(t)||(t=new a);let o=e.halfAxes,c=_.getColumn(o,0,Sn),r=_.getColumn(o,1,hn),d=_.getColumn(o,2,zn);return n.add(c,r,c),n.add(c,d,c),t.center=n.clone(e.center,t.center),t.radius=n.magnitude(c),t};var wn=new n,Pn=new n;a.fromTransformation=function(e,t){S.typeOf.object("transformation",e),x(t)||(t=new a);let o=Z.getTranslation(e,wn),c=Z.getScale(e,Pn),r=.5*n.magnitude(c);return t.center=n.clone(o,t.center),t.radius=r,t};a.clone=function(e,t){if(x(e))return x(t)?(t.center=n.clone(e.center,t.center),t.radius=e.radius,t):new a(e.center,e.radius)};a.packedLength=4;a.pack=function(e,t,o){S.typeOf.object("value",e),S.defined("array",t),o=T(o,0);let c=e.center;return t[o++]=c.x,t[o++]=c.y,t[o++]=c.z,t[o]=e.radius,t};a.unpack=function(e,t,o){S.defined("array",e),t=T(t,0),x(o)||(o=new a);let c=o.center;return c.x=e[t++],c.y=e[t++],c.z=e[t++],o.radius=e[t],o};var gn=new n,On=new n;a.union=function(e,t,o){S.typeOf.object("left",e),S.typeOf.object("right",t),x(o)||(o=new a);let c=e.center,r=e.radius,d=t.center,f=t.radius,s=n.subtract(d,c,gn),m=n.magnitude(s);if(r>=m+f)return e.clone(o),o;if(f>=m+r)return t.clone(o),o;let h=(r+m+f)*.5,y=n.multiplyByScalar(s,(-r+h)/m,On);return n.add(y,c,y),n.clone(y,o.center),o.radius=h,o};var jn=new n;a.expand=function(e,t,o){S.typeOf.object("sphere",e),S.typeOf.object("point",t),o=a.clone(e,o);let c=n.magnitude(n.subtract(t,o.center,jn));return c>o.radius&&(o.radius=c),o};a.intersectPlane=function(e,t){S.typeOf.object("sphere",e),S.typeOf.object("plane",t);let o=e.center,c=e.radius,r=t.normal,d=n.dot(r,o)+t.distance;return d<-c?W.OUTSIDE:d<c?W.INTERSECTING:W.INSIDE};a.transform=function(e,t,o){return S.typeOf.object("sphere",e),S.typeOf.object("transform",t),x(o)||(o=new a),o.center=Z.multiplyByPoint(t,e.center,o.center),o.radius=Z.getMaximumScale(t)*e.radius,o};var bn=new n;a.distanceSquaredTo=function(e,t){S.typeOf.object("sphere",e),S.typeOf.object("cartesian",t);let o=n.subtract(e.center,t,bn),c=n.magnitude(o)-e.radius;return c<=0?0:c*c};a.transformWithoutScale=function(e,t,o){return S.typeOf.object("sphere",e),S.typeOf.object("transform",t),x(o)||(o=new a),o.center=Z.multiplyByPoint(t,e.center,o.center),o.radius=e.radius,o};var qn=new n;a.computePlaneDistances=function(e,t,o,c){S.typeOf.object("sphere",e),S.typeOf.object("position",t),S.typeOf.object("direction",o),x(c)||(c=new rn);let r=n.subtract(e.center,t,qn),d=n.dot(o,r);return c.start=d-e.radius,c.stop=d+e.radius,c};var an=new n,Mn=new n,Tn=new n,Cn=new n,Rn=new n,En=new N,dn=new Array(8);for(let e=0;e<8;++e)dn[e]=new n;var Dn=new U;a.projectTo2D=function(e,t,o){S.typeOf.object("sphere",e),t=T(t,Dn);let c=t.ellipsoid,r=e.center,d=e.radius,f;n.equals(r,n.ZERO)?f=n.clone(n.UNIT_X,an):f=c.geodeticSurfaceNormal(r,an);let s=n.cross(n.UNIT_Z,f,Mn);n.normalize(s,s);let m=n.cross(f,s,Tn);n.normalize(m,m),n.multiplyByScalar(f,d,f),n.multiplyByScalar(m,d,m),n.multiplyByScalar(s,d,s);let h=n.negate(m,Rn),y=n.negate(s,Cn),u=dn,i=u[0];n.add(f,m,i),n.add(i,s,i),i=u[1],n.add(f,m,i),n.add(i,y,i),i=u[2],n.add(f,h,i),n.add(i,y,i),i=u[3],n.add(f,h,i),n.add(i,s,i),n.negate(f,f),i=u[4],n.add(f,m,i),n.add(i,s,i),i=u[5],n.add(f,m,i),n.add(i,y,i),i=u[6],n.add(f,h,i),n.add(i,y,i),i=u[7],n.add(f,h,i),n.add(i,s,i);let v=u.length;for(let p=0;p<v;++p){let z=u[p];n.add(r,z,z);let l=c.cartesianToCartographic(z,En);t.project(l,z)}o=a.fromPoints(u,o),r=o.center;let C=r.x,q=r.y,O=r.z;return r.x=O,r.y=C,r.z=q,o};a.isOccluded=function(e,t){return S.typeOf.object("sphere",e),S.typeOf.object("occluder",t),!t.isBoundingSphereVisible(e)};a.equals=function(e,t){return e===t||x(e)&&x(t)&&n.equals(e.center,t.center)&&e.radius===t.radius};a.prototype.intersectPlane=function(e){return a.intersectPlane(this,e)};a.prototype.distanceSquaredTo=function(e){return a.distanceSquaredTo(this,e)};a.prototype.computePlaneDistances=function(e,t,o){return a.computePlaneDistances(this,e,t,o)};a.prototype.isOccluded=function(e){return a.isOccluded(this,e)};a.prototype.equals=function(e){return a.equals(this,e)};a.prototype.clone=function(e){return a.clone(this,e)};a.prototype.volume=function(){let e=this.radius;return mn*e*e*e};var et=a;export{U as a,W as b,rn as c,et as d};
