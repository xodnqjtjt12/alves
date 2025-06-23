import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { collection, getDocs, query, where, limit } from "firebase/firestore";
import { db } from "../firebase"; // Adjust path to your Firebase config
import {
  GlobalStyle,
  Container,
  Nav,
  NavContainer,
  Logo,
  NavMenu,
  NavItem,
  MobileMenuButton,
  MobileMenuIcon,
  MobileMenu,
  MobileMenuItem,
  HeroSection,
  HeroBackground,
  Star,
  HeroContent,
  HeroLabel,
  HeroTitle,
  HeroSubtitle,
  HeroButtonGroup,
  PrimaryButton,
  SecondaryButton,
  FloatingElement,
  AboutSection,
  AboutContainer,
  AboutGrid,
  AboutText,
  AboutLabel,
  AboutTitle,
  AboutParagraph,
  AboutTags,
  AboutTag,
  AboutImageContainer,
  AboutImage,
  SkillsSection,
  SkillsContainer,
  SkillsLabel,
  SkillsTitle,
  SkillsGrid,
  SkillCard,
  SkillIcon,
  SkillTitle,
  SkillItem,
  SkillBar,
  ProjectsSection,
  ProjectsContainer,
  ProjectsHeader,
  ProjectsLabel,
  ProjectsTitle,
  ProjectsSubtitle,
  ProjectCard,
  ProjectText,
  ProjectLabel,
  ProjectTitle,
  ProjectDescription,
  TechTags,
  TechTag,
  ProjectButtonGroup,
  ProjectDetailsButton,
  ProjectLinkButton,
  ProjectImageContainer,
  ProjectImage,
  ProjectImageOverlay,
  ProjectImageIcon,
  ContactSection,
  ContactContainer,
  ContactLabel,
  ContactTitle,
  ContactSubtitle,
  ContactButtonGroup,
  ContactCardGrid,
  ContactCard,
  ContactIcon,
  ContactCardTitle,
  ContactCardInfo,
  Footer,
  FooterContainer,
  FooterContent,
  FooterLogo,
  FooterLinks,
  FooterLink,
  FooterBottom,
  FooterText,
  ScrollTopButton,
  MouseFollower,
  LoadingOverlay,
  LoadingBarContainer,
  LoadingBar,
  PopupOverlay,
  PopupContent,
  PopupCloseButton,
  PopupTitle,
  PopupImage,
  PopupDescription,
  PopupTechTags,
  PopupTechTag,
  PopupLink,
} from "../AppCss";

