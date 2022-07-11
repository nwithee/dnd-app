export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  export function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

export function abilityMod (score) {
    return Math.floor((score - 10) / 2);
}

export function skillMod (score, prof) {
  if (prof) {
    return Math.floor((score - 10) / 2) + prof;
  } else {
    return Math.floor((score - 10) / 2);
  }
};

