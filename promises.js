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

function createPost(post,){
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        posts.push(post)
        
        const error = false
        if(!error){
            resolve()
        }else{
            reject("Something went wrong")
        }
    },2000)              
   })
}

createPost({title: 'Post three',body: 'The third post'})
.then(getPosts)
.catch(err => console.log(err))

// Async Await 
async function init(){
    await createPost({title: 'Post three',body: 'The third post'})
    getPosts()
}

// Promise.all 

const promise1 = Promise.resolve("Hello")
const promise2 = 10
const promise3 = new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"Done")
})
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res.json())
Promise.all([promise1,promise2,promise3]).then(values=>console.log(values))

// Fetch api with async await 

async function fetchData(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    console.log(data)   
}
fetchData()