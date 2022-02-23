//javascript version of a class --> constructor function
function Person(first, last, age, gender, interests) { //constructor function; a capital letter is used to make constructor functions easier to recognize
    this.name = {
        first: first,
        last: last
    };
    this.age = age;
    this.gender = gender;
    if (this.gender === 'male' || this.gender === 'man') {
        this.gender = "He";
    }
    else if (this.gender === 'female' || this.gender === 'woman') {
        this.gender = 'She';
    }
    else if (this.gender === 'non-binary' || this.gender === null) {
        this.gender = 'They';
    }
    this.interests = interests;
    let interestString = "";
    for (let interest of interests) {
        interestString += interest;
        if (interests.indexOf(interest) === interests.length - 1) {
            break;
        }
        else if (interests.indexOf(interest) === interests.length -2 ) {
            interestString += ", and "; //oxford comma!!!! 
        }
        else {
            interestString += ", ";
        }
    }
    this.bio = function() {
        console.log(this.name.first + ' ' + this.name.last + " is " + this.age + ' years old. ' + this.gender + ' likes ' + interestString + '.');
    };
    this.greeting = function() {
        console.log('Hi! I\'m ' + this.name.first + '.');
    };
}

//new keyword creates a new object INSTANCE
//new keyword, followed by function name and its required (if any) parameters
//this instance is stored in a variable
const person1 = new Person('Eivor', 'Varrinsdottir', 27, 'female',['flyting', 'hunting', 'archery', 'fishing']); 
const person2 = new Person('Scamp', 'Stovall', 16, 'male', ['napping', 'bird watching']); //these variables contain the objects and their contents (properties)


//these new objects are stored in a namespace
    //to access their properties and methods, you have to call the namespace
        //it's all encapsulated so that other functionality isn't impacted
    //different namespaces but have the same properties: name and greeting

