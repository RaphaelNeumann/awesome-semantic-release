types = [
        {
            type: 'feat',
            title: 'Features',
            emoji: ':sparkles:',
            changelog: true,
            aliases: ['feature'],
            release: 'minor'
        },
        {
            type: 'fix',
            title: 'Bug Fixes',
            emoji: ':bug:',
            changelog: true,
            release: 'patch'
        },
        {
            type: 'docs',
            title: 'Documentation',
            emoji: ':books:',
            changelog: true,
            release: false
        },
        {
            type: 'style',
            title: 'Styles',
            emoji: ':gem:',
            changelog: true,
            release: 'patch'
        },
        {
            type: 'refactor',
            title: 'Code Refactoring',
            emoji: ':package:',
            changelog: false,
            release: 'patch'
        },
        {
            type: 'perf',
            title: 'Performance Improvements',
            emoji: ':rocket:',
            changelog: true,
            release: 'patch'
        },
        {
            type: 'test',
            title: 'Tests',
            emoji: ':rotating_light:',
            changelog: true,
            release: false
        },
        {
            type: 'build',
            title: 'Builds',
            emoji: ':hammer_and_wrench:',
            changelog: true,
            release: 'patch'
        },
        {
            type: 'ci',
            title: 'Continuous Integrations',
            emoji: ':robot:',
            changelog: false,
            release: false
        },
        {
            type: 'chore',
            title: 'Chores',
            emoji: ':recycle:',
            changelog: false,
            release: 'patch'
        },
        {
            type: 'revert',
            title: 'Reverts',
            emoji: ':wastebasket:',
            changelog: true,
            release: 'patch'
        }
    ];
function parsePresetConfig() {
    presetConfig = [];
    types.forEach((item) => {
        if (item.changelog) {
            presetConfig.push({
                "type": item.type,
                "section": `${item.emoji} ${item.title}`,
				"hidden": false
            });
			if (Array.isArray(item.aliases) && item.aliases.length > 0) {
				item.aliases.forEach((aliase) => {
					presetConfig.push({
						"type": aliase,
						"section": `${item.emoji} ${item.title}`,
					});
				});
			};
        }
    })
    return presetConfig;
}

function parseReleaseConfig() {
    releaseConfig = [];
    releaseConfig.push({breaking: true, release: 'major'});
    types.forEach((item) => {
        if (item.release) {
            releaseConfig.push({
                "type": item.type,
				"release": item.release
            });
			if (Array.isArray(item.aliases) && item.aliases.length > 0) {
				item.aliases.forEach((aliase) => {
					releaseConfig.push({
                        "type": aliase,
                        "release":item.release
					});
				});
			};
        }
    })
    return releaseConfig;
}

module.exports = {
    presetConfig: parsePresetConfig(),
    releaseConfig: parseReleaseConfig()
}
