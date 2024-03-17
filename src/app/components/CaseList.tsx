import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";

type Case = {
  title: string;
  description: string;
  status: string;
  createdAt: Date;
  comments: string[];
};

type Props = {
  initialCases: Case[];
};

const CaseList = ({ initialCases }: Props) => {
  const [cases, setCases] = useState<Case[]>(initialCases);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isClient, setIsClient] = useState(false);
  const defaultStatus = "open";

 const router = useRouter();
  useEffect(() => {
    setIsClient(typeof window === "object");
  }, []);

  const handleCaseSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newCase: Case = {
      title,
      description,
      status: defaultStatus,
      createdAt: new Date(),
      comments: [],
    };
    setCases([...cases, newCase]);
    setTitle("");
    setDescription("");
  };

  const handleCaseSelection = (caseData: Case) => {
    if (isClient) {
      const caseId = encodeURIComponent(JSON.stringify(caseData));
       router.push(`/case/${encodeURIComponent(caseId)}`);
    }
  };

  


  return (
    <div>
      <form onSubmit={handleCaseSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
        />
        <button type="submit">Create Case</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {cases.map((c, index) => (
            <tr key={index} onClick={() => handleCaseSelection(c)}>
              <td>{c.title}</td>
              <td>{c.description}</td>
              <td>{c.status}</td>
              <td>{c.createdAt.toDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CaseList;
