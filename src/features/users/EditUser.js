import { useParams } from "react-router-dom";
import EditUserForm from "./EditUserForm.js";
import { useGetUsersQuery } from "./usersApiSlice";
import PulseLoader from "react-spinners/PulseLoader";

const EditUser = () => {
  const { id } = useParams();

  const { user } = useGetUsersQuery("usersList", {
    selectFromResult: ({ data }) => ({ user: data?.entities[id] }),
  });

  if (!user) {
    return <PulseLoader color="#FFF" loading={!user} />;
  }

  return <EditUserForm user={user} />;
};
export default EditUser;
