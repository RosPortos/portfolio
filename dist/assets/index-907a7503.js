(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zo="153",Lf=0,Dl=1,If=2,Lu=1,Df=2,Hn=3,fi=0,kt=1,bn=2,li=0,pr=1,So=2,Ul=3,Fl=4,Uf=5,or=100,Ff=101,Of=102,Ol=103,Nl=104,Nf=200,Bf=201,kf=202,zf=203,Iu=204,Du=205,Vf=206,Gf=207,Hf=208,Wf=209,Xf=210,qf=0,Yf=1,jf=2,To=3,Kf=4,Zf=5,$f=6,Jf=7,ca=0,Qf=1,ed=2,Cn=0,td=1,nd=2,id=3,rd=4,sd=5,Uu=300,xr=301,yr=302,Ys=303,Eo=304,ua=306,es=1e3,jt=1001,bo=1002,yt=1003,Bl=1004,Aa=1005,nn=1006,ad=1007,ts=1008,ci=1009,od=1010,ld=1011,$o=1012,Fu=1013,ii=1014,qn=1015,Pn=1016,Ou=1017,Nu=1018,Pi=1020,cd=1021,rn=1023,ud=1024,hd=1025,Li=1026,Mr=1027,fd=1028,Bu=1029,dd=1030,ku=1031,zu=1033,Ra=33776,Ca=33777,Pa=33778,La=33779,kl=35840,zl=35841,Vl=35842,Gl=35843,pd=36196,Hl=37492,Wl=37496,Xl=37808,ql=37809,Yl=37810,jl=37811,Kl=37812,Zl=37813,$l=37814,Jl=37815,Ql=37816,ec=37817,tc=37818,nc=37819,ic=37820,rc=37821,Ia=36492,md=36283,sc=36284,ac=36285,oc=36286,_d=2200,gd=2201,vd=2202,js=2300,Ks=2301,Da=2302,lr=2400,cr=2401,Zs=2402,Jo=2500,xd=2501,Vu=3e3,Ii=3001,yd=3200,Md=3201,Qo=0,Sd=1,Di="",we="srgb",Sn="srgb-linear",Gu="display-p3",Ua=7680,Td=519,Ed=512,bd=513,wd=514,Ad=515,Rd=516,Cd=517,Pd=518,Ld=519,lc=35044,cc="300 es",wo=1035,Yn=2e3,$s=2001;class ki{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let uc=1234567;const Yr=Math.PI/180,Sr=180/Math.PI;function mi(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bt[s&255]+bt[s>>8&255]+bt[s>>16&255]+bt[s>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[t&63|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[n&255]+bt[n>>8&255]+bt[n>>16&255]+bt[n>>24&255]).toLowerCase()}function Mt(s,e,t){return Math.max(e,Math.min(t,s))}function el(s,e){return(s%e+e)%e}function Id(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Dd(s,e,t){return s!==e?(t-s)/(e-s):0}function jr(s,e,t){return(1-t)*s+t*e}function Ud(s,e,t,n){return jr(s,e,1-Math.exp(-t*n))}function Fd(s,e=1){return e-Math.abs(el(s,e*2)-e)}function Od(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Nd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Bd(s,e){return s+Math.floor(Math.random()*(e-s+1))}function kd(s,e){return s+Math.random()*(e-s)}function zd(s){return s*(.5-Math.random())}function Vd(s){s!==void 0&&(uc=s);let e=uc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Gd(s){return s*Yr}function Hd(s){return s*Sr}function Ao(s){return(s&s-1)===0&&s!==0}function Hu(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Js(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Wd(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),f=a((e-n)/2),d=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*u,l*h,l*f,o*c);break;case"YZY":s.set(l*f,o*u,l*h,o*c);break;case"ZXZ":s.set(l*h,l*f,o*u,o*c);break;case"XZX":s.set(o*u,l*g,l*d,o*c);break;case"YXY":s.set(l*d,o*u,l*g,o*c);break;case"ZYZ":s.set(l*g,l*d,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Hr(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ft(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const wn={DEG2RAD:Yr,RAD2DEG:Sr,generateUUID:mi,clamp:Mt,euclideanModulo:el,mapLinear:Id,inverseLerp:Dd,lerp:jr,damp:Ud,pingpong:Fd,smoothstep:Od,smootherstep:Nd,randInt:Bd,randFloat:kd,randFloatSpread:zd,seededRandom:Vd,degToRad:Gd,radToDeg:Hd,isPowerOfTwo:Ao,ceilPowerOfTwo:Hu,floorPowerOfTwo:Js,setQuaternionFromProperEuler:Wd,normalize:Ft,denormalize:Hr};class Ae{constructor(e=0,t=0){Ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class De{constructor(e,t,n,i,r,a,o,l,c){De.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],y=i[1],v=i[4],S=i[7],M=i[2],E=i[5],A=i[8];return r[0]=a*_+o*y+l*M,r[3]=a*m+o*v+l*E,r[6]=a*p+o*S+l*A,r[1]=c*_+u*y+h*M,r[4]=c*m+u*v+h*E,r[7]=c*p+u*S+h*A,r[2]=f*_+d*y+g*M,r[5]=f*m+d*v+g*E,r[8]=f*p+d*S+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*r,d=c*r-a*l,g=t*h+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(o*n-i*a)*_,e[3]=f*_,e[4]=(u*t-i*l)*_,e[5]=(i*r-o*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Fa.makeScale(e,t)),this}rotate(e){return this.premultiply(Fa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Fa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fa=new De;function Wu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ns(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}const hc={};function Kr(s){s in hc||(hc[s]=!0,console.warn(s))}function mr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Oa(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Xd=new De().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),qd=new De().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Yd(s){return s.convertSRGBToLinear().applyMatrix3(qd)}function jd(s){return s.applyMatrix3(Xd).convertLinearToSRGB()}const Kd={[Sn]:s=>s,[we]:s=>s.convertSRGBToLinear(),[Gu]:Yd},Zd={[Sn]:s=>s,[we]:s=>s.convertLinearToSRGB(),[Gu]:jd},mn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return Sn},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Kd[e],i=Zd[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}};let Gi;class Xu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Gi===void 0&&(Gi=ns("canvas")),Gi.width=e.width,Gi.height=e.height;const n=Gi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Gi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ns("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=mr(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(mr(t[n]/255)*255):t[n]=mr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $d=0;class qu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=mi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Na(i[a].image)):r.push(Na(i[a]))}else r=Na(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Na(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Xu.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jd=0;class Tt extends ki{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,n=jt,i=jt,r=nn,a=ts,o=rn,l=ci,c=Tt.DEFAULT_ANISOTROPY,u=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=mi(),this.name="",this.source=new qu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Kr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Ii?we:Di),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Uu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case es:e.x=e.x-Math.floor(e.x);break;case jt:e.x=e.x<0?0:1;break;case bo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case es:e.y=e.y-Math.floor(e.y);break;case jt:e.y=e.y<0?0:1;break;case bo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Kr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===we?Ii:Vu}set encoding(e){Kr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ii?we:Di}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=Uu;Tt.DEFAULT_ANISOTROPY=1;class He{constructor(e=0,t=0,n=0,i=1){He.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,S=(d+1)/2,M=(p+1)/2,E=(u+f)/4,A=(h+_)/4,R=(g+m)/4;return v>S&&v>M?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=E/n,r=A/n):S>M?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=E/i,r=R/i):M<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(M),n=A/r,i=R/r),this.set(n,i,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-_)/y,this.z=(f-u)/y,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hn extends ki{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new He(0,0,e,t),this.scissorTest=!1,this.viewport=new He(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Kr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ii?we:Di),this.texture=new Tt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:nn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new qu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yu extends Tt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=yt,this.minFilter=yt,this.wrapR=jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qd extends Tt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=yt,this.minFilter=yt,this.wrapR=jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=r[a+0],d=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let m=1-o;const p=l*f+c*d+u*g+h*_,y=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const M=Math.sqrt(v),E=Math.atan2(M,p*y);m=Math.sin(m*E)/M,o=Math.sin(o*E)/M}const S=o*y;if(l=l*m+f*S,c=c*m+d*S,u=u*m+g*S,h=h*m+_*S,m===1-o){const M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-o*d,e[t+2]=c*g+u*d+o*f-l*h,e[t+3]=u*g-o*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(r/2),f=l(n/2),d=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-i)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(r-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-i)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-r*l,this._y=i*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*i-o*n,u=l*n+o*t-r*i,h=l*i+r*n-a*t,f=-r*t-a*n-o*i;return this.x=c*l+f*-r+u*-o-h*-a,this.y=u*l+f*-a+h*-r-c*-o,this.z=h*l+f*-o+c*-a-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ba.copy(this).projectOnVector(e),this.sub(Ba)}reflect(e){return this.sub(Ba.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ba=new L,fc=new Zt;class Pr{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Hi.copy(e.boundingBox),Hi.applyMatrix4(e.matrixWorld),this.union(Hi);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const r=i.attributes.position;for(let a=0,o=r.count;a<o;a++)Nn.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Nn)}else i.boundingBox===null&&i.computeBoundingBox(),Hi.copy(i.boundingBox),Hi.applyMatrix4(e.matrixWorld),this.union(Hi)}const n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Nr),xs.subVectors(this.max,Nr),Wi.subVectors(e.a,Nr),Xi.subVectors(e.b,Nr),qi.subVectors(e.c,Nr),Zn.subVectors(Xi,Wi),$n.subVectors(qi,Xi),yi.subVectors(Wi,qi);let t=[0,-Zn.z,Zn.y,0,-$n.z,$n.y,0,-yi.z,yi.y,Zn.z,0,-Zn.x,$n.z,0,-$n.x,yi.z,0,-yi.x,-Zn.y,Zn.x,0,-$n.y,$n.x,0,-yi.y,yi.x,0];return!ka(t,Wi,Xi,qi,xs)||(t=[1,0,0,0,1,0,0,0,1],!ka(t,Wi,Xi,qi,xs))?!1:(ys.crossVectors(Zn,$n),t=[ys.x,ys.y,ys.z],ka(t,Wi,Xi,qi,xs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(On),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const On=[new L,new L,new L,new L,new L,new L,new L,new L],Nn=new L,Hi=new Pr,Wi=new L,Xi=new L,qi=new L,Zn=new L,$n=new L,yi=new L,Nr=new L,xs=new L,ys=new L,Mi=new L;function ka(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Mi.fromArray(s,r);const o=i.x*Math.abs(Mi.x)+i.y*Math.abs(Mi.y)+i.z*Math.abs(Mi.z),l=e.dot(Mi),c=t.dot(Mi),u=n.dot(Mi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const ep=new Pr,Br=new L,za=new L;class Lr{constructor(e=new L,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ep.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Br.subVectors(e,this.center);const t=Br.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Br,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(za.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Br.copy(e.center).add(za)),this.expandByPoint(Br.copy(e.center).sub(za))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Bn=new L,Va=new L,Ms=new L,Jn=new L,Ga=new L,Ss=new L,Ha=new L;class ha{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bn.copy(this.origin).addScaledVector(this.direction,t),Bn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Va.copy(e).add(t).multiplyScalar(.5),Ms.copy(t).sub(e).normalize(),Jn.copy(this.origin).sub(Va);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ms),o=Jn.dot(this.direction),l=-Jn.dot(Ms),c=Jn.lengthSq(),u=Math.abs(1-a*a);let h,f,d,g;if(u>0)if(h=a*l-o,f=a*o-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Va).addScaledVector(Ms,f),d}intersectSphere(e,t){Bn.subVectors(e.center,this.origin);const n=Bn.dot(this.direction),i=Bn.dot(Bn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Bn)!==null}intersectTriangle(e,t,n,i,r){Ga.subVectors(t,e),Ss.subVectors(n,e),Ha.crossVectors(Ga,Ss);let a=this.direction.dot(Ha),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Jn.subVectors(this.origin,e);const l=o*this.direction.dot(Ss.crossVectors(Jn,Ss));if(l<0)return null;const c=o*this.direction.dot(Ga.cross(Jn));if(c<0||l+c>a)return null;const u=-o*Jn.dot(Ha);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pe{constructor(e,t,n,i,r,a,o,l,c,u,h,f,d,g,_,m){pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,u,h,f,d,g,_,m)}set(e,t,n,i,r,a,o,l,c,u,h,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Yi.setFromMatrixColumn(e,0).length(),r=1/Yi.setFromMatrixColumn(e,1).length(),a=1/Yi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=a*u,d=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f+_*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f-_*o,t[4]=-a*h,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,d=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=a*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=o*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tp,e,np)}lookAt(e,t,n){const i=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),Qn.crossVectors(n,Xt),Qn.lengthSq()===0&&(Math.abs(n.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),Qn.crossVectors(n,Xt)),Qn.normalize(),Ts.crossVectors(Xt,Qn),i[0]=Qn.x,i[4]=Ts.x,i[8]=Xt.x,i[1]=Qn.y,i[5]=Ts.y,i[9]=Xt.y,i[2]=Qn.z,i[6]=Ts.z,i[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],v=n[7],S=n[11],M=n[15],E=i[0],A=i[4],R=i[8],x=i[12],b=i[1],F=i[5],Y=i[9],I=i[13],N=i[2],O=i[6],X=i[10],z=i[14],W=i[3],G=i[7],H=i[11],le=i[15];return r[0]=a*E+o*b+l*N+c*W,r[4]=a*A+o*F+l*O+c*G,r[8]=a*R+o*Y+l*X+c*H,r[12]=a*x+o*I+l*z+c*le,r[1]=u*E+h*b+f*N+d*W,r[5]=u*A+h*F+f*O+d*G,r[9]=u*R+h*Y+f*X+d*H,r[13]=u*x+h*I+f*z+d*le,r[2]=g*E+_*b+m*N+p*W,r[6]=g*A+_*F+m*O+p*G,r[10]=g*R+_*Y+m*X+p*H,r[14]=g*x+_*I+m*z+p*le,r[3]=y*E+v*b+S*N+M*W,r[7]=y*A+v*F+S*O+M*G,r[11]=y*R+v*Y+S*X+M*H,r[15]=y*x+v*I+S*z+M*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*h-i*c*h-r*o*f+n*c*f+i*o*d-n*l*d)+_*(+t*l*d-t*c*f+r*a*f-i*a*d+i*c*u-r*l*u)+m*(+t*c*h-t*o*d-r*a*h+n*a*d+r*o*u-n*c*u)+p*(-i*o*u-t*l*h+t*o*f+i*a*h-n*a*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=h*m*c-_*f*c+_*l*d-o*m*d-h*l*p+o*f*p,v=g*f*c-u*m*c-g*l*d+a*m*d+u*l*p-a*f*p,S=u*_*c-g*h*c+g*o*d-a*_*d-u*o*p+a*h*p,M=g*h*l-u*_*l-g*o*f+a*_*f+u*o*m-a*h*m,E=t*y+n*v+i*S+r*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=y*A,e[1]=(_*f*r-h*m*r-_*i*d+n*m*d+h*i*p-n*f*p)*A,e[2]=(o*m*r-_*l*r+_*i*c-n*m*c-o*i*p+n*l*p)*A,e[3]=(h*l*r-o*f*r-h*i*c+n*f*c+o*i*d-n*l*d)*A,e[4]=v*A,e[5]=(u*m*r-g*f*r+g*i*d-t*m*d-u*i*p+t*f*p)*A,e[6]=(g*l*r-a*m*r-g*i*c+t*m*c+a*i*p-t*l*p)*A,e[7]=(a*f*r-u*l*r+u*i*c-t*f*c-a*i*d+t*l*d)*A,e[8]=S*A,e[9]=(g*h*r-u*_*r-g*n*d+t*_*d+u*n*p-t*h*p)*A,e[10]=(a*_*r-g*o*r+g*n*c-t*_*c-a*n*p+t*o*p)*A,e[11]=(u*o*r-a*h*r-u*n*c+t*h*c+a*n*d-t*o*d)*A,e[12]=M*A,e[13]=(u*_*i-g*h*i+g*n*f-t*_*f-u*n*m+t*h*m)*A,e[14]=(g*o*i-a*_*i-g*n*l+t*_*l+a*n*m-t*o*m)*A,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*f+t*o*f)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,f=r*c,d=r*u,g=r*h,_=a*u,m=a*h,p=o*h,y=l*c,v=l*u,S=l*h,M=n.x,E=n.y,A=n.z;return i[0]=(1-(_+p))*M,i[1]=(d+S)*M,i[2]=(g-v)*M,i[3]=0,i[4]=(d-S)*E,i[5]=(1-(f+p))*E,i[6]=(m+y)*E,i[7]=0,i[8]=(g+v)*A,i[9]=(m-y)*A,i[10]=(1-(f+_))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Yi.set(i[0],i[1],i[2]).length();const a=Yi.set(i[4],i[5],i[6]).length(),o=Yi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],_n.copy(this);const c=1/r,u=1/a,h=1/o;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=u,_n.elements[5]*=u,_n.elements[6]*=u,_n.elements[8]*=h,_n.elements[9]*=h,_n.elements[10]*=h,t.setFromRotationMatrix(_n),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Yn){const l=this.elements,c=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let d,g;if(o===Yn)d=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===$s)d=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Yn){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(a-r),f=(t+e)*c,d=(n+i)*u;let g,_;if(o===Yn)g=(a+r)*h,_=-2*h;else if(o===$s)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Yi=new L,_n=new pe,tp=new L(0,0,0),np=new L(1,1,1),Qn=new L,Ts=new L,Xt=new L,dc=new pe,pc=new Zt;class an{constructor(e=0,t=0,n=0,i=an.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return dc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pc.setFromEuler(this),this.setFromQuaternion(pc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}an.DEFAULT_ORDER="XYZ";class tl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ip=0;const mc=new L,ji=new Zt,kn=new pe,Es=new L,kr=new L,rp=new L,sp=new Zt,_c=new L(1,0,0),gc=new L(0,1,0),vc=new L(0,0,1),ap={type:"added"},xc={type:"removed"};class et extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=et.DEFAULT_UP.clone();const e=new L,t=new an,n=new Zt,i=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new pe},normalMatrix:{value:new De}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new tl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ji.setFromAxisAngle(e,t),this.quaternion.multiply(ji),this}rotateOnWorldAxis(e,t){return ji.setFromAxisAngle(e,t),this.quaternion.premultiply(ji),this}rotateX(e){return this.rotateOnAxis(_c,e)}rotateY(e){return this.rotateOnAxis(gc,e)}rotateZ(e){return this.rotateOnAxis(vc,e)}translateOnAxis(e,t){return mc.copy(e).applyQuaternion(this.quaternion),this.position.add(mc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_c,e)}translateY(e){return this.translateOnAxis(gc,e)}translateZ(e){return this.translateOnAxis(vc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Es.copy(e):Es.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(kr,Es,this.up):kn.lookAt(Es,kr,this.up),this.quaternion.setFromRotationMatrix(kn),i&&(kn.extractRotation(i.matrixWorld),ji.setFromRotationMatrix(kn),this.quaternion.premultiply(ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ap)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(xc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(kn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,e,rp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,sp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}et.DEFAULT_UP=new L(0,1,0);et.DEFAULT_MATRIX_AUTO_UPDATE=!0;et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gn=new L,zn=new L,Wa=new L,Vn=new L,Ki=new L,Zi=new L,yc=new L,Xa=new L,qa=new L,Ya=new L;let bs=!1;class yn{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),gn.subVectors(e,t),i.cross(gn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){gn.subVectors(i,t),zn.subVectors(n,t),Wa.subVectors(e,t);const a=gn.dot(gn),o=gn.dot(zn),l=gn.dot(Wa),c=zn.dot(zn),u=zn.dot(Wa),h=a*c-o*o;if(h===0)return r.set(-2,-1,-1);const f=1/h,d=(c*l-o*u)*f,g=(a*u-o*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Vn),Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getUV(e,t,n,i,r,a,o,l){return bs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),bs=!0),this.getInterpolation(e,t,n,i,r,a,o,l)}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Vn),l.setScalar(0),l.addScaledVector(r,Vn.x),l.addScaledVector(a,Vn.y),l.addScaledVector(o,Vn.z),l}static isFrontFacing(e,t,n,i){return gn.subVectors(n,t),zn.subVectors(e,t),gn.cross(zn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),gn.cross(zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return bs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),bs=!0),yn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return yn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Ki.subVectors(i,n),Zi.subVectors(r,n),Xa.subVectors(e,n);const l=Ki.dot(Xa),c=Zi.dot(Xa);if(l<=0&&c<=0)return t.copy(n);qa.subVectors(e,i);const u=Ki.dot(qa),h=Zi.dot(qa);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ki,a);Ya.subVectors(e,r);const d=Ki.dot(Ya),g=Zi.dot(Ya);if(g>=0&&d<=g)return t.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Zi,o);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return yc.subVectors(r,i),o=(h-u)/(h-u+(d-g)),t.copy(i).addScaledVector(yc,o);const p=1/(m+_+f);return a=_*p,o=f*p,t.copy(n).addScaledVector(Ki,a).addScaledVector(Zi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let op=0;class zi extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=mi(),this.name="",this.type="Material",this.blending=pr,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Iu,this.blendDst=Du,this.blendEquation=or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=To,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Td,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ua,this.stencilZFail=Ua,this.stencilZPass=Ua,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==pr&&(n.blending=this.blending),this.side!==fi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ju={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vn={h:0,s:0,l:0},ws={h:0,s:0,l:0};function ja(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Me{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=we){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=mn.workingColorSpace){return this.r=e,this.g=t,this.b=n,mn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=mn.workingColorSpace){if(e=el(e,1),t=Mt(t,0,1),n=Mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ja(a,r,e+1/3),this.g=ja(a,r,e),this.b=ja(a,r,e-1/3)}return mn.toWorkingColorSpace(this,i),this}setStyle(e,t=we){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=we){const n=ju[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mr(e.r),this.g=mr(e.g),this.b=mr(e.b),this}copyLinearToSRGB(e){return this.r=Oa(e.r),this.g=Oa(e.g),this.b=Oa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=we){return mn.fromWorkingColorSpace(wt.copy(this),e),Math.round(Mt(wt.r*255,0,255))*65536+Math.round(Mt(wt.g*255,0,255))*256+Math.round(Mt(wt.b*255,0,255))}getHexString(e=we){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mn.workingColorSpace){mn.fromWorkingColorSpace(wt.copy(this),t);const n=wt.r,i=wt.g,r=wt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=mn.workingColorSpace){return mn.fromWorkingColorSpace(wt.copy(this),t),e.r=wt.r,e.g=wt.g,e.b=wt.b,e}getStyle(e=we){mn.fromWorkingColorSpace(wt.copy(this),e);const t=wt.r,n=wt.g,i=wt.b;return e!==we?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(vn),vn.h+=e,vn.s+=t,vn.l+=n,this.setHSL(vn.h,vn.s,vn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(vn),e.getHSL(ws);const n=jr(vn.h,ws.h,t),i=jr(vn.s,ws.s,t),r=jr(vn.l,ws.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wt=new Me;Me.NAMES=ju;class fa extends zi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ca,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ut=new L,As=new Ae;class Ln{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=lc,this.updateRange={offset:0,count:-1},this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)As.fromBufferAttribute(this,t),As.applyMatrix3(e),this.setXY(t,As.x,As.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),i=Ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),i=Ft(i,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class nl extends Ln{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ku extends Ln{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class At extends Ln{constructor(e,t,n){super(new Float32Array(e),t,n)}}let lp=0;const Qt=new pe,Ka=new et,$i=new L,qt=new Pr,zr=new Pr,_t=new L;class fn extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wu(e)?Ku:nl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new De().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,n){return Qt.makeTranslation(e,t,n),this.applyMatrix4(Qt),this}scale(e,t,n){return Qt.makeScale(e,t,n),this.applyMatrix4(Qt),this}lookAt(e){return Ka.lookAt(e),Ka.updateMatrix(),this.applyMatrix4(Ka.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new At(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];qt.setFromBufferAttribute(r),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];zr.setFromBufferAttribute(o),this.morphTargetsRelative?(_t.addVectors(qt.min,zr.min),qt.expandByPoint(_t),_t.addVectors(qt.max,zr.max),qt.expandByPoint(_t)):(qt.expandByPoint(zr.min),qt.expandByPoint(zr.max))}qt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)_t.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(_t));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)_t.fromBufferAttribute(o,c),l&&($i.fromBufferAttribute(e,c),_t.add($i)),i=Math.max(i,n.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ln(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let b=0;b<o;b++)c[b]=new L,u[b]=new L;const h=new L,f=new L,d=new L,g=new Ae,_=new Ae,m=new Ae,p=new L,y=new L;function v(b,F,Y){h.fromArray(i,b*3),f.fromArray(i,F*3),d.fromArray(i,Y*3),g.fromArray(a,b*2),_.fromArray(a,F*2),m.fromArray(a,Y*2),f.sub(h),d.sub(h),_.sub(g),m.sub(g);const I=1/(_.x*m.y-m.x*_.y);isFinite(I)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-_.y).multiplyScalar(I),y.copy(d).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(I),c[b].add(p),c[F].add(p),c[Y].add(p),u[b].add(y),u[F].add(y),u[Y].add(y))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let b=0,F=S.length;b<F;++b){const Y=S[b],I=Y.start,N=Y.count;for(let O=I,X=I+N;O<X;O+=3)v(n[O+0],n[O+1],n[O+2])}const M=new L,E=new L,A=new L,R=new L;function x(b){A.fromArray(r,b*3),R.copy(A);const F=c[b];M.copy(F),M.sub(A.multiplyScalar(A.dot(F))).normalize(),E.crossVectors(R,F);const I=E.dot(u[b])<0?-1:1;l[b*4]=M.x,l[b*4+1]=M.y,l[b*4+2]=M.z,l[b*4+3]=I}for(let b=0,F=S.length;b<F;++b){const Y=S[b],I=Y.start,N=Y.count;for(let O=I,X=I+N;O<X;O+=3)x(n[O+0]),x(n[O+1]),x(n[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ln(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new L,r=new L,a=new L,o=new L,l=new L,c=new L,u=new L,h=new L;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new Ln(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mc=new pe,Si=new ha,Rs=new Lr,Sc=new L,Ji=new L,Qi=new L,er=new L,Za=new L,Cs=new L,Ps=new Ae,Ls=new Ae,Is=new Ae,Tc=new L,Ec=new L,bc=new L,Ds=new L,Us=new L;class on extends et{constructor(e=new fn,t=new fa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Cs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(Za.fromBufferAttribute(h,e),a?Cs.addScaledVector(Za,u):Cs.addScaledVector(Za.sub(t),u))}t.add(Cs)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Rs.copy(n.boundingSphere),Rs.applyMatrix4(r),Si.copy(e.ray).recast(e.near),!(Rs.containsPoint(Si.origin)===!1&&(Si.intersectSphere(Rs,Sc)===null||Si.origin.distanceToSquared(Sc)>(e.far-e.near)**2))&&(Mc.copy(r).invert(),Si.copy(e.ray).applyMatrix4(Mc),!(n.boundingBox!==null&&Si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Si)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],y=Math.max(m.start,d.start),v=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let S=y,M=v;S<M;S+=3){const E=o.getX(S),A=o.getX(S+1),R=o.getX(S+2);i=Fs(this,p,e,n,c,u,h,E,A,R),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const y=o.getX(m),v=o.getX(m+1),S=o.getX(m+2);i=Fs(this,a,e,n,c,u,h,y,v,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],y=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let S=y,M=v;S<M;S+=3){const E=S,A=S+1,R=S+2;i=Fs(this,p,e,n,c,u,h,E,A,R),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const y=m,v=m+1,S=m+2;i=Fs(this,a,e,n,c,u,h,y,v,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function cp(s,e,t,n,i,r,a,o){let l;if(e.side===kt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===fi,o),l===null)return null;Us.copy(o),Us.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Us);return c<t.near||c>t.far?null:{distance:c,point:Us.clone(),object:s}}function Fs(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,Ji),s.getVertexPosition(l,Qi),s.getVertexPosition(c,er);const u=cp(s,e,t,n,Ji,Qi,er,Ds);if(u){i&&(Ps.fromBufferAttribute(i,o),Ls.fromBufferAttribute(i,l),Is.fromBufferAttribute(i,c),u.uv=yn.getInterpolation(Ds,Ji,Qi,er,Ps,Ls,Is,new Ae)),r&&(Ps.fromBufferAttribute(r,o),Ls.fromBufferAttribute(r,l),Is.fromBufferAttribute(r,c),u.uv1=yn.getInterpolation(Ds,Ji,Qi,er,Ps,Ls,Is,new Ae),u.uv2=u.uv1),a&&(Tc.fromBufferAttribute(a,o),Ec.fromBufferAttribute(a,l),bc.fromBufferAttribute(a,c),u.normal=yn.getInterpolation(Ds,Ji,Qi,er,Tc,Ec,bc,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new L,materialIndex:0};yn.getNormal(Ji,Qi,er,h.normal),u.face=h}return u}class ds extends fn{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new At(c,3)),this.setAttribute("normal",new At(u,3)),this.setAttribute("uv",new At(h,2));function g(_,m,p,y,v,S,M,E,A,R,x){const b=S/A,F=M/R,Y=S/2,I=M/2,N=E/2,O=A+1,X=R+1;let z=0,W=0;const G=new L;for(let H=0;H<X;H++){const le=H*F-I;for(let D=0;D<O;D++){const J=D*b-Y;G[_]=J*y,G[m]=le*v,G[p]=N,c.push(G.x,G.y,G.z),G[_]=0,G[m]=0,G[p]=E>0?1:-1,u.push(G.x,G.y,G.z),h.push(D/A),h.push(1-H/R),z+=1}}for(let H=0;H<R;H++)for(let le=0;le<A;le++){const D=f+le+O*H,J=f+le+O*(H+1),$=f+(le+1)+O*(H+1),ie=f+(le+1)+O*H;l.push(D,J,ie),l.push(J,$,ie),W+=6}o.addGroup(d,W,x),d+=W,f+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ds(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Tr(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ut(s){const e={};for(let t=0;t<s.length;t++){const n=Tr(s[t]);for(const i in n)e[i]=n[i]}return e}function up(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Zu(s){return s.getRenderTarget()===null?s.outputColorSpace:Sn}const is={clone:Tr,merge:Ut};var hp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bt extends zi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hp,this.fragmentShader=fp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Tr(e.uniforms),this.uniformsGroups=up(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class $u extends et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=Yn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Rt extends $u{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Sr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sr*2*Math.atan(Math.tan(Yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Yr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const tr=-90,nr=1;class dp extends et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const i=new Rt(tr,nr,e,t);i.layers=this.layers,this.add(i);const r=new Rt(tr,nr,e,t);r.layers=this.layers,this.add(r);const a=new Rt(tr,nr,e,t);a.layers=this.layers,this.add(a);const o=new Rt(tr,nr,e,t);o.layers=this.layers,this.add(o);const l=new Rt(tr,nr,e,t);l.layers=this.layers,this.add(l);const c=new Rt(tr,nr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Yn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$s)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,r,a,o,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=Cn,e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Ju extends Tt{constructor(e,t,n,i,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:xr,super(e,t,n,i,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pp extends hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Kr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ii?we:Di),this.texture=new Ju(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:nn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ds(5,5,5),r=new Bt({name:"CubemapFromEquirect",uniforms:Tr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kt,blending:li});r.uniforms.tEquirect.value=t;const a=new on(i,r),o=t.minFilter;return t.minFilter===ts&&(t.minFilter=nn),new dp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const $a=new L,mp=new L,_p=new De;class ni{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=$a.subVectors(n,t).cross(mp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta($a),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||_p.getNormalMatrix(e),i=this.coplanarPoint($a).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ti=new Lr,Os=new L;class il{constructor(e=new ni,t=new ni,n=new ni,i=new ni,r=new ni,a=new ni){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Yn){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],g=i[9],_=i[10],m=i[11],p=i[12],y=i[13],v=i[14],S=i[15];if(n[0].setComponents(l-r,f-c,m-d,S-p).normalize(),n[1].setComponents(l+r,f+c,m+d,S+p).normalize(),n[2].setComponents(l+a,f+u,m+g,S+y).normalize(),n[3].setComponents(l-a,f-u,m-g,S-y).normalize(),n[4].setComponents(l-o,f-h,m-_,S-v).normalize(),t===Yn)n[5].setComponents(l+o,f+h,m+_,S+v).normalize();else if(t===$s)n[5].setComponents(o,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(e){return Ti.center.set(0,0,0),Ti.radius=.7071067811865476,Ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Os.x=i.normal.x>0?e.max.x:e.min.x,Os.y=i.normal.y>0?e.max.y:e.min.y,Os.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Os)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Qu(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function gp(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,d=s.createBuffer();s.bindBuffer(u,d),s.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=s.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=s.SHORT;else if(h instanceof Uint32Array)g=s.UNSIGNED_INT;else if(h instanceof Int32Array)g=s.INT;else if(h instanceof Int8Array)g=s.BYTE;else if(h instanceof Uint8Array)g=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const f=u.array,d=u.updateRange;s.bindBuffer(h,c),d.count===-1?s.bufferSubData(h,0,f):(t?s.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):s.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(s.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:a,remove:o,update:l}}class da extends fn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,f=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const y=p*f-a;for(let v=0;v<c;v++){const S=v*h-r;g.push(S,-y,0),_.push(0,0,1),m.push(v/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const v=y+c*p,S=y+c*(p+1),M=y+1+c*(p+1),E=y+1+c*p;d.push(v,S,E),d.push(S,M,E)}this.setIndex(d),this.setAttribute("position",new At(g,3)),this.setAttribute("normal",new At(_,3)),this.setAttribute("uv",new At(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new da(e.width,e.height,e.widthSegments,e.heightSegments)}}var vp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Mp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Tp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ep="vec3 transformed = vec3( position );",bp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ap=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Rp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Cp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ip=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Up=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Op=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Np=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Bp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,kp=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,zp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xp=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Yp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Kp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$p=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,em=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,nm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,im=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,am=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,om=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,lm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,um=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,dm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pm=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,mm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_m=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,gm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ym=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Mm=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Sm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Em=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Am=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Cm=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Pm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Lm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Im=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Om=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Nm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Bm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,km=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Hm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ym=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Km=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Zm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$m=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Jm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Qm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,e_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,t_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,n_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,i_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,r_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,s_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,a_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,o_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,l_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,c_=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,u_=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,h_=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,f_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const d_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,p_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,m_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,__=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,g_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,x_=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,y_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,M_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,S_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,T_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,E_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,b_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,w_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,A_=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,R_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,P_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,I_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,U_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,F_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,O_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,B_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,G_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,H_=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,X_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,q_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ie={alphamap_fragment:vp,alphamap_pars_fragment:xp,alphatest_fragment:yp,alphatest_pars_fragment:Mp,aomap_fragment:Sp,aomap_pars_fragment:Tp,begin_vertex:Ep,beginnormal_vertex:bp,bsdfs:wp,iridescence_fragment:Ap,bumpmap_pars_fragment:Rp,clipping_planes_fragment:Cp,clipping_planes_pars_fragment:Pp,clipping_planes_pars_vertex:Lp,clipping_planes_vertex:Ip,color_fragment:Dp,color_pars_fragment:Up,color_pars_vertex:Fp,color_vertex:Op,common:Np,cube_uv_reflection_fragment:Bp,defaultnormal_vertex:kp,displacementmap_pars_vertex:zp,displacementmap_vertex:Vp,emissivemap_fragment:Gp,emissivemap_pars_fragment:Hp,encodings_fragment:Wp,encodings_pars_fragment:Xp,envmap_fragment:qp,envmap_common_pars_fragment:Yp,envmap_pars_fragment:jp,envmap_pars_vertex:Kp,envmap_physical_pars_fragment:om,envmap_vertex:Zp,fog_vertex:$p,fog_pars_vertex:Jp,fog_fragment:Qp,fog_pars_fragment:em,gradientmap_pars_fragment:tm,lightmap_fragment:nm,lightmap_pars_fragment:im,lights_lambert_fragment:rm,lights_lambert_pars_fragment:sm,lights_pars_begin:am,lights_toon_fragment:lm,lights_toon_pars_fragment:cm,lights_phong_fragment:um,lights_phong_pars_fragment:hm,lights_physical_fragment:fm,lights_physical_pars_fragment:dm,lights_fragment_begin:pm,lights_fragment_maps:mm,lights_fragment_end:_m,logdepthbuf_fragment:gm,logdepthbuf_pars_fragment:vm,logdepthbuf_pars_vertex:xm,logdepthbuf_vertex:ym,map_fragment:Mm,map_pars_fragment:Sm,map_particle_fragment:Tm,map_particle_pars_fragment:Em,metalnessmap_fragment:bm,metalnessmap_pars_fragment:wm,morphcolor_vertex:Am,morphnormal_vertex:Rm,morphtarget_pars_vertex:Cm,morphtarget_vertex:Pm,normal_fragment_begin:Lm,normal_fragment_maps:Im,normal_pars_fragment:Dm,normal_pars_vertex:Um,normal_vertex:Fm,normalmap_pars_fragment:Om,clearcoat_normal_fragment_begin:Nm,clearcoat_normal_fragment_maps:Bm,clearcoat_pars_fragment:km,iridescence_pars_fragment:zm,output_fragment:Vm,packing:Gm,premultiplied_alpha_fragment:Hm,project_vertex:Wm,dithering_fragment:Xm,dithering_pars_fragment:qm,roughnessmap_fragment:Ym,roughnessmap_pars_fragment:jm,shadowmap_pars_fragment:Km,shadowmap_pars_vertex:Zm,shadowmap_vertex:$m,shadowmask_pars_fragment:Jm,skinbase_vertex:Qm,skinning_pars_vertex:e_,skinning_vertex:t_,skinnormal_vertex:n_,specularmap_fragment:i_,specularmap_pars_fragment:r_,tonemapping_fragment:s_,tonemapping_pars_fragment:a_,transmission_fragment:o_,transmission_pars_fragment:l_,uv_pars_fragment:c_,uv_pars_vertex:u_,uv_vertex:h_,worldpos_vertex:f_,background_vert:d_,background_frag:p_,backgroundCube_vert:m_,backgroundCube_frag:__,cube_vert:g_,cube_frag:v_,depth_vert:x_,depth_frag:y_,distanceRGBA_vert:M_,distanceRGBA_frag:S_,equirect_vert:T_,equirect_frag:E_,linedashed_vert:b_,linedashed_frag:w_,meshbasic_vert:A_,meshbasic_frag:R_,meshlambert_vert:C_,meshlambert_frag:P_,meshmatcap_vert:L_,meshmatcap_frag:I_,meshnormal_vert:D_,meshnormal_frag:U_,meshphong_vert:F_,meshphong_frag:O_,meshphysical_vert:N_,meshphysical_frag:B_,meshtoon_vert:k_,meshtoon_frag:z_,points_vert:V_,points_frag:G_,shadow_vert:H_,shadow_frag:W_,sprite_vert:X_,sprite_frag:q_},ne={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},En={basic:{uniforms:Ut([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:Ut([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Me(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:Ut([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:Ut([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:Ut([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new Me(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:Ut([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:Ut([ne.points,ne.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:Ut([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:Ut([ne.common,ne.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:Ut([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:Ut([ne.sprite,ne.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:Ut([ne.common,ne.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:Ut([ne.lights,ne.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};En.physical={uniforms:Ut([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const Ns={r:0,b:0,g:0};function Y_(s,e,t,n,i,r,a){const o=new Me(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(m,p){let y=!1,v=p.isScene===!0?p.background:null;switch(v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?_(o,l):v&&v.isColor&&(_(v,1),y=!0),s.xr.getEnvironmentBlendMode()){case"opaque":y=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,a),y=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,a),y=!0;break}(s.autoClear||y)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===ua)?(u===void 0&&(u=new on(new ds(1,1,1),new Bt({name:"BackgroundCubeMaterial",uniforms:Tr(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=v.colorSpace!==we,(h!==v||f!==v.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,d=s.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new on(new da(2,2),new Bt({name:"BackgroundMaterial",uniforms:Tr(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=v.colorSpace!==we,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,d=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,p){m.getRGB(Ns,Zu(s)),n.buffers.color.setClear(Ns.r,Ns.g,Ns.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(o,l)},render:g}}function j_(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null);let c=l,u=!1;function h(N,O,X,z,W){let G=!1;if(a){const H=_(z,X,O);c!==H&&(c=H,d(c.object)),G=p(N,z,X,W),G&&y(N,z,X,W)}else{const H=O.wireframe===!0;(c.geometry!==z.id||c.program!==X.id||c.wireframe!==H)&&(c.geometry=z.id,c.program=X.id,c.wireframe=H,G=!0)}W!==null&&t.update(W,s.ELEMENT_ARRAY_BUFFER),(G||u)&&(u=!1,R(N,O,X,z),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function d(N){return n.isWebGL2?s.bindVertexArray(N):r.bindVertexArrayOES(N)}function g(N){return n.isWebGL2?s.deleteVertexArray(N):r.deleteVertexArrayOES(N)}function _(N,O,X){const z=X.wireframe===!0;let W=o[N.id];W===void 0&&(W={},o[N.id]=W);let G=W[O.id];G===void 0&&(G={},W[O.id]=G);let H=G[z];return H===void 0&&(H=m(f()),G[z]=H),H}function m(N){const O=[],X=[],z=[];for(let W=0;W<i;W++)O[W]=0,X[W]=0,z[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:X,attributeDivisors:z,object:N,attributes:{},index:null}}function p(N,O,X,z){const W=c.attributes,G=O.attributes;let H=0;const le=X.getAttributes();for(const D in le)if(le[D].location>=0){const $=W[D];let ie=G[D];if(ie===void 0&&(D==="instanceMatrix"&&N.instanceMatrix&&(ie=N.instanceMatrix),D==="instanceColor"&&N.instanceColor&&(ie=N.instanceColor)),$===void 0||$.attribute!==ie||ie&&$.data!==ie.data)return!0;H++}return c.attributesNum!==H||c.index!==z}function y(N,O,X,z){const W={},G=O.attributes;let H=0;const le=X.getAttributes();for(const D in le)if(le[D].location>=0){let $=G[D];$===void 0&&(D==="instanceMatrix"&&N.instanceMatrix&&($=N.instanceMatrix),D==="instanceColor"&&N.instanceColor&&($=N.instanceColor));const ie={};ie.attribute=$,$&&$.data&&(ie.data=$.data),W[D]=ie,H++}c.attributes=W,c.attributesNum=H,c.index=z}function v(){const N=c.newAttributes;for(let O=0,X=N.length;O<X;O++)N[O]=0}function S(N){M(N,0)}function M(N,O){const X=c.newAttributes,z=c.enabledAttributes,W=c.attributeDivisors;X[N]=1,z[N]===0&&(s.enableVertexAttribArray(N),z[N]=1),W[N]!==O&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,O),W[N]=O)}function E(){const N=c.newAttributes,O=c.enabledAttributes;for(let X=0,z=O.length;X<z;X++)O[X]!==N[X]&&(s.disableVertexAttribArray(X),O[X]=0)}function A(N,O,X,z,W,G,H){H===!0?s.vertexAttribIPointer(N,O,X,W,G):s.vertexAttribPointer(N,O,X,z,W,G)}function R(N,O,X,z){if(n.isWebGL2===!1&&(N.isInstancedMesh||z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const W=z.attributes,G=X.getAttributes(),H=O.defaultAttributeValues;for(const le in G){const D=G[le];if(D.location>=0){let J=W[le];if(J===void 0&&(le==="instanceMatrix"&&N.instanceMatrix&&(J=N.instanceMatrix),le==="instanceColor"&&N.instanceColor&&(J=N.instanceColor)),J!==void 0){const $=J.normalized,ie=J.itemSize,ce=t.get(J);if(ce===void 0)continue;const me=ce.buffer,Ce=ce.type,Te=ce.bytesPerElement,pt=n.isWebGL2===!0&&(Ce===s.INT||Ce===s.UNSIGNED_INT||J.gpuType===Fu);if(J.isInterleavedBufferAttribute){const ze=J.data,B=ze.stride,vt=J.offset;if(ze.isInstancedInterleavedBuffer){for(let ye=0;ye<D.locationSize;ye++)M(D.location+ye,ze.meshPerAttribute);N.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ze.meshPerAttribute*ze.count)}else for(let ye=0;ye<D.locationSize;ye++)S(D.location+ye);s.bindBuffer(s.ARRAY_BUFFER,me);for(let ye=0;ye<D.locationSize;ye++)A(D.location+ye,ie/D.locationSize,Ce,$,B*Te,(vt+ie/D.locationSize*ye)*Te,pt)}else{if(J.isInstancedBufferAttribute){for(let ze=0;ze<D.locationSize;ze++)M(D.location+ze,J.meshPerAttribute);N.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ze=0;ze<D.locationSize;ze++)S(D.location+ze);s.bindBuffer(s.ARRAY_BUFFER,me);for(let ze=0;ze<D.locationSize;ze++)A(D.location+ze,ie/D.locationSize,Ce,$,ie*Te,ie/D.locationSize*ze*Te,pt)}}else if(H!==void 0){const $=H[le];if($!==void 0)switch($.length){case 2:s.vertexAttrib2fv(D.location,$);break;case 3:s.vertexAttrib3fv(D.location,$);break;case 4:s.vertexAttrib4fv(D.location,$);break;default:s.vertexAttrib1fv(D.location,$)}}}}E()}function x(){Y();for(const N in o){const O=o[N];for(const X in O){const z=O[X];for(const W in z)g(z[W].object),delete z[W];delete O[X]}delete o[N]}}function b(N){if(o[N.id]===void 0)return;const O=o[N.id];for(const X in O){const z=O[X];for(const W in z)g(z[W].object),delete z[W];delete O[X]}delete o[N.id]}function F(N){for(const O in o){const X=o[O];if(X[N.id]===void 0)continue;const z=X[N.id];for(const W in z)g(z[W].object),delete z[W];delete X[N.id]}}function Y(){I(),u=!0,c!==l&&(c=l,d(c.object))}function I(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Y,resetDefaultState:I,dispose:x,releaseStatesOfGeometry:b,releaseStatesOfProgram:F,initAttributes:v,enableAttribute:S,disableUnusedAttributes:E}}function K_(s,e,t,n){const i=n.isWebGL2;let r;function a(c){r=c}function o(c,u){s.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let f,d;if(i)f=s,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](r,c,u,h),t.update(u,r,h)}this.setMode=a,this.render=o,this.renderInstances=l}function Z_(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,S=a||e.has("OES_texture_float"),M=v&&S,E=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:M,maxSamples:E}}function $_(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new ni,o=new De,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=s.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):c();else{const y=r?0:n,v=y*4;let S=p.clippingState||null;l.value=S,S=u(g,f,v,d);for(let M=0;M!==v;++M)S[M]=t[M];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,S=d;v!==_;++v,S+=4)a.copy(h[v]).applyMatrix4(y,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function J_(s){let e=new WeakMap;function t(a,o){return o===Ys?a.mapping=xr:o===Eo&&(a.mapping=yr),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Ys||o===Eo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new pp(l.height/2);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class pa extends $u{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ur=4,wc=[.125,.215,.35,.446,.526,.582],Ri=20,Ja=new pa,Ac=new Me;let Qa=null;const wi=(1+Math.sqrt(5))/2,ir=1/wi,Rc=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,wi,ir),new L(0,wi,-ir),new L(ir,0,wi),new L(-ir,0,wi),new L(wi,ir,0),new L(-wi,ir,0)];class Cc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Qa=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ic(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qa),e.scissorTest=!1,Bs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xr||e.mapping===yr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qa=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:Pn,format:rn,colorSpace:Sn,depthBuffer:!1},i=Pc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Q_(r)),this._blurMaterial=eg(r,e,t)}return i}_compileMaterial(e){const t=new on(this._lodPlanes[0],e);this._renderer.compile(t,Ja)}_sceneToCubeUV(e,t,n,i){const o=new Rt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Ac),u.toneMapping=Cn,u.autoClear=!1;const d=new fa({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1}),g=new on(new ds,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(Ac),_=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const v=this._cubeSize;Bs(i,y*v,p>2?v:0,v,v),u.setRenderTarget(i),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===xr||e.mapping===yr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ic()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lc());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new on(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Bs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ja)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Rc[(i-1)%Rc.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new on(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ri-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Ri;m>Ri&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ri}`);const p=[];let y=0;for(let A=0;A<Ri;++A){const R=A/_,x=Math.exp(-R*R/2);p.push(x),A===0?y+=x:A<m&&(y+=2*x)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;const S=this._sizeLods[i],M=3*S*(i>v-ur?i-v+ur:0),E=4*(this._cubeSize-S);Bs(t,M,E,3*S,2*S),l.setRenderTarget(t),l.render(h,Ja)}}function Q_(s){const e=[],t=[],n=[];let i=s;const r=s-ur+1+wc.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-ur?l=wc[a-s+ur-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*d),v=new Float32Array(m*g*d),S=new Float32Array(p*g*d);for(let E=0;E<d;E++){const A=E%3*2/3-1,R=E>2?0:-1,x=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];y.set(x,_*g*E),v.set(f,m*g*E);const b=[E,E,E,E,E,E];S.set(b,p*g*E)}const M=new fn;M.setAttribute("position",new Ln(y,_)),M.setAttribute("uv",new Ln(v,m)),M.setAttribute("faceIndex",new Ln(S,p)),e.push(M),i>ur&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Pc(s,e,t){const n=new hn(s,e,t);return n.texture.mapping=ua,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Bs(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function eg(s,e,t){const n=new Float32Array(Ri),i=new L(0,1,0);return new Bt({name:"SphericalGaussianBlur",defines:{n:Ri,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function Lc(){return new Bt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function Ic(){return new Bt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function rl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function tg(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ys||l===Eo,u=l===xr||l===yr;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new Cc(s)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new Cc(s));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function ng(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function ig(s,e,t,n){const i={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}f.removeEventListener("dispose",a),delete i[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],s.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],s.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const y=d.array;_=d.version;for(let v=0,S=y.length;v<S;v+=3){const M=y[v+0],E=y[v+1],A=y[v+2];f.push(M,E,E,A,A,M)}}else{const y=g.array;_=g.version;for(let v=0,S=y.length/3-1;v<S;v+=3){const M=v+0,E=v+1,A=v+2;f.push(M,E,E,A,A,M)}}const m=new(Wu(f)?Ku:nl)(f,1);m.version=_;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function rg(s,e,t,n){const i=n.isWebGL2;let r;function a(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,d){s.drawElements(r,d,o,f*l),t.update(d,r,1)}function h(f,d,g){if(g===0)return;let _,m;if(i)_=s,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](r,d,o,f*l,g),t.update(d,r,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function sg(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function ag(s,e){return s[0]-e[0]}function og(s,e){return Math.abs(e[1])-Math.abs(s[1])}function lg(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new He,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let m=r.get(u);if(m===void 0||m.count!==_){let O=function(){I.dispose(),r.delete(u),u.removeEventListener("dispose",O)};var d=O;m!==void 0&&m.texture.dispose();const v=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],R=u.morphAttributes.color||[];let x=0;v===!0&&(x=1),S===!0&&(x=2),M===!0&&(x=3);let b=u.attributes.position.count*x,F=1;b>e.maxTextureSize&&(F=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const Y=new Float32Array(b*F*4*_),I=new Yu(Y,b,F,_);I.type=qn,I.needsUpdate=!0;const N=x*4;for(let X=0;X<_;X++){const z=E[X],W=A[X],G=R[X],H=b*F*4*X;for(let le=0;le<z.count;le++){const D=le*N;v===!0&&(a.fromBufferAttribute(z,le),Y[H+D+0]=a.x,Y[H+D+1]=a.y,Y[H+D+2]=a.z,Y[H+D+3]=0),S===!0&&(a.fromBufferAttribute(W,le),Y[H+D+4]=a.x,Y[H+D+5]=a.y,Y[H+D+6]=a.z,Y[H+D+7]=0),M===!0&&(a.fromBufferAttribute(G,le),Y[H+D+8]=a.x,Y[H+D+9]=a.y,Y[H+D+10]=a.z,Y[H+D+11]=G.itemSize===4?a.w:1)}}m={count:_,texture:I,size:new Ae(b,F)},r.set(u,m),u.addEventListener("dispose",O)}let p=0;for(let v=0;v<f.length;v++)p+=f[v];const y=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(s,"morphTargetBaseInfluence",y),h.getUniforms().setValue(s,"morphTargetInfluences",f),h.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const g=f===void 0?0:f.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let S=0;S<g;S++)_[S]=[S,0];n[u.id]=_}for(let S=0;S<g;S++){const M=_[S];M[0]=S,M[1]=f[S]}_.sort(og);for(let S=0;S<8;S++)S<g&&_[S][1]?(o[S][0]=_[S][0],o[S][1]=_[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(ag);const m=u.morphAttributes.position,p=u.morphAttributes.normal;let y=0;for(let S=0;S<8;S++){const M=o[S],E=M[0],A=M[1];E!==Number.MAX_SAFE_INTEGER&&A?(m&&u.getAttribute("morphTarget"+S)!==m[E]&&u.setAttribute("morphTarget"+S,m[E]),p&&u.getAttribute("morphNormal"+S)!==p[E]&&u.setAttribute("morphNormal"+S,p[E]),i[S]=A,y+=A):(m&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),p&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),i[S]=0)}const v=u.morphTargetsRelative?1:1-y;h.getUniforms().setValue(s,"morphTargetBaseInfluence",v),h.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function cg(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER)),h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const eh=new Tt,th=new Yu,nh=new Qd,ih=new Ju,Dc=[],Uc=[],Fc=new Float32Array(16),Oc=new Float32Array(9),Nc=new Float32Array(4);function Ir(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Dc[i];if(r===void 0&&(r=new Float32Array(i),Dc[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function ft(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function dt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function ma(s,e){let t=Uc[e];t===void 0&&(t=new Int32Array(e),Uc[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function ug(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function hg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;s.uniform2fv(this.addr,e),dt(t,e)}}function fg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ft(t,e))return;s.uniform3fv(this.addr,e),dt(t,e)}}function dg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;s.uniform4fv(this.addr,e),dt(t,e)}}function pg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),dt(t,e)}else{if(ft(t,n))return;Nc.set(n),s.uniformMatrix2fv(this.addr,!1,Nc),dt(t,n)}}function mg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),dt(t,e)}else{if(ft(t,n))return;Oc.set(n),s.uniformMatrix3fv(this.addr,!1,Oc),dt(t,n)}}function _g(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),dt(t,e)}else{if(ft(t,n))return;Fc.set(n),s.uniformMatrix4fv(this.addr,!1,Fc),dt(t,n)}}function gg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function vg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;s.uniform2iv(this.addr,e),dt(t,e)}}function xg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;s.uniform3iv(this.addr,e),dt(t,e)}}function yg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;s.uniform4iv(this.addr,e),dt(t,e)}}function Mg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Sg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;s.uniform2uiv(this.addr,e),dt(t,e)}}function Tg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;s.uniform3uiv(this.addr,e),dt(t,e)}}function Eg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;s.uniform4uiv(this.addr,e),dt(t,e)}}function bg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||eh,i)}function wg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||nh,i)}function Ag(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ih,i)}function Rg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||th,i)}function Cg(s){switch(s){case 5126:return ug;case 35664:return hg;case 35665:return fg;case 35666:return dg;case 35674:return pg;case 35675:return mg;case 35676:return _g;case 5124:case 35670:return gg;case 35667:case 35671:return vg;case 35668:case 35672:return xg;case 35669:case 35673:return yg;case 5125:return Mg;case 36294:return Sg;case 36295:return Tg;case 36296:return Eg;case 35678:case 36198:case 36298:case 36306:case 35682:return bg;case 35679:case 36299:case 36307:return wg;case 35680:case 36300:case 36308:case 36293:return Ag;case 36289:case 36303:case 36311:case 36292:return Rg}}function Pg(s,e){s.uniform1fv(this.addr,e)}function Lg(s,e){const t=Ir(e,this.size,2);s.uniform2fv(this.addr,t)}function Ig(s,e){const t=Ir(e,this.size,3);s.uniform3fv(this.addr,t)}function Dg(s,e){const t=Ir(e,this.size,4);s.uniform4fv(this.addr,t)}function Ug(s,e){const t=Ir(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Fg(s,e){const t=Ir(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Og(s,e){const t=Ir(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Ng(s,e){s.uniform1iv(this.addr,e)}function Bg(s,e){s.uniform2iv(this.addr,e)}function kg(s,e){s.uniform3iv(this.addr,e)}function zg(s,e){s.uniform4iv(this.addr,e)}function Vg(s,e){s.uniform1uiv(this.addr,e)}function Gg(s,e){s.uniform2uiv(this.addr,e)}function Hg(s,e){s.uniform3uiv(this.addr,e)}function Wg(s,e){s.uniform4uiv(this.addr,e)}function Xg(s,e,t){const n=this.cache,i=e.length,r=ma(t,i);ft(n,r)||(s.uniform1iv(this.addr,r),dt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||eh,r[a])}function qg(s,e,t){const n=this.cache,i=e.length,r=ma(t,i);ft(n,r)||(s.uniform1iv(this.addr,r),dt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||nh,r[a])}function Yg(s,e,t){const n=this.cache,i=e.length,r=ma(t,i);ft(n,r)||(s.uniform1iv(this.addr,r),dt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||ih,r[a])}function jg(s,e,t){const n=this.cache,i=e.length,r=ma(t,i);ft(n,r)||(s.uniform1iv(this.addr,r),dt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||th,r[a])}function Kg(s){switch(s){case 5126:return Pg;case 35664:return Lg;case 35665:return Ig;case 35666:return Dg;case 35674:return Ug;case 35675:return Fg;case 35676:return Og;case 5124:case 35670:return Ng;case 35667:case 35671:return Bg;case 35668:case 35672:return kg;case 35669:case 35673:return zg;case 5125:return Vg;case 36294:return Gg;case 36295:return Hg;case 36296:return Wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Xg;case 35679:case 36299:case 36307:return qg;case 35680:case 36300:case 36308:case 36293:return Yg;case 36289:case 36303:case 36311:case 36292:return jg}}class Zg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Cg(t.type)}}class $g{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Kg(t.type)}}class Jg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const eo=/(\w+)(\])?(\[|\.)?/g;function Bc(s,e){s.seq.push(e),s.map[e.id]=e}function Qg(s,e,t){const n=s.name,i=n.length;for(eo.lastIndex=0;;){const r=eo.exec(n),a=eo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Bc(t,c===void 0?new Zg(o,s,e):new $g(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new Jg(o),Bc(t,h)),t=h}}}class Hs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Qg(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function kc(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let e0=0;function t0(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function n0(s){switch(s){case Sn:return["Linear","( value )"];case we:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),["Linear","( value )"]}}function zc(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+t0(s.getShaderSource(e),a)}else return i}function i0(s,e){const t=n0(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function r0(s,e){let t;switch(e){case td:t="Linear";break;case nd:t="Reinhard";break;case id:t="OptimizedCineon";break;case rd:t="ACESFilmic";break;case sd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function s0(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Wr).join(`
`)}function a0(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function o0(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Wr(s){return s!==""}function Vc(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const l0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ro(s){return s.replace(l0,c0)}function c0(s,e){const t=Ie[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ro(t)}const u0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hc(s){return s.replace(u0,h0)}function h0(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Wc(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function f0(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Lu?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Df?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Hn&&(e="SHADOWMAP_TYPE_VSM"),e}function d0(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case xr:case yr:e="ENVMAP_TYPE_CUBE";break;case ua:e="ENVMAP_TYPE_CUBE_UV";break}return e}function p0(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case yr:e="ENVMAP_MODE_REFRACTION";break}return e}function m0(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ca:e="ENVMAP_BLENDING_MULTIPLY";break;case Qf:e="ENVMAP_BLENDING_MIX";break;case ed:e="ENVMAP_BLENDING_ADD";break}return e}function _0(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function g0(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=f0(t),c=d0(t),u=p0(t),h=m0(t),f=_0(t),d=t.isWebGL2?"":s0(t),g=a0(r),_=i.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Wr).join(`
`),m.length>0&&(m+=`
`),p=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Wr).join(`
`),p.length>0&&(p+=`
`)):(m=[Wc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wr).join(`
`),p=[d,Wc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cn?"#define TONE_MAPPING":"",t.toneMapping!==Cn?Ie.tonemapping_pars_fragment:"",t.toneMapping!==Cn?r0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ie.encodings_pars_fragment,i0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wr).join(`
`)),a=Ro(a),a=Vc(a,t),a=Gc(a,t),o=Ro(o),o=Vc(o,t),o=Gc(o,t),a=Hc(a),o=Hc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===cc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=y+m+a,S=y+p+o,M=kc(i,i.VERTEX_SHADER,v),E=kc(i,i.FRAGMENT_SHADER,S);if(i.attachShader(_,M),i.attachShader(_,E),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_),s.debug.checkShaderErrors){const x=i.getProgramInfoLog(_).trim(),b=i.getShaderInfoLog(M).trim(),F=i.getShaderInfoLog(E).trim();let Y=!0,I=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,M,E);else{const N=zc(i,M,"vertex"),O=zc(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Program Info Log: `+x+`
`+N+`
`+O)}else x!==""?console.warn("THREE.WebGLProgram: Program Info Log:",x):(b===""||F==="")&&(I=!1);I&&(this.diagnostics={runnable:Y,programLog:x,vertexShader:{log:b,prefix:m},fragmentShader:{log:F,prefix:p}})}i.deleteShader(M),i.deleteShader(E);let A;this.getUniforms=function(){return A===void 0&&(A=new Hs(i,_)),A};let R;return this.getAttributes=function(){return R===void 0&&(R=o0(i,_)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=e0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=E,this}let v0=0;class x0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new y0(e),t.set(e,n)),n}}class y0{constructor(e){this.id=v0++,this.code=e,this.usedTimes=0}}function M0(s,e,t,n,i,r,a){const o=new tl,l=new x0,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return x===0?"uv":`uv${x}`}function m(x,b,F,Y,I){const N=Y.fog,O=I.geometry,X=x.isMeshStandardMaterial?Y.environment:null,z=(x.isMeshStandardMaterial?t:e).get(x.envMap||X),W=z&&z.mapping===ua?z.image.height:null,G=g[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const H=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,le=H!==void 0?H.length:0;let D=0;O.morphAttributes.position!==void 0&&(D=1),O.morphAttributes.normal!==void 0&&(D=2),O.morphAttributes.color!==void 0&&(D=3);let J,$,ie,ce;if(G){const lt=En[G];J=lt.vertexShader,$=lt.fragmentShader}else J=x.vertexShader,$=x.fragmentShader,l.update(x),ie=l.getVertexShaderID(x),ce=l.getFragmentShaderID(x);const me=s.getRenderTarget(),Ce=I.isInstancedMesh===!0,Te=!!x.map,pt=!!x.matcap,ze=!!z,B=!!x.aoMap,vt=!!x.lightMap,ye=!!x.bumpMap,Ue=!!x.normalMap,Ee=!!x.displacementMap,Ke=!!x.emissiveMap,Be=!!x.metalnessMap,Pe=!!x.roughnessMap,Xe=x.anisotropy>0,xt=x.clearcoat>0,Et=x.iridescence>0,C=x.sheen>0,T=x.transmission>0,j=Xe&&!!x.anisotropyMap,Q=xt&&!!x.clearcoatMap,ee=xt&&!!x.clearcoatNormalMap,se=xt&&!!x.clearcoatRoughnessMap,de=Et&&!!x.iridescenceMap,ae=Et&&!!x.iridescenceThicknessMap,Z=C&&!!x.sheenColorMap,_e=C&&!!x.sheenRoughnessMap,ge=!!x.specularMap,xe=!!x.specularColorMap,he=!!x.specularIntensityMap,fe=T&&!!x.transmissionMap,Fe=T&&!!x.thicknessMap,je=!!x.gradientMap,P=!!x.alphaMap,re=x.alphaTest>0,V=!!x.extensions,te=!!O.attributes.uv1,oe=!!O.attributes.uv2,We=!!O.attributes.uv3;return{isWebGL2:u,shaderID:G,shaderType:x.type,shaderName:x.name,vertexShader:J,fragmentShader:$,defines:x.defines,customVertexShaderID:ie,customFragmentShaderID:ce,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,instancing:Ce,instancingColor:Ce&&I.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:me===null?s.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Sn,map:Te,matcap:pt,envMap:ze,envMapMode:ze&&z.mapping,envMapCubeUVHeight:W,aoMap:B,lightMap:vt,bumpMap:ye,normalMap:Ue,displacementMap:f&&Ee,emissiveMap:Ke,normalMapObjectSpace:Ue&&x.normalMapType===Sd,normalMapTangentSpace:Ue&&x.normalMapType===Qo,metalnessMap:Be,roughnessMap:Pe,anisotropy:Xe,anisotropyMap:j,clearcoat:xt,clearcoatMap:Q,clearcoatNormalMap:ee,clearcoatRoughnessMap:se,iridescence:Et,iridescenceMap:de,iridescenceThicknessMap:ae,sheen:C,sheenColorMap:Z,sheenRoughnessMap:_e,specularMap:ge,specularColorMap:xe,specularIntensityMap:he,transmission:T,transmissionMap:fe,thicknessMap:Fe,gradientMap:je,opaque:x.transparent===!1&&x.blending===pr,alphaMap:P,alphaTest:re,combine:x.combine,mapUv:Te&&_(x.map.channel),aoMapUv:B&&_(x.aoMap.channel),lightMapUv:vt&&_(x.lightMap.channel),bumpMapUv:ye&&_(x.bumpMap.channel),normalMapUv:Ue&&_(x.normalMap.channel),displacementMapUv:Ee&&_(x.displacementMap.channel),emissiveMapUv:Ke&&_(x.emissiveMap.channel),metalnessMapUv:Be&&_(x.metalnessMap.channel),roughnessMapUv:Pe&&_(x.roughnessMap.channel),anisotropyMapUv:j&&_(x.anisotropyMap.channel),clearcoatMapUv:Q&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:ee&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:Z&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:_e&&_(x.sheenRoughnessMap.channel),specularMapUv:ge&&_(x.specularMap.channel),specularColorMapUv:xe&&_(x.specularColorMap.channel),specularIntensityMapUv:he&&_(x.specularIntensityMap.channel),transmissionMapUv:fe&&_(x.transmissionMap.channel),thicknessMapUv:Fe&&_(x.thicknessMap.channel),alphaMapUv:P&&_(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Ue||Xe),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:te,vertexUv2s:oe,vertexUv3s:We,pointsUvs:I.isPoints===!0&&!!O.attributes.uv&&(Te||P),fog:!!N,useFog:x.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:I.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:D,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:x.toneMapped?s.toneMapping:Cn,useLegacyLights:s.useLegacyLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===bn,flipSided:x.side===kt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:V&&x.extensions.derivatives===!0,extensionFragDepth:V&&x.extensions.fragDepth===!0,extensionDrawBuffers:V&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:V&&x.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const F in x.defines)b.push(F),b.push(x.defines[F]);return x.isRawShaderMaterial===!1&&(y(b,x),v(b,x),b.push(s.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function y(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function v(x,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),x.push(o.mask)}function S(x){const b=g[x.type];let F;if(b){const Y=En[b];F=is.clone(Y.uniforms)}else F=x.uniforms;return F}function M(x,b){let F;for(let Y=0,I=c.length;Y<I;Y++){const N=c[Y];if(N.cacheKey===b){F=N,++F.usedTimes;break}}return F===void 0&&(F=new g0(s,b,x,r),c.push(F)),F}function E(x){if(--x.usedTimes===0){const b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),x.destroy()}}function A(x){l.remove(x)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:M,releaseProgram:E,releaseShaderCache:A,programs:c,dispose:R}}function S0(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function T0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Xc(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function qc(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h,f,d,g,_,m){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},s[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function o(h,f,d,g,_,m){const p=a(h,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(h,f,d,g,_,m){const p=a(h,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||T0),n.length>1&&n.sort(f||Xc),i.length>1&&i.sort(f||Xc)}function u(){for(let h=e,f=s.length;h<f;h++){const d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:u,sort:c}}function E0(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new qc,s.set(n,[a])):i>=r.length?(a=new qc,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function b0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Me};break;case"SpotLight":t={position:new L,direction:new L,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":t={color:new Me,position:new L,halfWidth:new L,halfHeight:new L};break}return s[e.id]=t,t}}}function w0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let A0=0;function R0(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function C0(s,e){const t=new b0,n=w0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new L);const r=new L,a=new pe,o=new pe;function l(u,h){let f=0,d=0,g=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let _=0,m=0,p=0,y=0,v=0,S=0,M=0,E=0,A=0,R=0;u.sort(R0);const x=h===!0?Math.PI:1;for(let F=0,Y=u.length;F<Y;F++){const I=u[F],N=I.color,O=I.intensity,X=I.distance,z=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=N.r*O*x,d+=N.g*O*x,g+=N.b*O*x;else if(I.isLightProbe)for(let W=0;W<9;W++)i.probe[W].addScaledVector(I.sh.coefficients[W],O);else if(I.isDirectionalLight){const W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity*x),I.castShadow){const G=I.shadow,H=n.get(I);H.shadowBias=G.bias,H.shadowNormalBias=G.normalBias,H.shadowRadius=G.radius,H.shadowMapSize=G.mapSize,i.directionalShadow[_]=H,i.directionalShadowMap[_]=z,i.directionalShadowMatrix[_]=I.shadow.matrix,S++}i.directional[_]=W,_++}else if(I.isSpotLight){const W=t.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(N).multiplyScalar(O*x),W.distance=X,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,i.spot[p]=W;const G=I.shadow;if(I.map&&(i.spotLightMap[A]=I.map,A++,G.updateMatrices(I),I.castShadow&&R++),i.spotLightMatrix[p]=G.matrix,I.castShadow){const H=n.get(I);H.shadowBias=G.bias,H.shadowNormalBias=G.normalBias,H.shadowRadius=G.radius,H.shadowMapSize=G.mapSize,i.spotShadow[p]=H,i.spotShadowMap[p]=z,E++}p++}else if(I.isRectAreaLight){const W=t.get(I);W.color.copy(N).multiplyScalar(O),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),i.rectArea[y]=W,y++}else if(I.isPointLight){const W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity*x),W.distance=I.distance,W.decay=I.decay,I.castShadow){const G=I.shadow,H=n.get(I);H.shadowBias=G.bias,H.shadowNormalBias=G.normalBias,H.shadowRadius=G.radius,H.shadowMapSize=G.mapSize,H.shadowCameraNear=G.camera.near,H.shadowCameraFar=G.camera.far,i.pointShadow[m]=H,i.pointShadowMap[m]=z,i.pointShadowMatrix[m]=I.shadow.matrix,M++}i.point[m]=W,m++}else if(I.isHemisphereLight){const W=t.get(I);W.skyColor.copy(I.color).multiplyScalar(O*x),W.groundColor.copy(I.groundColor).multiplyScalar(O*x),i.hemi[v]=W,v++}}y>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ne.LTC_FLOAT_1,i.rectAreaLTC2=ne.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ne.LTC_HALF_1,i.rectAreaLTC2=ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=g;const b=i.hash;(b.directionalLength!==_||b.pointLength!==m||b.spotLength!==p||b.rectAreaLength!==y||b.hemiLength!==v||b.numDirectionalShadows!==S||b.numPointShadows!==M||b.numSpotShadows!==E||b.numSpotMaps!==A)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=y,i.point.length=m,i.hemi.length=v,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=E+A-R,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=R,b.directionalLength=_,b.pointLength=m,b.spotLength=p,b.rectAreaLength=y,b.hemiLength=v,b.numDirectionalShadows=S,b.numPointShadows=M,b.numSpotShadows=E,b.numSpotMaps=A,i.version=A0++)}function c(u,h){let f=0,d=0,g=0,_=0,m=0;const p=h.matrixWorldInverse;for(let y=0,v=u.length;y<v;y++){const S=u[y];if(S.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),f++}else if(S.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),g++}else if(S.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(p),o.identity(),a.copy(S.matrixWorld),a.premultiply(p),o.extractRotation(a),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(p),d++}else if(S.isHemisphereLight){const M=i.hemi[m];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function Yc(s,e){const t=new C0(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function P0(s,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let l;return o===void 0?(l=new Yc(s,e),t.set(r,[l])):a>=o.length?(l=new Yc(s,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class L0 extends zi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class I0 extends zi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const D0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,U0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function F0(s,e,t){let n=new il;const i=new Ae,r=new Ae,a=new He,o=new L0({depthPacking:Md}),l=new I0,c={},u=t.maxTextureSize,h={[fi]:kt,[kt]:fi,[bn]:bn},f=new Bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:D0,fragmentShader:U0}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new fn;g.setAttribute("position",new Ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new on(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lu;let p=this.type;this.render=function(M,E,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const R=s.getRenderTarget(),x=s.getActiveCubeFace(),b=s.getActiveMipmapLevel(),F=s.state;F.setBlending(li),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const Y=p!==Hn&&this.type===Hn,I=p===Hn&&this.type!==Hn;for(let N=0,O=M.length;N<O;N++){const X=M[N],z=X.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const W=z.getFrameExtents();if(i.multiply(W),r.copy(z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/W.x),i.x=r.x*W.x,z.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/W.y),i.y=r.y*W.y,z.mapSize.y=r.y)),z.map===null||Y===!0||I===!0){const H=this.type!==Hn?{minFilter:yt,magFilter:yt}:{};z.map!==null&&z.map.dispose(),z.map=new hn(i.x,i.y,H),z.map.texture.name=X.name+".shadowMap",z.camera.updateProjectionMatrix()}s.setRenderTarget(z.map),s.clear();const G=z.getViewportCount();for(let H=0;H<G;H++){const le=z.getViewport(H);a.set(r.x*le.x,r.y*le.y,r.x*le.z,r.y*le.w),F.viewport(a),z.updateMatrices(X,H),n=z.getFrustum(),S(E,A,z.camera,X,this.type)}z.isPointLightShadow!==!0&&this.type===Hn&&y(z,A),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(R,x,b)};function y(M,E){const A=e.update(_);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new hn(i.x,i.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,s.setRenderTarget(M.mapPass),s.clear(),s.renderBufferDirect(E,null,A,f,_,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,s.setRenderTarget(M.map),s.clear(),s.renderBufferDirect(E,null,A,d,_,null)}function v(M,E,A,R){let x=null;const b=A.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(b!==void 0)x=b;else if(x=A.isPointLight===!0?l:o,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const F=x.uuid,Y=E.uuid;let I=c[F];I===void 0&&(I={},c[F]=I);let N=I[Y];N===void 0&&(N=x.clone(),I[Y]=N),x=N}if(x.visible=E.visible,x.wireframe=E.wireframe,R===Hn?x.side=E.shadowSide!==null?E.shadowSide:E.side:x.side=E.shadowSide!==null?E.shadowSide:h[E.side],x.alphaMap=E.alphaMap,x.alphaTest=E.alphaTest,x.map=E.map,x.clipShadows=E.clipShadows,x.clippingPlanes=E.clippingPlanes,x.clipIntersection=E.clipIntersection,x.displacementMap=E.displacementMap,x.displacementScale=E.displacementScale,x.displacementBias=E.displacementBias,x.wireframeLinewidth=E.wireframeLinewidth,x.linewidth=E.linewidth,A.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const F=s.properties.get(x);F.light=A}return x}function S(M,E,A,R,x){if(M.visible===!1)return;if(M.layers.test(E.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&x===Hn)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,M.matrixWorld);const Y=e.update(M),I=M.material;if(Array.isArray(I)){const N=Y.groups;for(let O=0,X=N.length;O<X;O++){const z=N[O],W=I[z.materialIndex];if(W&&W.visible){const G=v(M,W,R,x);s.renderBufferDirect(A,null,Y,G,M,z)}}}else if(I.visible){const N=v(M,I,R,x);s.renderBufferDirect(A,null,Y,N,M,null)}}const F=M.children;for(let Y=0,I=F.length;Y<I;Y++)S(F[Y],E,A,R,x)}}function O0(s,e,t){const n=t.isWebGL2;function i(){let P=!1;const re=new He;let V=null;const te=new He(0,0,0,0);return{setMask:function(oe){V!==oe&&!P&&(s.colorMask(oe,oe,oe,oe),V=oe)},setLocked:function(oe){P=oe},setClear:function(oe,We,tt,lt,gi){gi===!0&&(oe*=lt,We*=lt,tt*=lt),re.set(oe,We,tt,lt),te.equals(re)===!1&&(s.clearColor(oe,We,tt,lt),te.copy(re))},reset:function(){P=!1,V=null,te.set(-1,0,0,0)}}}function r(){let P=!1,re=null,V=null,te=null;return{setTest:function(oe){oe?me(s.DEPTH_TEST):Ce(s.DEPTH_TEST)},setMask:function(oe){re!==oe&&!P&&(s.depthMask(oe),re=oe)},setFunc:function(oe){if(V!==oe){switch(oe){case qf:s.depthFunc(s.NEVER);break;case Yf:s.depthFunc(s.ALWAYS);break;case jf:s.depthFunc(s.LESS);break;case To:s.depthFunc(s.LEQUAL);break;case Kf:s.depthFunc(s.EQUAL);break;case Zf:s.depthFunc(s.GEQUAL);break;case $f:s.depthFunc(s.GREATER);break;case Jf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}V=oe}},setLocked:function(oe){P=oe},setClear:function(oe){te!==oe&&(s.clearDepth(oe),te=oe)},reset:function(){P=!1,re=null,V=null,te=null}}}function a(){let P=!1,re=null,V=null,te=null,oe=null,We=null,tt=null,lt=null,gi=null;return{setTest:function(nt){P||(nt?me(s.STENCIL_TEST):Ce(s.STENCIL_TEST))},setMask:function(nt){re!==nt&&!P&&(s.stencilMask(nt),re=nt)},setFunc:function(nt,Tn,It){(V!==nt||te!==Tn||oe!==It)&&(s.stencilFunc(nt,Tn,It),V=nt,te=Tn,oe=It)},setOp:function(nt,Tn,It){(We!==nt||tt!==Tn||lt!==It)&&(s.stencilOp(nt,Tn,It),We=nt,tt=Tn,lt=It)},setLocked:function(nt){P=nt},setClear:function(nt){gi!==nt&&(s.clearStencil(nt),gi=nt)},reset:function(){P=!1,re=null,V=null,te=null,oe=null,We=null,tt=null,lt=null,gi=null}}}const o=new i,l=new r,c=new a,u=new WeakMap,h=new WeakMap;let f={},d={},g=new WeakMap,_=[],m=null,p=!1,y=null,v=null,S=null,M=null,E=null,A=null,R=null,x=!1,b=null,F=null,Y=null,I=null,N=null;const O=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,z=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(W)[1]),X=z>=1):W.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),X=z>=2);let G=null,H={};const le=s.getParameter(s.SCISSOR_BOX),D=s.getParameter(s.VIEWPORT),J=new He().fromArray(le),$=new He().fromArray(D);function ie(P,re,V,te){const oe=new Uint8Array(4),We=s.createTexture();s.bindTexture(P,We),s.texParameteri(P,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(P,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let tt=0;tt<V;tt++)n&&(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)?s.texImage3D(re,0,s.RGBA,1,1,te,0,s.RGBA,s.UNSIGNED_BYTE,oe):s.texImage2D(re+tt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,oe);return We}const ce={};ce[s.TEXTURE_2D]=ie(s.TEXTURE_2D,s.TEXTURE_2D,1),ce[s.TEXTURE_CUBE_MAP]=ie(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ce[s.TEXTURE_2D_ARRAY]=ie(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ce[s.TEXTURE_3D]=ie(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),me(s.DEPTH_TEST),l.setFunc(To),Ee(!1),Ke(Dl),me(s.CULL_FACE),ye(li);function me(P){f[P]!==!0&&(s.enable(P),f[P]=!0)}function Ce(P){f[P]!==!1&&(s.disable(P),f[P]=!1)}function Te(P,re){return d[P]!==re?(s.bindFramebuffer(P,re),d[P]=re,n&&(P===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=re),P===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=re)),!0):!1}function pt(P,re){let V=_,te=!1;if(P)if(V=g.get(re),V===void 0&&(V=[],g.set(re,V)),P.isWebGLMultipleRenderTargets){const oe=P.texture;if(V.length!==oe.length||V[0]!==s.COLOR_ATTACHMENT0){for(let We=0,tt=oe.length;We<tt;We++)V[We]=s.COLOR_ATTACHMENT0+We;V.length=oe.length,te=!0}}else V[0]!==s.COLOR_ATTACHMENT0&&(V[0]=s.COLOR_ATTACHMENT0,te=!0);else V[0]!==s.BACK&&(V[0]=s.BACK,te=!0);te&&(t.isWebGL2?s.drawBuffers(V):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(V))}function ze(P){return m!==P?(s.useProgram(P),m=P,!0):!1}const B={[or]:s.FUNC_ADD,[Ff]:s.FUNC_SUBTRACT,[Of]:s.FUNC_REVERSE_SUBTRACT};if(n)B[Ol]=s.MIN,B[Nl]=s.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(B[Ol]=P.MIN_EXT,B[Nl]=P.MAX_EXT)}const vt={[Nf]:s.ZERO,[Bf]:s.ONE,[kf]:s.SRC_COLOR,[Iu]:s.SRC_ALPHA,[Xf]:s.SRC_ALPHA_SATURATE,[Hf]:s.DST_COLOR,[Vf]:s.DST_ALPHA,[zf]:s.ONE_MINUS_SRC_COLOR,[Du]:s.ONE_MINUS_SRC_ALPHA,[Wf]:s.ONE_MINUS_DST_COLOR,[Gf]:s.ONE_MINUS_DST_ALPHA};function ye(P,re,V,te,oe,We,tt,lt){if(P===li){p===!0&&(Ce(s.BLEND),p=!1);return}if(p===!1&&(me(s.BLEND),p=!0),P!==Uf){if(P!==y||lt!==x){if((v!==or||E!==or)&&(s.blendEquation(s.FUNC_ADD),v=or,E=or),lt)switch(P){case pr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case So:s.blendFunc(s.ONE,s.ONE);break;case Ul:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Fl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case pr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case So:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ul:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Fl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}S=null,M=null,A=null,R=null,y=P,x=lt}return}oe=oe||re,We=We||V,tt=tt||te,(re!==v||oe!==E)&&(s.blendEquationSeparate(B[re],B[oe]),v=re,E=oe),(V!==S||te!==M||We!==A||tt!==R)&&(s.blendFuncSeparate(vt[V],vt[te],vt[We],vt[tt]),S=V,M=te,A=We,R=tt),y=P,x=!1}function Ue(P,re){P.side===bn?Ce(s.CULL_FACE):me(s.CULL_FACE);let V=P.side===kt;re&&(V=!V),Ee(V),P.blending===pr&&P.transparent===!1?ye(li):ye(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);const te=P.stencilWrite;c.setTest(te),te&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Pe(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?me(s.SAMPLE_ALPHA_TO_COVERAGE):Ce(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(P){b!==P&&(P?s.frontFace(s.CW):s.frontFace(s.CCW),b=P)}function Ke(P){P!==Lf?(me(s.CULL_FACE),P!==F&&(P===Dl?s.cullFace(s.BACK):P===If?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ce(s.CULL_FACE),F=P}function Be(P){P!==Y&&(X&&s.lineWidth(P),Y=P)}function Pe(P,re,V){P?(me(s.POLYGON_OFFSET_FILL),(I!==re||N!==V)&&(s.polygonOffset(re,V),I=re,N=V)):Ce(s.POLYGON_OFFSET_FILL)}function Xe(P){P?me(s.SCISSOR_TEST):Ce(s.SCISSOR_TEST)}function xt(P){P===void 0&&(P=s.TEXTURE0+O-1),G!==P&&(s.activeTexture(P),G=P)}function Et(P,re,V){V===void 0&&(G===null?V=s.TEXTURE0+O-1:V=G);let te=H[V];te===void 0&&(te={type:void 0,texture:void 0},H[V]=te),(te.type!==P||te.texture!==re)&&(G!==V&&(s.activeTexture(V),G=V),s.bindTexture(P,re||ce[P]),te.type=P,te.texture=re)}function C(){const P=H[G];P!==void 0&&P.type!==void 0&&(s.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function T(){try{s.compressedTexImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function j(){try{s.compressedTexImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{s.texSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ee(){try{s.texSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function se(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function de(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ae(){try{s.texStorage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Z(){try{s.texStorage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _e(){try{s.texImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ge(){try{s.texImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xe(P){J.equals(P)===!1&&(s.scissor(P.x,P.y,P.z,P.w),J.copy(P))}function he(P){$.equals(P)===!1&&(s.viewport(P.x,P.y,P.z,P.w),$.copy(P))}function fe(P,re){let V=h.get(re);V===void 0&&(V=new WeakMap,h.set(re,V));let te=V.get(P);te===void 0&&(te=s.getUniformBlockIndex(re,P.name),V.set(P,te))}function Fe(P,re){const te=h.get(re).get(P);u.get(re)!==te&&(s.uniformBlockBinding(re,te,P.__bindingPointIndex),u.set(re,te))}function je(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},G=null,H={},d={},g=new WeakMap,_=[],m=null,p=!1,y=null,v=null,S=null,M=null,E=null,A=null,R=null,x=!1,b=null,F=null,Y=null,I=null,N=null,J.set(0,0,s.canvas.width,s.canvas.height),$.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:me,disable:Ce,bindFramebuffer:Te,drawBuffers:pt,useProgram:ze,setBlending:ye,setMaterial:Ue,setFlipSided:Ee,setCullFace:Ke,setLineWidth:Be,setPolygonOffset:Pe,setScissorTest:Xe,activeTexture:xt,bindTexture:Et,unbindTexture:C,compressedTexImage2D:T,compressedTexImage3D:j,texImage2D:_e,texImage3D:ge,updateUBOMapping:fe,uniformBlockBinding:Fe,texStorage2D:ae,texStorage3D:Z,texSubImage2D:Q,texSubImage3D:ee,compressedTexSubImage2D:se,compressedTexSubImage3D:de,scissor:xe,viewport:he,reset:je}}function N0(s,e,t,n,i,r,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(C,T){return p?new OffscreenCanvas(C,T):ns("canvas")}function v(C,T,j,Q){let ee=1;if((C.width>Q||C.height>Q)&&(ee=Q/Math.max(C.width,C.height)),ee<1||T===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const se=T?Js:Math.floor,de=se(ee*C.width),ae=se(ee*C.height);_===void 0&&(_=y(de,ae));const Z=j?y(de,ae):_;return Z.width=de,Z.height=ae,Z.getContext("2d").drawImage(C,0,0,de,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+de+"x"+ae+")."),Z}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function S(C){return Ao(C.width)&&Ao(C.height)}function M(C){return o?!1:C.wrapS!==jt||C.wrapT!==jt||C.minFilter!==yt&&C.minFilter!==nn}function E(C,T){return C.generateMipmaps&&T&&C.minFilter!==yt&&C.minFilter!==nn}function A(C){s.generateMipmap(C)}function R(C,T,j,Q,ee=!1){if(o===!1)return T;if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let se=T;return T===s.RED&&(j===s.FLOAT&&(se=s.R32F),j===s.HALF_FLOAT&&(se=s.R16F),j===s.UNSIGNED_BYTE&&(se=s.R8)),T===s.RG&&(j===s.FLOAT&&(se=s.RG32F),j===s.HALF_FLOAT&&(se=s.RG16F),j===s.UNSIGNED_BYTE&&(se=s.RG8)),T===s.RGBA&&(j===s.FLOAT&&(se=s.RGBA32F),j===s.HALF_FLOAT&&(se=s.RGBA16F),j===s.UNSIGNED_BYTE&&(se=Q===we&&ee===!1?s.SRGB8_ALPHA8:s.RGBA8),j===s.UNSIGNED_SHORT_4_4_4_4&&(se=s.RGBA4),j===s.UNSIGNED_SHORT_5_5_5_1&&(se=s.RGB5_A1)),(se===s.R16F||se===s.R32F||se===s.RG16F||se===s.RG32F||se===s.RGBA16F||se===s.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function x(C,T,j){return E(C,j)===!0||C.isFramebufferTexture&&C.minFilter!==yt&&C.minFilter!==nn?Math.log2(Math.max(T.width,T.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?T.mipmaps.length:1}function b(C){return C===yt||C===Bl||C===Aa?s.NEAREST:s.LINEAR}function F(C){const T=C.target;T.removeEventListener("dispose",F),I(T),T.isVideoTexture&&g.delete(T)}function Y(C){const T=C.target;T.removeEventListener("dispose",Y),O(T)}function I(C){const T=n.get(C);if(T.__webglInit===void 0)return;const j=C.source,Q=m.get(j);if(Q){const ee=Q[T.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&N(C),Object.keys(Q).length===0&&m.delete(j)}n.remove(C)}function N(C){const T=n.get(C);s.deleteTexture(T.__webglTexture);const j=C.source,Q=m.get(j);delete Q[T.__cacheKey],a.memory.textures--}function O(C){const T=C.texture,j=n.get(C),Q=n.get(T);if(Q.__webglTexture!==void 0&&(s.deleteTexture(Q.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++)s.deleteFramebuffer(j.__webglFramebuffer[ee]),j.__webglDepthbuffer&&s.deleteRenderbuffer(j.__webglDepthbuffer[ee]);else{if(s.deleteFramebuffer(j.__webglFramebuffer),j.__webglDepthbuffer&&s.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&s.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let ee=0;ee<j.__webglColorRenderbuffer.length;ee++)j.__webglColorRenderbuffer[ee]&&s.deleteRenderbuffer(j.__webglColorRenderbuffer[ee]);j.__webglDepthRenderbuffer&&s.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ee=0,se=T.length;ee<se;ee++){const de=n.get(T[ee]);de.__webglTexture&&(s.deleteTexture(de.__webglTexture),a.memory.textures--),n.remove(T[ee])}n.remove(T),n.remove(C)}let X=0;function z(){X=0}function W(){const C=X;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),X+=1,C}function G(C){const T=[];return T.push(C.wrapS),T.push(C.wrapT),T.push(C.wrapR||0),T.push(C.magFilter),T.push(C.minFilter),T.push(C.anisotropy),T.push(C.internalFormat),T.push(C.format),T.push(C.type),T.push(C.generateMipmaps),T.push(C.premultiplyAlpha),T.push(C.flipY),T.push(C.unpackAlignment),T.push(C.colorSpace),T.join()}function H(C,T){const j=n.get(C);if(C.isVideoTexture&&xt(C),C.isRenderTargetTexture===!1&&C.version>0&&j.__version!==C.version){const Q=C.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Te(j,C,T);return}}t.bindTexture(s.TEXTURE_2D,j.__webglTexture,s.TEXTURE0+T)}function le(C,T){const j=n.get(C);if(C.version>0&&j.__version!==C.version){Te(j,C,T);return}t.bindTexture(s.TEXTURE_2D_ARRAY,j.__webglTexture,s.TEXTURE0+T)}function D(C,T){const j=n.get(C);if(C.version>0&&j.__version!==C.version){Te(j,C,T);return}t.bindTexture(s.TEXTURE_3D,j.__webglTexture,s.TEXTURE0+T)}function J(C,T){const j=n.get(C);if(C.version>0&&j.__version!==C.version){pt(j,C,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture,s.TEXTURE0+T)}const $={[es]:s.REPEAT,[jt]:s.CLAMP_TO_EDGE,[bo]:s.MIRRORED_REPEAT},ie={[yt]:s.NEAREST,[Bl]:s.NEAREST_MIPMAP_NEAREST,[Aa]:s.NEAREST_MIPMAP_LINEAR,[nn]:s.LINEAR,[ad]:s.LINEAR_MIPMAP_NEAREST,[ts]:s.LINEAR_MIPMAP_LINEAR},ce={[Ed]:s.NEVER,[Ld]:s.ALWAYS,[bd]:s.LESS,[Ad]:s.LEQUAL,[wd]:s.EQUAL,[Pd]:s.GEQUAL,[Rd]:s.GREATER,[Cd]:s.NOTEQUAL};function me(C,T,j){if(j?(s.texParameteri(C,s.TEXTURE_WRAP_S,$[T.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,$[T.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,$[T.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,ie[T.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,ie[T.minFilter])):(s.texParameteri(C,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(C,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(T.wrapS!==jt||T.wrapT!==jt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(C,s.TEXTURE_MAG_FILTER,b(T.magFilter)),s.texParameteri(C,s.TEXTURE_MIN_FILTER,b(T.minFilter)),T.minFilter!==yt&&T.minFilter!==nn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,ce[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===yt||T.minFilter!==Aa&&T.minFilter!==ts||T.type===qn&&e.has("OES_texture_float_linear")===!1||o===!1&&T.type===Pn&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(s.texParameterf(C,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function Ce(C,T){let j=!1;C.__webglInit===void 0&&(C.__webglInit=!0,T.addEventListener("dispose",F));const Q=T.source;let ee=m.get(Q);ee===void 0&&(ee={},m.set(Q,ee));const se=G(T);if(se!==C.__cacheKey){ee[se]===void 0&&(ee[se]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,j=!0),ee[se].usedTimes++;const de=ee[C.__cacheKey];de!==void 0&&(ee[C.__cacheKey].usedTimes--,de.usedTimes===0&&N(T)),C.__cacheKey=se,C.__webglTexture=ee[se].texture}return j}function Te(C,T,j){let Q=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Q=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Q=s.TEXTURE_3D);const ee=Ce(C,T),se=T.source;t.bindTexture(Q,C.__webglTexture,s.TEXTURE0+j);const de=n.get(se);if(se.version!==de.__version||ee===!0){t.activeTexture(s.TEXTURE0+j),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const ae=M(T)&&S(T.image)===!1;let Z=v(T.image,ae,!1,u);Z=Et(T,Z);const _e=S(Z)||o,ge=r.convert(T.format,T.colorSpace);let xe=r.convert(T.type),he=R(T.internalFormat,ge,xe,T.colorSpace);me(Q,T,_e);let fe;const Fe=T.mipmaps,je=o&&T.isVideoTexture!==!0,P=de.__version===void 0||ee===!0,re=x(T,Z,_e);if(T.isDepthTexture)he=s.DEPTH_COMPONENT,o?T.type===qn?he=s.DEPTH_COMPONENT32F:T.type===ii?he=s.DEPTH_COMPONENT24:T.type===Pi?he=s.DEPTH24_STENCIL8:he=s.DEPTH_COMPONENT16:T.type===qn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Li&&he===s.DEPTH_COMPONENT&&T.type!==$o&&T.type!==ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=ii,xe=r.convert(T.type)),T.format===Mr&&he===s.DEPTH_COMPONENT&&(he=s.DEPTH_STENCIL,T.type!==Pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Pi,xe=r.convert(T.type))),P&&(je?t.texStorage2D(s.TEXTURE_2D,1,he,Z.width,Z.height):t.texImage2D(s.TEXTURE_2D,0,he,Z.width,Z.height,0,ge,xe,null));else if(T.isDataTexture)if(Fe.length>0&&_e){je&&P&&t.texStorage2D(s.TEXTURE_2D,re,he,Fe[0].width,Fe[0].height);for(let V=0,te=Fe.length;V<te;V++)fe=Fe[V],je?t.texSubImage2D(s.TEXTURE_2D,V,0,0,fe.width,fe.height,ge,xe,fe.data):t.texImage2D(s.TEXTURE_2D,V,he,fe.width,fe.height,0,ge,xe,fe.data);T.generateMipmaps=!1}else je?(P&&t.texStorage2D(s.TEXTURE_2D,re,he,Z.width,Z.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Z.width,Z.height,ge,xe,Z.data)):t.texImage2D(s.TEXTURE_2D,0,he,Z.width,Z.height,0,ge,xe,Z.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){je&&P&&t.texStorage3D(s.TEXTURE_2D_ARRAY,re,he,Fe[0].width,Fe[0].height,Z.depth);for(let V=0,te=Fe.length;V<te;V++)fe=Fe[V],T.format!==rn?ge!==null?je?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,0,fe.width,fe.height,Z.depth,ge,fe.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,V,he,fe.width,fe.height,Z.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,0,fe.width,fe.height,Z.depth,ge,xe,fe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,V,he,fe.width,fe.height,Z.depth,0,ge,xe,fe.data)}else{je&&P&&t.texStorage2D(s.TEXTURE_2D,re,he,Fe[0].width,Fe[0].height);for(let V=0,te=Fe.length;V<te;V++)fe=Fe[V],T.format!==rn?ge!==null?je?t.compressedTexSubImage2D(s.TEXTURE_2D,V,0,0,fe.width,fe.height,ge,fe.data):t.compressedTexImage2D(s.TEXTURE_2D,V,he,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage2D(s.TEXTURE_2D,V,0,0,fe.width,fe.height,ge,xe,fe.data):t.texImage2D(s.TEXTURE_2D,V,he,fe.width,fe.height,0,ge,xe,fe.data)}else if(T.isDataArrayTexture)je?(P&&t.texStorage3D(s.TEXTURE_2D_ARRAY,re,he,Z.width,Z.height,Z.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ge,xe,Z.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,he,Z.width,Z.height,Z.depth,0,ge,xe,Z.data);else if(T.isData3DTexture)je?(P&&t.texStorage3D(s.TEXTURE_3D,re,he,Z.width,Z.height,Z.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ge,xe,Z.data)):t.texImage3D(s.TEXTURE_3D,0,he,Z.width,Z.height,Z.depth,0,ge,xe,Z.data);else if(T.isFramebufferTexture){if(P)if(je)t.texStorage2D(s.TEXTURE_2D,re,he,Z.width,Z.height);else{let V=Z.width,te=Z.height;for(let oe=0;oe<re;oe++)t.texImage2D(s.TEXTURE_2D,oe,he,V,te,0,ge,xe,null),V>>=1,te>>=1}}else if(Fe.length>0&&_e){je&&P&&t.texStorage2D(s.TEXTURE_2D,re,he,Fe[0].width,Fe[0].height);for(let V=0,te=Fe.length;V<te;V++)fe=Fe[V],je?t.texSubImage2D(s.TEXTURE_2D,V,0,0,ge,xe,fe):t.texImage2D(s.TEXTURE_2D,V,he,ge,xe,fe);T.generateMipmaps=!1}else je?(P&&t.texStorage2D(s.TEXTURE_2D,re,he,Z.width,Z.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,ge,xe,Z)):t.texImage2D(s.TEXTURE_2D,0,he,ge,xe,Z);E(T,_e)&&A(Q),de.__version=se.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function pt(C,T,j){if(T.image.length!==6)return;const Q=Ce(C,T),ee=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+j);const se=n.get(ee);if(ee.version!==se.__version||Q===!0){t.activeTexture(s.TEXTURE0+j),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const de=T.isCompressedTexture||T.image[0].isCompressedTexture,ae=T.image[0]&&T.image[0].isDataTexture,Z=[];for(let V=0;V<6;V++)!de&&!ae?Z[V]=v(T.image[V],!1,!0,c):Z[V]=ae?T.image[V].image:T.image[V],Z[V]=Et(T,Z[V]);const _e=Z[0],ge=S(_e)||o,xe=r.convert(T.format,T.colorSpace),he=r.convert(T.type),fe=R(T.internalFormat,xe,he,T.colorSpace),Fe=o&&T.isVideoTexture!==!0,je=se.__version===void 0||Q===!0;let P=x(T,_e,ge);me(s.TEXTURE_CUBE_MAP,T,ge);let re;if(de){Fe&&je&&t.texStorage2D(s.TEXTURE_CUBE_MAP,P,fe,_e.width,_e.height);for(let V=0;V<6;V++){re=Z[V].mipmaps;for(let te=0;te<re.length;te++){const oe=re[te];T.format!==rn?xe!==null?Fe?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,te,0,0,oe.width,oe.height,xe,oe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,te,fe,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,te,0,0,oe.width,oe.height,xe,he,oe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,te,fe,oe.width,oe.height,0,xe,he,oe.data)}}}else{re=T.mipmaps,Fe&&je&&(re.length>0&&P++,t.texStorage2D(s.TEXTURE_CUBE_MAP,P,fe,Z[0].width,Z[0].height));for(let V=0;V<6;V++)if(ae){Fe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,Z[V].width,Z[V].height,xe,he,Z[V].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,fe,Z[V].width,Z[V].height,0,xe,he,Z[V].data);for(let te=0;te<re.length;te++){const We=re[te].image[V].image;Fe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,te+1,0,0,We.width,We.height,xe,he,We.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,te+1,fe,We.width,We.height,0,xe,he,We.data)}}else{Fe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,xe,he,Z[V]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,fe,xe,he,Z[V]);for(let te=0;te<re.length;te++){const oe=re[te];Fe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,te+1,0,0,xe,he,oe.image[V]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,te+1,fe,xe,he,oe.image[V])}}}E(T,ge)&&A(s.TEXTURE_CUBE_MAP),se.__version=ee.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function ze(C,T,j,Q,ee){const se=r.convert(j.format,j.colorSpace),de=r.convert(j.type),ae=R(j.internalFormat,se,de,j.colorSpace);n.get(T).__hasExternalTextures||(ee===s.TEXTURE_3D||ee===s.TEXTURE_2D_ARRAY?t.texImage3D(ee,0,ae,T.width,T.height,T.depth,0,se,de,null):t.texImage2D(ee,0,ae,T.width,T.height,0,se,de,null)),t.bindFramebuffer(s.FRAMEBUFFER,C),Xe(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Q,ee,n.get(j).__webglTexture,0,Pe(T)):(ee===s.TEXTURE_2D||ee>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Q,ee,n.get(j).__webglTexture,0),t.bindFramebuffer(s.FRAMEBUFFER,null)}function B(C,T,j){if(s.bindRenderbuffer(s.RENDERBUFFER,C),T.depthBuffer&&!T.stencilBuffer){let Q=s.DEPTH_COMPONENT16;if(j||Xe(T)){const ee=T.depthTexture;ee&&ee.isDepthTexture&&(ee.type===qn?Q=s.DEPTH_COMPONENT32F:ee.type===ii&&(Q=s.DEPTH_COMPONENT24));const se=Pe(T);Xe(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,se,Q,T.width,T.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,se,Q,T.width,T.height)}else s.renderbufferStorage(s.RENDERBUFFER,Q,T.width,T.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,C)}else if(T.depthBuffer&&T.stencilBuffer){const Q=Pe(T);j&&Xe(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Q,s.DEPTH24_STENCIL8,T.width,T.height):Xe(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Q,s.DEPTH24_STENCIL8,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,C)}else{const Q=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ee=0;ee<Q.length;ee++){const se=Q[ee],de=r.convert(se.format,se.colorSpace),ae=r.convert(se.type),Z=R(se.internalFormat,de,ae,se.colorSpace),_e=Pe(T);j&&Xe(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,_e,Z,T.width,T.height):Xe(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_e,Z,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Z,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function vt(C,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),H(T.depthTexture,0);const Q=n.get(T.depthTexture).__webglTexture,ee=Pe(T);if(T.depthTexture.format===Li)Xe(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,ee):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(T.depthTexture.format===Mr)Xe(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,ee):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function ye(C){const T=n.get(C),j=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!T.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");vt(T.__webglFramebuffer,C)}else if(j){T.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[Q]),T.__webglDepthbuffer[Q]=s.createRenderbuffer(),B(T.__webglDepthbuffer[Q],C,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=s.createRenderbuffer(),B(T.__webglDepthbuffer,C,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ue(C,T,j){const Q=n.get(C);T!==void 0&&ze(Q.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D),j!==void 0&&ye(C)}function Ee(C){const T=C.texture,j=n.get(C),Q=n.get(T);C.addEventListener("dispose",Y),C.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=s.createTexture()),Q.__version=T.version,a.memory.textures++);const ee=C.isWebGLCubeRenderTarget===!0,se=C.isWebGLMultipleRenderTargets===!0,de=S(C)||o;if(ee){j.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)j.__webglFramebuffer[ae]=s.createFramebuffer()}else{if(j.__webglFramebuffer=s.createFramebuffer(),se)if(i.drawBuffers){const ae=C.texture;for(let Z=0,_e=ae.length;Z<_e;Z++){const ge=n.get(ae[Z]);ge.__webglTexture===void 0&&(ge.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&Xe(C)===!1){const ae=se?T:[T];j.__webglMultisampledFramebuffer=s.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Z=0;Z<ae.length;Z++){const _e=ae[Z];j.__webglColorRenderbuffer[Z]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,j.__webglColorRenderbuffer[Z]);const ge=r.convert(_e.format,_e.colorSpace),xe=r.convert(_e.type),he=R(_e.internalFormat,ge,xe,_e.colorSpace,C.isXRRenderTarget===!0),fe=Pe(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,fe,he,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Z,s.RENDERBUFFER,j.__webglColorRenderbuffer[Z])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(j.__webglDepthRenderbuffer=s.createRenderbuffer(),B(j.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ee){t.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture),me(s.TEXTURE_CUBE_MAP,T,de);for(let ae=0;ae<6;ae++)ze(j.__webglFramebuffer[ae],C,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ae);E(T,de)&&A(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){const ae=C.texture;for(let Z=0,_e=ae.length;Z<_e;Z++){const ge=ae[Z],xe=n.get(ge);t.bindTexture(s.TEXTURE_2D,xe.__webglTexture),me(s.TEXTURE_2D,ge,de),ze(j.__webglFramebuffer,C,ge,s.COLOR_ATTACHMENT0+Z,s.TEXTURE_2D),E(ge,de)&&A(s.TEXTURE_2D)}t.unbindTexture()}else{let ae=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?ae=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ae,Q.__webglTexture),me(ae,T,de),ze(j.__webglFramebuffer,C,T,s.COLOR_ATTACHMENT0,ae),E(T,de)&&A(ae),t.unbindTexture()}C.depthBuffer&&ye(C)}function Ke(C){const T=S(C)||o,j=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let Q=0,ee=j.length;Q<ee;Q++){const se=j[Q];if(E(se,T)){const de=C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ae=n.get(se).__webglTexture;t.bindTexture(de,ae),A(de),t.unbindTexture()}}}function Be(C){if(o&&C.samples>0&&Xe(C)===!1){const T=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],j=C.width,Q=C.height;let ee=s.COLOR_BUFFER_BIT;const se=[],de=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=n.get(C),Z=C.isWebGLMultipleRenderTargets===!0;if(Z)for(let _e=0;_e<T.length;_e++)t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let _e=0;_e<T.length;_e++){se.push(s.COLOR_ATTACHMENT0+_e),C.depthBuffer&&se.push(de);const ge=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(ge===!1&&(C.depthBuffer&&(ee|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&(ee|=s.STENCIL_BUFFER_BIT)),Z&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ae.__webglColorRenderbuffer[_e]),ge===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[de]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[de])),Z){const xe=n.get(T[_e]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,xe,0)}s.blitFramebuffer(0,0,j,Q,0,0,j,Q,ee,s.NEAREST),d&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,se)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Z)for(let _e=0;_e<T.length;_e++){t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,ae.__webglColorRenderbuffer[_e]);const ge=n.get(T[_e]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,ge,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}}function Pe(C){return Math.min(h,C.samples)}function Xe(C){const T=n.get(C);return o&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function xt(C){const T=a.render.frame;g.get(C)!==T&&(g.set(C,T),C.update())}function Et(C,T){const j=C.colorSpace,Q=C.format,ee=C.type;return C.isCompressedTexture===!0||C.format===wo||j!==Sn&&j!==Di&&(j===we?o===!1?e.has("EXT_sRGB")===!0&&Q===rn?(C.format=wo,C.minFilter=nn,C.generateMipmaps=!1):T=Xu.sRGBToLinear(T):(Q!==rn||ee!==ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),T}this.allocateTextureUnit=W,this.resetTextureUnits=z,this.setTexture2D=H,this.setTexture2DArray=le,this.setTexture3D=D,this.setTextureCube=J,this.rebindTextures=Ue,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=ze,this.useMultisampledRTT=Xe}function B0(s,e,t){const n=t.isWebGL2;function i(r,a=Di){let o;if(r===ci)return s.UNSIGNED_BYTE;if(r===Ou)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Nu)return s.UNSIGNED_SHORT_5_5_5_1;if(r===od)return s.BYTE;if(r===ld)return s.SHORT;if(r===$o)return s.UNSIGNED_SHORT;if(r===Fu)return s.INT;if(r===ii)return s.UNSIGNED_INT;if(r===qn)return s.FLOAT;if(r===Pn)return n?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===cd)return s.ALPHA;if(r===rn)return s.RGBA;if(r===ud)return s.LUMINANCE;if(r===hd)return s.LUMINANCE_ALPHA;if(r===Li)return s.DEPTH_COMPONENT;if(r===Mr)return s.DEPTH_STENCIL;if(r===wo)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===fd)return s.RED;if(r===Bu)return s.RED_INTEGER;if(r===dd)return s.RG;if(r===ku)return s.RG_INTEGER;if(r===zu)return s.RGBA_INTEGER;if(r===Ra||r===Ca||r===Pa||r===La)if(a===we)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Ra)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ca)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Pa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===La)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Ra)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ca)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Pa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===La)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===kl||r===zl||r===Vl||r===Gl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===kl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===zl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Vl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Gl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===pd)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Hl||r===Wl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Hl)return a===we?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Wl)return a===we?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Xl||r===ql||r===Yl||r===jl||r===Kl||r===Zl||r===$l||r===Jl||r===Ql||r===ec||r===tc||r===nc||r===ic||r===rc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Xl)return a===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ql)return a===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Yl)return a===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===jl)return a===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Kl)return a===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Zl)return a===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===$l)return a===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Jl)return a===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ql)return a===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ec)return a===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===tc)return a===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===nc)return a===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ic)return a===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===rc)return a===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ia)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Ia)return a===we?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===md||r===sc||r===ac||r===oc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Ia)return o.COMPRESSED_RED_RGTC1_EXT;if(r===sc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ac)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===oc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Pi?n?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class k0 extends Rt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class hr extends et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const z0={type:"move"};class to{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(z0)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new hr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class V0 extends Tt{constructor(e,t,n,i,r,a,o,l,c,u){if(u=u!==void 0?u:Li,u!==Li&&u!==Mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Li&&(n=ii),n===void 0&&u===Mr&&(n=Pi),super(null,i,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:yt,this.minFilter=l!==void 0?l:yt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class G0 extends ki{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=t.getContextAttributes();let m=null,p=null;const y=[],v=[];let S=null;const M=new Rt;M.layers.enable(1),M.viewport=new He;const E=new Rt;E.layers.enable(2),E.viewport=new He;const A=[M,E],R=new k0;R.layers.enable(1),R.layers.enable(2);let x=null,b=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getCamera=function(){},this.setUserCamera=function(D){S=D},this.getController=function(D){let J=y[D];return J===void 0&&(J=new to,y[D]=J),J.getTargetRaySpace()},this.getControllerGrip=function(D){let J=y[D];return J===void 0&&(J=new to,y[D]=J),J.getGripSpace()},this.getHand=function(D){let J=y[D];return J===void 0&&(J=new to,y[D]=J),J.getHandSpace()};function F(D){const J=v.indexOf(D.inputSource);if(J===-1)return;const $=y[J];$!==void 0&&($.update(D.inputSource,D.frame,c||a),$.dispatchEvent({type:D.type,data:D.inputSource}))}function Y(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",I);for(let D=0;D<y.length;D++){const J=v[D];J!==null&&(v[D]=null,y[D].disconnect(J))}x=null,b=null,e.setRenderTarget(m),d=null,f=null,h=null,i=null,p=null,le.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){r=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){o=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(D){c=D},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(D){if(i=D,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",I),_.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,J),i.updateRenderState({baseLayer:d}),p=new hn(d.framebufferWidth,d.framebufferHeight,{format:rn,type:ci,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let J=null,$=null,ie=null;_.depth&&(ie=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=_.stencil?Mr:Li,$=_.stencil?Pi:ii);const ce={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:r};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(ce),i.updateRenderState({layers:[f]}),p=new hn(f.textureWidth,f.textureHeight,{format:rn,type:ci,depthTexture:new V0(f.textureWidth,f.textureHeight,$,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const me=e.properties.get(p);me.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),le.setContext(i),le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function I(D){for(let J=0;J<D.removed.length;J++){const $=D.removed[J],ie=v.indexOf($);ie>=0&&(v[ie]=null,y[ie].disconnect($))}for(let J=0;J<D.added.length;J++){const $=D.added[J];let ie=v.indexOf($);if(ie===-1){for(let me=0;me<y.length;me++)if(me>=v.length){v.push($),ie=me;break}else if(v[me]===null){v[me]=$,ie=me;break}if(ie===-1)break}const ce=y[ie];ce&&ce.connect($)}}const N=new L,O=new L;function X(D,J,$){N.setFromMatrixPosition(J.matrixWorld),O.setFromMatrixPosition($.matrixWorld);const ie=N.distanceTo(O),ce=J.projectionMatrix.elements,me=$.projectionMatrix.elements,Ce=ce[14]/(ce[10]-1),Te=ce[14]/(ce[10]+1),pt=(ce[9]+1)/ce[5],ze=(ce[9]-1)/ce[5],B=(ce[8]-1)/ce[0],vt=(me[8]+1)/me[0],ye=Ce*B,Ue=Ce*vt,Ee=ie/(-B+vt),Ke=Ee*-B;J.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(Ke),D.translateZ(Ee),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert();const Be=Ce+Ee,Pe=Te+Ee,Xe=ye-Ke,xt=Ue+(ie-Ke),Et=pt*Te/Pe*Be,C=ze*Te/Pe*Be;D.projectionMatrix.makePerspective(Xe,xt,Et,C,Be,Pe),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}function z(D,J){J===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(J.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCameraXR=function(D){if(i===null)return D;S&&(D=S),R.near=E.near=M.near=D.near,R.far=E.far=M.far=D.far,(x!==R.near||b!==R.far)&&(i.updateRenderState({depthNear:R.near,depthFar:R.far}),x=R.near,b=R.far);const J=D.parent,$=R.cameras;z(R,J);for(let ie=0;ie<$.length;ie++)z($[ie],J);return $.length===2?X(R,M,E):R.projectionMatrix.copy(M.projectionMatrix),S&&W(R,J),R};function W(D,J){const $=S;J===null?$.matrix.copy(D.matrixWorld):($.matrix.copy(J.matrixWorld),$.matrix.invert(),$.matrix.multiply(D.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0);const ie=$.children;for(let ce=0,me=ie.length;ce<me;ce++)ie[ce].updateMatrixWorld(!0);$.projectionMatrix.copy(D.projectionMatrix),$.projectionMatrixInverse.copy(D.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Sr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(D){l=D,f!==null&&(f.fixedFoveation=D),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=D)};let G=null;function H(D,J){if(u=J.getViewerPose(c||a),g=J,u!==null){const $=u.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let ie=!1;$.length!==R.cameras.length&&(R.cameras.length=0,ie=!0);for(let ce=0;ce<$.length;ce++){const me=$[ce];let Ce=null;if(d!==null)Ce=d.getViewport(me);else{const pt=h.getViewSubImage(f,me);Ce=pt.viewport,ce===0&&(e.setRenderTargetTextures(p,pt.colorTexture,f.ignoreDepthValues?void 0:pt.depthStencilTexture),e.setRenderTarget(p))}let Te=A[ce];Te===void 0&&(Te=new Rt,Te.layers.enable(ce),Te.viewport=new He,A[ce]=Te),Te.matrix.fromArray(me.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(me.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),ce===0&&(R.matrix.copy(Te.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ie===!0&&R.cameras.push(Te)}}for(let $=0;$<y.length;$++){const ie=v[$],ce=y[$];ie!==null&&ce!==void 0&&ce.update(ie,J,c||a)}G&&G(D,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const le=new Qu;le.setAnimationLoop(H),this.setAnimationLoop=function(D){G=D},this.dispose=function(){}}}function H0(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Zu(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,v,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===kt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===kt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const v=s.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===kt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function W0(s,e,t,n){let i={},r={},a=[];const o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,v){const S=v.program;n.uniformBlockBinding(y,S)}function c(y,v){let S=i[y.id];S===void 0&&(g(y),S=u(y),i[y.id]=S,y.addEventListener("dispose",m));const M=v.program;n.updateUBOMapping(y,M);const E=e.render.frame;r[y.id]!==E&&(f(y),r[y.id]=E)}function u(y){const v=h();y.__bindingPointIndex=v;const S=s.createBuffer(),M=y.__size,E=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,M,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,S),S}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const v=i[y.id],S=y.uniforms,M=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let E=0,A=S.length;E<A;E++){const R=S[E];if(d(R,E,M)===!0){const x=R.__offset,b=Array.isArray(R.value)?R.value:[R.value];let F=0;for(let Y=0;Y<b.length;Y++){const I=b[Y],N=_(I);typeof I=="number"?(R.__data[0]=I,s.bufferSubData(s.UNIFORM_BUFFER,x+F,R.__data)):I.isMatrix3?(R.__data[0]=I.elements[0],R.__data[1]=I.elements[1],R.__data[2]=I.elements[2],R.__data[3]=I.elements[0],R.__data[4]=I.elements[3],R.__data[5]=I.elements[4],R.__data[6]=I.elements[5],R.__data[7]=I.elements[0],R.__data[8]=I.elements[6],R.__data[9]=I.elements[7],R.__data[10]=I.elements[8],R.__data[11]=I.elements[0]):(I.toArray(R.__data,F),F+=N.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,x,R.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(y,v,S){const M=y.value;if(S[v]===void 0){if(typeof M=="number")S[v]=M;else{const E=Array.isArray(M)?M:[M],A=[];for(let R=0;R<E.length;R++)A.push(E[R].clone());S[v]=A}return!0}else if(typeof M=="number"){if(S[v]!==M)return S[v]=M,!0}else{const E=Array.isArray(S[v])?S[v]:[S[v]],A=Array.isArray(M)?M:[M];for(let R=0;R<E.length;R++){const x=E[R];if(x.equals(A[R])===!1)return x.copy(A[R]),!0}}return!1}function g(y){const v=y.uniforms;let S=0;const M=16;let E=0;for(let A=0,R=v.length;A<R;A++){const x=v[A],b={boundary:0,storage:0},F=Array.isArray(x.value)?x.value:[x.value];for(let Y=0,I=F.length;Y<I;Y++){const N=F[Y],O=_(N);b.boundary+=O.boundary,b.storage+=O.storage}if(x.__data=new Float32Array(b.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=S,A>0){E=S%M;const Y=M-E;E!==0&&Y-b.boundary<0&&(S+=M-E,x.__offset=S)}S+=b.storage}return E=S%M,E>0&&(S+=M-E),y.__size=S,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){const v=y.target;v.removeEventListener("dispose",m);const S=a.indexOf(v.__bindingPointIndex);a.splice(S,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(const y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}function X0(){const s=ns("canvas");return s.style.display="block",s}class rh{constructor(e={}){const{canvas:t=X0(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=we,this.useLegacyLights=!0,this.toneMapping=Cn,this.toneMappingExposure=1;const v=this;let S=!1,M=0,E=0,A=null,R=-1,x=null;const b=new He,F=new He;let Y=null;const I=new Me(0);let N=0,O=t.width,X=t.height,z=1,W=null,G=null;const H=new He(0,0,O,X),le=new He(0,0,O,X);let D=!1;const J=new il;let $=!1,ie=!1,ce=null;const me=new pe,Ce=new Ae,Te=new L,pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ze(){return A===null?z:1}let B=n;function vt(w,k){for(let q=0;q<w.length;q++){const U=w[q],K=t.getContext(U,k);if(K!==null)return K}return null}try{const w={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Zo}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",V,!1),t.addEventListener("webglcontextcreationerror",te,!1),B===null){const k=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&k.shift(),B=vt(k,w),B===null)throw vt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ye,Ue,Ee,Ke,Be,Pe,Xe,xt,Et,C,T,j,Q,ee,se,de,ae,Z,_e,ge,xe,he,fe,Fe;function je(){ye=new ng(B),Ue=new Z_(B,ye,e),ye.init(Ue),he=new B0(B,ye,Ue),Ee=new O0(B,ye,Ue),Ke=new sg(B),Be=new S0,Pe=new N0(B,ye,Ee,Be,Ue,he,Ke),Xe=new J_(v),xt=new tg(v),Et=new gp(B,Ue),fe=new j_(B,ye,Et,Ue),C=new ig(B,Et,Ke,fe),T=new cg(B,C,Et,Ke),_e=new lg(B,Ue,Pe),de=new $_(Be),j=new M0(v,Xe,xt,ye,Ue,fe,de),Q=new H0(v,Be),ee=new E0,se=new P0(ye,Ue),Z=new Y_(v,Xe,xt,Ee,T,f,l),ae=new F0(v,T,Ue),Fe=new W0(B,Ke,Ue,Ee),ge=new K_(B,ye,Ke,Ue),xe=new rg(B,ye,Ke,Ue),Ke.programs=j.programs,v.capabilities=Ue,v.extensions=ye,v.properties=Be,v.renderLists=ee,v.shadowMap=ae,v.state=Ee,v.info=Ke}je();const P=new G0(v,B);this.xr=P,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const w=ye.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ye.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(w){w!==void 0&&(z=w,this.setSize(O,X,!1))},this.getSize=function(w){return w.set(O,X)},this.setSize=function(w,k,q=!0){if(P.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=w,X=k,t.width=Math.floor(w*z),t.height=Math.floor(k*z),q===!0&&(t.style.width=w+"px",t.style.height=k+"px"),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(O*z,X*z).floor()},this.setDrawingBufferSize=function(w,k,q){O=w,X=k,z=q,t.width=Math.floor(w*q),t.height=Math.floor(k*q),this.setViewport(0,0,w,k)},this.getCurrentViewport=function(w){return w.copy(b)},this.getViewport=function(w){return w.copy(H)},this.setViewport=function(w,k,q,U){w.isVector4?H.set(w.x,w.y,w.z,w.w):H.set(w,k,q,U),Ee.viewport(b.copy(H).multiplyScalar(z).floor())},this.getScissor=function(w){return w.copy(le)},this.setScissor=function(w,k,q,U){w.isVector4?le.set(w.x,w.y,w.z,w.w):le.set(w,k,q,U),Ee.scissor(F.copy(le).multiplyScalar(z).floor())},this.getScissorTest=function(){return D},this.setScissorTest=function(w){Ee.setScissorTest(D=w)},this.setOpaqueSort=function(w){W=w},this.setTransparentSort=function(w){G=w},this.getClearColor=function(w){return w.copy(Z.getClearColor())},this.setClearColor=function(){Z.setClearColor.apply(Z,arguments)},this.getClearAlpha=function(){return Z.getClearAlpha()},this.setClearAlpha=function(){Z.setClearAlpha.apply(Z,arguments)},this.clear=function(w=!0,k=!0,q=!0){let U=0;if(w){let K=!1;if(A!==null){const ue=A.texture.format;K=ue===zu||ue===ku||ue===Bu}if(K){const ue=A.texture.type,ve=ue===ci||ue===ii||ue===$o||ue===Pi||ue===Ou||ue===Nu,Se=Z.getClearColor(),be=Z.getClearAlpha(),Oe=Se.r,Re=Se.g,Le=Se.b,Ze=Be.get(A).__webglFramebuffer;ve?(d[0]=Oe,d[1]=Re,d[2]=Le,d[3]=be,B.clearBufferuiv(B.COLOR,Ze,d)):(g[0]=Oe,g[1]=Re,g[2]=Le,g[3]=be,B.clearBufferiv(B.COLOR,Ze,g))}else U|=B.COLOR_BUFFER_BIT}k&&(U|=B.DEPTH_BUFFER_BIT),q&&(U|=B.STENCIL_BUFFER_BIT),B.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",V,!1),t.removeEventListener("webglcontextcreationerror",te,!1),ee.dispose(),se.dispose(),Be.dispose(),Xe.dispose(),xt.dispose(),T.dispose(),fe.dispose(),Fe.dispose(),j.dispose(),P.dispose(),P.removeEventListener("sessionstart",nt),P.removeEventListener("sessionend",Tn),ce&&(ce.dispose(),ce=null),It.stop()};function re(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function V(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=Ke.autoReset,k=ae.enabled,q=ae.autoUpdate,U=ae.needsUpdate,K=ae.type;je(),Ke.autoReset=w,ae.enabled=k,ae.autoUpdate=q,ae.needsUpdate=U,ae.type=K}function te(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function oe(w){const k=w.target;k.removeEventListener("dispose",oe),We(k)}function We(w){tt(w),Be.remove(w)}function tt(w){const k=Be.get(w).programs;k!==void 0&&(k.forEach(function(q){j.releaseProgram(q)}),w.isShaderMaterial&&j.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,q,U,K,ue){k===null&&(k=pt);const ve=K.isMesh&&K.matrixWorld.determinant()<0,Se=Af(w,k,q,U,K);Ee.setMaterial(U,ve);let be=q.index,Oe=1;U.wireframe===!0&&(be=C.getWireframeAttribute(q),Oe=2);const Re=q.drawRange,Le=q.attributes.position;let Ze=Re.start*Oe,st=(Re.start+Re.count)*Oe;ue!==null&&(Ze=Math.max(Ze,ue.start*Oe),st=Math.min(st,(ue.start+ue.count)*Oe)),be!==null?(Ze=Math.max(Ze,0),st=Math.min(st,be.count)):Le!=null&&(Ze=Math.max(Ze,0),st=Math.min(st,Le.count));const pn=st-Ze;if(pn<0||pn===1/0)return;fe.setup(K,U,Se,q,be);let Fn,ct=ge;if(be!==null&&(Fn=Et.get(be),ct=xe,ct.setIndex(Fn)),K.isMesh)U.wireframe===!0?(Ee.setLineWidth(U.wireframeLinewidth*ze()),ct.setMode(B.LINES)):ct.setMode(B.TRIANGLES);else if(K.isLine){let Ve=U.linewidth;Ve===void 0&&(Ve=1),Ee.setLineWidth(Ve*ze()),K.isLineSegments?ct.setMode(B.LINES):K.isLineLoop?ct.setMode(B.LINE_LOOP):ct.setMode(B.LINE_STRIP)}else K.isPoints?ct.setMode(B.POINTS):K.isSprite&&ct.setMode(B.TRIANGLES);if(K.isInstancedMesh)ct.renderInstances(Ze,pn,K.count);else if(q.isInstancedBufferGeometry){const Ve=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ta=Math.min(q.instanceCount,Ve);ct.renderInstances(Ze,pn,Ta)}else ct.render(Ze,pn)},this.compile=function(w,k){function q(U,K,ue){U.transparent===!0&&U.side===bn&&U.forceSinglePass===!1?(U.side=kt,U.needsUpdate=!0,vs(U,K,ue),U.side=fi,U.needsUpdate=!0,vs(U,K,ue),U.side=bn):vs(U,K,ue)}m=se.get(w),m.init(),y.push(m),w.traverseVisible(function(U){U.isLight&&U.layers.test(k.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights(v.useLegacyLights),w.traverse(function(U){const K=U.material;if(K)if(Array.isArray(K))for(let ue=0;ue<K.length;ue++){const ve=K[ue];q(ve,w,U)}else q(K,w,U)}),y.pop(),m=null};let lt=null;function gi(w){lt&&lt(w)}function nt(){It.stop()}function Tn(){It.start()}const It=new Qu;It.setAnimationLoop(gi),typeof self<"u"&&It.setContext(self),this.setAnimationLoop=function(w){lt=w,P.setAnimationLoop(w),w===null?It.stop():It.start()},P.addEventListener("sessionstart",nt),P.addEventListener("sessionend",Tn),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),P.enabled===!0&&P.isPresenting===!0&&(k=P.updateCameraXR(k)),w.isScene===!0&&w.onBeforeRender(v,w,k,A),m=se.get(w,y.length),m.init(),y.push(m),me.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),J.setFromProjectionMatrix(me),ie=this.localClippingEnabled,$=de.init(this.clippingPlanes,ie),_=ee.get(w,p.length),_.init(),p.push(_),Al(w,k,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(W,G),$===!0&&de.beginShadows();const q=m.state.shadowsArray;if(ae.render(q,w,k),$===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset(),this.info.render.frame++,Z.render(_,w),m.setupLights(v.useLegacyLights),k.isArrayCamera){const U=k.cameras;for(let K=0,ue=U.length;K<ue;K++){const ve=U[K];Rl(_,w,ve,ve.viewport)}}else Rl(_,w,k);A!==null&&(Pe.updateMultisampleRenderTarget(A),Pe.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(v,w,k),fe.resetDefaultState(),R=-1,x=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Al(w,k,q,U){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||J.intersectsSprite(w)){U&&Te.setFromMatrixPosition(w.matrixWorld).applyMatrix4(me);const ve=T.update(w),Se=w.material;Se.visible&&_.push(w,ve,Se,q,Te.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||J.intersectsObject(w))){w.isSkinnedMesh&&w.skeleton.frame!==Ke.render.frame&&(w.skeleton.update(),w.skeleton.frame=Ke.render.frame);const ve=T.update(w),Se=w.material;if(U&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Te.copy(w.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Te.copy(ve.boundingSphere.center)),Te.applyMatrix4(w.matrixWorld).applyMatrix4(me)),Array.isArray(Se)){const be=ve.groups;for(let Oe=0,Re=be.length;Oe<Re;Oe++){const Le=be[Oe],Ze=Se[Le.materialIndex];Ze&&Ze.visible&&_.push(w,ve,Ze,q,Te.z,Le)}}else Se.visible&&_.push(w,ve,Se,q,Te.z,null)}}const ue=w.children;for(let ve=0,Se=ue.length;ve<Se;ve++)Al(ue[ve],k,q,U)}function Rl(w,k,q,U){const K=w.opaque,ue=w.transmissive,ve=w.transparent;m.setupLightsView(q),$===!0&&de.setGlobalState(v.clippingPlanes,q),ue.length>0&&wf(K,ue,k,q),U&&Ee.viewport(b.copy(U)),K.length>0&&gs(K,k,q),ue.length>0&&gs(ue,k,q),ve.length>0&&gs(ve,k,q),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function wf(w,k,q,U){const K=Ue.isWebGL2;ce===null&&(ce=new hn(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?Pn:ci,minFilter:ts,samples:K&&o===!0?4:0})),v.getDrawingBufferSize(Ce),K?ce.setSize(Ce.x,Ce.y):ce.setSize(Js(Ce.x),Js(Ce.y));const ue=v.getRenderTarget();v.setRenderTarget(ce),v.getClearColor(I),N=v.getClearAlpha(),N<1&&v.setClearColor(16777215,.5),v.clear();const ve=v.toneMapping;v.toneMapping=Cn,gs(w,q,U),Pe.updateMultisampleRenderTarget(ce),Pe.updateRenderTargetMipmap(ce);let Se=!1;for(let be=0,Oe=k.length;be<Oe;be++){const Re=k[be],Le=Re.object,Ze=Re.geometry,st=Re.material,pn=Re.group;if(st.side===bn&&Le.layers.test(U.layers)){const Fn=st.side;st.side=kt,st.needsUpdate=!0,Cl(Le,q,U,Ze,st,pn),st.side=Fn,st.needsUpdate=!0,Se=!0}}Se===!0&&(Pe.updateMultisampleRenderTarget(ce),Pe.updateRenderTargetMipmap(ce)),v.setRenderTarget(ue),v.setClearColor(I,N),v.toneMapping=ve}function gs(w,k,q){const U=k.isScene===!0?k.overrideMaterial:null;for(let K=0,ue=w.length;K<ue;K++){const ve=w[K],Se=ve.object,be=ve.geometry,Oe=U===null?ve.material:U,Re=ve.group;Se.layers.test(q.layers)&&Cl(Se,k,q,be,Oe,Re)}}function Cl(w,k,q,U,K,ue){w.onBeforeRender(v,k,q,U,K,ue),w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),K.onBeforeRender(v,k,q,U,w,ue),K.transparent===!0&&K.side===bn&&K.forceSinglePass===!1?(K.side=kt,K.needsUpdate=!0,v.renderBufferDirect(q,k,U,K,w,ue),K.side=fi,K.needsUpdate=!0,v.renderBufferDirect(q,k,U,K,w,ue),K.side=bn):v.renderBufferDirect(q,k,U,K,w,ue),w.onAfterRender(v,k,q,U,K,ue)}function vs(w,k,q){k.isScene!==!0&&(k=pt);const U=Be.get(w),K=m.state.lights,ue=m.state.shadowsArray,ve=K.state.version,Se=j.getParameters(w,K.state,ue,k,q),be=j.getProgramCacheKey(Se);let Oe=U.programs;U.environment=w.isMeshStandardMaterial?k.environment:null,U.fog=k.fog,U.envMap=(w.isMeshStandardMaterial?xt:Xe).get(w.envMap||U.environment),Oe===void 0&&(w.addEventListener("dispose",oe),Oe=new Map,U.programs=Oe);let Re=Oe.get(be);if(Re!==void 0){if(U.currentProgram===Re&&U.lightsStateVersion===ve)return Pl(w,Se),Re}else Se.uniforms=j.getUniforms(w),w.onBuild(q,Se,v),w.onBeforeCompile(Se,v),Re=j.acquireProgram(Se,be),Oe.set(be,Re),U.uniforms=Se.uniforms;const Le=U.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Le.clippingPlanes=de.uniform),Pl(w,Se),U.needsLights=Cf(w),U.lightsStateVersion=ve,U.needsLights&&(Le.ambientLightColor.value=K.state.ambient,Le.lightProbe.value=K.state.probe,Le.directionalLights.value=K.state.directional,Le.directionalLightShadows.value=K.state.directionalShadow,Le.spotLights.value=K.state.spot,Le.spotLightShadows.value=K.state.spotShadow,Le.rectAreaLights.value=K.state.rectArea,Le.ltc_1.value=K.state.rectAreaLTC1,Le.ltc_2.value=K.state.rectAreaLTC2,Le.pointLights.value=K.state.point,Le.pointLightShadows.value=K.state.pointShadow,Le.hemisphereLights.value=K.state.hemi,Le.directionalShadowMap.value=K.state.directionalShadowMap,Le.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Le.spotShadowMap.value=K.state.spotShadowMap,Le.spotLightMatrix.value=K.state.spotLightMatrix,Le.spotLightMap.value=K.state.spotLightMap,Le.pointShadowMap.value=K.state.pointShadowMap,Le.pointShadowMatrix.value=K.state.pointShadowMatrix);const Ze=Re.getUniforms(),st=Hs.seqWithValue(Ze.seq,Le);return U.currentProgram=Re,U.uniformsList=st,Re}function Pl(w,k){const q=Be.get(w);q.outputColorSpace=k.outputColorSpace,q.instancing=k.instancing,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function Af(w,k,q,U,K){k.isScene!==!0&&(k=pt),Pe.resetTextureUnits();const ue=k.fog,ve=U.isMeshStandardMaterial?k.environment:null,Se=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Sn,be=(U.isMeshStandardMaterial?xt:Xe).get(U.envMap||ve),Oe=U.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Re=!!q.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),Le=!!q.morphAttributes.position,Ze=!!q.morphAttributes.normal,st=!!q.morphAttributes.color,pn=U.toneMapped?v.toneMapping:Cn,Fn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ct=Fn!==void 0?Fn.length:0,Ve=Be.get(U),Ta=m.state.lights;if($===!0&&(ie===!0||w!==x)){const Wt=w===x&&U.id===R;de.setState(U,w,Wt)}let mt=!1;U.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Ta.state.version||Ve.outputColorSpace!==Se||K.isInstancedMesh&&Ve.instancing===!1||!K.isInstancedMesh&&Ve.instancing===!0||K.isSkinnedMesh&&Ve.skinning===!1||!K.isSkinnedMesh&&Ve.skinning===!0||Ve.envMap!==be||U.fog===!0&&Ve.fog!==ue||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==de.numPlanes||Ve.numIntersection!==de.numIntersection)||Ve.vertexAlphas!==Oe||Ve.vertexTangents!==Re||Ve.morphTargets!==Le||Ve.morphNormals!==Ze||Ve.morphColors!==st||Ve.toneMapping!==pn||Ue.isWebGL2===!0&&Ve.morphTargetsCount!==ct)&&(mt=!0):(mt=!0,Ve.__version=U.version);let vi=Ve.currentProgram;mt===!0&&(vi=vs(U,k,K));let Ll=!1,Or=!1,Ea=!1;const Dt=vi.getUniforms(),xi=Ve.uniforms;if(Ee.useProgram(vi.program)&&(Ll=!0,Or=!0,Ea=!0),U.id!==R&&(R=U.id,Or=!0),Ll||x!==w){if(Dt.setValue(B,"projectionMatrix",w.projectionMatrix),Ue.logarithmicDepthBuffer&&Dt.setValue(B,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),x!==w&&(x=w,Or=!0,Ea=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const Wt=Dt.map.cameraPosition;Wt!==void 0&&Wt.setValue(B,Te.setFromMatrixPosition(w.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&Dt.setValue(B,"isOrthographic",w.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||K.isSkinnedMesh)&&Dt.setValue(B,"viewMatrix",w.matrixWorldInverse)}if(K.isSkinnedMesh){Dt.setOptional(B,K,"bindMatrix"),Dt.setOptional(B,K,"bindMatrixInverse");const Wt=K.skeleton;Wt&&(Ue.floatVertexTextures?(Wt.boneTexture===null&&Wt.computeBoneTexture(),Dt.setValue(B,"boneTexture",Wt.boneTexture,Pe),Dt.setValue(B,"boneTextureSize",Wt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ba=q.morphAttributes;if((ba.position!==void 0||ba.normal!==void 0||ba.color!==void 0&&Ue.isWebGL2===!0)&&_e.update(K,q,vi),(Or||Ve.receiveShadow!==K.receiveShadow)&&(Ve.receiveShadow=K.receiveShadow,Dt.setValue(B,"receiveShadow",K.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(xi.envMap.value=be,xi.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),Or&&(Dt.setValue(B,"toneMappingExposure",v.toneMappingExposure),Ve.needsLights&&Rf(xi,Ea),ue&&U.fog===!0&&Q.refreshFogUniforms(xi,ue),Q.refreshMaterialUniforms(xi,U,z,X,ce),Hs.upload(B,Ve.uniformsList,xi,Pe)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(Hs.upload(B,Ve.uniformsList,xi,Pe),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&Dt.setValue(B,"center",K.center),Dt.setValue(B,"modelViewMatrix",K.modelViewMatrix),Dt.setValue(B,"normalMatrix",K.normalMatrix),Dt.setValue(B,"modelMatrix",K.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const Wt=U.uniformsGroups;for(let wa=0,Pf=Wt.length;wa<Pf;wa++)if(Ue.isWebGL2){const Il=Wt[wa];Fe.update(Il,vi),Fe.bind(Il,vi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return vi}function Rf(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function Cf(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,k,q){Be.get(w.texture).__webglTexture=k,Be.get(w.depthTexture).__webglTexture=q;const U=Be.get(w);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=q===void 0,U.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,k){const q=Be.get(w);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(w,k=0,q=0){A=w,M=k,E=q;let U=!0,K=null,ue=!1,ve=!1;if(w){const be=Be.get(w);be.__useDefaultFramebuffer!==void 0?(Ee.bindFramebuffer(B.FRAMEBUFFER,null),U=!1):be.__webglFramebuffer===void 0?Pe.setupRenderTarget(w):be.__hasExternalTextures&&Pe.rebindTextures(w,Be.get(w.texture).__webglTexture,Be.get(w.depthTexture).__webglTexture);const Oe=w.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(ve=!0);const Re=Be.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(K=Re[k],ue=!0):Ue.isWebGL2&&w.samples>0&&Pe.useMultisampledRTT(w)===!1?K=Be.get(w).__webglMultisampledFramebuffer:K=Re,b.copy(w.viewport),F.copy(w.scissor),Y=w.scissorTest}else b.copy(H).multiplyScalar(z).floor(),F.copy(le).multiplyScalar(z).floor(),Y=D;if(Ee.bindFramebuffer(B.FRAMEBUFFER,K)&&Ue.drawBuffers&&U&&Ee.drawBuffers(w,K),Ee.viewport(b),Ee.scissor(F),Ee.setScissorTest(Y),ue){const be=Be.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+k,be.__webglTexture,q)}else if(ve){const be=Be.get(w.texture),Oe=k||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,be.__webglTexture,q||0,Oe)}R=-1},this.readRenderTargetPixels=function(w,k,q,U,K,ue,ve){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Be.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ve!==void 0&&(Se=Se[ve]),Se){Ee.bindFramebuffer(B.FRAMEBUFFER,Se);try{const be=w.texture,Oe=be.format,Re=be.type;if(Oe!==rn&&he.convert(Oe)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Le=Re===Pn&&(ye.has("EXT_color_buffer_half_float")||Ue.isWebGL2&&ye.has("EXT_color_buffer_float"));if(Re!==ci&&he.convert(Re)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Re===qn&&(Ue.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!Le){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-U&&q>=0&&q<=w.height-K&&B.readPixels(k,q,U,K,he.convert(Oe),he.convert(Re),ue)}finally{const be=A!==null?Be.get(A).__webglFramebuffer:null;Ee.bindFramebuffer(B.FRAMEBUFFER,be)}}},this.copyFramebufferToTexture=function(w,k,q=0){const U=Math.pow(2,-q),K=Math.floor(k.image.width*U),ue=Math.floor(k.image.height*U);Pe.setTexture2D(k,0),B.copyTexSubImage2D(B.TEXTURE_2D,q,0,0,w.x,w.y,K,ue),Ee.unbindTexture()},this.copyTextureToTexture=function(w,k,q,U=0){const K=k.image.width,ue=k.image.height,ve=he.convert(q.format),Se=he.convert(q.type);Pe.setTexture2D(q,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,q.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,q.unpackAlignment),k.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,U,w.x,w.y,K,ue,ve,Se,k.image.data):k.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,U,w.x,w.y,k.mipmaps[0].width,k.mipmaps[0].height,ve,k.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,U,w.x,w.y,ve,Se,k.image),U===0&&q.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),Ee.unbindTexture()},this.copyTextureToTexture3D=function(w,k,q,U,K=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ue=w.max.x-w.min.x+1,ve=w.max.y-w.min.y+1,Se=w.max.z-w.min.z+1,be=he.convert(U.format),Oe=he.convert(U.type);let Re;if(U.isData3DTexture)Pe.setTexture3D(U,0),Re=B.TEXTURE_3D;else if(U.isDataArrayTexture)Pe.setTexture2DArray(U,0),Re=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,U.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,U.unpackAlignment);const Le=B.getParameter(B.UNPACK_ROW_LENGTH),Ze=B.getParameter(B.UNPACK_IMAGE_HEIGHT),st=B.getParameter(B.UNPACK_SKIP_PIXELS),pn=B.getParameter(B.UNPACK_SKIP_ROWS),Fn=B.getParameter(B.UNPACK_SKIP_IMAGES),ct=q.isCompressedTexture?q.mipmaps[0]:q.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,ct.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ct.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,w.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,w.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,w.min.z),q.isDataTexture||q.isData3DTexture?B.texSubImage3D(Re,K,k.x,k.y,k.z,ue,ve,Se,be,Oe,ct.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Re,K,k.x,k.y,k.z,ue,ve,Se,be,ct.data)):B.texSubImage3D(Re,K,k.x,k.y,k.z,ue,ve,Se,be,Oe,ct),B.pixelStorei(B.UNPACK_ROW_LENGTH,Le),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ze),B.pixelStorei(B.UNPACK_SKIP_PIXELS,st),B.pixelStorei(B.UNPACK_SKIP_ROWS,pn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Fn),K===0&&U.generateMipmaps&&B.generateMipmap(Re),Ee.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?Pe.setTextureCube(w,0):w.isData3DTexture?Pe.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Pe.setTexture2DArray(w,0):Pe.setTexture2D(w,0),Ee.unbindTexture()},this.resetState=function(){M=0,E=0,A=null,Ee.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===we?Ii:Vu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ii?we:Sn}}class q0 extends rh{}q0.prototype.isWebGL1Renderer=!0;class Y0 extends et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}const jc=new L,Kc=new He,Zc=new He,j0=new L,$c=new pe,rr=new L,no=new Lr,Jc=new pe,io=new ha;class K0 extends on{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new pe,this.bindMatrixInverse=new pe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Pr),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)rr.fromBufferAttribute(t,n),this.applyBoneTransform(n,rr),this.boundingBox.expandByPoint(rr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Lr),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)rr.fromBufferAttribute(t,n),this.applyBoneTransform(n,rr),this.boundingSphere.expandByPoint(rr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),no.copy(this.boundingSphere),no.applyMatrix4(i),e.ray.intersectsSphere(no)!==!1&&(Jc.copy(i).invert(),io.copy(e.ray).applyMatrix4(Jc),!(this.boundingBox!==null&&io.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,io)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new He,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Kc.fromBufferAttribute(i.attributes.skinIndex,e),Zc.fromBufferAttribute(i.attributes.skinWeight,e),jc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Zc.getComponent(r);if(a!==0){const o=Kc.getComponent(r);$c.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(j0.copy(jc).applyMatrix4($c),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class Co extends et{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Z0 extends Tt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=yt,u=yt,h,f){super(null,a,o,l,c,u,i,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Qc=new pe,$0=new pe;class sl{constructor(e=[],t=[]){this.uuid=mi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new pe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new pe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:$0;Qc.multiplyMatrices(o,t[r]),Qc.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new sl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Hu(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Z0(t,e,e,rn,qn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Co),this.bones.push(a),this.boneInverses.push(new pe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class sh extends zi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const eu=new L,tu=new L,nu=new pe,ro=new ha,ks=new Lr;class J0 extends et{constructor(e=new fn,t=new sh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)eu.fromBufferAttribute(t,i-1),tu.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=eu.distanceTo(tu);e.setAttribute("lineDistance",new At(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ks.copy(n.boundingSphere),ks.applyMatrix4(i),ks.radius+=r,e.ray.intersectsSphere(ks)===!1)return;nu.copy(i).invert(),ro.copy(e.ray).applyMatrix4(nu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new L,u=new L,h=new L,f=new L,d=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const p=Math.max(0,a.start),y=Math.min(g.count,a.start+a.count);for(let v=p,S=y-1;v<S;v+=d){const M=g.getX(v),E=g.getX(v+1);if(c.fromBufferAttribute(m,M),u.fromBufferAttribute(m,E),ro.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(f);R<e.near||R>e.far||t.push({distance:R,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,a.start),y=Math.min(m.count,a.start+a.count);for(let v=p,S=y-1;v<S;v+=d){if(c.fromBufferAttribute(m,v),u.fromBufferAttribute(m,v+1),ro.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(f);E<e.near||E>e.far||t.push({distance:E,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}class Q0{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const u=n[i],f=n[i+1]-u,d=(a-u)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new Ae:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new L,i=[],r=[],a=[],o=new L,l=new pe;for(let d=0;d<=e;d++){const g=d/e;i[d]=this.getTangentAt(g,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Mt(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(Mt(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class so extends zi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Me(16777215),this.specular=new Me(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qo,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ca,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ev extends zi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qo,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ca,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function ei(s,e,t){return ah(s)?new s.constructor(s.subarray(e,t!==void 0?t:s.length)):s.slice(e,t)}function zs(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function ah(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function tv(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function iu(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function oh(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class _a{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class nv extends _a{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lr,endingEnd:lr}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case cr:r=e,o=2*t-n;break;case Zs:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case cr:a=e,l=2*n-t;break;case Zs:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,y=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,v=(-1-d)*m+(1.5+d)*_+.5*g,S=d*m-d*_;for(let M=0;M!==o;++M)r[M]=p*a[u+M]+y*a[c+M]+v*a[l+M]+S*a[h+M];return r}}class lh extends _a{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==o;++f)r[f]=a[c+f]*h+a[l+f]*u;return r}}class iv extends _a{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Un{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=zs(t,this.TimeBufferType),this.values=zs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:zs(e.times,Array),values:zs(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new iv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new lh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new nv(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case js:t=this.InterpolantFactoryMethodDiscrete;break;case Ks:t=this.InterpolantFactoryMethodLinear;break;case Da:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return js;case this.InterpolantFactoryMethodLinear:return Ks;case this.InterpolantFactoryMethodSmooth:return Da}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=ei(n,r,a),this.values=ei(this.values,r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&ah(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=ei(this.times),t=ei(this.values),n=this.getValueSize(),i=this.getInterpolation()===Da,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{const h=o*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[f+g]||_!==t[d+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=ei(e,0,a),this.values=ei(t,0,a*n)):(this.times=e,this.values=t),this}clone(){const e=ei(this.times,0),t=ei(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Un.prototype.TimeBufferType=Float32Array;Un.prototype.ValueBufferType=Float32Array;Un.prototype.DefaultInterpolation=Ks;class Dr extends Un{}Dr.prototype.ValueTypeName="bool";Dr.prototype.ValueBufferType=Array;Dr.prototype.DefaultInterpolation=js;Dr.prototype.InterpolantFactoryMethodLinear=void 0;Dr.prototype.InterpolantFactoryMethodSmooth=void 0;class ch extends Un{}ch.prototype.ValueTypeName="color";class rs extends Un{}rs.prototype.ValueTypeName="number";class rv extends _a{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let u=c+o;c!==u;c+=4)Zt.slerpFlat(r,0,a,c-o,a,c,l);return r}}class Ur extends Un{InterpolantFactoryMethodLinear(e){return new rv(this.times,this.values,this.getValueSize(),e)}}Ur.prototype.ValueTypeName="quaternion";Ur.prototype.DefaultInterpolation=Ks;Ur.prototype.InterpolantFactoryMethodSmooth=void 0;class Fr extends Un{}Fr.prototype.ValueTypeName="string";Fr.prototype.ValueBufferType=Array;Fr.prototype.DefaultInterpolation=js;Fr.prototype.InterpolantFactoryMethodLinear=void 0;Fr.prototype.InterpolantFactoryMethodSmooth=void 0;class ss extends Un{}ss.prototype.ValueTypeName="vector";class Po{constructor(e,t=-1,n,i=Jo){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=mi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(av(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Un.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=tv(l);l=iu(l,1,u),c=iu(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new rs(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,g,_){if(d.length!==0){const m=[],p=[];oh(d,m,p,g),m.length!==0&&_.push(new h(f,m,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(const _ in d){const m=[],p=[];for(let y=0;y!==f[g].morphTargets.length;++y){const v=f[g];m.push(v.time),p.push(v.morphTarget===_?1:0)}i.push(new rs(".morphTargetInfluence["+_+"]",m,p))}l=d.length*a}else{const d=".bones["+t[h].name+"]";n(ss,d+".position",f,"pos",i),n(Ur,d+".quaternion",f,"rot",i),n(ss,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function sv(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return rs;case"vector":case"vector2":case"vector3":case"vector4":return ss;case"color":return ch;case"quaternion":return Ur;case"bool":case"boolean":return Dr;case"string":return Fr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function av(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=sv(s.type);if(s.times===void 0){const t=[],n=[];oh(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Qs={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class uh{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const ov=new uh;class ga{constructor(e){this.manager=e!==void 0?e:ov,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Gn={};class lv extends Error{constructor(e,t){super(e),this.response=t}}class cv extends ga{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Qs.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Gn[e]!==void 0){Gn[e].push({onLoad:t,onProgress:n,onError:i});return}Gn[e]=[],Gn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Gn[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=f?parseInt(f):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){y();function y(){h.read().then(({done:v,value:S})=>{if(v)p.close();else{_+=S.byteLength;const M=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let E=0,A=u.length;E<A;E++){const R=u[E];R.onProgress&&R.onProgress(M)}p.enqueue(S),y()}})}}});return new Response(m)}else throw new lv(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Qs.add(e,c);const u=Gn[e];delete Gn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Gn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Gn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class uv extends ga{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Qs.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=ns("img");function l(){u(),Qs.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class hv extends ga{constructor(e){super(e)}load(e,t,n,i){const r=new Tt,a=new uv(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class va extends et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ao=new pe,ru=new L,su=new L;class al{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new il,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new He(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ru.setFromMatrixPosition(e.matrixWorld),t.position.copy(ru),su.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(su),t.updateMatrixWorld(),ao.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ao),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ao)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class fv extends al{constructor(){super(new Rt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Sr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class dv extends va{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(et.DEFAULT_UP),this.updateMatrix(),this.target=new et,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new fv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const au=new pe,Vr=new L,oo=new L;class pv extends al{constructor(){super(new Rt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ae(4,2),this._viewportCount=6,this._viewports=[new He(2,1,1,1),new He(0,1,1,1),new He(3,1,1,1),new He(1,1,1,1),new He(3,0,1,1),new He(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Vr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Vr),oo.copy(n.position),oo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(oo),n.updateMatrixWorld(),i.makeTranslation(-Vr.x,-Vr.y,-Vr.z),au.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(au)}}class ou extends va{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new pv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class mv extends al{constructor(){super(new pa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _v extends va{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(et.DEFAULT_UP),this.updateMatrix(),this.target=new et,this.shadow=new mv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class gv extends va{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class vv{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class hh{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=lu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=lu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function lu(){return(typeof performance>"u"?Date:performance).now()}class xv{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){Zt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const a=this._workIndex*r;Zt.multiplyQuaternionsFlat(e,a,e,t,e,n),Zt.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){const a=1-i;for(let o=0;o!==r;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const ol="\\[\\]\\.:\\/",yv=new RegExp("["+ol+"]","g"),ll="[^"+ol+"]",Mv="[^"+ol.replace("\\.","")+"]",Sv=/((?:WC+[\/:])*)/.source.replace("WC",ll),Tv=/(WCOD+)?/.source.replace("WCOD",Mv),Ev=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ll),bv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ll),wv=new RegExp("^"+Sv+Tv+Ev+bv+"$"),Av=["material","materials","bones","map"];class Rv{constructor(e,t,n){const i=n||Ge.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ge{constructor(e,t,n){this.path=t,this.parsedPath=n||Ge.parseTrackName(t),this.node=Ge.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ge.Composite(e,t,n):new Ge(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(yv,"")}static parseTrackName(e){const t=wv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Av.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Ge.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ge.Composite=Rv;Ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ge.prototype.GetterByBindingType=[Ge.prototype._getValue_direct,Ge.prototype._getValue_array,Ge.prototype._getValue_arrayElement,Ge.prototype._getValue_toArray];Ge.prototype.SetterByBindingTypeAndVersioning=[[Ge.prototype._setValue_direct,Ge.prototype._setValue_direct_setNeedsUpdate,Ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_array,Ge.prototype._setValue_array_setNeedsUpdate,Ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_arrayElement,Ge.prototype._setValue_arrayElement_setNeedsUpdate,Ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_fromArray,Ge.prototype._setValue_fromArray_setNeedsUpdate,Ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Cv{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,a=r.length,o=new Array(a),l={endingStart:lr,endingEnd:lr};for(let c=0;c!==a;++c){const u=r[c].createInterpolant(null);o[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=gd,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case xd:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(a),c[u].accumulateAdditive(o);break;case Jo:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(a),c[u].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const a=n===vd;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===_d){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=cr,i.endingEnd=cr):(e?i.endingStart=this.zeroSlopeAtStart?cr:lr:i.endingStart=Zs,t?i.endingEnd=this.zeroSlopeAtEnd?cr:lr:i.endingEnd=Zs)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}}const Pv=new Float32Array(1);class Lv extends ki{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==r;++h){const f=i[h],d=f.name;let g=u[d];if(g!==void 0)++g.referenceCount,a[h]=g;else{if(g=a[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,d));continue}const _=t&&t._propertyBindings[h].binding.parsedPath;g=new xv(Ge.create(n,d,_),f.ValueTypeName,f.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,d),a[h]=g}o[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const h=o.actionByRoot,f=(e._localRoot||this._root).uuid;delete h[f],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new lh(new Float32Array(2),new Float32Array(2),1,Pv),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let a=typeof e=="string"?Po.findByName(i,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Jo),l!==void 0){const h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const u=new Cv(this,a,t,n);return this._bindAction(u,c),this._addInactiveAction(u,o,r),u}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?Po.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class Iv{constructor(e,t,n=0,i=1/0){this.ray=new ha(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new tl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Lo(e,this,n,t),n.sort(cu),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Lo(e[i],this,n,t);return n.sort(cu),n}}function cu(s,e){return s.distance-e.distance}function Lo(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,a=i.length;r<a;r++)Lo(i[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zo);class xa extends on{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.camera=new Rt;const n=this,i=t.color!==void 0?new Me(t.color):new Me(8355711),r=t.textureWidth||512,a=t.textureHeight||512,o=t.clipBias||0,l=t.shader||xa.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,u=new ni,h=new L,f=new L,d=new L,g=new pe,_=new L(0,0,-1),m=new He,p=new L,y=new L,v=new He,S=new pe,M=this.camera,E=new hn(r,a,{samples:c,type:Pn}),A=new Bt({name:l.name!==void 0?l.name:"unspecified",uniforms:is.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});A.uniforms.tDiffuse.value=E.texture,A.uniforms.color.value=i,A.uniforms.textureMatrix.value=S,this.material=A,this.onBeforeRender=function(R,x,b){if(f.setFromMatrixPosition(n.matrixWorld),d.setFromMatrixPosition(b.matrixWorld),g.extractRotation(n.matrixWorld),h.set(0,0,1),h.applyMatrix4(g),p.subVectors(f,d),p.dot(h)>0)return;p.reflect(h).negate(),p.add(f),g.extractRotation(b.matrixWorld),_.set(0,0,-1),_.applyMatrix4(g),_.add(d),y.subVectors(f,_),y.reflect(h).negate(),y.add(f),M.position.copy(p),M.up.set(0,1,0),M.up.applyMatrix4(g),M.up.reflect(h),M.lookAt(y),M.far=b.far,M.updateMatrixWorld(),M.projectionMatrix.copy(b.projectionMatrix),S.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),S.multiply(M.projectionMatrix),S.multiply(M.matrixWorldInverse),S.multiply(n.matrixWorld),u.setFromNormalAndCoplanarPoint(h,f),u.applyMatrix4(M.matrixWorldInverse),m.set(u.normal.x,u.normal.y,u.normal.z,u.constant);const F=M.projectionMatrix;v.x=(Math.sign(m.x)+F.elements[8])/F.elements[0],v.y=(Math.sign(m.y)+F.elements[9])/F.elements[5],v.z=-1,v.w=(1+F.elements[10])/F.elements[14],m.multiplyScalar(2/m.dot(v)),F.elements[2]=m.x,F.elements[6]=m.y,F.elements[10]=m.z+1-o,F.elements[14]=m.w,n.visible=!1;const Y=R.getRenderTarget(),I=R.xr.enabled,N=R.shadowMap.autoUpdate,O=R.outputColorSpace,X=R.toneMapping;R.xr.enabled=!1,R.shadowMap.autoUpdate=!1,R.outputColorSpace=Sn,R.toneMapping=Cn,R.setRenderTarget(E),R.state.buffers.depth.setMask(!0),R.autoClear===!1&&R.clear(),R.render(x,M),R.xr.enabled=I,R.shadowMap.autoUpdate=N,R.outputColorSpace=O,R.toneMapping=X,R.setRenderTarget(Y);const z=b.viewport;z!==void 0&&R.state.viewport(z),n.visible=!0},this.getRenderTarget=function(){return E},this.dispose=function(){E.dispose(),n.material.dispose()}}}xa.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <encodings_fragment>

		}`};/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/var uu=function(s){return URL.createObjectURL(new Blob([s],{type:"text/javascript"}))};try{URL.revokeObjectURL(uu(""))}catch{uu=function(e){return"data:application/javascript;charset=UTF-8,"+encodeURI(e)}}var sn=Uint8Array,ri=Uint16Array,Io=Uint32Array,fh=new sn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),dh=new sn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Dv=new sn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),ph=function(s,e){for(var t=new ri(31),n=0;n<31;++n)t[n]=e+=1<<s[n-1];for(var i=new Io(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)i[r]=r-t[n]<<5|n;return[t,i]},mh=ph(fh,2),_h=mh[0],Uv=mh[1];_h[28]=258,Uv[258]=28;var Fv=ph(dh,0),Ov=Fv[0],Do=new ri(32768);for(var $e=0;$e<32768;++$e){var ti=($e&43690)>>>1|($e&21845)<<1;ti=(ti&52428)>>>2|(ti&13107)<<2,ti=(ti&61680)>>>4|(ti&3855)<<4,Do[$e]=((ti&65280)>>>8|(ti&255)<<8)>>>1}var Zr=function(s,e,t){for(var n=s.length,i=0,r=new ri(e);i<n;++i)++r[s[i]-1];var a=new ri(e);for(i=0;i<e;++i)a[i]=a[i-1]+r[i-1]<<1;var o;if(t){o=new ri(1<<e);var l=15-e;for(i=0;i<n;++i)if(s[i])for(var c=i<<4|s[i],u=e-s[i],h=a[s[i]-1]++<<u,f=h|(1<<u)-1;h<=f;++h)o[Do[h]>>>l]=c}else for(o=new ri(n),i=0;i<n;++i)s[i]&&(o[i]=Do[a[s[i]-1]++]>>>15-s[i]);return o},ps=new sn(288);for(var $e=0;$e<144;++$e)ps[$e]=8;for(var $e=144;$e<256;++$e)ps[$e]=9;for(var $e=256;$e<280;++$e)ps[$e]=7;for(var $e=280;$e<288;++$e)ps[$e]=8;var gh=new sn(32);for(var $e=0;$e<32;++$e)gh[$e]=5;var Nv=Zr(ps,9,1),Bv=Zr(gh,5,1),lo=function(s){for(var e=s[0],t=1;t<s.length;++t)s[t]>e&&(e=s[t]);return e},xn=function(s,e,t){var n=e/8|0;return(s[n]|s[n+1]<<8)>>(e&7)&t},co=function(s,e){var t=e/8|0;return(s[t]|s[t+1]<<8|s[t+2]<<16)>>(e&7)},kv=function(s){return(s/8|0)+(s&7&&1)},zv=function(s,e,t){(e==null||e<0)&&(e=0),(t==null||t>s.length)&&(t=s.length);var n=new(s instanceof ri?ri:s instanceof Io?Io:sn)(t-e);return n.set(s.subarray(e,t)),n},Vv=function(s,e,t){var n=s.length;if(!n||t&&!t.l&&n<5)return e||new sn(0);var i=!e||t,r=!t||t.i;t||(t={}),e||(e=new sn(n*3));var a=function(ce){var me=e.length;if(ce>me){var Ce=new sn(Math.max(me*2,ce));Ce.set(e),e=Ce}},o=t.f||0,l=t.p||0,c=t.b||0,u=t.l,h=t.d,f=t.m,d=t.n,g=n*8;do{if(!u){t.f=o=xn(s,l,1);var _=xn(s,l+1,3);if(l+=3,_)if(_==1)u=Nv,h=Bv,f=9,d=5;else if(_==2){var v=xn(s,l,31)+257,S=xn(s,l+10,15)+4,M=v+xn(s,l+5,31)+1;l+=14;for(var E=new sn(M),A=new sn(19),R=0;R<S;++R)A[Dv[R]]=xn(s,l+R*3,7);l+=S*3;for(var x=lo(A),b=(1<<x)-1,F=Zr(A,x,1),R=0;R<M;){var Y=F[xn(s,l,b)];l+=Y&15;var m=Y>>>4;if(m<16)E[R++]=m;else{var I=0,N=0;for(m==16?(N=3+xn(s,l,3),l+=2,I=E[R-1]):m==17?(N=3+xn(s,l,7),l+=3):m==18&&(N=11+xn(s,l,127),l+=7);N--;)E[R++]=I}}var O=E.subarray(0,v),X=E.subarray(v);f=lo(O),d=lo(X),u=Zr(O,f,1),h=Zr(X,d,1)}else throw"invalid block type";else{var m=kv(l)+4,p=s[m-4]|s[m-3]<<8,y=m+p;if(y>n){if(r)throw"unexpected EOF";break}i&&a(c+p),e.set(s.subarray(m,y),c),t.b=c+=p,t.p=l=y*8;continue}if(l>g){if(r)throw"unexpected EOF";break}}i&&a(c+131072);for(var z=(1<<f)-1,W=(1<<d)-1,G=l;;G=l){var I=u[co(s,l)&z],H=I>>>4;if(l+=I&15,l>g){if(r)throw"unexpected EOF";break}if(!I)throw"invalid length/literal";if(H<256)e[c++]=H;else if(H==256){G=l,u=null;break}else{var le=H-254;if(H>264){var R=H-257,D=fh[R];le=xn(s,l,(1<<D)-1)+_h[R],l+=D}var J=h[co(s,l)&W],$=J>>>4;if(!J)throw"invalid distance";l+=J&15;var X=Ov[$];if($>3){var D=dh[$];X+=co(s,l)&(1<<D)-1,l+=D}if(l>g){if(r)throw"unexpected EOF";break}i&&a(c+131072);for(var ie=c+le;c<ie;c+=4)e[c]=e[c-X],e[c+1]=e[c+1-X],e[c+2]=e[c+2-X],e[c+3]=e[c+3-X];c=ie}}t.l=u,t.p=G,t.b=c,u&&(o=1,t.m=f,t.d=h,t.n=d)}while(!o);return c==e.length?e:zv(e,0,c)},Gv=new sn(0),Hv=function(s){if((s[0]&15)!=8||s[0]>>>4>7||(s[0]<<8|s[1])%31)throw"invalid zlib data";if(s[1]&32)throw"invalid zlib data: preset dictionaries not supported"};function Wv(s,e){return Vv((Hv(s),s.subarray(2,-4)),e)}var Xv=typeof TextDecoder<"u"&&new TextDecoder,qv=0;try{Xv.decode(Gv,{stream:!0}),qv=1}catch{}function vh(s,e,t){const n=t.length-s-1;if(e>=t[n])return n-1;if(e<=t[s])return s;let i=s,r=n,a=Math.floor((i+r)/2);for(;e<t[a]||e>=t[a+1];)e<t[a]?r=a:i=a,a=Math.floor((i+r)/2);return a}function Yv(s,e,t,n){const i=[],r=[],a=[];i[0]=1;for(let o=1;o<=t;++o){r[o]=e-n[s+1-o],a[o]=n[s+o]-e;let l=0;for(let c=0;c<o;++c){const u=a[c+1],h=r[o-c],f=i[c]/(u+h);i[c]=l+u*f,l=h*f}i[o]=l}return i}function jv(s,e,t,n){const i=vh(s,n,e),r=Yv(i,n,s,e),a=new He(0,0,0,0);for(let o=0;o<=s;++o){const l=t[i-s+o],c=r[o],u=l.w*c;a.x+=l.x*u,a.y+=l.y*u,a.z+=l.z*u,a.w+=l.w*c}return a}function Kv(s,e,t,n,i){const r=[];for(let h=0;h<=t;++h)r[h]=0;const a=[];for(let h=0;h<=n;++h)a[h]=r.slice(0);const o=[];for(let h=0;h<=t;++h)o[h]=r.slice(0);o[0][0]=1;const l=r.slice(0),c=r.slice(0);for(let h=1;h<=t;++h){l[h]=e-i[s+1-h],c[h]=i[s+h]-e;let f=0;for(let d=0;d<h;++d){const g=c[d+1],_=l[h-d];o[h][d]=g+_;const m=o[d][h-1]/o[h][d];o[d][h]=f+g*m,f=_*m}o[h][h]=f}for(let h=0;h<=t;++h)a[0][h]=o[h][t];for(let h=0;h<=t;++h){let f=0,d=1;const g=[];for(let _=0;_<=t;++_)g[_]=r.slice(0);g[0][0]=1;for(let _=1;_<=n;++_){let m=0;const p=h-_,y=t-_;h>=_&&(g[d][0]=g[f][0]/o[y+1][p],m=g[d][0]*o[p][y]);const v=p>=-1?1:-p,S=h-1<=y?_-1:t-h;for(let E=v;E<=S;++E)g[d][E]=(g[f][E]-g[f][E-1])/o[y+1][p+E],m+=g[d][E]*o[p+E][y];h<=y&&(g[d][_]=-g[f][_-1]/o[y+1][h],m+=g[d][_]*o[h][y]),a[_][h]=m;const M=f;f=d,d=M}}let u=t;for(let h=1;h<=n;++h){for(let f=0;f<=t;++f)a[h][f]*=u;u*=t-h}return a}function Zv(s,e,t,n,i){const r=i<s?i:s,a=[],o=vh(s,n,e),l=Kv(o,n,s,r,e),c=[];for(let u=0;u<t.length;++u){const h=t[u].clone(),f=h.w;h.x*=f,h.y*=f,h.z*=f,c[u]=h}for(let u=0;u<=r;++u){const h=c[o-s].clone().multiplyScalar(l[u][0]);for(let f=1;f<=s;++f)h.add(c[o-s+f].clone().multiplyScalar(l[u][f]));a[u]=h}for(let u=r+1;u<=i+1;++u)a[u]=new He(0,0,0);return a}function $v(s,e){let t=1;for(let i=2;i<=s;++i)t*=i;let n=1;for(let i=2;i<=e;++i)n*=i;for(let i=2;i<=s-e;++i)n*=i;return t/n}function Jv(s){const e=s.length,t=[],n=[];for(let r=0;r<e;++r){const a=s[r];t[r]=new L(a.x,a.y,a.z),n[r]=a.w}const i=[];for(let r=0;r<e;++r){const a=t[r].clone();for(let o=1;o<=r;++o)a.sub(i[r-o].clone().multiplyScalar($v(r,o)*n[o]));i[r]=a.divideScalar(n[0])}return i}function Qv(s,e,t,n,i){const r=Zv(s,e,t,n,i);return Jv(r)}class ex extends Q0{constructor(e,t,n,i,r){super(),this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=i||0,this.endKnot=r||this.knots.length-1;for(let a=0;a<n.length;++a){const o=n[a];this.controlPoints[a]=new He(o.x,o.y,o.z,o.w)}}getPoint(e,t=new L){const n=t,i=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),r=jv(this.degree,this.knots,this.controlPoints,i);return r.w!==1&&r.divideScalar(r.w),n.set(r.x,r.y,r.z)}getTangent(e,t=new L){const n=t,i=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),r=Qv(this.degree,this.knots,this.controlPoints,i,1);return n.copy(r[1]).normalize(),n}}let Ne,at,Ot;class tx extends ga{constructor(e){super(e)}load(e,t,n,i){const r=this,a=r.path===""?vv.extractUrlBase(e):r.path,o=new cv(this.manager);o.setPath(r.path),o.setResponseType("arraybuffer"),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(l){try{t(r.parse(l,a))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e,t){if(ox(e))Ne=new ax().parse(e);else{const i=Sh(e);if(!lx(i))throw new Error("THREE.FBXLoader: Unknown format.");if(fu(i)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+fu(i));Ne=new sx().parse(i)}const n=new hv(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new nx(n,this.manager).parse(Ne)}}class nx{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){at=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),n=this.parseMaterials(t),i=this.parseDeformers(),r=new ix().parse(i);return this.parseScene(i,r,n),Ot}parseConnections(){const e=new Map;return"Connections"in Ne&&Ne.Connections.connections.forEach(function(n){const i=n[0],r=n[1],a=n[2];e.has(i)||e.set(i,{parents:[],children:[]});const o={ID:r,relationship:a};e.get(i).parents.push(o),e.has(r)||e.set(r,{parents:[],children:[]});const l={ID:i,relationship:a};e.get(r).children.push(l)}),e}parseImages(){const e={},t={};if("Video"in Ne.Objects){const n=Ne.Objects.Video;for(const i in n){const r=n[i],a=parseInt(i);if(e[a]=r.RelativeFilename||r.Filename,"Content"in r){const o=r.Content instanceof ArrayBuffer&&r.Content.byteLength>0,l=typeof r.Content=="string"&&r.Content!=="";if(o||l){const c=this.parseImage(n[i]);t[r.RelativeFilename||r.Filename]=c}}}}for(const n in e){const i=e[n];t[i]!==void 0?e[n]=t[i]:e[n]=e[n].split("\\").pop()}return e}parseImage(e){const t=e.Content,n=e.RelativeFilename||e.Filename,i=n.slice(n.lastIndexOf(".")+1).toLowerCase();let r;switch(i){case"bmp":r="image/bmp";break;case"jpg":case"jpeg":r="image/jpeg";break;case"png":r="image/png";break;case"tif":r="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),r="image/tga";break;default:console.warn('FBXLoader: Image type "'+i+'" is not supported.');return}if(typeof t=="string")return"data:"+r+";base64,"+t;{const a=new Uint8Array(t);return window.URL.createObjectURL(new Blob([a],{type:r}))}}parseTextures(e){const t=new Map;if("Texture"in Ne.Objects){const n=Ne.Objects.Texture;for(const i in n){const r=this.parseTexture(n[i],e);t.set(parseInt(i),r)}}return t}parseTexture(e,t){const n=this.loadTexture(e,t);n.ID=e.id,n.name=e.attrName;const i=e.WrapModeU,r=e.WrapModeV,a=i!==void 0?i.value:0,o=r!==void 0?r.value:0;if(n.wrapS=a===0?es:jt,n.wrapT=o===0?es:jt,"Scaling"in e){const l=e.Scaling.value;n.repeat.x=l[0],n.repeat.y=l[1]}if("Translation"in e){const l=e.Translation.value;n.offset.x=l[0],n.offset.y=l[1]}return n}loadTexture(e,t){let n;const i=this.textureLoader.path,r=at.get(e.id).children;r!==void 0&&r.length>0&&t[r[0].ID]!==void 0&&(n=t[r[0].ID],(n.indexOf("blob:")===0||n.indexOf("data:")===0)&&this.textureLoader.setPath(void 0));let a;const o=e.FileName.slice(-3).toLowerCase();if(o==="tga"){const l=this.manager.getHandler(".tga");l===null?(console.warn("FBXLoader: TGA loader not found, creating placeholder texture for",e.RelativeFilename),a=new Tt):(l.setPath(this.textureLoader.path),a=l.load(n))}else o==="psd"?(console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for",e.RelativeFilename),a=new Tt):a=this.textureLoader.load(n);return this.textureLoader.setPath(i),a}parseMaterials(e){const t=new Map;if("Material"in Ne.Objects){const n=Ne.Objects.Material;for(const i in n){const r=this.parseMaterial(n[i],e);r!==null&&t.set(parseInt(i),r)}}return t}parseMaterial(e,t){const n=e.id,i=e.attrName;let r=e.ShadingModel;if(typeof r=="object"&&(r=r.value),!at.has(n))return null;const a=this.parseParameters(e,t,n);let o;switch(r.toLowerCase()){case"phong":o=new so;break;case"lambert":o=new ev;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',r),o=new so;break}return o.setValues(a),o.name=i,o}parseParameters(e,t,n){const i={};e.BumpFactor&&(i.bumpScale=e.BumpFactor.value),e.Diffuse?i.color=new Me().fromArray(e.Diffuse.value).convertSRGBToLinear():e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(i.color=new Me().fromArray(e.DiffuseColor.value).convertSRGBToLinear()),e.DisplacementFactor&&(i.displacementScale=e.DisplacementFactor.value),e.Emissive?i.emissive=new Me().fromArray(e.Emissive.value).convertSRGBToLinear():e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(i.emissive=new Me().fromArray(e.EmissiveColor.value).convertSRGBToLinear()),e.EmissiveFactor&&(i.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),e.Opacity&&(i.opacity=parseFloat(e.Opacity.value)),i.opacity<1&&(i.transparent=!0),e.ReflectionFactor&&(i.reflectivity=e.ReflectionFactor.value),e.Shininess&&(i.shininess=e.Shininess.value),e.Specular?i.specular=new Me().fromArray(e.Specular.value).convertSRGBToLinear():e.SpecularColor&&e.SpecularColor.type==="Color"&&(i.specular=new Me().fromArray(e.SpecularColor.value).convertSRGBToLinear());const r=this;return at.get(n).children.forEach(function(a){const o=a.relationship;switch(o){case"Bump":i.bumpMap=r.getTexture(t,a.ID);break;case"Maya|TEX_ao_map":i.aoMap=r.getTexture(t,a.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":i.map=r.getTexture(t,a.ID),i.map!==void 0&&(i.map.colorSpace=we);break;case"DisplacementColor":i.displacementMap=r.getTexture(t,a.ID);break;case"EmissiveColor":i.emissiveMap=r.getTexture(t,a.ID),i.emissiveMap!==void 0&&(i.emissiveMap.colorSpace=we);break;case"NormalMap":case"Maya|TEX_normal_map":i.normalMap=r.getTexture(t,a.ID);break;case"ReflectionColor":i.envMap=r.getTexture(t,a.ID),i.envMap!==void 0&&(i.envMap.mapping=Ys,i.envMap.colorSpace=we);break;case"SpecularColor":i.specularMap=r.getTexture(t,a.ID),i.specularMap!==void 0&&(i.specularMap.colorSpace=we);break;case"TransparentColor":case"TransparencyFactor":i.alphaMap=r.getTexture(t,a.ID),i.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",o);break}}),i}getTexture(e,t){return"LayeredTexture"in Ne.Objects&&t in Ne.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=at.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in Ne.Objects){const n=Ne.Objects.Deformer;for(const i in n){const r=n[i],a=at.get(parseInt(i));if(r.attrType==="Skin"){const o=this.parseSkeleton(a,n);o.ID=i,a.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),o.geometryID=a.parents[0].ID,e[i]=o}else if(r.attrType==="BlendShape"){const o={id:i};o.rawTargets=this.parseMorphTargets(a,n),o.id=i,a.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[i]=o}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const n=[];return e.children.forEach(function(i){const r=t[i.ID];if(r.attrType!=="Cluster")return;const a={ID:i.ID,indices:[],weights:[],transformLink:new pe().fromArray(r.TransformLink.a)};"Indexes"in r&&(a.indices=r.Indexes.a,a.weights=r.Weights.a),n.push(a)}),{rawBones:n,bones:[]}}parseMorphTargets(e,t){const n=[];for(let i=0;i<e.children.length;i++){const r=e.children[i],a=t[r.ID],o={name:a.attrName,initialWeight:a.DeformPercent,id:a.id,fullWeights:a.FullWeights.a};if(a.attrType!=="BlendShapeChannel")return;o.geoID=at.get(parseInt(r.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,n.push(o)}return n}parseScene(e,t,n){Ot=new hr;const i=this.parseModels(e.skeletons,t,n),r=Ne.Objects.Model,a=this;i.forEach(function(l){const c=r[l.ID];a.setLookAtProperties(l,c),at.get(l.ID).parents.forEach(function(h){const f=i.get(h.ID);f!==void 0&&f.add(l)}),l.parent===null&&Ot.add(l)}),this.bindSkeleton(e.skeletons,t,i),this.createAmbientLight(),Ot.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const c=yh(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});const o=new rx().parse();Ot.children.length===1&&Ot.children[0].isGroup&&(Ot.children[0].animations=o,Ot=Ot.children[0]),Ot.animations=o}parseModels(e,t,n){const i=new Map,r=Ne.Objects.Model;for(const a in r){const o=parseInt(a),l=r[a],c=at.get(o);let u=this.buildSkeleton(c,e,o,l.attrName);if(!u){switch(l.attrType){case"Camera":u=this.createCamera(c);break;case"Light":u=this.createLight(c);break;case"Mesh":u=this.createMesh(c,t,n);break;case"NurbsCurve":u=this.createCurve(c,t);break;case"LimbNode":case"Root":u=new Co;break;case"Null":default:u=new hr;break}u.name=l.attrName?Ge.sanitizeNodeName(l.attrName):"",u.ID=o}this.getTransformData(u,l),i.set(o,u)}return i}buildSkeleton(e,t,n,i){let r=null;return e.parents.forEach(function(a){for(const o in t){const l=t[o];l.rawBones.forEach(function(c,u){if(c.ID===a.ID){const h=r;r=new Co,r.matrixWorld.copy(c.transformLink),r.name=i?Ge.sanitizeNodeName(i):"",r.ID=n,l.bones[u]=r,h!==null&&r.add(h)}})}}),r}createCamera(e){let t,n;if(e.children.forEach(function(i){const r=Ne.Objects.NodeAttribute[i.ID];r!==void 0&&(n=r)}),n===void 0)t=new et;else{let i=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(i=1);let r=1;n.NearPlane!==void 0&&(r=n.NearPlane.value/1e3);let a=1e3;n.FarPlane!==void 0&&(a=n.FarPlane.value/1e3);let o=window.innerWidth,l=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(o=n.AspectWidth.value,l=n.AspectHeight.value);const c=o/l;let u=45;n.FieldOfView!==void 0&&(u=n.FieldOfView.value);const h=n.FocalLength?n.FocalLength.value:null;switch(i){case 0:t=new Rt(u,c,r,a),h!==null&&t.setFocalLength(h);break;case 1:t=new pa(-o/2,o/2,l/2,-l/2,r,a);break;default:console.warn("THREE.FBXLoader: Unknown camera type "+i+"."),t=new et;break}}return t}createLight(e){let t,n;if(e.children.forEach(function(i){const r=Ne.Objects.NodeAttribute[i.ID];r!==void 0&&(n=r)}),n===void 0)t=new et;else{let i;n.LightType===void 0?i=0:i=n.LightType.value;let r=16777215;n.Color!==void 0&&(r=new Me().fromArray(n.Color.value).convertSRGBToLinear());let a=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(a=0);let o=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?o=0:o=n.FarAttenuationEnd.value);const l=1;switch(i){case 0:t=new ou(r,a,o,l);break;case 1:t=new _v(r,a);break;case 2:let c=Math.PI/3;n.InnerAngle!==void 0&&(c=wn.degToRad(n.InnerAngle.value));let u=0;n.OuterAngle!==void 0&&(u=wn.degToRad(n.OuterAngle.value),u=Math.max(u,1)),t=new dv(r,a,o,c,u,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),t=new ou(r,a);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,n){let i,r=null,a=null;const o=[];return e.children.forEach(function(l){t.has(l.ID)&&(r=t.get(l.ID)),n.has(l.ID)&&o.push(n.get(l.ID))}),o.length>1?a=o:o.length>0?a=o[0]:(a=new so({color:13421772}),o.push(a)),"color"in r.attributes&&o.forEach(function(l){l.vertexColors=!0}),r.FBX_Deformer?(i=new K0(r,a),i.normalizeSkinWeights()):i=new on(r,a),i}createCurve(e,t){const n=e.children.reduce(function(r,a){return t.has(a.ID)&&(r=t.get(a.ID)),r},null),i=new sh({color:3342591,linewidth:1});return new J0(n,i)}getTransformData(e,t){const n={};"InheritType"in t&&(n.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?n.eulerOrder=Mh(t.RotationOrder.value):n.eulerOrder="ZYX","Lcl_Translation"in t&&(n.translation=t.Lcl_Translation.value),"PreRotation"in t&&(n.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(n.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(n.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(n.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(n.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(n.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(n.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(n.rotationPivot=t.RotationPivot.value),e.userData.transformData=n}setLookAtProperties(e,t){"LookAtProperty"in t&&at.get(e.ID).children.forEach(function(i){if(i.relationship==="LookAtProperty"){const r=Ne.Objects.Model[i.ID];if("Lcl_Translation"in r){const a=r.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(a),Ot.add(e.target)):e.lookAt(new L().fromArray(a))}}})}bindSkeleton(e,t,n){const i=this.parsePoseNodes();for(const r in e){const a=e[r];at.get(parseInt(a.ID)).parents.forEach(function(l){if(t.has(l.ID)){const c=l.ID;at.get(c).parents.forEach(function(h){n.has(h.ID)&&n.get(h.ID).bind(new sl(a.bones),i[h.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in Ne.Objects){const t=Ne.Objects.Pose;for(const n in t)if(t[n].attrType==="BindPose"&&t[n].NbPoseNodes>0){const i=t[n].PoseNode;Array.isArray(i)?i.forEach(function(r){e[r.Node]=new pe().fromArray(r.Matrix.a)}):e[i.Node]=new pe().fromArray(i.Matrix.a)}}return e}createAmbientLight(){if("GlobalSettings"in Ne&&"AmbientColor"in Ne.GlobalSettings){const e=Ne.GlobalSettings.AmbientColor.value,t=e[0],n=e[1],i=e[2];if(t!==0||n!==0||i!==0){const r=new Me(t,n,i).convertSRGBToLinear();Ot.add(new gv(r,1))}}}}class ix{constructor(){this.negativeMaterialIndices=!1}parse(e){const t=new Map;if("Geometry"in Ne.Objects){const n=Ne.Objects.Geometry;for(const i in n){const r=at.get(parseInt(i)),a=this.parseGeometry(r,n[i],e);t.set(parseInt(i),a)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,n){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,n);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,n){const i=n.skeletons,r=[],a=e.parents.map(function(h){return Ne.Objects.Model[h.ID]});if(a.length===0)return;const o=e.children.reduce(function(h,f){return i[f.ID]!==void 0&&(h=i[f.ID]),h},null);e.children.forEach(function(h){n.morphTargets[h.ID]!==void 0&&r.push(n.morphTargets[h.ID])});const l=a[0],c={};"RotationOrder"in l&&(c.eulerOrder=Mh(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);const u=yh(c);return this.genGeometry(t,o,r,u)}genGeometry(e,t,n,i){const r=new fn;e.attrName&&(r.name=e.attrName);const a=this.parseGeoNode(e,t),o=this.genBuffers(a),l=new At(o.vertex,3);if(l.applyMatrix4(i),r.setAttribute("position",l),o.colors.length>0&&r.setAttribute("color",new At(o.colors,3)),t&&(r.setAttribute("skinIndex",new nl(o.weightsIndices,4)),r.setAttribute("skinWeight",new At(o.vertexWeights,4)),r.FBX_Deformer=t),o.normal.length>0){const c=new De().getNormalMatrix(i),u=new At(o.normal,3);u.applyNormalMatrix(c),r.setAttribute("normal",u)}if(o.uvs.forEach(function(c,u){const h=u===0?"uv":`uv${u}`;r.setAttribute(h,new At(o.uvs[u],2))}),a.material&&a.material.mappingType!=="AllSame"){let c=o.materialIndex[0],u=0;if(o.materialIndex.forEach(function(h,f){h!==c&&(r.addGroup(u,f-u,c),c=h,u=f)}),r.groups.length>0){const h=r.groups[r.groups.length-1],f=h.start+h.count;f!==o.materialIndex.length&&r.addGroup(f,o.materialIndex.length-f,c)}r.groups.length===0&&r.addGroup(0,o.materialIndex.length,o.materialIndex[0])}return this.addMorphTargets(r,e,n,i),r}parseGeoNode(e,t){const n={};if(n.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],n.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&(n.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(n.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(n.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){n.uv=[];let i=0;for(;e.LayerElementUV[i];)e.LayerElementUV[i].UV&&n.uv.push(this.parseUVs(e.LayerElementUV[i])),i++}return n.weightTable={},t!==null&&(n.skeleton=t,t.rawBones.forEach(function(i,r){i.indices.forEach(function(a,o){n.weightTable[a]===void 0&&(n.weightTable[a]=[]),n.weightTable[a].push({id:r,weight:i.weights[o]})})})),n}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let n=0,i=0,r=!1,a=[],o=[],l=[],c=[],u=[],h=[];const f=this;return e.vertexIndices.forEach(function(d,g){let _,m=!1;d<0&&(d=d^-1,m=!0);let p=[],y=[];if(a.push(d*3,d*3+1,d*3+2),e.color){const v=Vs(g,n,d,e.color);l.push(v[0],v[1],v[2])}if(e.skeleton){if(e.weightTable[d]!==void 0&&e.weightTable[d].forEach(function(v){y.push(v.weight),p.push(v.id)}),y.length>4){r||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),r=!0);const v=[0,0,0,0],S=[0,0,0,0];y.forEach(function(M,E){let A=M,R=p[E];S.forEach(function(x,b,F){if(A>x){F[b]=A,A=x;const Y=v[b];v[b]=R,R=Y}})}),p=v,y=S}for(;y.length<4;)y.push(0),p.push(0);for(let v=0;v<4;++v)u.push(y[v]),h.push(p[v])}if(e.normal){const v=Vs(g,n,d,e.normal);o.push(v[0],v[1],v[2])}e.material&&e.material.mappingType!=="AllSame"&&(_=Vs(g,n,d,e.material)[0],_<0&&(f.negativeMaterialIndices=!0,_=0)),e.uv&&e.uv.forEach(function(v,S){const M=Vs(g,n,d,v);c[S]===void 0&&(c[S]=[]),c[S].push(M[0]),c[S].push(M[1])}),i++,m&&(i>4&&console.warn("THREE.FBXLoader: Polygons with more than four sides are not supported. Make sure to triangulate the geometry during export."),f.genFace(t,e,a,_,o,l,c,u,h,i),n++,i=0,a=[],o=[],l=[],c=[],u=[],h=[])}),t}genFace(e,t,n,i,r,a,o,l,c,u){for(let h=2;h<u;h++)e.vertex.push(t.vertexPositions[n[0]]),e.vertex.push(t.vertexPositions[n[1]]),e.vertex.push(t.vertexPositions[n[2]]),e.vertex.push(t.vertexPositions[n[(h-1)*3]]),e.vertex.push(t.vertexPositions[n[(h-1)*3+1]]),e.vertex.push(t.vertexPositions[n[(h-1)*3+2]]),e.vertex.push(t.vertexPositions[n[h*3]]),e.vertex.push(t.vertexPositions[n[h*3+1]]),e.vertex.push(t.vertexPositions[n[h*3+2]]),t.skeleton&&(e.vertexWeights.push(l[0]),e.vertexWeights.push(l[1]),e.vertexWeights.push(l[2]),e.vertexWeights.push(l[3]),e.vertexWeights.push(l[(h-1)*4]),e.vertexWeights.push(l[(h-1)*4+1]),e.vertexWeights.push(l[(h-1)*4+2]),e.vertexWeights.push(l[(h-1)*4+3]),e.vertexWeights.push(l[h*4]),e.vertexWeights.push(l[h*4+1]),e.vertexWeights.push(l[h*4+2]),e.vertexWeights.push(l[h*4+3]),e.weightsIndices.push(c[0]),e.weightsIndices.push(c[1]),e.weightsIndices.push(c[2]),e.weightsIndices.push(c[3]),e.weightsIndices.push(c[(h-1)*4]),e.weightsIndices.push(c[(h-1)*4+1]),e.weightsIndices.push(c[(h-1)*4+2]),e.weightsIndices.push(c[(h-1)*4+3]),e.weightsIndices.push(c[h*4]),e.weightsIndices.push(c[h*4+1]),e.weightsIndices.push(c[h*4+2]),e.weightsIndices.push(c[h*4+3])),t.color&&(e.colors.push(a[0]),e.colors.push(a[1]),e.colors.push(a[2]),e.colors.push(a[(h-1)*3]),e.colors.push(a[(h-1)*3+1]),e.colors.push(a[(h-1)*3+2]),e.colors.push(a[h*3]),e.colors.push(a[h*3+1]),e.colors.push(a[h*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(i),e.materialIndex.push(i),e.materialIndex.push(i)),t.normal&&(e.normal.push(r[0]),e.normal.push(r[1]),e.normal.push(r[2]),e.normal.push(r[(h-1)*3]),e.normal.push(r[(h-1)*3+1]),e.normal.push(r[(h-1)*3+2]),e.normal.push(r[h*3]),e.normal.push(r[h*3+1]),e.normal.push(r[h*3+2])),t.uv&&t.uv.forEach(function(f,d){e.uvs[d]===void 0&&(e.uvs[d]=[]),e.uvs[d].push(o[d][0]),e.uvs[d].push(o[d][1]),e.uvs[d].push(o[d][(h-1)*2]),e.uvs[d].push(o[d][(h-1)*2+1]),e.uvs[d].push(o[d][h*2]),e.uvs[d].push(o[d][h*2+1])})}addMorphTargets(e,t,n,i){if(n.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const r=this;n.forEach(function(a){a.rawTargets.forEach(function(o){const l=Ne.Objects.Geometry[o.geoID];l!==void 0&&r.genMorphGeometry(e,t,l,i,o.name)})})}genMorphGeometry(e,t,n,i,r){const a=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],o=n.Vertices!==void 0?n.Vertices.a:[],l=n.Indexes!==void 0?n.Indexes.a:[],c=e.attributes.position.count*3,u=new Float32Array(c);for(let g=0;g<l.length;g++){const _=l[g]*3;u[_]=o[g*3],u[_+1]=o[g*3+1],u[_+2]=o[g*3+2]}const h={vertexIndices:a,vertexPositions:u},f=this.genBuffers(h),d=new At(f.vertex,3);d.name=r||n.attrName,d.applyMatrix4(i),e.morphAttributes.position.push(d)}parseNormals(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Normals.a;let r=[];return n==="IndexToDirect"&&("NormalIndex"in e?r=e.NormalIndex.a:"NormalsIndex"in e&&(r=e.NormalsIndex.a)),{dataSize:3,buffer:i,indices:r,mappingType:t,referenceType:n}}parseUVs(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.UV.a;let r=[];return n==="IndexToDirect"&&(r=e.UVIndex.a),{dataSize:2,buffer:i,indices:r,mappingType:t,referenceType:n}}parseVertexColors(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Colors.a;let r=[];n==="IndexToDirect"&&(r=e.ColorIndex.a);for(let a=0,o=new Me;a<i.length;a+=4)o.fromArray(i,a).convertSRGBToLinear().toArray(i,a);return{dataSize:4,buffer:i,indices:r,mappingType:t,referenceType:n}}parseMaterialIndices(e){const t=e.MappingInformationType,n=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};const i=e.Materials.a,r=[];for(let a=0;a<i.length;++a)r.push(a);return{dataSize:1,buffer:i,indices:r,mappingType:t,referenceType:n}}parseNurbsGeometry(e){const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new fn;const n=t-1,i=e.KnotVector.a,r=[],a=e.Points.a;for(let h=0,f=a.length;h<f;h+=4)r.push(new He().fromArray(a,h));let o,l;if(e.Form==="Closed")r.push(r[0]);else if(e.Form==="Periodic"){o=n,l=i.length-1-o;for(let h=0;h<n;++h)r.push(r[h])}const u=new ex(n,i,r,o,l).getPoints(r.length*12);return new fn().setFromPoints(u)}}class rx{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const n in t){const i=t[n],r=this.addClip(i);e.push(r)}return e}parseClips(){if(Ne.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=Ne.Objects.AnimationCurveNode,t=new Map;for(const n in e){const i=e[n];if(i.attrName.match(/S|R|T|DeformPercent/)!==null){const r={id:i.id,attr:i.attrName,curves:{}};t.set(r.id,r)}}return t}parseAnimationCurves(e){const t=Ne.Objects.AnimationCurve;for(const n in t){const i={id:t[n].id,times:t[n].KeyTime.a.map(cx),values:t[n].KeyValueFloat.a},r=at.get(i.id);if(r!==void 0){const a=r.parents[0].ID,o=r.parents[0].relationship;o.match(/X/)?e.get(a).curves.x=i:o.match(/Y/)?e.get(a).curves.y=i:o.match(/Z/)?e.get(a).curves.z=i:o.match(/DeformPercent/)&&e.has(a)&&(e.get(a).curves.morph=i)}}}parseAnimationLayers(e){const t=Ne.Objects.AnimationLayer,n=new Map;for(const i in t){const r=[],a=at.get(parseInt(i));a!==void 0&&(a.children.forEach(function(l,c){if(e.has(l.ID)){const u=e.get(l.ID);if(u.curves.x!==void 0||u.curves.y!==void 0||u.curves.z!==void 0){if(r[c]===void 0){const h=at.get(l.ID).parents.filter(function(f){return f.relationship!==void 0})[0].ID;if(h!==void 0){const f=Ne.Objects.Model[h.toString()];if(f===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}const d={modelName:f.attrName?Ge.sanitizeNodeName(f.attrName):"",ID:f.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};Ot.traverse(function(g){g.ID===f.id&&(d.transform=g.matrix,g.userData.transformData&&(d.eulerOrder=g.userData.transformData.eulerOrder))}),d.transform||(d.transform=new pe),"PreRotation"in f&&(d.preRotation=f.PreRotation.value),"PostRotation"in f&&(d.postRotation=f.PostRotation.value),r[c]=d}}r[c]&&(r[c][u.attr]=u)}else if(u.curves.morph!==void 0){if(r[c]===void 0){const h=at.get(l.ID).parents.filter(function(p){return p.relationship!==void 0})[0].ID,f=at.get(h).parents[0].ID,d=at.get(f).parents[0].ID,g=at.get(d).parents[0].ID,_=Ne.Objects.Model[g],m={modelName:_.attrName?Ge.sanitizeNodeName(_.attrName):"",morphName:Ne.Objects.Deformer[h].attrName};r[c]=m}r[c][u.attr]=u}}}),n.set(parseInt(i),r))}return n}parseAnimStacks(e){const t=Ne.Objects.AnimationStack,n={};for(const i in t){const r=at.get(parseInt(i)).children;r.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const a=e.get(r[0].ID);n[i]={name:t[i].attrName,layer:a}}return n}addClip(e){let t=[];const n=this;return e.layer.forEach(function(i){t=t.concat(n.generateTracks(i))}),new Po(e.name,-1,t)}generateTracks(e){const t=[];let n=new L,i=new Zt,r=new L;if(e.transform&&e.transform.decompose(n,i,r),n=n.toArray(),i=new an().setFromQuaternion(i,e.eulerOrder).toArray(),r=r.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const a=this.generateVectorTrack(e.modelName,e.T.curves,n,"position");a!==void 0&&t.push(a)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const a=this.generateRotationTrack(e.modelName,e.R.curves,i,e.preRotation,e.postRotation,e.eulerOrder);a!==void 0&&t.push(a)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const a=this.generateVectorTrack(e.modelName,e.S.curves,r,"scale");a!==void 0&&t.push(a)}if(e.DeformPercent!==void 0){const a=this.generateMorphTrack(e);a!==void 0&&t.push(a)}return t}generateVectorTrack(e,t,n,i){const r=this.getTimesForAllAxes(t),a=this.getKeyframeTrackValues(r,t,n);return new ss(e+"."+i,r,a)}generateRotationTrack(e,t,n,i,r,a){t.x!==void 0&&(this.interpolateRotations(t.x),t.x.values=t.x.values.map(wn.degToRad)),t.y!==void 0&&(this.interpolateRotations(t.y),t.y.values=t.y.values.map(wn.degToRad)),t.z!==void 0&&(this.interpolateRotations(t.z),t.z.values=t.z.values.map(wn.degToRad));const o=this.getTimesForAllAxes(t),l=this.getKeyframeTrackValues(o,t,n);i!==void 0&&(i=i.map(wn.degToRad),i.push(a),i=new an().fromArray(i),i=new Zt().setFromEuler(i)),r!==void 0&&(r=r.map(wn.degToRad),r.push(a),r=new an().fromArray(r),r=new Zt().setFromEuler(r).invert());const c=new Zt,u=new an,h=[];for(let f=0;f<l.length;f+=3)u.set(l[f],l[f+1],l[f+2],a),c.setFromEuler(u),i!==void 0&&c.premultiply(i),r!==void 0&&c.multiply(r),c.toArray(h,f/3*4);return new Ur(e+".quaternion",o,h)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,n=t.values.map(function(r){return r/100}),i=Ot.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new rs(e.modelName+".morphTargetInfluences["+i+"]",t.times,n)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(n,i){return n-i}),t.length>1){let n=1,i=t[0];for(let r=1;r<t.length;r++){const a=t[r];a!==i&&(t[n]=a,i=a,n++)}t=t.slice(0,n)}return t}getKeyframeTrackValues(e,t,n){const i=n,r=[];let a=-1,o=-1,l=-1;return e.forEach(function(c){if(t.x&&(a=t.x.times.indexOf(c)),t.y&&(o=t.y.times.indexOf(c)),t.z&&(l=t.z.times.indexOf(c)),a!==-1){const u=t.x.values[a];r.push(u),i[0]=u}else r.push(i[0]);if(o!==-1){const u=t.y.values[o];r.push(u),i[1]=u}else r.push(i[1]);if(l!==-1){const u=t.z.values[l];r.push(u),i[2]=u}else r.push(i[2])}),r}interpolateRotations(e){for(let t=1;t<e.values.length;t++){const n=e.values[t-1],i=e.values[t]-n,r=Math.abs(i);if(r>=180){const a=r/180,o=i/a;let l=n+o;const c=e.times[t-1],h=(e.times[t]-c)/a;let f=c+h;const d=[],g=[];for(;f<e.times[t];)d.push(f),f+=h,g.push(l),l+=o;e.times=du(e.times,t,d),e.values=du(e.values,t,g)}}}}class sx{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new xh,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,n=e.split(/[\r\n]+/);return n.forEach(function(i,r){const a=i.match(/^[\s\t]*;/),o=i.match(/^[\s\t]*$/);if(a||o)return;const l=i.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),c=i.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),u=i.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(i,l):c?t.parseNodeProperty(i,c,n[++r]):u?t.popStack():i.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(i)}),this.allNodes}parseNodeBegin(e,t){const n=t[1].trim().replace(/^"/,"").replace(/"$/,""),i=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),r={name:n},a=this.parseNodeAttr(i),o=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,r):n in o?(n==="PoseNode"?o.PoseNode.push(r):o[n].id!==void 0&&(o[n]={},o[n][o[n].id]=o[n]),a.id!==""&&(o[n][a.id]=r)):typeof a.id=="number"?(o[n]={},o[n][a.id]=r):n!=="Properties70"&&(n==="PoseNode"?o[n]=[r]:o[n]=r),typeof a.id=="number"&&(r.id=a.id),a.name!==""&&(r.attrName=a.name),a.type!==""&&(r.attrType=a.type),this.pushStack(r)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let n="",i="";return e.length>1&&(n=e[1].replace(/^(\w+)::/,""),i=e[2]),{id:t,name:n,type:i}}parseNodeProperty(e,t,n){let i=t[1].replace(/^"/,"").replace(/"$/,"").trim(),r=t[2].replace(/^"/,"").replace(/"$/,"").trim();i==="Content"&&r===","&&(r=n.replace(/"/g,"").replace(/,$/,"").trim());const a=this.getCurrentNode();if(a.name==="Properties70"){this.parseNodeSpecialProperty(e,i,r);return}if(i==="C"){const l=r.split(",").slice(1),c=parseInt(l[0]),u=parseInt(l[1]);let h=r.split(",").slice(3);h=h.map(function(f){return f.trim().replace(/^"/,"")}),i="connections",r=[c,u],hx(r,h),a[i]===void 0&&(a[i]=[])}i==="Node"&&(a.id=r),i in a&&Array.isArray(a[i])?a[i].push(r):i!=="a"?a[i]=r:a.a=r,this.setCurrentProp(a,i),i==="a"&&r.slice(-1)!==","&&(a.a=ho(r))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=ho(t.a))}parseNodeSpecialProperty(e,t,n){const i=n.split('",').map(function(u){return u.trim().replace(/^\"/,"").replace(/\s/,"_")}),r=i[0],a=i[1],o=i[2],l=i[3];let c=i[4];switch(a){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=ho(c);break}this.getPrevNode()[r]={type:a,type2:o,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),r)}}class ax{parse(e){const t=new hu(e);t.skip(23);const n=t.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);const i=new xh;for(;!this.endOfContent(t);){const r=this.parseNode(t,n);r!==null&&i.add(r.name,r)}return i}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const n={},i=t>=7500?e.getUint64():e.getUint32(),r=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const a=e.getUint8(),o=e.getString(a);if(i===0)return null;const l=[];for(let f=0;f<r;f++)l.push(this.parseProperty(e));const c=l.length>0?l[0]:"",u=l.length>1?l[1]:"",h=l.length>2?l[2]:"";for(n.singleProperty=r===1&&e.getOffset()===i;i>e.getOffset();){const f=this.parseNode(e,t);f!==null&&this.parseSubNode(o,n,f)}return n.propertyList=l,typeof c=="number"&&(n.id=c),u!==""&&(n.attrName=u),h!==""&&(n.attrType=h),o!==""&&(n.name=o),n}parseSubNode(e,t,n){if(n.singleProperty===!0){const i=n.propertyList[0];Array.isArray(i)?(t[n.name]=n,n.a=i):t[n.name]=i}else if(e==="Connections"&&n.name==="C"){const i=[];n.propertyList.forEach(function(r,a){a!==0&&i.push(r)}),t.connections===void 0&&(t.connections=[]),t.connections.push(i)}else if(n.name==="Properties70")Object.keys(n).forEach(function(r){t[r]=n[r]});else if(e==="Properties70"&&n.name==="P"){let i=n.propertyList[0],r=n.propertyList[1];const a=n.propertyList[2],o=n.propertyList[3];let l;i.indexOf("Lcl ")===0&&(i=i.replace("Lcl ","Lcl_")),r.indexOf("Lcl ")===0&&(r=r.replace("Lcl ","Lcl_")),r==="Color"||r==="ColorRGB"||r==="Vector"||r==="Vector3D"||r.indexOf("Lcl_")===0?l=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:l=n.propertyList[4],t[i]={type:r,type2:a,flag:o,value:l}}else t[n.name]===void 0?typeof n.id=="number"?(t[n.name]={},t[n.name][n.id]=n):t[n.name]=n:n.name==="PoseNode"?(Array.isArray(t[n.name])||(t[n.name]=[t[n.name]]),t[n.name].push(n)):t[n.name][n.id]===void 0&&(t[n.name][n.id]=n)}parseProperty(e){const t=e.getString(1);let n;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return n=e.getUint32(),e.getArrayBuffer(n);case"S":return n=e.getUint32(),e.getString(n);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const i=e.getUint32(),r=e.getUint32(),a=e.getUint32();if(r===0)switch(t){case"b":case"c":return e.getBooleanArray(i);case"d":return e.getFloat64Array(i);case"f":return e.getFloat32Array(i);case"i":return e.getInt32Array(i);case"l":return e.getInt64Array(i)}const o=Wv(new Uint8Array(e.getArrayBuffer(a))),l=new hu(o.buffer);switch(t){case"b":case"c":return l.getBooleanArray(i);case"d":return l.getFloat64Array(i);case"f":return l.getFloat32Array(i);case"i":return l.getInt32Array(i);case"l":return l.getInt64Array(i)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class hu{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let n=0;n<e;n++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){const t=this.offset;let n=new Uint8Array(this.dv.buffer,t,e);this.skip(e);const i=n.indexOf(0);return i>=0&&(n=new Uint8Array(this.dv.buffer,t,i)),this._textDecoder.decode(n)}}class xh{add(e,t){this[e]=t}}function ox(s){const e="Kaydara FBX Binary  \0";return s.byteLength>=e.length&&e===Sh(s,0,e.length)}function lx(s){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function n(i){const r=s[i-1];return s=s.slice(t+i),t++,r}for(let i=0;i<e.length;++i)if(n(1)===e[i])return!1;return!0}function fu(s){const e=/FBXVersion: (\d+)/,t=s.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function cx(s){return s/46186158e3}const ux=[];function Vs(s,e,t,n){let i;switch(n.mappingType){case"ByPolygonVertex":i=s;break;case"ByPolygon":i=e;break;case"ByVertice":i=t;break;case"AllSame":i=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(i=n.indices[i]);const r=i*n.dataSize,a=r+n.dataSize;return fx(ux,n.buffer,r,a)}const uo=new an,sr=new L;function yh(s){const e=new pe,t=new pe,n=new pe,i=new pe,r=new pe,a=new pe,o=new pe,l=new pe,c=new pe,u=new pe,h=new pe,f=new pe,d=s.inheritType?s.inheritType:0;if(s.translation&&e.setPosition(sr.fromArray(s.translation)),s.preRotation){const b=s.preRotation.map(wn.degToRad);b.push(s.eulerOrder||an.DEFAULT_ORDER),t.makeRotationFromEuler(uo.fromArray(b))}if(s.rotation){const b=s.rotation.map(wn.degToRad);b.push(s.eulerOrder||an.DEFAULT_ORDER),n.makeRotationFromEuler(uo.fromArray(b))}if(s.postRotation){const b=s.postRotation.map(wn.degToRad);b.push(s.eulerOrder||an.DEFAULT_ORDER),i.makeRotationFromEuler(uo.fromArray(b)),i.invert()}s.scale&&r.scale(sr.fromArray(s.scale)),s.scalingOffset&&o.setPosition(sr.fromArray(s.scalingOffset)),s.scalingPivot&&a.setPosition(sr.fromArray(s.scalingPivot)),s.rotationOffset&&l.setPosition(sr.fromArray(s.rotationOffset)),s.rotationPivot&&c.setPosition(sr.fromArray(s.rotationPivot)),s.parentMatrixWorld&&(h.copy(s.parentMatrix),u.copy(s.parentMatrixWorld));const g=t.clone().multiply(n).multiply(i),_=new pe;_.extractRotation(u);const m=new pe;m.copyPosition(u);const p=m.clone().invert().multiply(u),y=_.clone().invert().multiply(p),v=r,S=new pe;if(d===0)S.copy(_).multiply(g).multiply(y).multiply(v);else if(d===1)S.copy(_).multiply(y).multiply(g).multiply(v);else{const F=new pe().scale(new L().setFromMatrixScale(h)).clone().invert(),Y=y.clone().multiply(F);S.copy(_).multiply(g).multiply(Y).multiply(v)}const M=c.clone().invert(),E=a.clone().invert();let A=e.clone().multiply(l).multiply(c).multiply(t).multiply(n).multiply(i).multiply(M).multiply(o).multiply(a).multiply(r).multiply(E);const R=new pe().copyPosition(A),x=u.clone().multiply(R);return f.copyPosition(x),A=f.clone().multiply(S),A.premultiply(u.invert()),A}function Mh(s){s=s||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return s===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[s]}function ho(s){return s.split(",").map(function(t){return parseFloat(t)})}function Sh(s,e,t){return e===void 0&&(e=0),t===void 0&&(t=s.byteLength),new TextDecoder().decode(new Uint8Array(s,e,t))}function hx(s,e){for(let t=0,n=s.length,i=e.length;t<i;t++,n++)s[n]=e[t]}function fx(s,e,t,n){for(let i=t,r=0;i<n;i++,r++)s[r]=e[i];return s}function du(s,e,t){return s.slice(0,e).concat(t).concat(s.slice(e))}const Th={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class ms{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const dx=new pa(-1,1,1,-1,0,1),cl=new fn;cl.setAttribute("position",new At([-1,3,0,-1,-1,0,3,-1,0],3));cl.setAttribute("uv",new At([0,2,0,0,2,0],2));class Eh{constructor(e){this._mesh=new on(cl,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,dx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class px extends ms{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Bt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=is.clone(e.uniforms),this.material=new Bt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Eh(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class pu extends ms{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class mx extends ms{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class _x{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Ae);this._width=n.width,this._height=n.height,t=new hn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Pn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new px(Th),this.clock=new hh}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}pu!==void 0&&(a instanceof pu?n=!0:a instanceof mx&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ae);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class gx extends ms{constructor(e,t,n,i,r){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r!==void 0?r:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Me}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==void 0&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),r=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,r),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=a),e.autoClear=i}}const vx={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Me(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Er extends ms{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Ae(e.x,e.y):new Ae(256,256),this.clearColor=new Me(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new hn(r,a,{type:Pn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const f=new hn(r,a,{type:Pn});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new hn(r,a,{type:Pn});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}const o=vx;this.highPassUniforms=is.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Bt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.texSize.value=new Ae(r,a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=Th;this.copyUniforms=is.clone(u.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new Bt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:So,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Me,this.oldClearAlpha=1,this.basic=new fa,this.fsQuad=new Eh(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.materialCopy.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.texSize.value=new Ae(n,i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Er.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Er.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){return new Bt({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new Ae(.5,.5)},direction:{value:new Ae(.5,.5)}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}
				void main() {
					vec2 invSize = 1.0 / texSize;
					float fSigma = float(SIGMA);
					float weightSum = gaussianPdf(0.0, fSigma);
					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianPdf(x, fSigma);
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Bt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Er.BlurDirectionX=new Ae(1,0);Er.BlurDirectionY=new Ae(0,1);function Wn(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function bh(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var $t={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},br={duration:.5,overwrite:!1,delay:0},ul,Pt,it,ln=1e8,Ye=1/ln,Uo=Math.PI*2,xx=Uo/4,yx=0,wh=Math.sqrt,Mx=Math.cos,Sx=Math.sin,gt=function(e){return typeof e=="string"},rt=function(e){return typeof e=="function"},jn=function(e){return typeof e=="number"},hl=function(e){return typeof e>"u"},Dn=function(e){return typeof e=="object"},zt=function(e){return e!==!1},fl=function(){return typeof window<"u"},Gs=function(e){return rt(e)||gt(e)},Ah=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Lt=Array.isArray,Fo=/(?:-?\.?\d|\.)+/gi,Rh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,fr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,fo=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Ch=/[+-]=-?[.\d]+/,Ph=/[^,'"\[\]\s]+/gi,Tx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Je,tn,Oo,dl,Jt={},ea={},Lh,Ih=function(e){return(ea=Bi(e,Jt))&&Ht},pl=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ta=function(e,t){return!t&&console.warn(e)},Dh=function(e,t){return e&&(Jt[e]=t)&&ea&&(ea[e]=t)||Jt},as=function(){return 0},Ex={suppressEvents:!0,isStart:!0,kill:!1},Ws={suppressEvents:!0,kill:!1},bx={suppressEvents:!0},ml={},ui=[],No={},Uh,Yt={},po={},mu=30,Xs=[],_l="",gl=function(e){var t=e[0],n,i;if(Dn(t)||rt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Xs.length;i--&&!Xs[i].targetTest(t););n=Xs[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new sf(e[i],n)))||e.splice(i,1);return e},Ui=function(e){return e._gsap||gl(cn(e))[0]._gsap},Fh=function(e,t,n){return(n=e[t])&&rt(n)?e[t]():hl(n)&&e.getAttribute&&e.getAttribute(t)||n},Vt=function(e,t){return(e=e.split(",")).forEach(t)||e},ot=function(e){return Math.round(e*1e5)/1e5||0},St=function(e){return Math.round(e*1e7)/1e7||0},_r=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},wx=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},na=function(){var e=ui.length,t=ui.slice(0),n,i;for(No={},ui.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Oh=function(e,t,n,i){ui.length&&!Pt&&na(),e.render(t,n,i||Pt&&t<0&&(e._initted||e._startAt)),ui.length&&!Pt&&na()},Nh=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Ph).length<2?t:gt(e)?e.trim():e},Bh=function(e){return e},dn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ax=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Bi=function(e,t){for(var n in t)e[n]=t[n];return e},_u=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Dn(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},ia=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},$r=function(e){var t=e.parent||Je,n=e.keyframes?Ax(Lt(e.keyframes)):dn;if(zt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Rx=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},kh=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],o;if(r)for(o=t[r];a&&a[r]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},ya=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,a=t._next;r?r._next=a:e[n]===t&&(e[n]=a),a?a._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},di=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Fi=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Cx=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Bo=function(e,t,n,i){return e._startAt&&(Pt?e._startAt.revert(Ws):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Px=function s(e){return!e||e._ts&&s(e.parent)},gu=function(e){return e._repeat?wr(e._tTime,e=e.duration()+e._rDelay)*e:0},wr=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},ra=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ma=function(e){return e._end=St(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ye)||0))},Sa=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=St(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ma(e),n._dirty||Fi(n,e)),e},zh=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=ra(e.rawTime(),t),(!t._dur||_s(0,t.totalDuration(),n)-t._tTime>Ye)&&t.render(n,!0)),Fi(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Ye}},An=function(e,t,n,i){return t.parent&&di(t),t._start=St((jn(n)?n:n||e!==Je?en(e,n,t):e._time)+t._delay),t._end=St(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),kh(e,t,"_first","_last",e._sort?"_start":0),ko(t)||(e._recent=t),i||zh(e,t),e._ts<0&&Sa(e,e._tTime),e},Vh=function(e,t){return(Jt.ScrollTrigger||pl("scrollTrigger",t))&&Jt.ScrollTrigger.create(t,e)},Gh=function(e,t,n,i,r){if(xl(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!Pt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Uh!==Kt.frame)return ui.push(e),e._lazy=[r,i],1},Lx=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},ko=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Ix=function(e,t,n,i){var r=e.ratio,a=t<0||!t&&(!e._start&&Lx(e)&&!(!e._initted&&ko(e))||(e._ts<0||e._dp._ts<0)&&!ko(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=_s(0,e._tDur,t),u=wr(l,o),e._yoyo&&u&1&&(a=1-a),u!==wr(e._tTime,o)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||Pt||i||e._zTime===Ye||!t&&e._zTime){if(!e._initted&&Gh(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?Ye:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Bo(e,t,n,!0),e._onUpdate&&!n&&un(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&un(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&di(e,1),!n&&!Pt&&(un(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Dx=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Ar=function(e,t,n,i){var r=e._repeat,a=St(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:St(a*(r+1)+e._rDelay*r):a,o>0&&!i&&Sa(e,e._tTime=e._tDur*o),e.parent&&Ma(e),n||Fi(e.parent,e),e},vu=function(e){return e instanceof Nt?Fi(e):Ar(e,e._dur)},Ux={_start:0,endTime:as,totalDuration:as},en=function s(e,t,n){var i=e.labels,r=e._recent||Ux,a=e.duration()>=ln?r.endTime(!1):e._dur,o,l,c;return gt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Lt(n)?n[0]:n).totalDuration()),o>1?s(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Jr=function(e,t,n){var i=jn(t[1]),r=(i?2:1)+(e<2?0:1),a=t[r],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=zt(l.vars.inherit)&&l.parent;a.immediateRender=zt(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new ht(t[0],a,t[r+1])},_i=function(e,t){return e||e===0?t(e):t},_s=function(e,t,n){return n<e?e:n>t?t:n},Ct=function(e,t){return!gt(e)||!(t=Tx.exec(e))?"":t[1]},Fx=function(e,t,n){return _i(n,function(i){return _s(e,t,i)})},zo=[].slice,Hh=function(e,t){return e&&Dn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Dn(e[0]))&&!e.nodeType&&e!==tn},Ox=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return gt(i)&&!t||Hh(i,1)?(r=n).push.apply(r,cn(i)):n.push(i)})||n},cn=function(e,t,n){return it&&!t&&it.selector?it.selector(e):gt(e)&&!n&&(Oo||!Rr())?zo.call((t||dl).querySelectorAll(e),0):Lt(e)?Ox(e,n):Hh(e)?zo.call(e,0):e?[e]:[]},Vo=function(e){return e=cn(e)[0]||ta("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return cn(t,n.querySelectorAll?n:n===e?ta("Invalid scope")||dl.createElement("div"):e)}},Wh=function(e){return e.sort(function(){return .5-Math.random()})},Xh=function(e){if(rt(e))return e;var t=Dn(e)?e:{each:e},n=Oi(t.ease),i=t.from||0,r=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,h=i;return gt(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(f,d,g){var _=(g||t).length,m=a[_],p,y,v,S,M,E,A,R,x;if(!m){if(x=t.grid==="auto"?0:(t.grid||[1,ln])[1],!x){for(A=-ln;A<(A=g[x++].getBoundingClientRect().left)&&x<_;);x--}for(m=a[_]=[],p=l?Math.min(x,_)*u-.5:i%x,y=x===ln?0:l?_*h/x-.5:i/x|0,A=0,R=ln,E=0;E<_;E++)v=E%x-p,S=y-(E/x|0),m[E]=M=c?Math.abs(c==="y"?S:v):wh(v*v+S*S),M>A&&(A=M),M<R&&(R=M);i==="random"&&Wh(m),m.max=A-R,m.min=R,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(x>_?_-1:c?c==="y"?_/x:x:Math.max(x,_/x))||0)*(i==="edges"?-1:1),m.b=_<0?r-_:r,m.u=Ct(t.amount||t.each)||0,n=n&&_<0?tf(n):n}return _=(m[f]-m.min)/m.max||0,St(m.b+(n?n(_):_)*m.v)+m.u}},Go=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=St(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(jn(n)?0:Ct(n))}},qh=function(e,t){var n=Lt(e),i,r;return!n&&Dn(e)&&(i=n=e.radius||ln,e.values?(e=cn(e.values),(r=!jn(e[0]))&&(i*=i)):e=Go(e.increment)),_i(t,n?rt(e)?function(a){return r=e(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=ln,u=0,h=e.length,f,d;h--;)r?(f=e[h].x-o,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-o),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:a,r||u===a||jn(a)?u:u+Ct(a)}:Go(e))},Yh=function(e,t,n,i){return _i(Lt(e)?!t:n===!0?!!(n=0):!i,function(){return Lt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Nx=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,a){return a(r)},i)}},Bx=function(e,t){return function(n){return e(parseFloat(n))+(t||Ct(n))}},kx=function(e,t,n){return Kh(e,t,0,1,n)},jh=function(e,t,n){return _i(n,function(i){return e[~~t(i)]})},zx=function s(e,t,n){var i=t-e;return Lt(e)?jh(e,s(0,e.length),t):_i(n,function(r){return(i+(r-e)%i)%i+e})},Vx=function s(e,t,n){var i=t-e,r=i*2;return Lt(e)?jh(e,s(0,e.length-1),t):_i(n,function(a){return a=(r+(a-e)%r)%r||0,e+(a>i?r-a:a)})},os=function(e){for(var t=0,n="",i,r,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",r=e.substr(i+7,a-i-7).match(o?Ph:Fo),n+=e.substr(t,i-t)+Yh(o?r:+r[0],o?0:+r[1],+r[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},Kh=function(e,t,n,i,r){var a=t-e,o=i-n;return _i(r,function(l){return n+((l-e)/a*o||0)})},Gx=function s(e,t,n,i){var r=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!r){var a=gt(e),o={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Lt(e)&&!Lt(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(s(e[c-1],e[c]));h--,r=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=t}else i||(e=Bi(Lt(e)?[]:{},e));if(!u){for(l in t)vl.call(o,e,l,"get",t[l]);r=function(g){return Sl(g,o)||(a?e.p:e)}}}return _i(n,r)},xu=function(e,t,n){var i=e.labels,r=ln,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},un=function(e,t,n){var i=e.vars,r=i[t],a=it,o=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&ui.length&&na(),o&&(it=o),u=l?r.apply(c,l):r.call(c),it=a,u},Xr=function(e){return di(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Pt),e.progress()<1&&un(e,"onInterrupt"),e},dr,Zh=[],$h=function(e){if(fl()&&e){e=!e.name&&e.default||e;var t=e.name,n=rt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:as,render:Sl,add:vl,kill:ry,modifier:iy,rawVars:0},a={targetTest:0,get:0,getSetter:Ml,aliases:{},register:0};if(Rr(),e!==i){if(Yt[t])return;dn(i,dn(ia(e,r),a)),Bi(i.prototype,Bi(r,ia(e,a))),Yt[i.prop=t]=i,e.targetTest&&(Xs.push(i),ml[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Dh(t,i),e.register&&e.register(Ht,i,Gt)}else e&&Zh.push(e)},qe=255,qr={aqua:[0,qe,qe],lime:[0,qe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,qe],navy:[0,0,128],white:[qe,qe,qe],olive:[128,128,0],yellow:[qe,qe,0],orange:[qe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[qe,0,0],pink:[qe,192,203],cyan:[0,qe,qe],transparent:[qe,qe,qe,0]},mo=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*qe+.5|0},Jh=function(e,t,n){var i=e?jn(e)?[e>>16,e>>8&qe,e&qe]:0:qr.black,r,a,o,l,c,u,h,f,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),qr[e])i=qr[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+r+r+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&qe,i&qe,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&qe,e&qe]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Fo),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,r=u*2-a,i.length>3&&(i[3]*=1),i[0]=mo(l+1/3,r,a),i[1]=mo(l,r,a),i[2]=mo(l-1/3,r,a);else if(~e.indexOf("="))return i=e.match(Rh),n&&i.length<4&&(i[3]=1),i}else i=e.match(Fo)||qr.transparent;i=i.map(Number)}return t&&!g&&(r=i[0]/qe,a=i[1]/qe,o=i[2]/qe,h=Math.max(r,a,o),f=Math.min(r,a,o),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===r?(a-o)/d+(a<o?6:0):h===a?(o-r)/d+2:(r-a)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Qh=function(e){var t=[],n=[],i=-1;return e.split(hi).forEach(function(r){var a=r.match(fr)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},yu=function(e,t,n){var i="",r=(e+i).match(hi),a=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!r)return e;if(r=r.map(function(f){return(f=Jh(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Qh(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(hi,"1").split(fr),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(hi),h=c.length-1;o<h;o++)i+=c[o]+r[o];return i+c[h]},hi=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in qr)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),Hx=/hsl[a]?\(/,ef=function(e){var t=e.join(" "),n;if(hi.lastIndex=0,hi.test(t))return n=Hx.test(t),e[1]=yu(e[1],n),e[0]=yu(e[0],n,Qh(e[1])),!0},ls,Kt=function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,a=r,o=[],l,c,u,h,f,d,g=function _(m){var p=s()-i,y=m===!0,v,S,M,E;if(p>e&&(n+=p-t),i+=p,M=i-n,v=M-a,(v>0||y)&&(E=++h.frame,f=M-h.time*1e3,h.time=M=M/1e3,a+=v+(v>=r?4:r-v),S=1),y||(l=c(_)),S)for(d=0;d<o.length;d++)o[d](M,f,E,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Lh&&(!Oo&&fl()&&(tn=Oo=window,dl=tn.document||{},Jt.gsap=Ht,(tn.gsapVersions||(tn.gsapVersions=[])).push(Ht.version),Ih(ea||tn.GreenSockGlobals||!tn.gsap&&tn||{}),u=tn.requestAnimationFrame,Zh.forEach($h)),l&&h.sleep(),c=u||function(m){return setTimeout(m,a-h.time*1e3+1|0)},ls=1,g(2))},sleep:function(){(u?tn.cancelAnimationFrame:clearTimeout)(l),ls=0,c=as},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){r=1e3/(m||240),a=h.time*1e3+r},add:function(m,p,y){var v=p?function(S,M,E,A){m(S,M,E,A),h.remove(v)}:m;return h.remove(m),o[y?"unshift":"push"](v),Rr(),v},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&d>=p&&d--},_listeners:o},h}(),Rr=function(){return!ls&&Kt.wake()},ke={},Wx=/^[\d.\-M][\d.\-,\s]/,Xx=/["']/g,qx=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,a=n.length,o,l,c;r<a;r++)l=n[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(Xx,"").trim():+c,i=l.substr(o+1).trim();return t},Yx=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},jx=function(e){var t=(e+"").split("("),n=ke[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[qx(t[1])]:Yx(e).split(",").map(Nh)):ke._CE&&Wx.test(e)?ke._CE("",e):n},tf=function(e){return function(t){return 1-e(1-t)}},nf=function s(e,t){for(var n=e._first,i;n;)n instanceof Nt?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Oi=function(e,t){return e&&(rt(e)?e:ke[e]||jx(e))||t},Vi=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},a;return Vt(e,function(o){ke[o]=Jt[o]=r,ke[a=o.toLowerCase()]=n;for(var l in r)ke[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ke[o+"."+l]=r[l]}),r},rf=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},_o=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),a=r/Uo*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*Sx((u-a)*r)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:rf(o);return r=Uo/r,l.config=function(c,u){return s(e,c,u)},l},go=function s(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:rf(n);return i.config=function(r){return s(e,r)},i};Vt("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;Vi(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ke.Linear.easeNone=ke.none=ke.Linear.easeIn;Vi("Elastic",_o("in"),_o("out"),_o());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(o){return o<t?s*o*o:o<n?s*Math.pow(o-1.5/e,2)+.75:o<i?s*(o-=2.25/e)*o+.9375:s*Math.pow(o-2.625/e,2)+.984375};Vi("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);Vi("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});Vi("Circ",function(s){return-(wh(1-s*s)-1)});Vi("Sine",function(s){return s===1?1:-Mx(s*xx)+1});Vi("Back",go("in"),go("out"),go());ke.SteppedEase=ke.steps=Jt.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,a=1-Ye;return function(o){return((i*_s(0,a,o)|0)+r)*n}}};br.ease=ke["quad.out"];Vt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return _l+=s+","+s+"Params,"});var sf=function(e,t){this.id=yx++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Fh,this.set=t?t.getSetter:Ml},cs=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ar(this,+t.duration,1,1),this.data=t.data,it&&(this._ctx=it,it.data.push(this)),ls||Kt.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ar(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Rr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Sa(this,n),!r._dp||r.parent||zh(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&An(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ye||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Oh(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+gu(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+gu(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?wr(this._tTime,r)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-Ye?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?ra(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ye?0:this._rts,this.totalTime(_s(-Math.abs(this._delay),this._tDur,i),!0),Ma(this),Cx(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Rr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ye&&(this._tTime-=Ye)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&An(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(zt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ra(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=bx);var i=Pt;return Pt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Pt=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1/0:this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,vu(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,vu(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(en(this,n),zt(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,zt(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ye:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ye,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Ye)},e.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(r){var a=rt(n)?n:Bh,o=function(){var c=i.then;i.then=null,rt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),r(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){Xr(this)},s}();dn(cs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ye,_prom:0,_ps:!1,_rts:1});var Nt=function(s){bh(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=zt(n.sortChildren),Je&&An(n.parent||Je,Wn(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Vh(Wn(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,a){return Jr(0,arguments,this),this},t.from=function(i,r,a){return Jr(1,arguments,this),this},t.fromTo=function(i,r,a,o){return Jr(2,arguments,this),this},t.set=function(i,r,a){return r.duration=0,r.parent=this,$r(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new ht(i,r,en(this,a),1),this},t.call=function(i,r,a){return An(this,ht.delayedCall(0,i,r),a)},t.staggerTo=function(i,r,a,o,l,c,u){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new ht(i,a,en(this,l)),this},t.staggerFrom=function(i,r,a,o,l,c,u){return a.runBackwards=1,$r(a).immediateRender=zt(a.immediateRender),this.staggerTo(i,r,a,o,l,c,u)},t.staggerFromTo=function(i,r,a,o,l,c,u,h){return o.startAt=a,$r(o).immediateRender=zt(o.immediateRender),this.staggerTo(i,r,o,l,c,u,h)},t.render=function(i,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:St(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,g,_,m,p,y,v,S,M,E,A;if(this!==Je&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),f=u,S=this._start,v=this._ts,p=!v,h&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,a);if(f=St(u%m),u===l?(_=this._repeat,f=c):(_=~~(u/m),_&&_===u/m&&(f=c,_--),f>c&&(f=c)),M=wr(this._tTime,m),!o&&this._tTime&&M!==_&&this._tTime-M*m-this._dur<=0&&(M=_),E&&_&1&&(f=c-f,A=1),_!==M&&!this._lock){var R=E&&M&1,x=R===(E&&_&1);if(_<M&&(R=!R),o=R?0:u%c?c:u,this._lock=1,this.render(o||(A?0:St(_*m)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&un(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,o=R?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;nf(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=Dx(this,St(o),St(f)),y&&(u-=f-(f=y._start))),this._tTime=u,this._time=f,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&f&&!r&&!_&&(un(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,r,a);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,r,a),f!==this._time||!this._ts&&!p){y=0,g&&(u+=this._zTime=-Ye);break}}d=g}else{d=this._last;for(var b=i<0?i:f;d;){if(g=d._prev,(d._act||b<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,r,a);if(d.render(d._ts>0?(b-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(b-d._start)*d._ts,r,a||Pt&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!p){y=0,g&&(u+=this._zTime=b?-Ye:Ye);break}}d=g}}if(y&&!r&&(this.pause(),y.render(f>=o?0:-Ye)._zTime=f>=o?1:-1,this._ts))return this._start=S,Ma(this),this.render(i,r,a);this._onUpdate&&!r&&un(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(S===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&di(this,1),!r&&!(i<0&&!o)&&(u||o||!l)&&(un(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var a=this;if(jn(r)||(r=en(this,r,i)),!(i instanceof cs)){if(Lt(i))return i.forEach(function(o){return a.add(o,r)}),this;if(gt(i))return this.addLabel(i,r);if(rt(i))i=ht.delayedCall(0,i);else return this}return this!==i?An(this,i,r):this},t.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-ln);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof ht?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},t.remove=function(i){return gt(i)?this.removeLabel(i):rt(i)?this.killTweensOf(i):(ya(this,i),i===this._recent&&(this._recent=this._last),Fi(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=St(Kt.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=en(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,a){var o=ht.delayedCall(0,r||as,a);return o.data="isPause",this._hasPause=1,An(this,o,en(this,i))},t.removePause=function(i){var r=this._first;for(i=en(this,i);r;)r._start===i&&r.data==="isPause"&&di(r),r=r._next},t.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)si!==o[l]&&o[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var a=[],o=cn(i),l=this._first,c=jn(r),u;l;)l instanceof ht?wx(l._targets,o)&&(c?(!si||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(u=l.getTweensOf(o,r)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,r){r=r||{};var a=this,o=en(a,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,g=ht.to(a,dn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Ye,onStart:function(){if(a.pause(),!d){var m=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&Ar(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,h||[])}},r));return f?g.render(0):g},t.tweenFromTo=function(i,r,a){return this.tweenTo(r,dn({startAt:{time:en(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),xu(this,en(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),xu(this,en(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ye)},t.shiftChildren=function(i,r,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return Fi(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Fi(this)},t.totalDuration=function(i){var r=0,a=this,o=a._last,l=ln,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,An(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(r-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;Ar(a,a===Je&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Je._ts&&(Oh(Je,ra(i,Je)),Uh=Kt.frame),Kt.frame>=mu){mu+=$t.autoSleep||120;var r=Je._first;if((!r||!r._ts)&&$t.autoSleep&&Kt._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Kt.sleep()}}},e}(cs);dn(Nt.prototype,{_lock:0,_hasPause:0,_forcing:0});var Kx=function(e,t,n,i,r,a,o){var l=new Gt(this._pt,e,t,0,1,hf,null,r),c=0,u=0,h,f,d,g,_,m,p,y;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=os(i)),a&&(y=[n,i],a(y,e,t),n=y[0],i=y[1]),f=n.match(fo)||[];h=fo.exec(i);)g=h[0],_=i.substring(c,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?_r(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=fo.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Ch.test(i)||p)&&(l.e=0),this._pt=l,l},vl=function(e,t,n,i,r,a,o,l,c,u){rt(i)&&(i=i(r||0,e,a));var h=e[t],f=n!=="get"?n:rt(h)?c?e[t.indexOf("set")||!rt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=rt(h)?c?ey:cf:yl,g;if(gt(i)&&(~i.indexOf("random(")&&(i=os(i)),i.charAt(1)==="="&&(g=_r(f,i)+(Ct(f)||0),(g||g===0)&&(i=g))),!u||f!==i||Ho)return!isNaN(f*i)&&i!==""?(g=new Gt(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?ny:uf,0,d),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!h&&!(t in e)&&pl(t,i),Kx.call(this,e,t,f,i,d,l||$t.stringFilter,c))},Zx=function(e,t,n,i,r){if(rt(e)&&(e=Qr(e,r,t,n,i)),!Dn(e)||e.style&&e.nodeType||Lt(e)||Ah(e))return gt(e)?Qr(e,r,t,n,i):e;var a={},o;for(o in e)a[o]=Qr(e[o],r,t,n,i);return a},af=function(e,t,n,i,r,a){var o,l,c,u;if(Yt[e]&&(o=new Yt[e]).init(r,o.rawVars?t[e]:Zx(t[e],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new Gt(n._pt,r,e,0,1,o.render,o,0,o.priority),n!==dr))for(c=n._ptLookup[n._targets.indexOf(r)],u=o._props.length;u--;)c[o._props[u]]=l;return o},si,Ho,xl=function s(e,t,n){var i=e.vars,r=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,h=i.callbackScope,f=i.runBackwards,d=i.yoyoEase,g=i.keyframes,_=i.autoRevert,m=e._dur,p=e._startAt,y=e._targets,v=e.parent,S=v&&v.data==="nested"?v.vars.targets:y,M=e._overwrite==="auto"&&!ul,E=e.timeline,A,R,x,b,F,Y,I,N,O,X,z,W,G;if(E&&(!g||!r)&&(r="none"),e._ease=Oi(r,br.ease),e._yEase=d?tf(Oi(d===!0?r:d,br.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!E&&!!i.runBackwards,!E||g&&!i.stagger){if(N=y[0]?Ui(y[0]).harness:0,W=N&&i[N.prop],A=ia(i,ml),p&&(p._zTime<0&&p.progress(1),t<0&&f&&o&&!_?p.render(-1,!0):p.revert(f&&m?Ws:Ex),p._lazy=0),a){if(di(e._startAt=ht.set(y,dn({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!p&&zt(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:h,stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Pt||!o&&!_)&&e._startAt.revert(Ws),o&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&m&&!p){if(t&&(o=!1),x=dn({overwrite:!1,data:"isFromStart",lazy:o&&!p&&zt(l),immediateRender:o,stagger:0,parent:v},A),W&&(x[N.prop]=W),di(e._startAt=ht.set(y,x)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Pt?e._startAt.revert(Ws):e._startAt.render(-1,!0)),e._zTime=t,!o)s(e._startAt,Ye,Ye);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&zt(l)||l&&!m,R=0;R<y.length;R++){if(F=y[R],I=F._gsap||gl(y)[R]._gsap,e._ptLookup[R]=X={},No[I.id]&&ui.length&&na(),z=S===y?R:S.indexOf(F),N&&(O=new N).init(F,W||A,e,z,S)!==!1&&(e._pt=b=new Gt(e._pt,F,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(H){X[H]=b}),O.priority&&(Y=1)),!N||W)for(x in A)Yt[x]&&(O=af(x,A,e,z,F,S))?O.priority&&(Y=1):X[x]=b=vl.call(e,F,x,"get",A[x],z,S,0,i.stringFilter);e._op&&e._op[R]&&e.kill(F,e._op[R]),M&&e._pt&&(si=e,Je.killTweensOf(F,X,e.globalTime(t)),G=!e.parent,si=0),e._pt&&l&&(No[I.id]=1)}Y&&ff(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!G,g&&t<=0&&E.render(ln,!0,!0)},$x=function(e,t,n,i,r,a,o){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,h,f;if(!l)for(l=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(c=h[f][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Ho=1,e.vars[t]="+=0",xl(e,o),Ho=0,1;l.push(c)}for(f=l.length;f--;)u=l[f],c=u._pt||u,c.s=(i||i===0)&&!r?i:c.s+(i||0)+a*c.c,c.c=n-c.s,u.e&&(u.e=ot(n)+Ct(u.e)),u.b&&(u.b=c.s+Ct(u.b))},Jx=function(e,t){var n=e[0]?Ui(e[0]).harness:0,i=n&&n.aliases,r,a,o,l;if(!i)return t;r=Bi({},t);for(a in i)if(a in r)for(l=i[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},Qx=function(e,t,n,i){var r=t.ease||i||"power1.inOut",a,o;if(Lt(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:r})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:r})},Qr=function(e,t,n,i,r){return rt(e)?e.call(t,n,i,r):gt(e)&&~e.indexOf("random(")?os(e):e},of=_l+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",lf={};Vt(of+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return lf[s]=1});var ht=function(s){bh(e,s);function e(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:$r(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,y=i.parent||Je,v=(Lt(n)||Ah(n)?jn(n[0]):"length"in i)?[n]:cn(n),S,M,E,A,R,x,b,F;if(o._targets=v.length?gl(v):ta("GSAP target "+n+" not found. https://greensock.com",!$t.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,g||f||Gs(c)||Gs(u)){if(i=o.vars,S=o.timeline=new Nt({data:"nested",defaults:_||{},targets:y&&y.data==="nested"?y.vars.targets:v}),S.kill(),S.parent=S._dp=Wn(o),S._start=0,f||Gs(c)||Gs(u)){if(A=v.length,b=f&&Xh(f),Dn(f))for(R in f)~of.indexOf(R)&&(F||(F={}),F[R]=f[R]);for(M=0;M<A;M++)E=ia(i,lf),E.stagger=0,p&&(E.yoyoEase=p),F&&Bi(E,F),x=v[M],E.duration=+Qr(c,Wn(o),M,x,v),E.delay=(+Qr(u,Wn(o),M,x,v)||0)-o._delay,!f&&A===1&&E.delay&&(o._delay=u=E.delay,o._start+=u,E.delay=0),S.to(x,E,b?b(M,x,v):0),S._ease=ke.none;S.duration()?c=u=0:o.timeline=0}else if(g){$r(dn(S.vars.defaults,{ease:"none"})),S._ease=Oi(g.ease||i.ease||"none");var Y=0,I,N,O;if(Lt(g))g.forEach(function(X){return S.to(v,X,">")}),S.duration();else{E={};for(R in g)R==="ease"||R==="easeEach"||Qx(R,g[R],E,g.easeEach);for(R in E)for(I=E[R].sort(function(X,z){return X.t-z.t}),Y=0,M=0;M<I.length;M++)N=I[M],O={ease:N.e,duration:(N.t-(M?I[M-1].t:0))/100*c},O[R]=N.v,S.to(v,O,Y),Y+=O.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||o.duration(c=S.duration())}else o.timeline=0;return d===!0&&!ul&&(si=Wn(o),Je.killTweensOf(v),si=0),An(y,Wn(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!g&&o._start===St(y._time)&&zt(h)&&Px(Wn(o))&&y.data!=="nested")&&(o._tTime=-Ye,o.render(Math.max(0,-u)||0)),m&&Vh(Wn(o),m),o}var t=e.prototype;return t.render=function(i,r,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Ye&&!u?l:i<Ye?0:i,f,d,g,_,m,p,y,v,S;if(!c)Ix(this,i,r,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,v=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,r,a);if(f=St(h%_),h===l?(g=this._repeat,f=c):(g=~~(h/_),g&&g===h/_&&(f=c,g--),f>c&&(f=c)),p=this._yoyo&&g&1,p&&(S=this._yEase,f=c-f),m=wr(this._tTime,_),f===o&&!a&&this._initted)return this._tTime=h,this;g!==m&&(v&&this._yEase&&nf(v,p),this.vars.repeatRefresh&&!p&&!this._lock&&(this._lock=a=1,this.render(St(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Gh(this,u?i:f,a,r,h))return this._tTime=0,this;if(o!==this._time)return this;if(c!==this._dur)return this.render(i,r,a)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(S||this._ease)(f/c),this._from&&(this.ratio=y=1-y),f&&!o&&!r&&!g&&(un(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;v&&v.render(i<0?i:!f&&p?-Ye:v._dur*v._ease(f/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&Bo(this,i,r,a),un(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!r&&this.parent&&un(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Bo(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&di(this,1),!r&&!(u&&!o)&&(h||o||p)&&(un(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,a,o){ls||Kt.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||xl(this,l),c=this._ease(l/this._dur),$x(this,i,r,a,o,c,l)?this.resetTo(i,r,a,o):(Sa(this,0),this.parent||kh(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Xr(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,si&&si.vars.overwrite!==!0)._first||Xr(this),this.parent&&a!==this.timeline.totalDuration()&&Ar(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?cn(i):o,c=this._ptLookup,u=this._pt,h,f,d,g,_,m,p;if((!r||r==="all")&&Rx(o,l))return r==="all"&&(this._pt=0),Xr(this);for(h=this._op=this._op||[],r!=="all"&&(gt(r)&&(_={},Vt(r,function(y){return _[y]=1}),r=_),r=Jx(o,r)),p=o.length;p--;)if(~l.indexOf(o[p])){f=c[p],r==="all"?(h[p]=r,g=f,d={}):(d=h[p]=h[p]||{},g=r);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&ya(this,m,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&Xr(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return Jr(1,arguments)},e.delayedCall=function(i,r,a,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,r,a){return Jr(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,a){return Je.killTweensOf(i,r,a)},e}(cs);dn(ht.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Vt("staggerTo,staggerFrom,staggerFromTo",function(s){ht[s]=function(){var e=new Nt,t=zo.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var yl=function(e,t,n){return e[t]=n},cf=function(e,t,n){return e[t](n)},ey=function(e,t,n,i){return e[t](i.fp,n)},ty=function(e,t,n){return e.setAttribute(t,n)},Ml=function(e,t){return rt(e[t])?cf:hl(e[t])&&e.setAttribute?ty:yl},uf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},ny=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},hf=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Sl=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},iy=function(e,t,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(e,t,n),r=a},ry=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?ya(this,t,"_pt"):t.dep||(n=1),t=i;return!n},sy=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},ff=function(e){for(var t=e._pt,n,i,r,a;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=r},Gt=function(){function s(t,n,i,r,a,o,l,c,u){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||uf,this.d=l||this,this.set=c||yl,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=sy,this.m=n,this.mt=r,this.tween=i},s}();Vt(_l+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return ml[s]=1});Jt.TweenMax=Jt.TweenLite=ht;Jt.TimelineLite=Jt.TimelineMax=Nt;Je=new Nt({sortChildren:!1,defaults:br,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});$t.stringFilter=ef;var Ni=[],qs={},ay=[],Mu=0,oy=0,vo=function(e){return(qs[e]||ay).map(function(t){return t()})},Wo=function(){var e=Date.now(),t=[];e-Mu>2&&(vo("matchMediaInit"),Ni.forEach(function(n){var i=n.queries,r=n.conditions,a,o,l,c;for(o in i)a=tn.matchMedia(i[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),vo("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),Mu=e,vo("matchMedia"))},df=function(){function s(t,n){this.selector=n&&Vo(n),this.data=[],this._r=[],this.isReverted=!1,this.id=oy++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){rt(n)&&(r=i,i=n,n=rt);var a=this,o=function(){var c=it,u=a.selector,h;return c&&c!==a&&c.data.push(a),r&&(a.selector=Vo(r)),it=a,h=i.apply(a,arguments),rt(h)&&a._r.push(h),it=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===rt?o(a):n?a[n]=o:o},e.ignore=function(n){var i=it;it=null,n(this),it=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof ht&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n){var a=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}))}),a.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1/0}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof ht)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,r)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i)for(var o=Ni.length;o--;)Ni[o].id===this.id&&Ni.splice(o,1)},e.revert=function(n){this.kill(n||{})},s}(),ly=function(){function s(t){this.contexts=[],this.scope=t}var e=s.prototype;return e.add=function(n,i,r){Dn(n)||(n={matches:n});var a=new df(0,r||this.scope),o=a.conditions={},l,c,u;it&&!a.selector&&(a.selector=it.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=tn.matchMedia(n[c]),l&&(Ni.indexOf(a)<0&&Ni.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Wo):l.addEventListener("change",Wo)));return u&&i(a),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),sa={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return $h(i)})},timeline:function(e){return new Nt(e)},getTweensOf:function(e,t){return Je.getTweensOf(e,t)},getProperty:function(e,t,n,i){gt(e)&&(e=cn(e)[0]);var r=Ui(e||{}).get,a=n?Bh:Nh;return n==="native"&&(n=""),e&&(t?a((Yt[t]&&Yt[t].get||r)(e,t,n,i)):function(o,l,c){return a((Yt[o]&&Yt[o].get||r)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=cn(e),e.length>1){var i=e.map(function(u){return Ht.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var a=Yt[t],o=Ui(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;dr._pt=0,h.init(e,n?u+n:u,dr,0,[e]),h.render(1,h),dr._pt&&Sl(1,dr)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,r=Ht.to(e,Bi((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,u){return r.resetTo(t,l,c,u)};return a.tween=r,a},isTweening:function(e){return Je.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Oi(e.ease,br.ease)),_u(br,e||{})},config:function(e){return _u($t,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Yt[o]&&!Jt[o]&&ta(t+" effect requires "+o+" plugin.")}),po[t]=function(o,l,c){return n(cn(o),dn(l||{},r),c)},a&&(Nt.prototype[t]=function(o,l,c){return this.add(po[t](o,Dn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ke[e]=Oi(t)},parseEase:function(e,t){return arguments.length?Oi(e,t):ke},getById:function(e){return Je.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Nt(e),i,r;for(n.smoothChildTiming=zt(e.smoothChildTiming),Je.remove(n),n._dp=0,n._time=n._tTime=Je._time,i=Je._first;i;)r=i._next,(t||!(!i._dur&&i instanceof ht&&i.vars.onComplete===i._targets[0]))&&An(n,i,i._start-i._delay),i=r;return An(Je,n,0),n},context:function(e,t){return e?new df(e,t):it},matchMedia:function(e){return new ly(e)},matchMediaRefresh:function(){return Ni.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Wo()},addEventListener:function(e,t){var n=qs[e]||(qs[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=qs[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:zx,wrapYoyo:Vx,distribute:Xh,random:Yh,snap:qh,normalize:kx,getUnit:Ct,clamp:Fx,splitColor:Jh,toArray:cn,selector:Vo,mapRange:Kh,pipe:Nx,unitize:Bx,interpolate:Gx,shuffle:Wh},install:Ih,effects:po,ticker:Kt,updateRoot:Nt.updateRoot,plugins:Yt,globalTimeline:Je,core:{PropTween:Gt,globals:Dh,Tween:ht,Timeline:Nt,Animation:cs,getCache:Ui,_removeLinkedListItem:ya,reverting:function(){return Pt},context:function(e){return e&&it&&(it.data.push(e),e._ctx=it),it},suppressOverwrites:function(e){return ul=e}}};Vt("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return sa[s]=ht[s]});Kt.add(Nt.updateRoot);dr=sa.to({},{duration:0});var cy=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},uy=function(e,t){var n=e._targets,i,r,a;for(i in t)for(r=n.length;r--;)a=e._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=cy(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[r],i))},xo=function(e,t){return{name:e,rawVars:1,init:function(i,r,a){a._onInit=function(o){var l,c;if(gt(r)&&(l={},Vt(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}uy(o,r)}}}},Ht=sa.registerPlugin({name:"attr",init:function(e,t,n,i,r){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Pt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},xo("roundProps",Go),xo("modifiers"),xo("snap",qh))||sa;ht.version=Nt.version=Ht.version="3.12.2";Lh=1;fl()&&Rr();ke.Power0;ke.Power1;ke.Power2;ke.Power3;ke.Power4;ke.Linear;ke.Quad;ke.Cubic;ke.Quart;ke.Quint;ke.Strong;ke.Elastic;ke.Back;ke.SteppedEase;ke.Bounce;ke.Sine;ke.Expo;ke.Circ;/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Su,ai,gr,Tl,Ci,Tu,El,hy=function(){return typeof window<"u"},Kn={},Ai=180/Math.PI,vr=Math.PI/180,ar=Math.atan2,Eu=1e8,bl=/([A-Z])/g,fy=/(left|right|width|margin|padding|x)/i,dy=/[\s,\(]\S/,Rn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Xo=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},py=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},my=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},_y=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},pf=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},mf=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},gy=function(e,t,n){return e.style[t]=n},vy=function(e,t,n){return e.style.setProperty(t,n)},xy=function(e,t,n){return e._gsap[t]=n},yy=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},My=function(e,t,n,i,r){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},Sy=function(e,t,n,i,r){var a=e._gsap;a[t]=n,a.renderTransform(r,a)},Qe="transform",Mn=Qe+"Origin",Ty=function s(e,t){var n=this,i=this.target,r=i.style;if(e in Kn&&r){if(this.tfm=this.tfm||{},e!=="transform")e=Rn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Xn(i,a)}):this.tfm[e]=i._gsap.x?i._gsap[e]:Xn(i,e);else return Rn.transform.split(",").forEach(function(a){return s.call(n,a,t)});if(this.props.indexOf(Qe)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Mn,t,"")),e=Qe}(r||t)&&this.props.push(e,t,r[e])},_f=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Ey=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(bl,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=El(),(!r||!r.isStart)&&!n[Qe]&&(_f(n),i.uncache=1)}},gf=function(e,t){var n={target:e,props:[],revert:Ey,save:Ty};return e._gsap||Ht.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},vf,qo=function(e,t){var n=ai.createElementNS?ai.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ai.createElement(e);return n.style?n:ai.createElement(e)},In=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(bl,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,Cr(t)||t,1)||""},bu="O,Moz,ms,Ms,Webkit".split(","),Cr=function(e,t,n){var i=t||Ci,r=i.style,a=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(bu[a]+e in r););return a<0?null:(a===3?"ms":a>=0?bu[a]:"")+e},Yo=function(){hy()&&window.document&&(Su=window,ai=Su.document,gr=ai.documentElement,Ci=qo("div")||{style:{}},qo("div"),Qe=Cr(Qe),Mn=Qe+"Origin",Ci.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",vf=!!Cr("perspective"),El=Ht.core.reverting,Tl=1)},yo=function s(e){var t=qo("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,a;if(gr.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),gr.removeChild(t),this.style.cssText=r,a},wu=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},xf=function(e){var t;try{t=e.getBBox()}catch{t=yo.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===yo||(t=yo.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+wu(e,["x","cx","x1"])||0,y:+wu(e,["y","cy","y1"])||0,width:0,height:0}:t},yf=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&xf(e))},us=function(e,t){if(t){var n=e.style;t in Kn&&t!==Mn&&(t=Qe),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(bl,"-$1").toLowerCase())):n.removeAttribute(t)}},oi=function(e,t,n,i,r,a){var o=new Gt(e._pt,t,n,0,1,a?mf:pf);return e._pt=o,o.b=i,o.e=r,e._props.push(n),o},Au={deg:1,rad:1,turn:1},by={grid:1,flex:1},pi=function s(e,t,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=Ci.style,l=fy.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",g,_,m,p;return i===a||!r||Au[i]||Au[a]?r:(a!=="px"&&!f&&(r=s(e,t,n,"px")),p=e.getCTM&&yf(e),(d||a==="%")&&(Kn[t]||~t.indexOf("adius"))?(g=p?e.getBBox()[l?"width":"height"]:e[u],ot(d?r/g*h:r/100*g)):(o[l?"width":"height"]=h+(f?a:i),_=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===ai||!_.appendChild)&&(_=ai.body),m=_._gsap,m&&d&&m.width&&l&&m.time===Kt.time&&!m.uncache?ot(r/m.width*h):((d||a==="%")&&!by[In(_,"display")]&&(o.position=In(e,"position")),_===e&&(o.position="static"),_.appendChild(Ci),g=Ci[u],_.removeChild(Ci),o.position="absolute",l&&d&&(m=Ui(_),m.time=Kt.time,m.width=_[u]),ot(f?g*r/h:g&&r?h/g*r:0))))},Xn=function(e,t,n,i){var r;return Tl||Yo(),t in Rn&&t!=="transform"&&(t=Rn[t],~t.indexOf(",")&&(t=t.split(",")[0])),Kn[t]&&t!=="transform"?(r=fs(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:oa(In(e,Mn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=aa[t]&&aa[t](e,t,n)||In(e,t)||Fh(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?pi(e,t,r,n)+n:r},wy=function(e,t,n,i){if(!n||n==="none"){var r=Cr(t,e,1),a=r&&In(e,r,1);a&&a!==n?(t=r,n=a):t==="borderColor"&&(n=In(e,"borderTopColor"))}var o=new Gt(this._pt,e.style,t,0,1,hf),l=0,c=0,u,h,f,d,g,_,m,p,y,v,S,M;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=In(e,t)||i,e.style[t]=n),u=[n,i],ef(u),n=u[0],i=u[1],f=n.match(fr)||[],M=i.match(fr)||[],M.length){for(;h=fr.exec(i);)m=h[0],y=i.substring(l,h.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),m!==(_=f[c++]||"")&&(d=parseFloat(_)||0,S=_.substr((d+"").length),m.charAt(1)==="="&&(m=_r(d,m)+S),p=parseFloat(m),v=m.substr((p+"").length),l=fr.lastIndex-v.length,v||(v=v||$t.units[t]||S,l===i.length&&(i+=v,o.e+=v)),S!==v&&(d=pi(e,t,_,v)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:d,c:p-d,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?mf:pf;return Ch.test(i)&&(o.e=0),this._pt=o,o},Ru={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Ay=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Ru[n]||n,t[1]=Ru[i]||i,t.join(" ")},Ry=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,a=n._gsap,o,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],Kn[o]&&(l=1,o=o==="transformOrigin"?Mn:Qe),us(n,o);l&&(us(n,Qe),a&&(a.svg&&n.removeAttribute("transform"),fs(n,1),a.uncache=1,_f(i)))}},aa={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var a=e._pt=new Gt(e._pt,t,n,0,0,Ry);return a.u=i,a.pr=-10,a.tween=r,e._props.push(n),1}}},hs=[1,0,0,1,0,0],Mf={},Sf=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Cu=function(e){var t=In(e,Qe);return Sf(t)?hs:t.substr(7).match(Rh).map(ot)},wl=function(e,t){var n=e._gsap||Ui(e),i=e.style,r=Cu(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?hs:r):(r===hs&&!e.offsetParent&&e!==gr&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(c=1,o=e.nextElementSibling,gr.appendChild(e)),r=Cu(e),l?i.display=l:us(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):gr.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},jo=function(e,t,n,i,r,a){var o=e._gsap,l=r||wl(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],y=l[5],v=t.split(" "),S=parseFloat(v[0])||0,M=parseFloat(v[1])||0,E,A,R,x;n?l!==hs&&(A=d*m-g*_)&&(R=S*(m/A)+M*(-_/A)+(_*y-m*p)/A,x=S*(-g/A)+M*(d/A)-(d*y-g*p)/A,S=R,M=x):(E=xf(e),S=E.x+(~v[0].indexOf("%")?S/100*E.width:S),M=E.y+(~(v[1]||v[0]).indexOf("%")?M/100*E.height:M)),i||i!==!1&&o.smooth?(p=S-c,y=M-u,o.xOffset=h+(p*d+y*_)-p,o.yOffset=f+(p*g+y*m)-y):o.xOffset=o.yOffset=0,o.xOrigin=S,o.yOrigin=M,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Mn]="0px 0px",a&&(oi(a,o,"xOrigin",c,S),oi(a,o,"yOrigin",u,M),oi(a,o,"xOffset",h,o.xOffset),oi(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",S+" "+M)},fs=function(e,t){var n=e._gsap||new sf(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=In(e,Mn)||"0",u,h,f,d,g,_,m,p,y,v,S,M,E,A,R,x,b,F,Y,I,N,O,X,z,W,G,H,le,D,J,$,ie;return u=h=f=_=m=p=y=v=S=0,d=g=1,n.svg=!!(e.getCTM&&yf(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Qe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Qe]!=="none"?l[Qe]:"")),i.scale=i.rotate=i.translate="none"),A=wl(e,n.svg),n.svg&&(n.uncache?(W=e.getBBox(),c=n.xOrigin-W.x+"px "+(n.yOrigin-W.y)+"px",z=""):z=!t&&e.getAttribute("data-svg-origin"),jo(e,z||c,!!z||n.originIsAbsolute,n.smooth!==!1,A)),M=n.xOrigin||0,E=n.yOrigin||0,A!==hs&&(F=A[0],Y=A[1],I=A[2],N=A[3],u=O=A[4],h=X=A[5],A.length===6?(d=Math.sqrt(F*F+Y*Y),g=Math.sqrt(N*N+I*I),_=F||Y?ar(Y,F)*Ai:0,y=I||N?ar(I,N)*Ai+_:0,y&&(g*=Math.abs(Math.cos(y*vr))),n.svg&&(u-=M-(M*F+E*I),h-=E-(M*Y+E*N))):(ie=A[6],J=A[7],H=A[8],le=A[9],D=A[10],$=A[11],u=A[12],h=A[13],f=A[14],R=ar(ie,D),m=R*Ai,R&&(x=Math.cos(-R),b=Math.sin(-R),z=O*x+H*b,W=X*x+le*b,G=ie*x+D*b,H=O*-b+H*x,le=X*-b+le*x,D=ie*-b+D*x,$=J*-b+$*x,O=z,X=W,ie=G),R=ar(-I,D),p=R*Ai,R&&(x=Math.cos(-R),b=Math.sin(-R),z=F*x-H*b,W=Y*x-le*b,G=I*x-D*b,$=N*b+$*x,F=z,Y=W,I=G),R=ar(Y,F),_=R*Ai,R&&(x=Math.cos(R),b=Math.sin(R),z=F*x+Y*b,W=O*x+X*b,Y=Y*x-F*b,X=X*x-O*b,F=z,O=W),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=ot(Math.sqrt(F*F+Y*Y+I*I)),g=ot(Math.sqrt(X*X+ie*ie)),R=ar(O,X),y=Math.abs(R)>2e-4?R*Ai:0,S=$?1/($<0?-$:$):0),n.svg&&(z=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Sf(In(e,Qe)),z&&e.setAttribute("transform",z))),Math.abs(y)>90&&Math.abs(y)<270&&(r?(d*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=ot(d),n.scaleY=ot(g),n.rotation=ot(_)+o,n.rotationX=ot(m)+o,n.rotationY=ot(p)+o,n.skewX=y+o,n.skewY=v+o,n.transformPerspective=S+a,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[Mn]=oa(c)),n.xOffset=n.yOffset=0,n.force3D=$t.force3D,n.renderTransform=n.svg?Py:vf?Tf:Cy,n.uncache=0,n},oa=function(e){return(e=e.split(" "))[0]+" "+e[1]},Mo=function(e,t,n){var i=Ct(t);return ot(parseFloat(t)+parseFloat(pi(e,"x",n+"px",i)))+i},Cy=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Tf(e,t)},Ei="0deg",Gr="0px",bi=") ",Tf=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,y=n.target,v=n.zOrigin,S="",M=p==="auto"&&e&&e!==1||p===!0;if(v&&(h!==Ei||u!==Ei)){var E=parseFloat(u)*vr,A=Math.sin(E),R=Math.cos(E),x;E=parseFloat(h)*vr,x=Math.cos(E),a=Mo(y,a,A*x*-v),o=Mo(y,o,-Math.sin(E)*-v),l=Mo(y,l,R*x*-v+v)}m!==Gr&&(S+="perspective("+m+bi),(i||r)&&(S+="translate("+i+"%, "+r+"%) "),(M||a!==Gr||o!==Gr||l!==Gr)&&(S+=l!==Gr||M?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+bi),c!==Ei&&(S+="rotate("+c+bi),u!==Ei&&(S+="rotateY("+u+bi),h!==Ei&&(S+="rotateX("+h+bi),(f!==Ei||d!==Ei)&&(S+="skew("+f+", "+d+bi),(g!==1||_!==1)&&(S+="scale("+g+", "+_+bi),y.style[Qe]=S||"translate(0, 0)"},Py=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,y=n.forceCSS,v=parseFloat(a),S=parseFloat(o),M,E,A,R,x;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=vr,c*=vr,M=Math.cos(l)*h,E=Math.sin(l)*h,A=Math.sin(l-c)*-f,R=Math.cos(l-c)*f,c&&(u*=vr,x=Math.tan(c-u),x=Math.sqrt(1+x*x),A*=x,R*=x,u&&(x=Math.tan(u),x=Math.sqrt(1+x*x),M*=x,E*=x)),M=ot(M),E=ot(E),A=ot(A),R=ot(R)):(M=h,R=f,E=A=0),(v&&!~(a+"").indexOf("px")||S&&!~(o+"").indexOf("px"))&&(v=pi(d,"x",a,"px"),S=pi(d,"y",o,"px")),(g||_||m||p)&&(v=ot(v+g-(g*M+_*A)+m),S=ot(S+_-(g*E+_*R)+p)),(i||r)&&(x=d.getBBox(),v=ot(v+i/100*x.width),S=ot(S+r/100*x.height)),x="matrix("+M+","+E+","+A+","+R+","+v+","+S+")",d.setAttribute("transform",x),y&&(d.style[Qe]=x)},Ly=function(e,t,n,i,r){var a=360,o=gt(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?Ai:1),c=l-i,u=i+c+"deg",h,f;return o&&(h=r.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*Eu)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*Eu)%a-~~(c/a)*a)),e._pt=f=new Gt(e._pt,t,n,i,c,py),f.e=u,f.u="deg",e._props.push(n),f},Pu=function(e,t){for(var n in t)e[n]=t[n];return e},Iy=function(e,t,n){var i=Pu({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,f,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Qe]=t,o=fs(n,1),us(n,Qe),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Qe],a[Qe]=t,o=fs(n,1),a[Qe]=c);for(l in Kn)c=i[l],u=o[l],c!==u&&r.indexOf(l)<0&&(d=Ct(c),g=Ct(u),h=d!==g?pi(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new Gt(e._pt,o,l,h,f-h,Xo),e._pt.u=g||0,e._props.push(l));Pu(o,i)};Vt("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",a=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(o){return e<2?s+o:"border"+o+s});aa[e>1?"border"+s:s]=function(o,l,c,u,h){var f,d;if(arguments.length<4)return f=a.map(function(g){return Xn(o,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},a.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(l,d,h)}});var Ef={name:"css",register:Yo,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var a=this._props,o=e.style,l=n.vars.startAt,c,u,h,f,d,g,_,m,p,y,v,S,M,E,A,R;Tl||Yo(),this.styles=this.styles||gf(e),R=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Yt[_]&&af(_,t,n,i,e,r)))){if(d=typeof u,g=aa[_],d==="function"&&(u=u.call(n,i,e,r),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=os(u)),g)g(this,e,_,u,n)&&(A=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",hi.lastIndex=0,hi.test(c)||(m=Ct(c),p=Ct(u)),p?m!==p&&(c=pi(e,_,c,p)+p):m&&(u+=m),this.add(o,"setProperty",c,u,i,r,0,0,_),a.push(_),R.push(_,0,o[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,r):l[_],gt(c)&&~c.indexOf("random(")&&(c=os(c)),Ct(c+"")||(c+=$t.units[_]||Ct(Xn(e,_))||""),(c+"").charAt(1)==="="&&(c=Xn(e,_))):c=Xn(e,_),f=parseFloat(c),y=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),_ in Rn&&(_==="autoAlpha"&&(f===1&&Xn(e,"visibility")==="hidden"&&h&&(f=0),R.push("visibility",0,o.visibility),oi(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Rn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in Kn,v){if(this.styles.save(_),S||(M=e._gsap,M.renderTransform&&!t.parseTransform||fs(e,t.parseTransform),E=t.smoothOrigin!==!1&&M.smooth,S=this._pt=new Gt(this._pt,o,Qe,0,1,M.renderTransform,M,0,-1),S.dep=1),_==="scale")this._pt=new Gt(this._pt,M,"scaleY",M.scaleY,(y?_r(M.scaleY,y+h):h)-M.scaleY||0,Xo),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){R.push(Mn,0,o[Mn]),u=Ay(u),M.svg?jo(e,u,0,E,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==M.zOrigin&&oi(this,M,"zOrigin",M.zOrigin,p),oi(this,o,_,oa(c),oa(u)));continue}else if(_==="svgOrigin"){jo(e,u,1,E,0,this);continue}else if(_ in Mf){Ly(this,M,_,f,y?_r(f,y+u):u);continue}else if(_==="smoothOrigin"){oi(this,M,"smooth",M.smooth,u);continue}else if(_==="force3D"){M[_]=u;continue}else if(_==="transform"){Iy(this,u,e);continue}}else _ in o||(_=Cr(_)||_);if(v||(h||h===0)&&(f||f===0)&&!dy.test(u)&&_ in o)m=(c+"").substr((f+"").length),h||(h=0),p=Ct(u)||(_ in $t.units?$t.units[_]:m),m!==p&&(f=pi(e,_,c,p)),this._pt=new Gt(this._pt,v?M:o,_,f,(y?_r(f,y+h):h)-f,!v&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?_y:Xo),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=my);else if(_ in o)wy.call(this,e,_,c,y?y+u:u);else if(_ in e)this.add(e,_,c||e[_],y?y+u:u,i,r);else if(_!=="parseTransform"){pl(_,u);continue}v||(_ in o?R.push(_,0,o[_]):R.push(_,1,c||e[_])),a.push(_)}}A&&ff(this)},render:function(e,t){if(t.tween._time||!El())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Xn,aliases:Rn,getSetter:function(e,t,n){var i=Rn[t];return i&&i.indexOf(",")<0&&(t=i),t in Kn&&t!==Mn&&(e._gsap.x||Xn(e,"x"))?n&&Tu===n?t==="scale"?yy:xy:(Tu=n||{})&&(t==="scale"?My:Sy):e.style&&!hl(e.style[t])?gy:~t.indexOf("-")?vy:Ml(e,t)},core:{_removeProperty:us,_getMatrix:wl}};Ht.utils.checkPrefix=Cr;Ht.core.getStyleSaver=gf;(function(s,e,t,n){var i=Vt(s+","+e+","+t,function(r){Kn[r]=1});Vt(e,function(r){$t.units[r]="deg",Mf[r]=1}),Rn[i[13]]=s+","+e,Vt(n,function(r){var a=r.split(":");Rn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Vt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){$t.units[s]="px"});Ht.registerPlugin(Ef);var la=Ht.registerPlugin(Ef)||Ht;la.core.Tween;function Dy(){const s=document.querySelector(".modal"),e=document.querySelectorAll("[data-toggle=modal]"),t=document.querySelector(".modal__close");function n(){s.classList.add("show"),s.classList.remove("hide"),document.body.style.overflow="hidden"}e.forEach(r=>{r.addEventListener("click",n)});function i(){s.classList.add("hide"),s.classList.remove("show"),document.body.style.overflow=""}t.addEventListener("click",i),s.addEventListener("click",r=>{(r.target===s||r.target.getAttribute("data-close")=="")&&i()}),document.addEventListener("keydown",r=>{r.code==="Escape"&&s.classList.contains("show")&&i()})}function Uy(){const s=document.querySelector("h1"),e=document.querySelectorAll(".promo-anim");let t=2;e.forEach((n,i)=>{la.fromTo(n,{opacity:0,y:20},{opacity:1,y:0,duration:1,delay:i*.4+t})}),s.childNodes.forEach((n,i)=>{la.fromTo(n,{opacity:0,x:Math.random()*200-100,y:Math.random()*200-100},{opacity:1,x:0,y:0,duration:1,delay:i*.1})})}var Fy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Oy(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var bf={exports:{}};(function(s,e){(function(t,n){s.exports=n()})(Fy,function(){var t=function(){function n(d){return a.appendChild(d.dom),d}function i(d){for(var g=0;g<a.children.length;g++)a.children[g].style.display=g===d?"block":"none";r=d}var r=0,a=document.createElement("div");a.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",a.addEventListener("click",function(d){d.preventDefault(),i(++r%a.children.length)},!1);var o=(performance||Date).now(),l=o,c=0,u=n(new t.Panel("FPS","#0ff","#002")),h=n(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var f=n(new t.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:a,addPanel:n,showPanel:i,begin:function(){o=(performance||Date).now()},end:function(){c++;var d=(performance||Date).now();if(h.update(d-o,200),d>l+1e3&&(u.update(1e3*c/(d-l),100),l=d,c=0,f)){var g=performance.memory;f.update(g.usedJSHeapSize/1048576,g.jsHeapSizeLimit/1048576)}return d},update:function(){o=this.end()},domElement:a,setMode:i}};return t.Panel=function(n,i,r){var a=1/0,o=0,l=Math.round,c=l(window.devicePixelRatio||1),u=80*c,h=48*c,f=3*c,d=2*c,g=3*c,_=15*c,m=74*c,p=30*c,y=document.createElement("canvas");y.width=u,y.height=h,y.style.cssText="width:80px;height:48px";var v=y.getContext("2d");return v.font="bold "+9*c+"px Helvetica,Arial,sans-serif",v.textBaseline="top",v.fillStyle=r,v.fillRect(0,0,u,h),v.fillStyle=i,v.fillText(n,f,d),v.fillRect(g,_,m,p),v.fillStyle=r,v.globalAlpha=.9,v.fillRect(g,_,m,p),{dom:y,update:function(S,M){a=Math.min(a,S),o=Math.max(o,S),v.fillStyle=r,v.globalAlpha=1,v.fillRect(0,0,u,_),v.fillStyle=i,v.fillText(l(S)+" "+n+" ("+l(a)+"-"+l(o)+")",f,d),v.drawImage(y,g+c,_,m-c,p,g,_,m-c,p),v.fillRect(g+m-c,_,c,p),v.fillStyle=r,v.globalAlpha=.9,v.fillRect(g+m-c,_,c,l((1-S/M)*p))}}},t})})(bf);var Ny=bf.exports;const By=Oy(Ny);Dy();const Ko=new By;Ko.showPanel(0);document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelector("canvas.webgl"),e=new Y0,t={color:"#00eeff"},n="Rostyslav Yaremenko",i=document.querySelector("h1"),r=document.querySelector(".loading-bar");for(let G=0;G<n.length;G++){const H=document.createElement("span");H.classList.add("hoverable"),H.innerHTML=n[G],i.appendChild(H)}const a=document.querySelector(".overley"),o=new uh(()=>{window.setTimeout(()=>{Uy(),r.classList.add("ended"),r.style.transform="",a.classList.add("ended")},1e3)},(G,H,le)=>{const D=H/le;r.style.transform=`scaleX(${D})`}),l=new tx(o);let c=null,u=null;const h=new fa({color:t.color});l.load("/models/baby.fbx",G=>{u=G,console.log(G),G.scale.set(.2,.2,.2),e.add(G);const H=G.children.find(J=>J.name==="body"),le=G.children[1];le.material.side=bn,H.material=h,c=new Lv(G),c.clipAction(G.animations[0]).play()});const f=new Iv,d=new Ae;let g=document.querySelector(".circle"),_=!0;function m(G,H){return G?G.classList.contains(H)?!0:m(G.parentElement,H):!1}function p(G){let H=G.clientX,le=G.clientY;const D=document.elementFromPoint(H,le);D&&D.classList.contains("hoverable")?g.classList.add("hover"):g.classList.remove("hover"),D&&D.classList.contains("link-projects")?g.classList.add("hover-link"):g.classList.remove("hover-link"),m(D,"container")?_=!1:_=!0,D&&D.classList.contains("icon")?g.classList.add("hover-icon"):g.classList.remove("hover-icon"),la.to(g,{duration:.5,left:H,top:le})}window.addEventListener("mousemove",G=>{p(G),d.x=G.clientX/M.width*2-1,d.y=-(G.clientY/M.height)*2+1}),d.x=-1,d.y=1;let y=null,v=!1;const S=()=>{f.setFromCamera(d,E);const G=f.intersectObjects(u.children,!0);G.length>0&&_?(v||(y=h.color.clone(),h.color.set("#ff3838"),g.classList.add("hide")),G[0],v=!0):v&&(h.color.set(y),v=!1,g.classList.remove("hide"))},M={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{M.width=window.innerWidth,M.height=window.innerHeight,E.aspect=M.width/M.height,E.updateProjectionMatrix(),b.setSize(M.width,M.height),b.setPixelRatio(Math.min(window.devicePixelRatio,2)),F.setSize(M.width,M.height),F.setPixelRatio(Math.min(window.devicePixelRatio,2))});const E=new Rt(45,M.width/M.height,.1,100);E.position.z=20,E.position.y=40,e.add(E);let A=0;const R={speed:.002,xFactor:50,zFactor:40,yOffset:10,lookAtY:15},x=()=>{A+=R.speed,E.position.x=-Math.sin(A+1)*R.xFactor,E.position.z=-Math.cos(A+1)*R.zFactor;let G=20*Math.cos(A+1)+R.yOffset;G>=5&&(E.position.y=G),E.lookAt(0,R.lookAtY,0)},b=new rh({canvas:s,antialias:!0,alpha:!0});b.setSize(M.width,M.height),b.setPixelRatio(Math.min(window.devicePixelRatio,2));const F=new _x(b);F.setSize(M.width,M.height),F.setPixelRatio(Math.min(window.devicePixelRatio,2));const Y=new gx(e,E);Y.clearAlpha=0,F.addPass(Y);const I=new Er;I.renderToScreen=!0,F.addPass(I),I.strength=.8,I.radius=.6,I.threshold=.2;const N=new da(50,50),O=new xa(N,{clipBias:.003,textureWidth:window.innerWidth*window.devicePixelRatio,textureHeight:window.innerHeight*window.devicePixelRatio,color:7829367});O.rotateX(-Math.PI/2),e.add(O);const X=new hh;let z=0;const W=()=>{Ko.begin();const G=X.getElapsedTime(),H=G-z;z=G,x(),u&&(S(),c.update(H)),F.render(),window.requestAnimationFrame(W),Ko.end()};W()});
//# sourceMappingURL=index-907a7503.js.map
