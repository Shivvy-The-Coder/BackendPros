// call back hell and what it does in 
const fs = require ('fs')
fs.readFile('input.txt', "utf8", (err,data)=>
{
    if(err)
            {
                console.error("Error in reading file", err);
                return;
            }
            
    const modifyFileData = data.toLocaleUpperCase();
    fs.writeFile('output.txt',modifyFileData,(err)=>{
        if(err)
                {
                    console.log("error with writing file", err);
                    return ;
                }
        console.log("data writetn to the new file");
        fs.readFile('output.txt', 'utf8', (error,data)=>{
             if(error)
                    {
                        console.error("error reading the fle")
                        return;

                    }
                console.log(data);
        })
    });
})