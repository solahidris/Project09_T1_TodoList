import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
      className="px-5 py-2 mt-10 mb-3 bg-slate-100/90 hover:bg-slate-200 rounded font-mono text-xs font-bold flex"
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
