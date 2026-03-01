# Source Code

This directory contains the main application source code.

## Structure

Organize your source code based on your project type:

### Web Application
```
src/
├── components/     # Reusable components
├── pages/         # Page components or routes
├── services/      # Business logic and API calls
├── utils/         # Helper functions
├── styles/        # Stylesheets
├── types/         # TypeScript types/interfaces
└── index.js       # Application entry point
```

### API/Backend
```
src/
├── controllers/   # Route controllers
├── models/        # Data models
├── routes/        # API routes
├── middleware/    # Custom middleware
├── services/      # Business logic
├── utils/         # Helper functions
├── config/        # Configuration
└── server.js      # Server entry point
```

### Library/Package
```
src/
├── core/          # Core functionality
├── utils/         # Utilities
├── types/         # Type definitions
└── index.js       # Main export
```

## Best Practices

- Keep files focused and single-purpose
- Use clear, descriptive names
- Group related functionality
- Separate concerns (business logic, presentation, data)
- Follow consistent naming conventions
