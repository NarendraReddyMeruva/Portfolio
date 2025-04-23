import cors from 'cors';
import express from 'express';
import { connectToDB,db } from './db.js';
import { ObjectId } from 'mongodb'; // Add this at the top

const app = express();
const port = 9000;

app.use(cors());
app.use(express.json({ limit: '10mb' })); // Adjust as needed
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Route to handle contact form submission
app.post('/contact', async (req, res) => {
  try {
    const contactData = req.body;

    // Optional: basic validation
    if (
      !contactData.firstName ||
      !contactData.lastName ||
      !contactData.email ||
      !contactData.mobileNumber ||
      !contactData.message
    ) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const collection = db.collection('contacts');
    const result = await collection.insertOne(contactData);

    res.status(200).json({ message: 'Contact information saved successfully.', id: result.insertedId });
  } catch (error) {
    console.error('Error saving contact data:', error);
    res.status(500).json({ error: 'Failed to save contact information.' });
  }
});

app.get('/contact', async (req, res) => {
  try {
    const collection = db.collection('contacts');
    const contacts = await collection.find({}).toArray();

    res.status(200).json(contacts);
  } catch (error) {
    console.error('Error retrieving contact data:', error);
    res.status(500).json({ error: 'Failed to retrieve contact information.' });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await db.collection("admin").findOne({ Username: username });

    if (!user) {
      return res.json({ error: "Username not found. Please sign up." });
    }

    if (user.Password === password) {
      res.json({ message: "Login successfully", values: user });
    } else {
      res.json({ error: "Incorrect password. Please try again." });
    }
  } catch (e) {
    console.error(e);
    res.json({ error: "An error occurred during login. Please try again later." });
  }
});



app.delete('/contact/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const collection = db.collection('contacts'); // Use your existing db reference
    const result = await collection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 1) {
      res.status(200).json({ message: 'Contact deleted successfully.' });
    } else {
      res.status(404).json({ message: 'Contact not found.' });
    }
  } catch (error) {
    console.error('Error deleting contact:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});






connectToDB(() => {
    app.listen(port, () => {
        console.log("Server running at port 9000");
    });
});
