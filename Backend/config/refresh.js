import jwt from "jsonwebtoken";
import { getAccessToken, getRefreshToken } from "./Token.js";
import User from "../Model/userModel.js";

export const refresh = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    console.log("Incoming refresh token:", refreshToken);

    if (!refreshToken) {
      return res.sendStatus(401);
    }

    // ✅ Verify refresh token FIRST
    const decoded = jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    // ✅ Find user who owns this refresh token
    const user = await User.findOne({
      _id: decoded._id,
      refreshToken: refreshToken,
    });
    console.log("User DB refresh token:", user.refreshToken);


    if (!user) {
      return res.sendStatus(403);
    }

    // ✅ Rotate tokens
    const newAccessToken = getAccessToken(user._id);
    const newRefreshToken = getRefreshToken(user._id);

    user.refreshToken = newRefreshToken;
    await user.save();

    const isProd = process.env.NODE_ENV === "production";

    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
      secure: isProd,
      sameSite: isProd ? "none" : "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      accessToken: newAccessToken,
    });
  } catch (err) {
    console.error("Refresh error:", err.message);
    return res.sendStatus(403);
  }
};
