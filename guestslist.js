const name =prompt("Please enter names"); // Install with 'npm install prompt-sync'

let guestList = []; // Initialize empty array for guest list

while (true) {
    if (guestList.length < 10) {
        // Ask user to enter a guest's name
        let newGuest = prompt("Enter the name of the person you'd like to invite: ");
        guestList.push(newGuest);
        console.log(`Guest added! Current guest list: ${guestList.join(', ')}`);
    } else {
        console.log("You can only add a maximum of 10 people to your guest list.");
        let replaceResponse = prompt("Would you like to replace someone on the list with the last person you entered? (yes/no): ").toLowerCase();

        if (replaceResponse === "yes" || replaceResponse === "y") {
            let nameToReplace = prompt("Please enter the name of the person you would like to replace: ");
            let index = guestList.findIndex((name) => name.toLowerCase() === nameToReplace.toLowerCase());

            if (index !== -1) {
                guestList[index] = guestList[guestList.length - 1]; // Replace the name with the last entered name
                guestList.pop(); // Remove duplicate last guest
                console.log(`Replacement successful! Updated guest list: ${guestList.join(', ')}`);
            } else {
                console.log(`Name "${nameToReplace}" was not found in the guest list. No changes made.`);
            }
        } else if (replaceResponse === "no" || replaceResponse === "n") {
            guestList.pop(); // Remove the last entered guest
            console.log("No changes were made. Guest list remains:");
        } else {
            console.log("Invalid response. Assuming 'no'.");
            guestList.pop(); // Remove the last entered guest
        }

        console.log(`Final guest list: ${guestList.join(', ')}`);
        break; // Exit the loop since the maximum number of guests is reached
    }
}