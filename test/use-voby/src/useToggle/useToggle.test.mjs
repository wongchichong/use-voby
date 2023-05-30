import { test, renderHook, act } from "../jasmine.mjs";
import { useToggle } from "./useToggle.mjs";
describe("use toggle()", () => {
  test("should use toggle be ok", () => {
    const { result } = renderHook(() => useToggle());
    const [value, toggle, setValue] = result.current;
    expect(value()).toBe(false);
    expect(typeof toggle).toBe("function");
    expect(typeof setValue).toBe("function");
  });
  test("should default value works", () => {
    const { result } = renderHook(() => useToggle(true));
    const [value] = result.current;
    expect(value()).toBe(true);
  });
  test("setValue should mutate the value", () => {
    const { result } = renderHook(() => useToggle());
    const [, , setValue] = result.current[1]();
    expect(result.current[0]()).toBe(false);
    act(() => {
      setValue(true);
    });
    expect(result.current[0]()).toBe(true);
    act(() => {
      setValue((prev) => !prev);
    });
    expect(result.current[0]()).toBe(false);
  });
  test("toggle should mutate the value", () => {
    const { result } = renderHook(() => useToggle());
    const [, toggle] = result.current;
    expect(result.current[0]()).toBe(false);
    act(() => {
      toggle();
    });
    expect(result.current[0]()).toBe(true);
    act(() => {
      toggle();
    });
    expect(result.current[0]()).toBe(false);
  });
});
