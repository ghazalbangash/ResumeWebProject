function multiple(num1,num2){
    const result = num1*num2
    return result
}


const multiple= (num1,num2)=>{
    const result = num1*num2
    return result
}

const multiple = (num1,num2) => num1*num2


class animal{
    contructor(name,numOfLeg){
        this.name = name
        this.numOfLeg = numOfLeg
    }
}

class animal{
    contructor= (name,numOfLeg)=>{
        this.name = name
        this.numOfLeg = numOfLeg
    }
}


let map = new Map();
map.set('1', 'str1')
map.set(1,"num1")
map.set(true,"jdhf")

alert(map.get(1))
alert(map.get('1'))


let user = [
    {name:"x",age:25,occupation:'ajscja'},
    {name:"y",age:26,occupation:'ajscja'},
    {name:"z",age:22,occupation:'ajscja'},
    {name:"f",age:25,occupation:'ajscja'},
    {name:"sdf",age:25,occupation:'ajscja'}
]

let filterUSers = [];
for(let i =0;i<users.length;i++){
    if(users[i].age = 25)
    print(filterUSers)
}

let filterUsers = user.filter((user)=>{
    return user.age == 25
});

const array = [9,12,14,13];

const greaterThan10 = array.find(element => element >10);
