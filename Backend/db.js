// getting-started.js
import { connect } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
import dns from 'dns';
dns.setServers(['8.8.8.8', '1.1.1.1']);
// connecttomongo().catch(err => console.log(err));

const connecttomongo = async ()=>{
try {
    await connect(process.env.MONGO_URI);
    console.log("Successfully Connected To dataBase");
  } catch (error) {
    console.log("Database connection failed:", error.message);
  }
}

export default connecttomongo;