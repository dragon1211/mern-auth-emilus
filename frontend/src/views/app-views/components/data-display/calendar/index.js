import React, { Component } from 'react';
import DemoCard from 'components/util-components/DemoCard';
import ApiContainer from 'components/util-components/ApiContainer';
import IndexMd from './markdown/index.en-US.md';
import BasicMd from './markdown/basic.md';
import CardMd from './markdown/card.md';
import CustomizeHeaderMd from './markdown/customize-header.md';
import NoticeCalendarMd from './markdown/notice-calendar.md';
import SelectMd from './markdown/select.md';
import Basic from './Basic';
import Card from './Card';
import CustomizeHeader from './CustomizeHeader';
import NoticeCalendar from './NoticeCalendar';
import Select from './Select';

export class CalendarComponent extends Component {
  render() {
    return (
      <div className="code-box-calendar-demo">
				<DemoCard code={BasicMd}><Basic /></DemoCard>
				<div className="calendar-notice">
					<DemoCard code={NoticeCalendarMd}><NoticeCalendar /></DemoCard>
				</div>
				<DemoCard code={CardMd}><Card /></DemoCard>
				<DemoCard code={SelectMd}><Select /></DemoCard>
				<DemoCard code={CustomizeHeaderMd}><CustomizeHeader /></DemoCard>
        <ApiContainer code={IndexMd} />
      </div>
    );
  }
}

export default CalendarComponent;
