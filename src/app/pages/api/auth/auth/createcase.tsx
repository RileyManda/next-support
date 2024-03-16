import CaseList from "@/app/components/Cases";

type Case = {
  title: string;
  description: string;
  status: string;
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
