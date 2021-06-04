(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{205:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),i=n(7),o=(n(0),n(720)),r={id:"accessibility",title:"Accessibility"},c={unversionedId:"accessibility",id:"version-3.0.0-next.38/accessibility",isDocsHomePage:!1,title:"Accessibility",description:"NativeBase comes with the latest accessibility standards out of the box including aria and role attributes, focus management, and keyboard navigation.",source:"@site/versioned_docs/version-3.0.0-next.38/accessibility.md",slug:"/accessibility",permalink:"/3.0.0-next.38/accessibility",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.38/accessibility.md",version:"3.0.0-next.38",sidebar:"version-3.0.0-next.38/componentsSidebar",previous:{title:"SafeAreaView Props",permalink:"/3.0.0-next.38/safe-area-view-props"},next:{title:"Default Theme",permalink:"/3.0.0-next.38/default-theme"}},s=[{value:"Accessible Roles",id:"accessible-roles",children:[]},{value:"Accessible Labels",id:"accessible-labels",children:[]},{value:"Keyboard Navigation",id:"keyboard-navigation",children:[]},{value:"Focus Management",id:"focus-management",children:[]}],l={toc:s};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"NativeBase comes with the latest accessibility standards out of the box including aria and role attributes, focus management, and keyboard navigation."),Object(o.b)("h2",{id:"accessible-roles"},"Accessible Roles"),Object(o.b)("p",null,"NativeBase uses ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://react-native-aria.geekyants.com/"}),"React Native ARIA")," to implements ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.w3.org/TR/wai-aria-1.2/"}),"WAI-ARIA")," standards to its components. This is designed to provide meaning for controls that aren't built using components provided by the platform. For example, if you use a View instead of a Button component to create a Button, there is ",Object(o.b)("inlineCode",{parentName:"p"},"accessibiltyRole")," attribute that you need to add to the View in order to convey that it's a Button for screen readers or voice recognition tools."),Object(o.b)("h2",{id:"accessible-labels"},"Accessible Labels"),Object(o.b)("p",null,"When a view is marked as accessible, it is a good practice to set an ",Object(o.b)("inlineCode",{parentName:"p"},"accessibilityLabel")," on the view, so that people who use voice-over know what element they have selected. Voice-over will read this string when a user selects the associated element. NativeBase with the use of ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.notion.so/Accessibility-83852d7c4b094e69a3e4f1047994bd1c"}),"React Native ARIA")," does this for you out of the box."),Object(o.b)("h2",{id:"keyboard-navigation"},"Keyboard Navigation"),Object(o.b)("p",null,"Many complex components, like Tabs and Dialog, come with expectations from users on how to interact with their content using a keyboard or other non-mouse input modalities. NativeBase Primitives provide basic keyboard support in accordance with the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.w3.org/TR/wai-aria-practices-1.2/"}),"WAI-ARIA authoring practices"),"."),Object(o.b)("h2",{id:"focus-management"},"Focus Management"),Object(o.b)("p",null,"Proper keyboard navigation and good labelling often go hand-in-hand with managing focus. When a user interacts with a component and something changes as a result, it's often helpful to move focus with the interaction. And for screen reader users, moving focus often results in an announcement to convey the new context, which relies on proper labelling."),Object(o.b)("p",null,"In many NativeBase Components, we move focus based on the interactions a user normally takes in a given component. For example, in\xa0",Object(o.b)("inlineCode",{parentName:"p"},"Modal"),", when the modal is opened, the focus is programmatically moved to the\xa0",Object(o.b)("inlineCode",{parentName:"p"},"first focusable element")," and trapped inside the modal to anticipate a response to the prompt."))}b.isMDXComponent=!0},720:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),b=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,m=p["".concat(r,".").concat(d)]||p[d]||u[d]||o;return n?i.a.createElement(m,c(c({ref:t},l),{},{components:n})):i.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<o;l++)r[l]=n[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);