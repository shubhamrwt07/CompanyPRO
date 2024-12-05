const mongoose = require("mongoose");
require("dotenv").config();

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
      ssl: true,
    });
    // console.log(`MongoDB Connected: ${conn.connection.host}`);
    console.log("MongoDB Connected..!");
    // await checkAndCreateSuperAdminRole();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

//check if super admin
// const checkAndCreateSuperAdminRole = async () => {
//   try {
//     const roleName = "super-admin";
//     const existingRole = await Role.findOne({ name: roleName });

//     if (!existingRole) {
//       const newRole = new Role({
//         name: roleName,
//       });

//       await newRole.save();
//       console.log(`Created ${roleName} role.`);
//     }
//   } catch (error) {
//     console.error(`Error checking or creating role: ${error.message}`);
//   }
// };

module.exports = connectDB;
