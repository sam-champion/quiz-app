import { useSearchParams } from "react-router";
import CustomMode from "./CustomMode";
import ChallengeMode from "./ChallengeMode";
import NotFound404 from "./NotFound404";

const Quiz = () => {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode");

  if (mode === "challenge") {
    return <ChallengeMode />;
  } else if (mode === "custom") {
    return <CustomMode />;
  } else {
    return <NotFound404 />;
  }
};

export default Quiz;
