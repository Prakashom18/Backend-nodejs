const { Console } = require('console')
const fs = require('fs')
fs.writeFile("day2.txt","Hey how are you", function(err){
    if(err){
        console.error(err);
    }
    else console.log("done");
})

fs.appendFile("day2.txt","Me fine about you", function(err){
    if(err){
        console.error(err);
    }
    else console.log("done");
})

fs.rename("day2.txt","LearningDay2.txt",function(err){
    if(err) console.error(err);
    else console.log("done")
});

fs.copyFile("LearningDay2.txt","./copy/hello.txt",function(err){
    if(err) console.error(err);
    else console.log("done");

})

fs.unlink("hey.txt",function(err){
    if(err) console.error(err);
    else console.log("done");
}) 

fs.rm("./copy",{recursive:true},function(err){
    if(err) console.error(err);
    else console.log("done");
})

