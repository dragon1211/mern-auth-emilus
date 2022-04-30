import React, { Component } from "react";
import DemoCard from "components/util-components/DemoCard";
import ApiContainer from "components/util-components/ApiContainer";
import { Row, Col } from "antd";
import IndexMd from "./markdown/index.en-US.md";
import BasicMd from "./markdown/basic.md";
import ContextMenuMd from "./markdown/context-menu.md";
import DropdownButtonMd from "./markdown/dropdown-button.md";
import EventMd from "./markdown/event.md";
import ItemMd from "./markdown/item.md";
import OverlayVisibleMd from "./markdown/overlay-visible.md";
import PlacementMd from "./markdown/placement.md";
import SubMenuMd from "./markdown/sub-menu.md";
import TriggerMd from "./markdown/trigger.md";
import Basic from "./Basic";
import ContextMenu from "./ContextMenu";
import DropdownButton from "./DropdownButton";
import Event from "./Event";
import Item from "./Item";
import OverlayVisible from "./OverlayVisible";
import Placement from "./Placement";
import SubMenu from "./SubMenu";
import Trigger from "./Trigger";

export class DropdownComponent extends Component {
  render() {
    return (
		<React.Fragment>
			<Row gutter={16} type="flex" >
				<Col sm={24} md={24} lg={12}>
					<DemoCard code={BasicMd}><Basic /></DemoCard>
					<DemoCard code={ItemMd}><Item /></DemoCard>
					<DemoCard code={EventMd}><Event /></DemoCard>
					<DemoCard code={SubMenuMd}><SubMenu /></DemoCard>
					<DemoCard code={ContextMenuMd}><ContextMenu /></DemoCard>
				</Col>
				<Col sm={24} md={24} lg={12}>
					<DemoCard code={PlacementMd}><Placement /></DemoCard>
					<DemoCard code={TriggerMd}><Trigger /></DemoCard>
					<DemoCard code={DropdownButtonMd}><DropdownButton /></DemoCard>
					<DemoCard code={OverlayVisibleMd}><OverlayVisible /></DemoCard>
				</Col>
			</Row>
			<ApiContainer code={IndexMd}/>
		</React.Fragment>
    );
  }
}

export default DropdownComponent;
