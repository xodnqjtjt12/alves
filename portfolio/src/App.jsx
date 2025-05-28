import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Play, Users, Heart, MessageCircle, Github, Mail, Linkedin, Code, Briefcase, User, Monitor, Sun, Moon, ArrowUp, ArrowLeft, Link, X } from 'lucide-react';
import * as S from './AppCss';

// Project Detail Modal Component
const ProjectDetailModal = ({ project, theme, onClose }) => {
  return (
    <S.ModalOverlay>
      <S.ModalContent theme={theme} isOpen={!!project}>
        <S.ModalCloseButton theme={theme} onClick={onClose}>
          <X size={20} />
        </S.ModalCloseButton>
        <S.ModalBackButton theme={theme} onClick={onClose}>
          <ArrowLeft size={16} />
          뒤로 가기
        </S.ModalBackButton>
        <S.ModalTitle theme={theme}>{project.title}</S.ModalTitle>
        <S.ModalDescription theme={theme}>{project.description}</S.ModalDescription>
        <S.ModalPlayer theme={theme}>
          프로젝트 데모 비디오
        </S.ModalPlayer>
        <S.ModalMeta theme={theme}>
          <S.ModalMetaItem theme={theme}>
            <strong>기술 스택</strong> {project.tech.join(', ')}
          </S.ModalMetaItem>
          <S.ModalMetaItem theme={theme}>
            <strong>카테고리</strong> {project.category}
          </S.ModalMetaItem>
          <S.ModalMetaItem theme={theme}>
            <strong>시청자</strong> {project.viewers.toLocaleString()}
          </S.ModalMetaItem>
          <S.SiteLinkButton href={project.url} target="_blank" rel="noopener noreferrer" theme={theme}>
            <Link size={16} />
            사이트 보기
          </S.SiteLinkButton>
        </S.ModalMeta>
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

// TwitchPortfolio Component
const TwitchPortfolio = ({ theme, toggleTheme, projects }) => {
  const [isLive, setIsLive] = useState(true);
  const [viewers, setViewers] = useState(1337);
  const [activeTab, setActiveTab] = useState('about');
  const [chatMessages, setChatMessages] = useState([
    { user: 'DevFan123', message: '코딩 실력 미쳤다! 🔥', timestamp: '2분 전' },
    { user: 'TechLover', message: '이 프로젝트 어떻게 만든거야?', timestamp: '1분 전' },
    { user: 'CodeMaster', message: '깃허브 링크 좀 주세요!', timestamp: '방금' }
  ]);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setViewers(prev => prev + Math.floor(Math.random() * 10) - 5);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const TabButton = ({ id, label, icon: Icon }) => (
    <S.TabButtonStyled active={activeTab === id} onClick={() => setActiveTab(id)} data-active={activeTab === id} theme={theme}>
      <Icon size={16} />
      <span>{label}</span>
    </S.TabButtonStyled>
  );

  return (
    <S.AppContainer theme={theme}>
      {/* Header */}
      <S.Header theme={theme}>
        <S.HeaderContent theme={theme}>
          <S.ProfileSection theme={theme}>
            <S.Avatar theme={theme}>Dev</S.Avatar>
            <div>
              <h1 style={{ fontSize: '1rem', fontWeight: 'bold' }}>개발자 포트폴리오</h1>
              <S.StatusContainer theme={theme}>
                {isLive && <S.LiveIndicator theme={theme} />}
                <span>{isLive ? 'LIVE' : 'OFFLINE'}</span>
                <span>•</span>
                <span>{viewers.toLocaleString()} 시청자</span>
              </S.StatusContainer>
            </div>
          </S.ProfileSection>
          
          <S.ActionButtons theme={theme}>
            <S.FollowButton theme={theme}>
              <Heart size={16} style={{ display: 'inline', marginRight: '0.25rem' }} />
              <span style={{ display: 'none' }} className="sm:inline">팔로우</span>
            </S.FollowButton>
            <S.ThemeToggleButton theme={theme} onClick={toggleTheme}>
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </S.ThemeToggleButton>
            <div style={{ display: 'flex', gap: '0.25rem' }}>
              <S.SocialLink href="#" theme={theme}><Github size={16} /></S.SocialLink>
              <S.SocialLink href="#" theme={theme}><Linkedin size={16} /></S.SocialLink>
              <S.SocialLink href="#" theme={theme}><Mail size={16} /></S.SocialLink>
            </div>
          </S.ActionButtons>
        </S.HeaderContent>
      </S.Header>

      <S.MainContent theme={theme}>
        {/* Main Content */}
        <S.ContentSection theme={theme}>
          {/* Stream Preview */}
          <S.StreamPreview theme={theme}>
            <S.StreamOverlay theme={theme}>
              <S.StreamContent theme={theme}>
                <S.StyledIcon theme={theme}>
                  <Monitor size={32} />
                </S.StyledIcon>
                <S.StreamTitle theme={theme}>코딩 라이브 스트림</S.StreamTitle>
                <S.StreamText theme={theme}>실시간으로 개발하는 모습을 시청하세요!</S.StreamText>
                <S.WatchButton theme={theme}>
                  <Play size={16} />
                  시청
                </S.WatchButton>
              </S.StreamContent>
            </S.StreamOverlay>
          </S.StreamPreview>

          {/* Tabs */}
          <S.TabsContainer theme={theme}>
            <TabButton id="about" label="소개" icon={User} />
            <TabButton id="projects" label="프로젝트" icon={Code} />
            <TabButton id="experience" label="경력" icon={Briefcase} />
          </S.TabsContainer>

          {/* Tab Content */}
          <S.TabContent theme={theme}>
            {activeTab === 'about' && (
              <div>
                <S.SectionTitle theme={theme}>개발자 소개</S.SectionTitle>
                <S.AboutContent theme={theme}>
                  <S.AboutText theme={theme}>
                    안녕하세요! 풀스택 개발자입니다. 새로운 기술을 배우고 혁신적인 프로젝트를 만드는 것을 좋아합니다. 
                    주로 React, Node.js, Python을 사용하며, 클린 코드와 사용자 경험을 중시합니다.
                  </S.AboutText>
                  <S.StatsGrid theme={theme}>
                    <S.StatCard theme={theme}>
                      <S.StatValue theme={theme}>3+</S.StatValue>
                      <S.StatLabel theme={theme}>년 경험</S.StatLabel>
                    </S.StatCard>
                    <S.StatCard theme={theme}>
                      <S.StatValue theme={theme}>15+</S.StatValue>
                      <S.StatLabel theme={theme}>프로젝트</S.StatLabel>
                    </S.StatCard>
                    <S.StatCard theme={theme}>
                      <S.StatValue theme={theme}>8</S.StatValue>
                      <S.StatLabel theme={theme}>기술 스택</S.StatLabel>
                    </S.StatCard>
                    <S.StatCard theme={theme}>
                      <S.StatValue theme={theme}>100%</S.StatValue>
                      <S.StatLabel theme={theme}>열정</S.StatLabel>
                    </S.StatCard>
                  </S.StatsGrid>
                </S.AboutContent>
              </div>
            )}
            {activeTab === 'projects' && (
              <div>
                <S.SectionTitle theme={theme}>프로젝트 갤러리</S.SectionTitle>
                <S.ProjectsGrid theme={theme}>
                  {projects.map((project) => (
                    <S.ProjectCard key={project.id} theme={theme} onClick={() => setSelectedProject(project.id)}>
                      <S.ProjectHeader theme={theme}>
                        <div>
                          <S.ProjectTitle theme={theme}>{project.title}</S.ProjectTitle>
                          <S.ProjectDescription theme={theme}>
                            {project.description}
                          </S.ProjectDescription>
                        </div>
                        <S.ViewerCount theme={theme}>
                          <Users size={14} />
                          {project.viewers.toLocaleString()}
                        </S.ViewerCount>
                      </S.ProjectHeader>
                      <S.TechTags theme={theme}>
                        {project.tech.map((tech, index) => (
                          <S.TechTag key={index} theme={theme}>{tech}</S.TechTag>
                        ))}
                      </S.TechTags>
                      <S.ProjectFooter theme={theme}>
                        <S.CategoryTag theme={theme}>{project.category}</S.CategoryTag>
                        <S.SiteLinkButton href={project.url} target="_blank" rel="noopener noreferrer" theme={theme} onClick={e => e.stopPropagation()}>
                          <Link size={16} />
                          사이트 보기
                        </S.SiteLinkButton>
                      </S.ProjectFooter>
                    </S.ProjectCard>
                  ))}
                </S.ProjectsGrid>
              </div>
            )}
            {activeTab === 'experience' && (
              <div>
                <S.SectionTitle theme={theme}>경력 사항</S.SectionTitle>
                <S.ExperienceContainer theme={theme}>
                  <S.ExperienceItem highlight theme={theme}>
                    <S.ExperienceTitle theme={theme}>시니어 풀스택 개발자</S.ExperienceTitle>
                    <S.ExperienceCompany highlight theme={theme}>테크 스타트업 • 2022 - 현재</S.ExperienceCompany>
                    <S.ExperienceDescription theme={theme}>
                      React, Node.js를 활용한 웹 애플리케이션 개발 및 팀 리딩
                    </S.ExperienceDescription>
                  </S.ExperienceItem>
                  <S.ExperienceItem theme={theme}>
                    <S.ExperienceTitle theme={theme}>주니어 개발자</S.ExperienceTitle>
                    <S.ExperienceCompany theme={theme}>IT 서비스 회사 • 2021 - 2022</S.ExperienceCompany>
                    <S.ExperienceDescription theme={theme}>
                      프론트엔드 개발 및 사용자 인터페이스 개선
                    </S.ExperienceDescription>
                  </S.ExperienceItem>
                </S.ExperienceContainer>
              </div>
            )}
          </S.TabContent>
        </S.ContentSection>

        {/* Chat Sidebar */}
        <S.ChatContainer theme={theme}>
          <S.ChatHeader theme={theme}>
            <S.ChatTitle theme={theme}>스트림 채팅</S.ChatTitle>
            <S.ChatMessageCount theme={theme}>{chatMessages.length}개의 메시지</S.ChatMessageCount>
          </S.ChatHeader>
          <S.ChatMessages theme={theme}>
            {chatMessages.map((msg, index) => (
              <S.ChatMessage key={index} theme={theme}>
                <S.MessageHeader theme={theme}>
                  <S.MessageUser theme={theme}>{msg.user}</S.MessageUser>
                  <S.MessageTimestamp theme={theme}>{msg.timestamp}</S.MessageTimestamp>
                </S.MessageHeader>
                <S.MessageText theme={theme}>{msg.message}</S.MessageText>
              </S.ChatMessage>
            ))}
          </S.ChatMessages>
          
          <S.ChatInputContainer theme={theme}>
            <S.ChatInputWrapper theme={theme}>
              <S.ChatInput type="text" placeholder="메시지를 입력하세요..." theme={theme} />
              <S.SendButton theme={theme}>
                <MessageCircle size={16} />
              </S.SendButton>
            </S.ChatInputWrapper>
          </S.ChatInputContainer>
        </S.ChatContainer>
      </S.MainContent>

      <S.ScrollToTopButton theme={theme} visible={showScrollTop} onClick={handleScrollToTop}>
        <ArrowUp size={20} />
      </S.ScrollToTopButton>

      {selectedProject && (
        <ProjectDetailModal 
          project={projects.find(p => p.id === selectedProject)} 
          theme={theme} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </S.AppContainer>
  );
};

// App Component
const App = () => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const projects = [
    {
      id: '1',
      title: 'E-Commerce 플랫폼',
      description: 'React, Node.js, MongoDB를 사용한 풀스택 쇼핑몰',
      tech: ['React', 'Node.js', 'MongoDB'],
      viewers: 2543,
      category: '웹개발',
      url: 'https://example.com/ecommerce'
    },
    {
      id: '2',
      title: 'AI 챗봇 서비스',
      description: 'Python, TensorFlow를 활용한 자연어 처리 챗봇',
      tech: ['Python', 'TensorFlow', 'Flask'],
      viewers: 1876,
      category: 'AI/ML',
      url: 'https://example.com/chatbot'
    },
    {
      id: '3',
      title: '모바일 게임 앱',
      description: 'React Native로 개발한 퍼즐 게임',
      tech: ['React Native', 'JavaScript'],
      viewers: 3241,
      category: '모바일',
      url: 'https://example.com/game'
    }
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<TwitchPortfolio theme={theme} toggleTheme={toggleTheme} projects={projects} />} />
      </Routes>
    </Router>
  );
};

export default App;