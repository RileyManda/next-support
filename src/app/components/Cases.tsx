import React, { useState } from "react";

type Case = {
  title: string;
  description: string;
  status: string;
};

type Props = {
  initialCases: Case[];
};

const CaseList = ({ initialCases }: Props) => {
  const [cases, setCases] = useState<Case[]>(initialCases);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Set default status to "open"
  const defaultStatus = "open";

  const handleCaseSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Create new case with default status
    const newCase: Case = { title, description, status: defaultStatus };
    setCases([...cases, newCase]);
    setTitle("");
    setDescription("");
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
            <tr key={index}>
              <td>{c.title}</td>
              <td>{c.description}</td>
              <td>{c.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CaseList;
