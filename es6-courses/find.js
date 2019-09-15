var users = [
    { name: 'Jill' },
    { name: 'Alex' },
    { name: 'Bill' }
];

var user;

users.find(function(user){
   return user.name === 'Alex';
});


// posts

var posts = [
    {id: 1, title: 'New post'},
    {id: 2, title: 'Old post'}
];

var comment = { postId: 2, content: 'Great'};

function postForComment(posts, comment){
    return posts.find(function(post){
        return post.id === comment.postId;
    });
}

//console.log(postForComment(posts, comment));






