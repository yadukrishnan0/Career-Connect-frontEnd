const path = require('path'); // Import the path module

const jobModel = require("../models/jobSchema"); // Import jobModel from jobSchema
const applicationModel = require("../models/applicationModel"); // Import applicationModel from applicationModel

module.exports = {
  // Controller function to handle posting a new job
  postJob: async (req, res, next) => {
    try {
      const { userId } = req.user; // Extract userId from authenticated user
      req.body.companyId = userId; // Add companyId to the request body
      const newJob = new jobModel(req.body); // Create a new job document using jobModel
      await newJob.save(); // Save the new job to the database
      res
        .status(201)
        .json({ success: true, message: "Job posted successfully" }); // Respond with success message
    } catch (error) {
      next(error); // Pass any errors to the error handling middleware
    }
  },

  // Controller function to retrieve applications for jobs posted by the current user
  applicationGet: async (req, res, next) => {
    try {
      const { userId } = req.user; // Extract userId from authenticated user
      const jobapplications = await applicationModel
        .find({ companyId: userId }) // Find applications where companyId matches userId
        .populate("jobId"); // Populate job details in the applications
      res.status(200).json({ message: "ok", jobapplications }); // Respond with retrieved job applications
    } catch (error) {
      console.log(error); // Log any errors to the console
    }
  },

  // Controller function to retrieve candidates who applied for a specific job
  candidateGet: async (req, res, next) => {
    try {
      const jobId = req.query.jobId; // Extract jobId from query parameters
      const CanditesData = await applicationModel.findOne({ jobId: jobId }).populate('applications.userId'); // Find candidates for the specified jobId and populate user details
      res.status(200).json({ message:'success', CanditesData }); // Respond with retrieved candidates data
    } catch (err) {
        next(err); // Pass any errors to the error handling middleware
    }
  },

  // Controller function to download a resume file
  resumeGet: (req, res) => {
    try {
      const filePath = path.join(__dirname, '../public/assets', req.query.resume); // Construct file path based on query parameter
      res.sendFile(filePath); // Send the file as a response
    } catch (err) {
      console.error('Error sending file:', err); // Log any errors encountered while sending the file
      res.status(500).send('Error downloading file'); // Respond with an error message if file download fails
    }
  }
};
