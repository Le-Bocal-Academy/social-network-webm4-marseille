import { useParams } from "react-router-dom";

function Profile() {
  const params = useParams();

  return (
    <div>
      <h1>Profile {params.id}</h1>
    </div>
  )
}

export default Profile;