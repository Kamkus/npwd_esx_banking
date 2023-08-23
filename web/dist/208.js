"use strict";(self.webpackChunknpwd_esx_banking=self.webpackChunknpwd_esx_banking||[]).push([[208,387],{1642:(e,n,t)=>{n.__esModule=!0,n.NuiContext=void 0;var r=t(2950);n.NuiContext=r.createContext({removeHandler:function(){console.log("Failed to remove event. The context has not been initialized")},addHandler:function(){console.log("Failed to add event. The context has not been initialized")}})},6877:(e,n,t)=>{n.__esModule=!0,n.useNuiEvent=void 0;var r=t(2950),i=t(1642);n.useNuiEvent=function(e){var n,t=r.useContext(null!==(n=e.context)&&void 0!==n?n:i.NuiContext),o=r.useState(e.defaultValue),a=o[0],u=o[1];if(!t)throw new Error("useNuiEvent must be used inside the NuiProvider");if(!e.event)throw new Error("Cannot use NuiEvent on nothing.");return r.useEffect((function(){return t.addHandler(e.event,(function(n){u(n.data.payload),e.callback&&"function"==typeof e.callback&&e.callback(n.data.payload)})),function(){t.removeHandler(e.event)}}),[]),{data:a}}},4208:function(e,n,t){var r=this&&this.__createBinding||(Object.create?function(e,n,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,r){void 0===r&&(r=t),e[r]=n[t]}),i=this&&this.__exportStar||function(e,n){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(n,t)||r(n,e,t)};n.__esModule=!0,i(t(8841),n),i(t(1642),n),i(t(6877),n)},8841:function(e,n,t){var r=this&&this.__createBinding||(Object.create?function(e,n,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,r){void 0===r&&(r=t),e[r]=n[t]}),i=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(n,e,t);return i(n,e),n},a=this&&this.__spreadArray||function(e,n){for(var t=0,r=n.length,i=e.length;t<r;t++,i++)e[i]=n[t];return e};n.__esModule=!0,n.NuiProvider=void 0;var u=o(t(2950)),d=t(1642);n.NuiProvider=function(e){var n,t=null!==(n=e.context)&&void 0!==n?n:d.NuiContext,r=u.useRef({}),i=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];e.debug&&console.debug(n)},o=function(n){if(i("Handling event",n),!e.validateEvent||e.validateEvent(n)){var t=n.data.type;i("Checking if we should handle event .. ",t),r.current&&r.current[t]&&r.current[t].length>0&&r.current[t].forEach((function(e){i("Running handler for",t),e(n)}))}else i("Returning! Event was invalid",n)};return u.useEffect((function(){return window.addEventListener("message",o),function(){return window.removeEventListener("message",o)}}),[]),u.default.createElement(t.Provider,{value:{addHandler:function(e,n){var t;i("Adding handler for event",e);var o=null!==(t=r.current[e])&&void 0!==t?t:[];i("Existing handlers",o),r.current[e]=a(a([],o),[n])},removeHandler:function(e){i("Removing handler for event",e),delete r.current[e]}}},e.children)}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUMsR0FDckNULEVBQU0sc0JBQXVCTSxHQUM3QkcsRUFBUWhELEVBQ1osR0FUSixNQUZJdUMsRUFBTSwrQkFBZ0N2QyxFQWE5QyxFQUtBLE9BSkFsQixFQUFRbUIsV0FBVSxXQUVkLE9BREFnRCxPQUFPQyxpQkFBaUIsVUFBV1AsR0FDNUIsV0FBYyxPQUFPTSxPQUFPRSxvQkFBb0IsVUFBV1IsRUFBZSxDQUNyRixHQUFHLElBQ0s3RCxFQUFpQixRQUFFc0UsY0FBY2hCLEVBQVFpQixTQUFVLENBQUU5QixNQUFPLENBQUVwQyxXQWhDckQsU0FBVWEsRUFBT2dELEdBQzlCLElBQUl6RCxFQUNKZ0QsRUFBTSwyQkFBNEJ2QyxHQUNsQyxJQUFJc0QsRUFBc0QsUUFBbEMvRCxFQUFLOEMsRUFBU1MsUUFBUTlDLFVBQTJCLElBQVBULEVBQWdCQSxFQUFLLEdBQ3ZGZ0QsRUFBTSxvQkFBcUJlLEdBQzNCakIsRUFBU1MsUUFBUTlDLEdBQVMyQixFQUFjQSxFQUFjLEdBQUkyQixHQUFtQixDQUFDTixHQUNsRixFQTBCOEZoRSxjQXpCMUUsU0FBVWdCLEdBQzFCdUMsRUFBTSw2QkFBOEJ2QyxVQUM3QnFDLEVBQVNTLFFBQVE5QyxFQUM1QixJQXNCZ0ltQyxFQUFNb0IsU0FDMUksQyIsInNvdXJjZXMiOlsid2VicGFjazovL25wd2RfZXN4X2JhbmtpbmcvLi9ub2RlX21vZHVsZXMvcmVhY3QtZml2ZW0taG9va3MvZGlzdC9jb250ZXh0L051aUNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vbnB3ZF9lc3hfYmFua2luZy8uL25vZGVfbW9kdWxlcy9yZWFjdC1maXZlbS1ob29rcy9kaXN0L2hvb2tzL3VzZU51aUV2ZW50LmpzIiwid2VicGFjazovL25wd2RfZXN4X2JhbmtpbmcvLi9ub2RlX21vZHVsZXMvcmVhY3QtZml2ZW0taG9va3MvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9ucHdkX2VzeF9iYW5raW5nLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWZpdmVtLWhvb2tzL2Rpc3QvcHJvdmlkZXIvTnVpUHJvdmlkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5OdWlDb250ZXh0ID0gdm9pZCAwO1xudmFyIHJlYWN0XzEgPSByZXF1aXJlKFwicmVhY3RcIik7XG5leHBvcnRzLk51aUNvbnRleHQgPSByZWFjdF8xLmNyZWF0ZUNvbnRleHQoe1xuICAgIHJlbW92ZUhhbmRsZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0ZhaWxlZCB0byByZW1vdmUgZXZlbnQuIFRoZSBjb250ZXh0IGhhcyBub3QgYmVlbiBpbml0aWFsaXplZCcpO1xuICAgIH0sXG4gICAgYWRkSGFuZGxlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnRmFpbGVkIHRvIGFkZCBldmVudC4gVGhlIGNvbnRleHQgaGFzIG5vdCBiZWVuIGluaXRpYWxpemVkJyk7XG4gICAgfVxufSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnVzZU51aUV2ZW50ID0gdm9pZCAwO1xudmFyIHJlYWN0XzEgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgTnVpQ29udGV4dF8xID0gcmVxdWlyZShcIi4uL2NvbnRleHQvTnVpQ29udGV4dFwiKTtcbmZ1bmN0aW9uIHVzZU51aUV2ZW50KG9wdGlvbnMpIHtcbiAgICB2YXIgX2E7XG4gICAgdmFyIGNvbnRleHQgPSByZWFjdF8xLnVzZUNvbnRleHQoKF9hID0gb3B0aW9ucy5jb250ZXh0KSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBOdWlDb250ZXh0XzEuTnVpQ29udGV4dCk7XG4gICAgdmFyIF9iID0gcmVhY3RfMS51c2VTdGF0ZShvcHRpb25zLmRlZmF1bHRWYWx1ZSksIGRhdGEgPSBfYlswXSwgc2V0RGF0YSA9IF9iWzFdO1xuICAgIGlmICghY29udGV4dCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3VzZU51aUV2ZW50IG11c3QgYmUgdXNlZCBpbnNpZGUgdGhlIE51aVByb3ZpZGVyJyk7XG4gICAgfVxuICAgIGlmICghb3B0aW9ucy5ldmVudCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCB1c2UgTnVpRXZlbnQgb24gbm90aGluZy4nKTtcbiAgICB9XG4gICAgcmVhY3RfMS51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZXh0LmFkZEhhbmRsZXIob3B0aW9ucy5ldmVudCwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBzZXREYXRhKGV2ZW50LmRhdGEucGF5bG9hZCk7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5jYWxsYmFjayAmJiB0eXBlb2Ygb3B0aW9ucy5jYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuY2FsbGJhY2soZXZlbnQuZGF0YS5wYXlsb2FkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb250ZXh0LnJlbW92ZUhhbmRsZXIob3B0aW9ucy5ldmVudCk7XG4gICAgICAgIH07XG4gICAgfSwgW10pO1xuICAgIHJldHVybiB7IGRhdGE6IGRhdGEgfTtcbn1cbmV4cG9ydHMudXNlTnVpRXZlbnQgPSB1c2VOdWlFdmVudDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX2V4cG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9fZXhwb3J0U3RhcikgfHwgZnVuY3Rpb24obSwgZXhwb3J0cykge1xuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXhwb3J0cywgcCkpIF9fY3JlYXRlQmluZGluZyhleHBvcnRzLCBtLCBwKTtcbn07XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3Byb3ZpZGVyL051aVByb3ZpZGVyXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9jb250ZXh0L051aUNvbnRleHRcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2hvb2tzL3VzZU51aUV2ZW50XCIpLCBleHBvcnRzKTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX19zcHJlYWRBcnJheSA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheSkgfHwgZnVuY3Rpb24gKHRvLCBmcm9tKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGlsID0gZnJvbS5sZW5ndGgsIGogPSB0by5sZW5ndGg7IGkgPCBpbDsgaSsrLCBqKyspXG4gICAgICAgIHRvW2pdID0gZnJvbVtpXTtcbiAgICByZXR1cm4gdG87XG59O1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuTnVpUHJvdmlkZXIgPSB2b2lkIDA7XG52YXIgcmVhY3RfMSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIE51aUNvbnRleHRfMSA9IHJlcXVpcmUoXCIuLi9jb250ZXh0L051aUNvbnRleHRcIik7XG52YXIgTnVpUHJvdmlkZXIgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgX2E7XG4gICAgdmFyIENvbnRleHQgPSAoX2EgPSBwcm9wcy5jb250ZXh0KSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBOdWlDb250ZXh0XzEuTnVpQ29udGV4dDtcbiAgICB2YXIgaGFuZGxlcnMgPSByZWFjdF8xLnVzZVJlZih7fSk7XG4gICAgdmFyIGRlYnVnID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcHJvcHMuZGVidWcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmRlYnVnKGFyZ3MpO1xuICAgIH07XG4gICAgdmFyIGFkZEhhbmRsZXIgPSBmdW5jdGlvbiAoZXZlbnQsIGhhbmRsZXIpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBkZWJ1ZygnQWRkaW5nIGhhbmRsZXIgZm9yIGV2ZW50JywgZXZlbnQpO1xuICAgICAgICB2YXIgZXhpc3RpbmdIYW5kbGVycyA9IChfYSA9IGhhbmRsZXJzLmN1cnJlbnRbZXZlbnRdKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBbXTtcbiAgICAgICAgZGVidWcoJ0V4aXN0aW5nIGhhbmRsZXJzJywgZXhpc3RpbmdIYW5kbGVycyk7XG4gICAgICAgIGhhbmRsZXJzLmN1cnJlbnRbZXZlbnRdID0gX19zcHJlYWRBcnJheShfX3NwcmVhZEFycmF5KFtdLCBleGlzdGluZ0hhbmRsZXJzKSwgW2hhbmRsZXJdKTtcbiAgICB9O1xuICAgIHZhciByZW1vdmVIYW5kbGVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGRlYnVnKCdSZW1vdmluZyBoYW5kbGVyIGZvciBldmVudCcsIGV2ZW50KTtcbiAgICAgICAgZGVsZXRlIGhhbmRsZXJzLmN1cnJlbnRbZXZlbnRdO1xuICAgIH07XG4gICAgdmFyIGV2ZW50SGFuZGxlciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBkZWJ1ZygnSGFuZGxpbmcgZXZlbnQnLCBldmVudCk7XG4gICAgICAgIGlmIChwcm9wcy52YWxpZGF0ZUV2ZW50ICYmICFwcm9wcy52YWxpZGF0ZUV2ZW50KGV2ZW50KSkge1xuICAgICAgICAgICAgZGVidWcoJ1JldHVybmluZyEgRXZlbnQgd2FzIGludmFsaWQnLCBldmVudCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHR5cGUgPSBldmVudC5kYXRhLnR5cGU7XG4gICAgICAgIGRlYnVnKCdDaGVja2luZyBpZiB3ZSBzaG91bGQgaGFuZGxlIGV2ZW50IC4uICcsIHR5cGUpO1xuICAgICAgICBpZiAoaGFuZGxlcnMuY3VycmVudCAmJlxuICAgICAgICAgICAgaGFuZGxlcnMuY3VycmVudFt0eXBlXSAmJlxuICAgICAgICAgICAgaGFuZGxlcnMuY3VycmVudFt0eXBlXS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBoYW5kbGVycy5jdXJyZW50W3R5cGVdLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICBkZWJ1ZygnUnVubmluZyBoYW5kbGVyIGZvcicsIHR5cGUpO1xuICAgICAgICAgICAgICAgIGhhbmRsZXIoZXZlbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJlYWN0XzEudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBldmVudEhhbmRsZXIpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBldmVudEhhbmRsZXIpOyB9O1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gKHJlYWN0XzFbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoQ29udGV4dC5Qcm92aWRlciwgeyB2YWx1ZTogeyBhZGRIYW5kbGVyOiBhZGRIYW5kbGVyLCByZW1vdmVIYW5kbGVyOiByZW1vdmVIYW5kbGVyIH0gfSwgcHJvcHMuY2hpbGRyZW4pKTtcbn07XG5leHBvcnRzLk51aVByb3ZpZGVyID0gTnVpUHJvdmlkZXI7XG4iXSwibmFtZXMiOlsiZXhwb3J0cyIsIl9fZXNNb2R1bGUiLCJOdWlDb250ZXh0IiwicmVhY3RfMSIsImNyZWF0ZUNvbnRleHQiLCJyZW1vdmVIYW5kbGVyIiwiY29uc29sZSIsImxvZyIsImFkZEhhbmRsZXIiLCJ1c2VOdWlFdmVudCIsIk51aUNvbnRleHRfMSIsIm9wdGlvbnMiLCJfYSIsImNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2IiLCJ1c2VTdGF0ZSIsImRlZmF1bHRWYWx1ZSIsImRhdGEiLCJzZXREYXRhIiwiRXJyb3IiLCJldmVudCIsInVzZUVmZmVjdCIsInBheWxvYWQiLCJjYWxsYmFjayIsIl9fY3JlYXRlQmluZGluZyIsInRoaXMiLCJPYmplY3QiLCJjcmVhdGUiLCJvIiwibSIsImsiLCJrMiIsInVuZGVmaW5lZCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsIl9fZXhwb3J0U3RhciIsInAiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJfX3NldE1vZHVsZURlZmF1bHQiLCJ2IiwidmFsdWUiLCJfX2ltcG9ydFN0YXIiLCJtb2QiLCJyZXN1bHQiLCJfX3NwcmVhZEFycmF5IiwidG8iLCJmcm9tIiwiaSIsImlsIiwibGVuZ3RoIiwiaiIsIk51aVByb3ZpZGVyIiwicHJvcHMiLCJDb250ZXh0IiwiaGFuZGxlcnMiLCJ1c2VSZWYiLCJkZWJ1ZyIsImFyZ3MiLCJfaSIsImFyZ3VtZW50cyIsImV2ZW50SGFuZGxlciIsInZhbGlkYXRlRXZlbnQiLCJ0eXBlIiwiY3VycmVudCIsImZvckVhY2giLCJoYW5kbGVyIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjcmVhdGVFbGVtZW50IiwiUHJvdmlkZXIiLCJleGlzdGluZ0hhbmRsZXJzIiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9