
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const https = require('https');
const csv = require('csv-parser');

router.get('/sync', (req, res) => {
	if (req.query.secret !== process.env.SYNC_SECRET) {
		return res.status(403).json({ error: 'Wrong secret' });
	}

	const csvUrl = 'https://data.cms.gov/sites/default/files/2025-08/6jpm-sxkc-0.csv';
	const file = path.join(__dirname, '../public/data/home-health-latest.json');

	https.get(csvUrl, (response) => {
		const agencies = [];
		response
			.pipe(csv())
			.on('data', (row) => agencies.push(row))
			.on('end', () => {
				const result = {
					updated: new Date().toISOString(),
					source: 'Q3 2025 archived snapshot',
					total: agencies.length,
					agencies
				};
				fs.writeFileSync(file, JSON.stringify(result, null, 2));
				res.json({ success: true, total: agencies.length });
			});
	}).on('error', (e) => res.status(500).json({ error: e.message }));
});

module.exports = router;
