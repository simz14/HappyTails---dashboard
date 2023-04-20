import React from "react";
import Layout from "../../components/Layout";
import styled from "styled-components";
import pawsBcg from "../../assets/pawsBcg.jpg";
import { useNavigate, useParams } from "react-router-dom";
import useDogs from "../../hooks/useDogs";
import { CircularProgress } from "@mui/material";
import { Container } from "../../components/Container";
import useDog from "../../hooks/useDog";
import BasicButton from "../../components/BasicButton";
import { handleClickDelete } from "../../utils/deleteFunction";
import { useForm } from "react-hook-form";
import DogDetailForm from "./components/DogForm";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightBcgBlue};
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  .paws {
    object-fit: cover;
    position: absolute;
    bottom: 0;
    top: 0;
    height: 100%;
    width: 100%;
    opacity: 0.07;
  }
`;

const ContentWrapper = styled.div`
  padding-top: 48px;
  height: 100%;
  width: 100%;
  text-align: center;
  .intro {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .buttons {
      display: flex;
      gap: 1rem;
    }
  }
`;

const DogDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { setDogs, loading } = useDogs();
  const { dog } = useDog(id);

  const navigateToDogs = () => {
    navigate("/dogs");
  };
  const removeDog = () => {
    setDogs((prev) => prev.filter((item) => item.id != id));
  };

  console.log(dog);
  return (
    <Layout>
      <Wrapper>
        <img className="paws" src={pawsBcg} alt="paws" />

        <ContentWrapper>
          {loading ? (
            <CircularProgress />
          ) : (
            <Container>
              <div className="intro">
                <div>
                  <h2>{dog?.name}</h2>
                  <p>Dog detail</p>
                </div>
                <div className="buttons">
                  <BasicButton
                    onClick={() =>
                      handleClickDelete(id, removeDog, navigateToDogs)
                    }
                    title="Remove"
                  />
                  <BasicButton title="Save" />
                </div>
              </div>
              <div className="dogInfo">
                <DogDetailForm dog={dog} />
              </div>
            </Container>
          )}
        </ContentWrapper>
      </Wrapper>
    </Layout>
  );
};

export default DogDetail;