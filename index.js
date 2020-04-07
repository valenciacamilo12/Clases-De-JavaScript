const {taskOne , taskTwo} = require('./tasks');

async function main(){
	try{
		console.time('Midiendo El Tiempo');
		const results = await Promise.all([taskOne(),taskTwo()])
		console.timeEnd('Midiendo El Tiempo');

		console.log('Task One returned ', results[0]);
		console.log('Task Two returned ', results[1]);

	}catch(e){
		console.log(e);
	}



	
}

main();