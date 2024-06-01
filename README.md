# Expo App Setup Guide

This guide provides step-by-step instructions to set up a new Expo app with necessary dependencies and configurations.

## Create a New Expo App

First, create a new Expo app using the blank template:

```bash
npx create-expo-app@latest ./ --template blank
 ```

## Installing indepedencies 
This guide provides step-by-step instructions on how to set up a new Expo app with the necessary dependencies and configurations.

```
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
```

## Set Up Entry Point
Set the entry point in your <b>package.json</b> or yarn configuration:

<b>package.json</b>

Copy code
```
{
  "main": "expo-router/entry"
}
```
Modify Scheme in <b>app.json</b>

<b>JSON</b>
```
{
  "scheme": "your-app-scheme"
}
```

## Start Expo
<b> Start Expo,<b/> clearing all previous bundles:


```
npx expo start -c
```



Expo Router Installation
Install NativeWind and Tailwind for Styling
Follow these steps to install NativeWind and Tailwind CSS:

Install NativeWind:

bash
```
npm install nativewind
```
### Install Tailwind CSS:

bash
```
npm install --save-dev tailwindcss@3.3.2
```

Initialize Tailwind CSS:



This content is now formatted as a markdown file and can be saved directly as `README.md` in your GitHub repository.





