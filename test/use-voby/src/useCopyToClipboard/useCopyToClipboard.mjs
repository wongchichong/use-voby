import "../../../woby/dist/index.es.mjs";
import { z as observable } from "../../../woby/dist/use_microtask-10cd6273.mjs";
function useCopyToClipboard() {
  const copiedText = observable(null);
  const copy = async (text) => {
    if (!(navigator == null ? void 0 : navigator.clipboard)) {
      console.warn("Clipboard not supported");
      return false;
    }
    try {
      await navigator.clipboard.writeText(text);
      copiedText(text);
      return true;
    } catch (error) {
      console.warn("Copy failed", error);
      copiedText(null);
      return false;
    }
  };
  return [copiedText, copy];
}
export {
  useCopyToClipboard
};
