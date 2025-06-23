import styled, { createGlobalStyle, keyframes } from "styled-components";

// Animations (최상단으로 이동)
export const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const fadeInLeft = keyframes`
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: translateX(0); }
`;

export const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

export const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

export const loadingPulse = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

// Global styles
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: #000;
    color: #fff;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }
`;

// Loading Bar
export const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: ${({ isLoading }) => (isLoading ? 1 : 0)};
  visibility: ${({ isLoading }) => (isLoading ? "visible" : "hidden")};
  transition: opacity 0.5s ease, visibility 0.5s ease;
`;

export const LoadingBarContainer = styled.div`
  width: 300px;
  height: 8px;
  background: #1f2937;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
`;

export const LoadingBar = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #60a5fa, #a78bfa, #ec4899);
  animation: ${loadingPulse} 1.5s infinite ease-in-out;
`;

// Main container
export const Container = styled.div`
  background: #000;
  color: #fff;
  overflow: hidden;
`;

// Navigation
export const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 50;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(31, 41, 55, 0.5);
  transition: all 0.3s ease;
`;

export const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  @media (min-width: 640px) {
    height: 80px;
    padding: 0 24px;
  }
`;

export const Logo = styled.div`
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.3s ease;
  background: linear-gradient(to right, #60a5fa, #a78bfa);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  &:hover {
    transform: scale(1.05);
  }
  @media (min-width: 640px) {
    font-size: 24px;
  }
`;

export const NavMenu = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    gap: 4px;
  }
`;

export const NavItem = styled.button`
  padding: 8px 16px;
  background: ${({ active }) =>
    active ? "rgba(255, 255, 255, 0.2)" : "transparent"};
  color: ${({ active }) => (active ? "#fff" : "#9CA3AF")};
  border-radius: 9999px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
    transform: scale(1.05);
  }
`;

export const MobileMenuButton = styled.button`
  display: block;
  padding: 8px;
  background: none;
  border: none;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileMenuIcon = styled.div`
  width: 24px;
  height: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  margin-left: 20px;

  div {
    width: 100%;
    height: 3px;
    background: #fff;
    border-radius: 2px;
    transition: all 0.3s ease;
    position: absolute;
    transform-origin: center;
  }

  div:nth-child(1) {
    top: 0;
    ${({ isOpen }) =>
      isOpen && `transform: rotate(45deg); top: 50%; margin-top: -1.5px;`}
  }

  div:nth-child(2) {
    top: 50%;
    margin-top: -1.5px;
    ${({ isOpen }) => isOpen && `opacity: 0; transform: scaleX(0);`}
  }

  div:nth-child(3) {
    bottom: 0;
    ${({ isOpen }) =>
      isOpen && `transform: rotate(-45deg); top: 50%; margin-top: -1.5px;`}
  }
`;

export const MobileMenu = styled.div`
  display: block;
  overflow: hidden;
  transition: all 0.5s ease;
  max-height: ${({ isOpen }) => (isOpen ? "320px" : "0")};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  padding-bottom: ${({ isOpen }) => (isOpen ? "24px" : "0")};
  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileMenuItem = styled.button`
  display: block;
  width: calc(100% - 48px);
  text-align: left;
  padding: 12px 24px;
  color: ${({ active }) => (active ? "#fff" : "#9CA3AF")};
  background: ${({ active }) =>
    active ? "rgba(255, 255, 255, 0.2)" : "transparent"};
  border-radius: 8px;
  margin: 8px 24px;
  font-size: 16px;
  transition: all 0.3s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateX(8px);
  }
`;

// Hero Section
export const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

export const HeroBackground = styled.div`
  position: absolute;
  inset: 0;
  .gradient {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(30, 64, 175, 0.2),
      rgba(107, 33, 168, 0.2),
      rgba(219, 39, 119, 0.2)
    );
  }
`;

export const Star = styled.div`
  position: absolute;
  width: 4px;
  height: 4px;
  background: #fff;
  border-radius: 50%;
  opacity: 0.2;
  animation: ${pulse} 2s infinite;
  will-change: transform;
`;

