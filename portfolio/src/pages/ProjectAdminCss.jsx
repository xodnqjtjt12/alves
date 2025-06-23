import styled, { keyframes } from "styled-components";

// 애니메이션 정의
export const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Container = styled.div`
  padding: 32px;
  max-width: 1200px;
  margin: 0 auto;
  background: #121417;
  min-height: 100vh;
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 40px;
  color: #fff;
  animation: ${fadeInUp} 0.5s ease-out;
  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 24px;
  }
`;

export const Subtitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 24px;
  color: #fff;
  animation: ${fadeInUp} 0.5s ease-out 0.2s;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const ErrorMessage = styled.p`
  color: #f04438;
  font-size: 14px;
  margin-bottom: 16px;
  animation: ${fadeInUp} 0.5s ease-out;
`;

export const Form = styled.form`
  background: #1a1d21;
  padding: 24px;
  border-radius: 12px;
  margin-bottom: 40px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  animation: ${fadeInUp} 0.5s ease-out 0.3s;
  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #d1d5db;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  background: #2a2e34;
  border: 1px solid #3f444c;
  border-radius: 8px;
  color: #fff;
  font-size: 16px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  &:focus {
    outline: none;
    border-color: #3182f6;
    box-shadow: 0 0 0 3px rgba(49, 130, 246, 0.2);
  }
  &::placeholder {
    color: #6b7280;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 12px;
  background: #2a2e34;
  border: 1px solid #3f444c;
  border-radius: 8px;
  color: #fff;
  font-size: 16px;
  min-height: 120px;
  resize: vertical;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  &:focus {
    outline: none;
    border-color: #3182f6;
    box-shadow: 0 0 0 3px rgba(49, 130, 246, 0.2);
  }
  &::placeholder {
    color: #6b7280;
  }
`;

export const SubmitButton = styled.button`
  padding: 12px 24px;
  background: #3182f6;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;
  &:hover {
    background: #2563eb;
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(0);
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: #1a1d21;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 40px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  animation: ${fadeInUp} 0.5s ease-out 0.4s;
`;

export const Thead = styled.thead`
  background: #2a2e34;
`;

export const Th = styled.th`
  padding: 16px;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  color: #d1d5db;
  &:first-child {
    border-top-left-radius: 12px;
  }
  &:last-child {
    border-top-right-radius: 12px;
  }
`;

export const Tr = styled.tr`
  border-bottom: 1px solid #3f444c;
  &:hover {
    background: #2a2e34;
  }
`;

export const Td = styled.td`
  padding: 16px;
  font-size: 14px;
  color: #d1d5db;
  &.title {
    color: #fff;
    font-weight: 500;
  }
`;

export const Link = styled.a`
  color: #3182f6;
  text-decoration: none;
  transition: color 0.3s ease;
  &:hover {
    color: #2563eb;
    text-decoration: underline;
  }
`;

export const ActionButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;
  margin-right: 8px;
  &.edit {
    background: #22c55e;
    color: #fff;
    &:hover {
      background: #16a34a;
      transform: translateY(-2px);
    }
  }
  &.delete {
    background: #f04438;
    color: #fff;
    &:hover {
      background: #dc2626;
      transform: translateY(-2px);
    }
  }
`;

export const NoData = styled.p`
  color: #6b7280;
  font-size: 16px;
  text-align: center;
  padding: 24px;
  animation: ${fadeInUp} 0.5s ease-out;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: ${fadeInUp} 0.3s ease-out;
`;

export const ModalContent = styled.div`
  background: #1a1d21;
  padding: 24px;
  border-radius: 12px;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  animation: ${fadeInUp} 0.5s ease-out;
  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const ModalTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 16px;
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ModalButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

export const ModalButton = styled.button`
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;
  &.cancel {
    background: #4b5563;
    color: #fff;
    border: none;
    &:hover {
      background: #374151;
      transform: translateY(-2px);
    }
  }
  &.confirm {
    background: #3182f6;
    color: #fff;
    border: none;
    &:hover {
      background: #2563eb;
      transform: translateY(-2px);
    }
  }
`;
