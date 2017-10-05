import { Tasks } from '/imports/api/tasks.js';

if(Tasks.find({}).count() === 0) {
	Tasks.insert({
		  text: 'Click on "Mark all as completed" top right to mark all tasks as completed using {multi: true}',
          createdAt: new Date(),
          checked: false,
	})
	Tasks.insert({
		  text: 'It works in this simple repo, but does not work in the original repo, do more research!',
          createdAt: new Date(),
          checked: false,
	})
}