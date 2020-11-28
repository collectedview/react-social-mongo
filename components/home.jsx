/* Framework */
import React from "react";
import Head from "next/head";

/* Components */
import PostEditor from "@/components/post/editor";
import Posts from "@/components/post/posts";

import { useCurrentUser } from "@/hooks/index";

export default function Content() {
  const [user] = useCurrentUser();
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h4 className="text-center">
                Hello,
                {user ? user.username : "stranger"}
              </h4>
              <p className="lead text-center">
                Enter a spectral void below, what you think, what you saw, where
                you are, whichever you would like.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <PostEditor />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <Posts />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}