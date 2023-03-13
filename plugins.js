const types = require('./types');

module.exports = 
[
	[
		"@semantic-release/commit-analyzer",
		{	
			"preset": "conventionalcommits",
			"releaseRules": types.releaseConfig,
		}
	],
	[
		"@semantic-release/release-notes-generator",
		{
			"preset": "conventionalcommits",
			"presetConfig": {
				"types": types.presetConfig
			}
		}
	],
	"@semantic-release/changelog"
]
