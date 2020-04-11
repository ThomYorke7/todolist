!function(t){var e={};function n(a){if(e[a])return e[a].exports;var r=e[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(a,r,function(e){return t[e]}.bind(null,r));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([,function(t,e,n){"use strict";n.r(e);let a=localStorage.getItem("projects")?JSON.parse(localStorage.getItem("projects")):[];localStorage.setItem("projects",JSON.stringify(a));function r(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function i(t){r(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function o(t){r(1,arguments);var e=i(t);return!isNaN(e)}var s={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function u(t){return function(e){var n=e||{},a=n.width?String(n.width):t.defaultWidth;return t.formats[a]||t.formats[t.defaultWidth]}}var c={date:u({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:u({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:u({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},d={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function l(t){return function(e,n){var a,r=n||{};if("formatting"===(r.context?String(r.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,o=r.width?String(r.width):i;a=t.formattingValues[o]||t.formattingValues[i]}else{var s=t.defaultWidth,u=r.width?String(r.width):t.defaultWidth;a=t.values[u]||t.values[s]}return a[t.argumentCallback?t.argumentCallback(e):e]}}function m(t){return function(e,n){var a=String(e),r=n||{},i=r.width,o=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],s=a.match(o);if(!s)return null;var u,c=s[0],d=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth];return u="[object Array]"===Object.prototype.toString.call(d)?function(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}(d,(function(t){return t.test(c)})):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}(d,(function(t){return t.test(c)})),u=t.valueCallback?t.valueCallback(u):u,{value:u=r.valueCallback?r.valueCallback(u):u,rest:a.slice(c.length)}}}var f,h={code:"en-US",formatDistance:function(t,e,n){var a;return n=n||{},a="string"==typeof s[t]?s[t]:1===e?s[t].one:s[t].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?"in "+a:a+" ago":a},formatLong:c,formatRelative:function(t,e,n,a){return d[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:l({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:l({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:l({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:l({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:l({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(f={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t,e){var n=String(t),a=e||{},r=n.match(f.matchPattern);if(!r)return null;var i=r[0],o=n.match(f.parsePattern);if(!o)return null;var s=f.valueCallback?f.valueCallback(o[0]):o[0];return{value:s=a.valueCallback?a.valueCallback(s):s,rest:n.slice(i.length)}}),era:m({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:m({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:m({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:m({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:m({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function g(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function y(t,e){r(2,arguments);var n=i(t).getTime(),a=g(e);return new Date(n+a)}function p(t,e){r(2,arguments);var n=g(e);return y(t,-n)}function w(t,e){for(var n=t<0?"-":"",a=Math.abs(t).toString();a.length<e;)a="0"+a;return n+a}var v={y:function(t,e){var n=t.getUTCFullYear(),a=n>0?n:1-n;return w("yy"===e?a%100:a,e.length)},M:function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):w(n+1,2)},d:function(t,e){return w(t.getUTCDate(),e.length)},a:function(t,e){var n=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":case"aaa":return n.toUpperCase();case"aaaaa":return n[0];case"aaaa":default:return"am"===n?"a.m.":"p.m."}},h:function(t,e){return w(t.getUTCHours()%12||12,e.length)},H:function(t,e){return w(t.getUTCHours(),e.length)},m:function(t,e){return w(t.getUTCMinutes(),e.length)},s:function(t,e){return w(t.getUTCSeconds(),e.length)},S:function(t,e){var n=e.length,a=t.getUTCMilliseconds();return w(Math.floor(a*Math.pow(10,n-3)),e.length)}};function b(t){r(1,arguments);var e=1,n=i(t),a=n.getUTCDay(),o=(a<e?7:0)+a-e;return n.setUTCDate(n.getUTCDate()-o),n.setUTCHours(0,0,0,0),n}function C(t){r(1,arguments);var e=i(t),n=e.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(n+1,0,4),a.setUTCHours(0,0,0,0);var o=b(a),s=new Date(0);s.setUTCFullYear(n,0,4),s.setUTCHours(0,0,0,0);var u=b(s);return e.getTime()>=o.getTime()?n+1:e.getTime()>=u.getTime()?n:n-1}function k(t){r(1,arguments);var e=C(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var a=b(n);return a}function T(t,e){r(1,arguments);var n=e||{},a=n.locale,o=a&&a.options&&a.options.weekStartsOn,s=null==o?0:g(o),u=null==n.weekStartsOn?s:g(n.weekStartsOn);if(!(u>=0&&u<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=i(t),d=c.getUTCDay(),l=(d<u?7:0)+d-u;return c.setUTCDate(c.getUTCDate()-l),c.setUTCHours(0,0,0,0),c}function E(t,e){r(1,arguments);var n=i(t,e),a=n.getUTCFullYear(),o=e||{},s=o.locale,u=s&&s.options&&s.options.firstWeekContainsDate,c=null==u?1:g(u),d=null==o.firstWeekContainsDate?c:g(o.firstWeekContainsDate);if(!(d>=1&&d<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=new Date(0);l.setUTCFullYear(a+1,0,d),l.setUTCHours(0,0,0,0);var m=T(l,e),f=new Date(0);f.setUTCFullYear(a,0,d),f.setUTCHours(0,0,0,0);var h=T(f,e);return n.getTime()>=m.getTime()?a+1:n.getTime()>=h.getTime()?a:a-1}function M(t,e){r(1,arguments);var n=e||{},a=n.locale,i=a&&a.options&&a.options.firstWeekContainsDate,o=null==i?1:g(i),s=null==n.firstWeekContainsDate?o:g(n.firstWeekContainsDate),u=E(t,e),c=new Date(0);c.setUTCFullYear(u,0,s),c.setUTCHours(0,0,0,0);var d=T(c,e);return d}var x="midnight",S="noon",D="morning",L="afternoon",P="evening",U="night";function j(t,e){var n=t>0?"-":"+",a=Math.abs(t),r=Math.floor(a/60),i=a%60;if(0===i)return n+String(r);var o=e||"";return n+String(r)+o+w(i,2)}function I(t,e){return t%60==0?(t>0?"-":"+")+w(Math.abs(t)/60,2):O(t,e)}function O(t,e){var n=e||"",a=t>0?"-":"+",r=Math.abs(t);return a+w(Math.floor(r/60),2)+n+w(r%60,2)}var B={G:function(t,e,n){var a=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});case"GGGG":default:return n.era(a,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var a=t.getUTCFullYear(),r=a>0?a:1-a;return n.ordinalNumber(r,{unit:"year"})}return v.y(t,e)},Y:function(t,e,n,a){var r=E(t,a),i=r>0?r:1-r;return"YY"===e?w(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):w(i,e.length)},R:function(t,e){return w(C(t),e.length)},u:function(t,e){return w(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return w(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return w(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,n){var a=t.getUTCMonth();switch(e){case"M":case"MM":return v.M(t,e);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,n){var a=t.getUTCMonth();switch(e){case"L":return String(a+1);case"LL":return w(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(t,e,n,a){var o=function(t,e){r(1,arguments);var n=i(t),a=T(n,e).getTime()-M(n,e).getTime();return Math.round(a/6048e5)+1}(t,a);return"wo"===e?n.ordinalNumber(o,{unit:"week"}):w(o,e.length)},I:function(t,e,n){var a=function(t){r(1,arguments);var e=i(t),n=b(e).getTime()-k(e).getTime();return Math.round(n/6048e5)+1}(t);return"Io"===e?n.ordinalNumber(a,{unit:"week"}):w(a,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):v.d(t,e)},D:function(t,e,n){var a=function(t){r(1,arguments);var e=i(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var a=e.getTime(),o=n-a;return Math.floor(o/864e5)+1}(t);return"Do"===e?n.ordinalNumber(a,{unit:"dayOfYear"}):w(a,e.length)},E:function(t,e,n){var a=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});case"EEEE":default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,n,a){var r=t.getUTCDay(),i=(r-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return w(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});case"eeee":default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(t,e,n,a){var r=t.getUTCDay(),i=(r-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return w(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});case"cccc":default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(t,e,n){var a=t.getUTCDay(),r=0===a?7:a;switch(e){case"i":return String(r);case"ii":return w(r,e.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});case"iiii":default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,n){var a=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){var a,r=t.getUTCHours();switch(a=12===r?S:0===r?x:r/12>=1?"pm":"am",e){case"b":case"bb":case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){var a,r=t.getUTCHours();switch(a=r>=17?P:r>=12?L:r>=4?D:U,e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var a=t.getUTCHours()%12;return 0===a&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return v.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):v.H(t,e)},K:function(t,e,n){var a=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(a,{unit:"hour"}):w(a,e.length)},k:function(t,e,n){var a=t.getUTCHours();return 0===a&&(a=24),"ko"===e?n.ordinalNumber(a,{unit:"hour"}):w(a,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):v.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):v.s(t,e)},S:function(t,e){return v.S(t,e)},X:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return I(r);case"XXXX":case"XX":return O(r);case"XXXXX":case"XXX":default:return O(r,":")}},x:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"x":return I(r);case"xxxx":case"xx":return O(r);case"xxxxx":case"xxx":default:return O(r,":")}},O:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+j(r,":");case"OOOO":default:return"GMT"+O(r,":")}},z:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+j(r,":");case"zzzz":default:return"GMT"+O(r,":")}},t:function(t,e,n,a){var r=a._originalDate||t;return w(Math.floor(r.getTime()/1e3),e.length)},T:function(t,e,n,a){return w((a._originalDate||t).getTime(),e.length)}};function W(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}}function N(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}}var Y={p:N,P:function(t,e){var n,a=t.match(/(P+)(p+)?/),r=a[1],i=a[2];if(!i)return W(t,e);switch(r){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",W(r,e)).replace("{{time}}",N(i,e))}};function q(t){return t.getTime()%6e4}function H(t){var e=new Date(t.getTime()),n=Math.ceil(e.getTimezoneOffset());return e.setSeconds(0,0),6e4*n+(n>0?(6e4+q(e))%6e4:q(e))}var z=["D","DD"],X=["YY","YYYY"];function F(t){return-1!==z.indexOf(t)}function Q(t){return-1!==X.indexOf(t)}function G(t){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr");if("YY"===t)throw new RangeError("Use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr");if("D"===t)throw new RangeError("Use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr");if("DD"===t)throw new RangeError("Use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr")}var J=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,A=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,R=/^'([^]*?)'?$/,_=/''/g,K=/[a-zA-Z]/;function V(t,e,n){r(2,arguments);var a=String(e),s=n||{},u=s.locale||h,c=u.options&&u.options.firstWeekContainsDate,d=null==c?1:g(c),l=null==s.firstWeekContainsDate?d:g(s.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var m=u.options&&u.options.weekStartsOn,f=null==m?0:g(m),y=null==s.weekStartsOn?f:g(s.weekStartsOn);if(!(y>=0&&y<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!u.localize)throw new RangeError("locale must contain localize property");if(!u.formatLong)throw new RangeError("locale must contain formatLong property");var w=i(t);if(!o(w))throw new RangeError("Invalid time value");var v=H(w),b=p(w,v),C={firstWeekContainsDate:l,weekStartsOn:y,locale:u,_originalDate:w},k=a.match(A).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,Y[e])(t,u.formatLong,C):t})).join("").match(J).map((function(t){if("''"===t)return"'";var e=t[0];if("'"===e)return $(t);var n=B[e];if(n)return!s.useAdditionalWeekYearTokens&&Q(t)&&G(t),!s.useAdditionalDayOfYearTokens&&F(t)&&G(t),n(b,t,u.localize,C);if(e.match(K))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return t})).join("");return k}function $(t){return t.match(R)[1].replace(_,"'")}const Z=[];let tt=localStorage.getItem("taskID")?JSON.parse(localStorage.getItem("taskID")):0;localStorage.setItem("taskID",JSON.stringify(tt));const et=document.getElementById("add-task"),nt=document.getElementById("task-form-container"),at=document.getElementById("add-task-btn"),rt=()=>{const t=document.getElementById("task-counter-container");let e=0;a.forEach(t=>{t.taskList.forEach(t=>{e++})}),t.textContent=`Total Tasks: ${e}`},it=()=>{for(let t=0;t<a.length;t++)if("active"==a[t].status)return a[t]},ot=document.getElementById("projects-list"),st=document.getElementById("lateral-container"),ut=document.getElementById("add-task"),ct=()=>{ot.innerHTML="";for(let t=0;t<a.length;t++){let e=document.createElement("li");e.classList.add("project"),e.style.color=a[t].color,e.appendChild(document.createTextNode(a[t].name));const n=document.createElement("div");n.classList.add("project-remove-btn"),e.appendChild(n),ot.appendChild(e)}},dt=()=>{const t=document.getElementById("tasks-list"),e=document.getElementById("project-title");t.textContent="",ut.style.display="none",0==a.length?e.textContent="You have no projects. Let's create a new one!":a.length>0&&(e.textContent="Select one of your projects")},lt=document.getElementById("personal-projects-container"),mt=document.getElementById("task-form-container"),ft=document.getElementById("tasks-container"),ht=document.getElementById("tasks-list"),gt=document.getElementById("add-task"),yt=(t,e,n,a)=>{const r=document.createElement("div");r.classList.add("task-container");const i=document.createElement("p");i.classList.add("task-header"),i.textContent=t;const o=document.createElement("p");o.classList.add("task-date"),o.textContent=e;const s=document.createElement("span");s.classList.add("task-priority"),n&&(s.textContent="Important");const u=document.createElement("div");u.classList.add("task-remove-btn"),u.id=a,r.appendChild(i),r.appendChild(o),r.appendChild(s),r.appendChild(u),ht.appendChild(r)},pt=t=>{document.getElementById("project-title").textContent=t},wt=t=>{let e=(t=>{for(let e=0;e<a.length;e++){if(a[e].name==t)return a[e].status="active",a[e];a[e].status="idle"}})(t).taskList;if(ht.innerHTML="",gt.style.display="block",e.length>0)for(let t=0;t<e.length;t++)yt(...Object.values(e[t]))},vt=document.getElementById("add-project-btn"),bt=document.getElementById("ul-title"),Ct=document.getElementById("project-form-container");const kt=document.getElementById("tasks-list"),Tt=document.getElementById("add-task"),Et=document.getElementById("project-title"),Mt=(t,e,n,a,r)=>{const i=document.createElement("div");i.classList.add("task-container");const o=document.createElement("p");o.classList.add("task-header"),o.textContent=t;const s=document.createElement("p");s.classList.add("task-date"),s.textContent=e;const u=document.createElement("span");u.classList.add("filtered-task-priority"),n&&(u.textContent="Important");const c=document.createElement("span");c.classList.add("task-project"),c.textContent=a,c.style.color=r,i.appendChild(o),i.appendChild(s),i.appendChild(c),i.appendChild(u),kt.appendChild(i)},xt=()=>{let t=V(function(t,e){r(2,arguments);var n=i(t),a=g(e);return n.setDate(n.getDate()+a),n}(new Date,7),"dd/MM/yyyy"),e=V(new Date,"dd/MM/yyyy");a.forEach(n=>{n.taskList.forEach(a=>{a.date<=t&&a.date>=e&&Mt(a.title,a.date,a.priority,n.name,n.color)})})};rt(),ct(),a.forEach(t=>{wt(t.name)}),dt(),bt.addEventListener("click",()=>{Ct.style.display="flex"}),Ct.addEventListener("click",t=>{"add-project-btn"!=t.target.id&&"close-project-btn"!=t.target.id||(t.preventDefault(),Ct.style.display="none")}),vt.addEventListener("click",t=>{t.preventDefault();let e=document.getElementById("project-name").value,n=document.getElementById("project-color").value,r={name:e,color:n,taskList:[],status:"idle"};var i;i=r,a.push(i),localStorage.setItem("projects",JSON.stringify(a)),ct(),pt(a[a.length-1].name),a[a.length-1].status="active",wt(a[a.length-1].name)}),st.addEventListener("click",t=>{if(t.target.classList.contains("project-remove-btn")){let e=t.target.previousSibling.textContent;confirm("Press OK to delete the project")&&(t=>{for(let e=0;e<a.length;e++)(a[e].name==t&&"active"==a[e].status||a[e].name==t)&&(a.splice([e],1),localStorage.setItem("projects",JSON.stringify(a)),dt())})(e),ct(),rt()}}),lt.addEventListener("click",t=>{t.target&&t.target.classList.contains("project")&&(pt(t.target.textContent),wt(t.target.textContent))}),mt.addEventListener("click",t=>{if(t.target&&"add-task-btn"==t.target.id){let t=document.getElementById("project-title").textContent;wt(t)}}),ft.addEventListener("click",t=>{if(t.target&&t.target.classList.contains("task-remove-btn")){let e=t.target.id,n=it();for(let t=0;t<n.taskList.length;t++)n.taskList[t].id==e&&n.taskList.splice([t],1);localStorage.setItem("projects",JSON.stringify(a)),wt(n.name),rt()}}),et.addEventListener("click",()=>{nt.style.display="flex"}),nt.addEventListener("click",t=>{"add-task-btn"!=t.target.id&&"close-task-btn"!=t.target.id||(t.preventDefault(),nt.style.display="none")}),at.addEventListener("click",t=>{t.preventDefault();let e=((t,e,n)=>{let a=tt,r=null;""!=e&&(r=V(new Date(e),"dd/MM/yyyy"));let i={title:t,date:r,priority:n,id:a};return tt++,localStorage.setItem("taskID",JSON.stringify(tt)),Z.push(i),i})(document.getElementById("name").value,document.getElementById("date").value,document.getElementById("priority").checked);it().taskList.push(e),localStorage.setItem("projects",JSON.stringify(a)),rt()}),kt.addEventListener("click",t=>{var e;t.target.classList.contains("task-project")&&(e=t.target.textContent,pt(e),wt(e))}),document.getElementById("search-btn").addEventListener("click",()=>{let t=document.getElementById("search-task").value;Et.textContent="Search Results",kt.innerHTML="",Tt.style.display="none",(t=>{a.forEach(e=>{e.taskList.forEach(n=>{n.title==t&&Mt(n.title,n.date,n.priority,e.name,e.color)})})})(t)}),document.getElementById("important").addEventListener("click",()=>{Et.textContent="Important Tasks",kt.innerHTML="",Tt.style.display="none",a.forEach(t=>{t.taskList.forEach(e=>{e.priority&&Mt(e.title,e.date,e.priority,t.name,t.color)})})}),document.getElementById("today").addEventListener("click",()=>{Et.textContent="Today's Tasks",kt.innerHTML="",Tt.style.display="none",(()=>{let t=V(new Date,"dd/MM/yyyy");a.forEach(e=>{e.taskList.forEach(n=>{n.date==t&&Mt(n.title,n.date,n.priority,e.name,e.color)})})})()}),document.getElementById("next-week").addEventListener("click",()=>{Et.textContent="This Week's Tasks",kt.innerHTML="",Tt.style.display="none",xt()}),document.getElementById("expired").addEventListener("click",()=>{Et.textContent="Expired Tasks",kt.innerHTML="",Tt.style.display="none",(()=>{let t=V(new Date,"dd/MM/yyyy");a.forEach(e=>{e.taskList.forEach(n=>{n.date<t&&Mt(n.title,n.date,n.priority,e.name,e.color)})})})()})}]);