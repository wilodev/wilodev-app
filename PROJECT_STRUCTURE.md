# Project Structure and Coding Standards

## Overview

"Wilodev App" is a React Native application designed with a focus on maintainability, scalability, and clean architecture principles. This document outlines the project structure and coding standards to aid new developers in understanding and contributing to the project effectively.

## Project Directory Structure

```bash

wilodev-app/
├─ src/                    # Main source code directory
│  ├─ apps/                # Independent modules or applications
│  │  ├─ acl/              # Access control logic
│  │  └─ authenticated/    # Authenticated user functionalities
│  ├─ assets/              # Static resources like images and fonts
│  ├─ navigation/          # Navigation logic and routers
│  ├─ shared/              # Reusable components, utilities, and configurations
│  │  ├─ components/       # UI components used across the app
│  │  ├─ config/           # Configuration files and constants
│  │  ├─ locales/          # Localization and internationalization
│  │  ├─ providers/        # Context providers for global state management
│  │  ├─ theme/            # Theming and styling related utilities
│  │  └─ ui/               # UI elements and layouts
│  └─ state/               # Global state management using Redux
├─ ios/                    # iOS specific code and configurations
├─ android/                # Android specific code and configurations
└─ ...

```

## Coding Standards

1. **Header Comments:** Every file should start with a header comment including the file's purpose, author info, contact, copyright, and license details.

2. **File Naming and Organization:**

- All file names should be clear and descriptive.
- Components should reside in their specific module under `src/apps` or in `src/shared/components` if reusable.
  
3. **Code Formatting:**

- Follow established linting rules set in `.eslintrc.js.`
- Run `bun lint:fix` regularly to ensure code adheres to style guidelines.
  
4. **TypeScript Usage:**

- All components and utilities should be written in TypeScript.
- Avoid `any` type. Strive for strong typing to enhance code quality and maintainability.

5. **Import Order and Module Resolution:**

- Organize imports as follows: React-related > Third-party > Alias imports > Relative imports.
- Use defined aliases in `tsconfig.json` for cleaner import statements.

6. **State Management:**

- Use Redux Toolkit for global state management.
- Encapsulate business logic in Redux slices under `src/state`.

7. **Documentation:**

- Document complex logic within code using inline comments.
- Provide JSDoc comments for functions and component props.

8. **Testing:**

- Write unit tests for components and utilities.
- Follow naming convention: `[filename].test.tsx` for test files.
  
## Contribution Guidelines

Please refer to CONTRIBUTING.md for detailed guidelines on how to contribute to this project. It is crucial to maintain the standards and structure outlined in this document to ensure the project's quality and coherence.
