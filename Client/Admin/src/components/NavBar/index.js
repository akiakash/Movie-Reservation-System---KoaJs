import React from "react";
import * as S from "./styles";
import Calendar from "../../assets/icons/calendar-nav.png";
import Message from "../../assets/icons/message.png";
import Time from "../../assets/icons/time.png";
import User from "../../assets/icons/user.png";
import Shape from "../../assets/icons/shape.png";
import Arrow from "../../assets/icons/arrow-right.png";
import { removeUserSession, getUser } from "../../Utils/Common";

export default function NavBar() {
  const user = getUser();
  return (
    <S.Wrapper>
      <S.Container>
        <S.Profile>
          <S.ProfileImg></S.ProfileImg>
          <S.ProfileInfo>
            <h6 className="text-base">Metacare</h6>
            <S.Email className="text-sm">adeyinka@metacare.app</S.Email>
          </S.ProfileInfo>
        </S.Profile>
        <S.List>
          <S.ListItem>
            <S.Item href="#">
              <S.ItemIcon src={User} alt="user" />
              Dashboard
            </S.Item>
            <img src={Arrow} alt="arrow" />
          </S.ListItem>
          <S.ListItem>
            <S.Item href="Movie">
              <S.ItemIcon src={Shape} alt="shape" />
              Movie
            </S.Item>
            <img src={Arrow} alt="arrow" />
          </S.ListItem>
          {user.name === "admin" ? (
            <S.ListItem>
              <S.Item href="Cast">
                <S.ItemIcon src={Calendar} alt="calendar" />
                Cast
              </S.Item>
              <img src={Arrow} alt="arrow" />
            </S.ListItem>
          ) : null}
          <S.ListItem>
            <S.Item href="Theater">
              <S.ItemIcon src={Time} alt="time" />
              Theater
            </S.Item>
            <img src={Arrow} alt="arrow" />
          </S.ListItem>
          {user.name === "admin" ? (
            <S.ListItem>
              <S.Item href="Other">
                <S.ItemIcon src={Shape} alt="shape" />
                Other
              </S.Item>
              <img src={Arrow} alt="arrow" />
            </S.ListItem>
          ) : null}
          <S.ListItem>
            <S.Item href="#" onClick={() => removeUserSession()}>
              <S.ItemIcon src={Time} alt="time" />
              SignOut
            </S.Item>
            <img src={Arrow} alt="arrow" />
          </S.ListItem>
        </S.List>
      </S.Container>
    </S.Wrapper>
  );
}
