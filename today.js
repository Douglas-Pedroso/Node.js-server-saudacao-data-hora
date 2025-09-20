module.exports.getDate = function getDate() {
    // Get the current date and time string in the timezone "Atlantic/Azores"
    let azoresString = new Date().toLocaleString("en-US", { timeZone: "Atlantic/Azores" });
    // Convert that string back into a Date object
    let azoresDate = new Date(azoresString);
    return azoresDate; 
};