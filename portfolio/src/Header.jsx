import React, { useState } from 'react';
import { Header, NavContainer, Logo, NavList, NavItem, NavLink, HamburgerButton, MobileMenu, MobileNavLink } from './AppCss';
import { Menu, X } from 'lucide-react';

const HeaderComponent = ({ activeSection, scrollToSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = [
    { id: 'home', label: '홈' },
    { id: 'about', label: '사이드 프로젝트' },
    { id: 'projects', label: '프로젝트' },
    { id: 'skills', label: '스킬' },
    { id: 'contact', label: '연락' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Header>
      <NavContainer>
        <Logo onClick={() => scrollToSection('home')}>정태우</Logo>
        <HamburgerButton onClick={toggleMobileMenu} aria-label={isMobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </HamburgerButton>
        <NavList>
          {sections.map((section) => (
            <NavItem key={section.id}>
              <NavLink
                $active={activeSection === section.id}
                onClick={() => scrollToSection(section.id)}
              >
                {section.label}
              </NavLink>
            </NavItem>
          ))}
        </NavList>
      </NavContainer>
      <MobileMenu $isOpen={isMobileMenuOpen}>
        {sections.map((section) => (
          <MobileNavLink
            key={section.id}
            $active={activeSection === section.id}
            onClick={() => {
              scrollToSection(section.id);
              setIsMobileMenuOpen(false);
            }}
          >
            {section.label}
          </MobileNavLink>
        ))}
      </MobileMenu>
    </Header>
  );
};

export default HeaderComponent;