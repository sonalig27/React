import { Fragment, useEffect } from "react";
import { useParams, Link, useRouteMatch } from "react-router-dom";
import { Route } from "react-router-dom";
import Comments from "../components/comments/Comments";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHTTP from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

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
const QuoteDetail = () => {
  const params = useParams();
  const { quoteId } = params;
  const match = useRouteMatch();
  const { sendRequest, status, data: loadedQuote, error } = useHTTP(
    getSingleQuote,
    true
  );

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

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

  //   const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  if (!loadedQuote.text) {
    return <p>No Quote to Display!</p>;
  }
  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={`${match.path}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`{match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
