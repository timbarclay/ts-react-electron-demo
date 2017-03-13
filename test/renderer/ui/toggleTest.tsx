import * as React from "react";
import {expect} from "chai";
import {mount, shallow} from "enzyme";
import * as sinon from "sinon";

import Toggle from "../../../src/renderer/ui/components/toggle/Toggle";

describe("<Toggle />", () => {
  it("displays current toggle", () => {
    let toggleState = true;
    const toggle = shallow(<Toggle toggle={toggleState} onToggle={null} />);
    expect(toggle.text()).to.contain("On");
  });

  it("calls onToggle when button is clicked", () => {
    const onToggle = sinon.spy();
    const toggle = shallow(<Toggle toggle={true} onToggle={onToggle} />);
    toggle.find("button").simulate("click");
    expect(onToggle).to.have.property("callCount", 1);
  });
})