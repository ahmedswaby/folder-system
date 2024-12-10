import useLocalStorage from "~/Core/Hooks/useLocalStorage";
import { renderHook } from '@testing-library/react';

describe("Read local storeg", () => {
  it("test useStoreg", () => {
    const storeg = renderHook(() => useLocalStorage("test", { name: "alex" }));

    expect(storeg.result.current[0]).toEqual({ name: "alex" });
  });
});