export const HeroContent = styled.div`
  text-align: center;
  position: relative;
  z-index: 10;
  padding: 16px;
  transform: translateY(${({ scrollY }) => scrollY * 0.3}px);
  opacity: ${({ scrollY }) => Math.max(1 - scrollY / 500, 0)};
  will-change: transform, opacity;
`;

export const HeroLabel = styled.span`
  display: block;
  font-size: 14px;
  color: #9ca3af;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 32px;
  animation: ${fadeInUp} 1s ease-out 0.5s forwards;
  opacity: 0;
  @media (min-width: 640px) {
    font-size: 16px;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 40px;
  font-weight: 300;
  margin-bottom: 24px;
  line-height: 1.2;
  animation: ${fadeInUp} 1s ease-out 1s forwards;
  opacity: 0;
  @media (min-width: 640px) {
    font-size: 64px;
  }
  @media (min-width: 768px) {
    font-size: 96px;
  }
  .highlight {
    background: linear-gradient(to right, #60a5fa, #a78bfa, #ec4899);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: ${pulse} 2s infinite;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 18px;
  color: #9ca3af;
  max-width: 640px;
  margin: 0 auto 48px;
  line-height: 1.6;
  animation: ${fadeInUp} 1s ease-out 1.5s forwards;
  opacity: 0;
  @media (min-width: 640px) {
    font-size: 20px;
  }
  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const HeroButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  animation: ${fadeInUp} 1s ease-out 2s forwards;
  opacity: 0;
  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

export const PrimaryButton = styled.button`
  padding: 16px 32px;
  background: #fff;
  color: #000;
  border-radius: 9999px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  &:hover {
    background: #e5e7eb;
    transform: scale(1.1);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
    span:last-child {
      transform: translateX(4px);
    }
  }
`;

export const SecondaryButton = styled.button`
  padding: 16px 32px;
  border: 1px solid #4b5563;
  border-radius: 9999px;
  background: transparent;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background: #fff;
    color: #000;
    transform: scale(1.1);
  }
`;

export const FloatingElement = styled.div`
  position: absolute;
  border-radius: 50%;
  opacity: 0.6;
  animation: ${bounce} 3s infinite;
  background-color: ${(props) =>
    ["#3B82F6", "#8B5CF6", "#EC4899"][props.index % 3]};
  will-change: transform;
`;

// About Section
export const AboutSection = styled.section`
  padding: 80px 16px;
  transition: all 0.5s ease;
  transform: ${({ isVisible }) =>
    isVisible ? "translateY(0)" : "translateY(80px)"};
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  will-change: transform, opacity;
  @media (min-width: 640px) {
    padding: 128px 24px;
  }
`;

export const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const AboutGrid = styled.div`
  display: grid;
  gap: 32px;
  align-items: center;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 64px;
  }
`;

export const AboutText = styled.div`
  transition: all 0.5s ease;
`;

export const AboutLabel = styled.span`
  display: block;
  font-size: 14px;
  color: #60a5fa;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 16px;
  animation: ${fadeInLeft} 1s ease-out 0.2s forwards;
  opacity: 0;
`;

export const AboutTitle = styled.h2`
  font-size: 36px;
  font-weight: 300;
  margin-bottom: 32px;
  transition: all 0.5s ease;
  transform: ${({ isVisible }) =>
    isVisible ? "translateX(0)" : "translateX(40px)"};
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  @media (min-width: 640px) {
    font-size: 48px;
  }
`;

export const AboutParagraph = styled.p`
  font-size: 16px;
  color: #9ca3af;
  line-height: 1.6;
  margin-bottom: 24px;
  transition: all 0.5s ease;
  transform: ${({ isVisible, delay }) =>
    isVisible ? "translateX(0)" : "translateX(40px)"};
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  transition-delay: ${({ delay }) => delay}s;
  @media (min-width: 640px) {
    font-size: 18px;
  }
`;

export const AboutTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  transition: all 0.5s ease;
  transform: ${({ isVisible }) =>
    isVisible ? "translateX(0)" : "translateX(40px)"};
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  transition-delay: 0.6s;
`;

