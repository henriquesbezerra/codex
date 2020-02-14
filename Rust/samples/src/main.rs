extern crate time;

// Enum type
enum Gender{
    Female,
    Male,
    Other
}

// Struct type
struct Person{
    name: &'static str,
    gender: Gender
}

// function usign return
fn sum_1( a:i32, b:i32 ) -> i32{
    return a+b;
}

// function without return
fn sum_2( a:i32, b:i32 ) -> i32{
    // in this case (;) it is not necessary, because in last line Rust considers (}) how expression finalizer
    a+b
}

fn hello(){
    println!("Hello World!");
}

// function with pointer as params
fn do_sum(function: fn()){
    function()
}

// this is a modules declaration with simple functions
mod calculator{

    //private function
    fn is_zero(number: i32) -> bool{
        if number == 0 { return true};
        false
    }

    //public function
    pub fn add( a: i32, b: i32) -> i32 {
        a + b
    }

    //public function
    pub fn subtract( a: i32, b: i32) -> i32 {
        a - b
    }

    //public function
    pub fn multiple( a: i32, b: i32) -> i32 {
        a * b
    }

    //public function
    pub fn divide( a: i32, b: i32) -> i32 {
        if is_zero(b) { return 0; }
        a / b        
    }
}

// we can use alias to modules functions see
use calculator::add as add;
use calculator::subtract as subtract;
use calculator::multiple as multiple;
use calculator::divide as divide;


