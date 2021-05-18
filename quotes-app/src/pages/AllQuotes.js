import { useEffect } from "react";
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHTTP from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
// const DUMMY_QUOTES = [
//   {
//     id: "q1",
//     author: "Sonali",
//     text: "Hello! Welcome to the world",
//   },
//   {
//     id: "q2",
//     author: "John",
//     text: "Happy Earth Day",
//   },
//   {
//     id: "q3",
//     author: "Sachin",
//     text: "Enjoy the Match",
//   },
// ];
const AllQuotes = () => {
  const { sendRequest, status, data: loadedQuotes, error } = useHTTP(
    getAllQuotes,
    true
  );
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuotesFound />;
  }
  return <QuoteList quotes={loadedQuotes} />;
};

export default AllQuotes;
