export const removeTags = (str) => {
  if (str === null || str === "") return false;
  else str = str.toString();

  // Regular expression to identify HTML tags in
  // the input string. Replacing the identified
  // HTML tag with a null string.
  return str.replace(/(<([^>]+)>)/gi, "");
};

export const getTheYear = (date) => {
  const d = new Date(date);
  return d.getFullYear();
};

export const setTypeMessage = (error, showsLenght, isReturnEmpty) => {
  switch (error) {
    case null:
      if (showsLenght === 0 && !isReturnEmpty) {
        return "Initial";
      } else {
        return "Warning";
      }

    default:
      return "Error";
  }
};

export const setMessage = (
  error,
  showsLenght,
  isReturnEmpty,
  finalSearchField
) => {
  switch (error) {
    case null:
      if (showsLenght === 0 && !isReturnEmpty) {
        return "Looking for an accurate and comprehensive TV guide?Then you've come to the right place.";
      } else {
        return "No results have been found for: " + finalSearchField;
      }

    default:
      return error;
  }
};
