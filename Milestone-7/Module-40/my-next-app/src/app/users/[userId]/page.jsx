import { notFound } from "next/navigation";


const UsersDetailPage = async({params}) => {
    const {userId} = await params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const user = await res.json()

    console.log("show me userId",userId);

      if (!user || !user.id) {
    notFound();
  }
    return (
        <div>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user?.address?.street}</p>
        </div>
    );
};

export default UsersDetailPage;