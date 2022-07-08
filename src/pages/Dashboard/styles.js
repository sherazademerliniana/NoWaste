import styled from "styled-components";

export const StyledBalanceDiv = styled.div`
  position: fixed;
  top: 20rem;
  right: 2rem;

  margin: 0 1rem 0 1rem;

  div {
    width: 20rem;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    gap: 0.5rem;

    figure {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    figure:nth-child(1) {
      color: var(--primary-color);
      font-size: 1.9rem;
    }
  }

  .text-div {
    margin-top: 1.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin-left: 0;
      margin-bottom: 1rem;
      padding-right: 5rem;

    }
  }
`;

export const StyledStoreDiv = styled.div`
  @media (max-width: 740px) {
    position: fixed;
    top: 15rem;

    margin: 0 1rem 0 1rem;

    div {
      width: 20rem;

      display: flex;
      align-items: center;
      justify-content: flex-start;

      border-bottom: 0.1rem solid var(--primary-color);

      figure {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      figure:nth-child(1) {
        color: var(--primary-color);
        font-size: 1.5rem;
      }
    }

    figure {
      display: flex;
      align-items: center;
      justify-content: center;

      color: var(--primary-color);
      font-size: 2rem;
    }

    .name-edit-div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin-top: 0.5rem;

      border: none;

      figure {
        position: fixed;
        right: 1rem;
        top: 15rem;
      }
    }
  }

  @media (min-width: 741px) {
    position: fixed;
    top: 10rem;
    right: 2rem;

    margin: 0 1rem 0 1rem;

    div {
      width: 20rem;

      display: flex;
      align-items: center;
      justify-content: flex-start;

      gap: 0.5rem;

      figure {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      figure:nth-child(1) {
        color: var(--primary-color);
        font-size: 1.5rem;
      }

      font-size: 1.2rem;
    }

    figure {
      display: flex;
      align-items: center;
      justify-content: center;

      color: var(--primary-color);
      font-size: 1.5rem;
    }

    .name-edit-div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin-top: 0.5rem;

      border: none;

      figure {
        position: fixed;
        right: 7.5rem;
        top: 10rem;
      }
    }
  }
`;

export const StyledProductsDiv = styled.div`
  @media (max-width: 740px) {
    position: fixed;
    top: 21rem;

    div {
      display: flex;
      align-items: center;
      gap: 6rem;

      margin: 0 1rem 0 1rem;
    }

    .products-div {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      margin: 2rem 1rem 0 1rem;
    }
  }

  @media (min-width: 741px) {
    position: fixed;
    top: 10rem;

    width: 51rem;

    left: 5rem;

    div {
      display: flex;
      align-items: center;
      gap: 10rem;

      font-size: 2rem;

      margin: 0 1rem 0 1rem;
    }

    .products-div {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 0.5rem;

      margin: 5rem 1rem 0 1rem;
    }
  }
`;
