/* Framework */
import React from "react";
import Link from "next/link";

/* SVG */
import Brand from "../public/archtyped.svg";

import { useCurrentUser } from "@/hooks/index";

export default function Layout({ children }) {
  const [user, { mutate }] = useCurrentUser();
  const handleLogout = async () => {
    await fetch("/api/auth", {
      method: "DELETE",
    });
    mutate(null);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg navbar-light navigation navigation-one">
              <Link href="/">
                <a className="navbar-brand">
                  <Brand />
                </a>
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarText"
                aria-controls="navbarText"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="/">
                      Home
                      <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Pricing
                    </a>
                  </li>
                </ul>
                <span className="navbar-text social">
                  {!user ? (
                    <>
                      <ul>
                        <li>
                          <Link href="/login">
                            <a>Sign in</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/signup">
                            <a>Sign up</a>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : (
                    <>
                      <ul>
                        <li>
                          <Link href={`/user/${user._id}`}>
                            <a>Profile</a>
                          </Link>
                        </li>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <li>
                          <a tabIndex={0} role="button" onClick={handleLogout}>
                            Logout
                          </a>
                        </li>
                      </ul>
                    </>
                  )}
                </span>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <main>{children}</main>
    </>
  );
}
