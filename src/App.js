import React, { useEffect, useState } from "react";
import logo from "./Logo.svg";
import "./styles/App.css";
import MyCheckbox from "./components/UI/checkbox/MyCheckbox";
import Ticket from "./components/ticket/Ticket";
import AviaService from "./API/AviaService";
import TabsList from "./components/tabsList/TabsList";
import { useSortedTickets, useTickets } from "./hooks/useTickets";
import Loader from "./components/loader/Loder";
import { useFetching } from "./hooks/useFetching";

function App() {
  const [arrTickets, setArrTickets] = useState([]);

  const [ticketsPerPage, setTicketsPerPage] = useState(5);

  const [sortType, setSortType] = useState("cheap");

  const [checkedAllTicket, setCheckedAllTicket] = useState(true);
  const [checkedZero, setCheckedZero] = useState(true);
  const [checkedOne, setCheckedOne] = useState(true);
  const [checkedTwo, setCheckedTwo] = useState(true);
  const [checkedThree, setCheckedThree] = useState(true);
  const sortedTickets = useSortedTickets(sortType, arrTickets);
  const filteredAndSortedTickets = useTickets(
    sortedTickets,
    checkedAllTicket,
    checkedZero,
    checkedOne,
    checkedTwo,
    checkedThree
  );

  const [fetchTicket, loading, TicketError] = useFetching(async () => {
    const ticket = await AviaService.getTickets();
    setArrTickets(ticket.data.tickets);
  });

  useEffect(() => {
    if (checkedZero && checkedOne && checkedTwo && checkedThree) {
      setCheckedAllTicket(true);
    } else {
      setCheckedAllTicket(false);
    }
  }, [checkedZero, checkedOne, checkedTwo, checkedThree]);

  const handleCheckboxChange = (event) => {
    switch (event.target.name) {
      case "Zero":
        setCheckedZero(event.target.checked);
        break;
      case "One":
        setCheckedOne(event.target.checked);
        break;
      case "Two":
        setCheckedTwo(event.target.checked);
        break;
      case "Three":
        setCheckedThree(event.target.checked);
        break;
      default:
        setCheckedAllTicket(event.target.checked);
        setCheckedZero(event.target.checked);
        setCheckedOne(event.target.checked);
        setCheckedTwo(event.target.checked);
        setCheckedThree(event.target.checked);
    }
  };

  const indexOfLastTicket = ticketsPerPage;
  const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage;
  const currentTickets = filteredAndSortedTickets.slice(
    indexOfFirstTicket,
    indexOfLastTicket
  );
  useEffect(() => {
    fetchTicket();
  }, []);

  function loadMoreTickets() {
    setTicketsPerPage(ticketsPerPage + 5);
  }

  return (
    <div className="App">
      <header>
        <img src={logo}></img>
      </header>
      <main className="wrapper-container">
        <div className="filter">
          <h4 className="filter__title">Количество пересадок</h4>
          <MyCheckbox
            onChange={handleCheckboxChange}
            text="Все"
            isChecked={checkedAllTicket}
            name="all"
          />
          <MyCheckbox
            onChange={handleCheckboxChange}
            text="Без пересадок"
            isChecked={checkedZero}
            name="Zero"
          />
          <MyCheckbox
            onChange={handleCheckboxChange}
            text="1 пересадка"
            isChecked={checkedOne}
            name="One"
          />
          <MyCheckbox
            text="2 пересадки"
            onChange={handleCheckboxChange}
            isChecked={checkedTwo}
            name="Two"
          />
          <MyCheckbox
            text="3 пересадки"
            onChange={handleCheckboxChange}
            isChecked={checkedThree}
            name="Three"
          />
        </div>
        <div className="tabs">
          <TabsList changeWordSort={setSortType} />
          <div className="tabs__content">
            {TicketError && <h3 className="error">{TicketError} &#x2639;</h3>}
            {loading ? (
              <Loader />
            ) : currentTickets.length == 0 && !TicketError ? (
              <h3>Рейсов, подходящих под заданные фильтры, не найдено</h3>
            ) : (
              currentTickets.map((ticket) => (
                <Ticket
                  key={Date.now() + Math.random() * 10}
                  tickets={ticket}
                />
              ))
            )}
            {!loading && currentTickets.length !== 0 ? (
              <button onClick={loadMoreTickets} className="tabs__content__btn">
                Показать еще 5 билетов!
              </button>
            ) : null}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
