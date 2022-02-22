//javascript version of a class --> constructor function
function Person(first, last, age, gender, interests) { //constructor function; a capital letter is used to make constructor functions easier to recognize
    this.name = {
        first: first,
        last: last
    };
    this.age = age;
    this.gender = gender;
    let pronouns = function () {
        let pronoun = '';
        if (this.gender === 'male'|| this.gender === 'man') {
            this.pronoun = 'He';
        }
        else if (this.gender === 'female' || this.gender === 'woman') {
            this.pronoun = 'She';
        }
        else {
            this.pronoun = 'They';
        }
    }
    this.interests = interests;
    this.bio = function() {
        console.log(this.name.first + ' ' + this.name.last + " is " + this.age + ' years old. ' + this.pronoun + ' likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    };
    this.greeting = function() {
        console.log('Hi! I\'m ' + this.name.first + '.');
    };
}

//new keyword creates a new object INSTANCE
//new keyword, followed by function name and its required (if any) parameters
//this instance is stored in a variable
const person1 = new Person('Bob', 'Smith', 32, 'male',['music', 'skiing']); 
const person2 = new Person('Sarah', 'Knight', 23, 'female', ['animation', 'ultimate frisbee']); //these variables contain the objects and their contents (properties)

//these new objects are stored in a namespace
    //to access their properties and methods, you have to call the namespace
        //it's all encapsulated so that other functionality isn't impacted
    //different namespaces but have the same properties: name and greeting

