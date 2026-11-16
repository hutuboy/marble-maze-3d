(()=>{var oh=0,xl=1,lh=2;var tr=1,wa=2,jn=3,nn=0,Ce=1,pe=2,gn=0,ts=1,er=2,vl=3,yl=4,ch=5;var _n=100,hh=101,uh=102,dh=103,fh=104,ph=200,mh=201,gh=202,_h=203,Ml=204,Sl=205,xh=206,vh=207,yh=208,Mh=209,Sh=210,bh=211,Eh=212,Th=213,wh=214,Wr=0,Xr=1,qr=2,Bn=3,Yr=4,$r=5,Zr=6,Jr=7,bl=0,Ah=1,Rh=2,wi=0,El=1,Tl=2,wl=3,ir=4,Al=5,Rl=6,Cl=7;var Il=300,xn=301,es=302,is=303,Aa=304,dn=1e3,vi=1001,Kr=1002,Ee=1003,Ch=1004;var nr=1005;var ze=1006,Ra=1007;var Gi=1008;var Ve=1009,Pl=1010,Ll=1011,ns=1012,Ca=1013,di=1014,ri=1015,fi=1016,Ia=1017,Pa=1018,vn=1020,Dl=35902,Nl=35899,Ul=1021,Fl=1022,pi=1023,Fi=1026,Hi=1027,La=1028,Da=1029,sn=1030,Na=1031;var Ua=1033,sr=33776,rr=33777,ar=33778,or=33779,Fa=35840,Oa=35841,Ba=35842,za=35843,ka=36196,Ga=37492,Ha=37496,Va=37488,Wa=37489,lr=37490,Xa=37491,qa=37808,Ya=37809,$a=37810,Za=37811,Ja=37812,Ka=37813,Qa=37814,ja=37815,to=37816,eo=37817,io=37818,no=37819,so=37820,ro=37821,ao=36492,oo=36494,lo=36495,co=36283,ho=36284,cr=36285,uo=36286;var ys=2300,Qr=2301,Hr=2302,al=2303,ol=2400,ll=2401,cl=2402;var Ih=3200;var fo=0,Ph=1,Vi="",Ue="srgb",Ms="srgb-linear",Ss="linear",Jt="srgb";var Vr=7680;var Lh=519,Dh=512,Nh=513,Uh=514,Ol=515,Fh=516,Oh=517,Bl=518,zl=519,Bh=35044;var kl="300 es",si=2e3,zn=2001;function Qu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ju(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function bs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function zh(){let n=bs("canvas");return n.style.display="block",n}var Ac={},kn=null;function Gl(...n){let t="THREE."+n.shift();kn?kn("log",t,...n):console.log(t,...n)}function kh(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ct(...n){n=kh(n);let t="THREE."+n.shift();if(kn)kn("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Pt(...n){n=kh(n);let t="THREE."+n.shift();if(kn)kn("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function _s(...n){let t=n.join(" ");t in Ac||(Ac[t]=!0,Ct(...n))}function Gh(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Hh={[Wr]:Wr,[qr]:Zr,[Yr]:Yr,[Bn]:$r,[Xr]:Xr,[Zr]:qr,[Jr]:Jr,[$r]:Bn},Mi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Uo=Math.PI/180,jr=180/Math.PI;function ss(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[i&255]+De[i>>8&255]+De[i>>16&255]+De[i>>24&255]).toLowerCase()}function Gt(n,t,e){return Math.max(t,Math.min(e,n))}function td(n,t){return(n%t+t)%t}function Fo(n,t,e){return(1-e)*n+e*t}function Vh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Hl(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function ed(n,t){if(t.constructor===Float32Array)return n;let e=Hl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/e,-1)}function id(n,t){if(t.constructor===Float32Array)return n;let e=Hl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*e)}var $l=class $l{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Gt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Gt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};$l.prototype.isVector2=!0;var xt=$l,Ye=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[a+0],f=r[a+1],g=r[a+2],y=r[a+3];if(d!==y||l!==u||c!==f||h!==g){let p=l*u+c*f+h*g+d*y;p<0&&(u=-u,f=-f,g=-g,y=-y,p=-p);let m=1-o;if(p<.9995){let v=Math.acos(p),E=Math.sin(v);m=Math.sin(m*v)/E,o=Math.sin(o*v)/E,l=l*m+u*o,c=c*m+f*o,h=h*m+g*o,d=d*m+y*o}else{l=l*m+u*o,c=c*m+f*o,h=h*m+g*o,d=d*m+y*o;let v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-o*f,t[e+2]=c*g+h*f+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(r/2),u=l(i/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:Ct("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=i+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>d){let f=2*Math.sqrt(1+i-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-i-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Gt(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Zl=class Zl{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Rc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Rc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),h=2*(o*e-r*s),d=2*(r*i-a*e);return this.x=e+l*c+a*d-o*h,this.y=i+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Gt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Oo.copy(this).projectOnVector(t),this.sub(Oo)}reflect(t){return this.sub(Oo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Gt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Zl.prototype.isVector3=!0;var O=Zl,Oo=new O,Rc=new Ye,Jl=class Jl{constructor(t,e,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],y=s[0],p=s[3],m=s[6],v=s[1],E=s[4],S=s[7],A=s[2],T=s[5],_=s[8];return r[0]=a*y+o*v+l*A,r[3]=a*p+o*E+l*T,r[6]=a*m+o*S+l*_,r[1]=c*y+h*v+d*A,r[4]=c*p+h*E+d*T,r[7]=c*m+h*S+d*_,r[2]=u*y+f*v+g*A,r[5]=u*p+f*E+g*T,r[8]=u*m+f*S+g*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=e*d+i*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=d*y,t[1]=(s*c-h*i)*y,t[2]=(o*i-s*a)*y,t[3]=u*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-o*e)*y,t[6]=f*y,t[7]=(i*l-c*e)*y,t[8]=(a*e-i*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return _s("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Bo.makeScale(t,e)),this}rotate(t){return _s("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Bo.makeRotation(-t)),this}translate(t,e){return _s("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Bo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Jl.prototype.isMatrix3=!0;var Lt=Jl,Bo=new Lt,Cc=new Lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ic=new Lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nd(){let n={enabled:!0,workingColorSpace:Ms,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Jt&&(s.r=Ui(s.r),s.g=Ui(s.g),s.b=Ui(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Jt&&(s.r=Fn(s.r),s.g=Fn(s.g),s.b=Fn(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Vi?Ss:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ms]:{primaries:t,whitePoint:i,transfer:Ss,toXYZ:Cc,fromXYZ:Ic,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ue},outputColorSpaceConfig:{drawingBufferColorSpace:Ue}},[Ue]:{primaries:t,whitePoint:i,transfer:Jt,toXYZ:Cc,fromXYZ:Ic,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ue}}}),n}var Xt=nd();function Ui(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Fn(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Sn,ta=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Sn===void 0&&(Sn=bs("canvas")),Sn.width=t.width,Sn.height=t.height;let s=Sn.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Sn}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=bs("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ui(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ui(e[i]/255)*255):e[i]=Ui(e[i]);return{data:e,width:t.width,height:t.height}}else return Ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},sd=0,Gn=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=ss(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(zo(s[a].image)):r.push(zo(s[a]))}else r=zo(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function zo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ta.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ct("Texture: Unable to serialize Texture."),{})}var rd=0,ko=new O,ke=class n extends Mi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=vi,s=vi,r=ze,a=Gi,o=pi,l=Ve,c=n.DEFAULT_ANISOTROPY,h=Vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=ss(),this.name="",this.source=new Gn(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ko).x}get height(){return this.source.getSize(ko).y}get depth(){return this.source.getSize(ko).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Ct(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ct(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Il)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case dn:t.x=t.x-Math.floor(t.x);break;case vi:t.x=t.x<0?0:1;break;case Kr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case dn:t.y=t.y-Math.floor(t.y);break;case vi:t.y=t.y<0?0:1;break;case Kr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=Il;ke.DEFAULT_ANISOTROPY=1;var Kl=class Kl{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],y=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,S=(f+1)/2,A=(m+1)/2,T=(h+u)/4,_=(d+y)/4,b=(g+p)/4;return E>S&&E>A?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=T/i,r=_/i):S>A?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=T/s,r=b/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=_/r,s=b/r),this.set(i,s,r,e),this}let v=Math.sqrt((p-g)*(p-g)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(d-y)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this.w=Gt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this.w=Gt(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Gt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Kl.prototype.isVector4=!0;var oe=Kl,ea=class extends Mi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ze,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new oe(0,0,t,e),this.scissorTest=!1,this.viewport=new oe(0,0,t,e),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new ke({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:ze,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Gn(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},$e=class extends ea{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Es=class extends ke{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ee,this.minFilter=Ee,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ia=class extends ke{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ee,this.minFilter=Ee,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ta=class Ta{constructor(t,e,i,s,r,a,o,l,c,h,d,u,f,g,y,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,h,d,u,f,g,y,p)}set(t,e,i,s,r,a,o,l,c,h,d,u,f,g,y,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=g,m[11]=y,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ta().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/bn.setFromMatrixColumn(t,0).length(),r=1/bn.setFromMatrixColumn(t,1).length(),a=1/bn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,g=o*h,y=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-y*c,e[9]=-o*l,e[2]=y-u*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,g=c*h,y=c*d;e[0]=u+y*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=y+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,g=c*h,y=c*d;e[0]=u-y*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=y-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,f=a*d,g=o*h,y=o*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+y,e[1]=l*d,e[5]=y*c+u,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=y-u*d,e[8]=g*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-y*d}else if(t.order==="XZY"){let u=a*l,f=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+y,e[5]=a*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*h,e[10]=y*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ad,t,od)}lookAt(t,e,i){let s=this.elements;return We.subVectors(t,e),We.lengthSq()===0&&(We.z=1),We.normalize(),qi.crossVectors(i,We),qi.lengthSq()===0&&(Math.abs(i.z)===1?We.x+=1e-4:We.z+=1e-4,We.normalize(),qi.crossVectors(i,We)),qi.normalize(),_r.crossVectors(We,qi),s[0]=qi.x,s[4]=_r.x,s[8]=We.x,s[1]=qi.y,s[5]=_r.y,s[9]=We.y,s[2]=qi.z,s[6]=_r.z,s[10]=We.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],y=i[6],p=i[10],m=i[14],v=i[3],E=i[7],S=i[11],A=i[15],T=s[0],_=s[4],b=s[8],L=s[12],I=s[1],N=s[5],z=s[9],$=s[13],R=s[2],k=s[6],W=s[10],q=s[14],U=s[3],C=s[7],F=s[11],X=s[15];return r[0]=a*T+o*I+l*R+c*U,r[4]=a*_+o*N+l*k+c*C,r[8]=a*b+o*z+l*W+c*F,r[12]=a*L+o*$+l*q+c*X,r[1]=h*T+d*I+u*R+f*U,r[5]=h*_+d*N+u*k+f*C,r[9]=h*b+d*z+u*W+f*F,r[13]=h*L+d*$+u*q+f*X,r[2]=g*T+y*I+p*R+m*U,r[6]=g*_+y*N+p*k+m*C,r[10]=g*b+y*z+p*W+m*F,r[14]=g*L+y*$+p*q+m*X,r[3]=v*T+E*I+S*R+A*U,r[7]=v*_+E*N+S*k+A*C,r[11]=v*b+E*z+S*W+A*F,r[15]=v*L+E*$+S*q+A*X,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],y=t[7],p=t[11],m=t[15],v=l*f-c*u,E=o*f-c*d,S=o*u-l*d,A=a*f-c*h,T=a*u-l*h,_=a*d-o*h;return e*(y*v-p*E+m*S)-i*(g*v-p*A+m*T)+s*(g*E-y*A+m*_)-r*(g*S-y*T+p*_)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],y=t[13],p=t[14],m=t[15],v=e*o-i*a,E=e*l-s*a,S=e*c-r*a,A=i*l-s*o,T=i*c-r*o,_=s*c-r*l,b=h*y-d*g,L=h*p-u*g,I=h*m-f*g,N=d*p-u*y,z=d*m-f*y,$=u*m-f*p,R=v*$-E*z+S*N+A*I-T*L+_*b;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/R;return t[0]=(o*$-l*z+c*N)*k,t[1]=(s*z-i*$-r*N)*k,t[2]=(y*_-p*T+m*A)*k,t[3]=(u*T-d*_-f*A)*k,t[4]=(l*I-a*$-c*L)*k,t[5]=(e*$-s*I+r*L)*k,t[6]=(p*S-g*_-m*E)*k,t[7]=(h*_-u*S+f*E)*k,t[8]=(a*z-o*I+c*b)*k,t[9]=(i*I-e*z-r*b)*k,t[10]=(g*T-y*S+m*v)*k,t[11]=(d*S-h*T-f*v)*k,t[12]=(o*L-a*N-l*b)*k,t[13]=(e*N-i*L+s*b)*k,t[14]=(y*E-g*A-p*v)*k,t[15]=(h*A-d*E+u*v)*k,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,y=a*h,p=a*d,m=o*d,v=l*c,E=l*h,S=l*d,A=i.x,T=i.y,_=i.z;return s[0]=(1-(y+m))*A,s[1]=(f+S)*A,s[2]=(g-E)*A,s[3]=0,s[4]=(f-S)*T,s[5]=(1-(u+m))*T,s[6]=(p+v)*T,s[7]=0,s[8]=(g+E)*_,s[9]=(p-v)*_,s[10]=(1-(u+y))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=bn.set(s[0],s[1],s[2]).length(),o=bn.set(s[4],s[5],s[6]).length(),l=bn.set(s[8],s[9],s[10]).length();r<0&&(a=-a),oi.copy(this);let c=1/a,h=1/o,d=1/l;return oi.elements[0]*=c,oi.elements[1]*=c,oi.elements[2]*=c,oi.elements[4]*=h,oi.elements[5]*=h,oi.elements[6]*=h,oi.elements[8]*=d,oi.elements[9]*=d,oi.elements[10]*=d,e.setFromRotationMatrix(oi),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,r,a,o=si,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s),g,y;if(l)g=r/(a-r),y=a*r/(a-r);else if(o===si)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===zn)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=si,l=!1){let c=this.elements,h=2/(e-t),d=2/(i-s),u=-(e+t)/(e-t),f=-(i+s)/(i-s),g,y;if(l)g=1/(a-r),y=a/(a-r);else if(o===si)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===zn)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Ta.prototype.isMatrix4=!0;var Zt=Ta,bn=new O,oi=new Zt,ad=new O(0,0,0),od=new O(1,1,1),qi=new O,_r=new O,We=new O,Pc=new Zt,Lc=new Ye,Oi=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Pc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Lc.setFromEuler(this),this.setFromQuaternion(Lc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Oi.DEFAULT_ORDER="XYZ";var Ts=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ld=0,Dc=new O,En=new Ye,Ii=new Zt,xr=new O,hs=new O,cd=new O,hd=new Ye,Nc=new O(1,0,0),Uc=new O(0,1,0),Fc=new O(0,0,1),Oc={type:"added"},ud={type:"removed"},Tn={type:"childadded",child:null},Go={type:"childremoved",child:null},Ae=class n extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new O,e=new Oi,i=new Ye,s=new O(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Zt},normalMatrix:{value:new Lt}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ts,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return En.setFromAxisAngle(t,e),this.quaternion.multiply(En),this}rotateOnWorldAxis(t,e){return En.setFromAxisAngle(t,e),this.quaternion.premultiply(En),this}rotateX(t){return this.rotateOnAxis(Nc,t)}rotateY(t){return this.rotateOnAxis(Uc,t)}rotateZ(t){return this.rotateOnAxis(Fc,t)}translateOnAxis(t,e){return Dc.copy(t).applyQuaternion(this.quaternion),this.position.add(Dc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Nc,t)}translateY(t){return this.translateOnAxis(Uc,t)}translateZ(t){return this.translateOnAxis(Fc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?xr.copy(t):xr.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(hs,xr,this.up):Ii.lookAt(xr,hs,this.up),this.quaternion.setFromRotationMatrix(Ii),s&&(Ii.extractRotation(s.matrixWorld),En.setFromRotationMatrix(Ii),this.quaternion.premultiply(En.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Pt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Oc),Tn.child=t,this.dispatchEvent(Tn),Tn.child=null):Pt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ud),Go.child=t,this.dispatchEvent(Go),Go.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ii),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Oc),Tn.child=t,this.dispatchEvent(Tn),Tn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,t,cd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,hd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ae.DEFAULT_UP=new O(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var yi=class extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}},dd={type:"move"},Hn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let p=e.getJointPose(y,i),m=this._getHandJoint(c,y);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(dd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new yi;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Wh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},vr={h:0,s:0,l:0};function Ho(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Ot=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Xt.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Xt.workingColorSpace){if(t=td(t,1),e=Gt(e,0,1),i=Gt(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Ho(a,r,t+1/3),this.g=Ho(a,r,t),this.b=Ho(a,r,t-1/3)}return Xt.colorSpaceToWorking(this,s),this}setStyle(t,e=Ue){function i(r){r!==void 0&&parseFloat(r)<1&&Ct("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ct("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ct("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ue){let i=Wh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Ct("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ui(t.r),this.g=Ui(t.g),this.b=Ui(t.b),this}copyLinearToSRGB(t){return this.r=Fn(t.r),this.g=Fn(t.g),this.b=Fn(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ue){return Xt.workingToColorSpace(Ne.copy(this),t),Math.round(Gt(Ne.r*255,0,255))*65536+Math.round(Gt(Ne.g*255,0,255))*256+Math.round(Gt(Ne.b*255,0,255))}getHexString(t=Ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.workingToColorSpace(Ne.copy(this),e);let i=Ne.r,s=Ne.g,r=Ne.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Xt.workingColorSpace){return Xt.workingToColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=Ue){Xt.workingToColorSpace(Ne.copy(this),t);let e=Ne.r,i=Ne.g,s=Ne.b;return t!==Ue?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Yi),this.setHSL(Yi.h+t,Yi.s+e,Yi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Yi),t.getHSL(vr);let i=Fo(Yi.h,vr.h,e),s=Fo(Yi.s,vr.s,e),r=Fo(Yi.l,vr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ne=new Ot;Ot.NAMES=Wh;var ws=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ot(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},As=class extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oi,this.environmentIntensity=1,this.environmentRotation=new Oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},li=new O,Pi=new O,Vo=new O,Li=new O,wn=new O,An=new O,Bc=new O,Wo=new O,Xo=new O,qo=new O,Yo=new oe,$o=new oe,Zo=new oe,Ki=class n{constructor(t=new O,e=new O,i=new O){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),li.subVectors(t,e),s.cross(li);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){li.subVectors(s,e),Pi.subVectors(i,e),Vo.subVectors(t,e);let a=li.dot(li),o=li.dot(Pi),l=li.dot(Vo),c=Pi.dot(Pi),h=Pi.dot(Vo),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,Li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Li.x),l.addScaledVector(a,Li.y),l.addScaledVector(o,Li.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return Yo.setScalar(0),$o.setScalar(0),Zo.setScalar(0),Yo.fromBufferAttribute(t,e),$o.fromBufferAttribute(t,i),Zo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Yo,r.x),a.addScaledVector($o,r.y),a.addScaledVector(Zo,r.z),a}static isFrontFacing(t,e,i,s){return li.subVectors(i,e),Pi.subVectors(t,e),li.cross(Pi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return li.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),li.cross(Pi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;wn.subVectors(s,i),An.subVectors(r,i),Wo.subVectors(t,i);let l=wn.dot(Wo),c=An.dot(Wo);if(l<=0&&c<=0)return e.copy(i);Xo.subVectors(t,s);let h=wn.dot(Xo),d=An.dot(Xo);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(i).addScaledVector(wn,a);qo.subVectors(t,r);let f=wn.dot(qo),g=An.dot(qo);if(g>=0&&f<=g)return e.copy(r);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(An,o);let p=h*g-f*d;if(p<=0&&d-h>=0&&f-g>=0)return Bc.subVectors(r,s),o=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(Bc,o);let m=1/(p+y+u);return a=y*m,o=u*m,e.copy(i).addScaledVector(wn,a).addScaledVector(An,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Si=class{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ci.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ci.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=ci.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ci):ci.fromBufferAttribute(r,a),ci.applyMatrix4(t.matrixWorld),this.expandByPoint(ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),yr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),yr.copy(i.boundingBox)),yr.applyMatrix4(t.matrixWorld),this.union(yr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ci),ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(us),Mr.subVectors(this.max,us),Rn.subVectors(t.a,us),Cn.subVectors(t.b,us),In.subVectors(t.c,us),$i.subVectors(Cn,Rn),Zi.subVectors(In,Cn),ln.subVectors(Rn,In);let e=[0,-$i.z,$i.y,0,-Zi.z,Zi.y,0,-ln.z,ln.y,$i.z,0,-$i.x,Zi.z,0,-Zi.x,ln.z,0,-ln.x,-$i.y,$i.x,0,-Zi.y,Zi.x,0,-ln.y,ln.x,0];return!Jo(e,Rn,Cn,In,Mr)||(e=[1,0,0,0,1,0,0,0,1],!Jo(e,Rn,Cn,In,Mr))?!1:(Sr.crossVectors($i,Zi),e=[Sr.x,Sr.y,Sr.z],Jo(e,Rn,Cn,In,Mr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Di),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Di=[new O,new O,new O,new O,new O,new O,new O,new O],ci=new O,yr=new Si,Rn=new O,Cn=new O,In=new O,$i=new O,Zi=new O,ln=new O,us=new O,Mr=new O,Sr=new O,cn=new O;function Jo(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){cn.fromArray(n,r);let o=s.x*Math.abs(cn.x)+s.y*Math.abs(cn.y)+s.z*Math.abs(cn.z),l=t.dot(cn),c=e.dot(cn),h=i.dot(cn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var fe=new O,br=new xt,fd=0,qe=class extends Mi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Bh,this.updateRanges=[],this.gpuType=ri,this.version=0,this._normalizationScale=t!==void 0?Hl(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)br.fromBufferAttribute(this,e),br.applyMatrix3(t),this.setXY(e,br.x,br.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):ed(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):id(t,this.array)}};var Rs=class extends qe{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Cs=class extends qe{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Kt=class extends qe{constructor(t,e,i){super(new Float32Array(t),e,i)}},pd=new Si,ds=new O,Ko=new O,Bi=class{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):pd.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ds.subVectors(t,this.center);let e=ds.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(ds,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ko.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ds.copy(t.center).add(Ko)),this.expandByPoint(ds.copy(t.center).sub(Ko))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},md=0,ni=new Zt,Qo=new Ae,Pn=new O,Xe=new Si,fs=new Si,be=new O,Re=class n extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=ss(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Qu(t)?Cs:Rs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Lt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ni.makeRotationFromQuaternion(t),this.applyMatrix4(ni),this}rotateX(t){return ni.makeRotationX(t),this.applyMatrix4(ni),this}rotateY(t){return ni.makeRotationY(t),this.applyMatrix4(ni),this}rotateZ(t){return ni.makeRotationZ(t),this.applyMatrix4(ni),this}translate(t,e,i){return ni.makeTranslation(t,e,i),this.applyMatrix4(ni),this}scale(t,e,i){return ni.makeScale(t,e,i),this.applyMatrix4(ni),this}lookAt(t){return Qo.lookAt(t),Qo.updateMatrix(),this.applyMatrix4(Qo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pn).negate(),this.translate(Pn.x,Pn.y,Pn.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Kt(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Si);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Xe.setFromBufferAttribute(r),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,Xe.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,Xe.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(Xe.min),this.boundingBox.expandByPoint(Xe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let i=this.boundingSphere.center;if(Xe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];fs.setFromBufferAttribute(o),this.morphTargetsRelative?(be.addVectors(Xe.min,fs.min),Xe.expandByPoint(be),be.addVectors(Xe.max,fs.max),Xe.expandByPoint(be)):(Xe.expandByPoint(fs.min),Xe.expandByPoint(fs.max))}Xe.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)be.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(be));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)be.fromBufferAttribute(o,c),l&&(Pn.fromBufferAttribute(t,c),be.add(Pn)),s=Math.max(s,i.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new qe(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(i.count);for(let L=0;L<i.count;L++)o[L]=new O,l[L]=new O;let h=new O,d=new O,u=new O,f=new xt,g=new xt,y=new xt,p=new O,m=new O;function v(L,I,N){c[L]=c[I]=c[N]=1,h.fromBufferAttribute(i,L),d.fromBufferAttribute(i,I),u.fromBufferAttribute(i,N),f.fromBufferAttribute(r,L),g.fromBufferAttribute(r,I),y.fromBufferAttribute(r,N),d.sub(h),u.sub(h),g.sub(f),y.sub(f);let z=1/(g.x*y.y-y.x*g.y);isFinite(z)&&(p.copy(d).multiplyScalar(y.y).addScaledVector(u,-g.y).multiplyScalar(z),m.copy(u).multiplyScalar(g.x).addScaledVector(d,-y.x).multiplyScalar(z),o[L].add(p),o[I].add(p),o[N].add(p),l[L].add(m),l[I].add(m),l[N].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let L=0,I=E.length;L<I;++L){let N=E[L],z=N.start,$=N.count;for(let R=z,k=z+$;R<k;R+=3)v(t.getX(R+0),t.getX(R+1),t.getX(R+2))}let S=new O,A=new O,T=new O,_=new O;function b(L){T.fromBufferAttribute(s,L),_.copy(T);let I=o[L];S.copy(I),S.sub(T.multiplyScalar(T.dot(I))).normalize(),A.crossVectors(_,I);let z=A.dot(l[L])<0?-1:1;a.setXYZW(L,S.x,S.y,S.z,z)}for(let L=0,I=i.count;L<I;++L)c[L]&&b(L);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new qe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new O,r=new O,a=new O,o=new O,l=new O,c=new O,h=new O,d=new O;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),y=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,p),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,p),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let y=0,p=l.length;y<p;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*h;for(let m=0;m<h;m++)u[g++]=c[f++]}return new qe(u,h,d)}if(this.index===null)return Ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var jo=new O,gd=new O,_d=new Lt,hi=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=jo.subVectors(i,e).cross(gd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(jo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||_d.getNormalMatrix(t),s=this.coplanarPoint(jo).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},xd=0,zi=class extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=ss(),this.name="",this.type="Material",this.blending=ts,this.side=nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ml,this.blendDst=Sl,this.blendEquation=_n,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=Bn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vr,this.stencilZFail=Vr,this.stencilZPass=Vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Ct(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ct(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ot().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new hi().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new xt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new xt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Ni=new O,tl=new O,Er=new O,Tr=new O,Is=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ni)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ni.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ni.copy(this.origin).addScaledVector(this.direction,e),Ni.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){tl.copy(t).add(e).multiplyScalar(.5),Er.copy(e).sub(t).normalize(),Tr.copy(this.origin).sub(tl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Er),o=Tr.dot(this.direction),l=-Tr.dot(Er),c=Tr.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let y=1/h;d*=y,u*=y,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(tl).addScaledVector(Er,u),f}intersectSphere(t,e){if(t.radius<0)return null;Ni.subVectors(t.center,this.origin);let i=Ni.dot(this.direction),s=Ni.dot(Ni)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Ni)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,g=e.x-a.x,y=e.y-a.y,p=e.z-a.z,m=i.x-a.x,v=i.y-a.y,E=i.z-a.z,S=Math.abs(l),A=Math.abs(c),T=Math.abs(h),_,b,L,I,N,z,$,R,k,W,q,U;if(S>=A&&S>=T?(L=l,z=d,k=g,U=m,l>=0?(_=c,b=h,I=u,N=f,$=y,R=p,W=v,q=E):(_=h,b=c,I=f,N=u,$=p,R=y,W=E,q=v)):A>=T?(L=c,z=u,k=y,U=v,c>=0?(_=h,b=l,I=f,N=d,$=p,R=g,W=E,q=m):(_=l,b=h,I=d,N=f,$=g,R=p,W=m,q=E)):(L=h,z=f,k=p,U=E,h>=0?(_=l,b=c,I=d,N=u,$=g,R=y,W=m,q=v):(_=c,b=l,I=u,N=d,$=y,R=g,W=v,q=m)),L===0)return null;let C=_/L,F=b/L,X=1/L,nt=I-C*z,vt=N-F*z,K=$-C*k,ft=R-F*k,yt=W-C*U,At=q-F*U,gt=yt*ft-At*K,Ut=nt*At-vt*yt,ue=K*vt-ft*nt;if(s){if(gt<0||Ut<0||ue<0)return null}else if((gt<0||Ut<0||ue<0)&&(gt>0||Ut>0||ue>0))return null;let It=gt+Ut+ue;if(It===0)return null;let jt=X*(gt*z+Ut*k+ue*U);return(It>0?jt<0:jt>0)?null:this.at(jt/It,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},_e=class extends zi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=bl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},zc=new Zt,hn=new Is,wr=new Bi,kc=new O,Ar=new O,Rr=new O,Cr=new O,el=new O,Ir=new O,Gc=new O,Pr=new O,qt=class extends Ae{constructor(t=new Re,e=new _e){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Ir.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(el.fromBufferAttribute(d,t),a?Ir.addScaledVector(el,h):Ir.addScaledVector(el.sub(e),h))}e.add(Ir)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wr.copy(i.boundingSphere),wr.applyMatrix4(r),hn.copy(t.ray).recast(t.near),!(wr.containsPoint(hn.origin)===!1&&(hn.intersectSphere(wr,kc)===null||hn.origin.distanceToSquared(kc)>(t.far-t.near)**2))&&(zc.copy(r).invert(),hn.copy(t.ray).applyMatrix4(zc),!(i.boundingBox!==null&&hn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,hn)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){let p=u[g],m=a[p.materialIndex],v=Math.max(p.start,f.start),E=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let S=v,A=E;S<A;S+=3){let T=o.getX(S),_=o.getX(S+1),b=o.getX(S+2);s=Lr(this,m,t,i,c,h,d,T,_,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let p=g,m=y;p<m;p+=3){let v=o.getX(p),E=o.getX(p+1),S=o.getX(p+2);s=Lr(this,a,t,i,c,h,d,v,E,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){let p=u[g],m=a[p.materialIndex],v=Math.max(p.start,f.start),E=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let S=v,A=E;S<A;S+=3){let T=S,_=S+1,b=S+2;s=Lr(this,m,t,i,c,h,d,T,_,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let p=g,m=y;p<m;p+=3){let v=p,E=p+1,S=p+2;s=Lr(this,a,t,i,c,h,d,v,E,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function vd(n,t,e,i,s,r,a,o){let l;if(t.side===Ce?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===nn,o),l===null)return null;Pr.copy(o),Pr.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Pr);return c<e.near||c>e.far?null:{distance:c,point:Pr.clone(),object:n}}function Lr(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,Ar),n.getVertexPosition(l,Rr),n.getVertexPosition(c,Cr);let h=vd(n,t,e,i,Ar,Rr,Cr,Gc);if(h){let d=new O;Ki.getBarycoord(Gc,Ar,Rr,Cr,d),s&&(h.uv=Ki.getInterpolatedAttribute(s,o,l,c,d,new xt)),r&&(h.uv1=Ki.getInterpolatedAttribute(r,o,l,c,d,new xt)),a&&(h.normal=Ki.getInterpolatedAttribute(a,o,l,c,d,new O),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new O,materialIndex:0};Ki.getNormal(Ar,Rr,Cr,u.normal),h.face=u,h.barycoord=d}return h}var Ps=class extends ke{constructor(t=null,e=1,i=1,s,r,a,o,l,c=Ee,h=Ee,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ls=class extends qe{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ln=new Zt,Hc=new Zt,Dr=[],Vc=new Si,yd=new Zt,ps=new qt,ms=new Bi,Vn=class extends qt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ls(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,yd)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Si),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ln),Vc.copy(t.boundingBox).applyMatrix4(Ln),this.boundingBox.union(Vc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Bi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ln),ms.copy(t.boundingSphere).applyMatrix4(Ln),this.boundingSphere.union(ms)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(ps.geometry=this.geometry,ps.material=this.material,ps.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ms.copy(this.boundingSphere),ms.applyMatrix4(i),t.ray.intersectsSphere(ms)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ln),Hc.multiplyMatrices(i,Ln),ps.matrixWorld=Hc,ps.raycast(t,Dr);for(let a=0,o=Dr.length;a<o;a++){let l=Dr[a];l.instanceId=r,l.object=this,e.push(l)}Dr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ls(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ps(new Float32Array(s*this.count),s,this.count,La,ri));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},un=new Bi,Md=new xt(.5,.5),Nr=new O,Qi=class{constructor(t=new hi,e=new hi,i=new hi,s=new hi,r=new hi,a=new hi){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=si,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],y=r[9],p=r[10],m=r[11],v=r[12],E=r[13],S=r[14],A=r[15];if(s[0].setComponents(c-a,f-h,m-g,A-v).normalize(),s[1].setComponents(c+a,f+h,m+g,A+v).normalize(),s[2].setComponents(c+o,f+d,m+y,A+E).normalize(),s[3].setComponents(c-o,f-d,m-y,A-E).normalize(),i)s[4].setComponents(l,u,p,S).normalize(),s[5].setComponents(c-l,f-u,m-p,A-S).normalize();else if(s[4].setComponents(c-l,f-u,m-p,A-S).normalize(),e===si)s[5].setComponents(c+l,f+u,m+p,A+S).normalize();else if(e===zn)s[5].setComponents(l,u,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),un.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),un.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(un)}intersectsSprite(t){un.center.set(0,0,0);let e=Md.distanceTo(t.center);return un.radius=.7071067811865476+e,un.applyMatrix4(t.matrixWorld),this.intersectsSphere(un)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Nr.x=s.normal.x>0?t.max.x:t.min.x,Nr.y=s.normal.y>0?t.max.y:t.min.y,Nr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Nr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Wc=new Zt,na=class n{constructor(){this.coordinateSystem=si,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Wc.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Qi),i[s].setFromProjectionMatrix(Wc,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Qi),e[s].copy(i[s]);return this._count=t._count,this}clone(){return new n().copy(this)}};var Wn=class extends zi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Xc=new Zt,hl=new Is,Ur=new Bi,Fr=new O,Ds=class extends Ae{constructor(t=new Re,e=new Wn){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ur.copy(i.boundingSphere),Ur.applyMatrix4(s),Ur.radius+=r,t.ray.intersectsSphere(Ur)===!1)return;Xc.copy(s).invert(),hl.copy(t.ray).applyMatrix4(Xc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=u,y=f;g<y;g++){let p=c.getX(g);Fr.fromBufferAttribute(d,p),qc(Fr,p,l,s,t,e,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,y=f;g<y;g++)Fr.fromBufferAttribute(d,g),qc(Fr,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function qc(n,t,e,i,s,r,a){let o=hl.distanceSqToPoint(n);if(o<e){let l=new O;hl.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Ns=class extends ke{constructor(t=[],e=xn,i,s,r,a,o,l,c,h){super(t,e,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Us=class extends ke{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ki=class extends ke{constructor(t,e,i=di,s,r,a,o=Ee,l=Ee,c,h=Fi,d=1){if(h!==Fi&&h!==Hi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Gn(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Fs=class extends ki{constructor(t,e=di,i=xn,s,r,a=Ee,o=Ee,l,c=Fi){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,i,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Os=class extends ke{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},bi=class n extends Re{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(h,3)),this.setAttribute("uv",new Kt(d,2));function g(y,p,m,v,E,S,A,T,_,b,L){let I=S/_,N=A/b,z=S/2,$=A/2,R=T/2,k=_+1,W=b+1,q=0,U=0,C=new O;for(let F=0;F<W;F++){let X=F*N-$;for(let nt=0;nt<k;nt++){let vt=nt*I-z;C[y]=vt*v,C[p]=X*E,C[m]=R,c.push(C.x,C.y,C.z),C[y]=0,C[p]=0,C[m]=T>0?1:-1,h.push(C.x,C.y,C.z),d.push(nt/_),d.push(1-F/b),q+=1}}for(let F=0;F<b;F++)for(let X=0;X<_;X++){let nt=u+X+k*F,vt=u+X+k*(F+1),K=u+(X+1)+k*(F+1),ft=u+(X+1)+k*F;l.push(nt,vt,ft),l.push(vt,K,ft),U+=6}o.addGroup(f,U,L),f+=U,u+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Ei=class n extends Re{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new O,h=new xt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=i+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Kt(a,3)),this.setAttribute("normal",new Kt(o,3)),this.setAttribute("uv",new Kt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Xn=class n extends Re{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,y=[],p=i/2,m=0;v(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new Kt(d,3)),this.setAttribute("normal",new Kt(u,3)),this.setAttribute("uv",new Kt(f,2));function v(){let S=new O,A=new O,T=0,_=(e-t)/i;for(let b=0;b<=r;b++){let L=[],I=b/r,N=I*(e-t)+t;for(let z=0;z<=s;z++){let $=z/s,R=$*l+o,k=Math.sin(R),W=Math.cos(R);A.x=N*k,A.y=-I*i+p,A.z=N*W,d.push(A.x,A.y,A.z),S.set(k,_,W).normalize(),u.push(S.x,S.y,S.z),f.push($,1-I),L.push(g++)}y.push(L)}for(let b=0;b<s;b++)for(let L=0;L<r;L++){let I=y[L][b],N=y[L+1][b],z=y[L+1][b+1],$=y[L][b+1];(t>0||L!==0)&&(h.push(I,N,$),T+=3),(e>0||L!==r-1)&&(h.push(N,z,$),T+=3)}c.addGroup(m,T,0),m+=T}function E(S){let A=g,T=new xt,_=new O,b=0,L=S===!0?t:e,I=S===!0?1:-1;for(let z=1;z<=s;z++)d.push(0,p*I,0),u.push(0,I,0),f.push(.5,.5),g++;let N=g;for(let z=0;z<=s;z++){let R=z/s*l+o,k=Math.cos(R),W=Math.sin(R);_.x=L*W,_.y=p*I,_.z=L*k,d.push(_.x,_.y,_.z),u.push(0,I,0),T.x=k*.5+.5,T.y=W*.5*I+.5,f.push(T.x,T.y),g++}for(let z=0;z<s;z++){let $=A+z,R=N+z;S===!0?h.push(R,R+1,$):h.push(R+1,R,$),b+=3}c.addGroup(m,b,S===!0?1:2),m+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var sa=class n extends Re{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],a=[];o(s),c(i),h(),this.setAttribute("position",new Kt(r,3)),this.setAttribute("normal",new Kt(r.slice(),3)),this.setAttribute("uv",new Kt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let E=new O,S=new O,A=new O;for(let T=0;T<e.length;T+=3)f(e[T+0],E),f(e[T+1],S),f(e[T+2],A),l(E,S,A,v)}function l(v,E,S,A){let T=A+1,_=[];for(let b=0;b<=T;b++){_[b]=[];let L=v.clone().lerp(S,b/T),I=E.clone().lerp(S,b/T),N=T-b;for(let z=0;z<=N;z++)z===0&&b===T?_[b][z]=L:_[b][z]=L.clone().lerp(I,z/N)}for(let b=0;b<T;b++)for(let L=0;L<2*(T-b)-1;L++){let I=Math.floor(L/2);L%2===0?(u(_[b][I+1]),u(_[b+1][I]),u(_[b][I])):(u(_[b][I+1]),u(_[b+1][I+1]),u(_[b+1][I]))}}function c(v){let E=new O;for(let S=0;S<r.length;S+=3)E.x=r[S+0],E.y=r[S+1],E.z=r[S+2],E.normalize().multiplyScalar(v),r[S+0]=E.x,r[S+1]=E.y,r[S+2]=E.z}function h(){let v=new O;for(let E=0;E<r.length;E+=3){v.x=r[E+0],v.y=r[E+1],v.z=r[E+2];let S=p(v)/2/Math.PI+.5,A=m(v)/Math.PI+.5;a.push(S,1-A)}g(),d()}function d(){for(let v=0;v<a.length;v+=6){let E=a[v+0],S=a[v+2],A=a[v+4],T=Math.max(E,S,A),_=Math.min(E,S,A);T>.9&&_<.1&&(E<.2&&(a[v+0]+=1),S<.2&&(a[v+2]+=1),A<.2&&(a[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function f(v,E){let S=v*3;E.x=t[S+0],E.y=t[S+1],E.z=t[S+2]}function g(){let v=new O,E=new O,S=new O,A=new O,T=new xt,_=new xt,b=new xt;for(let L=0,I=0;L<r.length;L+=9,I+=6){v.set(r[L+0],r[L+1],r[L+2]),E.set(r[L+3],r[L+4],r[L+5]),S.set(r[L+6],r[L+7],r[L+8]),T.set(a[I+0],a[I+1]),_.set(a[I+2],a[I+3]),b.set(a[I+4],a[I+5]),A.copy(v).add(E).add(S).divideScalar(3);let N=p(A);y(T,I+0,v,N),y(_,I+2,E,N),y(b,I+4,S,N)}}function y(v,E,S,A){A<0&&v.x===1&&(a[E]=v.x-1),S.x===0&&S.z===0&&(a[E]=A/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.detail)}};var Ze=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ct("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],u=i[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new xt:new O);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new O,s=[],r=[],a=[],o=new O,l=new Zt;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new O)}r[0]=new O,a[0]=new O;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Gt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Gt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},qn=class extends Ze{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new xt){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ra=class extends qn{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Vl(){let n=0,t=0,e=0,i=0;function s(r,a,o,l){n=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return n+t*r+e*a+i*o}}}var Yc=new O,$c=new O,il=new Vl,nl=new Vl,sl=new Vl,aa=class extends Ze{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new O){let i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:($c.subVectors(s[0],s[1]).add(s[0]),c=$c);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Yc.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Yc),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),p<1e-4&&(p=y),il.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,y,p),nl.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,y,p),sl.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,y,p)}else this.curveType==="catmullrom"&&(il.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),nl.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),sl.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(il.calc(l),nl.calc(l),sl.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new O().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Zc(n,t,e,i,s){let r=(i-t)*.5,a=(s-e)*.5,o=n*n,l=n*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*n+e}function Sd(n,t){let e=1-n;return e*e*t}function bd(n,t){return 2*(1-n)*n*t}function Ed(n,t){return n*n*t}function xs(n,t,e,i){return Sd(n,t)+bd(n,e)+Ed(n,i)}function Td(n,t){let e=1-n;return e*e*e*t}function wd(n,t){let e=1-n;return 3*e*e*n*t}function Ad(n,t){return 3*(1-n)*n*n*t}function Rd(n,t){return n*n*n*t}function vs(n,t,e,i,s){return Td(n,t)+wd(n,e)+Ad(n,i)+Rd(n,s)}var Bs=class extends Ze{constructor(t=new xt,e=new xt,i=new xt,s=new xt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new xt){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(vs(t,s.x,r.x,a.x,o.x),vs(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},oa=class extends Ze{constructor(t=new O,e=new O,i=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new O){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(vs(t,s.x,r.x,a.x,o.x),vs(t,s.y,r.y,a.y,o.y),vs(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},zs=class extends Ze{constructor(t=new xt,e=new xt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new xt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new xt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},la=class extends Ze{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ks=class extends Ze{constructor(t=new xt,e=new xt,i=new xt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new xt){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(xs(t,s.x,r.x,a.x),xs(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ca=class extends Ze{constructor(t=new O,e=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new O){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(xs(t,s.x,r.x,a.x),xs(t,s.y,r.y,a.y),xs(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Gs=class extends Ze{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new xt){let i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return i.set(Zc(o,l.x,c.x,h.x,d.x),Zc(o,l.y,c.y,h.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new xt().fromArray(s))}return this}},Jc=Object.freeze({__proto__:null,ArcCurve:ra,CatmullRomCurve3:aa,CubicBezierCurve:Bs,CubicBezierCurve3:oa,EllipseCurve:qn,LineCurve:zs,LineCurve3:la,QuadraticBezierCurve:ks,QuadraticBezierCurve3:ca,SplineCurve:Gs}),ha=class extends Ze{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Jc[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new Jc[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Hs=class extends ha{constructor(t){super(),this.type="Path",this.currentPoint=new xt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new zs(this.currentPoint.clone(),new xt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new ks(this.currentPoint.clone(),new xt(t,e),new xt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){let o=new Bs(this.currentPoint.clone(),new xt(t,e),new xt(i,s),new xt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Gs(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,a,o,l),this}absellipse(t,e,i,s,r,a,o,l){let c=new qn(t,e,i,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Yn=class extends Hs{constructor(t){super(t),this.uuid=ss(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new Hs().fromJSON(s))}return this}};function Cd(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=Xh(n,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=Nd(n,t,r,e)),n.length>80*e){o=n[0],l=n[1];let h=o,d=l;for(let u=e;u<s;u+=e){let f=n[u],g=n[u+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>d&&(d=g)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return Vs(r,a,e,o,l,c,0),a}function Xh(n,t,e,i,s){let r;if(s===Xd(n,t,e,i)>0)for(let a=t;a<e;a+=i)r=Kc(a/i|0,n[a],n[a+1],r);else for(let a=e-i;a>=t;a-=i)r=Kc(a/i|0,n[a],n[a+1],r);return r&&$n(r,r.next)&&(Xs(r),r=r.next),r}function fn(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&($n(e,e.next)||he(e.prev,e,e.next)===0)){if(Xs(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Vs(n,t,e,i,s,r,a){if(!n)return;!a&&r&&zd(n,i,s,r);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?Pd(n,i,s,r):Id(n)){t.push(l.i,n.i,c.i),Xs(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=Ld(fn(n),t),Vs(n,t,e,i,s,r,2)):a===2&&Dd(n,t,e,i,s,r):Vs(fn(n),t,e,i,s,r,1);break}}}function Id(n){let t=n.prev,e=n,i=n.next;if(he(t,e,i)>=0)return!1;let s=t.x,r=e.x,a=i.x,o=t.y,l=e.y,c=i.y,h=Math.min(s,r,a),d=Math.min(o,l,c),u=Math.max(s,r,a),f=Math.max(o,l,c),g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&gs(s,o,r,l,a,c,g.x,g.y)&&he(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Pd(n,t,e,i){let s=n.prev,r=n,a=n.next;if(he(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(o,l,c),g=Math.min(h,d,u),y=Math.max(o,l,c),p=Math.max(h,d,u),m=ul(f,g,t,e,i),v=ul(y,p,t,e,i),E=n.prevZ,S=n.nextZ;for(;E&&E.z>=m&&S&&S.z<=v;){if(E.x>=f&&E.x<=y&&E.y>=g&&E.y<=p&&E!==s&&E!==a&&gs(o,h,l,d,c,u,E.x,E.y)&&he(E.prev,E,E.next)>=0||(E=E.prevZ,S.x>=f&&S.x<=y&&S.y>=g&&S.y<=p&&S!==s&&S!==a&&gs(o,h,l,d,c,u,S.x,S.y)&&he(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;E&&E.z>=m;){if(E.x>=f&&E.x<=y&&E.y>=g&&E.y<=p&&E!==s&&E!==a&&gs(o,h,l,d,c,u,E.x,E.y)&&he(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;S&&S.z<=v;){if(S.x>=f&&S.x<=y&&S.y>=g&&S.y<=p&&S!==s&&S!==a&&gs(o,h,l,d,c,u,S.x,S.y)&&he(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Ld(n,t){let e=n;do{let i=e.prev,s=e.next.next;!$n(i,s)&&Yh(i,e,e.next,s)&&Ws(i,s)&&Ws(s,i)&&(t.push(i.i,e.i,s.i),Xs(e),Xs(e.next),e=n=s),e=e.next}while(e!==n);return fn(e)}function Dd(n,t,e,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Hd(a,o)){let l=$h(a,o);a=fn(a,a.next),l=fn(l,l.next),Vs(a,t,e,i,s,r,0),Vs(l,t,e,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function Nd(n,t,e,i){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*i,l=r<a-1?t[r+1]*i:n.length,c=Xh(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Gd(c))}s.sort(Ud);for(let r=0;r<s.length;r++)e=Fd(s[r],e);return e}function Ud(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function Fd(n,t){let e=Od(n,t);if(!e)return t;let i=$h(e,n);return fn(i,i.next),fn(e,e.next)}function Od(n,t){let e=t,i=n.x,s=n.y,r=-1/0,a;if($n(n,e))return e;do{if($n(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=i&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===i))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(i>=e.x&&e.x>=l&&i!==e.x&&qh(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){let d=Math.abs(s-e.y)/(i-e.x);Ws(e,n)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&Bd(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function Bd(n,t){return he(n.prev,n,t.prev)<0&&he(t.next,n,n.next)<0}function zd(n,t,e,i){let s=n;do s.z===0&&(s.z=ul(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,kd(s)}function kd(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let a=i,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,e*=2}while(t>1);return n}function ul(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Gd(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function qh(n,t,e,i,s,r,a,o){return(s-a)*(t-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(i-o)}function gs(n,t,e,i,s,r,a,o){return!(n===a&&t===o)&&qh(n,t,e,i,s,r,a,o)}function Hd(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Vd(n,t)&&(Ws(n,t)&&Ws(t,n)&&Wd(n,t)&&(he(n.prev,n,t.prev)||he(n,t.prev,t))||$n(n,t)&&he(n.prev,n,n.next)>0&&he(t.prev,t,t.next)>0)}function he(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function $n(n,t){return n.x===t.x&&n.y===t.y}function Yh(n,t,e,i){let s=Br(he(n,t,e)),r=Br(he(n,t,i)),a=Br(he(e,i,n)),o=Br(he(e,i,t));return!!(s!==r&&a!==o||s===0&&Or(n,e,t)||r===0&&Or(n,i,t)||a===0&&Or(e,n,i)||o===0&&Or(e,t,i))}function Or(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Br(n){return n>0?1:n<0?-1:0}function Vd(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Yh(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Ws(n,t){return he(n.prev,n,n.next)<0?he(n,t,n.next)>=0&&he(n,n.prev,t)>=0:he(n,t,n.prev)<0||he(n,n.next,t)<0}function Wd(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function $h(n,t){let e=dl(n.i,n.x,n.y),i=dl(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Kc(n,t,e,i){let s=dl(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Xs(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function dl(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Xd(n,t,e,i){let s=0;for(let r=t,a=e-i;r<e;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var fl=class{static triangulate(t,e,i=2){return Cd(t,e,i)}},On=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];Qc(t),jc(i,t);let a=t.length;e.forEach(Qc);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,jc(i,e[l]);let o=fl.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Qc(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function jc(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var Zn=class n extends sa{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},pn=class n extends Re{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,f=[],g=[],y=[],p=[];for(let m=0;m<h;m++){let v=m*u-a;for(let E=0;E<c;E++){let S=E*d-r;g.push(S,-v,0),y.push(0,0,1),p.push(E/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<o;v++){let E=v+c*m,S=v+c*(m+1),A=v+1+c*(m+1),T=v+1+c*m;f.push(E,S,T),f.push(S,A,T)}this.setIndex(f),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(y,3)),this.setAttribute("uv",new Kt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},ui=class n extends Re{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],h=[],d=t,u=(e-t)/s,f=new O,g=new xt;for(let y=0;y<=s;y++){for(let p=0;p<=i;p++){let m=r+p/i*a;f.x=d*Math.cos(m),f.y=d*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let y=0;y<s;y++){let p=y*(i+1);for(let m=0;m<i;m++){let v=m+p,E=v,S=v+i+1,A=v+i+2,T=v+1;o.push(E,S,T),o.push(S,A,T)}}this.setIndex(o),this.setAttribute("position",new Kt(l,3)),this.setAttribute("normal",new Kt(c,3)),this.setAttribute("uv",new Kt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},qs=class n extends Re{constructor(t=new Yn([new xt(0,.5),new xt(-.5,-.5),new xt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new Kt(s,3)),this.setAttribute("normal",new Kt(r,3)),this.setAttribute("uv",new Kt(a,2));function c(h){let d=s.length/3,u=h.extractPoints(e),f=u.shape,g=u.holes;On.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,m=g.length;p<m;p++){let v=g[p];On.isClockWise(v)===!0&&(g[p]=v.reverse())}let y=On.triangulateShape(f,g);for(let p=0,m=g.length;p<m;p++){let v=g[p];f=f.concat(v)}for(let p=0,m=f.length;p<m;p++){let v=f[p];s.push(v.x,v.y,0),r.push(0,0,1),a.push(v.x,v.y)}for(let p=0,m=y.length;p<m;p++){let v=y[p],E=v[0]+d,S=v[1]+d,A=v[2]+d;i.push(E,S,A),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return qd(e,t)}static fromJSON(t,e){let i=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];i.push(a)}return new n(i,t.curveSegments)}};function qd(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){let s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}var Jn=class n extends Re{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new O,u=new O,f=[],g=[],y=[],p=[];for(let m=0;m<=i;m++){let v=[],E=m/i,S=a+E*o,A=t*Math.cos(S),T=Math.sqrt(t*t-A*A),_=0;m===0&&a===0?_=.5/e:m===i&&l===Math.PI&&(_=-.5/e);for(let b=0;b<=e;b++){let L=b/e,I=s+L*r;d.x=-T*Math.cos(I),d.y=A,d.z=T*Math.sin(I),g.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),p.push(L+_,1-E),v.push(c++)}h.push(v)}for(let m=0;m<i;m++)for(let v=0;v<e;v++){let E=h[m][v+1],S=h[m][v],A=h[m+1][v],T=h[m+1][v+1];(m!==0||a>0)&&f.push(E,S,T),(m!==i-1||l<Math.PI)&&f.push(S,A,T)}this.setIndex(f),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(y,3)),this.setAttribute("uv",new Kt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function yn(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(th(s))s.isRenderTargetTexture?(Ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(th(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function Oe(n){let t={};for(let e=0;e<n.length;e++){let i=yn(n[e]);for(let s in i)t[s]=i[s]}return t}function th(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Yd(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Wl(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xt.workingColorSpace}var Zh={clone:yn,merge:Oe},$d=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ti=class extends zi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$d,this.fragmentShader=Zd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=yn(t.uniforms),this.uniformsGroups=Yd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Ot().setHex(s.value);break;case"v2":this.uniforms[i].value=new xt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new O().fromArray(s.value);break;case"v4":this.uniforms[i].value=new oe().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Lt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Zt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ua=class extends Ti{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ge=class extends zi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fo,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var da=class extends zi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ih,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},fa=class extends zi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Dn(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function zr(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var ji=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];i:{t:{let a;e:{n:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break i}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},pa=class extends ji{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ol,endingEnd:ol}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ll:r=t,o=2*e-i;break;case cl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case ll:a=t,l=2*i-e;break;case cl:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(i-e)/(s-e),y=g*g,p=y*g,m=-u*p+2*u*y-u*g,v=(1+u)*p+(-1.5-2*u)*y+(-.5+u)*g+1,E=(-1-f)*p+(1.5+f)*y+.5*g,S=f*p-f*y;for(let A=0;A!==o;++A)r[A]=m*a[h+A]+v*a[c+A]+E*a[l+A]+S*a[d+A];return r}},ma=class extends ji{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},ga=class extends ji{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},_a=class extends ji{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(i-e)/(s-e),y=1-g;for(let p=0;p!==o;++p)r[p]=a[c+p]*y+a[l+p]*g;return r}let u=o*2,f=t-1;for(let g=0;g!==o;++g){let y=a[c+g],p=a[l+g],m=f*u+g*2,v=d[m],E=d[m+1],S=t*u+g*2,A=h[S],T=h[S+1],_=Kd(i,e,v,A,s);r[g]=Jh(_,y,E,T,p)}return r}};function Jh(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Jd(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Kd(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let o=Jh(r,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let l=Jd(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Je=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Dn(e,this.TimeBufferType),this.values=Dn(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Dn(t.times,Array),values:Dn(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),zr(t.settings)&&(i.settings={inTangents:Dn(t.settings.inTangents,Array),outTangents:Dn(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new ga(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ma(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new pa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new _a(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ys:e=this.InterpolantFactoryMethodDiscrete;break;case Qr:e=this.InterpolantFactoryMethodLinear;break;case Hr:e=this.InterpolantFactoryMethodSmooth;break;case al:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ct("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ys;case this.InterpolantFactoryMethodLinear:return Qr;case this.InterpolantFactoryMethodSmooth:return Hr;case this.InterpolantFactoryMethodBezier:return al}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t;zr(this.settings)&&(eh(this.settings.inTangents,t),eh(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;zr(this.settings)&&(ih(this.settings.inTangents,t),ih(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Pt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Pt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Pt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Pt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&ju(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Pt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Hr,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*i,u=d-i,f=d+i;for(let g=0;g!==i;++g){let y=e[d+g];if(y!==e[u+g]||y!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*i,u=a*i;for(let f=0;f!==i;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,zr(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function eh(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]+=t}function ih(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}Je.prototype.ValueTypeName="";Je.prototype.TimeBufferType=Float32Array;Je.prototype.ValueBufferType=Float32Array;Je.prototype.DefaultInterpolation=Qr;var tn=class extends Je{constructor(t,e,i){super(t,e,i)}};tn.prototype.ValueTypeName="bool";tn.prototype.ValueBufferType=Array;tn.prototype.DefaultInterpolation=ys;tn.prototype.InterpolantFactoryMethodLinear=void 0;tn.prototype.InterpolantFactoryMethodSmooth=void 0;var xa=class extends Je{constructor(t,e,i,s){super(t,e,i,s)}};xa.prototype.ValueTypeName="color";var va=class extends Je{constructor(t,e,i,s){super(t,e,i,s)}};va.prototype.ValueTypeName="number";var ya=class extends ji{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Ye.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ys=class extends Je{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new ya(this.times,this.values,this.getValueSize(),t)}};Ys.prototype.ValueTypeName="quaternion";Ys.prototype.InterpolantFactoryMethodSmooth=void 0;var en=class extends Je{constructor(t,e,i){super(t,e,i)}};en.prototype.ValueTypeName="string";en.prototype.ValueBufferType=Array;en.prototype.DefaultInterpolation=ys;en.prototype.InterpolantFactoryMethodLinear=void 0;en.prototype.InterpolantFactoryMethodSmooth=void 0;var Ma=class extends Je{constructor(t,e,i,s){super(t,e,i,s)}};Ma.prototype.ValueTypeName="vector";var Sa=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Kh=new Sa,ba=class{constructor(t){this.manager=t!==void 0?t:Kh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};ba.DEFAULT_MATERIAL_NAME="__DEFAULT";var mn=class extends Ae{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},$s=class extends mn{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},rl=new Zt,nh=new O,sh=new O,Zs=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.mapType=Ve,this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qi,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;nh.setFromMatrixPosition(t.matrixWorld),e.position.copy(nh),sh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(sh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){rl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(rl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===zn||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(rl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},kr=new O,Gr=new Ye,xi=new O,Js=class extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(kr,Gr,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kr,Gr,xi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(kr,Gr,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kr,Gr,xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ji=new O,rh=new xt,ah=new xt,Fe=class extends Js{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=jr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Uo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return jr*2*Math.atan(Math.tan(Uo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ji.x,Ji.y).multiplyScalar(-t/Ji.z),Ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ji.x,Ji.y).multiplyScalar(-t/Ji.z)}getViewSize(t,e){return this.getViewBounds(t,rh,ah),e.subVectors(ah,rh)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Uo*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var pl=class extends Zs{constructor(){super(new Fe(90,1,.5,500)),this.isPointLightShadow=!0}},Ks=class extends mn{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new pl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Qs=class extends Js{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ml=class extends Zs{constructor(){super(new Qs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Kn=class extends mn{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new ml}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},js=class extends mn{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Nn=-90,Un=1,Qn=class extends Ae{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Fe(Nn,Un,t,e);s.layers=this.layers,this.add(s);let r=new Fe(Nn,Un,t,e);r.layers=this.layers,this.add(r);let a=new Fe(Nn,Un,t,e);a.layers=this.layers,this.add(a);let o=new Fe(Nn,Un,t,e);o.layers=this.layers,this.add(o);let l=new Fe(Nn,Un,t,e);l.layers=this.layers,this.add(l);let c=new Fe(Nn,Un,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===si)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===zn)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=y,t.setRenderTarget(i,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Ea=class extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Xl="\\[\\]\\.:\\/",Qd=new RegExp("["+Xl+"]","g"),ql="[^"+Xl+"]",jd="[^"+Xl.replace("\\.","")+"]",tf=/((?:WC+[\/:])*)/.source.replace("WC",ql),ef=/(WCOD+)?/.source.replace("WCOD",jd),nf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ql),sf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ql),rf=new RegExp("^"+tf+ef+nf+sf+"$"),af=["material","materials","bones","map"],gl=class{constructor(t,e,i){let s=i||se.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},se=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Qd,"")}static parseTrackName(t){let e=rf.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);af.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ct("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Pt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Pt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Pt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Pt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Pt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Pt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};se.Composite=gl;se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};se.prototype.GetterByBindingType=[se.prototype._getValue_direct,se.prototype._getValue_array,se.prototype._getValue_arrayElement,se.prototype._getValue_toArray];se.prototype.SetterByBindingTypeAndVersioning=[[se.prototype._setValue_direct,se.prototype._setValue_direct_setNeedsUpdate,se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[se.prototype._setValue_array,se.prototype._setValue_array_setNeedsUpdate,se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[se.prototype._setValue_arrayElement,se.prototype._setValue_arrayElement_setNeedsUpdate,se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[se.prototype._setValue_fromArray,se.prototype._setValue_fromArray_setNeedsUpdate,se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var R_=new Float32Array(1);var Ql=class Ql{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};Ql.prototype.isMatrix2=!0;var _l=Ql;function Yl(n,t,e,i){let s=of(i);switch(e){case Ul:return n*t;case La:return n*t/s.components*s.byteLength;case Da:return n*t/s.components*s.byteLength;case sn:return n*t*2/s.components*s.byteLength;case Na:return n*t*2/s.components*s.byteLength;case Fl:return n*t*3/s.components*s.byteLength;case pi:return n*t*4/s.components*s.byteLength;case Ua:return n*t*4/s.components*s.byteLength;case sr:case rr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ar:case or:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Oa:case za:return Math.max(n,16)*Math.max(t,8)/4;case Fa:case Ba:return Math.max(n,8)*Math.max(t,8)/2;case ka:case Ga:case Va:case Wa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ha:case lr:case Xa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case qa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ya:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case $a:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Za:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Ka:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case ja:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case to:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case eo:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case io:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case no:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case so:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case ro:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ao:case oo:case lo:return Math.ceil(n/4)*Math.ceil(t/4)*16;case co:case ho:return Math.ceil(n/4)*Math.ceil(t/4)*8;case cr:case uo:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function of(n){switch(n){case Ve:case Pl:return{byteLength:1,components:1};case ns:case Ll:case fi:return{byteLength:2,components:1};case Ia:case Pa:return{byteLength:2,components:4};case di:case Ca:case ri:return{byteLength:4,components:1};case Dl:case Nl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function vu(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function cf(n){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],y=d[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,d[u]=y)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let y=d[f];n.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var hf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,df=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ff=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_f=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,vf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bf=`#ifdef USE_IRIDESCENCE
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
#endif`,Ef=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Tf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,If=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Pf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Lf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Df=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Nf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Uf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ff=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Of=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zf="gl_FragColor = linearToOutputTexel( gl_FragColor );",kf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Hf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Vf=`#ifdef USE_ENVMAP
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
#endif`,Wf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$f=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jf=`#ifdef USE_GRADIENTMAP
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
}`,Kf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif
#include <lightprobes_pars_fragment>`,ep=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,ip=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,np=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ap=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,op=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,up=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,dp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_p=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vp=`#if defined( USE_POINTS_UV )
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
#endif`,yp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bp=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ep=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,wp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ap=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Rp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Lp=`#ifdef USE_NORMALMAP
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
#endif`,Dp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Np=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Up=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Op=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,zp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,qp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Yp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,$p=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Zp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Kp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qp=`#ifdef USE_SKINNING
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
#endif`,jp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,em=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,im=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nm=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sm=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,lm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,cm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dm=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,gm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_m=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,xm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ym=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mm=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sm=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bm=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Em=`uniform vec3 diffuse;
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
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,wm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Am=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Rm=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Im=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Pm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Lm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Nm=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Um=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Fm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Om=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,Bm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,km=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Hm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zt={alphahash_fragment:hf,alphahash_pars_fragment:uf,alphamap_fragment:df,alphamap_pars_fragment:ff,alphatest_fragment:pf,alphatest_pars_fragment:mf,aomap_fragment:gf,aomap_pars_fragment:_f,batching_pars_vertex:xf,batching_vertex:vf,begin_vertex:yf,beginnormal_vertex:Mf,bsdfs:Sf,iridescence_fragment:bf,bumpmap_pars_fragment:Ef,clipping_planes_fragment:Tf,clipping_planes_pars_fragment:wf,clipping_planes_pars_vertex:Af,clipping_planes_vertex:Rf,color_fragment:Cf,color_pars_fragment:If,color_pars_vertex:Pf,color_vertex:Lf,common:Df,defaultnormal_vertex:Nf,displacementmap_pars_vertex:Uf,displacementmap_vertex:Ff,emissivemap_fragment:Of,emissivemap_pars_fragment:Bf,colorspace_fragment:zf,colorspace_pars_fragment:kf,envmap_fragment:Gf,envmap_common_pars_fragment:Hf,envmap_pars_fragment:Vf,envmap_pars_vertex:Wf,envmap_physical_pars_fragment:ep,envmap_vertex:Xf,fog_vertex:qf,fog_pars_vertex:Yf,fog_fragment:$f,fog_pars_fragment:Zf,gradientmap_pars_fragment:Jf,lightmap_pars_fragment:Kf,lights_lambert_fragment:Qf,lights_lambert_pars_fragment:jf,lights_pars_begin:tp,lights_toon_fragment:ip,lights_toon_pars_fragment:np,lights_phong_fragment:sp,lights_phong_pars_fragment:rp,lights_physical_fragment:ap,lights_physical_pars_fragment:op,lights_fragment_begin:lp,lights_fragment_maps:cp,lights_fragment_end:hp,lightprobes_pars_fragment:up,logdepthbuf_fragment:dp,logdepthbuf_pars_fragment:fp,logdepthbuf_pars_vertex:pp,logdepthbuf_vertex:mp,map_fragment:gp,map_pars_fragment:_p,map_particle_fragment:xp,map_particle_pars_fragment:vp,metalnessmap_fragment:yp,metalnessmap_pars_fragment:Mp,morphinstance_vertex:Sp,morphcolor_vertex:bp,morphnormal_vertex:Ep,morphtarget_pars_vertex:Tp,morphtarget_vertex:wp,normal_fragment_begin:Ap,normal_fragment_maps:Rp,normal_pars_fragment:Cp,normal_pars_vertex:Ip,normal_vertex:Pp,normalmap_pars_fragment:Lp,clearcoat_normal_fragment_begin:Dp,clearcoat_normal_fragment_maps:Np,clearcoat_pars_fragment:Up,iridescence_pars_fragment:Fp,opaque_fragment:Op,packing:Bp,premultiplied_alpha_fragment:zp,project_vertex:kp,dithering_fragment:Gp,dithering_pars_fragment:Hp,roughnessmap_fragment:Vp,roughnessmap_pars_fragment:Wp,shadowmap_pars_fragment:Xp,shadowmap_pars_vertex:qp,shadowmap_vertex:Yp,shadowmask_pars_fragment:$p,skinbase_vertex:Zp,skinning_pars_vertex:Jp,skinning_vertex:Kp,skinnormal_vertex:Qp,specularmap_fragment:jp,specularmap_pars_fragment:tm,tonemapping_fragment:em,tonemapping_pars_fragment:im,transmission_fragment:nm,transmission_pars_fragment:sm,uv_pars_fragment:rm,uv_pars_vertex:am,uv_vertex:om,worldpos_vertex:lm,background_vert:cm,background_frag:hm,backgroundCube_vert:um,backgroundCube_frag:dm,cube_vert:fm,cube_frag:pm,depth_vert:mm,depth_frag:gm,distance_vert:_m,distance_frag:xm,equirect_vert:vm,equirect_frag:ym,linedashed_vert:Mm,linedashed_frag:Sm,meshbasic_vert:bm,meshbasic_frag:Em,meshlambert_vert:Tm,meshlambert_frag:wm,meshmatcap_vert:Am,meshmatcap_frag:Rm,meshnormal_vert:Cm,meshnormal_frag:Im,meshphong_vert:Pm,meshphong_frag:Lm,meshphysical_vert:Dm,meshphysical_frag:Nm,meshtoon_vert:Um,meshtoon_frag:Fm,points_vert:Om,points_frag:Bm,shadow_vert:zm,shadow_frag:km,sprite_vert:Gm,sprite_frag:Hm},mt={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Lt}},envmap:{envMap:{value:null},envMapRotation:{value:new Lt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Lt},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0},uvTransform:{value:new Lt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}}},Ri={basic:{uniforms:Oe([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Oe([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Ot(0)},envMapIntensity:{value:1}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Oe([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Oe([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Oe([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Oe([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Oe([mt.points,mt.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Oe([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Oe([mt.common,mt.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Oe([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Oe([mt.sprite,mt.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Lt}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distance:{uniforms:Oe([mt.common,mt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distance_vert,fragmentShader:zt.distance_frag},shadow:{uniforms:Oe([mt.lights,mt.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};Ri.physical={uniforms:Oe([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Lt},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Lt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Lt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Lt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Lt},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Lt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Lt},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Lt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};var po={r:0,b:0,g:0},Vm=new Zt,yu=new Lt;yu.set(-1,0,0,0,1,0,0,0,1);function Wm(n,t,e,i,s,r){let a=new Ot(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(v){let E=v.isScene===!0?v.background:null;if(E&&E.isTexture){let S=v.backgroundBlurriness>0;E=t.get(E,S)}return E}function g(v){let E=!1,S=f(v);S===null?p(a,o):S&&S.isColor&&(p(S,1),E=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(v,E){let S=f(E);S&&S.isCubeTexture?(c===void 0&&(c=new qt(new bi(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:yn(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:Ce,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,T,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Vm.makeRotationFromEuler(E.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(yu),c.material.toneMapped=Xt.getTransfer(S.colorSpace)!==Jt,(h!==S||d!==S.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=S,d=S.version,u=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new qt(new pn(2,2),new Ti({name:"BackgroundMaterial",uniforms:yn(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Xt.getTransfer(S.colorSpace)!==Jt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=S,d=S.version,u=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,E){v.getRGB(po,Wl(n)),e.buffers.color.setClear(po.r,po.g,po.b,E,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,E=1){a.set(v),o=E,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,p(a,o)},render:g,addToRenderList:y,dispose:m}}function Xm(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(N,z,$,R,k){let W=!1,q=d(N,R,$,z);r!==q&&(r=q,c(r.object)),W=f(N,R,$,k),W&&g(N,R,$,k),k!==null&&t.update(k,n.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,S(N,z,$,R),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return n.createVertexArray()}function c(N){return n.bindVertexArray(N)}function h(N){return n.deleteVertexArray(N)}function d(N,z,$,R){let k=R.wireframe===!0,W=i[z.id];W===void 0&&(W={},i[z.id]=W);let q=N.isInstancedMesh===!0?N.id:0,U=W[q];U===void 0&&(U={},W[q]=U);let C=U[$.id];C===void 0&&(C={},U[$.id]=C);let F=C[k];return F===void 0&&(F=u(l()),C[k]=F),F}function u(N){let z=[],$=[],R=[];for(let k=0;k<e;k++)z[k]=0,$[k]=0,R[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:$,attributeDivisors:R,object:N,attributes:{},index:null}}function f(N,z,$,R){let k=r.attributes,W=z.attributes,q=0,U=$.getAttributes();for(let C in U)if(U[C].location>=0){let X=k[C],nt=W[C];if(nt===void 0&&(C==="instanceMatrix"&&N.instanceMatrix&&(nt=N.instanceMatrix),C==="instanceColor"&&N.instanceColor&&(nt=N.instanceColor)),X===void 0||X.attribute!==nt||nt&&X.data!==nt.data)return!0;q++}return r.attributesNum!==q||r.index!==R}function g(N,z,$,R){let k={},W=z.attributes,q=0,U=$.getAttributes();for(let C in U)if(U[C].location>=0){let X=W[C];X===void 0&&(C==="instanceMatrix"&&N.instanceMatrix&&(X=N.instanceMatrix),C==="instanceColor"&&N.instanceColor&&(X=N.instanceColor));let nt={};nt.attribute=X,X&&X.data&&(nt.data=X.data),k[C]=nt,q++}r.attributes=k,r.attributesNum=q,r.index=R}function y(){let N=r.newAttributes;for(let z=0,$=N.length;z<$;z++)N[z]=0}function p(N){m(N,0)}function m(N,z){let $=r.newAttributes,R=r.enabledAttributes,k=r.attributeDivisors;$[N]=1,R[N]===0&&(n.enableVertexAttribArray(N),R[N]=1),k[N]!==z&&(n.vertexAttribDivisor(N,z),k[N]=z)}function v(){let N=r.newAttributes,z=r.enabledAttributes;for(let $=0,R=z.length;$<R;$++)z[$]!==N[$]&&(n.disableVertexAttribArray($),z[$]=0)}function E(N,z,$,R,k,W,q){q===!0?n.vertexAttribIPointer(N,z,$,k,W):n.vertexAttribPointer(N,z,$,R,k,W)}function S(N,z,$,R){y();let k=R.attributes,W=$.getAttributes(),q=z.defaultAttributeValues;for(let U in W){let C=W[U];if(C.location>=0){let F=k[U];if(F===void 0&&(U==="instanceMatrix"&&N.instanceMatrix&&(F=N.instanceMatrix),U==="instanceColor"&&N.instanceColor&&(F=N.instanceColor)),F!==void 0){let X=F.normalized,nt=F.itemSize,vt=t.get(F);if(vt===void 0)continue;let K=vt.buffer,ft=vt.type,yt=vt.bytesPerElement,At=ft===n.INT||ft===n.UNSIGNED_INT||F.gpuType===Ca;if(F.isInterleavedBufferAttribute){let gt=F.data,Ut=gt.isInterleavedBuffer===!0?gt.stride:gt.itemSize,ue=F.offset;if(gt.isInstancedInterleavedBuffer||gt.isInstancedBufferAttribute){for(let It=0;It<C.locationSize;It++)m(C.location+It,gt.meshPerAttribute);N.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let It=0;It<C.locationSize;It++)p(C.location+It);n.bindBuffer(n.ARRAY_BUFFER,K);for(let It=0;It<C.locationSize;It++)E(C.location+It,nt/C.locationSize,ft,X,Ut*yt,(ue+nt/C.locationSize*It)*yt,At)}else{if(F.isInstancedBufferAttribute){for(let gt=0;gt<C.locationSize;gt++)m(C.location+gt,F.meshPerAttribute);N.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let gt=0;gt<C.locationSize;gt++)p(C.location+gt);n.bindBuffer(n.ARRAY_BUFFER,K);for(let gt=0;gt<C.locationSize;gt++)E(C.location+gt,nt/C.locationSize,ft,X,nt*yt,nt/C.locationSize*gt*yt,At)}}else if(q!==void 0){let X=q[U];if(X!==void 0)switch(X.length){case 2:n.vertexAttrib2fv(C.location,X);break;case 3:n.vertexAttrib3fv(C.location,X);break;case 4:n.vertexAttrib4fv(C.location,X);break;default:n.vertexAttrib1fv(C.location,X)}}}}v()}function A(){L();for(let N in i){let z=i[N];for(let $ in z){let R=z[$];for(let k in R){let W=R[k];for(let q in W)h(W[q].object),delete W[q];delete R[k]}}delete i[N]}}function T(N){if(i[N.id]===void 0)return;let z=i[N.id];for(let $ in z){let R=z[$];for(let k in R){let W=R[k];for(let q in W)h(W[q].object),delete W[q];delete R[k]}}delete i[N.id]}function _(N){for(let z in i){let $=i[z];for(let R in $){let k=$[R];if(k[N.id]===void 0)continue;let W=k[N.id];for(let q in W)h(W[q].object),delete W[q];delete k[N.id]}}}function b(N){for(let z in i){let $=i[z],R=N.isInstancedMesh===!0?N.id:0,k=$[R];if(k!==void 0){for(let W in k){let q=k[W];for(let U in q)h(q[U].object),delete q[U];delete k[W]}delete $[R],Object.keys($).length===0&&delete i[z]}}}function L(){I(),a=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:I,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:b,releaseStatesOfProgram:_,initAttributes:y,enableAttribute:p,disableUnusedAttributes:v}}function qm(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Ym(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==pi&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let b=_===fi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==Ve&&_!==ri&&!b&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Ct("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Ct("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Ct("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:v,maxVaryings:E,maxFragmentUniforms:S,maxSamples:A,samples:T}}function $m(n){let t=this,e=null,i=0,s=!1,r=!1,a=new hi,o=new Lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,y=d.clipIntersection,p=d.clipShadows,m=n.get(d);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let v=r?0:i,E=v*4,S=m.clippingState||null;l.value=S,S=h(g,u,E,f);for(let A=0;A!==E;++A)S[A]=e[A];m.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,g){let y=d!==null?d.length:0,p=null;if(y!==0){if(p=l.value,g!==!0||p===null){let m=f+y*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let E=0,S=f;E!==y;++E,S+=4)a.copy(d[E]).applyMatrix4(v,o),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,p}}var dr=class extends $e{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Ns(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new bi(5,5,5),r=new Ti({name:"CubemapFromEquirect",uniforms:yn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ce,blending:gn});r.uniforms.tEquirect.value=e;let a=new qt(s,r),o=e.minFilter;return e.minFilter===Gi&&(e.minFilter=ze),new Qn(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}},Qh=256,Zm=3,Jm=20,Mu=256,Su=16,Km=3,Qm=new O,jm=new Ot,as=class n{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Qn(1,10,null),this._boxMesh=new qt(new bi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=Qm}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,g=l.autoClearStencil,y=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(t.background=l.getClearColor(jm));let p=new Qn(i,s,h);return p.position.copy(o),p.update(l,t),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=g,t.background=y,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=eu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Qh,Vh(t))}_fromTexture(t,e){t.mapping===xn||t.mapping===es?this._setSize(t.image.length===0?Qh:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=jh(t,!1,!1),i=Math.log2(t)-Zm;for(let s=0;s<=i;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=jh(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===xn||t.mapping===es?(this._cubemapMaterial===null&&(this._cubemapMaterial=eu()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=tu()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=tg(),this._integrationMaterial=eg());let e=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Su);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-Km)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(Mu*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=ig());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(r,0,i)}};function jh(n,t,e){return new dr(n,{minFilter:Gi,generateMipmaps:t,type:fi,colorSpace:Ms,depthBuffer:e})}function fr(n,t,e){return new Ti({name:n,uniforms:t,vertexShader:zt.cube_vert,fragmentShader:e,side:Ce,blending:gn,depthTest:!1,depthWrite:!1})}function tg(){return fr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Mu}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function eg(){return fr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Su}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function ig(){return fr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Jm}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function tu(){return fr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function eu(){return fr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function ng(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===is||f===Aa)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let y=new dr(g.height);return y.fromEquirectangularTexture(n,u),t.set(u,y),u.addEventListener("dispose",c),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,g=f===is||f===Aa,y=f===xn||f===es;if(g||y){let p=e.get(u),m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return i===null&&(i=new as(n)),p=g?i.fromEquirectangular(u,p):i.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{let v=u.image;return g&&v&&v.height>0||y&&v&&l(v)?(i===null&&(i=new as(n)),p=g?i.fromEquirectangular(u):i.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,f){return f===is?u.mapping=xn:f===Aa&&(u.mapping=es),u}function l(u){let f=0,g=6;for(let y=0;y<g;y++)u[y]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function sg(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&_s("WebGLRenderer: "+i+" extension not supported."),s}}}function rg(n,t,e,i){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&t.remove(g.index);for(let p in g.attributes)t.remove(g.attributes[p]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let y=r.get(g);y&&(t.remove(y),r.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function c(g,y){return s[y.id]!==void 0||(y.addEventListener("dispose",o),s[y.id]=new WeakRef(y),a.register(y,y.id,y),e.memory.geometries++),y}function h(g){let y=g.attributes;for(let p in y)t.update(y[p],n.ARRAY_BUFFER)}function d(g){let y=g.index,p=g.attributes.position,m=0;if(p===void 0)return;let v=y!==null?y.array.length:p.array.length/3-1,E=p.count>=65535?Cs:Rs,S=new E(Math.ceil(v/3)*6,1),A=S.array;if(y!==null){let _=y.array;m=y.version;for(let b=0,L=0;b<v;b+=3){let I=_[b+0],N=_[b+1],z=_[b+2];A[L++]=I,A[L++]=N,A[L++]=N,A[L++]=z,A[L++]=z,A[L++]=I}}else{m=p.version;for(let _=0,b=0;_<v;_+=3){let L=_+0,I=_+1,N=_+2;A[b++]=L,A[b++]=I,A[b++]=I,A[b++]=N,A[b++]=N,A[b++]=L}}S.version=m;let T=r.get(g);T&&t.remove(T),r.set(g,S)}function u(g){let y=r.get(g);if(y){let p=g.index;p!==null&&y.version<p.version&&d(g)}else d(g);return r.get(g)}function f(){for(let g in s){let y=s[g].deref();y!==void 0&&l(y)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function ag(n,t,e){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){n.drawElements(i,u,r,d*a),e.update(u,i,1)}function c(d,u,f){f!==0&&(n.drawElementsInstanced(i,u,r,d*a,f),e.update(u,i,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let y=0;for(let p=0;p<f;p++)y+=u[p];e.update(y,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function og(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:Pt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function lg(n,t,e){let i=new WeakMap,s=new oe;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==d){let L=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",L)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],E=0;f===!0&&(E=1),g===!0&&(E=2),y===!0&&(E=3);let S=o.attributes.position.count*E,A=1;S>t.maxTextureSize&&(A=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let T=new Float32Array(S*A*4*d),_=new Es(T,S,A,d);_.type=ri,_.needsUpdate=!0;let b=E*4;for(let I=0;I<d;I++){let N=p[I],z=m[I],$=v[I],R=S*A*4*I;for(let k=0;k<N.count;k++){let W=k*b;f===!0&&(s.fromBufferAttribute(N,k),T[R+W+0]=s.x,T[R+W+1]=s.y,T[R+W+2]=s.z,T[R+W+3]=0),g===!0&&(s.fromBufferAttribute(z,k),T[R+W+4]=s.x,T[R+W+5]=s.y,T[R+W+6]=s.z,T[R+W+7]=0),y===!0&&(s.fromBufferAttribute($,k),T[R+W+8]=s.x,T[R+W+9]=s.y,T[R+W+10]=s.z,T[R+W+11]=$.itemSize===4?s.w:1)}}u={count:d,texture:_,size:new xt(S,A)},i.set(o,u),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function cg(n,t,e,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var hg={[El]:"LINEAR_TONE_MAPPING",[Tl]:"REINHARD_TONE_MAPPING",[wl]:"CINEON_TONE_MAPPING",[ir]:"ACES_FILMIC_TONE_MAPPING",[Rl]:"AGX_TONE_MAPPING",[Cl]:"NEUTRAL_TONE_MAPPING",[Al]:"CUSTOM_TONE_MAPPING"};function ug(n,t,e,i,s,r){let a=new $e(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Re;h.setAttribute("position",new Kt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Kt([0,2,0,0,2,0],2));let d=new ua({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new qt(h,d),f=new Qs(-1,1,1,-1,0,1),g=null,y=null,p=!1,m,v=null,E=[],S=!1;this.setSize=function(A,T){a.setSize(A,T),o!==null&&o.setSize(A,T),l!==null&&l.setSize(A,T);for(let _=0;_<E.length;_++){let b=E[_];b.setSize&&b.setSize(A,T)}},this.setEffects=function(A){E=A,S=E.length>0&&E[0].isRenderPass===!0;let T=a.width,_=a.height;E.length>0&&o===null&&(o=new $e(T,_,{type:fi,depthBuffer:!1,stencilBuffer:!1}),l=new $e(T,_,{type:fi,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&E.some(L=>L.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new ki(T,_),r===!0&&(c.format=Hi,c.type=vn)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let L=0;L<E.length;L++){let I=E[L];I.setSize&&I.setSize(T,_),b&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(c)}},this.begin=function(A,T){if(p||A.toneMapping===wi&&E.length===0)return!1;if(v=T,T!==null){let _=T.width,b=T.height;(a.width!==_||a.height!==b)&&this.setSize(_,b)}return S===!1&&A.setRenderTarget(a),m=A.toneMapping,A.toneMapping=wi,!0},this.hasRenderPass=function(){return S},this.end=function(A,T){A.toneMapping=m,p=!0;let _=a,b=o;for(let L=0;L<E.length;L++){let I=E[L];I.enabled!==!1&&(I.render(A,b,_,T),I.needsSwap!==!1&&(_=b,b=b===o?l:o))}if(g!==A.outputColorSpace||y!==A.toneMapping){g=A.outputColorSpace,y=A.toneMapping,d.defines={},Xt.getTransfer(g)===Jt&&(d.defines.SRGB_TRANSFER="");let L=hg[y];L&&(d.defines[L]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,A.setRenderTarget(v),A.render(u,f),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var bu=new ke,Eu=new ki(1,1),Tu=new Fs(1),wu=new Es,Au=new ia,Ru=new Ns,iu=[],nu=[],su=new Float32Array(16),ru=new Float32Array(9),au=new Float32Array(4);function os(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=iu[s];if(r===void 0&&(r=new Float32Array(s),iu[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function xe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ve(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function _o(n,t){let e=nu[t];e===void 0&&(e=new Int32Array(t),nu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function dg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function fg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;n.uniform2fv(this.addr,t),ve(e,t)}}function pg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;n.uniform3fv(this.addr,t),ve(e,t)}}function mg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;n.uniform4fv(this.addr,t),ve(e,t)}}function gg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(xe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(xe(e,i))return;au.set(i),n.uniformMatrix2fv(this.addr,!1,au),ve(e,i)}}function _g(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(xe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(xe(e,i))return;ru.set(i),n.uniformMatrix3fv(this.addr,!1,ru),ve(e,i)}}function xg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(xe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(xe(e,i))return;su.set(i),n.uniformMatrix4fv(this.addr,!1,su),ve(e,i)}}function vg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function yg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;n.uniform2iv(this.addr,t),ve(e,t)}}function Mg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;n.uniform3iv(this.addr,t),ve(e,t)}}function Sg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;n.uniform4iv(this.addr,t),ve(e,t)}}function bg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Eg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;n.uniform2uiv(this.addr,t),ve(e,t)}}function Tg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;n.uniform3uiv(this.addr,t),ve(e,t)}}function wg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;n.uniform4uiv(this.addr,t),ve(e,t)}}function xo(n){return n.version===0&&(n.compareFunction=zl,n.needsUpdate=!0),n}function Ag(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=xo(Eu):r=bu,e.setTexture2D(t||r,s)}function Rg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Au,s)}function Cg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=xo(Tu):r=Ru,e.setTextureCube(t||r,s)}function Ig(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||wu,s)}function Pg(n){switch(n){case 5126:return dg;case 35664:return fg;case 35665:return pg;case 35666:return mg;case 35674:return gg;case 35675:return _g;case 35676:return xg;case 5124:case 35670:return vg;case 35667:case 35671:return yg;case 35668:case 35672:return Mg;case 35669:case 35673:return Sg;case 5125:return bg;case 36294:return Eg;case 36295:return Tg;case 36296:return wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ag;case 35679:case 36299:case 36307:return Rg;case 35680:case 36300:case 36308:case 36293:return Cg;case 36289:case 36303:case 36311:case 36292:return Ig}}function Lg(n,t){n.uniform1fv(this.addr,t)}function Dg(n,t){let e=os(t,this.size,2);n.uniform2fv(this.addr,e)}function Ng(n,t){let e=os(t,this.size,3);n.uniform3fv(this.addr,e)}function Ug(n,t){let e=os(t,this.size,4);n.uniform4fv(this.addr,e)}function Fg(n,t){let e=os(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Og(n,t){let e=os(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Bg(n,t){let e=os(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function zg(n,t){n.uniform1iv(this.addr,t)}function kg(n,t){n.uniform2iv(this.addr,t)}function Gg(n,t){n.uniform3iv(this.addr,t)}function Hg(n,t){n.uniform4iv(this.addr,t)}function Vg(n,t){n.uniform1uiv(this.addr,t)}function Wg(n,t){n.uniform2uiv(this.addr,t)}function Xg(n,t){n.uniform3uiv(this.addr,t)}function qg(n,t){n.uniform4uiv(this.addr,t)}function Yg(n,t,e){let i=this.cache,s=t.length,r=_o(e,s);xe(i,r)||(n.uniform1iv(this.addr,r),ve(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=xo(Eu):a=bu;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function $g(n,t,e){let i=this.cache,s=t.length,r=_o(e,s);xe(i,r)||(n.uniform1iv(this.addr,r),ve(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Au,r[a])}function Zg(n,t,e){let i=this.cache,s=t.length,r=_o(e,s);xe(i,r)||(n.uniform1iv(this.addr,r),ve(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=xo(Tu):a=Ru;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function Jg(n,t,e){let i=this.cache,s=t.length,r=_o(e,s);xe(i,r)||(n.uniform1iv(this.addr,r),ve(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||wu,r[a])}function Kg(n){switch(n){case 5126:return Lg;case 35664:return Dg;case 35665:return Ng;case 35666:return Ug;case 35674:return Fg;case 35675:return Og;case 35676:return Bg;case 5124:case 35670:return zg;case 35667:case 35671:return kg;case 35668:case 35672:return Gg;case 35669:case 35673:return Hg;case 5125:return Vg;case 36294:return Wg;case 36295:return Xg;case 36296:return qg;case 35678:case 36198:case 36298:case 36306:case 35682:return Yg;case 35679:case 36299:case 36307:return $g;case 35680:case 36300:case 36308:case 36293:return Zg;case 36289:case 36303:case 36311:case 36292:return Jg}}var ec=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Pg(e.type)}},ic=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Kg(e.type)}},nc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},jl=/(\w+)(\])?(\[|\.)?/g;function ou(n,t){n.seq.push(t),n.map[t.id]=t}function Qg(n,t,e){let i=n.name,s=i.length;for(jl.lastIndex=0;;){let r=jl.exec(i),a=jl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){ou(e,c===void 0?new ec(o,n,t):new ic(o,n,t));break}else{let d=e.map[o];d===void 0&&(d=new nc(o),ou(e,d)),e=d}}}var rs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Qg(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function lu(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var jg=37297,t0=0;function e0(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var cu=new Lt;function i0(n){Xt._getMatrix(cu,Xt.workingColorSpace,n);let t=`mat3( ${cu.elements.map(e=>e.toFixed(4))} )`;switch(Xt.getTransfer(n)){case Ss:return[t,"LinearTransferOETF"];case Jt:return[t,"sRGBTransferOETF"];default:return Ct("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function hu(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+e0(n.getShaderSource(t),o)}else return r}function n0(n,t){let e=i0(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var s0={[El]:"Linear",[Tl]:"Reinhard",[wl]:"Cineon",[ir]:"ACESFilmic",[Rl]:"AgX",[Cl]:"Neutral",[Al]:"Custom"};function r0(n,t){let e=s0[t];return e===void 0?(Ct("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var mo=new O;function a0(){Xt.getLuminanceCoefficients(mo);let n=mo.x.toFixed(4),t=mo.y.toFixed(4),e=mo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function o0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ur).join(`
`)}function l0(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function c0(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function ur(n){return n!==""}function uu(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function du(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var h0=/^[ \t]*#include +<([\w\d./]+)>/gm;function sc(n){return n.replace(h0,u0)}function u0(n,t){let e=zt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return sc(e)}var d0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fu(n){return n.replace(d0,f0)}function f0(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function pu(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var p0={[tr]:"SHADOWMAP_TYPE_PCF",[jn]:"SHADOWMAP_TYPE_VSM"};function m0(n){return p0[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var g0={[es]:"ENVMAP_MODE_REFRACTION"};function _0(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":g0[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var x0={[bl]:"ENVMAP_BLENDING_MULTIPLY",[Ah]:"ENVMAP_BLENDING_MIX",[Rh]:"ENVMAP_BLENDING_ADD"};function v0(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":x0[n.combine]||"ENVMAP_BLENDING_NONE"}function y0(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=m0(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=_0(e),d=v0(e),u=o0(e),f=l0(r),g=s.createProgram(),y,p,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(ur).join(`
`),y.length>0&&(y+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(ur).join(`
`),p.length>0&&(p+=`
`)):(y=[pu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ur).join(`
`),p=[pu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==wi?"#define TONE_MAPPING":"",e.toneMapping!==wi?zt.tonemapping_pars_fragment:"",e.toneMapping!==wi?r0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,n0("linearToOutputTexel",e.outputColorSpace),a0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ur).join(`
`)),a=sc(a),a=uu(a,e),a=du(a,e),o=sc(o),o=uu(o,e),o=du(o,e),a=fu(a),o=fu(o),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,y=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,p=["#define varying in",e.glslVersion===kl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===kl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=m+y+a,E=m+p+o,S=lu(s,s.VERTEX_SHADER,v),A=lu(s,s.FRAGMENT_SHADER,E);s.attachShader(g,S),s.attachShader(g,A),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function T(I){if(n.debug.checkShaderErrors){let N=s.getProgramInfoLog(g)||"",z=s.getShaderInfoLog(S)||"",$=s.getShaderInfoLog(A)||"",R=N.trim(),k=z.trim(),W=$.trim(),q=!0,U=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,S,A);else{let C=hu(s,S,"vertex"),F=hu(s,A,"fragment");Pt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+R+`
`+C+`
`+F)}else R!==""?Ct("WebGLProgram: Program Info Log:",R):(k===""||W==="")&&(U=!1);U&&(I.diagnostics={runnable:q,programLog:R,vertexShader:{log:k,prefix:y},fragmentShader:{log:W,prefix:p}})}s.deleteShader(S),s.deleteShader(A),_=new rs(s,g),b=c0(s,g)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(g,jg)),L},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=t0++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=A,this}var M0=0,rc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new ac(t),e.set(t,i)),i}},ac=class{constructor(t){this.id=M0++,this.code=t,this.usedTimes=0}};function S0(n){return n===sn||n===lr||n===cr}function b0(n,t,e,i,s,r){let a=new Ts,o=new rc,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,b,L,I,N,z){let $=I.fog,R=N.geometry,k=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,q=t.get(_.envMap||k,W),U=u[_.type],C=i.precision;_.precision!==null&&(C=i.getMaxPrecision(_.precision),C!==_.precision&&Ct("WebGLProgram.getParameters:",_.precision,"not supported, using",C,"instead."));let F=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,X=F!==void 0?F.length:0,nt=0;R.morphAttributes.position!==void 0&&(nt=1),R.morphAttributes.normal!==void 0&&(nt=2),R.morphAttributes.color!==void 0&&(nt=3);let vt,K,ft,yt;if(U){let pt=Ri[U];vt=pt.vertexShader,K=pt.fragmentShader}else{vt=_.vertexShader,K=_.fragmentShader;let pt=o.getVertexShaderStage(_),te=o.getFragmentShaderStage(_);o.update(_,pt,te),ft=pt.id,yt=te.id}let At=n.getRenderTarget(),gt=n.state.buffers.depth.getReversed(),Ut=N.isInstancedMesh===!0,ue=N.isBatchedMesh===!0,It=!!_.map,jt=!!_.matcap,ee=!!q,Ht=ee&&q.isPMREMTexture===!0,Te=!!_.aoMap,me=!!_.lightMap,He=!!_.bumpMap&&_.wireframe===!1,le=!!_.normalMap,_i=!!_.displacementMap,ye=!!_.emissiveMap,je=!!_.metalnessMap,ti=!!_.roughnessMap,ei=_.anisotropy>0,B=_.clearcoat>0,ii=_.diffuseRoughness>0,re=_.dispersion>0,ae=_.retroreflectivity>0,dt=_.iridescence>0,ge=_.sheen>0,Rt=_.transmission>0,Dt=ei&&!!_.anisotropyMap,w=B&&!!_.clearcoatMap,x=B&&!!_.clearcoatNormalMap,H=B&&!!_.clearcoatRoughnessMap,et=ii&&!!_.diffuseRoughnessMap,tt=dt&&!!_.iridescenceMap,rt=dt&&!!_.iridescenceThicknessMap,ht=ge&&!!_.sheenColorMap,J=ge&&!!_.sheenRoughnessMap,Q=!!_.specularMap,ot=!!_.specularColorMap,P=!!_.specularIntensityMap,j=Rt&&!!_.transmissionMap,Z=Rt&&!!_.thicknessMap,lt=!!_.gradientMap,st=!!_.alphaMap,at=_.alphaTest>0,Tt=!!_.alphaHash,Bt=!!_.extensions,it=wi;_.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(it=n.toneMapping);let wt=Ht?q.isCompressedCubeTexture?q.image[0].mipmaps:q.mipmaps:null,Ft={shaderID:U,shaderType:_.type,shaderName:_.name,vertexShader:vt,fragmentShader:K,defines:_.defines,customVertexShaderID:ft,customFragmentShaderID:yt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:C,batching:ue,batchingColor:ue&&N._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&N.instanceColor!==null,instancingMorph:Ut&&N.morphTexture!==null,outputColorSpace:At===null?n.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:Xt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:It,matcap:jt,envMap:ee,envMapMode:ee&&q.mapping,envMapPMREM:Ht,envMapMaxLod:Ht?wt.length-1:null,envMapSize:Ht?wt[0].width:null,aoMap:Te,lightMap:me,bumpMap:He,normalMap:le,displacementMap:_i,emissiveMap:ye,normalMapObjectSpace:le&&_.normalMapType===Ph,normalMapTangentSpace:le&&_.normalMapType===fo,packedNormalMap:le&&_.normalMapType===fo&&S0(_.normalMap.format),metalnessMap:je,roughnessMap:ti,anisotropy:ei,anisotropyMap:Dt,clearcoat:B,clearcoatMap:w,clearcoatNormalMap:x,clearcoatRoughnessMap:H,diffuseRoughness:ii,diffuseRoughnessMap:et,dispersion:re,retroreflection:ae,iridescence:dt,iridescenceMap:tt,iridescenceThicknessMap:rt,sheen:ge,sheenColorMap:ht,sheenRoughnessMap:J,specularMap:Q,specularColorMap:ot,specularIntensityMap:P,transmission:Rt,transmissionMap:j,thicknessMap:Z,gradientMap:lt,opaque:_.transparent===!1&&_.blending===ts&&_.alphaToCoverage===!1,alphaMap:st,alphaTest:at,alphaHash:Tt,combine:_.combine,mapUv:It&&f(_.map.channel),aoMapUv:Te&&f(_.aoMap.channel),lightMapUv:me&&f(_.lightMap.channel),bumpMapUv:He&&f(_.bumpMap.channel),normalMapUv:le&&f(_.normalMap.channel),displacementMapUv:_i&&f(_.displacementMap.channel),emissiveMapUv:ye&&f(_.emissiveMap.channel),metalnessMapUv:je&&f(_.metalnessMap.channel),roughnessMapUv:ti&&f(_.roughnessMap.channel),anisotropyMapUv:Dt&&f(_.anisotropyMap.channel),clearcoatMapUv:w&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:x&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:et&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:tt&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:J&&f(_.sheenRoughnessMap.channel),specularMapUv:Q&&f(_.specularMap.channel),specularColorMapUv:ot&&f(_.specularColorMap.channel),specularIntensityMapUv:P&&f(_.specularIntensityMap.channel),transmissionMapUv:j&&f(_.transmissionMap.channel),thicknessMapUv:Z&&f(_.thicknessMap.channel),alphaMapUv:st&&f(_.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(le||ei),vertexNormals:!!R.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!R.attributes.uv&&(It||st),fog:!!$,useFog:_.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||R.attributes.normal===void 0&&le===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:gt,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:nt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:z.filter(pt=>pt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:it,decodeVideoTexture:It&&_.map.isVideoTexture===!0&&Xt.getTransfer(_.map.colorSpace)===Jt,decodeVideoTextureEmissive:ye&&_.emissiveMap.isVideoTexture===!0&&Xt.getTransfer(_.emissiveMap.colorSpace)===Jt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===pe,flipSided:_.side===Ce,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Bt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&_.extensions.multiDraw===!0||ue)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ft.vertexUv1s=l.has(1),Ft.vertexUv2s=l.has(2),Ft.vertexUv3s=l.has(3),l.clear(),Ft}function y(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let L in _.defines)b.push(L),b.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(p(b,_),m(b,_),b.push(n.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function p(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapPMREM),_.push(b.envMapMaxLod),_.push(b.envMapSize),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.diffuseRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.numLightProbeGrids),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function m(_,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function v(_){let b=u[_.type],L;if(b){let I=Ri[b];L=Zh.clone(I.uniforms)}else L=_.uniforms;return L}function E(_,b){let L=h.get(b);return L!==void 0?++L.usedTimes:(L=new y0(n,b,_,s),c.push(L),h.set(b,L)),L}function S(_){if(--_.usedTimes===0){let b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function A(_){o.remove(_)}function T(){o.dispose()}return{getParameters:g,getProgramCacheKey:y,getUniforms:v,acquireProgram:E,releaseProgram:S,releaseShaderCache:A,programs:c,dispose:T}}function E0(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function T0(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function mu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function gu(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,y,p,m){let v=n[t];return v===void 0?(v={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:p,group:m},n[t]=v):(v.id=u.id,v.object=u,v.geometry=f,v.material=g,v.materialVariant=a(u),v.groupOrder=y,v.renderOrder=u.renderOrder,v.z=p,v.group=m),t++,v}function l(u,f,g,y,p,m,v){v.reversedDepth===!0&&(p=-p);let E=o(u,f,g,y,p,m);g.transmission>0?i.push(E):g.transparent===!0?s.push(E):e.push(E)}function c(u,f,g,y,p,m){let v=o(u,f,g,y,p,m);g.transmission>0?i.unshift(v):g.transparent===!0?s.unshift(v):e.unshift(v)}function h(u,f){e.length>1&&e.sort(u||T0),i.length>1&&i.sort(f||mu),s.length>1&&s.sort(f||mu)}function d(){for(let u=t,f=n.length;u<f;u++){let g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function w0(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new gu,n.set(i,[a])):s>=r.length?(a=new gu,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function A0(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new O,color:new Ot};break;case"SpotLight":e={position:new O,direction:new O,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new O,halfWidth:new O,halfHeight:new O};break}return n[t.id]=e,e}}}function R0(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var C0=0;function I0(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function P0(n){let t=new A0,e=R0(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);let s=new O,r=new Zt,a=new Zt;function o(c){let h=0,d=0,u=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let f=0,g=0,y=0,p=0,m=0,v=0,E=0,S=0,A=0,T=0,_=0,b=0,L=0,I=0;c.sort(I0);for(let z=0,$=c.length;z<$;z++){let R=c[z],k=R.color,W=R.intensity,q=R.distance,U=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===sn?U=R.shadow.map.texture:U=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=k.r*W,d+=k.g*W,u+=k.b*W;else if(R.isLightProbe){for(let C=0;C<9;C++)i.probe[C].addScaledVector(R.sh.coefficients[C],W);I++}else if(R.isSunLight){let C=t.get(R);if(C.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let F=R.shadow,X=e.get(R);X.shadowIntensity=F.intensity,X.shadowBias=F.bias,X.shadowNormalBias=F.normalBias,X.shadowRadius=F.radius,X.shadowMapSize.copy(F.mapSize).multiply(F.getFrameExtents()),i.sunShadow[g]=X,i.sunShadowMap[g]=U;let nt=F.getViewportCount();for(let vt=0;vt<nt;vt++)i.sunShadowMatrix[y+vt]=F.getMatrix(vt),i.sunShadowCascade[y+vt]=F._cascadeData[vt];y+=nt,g++}i.sun[f]=C,f++}else if(R.isDirectionalLight){let C=t.get(R);if(C.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let F=R.shadow,X=e.get(R);X.shadowIntensity=F.intensity,X.shadowBias=F.bias,X.shadowNormalBias=F.normalBias,X.shadowRadius=F.radius,X.shadowMapSize=F.mapSize,i.directionalShadow[p]=X,i.directionalShadowMap[p]=U,i.directionalShadowMatrix[p]=R.shadow.matrix,A++}i.directional[p]=C,p++}else if(R.isSpotLight){let C=t.get(R);C.position.setFromMatrixPosition(R.matrixWorld),C.color.copy(k).multiplyScalar(W),C.distance=q,C.coneCos=Math.cos(R.angle),C.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),C.decay=R.decay,i.spot[v]=C;let F=R.shadow;if(R.map&&(i.spotLightMap[b]=R.map,b++,F.updateMatrices(R),R.castShadow&&L++),i.spotLightMatrix[v]=F.matrix,R.castShadow){let X=e.get(R);X.shadowIntensity=F.intensity,X.shadowBias=F.bias,X.shadowNormalBias=F.normalBias,X.shadowRadius=F.radius,X.shadowMapSize=F.mapSize,i.spotShadow[v]=X,i.spotShadowMap[v]=U,_++}v++}else if(R.isRectAreaLight){let C=t.get(R);C.color.copy(k).multiplyScalar(W),C.halfWidth.set(R.width*.5,0,0),C.halfHeight.set(0,R.height*.5,0),i.rectArea[E]=C,E++}else if(R.isPointLight){let C=t.get(R);if(C.color.copy(R.color).multiplyScalar(R.intensity),C.distance=R.distance,C.decay=R.decay,R.castShadow){let F=R.shadow,X=e.get(R);X.shadowIntensity=F.intensity,X.shadowBias=F.bias,X.shadowNormalBias=F.normalBias,X.shadowRadius=F.radius,X.shadowMapSize=F.mapSize,X.shadowCameraNear=F.camera.near,X.shadowCameraFar=F.camera.far,i.pointShadow[m]=X,i.pointShadowMap[m]=U,i.pointShadowMatrix[m]=R.shadow.matrix,T++}i.point[m]=C,m++}else if(R.isHemisphereLight){let C=t.get(R);C.skyColor.copy(R.color).multiplyScalar(W),C.groundColor.copy(R.groundColor).multiplyScalar(W),i.hemi[S]=C,S++}}E>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let N=i.hash;(N.sunLength!==f||N.directionalLength!==p||N.pointLength!==m||N.spotLength!==v||N.rectAreaLength!==E||N.hemiLength!==S||N.numSunShadows!==g||N.numDirectionalShadows!==A||N.numPointShadows!==T||N.numSpotShadows!==_||N.numSpotMaps!==b||N.numLightProbes!==I)&&(i.sun.length=f,i.directional.length=p,i.spot.length=v,i.rectArea.length=E,i.point.length=m,i.hemi.length=S,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+b-L,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=I,N.sunLength=f,N.directionalLength=p,N.pointLength=m,N.spotLength=v,N.rectAreaLength=E,N.hemiLength=S,N.numSunShadows=g,N.numDirectionalShadows=A,N.numPointShadows=T,N.numSpotShadows=_,N.numSpotMaps=b,N.numLightProbes=I,i.version=C0++)}function l(c,h){let d=0,u=0,f=0,g=0,y=0,p=0,m=h.matrixWorldInverse;for(let v=0,E=c.length;v<E;v++){let S=c[v];if(S.isSunLight){let A=i.sun[d];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(m),d++}else if(S.isDirectionalLight){let A=i.directional[u];A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),u++}else if(S.isSpotLight){let A=i.spot[g];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),g++}else if(S.isRectAreaLight){let A=i.rectArea[y];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),A.halfWidth.set(S.width*.5,0,0),A.halfHeight.set(0,S.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),y++}else if(S.isPointLight){let A=i.point[f];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){let A=i.hemi[p];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:i}}function _u(n){let t=new P0(n),e=[],i=[],s=[];function r(d){h.camera=d,e.length=0,i.length=0,s.length=0}function a(d){d.isLightProbeGrid?s.push(d):e.push(d)}function o(d){i.push(d)}function l(){t.setup(e),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function L0(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new _u(n),t.set(s,[o])):r>=a.length?(o=new _u(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var D0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,N0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,U0=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],F0=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],xu=new Zt,hr=new O,tc=new O;function O0(n,t,e){let i=new Qi,s=new xt,r=new xt,a=new oe,o=new da,l=new fa,c={},h=e.maxTextureSize,d={[nn]:Ce,[Ce]:nn,[pe]:pe},u=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:D0,fragmentShader:N0}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Re;g.setAttribute("position",new qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new qt(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tr;let m=this.type;this.render=function(T,_,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===wa&&(Ct("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=tr);let L=n.getRenderTarget(),I=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),z=n.state;z.setBlending(gn),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let $=m!==this.type;$&&_.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(k=>k.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,k=T.length;R<k;R++){let W=T[R],q=W.shadow;if(q===void 0){Ct("WebGLShadowMap:",W,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let U=q.getFrameExtents();s.multiply(U),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/U.x),s.x=r.x*U.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/U.y),s.y=r.y*U.y,q.mapSize.y=r.y));let C=n.state.buffers.depth.getReversed();if(q.camera._reversedDepth=C,q.map===null||$===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===jn){if(W.isPointLight){Ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new $e(s.x,s.y,{format:sn,type:fi,minFilter:ze,magFilter:ze,generateMipmaps:!1}),q.map.texture.name=W.name+".shadowMap",q.map.depthTexture=new ki(s.x,s.y,ri),q.map.depthTexture.name=W.name+".shadowMapDepth",q.map.depthTexture.format=Fi,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Ee,q.map.depthTexture.magFilter=Ee}else W.isPointLight?(q.map=new dr(s.x),q.map.depthTexture=new Fs(s.x,di)):(q.map=new $e(s.x,s.y),q.map.depthTexture=new ki(s.x,s.y,di)),q.map.depthTexture.name=W.name+".shadowMap",q.map.depthTexture.format=Fi,this.type===tr?(q.map.depthTexture.compareFunction=C?Bl:Ol,q.map.depthTexture.minFilter=ze,q.map.depthTexture.magFilter=ze):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Ee,q.map.depthTexture.magFilter=Ee);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==s.x||q.map.height!==s.y)&&q.map.setSize(s.x,s.y);let F=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();W.isPointLight!==!0&&q.updateMatrices(W,b);let X=(q.camera.layers.mask&4294967294)!==0?q.camera.layers:b.layers;for(let nt=0;nt<F;nt++){let vt=q.getCamera(nt);if(W.isPointLight){let K=q.camera,ft=q.matrix,yt=W.distance||K.far;yt!==K.far&&(K.far=yt,K.updateProjectionMatrix()),hr.setFromMatrixPosition(W.matrixWorld),K.position.copy(hr),tc.copy(K.position),tc.add(U0[nt]),K.up.copy(F0[nt]),K.lookAt(tc),K.updateMatrixWorld(),ft.makeTranslation(-hr.x,-hr.y,-hr.z),xu.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),q._frustum.setFromProjectionMatrix(xu,K.coordinateSystem,K.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)n.setRenderTarget(q.map,nt),n.clear();else{nt===0&&(n.setRenderTarget(q.map),n.clear());let K=q.getViewport(nt);a.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),z.viewport(a)}i=q.getFrustum(nt),S(_,b,vt,W,X,this.type)}q.isPointLightShadow!==!0&&this.type===jn&&v(q,b),q.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(L,I,N)};function v(T,_){let b=t.update(y);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new $e(s.x,s.y,{format:sn,type:fi}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(_,null,b,u,y,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(_,null,b,f,y,null)}function E(T,_,b,L){let I=null,N=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)I=N;else if(I=b.isPointLight===!0?l:o,n.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let z=I.uuid,$=_.uuid,R=c[z];R===void 0&&(R={},c[z]=R);let k=R[$];k===void 0&&(k=I.clone(),R[$]=k,_.addEventListener("dispose",A)),I=k}if(I.visible=_.visible,I.wireframe=_.wireframe,L===jn?I.side=_.shadowSide!==null?_.shadowSide:_.side:I.side=_.shadowSide!==null?_.shadowSide:d[_.side],I.alphaMap=_.alphaMap,I.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,I.map=_.map,I.clipShadows=_.clipShadows,I.clippingPlanes=_.clippingPlanes,I.clipIntersection=_.clipIntersection,I.displacementMap=_.displacementMap,I.displacementScale=_.displacementScale,I.displacementBias=_.displacementBias,I.wireframeLinewidth=_.wireframeLinewidth,I.linewidth=_.linewidth,b.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let z=n.properties.get(I);z.light=b}return I}function S(T,_,b,L,I,N){if(T.visible===!1)return;if(T.layers.test(I)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&N===jn)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);let R=t.update(T),k=T.material;if(Array.isArray(k)){let W=R.groups;for(let q=0,U=W.length;q<U;q++){let C=W[q],F=k[C.materialIndex];if(F&&F.visible){let X=E(T,F,L,N);T.onBeforeShadow(n,T,_,b,R,X,C),n.renderBufferDirect(b,null,R,X,T,C),T.onAfterShadow(n,T,_,b,R,X,C)}}}else if(k.visible){let W=E(T,k,L,N);T.onBeforeShadow(n,T,_,b,R,W,null),n.renderBufferDirect(b,null,R,W,T,null),T.onAfterShadow(n,T,_,b,R,W,null)}}let $=T.children;for(let R=0,k=$.length;R<k;R++)S($[R],_,b,L,I,N)}function A(T){T.target.removeEventListener("dispose",A);for(let b in c){let L=c[b],I=T.target.uuid;I in L&&(L[I].dispose(),delete L[I])}}}function B0(n,t){function e(){let P=!1,j=new oe,Z=null,lt=new oe(0,0,0,0);return{setMask:function(st){Z!==st&&!P&&(n.colorMask(st,st,st,st),Z=st)},setLocked:function(st){P=st},setClear:function(st,at,Tt,Bt,it){it===!0&&(st*=Bt,at*=Bt,Tt*=Bt),j.set(st,at,Tt,Bt),lt.equals(j)===!1&&(n.clearColor(st,at,Tt,Bt),lt.copy(j))},reset:function(){P=!1,Z=null,lt.set(-1,0,0,0)}}}function i(){let P=!1,j=!1,Z=null,lt=null,st=null;return{setReversed:function(at){if(j!==at){let Tt=t.get("EXT_clip_control");at?Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.ZERO_TO_ONE_EXT):Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.NEGATIVE_ONE_TO_ONE_EXT),j=at;let Bt=st;st=null,this.setClear(Bt)}},getReversed:function(){return j},setTest:function(at){at?gt(n.DEPTH_TEST):Ut(n.DEPTH_TEST)},setMask:function(at){Z!==at&&!P&&(n.depthMask(at),Z=at)},setFunc:function(at){if(j&&(at=Hh[at]),lt!==at){switch(at){case Wr:n.depthFunc(n.NEVER);break;case Xr:n.depthFunc(n.ALWAYS);break;case qr:n.depthFunc(n.LESS);break;case Bn:n.depthFunc(n.LEQUAL);break;case Yr:n.depthFunc(n.EQUAL);break;case $r:n.depthFunc(n.GEQUAL);break;case Zr:n.depthFunc(n.GREATER);break;case Jr:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}lt=at}},setLocked:function(at){P=at},setClear:function(at){st!==at&&(st=at,j&&(at=1-at),n.clearDepth(at))},reset:function(){P=!1,Z=null,lt=null,st=null,j=!1}}}function s(){let P=!1,j=null,Z=null,lt=null,st=null,at=null,Tt=null,Bt=null,it=null;return{setTest:function(wt){P||(wt?gt(n.STENCIL_TEST):Ut(n.STENCIL_TEST))},setMask:function(wt){j!==wt&&!P&&(n.stencilMask(wt),j=wt)},setFunc:function(wt,Ft,pt){(Z!==wt||lt!==Ft||st!==pt)&&(n.stencilFunc(wt,Ft,pt),Z=wt,lt=Ft,st=pt)},setOp:function(wt,Ft,pt){(at!==wt||Tt!==Ft||Bt!==pt)&&(n.stencilOp(wt,Ft,pt),at=wt,Tt=Ft,Bt=pt)},setLocked:function(wt){P=wt},setClear:function(wt){it!==wt&&(n.clearStencil(wt),it=wt)},reset:function(){P=!1,j=null,Z=null,lt=null,st=null,at=null,Tt=null,Bt=null,it=null}}}let r=new e,a=new i,o=new s,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],y=null,p=!1,m=null,v=null,E=null,S=null,A=null,T=null,_=null,b=new Ot(0,0,0),L=0,I=!1,N=null,z=null,$=null,R=null,k=null,W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,U=0,C=n.getParameter(n.VERSION);C.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(C)[1]),q=U>=1):C.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(C)[1]),q=U>=2);let F=null,X={},nt=n.getParameter(n.SCISSOR_BOX),vt=n.getParameter(n.VIEWPORT),K=new oe().fromArray(nt),ft=new oe().fromArray(vt);function yt(P,j,Z,lt){let st=new Uint8Array(4),at=n.createTexture();n.bindTexture(P,at),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Tt=0;Tt<Z;Tt++)P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY?n.texImage3D(j,0,n.RGBA,1,1,lt,0,n.RGBA,n.UNSIGNED_BYTE,st):n.texImage2D(j+Tt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,st);return at}let At={};At[n.TEXTURE_2D]=yt(n.TEXTURE_2D,n.TEXTURE_2D,1),At[n.TEXTURE_CUBE_MAP]=yt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),At[n.TEXTURE_2D_ARRAY]=yt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),At[n.TEXTURE_3D]=yt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),gt(n.DEPTH_TEST),a.setFunc(Bn),He(!1),le(xl),gt(n.CULL_FACE),Te(gn);function gt(P){h[P]!==!0&&(n.enable(P),h[P]=!0)}function Ut(P){h[P]!==!1&&(n.disable(P),h[P]=!1)}function ue(P,j){return u[P]!==j?(n.bindFramebuffer(P,j),u[P]=j,P===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=j),P===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=j),!0):!1}function It(P,j){let Z=g,lt=!1;if(P){Z=f.get(j),Z===void 0&&(Z=[],f.set(j,Z));let st=P.textures;if(Z.length!==st.length||Z[0]!==n.COLOR_ATTACHMENT0){for(let at=0,Tt=st.length;at<Tt;at++)Z[at]=n.COLOR_ATTACHMENT0+at;Z.length=st.length,lt=!0}}else Z[0]!==n.BACK&&(Z[0]=n.BACK,lt=!0);lt&&n.drawBuffers(Z)}function jt(P){return y!==P?(n.useProgram(P),y=P,!0):!1}let ee={[_n]:n.FUNC_ADD,[hh]:n.FUNC_SUBTRACT,[uh]:n.FUNC_REVERSE_SUBTRACT};ee[dh]=n.MIN,ee[fh]=n.MAX;let Ht={[ph]:n.ZERO,[mh]:n.ONE,[gh]:n.SRC_COLOR,[Ml]:n.SRC_ALPHA,[Sh]:n.SRC_ALPHA_SATURATE,[yh]:n.DST_COLOR,[xh]:n.DST_ALPHA,[_h]:n.ONE_MINUS_SRC_COLOR,[Sl]:n.ONE_MINUS_SRC_ALPHA,[Mh]:n.ONE_MINUS_DST_COLOR,[vh]:n.ONE_MINUS_DST_ALPHA,[bh]:n.CONSTANT_COLOR,[Eh]:n.ONE_MINUS_CONSTANT_COLOR,[Th]:n.CONSTANT_ALPHA,[wh]:n.ONE_MINUS_CONSTANT_ALPHA};function Te(P,j,Z,lt,st,at,Tt,Bt,it,wt){if(P===gn){p===!0&&(Ut(n.BLEND),p=!1);return}if(p===!1&&(gt(n.BLEND),p=!0),P!==ch){if(P!==m||wt!==I){if((v!==_n||A!==_n)&&(n.blendEquation(n.FUNC_ADD),v=_n,A=_n),wt)switch(P){case ts:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case er:n.blendFunc(n.ONE,n.ONE);break;case vl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Pt("WebGLState: Invalid blending: ",P);break}else switch(P){case ts:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case er:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case vl:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yl:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",P);break}E=null,S=null,T=null,_=null,b.set(0,0,0),L=0,m=P,I=wt}return}st=st||j,at=at||Z,Tt=Tt||lt,(j!==v||st!==A)&&(n.blendEquationSeparate(ee[j],ee[st]),v=j,A=st),(Z!==E||lt!==S||at!==T||Tt!==_)&&(n.blendFuncSeparate(Ht[Z],Ht[lt],Ht[at],Ht[Tt]),E=Z,S=lt,T=at,_=Tt),(Bt.equals(b)===!1||it!==L)&&(n.blendColor(Bt.r,Bt.g,Bt.b,it),b.copy(Bt),L=it),m=P,I=!1}function me(P,j){P.side===pe?Ut(n.CULL_FACE):gt(n.CULL_FACE);let Z=P.side===Ce;j&&(Z=!Z),He(Z),P.blending===ts&&P.transparent===!1?Te(gn):Te(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);let lt=P.stencilWrite;o.setTest(lt),lt&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),ye(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?gt(n.SAMPLE_ALPHA_TO_COVERAGE):Ut(n.SAMPLE_ALPHA_TO_COVERAGE)}function He(P){N!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),N=P)}function le(P){P!==oh?(gt(n.CULL_FACE),P!==z&&(P===xl?n.cullFace(n.BACK):P===lh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ut(n.CULL_FACE),z=P}function _i(P){P!==$&&(q&&n.lineWidth(P),$=P)}function ye(P,j,Z){P?(gt(n.POLYGON_OFFSET_FILL),(R!==j||k!==Z)&&(R=j,k=Z,a.getReversed()&&(j=-j,Z=-Z),n.polygonOffset(j,Z))):Ut(n.POLYGON_OFFSET_FILL)}function je(P){P?gt(n.SCISSOR_TEST):Ut(n.SCISSOR_TEST)}function ti(P){P===void 0&&(P=n.TEXTURE0+W-1),F!==P&&(n.activeTexture(P),F=P)}function ei(P,j,Z){Z===void 0&&(F===null?Z=n.TEXTURE0+W-1:Z=F);let lt=X[Z];lt===void 0&&(lt={type:void 0,texture:void 0},X[Z]=lt),(lt.type!==P||lt.texture!==j)&&(F!==Z&&(n.activeTexture(Z),F=Z),n.bindTexture(P,j||At[P]),lt.type=P,lt.texture=j)}function B(){let P=X[F];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function ii(){try{n.compressedTexImage2D(...arguments)}catch(P){Pt("WebGLState:",P)}}function re(){try{n.compressedTexImage3D(...arguments)}catch(P){Pt("WebGLState:",P)}}function ae(){try{n.texSubImage2D(...arguments)}catch(P){Pt("WebGLState:",P)}}function dt(){try{n.texSubImage3D(...arguments)}catch(P){Pt("WebGLState:",P)}}function ge(){try{n.compressedTexSubImage2D(...arguments)}catch(P){Pt("WebGLState:",P)}}function Rt(){try{n.compressedTexSubImage3D(...arguments)}catch(P){Pt("WebGLState:",P)}}function Dt(){try{n.texStorage2D(...arguments)}catch(P){Pt("WebGLState:",P)}}function w(){try{n.texStorage3D(...arguments)}catch(P){Pt("WebGLState:",P)}}function x(){try{n.texImage2D(...arguments)}catch(P){Pt("WebGLState:",P)}}function H(){try{n.texImage3D(...arguments)}catch(P){Pt("WebGLState:",P)}}function et(P){return d[P]!==void 0?d[P]:n.getParameter(P)}function tt(P,j){d[P]!==j&&(n.pixelStorei(P,j),d[P]=j)}function rt(P){K.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),K.copy(P))}function ht(P){ft.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),ft.copy(P))}function J(P,j){let Z=c.get(j);Z===void 0&&(Z=new WeakMap,c.set(j,Z));let lt=Z.get(P);lt===void 0&&(lt=n.getUniformBlockIndex(j,P.name),n.uniformBlockBinding(j,lt,lt),Z.set(P,lt))}function Q(P,j,Z){let st=c.get(j).get(P);l[st]!==Z&&(n.bindBufferBase(n.UNIFORM_BUFFER,st,Z),l[st]=Z)}function ot(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},d={},F=null,X={},u={},l={},f=new WeakMap,g=[],y=null,p=!1,m=null,v=null,E=null,S=null,A=null,T=null,_=null,b=new Ot(0,0,0),L=0,I=!1,N=null,z=null,$=null,R=null,k=null,K.set(0,0,n.canvas.width,n.canvas.height),ft.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:gt,disable:Ut,bindFramebuffer:ue,drawBuffers:It,useProgram:jt,setBlending:Te,setMaterial:me,setFlipSided:He,setCullFace:le,setLineWidth:_i,setPolygonOffset:ye,setScissorTest:je,activeTexture:ti,bindTexture:ei,unbindTexture:B,compressedTexImage2D:ii,compressedTexImage3D:re,texImage2D:x,texImage3D:H,pixelStorei:tt,getParameter:et,updateUBOMapping:J,uniformBlockBinding:Q,texStorage2D:Dt,texStorage3D:w,texSubImage2D:ae,texSubImage3D:dt,compressedTexSubImage2D:ge,compressedTexSubImage3D:Rt,scissor:rt,viewport:ht,reset:ot}}function z0(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new xt,h=new WeakMap,d=new Set,u,f=new WeakMap,g=new Set,y=new FinalizationRegistry(w=>g.delete(w)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(w,x){return p?new OffscreenCanvas(w,x):bs("canvas")}function v(w,x,H){let et=1,tt=Dt(w);if((tt.width>H||tt.height>H)&&(et=H/Math.max(tt.width,tt.height)),et<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let rt=Math.floor(et*tt.width),ht=Math.floor(et*tt.height);u===void 0&&(u=m(rt,ht));let J=x?m(rt,ht):u;return J.width=rt,J.height=ht,J.getContext("2d").drawImage(w,0,0,rt,ht),Ct("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+rt+"x"+ht+")."),J}else return"data"in w&&Ct("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),w;return w}function E(w){return w.generateMipmaps}function S(w){n.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(w,x,H,et,tt,rt=!1){if(w!==null){if(n[w]!==void 0)return n[w];Ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ht;et&&(ht=t.get("EXT_texture_norm16"),ht||Ct("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=x;if(x===n.RED&&(H===n.FLOAT&&(J=n.R32F),H===n.HALF_FLOAT&&(J=n.R16F),H===n.UNSIGNED_BYTE&&(J=n.R8),H===n.UNSIGNED_SHORT&&ht&&(J=ht.R16_EXT),H===n.SHORT&&ht&&(J=ht.R16_SNORM_EXT)),x===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(J=n.R8UI),H===n.UNSIGNED_SHORT&&(J=n.R16UI),H===n.UNSIGNED_INT&&(J=n.R32UI),H===n.BYTE&&(J=n.R8I),H===n.SHORT&&(J=n.R16I),H===n.INT&&(J=n.R32I)),x===n.RG&&(H===n.FLOAT&&(J=n.RG32F),H===n.HALF_FLOAT&&(J=n.RG16F),H===n.UNSIGNED_BYTE&&(J=n.RG8),H===n.UNSIGNED_SHORT&&ht&&(J=ht.RG16_EXT),H===n.SHORT&&ht&&(J=ht.RG16_SNORM_EXT)),x===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(J=n.RG8UI),H===n.UNSIGNED_SHORT&&(J=n.RG16UI),H===n.UNSIGNED_INT&&(J=n.RG32UI),H===n.BYTE&&(J=n.RG8I),H===n.SHORT&&(J=n.RG16I),H===n.INT&&(J=n.RG32I)),x===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(J=n.RGB8UI),H===n.UNSIGNED_SHORT&&(J=n.RGB16UI),H===n.UNSIGNED_INT&&(J=n.RGB32UI),H===n.BYTE&&(J=n.RGB8I),H===n.SHORT&&(J=n.RGB16I),H===n.INT&&(J=n.RGB32I)),x===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),H===n.UNSIGNED_INT&&(J=n.RGBA32UI),H===n.BYTE&&(J=n.RGBA8I),H===n.SHORT&&(J=n.RGBA16I),H===n.INT&&(J=n.RGBA32I)),x===n.RGB&&(H===n.UNSIGNED_SHORT&&ht&&(J=ht.RGB16_EXT),H===n.SHORT&&ht&&(J=ht.RGB16_SNORM_EXT),H===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),H===n.UNSIGNED_INT_10F_11F_11F_REV&&(J=n.R11F_G11F_B10F)),x===n.RGBA){let Q=rt?Ss:Xt.getTransfer(tt);H===n.FLOAT&&(J=n.RGBA32F),H===n.HALF_FLOAT&&(J=n.RGBA16F),H===n.UNSIGNED_BYTE&&(J=Q===Jt?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT&&ht&&(J=ht.RGBA16_EXT),H===n.SHORT&&ht&&(J=ht.RGBA16_SNORM_EXT),H===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function _(w,x){let H;return w?x===null||x===di||x===vn?H=n.DEPTH24_STENCIL8:x===ri?H=n.DEPTH32F_STENCIL8:x===ns&&(H=n.DEPTH24_STENCIL8,Ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===di||x===vn?H=n.DEPTH_COMPONENT24:x===ri?H=n.DEPTH_COMPONENT32F:x===ns&&(H=n.DEPTH_COMPONENT16),H}function b(w,x){return E(w)===!0||w.isFramebufferTexture&&w.minFilter!==Ee&&w.minFilter!==ze?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function L(w){let x=new WeakRef(w);i.get(w).__ref=x,g.add(x),y.register(w,x,x)}function I(w){let x=i.get(w).__ref;x!==void 0&&(g.delete(x),y.unregister(x))}function N(w){$(w.target)}function z(w){R(w.target)}function $(w){w.removeEventListener("dispose",N),I(w),W(w),w.isVideoTexture&&h.delete(w),w.isHTMLTexture&&d.delete(w)}function R(w){w.removeEventListener("dispose",z),I(w),U(w)}function k(){for(let w of g){let x=w.deref();x!==void 0&&(x.isRenderTarget===!0?R(x):$(x))}g.clear(),d.clear()}function W(w){let x=i.get(w);if(x.__webglInit===void 0)return;let H=w.source,et=f.get(H);if(et){let tt=et[x.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&q(w),Object.keys(et).length===0&&f.delete(H)}i.remove(w)}function q(w){let x=i.get(w);n.deleteTexture(x.__webglTexture);let H=w.source,et=f.get(H);delete et[x.__cacheKey],a.memory.textures--}function U(w){let x=i.get(w);x.__depthDisposeCallback&&x.__depthDisposeCallback();let H=w.depthTexture;if(H&&H.renderTarget===w&&$(H),w.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(x.__webglFramebuffer[tt]))for(let rt=0;rt<x.__webglFramebuffer[tt].length;rt++)n.deleteFramebuffer(x.__webglFramebuffer[tt][rt]);else n.deleteFramebuffer(x.__webglFramebuffer[tt]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[tt])}else{if(Array.isArray(x.__webglFramebuffer))for(let tt=0;tt<x.__webglFramebuffer.length;tt++)n.deleteFramebuffer(x.__webglFramebuffer[tt]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let tt=0;tt<x.__webglColorRenderbuffer.length;tt++)x.__webglColorRenderbuffer[tt]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[tt]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let et=w.textures;for(let tt=0,rt=et.length;tt<rt;tt++){let ht=i.get(et[tt]);ht.__webglTexture&&(n.deleteTexture(ht.__webglTexture),a.memory.textures--),i.remove(et[tt])}i.remove(w)}let C=0;function F(){C=0}function X(){return C}function nt(w){C=w}function vt(){let w=C;return w>=s.maxTextures&&Ct("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),C+=1,w}function K(w){let x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.mipmapsAutoUpdate),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function ft(w,x){let H=i.get(w);if(w.isVideoTexture&&ge(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&H.__version!==w.version){let et=w.image;if(et===null)Ct("WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)Ct("WebGLRenderer: Texture marked for update but image is incomplete");else{me(H,w,x);return}}else w.isExternalTexture&&(H.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+x)}function yt(w,x){let H=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){me(H,w,x);return}else w.isExternalTexture&&(H.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+x)}function At(w,x){let H=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){me(H,w,x);return}e.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+x)}function gt(w,x){let H=i.get(w);if(w.version>0&&H.__version!==w.version){He(H,w,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+x)}let Ut={[dn]:n.REPEAT,[vi]:n.CLAMP_TO_EDGE,[Kr]:n.MIRRORED_REPEAT},ue={[Ee]:n.NEAREST,[Ch]:n.NEAREST_MIPMAP_NEAREST,[nr]:n.NEAREST_MIPMAP_LINEAR,[ze]:n.LINEAR,[Ra]:n.LINEAR_MIPMAP_NEAREST,[Gi]:n.LINEAR_MIPMAP_LINEAR},It={[Dh]:n.NEVER,[zl]:n.ALWAYS,[Nh]:n.LESS,[Ol]:n.LEQUAL,[Uh]:n.EQUAL,[Bl]:n.GEQUAL,[Fh]:n.GREATER,[Oh]:n.NOTEQUAL};function jt(w,x){if(x.type===ri&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===ze||x.magFilter===Ra||x.magFilter===nr||x.magFilter===Gi||x.minFilter===ze||x.minFilter===Ra||x.minFilter===nr||x.minFilter===Gi)&&Ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,Ut[x.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,Ut[x.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,Ut[x.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,ue[x.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,ue[x.minFilter]),x.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,It[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ee||x.minFilter!==nr&&x.minFilter!==Gi||x.type===ri&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");n.texParameterf(w,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function ee(w,x){let H=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",N),L(x));let et=x.source,tt=f.get(et);tt===void 0&&(tt={},f.set(et,tt));let rt=K(x);if(rt!==w.__cacheKey){tt[rt]===void 0&&(tt[rt]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,H=!0),tt[rt].usedTimes++;let ht=tt[w.__cacheKey];ht!==void 0&&(tt[w.__cacheKey].usedTimes--,ht.usedTimes===0&&q(x)),w.__cacheKey=rt,w.__webglTexture=tt[rt].texture}return H}function Ht(w,x,H){return Math.floor(Math.floor(w/H)/x)}function Te(w,x,H,et){let rt=w.updateRanges;if(rt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,H,et,x.data);else{rt.sort((P,j)=>P.start-j.start);let ht=0;for(let P=1;P<rt.length;P++){let j=rt[ht],Z=rt[P],lt=j.start+j.count,st=Ht(Z.start,x.width,4),at=Ht(j.start,x.width,4);Z.start<=lt+1&&st===at&&Ht(Z.start+Z.count-1,x.width,4)===st?j.count=Math.max(j.count,Z.start+Z.count-j.start):(++ht,rt[ht]=Z)}rt.length=ht+1;let J=e.getParameter(n.UNPACK_ROW_LENGTH),Q=e.getParameter(n.UNPACK_SKIP_PIXELS),ot=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let P=0,j=rt.length;P<j;P++){let Z=rt[P],lt=Math.floor(Z.start/4),st=Math.ceil(Z.count/4),at=lt%x.width,Tt=Math.floor(lt/x.width),Bt=st,it=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,at),e.pixelStorei(n.UNPACK_SKIP_ROWS,Tt),e.texSubImage2D(n.TEXTURE_2D,0,at,Tt,Bt,it,H,et,x.data)}w.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,J),e.pixelStorei(n.UNPACK_SKIP_PIXELS,Q),e.pixelStorei(n.UNPACK_SKIP_ROWS,ot)}}function me(w,x,H){let et=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(et=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(et=n.TEXTURE_3D);let tt=ee(w,x),rt=x.source;e.bindTexture(et,w.__webglTexture,n.TEXTURE0+H);let ht=i.get(rt);if(rt.version!==ht.__version||tt===!0){if(e.activeTexture(n.TEXTURE0+H),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let it=Xt.getPrimaries(Xt.workingColorSpace),wt=x.colorSpace===Vi?null:Xt.getPrimaries(x.colorSpace),Ft=x.colorSpace===Vi||it===wt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft)}e.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment);let Q=v(x.image,!1,s.maxTextureSize);Q=Rt(x,Q);let ot=r.convert(x.format,x.colorSpace),P=r.convert(x.type),j=T(x.internalFormat,ot,P,x.normalized,x.colorSpace,x.isVideoTexture);jt(et,x);let Z,lt=x.mipmaps,st=x.isVideoTexture!==!0,at=ht.__version===void 0||tt===!0,Tt=rt.dataReady,Bt=b(x,Q);if(x.isDepthTexture)j=_(x.format===Hi,x.type),at&&(st?e.texStorage2D(n.TEXTURE_2D,1,j,Q.width,Q.height):e.texImage2D(n.TEXTURE_2D,0,j,Q.width,Q.height,0,ot,P,null));else if(x.isDataTexture)if(lt.length>0){st&&at&&e.texStorage2D(n.TEXTURE_2D,Bt,j,lt[0].width,lt[0].height);for(let it=0,wt=lt.length;it<wt;it++)Z=lt[it],st?Tt&&e.texSubImage2D(n.TEXTURE_2D,it,0,0,Z.width,Z.height,ot,P,Z.data):e.texImage2D(n.TEXTURE_2D,it,j,Z.width,Z.height,0,ot,P,Z.data);x.generateMipmaps=!1}else st?(at&&e.texStorage2D(n.TEXTURE_2D,Bt,j,Q.width,Q.height),Tt&&Te(x,Q,ot,P)):e.texImage2D(n.TEXTURE_2D,0,j,Q.width,Q.height,0,ot,P,Q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){st&&at&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Bt,j,lt[0].width,lt[0].height,Q.depth);for(let it=0,wt=lt.length;it<wt;it++)if(Z=lt[it],x.format!==pi)if(ot!==null)if(st){if(Tt)if(x.layerUpdates.size>0){let Ft=Yl(Z.width,Z.height,x.format,x.type);for(let pt of x.layerUpdates){let te=Z.data.subarray(pt*Ft/Z.data.BYTES_PER_ELEMENT,(pt+1)*Ft/Z.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,it,0,0,pt,Z.width,Z.height,1,ot,te)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,it,0,0,0,Z.width,Z.height,Q.depth,ot,Z.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,it,j,Z.width,Z.height,Q.depth,0,Z.data,0,0);else Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?Tt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,it,0,0,0,Z.width,Z.height,Q.depth,ot,P,Z.data):e.texImage3D(n.TEXTURE_2D_ARRAY,it,j,Z.width,Z.height,Q.depth,0,ot,P,Z.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{st&&at&&e.texStorage2D(n.TEXTURE_2D,Bt,j,lt[0].width,lt[0].height);for(let it=0,wt=lt.length;it<wt;it++)Z=lt[it],x.format!==pi?ot!==null?st?Tt&&e.compressedTexSubImage2D(n.TEXTURE_2D,it,0,0,Z.width,Z.height,ot,Z.data):e.compressedTexImage2D(n.TEXTURE_2D,it,j,Z.width,Z.height,0,Z.data):Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?Tt&&e.texSubImage2D(n.TEXTURE_2D,it,0,0,Z.width,Z.height,ot,P,Z.data):e.texImage2D(n.TEXTURE_2D,it,j,Z.width,Z.height,0,ot,P,Z.data)}else if(x.isDataArrayTexture)if(st){if(at&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Bt,j,Q.width,Q.height,Q.depth),Tt)if(x.layerUpdates.size>0){let it=Yl(Q.width,Q.height,x.format,x.type);for(let wt of x.layerUpdates){let Ft=Q.data.subarray(wt*it/Q.data.BYTES_PER_ELEMENT,(wt+1)*it/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,wt,Q.width,Q.height,1,ot,P,Ft)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ot,P,Q.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,j,Q.width,Q.height,Q.depth,0,ot,P,Q.data);else if(x.isData3DTexture)st?(at&&e.texStorage3D(n.TEXTURE_3D,Bt,j,Q.width,Q.height,Q.depth),Tt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ot,P,Q.data)):e.texImage3D(n.TEXTURE_3D,0,j,Q.width,Q.height,Q.depth,0,ot,P,Q.data);else if(x.isFramebufferTexture){if(at)if(st)e.texStorage2D(n.TEXTURE_2D,Bt,j,Q.width,Q.height);else{let it=Q.width,wt=Q.height;for(let Ft=0;Ft<Bt;Ft++)e.texImage2D(n.TEXTURE_2D,Ft,j,it,wt,0,ot,P,null),it>>=1,wt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in n){let it=n.canvas;if(it.hasAttribute("layoutsubtree")||it.setAttribute("layoutsubtree","true"),Q.parentNode!==it){it.appendChild(Q),d.add(x),it.onpaint=wt=>{let Ft=wt.changedElements;for(let pt of d)Ft.includes(pt.image)&&(pt.needsUpdate=!0)},it.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Q);else{let Ft=n.RGBA,pt=n.RGBA,te=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ft,pt,te,Q)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(lt.length>0){if(st&&at){let it=Dt(lt[0]);e.texStorage2D(n.TEXTURE_2D,Bt,j,it.width,it.height)}for(let it=0,wt=lt.length;it<wt;it++)Z=lt[it],st?Tt&&e.texSubImage2D(n.TEXTURE_2D,it,0,0,ot,P,Z):e.texImage2D(n.TEXTURE_2D,it,j,ot,P,Z);x.generateMipmaps=!1}else if(st){if(at){let it=Dt(Q);e.texStorage2D(n.TEXTURE_2D,Bt,j,it.width,it.height)}Tt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ot,P,Q)}else e.texImage2D(n.TEXTURE_2D,0,j,ot,P,Q);E(x)&&x.mipmapsAutoUpdate===!0&&S(et),ht.__version=rt.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function He(w,x,H){if(x.image.length!==6)return;let et=ee(w,x),tt=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+H);let rt=i.get(tt);if(tt.version!==rt.__version||et===!0){e.activeTexture(n.TEXTURE0+H);let ht=Xt.getPrimaries(Xt.workingColorSpace),J=x.colorSpace===Vi?null:Xt.getPrimaries(x.colorSpace),Q=x.colorSpace===Vi||ht===J?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let ot=x.isCompressedTexture||x.image[0].isCompressedTexture,P=x.image[0]&&x.image[0].isDataTexture,j=[];for(let pt=0;pt<6;pt++)!ot&&!P?j[pt]=v(x.image[pt],!0,s.maxCubemapSize):j[pt]=P?x.image[pt].image:x.image[pt],j[pt]=Rt(x,j[pt]);let Z=j[0],lt=r.convert(x.format,x.colorSpace),st=r.convert(x.type),at=T(x.internalFormat,lt,st,x.normalized,x.colorSpace),Tt=x.isVideoTexture!==!0,Bt=rt.__version===void 0||et===!0,it=tt.dataReady,wt=b(x,Z);jt(n.TEXTURE_CUBE_MAP,x);let Ft;if(x.isDepthTexture){if(at=_(x.format===Hi,x.type),Bt)if(Tt)e.texStorage2D(n.TEXTURE_CUBE_MAP,1,at,Z.width,Z.height);else for(let pt=0;pt<6;pt++)e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,at,Z.width,Z.height,0,lt,st,null)}else if(ot){Tt&&Bt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,wt,at,Z.width,Z.height);for(let pt=0;pt<6;pt++){Ft=j[pt].mipmaps;for(let te=0;te<Ft.length;te++){let Me=Ft[te];x.format!==pi?lt!==null?Tt?it&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,te,0,0,Me.width,Me.height,lt,Me.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,te,at,Me.width,Me.height,0,Me.data):Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Tt?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,te,0,0,Me.width,Me.height,lt,st,Me.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,te,at,Me.width,Me.height,0,lt,st,Me.data)}}}else{if(Ft=x.mipmaps,Tt&&Bt){Ft.length>0&&wt++;let pt=Dt(j[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,wt,at,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(P){Tt?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,j[pt].width,j[pt].height,lt,st,j[pt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,at,j[pt].width,j[pt].height,0,lt,st,j[pt].data);for(let te=0;te<Ft.length;te++){let Wi=Ft[te].image[pt].image;Tt?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,te+1,0,0,Wi.width,Wi.height,lt,st,Wi.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,te+1,at,Wi.width,Wi.height,0,lt,st,Wi.data)}}else{Tt?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,lt,st,j[pt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,at,lt,st,j[pt]);for(let te=0;te<Ft.length;te++){let Me=Ft[te];Tt?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,te+1,0,0,lt,st,Me.image[pt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,te+1,at,lt,st,Me.image[pt])}}}E(x)&&x.mipmapsAutoUpdate===!0&&S(n.TEXTURE_CUBE_MAP),rt.__version=tt.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function le(w,x,H,et,tt,rt){let ht=r.convert(H.format,H.colorSpace),J=r.convert(H.type),Q=T(H.internalFormat,ht,J,H.normalized,H.colorSpace),ot=i.get(x),P=i.get(H);if(P.__renderTarget=x,!ot.__hasExternalTextures){let j=Math.max(1,x.width>>rt),Z=Math.max(1,x.height>>rt);tt===n.TEXTURE_3D||tt===n.TEXTURE_2D_ARRAY?e.texImage3D(tt,rt,Q,j,Z,x.depth,0,ht,J,null):e.texImage2D(tt,rt,Q,j,Z,0,ht,J,null)}e.bindFramebuffer(n.FRAMEBUFFER,w),dt(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,et,tt,P.__webglTexture,0,ae(x)):(tt===n.TEXTURE_2D||tt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,et,tt,P.__webglTexture,rt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function _i(w,x,H){if(n.bindRenderbuffer(n.RENDERBUFFER,w),x.depthBuffer){let et=x.depthTexture,tt=et&&et.isDepthTexture?et.type:null,rt=_(x.stencilBuffer,tt),ht=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;dt(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae(x),rt,x.width,x.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae(x),rt,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,rt,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ht,n.RENDERBUFFER,w)}else{let et=x.textures;for(let tt=0;tt<et.length;tt++){let rt=et[tt],ht=r.convert(rt.format,rt.colorSpace),J=r.convert(rt.type),Q=T(rt.internalFormat,ht,J,rt.normalized,rt.colorSpace);dt(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae(x),Q,x.width,x.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae(x),Q,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Q,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ye(w,x,H){let et=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let tt=i.get(x.depthTexture);tt.__renderTarget=x;let rt=et?x.depthTexture.image[0]:x.depthTexture.image;(!tt.__webglTexture||rt.width!==x.width||rt.height!==x.height)&&(rt.width=x.width,rt.height=x.height,x.depthTexture.needsUpdate=!0),et?gt(x.depthTexture,0):ft(x.depthTexture,0);let ht=tt.__webglTexture,J=ae(x),Q=et?n.TEXTURE_CUBE_MAP_POSITIVE_X+H:n.TEXTURE_2D,ot=x.depthTexture.format===Hi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===Fi)dt(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ot,Q,ht,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,ot,Q,ht,0);else if(x.depthTexture.format===Hi)dt(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ot,Q,ht,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,ot,Q,ht,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function je(w){let x=i.get(w),H=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){let et=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),et){let tt=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,et.removeEventListener("dispose",tt)};et.addEventListener("dispose",tt),x.__depthDisposeCallback=tt}x.__boundDepthTexture=et}if(w.depthTexture&&!x.__autoAllocateDepthBuffer)if(H)for(let et=0;et<6;et++)ye(x.__webglFramebuffer[et],w,et);else w.texture.mipmaps.length>0?ye(x.__webglFramebuffer[0],w,0):ye(x.__webglFramebuffer,w,0);else if(H){x.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[et]),x.__webglDepthbuffer[et]===void 0)x.__webglDepthbuffer[et]=n.createRenderbuffer(),_i(x.__webglDepthbuffer[et],w,!1);else{let tt=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=x.__webglDepthbuffer[et];n.bindRenderbuffer(n.RENDERBUFFER,rt),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,rt)}}else if(w.texture.mipmaps.length>0?e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),_i(x.__webglDepthbuffer,w,!1);else{let tt=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,rt),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,rt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ti(w,x,H){let et=i.get(w);x!==void 0&&le(et.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&je(w)}function ei(w){let x=w.texture,H=i.get(w),et=i.get(x);w.addEventListener("dispose",z),L(w);let tt=w.textures,rt=w.isWebGLCubeRenderTarget===!0,ht=tt.length>1;if(ht||(et.__webglTexture===void 0&&(et.__webglTexture=n.createTexture()),et.__version=x.version,a.memory.textures++),rt){H.__webglFramebuffer=[];for(let J=0;J<6;J++)if(x.mipmaps.length>0){H.__webglFramebuffer[J]=[];for(let Q=0;Q<x.mipmaps.length;Q++)H.__webglFramebuffer[J][Q]=n.createFramebuffer()}else H.__webglFramebuffer[J]=n.createFramebuffer()}else{if(x.mipmaps.length>0){H.__webglFramebuffer=[];for(let J=0;J<x.mipmaps.length;J++)H.__webglFramebuffer[J]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(ht)for(let J=0,Q=tt.length;J<Q;J++){let ot=i.get(tt[J]);ot.__webglTexture===void 0&&(ot.__webglTexture=n.createTexture(),a.memory.textures++)}if(w.samples>0&&dt(w)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let J=0;J<tt.length;J++){let Q=tt[J];H.__webglColorRenderbuffer[J]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[J]);let ot=r.convert(Q.format,Q.colorSpace),P=r.convert(Q.type),j=T(Q.internalFormat,ot,P,Q.normalized,Q.colorSpace,w.isXRRenderTarget===!0),Z=ae(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Z,j,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+J,n.RENDERBUFFER,H.__webglColorRenderbuffer[J])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),_i(H.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(rt){e.bindTexture(n.TEXTURE_CUBE_MAP,et.__webglTexture),jt(n.TEXTURE_CUBE_MAP,x);for(let J=0;J<6;J++)if(x.mipmaps.length>0)for(let Q=0;Q<x.mipmaps.length;Q++)le(H.__webglFramebuffer[J][Q],w,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Q);else le(H.__webglFramebuffer[J],w,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);E(x)?S(n.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}else if(ht){for(let J=0,Q=tt.length;J<Q;J++){let ot=tt[J],P=i.get(ot),j=n.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(j=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(j,P.__webglTexture),jt(j,ot),le(H.__webglFramebuffer,w,ot,n.COLOR_ATTACHMENT0+J,j,0),E(ot)&&S(j)}e.unbindTexture()}else{let J=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(J=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(J,et.__webglTexture),jt(J,x),x.mipmaps.length>0)for(let Q=0;Q<x.mipmaps.length;Q++)le(H.__webglFramebuffer[Q],w,x,n.COLOR_ATTACHMENT0,J,Q);else le(H.__webglFramebuffer,w,x,n.COLOR_ATTACHMENT0,J,0);E(x)?S(J):x.mipmaps.length>0&&n.texParameteri(J,n.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}w.depthBuffer&&je(w)}function B(w){let x=w.textures;for(let H=0,et=x.length;H<et;H++){let tt=x[H];if(E(tt)&&tt.mipmapsAutoUpdate===!0){let rt=A(w),ht=i.get(tt).__webglTexture;e.bindTexture(rt,ht),S(rt),e.unbindTexture()}}}let ii=[];function re(w){if(w.samples>0){if(dt(w)===!1){let x=w.textures,H=w.width,et=w.height,tt=n.COLOR_BUFFER_BIT,rt=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ht=i.get(w),J=x.length>1;if(J)for(let ot=0;ot<x.length;ot++)e.bindFramebuffer(n.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ht.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer),w.texture.mipmaps.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ht.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let ot=0;ot<x.length;ot++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(tt|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(tt|=n.STENCIL_BUFFER_BIT)),J){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ht.__webglColorRenderbuffer[ot]);let P=i.get(x[ot]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,P,0)}n.blitFramebuffer(0,0,H,et,0,0,H,et,tt,n.NEAREST),l===!0&&(ii.length=0,ii.push(n.COLOR_ATTACHMENT0+ot),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&ii.push(rt),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ii))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),J)for(let ot=0;ot<x.length;ot++){e.bindFramebuffer(n.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,ht.__webglColorRenderbuffer[ot]);let P=i.get(x[ot]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ht.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.TEXTURE_2D,P,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){let x=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function ae(w){return Math.min(s.maxSamples,w.samples)}function dt(w){let x=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ge(w){let x=a.render.frame;h.get(w)!==x&&(h.set(w,x),w.update())}function Rt(w,x){let H=w.colorSpace,et=w.format,tt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||H!==Ms&&H!==Vi&&(Xt.getTransfer(H)===Jt?(et!==pi||tt!==Ve)&&Ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pt("WebGLTextures: Unsupported texture color space:",H)),x}function Dt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=vt,this.resetTextureUnits=F,this.getTextureUnits=X,this.setTextureUnits=nt,this.setTexture2D=ft,this.setTexture2DArray=yt,this.setTexture3D=At,this.setTextureCube=gt,this.rebindTextures=ti,this.setupRenderTarget=ei,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=le,this.useMultisampledRTT=dt,this.dispose=k}function k0(n,t){function e(i,s=Vi){let r,a=Xt.getTransfer(s);if(i===Ve)return n.UNSIGNED_BYTE;if(i===Ia)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Pa)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Dl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Nl)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Pl)return n.BYTE;if(i===Ll)return n.SHORT;if(i===ns)return n.UNSIGNED_SHORT;if(i===Ca)return n.INT;if(i===di)return n.UNSIGNED_INT;if(i===ri)return n.FLOAT;if(i===fi)return n.HALF_FLOAT;if(i===Ul)return n.ALPHA;if(i===Fl)return n.RGB;if(i===pi)return n.RGBA;if(i===Fi)return n.DEPTH_COMPONENT;if(i===Hi)return n.DEPTH_STENCIL;if(i===La)return n.RED;if(i===Da)return n.RED_INTEGER;if(i===sn)return n.RG;if(i===Na)return n.RG_INTEGER;if(i===Ua)return n.RGBA_INTEGER;if(i===sr||i===rr||i===ar||i===or)if(a===Jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===sr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===sr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===rr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ar)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===or)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Fa||i===Oa||i===Ba||i===za)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Fa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Oa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ba)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===za)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ka||i===Ga||i===Ha||i===Va||i===Wa||i===lr||i===Xa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ka||i===Ga)return a===Jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ha)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Va)return r.COMPRESSED_R11_EAC;if(i===Wa)return r.COMPRESSED_SIGNED_R11_EAC;if(i===lr)return r.COMPRESSED_RG11_EAC;if(i===Xa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===qa||i===Ya||i===$a||i===Za||i===Ja||i===Ka||i===Qa||i===ja||i===to||i===eo||i===io||i===no||i===so||i===ro)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===qa)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ya)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===$a)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Za)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ja)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ka)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Qa)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ja)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===to)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===eo)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===io)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===no)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===so)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ro)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ao||i===oo||i===lo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===ao)return a===Jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===oo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===lo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===co||i===ho||i===cr||i===uo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===co)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ho)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===cr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===uo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===vn?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var G0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,H0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,oc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Os(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Ti({vertexShader:G0,fragmentShader:H0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new qt(new pn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},lc=class extends Mi{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,y=typeof XRWebGLBinding<"u",p=new oc,m={},v=e.getContextAttributes(),E=null,S=null,A=[],T=[],_=new xt,b=null,L=null,I=new Fe;I.viewport=new oe;let N=new Fe;N.viewport=new oe;let z=[I,N],$=new Ea,R=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ft=A[K];return ft===void 0&&(ft=new Hn,A[K]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(K){let ft=A[K];return ft===void 0&&(ft=new Hn,A[K]=ft),ft.getGripSpace()},this.getHand=function(K){let ft=A[K];return ft===void 0&&(ft=new Hn,A[K]=ft),ft.getHandSpace()};function W(K){let ft=T.indexOf(K.inputSource);if(ft===-1)return;let yt=A[ft];yt!==void 0&&(yt.update(K.inputSource,K.frame,c||a),yt.dispatchEvent({type:K.type,data:K.inputSource}))}function q(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",U);for(let K=0;K<A.length;K++){let ft=T[K];ft!==null&&(T[K]=null,A[K].disconnect(ft))}R=null,k=null,p.reset();for(let K in m)delete m[K];if(t.setRenderTarget(E),f=null,u=null,d=null,s=null,S=null,vt.stop(),i.isPresenting=!1,t.setPixelRatio(b),t.setSize(_.width,_.height,!1),L!==null){let K=L.camera;K.fov=L.fov,K.zoom=L.zoom,K.updateProjectionMatrix(),L=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&Ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&Ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",q),s.addEventListener("inputsourceschange",U),v.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(_),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,At=null,gt=null;v.depth&&(gt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=v.stencil?Hi:Fi,At=v.stencil?vn:di);let Ut={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Ut),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),S=new $e(u.textureWidth,u.textureHeight,{format:pi,type:Ve,depthTexture:new ki(u.textureWidth,u.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let yt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,yt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new $e(f.framebufferWidth,f.framebufferHeight,{format:pi,type:Ve,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),vt.setContext(s),vt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function U(K){for(let ft=0;ft<K.removed.length;ft++){let yt=K.removed[ft],At=T.indexOf(yt);At>=0&&(T[At]=null,A[At].disconnect(yt))}for(let ft=0;ft<K.added.length;ft++){let yt=K.added[ft],At=T.indexOf(yt);if(At===-1){for(let Ut=0;Ut<A.length;Ut++)if(Ut>=T.length){T.push(yt),At=Ut;break}else if(T[Ut]===null){T[Ut]=yt,At=Ut;break}if(At===-1)break}let gt=A[At];gt&&gt.connect(yt)}}function C(K,ft){ft===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ft.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ft=K.near,yt=K.far;p.texture!==null&&(p.depthNear>0&&(ft=p.depthNear),p.depthFar>0&&(yt=p.depthFar)),$.near=N.near=I.near=ft,$.far=N.far=I.far=yt,(R!==$.near||k!==$.far)&&(s.updateRenderState({depthNear:$.near,depthFar:$.far}),R=$.near,k=$.far),$.layers.mask=K.layers.mask|6,I.layers.mask=$.layers.mask&-5,N.layers.mask=$.layers.mask&-3;let At=K.parent,gt=$.cameras;C($,At);for(let Ut=0;Ut<gt.length;Ut++)C(gt[Ut],At);$.projectionMatrix.copy(I.projectionMatrix),$.projectionMatrixInverse.copy(I.projectionMatrixInverse),L===null&&K.isPerspectiveCamera&&(L={camera:K,fov:K.fov,zoom:K.zoom}),F(K,$,At)};function F(K,ft,yt){yt===null?K.matrix.copy(ft.matrixWorld):(K.matrix.copy(yt.matrixWorld),K.matrix.invert(),K.matrix.multiply(ft.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ft.projectionMatrix),K.projectionMatrixInverse.copy(ft.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=jr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh($)},this.getCameraTexture=function(K){return m[K]};let X=null;function nt(K,ft){if(h=ft.getViewerPose(c||a),g=ft,h!==null){let yt=h.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let At=!1;yt.length!==$.cameras.length&&($.cameras.length=0,At=!0);for(let It=0;It<yt.length;It++){let jt=yt[It],ee=null;if(f!==null)ee=f.getViewport(jt);else{let Te=d.getViewSubImage(u,jt);ee=Te.viewport,It===0&&(t.setRenderTargetTextures(S,Te.colorTexture,Te.depthStencilTexture),t.setRenderTarget(S))}let Ht=z[It];Ht===void 0&&(Ht=new Fe,Ht.layers.enable(It),Ht.viewport=new oe,z[It]=Ht),Ht.matrix.fromArray(jt.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(jt.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(ee.x,ee.y,ee.width,ee.height),It===0&&($.matrix.copy(Ht.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),At===!0&&$.cameras.push(Ht)}let gt=s.enabledFeatures;if(gt&&gt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=i.getBinding();let It=d.getDepthInformation(yt[0]);It&&It.isValid&&It.texture&&p.init(It,s.renderState)}if(gt&&gt.includes("camera-access")&&y){t.state.unbindTexture(),d=i.getBinding();for(let It=0;It<yt.length;It++){let jt=yt[It].camera;if(jt){let ee=m[jt];ee||(ee=new Os,m[jt]=ee);let Ht=d.getCameraImage(jt);ee.sourceTexture=Ht}}}}for(let yt=0;yt<A.length;yt++){let At=T[yt],gt=A[yt];At!==null&&gt!==void 0&&gt.update(At,ft,c||a)}X&&X(K,ft),ft.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ft}),g=null}let vt=new vu;vt.setAnimationLoop(nt),this.setAnimationLoop=function(K){X=K},this.dispose=function(){}}},V0=new Zt,Cu=new Lt;Cu.set(-1,0,0,0,1,0,0,0,1);function W0(n,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Wl(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,v,E,S){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,S)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),y(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,v,E):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Ce&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Ce&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let v=t.get(m),E=v.envMap,S=v.envMapRotation;E&&(p.envMap.value=E,p.envMapRotation.value.setFromMatrix4(V0.makeRotationFromEuler(S)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Cu),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,v,E){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=E*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,v){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ce&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function y(p,m){let v=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function X0(n,t,e,i){let s={},r={};function a(v,E){let S=E.program;i.uniformBlockBinding(v,S,s[v.id])}function o(v,E){let S=s[v.id];S===void 0&&(g(v),S=l(v),s[v.id]=S,v.addEventListener("dispose",p));let A=E.program;i.updateUBOMapping(v,A);let T=t.render.frame;r[v.id]!==T&&(c(v),r[v.id]=T)}function l(v){let E=n.createBuffer(),S=v.__size,A=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,S,A),n.bindBuffer(n.UNIFORM_BUFFER,null),E}function c(v){let E=s[v.id],S=v.uniforms,A=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let T=0,_=S.length;T<_;T++){let b=S[T];if(Array.isArray(b))for(let L=0,I=b.length;L<I;L++)h(b[L],T,L,A);else h(b,T,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(v,E,S,A){if(u(v,E,S,A)===!0){let T=v.__offset,_=v.value;if(Array.isArray(_)){let b=0;for(let L=0;L<_.length;L++){let I=_[L],N=y(I,!0);d(I,v.__data,b),b+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,T,v.__data)}}function d(v,E,S){typeof v=="number"||typeof v=="boolean"?E[S]=v:v.isMatrix3?(E[S]=v.elements[0],E[S+1]=v.elements[1],E[S+2]=v.elements[2],E[S+3]=0,E[S+4]=v.elements[3],E[S+5]=v.elements[4],E[S+6]=v.elements[5],E[S+7]=0,E[S+8]=v.elements[6],E[S+9]=v.elements[7],E[S+10]=v.elements[8],E[S+11]=0):ArrayBuffer.isView(v)?E.set(v.subarray(0,E.length-S),S):v.toArray(E,S)}function u(v,E,S,A){let T=v.value,_=E+"_"+S;if(Array.isArray(T)){A[_]===void 0&&(A[_]=[]);let b=A[_],L=!1;for(let I=0;I<T.length;I++)f(T[I],b,I)===!0&&(L=!0);return L}return f(T,A,_)}function f(v,E,S){if(E[S]===void 0)return typeof v=="number"||typeof v=="boolean"?E[S]=v:ArrayBuffer.isView(v)?E[S]=v.slice():E[S]=v.clone(),!0;{let A=E[S];if(typeof v=="number"||typeof v=="boolean"){if(A!==v)return E[S]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(A.equals(v)===!1)return A.copy(v),!0}}return!1}function g(v){let E=v.uniforms,S=0,A=16;for(let _=0,b=E.length;_<b;_++){let L=Array.isArray(E[_])?E[_]:[E[_]];for(let I=0,N=L.length;I<N;I++){let z=L[I],$=Array.isArray(z.value)?z.value:[z.value],R=Array.isArray(E[_])||Array.isArray(z.value),k=S;for(let q=0,U=$.length;q<U;q++){let C=$[q],F=y(C,R),X=S%A,nt=X%F.boundary,vt=X+nt;S+=nt,vt!==0&&A-vt<F.storage&&(S+=A-vt),q===0&&(k=S),S+=F.storage}let W=z.type==="int"?Int32Array:z.type==="uint"?Uint32Array:Float32Array;z.__data=new W((S-k)/Float32Array.BYTES_PER_ELEMENT),z.__offset=k}}let T=S%A;return T>0&&(S+=A-T),v.__size=S,v.__cache={},this}function y(v,E){let S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=16,S.storage=48):v.isMatrix4?(S.boundary=16,S.storage=64):v.isTexture?Ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):Ct("WebGLRenderer: Unsupported uniform value type.",v),E===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function p(v){let E=v.target;E.removeEventListener("dispose",p),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function m(){for(let v in s)n.deleteBuffer(s[v]);s={},r={}}return{bind:a,update:o,dispose:m}}var q0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ai=null;function Y0(){return Ai===null&&(Ai=new Ps(q0,16,16,sn,fi),Ai.name="DFG_LUT",Ai.minFilter=ze,Ai.magFilter=ze,Ai.wrapS=vi,Ai.wrapT=vi,Ai.generateMipmaps=!1,Ai.needsUpdate=!0),Ai}var go=class{constructor(t={}){let{canvas:e=zh(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Ve}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let y=f,p=new Set([Ua,Na,Da]),m=new Set([Ve,di,ns,vn,Ia,Pa]),v=new Uint32Array(4),E=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]},A=null,T=null,_=[],b=[],L=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,N=!1,z=null,$=null,R=null,k=null;this._outputColorSpace=Ue;let W=0,q=0,U=null,C=-1,F=null,X=new oe,nt=new oe,vt=null,K=new Ot(0),ft=0,yt=e.width,At=e.height,gt=1,Ut=null,ue=null,It=new oe(0,0,yt,At),jt=new oe(0,0,yt,At),ee=!1,Ht=new Qi,Te=new na,me=!1,He=!1,le=new Zt,_i=new O,ye=new oe,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ti=!1;function ei(){return U===null?gt:1}let B=i;function ii(M,D){return e.getContext(M,D)}let re,ae,dt,ge,Rt,Dt,w,x,H,et,tt,rt,ht,J,Q,ot,P,j,Z,lt,st,at,Tt;try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",wt,!1),e.addEventListener("webglcontextrestored",Ft,!1),e.addEventListener("webglcontextcreationerror",pt,!1),B===null){let D="webgl2";if(B=ii(D,M),B===null)throw ii(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Bt()}catch(M){throw e.removeEventListener("webglcontextlost",wt,!1),e.removeEventListener("webglcontextrestored",Ft,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),Pt("WebGLRenderer: "+M.message),M}function Bt(){re=new sg(B),re.init(),st=new k0(B,re),ae=new Ym(B,re,t,st),dt=new B0(B,re),ae.reversedDepthBuffer&&u&&dt.buffers.depth.setReversed(!0),$=B.createFramebuffer(),R=B.createFramebuffer(),k=B.createFramebuffer(),ge=new og(B),Rt=new E0,Dt=new z0(B,re,dt,Rt,ae,st,ge),w=new ng(I),x=new cf(B),at=new Xm(B,x),H=new rg(B,x,ge,at),et=new cg(B,H,x,at,ge),j=new lg(B,ae,Dt),Q=new $m(Rt),tt=new b0(I,w,re,ae,at,Q),rt=new W0(I,Rt),ht=new w0,J=new L0(re),P=new Wm(I,w,dt,et,g,l),ot=new O0(I,et,ae),Tt=new X0(B,ge,ae,dt),Z=new qm(B,re,ge),lt=new ag(B,re,ge),ge.programs=tt.programs,I.capabilities=ae,I.extensions=re,I.properties=Rt,I.renderLists=ht,I.shadowMap=ot,I.state=dt,I.info=ge}y!==Ve&&(L=new ug(y,e.width,e.height,o,s,r));let it=new lc(I,B);this.xr=it,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let M=re.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=re.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(M){M!==void 0&&(gt=M,this.setSize(yt,At,!1))},this.getSize=function(M){return M.set(yt,At)},this.setSize=function(M,D,Y=!0){if(it.isPresenting){Ct("WebGLRenderer: Can't change size while VR device is presenting.");return}yt=M,At=D,e.width=Math.floor(M*gt),e.height=Math.floor(D*gt),Y===!0&&(e.style.width=M+"px",e.style.height=D+"px"),L!==null&&L.setSize(e.width,e.height),this.setViewport(0,0,M,D)},this.getDrawingBufferSize=function(M){return M.set(yt*gt,At*gt).floor()},this.setDrawingBufferSize=function(M,D,Y){yt=M,At=D,gt=Y,e.width=Math.floor(M*Y),e.height=Math.floor(D*Y),this.setViewport(0,0,M,D)},this.setEffects=function(M){if(y===Ve){Pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let D=0;D<M.length;D++)if(M[D].isOutputPass===!0){Ct("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(X)},this.getViewport=function(M){return M.copy(It)},this.setViewport=function(M,D,Y,G){M.isVector4?It.set(M.x,M.y,M.z,M.w):It.set(M,D,Y,G),dt.viewport(X.copy(It).multiplyScalar(ei()).round())},this.getScissor=function(M){return M.copy(jt)},this.setScissor=function(M,D,Y,G){M.isVector4?jt.set(M.x,M.y,M.z,M.w):jt.set(M,D,Y,G),dt.scissor(nt.copy(jt).multiplyScalar(ei()).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(M){dt.setScissorTest(ee=M)},this.setOpaqueSort=function(M){Ut=M},this.setTransparentSort=function(M){ue=M},this.getClearColor=function(M){return M.copy(P.getClearColor())},this.setClearColor=function(){P.setClearColor(...arguments)},this.getClearAlpha=function(){return P.getClearAlpha()},this.setClearAlpha=function(){P.setClearAlpha(...arguments)},this.clear=function(M=!0,D=!0,Y=!0){let G=0;if(M){let V=!1;if(U!==null){let ut=U.texture.format;V=p.has(ut)}if(V){let ut=U.texture.type,Mt=m.has(ut),ct=P.getClearColor(),_t=P.getClearAlpha(),Et=ct.r,Nt=ct.g,Vt=ct.b;Mt?(v[0]=Et,v[1]=Nt,v[2]=Vt,v[3]=_t,B.clearBufferuiv(B.COLOR,0,v)):(E[0]=Et,E[1]=Nt,E[2]=Vt,E[3]=_t,B.clearBufferiv(B.COLOR,0,E))}else G|=B.COLOR_BUFFER_BIT}D&&(G|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(G|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&B.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),z=M},this.dispose=function(){e.removeEventListener("webglcontextlost",wt,!1),e.removeEventListener("webglcontextrestored",Ft,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),P.dispose(),ht.dispose(),J.dispose(),Dt.dispose(),Rt.dispose(),w.dispose(),et.dispose(),H.dispose(),at.dispose(),Tt.dispose(),tt.dispose(),it.dispose(),it.removeEventListener("sessionstart",_c),it.removeEventListener("sessionend",xc),rn.stop()};function wt(M){M.preventDefault(),Gl("WebGLRenderer: Context Lost."),N=!0}function Ft(){Gl("WebGLRenderer: Context Restored."),N=!1;let M=ge.autoReset,D=ot.enabled,Y=ot.autoUpdate,G=ot.needsUpdate,V=ot.type;Bt(),ge.autoReset=M,ot.enabled=D,ot.autoUpdate=Y,ot.needsUpdate=G,ot.type=V}function pt(M){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function te(M){let D=M.target;D.removeEventListener("dispose",te),Me(D)}function Me(M){Wi(M),Rt.remove(M)}function Wi(M){let D=Rt.get(M).programs;D!==void 0&&(D.forEach(function(Y){tt.releaseProgram(Y)}),M.isShaderMaterial&&tt.releaseShaderCache(M))}this.renderBufferDirect=function(M,D,Y,G,V,ut){D===null&&(D=je);let Mt=V.isMesh&&V.matrixWorld.determinantAffine()<0,ct=Zu(M,D,Y,G,V);dt.setMaterial(G,Mt);let _t=Y.index,Et=1;if(G.wireframe===!0){if(_t=H.getWireframeAttribute(Y),_t===void 0)return;Et=2}let Nt=Y.drawRange,Vt=Y.attributes.position,St=Nt.start*Et,Wt=(Nt.start+Nt.count)*Et;ut!==null&&(St=Math.max(St,ut.start*Et),Wt=Math.min(Wt,(ut.start+ut.count)*Et)),_t!==null?(St=Math.max(St,0),Wt=Math.min(Wt,_t.count)):Vt!=null&&(St=Math.max(St,0),Wt=Math.min(Wt,Vt.count));let de=Wt-St;if(de<0||de===1/0)return;at.setup(V,G,ct,Y,_t);let ne,ie=Z;if(_t!==null&&(ne=x.get(_t),ie=lt,ie.setIndex(ne)),V.isMesh)G.wireframe===!0?(dt.setLineWidth(G.wireframeLinewidth*ei()),ie.setMode(B.LINES)):ie.setMode(B.TRIANGLES);else if(V.isLine){let Pe=G.linewidth;Pe===void 0&&(Pe=1),dt.setLineWidth(Pe*ei()),V.isLineSegments?ie.setMode(B.LINES):V.isLineLoop?ie.setMode(B.LINE_LOOP):ie.setMode(B.LINE_STRIP)}else V.isPoints?ie.setMode(B.POINTS):V.isSprite&&ie.setMode(B.TRIANGLES);if(V.isBatchedMesh)if(re.get("WEBGL_multi_draw"))ie.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Pe=V._multiDrawStarts,bt=V._multiDrawCounts,Be=V._multiDrawCount,$t=_t?x.get(_t).bytesPerElement:1,an=Rt.get(G).currentProgram.getUniforms();for(let Le=0;Le<Be;Le++)an.setValue(B,"_gl_DrawID",Le),ie.render(Pe[Le]/$t,bt[Le])}else if(V.isInstancedMesh)ie.renderInstances(St,de,V.count);else if(Y.isInstancedBufferGeometry){let Pe=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,bt=Math.min(Y.instanceCount,Pe);ie.renderInstances(St,de,bt)}else ie.render(St,de)};function gc(M,D,Y,G){z!==null&&M.isNodeMaterial&&z.setObject(G,M),me===!0&&Q.setState(M,Y,!1),M.transparent===!0&&M.side===pe&&M.forceSinglePass===!1?(M.side=Ce,M.needsUpdate=!0,cs(M,D,G),M.side=nn,M.needsUpdate=!0,cs(M,D,G),M.side=pe):cs(M,D,G)}this.compile=function(M,D,Y=null){Y===null&&(Y=M),z!==null&&z.renderStart(M,D,Y),T=J.get(Y),T.init(D),b.push(T),Y.traverseVisible(function(V){V.isLight&&V.layers.test(D.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),M!==Y&&M.traverseVisible(function(V){V.isLight&&V.layers.test(D.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),T.setupLights(),z!==null&&z.updateLights(T.state.lightsArray),He=this.localClippingEnabled,me=Q.init(this.clippingPlanes,He),me===!0&&Q.setGlobalState(this.clippingPlanes,D),z!==null&&ot.render(T.state.shadowsArray,Y,D);let G=new Set;return M.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let ut=V.material;if(ut)if(Array.isArray(ut))for(let Mt=0;Mt<ut.length;Mt++){let ct=ut[Mt];gc(ct,Y,D,V),G.add(ct)}else gc(ut,Y,D,V),G.add(ut)}),T=b.pop(),z!==null&&z.renderEnd(),G},this.compileAsync=function(M,D,Y=null){let G=this.compile(M,D,Y);return new Promise(V=>{function ut(){if(G.forEach(function(Mt){let _t=Rt.get(Mt).currentProgram;(_t===void 0||_t.isReady())&&G.delete(Mt)}),G.size===0){V(M);return}setTimeout(ut,10)}re.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let Do=null;function Yu(M){Do&&Do(M)}function _c(){rn.stop()}function xc(){rn.start()}let rn=new vu;rn.setAnimationLoop(Yu),typeof self<"u"&&rn.setContext(self),this.setAnimationLoop=function(M){Do=M,it.setAnimationLoop(M),M===null?rn.stop():rn.start()},it.addEventListener("sessionstart",_c),it.addEventListener("sessionend",xc),this.render=function(M,D){if(D!==void 0&&D.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;z!==null&&z.renderStart(M,D);let Y=it.enabled===!0&&it.isPresenting===!0,G=L!==null&&(U===null||Y)&&L.begin(I,U);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(it.cameraAutoUpdate===!0&&it.updateCamera(D),D=it.getCamera()),M.isScene===!0&&M.onBeforeRender(I,M,D,U),T=J.get(M,b.length),T.init(D),T.state.textureUnits=Dt.getTextureUnits(),b.push(T),le.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),D.isArrayCamera?Te.setFromArrayCamera(D):Ht.setFromProjectionMatrix(le,si,D.reversedDepth),He=this.localClippingEnabled,me=Q.init(this.clippingPlanes,He),A=ht.get(M,_.length),A.init(),_.push(A),this.info.render.frame++,it.enabled===!0&&it.isPresenting===!0){let Mt=I.xr.getDepthSensingMesh();Mt!==null&&No(Mt,D,-1/0,I.sortObjects)}No(M,D,0,I.sortObjects),A.finish(),z!==null&&z.updateLights(T.state.lightsArray),I.sortObjects===!0&&A.sort(Ut,ue),ti=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,ti&&P.addToRenderList(A,M),this.info.autoReset===!0&&this.info.reset(),me===!0&&Q.beginShadows();let V=T.state.shadowsArray;if(ot.render(V,M,D),me===!0&&Q.endShadows(),(G&&L.hasRenderPass())===!1){let Mt=A.opaque,ct=A.transmissive;if(T.setupLights(),D.isArrayCamera){let _t=D.cameras;if(ct.length>0)for(let Et=0,Nt=_t.length;Et<Nt;Et++){let Vt=_t[Et];yc(Mt,ct,M,Vt)}ti&&P.render(M);for(let Et=0,Nt=_t.length;Et<Nt;Et++){let Vt=_t[Et];vc(A,M,Vt,Vt.viewport)}}else ct.length>0&&yc(Mt,ct,M,D),ti&&P.render(M),vc(A,M,D)}U!==null&&q===0&&(Dt.updateMultisampleRenderTarget(U),Dt.updateRenderTargetMipmap(U)),G&&L.end(I),M.isScene===!0&&M.onAfterRender(I,M,D),at.resetDefaultState(),C=-1,F=null,b.pop(),b.length>0?(T=b[b.length-1],Dt.setTextureUnits(T.state.textureUnits),me===!0&&Q.setGlobalState(I.clippingPlanes,T.state.camera)):T=null,_.pop(),_.length>0?A=_[_.length-1]:A=null,z!==null&&z.renderEnd()};function No(M,D,Y,G){if(M.visible===!1)return;if(M.layers.test(D.layers)){if(M.isGroup)Y=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(D);else if(M.isLight)T.pushLight(M),M.castShadow&&T.pushShadow(M);else if(M.isSprite){let Mt=D.isArrayCamera?Te:Ht;if(!M.frustumCulled||M.intersectsFrustum(Mt)){G&&ye.setFromMatrixPosition(M.matrixWorld).applyMatrix4(le);let ct=et.update(M),_t=M.material;_t.visible&&A.push(M,ct,_t,Y,ye.z,null,D)}}else if(M.isMesh||M.isLine||M.isPoints){let Mt=D.isArrayCamera?Te:Ht;if(!M.frustumCulled||M.intersectsFrustum(Mt)){let ct=et.update(M),_t=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ye.copy(M.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),ye.copy(ct.boundingSphere.center)),ye.applyMatrix4(M.matrixWorld).applyMatrix4(le)),Array.isArray(_t)){let Et=ct.groups;for(let Nt=0,Vt=Et.length;Nt<Vt;Nt++){let St=Et[Nt],Wt=_t[St.materialIndex];Wt&&Wt.visible&&A.push(M,ct,Wt,Y,ye.z,St,D)}}else _t.visible&&A.push(M,ct,_t,Y,ye.z,null,D)}}}let ut=M.children;for(let Mt=0,ct=ut.length;Mt<ct;Mt++)No(ut[Mt],D,Y,G)}function vc(M,D,Y,G){let{opaque:V,transmissive:ut,transparent:Mt}=M;T.setupLightsView(Y),me===!0&&Q.setGlobalState(I.clippingPlanes,Y),G&&dt.viewport(X.copy(G)),V.length>0&&mr(V,D,Y),ut.length>0&&mr(ut,D,Y),Mt.length>0&&mr(Mt,D,Y),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function yc(M,D,Y,G){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[G.id]===void 0){let St=re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[G.id]=new $e(1,1,{generateMipmaps:!0,type:St?fi:Ve,minFilter:Gi,samples:Math.max(4,ae.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Xt.workingColorSpace})}let ut=T.state.transmissionRenderTarget[G.id],Mt=G.viewport||X;ut.setSize(Mt.z*I.transmissionResolutionScale,Mt.w*I.transmissionResolutionScale);let ct=I.getRenderTarget(),_t=I.getActiveCubeFace(),Et=I.getActiveMipmapLevel();I.setRenderTarget(ut),I.getClearColor(K),ft=I.getClearAlpha(),ft<1&&I.setClearColor(16777215,.5),I.clear(),ti&&P.render(Y);let Nt=I.toneMapping;I.toneMapping=wi;let Vt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),T.setupLightsView(G),me===!0&&Q.setGlobalState(I.clippingPlanes,G),mr(M,Y,G),Dt.updateMultisampleRenderTarget(ut),Dt.updateRenderTargetMipmap(ut),re.has("WEBGL_multisampled_render_to_texture")===!1){let St=!1;for(let Wt=0,de=D.length;Wt<de;Wt++){let ne=D[Wt],{object:ie,geometry:Pe,material:bt,group:Be}=ne;if(bt.side===pe&&ie.layers.test(G.layers)){let $t=bt.side;bt.side=Ce,bt.needsUpdate=!0,Mc(ie,Y,G,Pe,bt,Be),bt.side=$t,bt.needsUpdate=!0,St=!0}}St===!0&&(Dt.updateMultisampleRenderTarget(ut),Dt.updateRenderTargetMipmap(ut))}I.setRenderTarget(ct,_t,Et),I.setClearColor(K,ft),Vt!==void 0&&(G.viewport=Vt),I.toneMapping=Nt}function mr(M,D,Y){let G=D.isScene===!0?D.overrideMaterial:null;for(let V=0,ut=M.length;V<ut;V++){let Mt=M[V],{object:ct,geometry:_t,group:Et}=Mt,Nt=Mt.material;Nt.allowOverride===!0&&G!==null&&(Nt=G),ct.layers.test(Y.layers)&&Mc(ct,D,Y,_t,Nt,Et)}}function Mc(M,D,Y,G,V,ut){z!==null&&V.isNodeMaterial&&z.setObject(M,V),M.onBeforeRender(I,D,Y,G,V,ut),M.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),V.onBeforeRender(I,D,Y,G,M,ut),V.transparent===!0&&V.side===pe&&V.forceSinglePass===!1?(V.side=Ce,V.needsUpdate=!0,I.renderBufferDirect(Y,D,G,V,M,ut),V.side=nn,V.needsUpdate=!0,I.renderBufferDirect(Y,D,G,V,M,ut),V.side=pe):I.renderBufferDirect(Y,D,G,V,M,ut),M.onAfterRender(I,D,Y,G,V,ut)}function Sc(M){let D=0;for(let Y of M)Y.texture!==null&&D++;return D}function cs(M,D,Y){D.isScene!==!0&&(D=je);let G=Rt.get(M),V=T.state.lights,ut=T.state.shadowsArray,Mt=V.state.version,ct=tt.getParameters(M,V.state,ut,D,Y,T.state.lightProbeGridArray),_t=tt.getProgramCacheKey(ct),Et=G.programs;G.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?D.environment:null,G.fog=D.fog;let Nt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;G.envMap=w.get(M.envMap||G.environment,Nt),G.envMapRotation=G.environment!==null&&M.envMap===null?D.environmentRotation:M.envMapRotation,Et===void 0&&(M.addEventListener("dispose",te),Et=new Map,G.programs=Et,G.programVariants=new Map);let Vt=Et.get(_t);if(Vt!==void 0){if(G.currentProgram===Vt&&G.lightsStateVersion===Mt)return Ec(M,ct),Vt}else ct.uniforms=tt.getUniforms(M),z!==null&&M.isNodeMaterial&&z.build(M,Y,ct),M.onBeforeCompile(ct,I),Vt=tt.acquireProgram(ct,_t),Et.set(_t,Vt),G.uniforms=ct.uniforms;let St=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(St.clippingPlanes=Q.uniform),Ec(M,ct),G.needsLights=Ku(M),G.lightsStateVersion=Mt,G.needsLights&&(St.ambientLightColor.value=V.state.ambient,St.lightProbe.value=V.state.probe,St.sunLights.value=V.state.sun,St.sunLightShadows.value=V.state.sunShadow,St.directionalLights.value=V.state.directional,St.directionalLightShadows.value=V.state.directionalShadow,St.spotLights.value=V.state.spot,St.spotLightShadows.value=V.state.spotShadow,St.rectAreaLights.value=V.state.rectArea,St.ltc_1.value=V.state.rectAreaLTC1,St.ltc_2.value=V.state.rectAreaLTC2,St.pointLights.value=V.state.point,St.pointLightShadows.value=V.state.pointShadow,St.hemisphereLights.value=V.state.hemi,St.sunShadowMatrix.value=V.state.sunShadowMatrix,St.sunShadowCascade.value=V.state.sunShadowCascade,St.directionalShadowMatrix.value=V.state.directionalShadowMatrix,St.spotLightMatrix.value=V.state.spotLightMatrix,St.spotLightMap.value=V.state.spotLightMap,St.pointShadowMatrix.value=V.state.pointShadowMatrix),G.numLightProbeGrids=Sc(T.state.lightProbeGridArray),G.currentProgram=Vt,G.uniformsList=null,Vt}function $u(M,D,Y,G,V){let ut=Rt.get(M),Mt=ut.currentProgram.id+","+G+","+V,ct=ut.programVariants.get(Mt);return ct===void 0?(ct=cs(M,D,Y),ut.programVariants.set(Mt,ct)):(ut.currentProgram=ct,ut.uniformsList=null,ut.outputColorSpace=G,ut.toneMapping=V),ct}function bc(M){if(M.uniformsList===null){let D=M.currentProgram.getUniforms();M.uniformsList=rs.seqWithValue(D.seq,M.uniforms)}return M.uniformsList}function Ec(M,D){let Y=Rt.get(M);Y.outputColorSpace=D.outputColorSpace,Y.batching=D.batching,Y.batchingColor=D.batchingColor,Y.instancing=D.instancing,Y.instancingColor=D.instancingColor,Y.instancingMorph=D.instancingMorph,Y.skinning=D.skinning,Y.morphTargets=D.morphTargets,Y.morphNormals=D.morphNormals,Y.morphColors=D.morphColors,Y.morphTargetsCount=D.morphTargetsCount,Y.numClippingPlanes=D.numClippingPlanes,Y.numIntersection=D.numClipIntersection,Y.vertexAlphas=D.vertexAlphas,Y.vertexTangents=D.vertexTangents,Y.toneMapping=D.toneMapping}function Zu(M,D,Y,G,V){D.isScene!==!0&&(D=je),Dt.resetTextureUnits();let ut=D.fog,Mt=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?D.environment:null,ct=U===null?I.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Xt.workingColorSpace,_t=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Et=w.get(G.envMap||Mt,_t),Nt=G.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Vt=!!Y.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),St=!!Y.morphAttributes.position,Wt=!!Y.morphAttributes.normal,de=!!Y.morphAttributes.color,ne=wi;G.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(ne=I.toneMapping);let ie=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Pe=ie!==void 0?ie.length:0,bt=Rt.get(G),Be=T.state.lights;if(me===!0&&(He===!0||M!==F)){let ce=M===F&&G.id===C;Q.setState(G,M,ce)}let $t=!1,an=!1;G.version===bt.__version?bt.needsLights&&bt.lightsStateVersion!==Be.state.version||V.isBatchedMesh&&bt.batching===!1||!V.isBatchedMesh&&bt.batching===!0||V.isBatchedMesh&&bt.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&bt.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&bt.instancing===!1||!V.isInstancedMesh&&bt.instancing===!0||V.isSkinnedMesh&&bt.skinning===!1||!V.isSkinnedMesh&&bt.skinning===!0||V.isInstancedMesh&&bt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&bt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&bt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&bt.instancingMorph===!1&&V.morphTexture!==null||bt.envMap!==Et||G.fog===!0&&bt.fog!==ut||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==Q.numPlanes||bt.numIntersection!==Q.numIntersection)||bt.vertexAlphas!==Nt||bt.vertexTangents!==Vt||bt.morphTargets!==St||bt.morphNormals!==Wt||bt.morphColors!==de||bt.morphTargetsCount!==Pe||bt.numLightProbeGrids!==Sc(T.state.lightProbeGridArray)?$t=!0:(bt.outputColorSpace!==ct||bt.toneMapping!==ne)&&(an=!0):($t=!0,bt.__version=G.version);let Le=bt.currentProgram;($t===!0||an===!0)&&(Le=an===!0?$u(G,D,V,ct,ne):cs(G,D,V),z&&G.isNodeMaterial&&z.onUpdateProgram(G,Le,bt));let gr=!1,Xi=!1,on=!1,Yt=Le.getUniforms(),we=bt.uniforms;if(dt.useProgram(Le.program)&&(gr=!0,Xi=!0,on=!0),G.id!==C&&(C=G.id,Xi=!0),gr||F!==M){dt.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Yt.setValue(B,"projectionMatrix",M.projectionMatrix),Yt.setValue(B,"viewMatrix",M.matrixWorldInverse);let Se=Yt.map.cameraPosition;Se!==void 0&&Se.setValue(B,_i.setFromMatrixPosition(M.matrixWorld)),ae.logarithmicDepthBuffer&&Yt.setValue(B,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Yt.setValue(B,"isOrthographic",M.isOrthographicCamera===!0),F!==M&&(F=M,Xi=!0,on=!0)}if(bt.needsLights&&(Be.state.sunShadowMap.length>0&&Yt.setValue(B,"sunShadowMap",Be.state.sunShadowMap,Dt),Be.state.directionalShadowMap.length>0&&Yt.setValue(B,"directionalShadowMap",Be.state.directionalShadowMap,Dt),Be.state.spotShadowMap.length>0&&Yt.setValue(B,"spotShadowMap",Be.state.spotShadowMap,Dt),Be.state.pointShadowMap.length>0&&Yt.setValue(B,"pointShadowMap",Be.state.pointShadowMap,Dt)),V.isSkinnedMesh){Yt.setOptional(B,V,"bindMatrix"),Yt.setOptional(B,V,"bindMatrixInverse");let ce=V.skeleton;ce&&(ce.boneTexture===null&&ce.computeBoneTexture(),Yt.setValue(B,"boneTexture",ce.boneTexture,Dt))}V.isBatchedMesh&&(Yt.setOptional(B,V,"batchingTexture"),Yt.setValue(B,"batchingTexture",V._matricesTexture,Dt),Yt.setOptional(B,V,"batchingIdTexture"),Yt.setValue(B,"batchingIdTexture",V._indirectTexture,Dt),Yt.setOptional(B,V,"batchingColorTexture"),V._colorsTexture!==null&&Yt.setValue(B,"batchingColorTexture",V._colorsTexture,Dt));let ai=Y.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0)&&j.update(V,Y,Le),(Xi||bt.receiveShadow!==V.receiveShadow)&&(bt.receiveShadow=V.receiveShadow,Yt.setValue(B,"receiveShadow",V.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&D.environment!==null&&(we.envMapIntensity.value=D.environmentIntensity),we.dfgLUT!==void 0&&(we.dfgLUT.value=Y0()),Xi){if(Yt.setValue(B,"toneMappingExposure",I.toneMappingExposure),bt.needsLights&&Ju(we,on),ut&&G.fog===!0&&rt.refreshFogUniforms(we,ut),rt.refreshMaterialUniforms(we,G,gt,At,T.state.transmissionRenderTarget[M.id]),bt.needsLights&&bt.numLightProbeGrids>0){let ce=S,Se=0;for(let Ci of T.state.lightProbeGridArray)Ci.texture!==null&&(ce.textures[Se]=Ci.texture,ce.min[Se]=Ci.boundingBox.min,ce.max[Se]=Ci.boundingBox.max,ce.resolution[Se]=Ci.resolution,Se++);for(let Ci in ce)ce[Ci].length=Se;we.probesSH.value=ce.textures,we.probesMin.value=ce.min,we.probesMax.value=ce.max,we.probesResolution.value=ce.resolution}rs.upload(B,bc(bt),we,Dt)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(rs.upload(B,bc(bt),we,Dt),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Yt.setValue(B,"center",V.center),Yt.setValue(B,"modelViewMatrix",V.modelViewMatrix),Yt.setValue(B,"normalMatrix",V.normalMatrix),Yt.setValue(B,"modelMatrix",V.matrixWorld),G.uniformsGroups!==void 0){let ce=G.uniformsGroups;for(let Se=0,Ci=ce.length;Se<Ci;Se++){let wc=ce[Se];Tt.update(wc,Le),Tt.bind(wc,Le)}}return Le}function Ju(M,D){M.ambientLightColor.needsUpdate=D,M.lightProbe.needsUpdate=D,M.sunLights.needsUpdate=D,M.sunLightShadows.needsUpdate=D,M.directionalLights.needsUpdate=D,M.directionalLightShadows.needsUpdate=D,M.pointLights.needsUpdate=D,M.pointLightShadows.needsUpdate=D,M.spotLights.needsUpdate=D,M.spotLightShadows.needsUpdate=D,M.rectAreaLights.needsUpdate=D,M.hemisphereLights.needsUpdate=D}function Ku(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(M,D,Y){let G=Rt.get(M);G.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),Rt.get(M.texture).__webglTexture=D,Rt.get(M.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:Y,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,D){let Y=Rt.get(M);Y.__webglFramebuffer=D,Y.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(M,D=0,Y=0){U=M,W=D,q=Y;let G=null,V=!1,ut=!1;if(M){let ct=Rt.get(M);if(ct.__useDefaultFramebuffer!==void 0){dt.bindFramebuffer(B.FRAMEBUFFER,ct.__webglFramebuffer),X.copy(M.viewport),nt.copy(M.scissor),vt=M.scissorTest,dt.viewport(X),dt.scissor(nt),dt.setScissorTest(vt),C=-1;return}else if(ct.__webglFramebuffer===void 0)Dt.setupRenderTarget(M);else if(ct.__hasExternalTextures)Dt.rebindTextures(M,Rt.get(M.texture).__webglTexture,Rt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Nt=M.depthTexture;if(ct.__boundDepthTexture!==Nt){if(Nt!==null&&Rt.has(Nt)&&(M.width!==Nt.image.width||M.height!==Nt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Dt.setupDepthRenderbuffer(M)}}let _t=M.texture;(_t.isData3DTexture||_t.isDataArrayTexture||_t.isCompressedArrayTexture)&&(ut=!0);let Et=Rt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Et[D])?G=Et[D][Y]:G=Et[D],V=!0):M.samples>0&&Dt.useMultisampledRTT(M)===!1?G=Rt.get(M).__webglMultisampledFramebuffer:Array.isArray(Et)?G=Et[Y]:G=Et,X.copy(M.viewport),nt.copy(M.scissor),vt=M.scissorTest}else X.copy(It).multiplyScalar(gt).floor(),nt.copy(jt).multiplyScalar(gt).floor(),vt=ee;if(Y!==0&&(G=$),dt.bindFramebuffer(B.FRAMEBUFFER,G)&&dt.drawBuffers(M,G),dt.viewport(X),dt.scissor(nt),dt.setScissorTest(vt),V){let ct=Rt.get(M.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+D,ct.__webglTexture,Y)}else if(ut){let ct=D;for(let _t=0;_t<M.textures.length;_t++){let Et=Rt.get(M.textures[_t]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+_t,Et.__webglTexture,Y,ct)}}else if(M!==null&&Y!==0){let ct=Rt.get(M.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ct.__webglTexture,Y)}C=-1};function Tc(M){let D=Rt.get(M);return(D.__readFormat!==M.format||D.__readType!==M.type)&&(D.__readFormat=M.format,D.__readType=M.type,D.__formatReadable=ae.textureFormatReadable(M.format),D.__typeReadable=ae.textureTypeReadable(M.type)),D}this.readRenderTargetPixels=function(M,D,Y,G,V,ut,Mt,ct=0){if(!(M&&M.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=Rt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Mt!==void 0&&(_t=_t[Mt],Array.isArray(_t)&&(_t=_t[0])),_t){dt.bindFramebuffer(B.FRAMEBUFFER,_t);try{let Et=M.textures[ct],Nt=Et.format,Vt=Et.type;M.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+ct);let St=Tc(Et);if(St.__formatReadable===!1){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(St.__typeReadable===!1){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=M.width-G&&Y>=0&&Y<=M.height-V&&B.readPixels(D,Y,G,V,st.convert(Nt),st.convert(Vt),ut)}finally{let Et=U!==null?Rt.get(U).__webglFramebuffer:null;dt.bindFramebuffer(B.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(M,D,Y,G,V,ut,Mt,ct=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=Rt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Mt!==void 0&&(_t=_t[Mt],Array.isArray(_t)&&(_t=_t[0])),_t)if(D>=0&&D<=M.width-G&&Y>=0&&Y<=M.height-V){dt.bindFramebuffer(B.FRAMEBUFFER,_t);let Et=M.textures[ct],Nt=Et.format,Vt=Et.type;M.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+ct);let St=Tc(Et);if(St.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(St.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Wt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Wt),B.bufferData(B.PIXEL_PACK_BUFFER,ut.byteLength,B.STREAM_READ),B.readPixels(D,Y,G,V,st.convert(Nt),st.convert(Vt),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let de=U!==null?Rt.get(U).__webglFramebuffer:null;dt.bindFramebuffer(B.FRAMEBUFFER,de);let ne=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Gh(B,ne,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Wt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ut),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(Wt),B.deleteSync(ne),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,D=null,Y=0){let G=Math.pow(2,-Y),V=Math.floor(M.image.width*G),ut=Math.floor(M.image.height*G),Mt=D!==null?D.x:0,ct=D!==null?D.y:0;Dt.setTexture2D(M,0),B.copyTexSubImage2D(B.TEXTURE_2D,Y,0,0,Mt,ct,V,ut),dt.unbindTexture()},this.copyTextureToTexture=function(M,D,Y=null,G=null,V=0,ut=0){let Mt,ct,_t,Et,Nt,Vt,St,Wt,de,ne=M.isCompressedTexture?M.mipmaps[ut]:M.image;if(Y!==null)Mt=Y.max.x-Y.min.x,ct=Y.max.y-Y.min.y,_t=Y.isBox3?Y.max.z-Y.min.z:1,Et=Y.min.x,Nt=Y.min.y,Vt=Y.isBox3?Y.min.z:0;else{let Yt=Math.pow(2,-V);Mt=Math.floor(ne.width*Yt),ct=Math.floor(ne.height*Yt),M.isDataArrayTexture?_t=ne.depth:M.isData3DTexture?_t=Math.floor(ne.depth*Yt):_t=1,Et=0,Nt=0,Vt=0}G!==null?(St=G.x,Wt=G.y,de=G.z):(St=0,Wt=0,de=0);let ie=st.convert(D.format),Pe=st.convert(D.type),bt;D.isData3DTexture?(Dt.setTexture3D(D,0),bt=B.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Dt.setTexture2DArray(D,0),bt=B.TEXTURE_2D_ARRAY):(Dt.setTexture2D(D,0),bt=B.TEXTURE_2D),dt.activeTexture(B.TEXTURE0),dt.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,D.flipY),dt.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),dt.pixelStorei(B.UNPACK_ALIGNMENT,D.unpackAlignment);let Be=dt.getParameter(B.UNPACK_ROW_LENGTH),$t=dt.getParameter(B.UNPACK_IMAGE_HEIGHT),an=dt.getParameter(B.UNPACK_SKIP_PIXELS),Le=dt.getParameter(B.UNPACK_SKIP_ROWS),gr=dt.getParameter(B.UNPACK_SKIP_IMAGES);dt.pixelStorei(B.UNPACK_ROW_LENGTH,ne.width),dt.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ne.height),dt.pixelStorei(B.UNPACK_SKIP_PIXELS,Et),dt.pixelStorei(B.UNPACK_SKIP_ROWS,Nt),dt.pixelStorei(B.UNPACK_SKIP_IMAGES,Vt);let Xi=M.isDataArrayTexture||M.isData3DTexture,on=D.isDataArrayTexture||D.isData3DTexture;if(M.isDepthTexture){let Yt=Rt.get(M),we=Rt.get(D),ai=Rt.get(Yt.__renderTarget),ce=Rt.get(we.__renderTarget);dt.bindFramebuffer(B.READ_FRAMEBUFFER,ai.__webglFramebuffer),dt.bindFramebuffer(B.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let Se=0;Se<_t;Se++)Xi&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Rt.get(M).__webglTexture,V,Vt+Se),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Rt.get(D).__webglTexture,ut,de+Se)),B.blitFramebuffer(Et,Nt,Et+Mt,Nt+ct,St,Wt,St+Mt,Wt+ct,B.DEPTH_BUFFER_BIT,B.NEAREST);dt.bindFramebuffer(B.READ_FRAMEBUFFER,null),dt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(V!==0||M.isRenderTargetTexture||Rt.has(M)){let Yt=Rt.get(M),we=Rt.get(D);dt.bindFramebuffer(B.READ_FRAMEBUFFER,R),dt.bindFramebuffer(B.DRAW_FRAMEBUFFER,k);for(let ai=0;ai<_t;ai++)Xi?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Yt.__webglTexture,V,Vt+ai):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Yt.__webglTexture,V),on?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,we.__webglTexture,ut,de+ai):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,we.__webglTexture,ut),V!==0?B.blitFramebuffer(Et,Nt,Et+Mt,Nt+ct,St,Wt,St+Mt,Wt+ct,B.COLOR_BUFFER_BIT,B.NEAREST):on?B.copyTexSubImage3D(bt,ut,St,Wt,de+ai,Et,Nt,Mt,ct):B.copyTexSubImage2D(bt,ut,St,Wt,Et,Nt,Mt,ct);dt.bindFramebuffer(B.READ_FRAMEBUFFER,null),dt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else on?M.isDataTexture||M.isData3DTexture?B.texSubImage3D(bt,ut,St,Wt,de,Mt,ct,_t,ie,Pe,ne.data):D.isCompressedArrayTexture?B.compressedTexSubImage3D(bt,ut,St,Wt,de,Mt,ct,_t,ie,ne.data):B.texSubImage3D(bt,ut,St,Wt,de,Mt,ct,_t,ie,Pe,ne):M.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ut,St,Wt,Mt,ct,ie,Pe,ne.data):M.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ut,St,Wt,ne.width,ne.height,ie,ne.data):B.texSubImage2D(B.TEXTURE_2D,ut,St,Wt,Mt,ct,ie,Pe,ne);dt.pixelStorei(B.UNPACK_ROW_LENGTH,Be),dt.pixelStorei(B.UNPACK_IMAGE_HEIGHT,$t),dt.pixelStorei(B.UNPACK_SKIP_PIXELS,an),dt.pixelStorei(B.UNPACK_SKIP_ROWS,Le),dt.pixelStorei(B.UNPACK_SKIP_IMAGES,gr),ut===0&&D.generateMipmaps===!0&&D.mipmapsAutoUpdate===!0&&B.generateMipmap(bt),dt.unbindTexture()},this.initRenderTarget=function(M){Rt.get(M).__webglFramebuffer===void 0&&Dt.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Dt.setTextureCube(M,0):M.isData3DTexture?Dt.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Dt.setTexture2DArray(M,0):Dt.setTexture2D(M,0),dt.unbindTexture()},this.resetState=function(){W=0,q=0,U=null,dt.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Xt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Xt._getUnpackColorSpace()}};var Ke=[{id:1,name:"\u6821\u51C6\u573A",subtitle:"\u719F\u6089\u503E\u659C\u624B\u611F",cols:7,rows:7,seed:13371,loop:.2,holes:0,hazards:0,gems:3,checkpoints:1,boosts:0,ice:0,tiltMax:.26,gravity:25,timeLimit:0,par:25,parHits:6,tip:"\u7528\u65B9\u5411\u952E / WASD \u6216\u6309\u4F4F\u9F20\u6807\u5DE6\u952E\u62D6\u52A8\u6765\u503E\u659C\u8FF7\u5BAB\uFF0C\u628A\u5F39\u73E0\u9001\u8FDB\u91D1\u8272\u5149\u67F1\u6807\u8BB0\u7684\u7EC8\u70B9\u3002\u8DEF\u4E0A\u7684\u9752\u8272\u68C0\u67E5\u70B9\u6FC0\u6D3B\u540E\uFF0C\u5931\u8D25\u53EF\u5C31\u5730\u590D\u6D3B\u3002"},{id:2,name:"\u88C2\u9699\u56DE\u5ECA",subtitle:"\u7A7A\u6D1E \xB7 \u52A0\u901F\u5E26 \xB7 \u5012\u8BA1\u65F6",cols:10,rows:10,seed:24680,loop:.13,holes:4,hazards:0,gems:5,checkpoints:2,boosts:3,ice:0,tiltMax:.31,gravity:29,timeLimit:150,par:55,parHits:12,tip:"\u9ED1\u8272\u7A7A\u6D1E\u4F1A\u8BA9\u5F39\u73E0\u5760\u843D\uFF0C\u91D1\u8272\u5B9D\u77F3\u53EF\u52A0\u5206\u3002\u7ED5\u8DEF\u4E0A\u6A59\u8272\u7BAD\u5934\u52A0\u901F\u5E26\u4F1A\u88AB\u63A8\u7740\u51B2\u4E00\u6BB5\uFF0C\u5012\u8BA1\u65F6\u5F00\u59CB\u751F\u6548\u3002"},{id:3,name:"\u7194\u6838\u7EC8\u5C40",subtitle:"\u7194\u5CA9 \xB7 \u51B0\u9762 \xB7 \u52A0\u901F\u5E26",cols:13,rows:13,seed:90210,loop:.08,holes:7,hazards:4,gems:7,checkpoints:2,boosts:3,ice:4,tiltMax:.36,gravity:33,timeLimit:180,par:75,parHits:20,tip:"\u7EA2\u8272\u7194\u5CA9\u89E6\u78B0\u5373\u5931\u8D25\uFF1B\u6D45\u84DD\u51B0\u9762\u51E0\u4E4E\u6CA1\u6709\u6469\u64E6\uFF0C\u60EF\u6027\u4F1A\u88AB\u653E\u5927\u3002\u6536\u7740\u70B9\u503E\u89D2\uFF0C\u63D0\u524D\u51CF\u901F\u3002"}];function Z0(n){let t=n>>>0;return function(){t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Pu=(n,t,e)=>t*e+n;function J0(n,t,e,i,s){let r=t*e;n.fill(15);let a=new Uint8Array(r),o=[0];for(a[0]=1;o.length;){let l=o[o.length-1],c=l%t,h=l/t|0,d=[];if(h>0&&!a[l-t]&&d.push([1,4,l-t]),c<t-1&&!a[l+1]&&d.push([2,8,l+1]),h<e-1&&!a[l+t]&&d.push([4,1,l+t]),c>0&&!a[l-1]&&d.push([8,2,l-1]),!d.length){o.pop();continue}let[u,f,g]=d[i()*d.length|0];n[l]&=~u,n[g]&=~f,a[g]=1,o.push(g)}for(let l=0;l<e;l++)for(let c=0;c<t;c++){let h=Pu(c,l,t);c<t-1&&n[h]&2&&i()<s&&(n[h]&=-3,n[h+1]&=-9),l<e-1&&n[h]&4&&i()<s&&(n[h]&=-5,n[h+t]&=-2)}}function cc(n,t,e,i){let s=t*e,r=new Uint8Array(s),a=new Int32Array(s).fill(-1),o=[0];r[0]=1;for(let l=0;l<o.length;l++){let c=o[l],h=c%t,d=c/t|0,u=n[c],f=(g,y)=>{u&g||i.has(y)||r[y]||(r[y]=1,a[y]=c,o.push(y))};d>0&&f(1,c-t),h<t-1&&f(2,c+1),d<e-1&&f(4,c+t),h>0&&f(8,c-1)}return{seen:r,parent:a,reachedGoal:r[s-1]===1}}function K0(n,t,e){let i=new Set,s=t*e-1,r=0;for(;s>=0&&r++<t*e+5;)i.add(s),s=n[s];return i}function Iu(n,t){for(let e=n.length-1;e>0;e--){let i=t()*(e+1)|0,s=n[e];n[e]=n[i],n[i]=s}return n}function Q0(n,t,e,i,s,r,a,o){let l=i%t,c=i/t|0,h=n[i],d=s-a,u=r-o,f=Math.hypot(d,u)||1,g=[[1,0,-1],[2,1,0],[4,0,1],[8,-1,0]],y={x:1,z:0},p=-1/0;for(let[m,v,E]of g){if(h&m)continue;let S=l+v,A=c+E;if(S<0||S>=t||A<0||A>=e)continue;let T=(v*d+E*u)/f;T>p&&(p=T,y={x:v,z:E})}return y}function Lu(n){let{cols:t,rows:e}=n,i=t*2,s=e*2,r=t*e,a=r-1,o=Z0(n.seed),l=new Uint8Array(r);J0(l,t,e,o,n.loop);let c=(C,F)=>({x:-i/2+(C+.5)*2,z:-s/2+(F+.5)*2}),h=[];for(let C=0;C<e;C++)for(let F=0;F<t;F++){let X=l[Pu(F,C,t)],nt=c(F,C);X&1&&h.push({x:nt.x,z:-s/2+C*2,len:2+.34,dir:"h"}),X&8&&h.push({x:-i/2+F*2,z:nt.z,len:2+.34,dir:"v"}),C===e-1&&h.push({x:nt.x,z:s/2,len:2+.34,dir:"h"}),F===t-1&&h.push({x:i/2,z:nt.z,len:2+.34,dir:"v"})}let d=h.map(C=>C.dir==="h"?{minX:C.x-C.len/2,maxX:C.x+C.len/2,minZ:C.z-.34/2,maxZ:C.z+.34/2}:{minX:C.x-.34/2,maxX:C.x+.34/2,minZ:C.z-C.len/2,maxZ:C.z+C.len/2}),u=cc(l,t,e,new Set),f=K0(u.parent,t,e),g=new Set,y=[];for(let C=0;C<r;C++)u.seen[C]&&C!==0&&C!==a&&y.push(C);let p=C=>{let F=C%t,X=C/t|0;return F+X<2||t-1-F+(e-1-X)<2},m=(C,F)=>{let X=[],nt=Iu(y.filter(vt=>!f.has(vt)&&!p(vt)&&!g.has(vt)),o);for(let vt of nt){if(X.length>=C)break;if(g.add(vt),cc(l,t,e,g).reachedGoal){let K=vt%t,ft=vt/t|0,yt=c(K,ft);X.push({x:yt.x,z:yt.z,r:F,cell:vt})}else g.delete(vt)}return X},v=m(n.holes,.62),E=m(n.hazards,.68),A=Iu(y.filter(C=>!g.has(C)),o).slice(0,n.gems).map(C=>{let F=C%t,X=C/t|0,nt=c(F,X);return{x:nt.x,z:nt.z,r:.46,cell:C}}),T=c(0,0),_=c(t-1,e-1),b=cc(l,t,e,g),L=[];if(b.reachedGoal){let C=a,F=0;for(;C>=0&&F++<r+5;)L.push(C),C=b.parent[C];L.reverse()}let I=[],N=new Set,z=n.checkpoints||0;if(z>0&&L.length>4)for(let C=1;C<=z;C++){let F=Math.round((L.length-1)*C/(z+1));for(F=Math.max(1,Math.min(L.length-2,F));F<L.length-2&&N.has(L[F]);)F+=1;let X=L[F];if(N.has(X)||X===0||X===a)continue;N.add(X);let nt=c(X%t,X/t|0);I.push({x:nt.x,z:nt.z,r:.54,cell:X,active:!1,order:I.length})}let $=new Set([...g,...N,...A.map(C=>C.cell)]),R=new Set(L),k=[];for(let C=1;C<r-1;C++){if(!b.seen[C]||R.has(C)||$.has(C))continue;let F=C%t,X=C/t|0,nt=1/0;for(let vt of L)nt=Math.min(nt,Math.abs(vt%t-F)+Math.abs((vt/t|0)-X));k.push({cell:C,md:nt})}k.sort((C,F)=>C.md-F.md||C.cell-F.cell);let W=C=>{let F=[];for(let X of k){if(F.length>=C)break;$.has(X.cell)||($.add(X.cell),F.push(X.cell))}return F},q=W(n.boosts||0).map(C=>{let F=c(C%t,C/t|0),X=Q0(l,t,e,C,_.x,_.z,F.x,F.z);return{x:F.x,z:F.z,r:.7,cell:C,dirX:X.x,dirZ:X.z}}),U=W(n.ice||0).map(C=>{let F=c(C%t,C/t|0);return{x:F.x,z:F.z,r:.86,cell:C}});return{cfg:n,cells:l,cols:t,rows:e,width:i,depth:s,segments:h,walls:d,start:T,goal:_,holes:v,hazards:E,gems:A,safePath:L,checkpoints:I,boosts:q,iceZones:U,solvable:b.reachedGoal,cellCenter:c}}function Mo(n,t,e,i=!0){let s=document.createElement("canvas");s.width=n,s.height=t,e(s.getContext("2d"),n,t);let r=new Us(s);return i&&(r.colorSpace=Ue),r.anisotropy=8,r}function Du(n){let t=Mo(512,256,(s,r,a)=>{let o=s.createLinearGradient(0,0,0,a);o.addColorStop(0,"#dce9ff"),o.addColorStop(.42,"#8fa9c8"),o.addColorStop(.52,"#43566b"),o.addColorStop(1,"#101821"),s.fillStyle=o,s.fillRect(0,0,r,a);let l=s.createRadialGradient(150,58,4,150,58,96);l.addColorStop(0,"rgba(255,255,255,0.95)"),l.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=l,s.fillRect(0,0,r,a),s.fillStyle="rgba(255,255,255,0.30)",s.beginPath(),s.ellipse(390,44,62,22,0,0,Math.PI*2),s.fill(),s.fillStyle="rgba(120,200,255,0.18)",s.fillRect(0,a*.62,r,8)});t.mapping=is;let e=new as(n);e.compileEquirectangularShader();let i=e.fromEquirectangular(t);return t.dispose(),e.dispose(),i}function j0(){return Mo(256,256,(n,t,e)=>{n.fillStyle="#28394b",n.fillRect(0,0,t,e),n.strokeStyle="rgba(150,190,225,0.20)",n.lineWidth=3,n.strokeRect(2,2,t-4,e-4),n.strokeStyle="rgba(150,190,225,0.085)",n.lineWidth=1;for(let i=1;i<4;i++){let s=t/4*i;n.beginPath(),n.moveTo(s,0),n.lineTo(s,e),n.stroke(),n.beginPath(),n.moveTo(0,s),n.lineTo(t,s),n.stroke()}for(let i=0;i<900;i++){let s=Math.random()*.05;n.fillStyle=`rgba(255,255,255,${s})`,n.fillRect(Math.random()*t,Math.random()*e,1.5,1.5)}})}function t_(){return Mo(512,256,(n,t,e)=>{n.fillStyle="#e9f3ff",n.fillRect(0,0,t,e);let i=[.04,.26,.51,.76];for(let s of i)n.fillStyle="rgba(22,92,186,0.95)",n.fillRect(s*t,0,t*.085,e),n.fillStyle="rgba(255,178,48,0.95)",n.fillRect(s*t+t*.092,0,t*.028,e);n.strokeStyle="rgba(60,90,130,0.30)",n.lineWidth=3;for(let s of[e*.25,e*.5,e*.75])n.beginPath(),n.moveTo(0,s),n.lineTo(t,s),n.stroke();n.fillStyle="rgba(255,255,255,0.55)";for(let[s,r]of[[.14,.38],[.64,.62]])n.beginPath(),n.arc(s*t,r*e,16,0,Math.PI*2),n.fill()})}function e_(){return Mo(128,128,(n,t,e)=>{n.fillStyle="#3a1113",n.fillRect(0,0,t,e),n.strokeStyle="#ff5347",n.lineWidth=14;for(let i=-e;i<t+e;i+=32)n.beginPath(),n.moveTo(i,0),n.lineTo(i+e,e),n.stroke()})}function i_(){let n=new Yn;n.moveTo(0,.65),n.lineTo(.42,-.075),n.lineTo(.16,-.075),n.lineTo(.16,-.65),n.lineTo(-.16,-.65),n.lineTo(-.16,-.075),n.lineTo(-.42,-.075),n.closePath();let t=new qs(n);return t.rotateX(-Math.PI/2),t}var yo=class{constructor(t){this.canvas=t,this.renderer=new go({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),this.renderer.outputColorSpace=Ue,this.renderer.toneMapping=ir,this.renderer.toneMappingExposure=1.15,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=wa,this.scene=new As,this.scene.background=new Ot(725531),this.scene.fog=new ws(725531,55,165),this.envRT=Du(this.renderer),this.scene.environment=this.envRT.texture,this.camera=new Fe(45,1,.1,400),this.cam={yaw:0,pitch:.98,zoom:1,tYaw:0,tPitch:.98,tZoom:1},this.span=20,this.time=0,this.quality="high",this.pixelRatioCap=1.75,this.tiltRoot=new yi,this.board=new yi,this.tiltRoot.add(this.board),this.scene.add(this.tiltRoot),this.buildLights(),this.buildMaterials(),this.arrowGeometry=i_(),this.ball=null,this.ballShadow=null,this.gemMeshes=[],this.checkpointMeshes=[],this.boostMeshes=[],this.iceMeshes=[],this.goalParticles=null,this.particleVel=[],this.particleLife=0,this.goalRing=null,this.goalLight=null,this.goalBeam=null,this.goalBeacon=null,this.level=null,this.spinQuat=new Ye,this.spinVec=new O,this.resize()}buildLights(){this.scene.add(new js(9414852,.55)),this.scene.add(new $s(12375807,1318956,.75)),this.sun=new Kn(16777215,2.35),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(1024,1024),this.sun.shadow.bias=-45e-5,this.sun.shadow.normalBias=.02,this.scene.add(this.sun),this.scene.add(this.sun.target);let t=new Kn(7317759,.55);t.position.set(-16,12,-14),this.scene.add(t)}buildMaterials(){let t=j0();t.wrapS=dn,t.wrapT=dn,this.floorTex=t,this.mat={floor:new Ge({color:16777215,map:t,roughness:.86,metalness:.08}),base:new Ge({color:1319471,roughness:.62,metalness:.35}),rim:new Ge({color:3043230,emissive:1195878,emissiveIntensity:.9,roughness:.4,metalness:.6}),wall:new Ge({color:5011356,roughness:.42,metalness:.48,envMapIntensity:1.1}),cap:new Ge({color:7772600,emissive:1456467,emissiveIntensity:.22,roughness:.38,metalness:.5}),ball:new Ge({color:16777215,map:t_(),roughness:.14,metalness:.62,envMapIntensity:1.6}),ballShell:new _e({color:10478847,side:Ce}),marker:new _e({color:8381439,transparent:!0,opacity:.78,side:pe,depthWrite:!1}),shadow:new _e({color:0,transparent:!0,opacity:.38,depthWrite:!1}),hole:new _e({color:66826}),holeRing:new Ge({color:2373446,roughness:.7,metalness:.4}),hazard:new Ge({map:e_(),emissive:16722456,emissiveIntensity:.55,roughness:.55}),hazardRing:new Ge({color:16738890,emissive:16723992,emissiveIntensity:1.1,roughness:.4}),goal:new Ge({color:11893270,emissive:16758062,emissiveIntensity:1.5,roughness:.3,metalness:.35}),goalRing:new _e({color:16770723,transparent:!0,opacity:.9,side:pe,depthWrite:!1,toneMapped:!1}),goalBeam:new _e({color:16764764,transparent:!0,opacity:.26,depthWrite:!1,toneMapped:!1}),goalBeacon:new _e({color:16771501,transparent:!0,opacity:.95,depthWrite:!1,toneMapped:!1}),start:new _e({color:4892927,transparent:!0,opacity:.85,side:pe,depthWrite:!1}),gem:new Ge({color:16763210,emissive:16751640,emissiveIntensity:.95,roughness:.22,metalness:.75,flatShading:!0}),cpIdle:new _e({color:7328995,transparent:!0,opacity:.92,side:pe,depthWrite:!1,toneMapped:!1}),cpActive:new _e({color:4849632,transparent:!0,opacity:.98,side:pe,depthWrite:!1,toneMapped:!1}),boostBase:new _e({color:12872216,transparent:!0,opacity:.62,side:pe,depthWrite:!1,toneMapped:!1}),boost:new _e({color:16757575,transparent:!0,opacity:.98,side:pe,depthWrite:!1,toneMapped:!1}),ice:new _e({color:4175103,transparent:!0,opacity:.5,side:pe,depthWrite:!1,toneMapped:!1}),iceEdge:new _e({color:10414335,transparent:!0,opacity:.95,side:pe,depthWrite:!1,toneMapped:!1}),particle:new Wn({color:16768140,size:.17,transparent:!0,opacity:.95,depthWrite:!1,blending:er})}}clearBoard(){for(let t of[...this.board.children])this.board.remove(t),t.geometry&&t.geometry!==this.arrowGeometry&&t.geometry.dispose();this.gemMeshes=[],this.checkpointMeshes=[],this.boostMeshes=[],this.iceMeshes=[],this.goalParticles=null,this.particleVel=[],this.particleLife=0,this.goalRing=null,this.goalLight=null,this.goalBeam=null,this.goalBeacon=null,this.ball=null,this.ballShell=null,this.ballMarker=null,this.ballShadow=null}add(t,e=0,i=0,s=0){return t.position.set(e,i,s),this.board.add(t),t}flat(t){return t.rotation.x=-Math.PI/2,t}buildLevel(t){this.clearBoard(),this.level=t;let{width:e,depth:i,cols:s,rows:r}=t;this.span=Math.max(e,i),this.floorTex.repeat.set(s,r),this.floorTex.needsUpdate=!0;let a=this.span*.82;this.sun.position.set(this.span*.48,this.span*.95,this.span*.38),this.sun.target.position.set(0,0,0),this.sun.shadow.camera.left=-a,this.sun.shadow.camera.right=a,this.sun.shadow.camera.top=a,this.sun.shadow.camera.bottom=-a,this.sun.shadow.camera.near=1,this.sun.shadow.camera.far=this.span*3+40,this.sun.shadow.camera.updateProjectionMatrix();let o=new qt(new bi(e+.9,.55,i+.9),this.mat.base);o.position.y=-.285,o.receiveShadow=!0,o.castShadow=!0,this.board.add(o);let l=e+.9,c=i+.9,h=[[l,.1,.14,0,-i/2-.38],[l,.1,.14,0,i/2+.38],[.14,.1,c,-e/2-.38,0],[.14,.1,c,e/2+.38,0]];for(let[R,k,W,q,U]of h){let C=new qt(new bi(R,k,W),this.mat.rim);C.position.set(q,.015,U),this.board.add(C)}let d=this.flat(new qt(new pn(e,i),this.mat.floor));d.position.y=.002,d.receiveShadow=!0,this.board.add(d);let u=t.segments,f=new bi(1,1,1),g=new Vn(f,this.mat.wall,u.length),y=new Vn(f.clone(),this.mat.cap,u.length);g.castShadow=!0,g.receiveShadow=!0,y.castShadow=!1;let p=new Zt,m=new Ye,v=new O,E=new O;for(let R=0;R<u.length;R++){let k=u[R],W=k.dir==="h";v.set(k.x,1.15/2,k.z),E.set(W?k.len:.34,1.15,W?.34:k.len),p.compose(v,m,E),g.setMatrixAt(R,p),v.set(k.x,1.15+.03,k.z),E.set(W?k.len:.34+.02,.06,W?.34+.02:k.len),p.compose(v,m,E),y.setMatrixAt(R,p)}g.instanceMatrix.needsUpdate=!0,y.instanceMatrix.needsUpdate=!0,this.board.add(g),this.board.add(y);let S=this.flat(new qt(new ui(.62,.74,40),this.mat.start));this.add(S,t.start.x,.012,t.start.z);for(let R of t.holes){let k=this.flat(new qt(new Ei(R.r,40),this.mat.hole));this.add(k,R.x,.014,R.z);let W=this.flat(new qt(new ui(R.r,R.r+.11,40),this.mat.holeRing));this.add(W,R.x,.016,R.z)}for(let R of t.hazards){let k=this.flat(new qt(new Ei(R.r,40),this.mat.hazard));this.add(k,R.x,.015,R.z);let W=this.flat(new qt(new ui(R.r,R.r+.1,40),this.mat.hazardRing));this.add(W,R.x,.017,R.z)}for(let R of t.iceZones){let k=this.flat(new qt(new Ei(R.r,40),this.mat.ice));this.add(k,R.x,.009,R.z);let W=this.flat(new qt(new ui(R.r-.09,R.r,40),this.mat.iceEdge));this.add(W,R.x,.011,R.z),this.iceMeshes.push(k)}for(let R of t.boosts){let k=this.flat(new qt(new Ei(R.r,32),this.mat.boostBase));this.add(k,R.x,.01,R.z);let W=new qt(this.arrowGeometry,this.mat.boost);W.rotation.y=Math.atan2(-R.dirX,-R.dirZ),this.add(W,R.x,.014,R.z),this.boostMeshes.push(W)}for(let R of t.checkpoints){let k=this.flat(new qt(new ui(R.r*.62,R.r,40),this.mat.cpIdle));this.add(k,R.x,.013,R.z);let W=new qt(new Xn(.055,.055,.85,10),this.mat.cpActive);W.position.set(R.x,.44,R.z),W.visible=!1,this.board.add(W),this.checkpointMeshes.push({ring:k,pillar:W})}let A=this.flat(new qt(new Ei(.76,48),this.mat.goal));this.add(A,t.goal.x,.018,t.goal.z);let T=this.flat(new qt(new ui(.76+.1,.76+.24,48),this.mat.goalRing));this.add(T,t.goal.x,.022,t.goal.z),this.goalRing=T;let _=2.4,b=new qt(new Xn(.11,.34,_,16,1,!0),this.mat.goalBeam);b.position.set(t.goal.x,_/2+.04,t.goal.z),this.board.add(b),this.goalBeam=b;let L=new qt(new Zn(.24,0),this.mat.goalBeacon);L.position.set(t.goal.x,_+.2,t.goal.z),this.board.add(L),this.goalBeacon=L,this.goalLight=new Ks(16761948,2.4,8,2),this.goalLight.position.set(t.goal.x,1.7,t.goal.z),this.board.add(this.goalLight);for(let R of t.gems){let k=new qt(new Zn(.3,0),this.mat.gem);k.castShadow=!0,k.position.set(R.x,.45,R.z),this.board.add(k),this.gemMeshes.push(k)}let I=new qt(new Jn(.42,40,28),this.mat.ball);I.castShadow=!0,I.receiveShadow=!0,I.position.set(t.start.x,.42,t.start.z),this.board.add(I),this.ball=I;let N=new qt(new Jn(.42*1.15,24,16),this.mat.ballShell);N.position.set(t.start.x,.42,t.start.z),this.board.add(N),this.ballShell=N,this.mat.marker.opacity=.78;let z=this.flat(new qt(new ui(.42*.8,.42*.98,32),this.mat.marker));this.add(z,t.start.x,.012,t.start.z),this.ballMarker=z,this.mat.shadow.opacity=.38;let $=this.flat(new qt(new Ei(.42*1.12,28),this.mat.shadow));this.add($,t.start.x,.01,t.start.z),this.ballShadow=$,this.cam.tYaw=0,this.cam.tPitch=.98,this.cam.tZoom=1}setGemsVisible(t){for(let e=0;e<this.gemMeshes.length;e++)this.gemMeshes[e].visible=!t.gems[e].taken}setCheckpointsActive(t){for(let e=0;e<this.checkpointMeshes.length;e++){let i=t.checkpoints[e];if(!i)continue;let s=this.checkpointMeshes[e];s.ring.material=i.active?this.mat.cpActive:this.mat.cpIdle,s.pillar.visible=i.active}}burstGoal(){if(!this.level)return;this.goalParticles&&(this.board.remove(this.goalParticles),this.goalParticles.geometry.dispose());let t=42,e=new Float32Array(t*3),i=[],s=this.level.goal.x,r=this.level.goal.z;for(let o=0;o<t;o++){let l=o/t*Math.PI*2+Math.random()*.5,c=1.3+Math.random()*2.8;e[o*3]=s+Math.cos(l)*.12,e[o*3+1]=.22,e[o*3+2]=r+Math.sin(l)*.12,i.push({x:Math.cos(l)*c,y:2.3+Math.random()*2.6,z:Math.sin(l)*c})}let a=new Re;a.setAttribute("position",new qe(e,3)),this.mat.particle.opacity=.95,this.goalParticles=new Ds(a,this.mat.particle),this.goalParticles.frustumCulled=!1,this.board.add(this.goalParticles),this.particleVel=i,this.particleLife=1.3}onContextRestored(){try{this.floorTex&&(this.floorTex.needsUpdate=!0);for(let t of Object.values(this.mat))t&&t.isMaterial&&(t.needsUpdate=!0);this.envRT&&this.envRT.dispose(),this.envRT=Du(this.renderer),this.scene.environment=this.envRT.texture}catch{this.floorTex&&(this.floorTex.needsUpdate=!0)}}setQuality(t){if(!["high","medium","low"].includes(t))return;this.quality=t;let e=t==="high"?1.75:t==="medium"?1.25:1;this.pixelRatioCap=e,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,e));let i=t!=="low";if(this.renderer.shadowMap.enabled!==i){this.renderer.shadowMap.enabled=i,this.sun.castShadow=i;for(let r of Object.values(this.mat))r&&r.isMaterial&&(r.needsUpdate=!0)}let s=t==="high"?1024:512;this.sun.shadow.mapSize.x!==s&&(this.sun.shadow.mapSize.set(s,s),this.sun.shadow.map&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null),this.sun.shadow.camera.updateProjectionMatrix()),this.resize()}stats(){let t=this.renderer.info.memory;return{children:this.board.children.length,geometries:t.geometries,textures:t.textures,programs:this.renderer.info.programs?this.renderer.info.programs.length:0,quality:this.quality,pixelRatioCap:this.pixelRatioCap,shadowSize:this.sun.shadow.mapSize.x,shadows:this.renderer.shadowMap.enabled}}orbit(t,e){this.cam.tYaw=Math.max(-1.05,Math.min(1.05,this.cam.tYaw+t*.005)),this.cam.tPitch=Math.max(.42,Math.min(1.38,this.cam.tPitch+e*.004))}zoomBy(t){this.cam.tZoom=Math.max(.65,Math.min(1.75,this.cam.tZoom+t))}resize(){let t=Math.max(1,this.canvas.clientWidth),e=Math.max(1,this.canvas.clientHeight);this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}updateCamera(t){let e=this.cam,i=1-Math.exp(-9*t);e.yaw+=(e.tYaw-e.yaw)*i,e.pitch+=(e.tPitch-e.pitch)*i,e.zoom+=(e.tZoom-e.zoom)*i;let s=Math.max(1,1.28/this.camera.aspect),r=1+Math.max(0,this.span-14)*.012,a=(this.span*1.15+5.5)*e.zoom*s*r,o=Math.cos(e.pitch);this.camera.position.set(Math.sin(e.yaw)*o*a,Math.sin(e.pitch)*a,Math.cos(e.yaw)*o*a),this.camera.lookAt(0,0,0)}update(t,e,i={}){this.time+=t;let s=i.fall||0;if(this.tiltRoot.rotation.z=e.tiltZ,this.board.rotation.x=e.tiltX,this.ball){this.ball.position.set(e.x,.42-s*2.8,e.z);let a=Math.max(.05,1-s*.7);this.ball.scale.setScalar(a),e.spinAngle>0&&s===0&&(this.spinVec.set(e.spinAxis.x,0,e.spinAxis.z).normalize(),this.spinQuat.setFromAxisAngle(this.spinVec,e.spinAngle),this.ball.quaternion.premultiply(this.spinQuat))}let r=Math.max(.05,1-s*.7);this.ballShell&&(this.ballShell.position.set(e.x,.42-s*2.8,e.z),this.ballShell.scale.setScalar(r),this.ballShell.visible=s<.95),this.ballMarker&&(this.ballMarker.position.set(e.x,.012,e.z),this.ballMarker.material.opacity=.78*(1-s),this.ballMarker.visible=s<.95),this.ballShadow&&(this.ballShadow.position.set(e.x,.01,e.z),this.ballShadow.material.opacity=.38*(1-s),this.ballShadow.visible=s<.95);for(let a=0;a<this.gemMeshes.length;a++){let o=this.gemMeshes[a];o.rotation.y+=t*1.8,o.rotation.x=Math.sin(this.time*1.2+a)*.25,o.position.y=.45+Math.sin(this.time*2.2+a*1.3)*.09}if(this.goalRing){let a=1+Math.sin(this.time*3.4)*.09;this.goalRing.scale.set(a,a,a),this.goalRing.material.opacity=.55+Math.sin(this.time*3.4)*.3}this.goalLight&&(this.goalLight.intensity=2.1+Math.sin(this.time*3.4)*.6),this.goalBeam&&(this.goalBeam.material.opacity=.22+Math.sin(this.time*2.6)*.07),this.goalBeacon&&(this.goalBeacon.rotation.y+=t*1.6,this.goalBeacon.position.y=2.6+Math.sin(this.time*2.6)*.09),this.mat.hazard&&(this.mat.hazard.emissiveIntensity=.45+Math.sin(this.time*4.5)*.22);for(let a of this.boostMeshes)a.scale.setScalar(.88+Math.sin(this.time*4.2+a.position.x*.7)*.16);for(let a=0;a<this.checkpointMeshes.length;a++)this.checkpointMeshes[a].ring.scale.setScalar(1+Math.sin(this.time*3+a)*.08);if(this.goalParticles&&this.particleLife>0){this.particleLife-=t;let a=this.goalParticles.geometry.getAttribute("position"),o=a.array;for(let l=0;l<this.particleVel.length;l++){let c=this.particleVel[l];o[l*3]+=c.x*t,o[l*3+1]+=c.y*t,o[l*3+2]+=c.z*t,c.y-=5.2*t}a.needsUpdate=!0,this.mat.particle.opacity=Math.max(0,this.particleLife/1.3*.95),this.particleLife<=0&&(this.goalParticles.visible=!1)}this.updateCamera(t),this.renderer.render(this.scene,this.camera)}};var Qt=n=>document.getElementById(n),mi=n=>{let t=Math.max(0,Math.floor(n));return`${String(Math.floor(t/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`},n_=n=>{let t=Math.max(0,Math.floor(Number(n)||0)),e=Math.floor(t/3600),i=Math.floor(t%3600/60);return e>0?`${e}\u5C0F\u65F6${String(i).padStart(2,"0")}\u5206`:`${i}\u5206${String(t%60).padStart(2,"0")}\u79D2`},s_=[["W A S D / \u65B9\u5411\u952E","\u503E\u659C\u8FF7\u5BAB"],["Shift + \u65B9\u5411 / \u62D6\u52A8","\u7CBE\u7EC6\u5FAE\u8C03\u503E\u89D2"],["\u5DE6\u952E / \u53F3\u952E\u62D6\u52A8","\u503E\u659C / \u65CB\u8F6C\u89C6\u89D2"],["\u6EDA\u8F6E","\u7F29\u653E\u89C6\u89D2"],["\u9876\u90E8\u300C\u4F53\u611F\u300D","\u9640\u87BA\u4EEA\u503E\u659C\uFF08\u9700\u6388\u6743\uFF09"],["P / R / M","\u6682\u505C / \u91CD\u5F00 / \u97F3\u6548"],["\u7A7A\u683C / Enter","\u786E\u8BA4 / \u7EE7\u7EED"]];function Uu(n,t,e){let s=Math.min((t-28)/n.width,(e-28)/n.depth);return{scale:s,mx:r=>t/2+r*s,my:r=>e/2+r*s}}function r_(n){let t=Math.max(n.cols,n.rows);return Math.max(220,Math.min(320,220+(t-7)*22))}var So=class{constructor(){this.el={app:Qt("app"),levelName:Qt("levelName"),statLevel:Qt("statLevel"),statTime:Qt("statTime"),statTimeLabel:Qt("statTimeLabel"),statScore:Qt("statScore"),statReward:Qt("statReward"),statHits:Qt("statHits"),statGems:Qt("statGems"),statCheckpoints:Qt("statCheckpoints"),statLives:Qt("statLives"),tips:Qt("tips"),statusPill:Qt("statusPill"),tiltHint:Qt("tiltHint"),overlay:Qt("overlay"),modal:Qt("modal"),toast:Qt("toast"),btnPause:Qt("btnPause"),btnRestart:Qt("btnRestart"),btnMute:Qt("btnMute"),btnTilt:Qt("btnTilt"),btnQuality:Qt("btnQuality"),btnDifficulty:Qt("btnDifficulty"),minimap:Qt("minimap"),tilt:Qt("tilt"),sidePanel:Qt("sidePanel"),mapToggle:Qt("mapToggle"),levelFlash:Qt("levelFlash"),joystick:Qt("joystick"),joystickKnob:Qt("joystickKnob")},this.mmCtx=this.el.minimap.getContext("2d"),this.tiltCtx=this.el.tilt.getContext("2d"),this.toastTimer=0,this.shakeTimer=0,this.overlayType="",this.trail=[],this.mmBase=null,this.mmWalls=null,this.mmLevel=null,this.mmSize=0,this.staticDraws=0}setStats(t){if(this.el.levelName.textContent=`\u7B2C ${t.levelIndex+1} \u5173 \xB7 ${t.name} \u2014 ${t.subtitle}`,this.el.statLevel.textContent=`${t.levelIndex+1} / ${t.totalLevels}`,this.el.statScore.textContent=String(t.score),this.el.statReward.textContent=t.rewardText,this.el.statReward.classList.toggle("settled",!!t.rewardSettled),this.lastHits!==void 0&&t.hits>this.lastHits){let e=this.el.statHits;e.classList.remove("bump"),e.offsetWidth,e.classList.add("bump")}if(this.lastHits=t.hits,this.el.statHits.textContent=String(t.hits),this.el.statGems.textContent=`${t.gemsGot} / ${t.gemsTotal}`,this.el.statCheckpoints.textContent=`${t.checkpoints} / ${t.checkpointsTotal}`,this.el.statCheckpoints.style.color=t.checkpoints>0?"#49ffe0":"",this.el.statLives.textContent="\u2665".repeat(t.lives)+"\u2661".repeat(Math.max(0,3-t.lives)),this.el.statLives.style.color=t.lives<=1?"#ff6b6b":"#ffb4a2",this.el.statTimeLabel.textContent=t.timeLimit>0?"\u5269\u4F59":"\u8BA1\u65F6",t.timeLimit>0){let e=t.timeLimit-t.elapsed;this.el.statTime.textContent=mi(e),this.el.statTime.classList.toggle("urgent",e<=15)}else this.el.statTime.textContent=mi(t.elapsed),this.el.statTime.classList.remove("urgent")}setTip(t){this.el.tips.textContent=t}setFineMode(t){this.fineMode!==t&&(this.fineMode=t,this.el.tiltHint.innerHTML=t?"\u7CBE\u7EC6\u6A21\u5F0F \xB7 \u503E\u89D2\u51CF\u534A":"\u65B9\u5411\u952E / WASD<br>\u6216\u6309\u4F4F\u5DE6\u952E\u62D6\u52A8")}setMotionLabel(t){let e={on:"\u4F53\u611F \u5F00",off:"\u4F53\u611F \u5173",unavailable:"\u4F53\u611F\u4E0D\u53EF\u7528"};this.el.btnTilt.textContent=e[t]||"\u4F53\u611F \u5173",this.el.btnTilt.disabled=t==="unavailable"}setStatus(t,e="normal"){this.el.statusPill.textContent=t,this.el.statusPill.dataset.tone=e}setPauseLabel(t){this.el.btnPause.textContent=t?"\u7EE7\u7EED":"\u6682\u505C"}setMuteLabel(t){this.el.btnMute.textContent=t?"\u97F3\u6548 \u5173":"\u97F3\u6548 \u5F00"}setQualityLabel(t){this.el.btnQuality.textContent=t}setDifficultyLabel(t,e=!1){this.el.btnDifficulty.textContent===t&&this.el.btnDifficulty.disabled===e||(this.el.btnDifficulty.textContent=t,this.el.btnDifficulty.disabled=e)}setJoystick(t,e){if(!this.el.joystickKnob)return;let i=34;this.el.joystickKnob.style.transform=`translate(${t*i}px, ${e*i}px)`,this.el.joystick.classList.toggle("active",Math.abs(t)+Math.abs(e)>.02)}toggleMap(){let t=this.el.sidePanel.classList.toggle("open");return this.el.mapToggle.classList.toggle("active",t),this.el.mapToggle.textContent=t?"\u6536\u8D77\u5730\u56FE":"\u5730\u56FE",t}shake(){let t=this.el.app;t.classList.remove("shake"),t.offsetWidth,t.classList.add("shake"),clearTimeout(this.shakeTimer),this.shakeTimer=setTimeout(()=>t.classList.remove("shake"),230)}flashLevel(){let t=this.el.levelFlash;t.classList.remove("play"),t.offsetWidth,t.classList.add("play")}clearTrail(){this.trail=[]}pushTrail(t,e){let i=this.trail;if(i.length){let s=i[i.length-1];if(Math.hypot(t-s.x,e-s.z)<.16)return}i.push({x:t,z:e}),i.length>320&&i.shift()}toast(t,e="info"){let i=this.el.toast;i.textContent=t,i.dataset.tone=e,i.classList.add("visible"),clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>i.classList.remove("visible"),1400)}hideOverlay(){this.overlayType="",this.el.overlay.classList.remove("visible")}showOverlay(t,e={}){this.overlayType=t;let i=this.el.modal;i.innerHTML=h_[t](e),i.style.animation="none",i.offsetWidth,i.style.animation="",this.el.overlay.classList.add("visible")}drawTilt(t,e,i,s=!1){let r=this.tiltCtx,a=120,o=a/2,l=46;r.clearRect(0,0,a,a),r.fillStyle="rgba(255,255,255,0.025)",r.strokeStyle="rgba(160,190,220,0.30)",r.lineWidth=1,r.beginPath(),r.arc(o,o,l,0,Math.PI*2),r.fill(),r.stroke(),r.beginPath(),r.arc(o,o,l*.5,0,Math.PI*2),r.stroke(),r.strokeStyle="rgba(160,190,220,0.16)",r.beginPath(),r.moveTo(o-l,o),r.lineTo(o+l,o),r.moveTo(o,o-l),r.lineTo(o,o+l),r.stroke(),s&&(r.setLineDash([3,3]),r.strokeStyle="rgba(255,196,92,0.85)",r.lineWidth=1.2,r.beginPath(),r.arc(o,o,(l-8)*.42,0,Math.PI*2),r.stroke(),r.setLineDash([]));let c=o+-e/i*(l-8),h=o+t/i*(l-8);r.strokeStyle=s?"rgba(255,196,92,0.7)":"rgba(90,200,255,0.65)",r.lineWidth=2,r.beginPath(),r.moveTo(o,o),r.lineTo(c,h),r.stroke(),r.fillStyle=s?"#ffce6a":"#6fd3ff",r.beginPath(),r.arc(c,h,6,0,Math.PI*2),r.fill(),r.fillStyle="rgba(255,255,255,0.55)",r.beginPath(),r.arc(o,o,2.5,0,Math.PI*2),r.fill()}ensureStaticLayer(t){let e=r_(t),i=e;if(this.mmLevel===t&&this.mmSize===e&&this.mmBase&&this.mmWalls)return;(this.el.minimap.width!==e||this.el.minimap.height!==i)&&(this.el.minimap.width=e,this.el.minimap.height=i);let{scale:s,mx:r,my:a}=Uu(t,e,i),o=document.createElement("canvas");o.width=e,o.height=i;let l=o.getContext("2d"),c=document.createElement("canvas");c.width=e,c.height=i;let h=c.getContext("2d");l.fillStyle="rgba(10,18,28,0.75)",l.fillRect(0,0,e,i),l.fillStyle="rgba(70,105,140,0.18)",l.fillRect(r(-t.width/2),a(-t.depth/2),t.width*s,t.depth*s),l.strokeStyle="rgba(120,160,200,0.10)",l.lineWidth=1;for(let u=0;u<=t.cols;u++){let f=r(-t.width/2+u*2);l.beginPath(),l.moveTo(f,a(-t.depth/2)),l.lineTo(f,a(t.depth/2)),l.stroke()}for(let u=0;u<=t.rows;u++){let f=a(-t.depth/2+u*2);l.beginPath(),l.moveTo(r(-t.width/2),f),l.lineTo(r(t.width/2),f),l.stroke()}for(let u of t.iceZones)l.fillStyle="rgba(98,200,255,0.32)",l.beginPath(),l.arc(r(u.x),a(u.z),u.r*s,0,Math.PI*2),l.fill(),l.strokeStyle="rgba(203,241,255,0.92)",l.lineWidth=1.2,l.stroke();for(let u of t.boosts){let f=r(u.x),g=a(u.z);l.fillStyle="rgba(255,162,58,0.30)",l.beginPath(),l.arc(f,g,u.r*s,0,Math.PI*2),l.fill();let y=f+u.dirX*5.5,p=g+u.dirZ*5.5,m=-u.dirZ*3.4,v=u.dirX*3.4;l.fillStyle="#ffb347",l.beginPath(),l.moveTo(y,p),l.lineTo(f+m,g+v),l.lineTo(f-m,g-v),l.closePath(),l.fill()}let d=e/220;h.strokeStyle="#9dc4e8",h.lineWidth=2.1*d,h.lineCap="round",h.beginPath();for(let u of t.segments)u.dir==="h"?(h.moveTo(r(u.x-u.len/2),a(u.z)),h.lineTo(r(u.x+u.len/2),a(u.z))):(h.moveTo(r(u.x),a(u.z-u.len/2)),h.lineTo(r(u.x),a(u.z+u.len/2)));h.stroke();for(let u of t.holes)h.fillStyle="#02060b",h.beginPath(),h.arc(r(u.x),a(u.z),u.r*s,0,Math.PI*2),h.fill(),h.strokeStyle="rgba(120,150,180,0.55)",h.lineWidth=1,h.stroke();for(let u of t.hazards)h.fillStyle="rgba(230,70,60,0.75)",h.beginPath(),h.arc(r(u.x),a(u.z),u.r*s,0,Math.PI*2),h.fill();h.fillStyle="#4aa8ff",h.beginPath(),h.arc(r(t.start.x),a(t.start.z),4*d,0,Math.PI*2),h.fill(),this.mmBase=o,this.mmWalls=c,this.mmLevel=t,this.mmSize=e,this.staticDraws+=1}drawMinimap(t,e,i){this.ensureStaticLayer(t);let s=this.mmCtx,r=this.el.minimap.width,a=this.el.minimap.height,{scale:o,mx:l,my:c}=Uu(t,r,a);if(s.clearRect(0,0,r,a),s.drawImage(this.mmBase,0,0),this.trail.length>1){s.strokeStyle="rgba(110,205,255,0.40)",s.lineWidth=2,s.lineJoin="round",s.lineCap="round",s.beginPath();for(let y=0;y<this.trail.length;y++){let p=this.trail[y];y===0?s.moveTo(l(p.x),c(p.z)):s.lineTo(l(p.x),c(p.z))}s.stroke()}s.drawImage(this.mmWalls,0,0);let h=r/220;for(let y of t.gems)y.taken||(s.fillStyle="#ffd166",s.beginPath(),s.arc(l(y.x),c(y.z),3.2*h,0,Math.PI*2),s.fill());for(let y of t.checkpoints)s.strokeStyle=y.active?"#49ffe0":"#6fd4e3",s.lineWidth=(y.active?2.2:1.3)*h,s.beginPath(),s.arc(l(y.x),c(y.z),Math.max(3.4,y.r*o),0,Math.PI*2),s.stroke();let d=l(t.goal.x),u=c(t.goal.z),f=1+Math.sin(i*4)*.12,g=Math.max(5.6,.76*o)*f;s.fillStyle="#ffd45e",s.beginPath(),s.arc(d,u,g*.62,0,Math.PI*2),s.fill(),s.strokeStyle="#ffe6a3",s.lineWidth=2*h,s.beginPath(),s.arc(d,u,g,0,Math.PI*2),s.stroke(),s.beginPath(),s.moveTo(d-g*1.5,u),s.lineTo(d-g*1.08,u),s.moveTo(d+g*1.08,u),s.lineTo(d+g*1.5,u),s.moveTo(d,u-g*1.5),s.lineTo(d,u-g*1.08),s.moveTo(d,u+g*1.08),s.lineTo(d,u+g*1.5),s.stroke(),s.fillStyle="#ffffff",s.beginPath(),s.arc(l(e.x),c(e.z),4.6*h,0,Math.PI*2),s.fill(),s.strokeStyle="rgba(30,60,90,0.9)",s.lineWidth=1.4,s.stroke()}},a_=()=>`<div class="key-table">${s_.map(([n,t])=>`<div class="key-row"><kbd>${n}</kbd><span>${t}</span></div>`).join("")}</div>`;function pr(n){return`<div class="result-grid">${n.map(([t,e])=>`<div class="result-cell"><span>${t}</span><b>${e}</b></div>`).join("")}</div>`}function o_(n){return`<div class="breakdown">${[["\u57FA\u7840\u5206","1000"],["\u7528\u65F6\u6263\u9664",`-${n.b.timeCost}`],["\u78B0\u649E\u6263\u9664",`-${n.b.hitCost}`],["\u5B9D\u77F3\u5956\u52B1",`+${n.b.gemBonus}`],["\u65F6\u95F4\u5956\u52B1",`+${n.b.timeBonus}`]].map(([e,i])=>`<div><span>${e}</span><b>${i}</b></div>`).join("")}</div>`}var Fu=n=>{let t=Math.max(0,Math.min(3,n||0));return`<div class="stars">${"\u2605".repeat(t)}<span class="off">${"\u2605".repeat(3-t)}</span></div>`};function Ou(n){if(!n)return"";if(!n.previous)return'<div class="record-flag">\u9996\u6B21\u901A\u5173 \xB7 \u6210\u7EE9\u5DF2\u8BB0\u5F55</div>';let t=[];return n.newTime&&t.push("\u6700\u5FEB\u7528\u65F6"),n.newScore&&t.push("\u6700\u9AD8\u5F97\u5206"),n.newStars&&t.push("\u661F\u7EA7\u63D0\u5347"),t.length?`<div class="record-flag">\u65B0\u7EAA\u5F55 \xB7 ${t.join(" / ")}</div>`:""}var l_=n=>(n.levels||[]).map(t=>{let e=t.best?Math.max(0,Math.min(3,Number(t.best.stars)||0)):0,i="\u2605".repeat(e)+'<span class="off">'+"\u2605".repeat(3-e)+"</span>",s=t.best?mi(t.best.time):"--:--";return`<div class="review-row"><span>\u7B2C ${t.index+1} \u5173 \xB7 ${t.name}</span><span class="review-stars">${i}</span><b>${s}</b></div>`}).join(""),c_=n=>(n.levels||[]).map(t=>{let e=t.best?Math.max(0,Math.min(3,Number(t.best.stars)||0)):0,i=t.best?`\u6700\u4F73 ${mi(t.best.time)} \xB7 ${t.best.score} \u5206`:"\u5C1A\u65E0\u8BB0\u5F55",s="\u2605".repeat(e)+'<span class="off">'+"\u2605".repeat(3-e)+"</span>";return`<button class="level-card" data-action="level" data-level="${t.index}" ${t.unlocked?"":"disabled"}>
    <span class="lc-num">LEVEL 0${t.index+1}</span>
    <span class="lc-name">${t.name}</span>
    <span class="lc-sub">${t.subtitle}</span>
    <span class="stars" style="font-size:13px">${s}</span>
    <span class="lc-best">${i}</span>
    ${t.unlocked?"":'<span class="lc-lock">\u672A\u89E3\u9501</span>'}
  </button>`}).join(""),h_={menu:n=>`
    <div class="modal-tag">MARBLE MAZE \xB7 3D</div>
    <h1>3D \u5F39\u73E0\u8FF7\u5BAB</h1>
    <p class="modal-lead">\u503E\u659C\u6574\u5EA7\u8FF7\u5BAB\uFF0C\u8BA9\u5F39\u73E0\u9760\u7740\u91CD\u529B\u4E0E\u60EF\u6027\u6EDA\u8FC7\u5899\u4F53\u3001\u7ED5\u5F00\u9677\u9631\uFF0C\u62B5\u8FBE\u91D1\u8272\u5149\u67F1\u6807\u8BB0\u7684\u7EC8\u70B9\u3002</p>
    <div class="difficulty-row">
      <span>\u96BE\u5EA6</span>
      <button type="button" data-action="difficulty" data-mode="relaxed" class="diff-chip${n.difficulty==="relaxed"?" active":""}">\u8F7B\u677E</button>
      <button type="button" data-action="difficulty" data-mode="standard" class="diff-chip${n.difficulty==="standard"?" active":""}">\u6807\u51C6</button>
      <button type="button" data-action="difficulty" data-mode="challenge" class="diff-chip${n.difficulty==="challenge"?" active":""}">\u6311\u6218</button>
      ${n.assist?"<em>\u8F85\u52A9\u6863 \xB7 \u6210\u7EE9\u5355\u72EC\u8BB0\u5F55</em>":""}
    </div>
    <div class="modal-cols">
      <div>
        <h3>\u600E\u4E48\u73A9</h3>
        <ul class="modal-list">
          <li>\u952E\u76D8\u3001\u9F20\u6807\u6216\u624B\u673A\u4F53\u611F\u63A7\u5236\u503E\u659C\uFF0C\u677E\u624B\u81EA\u52A8\u56DE\u6B63</li>
          <li>\u5F39\u73E0\u6709\u60EF\u6027\u4E0E\u6EDA\u52A8\u6469\u64E6\uFF0C\u649E\u5899\u4F1A\u53CD\u5F39\u51CF\u901F</li>
          <li>\u9752\u8272\u68C0\u67E5\u70B9\u6FC0\u6D3B\u540E\uFF0C\u5931\u8D25\u53EF\u5C31\u5730\u590D\u6D3B</li>
          <li>\u6A59\u8272\u7BAD\u5934\u52A0\u901F\u5E26\u52A9\u63A8\u3001\u6D45\u84DD\u51B0\u9762\u6253\u6ED1</li>
          <li>\u9ED1\u8272\u7A7A\u6D1E\u4F1A\u5760\u843D\uFF0C\u7EA2\u8272\u7194\u5CA9\u89E6\u78B0\u5373\u5931\u8D25</li>
        </ul>
      </div>
      <div><h3>\u64CD\u4F5C</h3>${a_()}</div>
    </div>
    <div class="modal-section-title">\u9009\u62E9\u5173\u5361 \xB7 \u7D2F\u8BA1 ${n.totalStars||0} / ${n.maxStars||9} \u2605 \xB7 \u751F\u6DAF\u901A\u5173 ${n.clearCount||0} \u6B21 \xB7 \u6E38\u73A9 ${n_(n.playTime)}</div>
    <div class="level-picker">${c_(n)}</div>
    <button class="primary-btn" data-action="start">\u4ECE\u7B2C 1 \u5173\u5F00\u59CB <span>\u21B5</span></button>
    <p class="modal-foot">\u7EAF\u524D\u7AEF\u8FD0\u884C \xB7 \u65E0\u9700\u8054\u7F51 \xB7 \u6240\u6709\u753B\u9762\u4E0E\u97F3\u6548\u5747\u7531\u4EE3\u7801\u751F\u6210${n.persistent===!1?" \xB7 \u672C\u673A\u5B58\u50A8\u4E0D\u53EF\u7528\uFF0C\u6210\u7EE9\u4EC5\u672C\u6B21\u6709\u6548":""}</p>`,paused:n=>`
    <div class="modal-tag">PAUSED</div>
    <h1>\u5DF2\u6682\u505C</h1>
    <p class="modal-lead">\u7B2C ${n.levelIndex+1} \u5173 \xB7 ${n.name}\u3000|\u3000\u7528\u65F6 ${mi(n.elapsed)}\u3000|\u3000\u5F53\u524D\u603B\u5206 ${n.score}</p>
    ${pr([["\u603B\u5206",n.score],["\u672C\u5173\u9884\u4F30",`+${n.reward}`],["\u78B0\u649E",n.hits],["\u5B9D\u77F3",`${n.gemsGot} / ${n.gemsTotal}`],["\u5269\u4F59\u751F\u547D",n.lives]])}
    <div class="modal-btns">
      <button class="primary-btn" data-action="resume">\u7EE7\u7EED\u6E38\u620F <span>P</span></button>
      <button class="ghost-btn" data-action="restart">\u91CD\u5F00\u672C\u5173 <span>R</span></button>
    </div>`,levelclear:n=>`
    <div class="modal-tag success">LEVEL CLEAR</div>
    <h1>\u7B2C ${n.levelIndex+1} \u5173\u901A\u8FC7</h1>
    <p class="modal-lead">${n.name}\u3000\xB7\u3000\u7528\u65F6 ${mi(n.elapsed)}</p>
    ${Fu(n.stars)}
    ${Ou(n.rec)}
    <div class="stars-row">\u7D2F\u8BA1\u661F\u7EA7 <b>${n.totalStars}</b> / ${n.maxStars}</div>
    ${o_(n)}
    ${pr([["\u7528\u65F6",mi(n.elapsed)],["\u78B0\u649E",n.hits],["\u5B9D\u77F3",`${n.gemsGot} / ${n.gemsTotal}`],["\u672C\u5173\u7ED3\u7B97",`+${n.levelScore}`],["\u7D2F\u8BA1\u603B\u5206",n.score],["\u6700\u4F73\u7528\u65F6",n.best?mi(n.best.time):"\u2014"]])}
    <button class="primary-btn" data-action="next">\u8FDB\u5165\u7B2C ${n.levelIndex+2} \u5173 <span>\u21B5</span></button>`,gameclear:n=>`
    <div class="modal-tag success">ALL CLEAR</div>
    <h1>\u5168\u90E8\u901A\u5173</h1>
    <p class="modal-lead">\u4E09\u5EA7\u8FF7\u5BAB\u5168\u90E8\u8D70\u5B8C\uFF0C\u5F39\u73E0\u7A33\u7A33\u843D\u5730\u3002</p>
    <div class="clear-title">${n.title||"\u5F39\u73E0\u4E13\u5BB6"}</div>
    ${Fu(n.stars)}
    ${Ou(n.rec)}
    <div class="stars-row">\u7D2F\u8BA1\u661F\u7EA7 <b>${n.totalStars}</b> / ${n.maxStars} \xB7 ${n.difficultyLabel||"\u6807\u51C6"}${n.assist?"\uFF08\u8F85\u52A9\u6863\uFF09":""}</div>
    <div class="clear-review">${l_(n)}</div>
    ${pr([["\u6700\u7EC8\u603B\u5206",n.score],["\u603B\u7528\u65F6",mi(n.totalTime)],["\u603B\u78B0\u649E",n.totalHits],["\u5269\u4F59\u751F\u547D",n.lives]])}
    <textarea class="score-card" id="scoreCard" readonly>${n.cardText||""}</textarea>
    <div class="modal-btns">
      <button class="primary-btn" data-action="again">\u518D\u73A9\u4E00\u6B21 <span>\u21B5</span></button>
      <button class="ghost-btn" data-action="copy-card">\u590D\u5236\u6210\u7EE9\u5361</button>
      <button class="ghost-btn" data-action="menu">\u8FD4\u56DE\u4E3B\u83DC\u5355</button>
    </div>`,failed:n=>`
    <div class="modal-tag danger">FAILED</div>
    <h1>${n.reason}</h1>
    <p class="modal-lead">${n.hasCheckpoint?`${n.checkpointName} \u5DF2\u6FC0\u6D3B\uFF0C\u590D\u6D3B\u540E\u4FDD\u7559\u672C\u5173\u7528\u65F6\u3001\u5B9D\u77F3\u4E0E\u78B0\u649E\u8BB0\u5F55\uFF1B\u6309 R \u53EF\u4ECE\u8D77\u70B9\u5F7B\u5E95\u91CD\u5F00\u3002`:"\u522B\u6025\uFF0C\u6536\u5C0F\u503E\u89D2\u3001\u63D0\u524D\u51CF\u901F\u4F1A\u597D\u8D70\u5F88\u591A\uFF1B\u6309\u4F4F Shift \u53EF\u7CBE\u7EC6\u5FAE\u8C03\u3002"}\u5269\u4F59\u751F\u547D ${n.lives}\u3002</p>
    ${pr([["\u672C\u5173\u7528\u65F6",mi(n.elapsed)],["\u5DF2\u7ED3\u7B97\u603B\u5206",n.score],["\u672C\u5173\u672A\u7ED3\u7B97",`+${n.reward}`],["\u5269\u4F59\u751F\u547D",n.lives]])}
    <div class="modal-btns">
      <button class="primary-btn" data-action="retry">${n.hasCheckpoint?"\u4ECE\u68C0\u67E5\u70B9\u590D\u6D3B":"\u91CD\u8BD5\u672C\u5173"} <span>\u21B5</span></button>
      <button class="ghost-btn" data-action="menu">\u8FD4\u56DE\u4E3B\u83DC\u5355</button>
    </div>`,gameover:n=>`
    <div class="modal-tag danger">GAME OVER</div>
    <h1>\u751F\u547D\u7528\u5C3D</h1>
    <p class="modal-lead">\u8FD9\u6B21\u505C\u5728\u4E86\u7B2C ${n.levelIndex+1} \u5173 \xB7 ${n.name}\u3002</p>
    ${pr([["\u6700\u7EC8\u603B\u5206",n.score],["\u603B\u7528\u65F6",mi(n.totalTime)],["\u603B\u78B0\u649E",n.totalHits]])}
    <div class="modal-btns">
      <button class="primary-btn" data-action="again">\u91CD\u65B0\u5F00\u59CB <span>\u21B5</span></button>
      <button class="ghost-btn" data-action="menu">\u8FD4\u56DE\u4E3B\u83DC\u5355</button>
    </div>`};var bo=class{constructor(){this.ctx=null,this.master=null,this.muted=!1}ensure(){if(this.muted)return!1;if(!this.ctx){let t=globalThis.AudioContext||globalThis.webkitAudioContext;if(!t)return!1;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.5,this.master.connect(this.ctx.destination)}return this.ctx.state==="suspended"&&this.ctx.resume(),!0}tone(t,e,i={}){if(!this.ensure())return;let s=this.ctx.currentTime+(i.delay||0),r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type=i.type||"sine",r.frequency.setValueAtTime(Math.max(20,t),s),i.to&&r.frequency.exponentialRampToValueAtTime(Math.max(20,i.to),s+e);let o=Math.max(.001,i.vol??.12);a.gain.setValueAtTime(1e-4,s),a.gain.exponentialRampToValueAtTime(o,s+Math.min(.015,e*.2)),a.gain.exponentialRampToValueAtTime(1e-4,s+e),r.connect(a),a.connect(this.master),r.start(s),r.stop(s+e+.03)}bump(t){let e=Math.min(.16,.035+t*.012);this.tone(130,.13,{type:"triangle",to:72,vol:e})}pickup(){this.tone(660,.11,{type:"sine",vol:.12}),this.tone(990,.16,{type:"sine",vol:.11,delay:.08})}checkpoint(){this.tone(784,.28,{type:"sine",vol:.1}),this.tone(1175,.36,{type:"sine",vol:.09,delay:.07}),this.tone(1568,.24,{type:"triangle",vol:.035,delay:.14})}boost(){this.tone(240,.22,{type:"sawtooth",to:920,vol:.07}),this.tone(480,.16,{type:"triangle",to:1320,vol:.05,delay:.03})}ice(){this.tone(1320,.45,{type:"sine",to:880,vol:.055}),this.tone(1760,.38,{type:"sine",to:1180,vol:.035,delay:.04})}fall(){this.tone(420,.65,{type:"sawtooth",to:70,vol:.1}),this.tone(210,.7,{type:"sine",to:55,vol:.08,delay:.04})}fail(){this.tone(240,.28,{type:"square",to:150,vol:.07}),this.tone(170,.42,{type:"triangle",to:90,vol:.09,delay:.18})}win(){[523,659,784,1046].forEach((t,e)=>{this.tone(t,.3,{type:"sine",vol:.11,delay:e*.1})})}clearAll(){[523,659,784,1046,1318].forEach((t,e)=>{this.tone(t,.42,{type:"triangle",vol:.1,delay:e*.13})})}click(){this.tone(520,.07,{type:"sine",vol:.07})}warn(){this.tone(880,.09,{type:"square",vol:.045})}toggleMute(){return this.muted=!this.muted,this.muted||this.ensure(),this.muted}};var ls=19,f_=.72,p_=1.02,zu=.26,m_=9.5,g_=.42*.25,__=2.4,x_=.11,Eo=class{constructor(t){this.level=t,this.reset()}reset(t=null){let e=t||this.level.start;this.x=e.x,this.z=e.z,this.vx=0,this.vz=0,this.tiltX=0,this.tiltZ=0,this.targetX=0,this.targetZ=0,this.hitCooldown=0,this.boostCooldown=0,this.onIce=!1,this.spinAxis={x:1,y:0,z:0},this.spinAngle=0}respawn(t){this.reset(t)}setAxis(t,e,i){let s=Math.hypot(t,e),r=s>1?1/s:1,a=t*r,o=e*r;this.targetZ=-a*i,this.targetX=o*i}resolveWalls(t){let e=.42,i=this.level.walls;for(let s=0;s<2;s++){let r=!1;for(let a=0;a<i.length;a++){let o=i[a],l=Math.max(o.minX,Math.min(this.x,o.maxX)),c=Math.max(o.minZ,Math.min(this.z,o.maxZ)),h=this.x-l,d=this.z-c,u=h*h+d*d;if(u>=e*e)continue;r=!0;let f,g,y;if(u>1e-10){let m=Math.sqrt(u);f=h/m,g=d/m,y=e-m}else{let m=this.x-o.minX,v=o.maxX-this.x,E=this.z-o.minZ,S=o.maxZ-this.z,A=Math.min(m,v,E,S);A===m?(f=-1,g=0):A===v?(f=1,g=0):A===E?(f=0,g=-1):(f=0,g=1),y=e+A}this.x+=f*y,this.z+=g*y;let p=this.vx*f+this.vz*g;if(p<0){let m=-p;this.vx-=(1+zu)*p*f,this.vz-=(1+zu)*p*g,this.vx*=.99,this.vz*=.99,m>__&&this.hitCooldown<=0&&(t.hits+=1,t.hitSpeed=Math.max(t.hitSpeed,m),this.hitCooldown=x_)}}if(!r)break}}step(t,e){let i={hits:0,hitSpeed:0,fell:-1,hazard:-1,gems:[],goal:!1,checkpoint:-1,boost:-1,ice:!1},s=this.level,r=1-Math.exp(-m_*t);this.tiltX+=(this.targetX-this.tiltX)*r,this.tiltZ+=(this.targetZ-this.tiltZ)*r;let a=e.gravity*f_,o=-a*Math.sin(this.tiltZ),l=a*Math.cos(this.tiltZ)*Math.sin(this.tiltX);this.vx+=o*t,this.vz+=l*t;let c=!1;for(let p=0;p<s.iceZones.length;p++){let m=s.iceZones[p];if(Math.hypot(this.x-m.x,this.z-m.z)<m.r){c=!0;break}}this.onIce=c,i.ice=c;let h=Math.exp(-p_*(c?.22:1)*t);this.vx*=h,this.vz*=h,!this.targetX&&!this.targetZ&&Math.hypot(this.vx,this.vz)<.035&&(this.vx=0,this.vz=0);let d=Math.hypot(this.vx,this.vz);if(d>ls){let p=ls/d;this.vx*=p,this.vz*=p,d=ls}this.hitCooldown>0&&(this.hitCooldown-=t),this.boostCooldown>0&&(this.boostCooldown-=t);let u=Math.max(1,Math.ceil(d*t/g_)),f=t/u;for(let p=0;p<u;p++)this.x+=this.vx*f,this.z+=this.vz*f,this.resolveWalls(i);let g=this.level.width/2-.42-.02,y=this.level.depth/2-.42-.02;this.x<-g&&(this.x=-g,this.vx<0&&(this.vx=0)),this.x>g&&(this.x=g,this.vx>0&&(this.vx=0)),this.z<-y&&(this.z=-y,this.vz<0&&(this.vz=0)),this.z>y&&(this.z=y,this.vz>0&&(this.vz=0));for(let p=0;p<s.boosts.length;p++){let m=s.boosts[p];if(!(Math.hypot(this.x-m.x,this.z-m.z)>=m.r)){if(this.boostCooldown<=0){this.vx+=m.dirX*2.2,this.vz+=m.dirZ*2.2;let v=Math.hypot(this.vx,this.vz);v>ls&&(this.vx*=ls/v,this.vz*=ls/v),this.boostCooldown=1,i.boost=p}break}}d=Math.hypot(this.vx,this.vz),d>.001?(this.spinAxis={x:this.vz/d,y:0,z:-this.vx/d},this.spinAngle=d*t/.42):this.spinAngle=0;for(let p=0;p<s.holes.length;p++){let m=s.holes[p];if(Math.hypot(this.x-m.x,this.z-m.z)<m.r*.72){i.fell=p;break}}if(i.fell<0)for(let p=0;p<s.hazards.length;p++){let m=s.hazards[p];if(Math.hypot(this.x-m.x,this.z-m.z)<m.r*.8){i.hazard=p;break}}if(i.fell<0&&i.hazard<0){for(let p=0;p<s.gems.length;p++){let m=s.gems[p];!m.taken&&Math.hypot(this.x-m.x,this.z-m.z)<m.r+.42*.55&&(m.taken=!0,i.gems.push(p))}for(let p=0;p<s.checkpoints.length;p++){let m=s.checkpoints[p];if(!m.active&&Math.hypot(this.x-m.x,this.z-m.z)<m.r+.42*.35){m.active=!0,i.checkpoint=p;break}}Math.hypot(this.x-s.goal.x,this.z-s.goal.z)<.76*.8&&(i.goal=!0)}return i}};var ku="marble-maze-3d.records.v1";var Hu=["tilt","checkpoint","boost","ice","goal"],uc=["standard","relaxed","challenge"];var v_=/^([0-9]+)(?::(relaxed|challenge))?$/;function Gu(n,t){return t&&t!=="standard"?`${n}:${t}`:String(n)}function y_(n){let t={};if(!n||typeof n!="object"||Array.isArray(n))return t;for(let e of Hu)n[e]===!0&&(t[e]=!0);return t}function M_(n){let t={};if(!n||typeof n!="object"||Array.isArray(n))return t;for(let[e,i]of Object.entries(n)){if(!v_.test(e)||!i||typeof i!="object")continue;let s=Number(i.time);if(!Number.isFinite(s)||s<0||s>86400)continue;let r=Number(i.score),a=Number(i.stars);t[e]={time:s,score:Number.isFinite(r)?Math.max(0,Math.min(1e9,r)):0,stars:Number.isFinite(a)?Math.max(0,Math.min(3,Math.floor(a))):0}}return t}function S_(n){let t={clears:0,playTime:0};if(!n||typeof n!="object"||Array.isArray(n))return t;let e=Number(n.clears),i=Number(n.playTime);return t.clears=Number.isFinite(e)?Math.max(0,Math.min(1e7,Math.floor(e))):0,t.playTime=Number.isFinite(i)?Math.max(0,Math.min(1e9,i)):0,t}var To=class{constructor(){this.persistent=!0,this.data={v:1,best:{},unlocked:1,hints:{},difficulty:"standard",stats:{clears:0,playTime:0}};try{let t=globalThis.localStorage,e=t&&t.getItem(ku);if(e){let i=null;try{i=JSON.parse(e)}catch{i=null}if(i&&typeof i=="object"){this.data.best=M_(i.best),this.data.hints=y_(i.hints),this.data.stats=S_(i.stats),uc.includes(i.difficulty)&&(this.data.difficulty=i.difficulty);let s=Number(i.unlocked);Number.isFinite(s)&&(this.data.unlocked=Math.max(1,Math.min(99,Math.floor(s))))}}}catch{this.persistent=!1}}save(){if(this.persistent)try{globalThis.localStorage.setItem(ku,JSON.stringify(this.data))}catch{this.persistent=!1}}best(t,e="standard"){let i=this.data.best[Gu(t,e)];return i&&Number.isFinite(i.time)?i:null}get unlocked(){return this.data.unlocked}get clearCount(){return this.data.stats.clears}get playTime(){return this.data.stats.playTime}addClear(){this.data.stats.clears=Math.min(1e7,this.data.stats.clears+1),this.save()}addPlayTime(t){let e=Number(t);!Number.isFinite(e)||e<=0||(this.data.stats.playTime=Math.min(1e9,this.data.stats.playTime+e))}flush(){this.save()}get difficulty(){return this.data.difficulty}setDifficulty(t){return!uc.includes(t)||this.data.difficulty===t?!1:(this.data.difficulty=t,this.save(),!0)}get totalStars(){return this.starsForMode("standard")}starsForMode(t){let e=0;for(let[i,s]of Object.entries(this.data.best))(i.includes(":")?i.split(":")[1]:"standard")===t&&(e+=Number(s.stars)||0);return e}unlock(t){t>this.data.unlocked&&(this.data.unlocked=t,this.save())}markHint(t){return!Hu.includes(t)||this.data.hints[t]===!0?!1:(this.data.hints[t]=!0,this.save(),!0)}hintSeen(t){return this.data.hints[t]===!0}submit(t,e){let i=uc.includes(e.mode)?e.mode:"standard",s=Gu(t,i),r=this.best(t,i),a={newTime:!r||e.time<r.time-1e-6,newScore:!r||e.score>r.score,newStars:!r||e.stars>r.stars,previous:r,mode:i};return this.data.best[s]={time:r?Math.min(r.time,e.time):e.time,score:r?Math.max(r.score,e.score):e.score,stars:r?Math.max(r.stars,e.stars):e.stars,mode:i},this.save(),a}};var Qe={standard:{id:"standard",label:"\u6807\u51C6",gravity:1,tilt:1,time:1,par:1,assist:!1},relaxed:{id:"relaxed",label:"\u8F7B\u677E",gravity:.78,tilt:.85,time:1.4,par:1.25,assist:!0},challenge:{id:"challenge",label:"\u6311\u6218",gravity:1.18,tilt:1.12,time:.85,par:.85,assist:!1}},wo=["standard","relaxed","challenge"];function dc(n){let t=wo.indexOf(n);return wo[(t+1+wo.length)%wo.length]}function Ao(n){return(Qe[n]||Qe.standard).label}function Vu(n,t){let e=Qe[t]||Qe.standard;return{...n,gravity:n.gravity*e.gravity,tiltMax:n.tiltMax*e.tilt,timeLimit:n.timeLimit>0?Math.round(n.timeLimit*e.time):0,par:n.par*e.par}}var kt={MENU:"menu",PLAYING:"playing",PAUSED:"paused",FAILING:"failing",FAILED:"failed",LEVELCLEAR:"levelclear",GAMECLEAR:"gameclear",GAMEOVER:"gameover"},Wu=n=>{let t=Math.max(0,Math.floor(n));return`${String(Math.floor(t/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`},Ro=class{constructor(t,e,i){this.view=t,this.ui=e,this.sfx=i,this.records=new To,this.difficulty=this.records.difficulty,this.state=kt.MENU,this.levelIndex=0,this.score=0,this.lives=3,this.totalTime=0,this.totalHits=0,this.elapsed=0,this.hits=0,this.gemsGot=0,this.fallProgress=0,this.lastLevelScore=0,this.lastBreakdown=null,this.lastStars=0,this.lastRecord=null,this.wasOnIce=!1,this.warnAt=-1,this.playFlushAccum=0,this.tiltHintDone=!1,this.pendingReason="",this.axis={x:0,z:0},this.loadLevel(0),this.ui.showOverlay("menu",this.menuData()),this.ui.setStatus("\u51C6\u5907\u5F00\u59CB","normal")}get cfg(){return Vu(Ke[this.levelIndex],this.difficulty)}get assistMode(){return!!(Qe[this.difficulty]||Qe.standard).assist}setDifficulty(t){return!Qe[t]||this.state!==kt.MENU||!this.records.setDifficulty(t)?!1:(this.difficulty=t,this.loadLevel(0),this.ui.showOverlay("menu",this.menuData()),this.ui.setStatus("\u51C6\u5907\u5F00\u59CB","normal"),this.sfx.click(),!0)}menuData(){let t=Qe[this.difficulty]||Qe.standard;return{levels:Ke.map((e,i)=>({index:i,name:e.name,subtitle:e.subtitle,unlocked:i<this.records.unlocked,best:this.records.best(e.id,this.difficulty)})),totalStars:this.records.starsForMode(this.difficulty),maxStars:Ke.length*3,difficulty:this.difficulty,difficultyLabel:t.label,assist:t.assist,persistent:this.records.persistent,clearCount:this.records.clearCount,playTime:this.records.playTime}}clearTitle(t){let i=([[9,"\u8FF7\u5BAB\u5927\u5E08"],[7,"\u5F39\u73E0\u4E13\u5BB6"],[5,"\u719F\u7EC3\u63A2\u9669\u5BB6"],[1,"\u521D\u51FA\u8305\u5E90"]].find(([s])=>t>=s)||[0,"\u521D\u51FA\u8305\u5E90"])[1];return this.assistMode?`${i} \xB7 \u8F7B\u677E\u6863`:i}scoreCardText(){let t=this.records.starsForMode(this.difficulty),e=Qe[this.difficulty]||Qe.standard,i=Ke.map((s,r)=>{let a=this.records.best(s.id,this.difficulty),o=a?"\u2605".repeat(a.stars)+"\u2606".repeat(3-a.stars):"\u2606\u2606\u2606",l=a?Wu(a.time):"--:--";return`\u7B2C${r+1}\u5173 ${s.name}  ${o}  ${l}`});return["3D \u5F39\u73E0\u8FF7\u5BAB \xB7 \u5168\u901A\u5173",`\u96BE\u5EA6\uFF1A${e.label}${this.assistMode?"\uFF08\u8F85\u52A9\u6863\uFF09":""}\u3000\u79F0\u53F7\uFF1A${this.clearTitle(t)}`,...i,`\u7D2F\u8BA1 ${t} / ${Ke.length*3} \u2605\u3000\u603B\u5206 ${this.score}\u3000\u603B\u7528\u65F6 ${Wu(this.totalTime)}\u3000\u603B\u78B0\u649E ${this.totalHits}`].join(`
`)}starsFor(t,e,i){return e<=t.par&&i<=t.parHits?3:e<=t.par*1.7&&i<=t.parHits*2?2:1}hintOnce(t,e,i="info"){return this.records.markHint(t)?(this.ui.toast(e,i),!0):!1}flushStats(){this.playFlushAccum=0,this.records.flush()}activeCheckpoint(){let t=null;for(let e of this.level.checkpoints)e.active&&(!t||e.order>t.order)&&(t=e);return t}rewardBreakdown(){let t=this.cfg,e=Math.round(this.elapsed*4),i=this.hits*5,s=this.gemsGot*150,r=t.timeLimit>0?Math.max(0,Math.floor((t.timeLimit-this.elapsed)*2)):0,a=Math.max(120,Math.round(1e3-e-i+s+r));return{timeCost:e,hitCost:i,gemBonus:s,timeBonus:r,total:a}}levelReward(){return this.rewardBreakdown().total}rewardDisplay(){return this.state===kt.MENU||this.state===kt.GAMEOVER?{text:"\u672C\u5173 +0",settled:!1}:this.state===kt.LEVELCLEAR||this.state===kt.GAMECLEAR?{text:`\u5DF2\u7ED3\u7B97 +${this.lastLevelScore}`,settled:!0}:{text:`\u672C\u5173 +${this.levelReward()}`,settled:!1}}loadLevel(t){this.levelIndex=t,this.level=Lu(this.cfg),this.level.solvable||console.warn("\u5173\u5361\u8FDE\u901A\u6027\u6821\u9A8C\u672A\u901A\u8FC7\uFF0C\u8BF7\u68C0\u67E5\u79CD\u5B50\u914D\u7F6E");for(let e of this.level.gems)e.taken=!1;this.marble=new Eo(this.level),this.elapsed=0,this.hits=0,this.gemsGot=0,this.fallProgress=0,this.warnAt=-1,this.wasOnIce=!1,this.axis={x:0,z:0},this.view.buildLevel(this.level),this.view.setGemsVisible(this.level),this.view.setCheckpointsActive(this.level),this.ui.setTip(Ke[t].tip),this.ui.setPauseLabel(!1),this.ui.clearTrail(),this.ui.flashLevel(),this.updateHUD()}updateHUD(){let t=this.rewardDisplay();this.ui.setStats({levelIndex:this.levelIndex,totalLevels:Ke.length,name:this.cfg.name,subtitle:this.cfg.subtitle,elapsed:this.elapsed,timeLimit:this.cfg.timeLimit,score:this.score,rewardText:t.text,rewardSettled:t.settled,hits:this.hits,gemsGot:this.gemsGot,gemsTotal:this.level.gems.length,lives:this.lives,checkpoints:this.level.checkpoints.filter(e=>e.active).length,checkpointsTotal:this.level.checkpoints.length})}setAxis(t,e){this.axis.x=t,this.axis.z=e,this.state===kt.PLAYING&&!this.tiltHintDone&&Math.abs(t)+Math.abs(e)>.12&&this.records.markHint("tilt")&&(this.tiltHintDone=!0,this.ui.toast("\u677E\u624B\u540E\u503E\u89D2\u4F1A\u81EA\u52A8\u56DE\u6B63 \xB7 \u6309\u4F4F Shift \u53EF\u7CBE\u7EC6\u5FAE\u8C03","info"))}start(t=0){this.score=0,this.lives=3,this.totalTime=0,this.totalHits=0,this.lastLevelScore=0,this.lastBreakdown=null,this.lastStars=0,this.lastRecord=null,this.loadLevel(t),this.state=kt.PLAYING,this.ui.hideOverlay(),this.ui.setStatus("\u6E38\u620F\u4E2D","normal"),this.ui.toast(`\u7B2C ${t+1} \u5173 \xB7 ${this.cfg.name}`,"info"),this.sfx.click()}startFrom(t){let e=Number(t);if(!(!Number.isInteger(e)||e<0||e>=Ke.length)){if(e>=this.records.unlocked){this.ui.toast("\u8BE5\u5173\u5361\u5C1A\u672A\u89E3\u9501","warn");return}this.start(e)}}restartLevel(){this.state===kt.MENU||this.state===kt.GAMECLEAR||this.state===kt.GAMEOVER||(this.loadLevel(this.levelIndex),this.state=kt.PLAYING,this.ui.hideOverlay(),this.ui.setStatus("\u6E38\u620F\u4E2D","normal"),this.ui.toast("\u672C\u5173\u5DF2\u91CD\u5F00 \xB7 \u56DE\u5230\u8D77\u70B9","info"),this.sfx.click())}retry(){let t=this.activeCheckpoint();t?(this.marble.respawn(t),this.fallProgress=0,this.warnAt=-1,this.wasOnIce=!1,this.axis={x:0,z:0},this.ui.clearTrail(),this.ui.toast("\u4ECE\u68C0\u67E5\u70B9\u590D\u6D3B","info")):(this.loadLevel(this.levelIndex),this.ui.toast("\u518D\u8BD5\u4E00\u6B21","info")),this.state=kt.PLAYING,this.ui.hideOverlay(),this.ui.setStatus("\u6E38\u620F\u4E2D","normal"),this.sfx.click(),this.updateHUD()}nextLevel(){this.loadLevel(this.levelIndex+1),this.state=kt.PLAYING,this.ui.hideOverlay(),this.ui.setStatus("\u6E38\u620F\u4E2D","normal"),this.ui.toast(`\u7B2C ${this.levelIndex+1} \u5173 \xB7 ${this.cfg.name}`,"info"),this.sfx.click()}togglePause(){this.state===kt.PLAYING?(this.state=kt.PAUSED,this.flushStats(),this.ui.setPauseLabel(!0),this.ui.setStatus("\u5DF2\u6682\u505C","warn"),this.ui.showOverlay("paused",{levelIndex:this.levelIndex,name:this.cfg.name,elapsed:this.elapsed,score:this.score,reward:this.levelReward(),hits:this.hits,gemsGot:this.gemsGot,gemsTotal:this.level.gems.length,lives:this.lives}),this.sfx.click()):this.state===kt.PAUSED&&this.resume()}resume(){this.state===kt.PAUSED&&(this.state=kt.PLAYING,this.ui.hideOverlay(),this.ui.setPauseLabel(!1),this.ui.setStatus("\u6E38\u620F\u4E2D","normal"),this.sfx.click())}advance(){switch(this.state){case kt.MENU:this.start();break;case kt.PAUSED:this.resume();break;case kt.LEVELCLEAR:this.nextLevel();break;case kt.FAILED:this.retry();break;case kt.GAMECLEAR:case kt.GAMEOVER:this.start();break;default:break}}toMenu(){this.flushStats(),this.score=0,this.lives=3,this.totalTime=0,this.totalHits=0,this.lastLevelScore=0,this.lastBreakdown=null,this.state=kt.MENU,this.loadLevel(0),this.ui.showOverlay("menu",this.menuData()),this.ui.setStatus("\u51C6\u5907\u5F00\u59CB","normal"),this.sfx.click()}beginFall(t){this.state===kt.PLAYING&&(this.pendingReason=t,this.state=kt.FAILING,this.fallProgress=0,this.axis={x:0,z:0},this.marble.setAxis(0,0,this.cfg.tiltMax),this.ui.setStatus("\u5F39\u73E0\u5760\u843D","danger"),this.sfx.fall())}fail(t){if(this.state===kt.FAILED||this.state===kt.GAMEOVER)return;this.lives-=1,this.flushStats(),this.sfx.fail(),this.ui.setStatus("\u5931\u8D25","danger");let e=this.activeCheckpoint();this.lives<=0?(this.state=kt.GAMEOVER,this.ui.showOverlay("gameover",{levelIndex:this.levelIndex,name:this.cfg.name,score:this.score,totalTime:this.totalTime,totalHits:this.totalHits})):(this.state=kt.FAILED,this.ui.showOverlay("failed",{reason:t,lives:this.lives,elapsed:this.elapsed,score:this.score,reward:this.levelReward(),hasCheckpoint:!!e,checkpointName:e?`\u68C0\u67E5\u70B9 ${e.order+1}`:""})),this.updateHUD()}clearLevel(){this.lastBreakdown=this.rewardBreakdown(),this.lastLevelScore=this.lastBreakdown.total,this.score+=this.lastLevelScore,this.ui.setStatus("\u901A\u5173","good");let t=this.starsFor(this.cfg,this.elapsed,this.hits);this.records.addClear();let e=this.records.submit(this.cfg.id,{time:this.elapsed,score:this.lastLevelScore,stars:t,mode:this.difficulty});this.records.unlock(Math.min(Ke.length,this.levelIndex+2)),this.flushStats(),this.lastStars=t,this.lastRecord=e,this.view.burstGoal();let i={levelIndex:this.levelIndex,name:this.cfg.name,elapsed:this.elapsed,hits:this.hits,gemsGot:this.gemsGot,gemsTotal:this.level.gems.length,levelScore:this.lastLevelScore,score:this.score,b:this.lastBreakdown,stars:t,rec:e,best:this.records.best(this.cfg.id,this.difficulty),totalStars:this.records.starsForMode(this.difficulty),maxStars:Ke.length*3,difficulty:this.difficulty,difficultyLabel:Qe[this.difficulty].label,assist:this.assistMode,levels:Ke.map((r,a)=>({index:a,name:r.name,best:this.records.best(r.id,this.difficulty)}))},s=this.levelIndex+1>=Ke.length;this.state=s?kt.GAMECLEAR:kt.LEVELCLEAR,s?(this.sfx.clearAll(),this.ui.showOverlay("gameclear",{...i,totalTime:this.totalTime,totalHits:this.totalHits,lives:this.lives,title:this.clearTitle(i.totalStars),cardText:this.scoreCardText()})):(this.sfx.win(),this.ui.showOverlay("levelclear",i)),this.updateHUD()}handleEvents(t){if(t.hits>0&&(this.hits+=t.hits,this.totalHits+=t.hits,this.sfx.bump(t.hitSpeed),this.ui.shake(t.hitSpeed)),t.gems.length&&(this.gemsGot+=t.gems.length,this.sfx.pickup(),this.view.setGemsVisible(this.level)),t.checkpoint>=0&&(this.sfx.checkpoint(),this.view.setCheckpointsActive(this.level),this.hintOnce("checkpoint","\u68C0\u67E5\u70B9\u5DF2\u6FC0\u6D3B \xB7 \u5931\u8D25\u540E\u53EF\u4ECE\u8FD9\u91CC\u590D\u6D3B\uFF0C\u8FDB\u5EA6\u4F1A\u4FDD\u7559","good")),t.boost>=0&&(this.sfx.boost(),this.hintOnce("boost","\u52A0\u901F\u5E26 \xB7 \u6CBF\u6A59\u8272\u7BAD\u5934\u65B9\u5411\u7ED9\u5F39\u73E0\u4E00\u6B21\u63A8\u529B\uFF0C\u6CE8\u610F\u63D0\u524D\u56DE\u6B63","info")),t.ice&&!this.wasOnIce&&(this.sfx.ice(),this.hintOnce("ice","\u51B0\u9762 \xB7 \u6469\u64E6\u5927\u5E45\u964D\u4F4E\uFF0C\u60EF\u6027\u4F1A\u88AB\u653E\u5927\uFF0C\u6536\u5C0F\u503E\u89D2\u63D0\u524D\u51CF\u901F","info")),this.wasOnIce=t.ice,t.fell>=0){this.beginFall("\u6389\u8FDB\u4E86\u7A7A\u6D1E");return}if(t.hazard>=0){this.beginFall("\u89E6\u78B0\u7194\u5CA9\u533A");return}t.gems.length&&this.ui.toast(`\u5B9D\u77F3 +${t.gems.length*150}`,"good"),t.goal&&this.clearLevel()}update(t){if(this.state===kt.PLAYING){this.elapsed+=t,this.totalTime+=t,this.records.addPlayTime(t),this.playFlushAccum+=t,this.playFlushAccum>=5&&this.flushStats();let e=this.cfg.timeLimit;if(e>0){let s=e-this.elapsed;if(s<=0){this.fail("\u65F6\u95F4\u8017\u5C3D");return}let r=Math.ceil(s);r<=10&&r!==this.warnAt&&(this.warnAt=r,this.sfx.warn())}this.marble.setAxis(this.axis.x,this.axis.z,this.cfg.tiltMax);let i=this.marble.step(t,this.cfg);this.handleEvents(i),(this.state===kt.PLAYING||this.state===kt.FAILING)&&this.updateHUD()}else this.state===kt.FAILING&&(this.fallProgress=Math.min(1,this.fallProgress+t*1.5),this.fallProgress>=1&&this.fail(this.pendingReason))}};var fc=.008333333333333333,Co=.25,b_=30,Io=class{constructor(t=fc){this.step=t,this.acc=0,this.totalWall=0,this.totalSim=0,this.lastSteps=0}reset(){this.acc=0,this.lastSteps=0}advance(t){let e=Math.max(0,Math.min(Co,t));this.totalWall+=e,this.acc=Math.min(Co,this.acc+e);let i=0;for(;this.acc+1e-12>=this.step&&i<b_;)this.acc-=this.step,i+=1;return this.lastSteps=i,this.totalSim+=i*this.step,i}get lag(){return this.totalWall-this.totalSim}};var pc=["high","medium","low"],Po=["auto","high","medium","low"],mc={auto:"\u753B\u8D28 \u81EA\u52A8",high:"\u753B\u8D28 \u9AD8",medium:"\u753B\u8D28 \u4E2D",low:"\u753B\u8D28 \u4F4E"},Xu=30,E_=45,T_=2500;function w_(n,t){let e=Math.max(0,pc.indexOf(n));return t<25?"low":t<42?pc[Math.min(2,e+1)]:t>55?pc[Math.max(0,e-1)]:n}var Lo=class{constructor(t,e=()=>{}){this.view=t,this.onChange=e,this.mode="auto",this.level="high",this.samples=[],this.lastChange=-1/0,this.changes=0,this.view.setQuality("high"),this.onChange(this.mode,this.level)}label(){return mc[this.mode]}setMode(t){return Po.includes(t)?(this.mode=t,this.samples=[],this.lastChange=-1/0,t!=="auto"&&(this.level=t,this.view.setQuality(t)),this.onChange(this.mode,this.level),this.label()):this.label()}cycle(){let t=Po.indexOf(this.mode);return this.setMode(Po[(t+1)%Po.length])}sample(t,e){if(this.mode!=="auto"||!(t>0)||(this.samples.push(t),this.samples.length>E_&&this.samples.shift(),this.samples.length<Xu)||e-this.lastChange<T_)return!1;let i=this.samples.reduce((a,o)=>a+o,0)/this.samples.length,s=1/Math.max(i,1e-6),r=w_(this.level,s);return r===this.level?!1:(this.level=r,this.view.setQuality(r),this.lastChange=e,this.changes+=1,this.samples=[],this.onChange(this.mode,this.level),!0)}probe(t,e){return this.mode!=="auto"?!1:(this.samples=new Array(Xu).fill(1/Math.max(t,1e-6)),this.sample(1/Math.max(t,1e-6),e))}};var gi=document.getElementById("scene");function qu(n,t){let e=document.getElementById("modal"),i=document.getElementById("overlay");e&&(e.innerHTML=`<div class="modal-tag danger">GRAPHICS</div>
      <h1>${n}</h1>
      <p class="modal-lead">${t}</p>
      <p class="modal-foot">\u672C\u6E38\u620F\u9700\u8981\u652F\u6301 WebGL2 \u7684\u6D4F\u89C8\u5668\uFF1B\u8BF7\u66F4\u65B0\u6D4F\u89C8\u5668\u6216\u5F00\u542F\u786C\u4EF6\u52A0\u901F\u540E\u91CD\u8BD5\u3002</p>`),i&&i.classList.add("visible");let s=document.getElementById("statusPill");s&&(s.textContent="\u56FE\u5F62\u4E0D\u53EF\u7528",s.dataset.tone="danger")}function A_(n){let t=new So,e=new bo,i=new Ro(n,t,e),s=new Lo(n,U=>t.setQualityLabel(mc[U])),r=new Set,a=new Set,o=new Set(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","KeyW","KeyA","KeyS","KeyD"]),l=new Set(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"]),c=new Set(["ShiftLeft","ShiftRight"]),h=28,d=null,u=null,f=!1,g=null,y=44;function p(){return r.has("ShiftLeft")||r.has("ShiftRight")}function m(){let U=0,C=0;return(r.has("ArrowLeft")||r.has("KeyA"))&&(U-=1),(r.has("ArrowRight")||r.has("KeyD"))&&(U+=1),(r.has("ArrowUp")||r.has("KeyW"))&&(C-=1),(r.has("ArrowDown")||r.has("KeyS"))&&(C+=1),{x:U,z:C}}let v=U=>Math.max(-1,Math.min(1,U/h));function E(){if(!u||!u.active)return null;let U=u.gamma||0,C=(u.beta||0)-30,F=screen.orientation&&screen.orientation.angle||window.orientation||0,X=U,nt=C;return F===90?(X=C,nt=-U):F===-90||F===270?(X=-C,nt=U):F===180&&(X=-U,nt=-C),{x:v(X),z:v(nt)}}async function S(){if(u){window.removeEventListener("deviceorientation",u.handler),clearTimeout(u.timer),u=null,t.setMotionLabel("off"),t.toast("\u4F53\u611F\u503E\u659C\u5DF2\u5173\u95ED","info");return}let U=window.DeviceOrientationEvent;if(!U){t.setMotionLabel("off"),t.toast("\u6B64\u8BBE\u5907\u4E0D\u652F\u6301\u9640\u87BA\u4EEA\uFF0C\u5DF2\u4FDD\u6301\u952E\u9F20\u64CD\u4F5C","warn");return}try{if(typeof U.requestPermission=="function"&&await U.requestPermission()!=="granted"){t.toast("\u4F53\u611F\u6743\u9650\u672A\u6388\u4E88","warn");return}}catch{t.toast("\u4F53\u611F\u6743\u9650\u8BF7\u6C42\u5931\u8D25\uFF0C\u5DF2\u4FDD\u6301\u952E\u9F20\u64CD\u4F5C","warn");return}let C={beta:0,gamma:0,active:!1,handler:null,timer:0};C.handler=F=>{F.beta==null&&F.gamma==null||(C.beta=F.beta||0,C.gamma=F.gamma||0,C.active=!0,clearTimeout(C.timer))},window.addEventListener("deviceorientation",C.handler),C.timer=setTimeout(()=>{C.active||(window.removeEventListener("deviceorientation",C.handler),u=null,t.setMotionLabel("off"),t.toast("\u672A\u68C0\u6D4B\u5230\u9640\u87BA\u4EEA\u6570\u636E\uFF0C\u5DF2\u81EA\u52A8\u5173\u95ED\u4F53\u611F","warn"))},2e3),u=C,t.setMotionLabel("on"),t.toast("\u4F53\u611F\u503E\u659C\u5DF2\u5F00\u542F \xB7 \u503E\u659C\u8BBE\u5907\u63A7\u5236\u8FF7\u5BAB","info")}function A(){let U=p(),C=U?.42:1,F=m(),X=!!(d&&d.mode==="tilt"),nt=!!g&&(g.dx||g.dz),vt=nt||X||F.x||F.z?null:E();nt?i.setAxis(g.dx*C,g.dz*C):vt?i.setAxis(vt.x*C,vt.z*C):X?i.setAxis(Math.max(-1,Math.min(1,d.dx/105))*C,Math.max(-1,Math.min(1,d.dy/105))*C):i.setAxis(F.x*C,F.z*C),t.setFineMode(U),t.setDifficultyLabel(`\u96BE\u5EA6 ${Ao(i.difficulty)}`,i.state!=="menu")}function T(U){U&&U.preventDefault&&U.preventDefault(),f=!0,(i.state==="playing"||i.state==="failing")&&i.togglePause(),t.setStatus("\u56FE\u5F62\u4E0A\u4E0B\u6587\u4E22\u5931","danger"),t.toast("\u56FE\u5F62\u4E0A\u4E0B\u6587\u4E22\u5931\uFF0C\u7B49\u5F85\u6062\u590D\u2026","warn")}function _(){f=!1,n.onContextRestored(),n.resize(),t.setStatus("\u5DF2\u6062\u590D","good"),t.toast("\u56FE\u5F62\u4E0A\u4E0B\u6587\u5DF2\u6062\u590D","good")}gi.addEventListener("webglcontextlost",T,!1),gi.addEventListener("webglcontextrestored",_,!1),window.addEventListener("keydown",U=>{if(l.has(U.code)&&U.preventDefault(),e.ensure(),(o.has(U.code)||c.has(U.code))&&r.add(U.code),!U.repeat)switch(U.code){case"KeyP":case"Escape":i.togglePause();break;case"KeyR":i.restartLevel();break;case"KeyM":t.setMuteLabel(e.toggleMute());break;case"Space":case"Enter":i.advance();break;default:break}}),window.addEventListener("keyup",U=>r.delete(U.code)),gi.addEventListener("pointerdown",U=>{e.ensure(),U.pointerType==="touch"&&a.add(U.pointerId),d={mode:U.button===2||U.pointerType==="touch"&&a.size>=2?"orbit":"tilt",sx:U.clientX,sy:U.clientY,lx:U.clientX,ly:U.clientY,dx:0,dy:0};try{gi.setPointerCapture(U.pointerId)}catch{}}),gi.addEventListener("pointermove",U=>{d&&(d.mode==="orbit"?n.orbit(U.clientX-d.lx,U.clientY-d.ly):(d.dx=U.clientX-d.sx,d.dy=U.clientY-d.sy),d.lx=U.clientX,d.ly=U.clientY)});let b=U=>{U&&U.pointerType==="touch"&&a.delete(U.pointerId),d=null};gi.addEventListener("pointerup",b),gi.addEventListener("pointercancel",b),gi.addEventListener("lostpointercapture",b),gi.addEventListener("contextmenu",U=>U.preventDefault()),gi.addEventListener("wheel",U=>{U.preventDefault(),n.zoomBy(Math.sign(U.deltaY)*.09)},{passive:!1});let L=document.getElementById("joystick"),I=U=>{if(!g)return;let C=L.getBoundingClientRect(),F=(U.clientX-(C.left+C.width/2))/y,X=(U.clientY-(C.top+C.height/2))/y,nt=Math.hypot(F,X),vt=nt>1?1/nt:1;g.dx=F*vt,g.dz=X*vt,t.setJoystick(g.dx,g.dz)},N=U=>{!g||U&&g.id!==U.pointerId||(g=null,t.setJoystick(0,0))};L.addEventListener("pointerdown",U=>{U.preventDefault(),e.ensure(),g={id:U.pointerId,dx:0,dz:0};try{L.setPointerCapture(U.pointerId)}catch{}I(U)}),L.addEventListener("pointermove",U=>{g&&g.id===U.pointerId&&I(U)}),L.addEventListener("pointerup",N),L.addEventListener("pointercancel",N),L.addEventListener("lostpointercapture",N),window.addEventListener("blur",()=>{r.clear(),a.clear(),d=null,i.state==="playing"&&i.togglePause()}),document.addEventListener("visibilitychange",()=>{document.hidden&&i.state==="playing"&&i.togglePause()}),window.addEventListener("resize",()=>n.resize()),document.getElementById("btnPause").addEventListener("click",()=>i.togglePause()),document.getElementById("btnRestart").addEventListener("click",()=>i.restartLevel()),document.getElementById("btnMute").addEventListener("click",()=>t.setMuteLabel(e.toggleMute())),document.getElementById("btnTilt").addEventListener("click",()=>{e.ensure(),S()}),document.getElementById("btnQuality").addEventListener("click",()=>{e.ensure();let U=s.cycle();t.toast(U,"info"),e.click()}),document.getElementById("btnDifficulty").addEventListener("click",()=>{e.ensure();let U=i.difficulty,C=dc(U);i.setDifficulty(C)?t.toast(`\u96BE\u5EA6 \xB7 ${Ao(C)}`,"info"):t.toast("\u96BE\u5EA6\u53EA\u80FD\u5728\u4E3B\u83DC\u5355\u5207\u6362","warn")}),document.getElementById("mapToggle").addEventListener("click",()=>t.toggleMap());async function z(){let U=document.getElementById("scoreCard"),C=U?U.value:i.scoreCardText(),F=!1;try{navigator.clipboard&&navigator.clipboard.writeText&&(await navigator.clipboard.writeText(C),F=!0)}catch{}if(!F&&U)try{U.select(),F=document.execCommand("copy")}catch{F=!1}return t.toast(F?"\u6210\u7EE9\u5361\u5DF2\u590D\u5236":"\u8BF7\u624B\u52A8\u9009\u62E9\u6210\u7EE9\u5361\u6587\u672C\u590D\u5236",F?"good":"warn"),F}let $={start:()=>i.start(),level:U=>i.startFrom(U.level),difficulty:U=>{i.setDifficulty(U.mode)&&t.toast(`\u96BE\u5EA6 \xB7 ${Ao(U.mode)}`,"info")},resume:()=>i.resume(),restart:()=>i.restartLevel(),retry:()=>i.retry(),next:()=>i.nextLevel(),again:()=>i.start(),"copy-card":()=>z(),menu:()=>i.toMenu()};document.getElementById("overlay").addEventListener("click",U=>{let C=U.target.closest("[data-action]");if(!C)return;e.ensure();let F=$[C.dataset.action];F&&F(C.dataset)});let R=new Io,k=performance.now(),W=0;function q(U){let C=Math.max(0,(U-k)/1e3);k=U;let F=Math.min(Co,C);A(),s.sample(C,U);let X=i.state==="playing"||i.state==="failing";X||R.reset();let nt=X?R.advance(C):0;for(let vt=0;vt<nt;vt++)i.update(fc);i.state==="playing"&&t.pushTrail(i.marble.x,i.marble.z),f||n.update(F,i.marble,{fall:i.fallProgress}),t.drawTilt(i.marble.tiltX,i.marble.tiltZ,i.cfg.tiltMax,p()),W%2===0&&t.drawMinimap(i.level,i.marble,i.elapsed),W+=1,requestAnimationFrame(q)}t.setMuteLabel(!1),t.setMotionLabel("off"),n.resize(),window.__marbleMaze={game:i,view:n,ui:t,clock:R,quality:s,motionAxis:E,toggleMotion:S,handleContextLost:T,handleContextRestored:_,showUnsupported:qu,cycleDifficulty:dc,copyScoreCard:z,setJoystick:(U,C)=>{let F=Math.hypot(U,C),X=F>1?1/F:1;g={id:-1,dx:U*X,dz:C*X},t.setJoystick(g.dx,g.dz)},clearJoystick:()=>{g=null,t.setJoystick(0,0)},joystickAxis:()=>g?{x:g.dx,z:g.dz}:null,isContextLost:()=>f},requestAnimationFrame(q)}try{A_(new yo(gi))}catch(n){qu("\u56FE\u5F62\u521D\u59CB\u5316\u5931\u8D25",String(n&&n.message||n||"\u672A\u77E5\u9519\u8BEF"))}})();
