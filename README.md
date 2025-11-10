# TypeScript Project

A TypeScript project intentionally containing code smells and security vulnerabilities for testing SonarQube and GitHub Code Scanning.

## Setup

```bash
npm install
npm run build
npm start
```

## Intentional Code Smells

This project contains various intentional code smells and security issues for testing purposes:

### Security Issues

- Hardcoded secrets and API keys
- SQL injection vulnerabilities
- XSS vulnerabilities
- Weak password hashing
- Exposed sensitive data (passwords, SSN, credit cards)
- Logging of sensitive information

### Code Quality Issues

- Unused variables and imports
- Duplicated code
- High cyclomatic complexity
- Magic numbers
- Missing error handling
- Empty catch blocks
- Type `any` usage
- Missing return types
- Too many function parameters
- Long functions
- Dead code
- Console.log statements
- Missing default cases in switch statements
- Nested ternary operators
- Assignment in conditions
- Inefficient algorithms

## Testing

This project is designed to trigger alerts in:

- SonarQube
- GitHub Code Scanning (CodeQL)
- ESLint

## Note

⚠️ **WARNING**: This code contains intentional security vulnerabilities and should NEVER be used in production!
