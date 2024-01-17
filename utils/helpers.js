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
};
  