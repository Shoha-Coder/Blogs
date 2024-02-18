export const getItem = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (err) {
    console.error("no user Found", err);
    return null
  }
};

export const setItem = (key, data) => {
    try {
        localStorage.setItem(key, JSON.stringify(data))
    } catch (error) {
        console.error(error)
    }
};

export const removeItem = (key) => {
  try {
    return localStorage.removeItem(key)
  } catch (error) {
    console.error('Error deleting data',error)
  }
}