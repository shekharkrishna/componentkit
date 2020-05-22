(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{168:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return a})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return l}));var o=t(2),r=t(10),i=(t(0),t(204)),c={title:"Pass in Actions"},a={id:"pass-in-actions",title:"Pass in Actions",description:"Follow this simple rule: Selectors should be implemented in the same file they are referenced.",source:"@site/docs/pass-in-actions.md",permalink:"/docs/pass-in-actions",sidebar:"docs",previous:{title:"No Underscores",permalink:"/docs/no-underscores"},next:{title:"No Side Effects",permalink:"/docs/no-side-effects"}},p=[],s={rightToc:p};function l(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Follow this simple rule: Selectors should be implemented in the same file they are referenced."),Object(i.b)("p",null,"The following counterexample establishes a hidden coupling between the parent and child component. If another component tries to use ",Object(i.b)("inlineCode",{parentName:"p"},"ChildComponent")," or if the method is renamed in ",Object(i.b)("inlineCode",{parentName:"p"},"ParentComponent"),", it will crash at runtime."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-objectivec-redhighlight"}),"@implementation ParentComponent\n+ (instancetype)new\n{\n  return [super newWithComponent:[ChildComponent new]];\n}\n\n- (void)someAction:(CKComponent *)sender\n{\n  // Do something\n}\n@end\n\n@implementation ChildComponent\n+ (instancetype)new\n{\n  return [super newWithComponent:\n          [CKButtonComponent\n           newWithAction:@selector(someAction:)]];\n}\n@end\n")),Object(i.b)("p",null,"Instead, always pass selectors from parents to children. In the following example, it is explicit that the child component needs a ",Object(i.b)("inlineCode",{parentName:"p"},"CKTypedComponentAction<>")," selector. If the parent component renames the ",Object(i.b)("inlineCode",{parentName:"p"},"someAction:")," method, it's far easier to catch renaming the parameter."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-objectivec"}),"\n@implementation ParentComponent\n+ (instancetype)new\n{\n  CKComponentScope scope(self);\n\n  return [super newWithComponent:\n          [ChildComponent\n           newWithAction:{scope, @selector(someAction:)}]];\n}\n\n- (void)someAction:(CKComponent *)sender\n{\n  // Do something\n}\n@end\n\n@implementation ChildComponent\n+ (instancetype)newWithAction:(CKTypedComponentAction<>)action\n{\n  return [super newWithComponent:\n          [CKButtonComponent\n           newWithAction:action]];\n}\n@end\n")))}l.isMDXComponent=!0},204:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return f}));var o=t(0),r=t.n(o);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),l=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a({},n,{},e)),t},m=function(e){var n=l(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=Object(o.forwardRef)((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=l(t),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return t?r.a.createElement(f,a({ref:n},s,{components:t})):r.a.createElement(f,a({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=d;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var s=2;s<i;s++)c[s]=t[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);