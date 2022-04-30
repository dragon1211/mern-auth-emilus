import React from 'react'
import Flex from 'components/shared-components/Flex'
import { Anchor, Row, Col } from 'antd';

const { Link } = Anchor;

const utilTree = [
	{
		title: 'Background',
		desc: 'Utilities for controlling an elements background color.',
		list: [
			{ class: 'bg-primary', props: 'background-color: #3e82f7' },
			{ class: 'bg-secondary', props: 'background-color: #a461d8' },
			{ class: 'bg-success', props: 'background-color: #04d182' },
			{ class: 'bg-info', props: 'background-color: #3e82f7' },
			{ class: 'bg-warning', props: 'background-color: #ffc542' },
			{ class: 'bg-danger', props: 'background-color: #ff6b72' },
			{ class: 'bg-dark', props: 'background-color: #1a3353' },
			{ class: 'bg-gray', props: 'background-color: #455560' },
			{ class: 'bg-gray-light', props: 'background-color: #72849a' },
			{ class: 'bg-gray-lighter', props: 'background-color: #ededed' },
			{ class: 'bg-gray-lightest', props: 'background-color: #f7f7f8' }
		]
	},
	{
		title: 'Border',
		desc: 'Utilities for controlling border of an element.',
		list: [
			{ class: 'border', props: 'border: 1px solid #edf2f9' },
			{ class: 'border-top', props: 'border-top: 1px solid #edf2f9' },
			{ class: 'border-right', props: 'border-right: 1px solid #edf2f9' },
			{ class: 'border-bottom', props: 'border-bottom: 1px solid #edf2f9' },
			{ class: 'border-left', props: 'border-left: 1px solid #edf2f9' },
			{ class: 'border-0 ', props: 'border: 0' },
			{ class: 'border-top-0', props: 'border-top: 0' },
			{ class: 'border-right-0', props: 'border-right: 0' },
			{ class: 'border-bottom-0', props: 'border-bottom: 0' },
			{ class: 'border-left-0', props: 'border-left: 0' },
			{ class: 'rounded', props: 'border-radius: 0.625rem' },
			{ class: 'rounded-top', props: 'border-top-left-radius: 0.625rem; border-top-right-radius: 0.625rem;' },
			{ class: 'rounded-right', props: 'border-top-right-radius: 0.625rem; border-bottom-right-radius: 0.625rem;' },
			{ class: 'rounded-bottom', props: 'border-bottom-right-radius: 0.625rem; border-bottom-left-radius: 0.625rem;' },
			{ class: 'rounded-left', props: 'border-top-left-radius: 0.625rem; border-bottom-left-radius: 0.625rem' },
			{ class: 'rounded-circle', props: 'border-radius: 50% ' },
			{ class: 'rounded-0', props: 'border-radius: 0 ' }
		]
	},
	{
		title: 'Display',
		desc: 'Utilities for controlling the display box type of an element. Display utility classes able to apply sm, md, lg and xl as responsive breakpoint, e.g d-sm-none',
		list: [
			{ class: 'd-none', props: 'display: none' },
			{ class: 'd-inline', props: 'display: inline' },
			{ class: 'd-inline-block', props: 'display: inline-block' },
			{ class: 'd-block', props: 'display: block' },
			{ class: 'd-table', props: 'display: table' },
			{ class: 'd-table-row', props: 'display: table-row' },
			{ class: 'd-table-cell', props: 'display: table-cell' },
			{ class: 'd-flex', props: 'display: flex' },
			{ class: 'd-inline-flex', props: 'display: inline-flex' }
		]
	},
	{
		title: 'Flex',
		desc: 'Utilities for controlling flex box. Flex utility classes able to apply sm, md, lg and xl as responsive breakpoint, e.g flex-sm-wrap-reverse',
		list: [
			{ class: 'flex-row', props: 'flex-direction: row' },
			{ class: 'flex-column', props: 'flex-direction: column' },
			{ class: 'flex-row-reverse', props: 'flex-direction: row-reverse' },
			{ class: 'flex-column-reverse', props: 'flex-direction: column-reverse' },
			{ class: 'flex-wrap', props: 'flex-wrap: wrap' },
			{ class: 'flex-nowrap', props: 'flex-wrap: nowrap' },
			{ class: 'flex-wrap-reverse', props: 'flex-wrap: wrap-reverse' },
			{ class: 'flex-fill', props: 'flex: 1 1 auto' },
			{ class: 'flex-grow-0', props: 'flex-grow: 0' },
			{ class: 'flex-grow-1', props: 'flex-grow: 1' },
			{ class: 'flex-shrink-0', props: 'flex-shrink: 0' },
			{ class: 'flex-shrink-1', props: 'flex-shrink: 1' },
			{ class: 'justify-content-start', props: 'justify-content: flex-start' },
			{ class: 'justify-content-end', props: 'justify-content: flex-end' },
			{ class: 'justify-content-center', props: 'justify-content: center' },
			{ class: 'justify-content-between', props: 'justify-content: space-between' },
			{ class: 'justify-content-around', props: 'justify-content: space-around' },
			{ class: 'align-items-start', props: 'align-items: flex-start' },
			{ class: 'align-items-end', props: 'align-items: flex-end' },
			{ class: 'align-items-center', props: 'align-items: center' },
			{ class: 'align-items-baseline', props: 'align-items: baseline' },
			{ class: 'align-items-stretch', props: 'align-items: stretch' },
			{ class: 'align-content-start', props: 'align-content: flex-start' },
			{ class: 'align-content-end', props: 'align-content: flex-end' },
			{ class: 'align-content-center', props: 'align-content: center' },
			{ class: 'align-content-between', props: 'align-content: space-between' },
			{ class: 'align-content-around', props: 'align-content: space-around' },
			{ class: 'align-content-stretch', props: 'align-content: stretch' },
			{ class: 'align-self-auto', props: 'align-self: auto' },
			{ class: 'align-self-start', props: 'align-self: flex-start' },
			{ class: 'align-self-end', props: 'align-self: flex-end' },
			{ class: 'align-self-center', props: 'align-self: center' },
			{ class: 'align-self-baseline', props: 'align-self: baseline' },
			{ class: 'align-self-stretch', props: 'align-self: stretch' },
		]
	},
	{
		title: 'Float',
		desc: 'Utilities for controlling the wrapping of content around an element. Float utility classes able to apply sm, md, lg and xl as responsive breakpoint, e.g float-sm-right',
		list: [
			{ class: 'float-left', props: 'float: left' },
			{ class: 'float-right', props: 'float: right' },
			{ class: 'float-none', props: 'float: none' },
			{ class: 'clearfix', props: '&::after { display: block; clear: both; content: ""; }' }
		]
	},
	{
		title: 'Image',
		desc: 'Utilities for controlling image elements.',
		list: [
			{ class: 'img-fluid', props: 'max-width: 100%; height: auto' }
		]
	},
	{
		title: 'Opacity',
		desc: 'Utilities for controlling the opacity of an element.',
		list: [
			{ class: 'opacity-1', props: 'opacity: 1' },
			{ class: 'opacity-0', props: 'opacity: 0' },
			{ class: 'opacity-0-1', props: 'opacity: 0.1' },
			{ class: 'opacity-0-2', props: 'opacity: 0.2' },
			{ class: 'opacity-0-3', props: 'opacity: 0.3' },
			{ class: 'opacity-0-4', props: 'opacity: 0.4' },
			{ class: 'opacity-0-5', props: 'opacity: 0.5' },
			{ class: 'opacity-0-6', props: 'opacity: 0.6' },
			{ class: 'opacity-0-7', props: 'opacity: 0.7' },
			{ class: 'opacity-0-8', props: 'opacity: 0.8' },
			{ class: 'opacity-0-9', props: 'opacity: 0.9' },
		]
	},
	{
		title: 'Position',
		desc: 'Utilities for controlling how an element is positioned in the DOM.',
		list: [
			{ class: 'position-static', props: 'position: static' },
			{ class: 'position-relative', props: 'position: relative' },
			{ class: 'position-absolute', props: 'position: absolute' },
			{ class: 'position-fixed', props: 'position: fixed' },
			{ class: 'position-sticky', props: 'position: sticky' },
			{ class: 'fixed-top', props: 'position: fixed; top: 0; right: 0; left: 0; z-index: 1030;' },
			{ class: 'fixed-bottom', props: 'position: fixed; bottom: 0; right: 0; left: 0; z-index: 1030;' },
			{ class: 'sticky-top', props: 'position: sticky; top: 0; z-index: 1030;' },
		]
	},
	{
		title: 'Shadow',
		desc: 'Utilities for controlling the box shadow of an element.',
		list: [
			{ class: 'shadow-sm', props: 'box-shadow: 0 0.125rem 0.25rem rgba(#000000, 0.075)' },
			{ class: 'shadow', props: 'box-shadow: 0 0.5rem 1rem rgba(#000000, 0.15)' },
			{ class: 'shadow-lg', props: 'box-shadow: 0 1rem 3rem rgba(#000000, 0.175)' },
			{ class: 'shadow-none', props: 'box-shadow: none' }
		]
	},
	{
		title: 'Sizing',
		desc: 'Utilities for setting the height and weight of an element.',
		list: [
			{ class: 'w-25', props: 'width: 25%' },
			{ class: 'w-50', props: 'width: 50%' },
			{ class: 'w-75', props: 'width: 75%' },
			{ class: 'w-100', props: 'width: 100%' },
			{ class: 'h-25', props: 'height: 25%' },
			{ class: 'h-50', props: 'height: 50%' },
			{ class: 'h-75', props: 'height: 75%' },
			{ class: 'h-100', props: 'height: 100%' },
			{ class: 'mw-100', props: 'max-width: 100% ' },
			{ class: 'mh-100', props: 'max-height:' },
			{ class: 'min-vw-100', props: 'min-width: 100vw' },
			{ class: 'min-vh-100', props: 'min-height: 100vh' },
			{ class: 'vw-100', props: 'width: 100vw' },
			{ class: 'vh-100', props: 'height: 100vh' }
		]
	},
	{
		title: 'Spacing',
		desc: 'Utilities for controlling an elements padding & margin. Spacing utility classes able to apply sm, md, lg and xl as responsive breakpoint, e.g p-sm-3, m-lg-4',
		list: [
			{ class: 'p-0', props: 'padding: 0' },
			{ class: 'p-1', props: 'padding: 0.25rem' },
			{ class: 'p-2', props: 'padding: 0.5rem' },
			{ class: 'p-3', props: 'padding: 1rem' },
			{ class: 'p-4', props: 'padding: 1.5rem' },
			{ class: 'p-5', props: 'padding: 3rem' },
			{ class: 'pt-0', props: 'padding-top: 0' },
			{ class: 'pt-1', props: 'padding-top: 0.25rem' },
			{ class: 'pt-2', props: 'padding-top: 0.5rem' },
			{ class: 'pt-3', props: 'padding-top: 1rem' },
			{ class: 'pt-4', props: 'padding-top: 1.5rem' },
			{ class: 'pt-5', props: 'padding-top: 3rem' },
			{ class: 'pr-0', props: 'padding-right: 0' },
			{ class: 'pr-1', props: 'padding-right: 0.25rem' },
			{ class: 'pr-2', props: 'padding-right: 0.5rem' },
			{ class: 'pr-3', props: 'padding-right: 1rem' },
			{ class: 'pr-4', props: 'padding-right: 1.5rem' },
			{ class: 'pr-5', props: 'padding-right: 3rem' },
			{ class: 'pb-0', props: 'padding: 0' },
			{ class: 'pb-1', props: 'padding-bottom: 0.25rem' },
			{ class: 'pb-2', props: 'padding-bottom: 0.5rem' },
			{ class: 'pb-3', props: 'padding-bottom: 1rem' },
			{ class: 'pb-4', props: 'padding-bottom: 1.5rem' },
			{ class: 'pb-5', props: 'padding-bottom: 3rem' },
			{ class: 'pl-0', props: 'padding-left: 0' },
			{ class: 'pl-1', props: 'padding-left: 0.25rem' },
			{ class: 'pl-2', props: 'padding-left: 0.5rem' },
			{ class: 'pl-3', props: 'padding-left: 1rem' },
			{ class: 'pl-4', props: 'padding-left: 1.5rem' },
			{ class: 'pl-5', props: 'padding-left: 3rem' },
			{ class: 'px-0', props: 'padding-left: 0; padding-right: 0' },
			{ class: 'px-1', props: 'padding-left: 0.25rem; padding-right: 0.25rem' },
			{ class: 'px-2', props: 'padding-left: 0.5rem; padding-right: 0.5rem' },
			{ class: 'px-3', props: 'padding-left: 1rem; padding-right: 1rem' },
			{ class: 'px-4', props: 'padding-left: 1.5rem; padding-right: 1.5rem' },
			{ class: 'px-5', props: 'padding-left: 3rem; padding-right: 3rem' },
			{ class: 'py-0', props: 'padding-top: 0; padding-bottom: 0' },
			{ class: 'py-1', props: 'padding-top: 0.25rem; padding-bottom: 0.25rem' },
			{ class: 'py-2', props: 'padding-top: 0.5rem; padding-bottom: 0.5rem' },
			{ class: 'py-3', props: 'padding-top: 1rem; padding-bottom: 1rem' },
			{ class: 'py-4', props: 'padding-top: 1.5rem; padding-bottom: 1.5rem' },
			{ class: 'py-5', props: 'padding-top: 3rem; padding-bottom: 3rem' },
			{ class: 'm-0', props: 'margin: 0' },
			{ class: 'm-1', props: 'margin: 0.25rem' },
			{ class: 'm-2', props: 'margin: 0.5rem' },
			{ class: 'm-3', props: 'margin: 1rem' },
			{ class: 'm-4', props: 'margin: 1.5rem' },
			{ class: 'm-5', props: 'margin: 3rem' },
			{ class: 'mt-0', props: 'margin-top: 0' },
			{ class: 'mt-1', props: 'margin-top: 0.25rem' },
			{ class: 'mt-2', props: 'margin-top: 0.5rem' },
			{ class: 'mt-3', props: 'margin-top: 1rem' },
			{ class: 'mt-4', props: 'margin-top: 1.5rem' },
			{ class: 'mt-5', props: 'margin-top: 3rem' },
			{ class: 'mr-0', props: 'margin-right: 0' },
			{ class: 'mr-1', props: 'margin-right: 0.25rem' },
			{ class: 'mr-2', props: 'margin-right: 0.5rem' },
			{ class: 'mr-3', props: 'margin-right: 1rem' },
			{ class: 'mr-4', props: 'margin-right: 1.5rem' },
			{ class: 'mr-5', props: 'margin-right: 3rem' },
			{ class: 'mb-0', props: 'margin: 0' },
			{ class: 'mb-1', props: 'margin-bottom: 0.25rem' },
			{ class: 'mb-2', props: 'margin-bottom: 0.5rem' },
			{ class: 'mb-3', props: 'margin-bottom: 1rem' },
			{ class: 'mb-4', props: 'margin-bottom: 1.5rem' },
			{ class: 'mb-5', props: 'margin-bottom: 3rem' },
			{ class: 'ml-0', props: 'margin-left: 0' },
			{ class: 'ml-1', props: 'margin-left: 0.25rem' },
			{ class: 'ml-2', props: 'margin-left: 0.5rem' },
			{ class: 'ml-3', props: 'margin-left: 1rem' },
			{ class: 'ml-4', props: 'margin-left: 1.5rem' },
			{ class: 'ml-5', props: 'margin-left: 3rem' },
			{ class: 'mx-0', props: 'margin-left: 0; margin-right: 0' },
			{ class: 'mx-1', props: 'margin-left: 0.25rem; margin-right: 0.25rem' },
			{ class: 'mx-2', props: 'margin-left: 0.5rem; margin-right: 0.5rem' },
			{ class: 'mx-3', props: 'margin-left: 1rem; margin-right: 1rem' },
			{ class: 'mx-4', props: 'margin-left: 1.5rem; margin-right: 1.5rem' },
			{ class: 'mx-5', props: 'margin-left: 3rem; margin-right: 3rem' },
			{ class: 'my-0', props: 'margin-top: 0; margin-bottom: 0' },
			{ class: 'my-1', props: 'margin-top: 0.25rem; margin-bottom: 0.25rem' },
			{ class: 'my-2', props: 'margin-top: 0.5rem; margin-bottom: 0.5rem' },
			{ class: 'my-3', props: 'margin-top: 1rem; margin-bottom: 1rem' },
			{ class: 'my-4', props: 'margin-top: 1.5rem; margin-bottom: 1.5rem' },
			{ class: 'my-5', props: 'margin-top: 3rem; margin-bottom: 3rem' },
		]
	},
	{
		title: 'Text',
		desc: 'Utilities for controlling the text element.',
		list: [
			{ class: 'text-monospace', props: 'font-family: $font-family-monospace' },
			{ class: 'text-justify', props: 'text-align: justify' },
			{ class: 'text-wrap', props: 'white-space: normal' },
			{ class: 'text-nowrap', props: 'white-space: nowrap' },
			{ class: 'text-truncate', props: 'overflow: hidden; text-overflow: ellipsis; white-space: nowrap;' },
			{ class: 'text-left', props: 'text-align: left' },
			{ class: 'text-center', props: 'text-align: center' },
			{ class: 'text-right', props: 'text-align: right' },
			{ class: 'text-lowercase', props: 'text-transform: lowercase' },
			{ class: 'text-uppercase', props: 'text-transform: uppercase' },
			{ class: 'text-capitalize', props: 'text-transform: capitalize' },
			{ class: 'font-weight-light', props: 'font-weight: 300' },
			{ class: 'font-weight-lighter', props: 'font-weight: lighter' },
			{ class: 'font-weight-normal', props: 'font-weight: 400' },
			{ class: 'font-weight-semibold', props: 'font-weight: 500' },
			{ class: 'font-weight-bold', props: 'font-weight: bold' },
			{ class: 'font-weight-bolder', props: 'font-weight: bolder' },
			{ class: 'font-size-xxl', props: 'font-size: 1.875rem' },
			{ class: 'font-size-xl', props: 'font-size: 1.375rem' },
			{ class: 'font-size-lg', props: 'font-size: 1.25rem' },
			{ class: 'font-size-md', props: 'font-size: 1.05rem' },
			{ class: 'font-size-base', props: 'font-size: 0.875rem ' },
			{ class: 'font-size-sm', props: 'font-size: 0.75rem' },
			{ class: 'font-size-xs', props: 'font-size: 0.625rem' },
			{ class: 'text-primary', props: 'color: #3e82f7' },
			{ class: 'text-secondary', props: 'color: #a461d8' },
			{ class: 'text-success', props: 'color: #04d182' },
			{ class: 'text-info', props: 'color: #3e82f7' },
			{ class: 'text-warning', props: 'color: #ffc542' },
			{ class: 'text-danger', props: 'color: #ff6b72' },
			{ class: 'text-dark', props: 'color: #1a3353' },
			{ class: 'text-gray', props: 'color: #455560' },
			{ class: 'text-gray-light', props: 'color: #72849a' },
			{ class: 'text-gray-lighter', props: 'color: #ededed' },
			{ class: 'text-gray-lightest', props: 'color: #f7f7f8' },
			{ class: 'text-white', props: 'color: #ffffff' },
			{ class: 'text-body', props: 'color: #455560' },
			{ class: 'text-muted', props: 'color: rgba(#72849a, 0.7)' },
			{ class: 'text-placeholder', props: 'color: rgba(#72849a, 0.4)' },
			{ class: 'text-black-50', props: 'rgba(#000000, 0.5)' },
			{ class: 'text-white-50', props: 'rgba(#ffffff, 0.5)' },
			{ class: 'text-hide', props: 'font: 0/0 a; color: transparent; text-shadow: none; background-color: transparent; border: 0;' },
			{ class: 'text-decoration-none', props: 'text-decoration: none' },
			{ class: 'text-break', props: 'word-break: break-word: overflow-wrap: break-word' },
			{ class: 'text-reset', props: 'color: inherit' }
		]
	},
	{
		title: 'Visibility',
		desc: 'Utilities for controlling the visibility of an element.',
		list: [
			{ class: 'visible', props: 'visibility: visible' },
			{ class: 'invisible', props: 'visibility: hidden' }
		]
	}
]

