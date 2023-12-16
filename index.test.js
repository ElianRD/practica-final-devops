describe("Test Hello World", () => {
  test("Message", () => {
    if (typeof document !== "undefined") {
      const body = document.createElement("body");
      const h1 = document.createElement("h1");
      h1.textContent = "Hello World";
      body.appendChild(h1);

      expect(document.body.textContent).toContain("Hello World");
    } else {
      console.warn("The test failed");
    }
  });
});
