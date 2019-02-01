function isLeapYear(year: number) {
  let isLeapYear: boolean = false;
    if (year % 4 === 0) {
      if (year % 100 !== 0) {
        isLeapYear = true;
      } else {
        if (year % 400 === 0) {
          isLeapYear = true;
        }
      }
    }

    return isLeapYear;
}

export default isLeapYear