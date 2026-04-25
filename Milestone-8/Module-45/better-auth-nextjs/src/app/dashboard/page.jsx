import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const DashboardPage = async() => {
    const session = await auth.api.getSession({
        headers : await headers()
    })

    console.log("This is Dashing board", session);

    const user = session?.user;
    if(!user){
        redirect('/auth/signin');
        return <div>Please sign in t access the dashboard.</div>
    }

    return (
        <div>
            <h2>This is Dashing board</h2>
        </div>
    );
};

export default DashboardPage;