import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const ProjectAdmin = () => {
  const [project, setProject] = useState({
    title: "",
    description: "",
    tech: "",
    details: "",
    link: "",
    channel: "projects",
  });
  const [skill, setSkill] = useState({
    title: "",
    description: "",
    tech: "",
    channel: "skills",
  });

  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    if (!project.title.trim() || !project.description.trim()) return;

    try {
      await addDoc(collection(db, "portfolio"), {
        id: Date.now(),
        username: "Project Showcase",
        avatar: "📂",
        color: "#586 градусов:5f2",
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
      setProject({
        title: "",
        description: "",
        tech: "",
        details: "",
        link: "",
        channel: "projects",
      });
    } catch (error) {
      console.error("Error writing project: ", error);
    }
  };

  const handleSkillSubmit = async (e) => {
    e.preventDefault();
    if (!skill.title.trim() || !skill.description.trim()) return;

    try {
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
      setSkill({ title: "", description: "", tech: "", channel: "skills" });
    } catch (error) {
      console.error("Error writing skill: ", error);
    }
  };

  return (
    <div style={{ padding: 20, maxWidth: 800, margin: "0 auto" }}>
      <h1>포트폴리오 관리자 페이지</h1>

      <h2>프로젝트 추가</h2>
      <form onSubmit={handleProjectSubmit} style={{ marginBottom: 40 }}>
        <div style={{ marginBottom: 10 }}>
          <label>제목</label>
          <input
            type="text"
            placeholder="예: E-Commerce Platform"
            value={project.title}
            onChange={(e) => setProject({ ...project, title: e.target.value })}
            style={{ width: "100%", padding: 8, marginTop: 5 }}
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>설명</label>
          <input
            type="text"
            placeholder="예: 실시간 채팅 기능이 있는 쇼핑몰"
            value={project.description}
            onChange={(e) =>
              setProject({ ...project, description: e.target.value })
            }
            style={{ width: "100%", padding: 8, marginTop: 5 }}
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>기술 스택 (쉼표로 구분)</label>
          <input
            type="text"
            placeholder="예: React, Node.js, Firebase"
            value={project.tech}
            onChange={(e) => setProject({ ...project, tech: e.target.value })}
            style={{ width: "100%", padding: 8, marginTop: 5 }}
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>웹사이트 링크</label>
          <input
            type="url"
            placeholder="예: https://example.com"
            value={project.link}
            onChange={(e) => setProject({ ...project, link: e.target.value })}
            style={{ width: "100%", padding: 8, marginTop: 5 }}
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>상세 설명</label>
          <textarea
            placeholder="프로젝트 상세 설명"
            value={project.details}
            onChange={(e) =>
              setProject({ ...project, details: e.target.value })
            }
            style={{ width: "100%", padding: 8, marginTop: 5, minHeight: 100 }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: 10,
            background: "#5865f2",
            color: "#fff",
            border: "none",
          }}
        >
          프로젝트 저장
        </button>
      </form>

      <h2>스킬 추가</h2>
      <form onSubmit={handleSkillSubmit}>
        <div style={{ marginBottom: 10 }}>
          <label>제목</label>
          <input
            type="text"
            placeholder="예: Frontend Development"
            value={skill.title}
            onChange={(e) => setSkill({ ...skill, title: e.target.value })}
            style={{ width: "100%", padding: 8, marginTop: 5 }}
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>설명</label>
          <input
            type="text"
            placeholder="예: React와 Vue.js를 활용한 UI 개발"
            value={skill.description}
            onChange={(e) =>
              setSkill({ ...skill, description: e.target.value })
            }
            style={{ width: "100%", padding: 8, marginTop: 5 }}
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>기술 스택 (쉼표로 구분)</label>
          <input
            type="text"
            placeholder="예: React, Vue.js, TypeScript"
            value={skill.tech}
            onChange={(e) => setSkill({ ...skill, tech: e.target.value })}
            style={{ width: "100%", padding: 8, marginTop: 5 }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: 10,
            background: "#faa61a",
            color: "#fff",
            border: "none",
          }}
        >
          스킬 저장
        </button>
      </form>
    </div>
  );
};

export default ProjectAdmin;
