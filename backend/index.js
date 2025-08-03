import express from "express"
import mongoose, { connect } from "mongoose";
import dotenv from "dotenv"
import cors from "cors";

import salonRoute from "./route/salon.route.js"
import serviceRoute from "./route/service.route.js"; 
import basicRoute from "./route/basic.route.js"
import hairColorRoute from "./route/haircolor.route.js"; 
import facialRoute from "./route/facial.route.js";
import pamperRoute from "./route/pamper.route.js";
import groomRoute from "./route/groom.route.js";
import hairSetRoute from "./route/hairset.route.js";
import userRoute from "./route/user.route.js";






const app = express()
app.use(cors());
app.use(express.json());

dotenv.config();

 const PORT = process.env.PORT || 4000;
 const URI = process.env.MongoDBURI;

//connect to mongoDB

try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
 console.log("connected to MongoDB");
 
} catch (error) {

  console.log("Error: ",error);
  
  
}

//defining routes

app.use("/salon",salonRoute)
app.use("/service",serviceRoute)
app.use("/basic", basicRoute)
app.use("/haircolor", hairColorRoute)
app.use("/facial", facialRoute)
app.use("/pamper", pamperRoute)
app.use("/groom", groomRoute)
app.use("/hairset",hairSetRoute)
app.use("/user", userRoute);

// app.get('/', (req, res) => {
//   res.send('SalonSphere App')
// })

app.listen(PORT, () => {
  console.log(`Server is  listening on port ${PORT}`)
})