const UtilityClasses = () => {
	return (
		<div>
			<Row>
				<Col xs={24} sm={24} md={26} lg={18}>
					<h2>Utility Classes</h2>
					<p>Emilus comes with utility css class inspired by bootstrap, which help you style your element quickly & handy.</p>
					{
						utilTree.map(elm => (
							<div className="mt-4" key={elm.title} id={elm.title}>
								<h4>{elm.title}</h4>
								<p>{elm.desc}</p>
								<div className="api-container border-0 p-0">
									<table>
										<thead>
											<tr>
												<th>Class</th>
												<th>Property</th>
											</tr>
										</thead>
										<tbody>
											{
												elm.list.map(list => (
													<tr key={list.class}>
														<td>{list.class}</td>
														<td>
															<Flex alignItems="center">
																{
																	elm.title === 'Background' && <span
																	className={`mr-2 d-inline-block ${list.class}`}
																	style={{height: 12, width: 12}}>
																</span> 
																}
																<span>{list.props}</span>
															</Flex>
														</td>
													</tr>
												))
											}
										</tbody>
									</table>
								</div>
							</div>
						))
					}
				</Col>
				<Col xs={24} sm={24} md={26} lg={6}>
					<Anchor className="ml-md-4" offsetTop={80}>
						{
							utilTree.map(elm => (
								<Link href={`#${elm.title}`} title={elm.title} key={`anchor-${elm.title}`} />
							))
						}
					</Anchor>
				</Col>
			</Row>
		</div>
	)
}

export default UtilityClasses
