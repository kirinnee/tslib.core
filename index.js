!function(t,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var n=r();for(var e in n)("object"==typeof exports?exports:t)[e]=n[e]}}("undefined"!=typeof window?window:this,function(){return function(n){var e={};function o(t){if(e[t])return e[t].exports;var r=e[t]={i:t,l:!1,exports:{}};return n[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=n,o.c=e,o.d=function(t,r,n){o.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(r,t){if(1&t&&(r=o(r)),8&t)return r;if(4&t&&"object"==typeof r&&r&&r.__esModule)return r;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:r}),2&t&&"string"!=typeof r)for(var e in r)o.d(n,e,function(t){return r[t]}.bind(null,e));return n},o.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(r,"a",r),r},o.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},o.p="",o(o.s=0)}([function(t,r,n){"use strict";n.r(r);var e=function(){function t(){this.m=" _-,;:!?.'\"()[]{ }@*/&#%`^+<=>|~$0123456789aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ"}return t.prototype.AssertExtend=function(){this.IsExtended||this.t("Core needs to be extended")},Object.defineProperty(t.prototype,"IsExtended",{get:function(){return null!=Map.prototype.All},enumerable:!0,configurable:!0}),t.prototype.ExtendPrimitives=function(){var i=this;String.prototype.Match=function(t){return this.match(t)||[]},String.prototype.ReplaceAll=function(t,r){return this.replace(new RegExp(t,"g"),r)},String.prototype.IsEmpty=function(){return 0===this.trim().length},String.prototype.Starts=function(t){if(this.IsEmpty()||t.IsEmpty())return!1;var r=t.trim();return this.trim().Take(r.length)===r},String.prototype.Ends=function(t){if(this.IsEmpty()||t.IsEmpty())return!1;var r=t.trim();return this.trim().Last(r.length)===r},String.prototype.CharAt=function(t){return(-1<t&&t>=this.length||t<0&&-t>this.length)&&i.t("Cannot exceed length of string"),this.charAt(t+(t<0?this.length:0))},String.prototype.RemoveCharAt=function(t){var r=t+(t<0?this.length:0);return(-1<t&&t>=this.length||-t>=this.length+1&&t<0)&&i.t("Cannot exceed length of string"),this.Take(r)+this.Skip(r+1)},String.prototype.Remove=function(t){return this.split(t).join("")},String.prototype.Without=function(t){var r=this;return t.Each(function(t){return r=r.Remove(t)}),r},String.prototype.Skip=function(t){return this.substr(t)},String.prototype.Take=function(t){return null==t?0===this.length?"":this.charAt(0):this.substr(0,t)},String.prototype.Last=function(t){return null==t?0===this.length?"":this.charAt(this.length-1):this.substr(this.length-t)},String.prototype.Omit=function(t){return this.substr(0,this.length-t)},String.prototype.Repeat=function(t){return t<0&&i.t("Count cannot be negative"),this.repeat(t)},String.prototype.Count=function(t){var r=new RegExp(t,"gi");return this.Match(r).length},String.prototype.Capitalize=function(){return this.Take(1).toUpperCase()+this.Skip(1)},String.prototype.CapitalizeWords=function(){return this.split(" ").Map(function(t){return t.Capitalize()}).join(" ")},String.prototype.IsAlphanumeric=function(){return!this.IsEmpty()&&null==this.split("").Map(function(t){return t.charCodeAt(0)}).When(function(t){return!(47<t&&t<58||64<t&&t<91||96<t&&t<123)},function(){return!1})},String.prototype.IsHexadecimal=function(){return!this.IsEmpty()&&parseInt(this.toLowerCase(),16).toString(16)===this.toLowerCase()},String.prototype.LineBreak=function(){return this.ReplaceAll("\r\n","\n").ReplaceAll("\r","\n").split("\n")},Number.prototype.Odd=function(){return!(!this.Int()||0===this)&&this%2!=0},Number.prototype.Even=function(){return!(!this.Int()||0===this)&&this%2==0},Number.prototype.Int=function(){return!!i.IsNumber(this)&&Math.abs(this%1)<1e-15},Number.prototype.Finite=function(){return!!i.IsAnyNumber(this)&&(!this.NaN()&&isFinite(this))},Number.prototype.Infinite=function(){return!!i.IsAnyNumber(this)&&(!this.NaN()&&!isFinite(this))},Number.prototype.NaN=function(){return isNaN(this)},Number.prototype.RoundOff=function(){i.A(this);var t=this<0?-1:1;return t*Math.round(t*this)},Number.prototype.Ceil=function(){i.A(this);var t=this<0?-1:1;return t*Math.ceil(t*this)},Number.prototype.Floor=function(){i.A(this);var t=this<0?-1:1;return t*Math.floor(t*this)},Number.prototype.Abs=function(){return i.A(this),Math.abs(this)},Number.prototype.Root=function(){return i.A(this),this<0&&i.t("Can't root negative"),Math.sqrt(this)},Number.prototype.ToInt=function(){return i.i(this)},Number.prototype.ToFloat=function(){return i.f(this)},String.prototype.ToInt=function(){return i.i(this)},String.prototype.ToFloat=function(){return i.f(this)},Number.prototype.AtMax=function(t){return i.A(this),Math.min(this,t)},Number.prototype.AtMin=function(t){return i.A(this),Math.max(this,t)},Number.prototype.Clamp=function(t,r){return i.A(this),this.AtMax(t.AtMin(r)).AtMin(t.AtMax(r))},Number.prototype.RandomTo=function(t,r){return i.A(this),r?(this+Math.random()*(t-this+1)).Floor():(this+Math.random()*(t-this+1)).AtMax(t)},Number.prototype.RandomFor=function(t,r){return this.RandomTo(this+t-1,r)},Array.prototype.Add=function(t){return this.concat(i.WrapArray(t))},Array.prototype.Flatten=function(){return 0===this.length?[]:this.Reduce(function(t,r){return t.concat(r)})},Array.prototype.Merge=function(n){if(this.length!==n.length)throw"Array has to be same length";var e=new Map;return this.Each(function(t,r){return e.set(t,n[r])}),e},Array.prototype.AsKey=function(n){var e=new Map;return this.Each(function(t,r){return e.set(t,n(t,r))}),e},Array.prototype.AsValue=function(n){var e=new Map;return this.Each(function(t,r){return e.set(n(t,r),t)}),e},Array.prototype.TrimAll=function(){return this.Map(function(t){return t.trim()})},Array.prototype.Sort=function(n,e){var t=this.slice();null==e&&(n.IsNum&&!i.IsNumberArray(t)||!i.IsStringArray(t)&&!n.IsNum)&&i.t("Please provide scoring strategy"),null==e&&(e=function(t){return t});var o=n.Reverse?-1:1;return t.sort(function(t,r){return(n.IsNum?e(t)>e(r)?1:-1:i.lc(e(t),e(r)))*o}),t},Array.prototype.Reverse=function(){var r=[];return this.Each(function(t){return r.push(t)},!0),r},Array.prototype.Has=function(r,n){return void 0===n&&(n=!1),this.When(function(t){return i.Eq(t,r,n)},function(){return!0})||!1},Array.prototype.Where=function(t){var r=[];return this.When(t,function(t){r.push(t)},!1),r},Array.prototype.Map=function(n){var e=[];return this.Each(function(t,r){return e.push(n(t,r))}),e},Array.prototype.Each=function(t,r){if(void 0===r&&(r=!1),!r){for(var n=0;n<this.length;n++)t(this[n],n);return this}for(n=this.length-1;0<=n;n--)t(this[n],n);return this},Array.prototype.RemoveValue=function(r,n){return void 0===n&&(n=!1),this.Where(function(t){return!i.Eq(t,r,n)})},Array.prototype.Without=function(r,n){return void 0===n&&(n=!1),this.Where(function(t){return!r.Has(t,n)})},Array.prototype.WithoutIndex=function(n){return this.Where(function(t,r){return!n.Has(r)})},Array.prototype.Fill=function(t,r){for(var n=this.slice(),e=0;e<t;e++)n.push(r(e));return n},Array.prototype.RemoveIndex=function(n){return this.Where(function(t,r){return r!==n})},Array.prototype.Take=function(t){return null==t?0===this.length?null:this[0]:this.slice(0,t)},Array.prototype.TakeWhile=function(t){var r=[];return this.When(t,function(t){r.push(t)},!0),r},Array.prototype.Skip=function(t){return this.slice(t)},Array.prototype.SkipWhile=function(t){var r=0;return this.When(t,function(){r++},!0),this.Skip(r)},Array.prototype.Omit=function(t){return this.slice(0,-t)},Array.prototype.OmitWhile=function(t){var r=0;return this.Reverse().When(t,function(){r++},!0),this.Omit(r)},Array.prototype.Last=function(t){if(null==t)return 0===this.length?null:this[this.length-1];var r=this.length-t;return this.slice(0<r?r:0)},Array.prototype.LastWhile=function(t){var r=0;return this.Reverse().When(t,function(){r++},!0),this.Last(r)},Array.prototype.FirstIndexOf=function(r,n){return void 0===n&&(n=!1),this.FindIndex(function(t){return i.Eq(t,r,n)})},Array.prototype.Count=function(r,n){return void 0===n&&(n=!1),this.Where(function(t){return i.Eq(t,r,n)}).length},Array.prototype.Indexes=function(r,n){void 0===n&&(n=!1);var e=[];return this.When(function(t){return i.Eq(t,r,n)},function(t,r){e.push(r)}),e},Array.prototype.Unique=function(n){var e=this;return void 0===n&&(n=!1),this.Where(function(t,r){return e.FirstIndexOf(t,n)===r})},Array.prototype.Union=function(t,r){return void 0===r&&(r=!1),this.concat(t).Unique(r)},Array.prototype.Intersect=function(r,n){return void 0===n&&(n=!1),this.Unique(n).Where(function(t){return r.Has(t,n)})},Array.prototype.Outer=function(t,r){return void 0===r&&(r=!1),this.Union(t,r).Without(this.Intersect(t,r),r)},Array.prototype.Max=function(e){return void 0===e&&(e=function(t,r){return t}),this.Reverse().Reduce(function(t,r,n){return e(t,n-1)>e(r,n)?t:r})},Array.prototype.Min=function(e){return void 0===e&&(e=function(t,r){return t}),this.Reverse().Reduce(function(t,r,n){return e(t,n-1)<e(r,n)?t:r})},Array.prototype.Sum=function(n){return void 0===n&&(n=function(t){return t}),this.Map(function(t,r){return n(t,r)}).Reduce(function(t,r){return t+r})},Array.prototype.Reduce=function(t){if(0===this.length&&i.t("Empty Array"),1===this.length)return this[0];for(var r=this[0],n=1;n<this.length;n++)r=t(r,this[n],n-1);return r},Array.prototype.Find=function(t){var r=this.When(t,function(t){return t});return null==r?null:r},Array.prototype.FindIndex=function(t){var r=this.When(t,function(t,r){return r});return null==r?null:r},Array.prototype.Any=function(t){return this.When(t,function(){return!0})||!1},Array.prototype.All=function(n){return!this.Any(function(t,r){return!n(t,r)})},Array.prototype.When=function(t,r,n){void 0===n&&(n=!1);for(var e=0;e<this.length;e++)if(t(this[e],e)){var o=r(this[e],e);if(void 0!==o)return o}else if(n)break},Array.prototype.Random=function(){return 0===this.length?null:1===this.length?this[0]:this[(0).RandomFor(this.length,!0)]},Map.prototype.TrimValue=function(){return this.MapValue(function(t){return t.trim()})},Map.prototype.SortByKey=function(t,r){var n=this.Arr();return n=n.Sort(t,null==r?function(t){return t[0]}:function(t){return r(t[0])}),new Map(n)},Map.prototype.SortByValue=function(t,r){var n=this.Arr();return n=n.Sort(t,null==r?function(t){return t[1]}:function(t){return r(t[1])}),new Map(n)},Map.prototype.Reverse=function(){return new Map(this.Arr().Reverse())},Map.prototype.HasKey=function(t,r){return this.Keys().Has(t,r)},Map.prototype.HasValue=function(t,r){return this.Values().Has(t,r)},Map.prototype.Where=function(r){return new Map(this.Arr().Where(function(t){return i.M(t,r)}))},Map.prototype.MapKey=function(n){var e=new Map;return this.Each(function(t,r){return e.set(n(t,r),r)}),e},Map.prototype.MapValue=function(n){var e=new Map;return this.Each(function(t,r){return e.set(t,n(r,t))}),e},Map.prototype.Map=function(n){var e=[];return this.Each(function(t,r){return e.push(n(t,r))}),e},Map.prototype.Each=function(r){var n=new Map;return this.Arr().Each(function(t){r(t[0],t[1]),n.set(t[0],t[1])}),n},Map.prototype.RemoveKey=function(r,n){return void 0===n&&(n=!1),this.Where(function(t){return!i.Eq(r,t,n)})},Map.prototype.RemoveValue=function(n,e){return void 0===e&&(e=!1),this.Where(function(t,r){return!i.Eq(r,n,e)})},Map.prototype.Without=function(n,e,o){return void 0===o&&(o=!1),this.Where(function(t,r){return!n.Has(t,o)&&!e.Has(r,o)})},Map.prototype.Take=function(t){if(null!=t)return new Map(this.Arr().Take(t));var r=this.Arr().Take();return null==r?null:i.P(r)},Map.prototype.TakeWhile=function(r){return new Map(this.Arr().TakeWhile(function(t){return i.M(t,r)}))},Map.prototype.Skip=function(t){return new Map(this.Arr().Skip(t))},Map.prototype.SkipWhile=function(r){return new Map(this.Arr().SkipWhile(function(t){return i.M(t,r)}))},Map.prototype.Omit=function(t){return new Map(this.Arr().Omit(t))},Map.prototype.OmitWhile=function(r){return new Map(this.Arr().OmitWhile(function(t){return i.M(t,r)}))},Map.prototype.Last=function(t){if(null!=t)return new Map(this.Arr().Last(t));var r=this.Arr().Last();return null==r?null:i.P(r)},Map.prototype.LastWhile=function(r){return new Map(this.Arr().LastWhile(function(t){return i.M(t,r)}))},Map.prototype.Arr=function(){return Array.from(this.entries())},Map.prototype.Keys=function(){return Array.from(this.keys())},Map.prototype.Values=function(){return Array.from(this.values())},Map.prototype.Find=function(r){var t=this.Arr().Find(function(t){return i.M(t,r)});return null==t?null:i.P(t)},Map.prototype.Max=function(r){return i.P(this.Arr().Max(function(t){return r(t[0],t[1])}))},Map.prototype.Min=function(r){return i.P(this.Arr().Min(function(t){return r(t[0],t[1])}))},Map.prototype.Sum=function(r){return this.Arr().Sum(function(t){return r(t[0],t[1])})},Map.prototype.Reduce=function(t){return this.Arr().Map(function(t){return i.P(t)}).Reduce(t)},Map.prototype.Any=function(r){return this.Arr().Any(function(t){return i.M(t,r)})},Map.prototype.All=function(r){return this.Arr().All(function(t){return i.M(t,r)})},Map.prototype.AsObject=function(){var e={};return this.Each(function(t,r){var n=t.split(".");i.SV(e,n,r)}),e}},t.prototype.DeepEqual=function(r,n){var e=this;if(r===n)return!0;if(void 0===r||void 0===n)return!1;if(null===r||null===n)return!1;if(typeof r!=typeof n)return!1;if(e.TC(r,n,"string"))return String(r)===String(n);if(e.TC(r,n,"number"))return isNaN(r)?isNaN(n):r===n;if(e.TC(r,n,"boolean"))return r===n;if(r instanceof Date)return r.valueOf()===n.valueOf();if(r.constructor!==n.constructor)return!1;if(r instanceof Function||r instanceof RegExp)return r.toString()===n.toString();if(this.IsArray(r)){if(!this.IsArray(n))return!1;if(r.length!==n.length)return!1}if(r instanceof Object&&n instanceof Object){var o=Object.keys(r);return Object.keys(n).every(function(t){return-1!==o.indexOf(t)})&&o.every(function(t){return e.Eq(r[t],n[t],!0)})}return!1},t.prototype.IsAnyString=function(t){return"string"==typeof t||t instanceof String},t.prototype.IsString=function(t){return!!this.IsAnyString(t)&&""!==t.trim()},t.prototype.IsAnyNumber=function(t){return null!=t&&("number"==typeof t||t instanceof Number)},t.prototype.IsNumber=function(t,r){if(void 0===r&&(r=!1),this.IsAnyNumber(t))return!isNaN(t)&&isFinite(t);if(this.IsAnyString(t)&&r){var n=parseFloat(t);return!isNaN(n)&&isFinite(n)}return!1},t.prototype.IsArray=function(t){return Array.isArray(t)},t.prototype.IsBooleanArray=function(t){return this.I(t,"boolean")},t.prototype.IsNumberArray=function(t){return this.I(t,"number")},t.prototype.IsStringArray=function(t){return this.I(t,"string")},t.prototype.Random=function(t){var r=this.m.Skip(34).split("");return[].Fill(t,function(){return r.Random()}).join("")},t.prototype.WrapArray=function(t){return this.IsArray(t)?t:[t]},t.prototype.Eq=function(t,r,n){return n?this.DeepEqual(t,r):t===r},t.prototype.FlattenObject=function(t){return this.FO(t)},t.prototype.FlattenClass=function(t,r){return this.VO(t,"",r)},t.prototype.VO=function(t,r,n){void 0===r&&(r="");var e=new Map;for(var o in t)if(t.hasOwnProperty(o)){var i=t[o];this.TO(i,"object")?i.constructor==n?e.set(r+o,i):e=new Map(e.Arr().Union(this.VO(i,r+o+".",n).Arr(),!0)):this.t("Needs to be object")}return e},t.prototype.FO=function(t,r){void 0===r&&(r="");var n=new Map;for(var e in t)if(t.hasOwnProperty(e)){var o=t[e];this.NO(o)?n.set(r+e,o):n=new Map(n.Arr().Union(this.FO(o,r+e+".").Arr(),!0))}return n},t.prototype.I=function(t,r){return this.IsArray(t)&&t.every(function(t){return typeof t===r})},t.prototype.NO=function(t){return this.IsArray(t)||t instanceof RegExp||t instanceof Date||!this.TO(t,"object")||this.TO(t,"function")},t.prototype.TO=function(t,r){return typeof t===r},t.prototype.SV=function(t,r,n){var e=r[0];1===r.length?t[e]=n:(this.TO(t[e],"undefined")&&(t[e]={}),this.SV(t[e],r.Skip(1),n))},t.prototype.t=function(t){throw new Error(t)},t.prototype.lc=function(t,r){for(var n="",e="",o=0,i=t.length===r.length;n===e&&o<100;)n=(i?t:t.toLowerCase()).charAt(o),e=(i?r:r.toLowerCase()).charAt(o),o++;return(this.m.indexOf(n)-this.m.indexOf(e)).Clamp(-1,1)},t.prototype.TC=function(t,r,n){return typeof t===n&&typeof r===n},t.prototype.M=function(t,r){return r(t[0],t[1])},t.prototype.P=function(t){return{key:t[0],value:t[1]}},t.prototype.i=function(t){return this.A(t),this.IsAnyString(t)?parseInt(t):Math.trunc(t)},t.prototype.f=function(t){return this.A(t),parseFloat(t)},t.prototype.A=function(t){this.IsNumber(t,!0)||this.t("Invalid Number")},t}(),o=function(){function t(){this.Ascending={IsNum:!0,Reverse:!1},this.Descending={IsNum:!0,Reverse:!0},this.AtoZ={IsNum:!1,Reverse:!1},this.ZtoA={IsNum:!1,Reverse:!0}}return t.Ascending={IsNum:!0,Reverse:!1},t.Descending={IsNum:!0,Reverse:!0},t.AtoZ={IsNum:!1,Reverse:!1},t.ZtoA={IsNum:!1,Reverse:!0},t}();n.d(r,"Kore",function(){return e}),n.d(r,"SortType",function(){return o})}])});