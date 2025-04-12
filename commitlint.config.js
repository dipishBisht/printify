module.exports = {
    extends: ["@commitlint/config-conventional"],
    rules: {
        "type-enum": [
            2,
            'always',
            ["build", "cli", "test", "config", "style", "refactor", "feat", "fix", "doc", "typo"]
        ]
    }
}