import styled from 'styled-components';

// 테마별 색상 정의
const themes = {
  dark: {
    background: '#111827', // gray-900
    secondaryBackground: '#1f2937', // gray-800
    border: '#374151', // gray-700
    text: '#ffffff',
    secondaryText: '#d1d5db', // gray-300
    tertiaryText: '#9ca3af', // gray-400
    accent: '#9333ea', // purple-600
    accentHover: '#7e22ce', // purple-700
    highlight: '#ef4444', // red-500
    muted: '#6b7280', // gray-500
  },
  light: {
    background: '#f3f4f6', // gray-100
    secondaryBackground: '#e5e7eb', // gray-200
    border: '#d1d5db', // gray-300
    text: '#1f2937', // gray-800
    secondaryText: '#4b5563', // gray-600
    tertiaryText: '#6b7280', // gray-500
    accent: '#7c3aed', // purple-500
    accentHover: '#6d28d9', // purple-600
    highlight: '#dc2626', // red-600
    muted: '#9ca3af', // gray-400
  }
};

export const AppContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => themes[props.theme].background};
  color: ${props => themes[props.theme].text};
  width: 100%;
  max-width: none;
`;

export const Header = styled.header`
  background-color: ${props => themes[props.theme].secondaryBackground};
  border-bottom: 1px solid ${props => themes[props.theme].border};
  padding: 0.75rem 1rem;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: none;
  margin: 0 auto;
  padding: 0 0.5rem;

  @media (min-width: 1024px) {
    padding: 0 1rem;
  }
`;

export const ThemeToggleButton = styled.button`
  position: relative;
  background-color: ${props => themes[props.theme].secondaryBackground};
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  &:hover {
    background-color: ${props => themes[props.theme].border};
  }

  &::before {
    content: '';
    position: absolute;
    top: -1.25rem;
    left: 50%;
    transform: translateX(-50%);
    width: 1rem;
    height: 1rem;
    background: url(${props => props.theme === 'dark' ? 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%23ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Ccircle cx="12" cy="12" r="5"/%3E%3Cline x1="12" y1="1" x2="12" y2="3"/%3E%3Cline x1="12" y1="21" x2="12" y2="23"/%3E%3Cline x1="4.22" y1="4.22" x2="5.64" y2="5.64"/%3E%3Cline x1="18.36" y1="18.36" x2="19.78" y2="19.78"/%3E%3Cline x1="1" y1="12" x2="3" y2="12"/%3E%3Cline x1="21" y1="12" x2="23" y2="12"/%3E%3Cline x1="4.22" y1="19.78" x2="5.64" y2="18.36"/%3E%3Cline x1="18.36" y1="5.64" x2="19.78" y2="4.22"/%3E%3C/svg%3E' : 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%231f2937" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/%3E%3C/svg%3E'}) no-repeat center;
    background-size: contain;
  }

  @media (min-width: 640px) {
    padding: 0.5rem;
  }
`;

export const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const Avatar = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: ${props => themes[props.theme].accent};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.875rem;

  @media (min-width: 640px) {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1rem;
  }
`;

export const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  color: ${props => themes[props.theme].tertiaryText};

  @media (min-width: 640px) {
    font-size: 0.875rem;
  }
`;

export const LiveIndicator = styled.div`
  width: 0.4rem;
  height: 0.4rem;
  background-color: ${props => themes[props.theme].highlight};
  border-radius: 50%;
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% { opacity: 1; }
    50% { opacity: 0.4; }
    100% { opacity: 1; }
  }

  @media (min-width: 640px) {
    width: 0.5rem;
    height: 0.5rem;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const FollowButton = styled.button`
  background-color: ${props => themes[props.theme].accent};
  padding: 0.25rem 0.75rem;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${props => themes[props.theme].accentHover};
  }

  @media (min-width: 640px) {
    padding: 0.5rem 1rem;
    span { display: inline; }
  }
`;

export const SocialLink = styled.a`
  padding: 0.25rem;
  background-color: ${props => themes[props.theme].border};
  border-radius: 0.375rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${props => themes[props.theme].muted};
  }

  @media (min-width: 640px) {
    padding: 0.5rem;
  }
`;

export const MainContent = styled.div`
  width: 100%;
  max-width: none;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0.75rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    padding: 1rem 0;
    gap: 1rem;
  }
`;

export const ContentSection = styled.div`
  flex: 1;
  width: 100%;
`;

export const StreamPreview = styled.div`
  background-color: ${props => props.theme === 'dark' ? '#000000' : '#1f2937'};
  border-radius: 0.5rem;
  overflow: hidden;
  margin-bottom: 0.75rem;
  aspect-ratio: 16 / 9;
  position: relative;

  @media (min-width: 640px) {
    margin-bottom: 1rem;
  }
`;

export const StreamOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom right, ${props => props.theme === 'dark' ? 'rgba(147, 51, 234, 0.2), rgba(59, 130, 246, 0.2)' : 'rgba(124, 58, 237, 0.2), rgba(37, 99, 235, 0.2)'});
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StreamContent = styled.div`
  text-align: center;
  padding: 0.5rem;

  @media (min-width: 640px) {
    padding: 1rem;
  }
`;

