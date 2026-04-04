import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/main.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=008280c8"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=008280c8"; const React = __vite__cjsImport1_react.__esModule ? __vite__cjsImport1_react.default : __vite__cjsImport1_react;
import __vite__cjsImport2_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=750d4869"; const ReactDOM = __vite__cjsImport2_reactDom_client.__esModule ? __vite__cjsImport2_reactDom_client.default : __vite__cjsImport2_reactDom_client;
import App from "/src/App.jsx";
import "/src/index.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  /* @__PURE__ */ jsxDEV(App, { "data-source-location": "main:8:2", "data-dynamic-content": "false" }, void 0, false, {
    fileName: "/app/src/main.jsx",
    lineNumber: 8,
    columnNumber: 3
  }, this)
  // </React.StrictMode>,
);
if (import.meta.hot) {
  import.meta.hot.on("vite:beforeUpdate", () => {
    window.parent?.postMessage({ type: "sandbox:beforeUpdate" }, "*");
  });
  import.meta.hot.on("vite:afterUpdate", () => {
    window.parent?.postMessage({ type: "sandbox:afterUpdate" }, "*");
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBT0U7QUFQRixPQUFPQSxXQUFXO0FBQ2xCLE9BQU9DLGNBQWM7QUFDckIsT0FBT0MsU0FBUztBQUNoQixPQUFPO0FBRVBELFNBQVNFLFdBQVdDLFNBQVNDLGVBQWUsTUFBTSxDQUFDLEVBQUVDO0FBQUFBO0FBQUFBLEVBRW5ELHVCQUFDLE9BQUksd0JBQXFCLFlBQVcsd0JBQXFCLFdBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBaUU7QUFBQTtBQUVuRTtBQUVBLElBQUlDLFlBQVlDLEtBQUs7QUFDbkJELGNBQVlDLElBQUlDLEdBQUcscUJBQXFCLE1BQU07QUFDNUNDLFdBQU9DLFFBQVFDLFlBQVksRUFBRUMsTUFBTSx1QkFBdUIsR0FBRyxHQUFHO0FBQUEsRUFDbEUsQ0FBQztBQUNETixjQUFZQyxJQUFJQyxHQUFHLG9CQUFvQixNQUFNO0FBQzNDQyxXQUFPQyxRQUFRQyxZQUFZLEVBQUVDLE1BQU0sc0JBQXNCLEdBQUcsR0FBRztBQUFBLEVBQ2pFLENBQUM7QUFDSCIsIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RET00iLCJBcHAiLCJjcmVhdGVSb290IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbmRlciIsImltcG9ydCIsImhvdCIsIm9uIiwid2luZG93IiwicGFyZW50IiwicG9zdE1lc3NhZ2UiLCJ0eXBlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIm1haW4uanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tL2NsaWVudCc7XG5pbXBvcnQgQXBwIGZyb20gJ0AvQXBwLmpzeCc7XG5pbXBvcnQgJ0AvaW5kZXguY3NzJztcblxuUmVhY3RET00uY3JlYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKS5yZW5kZXIoXG4gIC8vIDxSZWFjdC5TdHJpY3RNb2RlPlxuICA8QXBwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwibWFpbjo4OjJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgLz5cbiAgLy8gPC9SZWFjdC5TdHJpY3RNb2RlPixcbik7XG5cbmlmIChpbXBvcnQubWV0YS5ob3QpIHtcbiAgaW1wb3J0Lm1ldGEuaG90Lm9uKCd2aXRlOmJlZm9yZVVwZGF0ZScsICgpID0+IHtcbiAgICB3aW5kb3cucGFyZW50Py5wb3N0TWVzc2FnZSh7IHR5cGU6ICdzYW5kYm94OmJlZm9yZVVwZGF0ZScgfSwgJyonKTtcbiAgfSk7XG4gIGltcG9ydC5tZXRhLmhvdC5vbigndml0ZTphZnRlclVwZGF0ZScsICgpID0+IHtcbiAgICB3aW5kb3cucGFyZW50Py5wb3N0TWVzc2FnZSh7IHR5cGU6ICdzYW5kYm94OmFmdGVyVXBkYXRlJyB9LCAnKicpO1xuICB9KTtcbn0iXSwiZmlsZSI6Ii9hcHAvc3JjL21haW4uanN4In0=