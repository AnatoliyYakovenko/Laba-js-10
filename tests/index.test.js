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
    expect(isNumber("Laba", 3)).toEqual("Це не число!");
    expect(isNumber(29, null)).toEqual("Це не число!");
    expect(isNumber(29, undefined)).toEqual("Це не число!");
  });
  it("should return undefined if both arguments are numbers", function () {
    expect(isNumber(2, 3)).toBeUndefined();
  });
});

describe("addNumbers", function () {
  it("should return 'Це не число!' if either argument is not a number", function () {
    expect(addNumbers("a", 3)).toEqual("Це не число!");
    expect(addNumbers(2, null)).toEqual("Це не число!");
  });
  it("should return the sum of two numbers if both arguments are numbers", function () {
    expect(addNumbers(2, 3)).toEqual(5);
    expect(addNumbers(-2, 3)).toEqual(1);
  });
});

describe("subNumbers", function () {
  it("should return 'Це не число!' if either argument is not a number", function () {
    expect(subNumbers("a", 3)).toEqual("Це не число!");
    expect(subNumbers(2, null)).toEqual("Це не число!");
  });
  it("should return the difference of two numbers if both arguments are numbers", function () {
    expect(subNumbers(2, 3)).toEqual(-1);
    expect(subNumbers(-2, 3)).toEqual(-5);
  });
});

describe("multiplyNumbers", function () {
  it("should return 'Це не число!' if either argument is not a number", function () {
    expect(multiplyNumbers("a", 3)).toEqual("Це не число!");
    expect(multiplyNumbers(2, null)).toEqual("Це не число!");
  });
  it("should return the product of two numbers if both arguments are numbers", function () {
    expect(multiplyNumbers(2, 3)).toEqual(6);
    expect(multiplyNumbers(-2, 3)).toEqual(-6);
  });
});

describe("divideNumbers", function () {
  it("should return 'Це не число!' if either argument is not a number", function () {
    expect(divideNumbers("a", 3)).toEqual("Це не число!");
    expect(divideNumbers(2, null)).toEqual("Це не число!");
  });
  it("should return 'На нуль ділити не можна!' if the second argument is 0", function () {
    expect(divideNumbers(2, 0)).toEqual("На нуль ділити не можна!");
  });
  it("should return the quotient of two numbers if both arguments are numbers and the second argument is not 0", function () {
    expect(divideNumbers(6, 3)).toEqual(2);
    expect(divideNumbers(-6, 3)).toEqual(-2);
  });
});

describe("getMinNumber function", () => {
  it("return the minimum number in the array", () => {
    expect(getMinNumber(arr)).toEqual(1);
  });
});

describe("getMaxNumber function", () => {
  it("return the maximum number in the array", () => {
    expect(getMaxNumber(arr)).toEqual(4);
  });
});

describe("Accumulator", () => {
  describe("increment method", () => {
    it("increment the value by 1", () => {
      const accumulator = new Accumulator(0);
      accumulator.increment();
      expect(accumulator.value).toEqual(1);
    });
  });

  describe("decrement method", () => {
    it("decrement the value by 1", () => {
      const accumulator = new Accumulator(0);
      accumulator.decrement();
      expect(accumulator.value).toEqual(-1);
    });
  });
});

describe("ClearAccumulator", () => {
  describe("clear method", () => {
    it("set the initial value", () => {
      const accumulator = new CancelableAccumulator(0);
      accumulator.increment();
      accumulator.clear();
      expect(accumulator.value).toEqual(0);
    });
  });
});

describe("click event", function () {
  it("toggles 'photo' class on image element", function () {
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
  it("scrolls to element a when 'a' key is pressed", function () {
    const a = document.querySelector("#a");
    spyOn(a, "scrollIntoView");
    const event = new KeyboardEvent("keydown", { key: "a" });
    document.dispatchEvent(event);
    expect(a.scrollIntoView).toHaveBeenCalled();
  });

  it("scrolls to element b when 'b' key is pressed", function () {
    const b = document.querySelector("#b");
    spyOn(b, "scrollIntoView");
    const event = new KeyboardEvent("keydown", { key: "b" });
    document.dispatchEvent(event);
    expect(b.scrollIntoView).toHaveBeenCalled();
  });

  it("scrolls to element c when 'c' key is pressed", function () {
    const c = document.querySelector("#c");
    spyOn(c, "scrollIntoView");
    const event = new KeyboardEvent("keydown", { key: "c" });
    document.dispatchEvent(event);
    expect(c.scrollIntoView).toHaveBeenCalled();
  });

  it("scrolls to element d when 'd' key is pressed", function () {
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
