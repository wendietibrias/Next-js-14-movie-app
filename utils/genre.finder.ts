/*

Action          28
Adventure       12
Animation       16
Comedy          35
Crime           80
Documentary     99
Drama           18
Family          10751
Fantasy         14
History         36
Horror          27
Music           10402
Mystery         9648
Romance         10749
Science Fiction 878
TV Movie        10770
Thriller        53
War             10752
Western         37

*/

export const genreFinder = (genreId: number | string) => {
  switch (genreId) {
    case 28:
      return "Action";
      break;

    case 12:
      return "Adventure";
      break;

    case 16:
      return "Animation";
      break;

    case 35:
      return "Comedy";
      break;

    case 80:
      return "Crime";
      break;

    case 99:
      return "Documentary";
      break;

    case 18:
      return "Drama";
      break;

    case 10751:
      return "Family";
      break;

    case 14:
      return "Fantasy";
      break;

    case 36:
      return "History";
      break;

    case 27:
      return "Horror";
      break;

    case 10402:
      return "Music";
      break;

    case 9648:
      return "Mystery";
      break;

    case 10749:
      return "Romance";
      break;

    case 878:
      return "Science Fiction";
      break;

    case 10770:
      return "TV Movie";
      break;

    case 53:
      return "Thriller";
      break;

    case 10752:
      return "War";
      break;

    case 37:
      return "Western";
      break;
  }
};
