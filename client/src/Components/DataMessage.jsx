export default function DataMessage() {
  return (
    <>
      <div className="col-lg-6">
        <a
          href="javascript:void(0);"
          data-toggle="modal"
          data-target="#view_info"
        >
          <img
            src="https://bootdey.com/img/Content/avatar/avatar2.png"
            alt="avatar"
          />
        </a>
        <div className="chat-about">
          <h6 className="m-b-0">Aiden Chavez</h6>
          <small>Last seen: 2 hours ago</small>
        </div>
      </div>
    </>
  );
}
