# Wilodev Mobile App

## Getting started

Welcome to the Wilodev Mobile App, a React Native project using TypeScript. This guide will help you set up and run the project on your development environment.

### Prerequisites

These instructions to install:

- [chruby](https://github.com/postmodern/chruby) and
  [ruby-install](https://github.com/postmodern/ruby-install) for managing ruby versions
- The correct version of Ruby (2.7.7p221) `chruby ruby-2.7.7`
- The correct version of Node (20.11.0)
- [nvm](https://github.com/creationix/nvm) for managing node versions
- [bun](https://bun.sh/) for installing node packages
- [Pre-commit](https://pre-commit.com/) for configuring pre-commit hooks

### Setting up linting pre-commit hooks

1.  Set up the pre-commit hooks for this repo:

        pre-commit install

### Setting environment variables

1.  Create your `.env.*.local` file from the template:

        cp .env.* .env.*.local

    Example:

        cp .env.development .env.development.local

### Installing React Native pre-requisites

1.  React Native server requires [Watchman](https://facebook.github.io/watchman/) to determine which
    files have changed:

        brew install watchman

### Setting up the Android dev environment

1.  Ensure that you have the [Zulu17](https://www.azul.com/downloads/?package=jdk#zulu) installed

        brew tap homebrew/cask-versions
        brew install --cask zulu17

2.  Install [Android Studio](https://developer.android.com/studio)

        brew install android-studio

3.  Add required environment variables (refer to the
    [React Native setup guide](https://reactnative.dev/docs/environment-setup) for more details)

        export JAVA_HOME=$(/usr/libexec/java_home -v 17)

        export ANDROID_HOME=$HOME/Library/Android/sdk
        export PATH=$PATH:$ANDROID_HOME/cmdline-tools/latest/bin
        export PATH=$PATH:$ANDROID_HOME/emulator
        export PATH=$PATH:$ANDROID_HOME/tools
        export PATH=$PATH:$ANDROID_HOME/tools/bin
        export PATH=$PATH:$ANDROID_HOME/platform-tools

4.  Open Android Studio

5.  Using the SDK Manager install:

    - Android 13 (R) SDK (API Level 34)
    - Android SDK Command-Line Tools (34.0.0)
    - Android SDK Build-Tools
    - Android SDK Platform-Tools
    - Android Emulator

### Setting up the iOS dev environment

1.  Ensure you have a recent version of Ruby available globally. You should be able to use a package
    manager such as [chruby](https://github.com/postmodern/chruby) as long as Ruby is loaded in
    `.zshrc/.bashrc`.

2.  Install Xcode [from the Mac App Store](https://apps.apple.com/us/app/xcode/id497799835?mt=12)

3.  Ensure that your machine is configured to use the full version of Xcode by default (as opposed
    to just the command-line tools as these aren't sufficient for React Native):

        sudo xcode-select --switch /Applications/Xcode.app

### Installing dependencies

1.  Install all node dependencies:

        bun install

2.  Install Ruby gems:

        cd ios
        bundle install

3.  Install iOS dependencies:

        cd ios
        pod-install ios

## Running the app

Use the following scripts to run the application:

        bun ios:dev: Start the iOS app in development mode.
        bun ios:prod: Start the iOS app in production mode.
        bun aos:dev: Start the Android app in development mode.
        bun aos:prod: Start the Android app in production mode.

### Scripts Explained

- app:clean: Clean node modules and lock files.
- setDevelopment: Set environment to development.
- setStaging: Set environment to staging.
- setProduction: Set environment to production.
- ios:Pod:Reset: Reset and reinstall iOS pods.
- ios:bundle:assets: Bundle assets for iOS.
- aos:clean: Clean and reset Android build.
- aos:bundle:assets: Bundle assets for Android.
- lint: Run ESLint for code analysis.
- test: Run Jest for testing.
- start: Start Metro bundler with cache reset.

### Additional Commands

- test:coverage: Generate test coverage report.
- prettier: Check code formatting with Prettier.
- postinstall: Apply patches after installing package

1.  Start the React Native Metro server:

        bun start

2.  To run the app on the default iOS simulator:

        bun ios:dev

    See also: [Running the app on a physical iOS device](#running-the-app-on-a-physical-ios-device)

3.  To run the app on the Android emulator (or any other Android device connected to the Android
    Debug Bridge):

        bun aos:dev

## Testing

### Running Jest unit test locally

    bun jest

## Creating and installing Android release packages locally

1.  Build the release package:

        cd android
        ./gradlew assembleRelease

    If you see 'Unable to extract native debug metadata from...' errors in the build output, you may
    need to install the version of the Android NDK specified in `android/build.gradle` before trying
    again.

2.  Ensure that you have a device connected to the Android Debug Bridge

## Version Requirements

- Node: >=20.0.0
- React Native: 0.73.6
- TypeScript: 5.4.3
- Ruby: >= 2.6.10
- Java: Zulu JDK 17
- Xcode: Latest version compatible with your macOS

## Troubleshooting

For common issues, refer to the [Troubleshooting guide](https://reactnative.dev/docs/troubleshooting).

## Contributing

We welcome contributions! Please read our Contributing Guide for guidelines on how to contribute.

## License

This project, "Wilodev App", is not licensed under the standard MIT License. Instead, it has a custom License which establishes specific terms of use, including restrictions on unauthorized use and commercialization, intellectual property protection, and liability clauses.

For more detailed information, please review the [LICENSE.md](LICENSE.md) file for the Spanish version or the [LICENSE_en.md](LICENSE_en.md) file for the English version.

Use of the "Wilodev App" software is subject to the acceptance of its license terms. Unauthorized copying, modification, distribution, or use of this software is strictly prohibited without express written permission from the owner.

For inquiries and authorization requests, contact:
Wilson Fabian Pérez Sucuzhañay at [wilsonperez.developer@gmail.com](wilsonperez.developer@gmail.com).
