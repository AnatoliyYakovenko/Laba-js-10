describe("Check user event", () => {
  const desc = "<p>Check if button was clicked</p>";

  describe(desc, () => {
    it("Check if button was clicked", () => {
      spyOn(console, "log");
      onClick({
        target: "button",
      });
      expect(console.log).toHaveBeenCalled();
    });
  });
});

describe("isNumber", function () {
  it("check argument is a number", function () {
    expect(isNumber("Laba", 3)).toBe("Це не число!");
    expect(isNumber(29, null)).toBe("Це не число!");
    expect(isNumber(29, undefined)).toBe("Це не число!");
  });
  it("return undefined if both arguments are numbers", function () {
    expect(isNumber(2, 3)).toBeUndefined();
  });
});

describe("addNumbers", function () {
  it("return the sum of two numbers", function () {
    expect(addNumbers(2, 3)).toBe(5);
  });
});

describe("subNumbers", function () {
  it("return the difference of two numbers", function () {
    expect(subNumbers(2, 13)).toBe(-11);
  });
});

describe("multiplyNumbers", function () {
  it("return the product of two numbers", function () {
    expect(multiplyNumbers(5, 10)).toBe(50);
  });
});

describe("divideNumbers", function () {
  it("check denominator isn't a 0", function () {
    expect(divideNumbers(2, 0)).toBe("На нуль ділити не можна!");
  });
  it("return the quotient of two numbers", function () {
    expect(divideNumbers(66, 3)).toBe(22);
  });
});

describe("getMinNumber function", () => {
  it("return the minimum number in the array", () => {
    expect(getMinNumber(arr)).toBe(-2);
  });
});

describe("getMaxNumber function", () => {
  it("return the maximum number in the array", () => {
    expect(getMaxNumber(arr)).toBe(324);
  });
});

describe("Accumulator", () => {
  describe("increment method", () => {
    it("increment the value by 1", () => {
      const accumulator = new Accumulator(0);
      accumulator.increment();
      expect(accumulator.value).toBe(1);
    });
  });

  describe("decrement method", () => {
    it("decrement the value by 1", () => {
      const accumulator = new Accumulator(0);
      accumulator.decrement();
      expect(accumulator.value).toBe(-1);
    });
  });
});

describe("CancelableAccumulator", () => {
  describe("clear method", () => {
    it("set the initial value", () => {
      const accumulator = new CancelableAccumulator(0);
      accumulator.increment();
      accumulator.clear();
      expect(accumulator.value).toBe(0);
    });
  });
});

describe("click event", function () {
  it("toggles 'photo' class on image", function () {
    const image = document.querySelector("#image");
    image.classList.add("photo");
    const event = new MouseEvent("click", { bubbles: true });
    image.dispatchEvent(event);
    expect(image.classList.contains("photo")).toBe(false);
    image.dispatchEvent(event);
    expect(image.classList.contains("photo")).toBe(true);
  });
});

describe("keydown event", function () {
  it("scrolls to element A", function () {
    const a = document.querySelector("#a");
    spyOn(a, "scrollIntoView");
    const event = new KeyboardEvent("keydown", { key: "a" });
    document.dispatchEvent(event);
    expect(a.scrollIntoView).toHaveBeenCalled();
  });

  it("scrolls to element B", function () {
    const b = document.querySelector("#b");
    spyOn(b, "scrollIntoView");
    const event = new KeyboardEvent("keydown", { key: "b" });
    document.dispatchEvent(event);
    expect(b.scrollIntoView).toHaveBeenCalled();
  });

  it("scrolls to element C", function () {
    const c = document.querySelector("#c");
    spyOn(c, "scrollIntoView");
    const event = new KeyboardEvent("keydown", { key: "c" });
    document.dispatchEvent(event);
    expect(c.scrollIntoView).toHaveBeenCalled();
  });

  it("scrolls to element D", function () {
    const d = document.querySelector("#d");
    spyOn(d, "scrollIntoView");
    const event = new KeyboardEvent("keydown", { key: "d" });
    document.dispatchEvent(event);
    expect(d.scrollIntoView).toHaveBeenCalled();
  });

  it("does not scroll when other keys are pressed", function () {
    const a = document.querySelector("#a");
    const b = document.querySelector("#b");
    const c = document.querySelector("#c");
    const d = document.querySelector("#d");
    spyOn(a, "scrollIntoView");
    spyOn(b, "scrollIntoView");
    spyOn(c, "scrollIntoView");
    spyOn(d, "scrollIntoView");
    const event = new KeyboardEvent("keydown", { key: "x" });
    document.dispatchEvent(event);
    expect(a.scrollIntoView).not.toHaveBeenCalled();
    expect(b.scrollIntoView).not.toHaveBeenCalled();
    expect(c.scrollIntoView).not.toHaveBeenCalled();
    expect(d.scrollIntoView).not.toHaveBeenCalled();
  });
});
