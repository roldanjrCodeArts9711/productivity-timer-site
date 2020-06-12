import React, { useState, useEffect, useContext } from "react";
import { useStaticQuery, graphql } from "gatsby";

import {
  StyledLanding,
  StyledWaterMarkLeft,
  StyledWaterMarkRight,
  StyledLandingContent,
  StyledLandingHeader,
  StyledLandingCtaWrapper,
  StyledLandingCtaDownloadButton,
  StyledLandingCtaGithubLink,
  StyledAppPreviewWrapper,
  StyledAppPreviewImage,
} from "styles";
import { MarkDownProps, FluidImageProps } from "types";
import { SVG } from "components";
import { detectOS, OSTypes } from "utils";
import { WINDOWS_INSTALLER, MAC_INSTALLER } from "configurations";
import { ThemeContext } from "contexts";
import { useParallax } from "hooks";

type QueryProps = MarkDownProps & {
  workTimePreviewLight: FluidImageProps;
  workTimePreviewDark: FluidImageProps;
  shortBreakPreviewLight: FluidImageProps;
  shortBreakPreviewDark: FluidImageProps;
  longBreakPreviewLight: FluidImageProps;
  longBreakPreviewDark: FluidImageProps;
  configPreviewLight: FluidImageProps;
  configPreviewDark: FluidImageProps;
  settingsPreviewLight: FluidImageProps;
  settingsPreviewDark: FluidImageProps;
  tasksPreviewLight: FluidImageProps;
  tasksPreviewDark: FluidImageProps;
};

const Landing: React.FC = () => {
  const {
    allMarkdownRemark,
    workTimePreviewLight,
    workTimePreviewDark,
    shortBreakPreviewLight,
    shortBreakPreviewDark,
    longBreakPreviewLight,
    longBreakPreviewDark,
    configPreviewLight,
    configPreviewDark,
    settingsPreviewLight,
    settingsPreviewDark,
    tasksPreviewLight,
    tasksPreviewDark,
  } = useStaticQuery<QueryProps>(graphql`
    {
      allMarkdownRemark: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/hero/" } }
      ) {
        edges {
          node {
            frontmatter {
              title
              subTitle
            }
          }
        }
      }
      workTimePreviewLight: file(relativePath: { eq: "work-time-light.PNG" }) {
        childImageSharp {
          fluid(maxWidth: 340, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      workTimePreviewDark: file(relativePath: { eq: "work-time-dark.PNG" }) {
        childImageSharp {
          fluid(maxWidth: 340, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      shortBreakPreviewLight: file(
        relativePath: { eq: "short-break-light.PNG" }
      ) {
        childImageSharp {
          fluid(maxWidth: 340, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      shortBreakPreviewDark: file(
        relativePath: { eq: "short-break-dark.PNG" }
      ) {
        childImageSharp {
          fluid(maxWidth: 340, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      longBreakPreviewLight: file(
        relativePath: { eq: "long-break-light.PNG" }
      ) {
        childImageSharp {
          fluid(maxWidth: 340, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      longBreakPreviewDark: file(relativePath: { eq: "long-break-dark.PNG" }) {
        childImageSharp {
          fluid(maxWidth: 340, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      configPreviewLight: file(relativePath: { eq: "config-light.PNG" }) {
        childImageSharp {
          fluid(maxWidth: 340, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      configPreviewDark: file(relativePath: { eq: "config-dark.PNG" }) {
        childImageSharp {
          fluid(maxWidth: 340, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      settingsPreviewLight: file(relativePath: { eq: "settings-light.PNG" }) {
        childImageSharp {
          fluid(maxWidth: 340, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      settingsPreviewDark: file(relativePath: { eq: "settings-dark.PNG" }) {
        childImageSharp {
          fluid(maxWidth: 340, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      tasksPreviewLight: file(relativePath: { eq: "tasks-light.PNG" }) {
        childImageSharp {
          fluid(maxWidth: 340, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      tasksPreviewDark: file(relativePath: { eq: "tasks-dark.PNG" }) {
        childImageSharp {
          fluid(maxWidth: 340, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `);

  const { frontmatter } = allMarkdownRemark.edges[0].node;

  const [operatingSystem, setOperatingSystem] = useState<OSTypes>("Mobile");

  const { isDarkMode } = useContext(ThemeContext);

  const offset = useParallax();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOperatingSystem(detectOS());
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  const renderDownloadButton = () => {
    switch (operatingSystem) {
      case "Windows":
        return (
          <StyledLandingCtaDownloadButton as={"a"} href={WINDOWS_INSTALLER}>
            <SVG name="windows" />
            Download for Windows
          </StyledLandingCtaDownloadButton>
        );
      case "MacOS":
        return (
          <StyledLandingCtaDownloadButton as={"a"} href={MAC_INSTALLER}>
            <SVG name="apple" />
            Download for Mac OS
          </StyledLandingCtaDownloadButton>
        );
      case "Linux":
        return (
          <StyledLandingCtaDownloadButton as={"a"} href="#download-now">
            <SVG name="tux" />
            Download for Linux OS
          </StyledLandingCtaDownloadButton>
        );
      default:
        return (
          <StyledLandingCtaDownloadButton as={"a"} href="#download-now">
            <SVG name="download" />
            Download Installer
          </StyledLandingCtaDownloadButton>
        );
    }
  };

  return (
    <StyledLanding id="landing">
      <StyledWaterMarkLeft style={{ top: offset / 3 }} />
      <StyledWaterMarkRight style={{ top: offset / 3 }} />

      <StyledLandingContent style={{ top: offset / 6 }}>
        <StyledLandingHeader>
          <h1>{frontmatter.title}</h1>
          <p>{frontmatter.subTitle}</p>
        </StyledLandingHeader>

        <StyledLandingCtaWrapper>
          {renderDownloadButton()}
          <StyledLandingCtaGithubLink
            as={"a"}
            href="https://github.com/roldanjrCodeArts9711/productivity-timer"
          >
            <SVG name="github" />
            View on Github
          </StyledLandingCtaGithubLink>
        </StyledLandingCtaWrapper>
      </StyledLandingContent>

      <StyledAppPreviewWrapper style={{ top: offset / 6 }}>
        <StyledAppPreviewImage
          fluid={
            isDarkMode
              ? tasksPreviewDark.childImageSharp.fluid
              : tasksPreviewLight.childImageSharp.fluid
          }
          alt="tasks preview"
        />
        <StyledAppPreviewImage
          fluid={
            isDarkMode
              ? settingsPreviewDark.childImageSharp.fluid
              : settingsPreviewLight.childImageSharp.fluid
          }
          alt="settings preview"
        />
        <StyledAppPreviewImage
          fluid={
            isDarkMode
              ? configPreviewDark.childImageSharp.fluid
              : configPreviewLight.childImageSharp.fluid
          }
          alt="config preview"
        />
        <StyledAppPreviewImage
          fluid={
            isDarkMode
              ? workTimePreviewDark.childImageSharp.fluid
              : workTimePreviewLight.childImageSharp.fluid
          }
          alt="work time preview"
        />
        <StyledAppPreviewImage
          fluid={
            isDarkMode
              ? shortBreakPreviewDark.childImageSharp.fluid
              : shortBreakPreviewLight.childImageSharp.fluid
          }
          alt="short break preview"
        />
        <StyledAppPreviewImage
          fluid={
            isDarkMode
              ? longBreakPreviewDark.childImageSharp.fluid
              : longBreakPreviewLight.childImageSharp.fluid
          }
          alt="long break preview"
        />
      </StyledAppPreviewWrapper>
    </StyledLanding>
  );
};

export default Landing;
