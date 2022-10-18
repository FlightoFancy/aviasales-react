import { useMemo } from "react";

export const useSortedTickets = (sortType, arrTickets) => {
  const sortingTickets = useMemo(() => {
    if (sortType == "cheap") {
      const sortedCheap = [...arrTickets].sort((a, b) =>
        a.price > b.price ? 1 : -1
      );
      return sortedCheap;
    }
    if (sortType == "fast") {
      const sortedFast = [...arrTickets].sort((a, b) =>
        a.segments[0].duration + a.segments[1].duration >
        b.segments[0].duration + b.segments[1].duration
          ? 1
          : -1
      );
      return sortedFast;
    }
    if (sortType == "optimal") {
      const sortedOptimal = [...arrTickets].sort((a, b) =>
        a.price + (a.segments[0].duration + a.segments[1].duration) * 3.5 >
        b.price + (b.segments[0].duration + b.segments[1].duration) * 3.5
          ? 1
          : -1
      );
      return sortedOptimal;
    }
  }, [sortType, arrTickets]);
  return sortingTickets;
};

export const useTickets = (
  sortingTickets,
  checkedAllTicket,
  checkedZero,
  checkedOne,
  checkedTwo,
  checkedThree
) => {
  const filteredAndSortedTickets = useMemo(() => {
    if (checkedAllTicket) {
      const tickets = sortingTickets;
      return tickets;
    }
    if (!checkedAllTicket) {
      if (checkedZero && checkedOne && checkedTwo) {
        const tickets = sortingTickets.filter(
          (item) =>
            item.segments[0].stops.length + item.segments[1].stops.length !==
              3 &&
            item.segments[0].stops.length + item.segments[1].stops.length < 4
        );
        return tickets;
      }
      if (checkedZero && checkedOne && checkedThree) {
        const tickets = sortingTickets.filter(
          (item) =>
            item.segments[0].stops.length + item.segments[1].stops.length !==
              2 &&
            item.segments[0].stops.length + item.segments[1].stops.length < 4
        );
        return tickets;
      }
      if (checkedZero && checkedTwo && checkedThree) {
        const tickets = sortingTickets.filter(
          (item) =>
            item.segments[0].stops.length + item.segments[1].stops.length !==
              1 &&
            item.segments[0].stops.length + item.segments[1].stops.length < 4
        );
        return tickets;
      }

      if (checkedOne && checkedTwo && checkedThree) {
        const tickets = sortingTickets.filter(
          (item) =>
            item.segments[0].stops.length + item.segments[1].stops.length !==
              0 &&
            item.segments[0].stops.length + item.segments[1].stops.length < 4
        );
        return tickets;
      }
      if (checkedZero && checkedOne) {
        const tickets = sortingTickets.filter(
          (item) =>
            item.segments[0].stops.length + item.segments[1].stops.length ==
              0 ||
            item.segments[0].stops.length + item.segments[1].stops.length == 1
        );
        return tickets;
      }
      if (checkedZero && checkedTwo) {
        const tickets = sortingTickets.filter(
          (item) =>
            item.segments[0].stops.length + item.segments[1].stops.length ==
              0 ||
            item.segments[0].stops.length + item.segments[1].stops.length == 2
        );
        return tickets;
      }
      if (checkedZero && checkedThree) {
        const tickets = sortingTickets.filter(
          (item) =>
            item.segments[0].stops.length + item.segments[1].stops.length ==
              0 ||
            item.segments[0].stops.length + item.segments[1].stops.length == 3
        );
        return tickets;
      }
      if (checkedOne && checkedTwo) {
        const tickets = sortingTickets.filter(
          (item) =>
            item.segments[0].stops.length + item.segments[1].stops.length ==
              2 ||
            item.segments[0].stops.length + item.segments[1].stops.length == 1
        );
        return tickets;
      }
      if (checkedOne && checkedThree) {
        const tickets = sortingTickets.filter(
          (item) =>
            item.segments[0].stops.length + item.segments[1].stops.length ==
              1 ||
            item.segments[0].stops.length + item.segments[1].stops.length == 3
        );
        return tickets;
      }
      if (checkedTwo && checkedThree) {
        const tickets = sortingTickets.filter(
          (item) =>
            item.segments[0].stops.length + item.segments[1].stops.length ==
              2 ||
            item.segments[0].stops.length + item.segments[1].stops.length == 3
        );
        return tickets;
      }

      if (checkedThree) {
        const tickets = sortingTickets.filter(
          (item) =>
            item.segments[0].stops.length + item.segments[1].stops.length == 3
        );
        return tickets;
      }
      if (checkedTwo) {
        const tickets = sortingTickets.filter(
          (item) =>
            item.segments[0].stops.length + item.segments[1].stops.length == 2
        );
        return tickets;
      }
      if (checkedOne) {
        const tickets = sortingTickets.filter(
          (item) =>
            item.segments[0].stops.length + item.segments[1].stops.length == 1
        );
        return tickets;
      }
      if (checkedZero) {
        const tickets = sortingTickets.filter(
          (item) =>
            item.segments[0].stops.length + item.segments[1].stops.length == 0
        );
        return tickets;
      } else {
        const tickets = [];
        return tickets;
      }
    }
  }, [
    sortingTickets,
    checkedAllTicket,
    checkedZero,
    checkedOne,
    checkedTwo,
    checkedThree,
  ]);
  return filteredAndSortedTickets;
};
