# React Native AsyncStorage Android Crash with Large JSON

This repository demonstrates a bug in React Native where AsyncStorage crashes on Android when attempting to store large JSON objects.  iOS handles the same operation without issue.

The problem lies in the limitations of AsyncStorage on Android when dealing with large data sets.  This example includes the faulty code and a solution using a more robust approach.

## Setup

1. Clone this repository.
2. Navigate to the project directory in your terminal.
3. Run `npm install` or `yarn install`.
4. Run the app on both Android and iOS emulators or devices.

## Bug Reproduction

The `bug.js` file contains code that attempts to store a large JSON object in AsyncStorage. Run the app on Android and observe the crash.  iOS will successfully store the data.

## Solution

The `bugSolution.js` file demonstrates a solution using MMKV, a high-performance key-value storage, to address the issue.  MMKV is more efficient and scalable for large data storage on Android and iOS, providing a more stable solution for this scenario.

## Additional Notes

- The specific JSON data used is large, but not unreasonably so.  The issue is how AsyncStorage handles large data, particularly on Android.
- Consider alternative solutions for storing large data in React Native such as MMKV or Realm for better performance and reliability.