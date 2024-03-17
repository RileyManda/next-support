import { useState, useEffect } from "react";
import {
  TextField,
  Stack,
  DetailsList,
  DetailsListLayoutMode,
  SelectionMode,
  PrimaryButton
} from "@fluentui/react";
import { useRouter } from "next/navigation";
import { MdEdit, MdRemoveRedEye } from "react-icons/md";

type Case = {
  title: string;
  description: string;
  status: string;
  createdAt: Date;
};

type Props = {
  initialCases: Case[];
};

const CaseList = ({ initialCases }: Props) => {
  const [cases, setCases] = useState<Case[]>(initialCases);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.location && window.location.pathname) {
        if (window.location.pathname === "/") {
          router.push("/home");
        }
      }
    }
  }, [router]);

  const handleCaseSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newCase: Case = {
      title,
      description,
      status: "open",
      createdAt: new Date(),
    };
    setCases([...cases, newCase]);
    setTitle("");
    setDescription("");
  };

  const handleCaseSelection = (caseData: Case) => {
    router.push(`/case/${encodeURIComponent(JSON.stringify(caseData))}`);
  };

  const columns = [
    { key: "column1", name: "Title", fieldName: "title", minWidth: 100 },
    {
      key: "column2",
      name: "Description",
      fieldName: "description",
      minWidth: 100,
    },
    { key: "column3", name: "Status", fieldName: "status", minWidth: 100 },
    {
      key: "column4",
      name: "Created At",
      fieldName: "createdAt",
      minWidth: 100,
      onRender: (item: Case) => item.createdAt.toDateString(),
    },
    {
      key: "column5",
      name: "Actions",
      minWidth: 100,
      onRender: (item: Case) => {
        return (
          <>
            <MdEdit
              style={{ cursor: "pointer" }}
              onClick={() => handleCaseSelection(item)}
            />
            <MdRemoveRedEye
              style={{ cursor: "pointer", marginLeft: "10px" }}
              onClick={() => handleCaseSelection(item)}
            />
          </>
        );
      },
    },
  ];

  return (
    <Stack horizontalAlign="center" tokens={{ childrenGap: 15 }}>
      <Stack styles={{ root: { width: "50%" } }}>
        <form onSubmit={handleCaseSubmit}>
          <Stack tokens={{ childrenGap: 10 }}>
            <TextField
              value={title}
              onChange={(e, newValue) => setTitle(newValue || "")}
              placeholder="Title"
              required
            />
            <TextField
              value={description}
              onChange={(e, newValue) => setDescription(newValue || "")}
              placeholder="Description"
              required
              multiline
              rows={3}
            />
            <PrimaryButton type="submit">Create Case</PrimaryButton>
          </Stack>
        </form>
      </Stack>
      <Stack styles={{ root: { width: "100%" } }}>
        <DetailsList
          items={cases}
          columns={columns}
          selectionMode={SelectionMode.none}
          layoutMode={DetailsListLayoutMode.fixedColumns}
        />
      </Stack>
    </Stack>
  );
};

export default CaseList;
