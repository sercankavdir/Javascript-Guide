/*
* Bind, Call, Apply
*/

// Functions are special kind of objects
var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay){
        if(style === 'formal'){
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen!'
            +' I\'m ' + this.name + '. I\'m a ' + this.job +  ' and I\'m ' + this.age + ' years old.' );
        } else if (style === 'friendly'){
            console.log('Hey! What\s up? I\'m '+ this.name + 
            ' and I\'m ' + this.age + ' years old. Have a nice '+ 
            timeOfDay + '.');
        }
    }
}

//John objesindeki presentation metodunu emily e de set etmek istersek (call) kullanırız.
//This is called borrowing. we can use john's method on emily

var emily = {
    name: 'Emily', 
    age: 35,
    job: 'designer'

};

john.presentation('formal', 'morning');
john.presentation.call(emily, 'friendly', 'afternoon');

//Apply -> Benzer fakat array of argument istiyor.
//Aşağıdaki çalışmayacak çünkü bizim yazdığımız metod array of argument almıyor

john.presentation.apply(emily, ['friendly', 'afternoon']);

//Bind -> Call metoduna benzer it generates a copy of function so we can use it another where.
//Bind method will return a function so we have to store it somewhere.
var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('morning');
johnFriendly('night');


var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');