import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

export default function NotFound() {
  return (
    <Layout>
      <div className="w-full text-center">
        <p className="mb-3">Oops! Something you find didn't appear.</p>
        <p>
          Don't cry, back to{" "}
          <Link to="/" className="text-blue-600 hover:text-blue-800">
            home
          </Link>{" "}
          and tell your mom.
        </p>
      </div>
    </Layout>
  );
}
