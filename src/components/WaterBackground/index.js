import React from 'react';

import { WaterCanvas, WaterModel, RainMaker } from '../../utils/waterCanves';

export default class WaterBackground extends React.Component {
	constructor() {
		super();
		this.state = { waterModel: null, waterCanves: null };

		this.touchWater = this.touchWater.bind(this);
	}
	componentDidMount() {
		const waterModel = new WaterModel(
			window.innerWidth, 
			window.innerHeight, 
			{
				resolution:10.0,
				interpolate:true,
				damping:0.985,
				clipping:8,
				evolveThreshold:0.005,
				maxFps:30,
				showStats:false
			});

		const waterCanvas = new WaterCanvas(
			window.innerWidth, 
			window.innerHeight,
			"waterHolder", 
			waterModel, 
			{
				backgroundImageUrl: require('../../imgs/grid.svg'),
				lightRefraction: 9.0,
				lightReflection: 0.1,
				maxFps: 60,
				showStats:false
			});
		this.setState({ waterModel, waterCanvas })
		document.addEventListener('mousemove', (e) => this.touchWater(e.clientX, e.clientY))
	}
	touchWater(x, y) {
		const { waterModel } = this.state;
		const finger = [
			[0.5, 1.0, 0.5],
			[1.0, 1.0, 1.0],
			[0.5, 1.0, 0.5]
		];
		waterModel.touchWater(x, y, 1.5, finger);
	}
	render() {
		return (
			<div 
				className="fixed"
				style={{ zIndex: -10, top: 0, left: 0, width: '100vw', height: '100vh' }}
				ref={ref => this.waterHolder = ref} id="waterHolder">
			</div>	
		)
	}
}