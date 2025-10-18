pub fn strings() {
    println!("Strings");
    let phrase = String::from("This is a beautiful picture");

    println!("{phrase}");

    let index: usize = 10;
    let character_pos = phrase.chars().nth(index);

    match character_pos {
        Some(c) => println!("Character at index {index} is '{c}'"),
        None => println!("No character at index {index}"),
    }

    println!();
}
