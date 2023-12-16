import mongoose from "mongoose"

mongoose.connect("mongodb://localhost/mydatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const Cat = mongoose.model("Cat", { name: String })

const kitty = new Cat({name: "Fluffy"})

kitty.save().then(() => {
    console.log("cat saved!")
    mongoose.connection.close()
})