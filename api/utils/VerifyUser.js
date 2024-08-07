import jwt from 'jsonwebtoken' 

import User from '../models/user.js';






export const verifyToken = async (req, res, next) => {
	try {
		const token = req.cookies.access_token;

		if (!token) return res.status(401).json({ message: "Unauthorized" });

		const decoded = jwt.verify(token,"hhh");

		const user = await User.findById(decoded.id).select("-password");

		req.user = user;

		next();
	} catch (err) {
		res.status(500).json({ message: err.message });
		console.log("Error in signupUser: ", err.message);
	}
};