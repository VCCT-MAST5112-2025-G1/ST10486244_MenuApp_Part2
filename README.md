# My Food App (Part 2)

## Introduction 
My Food App is a React Native (Expo) application that allows a chef to manage a restaurant menu. The app supports adding and removing menu items, shows category statistics (including average price per course), and provides a separate guest-facing filter page.

## Setup
- Node version: vXX
- Install: `npm install` or `yarn`
- Run (Android): `npm run android`
- Run (iOS): `npm run ios`
  

  ## Features Implemented
  
 - Add new menu items with: name, description, course (appetizer/main/dessert/beverage), and price.
- Add Item moved to a separate screen (Add Item tab).
- One-time "Load Menu" sample data button for demo/testing.
- In-memory menu stored in an array (`menuItems` in context).
- Chef can remove items from the menu (remove button on Home).
- Home screen displays:
  - Complete menu
  - Total dishes count
  - Category statistics (count and average price per course)
- Separate Filter tab (guest-facing) to filter menu items by course (read-only).
- Clean, reusable UI and consistent styling.
  
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
- Filter: Allows user to filter menu items by categories such as Main Course ,Appetizer ,Beverage , dessert
 

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

## Change log from part 2 to Final (edits and additions made)
- Filter Screen added 
- Item Removal: Implemented functionality for the chef to remove menu items from the Home screen.
- Add Item Screen:"Add Item" functionality is on its own dedicated screen
- Home screen now focuses on displaying the complete menu and category statistics (including average prices)


## Screenshots
- <img width="408" height="722" alt="image" src="https://github.com/user-attachments/assets/0ec7fd35-6a82-4cd0-97ec-2e13aec36911" />

- <img width="399" height="719" alt="image" src="https://github.com/user-attachments/assets/8a1c6ffd-3dd0-4ea5-ae7c-184bef59eb13" />

- <img width="405" height="725" alt="image" src="https://github.com/user-attachments/assets/00c375f2-3f9d-4f50-b978-d0dc98b27ce2" />

- <img width="407" height="722" alt="image" src="https://github.com/user-attachments/assets/d3e229cc-af3f-49d6-b642-978ef9c2eafb" />


## Tested on
- Device Pixel 7 Emulator	1080 × 2400
- Works well

## YouTube 
- https://youtu.be/K12d3QqQ1J4?si=gIH8-jJd6PHVXshv
## GitHub
- 

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
