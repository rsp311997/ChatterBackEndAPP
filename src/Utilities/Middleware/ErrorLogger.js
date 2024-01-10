const FS = require('fs');
const path = require('path');

const ErrorLogger = async (error,req,res,next)=>{
    try{
        const date = Date(Date.now());
        const url = req.url;
        const method = req.method;
        const log = `${date} ${method} ${url} ${error.stack}\n`;
        const failpath = path.resolve(__dirname,'../../../ErrorLoggin.txt');

        FS.writeFile(failpath,log,
            {encoding:'utf8',flag:'a'},
            (err)=>{
                if(err){
                    throw err;
                }
            });
        console.log(error);
    }catch(Error){
        console.log(Error);
    }
    next();
}

module.exports = ErrorLogger;