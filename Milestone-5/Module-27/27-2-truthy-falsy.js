let data;
data = 0;
data ='';
data = '0';
data ='  ';
data = false;
data = true;
data = null;
data = undefined;
data = {};
data = [];
if(data){
    console.log('Truthy');
}
else{
    console.log('Falsy');
}

let price = 22;
if(!price){
    console.log('Price is falsy')
}

let value = 0;
if(!!value){
    console.log('Truthy')
}