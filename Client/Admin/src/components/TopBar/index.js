import React from "react";
import * as S from "./styles";
import Search from "../../assets/icons/search.png";
import { getUser } from ".././../Utils/Common";

export default function TopBar() {
  const user = getUser();
  return (
    <S.Top>
      <div>
        {/* input */}
        <S.InputField>
          <S.SearchImg src={Search} />
          <S.Input type="text" placeholder="Ask us any question" />
        </S.InputField>
      </div>

      <S.Right>
        <span>{user.name}</span>
      </S.Right>
    </S.Top>
  );
}
