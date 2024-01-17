module.exports = {
    format_date: (date) => {

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
      // Format date as Tuesday, January 16, 2024 at 11:30:33 PM
      return date.toLocaleTimeString("en-US", options);
    },

    isEqual: (arg1, arg2) => { // helper function to determine equality of variables
      if(arg1 === arg2){
        return true;
      }
      else {
        return false;
      }
    }
};
  