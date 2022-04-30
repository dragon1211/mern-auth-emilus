import React from 'react'
import { Row, Col, Card, Grid, Button, Badge } from 'antd';
import { pricingData } from './pricingData';
import utils from 'utils'

const { useBreakpoint } = Grid;

const Pricing = () => {
	const isMobile = !utils.getBreakPoint(useBreakpoint()).includes('lg')
	const colCount = pricingData.length
	console.log('isMobile', isMobile)
	return (
		<Card>
			<div className="container">
				<div className="text-center mb-4">
					<h2 className="font-weight-semibold">Pick a base plan</h2>
					<Row type="flex" justify="center">
						<Col sm={24} md={12} lg={8}>
							<p>
								Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission.
							</p>
						</Col>
					</Row>
				</div>
				<Row>
					{
						pricingData.map((elm , i) => {
							return (
								<Col key={`price-column-${i}`} xs={24} sm={24} md={24/colCount} lg={24/colCount} className={colCount === (i + 1) || isMobile ? '' : 'border-right'}>
									<div className="p-3">
										<div className="text-center">
											<img className="img-fluid" src={elm.image} alt="" />
											<h1 className="display-4 mt-4"> 
												<span className="font-size-md d-inline-block mr-1" style={{transform: 'translate(0px, -17px)'}}>$</span>
												<span>{elm.price}</span>
											</h1>
											<p className="mb-0">{elm.duration}</p>
										</div>
										<div className="mt-4">
											<h2 className="text-center font-weight-semibold">{elm.plan}</h2>
										</div>
										<div className="d-flex justify-content-center mt-3">
											<div>
												{
													elm.features.map((elm , i) => {
														return (
															<p key={`pricing-feature-${i}`}>
																<Badge color={'blue'} />
																<span>{elm}</span>
															</p>
														)
													})
												}
											</div>
										</div>
										<div className="mt-3 text-center">
											<Button type="default">Get Started</Button>
										</div>
									</div>
								</Col>
							)
						})
					}
				</Row>
				<div className="mt-5 pt-lg-4">
					<h1 className="text-center font-weight-light">Frequently Asked Questions</h1>
				</div>
				<Row gutter={60} className="mt-5">
					<Col sm={24} md={12} lg={12}>
						<div className="mb-5">
							<h3 className="font-weight-semibold">Is it expensive?</h3>
							<p>
								Twitch tail in permanent irritation poop on grasses, drink water out of the faucet,
								plays league of legends have my breakfast spaghetti yarn. 
								Taco cat backwards spells taco cat stick butt in face.
							</p>
						</div>
						<div className="mb-5">
							<h3 className="font-weight-semibold">Is it secure?</h3>
							<p>
								Splice the main brace Jolly Roger me hogshead prow red ensign ye swing the lead log ho. Handsomely spanker
								dance the hempen jig pinnace overhaul crimp tack booty rigging lateen sail.
								Sea Legs boatswain hempen halter provost bilge rat ballast maroon man-of-war bowsprit Chain Shot.
							</p>
						</div>
					</Col>
					<Col sm={24} md={12} lg={12}>
						<div className="mb-5">
							<h3 className="font-weight-semibold">How to start?</h3>
							<p>
								Purr like an angel nap all day, for poop on grasses for chase after silly colored fish toys
								around the house stares at human while pushing stuff off a table or i heard this rumor where
								the humans are our owners.
							</p>
						</div>
						<div className="mb-5">
							<h3 className="font-weight-semibold">Is there any discount?</h3>
							<p>
								Cry louder at reflection. More napping, more napping all the napping is exhausting toilet
								paper attack claws fluff everywhere meow miao french ciao litterbox.
							</p>
						</div>
					</Col>
				</Row>
			</div>
		</Card>
	)
}

export default Pricing

