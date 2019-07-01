/*
* Lecture: Closures
*/
/*
Closure un amacı retirement fonksiyonu bittikten sonra
hala içindeki parametreyi ve variable ı anonymous
functionda hala kullanılabiliyor olmamız
-> An inner function has always access to the variables
and pararmeters of its outer function, even after
the outer function has returned.
*/
function retirement(retirementAge){
    var a = ' years left until retirement.';
    return function (yearOfBirth){
        var age = 2019 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);
/*
//Same result as above
retirement(66)(1990);
*/
//Aynı insanın ülkelere göre farklı emeklilik yılları kaldığını
//görebiliyoruz. Çok etkili!!



//interviewQuestion return ettikten sonra bile hala 
//içindeki parametreyi kullanabiliyoruz ve bu decision
// anonymous fonksiyonun içinde oluyor.
function interviewQuestion(job){
    return function (name){
        if(job == 'designer'){
            console.log(name + ' can you explain....');
        } else if (job == 'teacher'){
            console.log('What do you teach '+ name +'?');
        } else {
            console.log('What do you do '+ name + '?');
        }
    }
}

interviewQuestion('teacher')('Vildan');
interviewQuestion('designer')('Sercan');
interviewQuestion('teacher')('John');
interviewQuestion()('Jane');

