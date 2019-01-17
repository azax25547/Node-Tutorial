const fs = require('fs');
// //create a file
//
// fs.writeFile('lol.txt',"adasda asdada dad as",err => {
//     if(err) console.log(err);
//     else {
//         console.log('Success');
//         fs.readFile('lol.txt','UTF-8',(err,file) => {
//             if (err) console.log(err)
//             else console.log(file);
//         })
//     }
// })

// fs.rename('lol.txt', 'lol2.txt', (err) => {
//     if(err)
//         console.log(err);
//     else {
//         console.log("Rename success")
//     }
// })

//Append to a file

// fs.appendFile('lol2.txt','new data to append',(err) => {
//     if(err)
//         console.log(err);
//     else {
//         console.log("Success append")
//     }
// });
//  Delete a file
// fs.unlink('lol2.txt', (err)=> {
//     if(err)
//         console.log(err);
//     else {
//         console.log("Success delete")
//     }
// });

//Make a directory
// fs.mkdir('tutorial',err => {
//     if(err)
//         console.log(err);
//     else {
//         // console.log("Success append")
//         fs.writeFile('./tutorial/example.txt', 'example', err => {
//             if(err)
//                 console.log(err);
//             else {
//                 console.log("Success append")
//             }
//         })
//     }
// });

//Delete a directory
// fs.rmdir('tutorial', err => console.log(err));

fs.readdir('example',(err,files) => {
    if(err)
        console.log(err);
    else {
        for(let file of files) {
            fs.unlink('./example/' + file, err => {
                if(err) console.log(err)
                else console.log("Success");
            })
        }
    }
})