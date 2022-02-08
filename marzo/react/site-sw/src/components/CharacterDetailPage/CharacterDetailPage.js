import { useNavigate } from "react-router";




function CharacterDetailPage() {

  const navigation = useNavigate()

  return (
    <div>
      <h1>Character Detail Page</h1>
      <button onCLick={() => navigation('/characterlist')}>Back</button>
    </div>
  );
}

export default CharacterDetailPage;