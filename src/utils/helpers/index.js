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
  