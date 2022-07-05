const mongoose = require("mongoose");

//connection to mongodb
const connection = mongoose
  .connect("mongodb://localhost:27017/Sample", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Databse Connected"))
  .catch((err) => console.log(err));

//schema
const student = new mongoose.Schema({
  name: String,
  height: Number,
  workout: Boolean,
});

//create model
const Student = new mongoose.model("Student", student);

//inserting data
const fun = async () => {
  //insert data/document
  // const data = await Student.create({
  //   name: "Roshan",
  //   height: 6,
  //   workout: true,
  // });

  //finding/Read data
  // const data = await Student.find();
  // const data = await Student.find({ height: { $eq: 6 } });

  //update
  // const data = await Student.updateOne(
  //   { name: "Roshan" },
  //   { $set: { height: 7 } }
  // );

  //delete
  // const data = await Student.deleteOne({ name: "Sagar" });

  console.log(data);
};

fun();
