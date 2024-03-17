import CaseList from "@/app/components/CaseList";

type Case = {
  title: string;
  description: string;
  status: string;
  createdAt: Date;
  comments: string[];
};

const CreateCasePage = () => {
  const initialCases: Case[] = [];
  return (
    <div>
      <CaseList initialCases={initialCases} />
    </div>
  );
};

export default CreateCasePage;
