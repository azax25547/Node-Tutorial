const Posts = [
    {title: "LOL", body:"lorem ipsum"},
    {title: "LOL1", body:"lorem ipsudddm"}
]

const getPosts = () => {
    setTimeout(() => {
        let output = "";
        Posts.forEach((val,index) => {
            output += `<li>${val.title} and ${val.body}</li>`
        })
        document.body.innerHTML = output;
    },1000)
}

const createPost = (post, callback) => {
    setTimeout(()=>{
        Posts.push(post)
        callback();
    },2000)
}


createPost({title: "LOL", body:"lorem ipsum"},getPosts);