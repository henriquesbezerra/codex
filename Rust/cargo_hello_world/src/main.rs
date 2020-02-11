// Import a crate time
extern crate time;


fn main() {

    // Create a instance variable 
    let date = time::now();

    // create a String variable with name a user
    let name = "Henrique Silva";

    // SHow on console user name and current date
    println!("Hello {}, today is {}/{}/{}", name, date.tm_mday, date.tm_mon, date.tm_year+1900);

    println!("\n The date object return: {:?}", date);
}
