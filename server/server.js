import cors from 'cors';
import express from 'express';
import { connectToDB,db } from './db.js';
import { ObjectId } from 'mongodb'; 

const app = express();
const port = 9000;

app.use(cors());
app.use(express.json({ limit: '10mb' })); 
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Route to handle contact form submission
app.post('/contact', async (req, res) => {
  try {
    const contactData = req.body; // Get data from the request body

    // Basic validation to ensure all required fields are filled
    if (
      !contactData.firstName ||
      !contactData.lastName ||
      !contactData.email ||
      !contactData.mobileNumber ||
      !contactData.message
    ) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const collection = db.collection('contacts'); // Use the 'contacts' collection
    const result = await collection.insertOne(contactData); // Save the contact data to DB

    // Send success response with the inserted document ID
    res.status(200).json({ message: 'Contact information saved successfully.', id: result.insertedId });
  } catch (error) {
    console.error('Error saving contact data:', error);
    res.status(500).json({ error: 'Failed to save contact information.' });
  }
});


app.get('/contact', async (req, res) => {
  try {
    const collection = db.collection('contacts'); // Access the same 'contacts' collection
    const contacts = await collection.find({}).toArray(); // Get all entries

    res.status(200).json(contacts); // Send the contact list as JSON
  } catch (error) {
    console.error('Error retrieving contact data:', error);
    res.status(500).json({ error: 'Failed to retrieve contact information.' });
  }
});


app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body; // Extract credentials from request

    const user = await db.collection("admin").findOne({ Username: username }); // Look for the user in 'admin' collection

    if (!user) {
      return res.json({ error: "Username not found. Please sign up." }); // Username not found
    }

    if (user.Password === password) {
      res.json({ message: "Login successfully", values: user }); // Login success
    } else {
      res.json({ error: "Incorrect password. Please try again." }); // Password mismatch
    }
  } catch (e) {
    console.error(e);
    res.json({ error: "An error occurred during login. Please try again later." }); // Handle unexpected errors
  }
});



app.delete('/contact/:id', async (req, res) => {
  const { id } = req.params; // Extract ID from URL

  try {
    const collection = db.collection('contacts'); // Get the collection
    const result = await collection.deleteOne({ _id: new ObjectId(id) }); // Delete document by ObjectId

    if (result.deletedCount === 1) {
      res.status(200).json({ message: 'Contact deleted successfully.' }); // Success
    } else {
      res.status(404).json({ message: 'Contact not found.' }); // Not found
    }
  } catch (error) {
    console.error('Error deleting contact:', error);
    res.status(500).json({ message: 'Internal server error.' }); // Internal error
  }
});





connectToDB(() => {
    app.listen(port, () => {
        console.log("Server running at port 9000");
    });
});