export const AboutTag = styled.div`
  padding: 8px 16px;
  background: linear-gradient(
    to right,
    rgba(30, 64, 175, 0.3),
    rgba(107, 33, 168, 0.3)
  );
  border: 1px solid #374151;
  border-radius: 9999px;
  font-size: 14px;
  transition: all 0.3s ease;
  &:hover {
    border-color: #6b7280;
    transform: scale(1.05);
  }
`;

export const AboutImageContainer = styled.div`
  position: relative;
  transition: all 0.5s ease 0.3s;
  transform: ${({ isVisible }) =>
    isVisible ? "translateY(0) scale(1)" : "translateY(40px) scale(0.95)"};
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
`;

export const AboutImage = styled.div`
  width: 100%;
  height: 320px;
  background: linear-gradient(
    135deg,
    rgba(30, 64, 175, 0.2),
    rgba(107, 33, 168, 0.2)
  );
  border-radius: 24px;
  border: 1px solid #1f2937;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  &:hover .icon {
    transform: scale(1.1);
  }
  &:hover .overlay {
    opacity: 1;
  }
  @media (min-width: 640px) {
    height: 384px;
  }
  .icon {
    font-size: 48px;
    opacity: 0.2;
    transition: transform 0.5s ease;
    @media (min-width: 640px) {
      font-size: 64px;
    }
  }
  .overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(107, 33, 168, 0.2), transparent);
    opacity: 0;
    transition: opacity 0.5s ease;
  }
`;

// Skills Section
export const SkillsSection = styled.section`
  padding: 80px 16px;
  background: rgba(17, 24, 39, 0.3);
  transition: all 0.5s ease 0.2s;
  transform: ${({ isVisible }) =>
    isVisible ? "translateY(0)" : "translateY(80px)"};
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  will-change: transform, opacity;
  @media (min-width: 640px) {
    padding: 128px 24px;
  }
`;

export const SkillsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

export const SkillsLabel = styled.span`
  display: block;
  font-size: 14px;
  color: #60a5fa;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 16px;
`;

export const SkillsTitle = styled.h2`
  font-size: 36px;
  font-weight: 300;
  margin-bottom: 64px;
  @media (min-width: 640px) {
    font-size: 48px;
  }
`;

export const SkillsGrid = styled.div`
  display: grid;
  gap: 24px;
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const SkillCard = styled.div`
  padding: 24px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 16px;
  border: 1px solid #1f2937;
  transition: all 0.5s ease;
  transform: ${({ isVisible }) => (isVisible ? "scale(1)" : "scale(0.95)")};
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  &:hover {
    border-color: #4b5563;
    transform: scale(1.05) rotate(1deg);
  }
`;

export const SkillIcon = styled.div`
  font-size: 32px;
  margin-bottom: 16px;
  transition: transform 0.3s ease;
  ${SkillCard}:hover & {
    transform: scale(1.1);
  }
  @media (min-width: 640px) {
    font-size: 40px;
  }
`;

export const SkillTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 24px;
  @media (min-width: 640px) {
    font-size: 24px;
  }
`;

export const SkillItem = styled.div`
  color: #9ca3af;
  transition: all 0.3s ease;
  &:hover {
    color: #fff;
    transform: translateX(8px);
  }
`;

export const SkillBar = styled.div`
  height: 4px;
  background: linear-gradient(to right, ${(props) => props.color});
  border-radius: 9999px;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s ease;
  margin-top: 24px;
  ${SkillCard}:hover & {
    transform: scaleX(1);
  }
`;

// Projects Section
export const ProjectsSection = styled.section`
  padding: 80px 16px;
  transition: all 0.5s ease;
  transform: ${({ isVisible }) =>
    isVisible ? "translateY(0)" : "translateY(80px)"};
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  will-change: transform, opacity;
  @media (min-width: 640px) {
    padding: 128px 24px;
  }
`;

export const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const ProjectsHeader = styled.div`
  text-align: center;
  margin-bottom: 64px;
`;

export const ProjectsLabel = styled.span`
  display: block;
  font-size: 14px;
  color: #60a5fa;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 16px;
`;

export const ProjectsTitle = styled.h2`
  font-size: 36px;
  font-weight: 300;
  margin-bottom: 16px;
  @media (min-width: 640px) {
    font-size: 48px;
  }
`;