export const StreamTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.25rem;
  color: ${props => themes[props.theme].text};

  @media (min-width: 640px) {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
`;

export const StreamText = styled.p`
  color: ${props => themes[props.theme].tertiaryText};
  font-size: 0.875rem;

  @media (min-width: 640px) {
    font-size: 1rem;
  }
`;

export const StyledIcon = styled.div`
  margin: 0 auto 0.5rem;
  color: ${props => themes[props.theme].accent};

  @media (min-width: 640px) {
    margin-bottom: 1rem;
  }
`;

export const WatchButton = styled.button`
  margin-top: 0.5rem;
  background-color: ${props => themes[props.theme].accent};
  padding: 0.25rem 1rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-left: auto;
  margin-right: auto;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${props => themes[props.theme].accentHover};
  }

  @media (min-width: 640px) {
    margin-top: 1rem;
    padding: 0.5rem 1.5rem;
  }
`;

export const TabsContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-bottom: 0.75rem;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  @media (min-width: 640px) {
    margin-bottom: 1rem;
  }
`;

export const TabButtonStyled = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.75rem;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  transition: all 0.3s;
  background-color: ${props => props.active ? themes[props.theme].accent : themes[props.theme].secondaryBackground};
  color: ${props => props.active ? themes[props.theme].text : themes[props.theme].secondaryText};
  font-size: 0.875rem;

  &:hover:not([data-active=true]) {
    background-color: ${props => themes[props.theme].muted};
  }

  span {
    @media (max-width: 640px) {
      display: none;
    }
  }

  @media (min-width: 640px) {
    padding: 0.5rem 1rem;
  }
