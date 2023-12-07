const fs = require('fs');

const currentDate = new Date();

const content = currentDate.getTime();

const data = {
    timestamp : content
};

const stringData = JSON.stringify(data);

fs.writeFile(`./${currentDate.toISOString()}.txt`,stringData, 'utf8', (error)=>{
    if(error){
        console.error(error)
        return;
    }
    console.log('File created succesfully')
});
