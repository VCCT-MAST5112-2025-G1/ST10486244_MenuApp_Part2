# Intructions on how to complete POE Part 2 
- React Navigation for tabs 
- React Navigation for stacks 
-  Safe-Area-Context
- React Native-Screens 

^^npm install these 

**File Structure**
src
src screens 
- Homescreen.tsx
- AddMenuItem.tsx 

- src/components 
- MenuCard.tsx 

- src /styles 
- Styles.ts 

root 
- App.tsx 

**File Descriptions**

App.tsx contains: 
- SafeAreaContextProvider , NavigationContainer, 
    AppNavigator

    AppNavigator.tsx contains 
    - variable: Tab/Stack, RootTabParamList
    - screen function: enablesScreens(true), TaB.
    Navigator , each tab screen component

    Homecreen.tsx contains:
    - All menu items inside individual cards with name, description , category and price 
    - Display total menu items 
    - NICE TO HAVE: organise menu itmes by category group 
    Display average cost per category 

    AddMenuItem.tsx contains:  
    - variables: name, description, course, price 
    - components: TextInput, multi-lineTextInput 
    dropdown item selector , numeric input 
    
    MenuCard.tsx contains: 
    - name, description, course, price 
    - components: View, text

    Styles.tsx:
    - All our standardised styles 
