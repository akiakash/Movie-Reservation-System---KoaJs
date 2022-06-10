import React from "react";

function PrivacyNote() {
  return (
    <div style={{ margin: 5, paddingBottom: 20 }}>
      <h6
        style={{
          fontSize: "12px",
          color: "#7f7f7f",
          fontWeight: "600",
          fontFamily: "sans-serif",
        }}
      >
        Privacy Note
      </h6>
      <p
        style={{
          fontSize: "12px",
          color: "#999999",
          fontWeight: "400",
          fontFamily: "sans-serif",
        }}
      >
        By using www.bookmyshow.com(our website), you are fully accepting the
        Privacy Policy available at https://lk.bookmyshow.com/privacy governing
        your access to BookMyShow and provision of services by BookMyShow to
        you. If you do not accept terms mentioned in the Privacy Policy, you
        must not share any of your personal information and immediately exit
        BookMyShow.
      </p>
    </div>
  );
}

export default PrivacyNote;
