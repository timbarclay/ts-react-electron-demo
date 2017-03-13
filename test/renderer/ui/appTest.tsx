import * as React from "react";
import {expect} from "chai";
import {shallow} from "enzyme";
import * as sinon from "sinon";

import * as doStuff from "../../../src/renderer/application/doStuff";
import App from "../../../src/renderer/ui/App";
import Toggle from "../../../src/renderer/ui/containers/toggleContainer";

describe("<App />", () => {
  it("displays result of sayHello", () => {
    const sayHello = sinon.stub(doStuff, "sayHello").returns("Yo!");
    const app = shallow(<App />);
    expect(app.text()).to.contain("Yo!");
  });

  it("renders a <Toggle>", () => {
    const app = shallow(<App />);
    expect(app.find(Toggle)).to.have.length(1);
  });
})