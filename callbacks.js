const posts = [
    {title: 'Post one', body: 'The first post'},
    {title: 'Post two', body: 'The second post'}
];

function getPosts(){
    setTimeout(()=>{
        let output = '';
        posts.forEach((post,index)=>{
            output += `<li>${post.title}</li>`;
        })
        document.body.innerHTML  = output;
    },1000)
}
getPosts();

function createPost(post,callback){
    setTimeout(()=>{
        posts.push(post)
        callback()
    },2000)
}

createPost({title: 'Post three',body: 'The third post'},getPosts)
