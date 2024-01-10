const FS = require('fs');
const path = require('path');

const RequestLogger = async (req,res,next)=>{
    try{
        const date = Date(Date.now());
        const method = req.method; 
        const url = req.url;
        const log = `${date} ${method} ${url}`;
        const logPath = path.resolve(__dirname,'../../../logging.txt');

        await FS.writeFile(logPath,log+'\n',
        {
            encoding:"utf8",
            flag:"a"
        },
        (err)=>{
            if(err){
                throw err;
            }
        });

        console.log(log);
        next();
    }catch(Error){
        next(Error);
    }
}

module.exports = RequestLogger;