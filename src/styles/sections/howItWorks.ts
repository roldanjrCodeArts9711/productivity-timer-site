import styled from "styled-components";
import { SectionStyle } from "styles/mixins";

export const StyledHowItWorks = styled.section`
  ${SectionStyle}
  padding-bottom: 16rem;
`;

export const StyledHowItWorkStepList = styled.ol`
  list-style: none;
  counter-reset: step;

  display: grid;
  row-gap: 4rem;
  column-gap: 6rem;
  grid-template-rows: repeat(3, 1fr);
  grid-auto-flow: column;
`;

export const StyledHowItWorkStep = styled.li`
  counter-increment: step;

  display: grid;
  row-gap: 0.8rem;

  height: max-content;

  & > h4 {
    font-size: 2.4rem;
    font-weight: 500;
    color: var(--color-heading-text);

    position: relative;

    &::before {
      content: "0" counter(step) ".";
      margin-right: 0.6rem;
      color: var(--color-primary-variant);
    }

    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 1px;
      background-color: var(--color-border-primary);
      margin-top: 1.2rem;
    }
  }

  & > p {
    text-overflow: ellipsis;
    width: 100%;
    white-space: nowrap;
    word-break: break-all;
  }
`;
