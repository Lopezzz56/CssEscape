const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Enable CORS for all requests
app.use(cors());

// Route to fetch postal details by PIN code
app.post('/api/postal/:pincode', async (req, res) => {
  const { pincode } = req.params;

  try {
    const response = await axios.get(`https://api.postalpincode.in/pincode/${pincode}`);
    const data = response.data;

    if (data[0].Status === "Success") {
      res.json({
        message: "Data fetched successfully",
        status: "Success",
       // postOffices: data[0].PostOffice.slice(0, 2), // Return only the first two results
      });
    } else {
      res.status(404).json({
        message: "No records found",
        status: "Error",
        postOffices: null,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while fetching the data",
      status: "Error",
      error: error.message,
    });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