`;

export const TabContent = styled.div`
  background-color: ${props => themes[props.theme].secondaryBackground};
  border-radius: 0.5rem;
  padding: 1rem;

  @media (min-width: 640px) {
    padding: 1.5rem;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.75rem;
  color: ${props => themes[props.theme].accent};

  @media (min-width: 640px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (min-width: 640px) {
    gap: 1rem;
  }
`;

export const AboutText = styled.p`
  color: ${props => themes[props.theme].secondaryText};
  line-height: 1.625;
  font-size: 0.875rem;

  @media (min-width: 640px) {
    font-size: 1rem;
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }
`;

export const StatCard = styled.div`
  background-color: ${props => themes[props.theme].border};
  padding: 0.5rem;
  border-radius: 0.375rem;
  text-align: center;

  @media (min-width: 640px) {
    padding: 0.75rem;
  }
`;

export const StatValue = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  color: ${props => themes[props.theme].accent};

  @media (min-width: 640px) {
    font-size: 1.5rem;
  }
`;

export const StatLabel = styled.div`
  font-size: 0.75rem;
  color: ${props => themes[props.theme].tertiaryText};

  @media (min-width: 640px) {
    font-size: 0.875rem;
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  gap: 0.75rem;

  @media (min-width: 640px) {
    gap: 1rem;
  }
`;

export const ProjectCard = styled.div`
  background-color: ${props => themes[props.theme].border};
  border-radius: 0.5rem;
  padding: 0.75rem;
  transition: background-color 0.3s;
  cursor: pointer;

  &:hover {
    background-color: ${props => themes[props.theme].muted};
  }

  @media (min-width: 640px) {
    padding: 1rem;
  }
`;

export const ProjectHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  @media (min-width: 640px) {
    margin-bottom: 0.75rem;
  }
`;

export const ProjectTitle = styled.h4`
  font-weight: bold;
  font-size: 1rem;

  @media (min-width: 640px) {
    font-size: 1.125rem;
  }
`;

export const ProjectDescription = styled.p`
  color: ${props => themes[props.theme].tertiaryText};
  font-size: 0.75rem;

  @media (min-width: 640px) {
    font-size: 0.875rem;
  }
`;

export const ViewerCount = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${props => themes[props.theme].highlight};
  font-size: 0.75rem;

  @media (min-width: 640px) {
    font-size: 0.875rem;
  }
`;

export const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  margin-bottom: 0.5rem;

  @media (min-width: 640px) {
    gap: 0.5rem;
    margin-bottom: 0.75rem;
  }
`;

export const TechTag = styled.span`
  background-color: ${props => themes[props.theme].accent};
  padding: 0.125rem 0.25rem;
  border-radius: 0.25rem;
  font-size: 0.625rem;

  @media (min-width: 640px) {
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
  }
`;

export const ProjectFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: ${props => themes[props.theme].tertiaryText};

  @media (min-width: 640px) {
    gap: 0.75rem;
    font-size: 0.875rem;
  }
`;

export const CategoryTag = styled.span`
  background-color: ${props => themes[props.theme].muted};
  padding: 0.125rem 0.25rem;
  border-radius: 0.25rem;

  @media (min-width: 640px) {
    padding: 0.25rem 0.5rem;
  }
`;

export const SiteLinkButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  background-color: ${props => themes[props.theme].accent};
  color: ${props => themes[props.theme].text};
  transition: background-color 0.3s;
  text-decoration: none;

  &:hover {
    background-color: ${props => themes[props.theme].accentHover};
  }

  @media (min-width: 640px) {
    padding: 0.5rem 0.75rem;
  }
`;

export const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 640px) {
    gap: 1.5rem;
  }
`;

export const ExperienceItem = styled.div`
  border-left: 4px solid ${props => props.highlight ? themes[props.theme].accent : themes[props.theme].muted};
  padding-left: 0.75rem;

  @media (min-width: 640px) {
    padding-left: 1rem;
  }
`;

export const ExperienceTitle = styled.h4`
  font-weight: bold;
  font-size: 1rem;

  @media (min-width: 640px) {
    font-size: 1.125rem;
  }
`;

export const ExperienceCompany = styled.p`
  color: ${props => props.highlight ? themes[props.theme].accent : themes[props.theme].tertiaryText};
  font-size: 0.875rem;

  @media (min-width: 640px) {
    font-size: 1rem;
  }
`;

export const ExperienceDescription = styled.p`
  color: ${props => themes[props.theme].tertiaryText};
  margin-top: 0.25rem;
  font-size: 0.875rem;

  @media (min-width: 640px) {
    margin-top: 0.5rem;
    font-size: 1rem;
  }
`;

export const ChatContainer = styled.div`
  width: 100%;
  background-color: ${props => themes[props.theme].secondaryBackground};
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  min-height: 20rem;

  @media (min-width: 1024px) {
    width: 20rem;
    min-height: 0;
    height: auto;
  }
`;

export const ChatHeader = styled.div`
  padding: 0.75rem;
  border-bottom: 1px solid ${props => themes[props.theme].border};

  @media (min-width: 640px) {
    padding: 1rem;
  }
`;

export const ChatTitle = styled.h3`
  font-weight: bold;
  font-size: 1rem;

  @media (min-width: 640px) {
    font-size: 1.125rem;
  }
`;

export const ChatMessageCount = styled.p`
  font-size: 0.75rem;
  color: ${props => themes[props.theme].tertiaryText};

  @media (min-width: 640px) {
    font-size: 0.875rem;
  }
`;

export const ChatMessages = styled.div`
  flex: 1;
  padding: 0.75rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (min-width: 640px) {
    padding: 1rem;
    gap: 0.75rem;
  }
`;

export const ChatMessage = styled.div`
  font-size: 0.75rem;

  @media (min-width: 640px) {
    font-size: 0.875rem;
  }
`;

export const MessageHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-bottom: 0.25rem;
`;

export const MessageUser = styled.span`
  font-weight: bold;
  color: ${props => themes[props.theme].accent};
`;

export const MessageTimestamp = styled.span`
  font-size: 0.625rem;
  color: ${props => themes[props.theme].muted};

  @media (min-width: 640px) {
    font-size: 0.75rem;
  }
`;

export const MessageText = styled.p`
  color: ${props => themes[props.theme].secondaryText};
`;

export const ChatInputContainer = styled.div`
  padding: 0.75rem;
  border-top: 1px solid ${props => themes[props.theme].border};

  @media (min-width: 640px) {
    padding: 1rem;
  }
`;

export const ChatInputWrapper = styled.div`
  display: flex;
  gap: 0.25rem;

  @media (min-width: 640px) {
    gap: 0.5rem;
  }
`;

export const ChatInput = styled.input`
  flex: 1;
  background-color: ${props => themes[props.theme].border};
  border-radius: 0.375rem;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  color: ${props => themes[props.theme].text};
  border: none;
  outline: none;

  &:focus {
    box-shadow: 0 0 0 2px ${props => themes[props.theme].accent};
  }

  @media (min-width: 640px) {
    padding: 0.5rem 0.75rem;
    font-size: 0.875rem;
  }
`;

export const SendButton = styled.button`
  background-color: ${props => themes[props.theme].accent};
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${props => themes[props.theme].accentHover};
  }

  @media (min-width: 640px) {
    padding: 0.5rem 0.75rem;
  }
`;

export const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  background-color: ${props => themes[props.theme].accent};
  padding: 0.5rem;
  border-radius: 50%;
  display: ${props => props.visible ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s, opacity 0.3s;
  opacity: ${props => props.visible ? 1 : 0};

  &:hover {
    background-color: ${props => themes[props.theme].accentHover};
  }

  @media (min-width: 640px) {
    padding: 0.75rem;
  }
`;

// Project Detail Page Styles
export const ProjectDetailContainer = styled.div`
  width: 100%;
  max-width: none;
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    padding: 1rem 0;
    gap: 1rem;
  }
`;

export const ProjectDetailMain = styled.div`
  flex: 1;
`;

export const ProjectDetailTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => themes[props.theme].text};
  margin-bottom: 0.5rem;

  @media (min-width: 640px) {
    font-size: 2rem;
    margin-bottom: 0.75rem;
  }
