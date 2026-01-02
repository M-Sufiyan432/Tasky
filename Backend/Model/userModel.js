import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      select: false, // 🔐 hide password by default
    },

    profileImage: {
      type: String,
      default: "",
    },

    tasks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Task", // ✅ Correct reference
      },
    ],
    role :{
      type : String,
      enum :["user","admin"],
      default :"user"
    },
    refreshToken: {
  type: String,
  select: false
}

  },
  {
    timestamps: true, // ✅ FIXED
  }
);

const User = mongoose.model("User", userSchema);

export default User;
