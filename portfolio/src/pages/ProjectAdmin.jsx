import { useState, useEffect } from "react";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import {
  Container,
  Title,
  Subtitle,
  ErrorMessage,
  Form,
  FormGroup,
  Label,
  Input,
  Textarea,
  SubmitButton,
  Table,
  Thead,
  Th,
  Tr,
  Td,
  Link,
  ActionButton,
  NoData,
  ModalOverlay,
  ModalContent,
  ModalTitle,
  ModalForm,
  ModalButtonGroup,
  ModalButton,
} from "./ProjectAdminCss";

const ProjectAdmin = () => {
  const [project, setProject] = useState({
    id: null,
    title: "",
    description: "",
    tech: "",
    details: "",
    link: "",
    channel: "projects",
  });
  const [skill, setSkill] = useState({
    id: null,
    title: "",
    description: "",
    tech: "",
    channel: "skills",
  });
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [password, setPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalAction, setModalAction] = useState(null); // { type: "edit" | "delete", item: {...}, collection: "projects" | "skills" }
  const [error, setError] = useState("");

  // Firestore에서 프로젝트와 스킬 데이터 가져오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        // 프로젝트 가져오기
        const projectQuery = query(
          collection(db, "portfolio"),
          where("channel", "==", "projects")
        );
        const projectSnapshot = await getDocs(projectQuery);
        const projectData = projectSnapshot.docs.map((doc) => ({
          docId: doc.id,
          ...doc.data(),
        }));
        setProjects(projectData);

        // 스킬 가져오기
        const skillQuery = query(
          collection(db, "portfolio"),
          where("channel", "==", "skills")
        );
        const skillSnapshot = await getDocs(skillQuery);
        const skillData = skillSnapshot.docs.map((doc) => ({
          docId: doc.id,
          ...doc.data(),
        }));
        setSkills(skillData);
      } catch (err) {
        console.error("Error fetching data: ", err);
        setError("데이터를 불러오지 못했습니다.");
      }
    };
    fetchData();
  }, []);

  // 프로젝트 추가/수정
  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    if (!project.title.trim() || !project.description.trim()) {
      setError("제목과 설명은 필수입니다.");
      return;
    }

    try {
      if (project.id) {
        // 수정
        await updateDoc(doc(db, "portfolio", project.docId), {
          content: {
            title: project.title,
            description: project.description,
            tech: project.tech.split(",").map((item) => item.trim()),
            details: project.details,
            link: project.link,
            likes: project.content?.likes || 0,
          },
          timestamp: new Date().toLocaleString("ko-KR", {
            hour: "2-digit",
            minute: "2-digit",
          }),
        });
        alert("프로젝트 수정 완료!");
      } else {
        // 추가
        await addDoc(collection(db, "portfolio"), {
          id: Date.now(),
          username: "Project Showcase",
          avatar: "📂",
          color: "#5865f2",
          timestamp: new Date().toLocaleString("ko-KR", {
            hour: "2-digit",
            minute: "2-digit",
          }),
          content: {
            title: project.title,
            description: project.description,
            tech: project.tech.split(",").map((item) => item.trim()),
            details: project.details,
            link: project.link,
            likes: 0,
          },
          channel: project.channel,
        });
        alert("프로젝트 저장 완료!");
      }
      setProject({
        id: null,
        title: "",
        description: "",
        tech: "",
        details: "",
        link: "",
        channel: "projects",
      });
      // 데이터 새로고침
      const projectQuery = query(
        collection(db, "portfolio"),
        where("channel", "==", "projects")
      );
      const projectSnapshot = await getDocs(projectQuery);
      setProjects(
        projectSnapshot.docs.map((doc) => ({ docId: doc.id, ...doc.data() }))
      );
    } catch (error) {
      console.error("Error writing project: ", error);
      setError("프로젝트 저장/수정에 실패했습니다.");
    }
  };

  // 스킬 추가/수정
  const handleSkillSubmit = async (e) => {
    e.preventDefault();
    if (!skill.title.trim() || !skill.description.trim()) {
      setError("제목과 설명은 필수입니다.");
      return;
    }

    try {
      if (skill.id) {
        // 수정
        await updateDoc(doc(db, "portfolio", skill.docId), {
          content: {
            title: skill.title,
            description: skill.description,
            tech: skill.tech.split(",").map((item) => item.trim()),
          },
          timestamp: new Date().toLocaleString("ko-KR", {
            hour: "2-digit",
            minute: "2-digit",
          }),
        });
        alert("스킬 수정 완료!");
      } else {
        // 추가
        await addDoc(collection(db, "portfolio"), {
          id: Date.now(),
          username: "Skills Bot",
          avatar: "🤖",
          color: "#faa61a",
          timestamp: new Date().toLocaleString("ko-KR", {
            hour: "2-digit",
            minute: "2-digit",
          }),
          content: {
            title: skill.title,
            description: skill.description,
            tech: skill.tech.split(",").map((item) => item.trim()),
          },
          channel: skill.channel,
        });
        alert("스킬 저장 완료!");
      }
      setSkill({
        id: null,
        title: "",
        description: "",
        tech: "",
        channel: "skills",
      });
      // 데이터 새로고침
      const skillQuery = query(
        collection(db, "portfolio"),
        where("channel", "==", "skills")
      );
      const skillSnapshot = await getDocs(skillQuery);
      setSkills(
        skillSnapshot.docs.map((doc) => ({ docId: doc.id, ...doc.data() }))
      );
    } catch (error) {
      console.error("Error writing skill: ", error);
      setError("스킬 저장/수정에 실패했습니다.");
    }
  };

  // 수정 버튼 클릭
  const handleEdit = (item, collection) => {
    setModalAction({ type: "edit", item, collection });
    setIsModalOpen(true);
  };

  // 삭제 버튼 클릭
  const handleDelete = (item, collection) => {
    setModalAction({ type: "delete", item, collection });
    setIsModalOpen(true);
  };

  // 비밀번호 검증 및 작업 실행
  const handleModalSubmit = async (e) => {
    e.preventDefault();
    if (password !== "alves") {
      setError("비밀번호가 틀렸습니다.");
      return;
    }

    try {
      if (modalAction.type === "edit") {
        if (modalAction.collection === "projects") {
          setProject({
            id: modalAction.item.id,
            docId: modalAction.item.docId,
            title: modalAction.item.content.title,
            description: modalAction.item.content.description,
            tech: modalAction.item.content.tech.join(", "),
            details: modalAction.item.content.details || "",
            link: modalAction.item.content.link || "",
            channel: "projects",
          });
        } else {
          setSkill({
            id: modalAction.item.id,
            docId: modalAction.item.docId,
            title: modalAction.item.content.title,
            description: modalAction.item.content.description,
            tech: modalAction.item.content.tech.join(", "),
            channel: "skills",
          });
        }
      } else if (modalAction.type === "delete") {
        await deleteDoc(doc(db, "portfolio", modalAction.item.docId));
        alert("삭제 완료!");
        // 데이터 새로고침
        if (modalAction.collection === "projects") {
          const projectQuery = query(
            collection(db, "portfolio"),
            where("channel", "==", "projects")
          );
          const projectSnapshot = await getDocs(projectQuery);
          setProjects(
            projectSnapshot.docs.map((doc) => ({
              docId: doc.id,
              ...doc.data(),
            }))
          );
        } else {
          const skillQuery = query(
            collection(db, "portfolio"),
            where("channel", "==", "skills")
          );
          const skillSnapshot = await getDocs(skillQuery);
          setSkills(
            skillSnapshot.docs.map((doc) => ({ docId: doc.id, ...doc.data() }))
          );
        }
      }
      setIsModalOpen(false);
      setPassword("");
      setError("");
    } catch (error) {
      console.error("Error performing action: ", error);
      setError("작업에 실패했습니다.");
    }
  };

  return (
    <Container>
      <Title>포트폴리오 관리자 페이지</Title>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      {/* 프로젝트 추가/수정 폼 */}
      <Subtitle>프로젝트 추가/수정</Subtitle>
      <Form onSubmit={handleProjectSubmit}>
        <FormGroup>
          <Label>제목</Label>
          <Input
            type="text"
            placeholder="예: E-Commerce Platform"
            value={project.title}
            onChange={(e) => setProject({ ...project, title: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label>설명</Label>
          <Input
            type="text"
            placeholder="예: 실시간 채팅 기능이 있는 쇼핑몰"
            value={project.description}
            onChange={(e) =>
              setProject({ ...project, description: e.target.value })
            }
          />
        </FormGroup>
        <FormGroup>
          <Label>기술 스택 (쉼표로 구분)</Label>
          <Input
            type="text"
            placeholder="예: React, Node.js, Firebase"
            value={project.tech}
            onChange={(e) => setProject({ ...project, tech: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label>웹사이트 링크</Label>
          <Input
            type="url"
            placeholder="예: https://example.com"
            value={project.link}
            onChange={(e) => setProject({ ...project, link: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label>상세 설명</Label>
          <Textarea
            placeholder="프로젝트 상세 설명"
            value={project.details}
            onChange={(e) =>
              setProject({ ...project, details: e.target.value })
            }
          />
        </FormGroup>
        <SubmitButton type="submit">
          {project.id ? "프로젝트 수정" : "프로젝트 저장"}
        </SubmitButton>
      </Form>

      {/* 스킬 추가/수정 폼 */}
      <Subtitle>스킬 추가/수정</Subtitle>
      <Form onSubmit={handleSkillSubmit}>
        <FormGroup>
          <Label>제목</Label>
          <Input
            type="text"
            placeholder="예: Frontend Development"
            value={skill.title}
            onChange={(e) => setSkill({ ...skill, title: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label>설명</Label>
          <Input
            type="text"
            placeholder="예: React와 Vue.js를 활용한 UI 개발"
            value={skill.description}
            onChange={(e) =>
              setSkill({ ...skill, description: e.target.value })
            }
          />
        </FormGroup>
        <FormGroup>
          <Label>기술 스택 (쉼표로 구분)</Label>
          <Input
            type="text"
            placeholder="예: React, Vue.js, TypeScript"
            value={skill.tech}
            onChange={(e) => setSkill({ ...skill, tech: e.target.value })}
          />
        </FormGroup>
        <SubmitButton type="submit">
          {skill.id ? "스킬 수정" : "스킬 저장"}
        </SubmitButton>
      </Form>

      {/* 저장된 프로젝트 목록 */}
      <Subtitle>저장된 프로젝트</Subtitle>
      {projects.length > 0 ? (
        <Table>
          <Thead>
            <Tr>
              <Th>제목</Th>
              <Th>설명</Th>
              <Th>기술 스택</Th>
              <Th>링크</Th>
              <Th>상세 설명</Th>
              <Th>작업</Th>
            </Tr>
          </Thead>
          <tbody>
            {projects.map((proj) => (
              <Tr key={proj.docId}>
                <Td className="title">{proj.content.title}</Td>
                <Td>{proj.content.description}</Td>
                <Td>{proj.content.tech.join(", ")}</Td>
                <Td>
                  {proj.content.link ? (
                    <Link
                      href={proj.content.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      링크
                    </Link>
                  ) : (
                    "-"
                  )}
                </Td>
                <Td>{proj.content.details || "-"}</Td>
                <Td>
                  <ActionButton
                    className="edit"
                    onClick={() => handleEdit(proj, "projects")}
                  >
                    수정
                  </ActionButton>
                  <ActionButton
                    className="delete"
                    onClick={() => handleDelete(proj, "projects")}
                  >
                    삭제
                  </ActionButton>
                </Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <NoData>저장된 프로젝트가 없습니다.</NoData>
      )}

      {/* 저장된 스킬 목록 */}
      <Subtitle>저장된 스킬</Subtitle>
      {skills.length > 0 ? (
        <Table>
          <Thead>
            <Tr>
              <Th>제목</Th>
              <Th>설명</Th>
              <Th>기술 스택</Th>
              <Th>작업</Th>
            </Tr>
          </Thead>
          <tbody>
            {skills.map((sk) => (
              <Tr key={sk.docId}>
                <Td className="title">{sk.content.title}</Td>
                <Td>{sk.content.description}</Td>
                <Td>{sk.content.tech.join(", ")}</Td>
                <Td>
                  <ActionButton
                    className="edit"
                    onClick={() => handleEdit(sk, "skills")}
                  >
                    수정
                  </ActionButton>
                  <ActionButton
                    className="delete"
                    onClick={() => handleDelete(sk, "skills")}
                  >
                    삭제
                  </ActionButton>
                </Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <NoData>저장된 스킬이 없습니다.</NoData>
      )}

      {/* 비밀번호 입력 모달 */}
      {isModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <ModalTitle>
              {modalAction.type === "edit"
                ? "수정 권한 확인"
                : "삭제 권한 확인"}
            </ModalTitle>
            <ModalForm onSubmit={handleModalSubmit}>
              <FormGroup>
                <Label>비밀번호</Label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="비밀번호 입력"
                />
              </FormGroup>
              {error && <ErrorMessage>{error}</ErrorMessage>}
              <ModalButtonGroup>
                <ModalButton
                  className="cancel"
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false);
                    setPassword("");
                    setError("");
                  }}
                >
                  취소
                </ModalButton>
                <ModalButton className="confirm" type="submit">
                  확인
                </ModalButton>
              </ModalButtonGroup>
            </ModalForm>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default ProjectAdmin;
