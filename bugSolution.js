The solution involves replacing AsyncStorage with MMKV. MMKV is a high-performance, embedded key-value storage that's well-suited for handling large datasets.  It's designed to be more efficient than AsyncStorage, especially on Android.

Here's how to integrate MMKV:

1. Install the MMKV library:
```bash
npm install @react-native-mmkv/core
```
2. Implement MMKV in your code:

```javascript
import MMKVStorage from '@react-native-mmkv/core';

const mmkv = new MMKVStorage.Loader().initialize();

const storeData = async (key, value) => {
  try {
    await mmkv.setStringAsync(key, JSON.stringify(value));
  } catch (e) {
    console.error('Failed to store data:', e);
  }
};

const loadData = async (key) => {
  try {
    const value = await mmkv.getStringAsync(key);
    return JSON.parse(value);
  } catch (e) {
    console.error('Failed to load data:', e);
    return null;
  }
};
```
Now use `storeData` and `loadData` for storing and retrieving large JSON objects.