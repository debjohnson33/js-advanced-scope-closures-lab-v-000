function produceDrivingRange(blocks) {
	return function(starting, ending) {
		let start = parseInt(starting);
		let end = parseInt(ending);
		let distanceToTravel = Math.abs(end - start);
		let difference = blocks - distanceToTravel;

		if (difference > 0) {
			return `within range by ${difference}`
		} else {
			return `${Math.abs(difference)} blocks out of range`
		}
	}
}

function produceTipCalculator(percent) {
	return function(fare) {
		return fare * percent;
	}
}

function createDriver() {
	let driverId = 0;
	return class {
		constructor(name) {
			this.name = name;
			this.id = ++driverId;
		}
	}
}