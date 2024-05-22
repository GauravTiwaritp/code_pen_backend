import mongoose from "mongoose";
export const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.Mongodb_Url!, {
      dbName: "codepen",
    });
  } catch (error) {
    console.log(error);
  }
};
