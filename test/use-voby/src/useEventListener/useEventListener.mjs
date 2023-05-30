import { p as observable, h as effect } from "../../../woby/dist/setters-0ed3c7f1.mjs";
function useEventListener(eventName, handler, element, options) {
  const savedHandler = observable(handler);
  return effect(() => {
    const targetElement = (element == null ? void 0 : element()) ?? window;
    if (!(targetElement && targetElement.addEventListener))
      return void 0;
    const listener = (event) => savedHandler()(event);
    targetElement.addEventListener(eventName, listener, options);
    return () => {
      targetElement.removeEventListener(eventName, listener, options);
    };
  });
}
export {
  useEventListener
};