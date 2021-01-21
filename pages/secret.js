import { useState, useEffect } from "react";
import { useSession } from "next-auth/client";

export default function Secret() {
  const [session, loading] = useSession();
  const [content, setContent] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/secret");
      const data = res.json();

      if (data.content) {
        setContent(data.content);
      } else {
        setContent(data.error);
      }
    };
    fetchData();
  }, [session]);

  if (typeof window !== "undefined" && loading) return null;

  if (!session) {
    return (
      <main>
        <div>
          <h1>You are not signed in, Access Denied.</h1>
        </div>
      </main>
    )
  }

  return(
    <main>
      <div>
        <h1>Protected Page</h1>
        <p>{content}</p>
      </div>
    </main>
  )
}