export default function Project() {
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState({});
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const sectionsRef = useRef({});
  const rafRef = useRef(null);

  // Fixed images for projects
  const fixedImages = [
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop",
  ];

  // Debounce function
  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  // Optimized scroll handler
  const handleScroll = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const newScrollY = window.scrollY;
      setScrollY(newScrollY);

      const sections = ["hero", "about", "skills", "work", "contact"];
      const currentSection = sections.find((section) => {
        const element = sectionsRef.current[section];
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    });
  }, []);

  // Optimized mouse move handler
  const handleMouseMove = useCallback(
    debounce((e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }, 16),
    []
  );

  // Scroll and mouse event listeners
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [handleScroll, handleMouseMove]);

  // IntersectionObserver for visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.2, rootMargin: "0px" }
    );

    Object.values(sectionsRef.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Firestore data fetching
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const q = query(
          collection(db, "portfolio"),
          where("channel", "==", "projects"),
          limit(6)
        );
        const querySnapshot = await getDocs(q);
        const projectsData = querySnapshot.docs.map((doc, index) => ({
          id: doc.data().id,
          title: doc.data().content.title,
          description: doc.data().content.description,
          tech: doc.data().content.tech || [],
          details: doc.data().content.details || "",
          link: doc.data().content.link || "",
          likes: doc.data().content.likes || 0,
          image: fixedImages[index % fixedImages.length],
        }));
        setProjects(projectsData);
        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError("프로젝트를 불러오지 못했습니다. 나중에 다시 시도해주세요.");
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Popup handlers
  const openPopup = (project) => {
    setSelectedProject(project);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setTimeout(() => setSelectedProject(null), 300); // 애니메이션 후 초기화
  };

  const setRef = (id) => (el) => {
    sectionsRef.current[id] = el;
  };

  const scrollToSection = (sectionId) => {
    const element = sectionsRef.current[sectionId];
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: "홈", id: "hero" },
    { name: "소개", id: "about" },
    { name: "스킬", id: "skills" },
    { name: "프로젝트", id: "work" },
    { name: "연락처", id: "contact" },
  ];

  // Fallback projects for error state
  const fallbackProjects = useMemo(
    () => [
      {
        id: "fallback-1",
        title: "프로젝트 로드 실패",
        description: "데이터를 불러오지 못했습니다.",
        image: fixedImages[0] || "https://via.placeholder.com/800x600",
        tech: ["N/A"],
        details: "",
        link: "",
        likes: 0,
      },
    ],
    []
  );

  return (
    <Container>
      <GlobalStyle />

      {/* Loading Overlay */}
      <LoadingOverlay isLoading={isLoading}>
        <LoadingBarContainer>
          <LoadingBar />
        </LoadingBarContainer>
      </LoadingOverlay>

      {/* Navigation */}
      <Nav>
        <NavContainer>
          <Logo onClick={() => scrollToSection("hero")}>JUNG TAE WOO</Logo>
          <NavMenu>
            {navItems.map((item) => (
              <NavItem
                key={item.id}
                active={activeSection === item.id}
                onClick={() => scrollToSection(item.id)}
              >
                {item.name}
              </NavItem>
            ))}
          </NavMenu>
          <MobileMenuButton
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <MobileMenuIcon isOpen={isMobileMenuOpen}>
              <div />
              <div />
              <div />
            </MobileMenuIcon>
          </MobileMenuButton>
        </NavContainer>
        <MobileMenu isOpen={isMobileMenuOpen}>
          {navItems.map((item, index) => (
            <MobileMenuItem
              key={item.id}
              active={activeSection === item.id}
              onClick={() => scrollToSection(item.id)}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {item.name}
            </MobileMenuItem>
          ))}
        </MobileMenu>
      </Nav>

      {/* Hero Section */}
      <HeroSection id="hero" ref={setRef("hero")}>
        <HeroBackground>
          <div className="gradient" />
          {[...Array(20)].map((_, i) => (
            <Star
              key={i}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </HeroBackground>
        <HeroContent scrollY={scrollY}>
          <HeroLabel>Welcome to my world</HeroLabel>
          <HeroTitle>
            편리함을 기획하다
            <br />
            <span className="highlight">일상의 혁신을 만듭니다</span>
          </HeroTitle>
          <HeroSubtitle>Better Experience, Better Life</HeroSubtitle>
          <HeroButtonGroup>
            <PrimaryButton onClick={() => scrollToSection("work")}>
              <span>프로젝트 보기</span>
              <span>→</span>
            </PrimaryButton>
            <SecondaryButton onClick={() => scrollToSection("contact")}>
              연락하기
            </SecondaryButton>
          </HeroButtonGroup>
        </HeroContent>
        <div
          style={{
            position: "absolute",
            inset: 0,
            overflow: "hidden",
            pointerEvents: "none",
          }}
        >
          {[...Array(5)].map((_, i) => (
            <FloatingElement
              key={i}
              index={i}
              style={{
                left: `${10 + i * 10}%`,
                top: `${20 + Math.random() * 60}%`,
                width: `${4 + Math.random() * 8}px`,
                height: `${4 + Math.random() * 8}px`,
                transform: `translate(${scrollY * (0.1 + i * 0.02)}px, ${
                  scrollY * (0.2 - i * 0.02)
                }px)`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
        <MouseFollower
          style={{
            left: mousePosition.x - 8,
            top: mousePosition.y - 8,
            transform: `scale(${scrollY > 100 ? 0 : 1})`,
          }}
        />
      </HeroSection>

      {/* About Section */}
      <AboutSection
        id="about"
        ref={setRef("about")}
        isVisible={isVisible.about}
      >
        <AboutContainer>
          <AboutGrid>
            <AboutText>
              <AboutLabel>About Me</AboutLabel>
              <AboutTitle isVisible={isVisible.about}>
                사람들에게 편리함을 주는
              </AboutTitle>
              <AboutParagraph isVisible={isVisible.about} delay={0.2}>
                안녕하세요. 사용자 편의성과 사용성을 최우선으로 생각하는
                기획자입니다. 현대적인 기술과 디자인을 접목해, 누구나 쉽게
                사용할 수 있는 의미 있는 디지털 경험을 만들어갑니다.
              </AboutParagraph>
              <AboutParagraph isVisible={isVisible.about} delay={0.4}>
                새로운 도전을 통해 성장하며, 협업을 통해 더 나은 결과물을
                만들어내는 것을 즐깁니다.
              </AboutParagraph>
              <AboutTags isVisible={isVisible.about}>
                {["창의성", "협업", "성장"].map((trait) => (
                  <AboutTag key={trait}>{trait}</AboutTag>
                ))}
              </AboutTags>
            </AboutText>
            <AboutImageContainer isVisible={isVisible.about}>
              <AboutImage>
                <img
                  src="/vite3.jpg"
                  alt="About Me"
                  style={{
                    width: "120%",
                    height: "120%",
                    objectFit: "cover",
                    borderRadius: "24px",
                  }}
                />
                <div className="overlay" />
              </AboutImage>
            </AboutImageContainer>
          </AboutGrid>
        </AboutContainer>
      </AboutSection>

      {/* Skills Section */}
      <SkillsSection
        id="skills"
        ref={setRef("skills")}
        isVisible={isVisible.skills}
      >
        <SkillsContainer>
          <SkillsLabel>Skills & Expertise</SkillsLabel>
          <SkillsTitle>기술 스택</SkillsTitle>
          <SkillsGrid>
            {[
              {
                title: "Frontend",
                skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
                icon: "🧑‍💻",
                color: "#2563EB, #06B6D4",
              },
              {
                title: "Planning",
                skills: [
                  "Product Roadmap",
                  "User Research",
                  "Feature Prioritization",
                  "Figma",
                  "Notion/Confluence",
                ],
                icon: "🧠",
                color: "#16A34A, #14B8A6",
              },
              {
                title: "Communication",
                skills: [
                  "Team Collaboration",
                  "Documentation",
                  "Jira & teams",
                  "Presentation Skills",
                ],
                icon: "💬",
                color: "#3B82F6, #6366F1",
              },
            ].map((category, index) => (
              <SkillCard
                key={category.title}
                isVisible={isVisible.skills}
                style={{ transitionDelay: `${index * 100 + 300}ms` }}
              >
                <SkillIcon>{category.icon}</SkillIcon>
                <SkillTitle>{category.title}</SkillTitle>
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem
                    key={skill}
                    style={{
                      transitionDelay: `${
                        index * 100 + skillIndex * 50 + 500
                      }ms`,
                    }}
                  >
                    {skill}
                  </SkillItem>
                ))}
                <SkillBar color={category.color} />
              </SkillCard>
            ))}
          </SkillsGrid>
        </SkillsContainer>
      </SkillsSection>

      {/* Projects Section */}
      <ProjectsSection
        id="work"
        ref={setRef("work")}
        isVisible={isVisible.work}
      >
        <ProjectsContainer>
          <ProjectsHeader>
            <ProjectsLabel>Portfolio</ProjectsLabel>
            <ProjectsTitle>사이드 프로젝트</ProjectsTitle>
            <ProjectsSubtitle>
              업무 외 성장을 위한 프로젝트입니다.
            </ProjectsSubtitle>
          </ProjectsHeader>
          {error ? (
            <ProjectText style={{ textAlign: "center", color: "#EC4899" }}>
              {error}
            </ProjectText>
          ) : (
            (projects.length > 0 ? projects : fallbackProjects).map(
              (project, index) => (
                <ProjectCard key={project.id}>
                  <ProjectText
                    className="column-1"
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <ProjectLabel>Project 0{index + 1}</ProjectLabel>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectDescription>
                      {project.description}
                    </ProjectDescription>
                    <TechTags>
                      {project.tech.map((tech, techIndex) => (
                        <TechTag
                          key={tech}
                          style={{
                            transitionDelay: `${
                              index * 200 + techIndex * 100 + 200
                            }ms`,
                          }}
                        >
                          {tech}
                        </TechTag>
                      ))}
                    </TechTags>
                    <ProjectButtonGroup>
                      <ProjectDetailsButton onClick={() => openPopup(project)}>
                        <span>자세히 보기</span>
                        <span>→</span>
                      </ProjectDetailsButton>
                      {project.link && (
                        <ProjectLinkButton
                          as="a"
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit Site
                        </ProjectLinkButton>
                      )}
                    </ProjectButtonGroup>
                  </ProjectText>
                  <ProjectImageContainer
                    className="column-2"
                    style={{ transitionDelay: `${index * 200 + 100}ms` }}
                  >
                    <ProjectImage src={project.image} alt={project.title} />
                    <ProjectImageOverlay />
                    <ProjectImageIcon>
                      <div>👁️</div>
                    </ProjectImageIcon>
                  </ProjectImageContainer>
                </ProjectCard>
              )
            )
          )}
        </ProjectsContainer>
      </ProjectsSection>

      {/* Popup Component */}
      {isPopupOpen && selectedProject && (
        <PopupOverlay isOpen={isPopupOpen} onClick={closePopup}>
          <PopupContent onClick={(e) => e.stopPropagation()}>
            <PopupCloseButton onClick={closePopup}>×</PopupCloseButton>
            <PopupImage
              src={selectedProject.image}
              alt={selectedProject.title}
            />
            <PopupTitle>{selectedProject.title}</PopupTitle>
            <PopupDescription>{selectedProject.description}</PopupDescription>
            <PopupTechTags>
              {selectedProject.tech.map((tech) => (
                <PopupTechTag key={tech}>{tech}</PopupTechTag>
              ))}
            </PopupTechTags>
            {selectedProject.link && (
              <PopupLink
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Site
              </PopupLink>
            )}
            {selectedProject.details && (
              <PopupDescription>{selectedProject.details}</PopupDescription>
            )}
          </PopupContent>
        </PopupOverlay>
      )}

      {/* Contact Section */}
      <ContactSection
        id="contact"
        ref={setRef("contact")}
        isVisible={isVisible.contact}
      >
        <ContactContainer>
          <ContactLabel>Get In Touch</ContactLabel>
          <ContactTitle>함께 만들어봐요</ContactTitle>
          <ContactSubtitle>
            새로운 프로젝트나 협업 기회에 대해 이야기해보세요. 언제나 새로운
            도전을 환영합니다.
          </ContactSubtitle>
          <ContactButtonGroup>
            <PrimaryButton>
              <span>이메일 보내기</span>
              <span>✉️</span>
            </PrimaryButton>
            <SecondaryButton>LinkedIn 연결</SecondaryButton>
          </ContactButtonGroup>
          <ContactCardGrid>
            {[
              { icon: "📧", title: "Email", info: "hello@portfolio.com" },
              { icon: "📱", title: "Phone", info: "+82 10-1234-5678" },
              { icon: "📍", title: "Location", info: "Seoul, South Korea" },
            ].map((contact, index) => (
              <ContactCard
                key={contact.title}
                isVisible={isVisible.contact}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <ContactIcon>{contact.icon}</ContactIcon>
                <ContactCardTitle>{contact.title}</ContactCardTitle>
                <ContactCardInfo>{contact.info}</ContactCardInfo>
              </ContactCard>
            ))}
          </ContactCardGrid>
        </ContactContainer>
      </ContactSection>

      {/* Footer */}
      <Footer>
        <FooterContainer>
          <FooterContent>
            <FooterLogo>Portfolio</FooterLogo>
            <FooterLinks>
              {["GitHub", "LinkedIn", "Instagram", "Twitter"].map(
                (social, index) => (
                  <FooterLink
                    key={social}
                    href="#"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    {social}
                  </FooterLink>
                )
              )}
            </FooterLinks>
          </FooterContent>
          <FooterBottom>
            <FooterText>
              © 2025 All rights reserved. Made with ❤️ in Seoul
            </FooterText>
          </FooterBottom>
        </FooterContainer>
      </Footer>

      {/* Scroll to Top Button */}
      <ScrollTopButton
        isVisible={scrollY > 500}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </ScrollTopButton>

      {/* Mouse Follower */}
      <MouseFollower
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: `scale(${scrollY > 100 ? 0 : 1})`,
        }}
      />
    </Container>
  );
}
