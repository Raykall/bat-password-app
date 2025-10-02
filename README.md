## BAT Password Generator

A simple and straightforward password generator built with React Native (Expo), inspired by the Batman theme. It generates secure passwords and lets you quickly copy them to the clipboard.

### ✨ Features
- **Instant generation**: creates random 12-character passwords
- **Robust charset**: uppercase, lowercase, digits, and symbols
- **Quick copy**: sends the current password to the clipboard
- **Minimal UI**: dark theme with its own visual identity

### 🧭 Architecture & Folder Structure
```
src/
  app/
    index.tsx               # App entry point: renders Home screen
  components/
    BatButton/              # Generate/Copy buttons + controlled input
      BatButton.tsx         # Styles
      index.tsx             # UI logic (state, generation, clipboard)
    BatInput/               # Read-only text field for the password
      BatInputStyles.tsx    # TextInput styles
      index.tsx             # BatInput component
    BatLogo/                # Title + logo
      BatLogoStyles.tsx     # Title styles
      index.tsx             # BatLogo component
  screens/
    Home/
      index.tsx             # Main layout (Logo, Input, Buttons)
      Styles.tsx            # Screen styles
  services/
    passwordService.ts      # Pure password generation function
```

### 🧩 Key Components
- **`BatLogo`**: displays the title and bat image.
- **`BatInput`**: field that displays the generated password (receives `password` as a prop).
- **`BatButton`**: holds generation/copy logic and renders the action buttons.
- **`passwordService`**: pure function that generates a 12-character password from a strong character set.

### 🛠️ Tech Stack
- **Expo**: `~54.0.10`
- **React**: `19.1.0`
- **React Native**: `0.81.4`
- **expo-clipboard**: `~8.0.7`

### ▶️ Getting Started
**Prerequisites**
- Node.js LTS
- Expo CLI (optional; you can use `npx expo`)

**Install & run**
```bash
# install dependencies
npm install

# start the Expo bundler
npm run start
# or open directly
npm run android
npm run ios
npm run web
```

**Notes**
- On a physical device, use the Expo Go app to scan the QR code.
- Emulators require a properly set up React Native environment.

### 🔐 Password Generation (logic)
The responsible function lives in `src/services/passwordService.ts`.
It picks 12 characters from the set `A–Z a–z 0–9 !@#$%^&*`.

Internal usage example:
```ts
import generatePassword from "../services/passwordService";

const password = generatePassword();
```

### 📱 UI Flow
1. The `Home` screen displays `BatLogo`, the read-only `BatInput`, and two buttons.
2. Tapping "Generation" creates a new password and fills the `BatInput`.
3. Tapping "Copy" sends the current password to the clipboard.

### 📷 Assets
- Icons and images in `assets/` (configured via `app.json`).

### ✅ Roadmap / Future Improvements
- Configure length and character types (toggle symbols, numbers, etc.)
- Password strength indicator
- Show/hide password button
- History of generated passwords
- Unit tests for `passwordService`

### 📦 Available Scripts
- `npm run start`: start Expo
- `npm run android`: open on Android
- `npm run ios`: open on iOS (macOS only)
- `npm run web`: open in the browser

### 📄 License
This project is available under the MIT License. Feel free to use, modify, and contribute.

---
If this project was helpful, please star it on GitHub! 🦇
