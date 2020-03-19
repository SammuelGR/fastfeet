import jwt from 'jsonwebtoken';

export default (req, res, next) => {
	const authHeader = req.headers.authorization;

	if (!authHeader) {
		return res.status(401).json({ error: 'Token not provided' });
	}

	const [, token] = authHeader.split(' ');

	try {
		const decoded = jwt.decode(token, { complete: true });

		const userAdmin = decoded.payload.admin;

		if (!userAdmin) {
			return res.status(401).json({ error: 'User is not an Admin' });
		}

		return next();
	} catch (err) {
		return res.status(401).json({ error: 'Token invalid' });
	}
};