export const ProjectsSubtitle = styled.p`
  color: #9ca3af;
  max-width: 640px;
  margin: 0 auto;
`;

export const ProjectCard = styled.div`
  display: grid;
  gap: 32px;
  align-items: center;
  margin-bottom: 96px;
  @media (min-width: 767px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    margin-bottom: 128px;
    &:nth-child(even) {
      .column-1 {
        grid-column-start: 2;
      }
      .column-2 {
        grid-column-start: 1;
        grid-column-end: 2;
      }
    }
  }
`;

export const ProjectText = styled.div`
  transition: all 0.5s ease;
`;

export const ProjectLabel = styled.span`
  display: block;
  font-size: 14px;
  color: #60a5fa;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 16px;
`;

export const ProjectTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 16px;
  transition: color 0.3s ease;
  cursor: pointer;
  &:hover {
    color: #60a5fa;
  }
  @media (min-width: 640px) {
    font-size: 28px;
  }
`;

export const ProjectDescription = styled.p`
  font-size: 16px;
  color: #9ca3af;
  line-height: 1.6;
  margin-bottom: 24px;
  @media (min-width: 640px) {
    font-size: 18px;
  }
`;

export const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 32px;
`;

export const TechTag = styled.span`
  padding: 4px 12px;
  background: #1f2937;
  color: #fff;
  font-size: 12px;
  border-radius: 9999px;
  transition: all 0.3s ease;
  &:hover {
    background: #374151;
    transform: scale(1.05);
  }
  @media (min-width: 640px) {
    font-size: 14px;
  }
`;

export const ProjectButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

export const ProjectDetailsButton = styled.button`
  padding: 12px 24px;
  border: 1px solid #4b5563;
  border-radius: 9999px;
  background: transparent;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  &:hover {
    background: #fff;
    color: #000;
    transform: scale(1.05);
    span:last-child {
      transform: translateX(4px);
    }
  }
`;

export const ProjectLinkButton = styled.button`
  padding: 12px 24px;
  color: #9ca3af;
  font-size: 14px;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: color 0.3s ease;
  &:hover {
    color: #fff;
  }
`;

export const ProjectImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.5s ease;
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 256px;
  object-fit: cover;
  transition: transform 0.7s ease;
  ${ProjectImageContainer}:hover & {
    transform: scale(1.1);
  }
  @media (min-width: 640px) {
    height: 320px;
  }
`;

export const ProjectImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  opacity: 0;
  transition: opacity 0.5s ease;
  ${ProjectImageContainer}:hover & {
    opacity: 1;
  }
`;

export const ProjectImageIcon = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.5s ease;
  div {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    border-radius: 50%;
    padding: 16px;
    transform: scale(0.75);
    transition: transform 0.3s ease;
    font-size: 24px;
  }
  ${ProjectImageContainer}:hover & {
    opacity: 1;
    div {
      transform: scale(1);
    }
  }
