const monogoose =require("mongoose");

async function connect() {
    try {
        await monogoose.connect(
            "mongodb+srv://lviigisalu:qwerty123@cluster0.nqtqkhx.mongodb.net/",
            {useNewUrlParser: true}
        );
    } catch (err) {
        console.error("Error connecting to mongodb")
        console.error(err)
    }
}
module.exports = {connect}