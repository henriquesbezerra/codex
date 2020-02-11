extern crate time;

mod mutable_variables;

fn main(){
    
    // In Rust, we use let to assign values to a variable, this assign is imutable, is not possible to modify
    let a = "My Imutable variabel";
    println!("'a' is {}\n", a);

    // Rust has a concept called type inference, which deduces what is the type of the variable.
    // Because Rust are static typed, we need use correct types or castings to assign values in a variable.

    // Multiple assign
    let date = time::now();
    let (day, month, year) = (date.tm_mday, date.tm_mon, date.tm_year + 1900);

    println!("Today is {}/{}/{}", day, month, year);

    // Typed Assignment, here we can skip type inference, saying to Rust what type variable we want, this is called type anotation

    let my_age           : i8  = 27;
    let my_level         : i16 = 100;
    let my_current_stage : i16 = 10;

    println!("\nWelcome new HERO!! \nYour age is {}, \nyour current level is {} \nand you are in {} game stage", my_age, my_level, my_current_stage);

    // Mutable variables example
    mutable_variables::mutable_variables();

}