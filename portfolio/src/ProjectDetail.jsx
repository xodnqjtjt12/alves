import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container, Section, SectionTitle, Divider, ProjectDetailContainer, DetailSection,
  DetailTitle, DetailContent, BackButton
} from './AppCss';
import { ArrowLeft } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const projects = [
    {
      id: 'fintech-app',
      title: '핀테크 앱 사용자 경험 개선',
      period: '2024.01 - 2024.03',
      description: '사용자 이탈률 30% 감소, MAU 25% 증가를 목표로 UX 개선 프로젝트를 진행했습니다.',
      tags: ['UX리서치', '데이터분석', '프로토타이핑'],
      impact: '월 활성 사용자 150만 증가',
      details: {
        overview: '핀테크 앱의 사용자 경험을 개선하여 이탈률을 줄이고 월 활성 사용자를 증가시켰습니다.',
        challenges: '복잡한 사용자 흐름과 낮은 접근성 문제를 해결해야 했습니다.',
        solutions: '사용자 인터뷰와 A/B 테스트를 통해 주요 pain point를 개선했습니다.',
        results: '이탈률 30% 감소, MAU 25% 증가, 사용자 만족도 40% 향상',
      },
    },
    {
      id: 'ai-chatbot',
      title: 'AI 챗봇 서비스 기획',
      period: '2023.08 - 2023.12',
      description: '고객 문의 응답시간 80% 단축을 목표로 AI 챗봇 서비스를 기획했습니다.',
      tags: ['AI/ML', '서비스기획', '데이터분석'],
      impact: 'CS 비용 연간 5억원 절감',
      details: {
        overview: 'AI 기반 챗봇을 도입하여 고객 지원 효율성을 높였습니다.',
        challenges: '다양한 사용자 문의에 대한 정확한 응답 제공이 필요했습니다.',
        solutions: 'NLP 모델 최적화와 사용자 피드백을 통해 챗봇 성능을 개선했습니다.',
        results: '응답시간 80% 단축, CS 비용 5억원 절감, 고객 만족도 35% 증가',
      },
    },
    {
      id: 'loan-platform',
      title: '소상공인 대출 플랫폼',
      period: '2023.03 - 2023.07',
      description: '대출 승인률 45% 향상을 목표로 소상공인 대출 플랫폼을 개발했습니다.',
      tags: ['금융서비스', 'B2B', '프로세스개선'],
      impact: '대출 실행액 월 100억원 달성',
      details: {
        overview: '소상공인을 위한 빠르고 간편한 대출 플랫폼을 구축했습니다.',
        challenges: '복잡한 심사 과정과 느린 처리 속도를 개선해야 했습니다.',
        solutions: '자동화된 심사 시스템과 사용자 친화적 UI를 도입했습니다.',
        results: '승인률 45% 향상, 월 대출 실행액 100억원, 처리 시간 50% 단축',
      },
    },
  ];

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <div>프로젝트를 찾을 수 없습니다.</div>;
  }

  return (
    <Section>
      <Container>
        <BackButton onClick={() => navigate('/')}>
          <ArrowLeft size={20} /> 뒤로
        </BackButton>
        <SectionTitle>{project.title}</SectionTitle>
        <Divider />
        <ProjectDetailContainer>
          <DetailSection>
            <DetailTitle>개요</DetailTitle>
            <DetailContent>{project.details.overview}</DetailContent>
          </DetailSection>
          <DetailSection>
            <DetailTitle>도전 과제</DetailTitle>
            <DetailContent>{project.details.challenges}</DetailContent>
          </DetailSection>
          <DetailSection>
            <DetailTitle>솔루션</DetailTitle>
            <DetailContent>{project.details.solutions}</DetailContent>
          </DetailSection>
          <DetailSection>
            <DetailTitle>성과</DetailTitle>
            <DetailContent>{project.details.results}</DetailContent>
          </DetailSection>
          <DetailSection>
            <DetailTitle>기술 스택</DetailTitle>
            <DetailContent>
              {project.tags.join(', ')}
            </DetailContent>
          </DetailSection>
          <DetailSection>
            <DetailTitle>기간</DetailTitle>
            <DetailContent>{project.period}</DetailContent>
          </DetailSection>
          <DetailSection>
            <DetailTitle>주요 성과</DetailTitle>
            <DetailContent>{project.impact}</DetailContent>
          </DetailSection>
        </ProjectDetailContainer>
      </Container>
    </Section>
  );
};

export default ProjectDetail;