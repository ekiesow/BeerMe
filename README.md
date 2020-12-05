# BeerMe
A copycat app of the [Tavor](https://www.tavour.com/2) app with the purpose of learning React Native, AWS Amplify, and many other services from Amazon Web Services.


## Architecture
<img src=https://raw.githubusercontent.com/ekiesow/BeerMe/master/Proposal_V2.jpg>


## Android/Linux Environment Set Up

Full directions found [here](https://reactnative.dev/docs/environment-setup).

##### 1. Install [Android Studio](https://developer.android.com/studio/index.html).
Make sure the boxes next to all of the following items are checked:
- Android SDK
- Android SDK Platform
- Android Virtual Device

##### 2. Install the Android SDK. React Native requires the Android 10 (Q) SDK.
Appearance & Behavior → System Settings → Android SDK<br>
Look for and expand the Android 10 (Q) entry, then make sure the following items are checked:

- Android SDK Platform 29
- Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image

##### 3. Configure the ANDROID_HOME environment variable.
Add the following lines to $HOME/.bash_profile
```sh
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```
##### 4. Prepare pysical or virtual device.
Physical device instructions found [here](https://reactnative.dev/docs/running-on-device). 

To use a virtual device, open ./BeerMe/android in Android Studio and you can see the list of available Android Virtual Devices (AVDs) by opening the "AVD Manager." If you have recently installed Android Studio, you will likely need to create a new AVD. Select "Create Virtual Device...", then pick any Phone from the list and click "Next", then select the Q API Level 29 image.

##### 5. Run the application.
Inside the root of the BeerMe project folder, start the Metro server in terminal with the command
```
npx react-native-start
```
Then open a new terminal inside the root of the BeerMe project folder and run
```
npx react-native run-android
```
And that's it!!
