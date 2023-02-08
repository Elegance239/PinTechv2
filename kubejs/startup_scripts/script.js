// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

StartupEvents.registry('item', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
	event.create('vap_biomass').displayName('Vaporized Biomass')
	event.create('clean_filtered_gravel').displayName('Clean Filtered Gravel')
	event.create('failed_zinc_nugget').displayName('Failed Zinc Nugget')
	event.create('ground_dripstone').displayName('Ground Dripstone')
	event.create('tarnished_zinc_nugget').displayName('Tarnished Zinc Nugget')
	event.create('wet_filtered_gravel').displayName('Wet Filtered Gravel')
	event.create('dense_gravel').displayName('Dense Gravel')
	event.create('cellulose').displayName('Cellulose')
})

StartupEvents.registry('block', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})