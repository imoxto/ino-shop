import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import Head from "next/head";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const userData = useUser();

  return (
    <>
      <Head>
        <title>InoShop</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col bg-[#15162c] text-white">
        {userData.isSignedIn ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <SignInButton>Sign In</SignInButton>
        )}
        <p className="text-2xl ">
          {hello.data ? hello.data.greeting : "Loading tRPC query..."}
        </p>
      </main>
    </>
  );
};

export default Home;
