
var ha2 = {
    svgNS: 'http://www.w3.org/2000/svg',
    signals: {
	x: 'X',
	y: 'Y',
	color: 'COLOR',
	size: 'SIZE',
	selection: 'SELECTION'
    }
};

window.addEventListener('load', function () {
    
    var barchart = createBarChart('drawing0', grade_percents);
    barchart.render();

    // YOUR CODE HERE (for Scatterplot MVC)

});


// Part 1, Re-create the grading Bar Chart
var createBarChart = function(elementId, data) {
    
    // YOU MAY HAVE CODE HERE


    var _drawChart = function() {
	// YOUR CODE GOES HERE

    }

    return {
	render: function() {
	    _drawChart();
	}
    };
};


// Part 2, MVC + Scatter plot


// makeSignaller from Class
var makeSignaller = function() {
    var _subscribers = []; // Private member

    // Return the object that's created
    return {
	// Register a function with the notification system
	add: function(handlerFunction) { _subscribers.push(handlerFunction); },

	// Loop through all registered function snad call them with passed
	// arguments
	notify: function(args) {
	    for (var i = 0; i < _subscribers.length; i++) {
		_subscribers[i](args);
	    }
	}
    };
}


// Create an object that handles UI Logic
var createController = function(model) {
    // YOUR CODE HERE


}




var createScatterModel = function(data) {
    // YOUR CODE HERE

    // This function gets the list of categories the data items
    // fall under. In this assignment it is used for filtering.
    var _getCategories = function() {
	var tmpObj = {};
	for (var i = 0; i < _data.length; i++)  {
	    tmpObj[_data[i]['Beverage_category'] ] = 1;
	}
	return Object.keys(tmpObj);
    }


    // YOUR CODE HERE





    return {
	getCategories: function() {
	    return _getCategories();
	}

	// YOUR CODE HERE
	


    } 
}


var createScatterControls = function(model) {
    // YOUR CODE HERE
    


}

var createScatterView = function(elementId, model) {
    // YOUR CODE HERE



}
