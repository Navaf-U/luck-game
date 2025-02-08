import mongoose from "mongoose";

const ScoreSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    timeTaken: { type: Number, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Score", ScoreSchema);
