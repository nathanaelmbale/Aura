# Expo App Setup Guide

This guide provides step-by-step instructions to set up a new Expo app with necessary dependencies and configurations.

## Create a New Expo App

First, create a new Expo app using the blank template:

```bash
npx create-expo-app@latest ./ --template blank
 markdown
Copy code
# Expo App Setup Guide

This guide provides step-by-step instructions to set up a new Expo app with necessary dependencies and configurations.

## Create a New Expo App

First, create a new Expo app using the blank template:

```bash
npx create-expo-app@latest ./ --template blank
Install Dependencies
Next, install the required dependencies for your project:

bash
Copy code
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
Set Up Entry Point
Set the entry point in your package.json or yarn configuration:

json
Copy code
{
  "main": "expo-router/entry"
}
Modify Scheme in app.json
Update the scheme in your app.json file:

json
Copy code
{
  "scheme": "your-app-scheme"
}
Start Expo
Start Expo, clearing all previous bundles:

bash
Copy code
npx expo start -c
Documentation
Please refer to the following documentation before proceeding:

Expo Router Installation
Install NativeWind and Tailwind for Styling
Follow these steps to install NativeWind and Tailwind CSS:

Install NativeWind:

bash
Copy code
npm install nativewind
Install Tailwind CSS:

bash
Copy code
npm install --save-dev tailwindcss@3.3.2
Initialize Tailwind CSS:

bash
Copy code
npx tailwindcss init
Note: Remember to modify the plugin in the Babel configuration folder as necessary.

Additional Resources
NativeWind Quick Start for Expo
csharp
Copy code

This content is now formatted as a markdown file and can be saved directly as `README.md` in your GitHub repository.





