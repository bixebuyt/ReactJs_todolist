const uuidv4 = require('uuid/v4');

let items = [
	  {
	  	id: uuidv4(),
	    name: "Design",
	    level: 0,
	  },
	  {
	  	id: uuidv4(),
	    name: "Development",
	    level: 2,
	  },
	  {
	  	id: uuidv4(),
	    name: "Test",
	    level: 1,
	  },
	  {
	  	id: uuidv4(),
	    name: "Publich",
	    level: 2,
	  }
]
export default items;