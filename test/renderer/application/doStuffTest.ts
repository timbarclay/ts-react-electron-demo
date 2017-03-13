import {expect} from "chai";
import "mocha";

import {sayHello, sayBye} from "../../../src/renderer/application/doStuff";

describe("Do Stuff", () => {
  it("should say hello", () => {
    const result = sayHello();
    expect(result).to.equal("Hello");
  });

  it("should say bye", () => {
    const result = sayBye();
    expect(result).to.equal("Good bye");
  })
});