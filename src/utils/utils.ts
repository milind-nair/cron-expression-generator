export const setConstants = (parameter: string) => {
    switch (parameter) {
      case "Second":
        return 60;
      case "Minute":
        return 60;
      case "Hour":
        return 24;
      case "Day-Of-Month":
        return 31;
      case "Month":
        return 12;
      case "Day-Of-Week":
        return 7;
      default:
        return 0;
    }
  };
