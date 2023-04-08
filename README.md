# Tauri Mobile Test <img src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/brands/medium.svg" width="30" height="30" class="svg">

<div align="center">
<img src="./images/header-mobile.png">
</div> 

<br>

An example application to demonstrate how to create and start building a cross-platform mobile application using the new Alpha Channel of the [Tauri Framework](https://www.tauri.app).

<br>

NOTE: The code contained here is meant to serve as an example for my article on **Medium** (Check it out!)


> [Getting Started Using Tauri Mobile](https://medium.com/ed_rutherford_nullreturn)

<br>

## **Setup** 📦
For detailed steps on how to completely set up a brand new development environment, be sure to check out the article linked above!

If you're familiar with Tauri and already have the typical setup in place, there's only a couple additional steps that need to be taken to be ready for building a mobile version of an app.

Since the article (and this repo) follow the process of building an example Android app on Arch Linux, those are the steps that will be outlined here...

<br>

### **Add Dependecies**
```bash
sudo pacman -Syu  
sudo pacman -S --needed \  
webkit2gtk-4.1 \  
base-devel \  
curl \  
wget \  
openssl \  
appmenu-gtk-module \  
gtk3 \  
libappindicator-gtk3 \  
librsvg \  
libvips
  ```
### **Rust Installation (if needed)**
```bash
curl --proto '=https' --tlsv1.2 https://sh.rustup.s -sSf | sh
```
### **For Android**
```bash
rustup target add aarch64-linux-android rmv7-linux-androideabi i686-linux-android 86_64-linux-android
```
<br>

<br>

Another key application you need to install on your system is Android Studio. You can follow the installation instructions for your particular setup provided on their official [website](https://developer.android.com/studio):

```bash
# Using Yay for package management
yay -S android-tools android-studio

# Using Pacman
sudo pacman -S android-tools android-studio
```

<br>

**Open up Android Studio and navigate to the SDK Management window:**

Ensure the following components are checked, applied, and installed

    - Android SDK Platform
	- Android SDK Platform-Tools
	- NDK (Side by side)
	- Android SDK Build-Tools
	- Android SDK Command-line Tools

<br>

With all of that out of the way, the only thing left to do is add a couple new environment variables to your corresponding `.bashrc`, `.zshrc`, or `config.fish`:

```shell
export JAVA_HOME=/opt/android-studio/jbr
export ANDROID_HOME="$HOME/Android/Sdk"
export NDK_HOME="$ANDROID_HOME/ndk/25.0.8775105"
```

> **<img src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/circle-info.svg" width="15" height="15" class="info"> NOTE**  
> The location of your `Android Studio` and `NDK` directories maybe different.

<br>

## **Project Creation** 🏗
There are a number of different ways to generate the initial project structure, but for this example we'll stick with using the `create-tauri-app` installed using `cargo`:

```shell
cargo install create-tauri-app
cargo create-tauri-app --alpha --mobile
```
>Follow each prompt and select how you plan to develop your new application

<br>

## Adding Component Libraries 📱
The `create-tauri-app` creates a basic application structure that's already good to run and test out, but since we're looking to create a mobile-focused app, let's go ahead and add some additional `React` libraries from two excellent frameworks to create some new components!

**This example takes advantage of the following React framworks:**

  - [MDBootstrap React](https://mdbootstrap.com)
  - [MUI Material React](https://mui.com)

```shell
npm i mdb-react-ui-kit @fortawesome/fontawesome-free
npm i @mui/material @emotion/react @emotion/styled 
npm i @mui/icons-material
```
>See both frameworks' instructions for the remaining few steps to incorporate into your project

<br>

## License ™

- See **LICENSE**

<br>

## Recommended IDE Setup 🖥

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)

<style>
.svg {
	cursor: pointer;
	filter: invert(.2) sepia(1) saturate(30) hue-rotate(150deg);
}
.info {
	cursor: pointer;
	filter: invert(.2) sepia(1) saturate(30) hue-rotate(250deg);
}
</style>