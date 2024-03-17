import { useRouter } from "next/router";

type Case = {
  title: string;
  description: string;
  status: string;
  createdAt: Date;
  comments: string[];
};

const CaseDetails = () => {
  const router = useRouter();
  const { caseId } = router.query;
  const caseData: Case = JSON.parse(
    decodeURIComponent(router.query.case as string)
  );

  return (
    <div>
      <h2>Case Details</h2>
      <p>Case ID: {caseId}</p>
      <p>Title: {caseData.title}</p>
      <p>Description: {caseData.description}</p>
      <p>Status: {caseData.status}</p>
      <p>Created At: {new Date(caseData.createdAt).toDateString()}</p>
      <p>Comments: {caseData.comments.join(", ")}</p>
    </div>
  );
};

export default CaseDetails;
