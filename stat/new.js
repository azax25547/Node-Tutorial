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

const createPost = (post) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            Posts.push(post)

            const error  = false
            if(!error){
                resolve();
            }else {
                reject('Something went wrong')
            }

        },2000)
    })
    
}



createPost({title: "LOL", body:"lorem ipsum"}).then(getPosts).catch(err => console.log(err))