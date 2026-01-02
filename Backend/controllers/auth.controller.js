import User from "../Model/userModel.js";
import bcryptjs from "bcryptjs";
import { SignInUserSchema, SignupUserSchema } from "../validation/auth.validators.js";
import { getAccessToken, getRefreshToken } from "../config/Token.js"


export const signup = async (req, res) => {
  try {
const parsed = SignupUserSchema.safeParse(req.body);

if (!parsed.success) {
  return res.status(400).json({
    success: false,
    message: parsed?.error?.errors[0]?.message,
  });
}

    const { name, username, email, password } = parsed.data;

    const userExists = await User.findOne({
      $or: [{ email }, { username }],
    });

    if (userExists) {
      return res.status(409).json({
        success: false,
        message: "Email or username already exists",
      });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    const user = await User.create({
      name,
      username,
      email,
      password: hashedPassword,
    });

    const accessToken = getAccessToken(user._id);
    const refreshToken = getRefreshToken(user._id);

    user.refreshToken = refreshToken;

     await user.save();

 const isProd = process.env.NODE_ENV === "production";

res.cookie("refreshToken", refreshToken, {
  httpOnly: true,
  secure: isProd,          
  sameSite: isProd ? "none" : "lax",
  maxAge: 7 * 24 * 60 * 60 * 1000,
});

    return res.status(201).json({
      success: true,
      message: "Signup successful",
      accessToken,
      user: {
        id: user._id,
        name: user.name,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Signup Error:", error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


export const signin = async (req, res) => {
  try {
    const parsed = SignInUserSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({
        success: false,
        message:
          parsed.error?.errors?.[0]?.message || "Invalid input",
      });
    }

    const { email, password } = parsed.data;

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User does not exist",
      });
    }

    if (!user.password) {
      return res.status(500).json({
        success: false,
        message: "Password missing in database",
      });
    }

    const isMatch = await bcryptjs.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid password",
      });
    }
   

  const accessToken = getAccessToken(user._id)
  const refreshToken = getRefreshToken(user._id)

  user.refreshToken = refreshToken;
await user.save();
 const isProd = process.env.NODE_ENV === "production";

res.cookie("refreshToken", refreshToken, {
  httpOnly: true,
  secure: isProd,       
  sameSite: isProd ? "none" : "lax",
  maxAge: 7 * 24 * 60 * 60 * 1000,
});

    return res.status(200).json({
      success: true,
      message: "Login successful",
      accessToken,
      user: {
        id: user._id,
        name: user.name,
        username: user.username,
        email: user.email,
        role : user.role,
      },
    });
  } catch (error) {
    console.error("Signin Error FULL:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};


export const logout = async (req, res) => {
  const token = req.cookies.refreshToken;

  if (token) {
    await User.updateOne(
      { refreshToken: token },
      { $unset: { refreshToken: "" } }
    );
  }
const isProd = process.env.NODE_ENV === "production";

res.clearCookie("refreshToken", {
  httpOnly: true,
  secure: isProd,
  sameSite: isProd ? "none" : "lax",
});

  res.json({ success: true, message: "Logged out" });
};
export const me = async (req, res) => {
  try {
    res.status(200).json({
      user: req.user, // set by isAuth
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch user" });
  }
};