fn main(){
    // Rust has a concept called type inference, which deduces what is the type of the variable.
    // Because Rust are static typed, we need use correct types or castings to assign values in a variable.

    // Rust is about is about security and imutability, so let operator  grants ours variables never changes.

    // In Rust, we use let to assign values to a variable, this assign is imutable, is not possible to modify
    let a = "My Imutable variabel";
    println!("'a' is {}\n", a);

    // If we try change value of variable a errors is throw
    // a = "Try change value" 

    // Multiple assign
    let date = time::now();
    let (day, month, year) = (date.tm_mday, date.tm_mon, date.tm_year + 1900);

    println!("Today is {}/{}/{}", day, month, year);

    // Typed Assignment, here we can skip type inference, saying to Rust what type variable we want, this is called type anotation

    let my_age           : i8  = 27;
    let my_level         : i16 = 100;
    let my_current_stage : i16 = 10;

    println!("\nWelcome new HERO!! \nYour age is {}, \nyour current level is {} \nand you are in {} game stage", my_age, my_level, my_current_stage);


    println!("\n\n----------------");
    println!("\n MUTABLE output");

    // Mutable variables, can set a mutables variables 'mut' operator, is more secure explicitly define when we want a mutable variable
    let mut b = "This variable be your content re-assign";
    
    println!("b = {} \nis my imutable variable, before change",b);

    b = "new content";

    println!("b = {} \nis my mutable variable, after changes occurs",b);

    println!("\n\n----------------");
    println!("\n CONSTANT output");
    
    // Constants are values thats never changes, this type value need be declared in uppercase
    // when use constants, type inference not work and are required to specify the type of variable
    const C: i32 = 10;

    println!("My constant C, has value {}", C);

    // Functions are smallest piece of a code, in Rust everything starts in main function,
    // inside main others funcionts are invoked and useds

    // In most programming languages functions returns a value, in Rust the same, but in Rust diferent of most others languages
    // a keyword 'return' is not required, if 'return' is not specified the last line will be the return
    // see the deference between two funcionts declared in before de main function
    println!("\n\n----------------");
    println!("\n FUNCTIONS usage");

    let sum1 = sum_1(10,5);
    println!("\nsum_1(10,5) = {}", sum1);

    let sum2 = sum_2(5,5);
    println!("\nsum_2(5,5) = {}", sum2);

    // function as params / pointer to functions
    // Rust enables thats functions receive references to other functions through a pointer, let's see

    // here are declared a pointer to function sum_1 with type fn(), this type represents a functions
    let pointer_to_hello: fn() = hello;
    do_sum(pointer_to_hello);


    // Data types

    // characters, In Rust 1 char corresponds to a one unicode character, its the same to correspond to 8 bytes, thats differ from C

    let d: char = '\u{2764}'; //this code represents a heart
    println!("d = {}",d); // this print will show a heart in console

    // methods, the char type has many several useful methods, let's see some

    // is_digit, check is a valid character in a specific numerical base  like 2 to binary, 10 to decimal, 16 to hexadecimal
    let char1 = '\u{2764}';
    let char2: char = '9';
    let char3: char = '0';

    println!("{} is a digit? {}", char1, char1.is_digit(10));
    println!("{} is a binary? {}", char1, char1.is_digit(2));

    println!("\n\n{} is a digit? {}", char2, char2.is_digit(10));
    println!("{} is a binary? {}", char2, char2.is_digit(2));

    println!("\n\n{} is a digit? {}", char3, char3.is_digit(10));
    println!("{} is a binary? {}", char3, char3.is_digit(2));


    // escape_unicode, receive a unicode character and return your numeric representation, with a instance of 'EscapeUnicode'
    // thats be assign to a instace of String with collect() method, its enables interoperability 
    // in systems or comunication protocols thats no support unicode

    let unicode1: char = '→';
    let unicode1_str: String = unicode1.escape_unicode().collect();
    println!("\n unicode to String, escape_unicode(); {}",unicode1_str);


    // is_alphabetic, check if a char belong to some alphabet
    println!("is \u{2764} alpabhetic? {}", '\u{2764}'.is_alphabetic());
    println!("is 'a' alpabhetic? {}", 'a'.is_alphabetic());
    println!("is '1' alpabhetic? {}", '1'.is_alphabetic());


    // is_lowercase - check if character is lowercase
    // is_uppercase - check if character is uppercase
    // is_whitespace - check if character is whitespace
    // is_alphanumeric - check if character is alphanumeric
    // is_numeric - check if character is anumber


    println!("a is lowercase? {}", 'a'.is_lowercase());
    println!("a is uppercase? {}", 'a'.is_uppercase());
    println!("a is whitespace? {}", 'a'.is_whitespace());
    println!("a is alphanumeric? {}",'a'.is_alphanumeric());
    println!("a is numeric? {}",'a'.is_numeric());


    // Boolean, for true or false, in other languages 0 correspond to false but in Rust not
    // Rust also have boolean operators and, or, not

    let boolean_true: bool = true; // whithout inference
    let boolean_false = false; // with inference

    println!("\nboolean_true = {}\nboolean_false = {}\n ",boolean_true,boolean_false);

    println!("\ntrue AND false is? {}", true && false);
    println!("\ntrue OR false is? {}", true || false);
    println!("\nNOT true is? {}", !true);

    // Numeric values, Rust it has several primitive types to deal with numbers, that is divide in two type group
    // a group with signal and other whithout signal
    // a signal value use one bit to define its negative or positive

    // the integer primite has to function to helps see min and max value how far each can type integer get
    // variables types declared with u before number of bit didn't have signal, this u mean 'unsigned'
    // type with i prefix can do negative and positive, see examples above:

    println!("i8  = {} a {}", i8::min_value(), i8::max_value());
    println!("i16 = {} a {}", i16::min_value(), i16::max_value());
    println!("i32 = {} a {}", i32::min_value(), i32::max_value());
    println!("i64 = {} a {}", i64::min_value(), i64::max_value());

    println!("u8  = {} a {}", u8::min_value(), u8::max_value());
    println!("u16 = {} a {}", u16::min_value(), u16::max_value());
    println!("u32 = {} a {}", u32::min_value(), u32::max_value());
    println!("u64 = {} a {}", u64::min_value(), u64::max_value());


    // Integer types in Rust has interesting methods to deal with binary values,
    // these methods are very useful when talk of hardware development or comunication protocols
    

    let binary_one: i8 = 1; //this value is equal 00000001

    //let's examples
    println!("count numbers ones in binary for a value ({}) = {}",binary_one, binary_one.count_ones());
    println!("count numbers zeros in binary for a value ({}) = {}",binary_one, binary_one.count_zeros());

    println!("leading zeros, count zeros in beginning = {}", binary_one.leading_zeros());
    println!("trailing zeros, count zeros in end = {}", binary_one.trailing_zeros());

    println!("rotate bits to left in N bits {}", binary_one.rotate_left(7));
    println!("rotate bits to right in N bits {}", binary_one.rotate_left(8));

    println!("invert bits {:?}", binary_one.swap_bytes());

    // Decimals value, floating points
    let floating_value: f32 = 3.549236;
    println!("Floor: {}", floating_value.floor()); // Returns a integer part
    println!("Ceil: {}", floating_value.ceil()); // return one integer up
    println!("Round: {}", floating_value.round()); // return rounded value
    println!("Truncate: {}", floating_value.trunc()); // Returns a integer part
    println!("Fractional: {}", floating_value.fract()); // Returns a fractional part
    println!("Is Finite?: {}", floating_value.is_finite()); // check is finite
    println!("Is Infinite?: {}", floating_value.is_infinite()); // check is infinite
    println!("Is NaN?: {}", floating_value.is_nan()); // check is NaN


    // Arrays
    let array = ["Henrique","Silva","developer"];
    println!("{} : {} {}", array[2], array[0], array[1]);

    // declare array if sintax [type;value], arrays always have a same type o values.
    let array2 = [0;6]; // integer array started with zeros
    println!("array2 has len = {}", array2.len());

    let mut array3 = [' '; 4]; // chars array
    println!("array3 = {:?}",array3);
    array3[2]='a';
    println!("array3 = {:?}",array3);
    


    let mut array4 = [""; 4]; // string array
    println!("array4 = {:?}",array4);
    array4[0] = "Henrique";
    println!("array4 = {:?}",array4);


    let mut array5 = [0.00; 4]; // float array
    println!("array5 = {:?}",array5);
    array5[2]= 1.35;
    println!("array5 = {:?}",array5);

    // Array slice tecnic
    // in Rust we can get a pieces of array, whithout change original array, see;
    // This tecnic is useful for String to

    let array_to_slice = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    let piece_a = &array_to_slice[..]; //get all elements
    let piece_b = &array_to_slice[5..10]; // get starting in 5 to last element

    println!("array_to_slice = {:?}", array_to_slice);
    println!("piece_a = {:?}", piece_a);
    println!("piece_b = {:?}", piece_b);


    // array iteration with iter() method makes it possible iterate one by one item in array, see:
    let array_to_iter = ['a','b','c','d','e'];
    for item in array_to_iter.iter(){
        println!("{}",item);
    }
    
    // Type Tuples, this type is a list of independent values, used as key , value , but in Rust we can hav more value in a tuple

    let tuple = ('a',10,3.5);
    
    //we can access this values in tuples with element index
    println!("{}, {}, {}", tuple.0, tuple.1, tuple.2);

    //Or access with destructive let
    let (a0, a1, a2) = tuple;

    println!("{}, {}, {}", a0, a1, a2);

    // we can put tuples in array, but tuple required has same format, if some value is differ, error mismatched types occurs
    let tuple_1 = ('a',10);
    let tuple_2 = ('b',20);
    let tuple_3 = ('c',30);

    let array_of_tuples = [tuple_1, tuple_2, tuple_3];

    println!("array_of_tuples = {:?}", array_of_tuples); // obs.: this is cool


    // Enuns, this a type useful to create list of organized constant values, and access of your elements is do with :: expression,
    // this type needs declare out of main fn, see example in top file called Gender

    // see a struct using a enum type
    let person_1 = Person {
        name: "Henrique",
        gender: Gender::Male
    };
   
//    println!("{}, has gender: ", person_1.name, person_1.gender);

    // Rust provides a away to orginize our code in modules, inner modules we cant set private and public methods
    // whem we want a public method is just needed set pub prefix in functions, mods are declared out of fn main
    // see in top file, mod called calculator

    let mod_a = 10;
    let mod_b = 4;

    println!("{} + {} = {}",mod_a, mod_b, add(10,4));
    println!("{} - {} = {}",mod_a, mod_b, subtract(10,4));
    println!("{} * {} = {}",mod_a, mod_b, multiple(10,4));
    println!("{} / {} = {}",mod_a, mod_b, divide(10,4));


    // Conditional Controll with IF..ELSE,
    // we can test expression em redirect de program execution flow depending on the results

    if( 10 < 5 ){
        println!("10 is Smaller than 5!");
    }else{
        println!("10 is Bigger than 5!");
    }


    // we can use if without parentheses to, because parentheses is optional

    if  'a' == 'a' {
        println!("'a' == 'a' ? These chars is equal!");
    }

    // The result of if can be assign to a variable 

    let result_if = if 'b'.is_alphanumeric() { 
        "Is alphanumeric"
    } else { 
        "Other" 
    };

    println!("result_if = {}",result_if);

    
    // MATCH ! the powerfull alternative to avoid several IF..ELSE chained
    // if match we can search a for pattern (pattern matching) inside verification block and return one action, value if matchs!!


    // A Little more about pattern matching::
    /*
        Pattern matching is write code thats receive a value, search amoung various options which answer the pattern,
        this pattern can be a Numerical value, a String or a interval thats reported value fits.

        Pattern matching is main reasons for adopting several recently languages thats use functional paradigm, 
        because enables a power to data analysis in complex structures in simple and concise way.

        Haskell, Scala, Elixir and OCaml are using this type of pattern matching
    */


    // Exemple searchin a value in a options with inclusive ranges

    let grade_value: f32 = 0.9;
    let my_grade =  match grade_value {
        0.0...4.0 => "Below middle",
        4.1...8.9 => "In Middle",
        9.0...10.0 => "Upper Middle",
        _ => "So Crazy"
    };

    println!("my_grade is = {}", my_grade);

    




}