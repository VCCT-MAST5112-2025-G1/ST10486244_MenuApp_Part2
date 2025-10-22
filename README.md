# My Food App (Part 2)

## Introduction 
A one-screen React Native (Expo) application built for POE 2. The app allows the chef to manage a restaurant menu by adding dishes with name, description, course, and price.
It includes a one-time sample load button to help markers, filtering options, and category statistics.

## Setup
- Node version: vXX
- Install: `npm install` or `yarn`
- Run (Android): `npm run android`
- Run (iOS): `npm run ios`
  

  ## Features Implemented
  
  Add new menu items with:
-	Dish name
- Description
- Course (Starters, Mains, Dessert, Beverages)
- Price
  
  One-time “Load Menu” button (for testing/demo)
-	Seeds predefined sample dishes once
-	Still allows adding new custom dishes after loading
  
 In-memory data storage
-	No prepopulated items on launch
-	Data resets when the app restarts
  
   Real-time updates
- Home screen displays all menu items
-	Total number of dishes displayed
-	Dynamic filter by course
- Category statistics showing total items per course
  
Clean, reusable UI
-	Consistent styling with shared StyleSheet
-	Designed for both small and large screens

  ## Screens Overview
  
- Home: Displays full menu, total count, filters, and “Load Menu” button
- Add Item:	Allows adding new dishes with name, description, course, and price

## Setup & Run

-	Node.js 18+
-	Expo CLI (npm install -g expo-cli)
-Installation
bash Copy _npm install _Run the app
bash Copy _npx expo start  
-Then choose:
-	Android Emulator,
-	iOS Simulator, or
-	Scan QR code with Expo Go app.



## Screenshots
- ![WhatsApp Image 2025-10-22 at 16 16 30_d93fa0aa](https://github.com/user-attachments/assets/da5229bf-89c1-46b5-9999-d51c69ecf377)
- 
- ![WhatsApp Image 2025-10-22 at 16 16 30_373b87d8](https://github.com/user-attachments/assets/8e5535a8-17d0-40a6-9a7d-21b7eb6d8613)
- 
- ![WhatsApp Image 2025-10-22 at 16 16 30_cca7128f](https://github.com/user-attachments/assets/24223cbd-0ec0-4e1f-ab93-c7004fa06e92)
- 
- ![WhatsApp Image 2025-10-22 at 16 16 30_27e7ffb0](https://github.com/user-attachments/assets/d5f909fc-a55d-46de-93bb-d89fcb8e4e7c)

## Tested on
- Device Pixel 7 Emulator	1080 × 2400
- Works well

## YouTube 
- https://youtu.be/-TbhXyywVpQ?si=4MBUfwaUSkrWbyA3
## GitHub
- https://github.com/VCCT-MAST5112-2025-G1/ST10486244_MenuApp_Part2

## Referencing

- Expo. (2025) Expo documentation.
Available at: https://docs.expo.dev/
(Accessed: 22 October 2025)

- Facebook. (2025) React Native documentation.
Available at: https://reactnative.dev/
(Accessed: 22 October 2025)

- React Navigation. (2025) React Navigation documentation.
Available at: https://reactnavigation.org/
(Accessed: 22 October 2025)

- MDN Web Docs. (2025) TypeScript reference.
Available at: https://developer.mozilla.org/
(Accessed: 22 October 2025)

- YouTube. (2025) ‘MyMenuApp – POE 2 Demo and Code Walkthrough’ [Video].
Available at: [- https://youtu.be/-TbhXyywVpQ?si=4MBUfwaUSkrWbyA3]
(Accessed: 22 October 2025)

## AI Use Declaration

- I, Zia Abdul, student number [Your Student Number], declare that this submission is my own work.
Development:
I used AI assistance (Abacus.AI ChatLLM/GPT-5) for:
Clarifying Expo configuration (e.g., android.package in app.json).
Drafting a concise video script and a README template.
Reviewing code structure for POE 2 requirements (no auto prepopulation, one-time seed button, filters, count).
All code in the repository was written, tested, and integrated by me. Any AI-suggested snippets were reviewed, adapted, and validated by me.
- Attribution:
I consulted official documentation including Expo, React Native, and React Navigation (see References)
I have provided Harvard Anglia references for all external sources used.
- Originality:
No code was copied verbatim from unauthorized sources.
Any third-party packages or assets are listed in package.json and credited where applicable.
- Compliance:
This work complies with The IIE’s policies on plagiarism and the acceptable use of generative AI.