`;

// Contact Section
export const ContactSection = styled.section`
  padding: 80px 16px;
  background: linear-gradient(to bottom, #000, #111827);
  transition: all 0.5s ease;
  transform: ${({ isVisible }) =>
    isVisible ? "translateY(0)" : "translateY(80px)"};
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  will-change: transform, opacity;
  @media (min-width: 640px) {
    padding: 128px 24px;
  }
`;

export const ContactContainer = styled.div`
  max-width: 896px;
  margin: 0 auto;
  text-align: center;
`;

export const ContactLabel = styled.span`
  display: block;
  font-size: 14px;
  color: #60a5fa;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 16px;
`;

export const ContactTitle = styled.h2`
  font-size: 36px;
  font-weight: 300;
  margin-bottom: 32px;
  @media (min-width: 640px) {
    font-size: 48px;
  }
`;

export const ContactSubtitle = styled.p`
  font-size: 18px;
  color: #9ca3af;
  max-width: 640px;
  margin: 0 auto 48px;
  line-height: 1.6;
  @media (min-width: 640px) {
    font-size: 20px;
  }
`;

export const ContactButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  margin-bottom: 48px;
  @media (min-width: 640px) {
    flex-direction: row;
    gap: 24px;
  }
`;

export const ContactCardGrid = styled.div`
  display: grid;
  gap: 24px;
  margin-top: 64px;
  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }
`;

export const ContactCard = styled.div`
  padding: 24px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 16px;
  border: 1px solid #1f2937;
  transition: all 0.5s ease;
  transform: ${({ isVisible }) => (isVisible ? "scale(1)" : "scale(0.95)")};
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  &:hover {
    border-color: #4b5563;
    transform: scale(1.05);
  }
`;

export const ContactIcon = styled.div`
  font-size: 24px;
  margin-bottom: 12px;
  transition: transform 0.3s ease;
  ${ContactCard}:hover & {
    transform: scale(1.1);
  }
`;

export const ContactCardTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const ContactCardInfo = styled.p`
  font-size: 14px;
  color: #9ca3af;
`;

// Footer
export const Footer = styled.footer`
  padding: 64px 16px;
  border-top: 1px solid #1f2937;
  @media (min-width: 640px) {
    padding: 64px 24px;
  }
`;

export const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const FooterLogo = styled.div`
  font-size: 20px;
  font-weight: 600;
  transition: transform 0.3s ease;
  background: linear-gradient(to right, #60a5fa, #a78bfa);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  &:hover {
    transform: scale(1.05);
  }
  @media (min-width: 640px) {
    font-size: 24px;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  gap: 24px;
`;

export const FooterLink = styled.a`
  color: #9ca3af;
  text-decoration: none;
  transition: all 0.3s ease;
  &:hover {
    color: #fff;
    transform: scale(1.1) translateY(-4px);
  }
`;

export const FooterBottom = styled.div`
  margin-top: 32px;
  padding-top: 32px;
  border-top: 1px solid #1f2937;
  text-align: center;
`;

export const FooterText = styled.p`
  color: #9ca3af;
  font-size: 14px;
  transition: color 0.3s ease;
  &:hover {
    color: #fff;
  }
`;

// Scroll to Top Button
export const ScrollTopButton = styled.button`
  position: fixed;
  bottom: 32px;
  right: 32px;
  padding: 12px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  border: 1px solid #374151;
  border-radius: 9999px;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 40;
  transform: ${({ isVisible }) =>
    isVisible ? "translateY(0)" : "translateY(40px)"};
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  &:hover {
    background: #fff;
    color: #000;
    transform: scale(1.1);
  }
  @media (max-width: 768px) {
    bottom: 24px;
    right: 24px;
  }
`;

// Mouse Follower
export const MouseFollower = styled.div`
  position: fixed;
  width: 16px;
  height: 16px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 9999px;
  pointer-events: none;
  z-index: 30;
  transition: all 0.1s ease;
  will-change: transform;
`;

// Popup Styles
export const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

export const PopupContent = styled.div`
  background: #1f2937;
  border-radius: 16px;
  max-width: 800px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  padding: 32px;
  position: relative;
  animation: ${fadeInUp} 0.5s ease-out forwards;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  @media (max-width: 640px) {
    padding: 24px;
    width: 95%;
  }
`;

export const PopupCloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  color: #9ca3af;
  font-size: 24px;
  cursor: pointer;
  transition: color 0.3s ease;
  &:hover {
    color: #fff;
  }
`;

export const PopupTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #fff;
  @media (max-width: 640px) {
    font-size: 24px;
  }
`;

export const PopupImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 24px;
  @media (max-width: 640px) {
    height: 150px;
  }
`;

export const PopupDescription = styled.p`
  font-size: 16px;
  color: #9ca3af;
  line-height: 1.6;
  margin-bottom: 24px;
  @media (max-width: 640px) {
    font-size: 14px;
  }
`;

export const PopupTechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

export const PopupTechTag = styled.span`
  padding: 4px 12px;
  background: #374151;
  color: #fff;
  font-size: 12px;
  border-radius: 9999px;
  @media (max-width: 640px) {
    font-size: 10px;
  }
`;

export const PopupLink = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 12px 24px;
  background: #60a5fa;
  color: #fff;
  border-radius: 9999px;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.3s ease;
  &:hover {
    background: #3b82f6;
    transform: scale(1.05);
  }
  @media (max-width: 640px) {
    font-size: 12px;
    padding: 10px 20px;
  }
`;
