(()=>{var Ah=0,Pl=1,Rh=2;var lr=1,Na=2,rs=3,an=0,Ie=1,me=2,yn=0,as=1,cr=2,Ll=3,Dl=4,Ch=5;var Mn=100,Ih=101,Ph=102,Lh=103,Dh=104,Nh=200,Uh=201,Fh=202,Oh=203,Nl=204,Ul=205,Bh=206,zh=207,kh=208,Hh=209,Gh=210,Vh=211,Wh=212,Xh=213,qh=214,Qr=0,jr=1,ta=2,Wn=3,ea=4,ia=5,na=6,sa=7,Fl=0,$h=1,Yh=2,Ri=0,Ol=1,Bl=2,zl=3,hr=4,kl=5,Hl=6,Gl=7;var Vl=300,Sn=301,os=302,ls=303,Ua=304,gn=1e3,Mi=1001,ra=1002,Te=1003,Zh=1004;var ur=1005;var ke=1006,Fa=1007;var Vi=1008;var Xe=1009,Wl=1010,Xl=1011,cs=1012,Oa=1013,mi=1014,oi=1015,gi=1016,Ba=1017,za=1018,bn=1020,ql=35902,$l=35899,Yl=1021,Zl=1022,_i=1023,Bi=1026,Wi=1027,ka=1028,Ha=1029,on=1030,Ga=1031;var Va=1033,dr=33776,fr=33777,pr=33778,mr=33779,Wa=35840,Xa=35841,qa=35842,$a=35843,Ya=36196,Za=37492,Ja=37496,Ka=37488,Qa=37489,gr=37490,ja=37491,to=37808,eo=37809,io=37810,no=37811,so=37812,ro=37813,ao=37814,oo=37815,lo=37816,co=37817,ho=37818,uo=37819,fo=37820,po=37821,mo=36492,go=36494,_o=36495,xo=36283,vo=36284,_r=36285,yo=36286;var Rs=2300,aa=2301,Jr=2302,vl=2303,yl=2400,Ml=2401,Sl=2402;var Jh=3200;var Mo=0,Kh=1,Xi="",Fe="srgb",Cs="srgb-linear",Is="linear",jt="srgb";var Kr=7680;var Qh=519,jh=512,tu=513,eu=514,Jl=515,iu=516,nu=517,Kl=518,Ql=519,su=35044;var jl="300 es",ai=2e3,Xn=2001;function bd(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Ed(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Ps(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ru(){let n=Ps("canvas");return n.style.display="block",n}var $c={},qn=null;function tc(...n){let t="THREE."+n.shift();qn?qn("log",t,...n):console.log(t,...n)}function au(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Pt(...n){n=au(n);let t="THREE."+n.shift();if(qn)qn("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Lt(...n){n=au(n);let t="THREE."+n.shift();if(qn)qn("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Ts(...n){let t=n.join(" ");t in $c||($c[t]=!0,Pt(...n))}function ou(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var lu={[Qr]:Qr,[ta]:na,[ea]:ea,[Wn]:ia,[jr]:jr,[na]:ta,[sa]:sa,[ia]:Wn},bi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Yo=Math.PI/180,oa=180/Math.PI;function hs(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ne[n&255]+Ne[n>>8&255]+Ne[n>>16&255]+Ne[n>>24&255]+"-"+Ne[t&255]+Ne[t>>8&255]+"-"+Ne[t>>16&15|64]+Ne[t>>24&255]+"-"+Ne[e&63|128]+Ne[e>>8&255]+"-"+Ne[e>>16&255]+Ne[e>>24&255]+Ne[i&255]+Ne[i>>8&255]+Ne[i>>16&255]+Ne[i>>24&255]).toLowerCase()}function Ht(n,t,e){return Math.max(t,Math.min(e,n))}function Td(n,t){return(n%t+t)%t}function Zo(n,t,e){return(1-e)*n+e*t}function cu(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ec(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function wd(n,t){if(t.constructor===Float32Array)return n;let e=ec(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/e,-1)}function Ad(n,t){if(t.constructor===Float32Array)return n;let e=ec(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*e)}var oc=class oc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ht(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ht(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};oc.prototype.isVector2=!0;var Mt=oc,Ze=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],f=i[s+3],u=r[a+0],d=r[a+1],g=r[a+2],x=r[a+3];if(f!==x||l!==u||c!==d||h!==g){let p=l*u+c*d+h*g+f*x;p<0&&(u=-u,d=-d,g=-g,x=-x,p=-p);let m=1-o;if(p<.9995){let y=Math.acos(p),E=Math.sin(y);m=Math.sin(m*y)/E,o=Math.sin(o*y)/E,l=l*m+u*o,c=c*m+d*o,h=h*m+g*o,f=f*m+x*o}else{l=l*m+u*o,c=c*m+d*o,h=h*m+g*o,f=f*m+x*o;let y=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=y,c*=y,h*=y,f*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],f=r[a],u=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+h*f+l*d-c*u,t[e+1]=l*g+h*u+c*f-o*d,t[e+2]=c*g+h*d+o*u-l*f,t[e+3]=h*g-o*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),f=o(r/2),u=l(i/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"YZX":this._x=u*h*f+c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f-u*d*g;break;case"XZY":this._x=u*h*f-c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f+u*d*g;break;default:Pt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=i+o+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(i>o&&i>f){let d=2*Math.sqrt(1+i-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){let d=2*Math.sqrt(1+o-i-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-i-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ht(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},lc=class lc{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Yc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Yc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),h=2*(o*e-r*s),f=2*(r*i-a*e);return this.x=e+l*c+a*f-o*h,this.y=i+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this.z=Ht(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this.z=Ht(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ht(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Jo.copy(this).projectOnVector(t),this.sub(Jo)}reflect(t){return this.sub(Jo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ht(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};lc.prototype.isVector3=!0;var F=lc,Jo=new F,Yc=new Ze,cc=class cc{constructor(t,e,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],f=i[7],u=i[2],d=i[5],g=i[8],x=s[0],p=s[3],m=s[6],y=s[1],E=s[4],S=s[7],A=s[2],T=s[5],_=s[8];return r[0]=a*x+o*y+l*A,r[3]=a*p+o*E+l*T,r[6]=a*m+o*S+l*_,r[1]=c*x+h*y+f*A,r[4]=c*p+h*E+f*T,r[7]=c*m+h*S+f*_,r[2]=u*x+d*y+g*A,r[5]=u*p+d*E+g*T,r[8]=u*m+d*S+g*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,g=e*f+i*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=f*x,t[1]=(s*c-h*i)*x,t[2]=(o*i-s*a)*x,t[3]=u*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=d*x,t[7]=(i*l-c*e)*x,t[8]=(a*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Ts("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ko.makeScale(t,e)),this}rotate(t){return Ts("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ko.makeRotation(-t)),this}translate(t,e){return Ts("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ko.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};cc.prototype.isMatrix3=!0;var Dt=cc,Ko=new Dt,Zc=new Dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jc=new Dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rd(){let n={enabled:!0,workingColorSpace:Cs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===jt&&(s.r=Oi(s.r),s.g=Oi(s.g),s.b=Oi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===jt&&(s.r=Gn(s.r),s.g=Gn(s.g),s.b=Gn(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Xi?Is:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Cs]:{primaries:t,whitePoint:i,transfer:Is,toXYZ:Zc,fromXYZ:Jc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Fe},outputColorSpaceConfig:{drawingBufferColorSpace:Fe}},[Fe]:{primaries:t,whitePoint:i,transfer:jt,toXYZ:Zc,fromXYZ:Jc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Fe}}}),n}var Xt=Rd();function Oi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Gn(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Rn,la=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Rn===void 0&&(Rn=Ps("canvas")),Rn.width=t.width,Rn.height=t.height;let s=Rn.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Rn}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ps("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Oi(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Oi(e[i]/255)*255):e[i]=Oi(e[i]);return{data:e,width:t.width,height:t.height}}else return Pt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Cd=0,$n=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=hs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Qo(s[a].image)):r.push(Qo(s[a]))}else r=Qo(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Qo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?la.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Pt("Texture: Unable to serialize Texture."),{})}var Id=0,jo=new F,He=class n extends bi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Mi,s=Mi,r=ke,a=Vi,o=_i,l=Xe,c=n.DEFAULT_ANISOTROPY,h=Xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=hs(),this.name="",this.source=new $n(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(jo).x}get height(){return this.source.getSize(jo).y}get depth(){return this.source.getSize(jo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Pt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Pt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case gn:t.x=t.x-Math.floor(t.x);break;case Mi:t.x=t.x<0?0:1;break;case ra:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case gn:t.y=t.y-Math.floor(t.y);break;case Mi:t.y=t.y<0?0:1;break;case ra:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=Vl;He.DEFAULT_ANISOTROPY=1;var hc=class hc{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],g=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,S=(d+1)/2,A=(m+1)/2,T=(h+u)/4,_=(f+x)/4,b=(g+p)/4;return E>S&&E>A?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=T/i,r=_/i):S>A?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=T/s,r=b/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=_/r,s=b/r),this.set(i,s,r,e),this}let y=Math.sqrt((p-g)*(p-g)+(f-x)*(f-x)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(f-x)/y,this.z=(u-h)/y,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this.z=Ht(this.z,t.z,e.z),this.w=Ht(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this.z=Ht(this.z,t,e),this.w=Ht(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ht(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};hc.prototype.isVector4=!0;var ce=hc,ca=class extends bi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ke,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new He({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:ke,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new $n(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Je=class extends ca{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Ls=class extends He{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Te,this.minFilter=Te,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ha=class extends He{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Te,this.minFilter=Te,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Da=class Da{constructor(t,e,i,s,r,a,o,l,c,h,f,u,d,g,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,h,f,u,d,g,x,p)}set(t,e,i,s,r,a,o,l,c,h,f,u,d,g,x,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=f,m[14]=u,m[3]=d,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Da().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/Cn.setFromMatrixColumn(t,0).length(),r=1/Cn.setFromMatrixColumn(t,1).length(),a=1/Cn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=a*h,d=a*f,g=o*h,x=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+g*c,e[5]=u-x*c,e[9]=-o*l,e[2]=x-u*c,e[6]=g+d*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,d=l*f,g=c*h,x=c*f;e[0]=u+x*o,e[4]=g*o-d,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=d*o-g,e[6]=x+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,d=l*f,g=c*h,x=c*f;e[0]=u-x*o,e[4]=-a*f,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*h,e[9]=x-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,d=a*f,g=o*h,x=o*f;e[0]=l*h,e[4]=g*c-d,e[8]=u*c+x,e[1]=l*f,e[5]=x*c+u,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,d=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-u*f,e[8]=g*f+d,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*f+g,e[10]=u-x*f}else if(t.order==="XZY"){let u=a*l,d=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+x,e[5]=a*h,e[9]=d*f-g,e[2]=g*f-d,e[6]=o*h,e[10]=x*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Pd,t,Ld)}lookAt(t,e,i){let s=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),Zi.crossVectors(i,qe),Zi.lengthSq()===0&&(Math.abs(i.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),Zi.crossVectors(i,qe)),Zi.normalize(),Tr.crossVectors(qe,Zi),s[0]=Zi.x,s[4]=Tr.x,s[8]=qe.x,s[1]=Zi.y,s[5]=Tr.y,s[9]=qe.y,s[2]=Zi.z,s[6]=Tr.z,s[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],f=i[5],u=i[9],d=i[13],g=i[2],x=i[6],p=i[10],m=i[14],y=i[3],E=i[7],S=i[11],A=i[15],T=s[0],_=s[4],b=s[8],L=s[12],C=s[1],N=s[5],B=s[9],q=s[13],R=s[2],z=s[6],V=s[10],X=s[14],nt=s[3],P=s[7],W=s[11],J=s[15];return r[0]=a*T+o*C+l*R+c*nt,r[4]=a*_+o*N+l*z+c*P,r[8]=a*b+o*B+l*V+c*W,r[12]=a*L+o*q+l*X+c*J,r[1]=h*T+f*C+u*R+d*nt,r[5]=h*_+f*N+u*z+d*P,r[9]=h*b+f*B+u*V+d*W,r[13]=h*L+f*q+u*X+d*J,r[2]=g*T+x*C+p*R+m*nt,r[6]=g*_+x*N+p*z+m*P,r[10]=g*b+x*B+p*V+m*W,r[14]=g*L+x*q+p*X+m*J,r[3]=y*T+E*C+S*R+A*nt,r[7]=y*_+E*N+S*z+A*P,r[11]=y*b+E*B+S*V+A*W,r[15]=y*L+E*q+S*X+A*J,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],g=t[3],x=t[7],p=t[11],m=t[15],y=l*d-c*u,E=o*d-c*f,S=o*u-l*f,A=a*d-c*h,T=a*u-l*h,_=a*f-o*h;return e*(x*y-p*E+m*S)-i*(g*y-p*A+m*T)+s*(g*E-x*A+m*_)-r*(g*S-x*T+p*_)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],g=t[12],x=t[13],p=t[14],m=t[15],y=e*o-i*a,E=e*l-s*a,S=e*c-r*a,A=i*l-s*o,T=i*c-r*o,_=s*c-r*l,b=h*x-f*g,L=h*p-u*g,C=h*m-d*g,N=f*p-u*x,B=f*m-d*x,q=u*m-d*p,R=y*q-E*B+S*N+A*C-T*L+_*b;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/R;return t[0]=(o*q-l*B+c*N)*z,t[1]=(s*B-i*q-r*N)*z,t[2]=(x*_-p*T+m*A)*z,t[3]=(u*T-f*_-d*A)*z,t[4]=(l*C-a*q-c*L)*z,t[5]=(e*q-s*C+r*L)*z,t[6]=(p*S-g*_-m*E)*z,t[7]=(h*_-u*S+d*E)*z,t[8]=(a*B-o*C+c*b)*z,t[9]=(i*C-e*B-r*b)*z,t[10]=(g*T-x*S+m*y)*z,t[11]=(f*S-h*T-d*y)*z,t[12]=(o*L-a*N-l*b)*z,t[13]=(e*N-i*L+s*b)*z,t[14]=(x*E-g*A-p*y)*z,t[15]=(h*A-f*E+u*y)*z,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,g=r*f,x=a*h,p=a*f,m=o*f,y=l*c,E=l*h,S=l*f,A=i.x,T=i.y,_=i.z;return s[0]=(1-(x+m))*A,s[1]=(d+S)*A,s[2]=(g-E)*A,s[3]=0,s[4]=(d-S)*T,s[5]=(1-(u+m))*T,s[6]=(p+y)*T,s[7]=0,s[8]=(g+E)*_,s[9]=(p-y)*_,s[10]=(1-(u+x))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=Cn.set(s[0],s[1],s[2]).length(),o=Cn.set(s[4],s[5],s[6]).length(),l=Cn.set(s[8],s[9],s[10]).length();r<0&&(a=-a),hi.copy(this);let c=1/a,h=1/o,f=1/l;return hi.elements[0]*=c,hi.elements[1]*=c,hi.elements[2]*=c,hi.elements[4]*=h,hi.elements[5]*=h,hi.elements[6]*=h,hi.elements[8]*=f,hi.elements[9]*=f,hi.elements[10]*=f,e.setFromRotationMatrix(hi),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,r,a,o=ai,l=!1){let c=this.elements,h=2*r/(e-t),f=2*r/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s),g,x;if(l)g=r/(a-r),x=a*r/(a-r);else if(o===ai)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Xn)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=ai,l=!1){let c=this.elements,h=2/(e-t),f=2/(i-s),u=-(e+t)/(e-t),d=-(i+s)/(i-s),g,x;if(l)g=1/(a-r),x=a/(a-r);else if(o===ai)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===Xn)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Da.prototype.isMatrix4=!0;var Kt=Da,Cn=new F,hi=new Kt,Pd=new F(0,0,0),Ld=new F(1,1,1),Zi=new F,Tr=new F,qe=new F,Kc=new Kt,Qc=new Ze,zi=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ht(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Pt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Kc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Qc.setFromEuler(this),this.setFromQuaternion(Qc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};zi.DEFAULT_ORDER="XYZ";var Ds=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Dd=0,jc=new F,In=new Ze,Li=new Kt,wr=new F,xs=new F,Nd=new F,Ud=new Ze,th=new F(1,0,0),eh=new F(0,1,0),ih=new F(0,0,1),nh={type:"added"},Fd={type:"removed"},Pn={type:"childadded",child:null},tl={type:"childremoved",child:null},Re=class n extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=hs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new F,e=new zi,i=new Ze,s=new F(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Kt},normalMatrix:{value:new Dt}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ds,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return In.setFromAxisAngle(t,e),this.quaternion.multiply(In),this}rotateOnWorldAxis(t,e){return In.setFromAxisAngle(t,e),this.quaternion.premultiply(In),this}rotateX(t){return this.rotateOnAxis(th,t)}rotateY(t){return this.rotateOnAxis(eh,t)}rotateZ(t){return this.rotateOnAxis(ih,t)}translateOnAxis(t,e){return jc.copy(t).applyQuaternion(this.quaternion),this.position.add(jc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(th,t)}translateY(t){return this.translateOnAxis(eh,t)}translateZ(t){return this.translateOnAxis(ih,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?wr.copy(t):wr.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(xs,wr,this.up):Li.lookAt(wr,xs,this.up),this.quaternion.setFromRotationMatrix(Li),s&&(Li.extractRotation(s.matrixWorld),In.setFromRotationMatrix(Li),this.quaternion.premultiply(In.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Lt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(nh),Pn.child=t,this.dispatchEvent(Pn),Pn.child=null):Lt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Fd),tl.child=t,this.dispatchEvent(tl),tl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Li.multiply(t.parent.matrixWorld)),t.applyMatrix4(Li),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(nh),Pn.child=t,this.dispatchEvent(Pn),Pn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,t,Nd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,Ud,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Re.DEFAULT_UP=new F(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Si=class extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}},Od={type:"move"},Yn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Si,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Si,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Si,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let p=e.getJointPose(x,i),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&u>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Od)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Si;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},hu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},Ar={h:0,s:0,l:0};function el(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Bt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Xt.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Xt.workingColorSpace){if(t=Td(t,1),e=Ht(e,0,1),i=Ht(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=el(a,r,t+1/3),this.g=el(a,r,t),this.b=el(a,r,t-1/3)}return Xt.colorSpaceToWorking(this,s),this}setStyle(t,e=Fe){function i(r){r!==void 0&&parseFloat(r)<1&&Pt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Pt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Pt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fe){let i=hu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Pt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Oi(t.r),this.g=Oi(t.g),this.b=Oi(t.b),this}copyLinearToSRGB(t){return this.r=Gn(t.r),this.g=Gn(t.g),this.b=Gn(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fe){return Xt.workingToColorSpace(Ue.copy(this),t),Math.round(Ht(Ue.r*255,0,255))*65536+Math.round(Ht(Ue.g*255,0,255))*256+Math.round(Ht(Ue.b*255,0,255))}getHexString(t=Fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.workingToColorSpace(Ue.copy(this),e);let i=Ue.r,s=Ue.g,r=Ue.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Xt.workingColorSpace){return Xt.workingToColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t=Fe){Xt.workingToColorSpace(Ue.copy(this),t);let e=Ue.r,i=Ue.g,s=Ue.b;return t!==Fe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ji),this.setHSL(Ji.h+t,Ji.s+e,Ji.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ji),t.getHSL(Ar);let i=Zo(Ji.h,Ar.h,e),s=Zo(Ji.s,Ar.s,e),r=Zo(Ji.l,Ar.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ue=new Bt;Bt.NAMES=hu;var Ns=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Bt(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Us=class extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ui=new F,Di=new F,il=new F,Ni=new F,Ln=new F,Dn=new F,sh=new F,nl=new F,sl=new F,rl=new F,al=new ce,ol=new ce,ll=new ce,tn=class n{constructor(t=new F,e=new F,i=new F){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),ui.subVectors(t,e),s.cross(ui);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){ui.subVectors(s,e),Di.subVectors(i,e),il.subVectors(t,e);let a=ui.dot(ui),o=ui.dot(Di),l=ui.dot(il),c=Di.dot(Di),h=Di.dot(il),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-d-g,g,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,Ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ni.x),l.addScaledVector(a,Ni.y),l.addScaledVector(o,Ni.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return al.setScalar(0),ol.setScalar(0),ll.setScalar(0),al.fromBufferAttribute(t,e),ol.fromBufferAttribute(t,i),ll.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(al,r.x),a.addScaledVector(ol,r.y),a.addScaledVector(ll,r.z),a}static isFrontFacing(t,e,i,s){return ui.subVectors(i,e),Di.subVectors(t,e),ui.cross(Di).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ui.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),ui.cross(Di).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;Ln.subVectors(s,i),Dn.subVectors(r,i),nl.subVectors(t,i);let l=Ln.dot(nl),c=Dn.dot(nl);if(l<=0&&c<=0)return e.copy(i);sl.subVectors(t,s);let h=Ln.dot(sl),f=Dn.dot(sl);if(h>=0&&f<=h)return e.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(i).addScaledVector(Ln,a);rl.subVectors(t,r);let d=Ln.dot(rl),g=Dn.dot(rl);if(g>=0&&d<=g)return e.copy(r);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(Dn,o);let p=h*g-d*f;if(p<=0&&f-h>=0&&d-g>=0)return sh.subVectors(r,s),o=(f-h)/(f-h+(d-g)),e.copy(s).addScaledVector(sh,o);let m=1/(p+x+u);return a=x*m,o=u*m,e.copy(i).addScaledVector(Ln,a).addScaledVector(Dn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ei=class{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(di.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(di.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=di.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,di):di.fromBufferAttribute(r,a),di.applyMatrix4(t.matrixWorld),this.expandByPoint(di);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Rr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Rr.copy(i.boundingBox)),Rr.applyMatrix4(t.matrixWorld),this.union(Rr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,di),di.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vs),Cr.subVectors(this.max,vs),Nn.subVectors(t.a,vs),Un.subVectors(t.b,vs),Fn.subVectors(t.c,vs),Ki.subVectors(Un,Nn),Qi.subVectors(Fn,Un),dn.subVectors(Nn,Fn);let e=[0,-Ki.z,Ki.y,0,-Qi.z,Qi.y,0,-dn.z,dn.y,Ki.z,0,-Ki.x,Qi.z,0,-Qi.x,dn.z,0,-dn.x,-Ki.y,Ki.x,0,-Qi.y,Qi.x,0,-dn.y,dn.x,0];return!cl(e,Nn,Un,Fn,Cr)||(e=[1,0,0,0,1,0,0,0,1],!cl(e,Nn,Un,Fn,Cr))?!1:(Ir.crossVectors(Ki,Qi),e=[Ir.x,Ir.y,Ir.z],cl(e,Nn,Un,Fn,Cr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,di).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(di).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ui),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ui=[new F,new F,new F,new F,new F,new F,new F,new F],di=new F,Rr=new Ei,Nn=new F,Un=new F,Fn=new F,Ki=new F,Qi=new F,dn=new F,vs=new F,Cr=new F,Ir=new F,fn=new F;function cl(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){fn.fromArray(n,r);let o=s.x*Math.abs(fn.x)+s.y*Math.abs(fn.y)+s.z*Math.abs(fn.z),l=t.dot(fn),c=e.dot(fn),h=i.dot(fn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var pe=new F,Pr=new Mt,Bd=0,Ye=class extends bi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=su,this.updateRanges=[],this.gpuType=oi,this.version=0,this._normalizationScale=t!==void 0?ec(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Pr.fromBufferAttribute(this,e),Pr.applyMatrix3(t),this.setXY(e,Pr.x,Pr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):wd(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Ad(t,this.array)}};var Fs=class extends Ye{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Os=class extends Ye{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var te=class extends Ye{constructor(t,e,i){super(new Float32Array(t),e,i)}},zd=new Ei,ys=new F,hl=new F,ki=class{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):zd.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ys.subVectors(t,this.center);let e=ys.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(ys,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(hl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ys.copy(t.center).add(hl)),this.expandByPoint(ys.copy(t.center).sub(hl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},kd=0,ri=new Kt,ul=new Re,On=new F,$e=new Ei,Ms=new Ei,Ee=new F,Ce=class n extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=hs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(bd(t)?Os:Fs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Dt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ri.makeRotationFromQuaternion(t),this.applyMatrix4(ri),this}rotateX(t){return ri.makeRotationX(t),this.applyMatrix4(ri),this}rotateY(t){return ri.makeRotationY(t),this.applyMatrix4(ri),this}rotateZ(t){return ri.makeRotationZ(t),this.applyMatrix4(ri),this}translate(t,e,i){return ri.makeTranslation(t,e,i),this.applyMatrix4(ri),this}scale(t,e,i){return ri.makeScale(t,e,i),this.applyMatrix4(ri),this}lookAt(t){return ul.lookAt(t),ul.updateMatrix(),this.applyMatrix4(ul.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(On).negate(),this.translate(On.x,On.y,On.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new te(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Pt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ei);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];$e.setFromBufferAttribute(r),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ki);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let i=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ms.setFromBufferAttribute(o),this.morphTargetsRelative?(Ee.addVectors($e.min,Ms.min),$e.expandByPoint(Ee),Ee.addVectors($e.max,Ms.max),$e.expandByPoint(Ee)):($e.expandByPoint(Ms.min),$e.expandByPoint(Ms.max))}$e.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Ee.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ee));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ee.fromBufferAttribute(o,c),l&&(On.fromBufferAttribute(t,c),Ee.add(On)),s=Math.max(s,i.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Ye(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(i.count);for(let L=0;L<i.count;L++)o[L]=new F,l[L]=new F;let h=new F,f=new F,u=new F,d=new Mt,g=new Mt,x=new Mt,p=new F,m=new F;function y(L,C,N){c[L]=c[C]=c[N]=1,h.fromBufferAttribute(i,L),f.fromBufferAttribute(i,C),u.fromBufferAttribute(i,N),d.fromBufferAttribute(r,L),g.fromBufferAttribute(r,C),x.fromBufferAttribute(r,N),f.sub(h),u.sub(h),g.sub(d),x.sub(d);let B=1/(g.x*x.y-x.x*g.y);isFinite(B)&&(p.copy(f).multiplyScalar(x.y).addScaledVector(u,-g.y).multiplyScalar(B),m.copy(u).multiplyScalar(g.x).addScaledVector(f,-x.x).multiplyScalar(B),o[L].add(p),o[C].add(p),o[N].add(p),l[L].add(m),l[C].add(m),l[N].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let L=0,C=E.length;L<C;++L){let N=E[L],B=N.start,q=N.count;for(let R=B,z=B+q;R<z;R+=3)y(t.getX(R+0),t.getX(R+1),t.getX(R+2))}let S=new F,A=new F,T=new F,_=new F;function b(L){T.fromBufferAttribute(s,L),_.copy(T);let C=o[L];S.copy(C),S.sub(T.multiplyScalar(T.dot(C))).normalize(),A.crossVectors(_,C);let B=A.dot(l[L])<0?-1:1;a.setXYZW(L,S.x,S.y,S.z,B)}for(let L=0,C=i.count;L<C;++L)c[L]&&b(L);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Ye(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,h=new F,f=new F;if(t)for(let u=0,d=t.count;u<d;u+=3){let g=t.getX(u+0),x=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,p),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h),d=0,g=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*h;for(let m=0;m<h;m++)u[g++]=c[d++]}return new Ye(u,h,f)}if(this.index===null)return Pt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=t(u,i);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var dl=new F,Hd=new F,Gd=new Dt,fi=class{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=dl.subVectors(i,e).cross(Hd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(dl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Gd.getNormalMatrix(t),s=this.coplanarPoint(dl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Vd=0,Hi=class extends bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=hs(),this.name="",this.type="Material",this.blending=as,this.side=an,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nl,this.blendDst=Ul,this.blendEquation=Mn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=Wn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kr,this.stencilZFail=Kr,this.stencilZPass=Kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Pt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Pt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Bt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new fi().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Mt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Mt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Fi=new F,fl=new F,Lr=new F,Dr=new F,Bs=class{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Fi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fi.copy(this.origin).addScaledVector(this.direction,e),Fi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){fl.copy(t).add(e).multiplyScalar(.5),Lr.copy(e).sub(t).normalize(),Dr.copy(this.origin).sub(fl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Lr),o=Dr.dot(this.direction),l=-Dr.dot(Lr),c=Dr.lengthSq(),h=Math.abs(1-a*a),f,u,d,g;if(h>0)if(f=a*l-o,u=a*o-l,g=r*h,f>=0)if(u>=-g)if(u<=g){let x=1/h;f*=x,u*=x,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(fl).addScaledVector(Lr,u),d}intersectSphere(t,e){if(t.radius<0)return null;Fi.subVectors(t.center,this.origin);let i=Fi.dot(this.direction),s=Fi.dot(Fi)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Fi)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=t.x-a.x,u=t.y-a.y,d=t.z-a.z,g=e.x-a.x,x=e.y-a.y,p=e.z-a.z,m=i.x-a.x,y=i.y-a.y,E=i.z-a.z,S=Math.abs(l),A=Math.abs(c),T=Math.abs(h),_,b,L,C,N,B,q,R,z,V,X,nt;if(S>=A&&S>=T?(L=l,B=f,z=g,nt=m,l>=0?(_=c,b=h,C=u,N=d,q=x,R=p,V=y,X=E):(_=h,b=c,C=d,N=u,q=p,R=x,V=E,X=y)):A>=T?(L=c,B=u,z=x,nt=y,c>=0?(_=h,b=l,C=d,N=f,q=p,R=g,V=E,X=m):(_=l,b=h,C=f,N=d,q=g,R=p,V=m,X=E)):(L=h,B=d,z=p,nt=E,h>=0?(_=l,b=c,C=f,N=u,q=g,R=x,V=m,X=y):(_=c,b=l,C=u,N=f,q=x,R=g,V=y,X=m)),L===0)return null;let P=_/L,W=b/L,J=1/L,dt=C-P*B,Tt=N-W*B,K=q-P*z,mt=R-W*z,U=V-P*nt,Y=X-W*nt,et=U*mt-Y*K,yt=dt*Y-Tt*U,$t=K*Tt-mt*dt;if(s){if(et<0||yt<0||$t<0)return null}else if((et<0||yt<0||$t<0)&&(et>0||yt>0||$t>0))return null;let At=et+yt+$t;if(At===0)return null;let ee=J*(et*B+yt*z+$t*nt);return(At>0?ee<0:ee>0)?null:this.at(ee/At,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xe=class extends Hi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=Fl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},rh=new Kt,pn=new Bs,Nr=new ki,ah=new F,Ur=new F,Fr=new F,Or=new F,pl=new F,Br=new F,oh=new F,zr=new F,qt=class extends Re{constructor(t=new Ce,e=new xe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Br.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(pl.fromBufferAttribute(f,t),a?Br.addScaledVector(pl,h):Br.addScaledVector(pl.sub(e),h))}e.add(Br)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Nr.copy(i.boundingSphere),Nr.applyMatrix4(r),pn.copy(t.ray).recast(t.near),!(Nr.containsPoint(pn.origin)===!1&&(pn.intersectSphere(Nr,ah)===null||pn.origin.distanceToSquared(ah)>(t.far-t.near)**2))&&(rh.copy(r).invert(),pn.copy(t.ray).applyMatrix4(rh),!(i.boundingBox!==null&&pn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,pn)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){let p=u[g],m=a[p.materialIndex],y=Math.max(p.start,d.start),E=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let S=y,A=E;S<A;S+=3){let T=o.getX(S),_=o.getX(S+1),b=o.getX(S+2);s=kr(this,m,t,i,c,h,f,T,_,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let p=g,m=x;p<m;p+=3){let y=o.getX(p),E=o.getX(p+1),S=o.getX(p+2);s=kr(this,a,t,i,c,h,f,y,E,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){let p=u[g],m=a[p.materialIndex],y=Math.max(p.start,d.start),E=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let S=y,A=E;S<A;S+=3){let T=S,_=S+1,b=S+2;s=kr(this,m,t,i,c,h,f,T,_,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let p=g,m=x;p<m;p+=3){let y=p,E=p+1,S=p+2;s=kr(this,a,t,i,c,h,f,y,E,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Wd(n,t,e,i,s,r,a,o){let l;if(t.side===Ie?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===an,o),l===null)return null;zr.copy(o),zr.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(zr);return c<e.near||c>e.far?null:{distance:c,point:zr.clone(),object:n}}function kr(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,Ur),n.getVertexPosition(l,Fr),n.getVertexPosition(c,Or);let h=Wd(n,t,e,i,Ur,Fr,Or,oh);if(h){let f=new F;tn.getBarycoord(oh,Ur,Fr,Or,f),s&&(h.uv=tn.getInterpolatedAttribute(s,o,l,c,f,new Mt)),r&&(h.uv1=tn.getInterpolatedAttribute(r,o,l,c,f,new Mt)),a&&(h.normal=tn.getInterpolatedAttribute(a,o,l,c,f,new F),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new F,materialIndex:0};tn.getNormal(Ur,Fr,Or,u.normal),h.face=u,h.barycoord=f}return h}var zs=class extends He{constructor(t=null,e=1,i=1,s,r,a,o,l,c=Te,h=Te,f,u){super(null,a,o,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ks=class extends Ye{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Bn=new Kt,lh=new Kt,Hr=[],ch=new Ei,Xd=new Kt,Ss=new qt,bs=new ki,Zn=class extends qt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ks(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Xd)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ei),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Bn),ch.copy(t.boundingBox).applyMatrix4(Bn),this.boundingBox.union(ch)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ki),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Bn),bs.copy(t.boundingSphere).applyMatrix4(Bn),this.boundingSphere.union(bs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(Ss.geometry=this.geometry,Ss.material=this.material,Ss.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bs.copy(this.boundingSphere),bs.applyMatrix4(i),t.ray.intersectsSphere(bs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Bn),lh.multiplyMatrices(i,Bn),Ss.matrixWorld=lh,Ss.raycast(t,Hr);for(let a=0,o=Hr.length;a<o;a++){let l=Hr[a];l.instanceId=r,l.object=this,e.push(l)}Hr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ks(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new zs(new Float32Array(s*this.count),s,this.count,ka,oi));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},mn=new ki,qd=new Mt(.5,.5),Gr=new F,en=class{constructor(t=new fi,e=new fi,i=new fi,s=new fi,r=new fi,a=new fi){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ai,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],g=r[8],x=r[9],p=r[10],m=r[11],y=r[12],E=r[13],S=r[14],A=r[15];if(s[0].setComponents(c-a,d-h,m-g,A-y).normalize(),s[1].setComponents(c+a,d+h,m+g,A+y).normalize(),s[2].setComponents(c+o,d+f,m+x,A+E).normalize(),s[3].setComponents(c-o,d-f,m-x,A-E).normalize(),i)s[4].setComponents(l,u,p,S).normalize(),s[5].setComponents(c-l,d-u,m-p,A-S).normalize();else if(s[4].setComponents(c-l,d-u,m-p,A-S).normalize(),e===ai)s[5].setComponents(c+l,d+u,m+p,A+S).normalize();else if(e===Xn)s[5].setComponents(l,u,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),mn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),mn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(mn)}intersectsSprite(t){mn.center.set(0,0,0);let e=qd.distanceTo(t.center);return mn.radius=.7071067811865476+e,mn.applyMatrix4(t.matrixWorld),this.intersectsSphere(mn)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Gr.x=s.normal.x>0?t.max.x:t.min.x,Gr.y=s.normal.y>0?t.max.y:t.min.y,Gr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Gr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},hh=new Kt,ua=class n{constructor(){this.coordinateSystem=ai,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];hh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new en),i[s].setFromProjectionMatrix(hh,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new en),e[s].copy(i[s]);return this._count=t._count,this}clone(){return new n().copy(this)}};var Jn=class extends Hi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},uh=new Kt,bl=new Bs,Vr=new ki,Wr=new F,Hs=class extends Re{constructor(t=new Ce,e=new Jn){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Vr.copy(i.boundingSphere),Vr.applyMatrix4(s),Vr.radius+=r,t.ray.intersectsSphere(Vr)===!1)return;uh.copy(s).invert(),bl.copy(t.ray).applyMatrix4(uh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=u,x=d;g<x;g++){let p=c.getX(g);Wr.fromBufferAttribute(f,p),dh(Wr,p,l,s,t,e,this)}}else{let u=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let g=u,x=d;g<x;g++)Wr.fromBufferAttribute(f,g),dh(Wr,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function dh(n,t,e,i,s,r,a){let o=bl.distanceSqToPoint(n);if(o<e){let l=new F;bl.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Gs=class extends He{constructor(t=[],e=Sn,i,s,r,a,o,l,c,h){super(t,e,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Vs=class extends He{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Gi=class extends He{constructor(t,e,i=mi,s,r,a,o=Te,l=Te,c,h=Bi,f=1){if(h!==Bi&&h!==Wi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new $n(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ws=class extends Gi{constructor(t,e=mi,i=Sn,s,r,a=Te,o=Te,l,c=Bi){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,i,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Xs=class extends He{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ti=class n extends Ce{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],u=0,d=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new te(c,3)),this.setAttribute("normal",new te(h,3)),this.setAttribute("uv",new te(f,2));function g(x,p,m,y,E,S,A,T,_,b,L){let C=S/_,N=A/b,B=S/2,q=A/2,R=T/2,z=_+1,V=b+1,X=0,nt=0,P=new F;for(let W=0;W<V;W++){let J=W*N-q;for(let dt=0;dt<z;dt++){let Tt=dt*C-B;P[x]=Tt*y,P[p]=J*E,P[m]=R,c.push(P.x,P.y,P.z),P[x]=0,P[p]=0,P[m]=T>0?1:-1,h.push(P.x,P.y,P.z),f.push(dt/_),f.push(1-W/b),X+=1}}for(let W=0;W<b;W++)for(let J=0;J<_;J++){let dt=u+J+z*W,Tt=u+J+z*(W+1),K=u+(J+1)+z*(W+1),mt=u+(J+1)+z*W;l.push(dt,Tt,mt),l.push(Tt,K,mt),nt+=6}o.addGroup(d,nt,L),d+=nt,u+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var wi=class n extends Ce{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new F,h=new Mt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){let d=i+f/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new te(a,3)),this.setAttribute("normal",new te(o,3)),this.setAttribute("uv",new te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Kn=class n extends Ce{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],g=0,x=[],p=i/2,m=0;y(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new te(f,3)),this.setAttribute("normal",new te(u,3)),this.setAttribute("uv",new te(d,2));function y(){let S=new F,A=new F,T=0,_=(e-t)/i;for(let b=0;b<=r;b++){let L=[],C=b/r,N=C*(e-t)+t;for(let B=0;B<=s;B++){let q=B/s,R=q*l+o,z=Math.sin(R),V=Math.cos(R);A.x=N*z,A.y=-C*i+p,A.z=N*V,f.push(A.x,A.y,A.z),S.set(z,_,V).normalize(),u.push(S.x,S.y,S.z),d.push(q,1-C),L.push(g++)}x.push(L)}for(let b=0;b<s;b++)for(let L=0;L<r;L++){let C=x[L][b],N=x[L+1][b],B=x[L+1][b+1],q=x[L][b+1];(t>0||L!==0)&&(h.push(C,N,q),T+=3),(e>0||L!==r-1)&&(h.push(N,B,q),T+=3)}c.addGroup(m,T,0),m+=T}function E(S){let A=g,T=new Mt,_=new F,b=0,L=S===!0?t:e,C=S===!0?1:-1;for(let B=1;B<=s;B++)f.push(0,p*C,0),u.push(0,C,0),d.push(.5,.5),g++;let N=g;for(let B=0;B<=s;B++){let R=B/s*l+o,z=Math.cos(R),V=Math.sin(R);_.x=L*V,_.y=p*C,_.z=L*z,f.push(_.x,_.y,_.z),u.push(0,C,0),T.x=z*.5+.5,T.y=V*.5*C+.5,d.push(T.x,T.y),g++}for(let B=0;B<s;B++){let q=A+B,R=N+B;S===!0?h.push(R,R+1,q):h.push(R+1,R,q),b+=3}c.addGroup(m,b,S===!0?1:2),m+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var da=class n extends Ce{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],a=[];o(s),c(i),h(),this.setAttribute("position",new te(r,3)),this.setAttribute("normal",new te(r.slice(),3)),this.setAttribute("uv",new te(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let E=new F,S=new F,A=new F;for(let T=0;T<e.length;T+=3)d(e[T+0],E),d(e[T+1],S),d(e[T+2],A),l(E,S,A,y)}function l(y,E,S,A){let T=A+1,_=[];for(let b=0;b<=T;b++){_[b]=[];let L=y.clone().lerp(S,b/T),C=E.clone().lerp(S,b/T),N=T-b;for(let B=0;B<=N;B++)B===0&&b===T?_[b][B]=L:_[b][B]=L.clone().lerp(C,B/N)}for(let b=0;b<T;b++)for(let L=0;L<2*(T-b)-1;L++){let C=Math.floor(L/2);L%2===0?(u(_[b][C+1]),u(_[b+1][C]),u(_[b][C])):(u(_[b][C+1]),u(_[b+1][C+1]),u(_[b+1][C]))}}function c(y){let E=new F;for(let S=0;S<r.length;S+=3)E.x=r[S+0],E.y=r[S+1],E.z=r[S+2],E.normalize().multiplyScalar(y),r[S+0]=E.x,r[S+1]=E.y,r[S+2]=E.z}function h(){let y=new F;for(let E=0;E<r.length;E+=3){y.x=r[E+0],y.y=r[E+1],y.z=r[E+2];let S=p(y)/2/Math.PI+.5,A=m(y)/Math.PI+.5;a.push(S,1-A)}g(),f()}function f(){for(let y=0;y<a.length;y+=6){let E=a[y+0],S=a[y+2],A=a[y+4],T=Math.max(E,S,A),_=Math.min(E,S,A);T>.9&&_<.1&&(E<.2&&(a[y+0]+=1),S<.2&&(a[y+2]+=1),A<.2&&(a[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function d(y,E){let S=y*3;E.x=t[S+0],E.y=t[S+1],E.z=t[S+2]}function g(){let y=new F,E=new F,S=new F,A=new F,T=new Mt,_=new Mt,b=new Mt;for(let L=0,C=0;L<r.length;L+=9,C+=6){y.set(r[L+0],r[L+1],r[L+2]),E.set(r[L+3],r[L+4],r[L+5]),S.set(r[L+6],r[L+7],r[L+8]),T.set(a[C+0],a[C+1]),_.set(a[C+2],a[C+3]),b.set(a[C+4],a[C+5]),A.copy(y).add(E).add(S).divideScalar(3);let N=p(A);x(T,C+0,y,N),x(_,C+2,E,N),x(b,C+4,S,N)}}function x(y,E,S,A){A<0&&y.x===1&&(a[E]=y.x-1),S.x===0&&S.z===0&&(a[E]=A/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.detail)}};var Ke=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Pt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],u=i[s+1]-h,d=(a-h)/u;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Mt:new F);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new F,s=[],r=[],a=[],o=new F,l=new Kt;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new F)}r[0]=new F,a[0]=new F;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Ht(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Ht(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Qn=class extends Ke{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Mt){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},fa=class extends Qn{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function ic(){let n=0,t=0,e=0,i=0;function s(r,a,o,l){n=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,d*=h,s(a,o,u,d)},calc:function(r){let a=r*r,o=a*r;return n+t*r+e*a+i*o}}}var fh=new F,ph=new F,ml=new ic,gl=new ic,_l=new ic,pa=class extends Ke{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new F){let i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(ph.subVectors(s[0],s[1]).add(s[0]),c=ph);let f=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(fh.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=fh),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(u),d),p=Math.pow(u.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),ml.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,g,x,p),gl.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,g,x,p),_l.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,g,x,p)}else this.curveType==="catmullrom"&&(ml.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),gl.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),_l.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return i.set(ml.calc(l),gl.calc(l),_l.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new F().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function mh(n,t,e,i,s){let r=(i-t)*.5,a=(s-e)*.5,o=n*n,l=n*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*n+e}function $d(n,t){let e=1-n;return e*e*t}function Yd(n,t){return 2*(1-n)*n*t}function Zd(n,t){return n*n*t}function ws(n,t,e,i){return $d(n,t)+Yd(n,e)+Zd(n,i)}function Jd(n,t){let e=1-n;return e*e*e*t}function Kd(n,t){let e=1-n;return 3*e*e*n*t}function Qd(n,t){return 3*(1-n)*n*n*t}function jd(n,t){return n*n*n*t}function As(n,t,e,i,s){return Jd(n,t)+Kd(n,e)+Qd(n,i)+jd(n,s)}var qs=class extends Ke{constructor(t=new Mt,e=new Mt,i=new Mt,s=new Mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Mt){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(As(t,s.x,r.x,a.x,o.x),As(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ma=class extends Ke{constructor(t=new F,e=new F,i=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new F){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(As(t,s.x,r.x,a.x,o.x),As(t,s.y,r.y,a.y,o.y),As(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},$s=class extends Ke{constructor(t=new Mt,e=new Mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Mt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ga=class extends Ke{constructor(t=new F,e=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new F){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new F){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ys=class extends Ke{constructor(t=new Mt,e=new Mt,i=new Mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Mt){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(ws(t,s.x,r.x,a.x),ws(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_a=class extends Ke{constructor(t=new F,e=new F,i=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new F){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(ws(t,s.x,r.x,a.x),ws(t,s.y,r.y,a.y),ws(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Zs=class extends Ke{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Mt){let i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return i.set(mh(o,l.x,c.x,h.x,f.x),mh(o,l.y,c.y,h.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new Mt().fromArray(s))}return this}},gh=Object.freeze({__proto__:null,ArcCurve:fa,CatmullRomCurve3:pa,CubicBezierCurve:qs,CubicBezierCurve3:ma,EllipseCurve:Qn,LineCurve:$s,LineCurve3:ga,QuadraticBezierCurve:Ys,QuadraticBezierCurve3:_a,SplineCurve:Zs}),xa=class extends Ke{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new gh[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new gh[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Js=class extends xa{constructor(t){super(),this.type="Path",this.currentPoint=new Mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new $s(this.currentPoint.clone(),new Mt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new Ys(this.currentPoint.clone(),new Mt(t,e),new Mt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){let o=new qs(this.currentPoint.clone(),new Mt(t,e),new Mt(i,s),new Mt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Zs(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,a,o,l),this}absellipse(t,e,i,s,r,a,o,l){let c=new Qn(t,e,i,s,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},jn=class extends Js{constructor(t){super(t),this.uuid=hs(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new Js().fromJSON(s))}return this}};function tf(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=uu(n,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=af(n,t,r,e)),n.length>80*e){o=n[0],l=n[1];let h=o,f=l;for(let u=e;u<s;u+=e){let d=n[u],g=n[u+1];d<o&&(o=d),g<l&&(l=g),d>h&&(h=d),g>f&&(f=g)}c=Math.max(h-o,f-l),c=c!==0?32767/c:0}return Ks(r,a,e,o,l,c,0),a}function uu(n,t,e,i,s){let r;if(s===_f(n,t,e,i)>0)for(let a=t;a<e;a+=i)r=_h(a/i|0,n[a],n[a+1],r);else for(let a=e-i;a>=t;a-=i)r=_h(a/i|0,n[a],n[a+1],r);return r&&ts(r,r.next)&&(js(r),r=r.next),r}function _n(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(ts(e,e.next)||de(e.prev,e,e.next)===0)){if(js(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Ks(n,t,e,i,s,r,a){if(!n)return;!a&&r&&uf(n,i,s,r);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?nf(n,i,s,r):ef(n)){t.push(l.i,n.i,c.i),js(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=sf(_n(n),t),Ks(n,t,e,i,s,r,2)):a===2&&rf(n,t,e,i,s,r):Ks(_n(n),t,e,i,s,r,1);break}}}function ef(n){let t=n.prev,e=n,i=n.next;if(de(t,e,i)>=0)return!1;let s=t.x,r=e.x,a=i.x,o=t.y,l=e.y,c=i.y,h=Math.min(s,r,a),f=Math.min(o,l,c),u=Math.max(s,r,a),d=Math.max(o,l,c),g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=d&&Es(s,o,r,l,a,c,g.x,g.y)&&de(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function nf(n,t,e,i){let s=n.prev,r=n,a=n.next;if(de(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,f=r.y,u=a.y,d=Math.min(o,l,c),g=Math.min(h,f,u),x=Math.max(o,l,c),p=Math.max(h,f,u),m=El(d,g,t,e,i),y=El(x,p,t,e,i),E=n.prevZ,S=n.nextZ;for(;E&&E.z>=m&&S&&S.z<=y;){if(E.x>=d&&E.x<=x&&E.y>=g&&E.y<=p&&E!==s&&E!==a&&Es(o,h,l,f,c,u,E.x,E.y)&&de(E.prev,E,E.next)>=0||(E=E.prevZ,S.x>=d&&S.x<=x&&S.y>=g&&S.y<=p&&S!==s&&S!==a&&Es(o,h,l,f,c,u,S.x,S.y)&&de(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;E&&E.z>=m;){if(E.x>=d&&E.x<=x&&E.y>=g&&E.y<=p&&E!==s&&E!==a&&Es(o,h,l,f,c,u,E.x,E.y)&&de(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;S&&S.z<=y;){if(S.x>=d&&S.x<=x&&S.y>=g&&S.y<=p&&S!==s&&S!==a&&Es(o,h,l,f,c,u,S.x,S.y)&&de(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function sf(n,t){let e=n;do{let i=e.prev,s=e.next.next;!ts(i,s)&&fu(i,e,e.next,s)&&Qs(i,s)&&Qs(s,i)&&(t.push(i.i,e.i,s.i),js(e),js(e.next),e=n=s),e=e.next}while(e!==n);return _n(e)}function rf(n,t,e,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&pf(a,o)){let l=pu(a,o);a=_n(a,a.next),l=_n(l,l.next),Ks(a,t,e,i,s,r,0),Ks(l,t,e,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function af(n,t,e,i){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*i,l=r<a-1?t[r+1]*i:n.length,c=uu(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(ff(c))}s.sort(of);for(let r=0;r<s.length;r++)e=lf(s[r],e);return e}function of(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function lf(n,t){let e=cf(n,t);if(!e)return t;let i=pu(e,n);return _n(i,i.next),_n(e,e.next)}function cf(n,t){let e=t,i=n.x,s=n.y,r=-1/0,a;if(ts(n,e))return e;do{if(ts(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=i&&f>r&&(r=f,a=e.x<e.next.x?e:e.next,f===i))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(i>=e.x&&e.x>=l&&i!==e.x&&du(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){let f=Math.abs(s-e.y)/(i-e.x);Qs(e,n)&&(f<h||f===h&&(e.x>a.x||e.x===a.x&&hf(a,e)))&&(a=e,h=f)}e=e.next}while(e!==o);return a}function hf(n,t){return de(n.prev,n,t.prev)<0&&de(t.next,n,n.next)<0}function uf(n,t,e,i){let s=n;do s.z===0&&(s.z=El(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,df(s)}function df(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let a=i,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,e*=2}while(t>1);return n}function El(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function ff(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function du(n,t,e,i,s,r,a,o){return(s-a)*(t-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(i-o)}function Es(n,t,e,i,s,r,a,o){return!(n===a&&t===o)&&du(n,t,e,i,s,r,a,o)}function pf(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!mf(n,t)&&(Qs(n,t)&&Qs(t,n)&&gf(n,t)&&(de(n.prev,n,t.prev)||de(n,t.prev,t))||ts(n,t)&&de(n.prev,n,n.next)>0&&de(t.prev,t,t.next)>0)}function de(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function ts(n,t){return n.x===t.x&&n.y===t.y}function fu(n,t,e,i){let s=qr(de(n,t,e)),r=qr(de(n,t,i)),a=qr(de(e,i,n)),o=qr(de(e,i,t));return!!(s!==r&&a!==o||s===0&&Xr(n,e,t)||r===0&&Xr(n,i,t)||a===0&&Xr(e,n,i)||o===0&&Xr(e,t,i))}function Xr(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function qr(n){return n>0?1:n<0?-1:0}function mf(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&fu(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Qs(n,t){return de(n.prev,n,n.next)<0?de(n,t,n.next)>=0&&de(n,n.prev,t)>=0:de(n,t,n.prev)<0||de(n,n.next,t)<0}function gf(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function pu(n,t){let e=Tl(n.i,n.x,n.y),i=Tl(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function _h(n,t,e,i){let s=Tl(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function js(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Tl(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function _f(n,t,e,i){let s=0;for(let r=t,a=e-i;r<e;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var wl=class{static triangulate(t,e,i=2){return tf(t,e,i)}},Vn=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];xh(t),vh(i,t);let a=t.length;e.forEach(xh);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,vh(i,e[l]);let o=wl.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function xh(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function vh(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var es=class n extends da{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},xn=class n extends Ce{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,f=t/o,u=e/l,d=[],g=[],x=[],p=[];for(let m=0;m<h;m++){let y=m*u-a;for(let E=0;E<c;E++){let S=E*f-r;g.push(S,-y,0),x.push(0,0,1),p.push(E/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){let E=y+c*m,S=y+c*(m+1),A=y+1+c*(m+1),T=y+1+c*m;d.push(E,S,T),d.push(S,A,T)}this.setIndex(d),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(x,3)),this.setAttribute("uv",new te(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},pi=class n extends Ce{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],h=[],f=t,u=(e-t)/s,d=new F,g=new Mt;for(let x=0;x<=s;x++){for(let p=0;p<=i;p++){let m=r+p/i*a;d.x=f*Math.cos(m),d.y=f*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}f+=u}for(let x=0;x<s;x++){let p=x*(i+1);for(let m=0;m<i;m++){let y=m+p,E=y,S=y+i+1,A=y+i+2,T=y+1;o.push(E,S,T),o.push(S,A,T)}}this.setIndex(o),this.setAttribute("position",new te(l,3)),this.setAttribute("normal",new te(c,3)),this.setAttribute("uv",new te(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},tr=class n extends Ce{constructor(t=new jn([new Mt(0,.5),new Mt(-.5,-.5),new Mt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new te(s,3)),this.setAttribute("normal",new te(r,3)),this.setAttribute("uv",new te(a,2));function c(h){let f=s.length/3,u=h.extractPoints(e),d=u.shape,g=u.holes;Vn.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,m=g.length;p<m;p++){let y=g[p];Vn.isClockWise(y)===!0&&(g[p]=y.reverse())}let x=Vn.triangulateShape(d,g);for(let p=0,m=g.length;p<m;p++){let y=g[p];d=d.concat(y)}for(let p=0,m=d.length;p<m;p++){let y=d[p];s.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let p=0,m=x.length;p<m;p++){let y=x[p],E=y[0]+f,S=y[1]+f,A=y[2]+f;i.push(E,S,A),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return xf(e,t)}static fromJSON(t,e){let i=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];i.push(a)}return new n(i,t.curveSegments)}};function xf(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){let s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}var is=class n extends Ce{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new F,u=new F,d=[],g=[],x=[],p=[];for(let m=0;m<=i;m++){let y=[],E=m/i,S=a+E*o,A=t*Math.cos(S),T=Math.sqrt(t*t-A*A),_=0;m===0&&a===0?_=.5/e:m===i&&l===Math.PI&&(_=-.5/e);for(let b=0;b<=e;b++){let L=b/e,C=s+L*r;f.x=-T*Math.cos(C),f.y=A,f.z=T*Math.sin(C),g.push(f.x,f.y,f.z),u.copy(f).normalize(),x.push(u.x,u.y,u.z),p.push(L+_,1-E),y.push(c++)}h.push(y)}for(let m=0;m<i;m++)for(let y=0;y<e;y++){let E=h[m][y+1],S=h[m][y],A=h[m+1][y],T=h[m+1][y+1];(m!==0||a>0)&&d.push(E,S,T),(m!==i-1||l<Math.PI)&&d.push(S,A,T)}this.setIndex(d),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(x,3)),this.setAttribute("uv",new te(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function En(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(yh(s))s.isRenderTargetTexture?(Pt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(yh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function Be(n){let t={};for(let e=0;e<n.length;e++){let i=En(n[e]);for(let s in i)t[s]=i[s]}return t}function yh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function vf(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function nc(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xt.workingColorSpace}var mu={clone:En,merge:Be},yf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ai=class extends Hi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yf,this.fragmentShader=Mf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=En(t.uniforms),this.uniformsGroups=vf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Bt().setHex(s.value);break;case"v2":this.uniforms[i].value=new Mt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new F().fromArray(s.value);break;case"v4":this.uniforms[i].value=new ce().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Dt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Kt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},va=class extends Ai{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ge=class extends Hi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mo,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var ya=class extends Hi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ma=class extends Hi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function zn(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function $r(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var nn=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];i:{t:{let a;e:{n:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break i}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Sa=class extends nn{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yl,endingEnd:yl}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ml:r=t,o=2*e-i;break;case Sl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Ml:a=t,l=2*i-e;break;case Sl:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,g=(i-e)/(s-e),x=g*g,p=x*g,m=-u*p+2*u*x-u*g,y=(1+u)*p+(-1.5-2*u)*x+(-.5+u)*g+1,E=(-1-d)*p+(1.5+d)*x+.5*g,S=d*p-d*x;for(let A=0;A!==o;++A)r[A]=m*a[h+A]+y*a[c+A]+E*a[l+A]+S*a[f+A];return r}},ba=class extends nn{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(s-e),f=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*f+a[l+u]*h;return r}},Ea=class extends nn{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ta=class extends nn{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let g=(i-e)/(s-e),x=1-g;for(let p=0;p!==o;++p)r[p]=a[c+p]*x+a[l+p]*g;return r}let u=o*2,d=t-1;for(let g=0;g!==o;++g){let x=a[c+g],p=a[l+g],m=d*u+g*2,y=f[m],E=f[m+1],S=t*u+g*2,A=h[S],T=h[S+1],_=bf(i,e,y,A,s);r[g]=gu(_,x,E,T,p)}return r}};function gu(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Sf(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function bf(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let o=gu(r,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let l=Sf(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Qe=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=zn(e,this.TimeBufferType),this.values=zn(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:zn(t.times,Array),values:zn(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),$r(t.settings)&&(i.settings={inTangents:zn(t.settings.inTangents,Array),outTangents:zn(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Ea(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ba(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Sa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ta(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Rs:e=this.InterpolantFactoryMethodDiscrete;break;case aa:e=this.InterpolantFactoryMethodLinear;break;case Jr:e=this.InterpolantFactoryMethodSmooth;break;case vl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Pt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Rs;case this.InterpolantFactoryMethodLinear:return aa;case this.InterpolantFactoryMethodSmooth:return Jr;case this.InterpolantFactoryMethodBezier:return vl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t;$r(this.settings)&&(Mh(this.settings.inTangents,t),Mh(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;$r(this.settings)&&(Sh(this.settings.inTangents,t),Sh(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Lt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Lt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Lt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Lt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Ed(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Lt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Jr,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let f=o*i,u=f-i,d=f+i;for(let g=0;g!==i;++g){let x=e[f+g];if(x!==e[u+g]||x!==e[d+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let f=o*i,u=a*i;for(let d=0;d!==i;++d)e[u+d]=e[f+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,$r(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Mh(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]+=t}function Sh(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}Qe.prototype.ValueTypeName="";Qe.prototype.TimeBufferType=Float32Array;Qe.prototype.ValueBufferType=Float32Array;Qe.prototype.DefaultInterpolation=aa;var sn=class extends Qe{constructor(t,e,i){super(t,e,i)}};sn.prototype.ValueTypeName="bool";sn.prototype.ValueBufferType=Array;sn.prototype.DefaultInterpolation=Rs;sn.prototype.InterpolantFactoryMethodLinear=void 0;sn.prototype.InterpolantFactoryMethodSmooth=void 0;var wa=class extends Qe{constructor(t,e,i,s){super(t,e,i,s)}};wa.prototype.ValueTypeName="color";var Aa=class extends Qe{constructor(t,e,i,s){super(t,e,i,s)}};Aa.prototype.ValueTypeName="number";var Ra=class extends nn{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Ze.slerpFlat(r,0,a,c-o,a,c,l);return r}},er=class extends Qe{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new Ra(this.times,this.values,this.getValueSize(),t)}};er.prototype.ValueTypeName="quaternion";er.prototype.InterpolantFactoryMethodSmooth=void 0;var rn=class extends Qe{constructor(t,e,i){super(t,e,i)}};rn.prototype.ValueTypeName="string";rn.prototype.ValueBufferType=Array;rn.prototype.DefaultInterpolation=Rs;rn.prototype.InterpolantFactoryMethodLinear=void 0;rn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ca=class extends Qe{constructor(t,e,i,s){super(t,e,i,s)}};Ca.prototype.ValueTypeName="vector";var Ia=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},_u=new Ia,Pa=class{constructor(t){this.manager=t!==void 0?t:_u,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Pa.DEFAULT_MATERIAL_NAME="__DEFAULT";var vn=class extends Re{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},ir=class extends vn{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},xl=new Kt,bh=new F,Eh=new F,nr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.mapType=Xe,this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new en,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;bh.setFromMatrixPosition(t.matrixWorld),e.position.copy(bh),Eh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Eh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){xl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(xl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Xn||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(xl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Yr=new F,Zr=new Ze,yi=new F,sr=class extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Yr,Zr,yi),yi.x===1&&yi.y===1&&yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yr,Zr,yi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Yr,Zr,yi),yi.x===1&&yi.y===1&&yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yr,Zr,yi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ji=new F,Th=new Mt,wh=new Mt,Oe=class extends sr{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=oa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Yo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return oa*2*Math.atan(Math.tan(Yo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ji.x,ji.y).multiplyScalar(-t/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ji.x,ji.y).multiplyScalar(-t/ji.z)}getViewSize(t,e){return this.getViewBounds(t,Th,wh),e.subVectors(wh,Th)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Yo*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Al=class extends nr{constructor(){super(new Oe(90,1,.5,500)),this.isPointLightShadow=!0}},rr=class extends vn{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Al}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},ar=class extends sr{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Rl=class extends nr{constructor(){super(new ar(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ns=class extends vn{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.shadow=new Rl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},or=class extends vn{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var kn=-90,Hn=1,ss=class extends Re{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Oe(kn,Hn,t,e);s.layers=this.layers,this.add(s);let r=new Oe(kn,Hn,t,e);r.layers=this.layers,this.add(r);let a=new Oe(kn,Hn,t,e);a.layers=this.layers,this.add(a);let o=new Oe(kn,Hn,t,e);o.layers=this.layers,this.add(o);let l=new Oe(kn,Hn,t,e);l.layers=this.layers,this.add(l);let c=new Oe(kn,Hn,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===ai)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Xn)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=x,t.setRenderTarget(i,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},La=class extends Oe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var sc="\\[\\]\\.:\\/",Ef=new RegExp("["+sc+"]","g"),rc="[^"+sc+"]",Tf="[^"+sc.replace("\\.","")+"]",wf=/((?:WC+[\/:])*)/.source.replace("WC",rc),Af=/(WCOD+)?/.source.replace("WCOD",Tf),Rf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rc),Cf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rc),If=new RegExp("^"+wf+Af+Rf+Cf+"$"),Pf=["material","materials","bones","map"],Cl=class{constructor(t,e,i){let s=i||ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},ae=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ef,"")}static parseTrackName(t){let e=If.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Pf.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Pt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Lt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Lt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Lt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Lt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Lt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Lt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Lt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Lt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Lt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Lt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ae.Composite=Cl;ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ae.prototype.GetterByBindingType=[ae.prototype._getValue_direct,ae.prototype._getValue_array,ae.prototype._getValue_arrayElement,ae.prototype._getValue_toArray];ae.prototype.SetterByBindingTypeAndVersioning=[[ae.prototype._setValue_direct,ae.prototype._setValue_direct_setNeedsUpdate,ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_array,ae.prototype._setValue_array_setNeedsUpdate,ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_arrayElement,ae.prototype._setValue_arrayElement_setNeedsUpdate,ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_fromArray,ae.prototype._setValue_fromArray_setNeedsUpdate,ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ox=new Float32Array(1);var uc=class uc{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};uc.prototype.isMatrix2=!0;var Il=uc;function ac(n,t,e,i){let s=Lf(i);switch(e){case Yl:return n*t;case ka:return n*t/s.components*s.byteLength;case Ha:return n*t/s.components*s.byteLength;case on:return n*t*2/s.components*s.byteLength;case Ga:return n*t*2/s.components*s.byteLength;case Zl:return n*t*3/s.components*s.byteLength;case _i:return n*t*4/s.components*s.byteLength;case Va:return n*t*4/s.components*s.byteLength;case dr:case fr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case pr:case mr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Xa:case $a:return Math.max(n,16)*Math.max(t,8)/4;case Wa:case qa:return Math.max(n,8)*Math.max(t,8)/2;case Ya:case Za:case Ka:case Qa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ja:case gr:case ja:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case to:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case eo:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case io:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case no:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case so:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case ro:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case ao:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case oo:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case lo:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case co:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case ho:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case uo:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case fo:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case po:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case mo:case go:case _o:return Math.ceil(n/4)*Math.ceil(t/4)*16;case xo:case vo:return Math.ceil(n/4)*Math.ceil(t/4)*8;case _r:case yo:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Lf(n){switch(n){case Xe:case Wl:return{byteLength:1,components:1};case cs:case Xl:case gi:return{byteLength:2,components:1};case Ba:case za:return{byteLength:2,components:4};case mi:case Oa:case oi:return{byteLength:4,components:1};case ql:case $l:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Pt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function zu(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Nf(n){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,f=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){let h=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){let g=f[u],x=f[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,f[u]=x)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){let x=f[d];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Uf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ff=`#ifdef USE_ALPHAHASH
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
#endif`,Of=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hf=`#ifdef USE_AOMAP
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
#endif`,Gf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vf=`#ifdef USE_BATCHING
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
#endif`,Wf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$f=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yf=`#ifdef USE_IRIDESCENCE
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
#endif`,Zf=`#ifdef USE_BUMPMAP
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
#endif`,Jf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Kf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ep=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ip=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,np=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,sp=`#define PI 3.141592653589793
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
} // validated`,rp=`vec3 transformedNormal = objectNormal;
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
#endif`,ap=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,op=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hp="gl_FragColor = linearToOutputTexel( gl_FragColor );",up=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dp=`#ifdef USE_ENVMAP
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
#endif`,fp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,pp=`#ifdef USE_ENVMAP
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
#endif`,mp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gp=`#ifdef USE_ENVMAP
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
#endif`,_p=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mp=`#ifdef USE_GRADIENTMAP
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
}`,Sp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ep=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,wp=`#ifdef USE_ENVMAP
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
#endif`,Ap=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ip=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pp=`PhysicalMaterial material;
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
#endif`,Lp=`uniform sampler2D dfgLUT;
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
}`,Dp=`
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
#endif`,Np=`#if defined( RE_IndirectDiffuse )
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
#endif`,Up=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fp=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Op=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wp=`#if defined( USE_POINTS_UV )
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
#endif`,Xp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$p=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yp=`#if defined( USE_MORPHCOLORS )
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
#endif`,Zp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jp=`#ifdef USE_MORPHTARGETS
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
#endif`,Kp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,im=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,nm=`#ifdef USE_NORMALMAP
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
#endif`,sm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,am=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,om=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,um=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_m=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vm=`float getShadowMask() {
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
}`,ym=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mm=`#ifdef USE_SKINNING
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
#endif`,Sm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bm=`#ifdef USE_SKINNING
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
#endif`,Em=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Am=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rm=`#ifdef USE_TRANSMISSION
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
#endif`,Cm=`#ifdef USE_TRANSMISSION
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
#endif`,Im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Nm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Um=`uniform sampler2D t2D;
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
}`,Fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Om=`uniform float backgroundBlurriness;
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
}`,Bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,km=`#include <common>
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
}`,Hm=`#if DEPTH_PACKING == 3200
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
}`,Gm=`#define DISTANCE
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
}`,Vm=`#define DISTANCE
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
}`,Wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qm=`uniform float scale;
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
}`,$m=`uniform vec3 diffuse;
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
}`,Ym=`#include <common>
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
}`,Zm=`uniform vec3 diffuse;
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
}`,Jm=`#define LAMBERT
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
}`,Km=`#define LAMBERT
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
}`,Qm=`#define MATCAP
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
}`,jm=`#define MATCAP
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
}`,tg=`#define NORMAL
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
}`,eg=`#define NORMAL
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
}`,ig=`#define PHONG
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
}`,ng=`#define PHONG
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
}`,sg=`#define STANDARD
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
}`,rg=`#define STANDARD
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
}`,ag=`#define TOON
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
}`,og=`#define TOON
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
}`,lg=`uniform float size;
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
}`,cg=`uniform vec3 diffuse;
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
}`,hg=`#include <common>
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
}`,ug=`uniform vec3 color;
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
}`,dg=`uniform float rotation;
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
}`,fg=`uniform vec3 diffuse;
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
}`,kt={alphahash_fragment:Uf,alphahash_pars_fragment:Ff,alphamap_fragment:Of,alphamap_pars_fragment:Bf,alphatest_fragment:zf,alphatest_pars_fragment:kf,aomap_fragment:Hf,aomap_pars_fragment:Gf,batching_pars_vertex:Vf,batching_vertex:Wf,begin_vertex:Xf,beginnormal_vertex:qf,bsdfs:$f,iridescence_fragment:Yf,bumpmap_pars_fragment:Zf,clipping_planes_fragment:Jf,clipping_planes_pars_fragment:Kf,clipping_planes_pars_vertex:Qf,clipping_planes_vertex:jf,color_fragment:tp,color_pars_fragment:ep,color_pars_vertex:ip,color_vertex:np,common:sp,defaultnormal_vertex:rp,displacementmap_pars_vertex:ap,displacementmap_vertex:op,emissivemap_fragment:lp,emissivemap_pars_fragment:cp,colorspace_fragment:hp,colorspace_pars_fragment:up,envmap_fragment:dp,envmap_common_pars_fragment:fp,envmap_pars_fragment:pp,envmap_pars_vertex:mp,envmap_physical_pars_fragment:wp,envmap_vertex:gp,fog_vertex:_p,fog_pars_vertex:xp,fog_fragment:vp,fog_pars_fragment:yp,gradientmap_pars_fragment:Mp,lightmap_pars_fragment:Sp,lights_lambert_fragment:bp,lights_lambert_pars_fragment:Ep,lights_pars_begin:Tp,lights_toon_fragment:Ap,lights_toon_pars_fragment:Rp,lights_phong_fragment:Cp,lights_phong_pars_fragment:Ip,lights_physical_fragment:Pp,lights_physical_pars_fragment:Lp,lights_fragment_begin:Dp,lights_fragment_maps:Np,lights_fragment_end:Up,lightprobes_pars_fragment:Fp,logdepthbuf_fragment:Op,logdepthbuf_pars_fragment:Bp,logdepthbuf_pars_vertex:zp,logdepthbuf_vertex:kp,map_fragment:Hp,map_pars_fragment:Gp,map_particle_fragment:Vp,map_particle_pars_fragment:Wp,metalnessmap_fragment:Xp,metalnessmap_pars_fragment:qp,morphinstance_vertex:$p,morphcolor_vertex:Yp,morphnormal_vertex:Zp,morphtarget_pars_vertex:Jp,morphtarget_vertex:Kp,normal_fragment_begin:Qp,normal_fragment_maps:jp,normal_pars_fragment:tm,normal_pars_vertex:em,normal_vertex:im,normalmap_pars_fragment:nm,clearcoat_normal_fragment_begin:sm,clearcoat_normal_fragment_maps:rm,clearcoat_pars_fragment:am,iridescence_pars_fragment:om,opaque_fragment:lm,packing:cm,premultiplied_alpha_fragment:hm,project_vertex:um,dithering_fragment:dm,dithering_pars_fragment:fm,roughnessmap_fragment:pm,roughnessmap_pars_fragment:mm,shadowmap_pars_fragment:gm,shadowmap_pars_vertex:_m,shadowmap_vertex:xm,shadowmask_pars_fragment:vm,skinbase_vertex:ym,skinning_pars_vertex:Mm,skinning_vertex:Sm,skinnormal_vertex:bm,specularmap_fragment:Em,specularmap_pars_fragment:Tm,tonemapping_fragment:wm,tonemapping_pars_fragment:Am,transmission_fragment:Rm,transmission_pars_fragment:Cm,uv_pars_fragment:Im,uv_pars_vertex:Pm,uv_vertex:Lm,worldpos_vertex:Dm,background_vert:Nm,background_frag:Um,backgroundCube_vert:Fm,backgroundCube_frag:Om,cube_vert:Bm,cube_frag:zm,depth_vert:km,depth_frag:Hm,distance_vert:Gm,distance_frag:Vm,equirect_vert:Wm,equirect_frag:Xm,linedashed_vert:qm,linedashed_frag:$m,meshbasic_vert:Ym,meshbasic_frag:Zm,meshlambert_vert:Jm,meshlambert_frag:Km,meshmatcap_vert:Qm,meshmatcap_frag:jm,meshnormal_vert:tg,meshnormal_frag:eg,meshphong_vert:ig,meshphong_frag:ng,meshphysical_vert:sg,meshphysical_frag:rg,meshtoon_vert:ag,meshtoon_frag:og,points_vert:lg,points_frag:cg,shadow_vert:hg,shadow_frag:ug,sprite_vert:dg,sprite_frag:fg},xt={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Dt}},envmap:{envMap:{value:null},envMapRotation:{value:new Dt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Dt},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}}},Ii={basic:{uniforms:Be([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:Be([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Bt(0)},envMapIntensity:{value:1}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:Be([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:Be([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:Be([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:Be([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:Be([xt.points,xt.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:Be([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:Be([xt.common,xt.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:Be([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:Be([xt.sprite,xt.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Dt}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distance:{uniforms:Be([xt.common,xt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distance_vert,fragmentShader:kt.distance_frag},shadow:{uniforms:Be([xt.lights,xt.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};Ii.physical={uniforms:Be([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Dt},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Dt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Dt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Dt},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Dt},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Dt},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Dt},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Dt}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};var So={r:0,b:0,g:0},pg=new Kt,ku=new Dt;ku.set(-1,0,0,0,1,0,0,0,1);function mg(n,t,e,i,s,r){let a=new Bt(0),o=s===!0?0:1,l,c,h=null,f=0,u=null;function d(y){let E=y.isScene===!0?y.background:null;if(E&&E.isTexture){let S=y.backgroundBlurriness>0;E=t.get(E,S)}return E}function g(y){let E=!1,S=d(y);S===null?p(a,o):S&&S.isColor&&(p(S,1),E=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(y,E){let S=d(E);S&&S.isCubeTexture?(c===void 0&&(c=new qt(new Ti(1,1,1),new Ai({name:"BackgroundCubeMaterial",uniforms:En(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:Ie,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,T,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(pg.makeRotationFromEuler(E.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ku),c.material.toneMapped=Xt.getTransfer(S.colorSpace)!==jt,(h!==S||f!==S.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,u=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new qt(new xn(2,2),new Ai({name:"BackgroundMaterial",uniforms:En(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Xt.getTransfer(S.colorSpace)!==jt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=S,f=S.version,u=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,E){y.getRGB(So,nc(n)),e.buffers.color.setClear(So.r,So.g,So.b,E,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,E=1){a.set(y),o=E,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,p(a,o)},render:g,addToRenderList:x,dispose:m}}function gg(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(N,B,q,R,z){let V=!1,X=f(N,R,q,B);r!==X&&(r=X,c(r.object)),V=d(N,R,q,z),V&&g(N,R,q,z),z!==null&&t.update(z,n.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,S(N,B,q,R),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return n.createVertexArray()}function c(N){return n.bindVertexArray(N)}function h(N){return n.deleteVertexArray(N)}function f(N,B,q,R){let z=R.wireframe===!0,V=i[B.id];V===void 0&&(V={},i[B.id]=V);let X=N.isInstancedMesh===!0?N.id:0,nt=V[X];nt===void 0&&(nt={},V[X]=nt);let P=nt[q.id];P===void 0&&(P={},nt[q.id]=P);let W=P[z];return W===void 0&&(W=u(l()),P[z]=W),W}function u(N){let B=[],q=[],R=[];for(let z=0;z<e;z++)B[z]=0,q[z]=0,R[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:q,attributeDivisors:R,object:N,attributes:{},index:null}}function d(N,B,q,R){let z=r.attributes,V=B.attributes,X=0,nt=q.getAttributes();for(let P in nt)if(nt[P].location>=0){let J=z[P],dt=V[P];if(dt===void 0&&(P==="instanceMatrix"&&N.instanceMatrix&&(dt=N.instanceMatrix),P==="instanceColor"&&N.instanceColor&&(dt=N.instanceColor)),J===void 0||J.attribute!==dt||dt&&J.data!==dt.data)return!0;X++}return r.attributesNum!==X||r.index!==R}function g(N,B,q,R){let z={},V=B.attributes,X=0,nt=q.getAttributes();for(let P in nt)if(nt[P].location>=0){let J=V[P];J===void 0&&(P==="instanceMatrix"&&N.instanceMatrix&&(J=N.instanceMatrix),P==="instanceColor"&&N.instanceColor&&(J=N.instanceColor));let dt={};dt.attribute=J,J&&J.data&&(dt.data=J.data),z[P]=dt,X++}r.attributes=z,r.attributesNum=X,r.index=R}function x(){let N=r.newAttributes;for(let B=0,q=N.length;B<q;B++)N[B]=0}function p(N){m(N,0)}function m(N,B){let q=r.newAttributes,R=r.enabledAttributes,z=r.attributeDivisors;q[N]=1,R[N]===0&&(n.enableVertexAttribArray(N),R[N]=1),z[N]!==B&&(n.vertexAttribDivisor(N,B),z[N]=B)}function y(){let N=r.newAttributes,B=r.enabledAttributes;for(let q=0,R=B.length;q<R;q++)B[q]!==N[q]&&(n.disableVertexAttribArray(q),B[q]=0)}function E(N,B,q,R,z,V,X){X===!0?n.vertexAttribIPointer(N,B,q,z,V):n.vertexAttribPointer(N,B,q,R,z,V)}function S(N,B,q,R){x();let z=R.attributes,V=q.getAttributes(),X=B.defaultAttributeValues;for(let nt in V){let P=V[nt];if(P.location>=0){let W=z[nt];if(W===void 0&&(nt==="instanceMatrix"&&N.instanceMatrix&&(W=N.instanceMatrix),nt==="instanceColor"&&N.instanceColor&&(W=N.instanceColor)),W!==void 0){let J=W.normalized,dt=W.itemSize,Tt=t.get(W);if(Tt===void 0)continue;let K=Tt.buffer,mt=Tt.type,U=Tt.bytesPerElement,Y=mt===n.INT||mt===n.UNSIGNED_INT||W.gpuType===Oa;if(W.isInterleavedBufferAttribute){let et=W.data,yt=et.isInterleavedBuffer===!0?et.stride:et.itemSize,$t=W.offset;if(et.isInstancedInterleavedBuffer||et.isInstancedBufferAttribute){for(let At=0;At<P.locationSize;At++)m(P.location+At,et.meshPerAttribute);N.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let At=0;At<P.locationSize;At++)p(P.location+At);n.bindBuffer(n.ARRAY_BUFFER,K);for(let At=0;At<P.locationSize;At++)E(P.location+At,dt/P.locationSize,mt,J,yt*U,($t+dt/P.locationSize*At)*U,Y)}else{if(W.isInstancedBufferAttribute){for(let et=0;et<P.locationSize;et++)m(P.location+et,W.meshPerAttribute);N.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let et=0;et<P.locationSize;et++)p(P.location+et);n.bindBuffer(n.ARRAY_BUFFER,K);for(let et=0;et<P.locationSize;et++)E(P.location+et,dt/P.locationSize,mt,J,dt*U,dt/P.locationSize*et*U,Y)}}else if(X!==void 0){let J=X[nt];if(J!==void 0)switch(J.length){case 2:n.vertexAttrib2fv(P.location,J);break;case 3:n.vertexAttrib3fv(P.location,J);break;case 4:n.vertexAttrib4fv(P.location,J);break;default:n.vertexAttrib1fv(P.location,J)}}}}y()}function A(){L();for(let N in i){let B=i[N];for(let q in B){let R=B[q];for(let z in R){let V=R[z];for(let X in V)h(V[X].object),delete V[X];delete R[z]}}delete i[N]}}function T(N){if(i[N.id]===void 0)return;let B=i[N.id];for(let q in B){let R=B[q];for(let z in R){let V=R[z];for(let X in V)h(V[X].object),delete V[X];delete R[z]}}delete i[N.id]}function _(N){for(let B in i){let q=i[B];for(let R in q){let z=q[R];if(z[N.id]===void 0)continue;let V=z[N.id];for(let X in V)h(V[X].object),delete V[X];delete z[N.id]}}}function b(N){for(let B in i){let q=i[B],R=N.isInstancedMesh===!0?N.id:0,z=q[R];if(z!==void 0){for(let V in z){let X=z[V];for(let nt in X)h(X[nt].object),delete X[nt];delete z[V]}delete q[R],Object.keys(q).length===0&&delete i[B]}}}function L(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:C,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:b,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:p,disableUnusedAttributes:y}}function _g(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];e.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function xg(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==_i&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let b=_===gi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==Xe&&_!==oi&&!b&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Pt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&f===!1;e.reversedDepthBuffer===!0&&f===!1&&Pt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&f===!0&&Pt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:S,maxSamples:A,samples:T}}function vg(n){let t=this,e=null,i=0,s=!1,r=!1,a=new fi,o=new Dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||i!==0||s;return s=u,i=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let g=f.clippingPlanes,x=f.clipIntersection,p=f.clipShadows,m=n.get(f);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let y=r?0:i,E=y*4,S=m.clippingState||null;l.value=S,S=h(g,u,E,d);for(let A=0;A!==E;++A)S[A]=e[A];m.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(f,u,d,g){let x=f!==null?f.length:0,p=null;if(x!==0){if(p=l.value,g!==!0||p===null){let m=d+x*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let E=0,S=d;E!==x;++E,S+=4)a.copy(f[E]).applyMatrix4(y,o),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}var yr=class extends Je{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Gs(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ti(5,5,5),r=new Ai({name:"CubemapFromEquirect",uniforms:En(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ie,blending:yn});r.uniforms.tEquirect.value=e;let a=new qt(s,r),o=e.minFilter;return e.minFilter===Vi&&(e.minFilter=ke),new ss(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}},xu=256,yg=3,Mg=20,Hu=256,Gu=16,Sg=3,bg=new F,Eg=new Bt,ds=class n{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ss(1,10,null),this._boxMesh=new qt(new Ti(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=bg}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,u=l.autoClearColor,d=l.autoClearDepth,g=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(Eg));let p=new ss(i,s,h);return p.position.copy(o),p.update(l,t),l.autoClear=f,l.autoClearColor=u,l.autoClearDepth=d,l.autoClearStencil=g,t.background=x,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(xu,cu(t))}_fromTexture(t,e){t.mapping===Sn||t.mapping===os?this._setSize(t.image.length===0?xu:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=vu(t,!1,!1),i=Math.log2(t)-yg;for(let s=0;s<=i;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=vu(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Sn||t.mapping===os?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mu()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=yu()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Tg(),this._integrationMaterial=wg());let e=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Gu);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-Sg)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(Hu*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Ag());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(r,0,i)}};function vu(n,t,e){return new yr(n,{minFilter:Vi,generateMipmaps:t,type:gi,colorSpace:Cs,depthBuffer:e})}function Mr(n,t,e){return new Ai({name:n,uniforms:t,vertexShader:kt.cube_vert,fragmentShader:e,side:Ie,blending:yn,depthTest:!1,depthWrite:!1})}function Tg(){return Mr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Hu}u

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
	`)}function wg(){return Mr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Gu}},`

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
	`)}function Ag(){return Mr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Mg}
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
	`)}function yu(){return Mr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Mu(){return Mr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Rg(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===ls||d===Ua)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let x=new yr(g.height);return x.fromEquirectangularTexture(n,u),t.set(u,x),u.addEventListener("dispose",c),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let d=u.mapping,g=d===ls||d===Ua,x=d===Sn||d===os;if(g||x){let p=e.get(u),m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return i===null&&(i=new ds(n)),p=g?i.fromEquirectangular(u,p):i.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{let y=u.image;return g&&y&&y.height>0||x&&y&&l(y)?(i===null&&(i=new ds(n)),p=g?i.fromEquirectangular(u):i.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,d){return d===ls?u.mapping=Sn:d===Ua&&(u.mapping=os),u}function l(u){let d=0,g=6;for(let x=0;x<g;x++)u[x]!==void 0&&d++;return d===g}function c(u){let d=u.target;d.removeEventListener("dispose",c);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function Cg(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Ts("WebGLRenderer: "+i+" extension not supported."),s}}}function Ig(n,t,e,i){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&t.remove(g.index);for(let p in g.attributes)t.remove(g.attributes[p]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let x=r.get(g);x&&(t.remove(x),r.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function c(g,x){return s[x.id]!==void 0||(x.addEventListener("dispose",o),s[x.id]=new WeakRef(x),a.register(x,x.id,x),e.memory.geometries++),x}function h(g){let x=g.attributes;for(let p in x)t.update(x[p],n.ARRAY_BUFFER)}function f(g){let x=g.index,p=g.attributes.position,m=0;if(p===void 0)return;let y=x!==null?x.array.length:p.array.length/3-1,E=p.count>=65535?Os:Fs,S=new E(Math.ceil(y/3)*6,1),A=S.array;if(x!==null){let _=x.array;m=x.version;for(let b=0,L=0;b<y;b+=3){let C=_[b+0],N=_[b+1],B=_[b+2];A[L++]=C,A[L++]=N,A[L++]=N,A[L++]=B,A[L++]=B,A[L++]=C}}else{m=p.version;for(let _=0,b=0;_<y;_+=3){let L=_+0,C=_+1,N=_+2;A[b++]=L,A[b++]=C,A[b++]=C,A[b++]=N,A[b++]=N,A[b++]=L}}S.version=m;let T=r.get(g);T&&t.remove(T),r.set(g,S)}function u(g){let x=r.get(g);if(x){let p=g.index;p!==null&&x.version<p.version&&f(g)}else f(g);return r.get(g)}function d(){for(let g in s){let x=s[g].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:u,dispose:d}}function Pg(n,t,e){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){n.drawElements(i,u,r,f*a),e.update(u,i,1)}function c(f,u,d){d!==0&&(n.drawElementsInstanced(i,u,r,f*a,d),e.update(u,i,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,f,0,d);let x=0;for(let p=0;p<d;p++)x+=u[p];e.update(x,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Lg(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:Lt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Dg(n,t,e){let i=new WeakMap,s=new ce;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==f){let L=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",L)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],E=0;d===!0&&(E=1),g===!0&&(E=2),x===!0&&(E=3);let S=o.attributes.position.count*E,A=1;S>t.maxTextureSize&&(A=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let T=new Float32Array(S*A*4*f),_=new Ls(T,S,A,f);_.type=oi,_.needsUpdate=!0;let b=E*4;for(let C=0;C<f;C++){let N=p[C],B=m[C],q=y[C],R=S*A*4*C;for(let z=0;z<N.count;z++){let V=z*b;d===!0&&(s.fromBufferAttribute(N,z),T[R+V+0]=s.x,T[R+V+1]=s.y,T[R+V+2]=s.z,T[R+V+3]=0),g===!0&&(s.fromBufferAttribute(B,z),T[R+V+4]=s.x,T[R+V+5]=s.y,T[R+V+6]=s.z,T[R+V+7]=0),x===!0&&(s.fromBufferAttribute(q,z),T[R+V+8]=s.x,T[R+V+9]=s.y,T[R+V+10]=s.z,T[R+V+11]=q.itemSize===4?s.w:1)}}u={count:f,texture:_,size:new Mt(S,A)},i.set(o,u),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function Ng(n,t,e,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,f=c.geometry,u=t.get(c,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Ug={[Ol]:"LINEAR_TONE_MAPPING",[Bl]:"REINHARD_TONE_MAPPING",[zl]:"CINEON_TONE_MAPPING",[hr]:"ACES_FILMIC_TONE_MAPPING",[Hl]:"AGX_TONE_MAPPING",[Gl]:"NEUTRAL_TONE_MAPPING",[kl]:"CUSTOM_TONE_MAPPING"};function Fg(n,t,e,i,s,r){let a=new Je(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Ce;h.setAttribute("position",new te([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new te([0,2,0,0,2,0],2));let f=new va({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new qt(h,f),d=new ar(-1,1,1,-1,0,1),g=null,x=null,p=!1,m,y=null,E=[],S=!1;this.setSize=function(A,T){a.setSize(A,T),o!==null&&o.setSize(A,T),l!==null&&l.setSize(A,T);for(let _=0;_<E.length;_++){let b=E[_];b.setSize&&b.setSize(A,T)}},this.setEffects=function(A){E=A,S=E.length>0&&E[0].isRenderPass===!0;let T=a.width,_=a.height;E.length>0&&o===null&&(o=new Je(T,_,{type:gi,depthBuffer:!1,stencilBuffer:!1}),l=new Je(T,_,{type:gi,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&E.some(L=>L.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new Gi(T,_),r===!0&&(c.format=Wi,c.type=bn)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let L=0;L<E.length;L++){let C=E[L];C.setSize&&C.setSize(T,_),b&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(A,T){if(p||A.toneMapping===Ri&&E.length===0)return!1;if(y=T,T!==null){let _=T.width,b=T.height;(a.width!==_||a.height!==b)&&this.setSize(_,b)}return S===!1&&A.setRenderTarget(a),m=A.toneMapping,A.toneMapping=Ri,!0},this.hasRenderPass=function(){return S},this.end=function(A,T){A.toneMapping=m,p=!0;let _=a,b=o;for(let L=0;L<E.length;L++){let C=E[L];C.enabled!==!1&&(C.render(A,b,_,T),C.needsSwap!==!1&&(_=b,b=b===o?l:o))}if(g!==A.outputColorSpace||x!==A.toneMapping){g=A.outputColorSpace,x=A.toneMapping,f.defines={},Xt.getTransfer(g)===jt&&(f.defines.SRGB_TRANSFER="");let L=Ug[x];L&&(f.defines[L]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=_.texture,A.setRenderTarget(y),A.render(u,d),y=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),f.dispose()}}var Vu=new He,Wu=new Gi(1,1),Xu=new Ws(1),qu=new Ls,$u=new ha,Yu=new Gs,Su=[],bu=[],Eu=new Float32Array(16),Tu=new Float32Array(9),wu=new Float32Array(4);function fs(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Su[s];if(r===void 0&&(r=new Float32Array(s),Su[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function ve(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ye(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function To(n,t){let e=bu[t];e===void 0&&(e=new Int32Array(t),bu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Og(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Bg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;n.uniform2fv(this.addr,t),ye(e,t)}}function zg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;n.uniform3fv(this.addr,t),ye(e,t)}}function kg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;n.uniform4fv(this.addr,t),ye(e,t)}}function Hg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(ve(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(ve(e,i))return;wu.set(i),n.uniformMatrix2fv(this.addr,!1,wu),ye(e,i)}}function Gg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(ve(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(ve(e,i))return;Tu.set(i),n.uniformMatrix3fv(this.addr,!1,Tu),ye(e,i)}}function Vg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(ve(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(ve(e,i))return;Eu.set(i),n.uniformMatrix4fv(this.addr,!1,Eu),ye(e,i)}}function Wg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Xg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;n.uniform2iv(this.addr,t),ye(e,t)}}function qg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;n.uniform3iv(this.addr,t),ye(e,t)}}function $g(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;n.uniform4iv(this.addr,t),ye(e,t)}}function Yg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Zg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;n.uniform2uiv(this.addr,t),ye(e,t)}}function Jg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;n.uniform3uiv(this.addr,t),ye(e,t)}}function Kg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;n.uniform4uiv(this.addr,t),ye(e,t)}}function wo(n){return n.version===0&&(n.compareFunction=Ql,n.needsUpdate=!0),n}function Qg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=wo(Wu):r=Vu,e.setTexture2D(t||r,s)}function jg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||$u,s)}function t0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=wo(Xu):r=Yu,e.setTextureCube(t||r,s)}function e0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||qu,s)}function i0(n){switch(n){case 5126:return Og;case 35664:return Bg;case 35665:return zg;case 35666:return kg;case 35674:return Hg;case 35675:return Gg;case 35676:return Vg;case 5124:case 35670:return Wg;case 35667:case 35671:return Xg;case 35668:case 35672:return qg;case 35669:case 35673:return $g;case 5125:return Yg;case 36294:return Zg;case 36295:return Jg;case 36296:return Kg;case 35678:case 36198:case 36298:case 36306:case 35682:return Qg;case 35679:case 36299:case 36307:return jg;case 35680:case 36300:case 36308:case 36293:return t0;case 36289:case 36303:case 36311:case 36292:return e0}}function n0(n,t){n.uniform1fv(this.addr,t)}function s0(n,t){let e=fs(t,this.size,2);n.uniform2fv(this.addr,e)}function r0(n,t){let e=fs(t,this.size,3);n.uniform3fv(this.addr,e)}function a0(n,t){let e=fs(t,this.size,4);n.uniform4fv(this.addr,e)}function o0(n,t){let e=fs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function l0(n,t){let e=fs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function c0(n,t){let e=fs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function h0(n,t){n.uniform1iv(this.addr,t)}function u0(n,t){n.uniform2iv(this.addr,t)}function d0(n,t){n.uniform3iv(this.addr,t)}function f0(n,t){n.uniform4iv(this.addr,t)}function p0(n,t){n.uniform1uiv(this.addr,t)}function m0(n,t){n.uniform2uiv(this.addr,t)}function g0(n,t){n.uniform3uiv(this.addr,t)}function _0(n,t){n.uniform4uiv(this.addr,t)}function x0(n,t,e){let i=this.cache,s=t.length,r=To(e,s);ve(i,r)||(n.uniform1iv(this.addr,r),ye(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=wo(Wu):a=Vu;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function v0(n,t,e){let i=this.cache,s=t.length,r=To(e,s);ve(i,r)||(n.uniform1iv(this.addr,r),ye(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||$u,r[a])}function y0(n,t,e){let i=this.cache,s=t.length,r=To(e,s);ve(i,r)||(n.uniform1iv(this.addr,r),ye(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=wo(Xu):a=Yu;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function M0(n,t,e){let i=this.cache,s=t.length,r=To(e,s);ve(i,r)||(n.uniform1iv(this.addr,r),ye(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||qu,r[a])}function S0(n){switch(n){case 5126:return n0;case 35664:return s0;case 35665:return r0;case 35666:return a0;case 35674:return o0;case 35675:return l0;case 35676:return c0;case 5124:case 35670:return h0;case 35667:case 35671:return u0;case 35668:case 35672:return d0;case 35669:case 35673:return f0;case 5125:return p0;case 36294:return m0;case 36295:return g0;case 36296:return _0;case 35678:case 36198:case 36298:case 36306:case 35682:return x0;case 35679:case 36299:case 36307:return v0;case 35680:case 36300:case 36308:case 36293:return y0;case 36289:case 36303:case 36311:case 36292:return M0}}var pc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=i0(e.type)}},mc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=S0(e.type)}},gc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},dc=/(\w+)(\])?(\[|\.)?/g;function Au(n,t){n.seq.push(t),n.map[t.id]=t}function b0(n,t,e){let i=n.name,s=i.length;for(dc.lastIndex=0;;){let r=dc.exec(i),a=dc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Au(e,c===void 0?new pc(o,n,t):new mc(o,n,t));break}else{let f=e.map[o];f===void 0&&(f=new gc(o),Au(e,f)),e=f}}}var us=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);b0(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function Ru(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var E0=37297,T0=0;function w0(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var Cu=new Dt;function A0(n){Xt._getMatrix(Cu,Xt.workingColorSpace,n);let t=`mat3( ${Cu.elements.map(e=>e.toFixed(4))} )`;switch(Xt.getTransfer(n)){case Is:return[t,"LinearTransferOETF"];case jt:return[t,"sRGBTransferOETF"];default:return Pt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Iu(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+w0(n.getShaderSource(t),o)}else return r}function R0(n,t){let e=A0(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var C0={[Ol]:"Linear",[Bl]:"Reinhard",[zl]:"Cineon",[hr]:"ACESFilmic",[Hl]:"AgX",[Gl]:"Neutral",[kl]:"Custom"};function I0(n,t){let e=C0[t];return e===void 0?(Pt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var bo=new F;function P0(){Xt.getLuminanceCoefficients(bo);let n=bo.x.toFixed(4),t=bo.y.toFixed(4),e=bo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function L0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vr).join(`
`)}function D0(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function N0(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function vr(n){return n!==""}function Pu(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Lu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var U0=/^[ \t]*#include +<([\w\d./]+)>/gm;function _c(n){return n.replace(U0,F0)}function F0(n,t){let e=kt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return _c(e)}var O0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Du(n){return n.replace(O0,B0)}function B0(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Nu(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var z0={[lr]:"SHADOWMAP_TYPE_PCF",[rs]:"SHADOWMAP_TYPE_VSM"};function k0(n){return z0[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var H0={[os]:"ENVMAP_MODE_REFRACTION"};function G0(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":H0[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var V0={[Fl]:"ENVMAP_BLENDING_MULTIPLY",[$h]:"ENVMAP_BLENDING_MIX",[Yh]:"ENVMAP_BLENDING_ADD"};function W0(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":V0[n.combine]||"ENVMAP_BLENDING_NONE"}function X0(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=k0(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=G0(e),f=W0(e),u=L0(e),d=D0(r),g=s.createProgram(),x,p,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(vr).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(vr).join(`
`),p.length>0&&(p+=`
`)):(x=[Nu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vr).join(`
`),p=[Nu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ri?"#define TONE_MAPPING":"",e.toneMapping!==Ri?kt.tonemapping_pars_fragment:"",e.toneMapping!==Ri?I0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,R0("linearToOutputTexel",e.outputColorSpace),P0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(vr).join(`
`)),a=_c(a),a=Pu(a,e),a=Lu(a,e),o=_c(o),o=Pu(o,e),o=Lu(o,e),a=Du(a),o=Du(o),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,x=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",e.glslVersion===jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=m+x+a,E=m+p+o,S=Ru(s,s.VERTEX_SHADER,y),A=Ru(s,s.FRAGMENT_SHADER,E);s.attachShader(g,S),s.attachShader(g,A),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function T(C){if(n.debug.checkShaderErrors){let N=s.getProgramInfoLog(g)||"",B=s.getShaderInfoLog(S)||"",q=s.getShaderInfoLog(A)||"",R=N.trim(),z=B.trim(),V=q.trim(),X=!0,nt=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,S,A);else{let P=Iu(s,S,"vertex"),W=Iu(s,A,"fragment");Lt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+R+`
`+P+`
`+W)}else R!==""?Pt("WebGLProgram: Program Info Log:",R):(z===""||V==="")&&(nt=!1);nt&&(C.diagnostics={runnable:X,programLog:R,vertexShader:{log:z,prefix:x},fragmentShader:{log:V,prefix:p}})}s.deleteShader(S),s.deleteShader(A),_=new us(s,g),b=N0(s,g)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(g,E0)),L},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=T0++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=A,this}var q0=0,xc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new vc(t),e.set(t,i)),i}},vc=class{constructor(t){this.id=q0++,this.code=t,this.usedTimes=0}};function $0(n){return n===on||n===gr||n===_r}function Y0(n,t,e,i,s,r){let a=new Ds,o=new xc,l=new Set,c=[],h=new Map,f=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,b,L,C,N,B){let q=C.fog,R=N.geometry,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,X=t.get(_.envMap||z,V),nt=u[_.type],P=i.precision;_.precision!==null&&(P=i.getMaxPrecision(_.precision),P!==_.precision&&Pt("WebGLProgram.getParameters:",_.precision,"not supported, using",P,"instead."));let W=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,J=W!==void 0?W.length:0,dt=0;R.morphAttributes.position!==void 0&&(dt=1),R.morphAttributes.normal!==void 0&&(dt=2),R.morphAttributes.color!==void 0&&(dt=3);let Tt,K,mt,U;if(nt){let _t=Ii[nt];Tt=_t.vertexShader,K=_t.fragmentShader}else{Tt=_.vertexShader,K=_.fragmentShader;let _t=o.getVertexShaderStage(_),ie=o.getFragmentShaderStage(_);o.update(_,_t,ie),mt=_t.id,U=ie.id}let Y=n.getRenderTarget(),et=n.state.buffers.depth.getReversed(),yt=N.isInstancedMesh===!0,$t=N.isBatchedMesh===!0,At=!!_.map,ee=!!_.matcap,ne=!!X,Gt=ne&&X.isPMREMTexture===!0,we=!!_.aoMap,ge=!!_.lightMap,We=!!_.bumpMap&&_.wireframe===!1,he=!!_.normalMap,vi=!!_.displacementMap,Me=!!_.emissiveMap,ei=!!_.metalnessMap,ii=!!_.roughnessMap,ni=_.anisotropy>0,O=_.clearcoat>0,si=_.diffuseRoughness>0,oe=_.dispersion>0,le=_.retroreflectivity>0,gt=_.iridescence>0,_e=_.sheen>0,It=_.transmission>0,Nt=ni&&!!_.anisotropyMap,w=O&&!!_.clearcoatMap,v=O&&!!_.clearcoatNormalMap,H=O&&!!_.clearcoatRoughnessMap,st=si&&!!_.diffuseRoughnessMap,it=gt&&!!_.iridescenceMap,ot=gt&&!!_.iridescenceThicknessMap,ft=_e&&!!_.sheenColorMap,Q=_e&&!!_.sheenRoughnessMap,j=!!_.specularMap,ct=!!_.specularColorMap,I=!!_.specularIntensityMap,tt=It&&!!_.transmissionMap,Z=It&&!!_.thicknessMap,ht=!!_.gradientMap,at=!!_.alphaMap,lt=_.alphaTest>0,Rt=!!_.alphaHash,zt=!!_.extensions,rt=Ri;_.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(rt=n.toneMapping);let Ct=Gt?X.isCompressedCubeTexture?X.image[0].mipmaps:X.mipmaps:null,Ot={shaderID:nt,shaderType:_.type,shaderName:_.name,vertexShader:Tt,fragmentShader:K,defines:_.defines,customVertexShaderID:mt,customFragmentShaderID:U,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:P,batching:$t,batchingColor:$t&&N._colorsTexture!==null,instancing:yt,instancingColor:yt&&N.instanceColor!==null,instancingMorph:yt&&N.morphTexture!==null,outputColorSpace:Y===null?n.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Xt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:At,matcap:ee,envMap:ne,envMapMode:ne&&X.mapping,envMapPMREM:Gt,envMapMaxLod:Gt?Ct.length-1:null,envMapSize:Gt?Ct[0].width:null,aoMap:we,lightMap:ge,bumpMap:We,normalMap:he,displacementMap:vi,emissiveMap:Me,normalMapObjectSpace:he&&_.normalMapType===Kh,normalMapTangentSpace:he&&_.normalMapType===Mo,packedNormalMap:he&&_.normalMapType===Mo&&$0(_.normalMap.format),metalnessMap:ei,roughnessMap:ii,anisotropy:ni,anisotropyMap:Nt,clearcoat:O,clearcoatMap:w,clearcoatNormalMap:v,clearcoatRoughnessMap:H,diffuseRoughness:si,diffuseRoughnessMap:st,dispersion:oe,retroreflection:le,iridescence:gt,iridescenceMap:it,iridescenceThicknessMap:ot,sheen:_e,sheenColorMap:ft,sheenRoughnessMap:Q,specularMap:j,specularColorMap:ct,specularIntensityMap:I,transmission:It,transmissionMap:tt,thicknessMap:Z,gradientMap:ht,opaque:_.transparent===!1&&_.blending===as&&_.alphaToCoverage===!1,alphaMap:at,alphaTest:lt,alphaHash:Rt,combine:_.combine,mapUv:At&&d(_.map.channel),aoMapUv:we&&d(_.aoMap.channel),lightMapUv:ge&&d(_.lightMap.channel),bumpMapUv:We&&d(_.bumpMap.channel),normalMapUv:he&&d(_.normalMap.channel),displacementMapUv:vi&&d(_.displacementMap.channel),emissiveMapUv:Me&&d(_.emissiveMap.channel),metalnessMapUv:ei&&d(_.metalnessMap.channel),roughnessMapUv:ii&&d(_.roughnessMap.channel),anisotropyMapUv:Nt&&d(_.anisotropyMap.channel),clearcoatMapUv:w&&d(_.clearcoatMap.channel),clearcoatNormalMapUv:v&&d(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H&&d(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:st&&d(_.diffuseRoughnessMap.channel),iridescenceMapUv:it&&d(_.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&d(_.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&d(_.sheenColorMap.channel),sheenRoughnessMapUv:Q&&d(_.sheenRoughnessMap.channel),specularMapUv:j&&d(_.specularMap.channel),specularColorMapUv:ct&&d(_.specularColorMap.channel),specularIntensityMapUv:I&&d(_.specularIntensityMap.channel),transmissionMapUv:tt&&d(_.transmissionMap.channel),thicknessMapUv:Z&&d(_.thicknessMap.channel),alphaMapUv:at&&d(_.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(he||ni),vertexNormals:!!R.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!R.attributes.uv&&(At||at),fog:!!q,useFog:_.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||R.attributes.normal===void 0&&he===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:et,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:dt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:B.filter(_t=>_t.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:rt,decodeVideoTexture:At&&_.map.isVideoTexture===!0&&Xt.getTransfer(_.map.colorSpace)===jt,decodeVideoTextureEmissive:Me&&_.emissiveMap.isVideoTexture===!0&&Xt.getTransfer(_.emissiveMap.colorSpace)===jt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===me,flipSided:_.side===Ie,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:zt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&_.extensions.multiDraw===!0||$t)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ot.vertexUv1s=l.has(1),Ot.vertexUv2s=l.has(2),Ot.vertexUv3s=l.has(3),l.clear(),Ot}function x(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let L in _.defines)b.push(L),b.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(p(b,_),m(b,_),b.push(n.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function p(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapPMREM),_.push(b.envMapMaxLod),_.push(b.envMapSize),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.diffuseRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.numLightProbeGrids),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function m(_,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function y(_){let b=u[_.type],L;if(b){let C=Ii[b];L=mu.clone(C.uniforms)}else L=_.uniforms;return L}function E(_,b){let L=h.get(b);return L!==void 0?++L.usedTimes:(L=new X0(n,b,_,s),c.push(L),h.set(b,L)),L}function S(_){if(--_.usedTimes===0){let b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function A(_){o.remove(_)}function T(){o.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:y,acquireProgram:E,releaseProgram:S,releaseShaderCache:A,programs:c,dispose:T}}function Z0(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function J0(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Uu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Fu(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,g,x,p,m){let y=n[t];return y===void 0?(y={id:u.id,object:u,geometry:d,material:g,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:p,group:m},n[t]=y):(y.id=u.id,y.object=u,y.geometry=d,y.material=g,y.materialVariant=a(u),y.groupOrder=x,y.renderOrder=u.renderOrder,y.z=p,y.group=m),t++,y}function l(u,d,g,x,p,m,y){y.reversedDepth===!0&&(p=-p);let E=o(u,d,g,x,p,m);g.transmission>0?i.push(E):g.transparent===!0?s.push(E):e.push(E)}function c(u,d,g,x,p,m){let y=o(u,d,g,x,p,m);g.transmission>0?i.unshift(y):g.transparent===!0?s.unshift(y):e.unshift(y)}function h(u,d){e.length>1&&e.sort(u||J0),i.length>1&&i.sort(d||Uu),s.length>1&&s.sort(d||Uu)}function f(){for(let u=t,d=n.length;u<d;u++){let g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function K0(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new Fu,n.set(i,[a])):s>=r.length?(a=new Fu,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function Q0(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new F,color:new Bt};break;case"SpotLight":e={position:new F,direction:new F,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new F,halfWidth:new F,halfHeight:new F};break}return n[t.id]=e,e}}}function j0(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var t_=0;function e_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function i_(n){let t=new Q0,e=j0(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);let s=new F,r=new Kt,a=new Kt;function o(c){let h=0,f=0,u=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let d=0,g=0,x=0,p=0,m=0,y=0,E=0,S=0,A=0,T=0,_=0,b=0,L=0,C=0;c.sort(e_);for(let B=0,q=c.length;B<q;B++){let R=c[B],z=R.color,V=R.intensity,X=R.distance,nt=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===on?nt=R.shadow.map.texture:nt=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=z.r*V,f+=z.g*V,u+=z.b*V;else if(R.isLightProbe){for(let P=0;P<9;P++)i.probe[P].addScaledVector(R.sh.coefficients[P],V);C++}else if(R.isSunLight){let P=t.get(R);if(P.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let W=R.shadow,J=e.get(R);J.shadowIntensity=W.intensity,J.shadowBias=W.bias,J.shadowNormalBias=W.normalBias,J.shadowRadius=W.radius,J.shadowMapSize.copy(W.mapSize).multiply(W.getFrameExtents()),i.sunShadow[g]=J,i.sunShadowMap[g]=nt;let dt=W.getViewportCount();for(let Tt=0;Tt<dt;Tt++)i.sunShadowMatrix[x+Tt]=W.getMatrix(Tt),i.sunShadowCascade[x+Tt]=W._cascadeData[Tt];x+=dt,g++}i.sun[d]=P,d++}else if(R.isDirectionalLight){let P=t.get(R);if(P.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let W=R.shadow,J=e.get(R);J.shadowIntensity=W.intensity,J.shadowBias=W.bias,J.shadowNormalBias=W.normalBias,J.shadowRadius=W.radius,J.shadowMapSize=W.mapSize,i.directionalShadow[p]=J,i.directionalShadowMap[p]=nt,i.directionalShadowMatrix[p]=R.shadow.matrix,A++}i.directional[p]=P,p++}else if(R.isSpotLight){let P=t.get(R);P.position.setFromMatrixPosition(R.matrixWorld),P.color.copy(z).multiplyScalar(V),P.distance=X,P.coneCos=Math.cos(R.angle),P.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),P.decay=R.decay,i.spot[y]=P;let W=R.shadow;if(R.map&&(i.spotLightMap[b]=R.map,b++,W.updateMatrices(R),R.castShadow&&L++),i.spotLightMatrix[y]=W.matrix,R.castShadow){let J=e.get(R);J.shadowIntensity=W.intensity,J.shadowBias=W.bias,J.shadowNormalBias=W.normalBias,J.shadowRadius=W.radius,J.shadowMapSize=W.mapSize,i.spotShadow[y]=J,i.spotShadowMap[y]=nt,_++}y++}else if(R.isRectAreaLight){let P=t.get(R);P.color.copy(z).multiplyScalar(V),P.halfWidth.set(R.width*.5,0,0),P.halfHeight.set(0,R.height*.5,0),i.rectArea[E]=P,E++}else if(R.isPointLight){let P=t.get(R);if(P.color.copy(R.color).multiplyScalar(R.intensity),P.distance=R.distance,P.decay=R.decay,R.castShadow){let W=R.shadow,J=e.get(R);J.shadowIntensity=W.intensity,J.shadowBias=W.bias,J.shadowNormalBias=W.normalBias,J.shadowRadius=W.radius,J.shadowMapSize=W.mapSize,J.shadowCameraNear=W.camera.near,J.shadowCameraFar=W.camera.far,i.pointShadow[m]=J,i.pointShadowMap[m]=nt,i.pointShadowMatrix[m]=R.shadow.matrix,T++}i.point[m]=P,m++}else if(R.isHemisphereLight){let P=t.get(R);P.skyColor.copy(R.color).multiplyScalar(V),P.groundColor.copy(R.groundColor).multiplyScalar(V),i.hemi[S]=P,S++}}E>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xt.LTC_FLOAT_1,i.rectAreaLTC2=xt.LTC_FLOAT_2):(i.rectAreaLTC1=xt.LTC_HALF_1,i.rectAreaLTC2=xt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;let N=i.hash;(N.sunLength!==d||N.directionalLength!==p||N.pointLength!==m||N.spotLength!==y||N.rectAreaLength!==E||N.hemiLength!==S||N.numSunShadows!==g||N.numDirectionalShadows!==A||N.numPointShadows!==T||N.numSpotShadows!==_||N.numSpotMaps!==b||N.numLightProbes!==C)&&(i.sun.length=d,i.directional.length=p,i.spot.length=y,i.rectArea.length=E,i.point.length=m,i.hemi.length=S,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+b-L,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=C,N.sunLength=d,N.directionalLength=p,N.pointLength=m,N.spotLength=y,N.rectAreaLength=E,N.hemiLength=S,N.numSunShadows=g,N.numDirectionalShadows=A,N.numPointShadows=T,N.numSpotShadows=_,N.numSpotMaps=b,N.numLightProbes=C,i.version=t_++)}function l(c,h){let f=0,u=0,d=0,g=0,x=0,p=0,m=h.matrixWorldInverse;for(let y=0,E=c.length;y<E;y++){let S=c[y];if(S.isSunLight){let A=i.sun[f];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(m),f++}else if(S.isDirectionalLight){let A=i.directional[u];A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),u++}else if(S.isSpotLight){let A=i.spot[g];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),g++}else if(S.isRectAreaLight){let A=i.rectArea[x];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),A.halfWidth.set(S.width*.5,0,0),A.halfHeight.set(0,S.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),x++}else if(S.isPointLight){let A=i.point[d];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){let A=i.hemi[p];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:i}}function Ou(n){let t=new i_(n),e=[],i=[],s=[];function r(f){h.camera=f,e.length=0,i.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):e.push(f)}function o(f){i.push(f)}function l(){t.setup(e),s.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function c(f){t.setupView(e,f)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function n_(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Ou(n),t.set(s,[o])):r>=a.length?(o=new Ou(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var s_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,r_=`uniform sampler2D shadow_pass;
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
}`,a_=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],o_=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Bu=new Kt,xr=new F,fc=new F;function l_(n,t,e){let i=new en,s=new Mt,r=new Mt,a=new ce,o=new ya,l=new Ma,c={},h=e.maxTextureSize,f={[an]:Ie,[Ie]:an,[me]:me},u=new Ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:s_,fragmentShader:r_}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let g=new Ce;g.setAttribute("position",new Ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new qt(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lr;let m=this.type;this.render=function(T,_,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===Na&&(Pt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=lr);let L=n.getRenderTarget(),C=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),B=n.state;B.setBlending(yn),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let q=m!==this.type;q&&_.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(z=>z.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,z=T.length;R<z;R++){let V=T[R],X=V.shadow;if(X===void 0){Pt("WebGLShadowMap:",V,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let nt=X.getFrameExtents();s.multiply(nt),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/nt.x),s.x=r.x*nt.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/nt.y),s.y=r.y*nt.y,X.mapSize.y=r.y));let P=n.state.buffers.depth.getReversed();if(X.camera._reversedDepth=P,X.map===null||q===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===rs){if(V.isPointLight){Pt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Je(s.x,s.y,{format:on,type:gi,minFilter:ke,magFilter:ke,generateMipmaps:!1}),X.map.texture.name=V.name+".shadowMap",X.map.depthTexture=new Gi(s.x,s.y,oi),X.map.depthTexture.name=V.name+".shadowMapDepth",X.map.depthTexture.format=Bi,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Te,X.map.depthTexture.magFilter=Te}else V.isPointLight?(X.map=new yr(s.x),X.map.depthTexture=new Ws(s.x,mi)):(X.map=new Je(s.x,s.y),X.map.depthTexture=new Gi(s.x,s.y,mi)),X.map.depthTexture.name=V.name+".shadowMap",X.map.depthTexture.format=Bi,this.type===lr?(X.map.depthTexture.compareFunction=P?Kl:Jl,X.map.depthTexture.minFilter=ke,X.map.depthTexture.magFilter=ke):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Te,X.map.depthTexture.magFilter=Te);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);let W=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();V.isPointLight!==!0&&X.updateMatrices(V,b);let J=(X.camera.layers.mask&4294967294)!==0?X.camera.layers:b.layers;for(let dt=0;dt<W;dt++){let Tt=X.getCamera(dt);if(V.isPointLight){let K=X.camera,mt=X.matrix,U=V.distance||K.far;U!==K.far&&(K.far=U,K.updateProjectionMatrix()),xr.setFromMatrixPosition(V.matrixWorld),K.position.copy(xr),fc.copy(K.position),fc.add(a_[dt]),K.up.copy(o_[dt]),K.lookAt(fc),K.updateMatrixWorld(),mt.makeTranslation(-xr.x,-xr.y,-xr.z),Bu.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Bu,K.coordinateSystem,K.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)n.setRenderTarget(X.map,dt),n.clear();else{dt===0&&(n.setRenderTarget(X.map),n.clear());let K=X.getViewport(dt);a.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),B.viewport(a)}i=X.getFrustum(dt),S(_,b,Tt,V,J,this.type)}X.isPointLightShadow!==!0&&this.type===rs&&y(X,b),X.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(L,C,N)};function y(T,_){let b=t.update(x);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new Je(s.x,s.y,{format:on,type:gi}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(_,null,b,u,x,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(_,null,b,d,x,null)}function E(T,_,b,L){let C=null,N=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)C=N;else if(C=b.isPointLight===!0?l:o,n.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let B=C.uuid,q=_.uuid,R=c[B];R===void 0&&(R={},c[B]=R);let z=R[q];z===void 0&&(z=C.clone(),R[q]=z,_.addEventListener("dispose",A)),C=z}if(C.visible=_.visible,C.wireframe=_.wireframe,L===rs?C.side=_.shadowSide!==null?_.shadowSide:_.side:C.side=_.shadowSide!==null?_.shadowSide:f[_.side],C.alphaMap=_.alphaMap,C.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,C.map=_.map,C.clipShadows=_.clipShadows,C.clippingPlanes=_.clippingPlanes,C.clipIntersection=_.clipIntersection,C.displacementMap=_.displacementMap,C.displacementScale=_.displacementScale,C.displacementBias=_.displacementBias,C.wireframeLinewidth=_.wireframeLinewidth,C.linewidth=_.linewidth,b.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let B=n.properties.get(C);B.light=b}return C}function S(T,_,b,L,C,N){if(T.visible===!1)return;if(T.layers.test(C)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&N===rs)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);let R=t.update(T),z=T.material;if(Array.isArray(z)){let V=R.groups;for(let X=0,nt=V.length;X<nt;X++){let P=V[X],W=z[P.materialIndex];if(W&&W.visible){let J=E(T,W,L,N);T.onBeforeShadow(n,T,_,b,R,J,P),n.renderBufferDirect(b,null,R,J,T,P),T.onAfterShadow(n,T,_,b,R,J,P)}}}else if(z.visible){let V=E(T,z,L,N);T.onBeforeShadow(n,T,_,b,R,V,null),n.renderBufferDirect(b,null,R,V,T,null),T.onAfterShadow(n,T,_,b,R,V,null)}}let q=T.children;for(let R=0,z=q.length;R<z;R++)S(q[R],_,b,L,C,N)}function A(T){T.target.removeEventListener("dispose",A);for(let b in c){let L=c[b],C=T.target.uuid;C in L&&(L[C].dispose(),delete L[C])}}}function c_(n,t){function e(){let I=!1,tt=new ce,Z=null,ht=new ce(0,0,0,0);return{setMask:function(at){Z!==at&&!I&&(n.colorMask(at,at,at,at),Z=at)},setLocked:function(at){I=at},setClear:function(at,lt,Rt,zt,rt){rt===!0&&(at*=zt,lt*=zt,Rt*=zt),tt.set(at,lt,Rt,zt),ht.equals(tt)===!1&&(n.clearColor(at,lt,Rt,zt),ht.copy(tt))},reset:function(){I=!1,Z=null,ht.set(-1,0,0,0)}}}function i(){let I=!1,tt=!1,Z=null,ht=null,at=null;return{setReversed:function(lt){if(tt!==lt){let Rt=t.get("EXT_clip_control");lt?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),tt=lt;let zt=at;at=null,this.setClear(zt)}},getReversed:function(){return tt},setTest:function(lt){lt?et(n.DEPTH_TEST):yt(n.DEPTH_TEST)},setMask:function(lt){Z!==lt&&!I&&(n.depthMask(lt),Z=lt)},setFunc:function(lt){if(tt&&(lt=lu[lt]),ht!==lt){switch(lt){case Qr:n.depthFunc(n.NEVER);break;case jr:n.depthFunc(n.ALWAYS);break;case ta:n.depthFunc(n.LESS);break;case Wn:n.depthFunc(n.LEQUAL);break;case ea:n.depthFunc(n.EQUAL);break;case ia:n.depthFunc(n.GEQUAL);break;case na:n.depthFunc(n.GREATER);break;case sa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ht=lt}},setLocked:function(lt){I=lt},setClear:function(lt){at!==lt&&(at=lt,tt&&(lt=1-lt),n.clearDepth(lt))},reset:function(){I=!1,Z=null,ht=null,at=null,tt=!1}}}function s(){let I=!1,tt=null,Z=null,ht=null,at=null,lt=null,Rt=null,zt=null,rt=null;return{setTest:function(Ct){I||(Ct?et(n.STENCIL_TEST):yt(n.STENCIL_TEST))},setMask:function(Ct){tt!==Ct&&!I&&(n.stencilMask(Ct),tt=Ct)},setFunc:function(Ct,Ot,_t){(Z!==Ct||ht!==Ot||at!==_t)&&(n.stencilFunc(Ct,Ot,_t),Z=Ct,ht=Ot,at=_t)},setOp:function(Ct,Ot,_t){(lt!==Ct||Rt!==Ot||zt!==_t)&&(n.stencilOp(Ct,Ot,_t),lt=Ct,Rt=Ot,zt=_t)},setLocked:function(Ct){I=Ct},setClear:function(Ct){rt!==Ct&&(n.clearStencil(Ct),rt=Ct)},reset:function(){I=!1,tt=null,Z=null,ht=null,at=null,lt=null,Rt=null,zt=null,rt=null}}}let r=new e,a=new i,o=new s,l={},c=new WeakMap,h={},f={},u={},d=new WeakMap,g=[],x=null,p=!1,m=null,y=null,E=null,S=null,A=null,T=null,_=null,b=new Bt(0,0,0),L=0,C=!1,N=null,B=null,q=null,R=null,z=null,V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,nt=0,P=n.getParameter(n.VERSION);P.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(P)[1]),X=nt>=1):P.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),X=nt>=2);let W=null,J={},dt=n.getParameter(n.SCISSOR_BOX),Tt=n.getParameter(n.VIEWPORT),K=new ce().fromArray(dt),mt=new ce().fromArray(Tt);function U(I,tt,Z,ht){let at=new Uint8Array(4),lt=n.createTexture();n.bindTexture(I,lt),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Rt=0;Rt<Z;Rt++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(tt,0,n.RGBA,1,1,ht,0,n.RGBA,n.UNSIGNED_BYTE,at):n.texImage2D(tt+Rt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,at);return lt}let Y={};Y[n.TEXTURE_2D]=U(n.TEXTURE_2D,n.TEXTURE_2D,1),Y[n.TEXTURE_CUBE_MAP]=U(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[n.TEXTURE_2D_ARRAY]=U(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Y[n.TEXTURE_3D]=U(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),et(n.DEPTH_TEST),a.setFunc(Wn),We(!1),he(Pl),et(n.CULL_FACE),we(yn);function et(I){h[I]!==!0&&(n.enable(I),h[I]=!0)}function yt(I){h[I]!==!1&&(n.disable(I),h[I]=!1)}function $t(I,tt){return u[I]!==tt?(n.bindFramebuffer(I,tt),u[I]=tt,I===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=tt),I===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=tt),!0):!1}function At(I,tt){let Z=g,ht=!1;if(I){Z=d.get(tt),Z===void 0&&(Z=[],d.set(tt,Z));let at=I.textures;if(Z.length!==at.length||Z[0]!==n.COLOR_ATTACHMENT0){for(let lt=0,Rt=at.length;lt<Rt;lt++)Z[lt]=n.COLOR_ATTACHMENT0+lt;Z.length=at.length,ht=!0}}else Z[0]!==n.BACK&&(Z[0]=n.BACK,ht=!0);ht&&n.drawBuffers(Z)}function ee(I){return x!==I?(n.useProgram(I),x=I,!0):!1}let ne={[Mn]:n.FUNC_ADD,[Ih]:n.FUNC_SUBTRACT,[Ph]:n.FUNC_REVERSE_SUBTRACT};ne[Lh]=n.MIN,ne[Dh]=n.MAX;let Gt={[Nh]:n.ZERO,[Uh]:n.ONE,[Fh]:n.SRC_COLOR,[Nl]:n.SRC_ALPHA,[Gh]:n.SRC_ALPHA_SATURATE,[kh]:n.DST_COLOR,[Bh]:n.DST_ALPHA,[Oh]:n.ONE_MINUS_SRC_COLOR,[Ul]:n.ONE_MINUS_SRC_ALPHA,[Hh]:n.ONE_MINUS_DST_COLOR,[zh]:n.ONE_MINUS_DST_ALPHA,[Vh]:n.CONSTANT_COLOR,[Wh]:n.ONE_MINUS_CONSTANT_COLOR,[Xh]:n.CONSTANT_ALPHA,[qh]:n.ONE_MINUS_CONSTANT_ALPHA};function we(I,tt,Z,ht,at,lt,Rt,zt,rt,Ct){if(I===yn){p===!0&&(yt(n.BLEND),p=!1);return}if(p===!1&&(et(n.BLEND),p=!0),I!==Ch){if(I!==m||Ct!==C){if((y!==Mn||A!==Mn)&&(n.blendEquation(n.FUNC_ADD),y=Mn,A=Mn),Ct)switch(I){case as:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case cr:n.blendFunc(n.ONE,n.ONE);break;case Ll:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Dl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Lt("WebGLState: Invalid blending: ",I);break}else switch(I){case as:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case cr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ll:Lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dl:Lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Lt("WebGLState: Invalid blending: ",I);break}E=null,S=null,T=null,_=null,b.set(0,0,0),L=0,m=I,C=Ct}return}at=at||tt,lt=lt||Z,Rt=Rt||ht,(tt!==y||at!==A)&&(n.blendEquationSeparate(ne[tt],ne[at]),y=tt,A=at),(Z!==E||ht!==S||lt!==T||Rt!==_)&&(n.blendFuncSeparate(Gt[Z],Gt[ht],Gt[lt],Gt[Rt]),E=Z,S=ht,T=lt,_=Rt),(zt.equals(b)===!1||rt!==L)&&(n.blendColor(zt.r,zt.g,zt.b,rt),b.copy(zt),L=rt),m=I,C=!1}function ge(I,tt){I.side===me?yt(n.CULL_FACE):et(n.CULL_FACE);let Z=I.side===Ie;tt&&(Z=!Z),We(Z),I.blending===as&&I.transparent===!1?we(yn):we(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);let ht=I.stencilWrite;o.setTest(ht),ht&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Me(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?et(n.SAMPLE_ALPHA_TO_COVERAGE):yt(n.SAMPLE_ALPHA_TO_COVERAGE)}function We(I){N!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),N=I)}function he(I){I!==Ah?(et(n.CULL_FACE),I!==B&&(I===Pl?n.cullFace(n.BACK):I===Rh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):yt(n.CULL_FACE),B=I}function vi(I){I!==q&&(X&&n.lineWidth(I),q=I)}function Me(I,tt,Z){I?(et(n.POLYGON_OFFSET_FILL),(R!==tt||z!==Z)&&(R=tt,z=Z,a.getReversed()&&(tt=-tt,Z=-Z),n.polygonOffset(tt,Z))):yt(n.POLYGON_OFFSET_FILL)}function ei(I){I?et(n.SCISSOR_TEST):yt(n.SCISSOR_TEST)}function ii(I){I===void 0&&(I=n.TEXTURE0+V-1),W!==I&&(n.activeTexture(I),W=I)}function ni(I,tt,Z){Z===void 0&&(W===null?Z=n.TEXTURE0+V-1:Z=W);let ht=J[Z];ht===void 0&&(ht={type:void 0,texture:void 0},J[Z]=ht),(ht.type!==I||ht.texture!==tt)&&(W!==Z&&(n.activeTexture(Z),W=Z),n.bindTexture(I,tt||Y[I]),ht.type=I,ht.texture=tt)}function O(){let I=J[W];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function si(){try{n.compressedTexImage2D(...arguments)}catch(I){Lt("WebGLState:",I)}}function oe(){try{n.compressedTexImage3D(...arguments)}catch(I){Lt("WebGLState:",I)}}function le(){try{n.texSubImage2D(...arguments)}catch(I){Lt("WebGLState:",I)}}function gt(){try{n.texSubImage3D(...arguments)}catch(I){Lt("WebGLState:",I)}}function _e(){try{n.compressedTexSubImage2D(...arguments)}catch(I){Lt("WebGLState:",I)}}function It(){try{n.compressedTexSubImage3D(...arguments)}catch(I){Lt("WebGLState:",I)}}function Nt(){try{n.texStorage2D(...arguments)}catch(I){Lt("WebGLState:",I)}}function w(){try{n.texStorage3D(...arguments)}catch(I){Lt("WebGLState:",I)}}function v(){try{n.texImage2D(...arguments)}catch(I){Lt("WebGLState:",I)}}function H(){try{n.texImage3D(...arguments)}catch(I){Lt("WebGLState:",I)}}function st(I){return f[I]!==void 0?f[I]:n.getParameter(I)}function it(I,tt){f[I]!==tt&&(n.pixelStorei(I,tt),f[I]=tt)}function ot(I){K.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),K.copy(I))}function ft(I){mt.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),mt.copy(I))}function Q(I,tt){let Z=c.get(tt);Z===void 0&&(Z=new WeakMap,c.set(tt,Z));let ht=Z.get(I);ht===void 0&&(ht=n.getUniformBlockIndex(tt,I.name),n.uniformBlockBinding(tt,ht,ht),Z.set(I,ht))}function j(I,tt,Z){let at=c.get(tt).get(I);l[at]!==Z&&(n.bindBufferBase(n.UNIFORM_BUFFER,at,Z),l[at]=Z)}function ct(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},f={},W=null,J={},u={},l={},d=new WeakMap,g=[],x=null,p=!1,m=null,y=null,E=null,S=null,A=null,T=null,_=null,b=new Bt(0,0,0),L=0,C=!1,N=null,B=null,q=null,R=null,z=null,K.set(0,0,n.canvas.width,n.canvas.height),mt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:et,disable:yt,bindFramebuffer:$t,drawBuffers:At,useProgram:ee,setBlending:we,setMaterial:ge,setFlipSided:We,setCullFace:he,setLineWidth:vi,setPolygonOffset:Me,setScissorTest:ei,activeTexture:ii,bindTexture:ni,unbindTexture:O,compressedTexImage2D:si,compressedTexImage3D:oe,texImage2D:v,texImage3D:H,pixelStorei:it,getParameter:st,updateUBOMapping:Q,uniformBlockBinding:j,texStorage2D:Nt,texStorage3D:w,texSubImage2D:le,texSubImage3D:gt,compressedTexSubImage2D:_e,compressedTexSubImage3D:It,scissor:ot,viewport:ft,reset:ct}}function h_(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Mt,h=new WeakMap,f=new Set,u,d=new WeakMap,g=new Set,x=new FinalizationRegistry(w=>g.delete(w)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(w,v){return p?new OffscreenCanvas(w,v):Ps("canvas")}function y(w,v,H){let st=1,it=Nt(w);if((it.width>H||it.height>H)&&(st=H/Math.max(it.width,it.height)),st<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let ot=Math.floor(st*it.width),ft=Math.floor(st*it.height);u===void 0&&(u=m(ot,ft));let Q=v?m(ot,ft):u;return Q.width=ot,Q.height=ft,Q.getContext("2d").drawImage(w,0,0,ot,ft),Pt("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+ot+"x"+ft+")."),Q}else return"data"in w&&Pt("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),w;return w}function E(w){return w.generateMipmaps}function S(w){n.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(w,v,H,st,it,ot=!1){if(w!==null){if(n[w]!==void 0)return n[w];Pt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ft;st&&(ft=t.get("EXT_texture_norm16"),ft||Pt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=v;if(v===n.RED&&(H===n.FLOAT&&(Q=n.R32F),H===n.HALF_FLOAT&&(Q=n.R16F),H===n.UNSIGNED_BYTE&&(Q=n.R8),H===n.UNSIGNED_SHORT&&ft&&(Q=ft.R16_EXT),H===n.SHORT&&ft&&(Q=ft.R16_SNORM_EXT)),v===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(Q=n.R8UI),H===n.UNSIGNED_SHORT&&(Q=n.R16UI),H===n.UNSIGNED_INT&&(Q=n.R32UI),H===n.BYTE&&(Q=n.R8I),H===n.SHORT&&(Q=n.R16I),H===n.INT&&(Q=n.R32I)),v===n.RG&&(H===n.FLOAT&&(Q=n.RG32F),H===n.HALF_FLOAT&&(Q=n.RG16F),H===n.UNSIGNED_BYTE&&(Q=n.RG8),H===n.UNSIGNED_SHORT&&ft&&(Q=ft.RG16_EXT),H===n.SHORT&&ft&&(Q=ft.RG16_SNORM_EXT)),v===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(Q=n.RG8UI),H===n.UNSIGNED_SHORT&&(Q=n.RG16UI),H===n.UNSIGNED_INT&&(Q=n.RG32UI),H===n.BYTE&&(Q=n.RG8I),H===n.SHORT&&(Q=n.RG16I),H===n.INT&&(Q=n.RG32I)),v===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),H===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),H===n.UNSIGNED_INT&&(Q=n.RGB32UI),H===n.BYTE&&(Q=n.RGB8I),H===n.SHORT&&(Q=n.RGB16I),H===n.INT&&(Q=n.RGB32I)),v===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),H===n.UNSIGNED_INT&&(Q=n.RGBA32UI),H===n.BYTE&&(Q=n.RGBA8I),H===n.SHORT&&(Q=n.RGBA16I),H===n.INT&&(Q=n.RGBA32I)),v===n.RGB&&(H===n.UNSIGNED_SHORT&&ft&&(Q=ft.RGB16_EXT),H===n.SHORT&&ft&&(Q=ft.RGB16_SNORM_EXT),H===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),H===n.UNSIGNED_INT_10F_11F_11F_REV&&(Q=n.R11F_G11F_B10F)),v===n.RGBA){let j=ot?Is:Xt.getTransfer(it);H===n.FLOAT&&(Q=n.RGBA32F),H===n.HALF_FLOAT&&(Q=n.RGBA16F),H===n.UNSIGNED_BYTE&&(Q=j===jt?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT&&ft&&(Q=ft.RGBA16_EXT),H===n.SHORT&&ft&&(Q=ft.RGBA16_SNORM_EXT),H===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function _(w,v){let H;return w?v===null||v===mi||v===bn?H=n.DEPTH24_STENCIL8:v===oi?H=n.DEPTH32F_STENCIL8:v===cs&&(H=n.DEPTH24_STENCIL8,Pt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===mi||v===bn?H=n.DEPTH_COMPONENT24:v===oi?H=n.DEPTH_COMPONENT32F:v===cs&&(H=n.DEPTH_COMPONENT16),H}function b(w,v){return E(w)===!0||w.isFramebufferTexture&&w.minFilter!==Te&&w.minFilter!==ke?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function L(w){let v=new WeakRef(w);i.get(w).__ref=v,g.add(v),x.register(w,v,v)}function C(w){let v=i.get(w).__ref;v!==void 0&&(g.delete(v),x.unregister(v))}function N(w){q(w.target)}function B(w){R(w.target)}function q(w){w.removeEventListener("dispose",N),C(w),V(w),w.isVideoTexture&&h.delete(w),w.isHTMLTexture&&f.delete(w)}function R(w){w.removeEventListener("dispose",B),C(w),nt(w)}function z(){for(let w of g){let v=w.deref();v!==void 0&&(v.isRenderTarget===!0?R(v):q(v))}g.clear(),f.clear()}function V(w){let v=i.get(w);if(v.__webglInit===void 0)return;let H=w.source,st=d.get(H);if(st){let it=st[v.__cacheKey];it.usedTimes--,it.usedTimes===0&&X(w),Object.keys(st).length===0&&d.delete(H)}i.remove(w)}function X(w){let v=i.get(w);n.deleteTexture(v.__webglTexture);let H=w.source,st=d.get(H);delete st[v.__cacheKey],a.memory.textures--}function nt(w){let v=i.get(w);v.__depthDisposeCallback&&v.__depthDisposeCallback();let H=w.depthTexture;if(H&&H.renderTarget===w&&q(H),w.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(v.__webglFramebuffer[it]))for(let ot=0;ot<v.__webglFramebuffer[it].length;ot++)n.deleteFramebuffer(v.__webglFramebuffer[it][ot]);else n.deleteFramebuffer(v.__webglFramebuffer[it]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[it])}else{if(Array.isArray(v.__webglFramebuffer))for(let it=0;it<v.__webglFramebuffer.length;it++)n.deleteFramebuffer(v.__webglFramebuffer[it]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let it=0;it<v.__webglColorRenderbuffer.length;it++)v.__webglColorRenderbuffer[it]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[it]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let st=w.textures;for(let it=0,ot=st.length;it<ot;it++){let ft=i.get(st[it]);ft.__webglTexture&&(n.deleteTexture(ft.__webglTexture),a.memory.textures--),i.remove(st[it])}i.remove(w)}let P=0;function W(){P=0}function J(){return P}function dt(w){P=w}function Tt(){let w=P;return w>=s.maxTextures&&Pt("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),P+=1,w}function K(w){let v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.mipmapsAutoUpdate),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function mt(w,v){let H=i.get(w);if(w.isVideoTexture&&_e(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&H.__version!==w.version){let st=w.image;if(st===null)Pt("WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)Pt("WebGLRenderer: Texture marked for update but image is incomplete");else{ge(H,w,v);return}}else w.isExternalTexture&&(H.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+v)}function U(w,v){let H=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){ge(H,w,v);return}else w.isExternalTexture&&(H.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+v)}function Y(w,v){let H=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){ge(H,w,v);return}e.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+v)}function et(w,v){let H=i.get(w);if(w.version>0&&H.__version!==w.version){We(H,w,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+v)}let yt={[gn]:n.REPEAT,[Mi]:n.CLAMP_TO_EDGE,[ra]:n.MIRRORED_REPEAT},$t={[Te]:n.NEAREST,[Zh]:n.NEAREST_MIPMAP_NEAREST,[ur]:n.NEAREST_MIPMAP_LINEAR,[ke]:n.LINEAR,[Fa]:n.LINEAR_MIPMAP_NEAREST,[Vi]:n.LINEAR_MIPMAP_LINEAR},At={[jh]:n.NEVER,[Ql]:n.ALWAYS,[tu]:n.LESS,[Jl]:n.LEQUAL,[eu]:n.EQUAL,[Kl]:n.GEQUAL,[iu]:n.GREATER,[nu]:n.NOTEQUAL};function ee(w,v){if(v.type===oi&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===ke||v.magFilter===Fa||v.magFilter===ur||v.magFilter===Vi||v.minFilter===ke||v.minFilter===Fa||v.minFilter===ur||v.minFilter===Vi)&&Pt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,yt[v.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,yt[v.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,yt[v.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,$t[v.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,$t[v.minFilter]),v.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,At[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Te||v.minFilter!==ur&&v.minFilter!==Vi||v.type===oi&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");n.texParameterf(w,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function ne(w,v){let H=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",N),L(v));let st=v.source,it=d.get(st);it===void 0&&(it={},d.set(st,it));let ot=K(v);if(ot!==w.__cacheKey){it[ot]===void 0&&(it[ot]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,H=!0),it[ot].usedTimes++;let ft=it[w.__cacheKey];ft!==void 0&&(it[w.__cacheKey].usedTimes--,ft.usedTimes===0&&X(v)),w.__cacheKey=ot,w.__webglTexture=it[ot].texture}return H}function Gt(w,v,H){return Math.floor(Math.floor(w/H)/v)}function we(w,v,H,st){let ot=w.updateRanges;if(ot.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,H,st,v.data);else{ot.sort((I,tt)=>I.start-tt.start);let ft=0;for(let I=1;I<ot.length;I++){let tt=ot[ft],Z=ot[I],ht=tt.start+tt.count,at=Gt(Z.start,v.width,4),lt=Gt(tt.start,v.width,4);Z.start<=ht+1&&at===lt&&Gt(Z.start+Z.count-1,v.width,4)===at?tt.count=Math.max(tt.count,Z.start+Z.count-tt.start):(++ft,ot[ft]=Z)}ot.length=ft+1;let Q=e.getParameter(n.UNPACK_ROW_LENGTH),j=e.getParameter(n.UNPACK_SKIP_PIXELS),ct=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let I=0,tt=ot.length;I<tt;I++){let Z=ot[I],ht=Math.floor(Z.start/4),at=Math.ceil(Z.count/4),lt=ht%v.width,Rt=Math.floor(ht/v.width),zt=at,rt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,lt),e.pixelStorei(n.UNPACK_SKIP_ROWS,Rt),e.texSubImage2D(n.TEXTURE_2D,0,lt,Rt,zt,rt,H,st,v.data)}w.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,Q),e.pixelStorei(n.UNPACK_SKIP_PIXELS,j),e.pixelStorei(n.UNPACK_SKIP_ROWS,ct)}}function ge(w,v,H){let st=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(st=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(st=n.TEXTURE_3D);let it=ne(w,v),ot=v.source;e.bindTexture(st,w.__webglTexture,n.TEXTURE0+H);let ft=i.get(ot);if(ot.version!==ft.__version||it===!0){if(e.activeTexture(n.TEXTURE0+H),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let rt=Xt.getPrimaries(Xt.workingColorSpace),Ct=v.colorSpace===Xi?null:Xt.getPrimaries(v.colorSpace),Ot=v.colorSpace===Xi||rt===Ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot)}e.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment);let j=y(v.image,!1,s.maxTextureSize);j=It(v,j);let ct=r.convert(v.format,v.colorSpace),I=r.convert(v.type),tt=T(v.internalFormat,ct,I,v.normalized,v.colorSpace,v.isVideoTexture);ee(st,v);let Z,ht=v.mipmaps,at=v.isVideoTexture!==!0,lt=ft.__version===void 0||it===!0,Rt=ot.dataReady,zt=b(v,j);if(v.isDepthTexture)tt=_(v.format===Wi,v.type),lt&&(at?e.texStorage2D(n.TEXTURE_2D,1,tt,j.width,j.height):e.texImage2D(n.TEXTURE_2D,0,tt,j.width,j.height,0,ct,I,null));else if(v.isDataTexture)if(ht.length>0){at&&lt&&e.texStorage2D(n.TEXTURE_2D,zt,tt,ht[0].width,ht[0].height);for(let rt=0,Ct=ht.length;rt<Ct;rt++)Z=ht[rt],at?Rt&&e.texSubImage2D(n.TEXTURE_2D,rt,0,0,Z.width,Z.height,ct,I,Z.data):e.texImage2D(n.TEXTURE_2D,rt,tt,Z.width,Z.height,0,ct,I,Z.data);v.generateMipmaps=!1}else at?(lt&&e.texStorage2D(n.TEXTURE_2D,zt,tt,j.width,j.height),Rt&&we(v,j,ct,I)):e.texImage2D(n.TEXTURE_2D,0,tt,j.width,j.height,0,ct,I,j.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){at&&lt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,zt,tt,ht[0].width,ht[0].height,j.depth);for(let rt=0,Ct=ht.length;rt<Ct;rt++)if(Z=ht[rt],v.format!==_i)if(ct!==null)if(at){if(Rt)if(v.layerUpdates.size>0){let Ot=ac(Z.width,Z.height,v.format,v.type);for(let _t of v.layerUpdates){let ie=Z.data.subarray(_t*Ot/Z.data.BYTES_PER_ELEMENT,(_t+1)*Ot/Z.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,rt,0,0,_t,Z.width,Z.height,1,ct,ie)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,rt,0,0,0,Z.width,Z.height,j.depth,ct,Z.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,rt,tt,Z.width,Z.height,j.depth,0,Z.data,0,0);else Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?Rt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,rt,0,0,0,Z.width,Z.height,j.depth,ct,I,Z.data):e.texImage3D(n.TEXTURE_2D_ARRAY,rt,tt,Z.width,Z.height,j.depth,0,ct,I,Z.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{at&&lt&&e.texStorage2D(n.TEXTURE_2D,zt,tt,ht[0].width,ht[0].height);for(let rt=0,Ct=ht.length;rt<Ct;rt++)Z=ht[rt],v.format!==_i?ct!==null?at?Rt&&e.compressedTexSubImage2D(n.TEXTURE_2D,rt,0,0,Z.width,Z.height,ct,Z.data):e.compressedTexImage2D(n.TEXTURE_2D,rt,tt,Z.width,Z.height,0,Z.data):Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?Rt&&e.texSubImage2D(n.TEXTURE_2D,rt,0,0,Z.width,Z.height,ct,I,Z.data):e.texImage2D(n.TEXTURE_2D,rt,tt,Z.width,Z.height,0,ct,I,Z.data)}else if(v.isDataArrayTexture)if(at){if(lt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,zt,tt,j.width,j.height,j.depth),Rt)if(v.layerUpdates.size>0){let rt=ac(j.width,j.height,v.format,v.type);for(let Ct of v.layerUpdates){let Ot=j.data.subarray(Ct*rt/j.data.BYTES_PER_ELEMENT,(Ct+1)*rt/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ct,j.width,j.height,1,ct,I,Ot)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ct,I,j.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,tt,j.width,j.height,j.depth,0,ct,I,j.data);else if(v.isData3DTexture)at?(lt&&e.texStorage3D(n.TEXTURE_3D,zt,tt,j.width,j.height,j.depth),Rt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ct,I,j.data)):e.texImage3D(n.TEXTURE_3D,0,tt,j.width,j.height,j.depth,0,ct,I,j.data);else if(v.isFramebufferTexture){if(lt)if(at)e.texStorage2D(n.TEXTURE_2D,zt,tt,j.width,j.height);else{let rt=j.width,Ct=j.height;for(let Ot=0;Ot<zt;Ot++)e.texImage2D(n.TEXTURE_2D,Ot,tt,rt,Ct,0,ct,I,null),rt>>=1,Ct>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in n){let rt=n.canvas;if(rt.hasAttribute("layoutsubtree")||rt.setAttribute("layoutsubtree","true"),j.parentNode!==rt){rt.appendChild(j),f.add(v),rt.onpaint=Ct=>{let Ot=Ct.changedElements;for(let _t of f)Ot.includes(_t.image)&&(_t.needsUpdate=!0)},rt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,j);else{let Ot=n.RGBA,_t=n.RGBA,ie=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ot,_t,ie,j)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ht.length>0){if(at&&lt){let rt=Nt(ht[0]);e.texStorage2D(n.TEXTURE_2D,zt,tt,rt.width,rt.height)}for(let rt=0,Ct=ht.length;rt<Ct;rt++)Z=ht[rt],at?Rt&&e.texSubImage2D(n.TEXTURE_2D,rt,0,0,ct,I,Z):e.texImage2D(n.TEXTURE_2D,rt,tt,ct,I,Z);v.generateMipmaps=!1}else if(at){if(lt){let rt=Nt(j);e.texStorage2D(n.TEXTURE_2D,zt,tt,rt.width,rt.height)}Rt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ct,I,j)}else e.texImage2D(n.TEXTURE_2D,0,tt,ct,I,j);E(v)&&v.mipmapsAutoUpdate===!0&&S(st),ft.__version=ot.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function We(w,v,H){if(v.image.length!==6)return;let st=ne(w,v),it=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+H);let ot=i.get(it);if(it.version!==ot.__version||st===!0){e.activeTexture(n.TEXTURE0+H);let ft=Xt.getPrimaries(Xt.workingColorSpace),Q=v.colorSpace===Xi?null:Xt.getPrimaries(v.colorSpace),j=v.colorSpace===Xi||ft===Q?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let ct=v.isCompressedTexture||v.image[0].isCompressedTexture,I=v.image[0]&&v.image[0].isDataTexture,tt=[];for(let _t=0;_t<6;_t++)!ct&&!I?tt[_t]=y(v.image[_t],!0,s.maxCubemapSize):tt[_t]=I?v.image[_t].image:v.image[_t],tt[_t]=It(v,tt[_t]);let Z=tt[0],ht=r.convert(v.format,v.colorSpace),at=r.convert(v.type),lt=T(v.internalFormat,ht,at,v.normalized,v.colorSpace),Rt=v.isVideoTexture!==!0,zt=ot.__version===void 0||st===!0,rt=it.dataReady,Ct=b(v,Z);ee(n.TEXTURE_CUBE_MAP,v);let Ot;if(v.isDepthTexture){if(lt=_(v.format===Wi,v.type),zt)if(Rt)e.texStorage2D(n.TEXTURE_CUBE_MAP,1,lt,Z.width,Z.height);else for(let _t=0;_t<6;_t++)e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,lt,Z.width,Z.height,0,ht,at,null)}else if(ct){Rt&&zt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Ct,lt,Z.width,Z.height);for(let _t=0;_t<6;_t++){Ot=tt[_t].mipmaps;for(let ie=0;ie<Ot.length;ie++){let Se=Ot[ie];v.format!==_i?ht!==null?Rt?rt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,ie,0,0,Se.width,Se.height,ht,Se.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,ie,lt,Se.width,Se.height,0,Se.data):Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Rt?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,ie,0,0,Se.width,Se.height,ht,at,Se.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,ie,lt,Se.width,Se.height,0,ht,at,Se.data)}}}else{if(Ot=v.mipmaps,Rt&&zt){Ot.length>0&&Ct++;let _t=Nt(tt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Ct,lt,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(I){Rt?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,tt[_t].width,tt[_t].height,ht,at,tt[_t].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,lt,tt[_t].width,tt[_t].height,0,ht,at,tt[_t].data);for(let ie=0;ie<Ot.length;ie++){let $i=Ot[ie].image[_t].image;Rt?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,ie+1,0,0,$i.width,$i.height,ht,at,$i.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,ie+1,lt,$i.width,$i.height,0,ht,at,$i.data)}}else{Rt?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,ht,at,tt[_t]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,lt,ht,at,tt[_t]);for(let ie=0;ie<Ot.length;ie++){let Se=Ot[ie];Rt?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,ie+1,0,0,ht,at,Se.image[_t]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,ie+1,lt,ht,at,Se.image[_t])}}}E(v)&&v.mipmapsAutoUpdate===!0&&S(n.TEXTURE_CUBE_MAP),ot.__version=it.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function he(w,v,H,st,it,ot){let ft=r.convert(H.format,H.colorSpace),Q=r.convert(H.type),j=T(H.internalFormat,ft,Q,H.normalized,H.colorSpace),ct=i.get(v),I=i.get(H);if(I.__renderTarget=v,!ct.__hasExternalTextures){let tt=Math.max(1,v.width>>ot),Z=Math.max(1,v.height>>ot);it===n.TEXTURE_3D||it===n.TEXTURE_2D_ARRAY?e.texImage3D(it,ot,j,tt,Z,v.depth,0,ft,Q,null):e.texImage2D(it,ot,j,tt,Z,0,ft,Q,null)}e.bindFramebuffer(n.FRAMEBUFFER,w),gt(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,st,it,I.__webglTexture,0,le(v)):(it===n.TEXTURE_2D||it>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,st,it,I.__webglTexture,ot),e.bindFramebuffer(n.FRAMEBUFFER,null)}function vi(w,v,H){if(n.bindRenderbuffer(n.RENDERBUFFER,w),v.depthBuffer){let st=v.depthTexture,it=st&&st.isDepthTexture?st.type:null,ot=_(v.stencilBuffer,it),ft=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;gt(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le(v),ot,v.width,v.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,le(v),ot,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ot,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ft,n.RENDERBUFFER,w)}else{let st=v.textures;for(let it=0;it<st.length;it++){let ot=st[it],ft=r.convert(ot.format,ot.colorSpace),Q=r.convert(ot.type),j=T(ot.internalFormat,ft,Q,ot.normalized,ot.colorSpace);gt(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le(v),j,v.width,v.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,le(v),j,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,j,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Me(w,v,H){let st=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let it=i.get(v.depthTexture);it.__renderTarget=v;let ot=st?v.depthTexture.image[0]:v.depthTexture.image;(!it.__webglTexture||ot.width!==v.width||ot.height!==v.height)&&(ot.width=v.width,ot.height=v.height,v.depthTexture.needsUpdate=!0),st?et(v.depthTexture,0):mt(v.depthTexture,0);let ft=it.__webglTexture,Q=le(v),j=st?n.TEXTURE_CUBE_MAP_POSITIVE_X+H:n.TEXTURE_2D,ct=v.depthTexture.format===Wi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===Bi)gt(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ct,j,ft,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,ct,j,ft,0);else if(v.depthTexture.format===Wi)gt(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ct,j,ft,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,ct,j,ft,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ei(w){let v=i.get(w),H=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){let st=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),st){let it=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,st.removeEventListener("dispose",it)};st.addEventListener("dispose",it),v.__depthDisposeCallback=it}v.__boundDepthTexture=st}if(w.depthTexture&&!v.__autoAllocateDepthBuffer)if(H)for(let st=0;st<6;st++)Me(v.__webglFramebuffer[st],w,st);else w.texture.mipmaps.length>0?Me(v.__webglFramebuffer[0],w,0):Me(v.__webglFramebuffer,w,0);else if(H){v.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[st]),v.__webglDepthbuffer[st]===void 0)v.__webglDepthbuffer[st]=n.createRenderbuffer(),vi(v.__webglDepthbuffer[st],w,!1);else{let it=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=v.__webglDepthbuffer[st];n.bindRenderbuffer(n.RENDERBUFFER,ot),n.framebufferRenderbuffer(n.FRAMEBUFFER,it,n.RENDERBUFFER,ot)}}else if(w.texture.mipmaps.length>0?e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),vi(v.__webglDepthbuffer,w,!1);else{let it=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ot),n.framebufferRenderbuffer(n.FRAMEBUFFER,it,n.RENDERBUFFER,ot)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ii(w,v,H){let st=i.get(w);v!==void 0&&he(st.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&ei(w)}function ni(w){let v=w.texture,H=i.get(w),st=i.get(v);w.addEventListener("dispose",B),L(w);let it=w.textures,ot=w.isWebGLCubeRenderTarget===!0,ft=it.length>1;if(ft||(st.__webglTexture===void 0&&(st.__webglTexture=n.createTexture()),st.__version=v.version,a.memory.textures++),ot){H.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(v.mipmaps.length>0){H.__webglFramebuffer[Q]=[];for(let j=0;j<v.mipmaps.length;j++)H.__webglFramebuffer[Q][j]=n.createFramebuffer()}else H.__webglFramebuffer[Q]=n.createFramebuffer()}else{if(v.mipmaps.length>0){H.__webglFramebuffer=[];for(let Q=0;Q<v.mipmaps.length;Q++)H.__webglFramebuffer[Q]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(ft)for(let Q=0,j=it.length;Q<j;Q++){let ct=i.get(it[Q]);ct.__webglTexture===void 0&&(ct.__webglTexture=n.createTexture(),a.memory.textures++)}if(w.samples>0&&gt(w)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Q=0;Q<it.length;Q++){let j=it[Q];H.__webglColorRenderbuffer[Q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[Q]);let ct=r.convert(j.format,j.colorSpace),I=r.convert(j.type),tt=T(j.internalFormat,ct,I,j.normalized,j.colorSpace,w.isXRRenderTarget===!0),Z=le(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Z,tt,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.RENDERBUFFER,H.__webglColorRenderbuffer[Q])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),vi(H.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ot){e.bindTexture(n.TEXTURE_CUBE_MAP,st.__webglTexture),ee(n.TEXTURE_CUBE_MAP,v);for(let Q=0;Q<6;Q++)if(v.mipmaps.length>0)for(let j=0;j<v.mipmaps.length;j++)he(H.__webglFramebuffer[Q][j],w,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,j);else he(H.__webglFramebuffer[Q],w,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);E(v)?S(n.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),e.unbindTexture()}else if(ft){for(let Q=0,j=it.length;Q<j;Q++){let ct=it[Q],I=i.get(ct),tt=n.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(tt=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(tt,I.__webglTexture),ee(tt,ct),he(H.__webglFramebuffer,w,ct,n.COLOR_ATTACHMENT0+Q,tt,0),E(ct)&&S(tt)}e.unbindTexture()}else{let Q=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Q=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Q,st.__webglTexture),ee(Q,v),v.mipmaps.length>0)for(let j=0;j<v.mipmaps.length;j++)he(H.__webglFramebuffer[j],w,v,n.COLOR_ATTACHMENT0,Q,j);else he(H.__webglFramebuffer,w,v,n.COLOR_ATTACHMENT0,Q,0);E(v)?S(Q):v.mipmaps.length>0&&n.texParameteri(Q,n.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),e.unbindTexture()}w.depthBuffer&&ei(w)}function O(w){let v=w.textures;for(let H=0,st=v.length;H<st;H++){let it=v[H];if(E(it)&&it.mipmapsAutoUpdate===!0){let ot=A(w),ft=i.get(it).__webglTexture;e.bindTexture(ot,ft),S(ot),e.unbindTexture()}}}let si=[];function oe(w){if(w.samples>0){if(gt(w)===!1){let v=w.textures,H=w.width,st=w.height,it=n.COLOR_BUFFER_BIT,ot=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ft=i.get(w),Q=v.length>1;if(Q)for(let ct=0;ct<v.length;ct++)e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer),w.texture.mipmaps.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ft.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let ct=0;ct<v.length;ct++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(it|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(it|=n.STENCIL_BUFFER_BIT)),Q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ft.__webglColorRenderbuffer[ct]);let I=i.get(v[ct]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,I,0)}n.blitFramebuffer(0,0,H,st,0,0,H,st,it,n.NEAREST),l===!0&&(si.length=0,si.push(n.COLOR_ATTACHMENT0+ct),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&si.push(ot),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,si))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Q)for(let ct=0;ct<v.length;ct++){e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,ft.__webglColorRenderbuffer[ct]);let I=i.get(v[ct]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,I,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){let v=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function le(w){return Math.min(s.maxSamples,w.samples)}function gt(w){let v=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function _e(w){let v=a.render.frame;h.get(w)!==v&&(h.set(w,v),w.update())}function It(w,v){let H=w.colorSpace,st=w.format,it=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||H!==Cs&&H!==Xi&&(Xt.getTransfer(H)===jt?(st!==_i||it!==Xe)&&Pt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Lt("WebGLTextures: Unsupported texture color space:",H)),v}function Nt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=Tt,this.resetTextureUnits=W,this.getTextureUnits=J,this.setTextureUnits=dt,this.setTexture2D=mt,this.setTexture2DArray=U,this.setTexture3D=Y,this.setTextureCube=et,this.rebindTextures=ii,this.setupRenderTarget=ni,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=ei,this.setupFrameBufferTexture=he,this.useMultisampledRTT=gt,this.dispose=z}function u_(n,t){function e(i,s=Xi){let r,a=Xt.getTransfer(s);if(i===Xe)return n.UNSIGNED_BYTE;if(i===Ba)return n.UNSIGNED_SHORT_4_4_4_4;if(i===za)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ql)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===$l)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Wl)return n.BYTE;if(i===Xl)return n.SHORT;if(i===cs)return n.UNSIGNED_SHORT;if(i===Oa)return n.INT;if(i===mi)return n.UNSIGNED_INT;if(i===oi)return n.FLOAT;if(i===gi)return n.HALF_FLOAT;if(i===Yl)return n.ALPHA;if(i===Zl)return n.RGB;if(i===_i)return n.RGBA;if(i===Bi)return n.DEPTH_COMPONENT;if(i===Wi)return n.DEPTH_STENCIL;if(i===ka)return n.RED;if(i===Ha)return n.RED_INTEGER;if(i===on)return n.RG;if(i===Ga)return n.RG_INTEGER;if(i===Va)return n.RGBA_INTEGER;if(i===dr||i===fr||i===pr||i===mr)if(a===jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===dr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===dr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===fr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===pr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===mr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Wa||i===Xa||i===qa||i===$a)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Wa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Xa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===qa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===$a)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ya||i===Za||i===Ja||i===Ka||i===Qa||i===gr||i===ja)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ya||i===Za)return a===jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ja)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ka)return r.COMPRESSED_R11_EAC;if(i===Qa)return r.COMPRESSED_SIGNED_R11_EAC;if(i===gr)return r.COMPRESSED_RG11_EAC;if(i===ja)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===to||i===eo||i===io||i===no||i===so||i===ro||i===ao||i===oo||i===lo||i===co||i===ho||i===uo||i===fo||i===po)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===to)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===eo)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===io)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===no)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===so)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ro)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ao)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===oo)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===lo)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===co)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ho)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===uo)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===fo)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===po)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===mo||i===go||i===_o)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===mo)return a===jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===go)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===_o)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===xo||i===vo||i===_r||i===yo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===xo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===vo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===_r)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===yo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===bn?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var d_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,f_=`
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

}`,yc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Xs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Ai({vertexShader:d_,fragmentShader:f_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new qt(new xn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Mc=class extends bi{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,g=null,x=typeof XRWebGLBinding<"u",p=new yc,m={},y=e.getContextAttributes(),E=null,S=null,A=[],T=[],_=new Mt,b=null,L=null,C=new Oe;C.viewport=new ce;let N=new Oe;N.viewport=new ce;let B=[C,N],q=new La,R=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let mt=A[K];return mt===void 0&&(mt=new Yn,A[K]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(K){let mt=A[K];return mt===void 0&&(mt=new Yn,A[K]=mt),mt.getGripSpace()},this.getHand=function(K){let mt=A[K];return mt===void 0&&(mt=new Yn,A[K]=mt),mt.getHandSpace()};function V(K){let mt=T.indexOf(K.inputSource);if(mt===-1)return;let U=A[mt];U!==void 0&&(U.update(K.inputSource,K.frame,c||a),U.dispatchEvent({type:K.type,data:K.inputSource}))}function X(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",nt);for(let K=0;K<A.length;K++){let mt=T[K];mt!==null&&(T[K]=null,A[K].disconnect(mt))}R=null,z=null,p.reset();for(let K in m)delete m[K];if(t.setRenderTarget(E),d=null,u=null,f=null,s=null,S=null,Tt.stop(),i.isPresenting=!1,t.setPixelRatio(b),t.setSize(_.width,_.height,!1),L!==null){let K=L.camera;K.fov=L.fov,K.zoom=L.zoom,K.updateProjectionMatrix(),L=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&Pt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&Pt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",X),s.addEventListener("inputsourceschange",nt),y.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let U=null,Y=null,et=null;y.depth&&(et=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,U=y.stencil?Wi:Bi,Y=y.stencil?bn:mi);let yt={colorFormat:e.RGBA8,depthFormat:et,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(yt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),S=new Je(u.textureWidth,u.textureHeight,{format:_i,type:Xe,depthTexture:new Gi(u.textureWidth,u.textureHeight,Y,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let U={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,U),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new Je(d.framebufferWidth,d.framebufferHeight,{format:_i,type:Xe,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Tt.setContext(s),Tt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function nt(K){for(let mt=0;mt<K.removed.length;mt++){let U=K.removed[mt],Y=T.indexOf(U);Y>=0&&(T[Y]=null,A[Y].disconnect(U))}for(let mt=0;mt<K.added.length;mt++){let U=K.added[mt],Y=T.indexOf(U);if(Y===-1){for(let yt=0;yt<A.length;yt++)if(yt>=T.length){T.push(U),Y=yt;break}else if(T[yt]===null){T[yt]=U,Y=yt;break}if(Y===-1)break}let et=A[Y];et&&et.connect(U)}}function P(K,mt){mt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(mt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let mt=K.near,U=K.far;p.texture!==null&&(p.depthNear>0&&(mt=p.depthNear),p.depthFar>0&&(U=p.depthFar)),q.near=N.near=C.near=mt,q.far=N.far=C.far=U,(R!==q.near||z!==q.far)&&(s.updateRenderState({depthNear:q.near,depthFar:q.far}),R=q.near,z=q.far),q.layers.mask=K.layers.mask|6,C.layers.mask=q.layers.mask&-5,N.layers.mask=q.layers.mask&-3;let Y=K.parent,et=q.cameras;P(q,Y);for(let yt=0;yt<et.length;yt++)P(et[yt],Y);q.projectionMatrix.copy(C.projectionMatrix),q.projectionMatrixInverse.copy(C.projectionMatrixInverse),L===null&&K.isPerspectiveCamera&&(L={camera:K,fov:K.fov,zoom:K.zoom}),W(K,q,Y)};function W(K,mt,U){U===null?K.matrix.copy(mt.matrixWorld):(K.matrix.copy(U.matrixWorld),K.matrix.invert(),K.matrix.multiply(mt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(mt.projectionMatrix),K.projectionMatrixInverse.copy(mt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=oa*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(q)},this.getCameraTexture=function(K){return m[K]};let J=null;function dt(K,mt){if(h=mt.getViewerPose(c||a),g=mt,h!==null){let U=h.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let Y=!1;U.length!==q.cameras.length&&(q.cameras.length=0,Y=!0);for(let At=0;At<U.length;At++){let ee=U[At],ne=null;if(d!==null)ne=d.getViewport(ee);else{let we=f.getViewSubImage(u,ee);ne=we.viewport,At===0&&(t.setRenderTargetTextures(S,we.colorTexture,we.depthStencilTexture),t.setRenderTarget(S))}let Gt=B[At];Gt===void 0&&(Gt=new Oe,Gt.layers.enable(At),Gt.viewport=new ce,B[At]=Gt),Gt.matrix.fromArray(ee.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(ee.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(ne.x,ne.y,ne.width,ne.height),At===0&&(q.matrix.copy(Gt.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Y===!0&&q.cameras.push(Gt)}let et=s.enabledFeatures;if(et&&et.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=i.getBinding();let At=f.getDepthInformation(U[0]);At&&At.isValid&&At.texture&&p.init(At,s.renderState)}if(et&&et.includes("camera-access")&&x){t.state.unbindTexture(),f=i.getBinding();for(let At=0;At<U.length;At++){let ee=U[At].camera;if(ee){let ne=m[ee];ne||(ne=new Xs,m[ee]=ne);let Gt=f.getCameraImage(ee);ne.sourceTexture=Gt}}}}for(let U=0;U<A.length;U++){let Y=T[U],et=A[U];Y!==null&&et!==void 0&&et.update(Y,mt,c||a)}J&&J(K,mt),mt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:mt}),g=null}let Tt=new zu;Tt.setAnimationLoop(dt),this.setAnimationLoop=function(K){J=K},this.dispose=function(){}}},p_=new Kt,Zu=new Dt;Zu.set(-1,0,0,0,1,0,0,0,1);function m_(n,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,nc(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,y,E,S){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),f(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&d(p,m,S)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,y,E):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Ie&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Ie&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let y=t.get(m),E=y.envMap,S=y.envMapRotation;E&&(p.envMap.value=E,p.envMapRotation.value.setFromMatrix4(p_.makeRotationFromEuler(S)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Zu),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,E){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=E*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,y){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ie&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){let y=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function g_(n,t,e,i){let s={},r={};function a(y,E){let S=E.program;i.uniformBlockBinding(y,S,s[y.id])}function o(y,E){let S=s[y.id];S===void 0&&(g(y),S=l(y),s[y.id]=S,y.addEventListener("dispose",p));let A=E.program;i.updateUBOMapping(y,A);let T=t.render.frame;r[y.id]!==T&&(c(y),r[y.id]=T)}function l(y){let E=n.createBuffer(),S=y.__size,A=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,S,A),n.bindBuffer(n.UNIFORM_BUFFER,null),E}function c(y){let E=s[y.id],S=y.uniforms,A=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let T=0,_=S.length;T<_;T++){let b=S[T];if(Array.isArray(b))for(let L=0,C=b.length;L<C;L++)h(b[L],T,L,A);else h(b,T,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(y,E,S,A){if(u(y,E,S,A)===!0){let T=y.__offset,_=y.value;if(Array.isArray(_)){let b=0;for(let L=0;L<_.length;L++){let C=_[L],N=x(C,!0);f(C,y.__data,b),b+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else f(_,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,T,y.__data)}}function f(y,E,S){typeof y=="number"||typeof y=="boolean"?E[S]=y:y.isMatrix3?(E[S]=y.elements[0],E[S+1]=y.elements[1],E[S+2]=y.elements[2],E[S+3]=0,E[S+4]=y.elements[3],E[S+5]=y.elements[4],E[S+6]=y.elements[5],E[S+7]=0,E[S+8]=y.elements[6],E[S+9]=y.elements[7],E[S+10]=y.elements[8],E[S+11]=0):ArrayBuffer.isView(y)?E.set(y.subarray(0,E.length-S),S):y.toArray(E,S)}function u(y,E,S,A){let T=y.value,_=E+"_"+S;if(Array.isArray(T)){A[_]===void 0&&(A[_]=[]);let b=A[_],L=!1;for(let C=0;C<T.length;C++)d(T[C],b,C)===!0&&(L=!0);return L}return d(T,A,_)}function d(y,E,S){if(E[S]===void 0)return typeof y=="number"||typeof y=="boolean"?E[S]=y:ArrayBuffer.isView(y)?E[S]=y.slice():E[S]=y.clone(),!0;{let A=E[S];if(typeof y=="number"||typeof y=="boolean"){if(A!==y)return E[S]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(A.equals(y)===!1)return A.copy(y),!0}}return!1}function g(y){let E=y.uniforms,S=0,A=16;for(let _=0,b=E.length;_<b;_++){let L=Array.isArray(E[_])?E[_]:[E[_]];for(let C=0,N=L.length;C<N;C++){let B=L[C],q=Array.isArray(B.value)?B.value:[B.value],R=Array.isArray(E[_])||Array.isArray(B.value),z=S;for(let X=0,nt=q.length;X<nt;X++){let P=q[X],W=x(P,R),J=S%A,dt=J%W.boundary,Tt=J+dt;S+=dt,Tt!==0&&A-Tt<W.storage&&(S+=A-Tt),X===0&&(z=S),S+=W.storage}let V=B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array;B.__data=new V((S-z)/Float32Array.BYTES_PER_ELEMENT),B.__offset=z}}let T=S%A;return T>0&&(S+=A-T),y.__size=S,y.__cache={},this}function x(y,E){let S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=16,S.storage=48):y.isMatrix4?(S.boundary=16,S.storage=64):y.isTexture?Pt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(S.boundary=16,S.storage=y.byteLength):Pt("WebGLRenderer: Unsupported uniform value type.",y),E===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function p(y){let E=y.target;E.removeEventListener("dispose",p),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function m(){for(let y in s)n.deleteBuffer(s[y]);s={},r={}}return{bind:a,update:o,dispose:m}}var __=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ci=null;function x_(){return Ci===null&&(Ci=new zs(__,16,16,on,gi),Ci.name="DFG_LUT",Ci.minFilter=ke,Ci.magFilter=ke,Ci.wrapS=Mi,Ci.wrapT=Mi,Ci.generateMipmaps=!1,Ci.needsUpdate=!0),Ci}var Eo=class{constructor(t={}){let{canvas:e=ru(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Xe}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let x=d,p=new Set([Va,Ga,Ha]),m=new Set([Xe,mi,cs,bn,Ba,za]),y=new Uint32Array(4),E=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]},A=null,T=null,_=[],b=[],L=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,N=!1,B=null,q=null,R=null,z=null;this._outputColorSpace=Fe;let V=0,X=0,nt=null,P=-1,W=null,J=new ce,dt=new ce,Tt=null,K=new Bt(0),mt=0,U=e.width,Y=e.height,et=1,yt=null,$t=null,At=new ce(0,0,U,Y),ee=new ce(0,0,U,Y),ne=!1,Gt=new en,we=new ua,ge=!1,We=!1,he=new Kt,vi=new F,Me=new ce,ei={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ii=!1;function ni(){return nt===null?et:1}let O=i;function si(M,D){return e.getContext(M,D)}let oe,le,gt,_e,It,Nt,w,v,H,st,it,ot,ft,Q,j,ct,I,tt,Z,ht,at,lt,Rt;try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Ct,!1),e.addEventListener("webglcontextrestored",Ot,!1),e.addEventListener("webglcontextcreationerror",_t,!1),O===null){let D="webgl2";if(O=si(D,M),O===null)throw si(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}zt()}catch(M){throw e.removeEventListener("webglcontextlost",Ct,!1),e.removeEventListener("webglcontextrestored",Ot,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),Lt("WebGLRenderer: "+M.message),M}function zt(){oe=new Cg(O),oe.init(),at=new u_(O,oe),le=new xg(O,oe,t,at),gt=new c_(O,oe),le.reversedDepthBuffer&&u&&gt.buffers.depth.setReversed(!0),q=O.createFramebuffer(),R=O.createFramebuffer(),z=O.createFramebuffer(),_e=new Lg(O),It=new Z0,Nt=new h_(O,oe,gt,It,le,at,_e),w=new Rg(C),v=new Nf(O),lt=new gg(O,v),H=new Ig(O,v,_e,lt),st=new Ng(O,H,v,lt,_e),tt=new Dg(O,le,Nt),j=new vg(It),it=new Y0(C,w,oe,le,lt,j),ot=new m_(C,It),ft=new K0,Q=new n_(oe),I=new mg(C,w,gt,st,g,l),ct=new l_(C,st,le),Rt=new g_(O,_e,le,gt),Z=new _g(O,oe,_e),ht=new Pg(O,oe,_e),_e.programs=it.programs,C.capabilities=le,C.extensions=oe,C.properties=It,C.renderLists=ft,C.shadowMap=ct,C.state=gt,C.info=_e}x!==Xe&&(L=new Fg(x,e.width,e.height,o,s,r));let rt=new Mc(C,O);this.xr=rt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let M=oe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=oe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(M){M!==void 0&&(et=M,this.setSize(U,Y,!1))},this.getSize=function(M){return M.set(U,Y)},this.setSize=function(M,D,$=!0){if(rt.isPresenting){Pt("WebGLRenderer: Can't change size while VR device is presenting.");return}U=M,Y=D,e.width=Math.floor(M*et),e.height=Math.floor(D*et),$===!0&&(e.style.width=M+"px",e.style.height=D+"px"),L!==null&&L.setSize(e.width,e.height),this.setViewport(0,0,M,D)},this.getDrawingBufferSize=function(M){return M.set(U*et,Y*et).floor()},this.setDrawingBufferSize=function(M,D,$){U=M,Y=D,et=$,e.width=Math.floor(M*$),e.height=Math.floor(D*$),this.setViewport(0,0,M,D)},this.setEffects=function(M){if(x===Xe){Lt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let D=0;D<M.length;D++)if(M[D].isOutputPass===!0){Pt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(J)},this.getViewport=function(M){return M.copy(At)},this.setViewport=function(M,D,$,k){M.isVector4?At.set(M.x,M.y,M.z,M.w):At.set(M,D,$,k),gt.viewport(J.copy(At).multiplyScalar(ni()).round())},this.getScissor=function(M){return M.copy(ee)},this.setScissor=function(M,D,$,k){M.isVector4?ee.set(M.x,M.y,M.z,M.w):ee.set(M,D,$,k),gt.scissor(dt.copy(ee).multiplyScalar(ni()).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(M){gt.setScissorTest(ne=M)},this.setOpaqueSort=function(M){yt=M},this.setTransparentSort=function(M){$t=M},this.getClearColor=function(M){return M.copy(I.getClearColor())},this.setClearColor=function(){I.setClearColor(...arguments)},this.getClearAlpha=function(){return I.getClearAlpha()},this.setClearAlpha=function(){I.setClearAlpha(...arguments)},this.clear=function(M=!0,D=!0,$=!0){let k=0;if(M){let G=!1;if(nt!==null){let pt=nt.texture.format;G=p.has(pt)}if(G){let pt=nt.texture.type,St=m.has(pt),ut=I.getClearColor(),vt=I.getClearAlpha(),wt=ut.r,Ft=ut.g,Vt=ut.b;St?(y[0]=wt,y[1]=Ft,y[2]=Vt,y[3]=vt,O.clearBufferuiv(O.COLOR,0,y)):(E[0]=wt,E[1]=Ft,E[2]=Vt,E[3]=vt,O.clearBufferiv(O.COLOR,0,E))}else k|=O.COLOR_BUFFER_BIT}D&&(k|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(k|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&O.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),B=M},this.dispose=function(){e.removeEventListener("webglcontextlost",Ct,!1),e.removeEventListener("webglcontextrestored",Ot,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),I.dispose(),ft.dispose(),Q.dispose(),Nt.dispose(),It.dispose(),w.dispose(),st.dispose(),H.dispose(),lt.dispose(),Rt.dispose(),it.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Oc),rt.removeEventListener("sessionend",Bc),cn.stop()};function Ct(M){M.preventDefault(),tc("WebGLRenderer: Context Lost."),N=!0}function Ot(){tc("WebGLRenderer: Context Restored."),N=!1;let M=_e.autoReset,D=ct.enabled,$=ct.autoUpdate,k=ct.needsUpdate,G=ct.type;zt(),_e.autoReset=M,ct.enabled=D,ct.autoUpdate=$,ct.needsUpdate=k,ct.type=G}function _t(M){Lt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ie(M){let D=M.target;D.removeEventListener("dispose",ie),Se(D)}function Se(M){$i(M),It.remove(M)}function $i(M){let D=It.get(M).programs;D!==void 0&&(D.forEach(function($){it.releaseProgram($)}),M.isShaderMaterial&&it.releaseShaderCache(M))}this.renderBufferDirect=function(M,D,$,k,G,pt){D===null&&(D=ei);let St=G.isMesh&&G.matrixWorld.determinantAffine()<0,ut=yd(M,D,$,k,G);gt.setMaterial(k,St);let vt=$.index,wt=1;if(k.wireframe===!0){if(vt=H.getWireframeAttribute($),vt===void 0)return;wt=2}let Ft=$.drawRange,Vt=$.attributes.position,bt=Ft.start*wt,Wt=(Ft.start+Ft.count)*wt;pt!==null&&(bt=Math.max(bt,pt.start*wt),Wt=Math.min(Wt,(pt.start+pt.count)*wt)),vt!==null?(bt=Math.max(bt,0),Wt=Math.min(Wt,vt.count)):Vt!=null&&(bt=Math.max(bt,0),Wt=Math.min(Wt,Vt.count));let fe=Wt-bt;if(fe<0||fe===1/0)return;lt.setup(G,k,ut,$,vt);let re,se=Z;if(vt!==null&&(re=v.get(vt),se=ht,se.setIndex(re)),G.isMesh)k.wireframe===!0?(gt.setLineWidth(k.wireframeLinewidth*ni()),se.setMode(O.LINES)):se.setMode(O.TRIANGLES);else if(G.isLine){let Le=k.linewidth;Le===void 0&&(Le=1),gt.setLineWidth(Le*ni()),G.isLineSegments?se.setMode(O.LINES):G.isLineLoop?se.setMode(O.LINE_LOOP):se.setMode(O.LINE_STRIP)}else G.isPoints?se.setMode(O.POINTS):G.isSprite&&se.setMode(O.TRIANGLES);if(G.isBatchedMesh)if(oe.get("WEBGL_multi_draw"))se.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Le=G._multiDrawStarts,Et=G._multiDrawCounts,ze=G._multiDrawCount,Jt=vt?v.get(vt).bytesPerElement:1,hn=It.get(k).currentProgram.getUniforms();for(let De=0;De<ze;De++)hn.setValue(O,"_gl_DrawID",De),se.render(Le[De]/Jt,Et[De])}else if(G.isInstancedMesh)se.renderInstances(bt,fe,G.count);else if($.isInstancedBufferGeometry){let Le=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Et=Math.min($.instanceCount,Le);se.renderInstances(bt,fe,Et)}else se.render(bt,fe)};function Fc(M,D,$,k){B!==null&&M.isNodeMaterial&&B.setObject(k,M),ge===!0&&j.setState(M,$,!1),M.transparent===!0&&M.side===me&&M.forceSinglePass===!1?(M.side=Ie,M.needsUpdate=!0,_s(M,D,k),M.side=an,M.needsUpdate=!0,_s(M,D,k),M.side=me):_s(M,D,k)}this.compile=function(M,D,$=null){$===null&&($=M),B!==null&&B.renderStart(M,D,$),T=Q.get($),T.init(D),b.push(T),$.traverseVisible(function(G){G.isLight&&G.layers.test(D.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),M!==$&&M.traverseVisible(function(G){G.isLight&&G.layers.test(D.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),T.setupLights(),B!==null&&B.updateLights(T.state.lightsArray),We=this.localClippingEnabled,ge=j.init(this.clippingPlanes,We),ge===!0&&j.setGlobalState(this.clippingPlanes,D),B!==null&&ct.render(T.state.shadowsArray,$,D);let k=new Set;return M.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let pt=G.material;if(pt)if(Array.isArray(pt))for(let St=0;St<pt.length;St++){let ut=pt[St];Fc(ut,$,D,G),k.add(ut)}else Fc(pt,$,D,G),k.add(pt)}),T=b.pop(),B!==null&&B.renderEnd(),k},this.compileAsync=function(M,D,$=null){let k=this.compile(M,D,$);return new Promise(G=>{function pt(){if(k.forEach(function(St){let vt=It.get(St).currentProgram;(vt===void 0||vt.isReady())&&k.delete(St)}),k.size===0){G(M);return}setTimeout(pt,10)}oe.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let qo=null;function xd(M){qo&&qo(M)}function Oc(){cn.stop()}function Bc(){cn.start()}let cn=new zu;cn.setAnimationLoop(xd),typeof self<"u"&&cn.setContext(self),this.setAnimationLoop=function(M){qo=M,rt.setAnimationLoop(M),M===null?cn.stop():cn.start()},rt.addEventListener("sessionstart",Oc),rt.addEventListener("sessionend",Bc),this.render=function(M,D){if(D!==void 0&&D.isCamera!==!0){Lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;B!==null&&B.renderStart(M,D);let $=rt.enabled===!0&&rt.isPresenting===!0,k=L!==null&&(nt===null||$)&&L.begin(C,nt);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(D),D=rt.getCamera()),M.isScene===!0&&M.onBeforeRender(C,M,D,nt),T=Q.get(M,b.length),T.init(D),T.state.textureUnits=Nt.getTextureUnits(),b.push(T),he.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),D.isArrayCamera?we.setFromArrayCamera(D):Gt.setFromProjectionMatrix(he,ai,D.reversedDepth),We=this.localClippingEnabled,ge=j.init(this.clippingPlanes,We),A=ft.get(M,_.length),A.init(),_.push(A),this.info.render.frame++,rt.enabled===!0&&rt.isPresenting===!0){let St=C.xr.getDepthSensingMesh();St!==null&&$o(St,D,-1/0,C.sortObjects)}$o(M,D,0,C.sortObjects),A.finish(),B!==null&&B.updateLights(T.state.lightsArray),C.sortObjects===!0&&A.sort(yt,$t),ii=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,ii&&I.addToRenderList(A,M),this.info.autoReset===!0&&this.info.reset(),ge===!0&&j.beginShadows();let G=T.state.shadowsArray;if(ct.render(G,M,D),ge===!0&&j.endShadows(),(k&&L.hasRenderPass())===!1){let St=A.opaque,ut=A.transmissive;if(T.setupLights(),D.isArrayCamera){let vt=D.cameras;if(ut.length>0)for(let wt=0,Ft=vt.length;wt<Ft;wt++){let Vt=vt[wt];kc(St,ut,M,Vt)}ii&&I.render(M);for(let wt=0,Ft=vt.length;wt<Ft;wt++){let Vt=vt[wt];zc(A,M,Vt,Vt.viewport)}}else ut.length>0&&kc(St,ut,M,D),ii&&I.render(M),zc(A,M,D)}nt!==null&&X===0&&(Nt.updateMultisampleRenderTarget(nt),Nt.updateRenderTargetMipmap(nt)),k&&L.end(C),M.isScene===!0&&M.onAfterRender(C,M,D),lt.resetDefaultState(),P=-1,W=null,b.pop(),b.length>0?(T=b[b.length-1],Nt.setTextureUnits(T.state.textureUnits),ge===!0&&j.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,_.pop(),_.length>0?A=_[_.length-1]:A=null,B!==null&&B.renderEnd()};function $o(M,D,$,k){if(M.visible===!1)return;if(M.layers.test(D.layers)){if(M.isGroup)$=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(D);else if(M.isLight)T.pushLight(M),M.castShadow&&T.pushShadow(M);else if(M.isSprite){let St=D.isArrayCamera?we:Gt;if(!M.frustumCulled||M.intersectsFrustum(St)){k&&Me.setFromMatrixPosition(M.matrixWorld).applyMatrix4(he);let ut=st.update(M),vt=M.material;vt.visible&&A.push(M,ut,vt,$,Me.z,null,D)}}else if(M.isMesh||M.isLine||M.isPoints){let St=D.isArrayCamera?we:Gt;if(!M.frustumCulled||M.intersectsFrustum(St)){let ut=st.update(M),vt=M.material;if(k&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Me.copy(M.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),Me.copy(ut.boundingSphere.center)),Me.applyMatrix4(M.matrixWorld).applyMatrix4(he)),Array.isArray(vt)){let wt=ut.groups;for(let Ft=0,Vt=wt.length;Ft<Vt;Ft++){let bt=wt[Ft],Wt=vt[bt.materialIndex];Wt&&Wt.visible&&A.push(M,ut,Wt,$,Me.z,bt,D)}}else vt.visible&&A.push(M,ut,vt,$,Me.z,null,D)}}}let pt=M.children;for(let St=0,ut=pt.length;St<ut;St++)$o(pt[St],D,$,k)}function zc(M,D,$,k){let{opaque:G,transmissive:pt,transparent:St}=M;T.setupLightsView($),ge===!0&&j.setGlobalState(C.clippingPlanes,$),k&&gt.viewport(J.copy(k)),G.length>0&&br(G,D,$),pt.length>0&&br(pt,D,$),St.length>0&&br(St,D,$),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function kc(M,D,$,k){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[k.id]===void 0){let bt=oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[k.id]=new Je(1,1,{generateMipmaps:!0,type:bt?gi:Xe,minFilter:Vi,samples:Math.max(4,le.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Xt.workingColorSpace})}let pt=T.state.transmissionRenderTarget[k.id],St=k.viewport||J;pt.setSize(St.z*C.transmissionResolutionScale,St.w*C.transmissionResolutionScale);let ut=C.getRenderTarget(),vt=C.getActiveCubeFace(),wt=C.getActiveMipmapLevel();C.setRenderTarget(pt),C.getClearColor(K),mt=C.getClearAlpha(),mt<1&&C.setClearColor(16777215,.5),C.clear(),ii&&I.render($);let Ft=C.toneMapping;C.toneMapping=Ri;let Vt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),T.setupLightsView(k),ge===!0&&j.setGlobalState(C.clippingPlanes,k),br(M,$,k),Nt.updateMultisampleRenderTarget(pt),Nt.updateRenderTargetMipmap(pt),oe.has("WEBGL_multisampled_render_to_texture")===!1){let bt=!1;for(let Wt=0,fe=D.length;Wt<fe;Wt++){let re=D[Wt],{object:se,geometry:Le,material:Et,group:ze}=re;if(Et.side===me&&se.layers.test(k.layers)){let Jt=Et.side;Et.side=Ie,Et.needsUpdate=!0,Hc(se,$,k,Le,Et,ze),Et.side=Jt,Et.needsUpdate=!0,bt=!0}}bt===!0&&(Nt.updateMultisampleRenderTarget(pt),Nt.updateRenderTargetMipmap(pt))}C.setRenderTarget(ut,vt,wt),C.setClearColor(K,mt),Vt!==void 0&&(k.viewport=Vt),C.toneMapping=Ft}function br(M,D,$){let k=D.isScene===!0?D.overrideMaterial:null;for(let G=0,pt=M.length;G<pt;G++){let St=M[G],{object:ut,geometry:vt,group:wt}=St,Ft=St.material;Ft.allowOverride===!0&&k!==null&&(Ft=k),ut.layers.test($.layers)&&Hc(ut,D,$,vt,Ft,wt)}}function Hc(M,D,$,k,G,pt){B!==null&&G.isNodeMaterial&&B.setObject(M,G),M.onBeforeRender(C,D,$,k,G,pt),M.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),G.onBeforeRender(C,D,$,k,M,pt),G.transparent===!0&&G.side===me&&G.forceSinglePass===!1?(G.side=Ie,G.needsUpdate=!0,C.renderBufferDirect($,D,k,G,M,pt),G.side=an,G.needsUpdate=!0,C.renderBufferDirect($,D,k,G,M,pt),G.side=me):C.renderBufferDirect($,D,k,G,M,pt),M.onAfterRender(C,D,$,k,G,pt)}function Gc(M){let D=0;for(let $ of M)$.texture!==null&&D++;return D}function _s(M,D,$){D.isScene!==!0&&(D=ei);let k=It.get(M),G=T.state.lights,pt=T.state.shadowsArray,St=G.state.version,ut=it.getParameters(M,G.state,pt,D,$,T.state.lightProbeGridArray),vt=it.getProgramCacheKey(ut),wt=k.programs;k.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?D.environment:null,k.fog=D.fog;let Ft=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;k.envMap=w.get(M.envMap||k.environment,Ft),k.envMapRotation=k.environment!==null&&M.envMap===null?D.environmentRotation:M.envMapRotation,wt===void 0&&(M.addEventListener("dispose",ie),wt=new Map,k.programs=wt,k.programVariants=new Map);let Vt=wt.get(vt);if(Vt!==void 0){if(k.currentProgram===Vt&&k.lightsStateVersion===St)return Wc(M,ut),Vt}else ut.uniforms=it.getUniforms(M),B!==null&&M.isNodeMaterial&&B.build(M,$,ut),M.onBeforeCompile(ut,C),Vt=it.acquireProgram(ut,vt),wt.set(vt,Vt),k.uniforms=ut.uniforms;let bt=k.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(bt.clippingPlanes=j.uniform),Wc(M,ut),k.needsLights=Sd(M),k.lightsStateVersion=St,k.needsLights&&(bt.ambientLightColor.value=G.state.ambient,bt.lightProbe.value=G.state.probe,bt.sunLights.value=G.state.sun,bt.sunLightShadows.value=G.state.sunShadow,bt.directionalLights.value=G.state.directional,bt.directionalLightShadows.value=G.state.directionalShadow,bt.spotLights.value=G.state.spot,bt.spotLightShadows.value=G.state.spotShadow,bt.rectAreaLights.value=G.state.rectArea,bt.ltc_1.value=G.state.rectAreaLTC1,bt.ltc_2.value=G.state.rectAreaLTC2,bt.pointLights.value=G.state.point,bt.pointLightShadows.value=G.state.pointShadow,bt.hemisphereLights.value=G.state.hemi,bt.sunShadowMatrix.value=G.state.sunShadowMatrix,bt.sunShadowCascade.value=G.state.sunShadowCascade,bt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,bt.spotLightMatrix.value=G.state.spotLightMatrix,bt.spotLightMap.value=G.state.spotLightMap,bt.pointShadowMatrix.value=G.state.pointShadowMatrix),k.numLightProbeGrids=Gc(T.state.lightProbeGridArray),k.currentProgram=Vt,k.uniformsList=null,Vt}function vd(M,D,$,k,G){let pt=It.get(M),St=pt.currentProgram.id+","+k+","+G,ut=pt.programVariants.get(St);return ut===void 0?(ut=_s(M,D,$),pt.programVariants.set(St,ut)):(pt.currentProgram=ut,pt.uniformsList=null,pt.outputColorSpace=k,pt.toneMapping=G),ut}function Vc(M){if(M.uniformsList===null){let D=M.currentProgram.getUniforms();M.uniformsList=us.seqWithValue(D.seq,M.uniforms)}return M.uniformsList}function Wc(M,D){let $=It.get(M);$.outputColorSpace=D.outputColorSpace,$.batching=D.batching,$.batchingColor=D.batchingColor,$.instancing=D.instancing,$.instancingColor=D.instancingColor,$.instancingMorph=D.instancingMorph,$.skinning=D.skinning,$.morphTargets=D.morphTargets,$.morphNormals=D.morphNormals,$.morphColors=D.morphColors,$.morphTargetsCount=D.morphTargetsCount,$.numClippingPlanes=D.numClippingPlanes,$.numIntersection=D.numClipIntersection,$.vertexAlphas=D.vertexAlphas,$.vertexTangents=D.vertexTangents,$.toneMapping=D.toneMapping}function yd(M,D,$,k,G){D.isScene!==!0&&(D=ei),Nt.resetTextureUnits();let pt=D.fog,St=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?D.environment:null,ut=nt===null?C.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Xt.workingColorSpace,vt=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,wt=w.get(k.envMap||St,vt),Ft=k.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Vt=!!$.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),bt=!!$.morphAttributes.position,Wt=!!$.morphAttributes.normal,fe=!!$.morphAttributes.color,re=Ri;k.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(re=C.toneMapping);let se=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Le=se!==void 0?se.length:0,Et=It.get(k),ze=T.state.lights;if(ge===!0&&(We===!0||M!==W)){let ue=M===W&&k.id===P;j.setState(k,M,ue)}let Jt=!1,hn=!1;k.version===Et.__version?Et.needsLights&&Et.lightsStateVersion!==ze.state.version||G.isBatchedMesh&&Et.batching===!1||!G.isBatchedMesh&&Et.batching===!0||G.isBatchedMesh&&Et.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Et.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Et.instancing===!1||!G.isInstancedMesh&&Et.instancing===!0||G.isSkinnedMesh&&Et.skinning===!1||!G.isSkinnedMesh&&Et.skinning===!0||G.isInstancedMesh&&Et.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Et.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Et.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Et.instancingMorph===!1&&G.morphTexture!==null||Et.envMap!==wt||k.fog===!0&&Et.fog!==pt||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==j.numPlanes||Et.numIntersection!==j.numIntersection)||Et.vertexAlphas!==Ft||Et.vertexTangents!==Vt||Et.morphTargets!==bt||Et.morphNormals!==Wt||Et.morphColors!==fe||Et.morphTargetsCount!==Le||Et.numLightProbeGrids!==Gc(T.state.lightProbeGridArray)?Jt=!0:(Et.outputColorSpace!==ut||Et.toneMapping!==re)&&(hn=!0):(Jt=!0,Et.__version=k.version);let De=Et.currentProgram;(Jt===!0||hn===!0)&&(De=hn===!0?vd(k,D,G,ut,re):_s(k,D,G),B&&k.isNodeMaterial&&B.onUpdateProgram(k,De,Et));let Er=!1,Yi=!1,un=!1,Yt=De.getUniforms(),Ae=Et.uniforms;if(gt.useProgram(De.program)&&(Er=!0,Yi=!0,un=!0),k.id!==P&&(P=k.id,Yi=!0),Er||W!==M){gt.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Yt.setValue(O,"projectionMatrix",M.projectionMatrix),Yt.setValue(O,"viewMatrix",M.matrixWorldInverse);let be=Yt.map.cameraPosition;be!==void 0&&be.setValue(O,vi.setFromMatrixPosition(M.matrixWorld)),le.logarithmicDepthBuffer&&Yt.setValue(O,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Yt.setValue(O,"isOrthographic",M.isOrthographicCamera===!0),W!==M&&(W=M,Yi=!0,un=!0)}if(Et.needsLights&&(ze.state.sunShadowMap.length>0&&Yt.setValue(O,"sunShadowMap",ze.state.sunShadowMap,Nt),ze.state.directionalShadowMap.length>0&&Yt.setValue(O,"directionalShadowMap",ze.state.directionalShadowMap,Nt),ze.state.spotShadowMap.length>0&&Yt.setValue(O,"spotShadowMap",ze.state.spotShadowMap,Nt),ze.state.pointShadowMap.length>0&&Yt.setValue(O,"pointShadowMap",ze.state.pointShadowMap,Nt)),G.isSkinnedMesh){Yt.setOptional(O,G,"bindMatrix"),Yt.setOptional(O,G,"bindMatrixInverse");let ue=G.skeleton;ue&&(ue.boneTexture===null&&ue.computeBoneTexture(),Yt.setValue(O,"boneTexture",ue.boneTexture,Nt))}G.isBatchedMesh&&(Yt.setOptional(O,G,"batchingTexture"),Yt.setValue(O,"batchingTexture",G._matricesTexture,Nt),Yt.setOptional(O,G,"batchingIdTexture"),Yt.setValue(O,"batchingIdTexture",G._indirectTexture,Nt),Yt.setOptional(O,G,"batchingColorTexture"),G._colorsTexture!==null&&Yt.setValue(O,"batchingColorTexture",G._colorsTexture,Nt));let ci=$.morphAttributes;if((ci.position!==void 0||ci.normal!==void 0||ci.color!==void 0)&&tt.update(G,$,De),(Yi||Et.receiveShadow!==G.receiveShadow)&&(Et.receiveShadow=G.receiveShadow,Yt.setValue(O,"receiveShadow",G.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&D.environment!==null&&(Ae.envMapIntensity.value=D.environmentIntensity),Ae.dfgLUT!==void 0&&(Ae.dfgLUT.value=x_()),Yi){if(Yt.setValue(O,"toneMappingExposure",C.toneMappingExposure),Et.needsLights&&Md(Ae,un),pt&&k.fog===!0&&ot.refreshFogUniforms(Ae,pt),ot.refreshMaterialUniforms(Ae,k,et,Y,T.state.transmissionRenderTarget[M.id]),Et.needsLights&&Et.numLightProbeGrids>0){let ue=S,be=0;for(let Pi of T.state.lightProbeGridArray)Pi.texture!==null&&(ue.textures[be]=Pi.texture,ue.min[be]=Pi.boundingBox.min,ue.max[be]=Pi.boundingBox.max,ue.resolution[be]=Pi.resolution,be++);for(let Pi in ue)ue[Pi].length=be;Ae.probesSH.value=ue.textures,Ae.probesMin.value=ue.min,Ae.probesMax.value=ue.max,Ae.probesResolution.value=ue.resolution}us.upload(O,Vc(Et),Ae,Nt)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(us.upload(O,Vc(Et),Ae,Nt),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Yt.setValue(O,"center",G.center),Yt.setValue(O,"modelViewMatrix",G.modelViewMatrix),Yt.setValue(O,"normalMatrix",G.normalMatrix),Yt.setValue(O,"modelMatrix",G.matrixWorld),k.uniformsGroups!==void 0){let ue=k.uniformsGroups;for(let be=0,Pi=ue.length;be<Pi;be++){let qc=ue[be];Rt.update(qc,De),Rt.bind(qc,De)}}return De}function Md(M,D){M.ambientLightColor.needsUpdate=D,M.lightProbe.needsUpdate=D,M.sunLights.needsUpdate=D,M.sunLightShadows.needsUpdate=D,M.directionalLights.needsUpdate=D,M.directionalLightShadows.needsUpdate=D,M.pointLights.needsUpdate=D,M.pointLightShadows.needsUpdate=D,M.spotLights.needsUpdate=D,M.spotLightShadows.needsUpdate=D,M.rectAreaLights.needsUpdate=D,M.hemisphereLights.needsUpdate=D}function Sd(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(M,D,$){let k=It.get(M);k.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),It.get(M.texture).__webglTexture=D,It.get(M.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:$,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,D){let $=It.get(M);$.__webglFramebuffer=D,$.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(M,D=0,$=0){nt=M,V=D,X=$;let k=null,G=!1,pt=!1;if(M){let ut=It.get(M);if(ut.__useDefaultFramebuffer!==void 0){gt.bindFramebuffer(O.FRAMEBUFFER,ut.__webglFramebuffer),J.copy(M.viewport),dt.copy(M.scissor),Tt=M.scissorTest,gt.viewport(J),gt.scissor(dt),gt.setScissorTest(Tt),P=-1;return}else if(ut.__webglFramebuffer===void 0)Nt.setupRenderTarget(M);else if(ut.__hasExternalTextures)Nt.rebindTextures(M,It.get(M.texture).__webglTexture,It.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Ft=M.depthTexture;if(ut.__boundDepthTexture!==Ft){if(Ft!==null&&It.has(Ft)&&(M.width!==Ft.image.width||M.height!==Ft.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Nt.setupDepthRenderbuffer(M)}}let vt=M.texture;(vt.isData3DTexture||vt.isDataArrayTexture||vt.isCompressedArrayTexture)&&(pt=!0);let wt=It.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(wt[D])?k=wt[D][$]:k=wt[D],G=!0):M.samples>0&&Nt.useMultisampledRTT(M)===!1?k=It.get(M).__webglMultisampledFramebuffer:Array.isArray(wt)?k=wt[$]:k=wt,J.copy(M.viewport),dt.copy(M.scissor),Tt=M.scissorTest}else J.copy(At).multiplyScalar(et).floor(),dt.copy(ee).multiplyScalar(et).floor(),Tt=ne;if($!==0&&(k=q),gt.bindFramebuffer(O.FRAMEBUFFER,k)&&gt.drawBuffers(M,k),gt.viewport(J),gt.scissor(dt),gt.setScissorTest(Tt),G){let ut=It.get(M.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+D,ut.__webglTexture,$)}else if(pt){let ut=D;for(let vt=0;vt<M.textures.length;vt++){let wt=It.get(M.textures[vt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+vt,wt.__webglTexture,$,ut)}}else if(M!==null&&$!==0){let ut=It.get(M.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ut.__webglTexture,$)}P=-1};function Xc(M){let D=It.get(M);return(D.__readFormat!==M.format||D.__readType!==M.type)&&(D.__readFormat=M.format,D.__readType=M.type,D.__formatReadable=le.textureFormatReadable(M.format),D.__typeReadable=le.textureTypeReadable(M.type)),D}this.readRenderTargetPixels=function(M,D,$,k,G,pt,St,ut=0){if(!(M&&M.isWebGLRenderTarget)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=It.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&St!==void 0&&(vt=vt[St],Array.isArray(vt)&&(vt=vt[0])),vt){gt.bindFramebuffer(O.FRAMEBUFFER,vt);try{let wt=M.textures[ut],Ft=wt.format,Vt=wt.type;M.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ut);let bt=Xc(wt);if(bt.__formatReadable===!1){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(bt.__typeReadable===!1){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=M.width-k&&$>=0&&$<=M.height-G&&O.readPixels(D,$,k,G,at.convert(Ft),at.convert(Vt),pt)}finally{let wt=nt!==null?It.get(nt).__webglFramebuffer:null;gt.bindFramebuffer(O.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(M,D,$,k,G,pt,St,ut=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=It.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&St!==void 0&&(vt=vt[St],Array.isArray(vt)&&(vt=vt[0])),vt)if(D>=0&&D<=M.width-k&&$>=0&&$<=M.height-G){gt.bindFramebuffer(O.FRAMEBUFFER,vt);let wt=M.textures[ut],Ft=wt.format,Vt=wt.type;M.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ut);let bt=Xc(wt);if(bt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(bt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Wt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Wt),O.bufferData(O.PIXEL_PACK_BUFFER,pt.byteLength,O.STREAM_READ),O.readPixels(D,$,k,G,at.convert(Ft),at.convert(Vt),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let fe=nt!==null?It.get(nt).__webglFramebuffer:null;gt.bindFramebuffer(O.FRAMEBUFFER,fe);let re=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await ou(O,re,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Wt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,pt),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(Wt),O.deleteSync(re),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,D=null,$=0){let k=Math.pow(2,-$),G=Math.floor(M.image.width*k),pt=Math.floor(M.image.height*k),St=D!==null?D.x:0,ut=D!==null?D.y:0;Nt.setTexture2D(M,0),O.copyTexSubImage2D(O.TEXTURE_2D,$,0,0,St,ut,G,pt),gt.unbindTexture()},this.copyTextureToTexture=function(M,D,$=null,k=null,G=0,pt=0){let St,ut,vt,wt,Ft,Vt,bt,Wt,fe,re=M.isCompressedTexture?M.mipmaps[pt]:M.image;if($!==null)St=$.max.x-$.min.x,ut=$.max.y-$.min.y,vt=$.isBox3?$.max.z-$.min.z:1,wt=$.min.x,Ft=$.min.y,Vt=$.isBox3?$.min.z:0;else{let Yt=Math.pow(2,-G);St=Math.floor(re.width*Yt),ut=Math.floor(re.height*Yt),M.isDataArrayTexture?vt=re.depth:M.isData3DTexture?vt=Math.floor(re.depth*Yt):vt=1,wt=0,Ft=0,Vt=0}k!==null?(bt=k.x,Wt=k.y,fe=k.z):(bt=0,Wt=0,fe=0);let se=at.convert(D.format),Le=at.convert(D.type),Et;D.isData3DTexture?(Nt.setTexture3D(D,0),Et=O.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Nt.setTexture2DArray(D,0),Et=O.TEXTURE_2D_ARRAY):(Nt.setTexture2D(D,0),Et=O.TEXTURE_2D),gt.activeTexture(O.TEXTURE0),gt.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,D.flipY),gt.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),gt.pixelStorei(O.UNPACK_ALIGNMENT,D.unpackAlignment);let ze=gt.getParameter(O.UNPACK_ROW_LENGTH),Jt=gt.getParameter(O.UNPACK_IMAGE_HEIGHT),hn=gt.getParameter(O.UNPACK_SKIP_PIXELS),De=gt.getParameter(O.UNPACK_SKIP_ROWS),Er=gt.getParameter(O.UNPACK_SKIP_IMAGES);gt.pixelStorei(O.UNPACK_ROW_LENGTH,re.width),gt.pixelStorei(O.UNPACK_IMAGE_HEIGHT,re.height),gt.pixelStorei(O.UNPACK_SKIP_PIXELS,wt),gt.pixelStorei(O.UNPACK_SKIP_ROWS,Ft),gt.pixelStorei(O.UNPACK_SKIP_IMAGES,Vt);let Yi=M.isDataArrayTexture||M.isData3DTexture,un=D.isDataArrayTexture||D.isData3DTexture;if(M.isDepthTexture){let Yt=It.get(M),Ae=It.get(D),ci=It.get(Yt.__renderTarget),ue=It.get(Ae.__renderTarget);gt.bindFramebuffer(O.READ_FRAMEBUFFER,ci.__webglFramebuffer),gt.bindFramebuffer(O.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let be=0;be<vt;be++)Yi&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,It.get(M).__webglTexture,G,Vt+be),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,It.get(D).__webglTexture,pt,fe+be)),O.blitFramebuffer(wt,Ft,wt+St,Ft+ut,bt,Wt,bt+St,Wt+ut,O.DEPTH_BUFFER_BIT,O.NEAREST);gt.bindFramebuffer(O.READ_FRAMEBUFFER,null),gt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(G!==0||M.isRenderTargetTexture||It.has(M)){let Yt=It.get(M),Ae=It.get(D);gt.bindFramebuffer(O.READ_FRAMEBUFFER,R),gt.bindFramebuffer(O.DRAW_FRAMEBUFFER,z);for(let ci=0;ci<vt;ci++)Yi?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Yt.__webglTexture,G,Vt+ci):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Yt.__webglTexture,G),un?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ae.__webglTexture,pt,fe+ci):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ae.__webglTexture,pt),G!==0?O.blitFramebuffer(wt,Ft,wt+St,Ft+ut,bt,Wt,bt+St,Wt+ut,O.COLOR_BUFFER_BIT,O.NEAREST):un?O.copyTexSubImage3D(Et,pt,bt,Wt,fe+ci,wt,Ft,St,ut):O.copyTexSubImage2D(Et,pt,bt,Wt,wt,Ft,St,ut);gt.bindFramebuffer(O.READ_FRAMEBUFFER,null),gt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else un?M.isDataTexture||M.isData3DTexture?O.texSubImage3D(Et,pt,bt,Wt,fe,St,ut,vt,se,Le,re.data):D.isCompressedArrayTexture?O.compressedTexSubImage3D(Et,pt,bt,Wt,fe,St,ut,vt,se,re.data):O.texSubImage3D(Et,pt,bt,Wt,fe,St,ut,vt,se,Le,re):M.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,pt,bt,Wt,St,ut,se,Le,re.data):M.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,pt,bt,Wt,re.width,re.height,se,re.data):O.texSubImage2D(O.TEXTURE_2D,pt,bt,Wt,St,ut,se,Le,re);gt.pixelStorei(O.UNPACK_ROW_LENGTH,ze),gt.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Jt),gt.pixelStorei(O.UNPACK_SKIP_PIXELS,hn),gt.pixelStorei(O.UNPACK_SKIP_ROWS,De),gt.pixelStorei(O.UNPACK_SKIP_IMAGES,Er),pt===0&&D.generateMipmaps===!0&&D.mipmapsAutoUpdate===!0&&O.generateMipmap(Et),gt.unbindTexture()},this.initRenderTarget=function(M){It.get(M).__webglFramebuffer===void 0&&Nt.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Nt.setTextureCube(M,0):M.isData3DTexture?Nt.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Nt.setTexture2DArray(M,0):Nt.setTexture2D(M,0),gt.unbindTexture()},this.resetState=function(){V=0,X=0,nt=null,gt.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Xt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Xt._getUnpackColorSpace()}};var je=[{id:1,name:"\u6821\u51C6\u573A",subtitle:"\u719F\u6089\u503E\u659C\u624B\u611F",cols:7,rows:7,seed:13371,loop:.2,holes:0,hazards:0,gems:3,checkpoints:1,boosts:0,ice:0,tiltMax:.26,gravity:25,timeLimit:0,par:25,parHits:6,tip:"\u7528\u65B9\u5411\u952E / WASD \u6216\u6309\u4F4F\u9F20\u6807\u5DE6\u952E\u62D6\u52A8\u6765\u503E\u659C\u8FF7\u5BAB\uFF0C\u628A\u5F39\u73E0\u9001\u8FDB\u91D1\u8272\u5149\u67F1\u6807\u8BB0\u7684\u7EC8\u70B9\u3002\u8DEF\u4E0A\u7684\u9752\u8272\u68C0\u67E5\u70B9\u6FC0\u6D3B\u540E\uFF0C\u5931\u8D25\u53EF\u5C31\u5730\u590D\u6D3B\u3002"},{id:2,name:"\u88C2\u9699\u56DE\u5ECA",subtitle:"\u7A7A\u6D1E \xB7 \u52A0\u901F\u5E26 \xB7 \u5012\u8BA1\u65F6",cols:10,rows:10,seed:24680,loop:.13,holes:4,hazards:0,gems:5,checkpoints:2,boosts:3,ice:0,tiltMax:.31,gravity:29,timeLimit:150,par:55,parHits:12,tip:"\u9ED1\u8272\u7A7A\u6D1E\u4F1A\u8BA9\u5F39\u73E0\u5760\u843D\uFF0C\u91D1\u8272\u5B9D\u77F3\u53EF\u52A0\u5206\u3002\u7ED5\u8DEF\u4E0A\u6A59\u8272\u7BAD\u5934\u52A0\u901F\u5E26\u4F1A\u88AB\u63A8\u7740\u51B2\u4E00\u6BB5\uFF0C\u5012\u8BA1\u65F6\u5F00\u59CB\u751F\u6548\u3002"},{id:3,name:"\u7194\u6838\u7EC8\u5C40",subtitle:"\u7194\u5CA9 \xB7 \u51B0\u9762 \xB7 \u52A0\u901F\u5E26",cols:13,rows:13,seed:90210,loop:.08,holes:7,hazards:4,gems:7,checkpoints:2,boosts:3,ice:4,tiltMax:.36,gravity:33,timeLimit:180,par:75,parHits:20,tip:"\u7EA2\u8272\u7194\u5CA9\u89E6\u78B0\u5373\u5931\u8D25\uFF1B\u6D45\u84DD\u51B0\u9762\u51E0\u4E4E\u6CA1\u6709\u6469\u64E6\uFF0C\u60EF\u6027\u4F1A\u88AB\u653E\u5927\u3002\u6536\u7740\u70B9\u503E\u89D2\uFF0C\u63D0\u524D\u51CF\u901F\u3002"}];function y_(n){let t=n>>>0;return function(){t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Ku=(n,t,e)=>t*e+n;function M_(n,t,e,i,s){let r=t*e;n.fill(15);let a=new Uint8Array(r),o=[0];for(a[0]=1;o.length;){let l=o[o.length-1],c=l%t,h=l/t|0,f=[];if(h>0&&!a[l-t]&&f.push([1,4,l-t]),c<t-1&&!a[l+1]&&f.push([2,8,l+1]),h<e-1&&!a[l+t]&&f.push([4,1,l+t]),c>0&&!a[l-1]&&f.push([8,2,l-1]),!f.length){o.pop();continue}let[u,d,g]=f[i()*f.length|0];n[l]&=~u,n[g]&=~d,a[g]=1,o.push(g)}for(let l=0;l<e;l++)for(let c=0;c<t;c++){let h=Ku(c,l,t);c<t-1&&n[h]&2&&i()<s&&(n[h]&=-3,n[h+1]&=-9),l<e-1&&n[h]&4&&i()<s&&(n[h]&=-5,n[h+t]&=-2)}}function Sc(n,t,e,i){let s=t*e,r=new Uint8Array(s),a=new Int32Array(s).fill(-1),o=[0];r[0]=1;for(let l=0;l<o.length;l++){let c=o[l],h=c%t,f=c/t|0,u=n[c],d=(g,x)=>{u&g||i.has(x)||r[x]||(r[x]=1,a[x]=c,o.push(x))};f>0&&d(1,c-t),h<t-1&&d(2,c+1),f<e-1&&d(4,c+t),h>0&&d(8,c-1)}return{seen:r,parent:a,reachedGoal:r[s-1]===1}}function S_(n,t,e){let i=new Set,s=t*e-1,r=0;for(;s>=0&&r++<t*e+5;)i.add(s),s=n[s];return i}function Ju(n,t){for(let e=n.length-1;e>0;e--){let i=t()*(e+1)|0,s=n[e];n[e]=n[i],n[i]=s}return n}function b_(n,t,e,i,s,r,a,o){let l=i%t,c=i/t|0,h=n[i],f=s-a,u=r-o,d=Math.hypot(f,u)||1,g=[[1,0,-1],[2,1,0],[4,0,1],[8,-1,0]],x={x:1,z:0},p=-1/0;for(let[m,y,E]of g){if(h&m)continue;let S=l+y,A=c+E;if(S<0||S>=t||A<0||A>=e)continue;let T=(y*f+E*u)/d;T>p&&(p=T,x={x:y,z:E})}return x}function Ao(n){let{cols:t,rows:e}=n,i=t*2,s=e*2,r=t*e,a=r-1,o=y_(n.seed),l=new Uint8Array(r);M_(l,t,e,o,n.loop);let c=(P,W)=>({x:-i/2+(P+.5)*2,z:-s/2+(W+.5)*2}),h=[];for(let P=0;P<e;P++)for(let W=0;W<t;W++){let J=l[Ku(W,P,t)],dt=c(W,P);J&1&&h.push({x:dt.x,z:-s/2+P*2,len:2+.34,dir:"h"}),J&8&&h.push({x:-i/2+W*2,z:dt.z,len:2+.34,dir:"v"}),P===e-1&&h.push({x:dt.x,z:s/2,len:2+.34,dir:"h"}),W===t-1&&h.push({x:i/2,z:dt.z,len:2+.34,dir:"v"})}let f=h.map(P=>P.dir==="h"?{minX:P.x-P.len/2,maxX:P.x+P.len/2,minZ:P.z-.34/2,maxZ:P.z+.34/2}:{minX:P.x-.34/2,maxX:P.x+.34/2,minZ:P.z-P.len/2,maxZ:P.z+P.len/2}),u=Sc(l,t,e,new Set),d=S_(u.parent,t,e),g=new Set,x=[];for(let P=0;P<r;P++)u.seen[P]&&P!==0&&P!==a&&x.push(P);let p=P=>{let W=P%t,J=P/t|0;return W+J<2||t-1-W+(e-1-J)<2},m=(P,W)=>{let J=[],dt=Ju(x.filter(Tt=>!d.has(Tt)&&!p(Tt)&&!g.has(Tt)),o);for(let Tt of dt){if(J.length>=P)break;if(g.add(Tt),Sc(l,t,e,g).reachedGoal){let K=Tt%t,mt=Tt/t|0,U=c(K,mt);J.push({x:U.x,z:U.z,r:W,cell:Tt})}else g.delete(Tt)}return J},y=m(n.holes,.62),E=m(n.hazards,.68),A=Ju(x.filter(P=>!g.has(P)),o).slice(0,n.gems).map(P=>{let W=P%t,J=P/t|0,dt=c(W,J);return{x:dt.x,z:dt.z,r:.46,cell:P}}),T=c(0,0),_=c(t-1,e-1),b=Sc(l,t,e,g),L=[];if(b.reachedGoal){let P=a,W=0;for(;P>=0&&W++<r+5;)L.push(P),P=b.parent[P];L.reverse()}let C=[],N=new Set,B=n.checkpoints||0;if(B>0&&L.length>4)for(let P=1;P<=B;P++){let W=Math.round((L.length-1)*P/(B+1));for(W=Math.max(1,Math.min(L.length-2,W));W<L.length-2&&N.has(L[W]);)W+=1;let J=L[W];if(N.has(J)||J===0||J===a)continue;N.add(J);let dt=c(J%t,J/t|0);C.push({x:dt.x,z:dt.z,r:.54,cell:J,active:!1,order:C.length})}let q=new Set([...g,...N,...A.map(P=>P.cell)]),R=new Set(L),z=[];for(let P=1;P<r-1;P++){if(!b.seen[P]||R.has(P)||q.has(P))continue;let W=P%t,J=P/t|0,dt=1/0;for(let Tt of L)dt=Math.min(dt,Math.abs(Tt%t-W)+Math.abs((Tt/t|0)-J));z.push({cell:P,md:dt})}z.sort((P,W)=>P.md-W.md||P.cell-W.cell);let V=P=>{let W=[];for(let J of z){if(W.length>=P)break;q.has(J.cell)||(q.add(J.cell),W.push(J.cell))}return W},X=V(n.boosts||0).map(P=>{let W=c(P%t,P/t|0),J=b_(l,t,e,P,_.x,_.z,W.x,W.z);return{x:W.x,z:W.z,r:.7,cell:P,dirX:J.x,dirZ:J.z}}),nt=V(n.ice||0).map(P=>{let W=c(P%t,P/t|0);return{x:W.x,z:W.z,r:.86,cell:P}});return{cfg:n,cells:l,cols:t,rows:e,width:i,depth:s,segments:h,walls:f,start:T,goal:_,holes:y,hazards:E,gems:A,safePath:L,checkpoints:C,boosts:X,iceZones:nt,solvable:b.reachedGoal,cellCenter:c}}function Io(n,t,e,i=!0){let s=document.createElement("canvas");s.width=n,s.height=t,e(s.getContext("2d"),n,t);let r=new Vs(s);return i&&(r.colorSpace=Fe),r.anisotropy=8,r}function Qu(n){let t=Io(512,256,(s,r,a)=>{let o=s.createLinearGradient(0,0,0,a);o.addColorStop(0,"#dce9ff"),o.addColorStop(.42,"#8fa9c8"),o.addColorStop(.52,"#43566b"),o.addColorStop(1,"#101821"),s.fillStyle=o,s.fillRect(0,0,r,a);let l=s.createRadialGradient(150,58,4,150,58,96);l.addColorStop(0,"rgba(255,255,255,0.95)"),l.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=l,s.fillRect(0,0,r,a),s.fillStyle="rgba(255,255,255,0.30)",s.beginPath(),s.ellipse(390,44,62,22,0,0,Math.PI*2),s.fill(),s.fillStyle="rgba(120,200,255,0.18)",s.fillRect(0,a*.62,r,8)});t.mapping=ls;let e=new ds(n);e.compileEquirectangularShader();let i=e.fromEquirectangular(t);return t.dispose(),e.dispose(),i}function E_(){return Io(256,256,(n,t,e)=>{n.fillStyle="#28394b",n.fillRect(0,0,t,e),n.strokeStyle="rgba(150,190,225,0.20)",n.lineWidth=3,n.strokeRect(2,2,t-4,e-4),n.strokeStyle="rgba(150,190,225,0.085)",n.lineWidth=1;for(let i=1;i<4;i++){let s=t/4*i;n.beginPath(),n.moveTo(s,0),n.lineTo(s,e),n.stroke(),n.beginPath(),n.moveTo(0,s),n.lineTo(t,s),n.stroke()}for(let i=0;i<900;i++){let s=Math.random()*.05;n.fillStyle=`rgba(255,255,255,${s})`,n.fillRect(Math.random()*t,Math.random()*e,1.5,1.5)}})}function T_(){return Io(512,256,(n,t,e)=>{n.fillStyle="#e9f3ff",n.fillRect(0,0,t,e);let i=[.04,.26,.51,.76];for(let s of i)n.fillStyle="rgba(22,92,186,0.95)",n.fillRect(s*t,0,t*.085,e),n.fillStyle="rgba(255,178,48,0.95)",n.fillRect(s*t+t*.092,0,t*.028,e);n.strokeStyle="rgba(60,90,130,0.30)",n.lineWidth=3;for(let s of[e*.25,e*.5,e*.75])n.beginPath(),n.moveTo(0,s),n.lineTo(t,s),n.stroke();n.fillStyle="rgba(255,255,255,0.55)";for(let[s,r]of[[.14,.38],[.64,.62]])n.beginPath(),n.arc(s*t,r*e,16,0,Math.PI*2),n.fill()})}function w_(){return Io(128,128,(n,t,e)=>{n.fillStyle="#3a1113",n.fillRect(0,0,t,e),n.strokeStyle="#ff5347",n.lineWidth=14;for(let i=-e;i<t+e;i+=32)n.beginPath(),n.moveTo(i,0),n.lineTo(i+e,e),n.stroke()})}function A_(){let n=new jn;n.moveTo(0,.65),n.lineTo(.42,-.075),n.lineTo(.16,-.075),n.lineTo(.16,-.65),n.lineTo(-.16,-.65),n.lineTo(-.16,-.075),n.lineTo(-.42,-.075),n.closePath();let t=new tr(n);return t.rotateX(-Math.PI/2),t}var Co=class{constructor(t){this.canvas=t,this.renderer=new Eo({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),this.renderer.outputColorSpace=Fe,this.renderer.toneMapping=hr,this.renderer.toneMappingExposure=1.15,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Na,this.scene=new Us,this.scene.background=new Bt(725531),this.scene.fog=new Ns(725531,55,165),this.envRT=Qu(this.renderer),this.scene.environment=this.envRT.texture,this.camera=new Oe(45,1,.1,400),this.cam={yaw:0,pitch:.98,zoom:1,tYaw:0,tPitch:.98,tZoom:1},this.span=20,this.time=0,this.quality="high",this.pixelRatioCap=1.75,this.tiltRoot=new Si,this.board=new Si,this.tiltRoot.add(this.board),this.scene.add(this.tiltRoot),this.buildLights(),this.buildMaterials(),this.arrowGeometry=A_(),this.ball=null,this.ballShadow=null,this.gemMeshes=[],this.checkpointMeshes=[],this.boostMeshes=[],this.iceMeshes=[],this.goalParticles=null,this.particleVel=[],this.particleLife=0,this.goalRing=null,this.goalLight=null,this.goalBeam=null,this.goalBeacon=null,this.level=null,this.spinQuat=new Ze,this.spinVec=new F,this.resize()}buildLights(){this.scene.add(new or(9414852,.55)),this.scene.add(new ir(12375807,1318956,.75)),this.sun=new ns(16777215,2.35),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(1024,1024),this.sun.shadow.bias=-45e-5,this.sun.shadow.normalBias=.02,this.scene.add(this.sun),this.scene.add(this.sun.target);let t=new ns(7317759,.55);t.position.set(-16,12,-14),this.scene.add(t)}buildMaterials(){let t=E_();t.wrapS=gn,t.wrapT=gn,this.floorTex=t,this.mat={floor:new Ge({color:16777215,map:t,roughness:.86,metalness:.08}),base:new Ge({color:1319471,roughness:.62,metalness:.35}),rim:new Ge({color:3043230,emissive:1195878,emissiveIntensity:.9,roughness:.4,metalness:.6}),wall:new Ge({color:5011356,roughness:.42,metalness:.48,envMapIntensity:1.1}),cap:new Ge({color:7772600,emissive:1456467,emissiveIntensity:.22,roughness:.38,metalness:.5}),ball:new Ge({color:16777215,map:T_(),roughness:.14,metalness:.62,envMapIntensity:1.6}),ballShell:new xe({color:10478847,side:Ie}),marker:new xe({color:8381439,transparent:!0,opacity:.78,side:me,depthWrite:!1}),shadow:new xe({color:0,transparent:!0,opacity:.38,depthWrite:!1}),hole:new xe({color:66826}),holeRing:new Ge({color:2373446,roughness:.7,metalness:.4}),hazard:new Ge({map:w_(),emissive:16722456,emissiveIntensity:.55,roughness:.55}),hazardRing:new Ge({color:16738890,emissive:16723992,emissiveIntensity:1.1,roughness:.4}),goal:new Ge({color:11893270,emissive:16758062,emissiveIntensity:1.5,roughness:.3,metalness:.35}),goalRing:new xe({color:16770723,transparent:!0,opacity:.9,side:me,depthWrite:!1,toneMapped:!1}),goalBeam:new xe({color:16764764,transparent:!0,opacity:.26,depthWrite:!1,toneMapped:!1}),goalBeacon:new xe({color:16771501,transparent:!0,opacity:.95,depthWrite:!1,toneMapped:!1}),start:new xe({color:4892927,transparent:!0,opacity:.85,side:me,depthWrite:!1}),gem:new Ge({color:16763210,emissive:16751640,emissiveIntensity:.95,roughness:.22,metalness:.75,flatShading:!0}),cpIdle:new xe({color:7328995,transparent:!0,opacity:.92,side:me,depthWrite:!1,toneMapped:!1}),cpActive:new xe({color:4849632,transparent:!0,opacity:.98,side:me,depthWrite:!1,toneMapped:!1}),boostBase:new xe({color:12872216,transparent:!0,opacity:.62,side:me,depthWrite:!1,toneMapped:!1}),boost:new xe({color:16757575,transparent:!0,opacity:.98,side:me,depthWrite:!1,toneMapped:!1}),ice:new xe({color:4175103,transparent:!0,opacity:.5,side:me,depthWrite:!1,toneMapped:!1}),iceEdge:new xe({color:10414335,transparent:!0,opacity:.95,side:me,depthWrite:!1,toneMapped:!1}),particle:new Jn({color:16768140,size:.17,transparent:!0,opacity:.95,depthWrite:!1,blending:cr})}}clearBoard(){for(let t of[...this.board.children])this.board.remove(t),t.geometry&&t.geometry!==this.arrowGeometry&&t.geometry.dispose();this.gemMeshes=[],this.checkpointMeshes=[],this.boostMeshes=[],this.iceMeshes=[],this.goalParticles=null,this.particleVel=[],this.particleLife=0,this.goalRing=null,this.goalLight=null,this.goalBeam=null,this.goalBeacon=null,this.ball=null,this.ballShell=null,this.ballMarker=null,this.ballShadow=null}add(t,e=0,i=0,s=0){return t.position.set(e,i,s),this.board.add(t),t}flat(t){return t.rotation.x=-Math.PI/2,t}buildLevel(t){this.clearBoard(),this.level=t;let{width:e,depth:i,cols:s,rows:r}=t;this.span=Math.max(e,i),this.floorTex.repeat.set(s,r),this.floorTex.needsUpdate=!0;let a=this.span*.82;this.sun.position.set(this.span*.48,this.span*.95,this.span*.38),this.sun.target.position.set(0,0,0),this.sun.shadow.camera.left=-a,this.sun.shadow.camera.right=a,this.sun.shadow.camera.top=a,this.sun.shadow.camera.bottom=-a,this.sun.shadow.camera.near=1,this.sun.shadow.camera.far=this.span*3+40,this.sun.shadow.camera.updateProjectionMatrix();let o=new qt(new Ti(e+.9,.55,i+.9),this.mat.base);o.position.y=-.285,o.receiveShadow=!0,o.castShadow=!0,this.board.add(o);let l=e+.9,c=i+.9,h=[[l,.1,.14,0,-i/2-.38],[l,.1,.14,0,i/2+.38],[.14,.1,c,-e/2-.38,0],[.14,.1,c,e/2+.38,0]];for(let[R,z,V,X,nt]of h){let P=new qt(new Ti(R,z,V),this.mat.rim);P.position.set(X,.015,nt),this.board.add(P)}let f=this.flat(new qt(new xn(e,i),this.mat.floor));f.position.y=.002,f.receiveShadow=!0,this.board.add(f);let u=t.segments,d=new Ti(1,1,1),g=new Zn(d,this.mat.wall,u.length),x=new Zn(d.clone(),this.mat.cap,u.length);g.castShadow=!0,g.receiveShadow=!0,x.castShadow=!1;let p=new Kt,m=new Ze,y=new F,E=new F;for(let R=0;R<u.length;R++){let z=u[R],V=z.dir==="h";y.set(z.x,1.15/2,z.z),E.set(V?z.len:.34,1.15,V?.34:z.len),p.compose(y,m,E),g.setMatrixAt(R,p),y.set(z.x,1.15+.03,z.z),E.set(V?z.len:.34+.02,.06,V?.34+.02:z.len),p.compose(y,m,E),x.setMatrixAt(R,p)}g.instanceMatrix.needsUpdate=!0,x.instanceMatrix.needsUpdate=!0,this.board.add(g),this.board.add(x);let S=this.flat(new qt(new pi(.62,.74,40),this.mat.start));this.add(S,t.start.x,.012,t.start.z);for(let R of t.holes){let z=this.flat(new qt(new wi(R.r,40),this.mat.hole));this.add(z,R.x,.014,R.z);let V=this.flat(new qt(new pi(R.r,R.r+.11,40),this.mat.holeRing));this.add(V,R.x,.016,R.z)}for(let R of t.hazards){let z=this.flat(new qt(new wi(R.r,40),this.mat.hazard));this.add(z,R.x,.015,R.z);let V=this.flat(new qt(new pi(R.r,R.r+.1,40),this.mat.hazardRing));this.add(V,R.x,.017,R.z)}for(let R of t.iceZones){let z=this.flat(new qt(new wi(R.r,40),this.mat.ice));this.add(z,R.x,.009,R.z);let V=this.flat(new qt(new pi(R.r-.09,R.r,40),this.mat.iceEdge));this.add(V,R.x,.011,R.z),this.iceMeshes.push(z)}for(let R of t.boosts){let z=this.flat(new qt(new wi(R.r,32),this.mat.boostBase));this.add(z,R.x,.01,R.z);let V=new qt(this.arrowGeometry,this.mat.boost);V.rotation.y=Math.atan2(-R.dirX,-R.dirZ),this.add(V,R.x,.014,R.z),this.boostMeshes.push(V)}for(let R of t.checkpoints){let z=this.flat(new qt(new pi(R.r*.62,R.r,40),this.mat.cpIdle));this.add(z,R.x,.013,R.z);let V=new qt(new Kn(.055,.055,.85,10),this.mat.cpActive);V.position.set(R.x,.44,R.z),V.visible=!1,this.board.add(V),this.checkpointMeshes.push({ring:z,pillar:V})}let A=this.flat(new qt(new wi(.76,48),this.mat.goal));this.add(A,t.goal.x,.018,t.goal.z);let T=this.flat(new qt(new pi(.76+.1,.76+.24,48),this.mat.goalRing));this.add(T,t.goal.x,.022,t.goal.z),this.goalRing=T;let _=2.4,b=new qt(new Kn(.11,.34,_,16,1,!0),this.mat.goalBeam);b.position.set(t.goal.x,_/2+.04,t.goal.z),this.board.add(b),this.goalBeam=b;let L=new qt(new es(.24,0),this.mat.goalBeacon);L.position.set(t.goal.x,_+.2,t.goal.z),this.board.add(L),this.goalBeacon=L,this.goalLight=new rr(16761948,2.4,8,2),this.goalLight.position.set(t.goal.x,1.7,t.goal.z),this.board.add(this.goalLight);for(let R of t.gems){let z=new qt(new es(.3,0),this.mat.gem);z.castShadow=!0,z.position.set(R.x,.45,R.z),this.board.add(z),this.gemMeshes.push(z)}let C=new qt(new is(.42,40,28),this.mat.ball);C.castShadow=!0,C.receiveShadow=!0,C.position.set(t.start.x,.42,t.start.z),this.board.add(C),this.ball=C;let N=new qt(new is(.42*1.15,24,16),this.mat.ballShell);N.position.set(t.start.x,.42,t.start.z),this.board.add(N),this.ballShell=N,this.mat.marker.opacity=.78;let B=this.flat(new qt(new pi(.42*.8,.42*.98,32),this.mat.marker));this.add(B,t.start.x,.012,t.start.z),this.ballMarker=B,this.mat.shadow.opacity=.38;let q=this.flat(new qt(new wi(.42*1.12,28),this.mat.shadow));this.add(q,t.start.x,.01,t.start.z),this.ballShadow=q,this.cam.tYaw=0,this.cam.tPitch=.98,this.cam.tZoom=1}setGemsVisible(t){for(let e=0;e<this.gemMeshes.length;e++)this.gemMeshes[e].visible=!t.gems[e].taken}setCheckpointsActive(t){for(let e=0;e<this.checkpointMeshes.length;e++){let i=t.checkpoints[e];if(!i)continue;let s=this.checkpointMeshes[e];s.ring.material=i.active?this.mat.cpActive:this.mat.cpIdle,s.pillar.visible=i.active}}burstGoal(){if(!this.level)return;this.goalParticles&&(this.board.remove(this.goalParticles),this.goalParticles.geometry.dispose());let t=42,e=new Float32Array(t*3),i=[],s=this.level.goal.x,r=this.level.goal.z;for(let o=0;o<t;o++){let l=o/t*Math.PI*2+Math.random()*.5,c=1.3+Math.random()*2.8;e[o*3]=s+Math.cos(l)*.12,e[o*3+1]=.22,e[o*3+2]=r+Math.sin(l)*.12,i.push({x:Math.cos(l)*c,y:2.3+Math.random()*2.6,z:Math.sin(l)*c})}let a=new Ce;a.setAttribute("position",new Ye(e,3)),this.mat.particle.opacity=.95,this.goalParticles=new Hs(a,this.mat.particle),this.goalParticles.frustumCulled=!1,this.board.add(this.goalParticles),this.particleVel=i,this.particleLife=1.3}onContextRestored(){try{this.floorTex&&(this.floorTex.needsUpdate=!0);for(let t of Object.values(this.mat))t&&t.isMaterial&&(t.needsUpdate=!0);this.envRT&&this.envRT.dispose(),this.envRT=Qu(this.renderer),this.scene.environment=this.envRT.texture}catch{this.floorTex&&(this.floorTex.needsUpdate=!0)}}setQuality(t){if(!["high","medium","low"].includes(t))return;this.quality=t;let e=t==="high"?1.75:t==="medium"?1.25:1;this.pixelRatioCap=e,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,e));let i=t!=="low";if(this.renderer.shadowMap.enabled!==i){this.renderer.shadowMap.enabled=i,this.sun.castShadow=i;for(let r of Object.values(this.mat))r&&r.isMaterial&&(r.needsUpdate=!0)}let s=t==="high"?1024:512;this.sun.shadow.mapSize.x!==s&&(this.sun.shadow.mapSize.set(s,s),this.sun.shadow.map&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null),this.sun.shadow.camera.updateProjectionMatrix()),this.resize()}stats(){let t=this.renderer.info.memory;return{children:this.board.children.length,geometries:t.geometries,textures:t.textures,programs:this.renderer.info.programs?this.renderer.info.programs.length:0,quality:this.quality,pixelRatioCap:this.pixelRatioCap,shadowSize:this.sun.shadow.mapSize.x,shadows:this.renderer.shadowMap.enabled}}orbit(t,e){this.cam.tYaw=Math.max(-1.05,Math.min(1.05,this.cam.tYaw+t*.005)),this.cam.tPitch=Math.max(.42,Math.min(1.38,this.cam.tPitch+e*.004))}zoomBy(t){this.cam.tZoom=Math.max(.65,Math.min(1.75,this.cam.tZoom+t))}resize(){let t=Math.max(1,this.canvas.clientWidth),e=Math.max(1,this.canvas.clientHeight);this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}updateCamera(t){let e=this.cam,i=1-Math.exp(-9*t);e.yaw+=(e.tYaw-e.yaw)*i,e.pitch+=(e.tPitch-e.pitch)*i,e.zoom+=(e.tZoom-e.zoom)*i;let s=Math.max(1,1.28/this.camera.aspect),r=1+Math.max(0,this.span-14)*.012,a=(this.span*1.15+5.5)*e.zoom*s*r,o=Math.cos(e.pitch);this.camera.position.set(Math.sin(e.yaw)*o*a,Math.sin(e.pitch)*a,Math.cos(e.yaw)*o*a),this.camera.lookAt(0,0,0)}update(t,e,i={}){this.time+=t;let s=i.fall||0;if(this.tiltRoot.rotation.z=e.tiltZ,this.board.rotation.x=e.tiltX,this.ball){this.ball.position.set(e.x,.42-s*2.8,e.z);let a=Math.max(.05,1-s*.7);this.ball.scale.setScalar(a),e.spinAngle>0&&s===0&&(this.spinVec.set(e.spinAxis.x,0,e.spinAxis.z).normalize(),this.spinQuat.setFromAxisAngle(this.spinVec,e.spinAngle),this.ball.quaternion.premultiply(this.spinQuat))}let r=Math.max(.05,1-s*.7);this.ballShell&&(this.ballShell.position.set(e.x,.42-s*2.8,e.z),this.ballShell.scale.setScalar(r),this.ballShell.visible=s<.95),this.ballMarker&&(this.ballMarker.position.set(e.x,.012,e.z),this.ballMarker.material.opacity=.78*(1-s),this.ballMarker.visible=s<.95),this.ballShadow&&(this.ballShadow.position.set(e.x,.01,e.z),this.ballShadow.material.opacity=.38*(1-s),this.ballShadow.visible=s<.95);for(let a=0;a<this.gemMeshes.length;a++){let o=this.gemMeshes[a];o.rotation.y+=t*1.8,o.rotation.x=Math.sin(this.time*1.2+a)*.25,o.position.y=.45+Math.sin(this.time*2.2+a*1.3)*.09}if(this.goalRing){let a=1+Math.sin(this.time*3.4)*.09;this.goalRing.scale.set(a,a,a),this.goalRing.material.opacity=.55+Math.sin(this.time*3.4)*.3}this.goalLight&&(this.goalLight.intensity=2.1+Math.sin(this.time*3.4)*.6),this.goalBeam&&(this.goalBeam.material.opacity=.22+Math.sin(this.time*2.6)*.07),this.goalBeacon&&(this.goalBeacon.rotation.y+=t*1.6,this.goalBeacon.position.y=2.6+Math.sin(this.time*2.6)*.09),this.mat.hazard&&(this.mat.hazard.emissiveIntensity=.45+Math.sin(this.time*4.5)*.22);for(let a of this.boostMeshes)a.scale.setScalar(.88+Math.sin(this.time*4.2+a.position.x*.7)*.16);for(let a=0;a<this.checkpointMeshes.length;a++)this.checkpointMeshes[a].ring.scale.setScalar(1+Math.sin(this.time*3+a)*.08);if(this.goalParticles&&this.particleLife>0){this.particleLife-=t;let a=this.goalParticles.geometry.getAttribute("position"),o=a.array;for(let l=0;l<this.particleVel.length;l++){let c=this.particleVel[l];o[l*3]+=c.x*t,o[l*3+1]+=c.y*t,o[l*3+2]+=c.z*t,c.y-=5.2*t}a.needsUpdate=!0,this.mat.particle.opacity=Math.max(0,this.particleLife/1.3*.95),this.particleLife<=0&&(this.goalParticles.visible=!1)}this.updateCamera(t),this.renderer.render(this.scene,this.camera)}};var Qt=n=>document.getElementById(n),li=n=>{let t=Math.max(0,Math.floor(n));return`${String(Math.floor(t/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`},R_=n=>{let t=Math.max(0,Math.floor(Number(n)||0)),e=Math.floor(t/3600),i=Math.floor(t%3600/60);return e>0?`${e}\u5C0F\u65F6${String(i).padStart(2,"0")}\u5206`:`${i}\u5206${String(t%60).padStart(2,"0")}\u79D2`},C_=[["W A S D / \u65B9\u5411\u952E","\u503E\u659C\u8FF7\u5BAB"],["Shift + \u65B9\u5411 / \u62D6\u52A8","\u7CBE\u7EC6\u5FAE\u8C03\u503E\u89D2"],["\u5DE6\u952E / \u53F3\u952E\u62D6\u52A8","\u503E\u659C / \u65CB\u8F6C\u89C6\u89D2"],["\u6EDA\u8F6E","\u7F29\u653E\u89C6\u89D2"],["\u9876\u90E8\u300C\u4F53\u611F\u300D","\u9640\u87BA\u4EEA\u503E\u659C\uFF08\u9700\u6388\u6743\uFF09"],["P / R / M","\u6682\u505C / \u91CD\u5F00 / \u97F3\u6548"],["\u7A7A\u683C / Enter","\u786E\u8BA4 / \u7EE7\u7EED"]];function td(n,t,e){let s=Math.min((t-28)/n.width,(e-28)/n.depth);return{scale:s,mx:r=>t/2+r*s,my:r=>e/2+r*s}}function I_(n){let t=Math.max(n.cols,n.rows);return Math.max(220,Math.min(320,220+(t-7)*22))}var Po=class{constructor(){this.el={app:Qt("app"),levelName:Qt("levelName"),statLevel:Qt("statLevel"),statTime:Qt("statTime"),statTimeLabel:Qt("statTimeLabel"),statScore:Qt("statScore"),statReward:Qt("statReward"),statHits:Qt("statHits"),statGems:Qt("statGems"),statCheckpoints:Qt("statCheckpoints"),statLives:Qt("statLives"),tips:Qt("tips"),statusPill:Qt("statusPill"),tiltHint:Qt("tiltHint"),overlay:Qt("overlay"),modal:Qt("modal"),toast:Qt("toast"),btnPause:Qt("btnPause"),btnRestart:Qt("btnRestart"),btnMute:Qt("btnMute"),btnTilt:Qt("btnTilt"),btnQuality:Qt("btnQuality"),btnDifficulty:Qt("btnDifficulty"),btnDemo:Qt("btnDemo"),minimap:Qt("minimap"),tilt:Qt("tilt"),sidePanel:Qt("sidePanel"),mapToggle:Qt("mapToggle"),levelFlash:Qt("levelFlash"),joystick:Qt("joystick"),joystickKnob:Qt("joystickKnob")},this.mmCtx=this.el.minimap.getContext("2d"),this.tiltCtx=this.el.tilt.getContext("2d"),this.toastTimer=0,this.shakeTimer=0,this.overlayType="",this.trail=[],this.mmBase=null,this.mmWalls=null,this.mmLevel=null,this.mmSize=0,this.staticDraws=0}setStats(t){if(this.el.levelName.textContent=`\u7B2C ${t.levelIndex+1} \u5173 \xB7 ${t.name} \u2014 ${t.subtitle}`,this.el.statLevel.textContent=`${t.levelIndex+1} / ${t.totalLevels}`,this.el.statScore.textContent=String(t.score),this.el.statReward.textContent=t.rewardText,this.el.statReward.classList.toggle("settled",!!t.rewardSettled),this.lastHits!==void 0&&t.hits>this.lastHits){let e=this.el.statHits;e.classList.remove("bump"),e.offsetWidth,e.classList.add("bump")}if(this.lastHits=t.hits,this.el.statHits.textContent=String(t.hits),this.el.statGems.textContent=`${t.gemsGot} / ${t.gemsTotal}`,this.el.statCheckpoints.textContent=`${t.checkpoints} / ${t.checkpointsTotal}`,this.el.statCheckpoints.style.color=t.checkpoints>0?"#49ffe0":"",this.el.statLives.textContent="\u2665".repeat(t.lives)+"\u2661".repeat(Math.max(0,3-t.lives)),this.el.statLives.style.color=t.lives<=1?"#ff6b6b":"#ffb4a2",this.el.statTimeLabel.textContent=t.timeLimit>0?"\u5269\u4F59":"\u8BA1\u65F6",t.timeLimit>0){let e=t.timeLimit-t.elapsed;this.el.statTime.textContent=li(e),this.el.statTime.classList.toggle("urgent",e<=15)}else this.el.statTime.textContent=li(t.elapsed),this.el.statTime.classList.remove("urgent");this.el.btnDemo&&!this.el.btnDemo.hidden&&(this.el.btnDemo.textContent=t.demo?"\u505C\u6B62\u6F14\u793A":"AI \u6F14\u793A")}setTip(t){this.el.tips.textContent=t}setFineMode(t){this.fineMode!==t&&(this.fineMode=t,this.el.tiltHint.innerHTML=t?"\u7CBE\u7EC6\u6A21\u5F0F \xB7 \u503E\u89D2\u51CF\u534A":"\u65B9\u5411\u952E / WASD<br>\u6216\u6309\u4F4F\u5DE6\u952E\u62D6\u52A8")}setMotionLabel(t){let e={on:"\u4F53\u611F \u5F00",off:"\u4F53\u611F \u5173",unavailable:"\u4F53\u611F\u4E0D\u53EF\u7528"};this.el.btnTilt.textContent=e[t]||"\u4F53\u611F \u5173",this.el.btnTilt.disabled=t==="unavailable"}setStatus(t,e="normal"){this.el.statusPill.textContent=t,this.el.statusPill.dataset.tone=e}setPauseLabel(t){this.el.btnPause.textContent=t?"\u7EE7\u7EED":"\u6682\u505C"}setDemoVisible(t){this.el.btnDemo&&(this.el.btnDemo.hidden=!t,t||(this.el.btnDemo.textContent="AI \u6F14\u793A"))}setMuteLabel(t){this.el.btnMute.textContent=t?"\u97F3\u6548 \u5173":"\u97F3\u6548 \u5F00"}setQualityLabel(t){this.el.btnQuality.textContent=t}setDifficultyLabel(t,e=!1){this.el.btnDifficulty.textContent===t&&this.el.btnDifficulty.disabled===e||(this.el.btnDifficulty.textContent=t,this.el.btnDifficulty.disabled=e)}setJoystick(t,e){if(!this.el.joystickKnob)return;let i=34;this.el.joystickKnob.style.transform=`translate(${t*i}px, ${e*i}px)`,this.el.joystick.classList.toggle("active",Math.abs(t)+Math.abs(e)>.02)}toggleMap(){let t=this.el.sidePanel.classList.toggle("open");return this.el.mapToggle.classList.toggle("active",t),this.el.mapToggle.textContent=t?"\u6536\u8D77\u5730\u56FE":"\u5730\u56FE",t}shake(){let t=this.el.app;t.classList.remove("shake"),t.offsetWidth,t.classList.add("shake"),clearTimeout(this.shakeTimer),this.shakeTimer=setTimeout(()=>t.classList.remove("shake"),230)}flashLevel(){let t=this.el.levelFlash;t.classList.remove("play"),t.offsetWidth,t.classList.add("play")}clearTrail(){this.trail=[]}pushTrail(t,e){let i=this.trail;if(i.length){let s=i[i.length-1];if(Math.hypot(t-s.x,e-s.z)<.16)return}i.push({x:t,z:e}),i.length>320&&i.shift()}toast(t,e="info"){let i=this.el.toast;i.textContent=t,i.dataset.tone=e,i.classList.add("visible"),clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>i.classList.remove("visible"),1400)}setAICoach(t,e="local"){let i=document.getElementById("aiCoach");if(!i||!Array.isArray(t)||!t.length)return;let s=e==="ai"?"\u9B54\u642D AI \u6559\u7EC3\u5EFA\u8BAE":"\u672C\u5730\u6559\u7EC3\u5EFA\u8BAE";i.innerHTML=`<div class="ai-coach-title">${s}</div>`+t.map(r=>`<div class="ai-coach-row">\xB7 ${r}</div>`).join("")}setLiveCoach(t,e="local"){let i=document.getElementById("aiCoachLive");if(!i||!Array.isArray(t)||!t.length)return;let s=e==="ai"?"AI \u6559\u7EC3 \xB7 \u672C\u5C40\u8BCA\u65AD":"\u672C\u5730\u6559\u7EC3 \xB7 \u672C\u5C40\u8BCA\u65AD";i.innerHTML=`<div class="ai-coach-title">${s}</div>`+t.map(r=>`<div class="ai-coach-row">\xB7 ${r}</div>`).join("")}hideOverlay(){this.overlayType="",this.el.overlay.classList.remove("visible")}showOverlay(t,e={}){this.overlayType=t;let i=this.el.modal;i.innerHTML=U_[t](e),i.style.animation="none",i.offsetWidth,i.style.animation="",this.el.overlay.classList.add("visible")}drawTilt(t,e,i,s=!1){let r=this.tiltCtx,a=120,o=a/2,l=46;r.clearRect(0,0,a,a),r.fillStyle="rgba(255,255,255,0.025)",r.strokeStyle="rgba(160,190,220,0.30)",r.lineWidth=1,r.beginPath(),r.arc(o,o,l,0,Math.PI*2),r.fill(),r.stroke(),r.beginPath(),r.arc(o,o,l*.5,0,Math.PI*2),r.stroke(),r.strokeStyle="rgba(160,190,220,0.16)",r.beginPath(),r.moveTo(o-l,o),r.lineTo(o+l,o),r.moveTo(o,o-l),r.lineTo(o,o+l),r.stroke(),s&&(r.setLineDash([3,3]),r.strokeStyle="rgba(255,196,92,0.85)",r.lineWidth=1.2,r.beginPath(),r.arc(o,o,(l-8)*.42,0,Math.PI*2),r.stroke(),r.setLineDash([]));let c=o+-e/i*(l-8),h=o+t/i*(l-8);r.strokeStyle=s?"rgba(255,196,92,0.7)":"rgba(90,200,255,0.65)",r.lineWidth=2,r.beginPath(),r.moveTo(o,o),r.lineTo(c,h),r.stroke(),r.fillStyle=s?"#ffce6a":"#6fd3ff",r.beginPath(),r.arc(c,h,6,0,Math.PI*2),r.fill(),r.fillStyle="rgba(255,255,255,0.55)",r.beginPath(),r.arc(o,o,2.5,0,Math.PI*2),r.fill()}ensureStaticLayer(t){let e=I_(t),i=e;if(this.mmLevel===t&&this.mmSize===e&&this.mmBase&&this.mmWalls)return;(this.el.minimap.width!==e||this.el.minimap.height!==i)&&(this.el.minimap.width=e,this.el.minimap.height=i);let{scale:s,mx:r,my:a}=td(t,e,i),o=document.createElement("canvas");o.width=e,o.height=i;let l=o.getContext("2d"),c=document.createElement("canvas");c.width=e,c.height=i;let h=c.getContext("2d");l.fillStyle="rgba(10,18,28,0.75)",l.fillRect(0,0,e,i),l.fillStyle="rgba(70,105,140,0.18)",l.fillRect(r(-t.width/2),a(-t.depth/2),t.width*s,t.depth*s),l.strokeStyle="rgba(120,160,200,0.10)",l.lineWidth=1;for(let u=0;u<=t.cols;u++){let d=r(-t.width/2+u*2);l.beginPath(),l.moveTo(d,a(-t.depth/2)),l.lineTo(d,a(t.depth/2)),l.stroke()}for(let u=0;u<=t.rows;u++){let d=a(-t.depth/2+u*2);l.beginPath(),l.moveTo(r(-t.width/2),d),l.lineTo(r(t.width/2),d),l.stroke()}for(let u of t.iceZones)l.fillStyle="rgba(98,200,255,0.32)",l.beginPath(),l.arc(r(u.x),a(u.z),u.r*s,0,Math.PI*2),l.fill(),l.strokeStyle="rgba(203,241,255,0.92)",l.lineWidth=1.2,l.stroke();for(let u of t.boosts){let d=r(u.x),g=a(u.z);l.fillStyle="rgba(255,162,58,0.30)",l.beginPath(),l.arc(d,g,u.r*s,0,Math.PI*2),l.fill();let x=d+u.dirX*5.5,p=g+u.dirZ*5.5,m=-u.dirZ*3.4,y=u.dirX*3.4;l.fillStyle="#ffb347",l.beginPath(),l.moveTo(x,p),l.lineTo(d+m,g+y),l.lineTo(d-m,g-y),l.closePath(),l.fill()}let f=e/220;h.strokeStyle="#9dc4e8",h.lineWidth=2.1*f,h.lineCap="round",h.beginPath();for(let u of t.segments)u.dir==="h"?(h.moveTo(r(u.x-u.len/2),a(u.z)),h.lineTo(r(u.x+u.len/2),a(u.z))):(h.moveTo(r(u.x),a(u.z-u.len/2)),h.lineTo(r(u.x),a(u.z+u.len/2)));h.stroke();for(let u of t.holes)h.fillStyle="#02060b",h.beginPath(),h.arc(r(u.x),a(u.z),u.r*s,0,Math.PI*2),h.fill(),h.strokeStyle="rgba(120,150,180,0.55)",h.lineWidth=1,h.stroke();for(let u of t.hazards)h.fillStyle="rgba(230,70,60,0.75)",h.beginPath(),h.arc(r(u.x),a(u.z),u.r*s,0,Math.PI*2),h.fill();h.fillStyle="#4aa8ff",h.beginPath(),h.arc(r(t.start.x),a(t.start.z),4*f,0,Math.PI*2),h.fill(),this.mmBase=o,this.mmWalls=c,this.mmLevel=t,this.mmSize=e,this.staticDraws+=1}drawMinimap(t,e,i){this.ensureStaticLayer(t);let s=this.mmCtx,r=this.el.minimap.width,a=this.el.minimap.height,{scale:o,mx:l,my:c}=td(t,r,a);if(s.clearRect(0,0,r,a),s.drawImage(this.mmBase,0,0),this.trail.length>1){s.strokeStyle="rgba(110,205,255,0.40)",s.lineWidth=2,s.lineJoin="round",s.lineCap="round",s.beginPath();for(let x=0;x<this.trail.length;x++){let p=this.trail[x];x===0?s.moveTo(l(p.x),c(p.z)):s.lineTo(l(p.x),c(p.z))}s.stroke()}s.drawImage(this.mmWalls,0,0);let h=r/220;for(let x of t.gems)x.taken||(s.fillStyle="#ffd166",s.beginPath(),s.arc(l(x.x),c(x.z),3.2*h,0,Math.PI*2),s.fill());for(let x of t.checkpoints)s.strokeStyle=x.active?"#49ffe0":"#6fd4e3",s.lineWidth=(x.active?2.2:1.3)*h,s.beginPath(),s.arc(l(x.x),c(x.z),Math.max(3.4,x.r*o),0,Math.PI*2),s.stroke();let f=l(t.goal.x),u=c(t.goal.z),d=1+Math.sin(i*4)*.12,g=Math.max(5.6,.76*o)*d;s.fillStyle="#ffd45e",s.beginPath(),s.arc(f,u,g*.62,0,Math.PI*2),s.fill(),s.strokeStyle="#ffe6a3",s.lineWidth=2*h,s.beginPath(),s.arc(f,u,g,0,Math.PI*2),s.stroke(),s.beginPath(),s.moveTo(f-g*1.5,u),s.lineTo(f-g*1.08,u),s.moveTo(f+g*1.08,u),s.lineTo(f+g*1.5,u),s.moveTo(f,u-g*1.5),s.lineTo(f,u-g*1.08),s.moveTo(f,u+g*1.08),s.lineTo(f,u+g*1.5),s.stroke(),s.fillStyle="#ffffff",s.beginPath(),s.arc(l(e.x),c(e.z),4.6*h,0,Math.PI*2),s.fill(),s.strokeStyle="rgba(30,60,90,0.9)",s.lineWidth=1.4,s.stroke()}},P_=()=>`<div class="key-table">${C_.map(([n,t])=>`<div class="key-row"><kbd>${n}</kbd><span>${t}</span></div>`).join("")}</div>`;function Sr(n){return`<div class="result-grid">${n.map(([t,e])=>`<div class="result-cell"><span>${t}</span><b>${e}</b></div>`).join("")}</div>`}function L_(n){return`<div class="breakdown">${[["\u57FA\u7840\u5206","1000"],["\u7528\u65F6\u6263\u9664",`-${n.b.timeCost}`],["\u78B0\u649E\u6263\u9664",`-${n.b.hitCost}`],["\u5B9D\u77F3\u5956\u52B1",`+${n.b.gemBonus}`],["\u65F6\u95F4\u5956\u52B1",`+${n.b.timeBonus}`]].map(([e,i])=>`<div><span>${e}</span><b>${i}</b></div>`).join("")}</div>`}var ed=n=>{let t=Math.max(0,Math.min(3,n||0));return`<div class="stars">${"\u2605".repeat(t)}<span class="off">${"\u2605".repeat(3-t)}</span></div>`};function id(n){if(!n)return"";if(!n.previous)return'<div class="record-flag">\u9996\u6B21\u901A\u5173 \xB7 \u6210\u7EE9\u5DF2\u8BB0\u5F55</div>';let t=[];return n.newTime&&t.push("\u6700\u5FEB\u7528\u65F6"),n.newScore&&t.push("\u6700\u9AD8\u5F97\u5206"),n.newStars&&t.push("\u661F\u7EA7\u63D0\u5347"),t.length?`<div class="record-flag">\u65B0\u7EAA\u5F55 \xB7 ${t.join(" / ")}</div>`:""}var D_=n=>(n.levels||[]).map(t=>{let e=t.best?Math.max(0,Math.min(3,Number(t.best.stars)||0)):0,i="\u2605".repeat(e)+'<span class="off">'+"\u2605".repeat(3-e)+"</span>",s=t.best?li(t.best.time):"--:--";return`<div class="review-row"><span>\u7B2C ${t.index+1} \u5173 \xB7 ${t.name}</span><span class="review-stars">${i}</span><b>${s}</b></div>`}).join(""),N_=n=>(n.levels||[]).map(t=>{let e=t.best?Math.max(0,Math.min(3,Number(t.best.stars)||0)):0,i=t.best?`\u6700\u4F73 ${li(t.best.time)} \xB7 ${t.best.score} \u5206`:"\u5C1A\u65E0\u8BB0\u5F55",s="\u2605".repeat(e)+'<span class="off">'+"\u2605".repeat(3-e)+"</span>";return`<button class="level-card" data-action="level" data-level="${t.index}" ${t.unlocked?"":"disabled"}>
    <span class="lc-num">LEVEL 0${t.index+1}</span>
    <span class="lc-name">${t.name}</span>
    <span class="lc-sub">${t.subtitle}</span>
    <span class="stars" style="font-size:13px">${s}</span>
    <span class="lc-best">${i}</span>
    ${t.unlocked?"":'<span class="lc-lock">\u672A\u89E3\u9501</span>'}
  </button>`}).join(""),U_={menu:n=>`
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
      <div><h3>\u64CD\u4F5C</h3>${P_()}</div>
    </div>
    <div class="modal-section-title">\u9009\u62E9\u5173\u5361 \xB7 \u7D2F\u8BA1 ${n.totalStars||0} / ${n.maxStars||9} \u2605 \xB7 \u751F\u6DAF\u901A\u5173 ${n.clearCount||0} \u6B21 \xB7 \u6E38\u73A9 ${R_(n.playTime)}</div>
    <div class="level-picker">${N_(n)}</div>
    ${n.daily?`<button class="daily-btn" data-action="daily">
      <span class="daily-tag">\u6BCF\u65E5\u6311\u6218 \xB7 ${n.daily.date}</span>
      <span class="daily-sub">\u6BCF\u5929\u4E00\u5EA7\u65B0\u8FF7\u5BAB \xB7 \u5168\u7403\u540C\u56FE${n.daily.best?` \xB7 \u4ECA\u65E5\u6700\u4F73 ${li(n.daily.best.time)}`:" \xB7 \u5C1A\u65E0\u8BB0\u5F55"}</span>
    </button>`:""}
    <div class="modal-btns">
      <button class="primary-btn" data-action="start">\u4ECE\u7B2C 1 \u5173\u5F00\u59CB <span>\u21B5</span></button>
      <button class="ghost-btn" data-action="ai-lab">AI \u5B9E\u9A8C\u5BA4</button>
    </div>
    <p class="modal-foot">\u7EAF\u524D\u7AEF\u8FD0\u884C \xB7 AI \u529F\u80FD\u7531\u9B54\u642D\u63D0\u4F9B\uFF08\u79BB\u7EBF\u81EA\u52A8\u964D\u7EA7\uFF09${n.persistent===!1?" \xB7 \u672C\u673A\u5B58\u50A8\u4E0D\u53EF\u7528\uFF0C\u6210\u7EE9\u4EC5\u672C\u6B21\u6709\u6548":""}</p>`,ailab:n=>`
    <div class="modal-tag">AI LAB \xB7 MODELSCOPE</div>
    <h1>AI \u5B9E\u9A8C\u5BA4</h1>
    <p class="modal-lead">\u7528\u4E00\u53E5\u8BDD\u63CF\u8FF0\u4F60\u60F3\u8981\u7684\u8FF7\u5BAB\uFF0CAI \u4F1A\u751F\u6210\u5E76\u6821\u9A8C\u53EF\u89E3\u6027\uFF1B\u6559\u7EC3\u4F1A\u6839\u636E\u4F60\u7684\u8868\u73B0\u7ED9\u51FA\u5EFA\u8BAE\u3002</p>
    <div class="ai-panel">
      <label class="ai-label" for="aiPrompt">\u5173\u5361\u8BBE\u8BA1\u5E08 \xB7 \u63CF\u8FF0\u96BE\u5EA6\u4E0E\u673A\u5236</label>
      <textarea class="ai-input" id="aiPrompt" rows="3" placeholder="\u4F8B\u5982\uFF1A\u96BE\u4E00\u70B9\uFF0C\u6709\u7194\u5CA9\u548C\u51B0\u9762\uFF0C\u591A\u52A0\u52A0\u901F\u5E26\u548C\u68C0\u67E5\u70B9">${n.prompt||""}</textarea>
      <button class="primary-btn ai-run" data-action="ai-design" id="aiDesignBtn">\u751F\u6210\u5E76\u5F00\u73A9</button>
      <div class="ai-status" id="aiStatus">${n.status||"Ctrl / \u2318 + Enter \u53EF\u76F4\u63A5\u751F\u6210\uFF1B\u79BB\u7EBF\u65F6\u4F7F\u7528\u672C\u5730\u89C4\u5219\u5F15\u64CE\uFF0C\u540C\u6837\u53EF\u73A9\u3002"}</div>
      <label class="ai-label" for="aiTheme">\u53D9\u4E8B\u4E3B\u9898 \xB7 \u7ED9\u5173\u5361\u8D77\u4E2A\u540D\u5B57</label>
      <input class="ai-input" id="aiTheme" type="text" placeholder="\u4F8B\u5982\uFF1A\u51B0\u5929\u96EA\u5730 / \u7194\u5CA9\u6DF1\u6E0A" value="${n.theme||""}">
      <button class="ghost-btn ai-run" data-action="ai-narrative">\u751F\u6210\u4E3B\u9898</button>
      <div class="ai-story" id="aiStory">${n.story?`${n.story.name} \xB7 ${n.story.subtitle}<br>${n.story.tip}`:""}</div>
      <button class="ghost-btn ai-run" data-action="ai-report">\u751F\u6210\u8BAD\u7EC3\u62A5\u544A</button>
      <textarea class="ai-report" id="aiReport" rows="6" readonly>${n.report||""}</textarea>
    </div>
    <div class="modal-btns"><button class="ghost-btn" data-action="menu">\u8FD4\u56DE\u4E3B\u83DC\u5355</button></div>`,paused:n=>`
    <div class="modal-tag">PAUSED</div>
    <h1>\u5DF2\u6682\u505C</h1>
    <p class="modal-lead">\u7B2C ${n.levelIndex+1} \u5173 \xB7 ${n.name}\u3000|\u3000\u7528\u65F6 ${li(n.elapsed)}\u3000|\u3000\u5F53\u524D\u603B\u5206 ${n.score}</p>
    ${Sr([["\u603B\u5206",n.score],["\u672C\u5173\u9884\u4F30",`+${n.reward}`],["\u78B0\u649E",n.hits],["\u5B9D\u77F3",`${n.gemsGot} / ${n.gemsTotal}`],["\u5269\u4F59\u751F\u547D",n.lives]])}
    <div class="modal-btns">
      <button class="primary-btn" data-action="resume">\u7EE7\u7EED\u6E38\u620F <span>P</span></button>
      <button class="ghost-btn" data-action="restart">\u91CD\u5F00\u672C\u5173 <span>R</span></button>
    </div>`,levelclear:n=>`
    <div class="modal-tag success">LEVEL CLEAR</div>
    <h1>${n.daily?"\u6BCF\u65E5\u6311\u6218\u5B8C\u6210":`\u7B2C ${n.levelIndex+1} \u5173\u901A\u8FC7`}</h1>
    <p class="modal-lead">${n.name}\u3000\xB7\u3000\u7528\u65F6 ${li(n.elapsed)}${n.daily?`\u3000\xB7\u3000${n.daily} \u5168\u7403\u540C\u56FE \xB7 \u53EA\u4E0E\u4ECA\u5929\u7684\u81EA\u5DF1\u6BD4`:n.custom?"\u3000\xB7\u3000\u81EA\u5B9A\u4E49\u5173\u5361\uFF0C\u4E0D\u8BA1\u5165\u4E3B\u7EBF\u6210\u7EE9":""}</p>
    ${ed(n.stars)}
    ${n.daily?n.dailyRec&&!n.dailyRec.previous?'<div class="record-flag">\u4ECA\u65E5\u9996\u6B21\u5B8C\u6210 \xB7 \u6210\u7EE9\u5DF2\u8BB0\u5F55</div>':n.dailyRec&&n.dailyRec.newTime?'<div class="record-flag">\u4ECA\u65E5\u65B0\u7EAA\u5F55 \xB7 \u6700\u5FEB\u7528\u65F6</div>':"":id(n.rec)}
    <div class="stars-row">\u7D2F\u8BA1\u661F\u7EA7 <b>${n.totalStars}</b> / ${n.maxStars}</div>
    ${L_(n)}
    ${Sr([["\u7528\u65F6",li(n.elapsed)],["\u78B0\u649E",n.hits],["\u5B9D\u77F3",`${n.gemsGot} / ${n.gemsTotal}`],["\u672C\u5173\u7ED3\u7B97",`+${n.levelScore}`],["\u7D2F\u8BA1\u603B\u5206",n.score],[n.daily?"\u4ECA\u65E5\u6700\u4F73":"\u6700\u4F73\u7528\u65F6",(n.daily?n.dailyBest:n.best)?li((n.daily?n.dailyBest:n.best).time):"\u2014"]])}
    ${n.aiPraise?`<div class="ai-praise">${n.aiPraise}</div>`:""}
    <div class="ai-coach" id="aiCoach"></div>
    ${n.custom?`<div class="modal-btns">
          <button class="primary-btn" data-action="menu">\u8FD4\u56DE\u4E3B\u83DC\u5355 <span>\u21B5</span></button>
          ${n.shareCode?'<button class="ghost-btn" data-action="copy-share">\u590D\u5236\u5206\u4EAB\u94FE\u63A5</button>':""}
          <button class="ghost-btn" data-action="demo">\u770B AI \u6F14\u793A</button>
        </div>`:`<button class="primary-btn" data-action="next">\u8FDB\u5165\u7B2C ${n.levelIndex+2} \u5173 <span>\u21B5</span></button>`}
    ${n.shareCode?`<details class="share-line"><summary>\u5206\u4EAB\u7801 \xB7 \u624B\u52A8\u590D\u5236</summary><b>${n.shareCode}</b></details>`:""}`,gameclear:n=>`
    <div class="modal-tag success">ALL CLEAR</div>
    <h1>\u5168\u90E8\u901A\u5173</h1>
    <p class="modal-lead">\u4E09\u5EA7\u8FF7\u5BAB\u5168\u90E8\u8D70\u5B8C\uFF0C\u5F39\u73E0\u7A33\u7A33\u843D\u5730\u3002</p>
    <div class="clear-title">${n.title||"\u5F39\u73E0\u4E13\u5BB6"}</div>
    ${ed(n.stars)}
    ${id(n.rec)}
    <div class="stars-row">\u7D2F\u8BA1\u661F\u7EA7 <b>${n.totalStars}</b> / ${n.maxStars} \xB7 ${n.difficultyLabel||"\u6807\u51C6"}${n.assist?"\uFF08\u8F85\u52A9\u6863\uFF09":""}</div>
    <div class="clear-review">${D_(n)}</div>
    ${Sr([["\u6700\u7EC8\u603B\u5206",n.score],["\u603B\u7528\u65F6",li(n.totalTime)],["\u603B\u78B0\u649E",n.totalHits],["\u5269\u4F59\u751F\u547D",n.lives]])}
    <textarea class="score-card" id="scoreCard" readonly>${n.cardText||""}</textarea>
    <div class="modal-btns">
      <button class="primary-btn" data-action="again">\u518D\u73A9\u4E00\u6B21 <span>\u21B5</span></button>
      <button class="ghost-btn" data-action="copy-card">\u590D\u5236\u6210\u7EE9\u5361</button>
      <button class="ghost-btn" data-action="menu">\u8FD4\u56DE\u4E3B\u83DC\u5355</button>
    </div>`,failed:n=>`
    <div class="modal-tag danger">FAILED</div>
    <h1>${n.reason}</h1>
    <p class="modal-lead">${n.hasCheckpoint?`${n.checkpointName} \u5DF2\u6FC0\u6D3B\uFF0C\u590D\u6D3B\u540E\u4FDD\u7559\u672C\u5173\u7528\u65F6\u3001\u5B9D\u77F3\u4E0E\u78B0\u649E\u8BB0\u5F55\uFF1B\u6309 R \u53EF\u4ECE\u8D77\u70B9\u5F7B\u5E95\u91CD\u5F00\u3002`:"\u522B\u6025\uFF0C\u6536\u5C0F\u503E\u89D2\u3001\u63D0\u524D\u51CF\u901F\u4F1A\u597D\u8D70\u5F88\u591A\uFF1B\u6309\u4F4F Shift \u53EF\u7CBE\u7EC6\u5FAE\u8C03\u3002"}\u5269\u4F59\u751F\u547D ${n.lives}\u3002</p>
    ${n.coach?`<div class="ai-coach-live" id="aiCoachLive" aria-live="polite">
      <div class="ai-coach-title">AI \u6559\u7EC3 \xB7 \u672C\u5C40\u8BCA\u65AD</div>
      <div class="ai-coach-row ai-coach-wait">\u6B63\u5728\u56DE\u770B\u8FD9\u4E00\u5C40\u7684\u8F68\u8FF9\u2026</div>
    </div>`:""}
    ${Sr([["\u672C\u5173\u7528\u65F6",li(n.elapsed)],["\u5DF2\u7ED3\u7B97\u603B\u5206",n.score],["\u672C\u5173\u672A\u7ED3\u7B97",`+${n.reward}`],["\u5269\u4F59\u751F\u547D",n.lives]])}
    <div class="modal-btns">
      <button class="primary-btn" data-action="retry">${n.hasCheckpoint?"\u4ECE\u68C0\u67E5\u70B9\u590D\u6D3B":"\u91CD\u8BD5\u672C\u5173"} <span>\u21B5</span></button>
      <button class="ghost-btn" data-action="menu">\u8FD4\u56DE\u4E3B\u83DC\u5355</button>
    </div>`,gameover:n=>`
    <div class="modal-tag danger">GAME OVER</div>
    <h1>\u751F\u547D\u7528\u5C3D</h1>
    <p class="modal-lead">\u8FD9\u6B21\u505C\u5728\u4E86\u7B2C ${n.levelIndex+1} \u5173 \xB7 ${n.name}\u3002</p>
    ${Sr([["\u6700\u7EC8\u603B\u5206",n.score],["\u603B\u7528\u65F6",li(n.totalTime)],["\u603B\u78B0\u649E",n.totalHits]])}
    <div class="modal-btns">
      <button class="primary-btn" data-action="again">\u91CD\u65B0\u5F00\u59CB <span>\u21B5</span></button>
      <button class="ghost-btn" data-action="menu">\u8FD4\u56DE\u4E3B\u83DC\u5355</button>
    </div>`};var Lo=class{constructor(){this.ctx=null,this.master=null,this.muted=!1}ensure(){if(this.muted)return!1;if(!this.ctx){let t=globalThis.AudioContext||globalThis.webkitAudioContext;if(!t)return!1;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.5,this.master.connect(this.ctx.destination)}return this.ctx.state==="suspended"&&this.ctx.resume(),!0}tone(t,e,i={}){if(!this.ensure())return;let s=this.ctx.currentTime+(i.delay||0),r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type=i.type||"sine",r.frequency.setValueAtTime(Math.max(20,t),s),i.to&&r.frequency.exponentialRampToValueAtTime(Math.max(20,i.to),s+e);let o=Math.max(.001,i.vol??.12);a.gain.setValueAtTime(1e-4,s),a.gain.exponentialRampToValueAtTime(o,s+Math.min(.015,e*.2)),a.gain.exponentialRampToValueAtTime(1e-4,s+e),r.connect(a),a.connect(this.master),r.start(s),r.stop(s+e+.03)}bump(t){let e=Math.min(.16,.035+t*.012);this.tone(130,.13,{type:"triangle",to:72,vol:e})}pickup(){this.tone(660,.11,{type:"sine",vol:.12}),this.tone(990,.16,{type:"sine",vol:.11,delay:.08})}checkpoint(){this.tone(784,.28,{type:"sine",vol:.1}),this.tone(1175,.36,{type:"sine",vol:.09,delay:.07}),this.tone(1568,.24,{type:"triangle",vol:.035,delay:.14})}boost(){this.tone(240,.22,{type:"sawtooth",to:920,vol:.07}),this.tone(480,.16,{type:"triangle",to:1320,vol:.05,delay:.03})}ice(){this.tone(1320,.45,{type:"sine",to:880,vol:.055}),this.tone(1760,.38,{type:"sine",to:1180,vol:.035,delay:.04})}fall(){this.tone(420,.65,{type:"sawtooth",to:70,vol:.1}),this.tone(210,.7,{type:"sine",to:55,vol:.08,delay:.04})}fail(){this.tone(240,.28,{type:"square",to:150,vol:.07}),this.tone(170,.42,{type:"triangle",to:90,vol:.09,delay:.18})}win(){[523,659,784,1046].forEach((t,e)=>{this.tone(t,.3,{type:"sine",vol:.11,delay:e*.1})})}clearAll(){[523,659,784,1046,1318].forEach((t,e)=>{this.tone(t,.42,{type:"triangle",vol:.1,delay:e*.13})})}click(){this.tone(520,.07,{type:"sine",vol:.07})}warn(){this.tone(880,.09,{type:"square",vol:.045})}toggleMute(){return this.muted=!this.muted,this.muted||this.ensure(),this.muted}};var ps=19,B_=.72,z_=1.02,sd=.26,k_=9.5,H_=.42*.25,G_=2.4,V_=.11,wn=class{constructor(t){this.level=t,this.reset()}reset(t=null){let e=t||this.level.start;this.x=e.x,this.z=e.z,this.vx=0,this.vz=0,this.tiltX=0,this.tiltZ=0,this.targetX=0,this.targetZ=0,this.hitCooldown=0,this.boostCooldown=0,this.onIce=!1,this.spinAxis={x:1,y:0,z:0},this.spinAngle=0}respawn(t){this.reset(t)}setAxis(t,e,i){let s=Math.hypot(t,e),r=s>1?1/s:1,a=t*r,o=e*r;this.targetZ=-a*i,this.targetX=o*i}resolveWalls(t){let e=.42,i=this.level.walls;for(let s=0;s<2;s++){let r=!1;for(let a=0;a<i.length;a++){let o=i[a],l=Math.max(o.minX,Math.min(this.x,o.maxX)),c=Math.max(o.minZ,Math.min(this.z,o.maxZ)),h=this.x-l,f=this.z-c,u=h*h+f*f;if(u>=e*e)continue;r=!0;let d,g,x;if(u>1e-10){let m=Math.sqrt(u);d=h/m,g=f/m,x=e-m}else{let m=this.x-o.minX,y=o.maxX-this.x,E=this.z-o.minZ,S=o.maxZ-this.z,A=Math.min(m,y,E,S);A===m?(d=-1,g=0):A===y?(d=1,g=0):A===E?(d=0,g=-1):(d=0,g=1),x=e+A}this.x+=d*x,this.z+=g*x;let p=this.vx*d+this.vz*g;if(p<0){let m=-p;this.vx-=(1+sd)*p*d,this.vz-=(1+sd)*p*g,this.vx*=.99,this.vz*=.99,m>G_&&this.hitCooldown<=0&&(t.hits+=1,t.hitSpeed=Math.max(t.hitSpeed,m),this.hitCooldown=V_)}}if(!r)break}}step(t,e){let i={hits:0,hitSpeed:0,fell:-1,hazard:-1,gems:[],goal:!1,checkpoint:-1,boost:-1,ice:!1},s=this.level,r=1-Math.exp(-k_*t);this.tiltX+=(this.targetX-this.tiltX)*r,this.tiltZ+=(this.targetZ-this.tiltZ)*r;let a=e.gravity*B_,o=-a*Math.sin(this.tiltZ),l=a*Math.cos(this.tiltZ)*Math.sin(this.tiltX);this.vx+=o*t,this.vz+=l*t;let c=!1;for(let p=0;p<s.iceZones.length;p++){let m=s.iceZones[p];if(Math.hypot(this.x-m.x,this.z-m.z)<m.r){c=!0;break}}this.onIce=c,i.ice=c;let h=Math.exp(-z_*(c?.22:1)*t);this.vx*=h,this.vz*=h,!this.targetX&&!this.targetZ&&Math.hypot(this.vx,this.vz)<.035&&(this.vx=0,this.vz=0);let f=Math.hypot(this.vx,this.vz);if(f>ps){let p=ps/f;this.vx*=p,this.vz*=p,f=ps}this.hitCooldown>0&&(this.hitCooldown-=t),this.boostCooldown>0&&(this.boostCooldown-=t);let u=Math.max(1,Math.ceil(f*t/H_)),d=t/u;for(let p=0;p<u;p++)this.x+=this.vx*d,this.z+=this.vz*d,this.resolveWalls(i);let g=this.level.width/2-.42-.02,x=this.level.depth/2-.42-.02;this.x<-g&&(this.x=-g,this.vx<0&&(this.vx=0)),this.x>g&&(this.x=g,this.vx>0&&(this.vx=0)),this.z<-x&&(this.z=-x,this.vz<0&&(this.vz=0)),this.z>x&&(this.z=x,this.vz>0&&(this.vz=0));for(let p=0;p<s.boosts.length;p++){let m=s.boosts[p];if(!(Math.hypot(this.x-m.x,this.z-m.z)>=m.r)){if(this.boostCooldown<=0){this.vx+=m.dirX*2.2,this.vz+=m.dirZ*2.2;let y=Math.hypot(this.vx,this.vz);y>ps&&(this.vx*=ps/y,this.vz*=ps/y),this.boostCooldown=1,i.boost=p}break}}f=Math.hypot(this.vx,this.vz),f>.001?(this.spinAxis={x:this.vz/f,y:0,z:-this.vx/f},this.spinAngle=f*t/.42):this.spinAngle=0;for(let p=0;p<s.holes.length;p++){let m=s.holes[p];if(Math.hypot(this.x-m.x,this.z-m.z)<m.r*.72){i.fell=p;break}}if(i.fell<0)for(let p=0;p<s.hazards.length;p++){let m=s.hazards[p];if(Math.hypot(this.x-m.x,this.z-m.z)<m.r*.8){i.hazard=p;break}}if(i.fell<0&&i.hazard<0){for(let p=0;p<s.gems.length;p++){let m=s.gems[p];!m.taken&&Math.hypot(this.x-m.x,this.z-m.z)<m.r+.42*.55&&(m.taken=!0,i.gems.push(p))}for(let p=0;p<s.checkpoints.length;p++){let m=s.checkpoints[p];if(!m.active&&Math.hypot(this.x-m.x,this.z-m.z)<m.r+.42*.35){m.active=!0,i.checkpoint=p;break}}Math.hypot(this.x-s.goal.x,this.z-s.goal.z)<.76*.8&&(i.goal=!0)}return i}};var rd="marble-maze-3d.records.v1";var od=["tilt","checkpoint","boost","ice","goal"],Ec=["standard","relaxed","challenge"];var W_=/^([0-9]+)(?::(relaxed|challenge))?$/;function ad(n,t){return t&&t!=="standard"?`${n}:${t}`:String(n)}function X_(n){let t={};if(!n||typeof n!="object"||Array.isArray(n))return t;for(let e of od)n[e]===!0&&(t[e]=!0);return t}function q_(n){let t={};if(!n||typeof n!="object"||Array.isArray(n))return t;for(let[e,i]of Object.entries(n)){if(!W_.test(e)||!i||typeof i!="object")continue;let s=Number(i.time);if(!Number.isFinite(s)||s<0||s>86400)continue;let r=Number(i.score),a=Number(i.stars);t[e]={time:s,score:Number.isFinite(r)?Math.max(0,Math.min(1e9,r)):0,stars:Number.isFinite(a)?Math.max(0,Math.min(3,Math.floor(a))):0}}return t}function $_(n){let t={clears:0,playTime:0};if(!n||typeof n!="object"||Array.isArray(n))return t;let e=Number(n.clears),i=Number(n.playTime);return t.clears=Number.isFinite(e)?Math.max(0,Math.min(1e7,Math.floor(e))):0,t.playTime=Number.isFinite(i)?Math.max(0,Math.min(1e9,i)):0,t}var ld=/^\d{4}-\d{2}-\d{2}$/,cd=30;function Y_(n){let t={};if(!n||typeof n!="object"||Array.isArray(n))return t;let e=Object.keys(n).filter(i=>ld.test(i)).sort();for(let i of e.slice(-cd)){let s=n[i];if(!s||typeof s!="object")continue;let r=Number(s.time);if(!Number.isFinite(r)||r<0||r>86400)continue;let a=Number(s.score),o=Number(s.stars);t[i]={time:r,score:Number.isFinite(a)?Math.max(0,Math.min(1e9,a)):0,stars:Number.isFinite(o)?Math.max(0,Math.min(3,Math.floor(o))):0}}return t}var Do=class{constructor(){this.persistent=!0,this.data={v:1,best:{},unlocked:1,hints:{},difficulty:"standard",stats:{clears:0,playTime:0},daily:{}};try{let t=globalThis.localStorage,e=t&&t.getItem(rd);if(e){let i=null;try{i=JSON.parse(e)}catch{i=null}if(i&&typeof i=="object"){this.data.best=q_(i.best),this.data.hints=X_(i.hints),this.data.stats=$_(i.stats),this.data.daily=Y_(i.daily),Ec.includes(i.difficulty)&&(this.data.difficulty=i.difficulty);let s=Number(i.unlocked);Number.isFinite(s)&&(this.data.unlocked=Math.max(1,Math.min(99,Math.floor(s))))}}}catch{this.persistent=!1}}save(){if(this.persistent)try{globalThis.localStorage.setItem(rd,JSON.stringify(this.data))}catch{this.persistent=!1}}best(t,e="standard"){let i=this.data.best[ad(t,e)];return i&&Number.isFinite(i.time)?i:null}get unlocked(){return this.data.unlocked}get clearCount(){return this.data.stats.clears}get playTime(){return this.data.stats.playTime}addClear(){this.data.stats.clears=Math.min(1e7,this.data.stats.clears+1),this.save()}addPlayTime(t){let e=Number(t);!Number.isFinite(e)||e<=0||(this.data.stats.playTime=Math.min(1e9,this.data.stats.playTime+e))}flush(){this.save()}get difficulty(){return this.data.difficulty}setDifficulty(t){return!Ec.includes(t)||this.data.difficulty===t?!1:(this.data.difficulty=t,this.save(),!0)}get totalStars(){return this.starsForMode("standard")}starsForMode(t){let e=0;for(let[i,s]of Object.entries(this.data.best))(i.includes(":")?i.split(":")[1]:"standard")===t&&(e+=Number(s.stars)||0);return e}unlock(t){t>this.data.unlocked&&(this.data.unlocked=t,this.save())}markHint(t){return!od.includes(t)||this.data.hints[t]===!0?!1:(this.data.hints[t]=!0,this.save(),!0)}hintSeen(t){return this.data.hints[t]===!0}dailyBest(t){let e=this.data.daily[t];return e&&Number.isFinite(e.time)?e:null}submitDaily(t,e){if(!ld.test(String(t)))return null;let i=this.dailyBest(t),s={newTime:!i||e.time<i.time-1e-6,newScore:!i||e.score>i.score,previous:i};this.data.daily[t]={time:i?Math.min(i.time,e.time):e.time,score:i?Math.max(i.score,e.score):e.score,stars:i?Math.max(i.stars,e.stars):e.stars};let r=Object.keys(this.data.daily).sort();for(let a of r.slice(0,Math.max(0,r.length-cd)))delete this.data.daily[a];return this.save(),s}submit(t,e){let i=Ec.includes(e.mode)?e.mode:"standard",s=ad(t,i),r=this.best(t,i),a={newTime:!r||e.time<r.time-1e-6,newScore:!r||e.score>r.score,newStars:!r||e.stars>r.stars,previous:r,mode:i};return this.data.best[s]={time:r?Math.min(r.time,e.time):e.time,score:r?Math.max(r.score,e.score):e.score,stars:r?Math.max(r.stars,e.stars):e.stars,mode:i},this.save(),a}};var ti={standard:{id:"standard",label:"\u6807\u51C6",gravity:1,tilt:1,time:1,par:1,assist:!1},relaxed:{id:"relaxed",label:"\u8F7B\u677E",gravity:.78,tilt:.85,time:1.4,par:1.25,assist:!0},challenge:{id:"challenge",label:"\u6311\u6218",gravity:1.18,tilt:1.12,time:.85,par:.85,assist:!1}},No=["standard","relaxed","challenge"];function Tc(n){let t=No.indexOf(n);return No[(t+1+No.length)%No.length]}function Uo(n){return(ti[n]||ti.standard).label}function wc(n,t){let e=ti[t]||ti.standard;return{...n,gravity:n.gravity*e.gravity,tiltMax:n.tiltMax*e.tilt,timeLimit:n.timeLimit>0?Math.round(n.timeLimit*e.time):0,par:n.par*e.par}}var Z_="/api/ai",J_=8e3,Ve=(n,t,e)=>Math.max(t,Math.min(e,n)),Zt=(n,t)=>{let e=Number(n);return Number.isFinite(e)?e:t};function Ac(n){if(typeof n!="string")return null;let t=n.match(/```(?:json)?\s*([\s\S]*?)```/i),e=t?t[1]:n,i=e.indexOf("{"),s=e.lastIndexOf("}");if(i<0||s<=i)return null;try{return JSON.parse(e.slice(i,s+1))}catch{return null}}function gs(n={}){let t=Math.round(Ve(Zt(n.cols,9),7,13)),e=Math.round(Ve(Zt(n.rows,9),7,13)),i=Math.round(Ve(Zt(n.holes,2),0,8)),s=Math.round(Ve(Zt(n.hazards,1),0,5)),r=Math.round(Ve(Zt(n.gems,4),1,9)),a=Math.round(Ve(Zt(n.checkpoints,2),0,3)),o=Math.round(Ve(Zt(n.boosts,1),0,4)),l=Math.round(Ve(Zt(n.ice,1),0,5)),c=t*e,h=Math.floor(c*.16);return{id:9e3+Math.floor(Math.random()*999),name:String(n.name||"AI \u8FF7\u5BAB").slice(0,16),subtitle:String(n.subtitle||"\u667A\u80FD\u751F\u6210\u5173\u5361").slice(0,24),cols:t,rows:e,seed:Math.floor(Ve(Zt(n.seed,Math.random()*2**31|0),1,2**31-1)),loop:Ve(Zt(n.loop,.12),.04,.3),holes:Math.min(i,h),hazards:Math.min(s,Math.max(0,h-Math.min(i,h))),gems:Math.min(r,Math.max(1,c-4)),checkpoints:Math.min(a,3),boosts:o,ice:l,tiltMax:Ve(Zt(n.tiltMax,.3),.22,.4),gravity:Ve(Zt(n.gravity,29),20,36),timeLimit:Math.round(Ve(Zt(n.timeLimit,150),0,300)),par:Math.round(Ve(Zt(n.par,c*4),20,140)),parHits:Math.round(Ve(Zt(n.parHits,14),4,40)),tip:String(n.tip||"AI \u4E3A\u4F60\u751F\u6210\u7684\u8FF7\u5BAB\uFF0C\u6CE8\u610F\u89C2\u5BDF\u9677\u9631\u4E0E\u52A0\u901F\u5E26\u3002").slice(0,120),aiGenerated:!0}}function ms(n){if(!n||!n.aiGenerated)return{ok:!1,reason:"\u914D\u7F6E\u6765\u6E90\u4E0D\u5408\u6CD5"};let t;try{t=Ao(n)}catch{return{ok:!1,reason:"\u5173\u5361\u6784\u5EFA\u5931\u8D25"}}return!t.solvable||t.safePath.length<3?{ok:!1,reason:"\u8D77\u70B9\u5230\u7EC8\u70B9\u4E0D\u8FDE\u901A"}:{ok:!0,level:t}}var qi={easy:["\u7B80\u5355","\u5165\u95E8","\u65B0\u624B","\u8F7B\u677E","\u77ED","\u5C0F"],hard:["\u96BE","\u56F0\u96BE","\u6311\u6218","\u5730\u72F1","\u5927","\u590D\u6742"],ice:["\u51B0","\u6ED1","\u6253\u6ED1"],boost:["\u52A0\u901F","\u5FEB","\u901F\u5EA6","\u51B2"],hazard:["\u7194\u5CA9","\u5CA9\u6D46","\u706B","\u9677\u9631","\u5371\u9669"],hole:["\u6D1E","\u7A7A\u6D1E","\u6389\u843D","\u5751"],gem:["\u5B9D\u77F3","\u6536\u96C6","\u661F\u661F"],checkpoint:["\u68C0\u67E5\u70B9","\u590D\u6D3B","\u5B58\u6863"]};function Rc(n=""){let t=String(n),e=a=>a.some(o=>t.includes(o)),i=e(qi.hard)&&!e(qi.easy),s=i?13:e(qi.easy)?7:10,r={name:(t.match(/名为[「"']?([^」"'\s，。]{2,12})/)||[])[1]||(i?"\u6DF1\u6E0A\u8BD5\u70BC":"\u667A\u80FD\u8BAD\u7EC3\u573A"),subtitle:i?"AI \u9AD8\u96BE\u6311\u6218":"AI \u5B9A\u5236\u8FF7\u5BAB",cols:s,rows:s,holes:e(qi.hole)?i?6:3:i?4:1,hazards:e(qi.hazard)?i?4:2:0,gems:e(qi.gem)?8:i?6:4,checkpoints:e(qi.checkpoint)||i?3:2,boosts:e(qi.boost)?4:i?2:1,ice:e(qi.ice)?5:i?2:1,timeLimit:i?210:180,tiltMax:i?.36:.3,gravity:i?33:29,tip:i?"AI \u5224\u5B9A\u4F60\u60F3\u8981\u6311\u6218\uFF1A\u9677\u9631\u5BC6\u96C6\uFF0C\u5584\u7528\u68C0\u67E5\u70B9\u4E0E\u52A0\u901F\u5E26\uFF0CShift \u7CBE\u7EC6\u6863\u63A7\u901F\u3002":"AI \u6309\u4F60\u7684\u63CF\u8FF0\u751F\u6210\u7684\u8FF7\u5BAB\uFF0C\u5148\u770B\u6E05\u91D1\u8272\u7EC8\u70B9\u65B9\u5411\u518D\u52A8\u624B\u3002"};return gs(r)}function Oo(n={}){let t=[],e=Zt(n.hits,0),i=Zt(n.parHits,14),s=Zt(n.gems,0),r=Zt(n.gemsTotal,1),a=Zt(n.checkpoints,0),o=Zt(n.elapsed,0),l=Zt(n.par,60),c=n.improvement;if(c&&typeof c=="object"&&(c.escapedZone&&c.prevZone?t.push(`\u4E0A\u5C40\u5728${c.prevZone}\u51FA\u5C40\uFF0C\u8FD9\u6B21\u6CA1\u518D\u5728\u90A3\u91CC\u5931\u624B\u2014\u2014\u8DEF\u7EBF\u6539\u5BF9\u4E86\uFF0C\u4FDD\u6301\u4F4F\u3002`):c.prevZone&&n.phase==="fail"&&n.zone===c.prevZone&&t.push(`\u53C8\u5728${c.prevZone}\u51FA\u5C40\uFF1A\u4E0A\u6B21\u8BF4\u7684\u6536\u503E\u89D2\u8FD8\u6CA1\u843D\u5730\uFF0C\u8FDB\u8BE5\u533A\u524D\u6309\u4F4F Shift \u628A\u901F\u5EA6\u964D\u5230\u4E00\u534A\u3002`),c.prevHotZone&&c.hotImproved&&t.push(`${c.prevHotZone}\u78B0\u649E\u4ECE ${Math.round(Zt(c.prevHotCount,0))} \u6B21\u964D\u5230 ${Math.round(Zt(c.hotCount,0))} \u6B21\uFF0C\u63D0\u524D\u56DE\u6B63\u89C1\u6548\u4E86\u3002`),c.tiltImproved&&t.push("\u6574\u5C40\u503E\u89D2\u6BD4\u4E0A\u5C40\u6536\u4E86\uFF0C\u60EF\u6027\u66F4\u53EF\u63A7\uFF0C\u7EE7\u7EED\u7528\u534A\u503E\u89D2\u5DE1\u822A\u3002"),t.length)){let h=n.phase==="fail"?"\u4E0B\u4E00\u628A\u628A\u68C0\u67E5\u70B9\u5F53\u5206\u6BB5\u76EE\u6807\uFF0C\u4E00\u6BB5\u4E00\u6BB5\u7A33\u7740\u63A8\u3002":"\u8282\u594F\u7A33\u4E86\uFF0C\u8BD5\u8BD5\u6CBF\u4E3B\u8DEF\u5F84\u76F4\u53D6\u7EC8\u70B9\u51B2 3 \u661F\u3002";return t.push(h),t.slice(0,3)}if(n.phase==="fail"){let h=String(n.zone||"").trim(),f=String(n.hotZone||"").trim(),u=Math.round(Zt(n.hotCount,0)),d=Zt(n.tiltLevel,0);return h&&t.push(`${h}\u51FA\u5C40\uFF1A\u8FDB\u8FD9\u7247\u533A\u57DF\u524D\u628A\u503E\u89D2\u6536\u5230\u4E00\u534A\u4EE5\u4E0B\uFF0C\u8D34\u5185\u89D2\u8D70\u3001\u522B\u8D34\u5916\u6CBF\u3002`),f&&f===h&&u>=3?t.push(`${f}\u5DF2\u7ECF\u649E\u4E86 ${u} \u6B21\uFF0C\u90A3\u91CC\u662F\u8FDE\u7EED\u5F2F\uFF1A\u6309\u4F4F Shift \u9010\u4E2A\u62D0\u89D2\u5FAE\u8C03\u3002`):f&&u>=5&&t.push(`\u78B0\u649E\u96C6\u4E2D\u5728${f}\uFF1A\u63D0\u524D\u677E\u624B\u56DE\u6B63\uFF0C\u8BA9\u5F39\u73E0\u9760\u60EF\u6027\u6ED1\u8FC7\uFF0C\u522B\u786C\u9876\u7740\u5899\u63A8\u3002`),d>.78&&t.push("\u6574\u5C40\u51E0\u4E4E\u9876\u7740\u6EE1\u503E\u89D2\uFF1A\u901F\u5EA6\u8D8A\u5FEB\u8D8A\u96BE\u6539\u5411\uFF0C\u7528\u534A\u503E\u89D2\u5DE1\u822A\u66F4\u7A33\u3002"),t.length||t.push("\u8FD9\u6B21\u662F\u8D70\u4F4D\u95EE\u9898\u4E0D\u662F\u901F\u5EA6\u95EE\u9898\uFF1A\u5148\u5728\u76F4\u9053\u628A\u901F\u5EA6\u964D\u4E0B\u6765\uFF0C\u518D\u8FDB\u5F2F\u3002"),t.slice(0,3)}return e>i&&t.push("\u78B0\u649E\u504F\u591A\uFF1A\u6309\u4F4F Shift \u7528\u7CBE\u7EC6\u503E\u89D2\uFF0C\u9760\u8FD1\u5899\u4F53\u65F6\u63D0\u524D\u56DE\u6B63\u3002"),o>l*1.4&&t.push("\u7528\u65F6\u504F\u957F\uFF1A\u5148\u6CBF\u4E3B\u8DEF\u5F84\u63A8\u8FDB\uFF0C\u5B9D\u77F3\u548C\u52A0\u901F\u5E26\u653E\u5230\u7B2C\u4E8C\u8D9F\u518D\u62FF\u3002"),s<r*.5&&t.push("\u5B9D\u77F3\u6536\u96C6\u8F83\u5C11\uFF1A\u5B83\u4EEC\u591A\u5728\u5206\u652F\u8DEF\u7EBF\u4E0A\uFF0C\u503C\u5F97\u7ED5\u8DEF\u3002"),a===0&&t.push("\u8FD8\u6CA1\u6FC0\u6D3B\u68C0\u67E5\u70B9\uFF1A\u8DEF\u8FC7\u9752\u8272\u73AF\u65F6\u78B0\u5230\u5B83\uFF0C\u5931\u8D25\u5C31\u80FD\u5C31\u8FD1\u590D\u6D3B\u3002"),t.length||t.push("\u8868\u73B0\u7A33\u5B9A\uFF1A\u4FDD\u6301\u5F53\u524D\u8282\u594F\uFF0C\u8BD5\u8BD5\u66F4\u77ED\u7528\u65F6\u51B2 3 \u661F\u3002"),t.slice(0,3)}function Cc(n=""){let t=String(n);return/冰|雪|寒/.test(t)?{name:"\u971C\u8109\u56DE\u5ECA",subtitle:"\u4F4E\u6E29\u6ED1\u884C\u533A",tip:"\u51B0\u9762\u51E0\u4E4E\u6CA1\u6709\u6469\u64E6\uFF0C\u6536\u5C0F\u503E\u89D2\u3001\u63D0\u524D\u51CF\u901F\u3002",praise:"\u4F60\u5728\u971C\u8109\u4E0A\u8D70\u5F97\u5F88\u7A33\u3002"}:/火|熔岩|岩|焰/.test(t)?{name:"\u7194\u6838\u4E4B\u5FC3",subtitle:"\u9AD8\u6E29\u7981\u533A",tip:"\u7EA2\u8272\u7194\u5CA9\u89E6\u78B0\u5373\u5931\u8D25\uFF0C\u7ED5\u5F00\u5B83\u518D\u52A0\u901F\u3002",praise:"\u7194\u6838\u6CA1\u80FD\u62E6\u4F4F\u4F60\u3002"}:/海|水|渊|深/.test(t)?{name:"\u6DF1\u84DD\u6C89\u57DF",subtitle:"\u65E0\u5149\u6C34\u57DF",tip:"\u9ED1\u8272\u7A7A\u6D1E\u4F1A\u8BA9\u4F60\u5760\u843D\uFF0C\u8D34\u7740\u5899\u8D70\u66F4\u4FDD\u9669\u3002",praise:"\u6DF1\u57DF\u4E5F\u88AB\u4F60\u8D70\u901A\u4E86\u3002"}:{name:"\u667A\u80FD\u8BD5\u70BC\u573A",subtitle:"AI \u5B9A\u5236\u5173\u5361",tip:"\u770B\u6E05\u91D1\u8272\u7EC8\u70B9\uFF0C\u5584\u7528\u68C0\u67E5\u70B9\u4E0E\u52A0\u901F\u5E26\u3002",praise:"\u6F02\u4EAE\uFF0CAI \u751F\u6210\u7684\u8DEF\u7EBF\u88AB\u4F60\u62FF\u4E0B\u4E86\u3002"}}function Ic(n={}){let t=Math.round(Zt(n.clears,0)),e=Zt(n.playTime,0),i=Math.round(Zt(n.totalHits,0)),s=Math.round(Zt(n.stars,0)),r=n.level||{};return["\u3010AI \u8BAD\u7EC3\u62A5\u544A \xB7 3D \u5F39\u73E0\u8FF7\u5BAB\u3011",`\u7D2F\u8BA1\u901A\u5173 ${t} \u6B21 \xB7 \u751F\u6DAF\u6E38\u73A9 ${Math.floor(e/60)} \u5206 ${Math.floor(e%60)} \u79D2`,`\u7D2F\u8BA1\u78B0\u649E ${i} \u6B21 \xB7 \u5F53\u524D\u6863\u661F\u7EA7 ${s} / 9`,`\u6700\u8FD1\u5173\u5361\uFF1A${r.name||"\u2014"} \xB7 \u7528\u65F6 ${Math.floor(Zt(r.elapsed,0))}s \xB7 \u78B0\u649E ${Math.round(Zt(r.hits,0))} \u6B21`,"","\u5EFA\u8BAE\uFF1A"+Oo(n).join(" "),"\u672C\u62A5\u544A\u7531\u672C\u5730\u5F15\u64CE\u751F\u6210\uFF08\u672A\u8FDE\u63A5\u9B54\u642D AI \u670D\u52A1\uFF09\uFF0C\u6570\u636E\u4EC5\u5B58\u4E8E\u672C\u673A\u3002"].join(`
`)}var Fo=class{constructor(t={}){let e=typeof globalThis<"u"?globalThis:{};this.enabled=t.enabled!==void 0?t.enabled:!!e.__MARBLE_AI_ENABLED__,this.base=t.base||e.__MARBLE_AI_BASE__||Z_,this.fetchImpl=t.fetch||(typeof globalThis.fetch=="function"?globalThis.fetch.bind(globalThis):null),this.timeout=t.timeout||J_,this.mode="local"}async call(t,e){if(!this.enabled||!this.fetchImpl)return null;let i=typeof AbortController<"u"?new AbortController:null,s=i?setTimeout(()=>i.abort(),this.timeout):null;try{let r=await this.fetchImpl(`${this.base}/${t}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e||{}),signal:i?i.signal:void 0});if(!r||!r.ok)return null;let a=await r.json();return!a||a.ok!==!0?null:(this.mode="ai",a)}catch{return null}finally{s&&clearTimeout(s)}}async design(t){let e=await this.call("design",{prompt:String(t||"").slice(0,300)}),i=e?gs(Ac(e.text)||e.config||{}):null;(!i||!ms(i).ok)&&(this.mode="local",i=Rc(t));let s=ms(i);return{cfg:i,level:s.level,mode:this.mode,source:e?"ai":"local"}}async coach(t){let e=await this.call("coach",{telemetry:t}),i=null;if(e){let s=Ac(e.text);Array.isArray(s)?i=s.map(r=>String(r).slice(0,80)):Array.isArray(e.tips)?i=e.tips.map(r=>String(r).slice(0,80)):typeof e.text=="string"&&(i=e.text.split(`
`).filter(Boolean).slice(0,3))}return(!i||!i.length)&&(this.mode="local",i=Oo(t)),{tips:i,mode:this.mode}}async narrative(t){let e=await this.call("narrative",{theme:String(t||"").slice(0,120)}),i=null;if(e){let s=Ac(e.text);s&&s.name&&(i={name:String(s.name).slice(0,16),subtitle:String(s.subtitle||"").slice(0,24),tip:String(s.tip||"").slice(0,120),praise:String(s.praise||"").slice(0,80)})}return i||(this.mode="local",i=Cc(t)),{story:i,mode:this.mode}}async report(t){let e=await this.call("report",{stats:t}),i=e&&typeof e.text=="string"&&e.text.length>20?e.text:null;return i||(this.mode="local",i=Ic(t)),{text:i,mode:this.mode}}};var fd=1,An="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",K_=4096,hd=2,Q_=600,ud=typeof TextEncoder<"u"?new TextEncoder:null,dd=typeof TextDecoder<"u"?new TextDecoder:null;function j_(n){let t="";for(let e=0;e<n.length;e+=3){let i=n[e],s=e+1<n.length?n[e+1]:0,r=e+2<n.length?n[e+2]:0,a=i<<16|s<<8|r;t+=An[a>>18&63]+An[a>>12&63],e+1<n.length&&(t+=An[a>>6&63]),e+2<n.length&&(t+=An[a&63])}return t}function tx(n){let t=[];for(let e=0;e<n.length;e+=4){let i=n.slice(e,e+4),s=0;for(let o of i){let l=An.indexOf(o);if(l<0)return null;s=s<<6|l}let r=4-i.length;s<<=r*6;let a=[s>>16&255,s>>8&255,s&255];for(let o=0;o<3-r;o++)t.push(a[o])}return t}var ex=n=>{let t=0;for(let e=0;e<n.length;e++)t=(t*31+n[e])%K_;return t},pd=n=>{let t=ex(n);return An[t>>6&63]+An[t&63]};function Bo(n){if(!n||!ud)return"";let t=[fd,Math.round(n.cols),Math.round(n.rows),Math.round(n.seed),Math.round(n.holes),Math.round(n.hazards),Math.round(n.gems),Math.round(n.checkpoints),Math.round(n.boosts),Math.round(n.ice),Math.round(n.tiltMax*100),Math.round(n.gravity),Math.round(n.timeLimit),Math.round(n.loop*100),String(n.name||""),String(n.subtitle||""),String(n.tip||"")],e=ud.encode(JSON.stringify(t));return j_(e)+pd(e)}function Pc(n){let t=String(n||"").trim();if(!t)return"";let e=t.match(/[#?&]l=([^&\s]+)/)||t.match(/^l=([^&\s]+)/);return e&&(t=e[1]),t.replace(/[^A-Za-z0-9_-]/g,"")}function md(n){let t=Pc(n);if(!t||t.length<10||t.length>Q_||!dd)return{ok:!1,reason:"\u5206\u4EAB\u7801\u683C\u5F0F\u4E0D\u6B63\u786E"};let e=t.slice(0,-hd),i=t.slice(-hd),s=tx(e);if(!s||!s.length)return{ok:!1,reason:"\u5206\u4EAB\u7801\u5DF2\u635F\u574F"};if(pd(s)!==i)return{ok:!1,reason:"\u5206\u4EAB\u7801\u6821\u9A8C\u672A\u901A\u8FC7\uFF08\u53EF\u80FD\u88AB\u622A\u65AD\uFF09"};let r;try{r=JSON.parse(dd.decode(new Uint8Array(s)))}catch{return{ok:!1,reason:"\u5206\u4EAB\u7801\u5185\u5BB9\u65E0\u6CD5\u89E3\u6790"}}if(!Array.isArray(r)||r.length<17||r[0]!==fd)return{ok:!1,reason:"\u5206\u4EAB\u7801\u7248\u672C\u4E0D\u5339\u914D"};let a=gs({name:r[14],subtitle:r[15],tip:r[16],cols:r[1],rows:r[2],seed:r[3],holes:r[4],hazards:r[5],gems:r[6],checkpoints:r[7],boosts:r[8],ice:r[9],tiltMax:r[10]/100,gravity:r[11],timeLimit:r[12],loop:r[13]/100}),o=ms(a);return o.ok?{ok:!0,cfg:a,level:o.level}:{ok:!1,reason:`\u5206\u4EAB\u7801\u5BF9\u5E94\u5173\u5361\u4E0D\u53EF\u73A9\uFF1A${o.reason}`}}var ln=.008333333333333333,zo=.25,ix=30,ko=class{constructor(t=ln){this.step=t,this.acc=0,this.totalWall=0,this.totalSim=0,this.lastSteps=0}reset(){this.acc=0,this.lastSteps=0}advance(t){let e=Math.max(0,Math.min(zo,t));this.totalWall+=e,this.acc=Math.min(zo,this.acc+e);let i=0;for(;this.acc+1e-12>=this.step&&i<ix;)this.acc-=this.step,i+=1;return this.lastSteps=i,this.totalSim+=i*this.step,i}get lag(){return this.totalWall-this.totalSim}};var Lc=(n,t,e)=>Math.max(t,Math.min(e,n)),Ho=class{constructor(t){this.level=t,this.pts=t.safePath.map(e=>t.cellCenter(e%t.cols,Math.floor(e/t.cols))),this.target=1,this.steps=0,this.trace=null}nextAxis(t){let e=this.pts[Math.min(this.target,this.pts.length-1)],i=e.x-t.x,s=e.z-t.z,r=Math.hypot(i,s);r<.34&&this.target<this.pts.length-1&&(this.target+=1);let a=Lc(r*1.7,0,4),o=r>1e-6?i/r:0,l=r>1e-6?s/r:0,c=Lc((o*a-t.vx)*.62,-1,1),h=Lc((l*a-t.vz)*.62,-1,1);return this.steps+=1,this.trace&&this.trace.push([c,h]),{x:c,z:h}}get progress(){return this.pts.length>1?(this.target-1)/(this.pts.length-1):1}run(t,{seconds:e=150,record:i=!1}={}){i&&(this.trace=[]);let s=new wn(this.level),r={x:s.x,z:s.z,seed:t.seed},a=0,o=Math.round(e/ln);for(let l=0;l<o;l++){let c=this.nextAxis(s);s.setAxis(c.x,c.z,t.tiltMax);let h=s.step(ln,t);if(a+=h.hits,h.fell>=0||h.hazard>=0)return{ok:!1,initial:r,hits:a,steps:l+1,trace:this.trace,reason:`\u649E\u4E0A\u9677\u9631 @ ${(l*ln).toFixed(1)}s, \u8DEF\u5F84\u70B9 ${this.target}/${this.pts.length}`};if(h.goal)return{ok:!0,initial:r,hits:a,steps:l+1,time:(l+1)*ln,trace:this.trace}}return{ok:!1,initial:r,hits:a,steps:o,trace:this.trace,reason:`\u8D85\u65F6\uFF0C\u8DEF\u5F84\u70B9 ${this.target}/${this.pts.length}\uFF0C\u4F4D\u7F6E (${s.x.toFixed(2)}, ${s.z.toFixed(2)})`}}};var Ut={MENU:"menu",PLAYING:"playing",PAUSED:"paused",FAILING:"failing",FAILED:"failed",LEVELCLEAR:"levelclear",GAMECLEAR:"gameclear",GAMEOVER:"gameover"},Dc=n=>{let t=Math.max(0,Math.floor(n));return`${String(Math.floor(t/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`};function Go(n=new Date){let t=n.getFullYear(),e=String(n.getMonth()+1).padStart(2,"0"),i=String(n.getDate()).padStart(2,"0"),s=`${t}-${e}-${i}`,r=2166136261;for(let o=0;o<s.length;o++)r^=s.charCodeAt(o),r=Math.imul(r,16777619);let a=gs({name:`\u6BCF\u65E5\u6311\u6218 \xB7 ${e}/${i}`,subtitle:"\u6BCF\u5929\u4E00\u5EA7\u65B0\u8FF7\u5BAB",cols:10,rows:10,seed:(r>>>0)%2147483646+1,loop:.14,holes:4,hazards:2,gems:6,checkpoints:2,boosts:2,ice:2,tiltMax:.31,gravity:29,timeLimit:150,par:60,parHits:14,tip:"\u6BCF\u65E5\u6311\u6218\uFF1A\u4ECA\u5929\u6240\u6709\u4EBA\u90FD\u9762\u5BF9\u540C\u4E00\u5EA7\u8FF7\u5BAB\uFF0C\u51B2\u4E00\u4E2A\u66F4\u5FEB\u7528\u65F6\uFF0C\u628A\u6210\u7EE9\u5361\u5206\u4EAB\u7ED9\u670B\u53CB\u3002"});return a.id=8e3,a.daily=s,a}var Vo=class{constructor(t,e,i){this.view=t,this.ui=e,this.sfx=i,this.records=new Do,this.difficulty=this.records.difficulty,this.ai=typeof document<"u"?new Fo:{design:async s=>({cfg:Rc(s),level:null,mode:"local",source:"local"}),coach:async s=>({tips:Oo(s),mode:"local"}),narrative:async s=>({story:Cc(s),mode:"local"}),report:async s=>({text:Ic(s),mode:"local"}),mode:"local"},this.aiLevel=null,this.aiStory=null,this.aiCoach=[],this.shareCode="",this.liveCoach={used:0,lastAt:0},this.coachFollowUp=null,this.demo=!1,this.autopilot=null,this.hitZones=[],this.tiltSum=0,this.tiltSamples=0,this.now=()=>Date.now(),this.state=Ut.MENU,this.levelIndex=0,this.score=0,this.lives=3,this.totalTime=0,this.totalHits=0,this.elapsed=0,this.hits=0,this.gemsGot=0,this.fallProgress=0,this.lastLevelScore=0,this.lastBreakdown=null,this.lastStars=0,this.lastRecord=null,this.wasOnIce=!1,this.warnAt=-1,this.playFlushAccum=0,this.tiltHintDone=!1,this.pendingReason="",this.axis={x:0,z:0},this.loadLevel(0),this.ui.showOverlay("menu",this.menuData()),this.ui.setStatus("\u51C6\u5907\u5F00\u59CB","normal")}get cfg(){return this.cfgOverride||wc(je[this.levelIndex],this.difficulty)}get assistMode(){return!!(ti[this.difficulty]||ti.standard).assist}setDifficulty(t){return!ti[t]||this.state!==Ut.MENU||!this.records.setDifficulty(t)?!1:(this.difficulty=t,this.loadLevel(0),this.ui.showOverlay("menu",this.menuData()),this.ui.setStatus("\u51C6\u5907\u5F00\u59CB","normal"),this.sfx.click(),!0)}menuData(){let t=ti[this.difficulty]||ti.standard;return{levels:je.map((e,i)=>({index:i,name:e.name,subtitle:e.subtitle,unlocked:i<this.records.unlocked,best:this.records.best(e.id,this.difficulty)})),totalStars:this.records.starsForMode(this.difficulty),maxStars:je.length*3,difficulty:this.difficulty,difficultyLabel:t.label,assist:t.assist,persistent:this.records.persistent,clearCount:this.records.clearCount,playTime:this.records.playTime,daily:(()=>{let e=Go();return{date:e.daily,name:e.name,best:this.records.dailyBest(e.daily)}})()}}clearTitle(t){let i=([[9,"\u8FF7\u5BAB\u5927\u5E08"],[7,"\u5F39\u73E0\u4E13\u5BB6"],[5,"\u719F\u7EC3\u63A2\u9669\u5BB6"],[1,"\u521D\u51FA\u8305\u5E90"]].find(([s])=>t>=s)||[0,"\u521D\u51FA\u8305\u5E90"])[1];return this.assistMode?`${i} \xB7 \u8F7B\u677E\u6863`:i}scoreCardText(){let t=this.records.starsForMode(this.difficulty),e=ti[this.difficulty]||ti.standard,i=je.map((s,r)=>{let a=this.records.best(s.id,this.difficulty),o=a?"\u2605".repeat(a.stars)+"\u2606".repeat(3-a.stars):"\u2606\u2606\u2606",l=a?Dc(a.time):"--:--";return`\u7B2C${r+1}\u5173 ${s.name}  ${o}  ${l}`});return["3D \u5F39\u73E0\u8FF7\u5BAB \xB7 \u5168\u901A\u5173",`\u96BE\u5EA6\uFF1A${e.label}${this.assistMode?"\uFF08\u8F85\u52A9\u6863\uFF09":""}\u3000\u79F0\u53F7\uFF1A${this.clearTitle(t)}`,...i,`\u7D2F\u8BA1 ${t} / ${je.length*3} \u2605\u3000\u603B\u5206 ${this.score}\u3000\u603B\u7528\u65F6 ${Dc(this.totalTime)}\u3000\u603B\u78B0\u649E ${this.totalHits}`,(()=>{let s=this.records.dailyBest(Go().daily);return s?`\u6BCF\u65E5\u6311\u6218 ${Go().daily}\u3000\u6700\u4F73 ${Dc(s.time)}\u3000${s.score} \u5206`:""})()].filter(Boolean).join(`
`)}starsFor(t,e,i){return e<=t.par&&i<=t.parHits?3:e<=t.par*1.7&&i<=t.parHits*2?2:1}hintOnce(t,e,i="info"){return this.records.markHint(t)?(this.ui.toast(e,i),!0):!1}flushStats(){this.playFlushAccum=0,this.records.flush()}activeCheckpoint(){let t=null;for(let e of this.level.checkpoints)e.active&&(!t||e.order>t.order)&&(t=e);return t}showAILab(){this.ui.showOverlay("ailab",{mode:this.ai.mode})}async designLevel(t){let e=await this.ai.design(t);return!e||!e.cfg||!e.level?{ok:!1,reason:"\u751F\u6210\u5931\u8D25\uFF0C\u8BF7\u6362\u4E2A\u63CF\u8FF0\u91CD\u8BD5"}:(this.aiLevel=e.cfg,this.aiStory=null,this.aiCoach=[],this.shareCode=Bo(e.cfg),this.score=0,this.lives=3,this.totalTime=0,this.totalHits=0,this.loadConfigured(e.cfg,e.level),this.state=Ut.PLAYING,this.ui.hideOverlay(),this.ui.setStatus("AI \u5B9A\u5236\u5173\u5361","good"),this.ui.toast(`${e.cfg.name} \xB7 ${e.mode==="ai"?"AI \u751F\u6210":"\u672C\u5730\u751F\u6210"}`,"good"),this.sfx.click(),{ok:!0,cfg:e.cfg,mode:e.mode})}loadConfigured(t,e){this.levelIndex=0,this.cfgOverride=t,this.level=e,this.liveCoach={used:0,lastAt:0},this.coachFollowUp=null,this.demo=!1,this.autopilot=null,this.hitZones=[],this.tiltSum=0,this.tiltSamples=0;for(let i of this.level.gems)i.taken=!1;this.marble=new wn(this.level),this.elapsed=0,this.hits=0,this.gemsGot=0,this.fallProgress=0,this.warnAt=-1,this.wasOnIce=!1,this.playFlushAccum=0,this.axis={x:0,z:0},this.view.buildLevel(this.level),this.view.setGemsVisible(this.level),this.view.setCheckpointsActive(this.level),this.ui.setTip(t.tip||e.cfg.tip||"AI \u5B9A\u5236\u8FF7\u5BAB"),this.ui.setPauseLabel(!1),this.ui.setDemoVisible(!!t.aiGenerated),this.ui.clearTrail(),this.ui.flashLevel(),this.updateHUD()}async narrate(t){let e=await this.ai.narrative(t);return!e||!e.story?null:(this.aiStory=e.story,this.state===Ut.MENU&&this.ui.toast(`AI \u4E3B\u9898\uFF1A${e.story.name}`,"info"),{story:e.story,mode:e.mode})}async askCoach(){let t=await this.ai.coach(this.buildTelemetry("clear"));return this.aiCoach=t&&t.tips?t.tips:[],typeof this.ui.setAICoach=="function"&&this.ui.setAICoach(this.aiCoach,t?t.mode:"local"),{tips:this.aiCoach,mode:t?t.mode:"local"}}zoneOf(t,e){let i=this.level,s=t/i.width+.5,r=e/i.depth+.5,a=s<1/3?"\u5DE6":s<2/3?"\u4E2D":"\u53F3",o=r<1/3?"\u4E0A":r<2/3?"\u4E2D":"\u4E0B";return a==="\u4E2D"&&o==="\u4E2D"?"\u6B63\u4E2D\u592E":a==="\u4E2D"?`${o}\u65B9`:o==="\u4E2D"?`${a}\u4FA7`:`${a}${o}\u89D2`}hotZone(){let t=new Map;for(let i of this.hitZones)t.set(i,(t.get(i)||0)+1);let e={zone:"",count:0};for(let[i,s]of t)s>e.count&&(e={zone:i,count:s});return e}noteHit(){this.marble&&(this.hitZones.push(this.zoneOf(this.marble.x,this.marble.z)),this.hitZones.length>24&&this.hitZones.shift())}buildTelemetry(t="clear",e=""){let i=this.hotZone(),s={elapsed:this.elapsed,hits:this.hits,gems:this.gemsGot,gemsTotal:this.level.gems.length,checkpoints:this.level.checkpoints.filter(r=>r.active).length,par:this.cfg.par,parHits:this.cfg.parHits,timeLimit:this.cfg.timeLimit,level:this.cfg.name,phase:t,reason:e,zone:t==="fail"&&this.marble?this.zoneOf(this.marble.x,this.marble.z):"",hotZone:i.zone,hotCount:i.count,tiltLevel:this.tiltSamples?this.tiltSum/this.tiltSamples:0};return this.coachFollowUp&&(s.followUp=this.coachFollowUp,s.improvement=this.improvementOf(this.coachFollowUp,s),this.coachFollowUp=null),s}improvementOf(t,e){if(!t)return null;let i={};if(t.zone&&(i.escapedZone=e.phase!=="fail"||e.zone!==t.zone,i.prevZone=t.zone),t.hotZone){let s=e.hotZone===t.hotZone?e.hotCount:0;i.prevHotZone=t.hotZone,i.prevHotCount=t.hotCount,i.hotCount=s,i.hotImproved=s<t.hotCount}return t.tiltLevel>.6&&e.tiltLevel<t.tiltLevel-.1&&(i.tiltImproved=!0),i}canLiveCoach(){return!(this.liveCoach.used>=2||this.liveCoach.used>0&&this.now()-this.liveCoach.lastAt<8e3)}async askLiveCoach(t){if(!this.canLiveCoach())return null;this.liveCoach.used+=1,this.liveCoach.lastAt=this.now();let e=this.buildTelemetry("fail",t);this.coachFollowUp={zone:e.zone,hotZone:e.hotZone,hotCount:e.hotCount,tiltLevel:e.tiltLevel,reason:t};let i=await this.ai.coach(e);return this.aiCoach=i&&i.tips?i.tips:[],typeof this.ui.setLiveCoach=="function"&&this.ui.setLiveCoach(this.aiCoach,i?i.mode:"local"),{tips:this.aiCoach,mode:i?i.mode:"local"}}startDemo(){if(this.state!==Ut.PLAYING||!this.cfgOverride)return!1;this.marble.reset();for(let t of this.level.gems)t.taken=!1;for(let t of this.level.checkpoints)t.active=!1;return this.elapsed=0,this.hits=0,this.gemsGot=0,this.fallProgress=0,this.warnAt=-1,this.wasOnIce=!1,this.axis={x:0,z:0},this.hitZones=[],this.tiltSum=0,this.tiltSamples=0,this.autopilot=new Ho(this.level),this.demo=!0,this.view.setGemsVisible(this.level),this.view.setCheckpointsActive(this.level),this.ui.clearTrail(),this.ui.setStatus("AI \u6F14\u793A\u4E2D","good"),this.ui.toast("AI \u6F14\u793A\u5F00\u59CB \xB7 \u4EFB\u610F\u64CD\u4F5C\u5373\u53EF\u63A5\u7BA1","info"),this.updateHUD(),!0}stopDemo(t=!1){this.demo&&(this.demo=!1,this.autopilot=null,this.axis={x:0,z:0},this.ui.setStatus("\u6E38\u620F\u4E2D","normal"),t&&this.ui.toast("\u5DF2\u63A5\u7BA1 \xB7 \u63A5\u4E0B\u6765\u770B\u4F60\u7684","info"))}finishDemo(){let t=this.autopilot?this.autopilot.steps:0,e=this.elapsed;this.demo=!1,this.autopilot=null,this.marble.reset();for(let i of this.level.gems)i.taken=!1;for(let i of this.level.checkpoints)i.active=!1;this.elapsed=0,this.hits=0,this.gemsGot=0,this.fallProgress=0,this.warnAt=-1,this.wasOnIce=!1,this.axis={x:0,z:0},this.view.setGemsVisible(this.level),this.view.setCheckpointsActive(this.level),this.ui.clearTrail(),this.ui.setStatus("\u6E38\u620F\u4E2D","normal"),this.ui.toast(`AI \u6F14\u793A\u901A\u5173 \xB7 ${e.toFixed(1)}s \xB7 ${t} \u6B65\u51B3\u7B56 \xB7 \u8F6E\u5230\u4F60\u4E86`,"good"),this.sfx.win(),this.updateHUD()}startDaily(){let t=Go(),e=ms(t);return e.ok?(this.aiLevel=t,this.aiStory=null,this.aiCoach=[],this.shareCode=Bo(t),this.score=0,this.lives=3,this.totalTime=0,this.totalHits=0,this.loadConfigured(t,e.level),this.state=Ut.PLAYING,this.ui.hideOverlay(),this.ui.setStatus("\u6BCF\u65E5\u6311\u6218","good"),this.ui.toast(`\u6BCF\u65E5\u6311\u6218 \xB7 ${t.daily} \xB7 \u5168\u7403\u540C\u56FE`,"good"),this.sfx.click(),!0):(this.ui.toast("\u4ECA\u65E5\u8FF7\u5BAB\u751F\u6210\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5","warn"),!1)}loadShare(t,e,i=""){return!t||!e?!1:(this.aiLevel=t,this.aiStory=null,this.aiCoach=[],this.shareCode=i||Bo(t),this.score=0,this.lives=3,this.totalTime=0,this.totalHits=0,this.loadConfigured(t,e),this.state=Ut.PLAYING,this.ui.hideOverlay(),this.ui.setStatus("\u5206\u4EAB\u5173\u5361","good"),this.ui.toast(`\u5206\u4EAB\u5173\u5361 \xB7 ${t.name}`,"good"),this.sfx.click(),!0)}loadShareFromHash(t){let e=Pc(t);if(!e||e===this.shareCode)return!1;let i=md(e);return i.ok?this.loadShare(i.cfg,i.level,e):(this.state===Ut.MENU&&this.ui.toast(`\u5206\u4EAB\u7801\u65E0\u6548\uFF1A${i.reason}`,"warn"),!1)}async aiReport(){return await this.ai.report({clears:this.records.clearCount,playTime:this.records.playTime,totalHits:this.totalHits,stars:this.records.starsForMode(this.difficulty),level:{name:this.cfg.name,elapsed:this.elapsed,hits:this.hits}})}rewardBreakdown(){let t=this.cfg,e=Math.round(this.elapsed*4),i=this.hits*5,s=this.gemsGot*150,r=t.timeLimit>0?Math.max(0,Math.floor((t.timeLimit-this.elapsed)*2)):0,a=Math.max(120,Math.round(1e3-e-i+s+r));return{timeCost:e,hitCost:i,gemBonus:s,timeBonus:r,total:a}}levelReward(){return this.rewardBreakdown().total}rewardDisplay(){return this.state===Ut.MENU||this.state===Ut.GAMEOVER?{text:"\u672C\u5173 +0",settled:!1}:this.state===Ut.LEVELCLEAR||this.state===Ut.GAMECLEAR?{text:`\u5DF2\u7ED3\u7B97 +${this.lastLevelScore}`,settled:!0}:{text:`\u672C\u5173 +${this.levelReward()}`,settled:!1}}loadLevel(t){this.levelIndex=t,this.cfgOverride=null,this.aiLevel=null,this.aiStory=null,this.aiCoach=[],this.shareCode="",this.liveCoach={used:0,lastAt:0},this.coachFollowUp=null,this.demo=!1,this.autopilot=null,this.hitZones=[],this.tiltSum=0,this.tiltSamples=0,this.level=Ao(this.cfg),this.level.solvable||console.warn("\u5173\u5361\u8FDE\u901A\u6027\u6821\u9A8C\u672A\u901A\u8FC7\uFF0C\u8BF7\u68C0\u67E5\u79CD\u5B50\u914D\u7F6E");for(let e of this.level.gems)e.taken=!1;this.marble=new wn(this.level),this.elapsed=0,this.hits=0,this.gemsGot=0,this.fallProgress=0,this.warnAt=-1,this.wasOnIce=!1,this.axis={x:0,z:0},this.view.buildLevel(this.level),this.view.setGemsVisible(this.level),this.view.setCheckpointsActive(this.level),this.ui.setTip(je[t].tip),this.ui.setPauseLabel(!1),this.ui.setDemoVisible(!1),this.ui.clearTrail(),this.ui.flashLevel(),this.updateHUD()}updateHUD(){let t=this.rewardDisplay();this.ui.setStats({levelIndex:this.levelIndex,totalLevels:je.length,name:this.cfg.name,subtitle:this.cfg.subtitle,elapsed:this.elapsed,timeLimit:this.cfg.timeLimit,score:this.score,rewardText:t.text,rewardSettled:t.settled,hits:this.hits,gemsGot:this.gemsGot,gemsTotal:this.level.gems.length,lives:this.lives,checkpoints:this.level.checkpoints.filter(e=>e.active).length,checkpointsTotal:this.level.checkpoints.length,demo:this.demo})}setAxis(t,e,i=!1){this.axis.x=t,this.axis.z=e,i&&this.demo&&Math.abs(t)+Math.abs(e)>.05&&this.stopDemo(!0),this.state===Ut.PLAYING&&!this.tiltHintDone&&Math.abs(t)+Math.abs(e)>.12&&this.records.markHint("tilt")&&(this.tiltHintDone=!0,this.ui.toast("\u677E\u624B\u540E\u503E\u89D2\u4F1A\u81EA\u52A8\u56DE\u6B63 \xB7 \u6309\u4F4F Shift \u53EF\u7CBE\u7EC6\u5FAE\u8C03","info"))}start(t=0){this.score=0,this.lives=3,this.totalTime=0,this.totalHits=0,this.lastLevelScore=0,this.lastBreakdown=null,this.lastStars=0,this.lastRecord=null,this.loadLevel(t),this.state=Ut.PLAYING,this.ui.hideOverlay(),this.ui.setStatus("\u6E38\u620F\u4E2D","normal"),this.ui.toast(`\u7B2C ${t+1} \u5173 \xB7 ${this.cfg.name}`,"info"),this.sfx.click()}startFrom(t){let e=Number(t);if(!(!Number.isInteger(e)||e<0||e>=je.length)){if(e>=this.records.unlocked){this.ui.toast("\u8BE5\u5173\u5361\u5C1A\u672A\u89E3\u9501","warn");return}this.start(e)}}restartLevel(){this.state===Ut.MENU||this.state===Ut.GAMECLEAR||this.state===Ut.GAMEOVER||(this.loadLevel(this.levelIndex),this.state=Ut.PLAYING,this.ui.hideOverlay(),this.ui.setStatus("\u6E38\u620F\u4E2D","normal"),this.ui.toast("\u672C\u5173\u5DF2\u91CD\u5F00 \xB7 \u56DE\u5230\u8D77\u70B9","info"),this.sfx.click())}retry(){let t=this.activeCheckpoint();t?(this.marble.respawn(t),this.fallProgress=0,this.warnAt=-1,this.wasOnIce=!1,this.axis={x:0,z:0},this.ui.clearTrail(),this.ui.toast("\u4ECE\u68C0\u67E5\u70B9\u590D\u6D3B","info")):(this.loadLevel(this.levelIndex),this.ui.toast("\u518D\u8BD5\u4E00\u6B21","info")),this.state=Ut.PLAYING,this.ui.hideOverlay(),this.ui.setStatus("\u6E38\u620F\u4E2D","normal"),this.sfx.click(),this.updateHUD()}nextLevel(){this.loadLevel(this.levelIndex+1),this.state=Ut.PLAYING,this.ui.hideOverlay(),this.ui.setStatus("\u6E38\u620F\u4E2D","normal"),this.ui.toast(`\u7B2C ${this.levelIndex+1} \u5173 \xB7 ${this.cfg.name}`,"info"),this.sfx.click()}togglePause(){this.state===Ut.PLAYING?(this.state=Ut.PAUSED,this.flushStats(),this.ui.setPauseLabel(!0),this.ui.setStatus("\u5DF2\u6682\u505C","warn"),this.ui.showOverlay("paused",{levelIndex:this.levelIndex,name:this.cfg.name,elapsed:this.elapsed,score:this.score,reward:this.levelReward(),hits:this.hits,gemsGot:this.gemsGot,gemsTotal:this.level.gems.length,lives:this.lives}),this.sfx.click()):this.state===Ut.PAUSED&&this.resume()}resume(){this.state===Ut.PAUSED&&(this.state=Ut.PLAYING,this.ui.hideOverlay(),this.ui.setPauseLabel(!1),this.ui.setStatus("\u6E38\u620F\u4E2D","normal"),this.sfx.click())}advance(){if(!(this.state===Ut.MENU&&this.ui.overlayType==="ailab"))switch(this.state){case Ut.MENU:this.start();break;case Ut.PAUSED:this.resume();break;case Ut.LEVELCLEAR:this.nextLevel();break;case Ut.FAILED:this.retry();break;case Ut.GAMECLEAR:case Ut.GAMEOVER:this.start();break;default:break}}toMenu(){this.flushStats(),this.score=0,this.lives=3,this.totalTime=0,this.totalHits=0,this.lastLevelScore=0,this.lastBreakdown=null,this.state=Ut.MENU,this.loadLevel(0),this.ui.showOverlay("menu",this.menuData()),this.ui.setStatus("\u51C6\u5907\u5F00\u59CB","normal"),this.sfx.click()}beginFall(t){this.state===Ut.PLAYING&&(this.pendingReason=t,this.state=Ut.FAILING,this.fallProgress=0,this.axis={x:0,z:0},this.marble.setAxis(0,0,this.cfg.tiltMax),this.ui.setStatus("\u5F39\u73E0\u5760\u843D","danger"),this.sfx.fall())}fail(t){if(this.state===Ut.FAILED||this.state===Ut.GAMEOVER)return;this.lives-=1,this.flushStats(),this.sfx.fail(),this.ui.setStatus("\u5931\u8D25","danger");let e=this.activeCheckpoint();if(this.lives<=0)this.state=Ut.GAMEOVER,this.ui.showOverlay("gameover",{levelIndex:this.levelIndex,name:this.cfg.name,score:this.score,totalTime:this.totalTime,totalHits:this.totalHits});else{this.state=Ut.FAILED;let i=this.canLiveCoach();this.ui.showOverlay("failed",{reason:t,lives:this.lives,elapsed:this.elapsed,score:this.score,reward:this.levelReward(),hasCheckpoint:!!e,checkpointName:e?`\u68C0\u67E5\u70B9 ${e.order+1}`:"",coach:i}),i&&this.askLiveCoach(t)}this.updateHUD()}clearLevel(){this.lastBreakdown=this.rewardBreakdown(),this.lastLevelScore=this.lastBreakdown.total,this.score+=this.lastLevelScore,this.ui.setStatus("\u901A\u5173","good");let t=this.starsFor(this.cfg,this.elapsed,this.hits),e=!!this.cfgOverride;this.records.addClear();let i=e?null:this.records.submit(this.cfg.id,{time:this.elapsed,score:this.lastLevelScore,stars:t,mode:this.difficulty});e||this.records.unlock(Math.min(je.length,this.levelIndex+2));let s=this.cfg.daily||"",r=s?this.records.submitDaily(s,{time:this.elapsed,score:this.lastLevelScore,stars:t}):null;this.flushStats(),this.lastStars=t,this.lastRecord=i,this.view.burstGoal();let a={levelIndex:this.levelIndex,name:this.cfg.name,elapsed:this.elapsed,hits:this.hits,gemsGot:this.gemsGot,gemsTotal:this.level.gems.length,levelScore:this.lastLevelScore,score:this.score,b:this.lastBreakdown,stars:t,rec:i,best:e?null:this.records.best(this.cfg.id,this.difficulty),totalStars:this.records.starsForMode(this.difficulty),maxStars:je.length*3,difficulty:this.difficulty,difficultyLabel:ti[this.difficulty].label,assist:this.assistMode,isAI:!!this.aiLevel,custom:e,daily:s,dailyRec:r,dailyBest:s?this.records.dailyBest(s):null,shareCode:this.shareCode,aiPraise:this.aiStory?this.aiStory.praise:"",levels:je.map((l,c)=>({index:c,name:l.name,best:this.records.best(l.id,this.difficulty)}))},o=this.levelIndex+1>=je.length;this.state=o?Ut.GAMECLEAR:Ut.LEVELCLEAR,this.askCoach(),o?(this.sfx.clearAll(),this.ui.showOverlay("gameclear",{...a,totalTime:this.totalTime,totalHits:this.totalHits,lives:this.lives,title:this.clearTitle(a.totalStars),cardText:this.scoreCardText()})):(this.sfx.win(),this.ui.showOverlay("levelclear",a)),this.updateHUD()}handleEvents(t){if(t.hits>0&&(this.hits+=t.hits,this.totalHits+=t.hits,this.noteHit(),this.sfx.bump(t.hitSpeed),this.ui.shake(t.hitSpeed)),t.gems.length&&(this.gemsGot+=t.gems.length,this.sfx.pickup(),this.view.setGemsVisible(this.level)),t.checkpoint>=0&&(this.sfx.checkpoint(),this.view.setCheckpointsActive(this.level),this.hintOnce("checkpoint","\u68C0\u67E5\u70B9\u5DF2\u6FC0\u6D3B \xB7 \u5931\u8D25\u540E\u53EF\u4ECE\u8FD9\u91CC\u590D\u6D3B\uFF0C\u8FDB\u5EA6\u4F1A\u4FDD\u7559","good")),t.boost>=0&&(this.sfx.boost(),this.hintOnce("boost","\u52A0\u901F\u5E26 \xB7 \u6CBF\u6A59\u8272\u7BAD\u5934\u65B9\u5411\u7ED9\u5F39\u73E0\u4E00\u6B21\u63A8\u529B\uFF0C\u6CE8\u610F\u63D0\u524D\u56DE\u6B63","info")),t.ice&&!this.wasOnIce&&(this.sfx.ice(),this.hintOnce("ice","\u51B0\u9762 \xB7 \u6469\u64E6\u5927\u5E45\u964D\u4F4E\uFF0C\u60EF\u6027\u4F1A\u88AB\u653E\u5927\uFF0C\u6536\u5C0F\u503E\u89D2\u63D0\u524D\u51CF\u901F","info")),this.wasOnIce=t.ice,t.fell>=0){this.beginFall("\u6389\u8FDB\u4E86\u7A7A\u6D1E");return}if(t.hazard>=0){this.beginFall("\u89E6\u78B0\u7194\u5CA9\u533A");return}if(t.gems.length&&this.ui.toast(`\u5B9D\u77F3 +${t.gems.length*150}`,"good"),t.goal){if(this.demo){this.finishDemo();return}this.clearLevel()}}update(t){if(this.state===Ut.PLAYING){this.elapsed+=t,this.totalTime+=t,this.demo||(this.records.addPlayTime(t),this.playFlushAccum+=t,this.playFlushAccum>=5&&this.flushStats());let e=this.cfg.timeLimit;if(e>0){let s=e-this.elapsed;if(s<=0){if(this.demo){this.stopDemo(),this.ui.toast("AI \u6F14\u793A\u8D85\u65F6\uFF0C\u5DF2\u4EA4\u8FD8\u63A7\u5236\u6743","warn");return}this.fail("\u65F6\u95F4\u8017\u5C3D");return}let r=Math.ceil(s);r<=10&&r!==this.warnAt&&(this.warnAt=r,this.sfx.warn())}if(this.demo&&this.autopilot){let s=this.autopilot.nextAxis(this.marble);this.axis.x=s.x,this.axis.z=s.z,this.autopilot.steps>18e3&&this.stopDemo()}this.marble.setAxis(this.axis.x,this.axis.z,this.cfg.tiltMax),this.demo||(this.tiltSum+=Math.min(1,Math.hypot(this.axis.x,this.axis.z)),this.tiltSamples+=1);let i=this.marble.step(t,this.cfg);this.handleEvents(i),(this.state===Ut.PLAYING||this.state===Ut.FAILING)&&this.updateHUD()}else this.state===Ut.FAILING&&(this.fallProgress=Math.min(1,this.fallProgress+t*1.5),this.fallProgress>=1&&this.fail(this.pendingReason))}};var Nc=["high","medium","low"],Wo=["auto","high","medium","low"],Uc={auto:"\u753B\u8D28 \u81EA\u52A8",high:"\u753B\u8D28 \u9AD8",medium:"\u753B\u8D28 \u4E2D",low:"\u753B\u8D28 \u4F4E"},gd=30,nx=45,sx=2500;function rx(n,t){let e=Math.max(0,Nc.indexOf(n));return t<25?"low":t<42?Nc[Math.min(2,e+1)]:t>55?Nc[Math.max(0,e-1)]:n}var Xo=class{constructor(t,e=()=>{}){this.view=t,this.onChange=e,this.mode="auto",this.level="high",this.samples=[],this.lastChange=-1/0,this.changes=0,this.view.setQuality("high"),this.onChange(this.mode,this.level)}label(){return Uc[this.mode]}setMode(t){return Wo.includes(t)?(this.mode=t,this.samples=[],this.lastChange=-1/0,t!=="auto"&&(this.level=t,this.view.setQuality(t)),this.onChange(this.mode,this.level),this.label()):this.label()}cycle(){let t=Wo.indexOf(this.mode);return this.setMode(Wo[(t+1)%Wo.length])}sample(t,e){if(this.mode!=="auto"||!(t>0)||(this.samples.push(t),this.samples.length>nx&&this.samples.shift(),this.samples.length<gd)||e-this.lastChange<sx)return!1;let i=this.samples.reduce((a,o)=>a+o,0)/this.samples.length,s=1/Math.max(i,1e-6),r=rx(this.level,s);return r===this.level?!1:(this.level=r,this.view.setQuality(r),this.lastChange=e,this.changes+=1,this.samples=[],this.onChange(this.mode,this.level),!0)}probe(t,e){return this.mode!=="auto"?!1:(this.samples=new Array(gd).fill(1/Math.max(t,1e-6)),this.sample(1/Math.max(t,1e-6),e))}};var xi=document.getElementById("scene");function _d(n,t){let e=document.getElementById("modal"),i=document.getElementById("overlay");e&&(e.innerHTML=`<div class="modal-tag danger">GRAPHICS</div>
      <h1>${n}</h1>
      <p class="modal-lead">${t}</p>
      <p class="modal-foot">\u672C\u6E38\u620F\u9700\u8981\u652F\u6301 WebGL2 \u7684\u6D4F\u89C8\u5668\uFF1B\u8BF7\u66F4\u65B0\u6D4F\u89C8\u5668\u6216\u5F00\u542F\u786C\u4EF6\u52A0\u901F\u540E\u91CD\u8BD5\u3002</p>`),i&&i.classList.add("visible");let s=document.getElementById("statusPill");s&&(s.textContent="\u56FE\u5F62\u4E0D\u53EF\u7528",s.dataset.tone="danger")}function ax(n){let t=new Po,e=new Lo,i=new Vo(n,t,e),s=new Xo(n,U=>t.setQualityLabel(Uc[U])),r=new Set,a=new Set,o=new Set(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","KeyW","KeyA","KeyS","KeyD"]),l=new Set(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"]),c=new Set(["ShiftLeft","ShiftRight"]),h=new Set(["Space","Enter"]),f=28,u=null,d=null,g=!1,x=null,p=44;function m(){return r.has("ShiftLeft")||r.has("ShiftRight")}function y(U){if(!U||typeof U.tagName!="string")return!1;let Y=U.tagName;return Y==="INPUT"||Y==="TEXTAREA"||Y==="SELECT"||Y==="OPTION"?!0:U.isContentEditable===!0}function E(U){if(!U||typeof U.tagName!="string")return!1;let Y=U.tagName;return Y==="BUTTON"||Y==="A"||Y==="SUMMARY"}function S(){let U=0,Y=0;return(r.has("ArrowLeft")||r.has("KeyA"))&&(U-=1),(r.has("ArrowRight")||r.has("KeyD"))&&(U+=1),(r.has("ArrowUp")||r.has("KeyW"))&&(Y-=1),(r.has("ArrowDown")||r.has("KeyS"))&&(Y+=1),{x:U,z:Y}}let A=U=>Math.max(-1,Math.min(1,U/f));function T(){if(!d||!d.active)return null;let U=d.gamma||0,Y=(d.beta||0)-30,et=screen.orientation&&screen.orientation.angle||window.orientation||0,yt=U,$t=Y;return et===90?(yt=Y,$t=-U):et===-90||et===270?(yt=-Y,$t=U):et===180&&(yt=-U,$t=-Y),{x:A(yt),z:A($t)}}async function _(){if(d){window.removeEventListener("deviceorientation",d.handler),clearTimeout(d.timer),d=null,t.setMotionLabel("off"),t.toast("\u4F53\u611F\u503E\u659C\u5DF2\u5173\u95ED","info");return}let U=window.DeviceOrientationEvent;if(!U){t.setMotionLabel("off"),t.toast("\u6B64\u8BBE\u5907\u4E0D\u652F\u6301\u9640\u87BA\u4EEA\uFF0C\u5DF2\u4FDD\u6301\u952E\u9F20\u64CD\u4F5C","warn");return}try{if(typeof U.requestPermission=="function"&&await U.requestPermission()!=="granted"){t.toast("\u4F53\u611F\u6743\u9650\u672A\u6388\u4E88","warn");return}}catch{t.toast("\u4F53\u611F\u6743\u9650\u8BF7\u6C42\u5931\u8D25\uFF0C\u5DF2\u4FDD\u6301\u952E\u9F20\u64CD\u4F5C","warn");return}let Y={beta:0,gamma:0,active:!1,handler:null,timer:0};Y.handler=et=>{et.beta==null&&et.gamma==null||(Y.beta=et.beta||0,Y.gamma=et.gamma||0,Y.active=!0,clearTimeout(Y.timer))},window.addEventListener("deviceorientation",Y.handler),Y.timer=setTimeout(()=>{Y.active||(window.removeEventListener("deviceorientation",Y.handler),d=null,t.setMotionLabel("off"),t.toast("\u672A\u68C0\u6D4B\u5230\u9640\u87BA\u4EEA\u6570\u636E\uFF0C\u5DF2\u81EA\u52A8\u5173\u95ED\u4F53\u611F","warn"))},2e3),d=Y,t.setMotionLabel("on"),t.toast("\u4F53\u611F\u503E\u659C\u5DF2\u5F00\u542F \xB7 \u503E\u659C\u8BBE\u5907\u63A7\u5236\u8FF7\u5BAB","info")}function b(){let U=m(),Y=U?.42:1,et=S(),yt=!!(u&&u.mode==="tilt"),$t=!!x&&(x.dx||x.dz),At=$t||yt||et.x||et.z?null:T();$t?i.setAxis(x.dx*Y,x.dz*Y,!0):At?i.setAxis(At.x*Y,At.z*Y,!0):yt?i.setAxis(Math.max(-1,Math.min(1,u.dx/105))*Y,Math.max(-1,Math.min(1,u.dy/105))*Y,!0):i.setAxis(et.x*Y,et.z*Y,!0),t.setFineMode(U),t.setDifficultyLabel(`\u96BE\u5EA6 ${Uo(i.difficulty)}`,i.state!=="menu")}function L(U){U&&U.preventDefault&&U.preventDefault(),g=!0,(i.state==="playing"||i.state==="failing")&&i.togglePause(),t.setStatus("\u56FE\u5F62\u4E0A\u4E0B\u6587\u4E22\u5931","danger"),t.toast("\u56FE\u5F62\u4E0A\u4E0B\u6587\u4E22\u5931\uFF0C\u7B49\u5F85\u6062\u590D\u2026","warn")}function C(){g=!1,n.onContextRestored(),n.resize(),t.setStatus("\u5DF2\u6062\u590D","good"),t.toast("\u56FE\u5F62\u4E0A\u4E0B\u6587\u5DF2\u6062\u590D","good")}xi.addEventListener("webglcontextlost",L,!1),xi.addEventListener("webglcontextrestored",C,!1),window.addEventListener("keydown",U=>{if(y(U.target)){r.size&&r.clear(),e.ensure();return}let Y=h.has(U.code)&&E(U.target);if(!Y&&l.has(U.code)&&U.preventDefault(),e.ensure(),(o.has(U.code)||c.has(U.code))&&r.add(U.code),!(U.repeat||Y))switch(U.code){case"KeyP":case"Escape":i.togglePause();break;case"KeyR":i.restartLevel();break;case"KeyM":t.setMuteLabel(e.toggleMute());break;case"Space":case"Enter":i.advance();break;default:break}}),window.addEventListener("keyup",U=>r.delete(U.code)),xi.addEventListener("pointerdown",U=>{e.ensure(),U.pointerType==="touch"&&a.add(U.pointerId),u={mode:U.button===2||U.pointerType==="touch"&&a.size>=2?"orbit":"tilt",sx:U.clientX,sy:U.clientY,lx:U.clientX,ly:U.clientY,dx:0,dy:0};try{xi.setPointerCapture(U.pointerId)}catch{}}),xi.addEventListener("pointermove",U=>{u&&(u.mode==="orbit"?n.orbit(U.clientX-u.lx,U.clientY-u.ly):(u.dx=U.clientX-u.sx,u.dy=U.clientY-u.sy),u.lx=U.clientX,u.ly=U.clientY)});let N=U=>{U&&U.pointerType==="touch"&&a.delete(U.pointerId),u=null};xi.addEventListener("pointerup",N),xi.addEventListener("pointercancel",N),xi.addEventListener("lostpointercapture",N),xi.addEventListener("contextmenu",U=>U.preventDefault()),xi.addEventListener("wheel",U=>{U.preventDefault(),n.zoomBy(Math.sign(U.deltaY)*.09)},{passive:!1});let B=document.getElementById("joystick"),q=U=>{if(!x)return;let Y=B.getBoundingClientRect(),et=(U.clientX-(Y.left+Y.width/2))/p,yt=(U.clientY-(Y.top+Y.height/2))/p,$t=Math.hypot(et,yt),At=$t>1?1/$t:1;x.dx=et*At,x.dz=yt*At,t.setJoystick(x.dx,x.dz)},R=U=>{!x||U&&x.id!==U.pointerId||(x=null,t.setJoystick(0,0))};B.addEventListener("pointerdown",U=>{U.preventDefault(),e.ensure(),x={id:U.pointerId,dx:0,dz:0};try{B.setPointerCapture(U.pointerId)}catch{}q(U)}),B.addEventListener("pointermove",U=>{x&&x.id===U.pointerId&&q(U)}),B.addEventListener("pointerup",R),B.addEventListener("pointercancel",R),B.addEventListener("lostpointercapture",R),window.addEventListener("blur",()=>{r.clear(),a.clear(),u=null,i.state==="playing"&&i.togglePause()}),document.addEventListener("visibilitychange",()=>{document.hidden&&i.state==="playing"&&i.togglePause()}),window.addEventListener("resize",()=>n.resize()),document.getElementById("btnPause").addEventListener("click",()=>i.togglePause()),document.getElementById("btnRestart").addEventListener("click",()=>i.restartLevel()),document.getElementById("btnDemo").addEventListener("click",()=>{e.ensure(),i.demo?i.stopDemo(!0):i.startDemo()}),document.getElementById("btnMute").addEventListener("click",()=>t.setMuteLabel(e.toggleMute())),document.getElementById("btnTilt").addEventListener("click",()=>{e.ensure(),_()}),document.getElementById("btnQuality").addEventListener("click",()=>{e.ensure();let U=s.cycle();t.toast(U,"info"),e.click()}),document.getElementById("btnDifficulty").addEventListener("click",()=>{e.ensure();let U=i.difficulty,Y=Tc(U);i.setDifficulty(Y)?t.toast(`\u96BE\u5EA6 \xB7 ${Uo(Y)}`,"info"):t.toast("\u96BE\u5EA6\u53EA\u80FD\u5728\u4E3B\u83DC\u5355\u5207\u6362","warn")}),document.getElementById("mapToggle").addEventListener("click",()=>t.toggleMap());async function z(){let U=document.getElementById("scoreCard"),Y=U?U.value:i.scoreCardText(),et=!1;try{navigator.clipboard&&navigator.clipboard.writeText&&(await navigator.clipboard.writeText(Y),et=!0)}catch{}if(!et&&U)try{U.select(),et=document.execCommand("copy")}catch{et=!1}return t.toast(et?"\u6210\u7EE9\u5361\u5DF2\u590D\u5236":"\u8BF7\u624B\u52A8\u9009\u62E9\u6210\u7EE9\u5361\u6587\u672C\u590D\u5236",et?"good":"warn"),et}async function V(){let U=document.getElementById("aiPrompt"),Y=document.getElementById("aiStatus"),et=U?U.value.trim():"";if(!et){Y&&(Y.textContent="\u8BF7\u5148\u63CF\u8FF0\u4F60\u60F3\u8981\u7684\u8FF7\u5BAB\u3002");return}Y&&(Y.textContent="AI \u6B63\u5728\u751F\u6210\u5E76\u6821\u9A8C\u8FF7\u5BAB\u2026");let yt=await i.designLevel(et);!yt.ok&&Y&&(Y.textContent=yt.reason)}async function X(){let U=document.getElementById("aiTheme"),Y=document.getElementById("aiStory"),et=U?U.value.trim():"";if(!et){Y&&(Y.textContent="\u8BF7\u5148\u8F93\u5165\u4E00\u4E2A\u4E3B\u9898\u3002");return}Y&&(Y.textContent="\u751F\u6210\u4E2D\u2026");let yt=await i.narrate(et);Y&&yt&&(Y.innerHTML=`${yt.story.name} \xB7 ${yt.story.subtitle}<br>${yt.story.tip}<br><small>${yt.mode==="ai"?"\u9B54\u642D AI":"\u672C\u5730\u5F15\u64CE"}</small>`)}async function nt(){let U=document.getElementById("aiReport");U&&(U.value="\u751F\u6210\u4E2D\u2026");let Y=await i.aiReport();U&&(U.value=Y.text)}function P(){return i.shareCode?`${location.href.split("#")[0]}#l=${i.shareCode}`:""}async function W(){let U=P();if(!U)return t.toast("\u5F53\u524D\u5173\u5361\u6CA1\u6709\u5206\u4EAB\u7801","warn"),!1;let Y=!1;try{navigator.clipboard&&navigator.clipboard.writeText&&(await navigator.clipboard.writeText(U),Y=!0)}catch{}return t.toast(Y?"\u5206\u4EAB\u94FE\u63A5\u5DF2\u590D\u5236":"\u590D\u5236\u88AB\u62D2\u7EDD\uFF0C\u8BF7\u624B\u52A8\u590D\u5236\u5730\u5740\u680F #l= \u540E\u7684\u77ED\u7801",Y?"good":"warn"),Y}let J={start:()=>i.start(),"ai-lab":()=>i.showAILab(),"ai-design":()=>V(),"ai-narrative":()=>X(),"ai-report":()=>nt(),level:U=>i.startFrom(U.level),daily:()=>i.startDaily(),demo:()=>{(i.state==="levelclear"||i.state==="gameclear")&&(i.state="playing",i.ui.hideOverlay()),i.startDemo()},difficulty:U=>{i.setDifficulty(U.mode)&&t.toast(`\u96BE\u5EA6 \xB7 ${Uo(U.mode)}`,"info")},resume:()=>i.resume(),restart:()=>i.restartLevel(),retry:()=>i.retry(),next:()=>i.nextLevel(),again:()=>i.start(),"copy-card":()=>z(),"copy-share":()=>W(),menu:()=>i.toMenu()};document.getElementById("overlay").addEventListener("click",U=>{let Y=U.target.closest("[data-action]");if(!Y)return;e.ensure();let et=J[Y.dataset.action];et&&et(Y.dataset)}),document.getElementById("overlay").addEventListener("keydown",U=>{y(U.target)&&(U.code!=="Enter"||!(U.ctrlKey||U.metaKey)||(U.preventDefault(),U.target.id==="aiPrompt"?V():U.target.id==="aiTheme"&&X()))});let dt=new ko,Tt=performance.now(),K=0;function mt(U){let Y=Math.max(0,(U-Tt)/1e3);Tt=U;let et=Math.min(zo,Y);b(),s.sample(Y,U);let yt=i.state==="playing"||i.state==="failing";yt||dt.reset();let $t=yt?dt.advance(Y):0;for(let At=0;At<$t;At++)i.update(ln);i.state==="playing"&&t.pushTrail(i.marble.x,i.marble.z),g||n.update(et,i.marble,{fall:i.fallProgress}),t.drawTilt(i.marble.tiltX,i.marble.tiltZ,i.cfg.tiltMax,m()),K%2===0&&t.drawMinimap(i.level,i.marble,i.elapsed),K+=1,requestAnimationFrame(mt)}t.setMuteLabel(!1),t.setMotionLabel("off"),n.resize(),window.__marbleMaze={game:i,view:n,ui:t,clock:dt,quality:s,motionAxis:T,toggleMotion:_,handleContextLost:L,handleContextRestored:C,showUnsupported:_d,cycleDifficulty:Tc,copyScoreCard:z,copyShareLink:W,shareLink:P,startDemo:()=>i.startDemo(),stopDemo:()=>i.stopDemo(!0),setJoystick:(U,Y)=>{let et=Math.hypot(U,Y),yt=et>1?1/et:1;x={id:-1,dx:U*yt,dz:Y*yt},t.setJoystick(x.dx,x.dz)},clearJoystick:()=>{x=null,t.setJoystick(0,0)},joystickAxis:()=>x?{x:x.dx,z:x.dz}:null,isContextLost:()=>g},location.hash&&i.loadShareFromHash(location.hash),window.addEventListener("hashchange",()=>{i.state==="menu"&&i.loadShareFromHash(location.hash)}),requestAnimationFrame(mt)}try{ax(new Co(xi))}catch(n){_d("\u56FE\u5F62\u521D\u59CB\u5316\u5931\u8D25",String(n&&n.message||n||"\u672A\u77E5\u9519\u8BEF"))}})();
