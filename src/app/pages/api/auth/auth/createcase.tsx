import CaseList from "@/app/components/Cases";

type Case = {
  title: string;
  description: string;
  status: string;
  createdAt: Date;
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
