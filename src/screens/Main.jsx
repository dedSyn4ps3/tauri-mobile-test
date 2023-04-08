import { useState } from "react";
import Stack from "@mui/material/Stack";
import { MDBBtn } from "mdb-react-ui-kit";

import { invoke } from "@tauri-apps/api/tauri";

import "../App.css";

import Features from "../components/Features";

function Main() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div className="container" style={{marginBottom: '20%'}}>
      <div className="text-center">
        <h1 className="mb-3 header">Hello Tauri Mobile!</h1>
        <h5>A New Way to Create Mobile Apps</h5>
      </div>

      <div className="row">
        <a href="https://tauri.app" target="_blank">
          <img
            src="/tauri.svg"
            className="logo tauri"
            alt="Tauri logo"
            style={{ width: "150px", height: "150px" }}
          />
        </a>
      </div>

      <div className="row">
        <p>
          <b>Enter your name and let Rust say Hello!</b>
        </p>
      </div>

      <div className="row">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            greet();
          }}
        >
          <Stack spacing={2}>
            <input
              id="greet-input"
              onChange={(e) => setName(e.currentTarget.value)}
              placeholder="Enter a name..."
            />
            <div className="row">
              <MDBBtn
                className="mx-2"
                tag="input"
                type="submit"
                style={{ width: 185 }}
                value="Show Greeting"
              />
            </div>
          </Stack>
        </form>
      </div>

      <div className="row" style={{marginTop: 40}}>
        <p>{greetMsg}</p>
      </div>
      <Features />
    </div>
  );
}

export default Main;
