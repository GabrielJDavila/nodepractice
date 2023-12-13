const print = (message, delay) => {
    setTimeout(() => {
        console.log(message)
    }, delay)
}

print("Start", 0)
print("async OP 1", 2000)
print("The End", 5000)
print("async OP 3", 4000)
print("async OP 2", 3000)
