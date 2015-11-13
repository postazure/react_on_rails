import App from '../../app/components/application.jsx'

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect((new App).foo()).toBe(false);
  });
});