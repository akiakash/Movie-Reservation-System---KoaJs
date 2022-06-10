import React from "react";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  return (
    <div>
      <form
        className="example"
        action="/action_page.php"
        style={{
          margin: "auto",
          maxWidth: 400,
          paddingTop: 50,
          paddingBottom: 50,
        }}
      >
        <input
          type="text"
          placeholder="Search.."
          name="search2"
          style={{
            padding: "10px",
            fontSize: "20px",
            border: "0px solid",
            float: "left",
            width: "85%",
            height: "60px",
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5,
            background: "#fff",
          }}
        />
        <button
          type="submit"
          style={{
            float: "left",
            width: "15%",
            padding: "10px",
            background: "#8b0000",
            color: "white",
            height: "60px",
            fontSize: "20px",
            border: "0px solid",
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5,
            borderLeft: "none",
            cursor: "pointer",
          }}
        >
          <SearchIcon />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
