import HelloWorld from '../../app/components/hello_world/hello_world.jsx'

describe("A suite", () => {
  it("contains spec with an expectation", () => {
    expect((new HelloWorld).foo()).toBe(false);
  });
});