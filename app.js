const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const studentSchema = require('./module/StudentdataModule'); // Ensure this path is correct

// Connect to the MongoDB database
mongoose.connect('mongodb://127.0.0.1:27017/fullstack', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the process with failure
});

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    try {
        const students = await studentSchema.find();
        if (students.length > 0) {
            res.status(200).json(students);
        } else {
            res.status(404).json({ "message": "No data found" });
        }
    } catch (error) {
        res.status(500).json({ "message": "Internal server error", "error": error.message });
    }
});

// Create a new student
app.post('/post-data', async (req, res) => {
    try {
         
        const student=new studentSchema(req.body);
        await student.save();
        res.status(201).json(student);
    } catch (error) {
        res.status(400).json({ "message": "Bad Request", "error": error.message });
    }
});

// Update a student by ID
app.put('/put-data/:id', async (req, res) => {
    try {
      

        const studendupdate=await studentSchema.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})

        if(!studendupdate){
           return  res.status(404).json({"message":"not found"});

        }

        res.json(studendupdate)
    } catch (error) {
        res.status(400).json({ "message": "Bad Request", "error": error.message });
    }
});

// Delete a student by ID
app.delete('/delete-data/:id', async (req, res) => {
    try {
        const student = await studentSchema.findByIdAndDelete(req.params.id);
        if (!student) {
            return res.status(404).json({ "message": "Student not found" });
        }
        res.json({ "message": "Student deleted", student });
    } catch (error) {
        res.status(500).json({ "message": "Internal server error", "error": error.message });
    }
});

const port = 9009;
app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
});
