import React from "react"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import EmailIcon from "@mui/icons-material/Email"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Kai from "../images/KaiSchäfer.png"

const development = () => {
  return (
    <>
      <form
        method="post"
        action="https://getform.io/f/c6b3371f-1aa1-48c7-aeb4-6695ebbc2635"
      >
        <div className="flex flex-row">
          <div className="w-1/2 flex flex-col p-5 rounded-l-2x border-2 ml-2 bg-opacity-10 border-transparent">
            <h3>Schreibe mir gerne eine Nachicht :)</h3>
            <TextField className="mb-2" name="name" id="name" label="Name" />
            <TextField
              className="mb-2"
              required
              name="email"
              id="email"
              label="E-Mail"
            />
            <TextField
              className="mb-2"
              required
              name="message"
              id="message"
              label="Nachricht"
            />

            <Button type="submit" variant="contained">
              Senden
            </Button>
          </div>
          <div className="w-1/2 pl-1/2 rounded-r-2x border mr-2">
            <div className="flex flex-col">
              <div className="w-full flex align-center justify-center">
                <img className="mt-4 shadowImage" src={Kai}></img>
              </div>
              <h4 className="text-center">Kai Schäfer</h4>
              <p className="text-center">Freelancer (Webentwicklung)</p>
              <div className="w-full flex align-center justify-center">
                <a href="https://www.linkedin.com/in/kai-sch%C3%A4fer-674646222/">
                  <LinkedInIcon color="primary" />
                </a>
                <a href="mailto:kai30@web.de">
                  <EmailIcon color="primary" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default development
