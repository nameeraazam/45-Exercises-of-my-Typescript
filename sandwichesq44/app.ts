function sandwich(...items: string[]): void {
    console.log("Sandwich order")

    for (let i =0; i < items.length; i++){
        console.log(`- ${items[i]}`)
    }
}

console.log("enjoy your sandwich nameera azam")

sandwich('capsicum', 'tomato', 'chicken')
sandwich('beef', 'cheese')
sandwich('garlic chicken', 'mayo sauce')