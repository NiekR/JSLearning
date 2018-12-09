const posts = [
{ title: 'Post one', body: 'This is post one' },
{ title: 'Post two', body: 'This is post two' }
 ];

 function getPosts (argument) {
 	// body... 
 	setTimeout(() => {
 		let output = '';
 		posts.forEach((post, index) => {
 			output += `<li>${post.title}</li>`;
 			
 		});
 		document.body.innerHTML = output

 	}, 1000);
 }

 
// Use callback to load more JS after function is loaded
function createPost(post, callback) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
 		posts.push(post);

 		const error = true;

 		if(!error) {
 			resolve();
 		} else {
 			reject('Error: something went wrong')
 		}
 	}, 2000);	
	});

 }


// createPost({
// 	title: 'Post three',
// 	body: 'This is post three'
// }).then(getPosts)
//   .catch(err => console.log(err));


// createPost({
// 	title: 'Post three',
// 	body:  'This is post three',
// }, getPosts);


// Promise.all
const promise1 = Promise.resolve('Hello');
const promise2 = 10;
				 // Executor w/ resolve reject params
const promise3 = new Promise((resolve, reject) => 
setTimeout (resolve ,2000, 'Goodbye'));

const promise4 = fetch
('https://jsonplaceholder.typicode.com/users').then(res => res.json);

Promise.all([promise1, promise2, promise3]).then(values => console.log(values));

// Async / Await
async function init() {
	await createPost({
		title: 'Post three',
		body: 'This is post three'
	});
	getPosts();
}

init();