types = [
        {
            type: 'feat',
            title: 'Features',
            emoji: ':sparkles:',
            changelog: true,
            aliases: ['feature']
        },
        {
            type: 'fix',
            title: 'Bug Fixes',
            emoji: ':bug:',
            changelog: true,
        },
        {
            type: 'docs',
            title: 'Documentation',
            emoji: ':books:',
            changelog: true,
        },
        {
            type: 'style',
            title: 'Styles',
            emoji: ':gem:',
            changelog: true,
        },
        {
            type: 'refactor',
            title: 'Code Refactoring',
            emoji: ':package:',
            changelog: true,
        },
        {
            type: 'perf',
            title: 'Performance Improvements',
            emoji: ':rocket:',
            changelog: true,
        },
        {
            type: 'test',
            title: 'Tests',
            emoji: ':rotating_light:',
            changelog: true,
        },
        {
            type: 'build',
            title: 'Builds',
            emoji: ':hammer_and_wrench:',
            changelog: true,
        },
        {
            type: 'ci',
            title: 'Continuous Integrations',
            emoji: ':robot:',
            changelog: true,
        },
        {
            type: 'chore',
            title: 'Chores',
            emoji: ':recycle:',
            changelog: true,
        },
        {
            type: 'revert',
            title: 'Reverts',
            emoji: ':wastebasket:',
            changelog: true,
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

module.exports = {
    presetConfig: parsePresetConfig()
 }
