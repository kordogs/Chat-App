import PropTypes from "prop-types";
import { format } from "timeago.js";

export default function Message({ own, messages }) {
  return (
    <>
      <li className="clearfix">
        {/* <div className="message-data text-right"> */}
        <div className={own ? "message-data text-right" : "message-data"}></div>
        {/* <div className="message other-message float-right"> */}
        <div
          className={
            own
              ? "message other-message float-right"
              : "message my-message float-left"
          }
        >
          {messages.text}
          <div
            className="p-0 m-0 text-secondary"
            style={{ fontSize: "10px", fontWeight: "bold" }}
          >
            {format(messages.createdAt)}
          </div>
        </div>
      </li>
    </>
  );
}

Message.propTypes = {
  own: PropTypes.bool.isRequired,
  messages: PropTypes.array.isRequired,
};
