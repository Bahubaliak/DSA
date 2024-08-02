function pattern(row, col) {
    
    if (row < 1) {
        return
    }
    if (col < row) {
        process.stdout.write("*")
        pattern(row, col + 1)
    } else {
        console.log("\n")
        pattern(row-1, 0)
    }
    
}

pattern(4, 0)