`;

export const ProjectDetailDescription = styled.p`
  color: ${props => themes[props.theme].secondaryText};
  font-size: 0.875rem;
  margin-bottom: 0.75rem;

  @media (min-width: 640px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;

export const ProjectDetailPlayer = styled.div`
  background-color: ${props => props.theme === 'dark' ? '#000000' : '#1f2937'};
  border-radius: 0.5rem;
  overflow: hidden;
  aspect-ratio: 16 / 9;
  margin-bottom: 0.75rem;
  position: flex;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;

  color: ${props => themes[props.theme].tertiaryText};

  @media (min-width: 640px) {
    margin-bottom: 1rem;
  }
`;

export const ProjectDetailInfo = styled.div`
  background-color: ${props => themes[props.theme].secondaryBackground};
  border-radius: 0.5rem;
  padding: 1rem;

  @media (min-width: 640px) {
    padding: 1.5rem;
  }
`;

export const ProjectDetailMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  @media (min-width: 640px) {
    gap: 0.75rem;
  }
`;

export const ProjectDetailMetaItem = styled.div`
  font-size: 0.875rem;
  color: ${props => themes[props.theme].secondaryText};

  @media (min-width: 640px) {
    font-size: 1rem;
  }

  & strong {
    color: ${props => themes[props.theme].accent};
    margin-right: 0.5rem;
  }
`;

export const BackButton = styled.button`
  background-color: ${props => themes[props.theme].accent};
  padding: ${props => props.padding || '0.5rem 1rem'};
  border-radius: 0.375rem;
  display: inline-block;
  align-items: center;
  gap: 0.25rem;
  color: ${props => themes[props.theme].text};
  margin-bottom: 0.75rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${props => themes[props.theme].accentHover};
  }

  @media (min-width: 640px) {
    padding: 0.75rem 1.5rem;
  }
`;

export const RecommendedProjects = styled.div`
  width: 100%;
  background-color: ${props => themes[props.theme].secondaryBackground};
  border-radius: 0.5rem;
  padding: 0.75rem;

  @media (min-width: 768px) {
    width: 20rem;
  }
`;

export const RecommendedTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  color: ${props => themes[props.theme].accent};
  margin-bottom: 0.75rem;

  @media (min-width: 640px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

export const RecommendedItem = styled.div`
  display: flex;
  gap: 0.0.5rem;
  margin-bottom: 0.0rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.375rem;

  &:hover {
    background-color: ${props => themes[props.theme].muted};
  }

  @media (min-width: 640px) {
    gap: 0.75rem;
    margin-bottom: 0.75rem;
    padding: 0.75rem;
  }
`;

export const RecommendedThumbnail = styled.div`
  width: 6rem;
  aspect-ratio: 16 / 9;
  background-color: ${props => themes[props.theme].border};
  border-radius: 0.375rem;
`;

export const RecommendedInfo = styled.div`
  flex: 1;
`;

export const RecommendedItemTitle = styled.h4`
  font-size: 0.875rem;
  font-weight: bold;
  color: ${props => themes[props.theme].text};

  @media (min-width: 640px) {
    font-size: 1rem;
  }
`;

export const RecommendedItemCategory = styled.div`
  font-size: 0.75rem;
  color: ${props => themes[props].tertiaryText};

  @media (min-width: 640px) {
    font-size: 0.875rem;
  }
`;

export const ProjectDetailButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  background-color: ${props => themes[props.theme].accent};
  color: ${props => themes[props.theme].text};
  transition: background-color 0.3s;
  text-decoration: none;

  &:hover {
    background-color: ${props => themes[props.theme].accentHover};
  }

  @media (min-width: 640px) {
    padding: 0.5rem 0.75rem;
  }
`;